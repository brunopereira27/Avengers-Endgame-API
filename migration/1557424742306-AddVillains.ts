import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddVillains1557424742306 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "villain" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(500) NOT NULL, "hp" integer NOT NULL, "def" integer NOT NULL, "atq" integer NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO villain (name, hp, def, atq) VALUES ('Magneto', 100, 30, 30), ('Dr. Doom', 100, 60, 50), ('Thanos', 100, 85, 70), ('Red Skull', 100, 10, 30)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "villain"`);
  }
}
