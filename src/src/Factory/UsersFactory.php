<?php

namespace App\Factory;

use App\Entity\Users;
use App\Repository\UsersRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

/**
 * @extends ModelFactory<Users>
 *
 * @method        Users|Proxy                     create(array|callable $attributes = [])
 * @method static Users|Proxy                     createOne(array $attributes = [])
 * @method static Users|Proxy                     find(object|array|mixed $criteria)
 * @method static Users|Proxy                     findOrCreate(array $attributes)
 * @method static Users|Proxy                     first(string $sortedField = 'id')
 * @method static Users|Proxy                     last(string $sortedField = 'id')
 * @method static Users|Proxy                     random(array $attributes = [])
 * @method static Users|Proxy                     randomOrCreate(array $attributes = [])
 * @method static UsersRepository|RepositoryProxy repository()
 * @method static Users[]|Proxy[]                 all()
 * @method static Users[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static Users[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static Users[]|Proxy[]                 findBy(array $attributes)
 * @method static Users[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static Users[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 */
final class UsersFactory extends ModelFactory
{
    private UserPasswordHasherInterface $passwordHasher;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        parent::__construct();
        $this->passwordHasher = $passwordHasher;
    }

    protected function getDefaults(): array
    {
        return [
            'first_name' => self::faker()->firstName(),
            'last_name' => self::faker()->lastName(),
            'address' => self::faker()->address(),
            'country' => self::faker()->country(),
            'phone_number' => self::faker()->randomNumber(9),
            'category' => self::faker()->numberBetween(1,10),  // supposons qu'il y ait 10 catégories
            'mail' => self::faker()->email(),
            'username' => self::faker()->userName(),
            'role' => self::faker()->randomElement([1,2]), // supposons que vous ayez 3 rôles avec des ID 1, 2 et 3
            'created_at' => \DateTimeImmutable::createFromMutable(self::faker()->dateTime()),
        ];
    }

    protected function initialize(): self
    {
        return $this->afterInstantiate(function (Users $user): void {
            $user->setPassword($this->passwordHasher->hashPassword($user, 'password'));
        });
    }

    protected static function getClass(): string
    {
        return Users::class;
    }
}
