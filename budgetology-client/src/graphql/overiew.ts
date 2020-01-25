import gql from "graphql-tag";

export const overviewQuery = gql`
  query overview($id: String!) {
    user(id: $id) {
      cash
      budget
      bankAccounts {
        moneyAmount
      }
    }
  }
`;
export const bankAccountsQuery = gql`
  query bankAccounts($id: String!) {
    user(id: $id) {
      bankAccounts {
        bankName
        id
      }
    }
  }
`;

export const addBankAccountMutation = gql`
  mutation AddBankAccount($id: String!, $data: BankAccountInput!) {
    addBankAccount(id: $id, data: $data)
  }
`;
