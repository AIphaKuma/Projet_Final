<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230919223329 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category_masterclass (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE event (id INT AUTO_INCREMENT NOT NULL, number_like INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE lessons (id INT AUTO_INCREMENT NOT NULL, music_sheet_id INT NOT NULL, videos_id INT NOT NULL, created_by_id INT NOT NULL, masterclass_id INT NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', chapter INT NOT NULL, content LONGTEXT NOT NULL, composer VARCHAR(255) NOT NULL, duration INT NOT NULL, INDEX IDX_3F4218D94C015A83 (music_sheet_id), INDEX IDX_3F4218D9763C10B2 (videos_id), INDEX IDX_3F4218D9B03A8386 (created_by_id), INDEX IDX_3F4218D9426F0705 (masterclass_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE masterclass (id INT AUTO_INCREMENT NOT NULL, category_id INT NOT NULL, created_by_id INT NOT NULL, name VARCHAR(255) NOT NULL, comment VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', level VARCHAR(255) NOT NULL, INDEX IDX_9BDB44ED12469DE2 (category_id), INDEX IDX_9BDB44EDB03A8386 (created_by_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE music_sheet (id INT AUTO_INCREMENT NOT NULL, path VARCHAR(255) NOT NULL, uploaded_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE role (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE time_stamp (id INT AUTO_INCREMENT NOT NULL, video_id INT NOT NULL, start_time INT NOT NULL, end_time INT NOT NULL, label VARCHAR(255) NOT NULL, INDEX IDX_103C7E7429C1004E (video_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL, role_id INT NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, phone_number INT NOT NULL, category INT NOT NULL, mail VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', password VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NULL, INDEX IDX_1483A5E9D60322AC (role_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE videos (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, link VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE lessons ADD CONSTRAINT FK_3F4218D94C015A83 FOREIGN KEY (music_sheet_id) REFERENCES music_sheet (id)');
        $this->addSql('ALTER TABLE lessons ADD CONSTRAINT FK_3F4218D9763C10B2 FOREIGN KEY (videos_id) REFERENCES videos (id)');
        $this->addSql('ALTER TABLE lessons ADD CONSTRAINT FK_3F4218D9B03A8386 FOREIGN KEY (created_by_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE lessons ADD CONSTRAINT FK_3F4218D9426F0705 FOREIGN KEY (masterclass_id) REFERENCES masterclass (id)');
        $this->addSql('ALTER TABLE masterclass ADD CONSTRAINT FK_9BDB44ED12469DE2 FOREIGN KEY (category_id) REFERENCES category_masterclass (id)');
        $this->addSql('ALTER TABLE masterclass ADD CONSTRAINT FK_9BDB44EDB03A8386 FOREIGN KEY (created_by_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE time_stamp ADD CONSTRAINT FK_103C7E7429C1004E FOREIGN KEY (video_id) REFERENCES videos (id)');
        $this->addSql('ALTER TABLE users ADD CONSTRAINT FK_1483A5E9D60322AC FOREIGN KEY (role_id) REFERENCES role (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE lessons DROP FOREIGN KEY FK_3F4218D94C015A83');
        $this->addSql('ALTER TABLE lessons DROP FOREIGN KEY FK_3F4218D9763C10B2');
        $this->addSql('ALTER TABLE lessons DROP FOREIGN KEY FK_3F4218D9B03A8386');
        $this->addSql('ALTER TABLE lessons DROP FOREIGN KEY FK_3F4218D9426F0705');
        $this->addSql('ALTER TABLE masterclass DROP FOREIGN KEY FK_9BDB44ED12469DE2');
        $this->addSql('ALTER TABLE masterclass DROP FOREIGN KEY FK_9BDB44EDB03A8386');
        $this->addSql('ALTER TABLE time_stamp DROP FOREIGN KEY FK_103C7E7429C1004E');
        $this->addSql('ALTER TABLE users DROP FOREIGN KEY FK_1483A5E9D60322AC');
        $this->addSql('DROP TABLE category_masterclass');
        $this->addSql('DROP TABLE event');
        $this->addSql('DROP TABLE lessons');
        $this->addSql('DROP TABLE masterclass');
        $this->addSql('DROP TABLE music_sheet');
        $this->addSql('DROP TABLE role');
        $this->addSql('DROP TABLE time_stamp');
        $this->addSql('DROP TABLE users');
        $this->addSql('DROP TABLE videos');
    }
}
