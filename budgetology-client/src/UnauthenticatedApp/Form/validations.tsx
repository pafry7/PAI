interface Values {
  email: string;
  password: string;
  confirmPassword?: string;
  confirmEmail?: string;
}
const validateSignup = (values: any) => {
  const errors: Partial<Values> = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  } else if (!values.confirmEmail) {
    errors.confirmEmail = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.confirmEmail = "Invalid email adress";
  } else if (
    values.confirmPassword &&
    values.password !== values.confirmPassword
  ) {
    errors.password = errors.confirmPassword = "Passwords are not equal";
  } else if (values.confirmEmail && values.email !== values.confirmEmail) {
    errors.email = errors.confirmEmail = "Emails are not equal";
  } else if (!values.password) {
    errors.password = "Required";
  } else if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  }
  return errors;
};

const validateLogin = (values: any) => {
  const errors: Partial<Values> = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  } else if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

export { validateLogin, validateSignup };
