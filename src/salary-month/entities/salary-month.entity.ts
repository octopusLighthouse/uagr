import { Column, Entity, OneToMany, OneToOne, ManyToOne, ManyToMany, PrimaryColumn, JoinTable } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { User } from 'src/user/entities/user.entity';
import * as moment from 'moment';


@Entity()
export class SalaryMonth {
	@PrimaryColumn({ type: 'varchar', length: 255 })
	id: string;

	@OneToOne(() => User, x => x.salaryMonth, {
        cascade: true,
    })
	@JoinTable()
	user: User;

	constructor(data: any) {
		this.id = data?.id || uuidv4();
	}
}
