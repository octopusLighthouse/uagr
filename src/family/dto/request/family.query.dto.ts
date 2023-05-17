import { FamilyQueryFilterDto } from './family.query.filter.dto';

export class FamilyQueryDto {
	page: number;
	pageSize: number;
	filter: FamilyQueryFilterDto;
}
