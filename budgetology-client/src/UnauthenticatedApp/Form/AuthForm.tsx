import { Field, Form, Formik } from "formik";
import { LinearProgress, makeStyles } from "@material-ui/core";
import {
  validateLogin,
  validateSignup
} from "UnauthenticatedApp/Form/validations";

import React from "react";
import { TextField } from "formik-material-ui";

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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(
            JSON.stringify(
              { email: values.email, password: values.password },
              null,
              2
            )
          );
        }, 500);
      }}
      render={({ isSubmitting }) => (
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
    />
  );
};
