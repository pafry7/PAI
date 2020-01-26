import gql from "graphql-tag";

export const moneyFlow = gql`
  query moneyFlow($id: String!) {
    all(id: $id) {
      amount
      id
      description
      date
      type
      bankName
    }
  }
`;
