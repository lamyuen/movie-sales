import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Group } from './group';

@Entity()
export class Country {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  country: string;

  @Column({ type: 'decimal' })
  taxRate: number;

  @OneToMany(() => Group, (group) => group.country)
  groups: Group[];
}
