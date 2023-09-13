<?php

namespace App\Controller;

use App\Entity\Masterclass;
use App\Entity\CategoryMasterclass;
use App\Repository\CategoryMasterclassRepository;
use App\Repository\MasterclassRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;

class MasterclassController extends AbstractController
{
    private $masterclassRepository;
    private $categorymasterclass;

    public function __construct(MasterclassRepository $masterclassRepository, CategoryMasterclassRepository $categoryMasterclassRepository)
    {
        $this->masterclassRepository = $masterclassRepository;
        $this->categorymasterclass = $categoryMasterclassRepository;
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

    #[Route('/add-masterclass', name: 'add_masterclass')]
    //#[IsGranted('Admin')]
    public function addMasterclass(Request $request, EntityManagerInterface $em): Response
    {
        $data = json_decode($request->getContent(), true);

        // Vérifiez que les données nécessaires sont présentes
        if (!isset($data['name']) || !isset($data['category_id']) || !isset($data['level'])) {
            return $this->json(['message' => 'Invalid data'], 400);
        }

        $category = $em->getRepository(CategoryMasterclass::class)->find($data['category_id']);
        if (!$category) {
            return $this->json(['message' => 'Category not found'], 404);
        }

        $masterclass = new Masterclass();
        $masterclass->setName($data['name']);
        $masterclass->setCategory($category);
        $masterclass->setLevel($data['level']);
        $masterclass->setComment($data['comment']);
        $masterclass->setCreatedAt(new \DateTimeImmutable());
        $masterclass->setCreatedBy($this->getUser());

        $em->persist($masterclass);
        $em->flush();

        return $this->json(['message' => 'Masterclass added successfully', 'id' => $masterclass->getId()]);
    }

    #[Route('/category_masterclasses', name: 'get_all_categories', methods: ['GET'])]
    public function getAllCategories(CategoryMasterclassRepository $categoryMasterclassRepository): Response
    {
        $categories = $categoryMasterclassRepository->findAll();
        $results = array_map(function($category) {
            return [
                'id' => $category->getId(),
                'name' => $category->getName()
            ];
        }, $categories);

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
