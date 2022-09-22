export const ERROR_CODE = {
  OK: {
    ec: 0,
    msg: "OK",
  },
  MISSING_PARAM: {
    ec: 1,
    msg: "Missing inputs parameter",
  },
  EMAIL_INVALID: {
    ec: 2,
    msg: "Email is invalid",
  },
  PASSWORD_INVALID: {
    ec: 2,
    msg: "Password is invalid",
  },
  EMAIL_OR_PASSWORD_INCORRECT: {
    ec: 3,
    msg: "Email or password incorrect",
  },
  TOKEN_INCORRECT_OR_TOKEN_EXPIRED: {
    ec: 4,
    msg: "Token incorrect or expired",
  },
  NO_TOKEN_PROVIDED: {
    ec: 5,
    msg: "No token provided",
  },
  SERVER_ERROR: {
    ec: 6,
    msg: "Server error",
  },
  EMAIL_ALREADY_IN_USE: {
    ec: 7,
    msg: "Email already in use",
  },
};
