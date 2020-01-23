import { Field, Form, Formik } from "formik";
import { LinearProgress, makeStyles } from "@material-ui/core";
import {
  useLoginMutation,
  useRegisterMutation
} from "generated/apolloComponents";
import {
  validateLogin,
  validateSignup
} from "UnauthenticatedApp/Form/validations";

import React from "react";
import { TextField } from "formik-material-ui";
import { useAuth } from "common/AuthContent";

const useStyles = makeStyles(theme => ({
  dialogText: {
    color: theme.palette.common.black
  }
}));

interface AuthFormProps {
  text?: string;
}

export const AuthForm = ({ text }: AuthFormProps) => {
  const classes = useStyles();
  const { login }: any = useAuth();
  const [loginMutation] = useLoginMutation();
  const [registerMutation] = useRegisterMutation();

  return (
    <Formik
      initialValues={
        text === "Sign up"
          ? {
              email: "",
              password: "",
              confirmEmail: "",
              confirmPassword: ""
            }
          : { email: "", password: "" }
      }
      validate={text === "Sign up" ? validateSignup : validateLogin}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        setSubmitting(true);
        text === "Login"
          ? loginMutation({
              variables: {
                input: { ...values }
              }
            })
              .then(response => {
                if (
                  response &&
                  response.data &&
                  response.data.login &&
                  response.data.login.user &&
                  response.data.login.user.id
                ) {
                  login();
                }
              })
              .catch(err => {
                setErrors({ password: "Bad input" });
                console.log(err.graphQLErrors);
              })
              .finally(() => setSubmitting(false))
          : registerMutation({
              variables: {
                input: { email: values.email, password: values.password }
              }
            })
              .then(response => {
                if (
                  response &&
                  response.data &&
                  response.data.register &&
                  response.data.register.user &&
                  response.data.register.user.id
                ) {
                  login();
                }
              })
              .catch(err => {
                setErrors({ confirmPassword: "Bad input" });
                console.log(err);
              })
              .finally(() => setSubmitting(false));
      }}
    >
      {({ isSubmitting }) => (
        <Form id="auth-form">
          <Field
            name="email"
            autoFocus
            type="email"
            label="Email"
            InputProps={{ className: classes.dialogText }}
            margin="dense"
            variant="outlined"
            color="secondary"
            fullWidth
            component={TextField}
          />
          <br />
          {text === "Sign up" ? (
            <>
              <Field
                name="confirmEmail"
                type="email"
                label="Confirm email"
                InputProps={{ className: classes.dialogText }}
                margin="dense"
                variant="outlined"
                color="secondary"
                fullWidth
                component={TextField}
              />
              <br />
            </>
          ) : null}
          <Field
            type="password"
            margin="dense"
            variant="outlined"
            color="secondary"
            fullWidth
            InputProps={{ className: classes.dialogText }}
            label="Password"
            name="password"
            component={TextField}
          />

          <br />
          {text === "Sign up" ? (
            <>
              <Field
                name="confirmPassword"
                type="password"
                label="Confirm password"
                InputProps={{ className: classes.dialogText }}
                margin="dense"
                variant="outlined"
                color="secondary"
                fullWidth
                component={TextField}
              />
              <br />
            </>
          ) : null}
          {isSubmitting && <LinearProgress />}
          <br />
        </Form>
      )}
    </Formik>
  );
};
