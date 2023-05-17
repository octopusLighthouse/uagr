import { PersonQueryFilterDto } from './person.query.filter.dto';

export class PersonQueryDto {
	page: number;
	pageSize: number;
	filter: PersonQueryFilterDto;
}
