import { Column, Entity, OneToMany, OneToOne, ManyToOne, ManyToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { SalaryMonth } from 'src/salary-month/entities/salary-month.entity';
import * as moment from 'moment';


@Entity()
export class User {
	@PrimaryColumn({ type: 'varchar', length: 255 })
	id: string;

	@OneToOne(() => SalaryMonth, x => x.user)
	salaryMonth?: SalaryMonth;

	@Column({ type: 'varchar', length: 255 })
	name: string;

	@Column({ type: 'timestamp' })
	createdAt: Date;

	constructor(data: any) {
		this.id = data?.id || uuidv4();
		this.name = data?.name;
		this.salaryMonth = null;
		this.createdAt = data?.createdAt || moment.utc().toDate();
	}
}
