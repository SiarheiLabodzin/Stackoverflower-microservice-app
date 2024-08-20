import { Resolver, Query, Args } from '@nestjs/graphql';
import { ListenerService } from '../services/listener.service';
import { SumInpModel } from '../models/listener.model';

@Resolver()
export class ListenerResolver {
  constructor(private readonly listenerService: ListenerService) {}

  @Query(() => Number)
  sum(@Args('input') sumInpModel: SumInpModel): number {
    return this.listenerService.accumulate(sumInpModel);
  }
}
