import { Resolver, Mutation, Arg, UseMiddleware } from "type-graphql";
import { isAuth } from "middleware/isAuth";
import { BankAccount } from "entity/BankAccount";
import { Expense } from "entity/Expense";

@Resolver()
export class ExpenseResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async addExpense(
    @Arg("id") id: string,
    @Arg("amount") amount: number,
    @Arg("date") date: Date,
    @Arg("description") description: string
  ): Promise<Boolean> {
    const bankAccount = await BankAccount.findOne(id);
    if (!bankAccount) {
      return false;
    }
    Expense.create({
      amount: amount,
      description: description,
      bankAccount: bankAccount,
      date: date
    }).save();

    bankAccount.moneyAmount -= amount;
    bankAccount.save();
    return true;
  }
}
