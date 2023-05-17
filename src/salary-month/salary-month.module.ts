import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaryMonthController } from './salary-month.controller';
import { SalaryMonthService } from './salary-month.service';
import { SalaryMonth } from './entities/salary-month.entity';
import { SalaryMonthRepository } from './salary-month.repository';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			SalaryMonth,
		]),
	],
	controllers: [
		SalaryMonthController,
	],
	providers: [
		SalaryMonthService,
		SalaryMonthRepository,
	],
})
export class SalaryMonthModule {}
