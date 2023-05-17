import { ApiProperty } from '@nestjs/swagger';
import { FamilyRelation } from 'src/static/relations';
export class PersonPostReqDto {
	@ApiProperty()
	name:string;

	@ApiProperty()
	surename:string;

	@ApiProperty()
	age:number;

	@ApiProperty()
	userId: string;

	@ApiProperty({ enum: FamilyRelation, type: FamilyRelation })
	relationType?: FamilyRelation;

	@ApiProperty()
	currentLocation: string;

	@ApiProperty()
	languages: string[];

	@ApiProperty()
	qualifications: string[];
}
