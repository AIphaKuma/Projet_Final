<?php

namespace App\Controller;

use App\Entity\Masterclass;
use App\Repository\MasterclassRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;

class MasterclassController extends AbstractController
{
    private $masterclassRepository;

    public function __construct(JWTTokenManagerInterface $jwtManager, MasterclassRepository $masterclassRepository)
    {
        $this->jwtManager = $jwtManager;
        $this->masterclassRepository = $masterclassRepository;
    }

    #[Route('/masterclass/{id}', name: 'get_masterclass')]
    public function getMasterclass(int $id): Response
    {
        $masterclass = $this->masterclassRepository->find($id);

        if (!$masterclass) {
            return $this->json(['message' => 'Masterclass not found'], 404);
        }

        return $this->json([
            'name' => $masterclass->getName(),
            'category' => $masterclass->getCategory(),
            'chapter' => $masterclass->getChapter(),
            'duration' => $masterclass->getDuration(),
            'videos' => $masterclass->getVideos(),
            'comment' => $masterclass->getComment(),
            'created_at' => $masterclass->getCreatedAt(),
            'created_by' => $masterclass->getCreatedBy(),
        ]);
    }
     #[Route('/masterclass', name: 'get_allmasterclass')]
        public function getAllMasterclass(): Response
        {
            $masterclasses = $this->masterclassRepository->findAll();

            if (!$masterclasses) {
                return $this->json(['message' => 'Masterclass not found'], 404);
            }

            $results = [];
            foreach ($masterclasses as $masterclass)
             {
             $results[]=[

                 'name' => $masterclass->getName(),
                 'category' => $masterclass->getCategory(),
                 'chapter' => $masterclass->getChapter(),
                 'duration' => $masterclass->getDuration(),
                 'videos' => $masterclass->getVideos(),
                 'comment' => $masterclass->getComment(),
                 'created_at' => $masterclass->getCreatedAt(),
                 'created_by' => $masterclass->getCreatedBy(),
             ];
             }
             return $this->json($results);

        }
}