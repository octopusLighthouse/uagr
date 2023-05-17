import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { SalaryMonth } from './salary-month/entities/salary-month.entity';
import { UserModule } from './user/user.module';
import { SalaryMonthModule } from './salary-month/salary-month.module';
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
				SalaryMonth,

            ],
            synchronize: true,
        }),
		UserModule,
		SalaryMonthModule,

    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
    

