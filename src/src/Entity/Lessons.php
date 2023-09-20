<?php

namespace App\Entity;

use App\Repository\LessonsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LessonsRepository::class)]
class Lessons
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\ManyToOne(inversedBy: 'lessons')]
    #[ORM\JoinColumn(nullable: false)]
    private ?MusicSheet $music_sheet = null;

    #[ORM\ManyToOne(inversedBy: 'lessons')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Videos $videos = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\ManyToOne(inversedBy: 'lessons')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Users $created_by = null;

    #[ORM\ManyToOne(inversedBy: 'lessons')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Masterclass $masterclass = null;

    #[ORM\Column]
    private ?int $Chapter = null;


    #[ORM\Column(type: 'text')]
    private ?string $content = null;

    #[ORM\Column(length: 255)]
    private ?string $composer = null;

    #[ORM\Column]
    private ?int $duration = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getMusicSheet(): ?MusicSheet
    {
        return $this->music_sheet;
    }

    public function setMusicSheet(?MusicSheet $music_sheet): static
    {
        $this->music_sheet = $music_sheet;

        return $this;
    }

    public function getVideos(): ?Videos
    {
        return $this->videos;
    }

    public function setVideos(?Videos $videos): static
    {
        $this->videos = $videos;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): static
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getCreatedBy(): ?Users
    {
        return $this->created_by;
    }

    public function setCreatedBy(?Users $created_by): static
    {
        $this->created_by = $created_by;

        return $this;
    }

    public function getMasterclass(): ?Masterclass
    {
        return $this->masterclass;
    }

    public function setMasterclass(?Masterclass $masterclass): static
    {
        $this->masterclass = $masterclass;

        return $this;
    }

    public function getChapter(): ?int
    {
        return $this->Chapter;
    }

    public function setChapter(int $Chapter): static
    {
        $this->Chapter = $Chapter;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;
        return $this;
    }

    public function getComposer(): ?string
    {
        return $this->composer;
    }

    public function setComposer(string $composer): static
    {
        $this->composer = $composer;

        return $this;
    }

    public function getDuration(): ?int
    {
        return $this->duration;
    }

    public function setDuration(int $duration): static
    {
        $this->duration = $duration;

        return $this;
    }
