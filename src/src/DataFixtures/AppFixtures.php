<?php

namespace App\DataFixtures;

use App\Factory\UsersFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        UsersFactory::createMany(10);
        // $product = new Product();
        // $manager->persist($product);

        $manager->flush();
    }
}
