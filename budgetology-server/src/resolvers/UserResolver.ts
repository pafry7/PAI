import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { User } from "entity/User";
import bcrypt from "bcryptjs";
import { RegisterInput } from "graphql-types/user/RegisterInput";
import { UpdateInput } from "graphql-types/user/UpdateInput";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users(): Promise<User[]> {
    return User.find();
  }

  @Mutation(() => User)
  async createUser(
    @Arg("data") { email, password }: RegisterInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    return await User.create({ email, password: hashedPassword }).save();
  }

  @Mutation(() => Boolean)
  async updateUser(
    @Arg("id") id: string,
    @Arg("data", () => UpdateInput) data: UpdateInput
  ): Promise<Boolean> {
    await User.update({ id }, data);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id") id: string): Promise<Boolean> {
    await User.delete({ id });
    return true;
  }
}
