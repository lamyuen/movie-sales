import { Title } from './title';
import { Ticket } from './ticket';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sales {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Ticket, (ticket) => ticket.sales)
  ticket: Ticket;

  @ManyToOne(() => Title, (title) => title.sales)
  title: Title;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  time: Date;

  @Column({ type: 'int' })
  admits: number;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'decimal' })
  taxRate: number;

  @Column({ type: 'decimal' })
  gross: number;

  @Column({ type: 'decimal' })
  tax: number;

  @Column({ type: 'decimal' })
  nett: number;
}
