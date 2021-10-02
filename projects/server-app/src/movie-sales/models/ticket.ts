import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Sales } from './sales';
import { Cinema } from './cinema';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  ticket: string;

  @Column({ type: 'decimal' })
  price: number;

  @ManyToOne(() => Cinema, (cinema) => cinema.tickets)
  cinema: Cinema;

  @OneToMany(() => Sales, (sales) => sales.ticket)
  sales: Sales[];
}
