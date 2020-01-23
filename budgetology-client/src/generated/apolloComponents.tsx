import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AuthInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};

export type FieldError = {
   __typename?: 'FieldError',
  path: Scalars['String'],
  message: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  register: UserResponse,
  login: UserResponse,
  logout: Scalars['Boolean'],
  updateUser: Scalars['Boolean'],
  deleteUser: Scalars['Boolean'],
};


export type MutationRegisterArgs = {
  input: AuthInput
};


export type MutationLoginArgs = {
  input: AuthInput
};


export type MutationUpdateUserArgs = {
  data: UpdateInput,
  id: Scalars['String']
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  me?: Maybe<User>,
  users: Array<User>,
};

export type UpdateInput = {
  email: Scalars['String'],
  password: Scalars['String'],
  name: Scalars['String'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
};

export type UserResponse = {
   __typename?: 'UserResponse',
  user?: Maybe<User>,
  errors?: Maybe<Array<FieldError>>,
};

export type LoginMutationVariables = {
  input: AuthInput
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  ) }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name'>
  )> }
);

export type RegisterMutationVariables = {
  input: AuthInput
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'email'>
    )> }
  ) }
);


export const LoginDocument = gql`
    mutation Login($input: AuthInput!) {
  login(input: $input) {
    user {
      id
    }
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}> = ApolloReactHoc.MutateProps<LoginMutation, LoginMutationVariables> & TChildProps;
export function withLogin<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LogoutMutation, LogoutMutationVariables>, 'mutation'>;

    export const LogoutComponent = (props: LogoutComponentProps) => (
      <ApolloReactComponents.Mutation<LogoutMutation, LogoutMutationVariables> mutation={LogoutDocument} {...props} />
    );
    
export type LogoutProps<TChildProps = {}> = ApolloReactHoc.MutateProps<LogoutMutation, LogoutMutationVariables> & TChildProps;
export function withLogout<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LogoutMutation,
  LogoutMutationVariables,
  LogoutProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, LogoutMutation, LogoutMutationVariables, LogoutProps<TChildProps>>(LogoutDocument, {
      alias: 'logout',
      ...operationOptions
    });
};

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    name
  }
}
    `;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    
export type MeProps<TChildProps = {}> = ApolloReactHoc.DataProps<MeQuery, MeQueryVariables> & TChildProps;
export function withMe<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MeQuery,
  MeQueryVariables,
  MeProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, MeQuery, MeQueryVariables, MeProps<TChildProps>>(MeDocument, {
      alias: 'me',
      ...operationOptions
    });
};

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
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
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>;

    export const RegisterComponent = (props: RegisterComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
    );
    
export type RegisterProps<TChildProps = {}> = ApolloReactHoc.MutateProps<RegisterMutation, RegisterMutationVariables> & TChildProps;
export function withRegister<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RegisterMutation,
  RegisterMutationVariables,
  RegisterProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, RegisterMutation, RegisterMutationVariables, RegisterProps<TChildProps>>(RegisterDocument, {
      alias: 'register',
      ...operationOptions
    });
};

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;