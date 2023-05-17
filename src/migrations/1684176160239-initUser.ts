import { MigrationInterface, QueryRunner } from 'typeorm';
export class initUser1684176160239 implements MigrationInterface {
	name = 'initUser1684176160239';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			'CREATE TABLE "User" ();'
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {

	}
}
