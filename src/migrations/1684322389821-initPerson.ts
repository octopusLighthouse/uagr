import { MigrationInterface, QueryRunner } from 'typeorm';
export class initPerson1684322389821 implements MigrationInterface {
	name = 'initPerson1684322389821';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			'CREATE TABLE "Person" ();'
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {

	}
}
