<?php
namespace App\Service;

use Firebase\JWT\JWT;
use App\Entity\Users;
use Doctrine\ORM\EntityManagerInterface;
use Firebase\JWT\Key;

class JWTHelper {
    private $key;
    private $em;
    private $backendUrl;
    private $frontendUrl;

    public function __construct($key,  EntityManagerInterface $em,  $backendUrl, $frontendUrl){
        $this->key = $key;
        $this->em = $em;
        $this->backendUrl = $backendUrl;
        $this->frontendUrl = $frontendUrl;
    }

    public function createToken(Users $users): string {
    $payload = [
        'iss' => $this -> backendUrl,  // émetteur
        'aud' => $this -> frontendUrl,  // auditoire
        'iat' => time(),                  // quand le JWT a été émis
        'nbf' => time(),                  // avant ce moment, le JWT ne sera pas accepté
        'exp' => time() + 86400,           // expire après 1 heure
        'data' => [                       // les données que vous souhaitez inclure dans le JWT
            'id' => $users->getId(),
            'username' => $users->getUsername(),
        ]
    ];
    return JWT::encode($payload, $this->key, 'HS256');
    }

    public function decode(string $token)
    {
        return JWT::decode($token, new Key($this->key, 'HS256'));
    }

    public function getUserFromToken(string $token)
    {
        $decoded = $this->decode($token);
        $username = $decoded->username;

        $userRepository = $this->em->getRepository(Users::class);
        return $userRepository->findOneBy(['username' => $username]);
    }


}
