import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { MovieSalesModule } from './movie-sales/movie-sales.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: true,
      include: [MovieSalesModule],
    }),
    MovieSalesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
