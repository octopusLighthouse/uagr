import { Column, Entity, OneToMany, OneToOne, ManyToOne, PrimaryColumn, JoinTable, JoinColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Person } from 'src/person/entities/person.entity';
import * as moment from 'moment';


@Entity()
export class FamilyRelation {
	@PrimaryColumn({ type: 'varchar', length: 255 })
	id: string;

	@Column({ type: 'varchar', length: 255 })
	relationType: string;

	@ManyToOne(() => Person, person => person.relations)
	owner: Person;

	@Column({ type: 'varchar', length: 255 })
	ownerId: string;

	@OneToOne(() => Person, x => x.relation)
	@JoinColumn()
	relatedPerson: Person;

	@Column({ type: 'varchar', length: 255 })
	relatedPersonId: string;

	constructor(data: any) {
		this.id = data?.id || uuidv4();
		this.relationType = data?.relationType;
		this.owner = data?.owner;
		this.relatedPerson = data?.relatedPerson;
	}
}
