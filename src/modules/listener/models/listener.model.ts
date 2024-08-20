import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SumInpModel {
  @Field(() => [Number])
  numbers: number[];
}
