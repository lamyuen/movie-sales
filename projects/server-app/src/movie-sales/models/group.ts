import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Cinema } from './cinema';
import { Country } from './country';

@Entity()
export class Group {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  group: string;

  @Column({ type: 'decimal' })
  taxRate: number;

  @ManyToOne(() => Country, (country) => country.groups)
  country: Country;

  @OneToMany(() => Cinema, (cinema) => cinema.group)
  cinemas: Cinema[];
}
