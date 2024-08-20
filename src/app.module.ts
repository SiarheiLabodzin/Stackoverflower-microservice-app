import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ListenerModule } from './modules/listener/listener.module';
import { config } from '@config/config';
import { GraphQlConfigModule } from '@config/GraphQL/graph-ql.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [config],
    }),
    ListenerModule,
    GraphQlConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
