<?php

namespace App\Controller;

use App\Entity\Users;
use App\Repository\UsersRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class SecurityController extends AbstractController
{
    private JWTTokenManagerInterface $jwtManager;
    private UserPasswordHasherInterface $passwordEncoder;
    private UsersRepository $userRepository;

    public function __construct(JWTTokenManagerInterface $jwtManager, UserPasswordHasherInterface $passwordEncoder, UsersRepository $userRepository)
    {
        $this->jwtManager = $jwtManager;
        $this->passwordEncoder = $passwordEncoder;
        $this->userRepository = $userRepository;
    }

    #[Route('/login', name: 'login')]
    public function login(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        $username = $data['username'] ?? '';
        $password = $data['password'] ?? '';

        // Récupérez l'utilisateur avec le nom d'utilisateur fourni
        $user = $this->userRepository->findOneBy(['username' => $username]);

        if (!$user || !$this->isPasswordValid($user, $password)) {
            return $this->json(['message' => 'Invalid credentials'], 401);
        }

        //$this->jwtManager->create($user); // Crée le token. Lexik s'occupe du reste.
        $token = $this->jwtManager->create($user);
        return $this->json([
            'message' => 'Connexion réussie',
            'token' => $token,
            'user' => [
                'username' => $user->getUsername(),
                'role' => $user->getRole(),
       ]
            ],200);

    }

    #[Route('/logout', name: 'logout')]
    public function logout(): Response
    {
        $response = new Response();
        $response->headers->clearCookie('token');
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }


    private function isPasswordValid(Users $user, string $rawPassword): bool
    {
        return $this->passwordEncoder->isPasswordValid($user, $rawPassword);
    }
}
