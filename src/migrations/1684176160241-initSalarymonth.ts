import { MigrationInterface, QueryRunner } from 'typeorm';
export class initSalarymonth1684176160241 implements MigrationInterface {
	name = 'initSalarymonth1684176160241';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			'CREATE TABLE "SalaryMonth" ();'
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {

	}
}
