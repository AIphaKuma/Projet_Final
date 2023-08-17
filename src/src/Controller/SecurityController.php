<?php

namespace App\Controller;

use App\Entity\Users;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
class SecurityController extends AbstractController
{
    private JWTTokenManagerInterface $jwtManager;
    private UserPasswordHasherInterface $passwordEncoder;

    public function __construct(JWTTokenManagerInterface $jwtManager, UserPasswordHasherInterface $passwordEncoder)
    {
        $this->jwtManager = $jwtManager;
        $this->passwordEncoder = $passwordEncoder;
    }

    /**
     * @Route("/login", name="login", methods={"POST"})
     */
    public function login(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        $username = $data['username'] ?? '';
        $password = $data['password'] ?? '';

        // Récupérez l'utilisateur avec le nom d'utilisateur fourni
        $user = $this->getDoctrine()->getRepository(Users::class)->findOneBy(['username' => $username]);

        if (!$user || !$this->isPasswordValid($user, $password)) {
            return $this->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $this->jwtManager->create($user);

        $response = new Response();
        $response->headers->setCookie(new Cookie(
            'AUTH_TOKEN',
            $token,
            (new \DateTime())->modify('+1 day'),
            '/',
            null,
            true,
            true
        ));
        return $this->json(['message' => 'Connexion réussie'], 200, [], $response->headers->all());
    }

    private function isPasswordValid(Users $user, string $rawPassword): bool
    {
        return $this->passwordEncoder->isPasswordValid($user, $rawPassword);
    }
}
