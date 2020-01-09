import { Query, Resolver, Mutation, Arg, UseMiddleware } from "type-graphql";
import { User } from "entity/User";
import { UpdateInput } from "graphql-types/UpdateInput";
import { isAuth } from "middleware/isAuth";
@Resolver()
export class UserResolver {
  @Query(() => [User])
  // @UseMiddleware(isAuth)
  users(): Promise<User[]> {
    return User.find();
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async updateUser(
    @Arg("id") id: string,
    @Arg("data", () => UpdateInput) data: UpdateInput
  ): Promise<Boolean> {
    await User.update({ id }, data);
    return true;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteUser(@Arg("id") id: string): Promise<Boolean> {
    await User.delete({ id });
    return true;
  }
}
