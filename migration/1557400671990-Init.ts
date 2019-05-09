import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1557400671990 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "avenger" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(500) NOT NULL, "hp" integer NOT NULL, "def" integer NOT NULL, "atq" integer NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(500) NOT NULL, "token" varchar(500) NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO avenger (name, hp, def, atq) VALUES ('Captain America', 100, 30, 30), ('Iron-Man', 100, 60, 50), ('Hulk', 100, 85, 70), ('Spider-Man', 100, 10, 30)`,
    );
    await queryRunner.query(
      `INSERT INTO user (name, token) VALUES ('Boris', 'H4OUJ19yD5kKFvE31mkAhG0SJocdtqBQ');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "avenger"`);
  }
}
