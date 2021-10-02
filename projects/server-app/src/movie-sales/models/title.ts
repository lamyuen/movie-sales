import { Sales } from './sales';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Season } from './season';

@Entity()
export class Title {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  title: string;

  @ManyToMany(() => Season)
  seasons: Season[];

  @OneToMany(() => Sales, (sales) => sales.ticket)
  sales: Sales[];
}
