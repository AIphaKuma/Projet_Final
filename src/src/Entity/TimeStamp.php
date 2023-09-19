<?php

namespace App\Entity;

use App\Repository\TimeStampRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TimeStampRepository::class)]
class TimeStamp
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'timeStamps')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Videos $video = null;

    #[ORM\Column]
    private ?int $start_time = null;

    #[ORM\Column]
    private ?int $end_time = null;

    #[ORM\Column(length: 255)]
    private ?string $label = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getVideo(): ?Videos
    {
        return $this->video;
    }

    public function setVideo(?Videos $video): static
    {
        $this->video = $video;

        return $this;
    }

    public function getStartTime(): ?int
    {
        return $this->start_time;
    }

    public function setStartTime(int $start_time): static
    {
        $this->start_time = $start_time;

        return $this;
    }

    public function getEndTime(): ?int
    {
        return $this->end_time;
    }

    public function setEndTime(int $end_time): static
    {
        $this->end_time = $end_time;

        return $this;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): static
    {
        $this->label = $label;

        return $this;
    }
}
