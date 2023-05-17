import { SalaryMonthQueryFilterDto } from './salary-month.query.filter.dto';

export class SalaryMonthQueryDto {
	page: number;
	pageSize: number;
	filter: SalaryMonthQueryFilterDto;
}
