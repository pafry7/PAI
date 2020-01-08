import { Connection } from "typeorm";
import { User } from "entity/User";
import bcrypt from "bcryptjs";
import faker from "faker";
import { graphqlCall } from "test-utils/graphqlCall";
import { testConnection } from "test-utils/testConnection";
let connection: Connection;

beforeAll(async () => {
  connection = await testConnection();
});

afterAll(async () => {
  await connection.close();
});

const registerMutation = `
mutation Register($input: AuthInput!){
  register(input: $input) {
    user {
      id
      name
      email
    }
  }
}
`;

describe("Register", () => {
  it("register user", async () => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password()
    };
    const response = await graphqlCall({
      source: registerMutation,
      variableValues: {
        input: user
      }
    });
    expect(response).toMatchObject({
      data: {
        register: {
          user: {
            email: user.email,
            name: null
          }
        }
      }
    });

    const dbUser = await User.findOne({ where: { email: user.email } });
    expect(dbUser).toBeDefined();
    expect(dbUser!.name).toBeNull();
    expect(dbUser!.email).toBe(user.email);
  });

  it("register user fails if email exists", async () => {
    const existingUser = await User.create({
      email: faker.internet.email(),
      password: faker.internet.password()
    }).save();

    const user = {
      email: existingUser.email,
      password: faker.internet.password()
    };
    const response = await graphqlCall({
      source: registerMutation,
      variableValues: {
        input: user
      }
    });
    expect(response).toMatchObject({
      data: {
        register: {
          user: null
        }
      }
    });
  });
});

const meQuery = `
 {
  me {
    id
    email
    name
  }
}
`;
describe("Me", () => {
  it("returns not authenticated when no userId", async () => {
    const response = await graphqlCall({
      source: meQuery
    });

    expect(response).toMatchObject({
      errors: [
        {
          message: "not authenticated"
        }
      ],
      data: {
        me: null
      }
    });
  });

  it("get user", async () => {
    const user = await User.create({
      name: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }).save();

    const response = await graphqlCall({
      source: meQuery,
      userId: user.id
    });

    expect(response).toMatchObject({
      data: {
        me: {
          id: `${user.id}`,
          name: user.name,
          email: user.email
        }
      }
    });
  });
});

const loginMutation = `
mutation Login($input: AuthInput!){
  login(input: $input) {
    user {
      id
      email
      name
    }
  }
}
`;

describe("Login", () => {
  it("logins correcly", async () => {
    const password = faker.internet.password();

    const userTest = await User.create({
      email: faker.internet.email(),
      password: await bcrypt.hash(password, 12)
    }).save();

    const input = {
      email: userTest.email,
      password: password
    };

    const response = await graphqlCall({
      source: loginMutation,
      variableValues: {
        input: input
      }
    });

    expect(response).toMatchObject({
      data: {
        login: {
          user: {
            email: userTest.email,
            name: null
          }
        }
      }
    });
  });
  //zle zwraca cos
  it("returns error when incorrect email", async () => {
    const input = {
      email: faker.internet.email(),
      password: faker.internet.password()
    };

    const response = await graphqlCall({
      source: loginMutation,
      variableValues: {
        input: input
      }
    });

    expect(response).toMatchObject({
      data: {
        login: {
          user: null
        }
      }
    });
  });
});

// const logoutMutation = `
// mutation Logout {
//   logout
// }
// `;
// describe("Logout", () => {
//   it("Logout correctly", async () => {
//     const user = await User.create({
//       name: faker.name.lastName(),
//       email: faker.internet.email(),
//       password: faker.internet.password()
//     }).save();

//     const response = await graphqlCall({
//       source: logoutMutation,
//       userId: user.id
//     });
//     console.log(response.data);
//     expect(response).toMatchObject({
//       data: {
//         logout: true
//       }
//     });
//   });
// });
