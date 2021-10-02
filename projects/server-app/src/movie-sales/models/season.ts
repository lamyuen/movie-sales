import { Title } from './title';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Season {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  season: string;

  @ManyToMany(() => Title)
  @JoinTable()
  titles: Title[];
}
