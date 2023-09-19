<?php

namespace App\Controller;

use App\Entity\Users;
use App\Repository\UsersRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use App\Service\JWTHelper;

class SecurityController extends AbstractController
{
    private UserPasswordHasherInterface $passwordEncoder;
    private UsersRepository $userRepository;
    private JWTHelper $jwtHelper;

    public function __construct(
        UserPasswordHasherInterface $passwordEncoder,
        UsersRepository $userRepository,
        JWTHelper $jwtHelper )
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->userRepository = $userRepository;
        $this -> jwtHelper = $jwtHelper;
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
            return $this->json(['message' => 'Username ou Mot de passe incorrect'], 401);
        }

        // Utilisez JWTHelper pour créer le token
        $token = $this->jwtHelper->createToken($user);
        $response = new Response();
        $response->headers->setCookie(
            new Cookie(
                "token",       // Nom du cookie
                $token,        // Valeur du cookie
                new \DateTime('+1 day'), // Date d'expiration
                "/",           // Chemin
                'localhost',   // Domaine
                false,         // Sécurisé (utilisez true si vous êtes en HTTPS)
                true,          // httpOnly
                false,
                Cookie::SAMESITE_LAX,
            )
        );
        $createdCookieValue = $response->headers->getCookies()[0]->getValue();
        $roleName = $user->getRole()->getName();


        $response->setContent(json_encode([
            'message' => 'Connexion réussie',
            'token' => $token,
            'cookie_value' => $createdCookieValue,
            'user' => [
                'username' => $user->getUsername(),
                'role' => $roleName,
            ]
        ]));

        return $response;
    }

    #[Route('/register', name:'register')]
    public function register(Request $request,
                            EntityManagerInterface $entityManager): Response
    {
        $data = json_decode($request->getContent(), true);
        $username = $data['username'] ?? '';
        $password = $data['password'] ?? '';
        $firstName = $data['first_name'] ?? '';
        $lastName = $data['last_name'] ?? '';
        $address = $data['address'] ?? '';
        $country = $data['country'] ?? '';
        $phoneNumber = $data['phone_number'] ?? null;
        $email = $data['mail'] ?? '';
        $role = 2;

        // Vérifie si l'utilisateur existe déjà
        $existingUser = $this->userRepository->findOneBy(['username' => $username]);

        if ($existingUser) {
            return $this->json(['message' => 'Utilisateur déjà existant'], 400);
        }

        $user = new Users();
        $user->setUsername($username);
        $user->setPassword($this->passwordEncoder->hashPassword($user, $password));
        $user->setFirstName($firstName);
        $user->setLastName($lastName);
        $user->setAddress($address);
        $user->setCountry($country);
        $user->setPhoneNumber($phoneNumber);
        $user->setMail($email);
        $user->setRole($role);
        $user->setCreatedAt(new \DateTimeImmutable());

        $entityManager->persist($user);
        $entityManager->flush();



        return $this->json([
            'message' => 'Création de compte Réussie',
            'user' => [
                'username' => $user->getUsername(),
                'role' => $user->getRole(),
            ]
        ], 201);
    }

    // Marche pas encore à fix
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
