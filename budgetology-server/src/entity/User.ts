import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Field, ID, ObjectType, Root } from "type-graphql";

import { BankAccount } from "entity/BankAccount";

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

  @Field({ nullable: true })
  @Column("real", { nullable: true })
  cash: number;

  @Field()
  budget(@Root() parent: User): number {
    let moneyFromAllAccounts: number = parent.bankAccounts.reduce(
      (acc, value) => {
        return acc + value.moneyAmount;
      },
      0
    );
    return parent.cash + moneyFromAllAccounts;
  }

  @Field(() => BankAccount, { nullable: true })
  @OneToMany(
    () => BankAccount,
    bankAccount => bankAccount.user,
    { nullable: true }
  )
  bankAccounts: BankAccount[];
}
