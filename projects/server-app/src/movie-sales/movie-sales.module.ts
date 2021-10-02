import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cinema, Country, Group, Sales, Season, Ticket, Title } from './models';

const entities = [Country, Group, Cinema, Ticket, Season, Title, Sales];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'movie-sales.sqlite',
      synchronize: true,
      entities,
    }),
    TypeOrmModule.forFeature(entities),
  ],
})
export class MovieSalesModule {}
