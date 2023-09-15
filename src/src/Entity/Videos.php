<?php

namespace App\Entity;

use App\Repository\VideosRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: VideosRepository::class)]
class Videos
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $link = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\OneToMany(mappedBy: 'videos', targetEntity: Lessons::class)]
    private Collection $lessons;

    #[ORM\OneToMany(mappedBy: 'video', targetEntity: TimeStamp::class)]
    private Collection $timeStamps;

    public function __construct()
    {
        $this->lessons = new ArrayCollection();
        $this->timeStamps = new ArrayCollection();
    }

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

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): static
    {
        $this->link = $link;

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

    /**
     * @return Collection<int, Lessons>
     */
    public function getLessons(): Collection
    {
        return $this->lessons;
    }

    public function addLesson(Lessons $lesson): static
    {
        if (!$this->lessons->contains($lesson)) {
            $this->lessons->add($lesson);
            $lesson->setVideos($this);
        }

        return $this;
    }

    public function removeLesson(Lessons $lesson): static
    {
        if ($this->lessons->removeElement($lesson)) {
            // set the owning side to null (unless already changed)
            if ($lesson->getVideos() === $this) {
                $lesson->setVideos(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TimeStamp>
     */
    public function getTimeStamps(): Collection
    {
        return $this->timeStamps;
    }

    public function addTimeStamp(TimeStamp $timeStamp): static
    {
        if (!$this->timeStamps->contains($timeStamp)) {
            $this->timeStamps->add($timeStamp);
            $timeStamp->setVideo($this);
        }

        return $this;
    }

    public function removeTimeStamp(TimeStamp $timeStamp): static
    {
        if ($this->timeStamps->removeElement($timeStamp)) {
            // set the owning side to null (unless already changed)
            if ($timeStamp->getVideo() === $this) {
                $timeStamp->setVideo(null);
            }
        }

        return $this;
    }
}
