import { ERROR_CODE } from "../../constants/errorCode";
import { regexEmail, regexPassword } from "../../helpers/validate.helper";
import { handleUserLogin } from "../../services/userService";

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
