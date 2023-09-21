<?php

namespace App\Entity;

use App\Repository\EventRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EventRepository::class)]
class Event
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $number_like = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumberLike(): ?int
    {
        return $this->number_like;
    }

    public function setNumberLike(int $number_like): static
    {
        $this->number_like = $number_like;

        return $this;
    }
}
