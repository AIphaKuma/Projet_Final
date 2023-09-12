<?php

namespace App\Repository;

use App\Entity\CategoryMasterclass;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CategoryMasterclass>
 *
 * @method CategoryMasterclass|null find($id, $lockMode = null, $lockVersion = null)
 * @method CategoryMasterclass|null findOneBy(array $criteria, array $orderBy = null)
 * @method CategoryMasterclass[]    findAll()
 * @method CategoryMasterclass[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoryMasterclassRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CategoryMasterclass::class);
    }

//    /**
//     * @return CategoryMasterclass[] Returns an array of CategoryMasterclass objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?CategoryMasterclass
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
