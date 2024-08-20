import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';

@Injectable()
export class GraphQLConfigService implements GqlOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  async createGqlOptions(): Promise<GqlModuleOptions> {
    const graphql = await this.configService.get('graphql');
    return await graphql;
  }
}
