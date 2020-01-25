import { Resolver, Mutation, Arg, UseMiddleware } from "type-graphql";
import { isAuth } from "middleware/isAuth";
import { BankAccount } from "entity/BankAccount";
import { Income } from "entity/Income";

@Resolver()
export class IncomeResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async addIncome(
    @Arg("id") id: string,
    @Arg("amount") amount: number,
    @Arg("description") description: string
  ): Promise<Boolean> {
    const bankAccount = await BankAccount.findOne(id);
    if (!bankAccount) {
      return false;
    }
    const date = new Date();
    Income.create({
      amount: amount,
      description: description,
      bankAccount: bankAccount,
      date: date
    }).save();

    bankAccount.moneyAmount += amount;
    bankAccount.save();
    return true;
  }
}
