import { Controller, Get, Put, Post, Body, Patch, Param, Query, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserPostReqDto } from './dto/request/user.post.dto';
import { UserPutReqDto } from './dto/request/user.put.dto';
import { UserQueryDto } from './dto/request/user.query.dto';


@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	async getUser(
		@Query() query: UserQueryDto,
	) {
			return await this.userService.get(query);
	}

	@Get(':id')
	async getOneUser(
		@Param('id') userId: string,
	) {
			return await this.userService.getOne(userId);
	}

	@Post()
	async createUser(
		@Body() data: UserPostReqDto,
	) {
			return await this.userService.create(data);
	}


}
