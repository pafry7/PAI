import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class MoneyFlow {
  @Field(() => Number, { nullable: true })
  amount: number;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  id: string;

  @Field(() => Date, { nullable: true })
  date: Date;

  @Field(() => String, { nullable: true })
  bankName: string;

  @Field(() => String, { nullable: true })
  type: string;
}
