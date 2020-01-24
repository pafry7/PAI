import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";

import { Expense } from "entity/Expense";
// import { Income } from "entity/Income";
import { User } from "entity/User";

@ObjectType()
@Entity()
export class BankAccount extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column("text")
  bankName: string;

  @Field()
  @Column("real")
  moneyAmount: number;

  @ManyToOne(
    () => User,
    user => user.bankAccounts
  )
  user: User;

  @Field(() => Expense, { nullable: true })
  @OneToMany(
    () => Expense,
    expense => expense.bankAccount,
    { nullable: true }
  )
  expenses: Expense[];

  // @Field(() => Income, { nullable: true })
  // @OneToMany(
  //   () => Income,
  //   income => income.bankAccount,
  //   { nullable: true }
  // )
  // incomes: Income[];
}
