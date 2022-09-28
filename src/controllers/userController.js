import { ERROR_CODE } from "../constants/errorCode";
import { regexEmail, regexPassword } from "../helpers/validate.helper";
import {
  createUserService,
  getListUserService,
  getUserById,
  handleUserLogin,
} from "../services/userService";

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
export const handleGetListUser = async (req, res) => {
  try {
    const data = req.query;
    const { records = 0, pages = 1 } = data;
    console.log(records, pages);
    const result = await getListUserService(records, pages);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(200).json(ERROR_CODE.SERVER_ERROR);
  }
};
export const handleGetUserById = async (req, res) => {
  try {
    if (req.params && req.params.id) {
      const result = await getUserById(req.params.id);
      return res.status(200).json(result);
    } else {
      return res.status(200).json(ERROR_CODE.MISSING_PARAM);
    }
  } catch (err) {
    console.log(err);
    return res.status(200).json(ERROR_CODE.SERVER_ERROR);
  }
};
