import gql from "graphql-tag";

export const registerMutation = gql`
  mutation Register($input: AuthInput!) {
    register(input: $input) {
      user {
        id
        name
        email
      }
    }
  }
`;
