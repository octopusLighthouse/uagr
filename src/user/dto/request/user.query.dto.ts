import { UserQueryFilterDto } from './user.query.filter.dto';

export class UserQueryDto {
	page: number;
	pageSize: number;
	filter: UserQueryFilterDto;
}
