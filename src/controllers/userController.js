import { ERROR_CODE } from "../constants/errorCode";
import { regexEmail, regexPassword } from "../helpers/validate.helper";
import { createUserService, handleUserLogin } from "../services/userService";

export const handleLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.status(400).json(ERROR_CODE.EMAIL_OR_PASSWORD_INCORRECT);
    }
    if (!regexEmail.test(email)) {
      console.log("first");
      return res.status(400).json(ERROR_CODE.EMAIL_INVALID);
    }
    if (!regexPassword.test(password)) {
      return res.status(400).json(ERROR_CODE.PASSWORD_INVALID);
    }
    const result = await handleUserLogin(email, password);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(200).json(ERROR_CODE.SERVER_ERROR);
  }
};
export const handleCreateUser = async (req, res) => {
  try {
    const data = req.body;
    const email = data.email;
    const password = data.password;

    if (!email || !password) {
      return res.status(400).json(ERROR_CODE.EMAIL_OR_PASSWORD_INCORRECT);
    }
    if (!regexEmail.test(email)) {
      console.log("first");
      return res.status(400).json(ERROR_CODE.EMAIL_INVALID);
    }
    if (!regexPassword.test(password)) {
      return res.status(400).json(ERROR_CODE.PASSWORD_INVALID);
    }
    const result = await createUserService(data);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(200).json(ERROR_CODE.SERVER_ERROR);
  }
};
