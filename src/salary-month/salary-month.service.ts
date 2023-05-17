import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalaryMonthPutReqDto } from './dto/request/salary-month.put.dto';
import { SalaryMonth } from './entities/salary-month.entity';
import { SalaryMonthRepository } from './salary-month.repository';
import { SalaryMonthPostReqDto } from './dto/request/salary-month.post.dto';
import { SalaryMonthQueryDto } from './dto/request/salary-month.query.dto';
import { Pagination } from '../common/pagination';

@Injectable()
export class SalaryMonthService {
	constructor(
		@InjectRepository(SalaryMonthRepository)
		private readonly salaryMonthRepository: SalaryMonthRepository,
	) {
	}

	async get(
		query: SalaryMonthQueryDto,
	) {
		const pagination = new Pagination(query.page, query.pageSize, 25);
		const [
			data,
			count,
		] = await this.salaryMonthRepository.getSalaryMonths(
			pagination,
			query.filter,
		);

		return {
			count,
			page: pagination.getPage(),
			pageSize: pagination.getPageSize(),
			data,
		}
	}
	
	async getOne(id: string) {
		return await this.salaryMonthRepository.getSalaryMonth(id);
	}
	
	async create(data: SalaryMonthPostReqDto) {
		const salaryMonth = new SalaryMonth(data);
		return await this.salaryMonthRepository.createSalaryMonth(salaryMonth);
	}
	
	async update(id: string, data: SalaryMonthPutReqDto) {
		const salaryMonth = new SalaryMonth(data);
		return await this.salaryMonthRepository.updateSalaryMonth(id, salaryMonth);
	}
	
	async delete(id: string) {
		return await this.salaryMonthRepository.deleteSalaryMonth(id);
	}
}
