import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { EmailModule } from 'src/email/email.module';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			User,
		]),
		EmailModule,
	],
	controllers: [
		UserController,
	],
	providers: [
		UserService,
		UserRepository,
	],
})
export class UserModule {}
