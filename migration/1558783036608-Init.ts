import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1558783036608 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "villain" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(500) NOT NULL, "hp" integer NOT NULL, "def" integer NOT NULL, "atq" integer NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE TABLE "battle" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')))`,
    );
    await queryRunner.query(
      `CREATE TABLE "battle_action" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "ply" integer NOT NULL, "isAvengerPly" boolean NOT NULL, "battleId" integer, "avengerId" integer, "villainId" integer)`,
    );
    await queryRunner.query(
      `CREATE TABLE "avenger" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(500) NOT NULL, "hp" integer NOT NULL, "def" integer NOT NULL, "atq" integer NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(500) NOT NULL, "token" varchar(500) NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_battle_action" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "ply" integer NOT NULL, "isAvengerPly" boolean NOT NULL, "battleId" integer, "avengerId" integer, "villainId" integer, CONSTRAINT "FK_cf0adbc2ba1bd34f9a38de3af33" FOREIGN KEY ("battleId") REFERENCES "battle" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_7ae829ccdbfe237e74105dfe16f" FOREIGN KEY ("avengerId") REFERENCES "avenger" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_b4b13b5b0bcc2db13f31ea6d547" FOREIGN KEY ("villainId") REFERENCES "villain" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_battle_action"("id", "ply", "isAvengerPly", "battleId", "avengerId", "villainId") SELECT "id", "ply", "isAvengerPly", "battleId", "avengerId", "villainId" FROM "battle_action"`,
    );
    await queryRunner.query(`DROP TABLE "battle_action"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_battle_action" RENAME TO "battle_action"`,
    );
    await queryRunner.query(
      `INSERT INTO avenger (name, hp, def, atq) VALUES ('Captain America', 100, 30, 30), ('Iron-Man', 100, 60, 50), ('Hulk', 100, 85, 70), ('Spider-Man', 100, 10, 30)`,
    );
    await queryRunner.query(
      `INSERT INTO user (name, token) VALUES ('Boris', 'H4OUJ19yD5kKFvE31mkAhG0SJocdtqBQ');`,
    );
    await queryRunner.query(
      `INSERT INTO villain (name, hp, def, atq) VALUES ('Magneto', 100, 30, 30), ('Dr. Doom', 100, 60, 50), ('Thanos', 100, 85, 70), ('Red Skull', 100, 10, 30)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "battle_action" RENAME TO "temporary_battle_action"`,
    );
    await queryRunner.query(
      `CREATE TABLE "battle_action" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "ply" integer NOT NULL, "isAvengerPly" boolean NOT NULL, "battleId" integer, "avengerId" integer, "villainId" integer)`,
    );
    await queryRunner.query(
      `INSERT INTO "battle_action"("id", "ply", "isAvengerPly", "battleId", "avengerId", "villainId") SELECT "id", "ply", "isAvengerPly", "battleId", "avengerId", "villainId" FROM "temporary_battle_action"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_battle_action"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "avenger"`);
    await queryRunner.query(`DROP TABLE "battle_action"`);
    await queryRunner.query(`DROP TABLE "battle"`);
    await queryRunner.query(`DROP TABLE "villain"`);
  }
}
