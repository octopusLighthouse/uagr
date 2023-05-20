import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Person } from './person/entities/person.entity';
import { UserModule } from './user/user.module';
import { PersonModule } from './person/person.module';
import { FamilyRelation } from './family/entities/family.entity';
import { FamilyModule } from './family/family.module';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
require('dotenv').config();

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: `${process.env.APP_DB_HOST}`,
            port: Number.parseInt(process.env.APP_DB_PORT),
            username: `${process.env.APP_DB_USER}`,
            password: `${process.env.APP_DB_PASSWD}`,
            database: `${process.env.APP_DB_NAME}`,
            entities: [
				User,
				Person,
				FamilyRelation,

            ],
            synchronize: true,
        }),
		UserModule,
		PersonModule,
		FamilyModule,
		AuthModule,
		EmailModule,

    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
    

