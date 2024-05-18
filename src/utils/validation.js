const nameExpressions = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
const emailExpressions = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const passwordExpressions =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const validateLoginData = (email, password) => {
  const isEmailValid = emailExpressions.test(email);
  const isPasswordValid = passwordExpressions.test(password);

  if (!isEmailValid) return "Invalid email!";
  if (!isPasswordValid) return "Invalid password!";

  return null;
};

export const validateSignupData = (name, email, password) => {
  const isNameValid = nameExpressions.test(name);
  const isEmailValid = emailExpressions.test(email);
  const isPasswordValid = passwordExpressions.test(password);

  if (!isNameValid) return "Invalid Name!";
  if (!isEmailValid) return "Invalid email!";
  if (!isPasswordValid) return "Invalid password!";

  return null;
};
