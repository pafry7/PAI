import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column("text", { unique: true })
  email: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  name: string;

  @Column()
  password: string;
}
