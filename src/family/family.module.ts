import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyController } from './family.controller';
import { FamilyService } from './family.service';
import { FamilyRelation } from './entities/family.entity';
import { FamilyRepository } from './family.repository';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			FamilyRelation,
		]),
	],
	controllers: [
		FamilyController,
	],
	providers: [
		FamilyService,
		FamilyRepository,
	],
	exports: [

	],
})
export class FamilyModule {}
