<?php

namespace App\Controller;

use App\Entity\Users;
use App\Repository\UsersRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class CourseController extends AbstractController
{
    #[Route('/add-course', name: 'add_course')]
    public function addCourse(Request $request, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser(); // obtenir l'utilisateur connecté

        if ($user->getRole() !== 1) {  // Vérifie si l'utilisateur est un administrateur
            return $this->json(['message' => 'Accès refusé'], 403);
        }

        $data = json_decode($request->getContent(), true);
        $title = $data['title'];
        $content = $data['content'];
        $chapter = $data['chapter'];
        $category = $data['category'];
        $youtubeLink = $data['youtube_link'];

        // Création et sauvegarde du cours
        $course = new Course();
        $course->setTitle($title);
        $course->setContent($content);
        $course->setChapter($chapter);
        $course->setCategory($category);
        $course->setYoutubeLink($youtubeLink);

        $entityManager->persist($course);
        $entityManager->flush();

        return $this->json(['message' => 'Cours ajouté avec succès'], 201);
    }
}
