import { Field, InputType } from "type-graphql";
import { IsEmail, Length } from "class-validator";

@InputType()
export class UpdateInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;

  @Field()
  @Length(1, 30)
  name: string;
}
