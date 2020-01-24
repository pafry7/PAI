import { Resolver, Mutation, Arg, UseMiddleware, Query } from "type-graphql";
import { User } from "entity/User";
import { isAuth } from "middleware/isAuth";
import { BankAccountInput } from "graphql-types/BankAccountInput";
import { BankAccount } from "entity/BankAccount";
import { Expense } from "entity/Expense";

@Resolver()
export class BankAccountResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async addBankAccount(
    @Arg("id") id: string,
    @Arg("data", () => BankAccountInput) data: BankAccountInput
  ): Promise<Boolean> {
    const user = await User.findOne(id);
    BankAccount.create({
      bankName: data.bankName,
      moneyAmount: data.moneyAmount,
      user: user
    }).save();
    return true;
  }

  @Query(() => [Expense])
  @UseMiddleware(isAuth)
  async expenses(@Arg("id") id: string): Promise<Expense[] | undefined> {
    const bankAccount = await BankAccount.findOne(id, {
      relations: ["expenses"]
    });
    if (!bankAccount) {
      return undefined;
    }
    return bankAccount.expenses;
  }

  @Query(() => BankAccount)
  @UseMiddleware(isAuth)
  async bankAccount(@Arg("id") id: string): Promise<BankAccount | undefined> {
    const bankAccount = await BankAccount.findOne(id, {
      relations: ["expenses"]
    });
    if (!bankAccount) {
      return undefined;
    }
    return bankAccount;
  }

  @Query(() => [BankAccount])
  @UseMiddleware(isAuth)
  async bankAccounts(
    @Arg("id") id: string
  ): Promise<BankAccount[] | undefined> {
    const user = await User.findOne(id, {
      relations: ["bankAccounts", "bankAccounts.expenses"]
    });
    if (!user) {
      return undefined;
    }
    return user.bankAccounts;
  }
}
