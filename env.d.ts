declare namespace NodeJS {
  interface ProcessEnv {
    RABBITMQ_URLS: string;
    RABBITMQ_QUEUE: string;

    GRAPHQL_PATH_SCHEMA: string;
  }
}
