import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FamilyPutReqDto } from './dto/request/family.put.dto';
import { FamilyRelation } from './entities/family.entity';
import { FamilyRepository } from './family.repository';
import { FamilyPostReqDto } from './dto/request/family.post.dto';
import { FamilyQueryDto } from './dto/request/family.query.dto';
import { Pagination } from '../common/pagination';

@Injectable()
export class FamilyService {
	constructor(
		@InjectRepository(FamilyRepository)
		private readonly familyRepository: FamilyRepository,
	) {
	}

	async get(
		query: FamilyQueryDto,
	) {
		const pagination = new Pagination(query.page, query.pageSize, 25);
		const [
			data,
			count,
		] = await this.familyRepository.getFamilys(
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
		return await this.familyRepository.getFamily(id);
	}
	

	
	async createByPersonsIds(data: FamilyPostReqDto) {
		const persons = await this.familyRepository.getPersonsByIds(data.personsIds);		
		const family = new FamilyRelation({ ...data, persons: persons });
		return await this.familyRepository.createFamily(family);
	}
	
	async update(id: string, data: FamilyPutReqDto) {
		const family = new FamilyRelation(data);
		return await this.familyRepository.updateFamily(id, family);
	}
	
	async delete(id: string) {
		return await this.familyRepository.deleteFamily(id);
	}
}
