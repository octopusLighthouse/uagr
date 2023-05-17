import { ApiProperty } from '@nestjs/swagger';
export class PersonPostReqDto {
	@ApiProperty()
	name:string;

	@ApiProperty()
	surename:string;

	@ApiProperty()
	age:number;

	@ApiProperty()
	userId: string;

	@ApiProperty()
	relationType?: string;
}
