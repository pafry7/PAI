import gql from "graphql-tag";

export const loginMutation = gql`
  mutation Login($input: AuthInput!) {
    login(input: $input) {
      user {
        id
      }
    }
  }
`;
