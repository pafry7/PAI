import { Field, InputType } from "type-graphql";

import { IsEmail } from "class-validator";

@InputType()
export class AuthInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}
