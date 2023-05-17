import { Column, Entity, OneToMany, OneToOne, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Person } from 'src/person/entities/person.entity';
import * as moment from 'moment';


@Entity()
export class User {
	@PrimaryColumn({ type: 'varchar', length: 255 })
	id: string;

	@Column({ type: 'varchar', length: 255 })
	email: string;

	@Column({ type: 'varchar', length: 255, nullable: true })
	phone?: string;

	@Column({ type: 'timestamp' })
	createdAt: Date;

	@OneToMany(() => Person, x => x.user)
	persons: Person[];	

	constructor(data: any) {
		this.id = data?.id || uuidv4();
		this.email = data?.email;
		this.phone = data?.phone || null;
		this.createdAt = data?.createdAt || moment.utc().toDate();
	}
}
