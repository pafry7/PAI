import gql from "graphql-tag";

export const addCashMutation = gql`
  mutation addCash($id: String!, $amount: Float!) {
    addCash(id: $id, amount: $amount)
  }
`;

export const subtractCashMutation = gql`
  mutation subtractCash($id: String!, $amount: Float!) {
    subtractCash(id: $id, amount: $amount)
  }
`;

export const addIncome = gql`
  mutation addIncome(
    $id: String!
    $amount: Float!
    $description: String!
    $date: DateTime!
  ) {
    addIncome(id: $id, amount: $amount, description: $description, date: $date)
  }
`;

export const addExpense = gql`
  mutation addExpense(
    $id: String!
    $amount: Float!
    $description: String!
    $date: DateTime!
  ) {
    addExpense(id: $id, amount: $amount, description: $description, date: $date)
  }
`;
