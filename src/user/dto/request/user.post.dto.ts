import { ApiProperty } from '@nestjs/swagger';
export class UserPostReqDto {
	@ApiProperty()
	email:string;

	@ApiProperty()
	phone?:string;
}
