<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230920122150 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE masterclass_users (masterclass_id INT NOT NULL, users_id INT NOT NULL, INDEX IDX_9901D629426F0705 (masterclass_id), INDEX IDX_9901D62967B3B43D (users_id), PRIMARY KEY(masterclass_id, users_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE masterclass_users ADD CONSTRAINT FK_9901D629426F0705 FOREIGN KEY (masterclass_id) REFERENCES masterclass (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE masterclass_users ADD CONSTRAINT FK_9901D62967B3B43D FOREIGN KEY (users_id) REFERENCES users (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE masterclass_users DROP FOREIGN KEY FK_9901D629426F0705');
        $this->addSql('ALTER TABLE masterclass_users DROP FOREIGN KEY FK_9901D62967B3B43D');
        $this->addSql('DROP TABLE masterclass_users');
    }
}
