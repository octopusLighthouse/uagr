import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPutReqDto } from './dto/request/user.put.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { UserPostReqDto } from './dto/request/user.post.dto';
import { UserQueryDto } from './dto/request/user.query.dto';
import { Pagination } from '../common/pagination';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class UserService {
	
	constructor(
		@InjectRepository(UserRepository)
		private readonly userRepository: UserRepository,
		private readonly emailService: EmailService,
	) {}

	async get(
		query: UserQueryDto,
	) {
		const pagination = new Pagination(query.page, query.pageSize, 25);
		const [
			data,
			count,
		] = await this.userRepository.getUsers(
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
		return await this.userRepository.getUser(id);
	}
	
	async create(data: UserPostReqDto) {
		const user = new User(data);
		await this.emailService.sendMail('robertas.bauras@gmail.com', 'Testas sviestas', this.emailService.template('Robertai'));
		return await this.userRepository.createUser(user);
	}
	
	async update(id: string, data: UserPutReqDto) {
		const user = new User(data);
		return await this.userRepository.updateUser(id, user);
	}
	
	async delete(id: string) {
		return await this.userRepository.deleteUser(id);
	}
}
