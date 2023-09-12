<?php

namespace App\Entity;

use App\Repository\CategoryMasterclassRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategoryMasterclassRepository::class)]
class CategoryMasterclass
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private string $name;

    #[ORM\OneToMany(mappedBy: "category", targetEntity: Masterclass::class)]
    private Collection $masterclasses;

    public function __construct()
    {
        $this->masterclasses = new ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @return Collection<int, Masterclass>
     */
    public function getMasterclasses(): Collection
    {
        return $this->masterclasses;
    }

    public function addMasterclass(Masterclass $masterclass): self
    {
        if (!$this->masterclasses->contains($masterclass)) {
            $this->masterclasses->add($masterclass);
            $masterclass->setCategory($this);
        }
        return $this;
    }

    public function removeMasterclass(Masterclass $masterclass): self
    {
        if ($this->masterclasses->removeElement($masterclass)) {
            // set the owning side to null (unless already changed)
            if ($masterclass->getCategory() === $this) {
                $masterclass->setCategory(null);
            }
        }
        return $this;
    }
}
