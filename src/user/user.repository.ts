import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Pagination } from '../common/pagination';
import { UserQueryFilterDto } from './dto/request/user.query.filter.dto';

export class UserRepository extends Repository<User> {
	constructor(
		@InjectRepository(User)
		private userRepository: Repository<User>
	) {
		super(userRepository.target, userRepository.manager, userRepository.queryRunner);
	}
	
	async getUser(id: string) {
		return await this.userRepository.findBy({ id });
	}
	
	async getUsers(
		pagination: Pagination,
		filter: UserQueryFilterDto,
	) {
		const query = await this.manager
			.getRepository(User)
			.createQueryBuilder('user')
			.leftJoin('user.salaryMonth', 'salaryMonth');

		return query.getManyAndCount();
			// .limit(pagination.getPageSize())
			// .offset(pagination.getSkip())
			
	}
	
	async updateUser(id: string, data: User) {
		return await this.userRepository.update({ id }, data);
	}
	
	async createUser(data: User) {
		return await this.userRepository.save(data);
	}
	
	async deleteUser(id: string) {
		return await this.userRepository.delete({ id });
	}
	
	async getUser_salaryMonth(id: string) {
		return await this.userRepository
			.createQueryBuilder('user')
			.innerJoin('user.salarymonth', 'salarymonth')
			.getRawMany();
	}
	
}
