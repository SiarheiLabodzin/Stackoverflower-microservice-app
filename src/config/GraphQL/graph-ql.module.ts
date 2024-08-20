import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { GraphQLConfigService } from './graph-ql.config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ListenerResolver } from '@src/modules/listener/resolvers/listener.resolver';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [ConfigModule],
      driver: ApolloDriver,
      useClass: GraphQLConfigService,
    }),
  ],
  providers: [GraphQLConfigService],
})
export class GraphQlConfigModule {}
