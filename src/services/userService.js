import { ERROR_CODE } from "../constants/errorCode";
import { generateRefreshToken, generateToken } from "../helpers/jwt.helper";
import bcrypt from "bcryptjs";
import db from "../models";

let tokenList = {};
const checkUserEmail = async (userEmail) => {
  try {
    const result = await db.User.findOne({
      where: { email: userEmail },
      raw: true,
    });
    if (result) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const hashUserPassword = async (password) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(password, salt);
    return hashPassword;
  } catch (err) {
    throw new Error(err);
  }
};

export const handleUserLogin = async (email, password) => {
  try {
    const db = await getDB();
    const isExist = await checkUserEmail(email);
    if (isExist) {
      const user = await db.User.findOne({
        where: { email: email },
        attributes: [
          "id",
          "email",
          "role",
          "password",
          "firstName",
          "lastName",
        ],
        raw: true,
      });
      if (user) {
        //compare password
        const check = await bcrypt.compareSync(password, user.password);
        if (check) {
          // userData.errCode = 0;
          // userData.errMessage = `OK`;
          // delete user.password;
          // userData.userInfo = user;
          console.log("asdasd");
        }
      }
      if (rows.length === 1) {
        const accessToken = await generateToken({
          userId: rows[0].id,
          roleId: rows[0].role,
          email: rows[0].email,
        });
        const refreshToken = await generateRefreshToken({
          userId: rows[0].id,
          roleId: rows[0].role,
          email: rows[0].email,
        });
        tokenList[refreshToken] = { accessToken, refreshToken };
        return {
          ...ERROR_CODE.OK,
          data: {
            accessToken: accessToken,
            userId: rows[0].id,
            role: rows[0].role,
            email: rows[0].email,
          },
        };
      } else {
        return ERROR_CODE.EMAIL_OR_PASSWORD_INCORRECT;
      }
    }
    return ERROR_CODE.EMAIL_OR_PASSWORD_INCORRECT;
  } catch (err) {
    throw new Error(err);
  }
};

export const createUserService = async function (data) {
  try {
    const isExist = await checkUserEmail(data.email);
    console.log(isExist);
    if (isExist) {
      return ERROR_CODE.EMAIL_ALREADY_IN_USE;
    } else {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      console.log({
        email: data.email,
        password: hashUserPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phone: data.phone,
        role: data.role,
      });
      const result = await db.User.create({
        ...data,
        password: hashPasswordFromBcrypt,
      });
      return {
        ...ERROR_CODE.OK,
        data: {
          ...result.dataValues,
        },
      };
    }
  } catch (err) {
    throw new Error(err);
  }
};
export const getListUserService = async function (records, pages) {
  try {
    const result = await db.User.findAll({
      attributes: { exclude: ["password"] },
      raw: true,
      offset: (pages - 1) * records,
      limit: pages * records,
    });
    console.log(result.dataValues);
    return {
      ...ERROR_CODE.OK,
      data: [...result],
    };
  } catch (err) {
    throw new Error(err);
  }
};

export const getUserById = async (id) => {
  try {
    const user = await db.User.findOne({
      where: { id: id },
      attributes: ["id", "email", "role", "firstName", "lastName"],
      raw: true,
    });
    if (user) {
      return {
        ...ERROR_CODE.OK,
        data: user,
      };
    } else {
      return {
        ...ERROR_CODE.OK,
      };
    }
  } catch (err) {
    throw new Error(err);
  }
};
