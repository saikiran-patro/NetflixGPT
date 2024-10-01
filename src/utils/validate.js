// Email validation regex (updated)
const ReEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Password validation regex
const RePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const validateSignIn = (email, password) => {
  const emailCheck = ReEmail.test(email);
  const passwordCheck = RePassword.test(password);

  if (!emailCheck) {
    return "Email is not valid";
  }
  if (!passwordCheck) {
    return "Password is not valid";
  }
  return null;
};

export const validateSignUp = (email, password, rePassword) => {
  const emailCheck = ReEmail.test(email);
  const passwordCheck = RePassword.test(password);
  const rePasswordCheck = RePassword.test(rePassword);

  if (!emailCheck) {
    return "Email is not valid";
  }
  if (!passwordCheck) {
    return "Password is not valid";
  }
  if (!rePasswordCheck) {
    return "Re-Password is not valid";
  }
  if (password !== rePassword) {
    return "Passwords do not match";
  }
  return null;
};
