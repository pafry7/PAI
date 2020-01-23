import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export const LOGIN_USER = gql`
  mutation Login($input: AuthInput!) {
    login(input: $input) {
      user {
        id
      }
    }
  }
`;
