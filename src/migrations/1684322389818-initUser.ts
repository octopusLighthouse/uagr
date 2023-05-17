import { MigrationInterface, QueryRunner } from 'typeorm';
export class initUser1684322389818 implements MigrationInterface {
	name = 'initUser1684322389818';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			'CREATE TABLE "User" ();'
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {

	}
}
