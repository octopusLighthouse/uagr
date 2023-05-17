import { Controller, Get, Put, Post, Body, Patch, Param, Query, Delete } from '@nestjs/common';
import { SalaryMonthService } from './salary-month.service';
import { SalaryMonthPostReqDto } from './dto/request/salary-month.post.dto';
import { SalaryMonthPutReqDto } from './dto/request/salary-month.put.dto';
import { SalaryMonthQueryDto } from './dto/request/salary-month.query.dto';


@Controller('salaryMonths')
export class SalaryMonthController {
	constructor(private readonly salaryMonthService: SalaryMonthService) {}

	@Get()
	async getSalaryMonth(
		@Query() query: SalaryMonthQueryDto,
	) {
			return await this.salaryMonthService.get(query);
	}

	@Get(':id')
	async getOneSalaryMonth(
		@Param('id') salaryMonthId: string,
	) {
			return await this.salaryMonthService.getOne(salaryMonthId);
	}

	@Post()
	async createSalaryMonth(
		@Body() data: SalaryMonthPostReqDto,
	) {
			return await this.salaryMonthService.create(data);
	}


}
