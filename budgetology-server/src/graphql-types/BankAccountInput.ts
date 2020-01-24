import { Field, InputType } from "type-graphql";
import { Min, MinLength } from "class-validator";

@InputType()
export class BankAccountInput {
  @Field()
  @MinLength(1)
  bankName: string;

  @Field()
  @Min(0)
  moneyAmount: number;
}
