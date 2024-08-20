import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';

export const config = () => ({
  graphql: {
    autoSchemaFile: join(process.cwd(), process.env.GRAPHQL_PATH_SCHEMA),
    sortSchema: true,
    playground: true,
    introspection: true,
    driver: ApolloDriver,
  },
});
