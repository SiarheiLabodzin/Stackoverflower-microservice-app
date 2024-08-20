import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ListenerService } from '../services/listener.service';
import { SumInpModel } from '../models/listener.model';

@Controller('listener')
export class ListenerController {
  constructor(private listenerService: ListenerService) {}
  @MessagePattern({ cmd: 'sum' })
  accumulate(sumInpModel: SumInpModel): number {
    return this.listenerService.accumulate(sumInpModel);
  }
}
