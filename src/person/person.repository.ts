import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Pagination } from '../common/pagination';
import { PersonQueryFilterDto } from './dto/request/person.query.filter.dto';
import { FamilyRelation } from 'src/family/entities/family.entity';

export class PersonRepository extends Repository<Person> {
	constructor(
		@InjectRepository(Person)
		private personRepository: Repository<Person>
	) {
		super(personRepository.target, personRepository.manager, personRepository.queryRunner);
	}
	
	async getPerson(id: string) {
		return await this.personRepository.findOneBy({ id });
	}
	
	async getPersons(
		pagination: Pagination,
		filter: PersonQueryFilterDto,
	) {
		// const query = await this.manager
		// 	.getRepository(Person)
		// 	.createQueryBuilder('person')
		// 	.leftJoinAndSelect('person.families', 'families')

		// return query
		// 	.limit(pagination.getPageSize())
		// 	.offset(pagination.getSkip())
		// 	.getManyAndCount();
		const users = await this.personRepository.find({ relations: ['families'] });  	
		return [0, users];
	}
	
	async updatePerson(id: string, data: Person) {
		return await this.personRepository.update({ id }, data);
	}
	
	async createPerson(data: Person) {
		return await this.personRepository.save(data);
	}
	
	async deletePerson(id: string) {
		return await this.personRepository.delete({ id });
	}
	
	async saveFamilyRelation(f) {
		await this.manager
			.getRepository(FamilyRelation)
			.save(f);
	}
}
