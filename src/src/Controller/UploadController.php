<?php

namespace App\Controller;

use App\Entity\MusicSheet;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;

class UploadController extends AbstractController
{

    #[Route('/upload-file', name: 'add_file')]
    public function uploadMusicSheet(Request $request, EntityManagerInterface $em): Response
    {
        $uploadedFile = $request->files->get('music_sheet');

        if (!$uploadedFile) {
            return $this->json(['message' => 'Aucun fichier upload'], 400);
        }

        $destination = $this->getParameter('kernel.project_dir') . '/public/uploads/music_sheets';
        $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);


        try {
            $uploadedFile->move($destination, $originalFilename);

            $musicSheet = new MusicSheet();
            $musicSheet->setPath('/uploads/music_sheets/' . $originalFilename);
            $musicSheet->setUploadedAt(new \DateTimeImmutable());


            $em->persist($musicSheet);
            $em->flush();

            return $this->json([
                'message' => 'Upload réussie',
                'path' => $musicSheet->getPath(),
                'id' => $musicSheet->getId()
            ]);

        } catch (FileException $e) {
            // Handle exception if something happens during file upload
            return $this->json(['message' => 'Upload échoué: ' . $e->getMessage()], 500);
        }
    }

}
