<?php

namespace App\Controller;

use App\Entity\Masterclass;
use App\Repository\MasterclassRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class MasterclassController extends AbstractController
{
    private $masterclassRepository;

    public function __construct(MasterclassRepository $masterclassRepository)
    {
        $this->masterclassRepository = $masterclassRepository;
    }

    #[Route('/masterclass/{id}', name: 'get_masterclass')]
    public function getMasterclass(int $id): Response
    {
        $masterclass = $this->masterclassRepository->find($id);

        if (!$masterclass) {
            return $this->json(['message' => 'Masterclass not found'], 404);
        }

        return $this->json($this->transformMasterclass($masterclass));
    }

    #[Route('/masterclass', name: 'get_allmasterclass')]
    public function getAllMasterclass(): Response
    {
        $masterclasses = $this->masterclassRepository->findAll();

        $results = array_map([$this, 'transformMasterclass'], $masterclasses);

        return $this->json($results);
    }

    private function transformMasterclass(Masterclass $masterclass): array
    {
        return [
            'id' => $masterclass->getId(),
            'name' => $masterclass->getName(),
            'category' => $masterclass->getCategory()->getName(), // assuming the category is an entity with a getName method
            'level' => $masterclass->getLevel(),
            'comment' => $masterclass->getComment(),
            'created_at' => $masterclass->getCreatedAt() ? $masterclass->getCreatedAt()->format('Y-m-d H:i:s') : null,
            'created_by' => $masterclass->getCreatedBy() ? $masterclass->getCreatedBy()->getUsername() : null // assuming the created_by is a User entity with a getUsername method. Check for null in case it's not set.
        ];
    }
}
