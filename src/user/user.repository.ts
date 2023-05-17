import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Pagination } from '../common/pagination';
import { UserQueryFilterDto } from './dto/request/user.query.filter.dto';
import { json } from 'express';

export class UserRepository extends Repository<User> {
	constructor(
		@InjectRepository(User)
		private userRepository: Repository<User>
	) {
		super(userRepository.target, userRepository.manager, userRepository.queryRunner);
	}
	
	async getUser(id: string) {
		return await this.userRepository.findOneBy({ id });
	}
	
	async getUsers(
		pagination: Pagination,
		filter: UserQueryFilterDto,
	) {
		const query = await this.userRepository
			.createQueryBuilder('user')
			.leftJoinAndSelect('user.persons', 'persons')
			.leftJoinAndSelect('persons.relations', 'relations')
			.leftJoinAndSelect('relations.relatedPerson', 'relatedPerson')
			.getManyAndCount();

		console.log(`D: ${JSON.stringify(query, null, 2)}`);

		return query;

		// return await query
		// 	.limit(pagination.getPageSize())
		// 	.offset(pagination.getSkip())
			
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
	
	async getUser_persons(id: string) {
		return await this.userRepository
			.createQueryBuilder('user')
			.innerJoin('user.persons', 'persons')
			.getRawMany();
	}
	
}
