import { AuthResolver } from "resolvers/AuthResolver";
import { BankAccountResolver } from "resolvers/BankAccountResolver";
import { ExpenseResolver } from "resolvers/ExpenseResolver";
import { IncomeResolver } from "resolvers/IncomeResolver";
import { UserResolver } from "resolvers/UserResolver";

const resolvers = [
  UserResolver,
  AuthResolver,
  BankAccountResolver,
  ExpenseResolver,
  IncomeResolver
];

export { resolvers };
