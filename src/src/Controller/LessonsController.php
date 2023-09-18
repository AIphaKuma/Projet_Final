<?php

namespace App\Controller;

use App\Entity\Lessons;
use App\Entity\Masterclass;
use App\Entity\MusicSheet;
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
    private $lessonsRepository;
    private $videosRepository;

    public function __construct(LessonsRepository $lessonsRepository, VideosRepository $videosRepository)
    {
        $this->lessonsRepository = $lessonsRepository;
        $this->videosRepository = $videosRepository;
    }
    #[Route('/get-lessons/{masterclassId}', name: 'get_lessons_by_masterclass_id')]
    public function getLessonsByMasterclass($masterclassId, EntityManagerInterface $em): Response
        {
            $masterclass = $em->getRepository(Masterclass::class)->find($masterclassId);

            if (!$masterclass) {
                return $this->json(['message' => 'Masterclass non trouvée'], 404);
            }

            $lessons = $em->getRepository(Lessons::class)->findBy(
                ['masterclass' => $masterclass],
                ['Chapter' => 'ASC'] // Tri par numéro de chapitre en ordre croissant
            );

            $lessonsArray = [];
            foreach ($lessons as $lesson) {
                $lessonsArray[] = [
                    'id' => $lesson->getId(),
                    'name' => $lesson->getName(),
                    'Chapter' => $lesson->getChapter()
                ];
            }

            return $this->json(['lessons' => $lessonsArray]);
        }

   #[Route('/lessons/{lessonId}', name: 'get_lessons_by_masterclass')]
   public function getLessons($lessonId, EntityManagerInterface $em): Response
    {
        $lesson = $em->getRepository(Lessons::class)->find($lessonId);

        if (!$lesson) {
            return $this->json(['message' => 'Masterclass non trouvée'], 404);
        }
        return $this->json($this->transformLesson($lesson));

    }

    #[Route('/add-lessons', name: 'add_lessons')]
    public function addLessons(Request $request, EntityManagerInterface $em): Response
    {
        $data = json_decode($request->getContent(), true);
        $user = $this->getUser();

        if (!$data || !is_array($data)) {
            return $this->json(['message' => 'Données invalides'], 400);
        }

        $createdLessonIds = [];

        //Boucle sur les données envoyées
        foreach ($data as $lessonData) {
            if (!isset($lessonData['name']) || !isset($lessonData['videos']) || !isset($lessonData['masterclass_id'])) {
                continue; // Ignore this lesson, or you can also return an error.
            }

            //Recuperation des entités liées à la leçon
            $video = $em->getRepository(Videos::class)->find($lessonData['videos']);
            $masterclass = $em->getRepository(Masterclass::class)->find($lessonData['masterclass_id']);
            $musicSheetId = $lessonData['music_sheet_id'];
            $musicSheet = $em->getRepository(MusicSheet::class)->find($musicSheetId);

            //Recuperation du dernier chapitre de la masterclass
            $lastLesson = $this->lessonsRepository->findOneBy(['masterclass' => $masterclass], ['Chapter' => 'DESC']);
            $currentChapterNumber = $lastLesson ? $lastLesson->getChapter() + 1 : 1;

            // Gestion d'erreur a faire
            if (!$video || !$masterclass || !$musicSheet ) {
                continue; 
            }


            //Création de la leçon
            $lesson = new Lessons();
            $lesson->setName($lessonData['name']);
            $lesson->setVideos($video);
            $lesson->setMusicSheet($musicSheet);
            $lesson->setCreatedAt(new \DateTimeImmutable());
            $lesson->setCreatedBy($user);
            $lesson->setMasterclass($masterclass);
            $lesson->setChapter($currentChapterNumber);
            $lesson->setContent($lessonData['content']);

            //Ajout de la leçon à la masterclass
            $em->persist($lesson);
            $createdLessonIds[] = $lesson->getId();
        }

        $em->flush();

        return $this->json(['message' => 'Leçons ajoutées', 'created_ids' => $createdLessonIds]);
    }

    private function transformLesson(Lessons $lesson): array
    {
        return [
            'id' => $lesson->getId(),
            'name' => $lesson->getName(),
            'video' => $lesson->getVideos()->getLink(),
            'music_sheet' => $lesson->getMusicSheet()->getPath(),
            'chapter' => $lesson->getChapter(),
            'content' => $lesson->getContent(),
            'created_at' => $lesson->getCreatedAt() ? $lesson->getCreatedAt()->format('Y-m-d H:i:s') : null,
            'created_by' => $lesson->getCreatedBy() ? $lesson->getCreatedBy()->getUsername() : null // assuming created_by is a User entity with a getUsername method. Check for null in case it's not set.
        ];
    }
}




