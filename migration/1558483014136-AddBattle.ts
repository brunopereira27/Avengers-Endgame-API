import {MigrationInterface, QueryRunner} from "typeorm";

export class AddBattle1558483014136 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "temporary_battle_action" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "ply" integer NOT NULL, "avengerId" integer, "villainId" integer, CONSTRAINT "FK_b4b13b5b0bcc2db13f31ea6d547" FOREIGN KEY ("villainId") REFERENCES "villain" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_7ae829ccdbfe237e74105dfe16f" FOREIGN KEY ("avengerId") REFERENCES "avenger" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_battle_action"("id", "ply", "avengerId", "villainId") SELECT "id", "ply", "avengerId", "villainId" FROM "battle_action"`);
        await queryRunner.query(`DROP TABLE "battle_action"`);
        await queryRunner.query(`ALTER TABLE "temporary_battle_action" RENAME TO "battle_action"`);
        await queryRunner.query(`CREATE TABLE "temporary_battle_action" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "ply" integer NOT NULL, "avengerId" integer, "villainId" integer, "isAvengerPly" boolean NOT NULL, "battleId" integer, CONSTRAINT "FK_b4b13b5b0bcc2db13f31ea6d547" FOREIGN KEY ("villainId") REFERENCES "villain" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_7ae829ccdbfe237e74105dfe16f" FOREIGN KEY ("avengerId") REFERENCES "avenger" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_battle_action"("id", "ply", "avengerId", "villainId") SELECT "id", "ply", "avengerId", "villainId" FROM "battle_action"`);
        await queryRunner.query(`DROP TABLE "battle_action"`);
        await queryRunner.query(`ALTER TABLE "temporary_battle_action" RENAME TO "battle_action"`);
        await queryRunner.query(`CREATE TABLE "temporary_battle_action" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "ply" integer NOT NULL, "avengerId" integer, "villainId" integer, "isAvengerPly" boolean NOT NULL, "battleId" integer, CONSTRAINT "FK_b4b13b5b0bcc2db13f31ea6d547" FOREIGN KEY ("villainId") REFERENCES "villain" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_7ae829ccdbfe237e74105dfe16f" FOREIGN KEY ("avengerId") REFERENCES "avenger" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_cf0adbc2ba1bd34f9a38de3af33" FOREIGN KEY ("battleId") REFERENCES "battle" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_battle_action"("id", "ply", "avengerId", "villainId", "isAvengerPly", "battleId") SELECT "id", "ply", "avengerId", "villainId", "isAvengerPly", "battleId" FROM "battle_action"`);
        await queryRunner.query(`DROP TABLE "battle_action"`);
        await queryRunner.query(`ALTER TABLE "temporary_battle_action" RENAME TO "battle_action"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "battle_action" RENAME TO "temporary_battle_action"`);
        await queryRunner.query(`CREATE TABLE "battle_action" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "ply" integer NOT NULL, "avengerId" integer, "villainId" integer, "isAvengerPly" boolean NOT NULL, "battleId" integer, CONSTRAINT "FK_b4b13b5b0bcc2db13f31ea6d547" FOREIGN KEY ("villainId") REFERENCES "villain" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_7ae829ccdbfe237e74105dfe16f" FOREIGN KEY ("avengerId") REFERENCES "avenger" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "battle_action"("id", "ply", "avengerId", "villainId", "isAvengerPly", "battleId") SELECT "id", "ply", "avengerId", "villainId", "isAvengerPly", "battleId" FROM "temporary_battle_action"`);
        await queryRunner.query(`DROP TABLE "temporary_battle_action"`);
        await queryRunner.query(`ALTER TABLE "battle_action" RENAME TO "temporary_battle_action"`);
        await queryRunner.query(`CREATE TABLE "battle_action" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "ply" integer NOT NULL, "avengerId" integer, "villainId" integer, CONSTRAINT "FK_b4b13b5b0bcc2db13f31ea6d547" FOREIGN KEY ("villainId") REFERENCES "villain" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_7ae829ccdbfe237e74105dfe16f" FOREIGN KEY ("avengerId") REFERENCES "avenger" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "battle_action"("id", "ply", "avengerId", "villainId") SELECT "id", "ply", "avengerId", "villainId" FROM "temporary_battle_action"`);
        await queryRunner.query(`DROP TABLE "temporary_battle_action"`);
        await queryRunner.query(`ALTER TABLE "battle_action" RENAME TO "temporary_battle_action"`);
        await queryRunner.query(`CREATE TABLE "battle_action" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "ply" integer NOT NULL, "isAttackerAvenger" boolean NOT NULL, "avengerId" integer, "villainId" integer, CONSTRAINT "FK_b4b13b5b0bcc2db13f31ea6d547" FOREIGN KEY ("villainId") REFERENCES "villain" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_7ae829ccdbfe237e74105dfe16f" FOREIGN KEY ("avengerId") REFERENCES "avenger" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "battle_action"("id", "ply", "avengerId", "villainId") SELECT "id", "ply", "avengerId", "villainId" FROM "temporary_battle_action"`);
        await queryRunner.query(`DROP TABLE "temporary_battle_action"`);
    }

}
