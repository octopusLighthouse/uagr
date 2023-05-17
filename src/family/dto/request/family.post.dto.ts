import { ApiProperty } from '@nestjs/swagger';
export class FamilyPostReqDto {
	@ApiProperty()
	relation:string;

	@ApiProperty()
	personsIds: string[];
}
