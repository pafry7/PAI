import { Field, InputType } from "type-graphql";
import { Length, Min } from "class-validator";

import { AuthInput } from "./AuthInput";

@InputType()
export class UpdateInput extends AuthInput {
  @Field()
  @Length(1, 30)
  name: string;

  @Field()
  @Min(0)
  cash: number;
}
