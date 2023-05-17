import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SalaryMonth } from './entities/salary-month.entity';
import { Pagination } from '../common/pagination';
import { SalaryMonthQueryFilterDto } from './dto/request/salary-month.query.filter.dto';

export class SalaryMonthRepository extends Repository<SalaryMonth> {
	constructor(
		@InjectRepository(SalaryMonth)
		private salaryMonthRepository: Repository<SalaryMonth>
	) {
		super(salaryMonthRepository.target, salaryMonthRepository.manager, salaryMonthRepository.queryRunner);
	}
	
	async getSalaryMonth(id: string) {
		return await this.salaryMonthRepository.findBy({ id });
	}
	
	async getSalaryMonths(
		pagination: Pagination,
		filter: SalaryMonthQueryFilterDto,
	) {
		const query = this.salaryMonthRepository
			.createQueryBuilder('salarymonth')
			.innerJoin('salarymonth.user', 'user')

		return await query
			.limit(pagination.getPageSize())
			.offset(pagination.getSkip())
			.getManyAndCount();
	}
	
	async updateSalaryMonth(id: string, data: SalaryMonth) {
		return await this.salaryMonthRepository.update({ id }, data);
	}
	
	async createSalaryMonth(data: SalaryMonth) {
		return await this.salaryMonthRepository.save(data);
	}
	
	async deleteSalaryMonth(id: string) {
		return await this.salaryMonthRepository.delete({ id });
	}
	
	async getSalaryMonth_user(id: string) {
		return await this.salaryMonthRepository
			.createQueryBuilder('salarymonth')
			.innerJoin('salarymonth.user', 'user')
			.getRawMany();
	}
	
}
