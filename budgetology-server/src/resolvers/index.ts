import { AuthResolver } from "resolvers/AuthResolver";
import { BankAccountResolver } from "./BankAccountResolver";
import { ExpenseResolver } from "./ExpenseResolver";
import { UserResolver } from "resolvers/UserResolver";

const resolvers = [
  UserResolver,
  AuthResolver,
  BankAccountResolver,
  ExpenseResolver
];

export { resolvers };
