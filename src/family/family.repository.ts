import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FamilyRelation } from './entities/family.entity';
import { Pagination } from '../common/pagination';
import { FamilyQueryFilterDto } from './dto/request/family.query.filter.dto';
import { Person } from 'src/person/entities/person.entity';

export class FamilyRepository extends Repository<FamilyRelation> {
	constructor(
		@InjectRepository(FamilyRelation)
		private familyRepository: Repository<FamilyRelation>
	) {
		super(familyRepository.target, familyRepository.manager, familyRepository.queryRunner);
	}
	
	async getPersonsByIds(ids: string[]) {
		const p = await this.manager
			.getRepository(Person)
			.createQueryBuilder('person')
			//.where(`id in (:ids)`, { ids })
			.getMany();
		return p;
	}

	async getFamily(id: string) {
		return await this.familyRepository.findBy({ id });
	}
	
	async getFamilys(
		pagination: Pagination,
		filter: FamilyQueryFilterDto,
	) {
		const query = this.familyRepository
			.createQueryBuilder('family')
			.leftJoinAndSelect('family.persons', 'persons')

		return await query
			.limit(pagination.getPageSize())
			.offset(pagination.getSkip())
			.getManyAndCount();
	}
	
	async updateFamily(id: string, data: FamilyRelation) {
		return await this.familyRepository.update({ id }, data);
	}
	
	async createFamily(data: FamilyRelation) {
		return await this.familyRepository.save(data);
	}
	
	async deleteFamily(id: string) {
		return await this.familyRepository.delete({ id });
	}
	
}
