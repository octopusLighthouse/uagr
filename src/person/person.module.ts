import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { Person } from './entities/person.entity';
import { PersonRepository } from './person.repository';
import { FamilyModule } from 'src/family/family.module';
import { FamilyRelation } from 'src/family/entities/family.entity';
import { FamilyRepository } from 'src/family/family.repository';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			Person,
		]),
	],
	controllers: [
		PersonController,
	],
	providers: [
		PersonService,
		PersonRepository,
	],
})
export class PersonModule {}
