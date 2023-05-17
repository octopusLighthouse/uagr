import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonPutReqDto } from './dto/request/person.put.dto';
import { Person } from './entities/person.entity';
import { PersonRepository } from './person.repository';
import { PersonPostReqDto } from './dto/request/person.post.dto';
import { PersonQueryDto } from './dto/request/person.query.dto';
import { Pagination } from '../common/pagination';
import { FamilyRelation } from 'src/family/entities/family.entity';
import { FamilyService } from 'src/family/family.service';

@Injectable()
export class PersonService {
	constructor(
		@InjectRepository(PersonRepository)
		private readonly personRepository: PersonRepository,
	) {
	}

	async get(
		query: PersonQueryDto,
	) {
		const pagination = new Pagination(query.page, query.pageSize, 25);
		const [
			data,
			count,
		] = await this.personRepository.getPersons(
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
		return await this.personRepository.getPerson(id);
	}
	
	async create(data: PersonPostReqDto) {
		let familyRelation = [];
		const person = new Person(data);
		await this.personRepository.createPerson(person);

		if (data.relationType) {
			const owner = await this.getOne('c30688a9-ee83-4bc3-8cab-90efece3302a');

			// familyRelation.push(new Family({ 
			// 	relation: data.relation,
			// 	relatedPerson: person,
			// 	owner: owner,
			// }));

			await this.personRepository.saveFamilyRelation(new FamilyRelation({ 
				relationType: data.relationType,
				relatedPerson: person,
				owner: owner,
			}));

			// await this.familyService.create(new Family({ 
			// 	relation: data.relation,
			// 	relatedPerson: person,
			// 	owner: owner,
			// }));
		}		
		//person.relations = familyRelation;
		//return await this.personRepository.createPerson(person);
	}
	
	async update(id: string, data: PersonPutReqDto) {
		const person = new Person(data);
		return await this.personRepository.updatePerson(id, person);
	}
	
	async delete(id: string) {
		return await this.personRepository.deletePerson(id);
	}
}
