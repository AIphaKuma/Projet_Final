<?php

namespace App\Controller;

use App\Entity\Lessons;
use App\Entity\Videos;
use App\Repository\LessonsRepository;
use App\Repository\VideosRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class LessonsController extends AbstractController
{
    private $lessonRepository;
    private $videoRepository;

    public function __construct(LessonsRepository $lessonRepository, VideosRepository $videoRepository)
    {
        $this->lessonRepository = $lessonRepository;
        $this->videoRepository = $videoRepository;
    }

    #[Route('/lesson/{id}', name: 'get_lesson')]
    public function getLesson(int $id): Response
    {
        $lesson = $this->lessonRepository->find($id);

        if (!$lesson) {
            return $this->json(['message' => 'Lesson not found'], 404);
        }
        return $this->json($this->transformLesson($lesson));
    }

    #[Route('/lesson', name: 'get_all_lessons')]
    public function getAllLessons(): Response
    {
        $lessons = $this->lessonRepository->findAll();
        $results = array_map([$this, 'transformLesson'], $lessons);

        return $this->json($results);
    }

    #[Route('/add-lesson', name: 'add_lesson')]
    public function addLesson(Request $request, EntityManagerInterface $em): Response
    {
        $data = json_decode($request->getContent(), true);
        $user = $this->getUser();

        // Vérifiez que les données nécessaires sont présentes
        if (!isset($data['name']) || !isset($data['videos'])) {
            return $this->json(['message' => 'Invalid data'], 400);
        }

        $video = $em->getRepository(Videos::class)->find($data['videos']);
        if (!$video) {
            return $this->json(['message' => 'Video not found'], 404);
        }

        if (!$user instanceof UserInterface) {
            return $this->json(['message' => 'No user connected.'], Response::HTTP_FORBIDDEN);
        }

        $lesson = new Lesson();
        $lesson->setName($data['name']);
        $lesson->setVideo($video); // assuming video is a ManyToOne relation in Lesson entity
        $lesson->setMusicSheet($data['music_sheet'] ?? null);
        $lesson->setCreatedAt(new \DateTimeImmutable());
        $lesson->setCreatedBy($this->getUser());

        $em->persist($lesson);
        $em->flush();

        return $this->json(['message' => 'Lesson added successfully', 'id' => $lesson->getId()]);
    }

    private function transformLesson(Lessons $lesson): array
    {
        return [
            'id' => $lesson->getId(),
            'name' => $lesson->getName(),
            'video' => $lesson->getVideos()->getLink(),
            'music_sheet' => $lesson->getMusicSheet(),
            'created_at' => $lesson->getCreatedAt() ? $lesson->getCreatedAt()->format('Y-m-d H:i:s') : null,
            'created_by' => $lesson->getCreatedBy() ? $lesson->getCreatedBy()->getUsername() : null // assuming created_by is a User entity with a getUsername method. Check for null in case it's not set.
        ];
    }
}
