import { Controller, Get, Put, Post, Body, Patch, Param, Query, Delete } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonPostReqDto } from './dto/request/person.post.dto';
import { PersonPutReqDto } from './dto/request/person.put.dto';
import { PersonQueryDto } from './dto/request/person.query.dto';


@Controller('persons')
export class PersonController {
	constructor(private readonly personService: PersonService) {}

	@Get()
	async getPerson(
		@Query() query: PersonQueryDto,
	) {
			return await this.personService.get(query);
	}

	@Get(':id')
	async getOnePerson(
		@Param('id') personId: string,
	) {
			return await this.personService.getOne(personId);
	}

	@Post()
	async createPerson(
		@Body() data: PersonPostReqDto,
	) {
			return await this.personService.create(data);
	}


}
