import { Resolver, Mutation, Arg, UseMiddleware } from "type-graphql";
import { User } from "entity/User";
import { isAuth } from "middleware/isAuth";
import { BankAccountInput } from "graphql-types/BankAccountInput";
import { BankAccount } from "entity/BankAccount";

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
}
