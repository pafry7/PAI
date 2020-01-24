import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Income extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column("real")
  amount: number;

  @Field()
  @Column("text")
  description: string;

  @Field({ nullable: true })
  @Column("numeric")
  date: Date;

  // @ManyToOne(
  //   () => BankAccount,
  //   bankAccount => bankAccount.incomes;
  // )
  // bankAccount: BankAccount;
}
