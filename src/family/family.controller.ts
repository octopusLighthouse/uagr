import { Controller, Get, Put, Post, Body, Patch, Param, Query, Delete } from '@nestjs/common';
import { FamilyService } from './family.service';
import { FamilyPostReqDto } from './dto/request/family.post.dto';
import { FamilyPutReqDto } from './dto/request/family.put.dto';
import { FamilyQueryDto } from './dto/request/family.query.dto';


@Controller('familys')
export class FamilyController {
	constructor(private readonly familyService: FamilyService) {}

	@Get()
	async getFamily(
		@Query() query: FamilyQueryDto,
	) {
			return await this.familyService.get(query);
	}

	@Get(':id')
	async getOneFamily(
		@Param('id') familyId: string,
	) {
			return await this.familyService.getOne(familyId);
	}

	@Post()
	async createFamily(
		@Body() data: FamilyPostReqDto,
	) {
			return await this.familyService.createByPersonsIds(data);
	}


}
