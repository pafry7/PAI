import { Field, InputType } from "type-graphql";

import { AuthInput } from "./AuthInput";
import { Length } from "class-validator";

@InputType()
export class UpdateInput extends AuthInput {
  @Field()
  @Length(1, 30)
  name: string;
}
