import { Column, Entity, OneToMany, OneToOne, ManyToOne, ManyToMany, PrimaryColumn, JoinTable, Index } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { User } from 'src/user/entities/user.entity';
import { FamilyRelation } from 'src/family/entities/family.entity';
import * as moment from 'moment';


@Entity()
export class Person {
	@PrimaryColumn({ type: 'varchar', length: 255 })
	id: string;

	@Column({ type: 'varchar', length: 255 })
	name: string;

	@Column({ type: 'varchar', length: 255 })
	surename: string;

	@Column({ type: 'integer' })
	age: number;

	@Column({ type: 'varchar', length: 255 })
	currentLocation: string;

	@Column('text', { array: true, nullable: true })
	languages: string;

	@Column('text', { array: true, nullable: true })
	qualifications: string;

	@Column({ type: 'timestamp' })
	createdAt: Date;

	@ManyToOne(() => User, x => x.persons)
	user: User;

	@OneToMany(() => FamilyRelation, family => family.owner)
	@JoinTable()
	relations: FamilyRelation[];

	@Column({ type: 'varchar', length: 255 })
	userId: string;

	@OneToOne(() => FamilyRelation, f => f.relatedPerson)
	relation: FamilyRelation;

	constructor(data: any) {
		this.id = data?.id || uuidv4();
		this.name = data?.name;
		this.surename = data?.surename;
		this.age = data?.age;
		this.createdAt = data?.createdAt || moment.utc().toDate();
		this.userId = data?.userId;
	}
}
