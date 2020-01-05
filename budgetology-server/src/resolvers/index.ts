import { AuthResolver } from "resolvers/AuthResolver";
import { UserResolver } from "resolvers/UserResolver";

const resolvers = [UserResolver, AuthResolver];

export { resolvers };
