import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Group } from './group';
import { Ticket } from './ticket';

@Entity()
export class Cinema {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  cinema: string;

  @Column({ type: 'decimal' })
  taxRate: number;

  @ManyToOne(() => Group, (group) => group.cinemas)
  group: Group;

  @OneToMany(() => Ticket, (ticket) => ticket.cinema)
  tickets: Ticket[];
}
