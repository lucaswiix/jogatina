import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTeamsTable1723271094015 implements MigrationInterface {
    name = 'CreateTeamsTable1723271094015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teams" ("group_id" character varying NOT NULL, "name" character varying NOT NULL, "total_players" integer NOT NULL, "occured_at" TIMESTAMP NOT NULL, "duration_time" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_dac3c13839536151455938e66b7" UNIQUE ("group_id"), CONSTRAINT "PK_dac3c13839536151455938e66b7" PRIMARY KEY ("group_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "teams"`);
    }

}
