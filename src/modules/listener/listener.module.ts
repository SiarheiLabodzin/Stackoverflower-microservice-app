import { Module } from '@nestjs/common';
import { ListenerController } from './controllers/listener.controller';
import { ListenerService } from './services/listener.service';
import { ListenerResolver } from './resolvers/listener.resolver';

@Module({
  controllers: [ListenerController],
  providers: [ListenerService, ListenerResolver],
  exports: [ListenerService, ListenerResolver],
})
export class ListenerModule {}
