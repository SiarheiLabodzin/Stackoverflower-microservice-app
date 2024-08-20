import { Injectable } from '@nestjs/common';
import { SumInpModel } from '../models/listener.model';

@Injectable()
export class ListenerService {
  accumulate(sumInpModel: SumInpModel): number {
    const { numbers } = sumInpModel;
    return numbers.reduce((a, b) => a + b, 0);
  }
}
