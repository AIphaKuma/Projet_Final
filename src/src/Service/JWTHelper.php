<?php
namespace App\Service;

use Firebase\JWT\JWT;
use App\Entity\Users;

class JWTHelper {
    private $key;
    private $backendUrl;
    private $frontendUrl;

    public function __construct($key, $backendUrl, $frontendUrl){
        $this->key = $key;
        $this->backendUrl = $backendUrl;
        $this->frontendUrl = $frontendUrl;
    }

    public function createToken(Users $users): string {
    $payload = [
        'iss' => $this -> backendUrl,  // émetteur
        'aud' => $this -> frontendUrl,  // auditoire
        'iat' => time(),                  // quand le JWT a été émis
        'nbf' => time(),                  // avant ce moment, le JWT ne sera pas accepté
        'exp' => time() + 10800,           // expire après 1 heure
        'data' => [                       // les données que vous souhaitez inclure dans le JWT
            'id' => $users->getId(),
            'username' => $users->getUsername(),
        ]
    ];



    return JWT::encode($payload, $this->key, 'HS256');
    }
}
