import jwt from "jsonwebtoken";
import { accessTokenLife, jwtSecret, refreshTokenLife } from "../config";

export const generateToken = (payload) => {
  let token = null;
  try {
    token = jwt.sign(payload, jwtSecret, {
      algorithm: "HS256",
      expiresIn: accessTokenLife,
    });
  } catch (err) {
    console.log(err);
  }
  return token;
};
export const generateRefreshToken = (payload) => {
  let token = null;
  try {
    token = jwt.sign(payload, jwtSecret, {
      algorithm: "HS256",
      expiresIn: refreshTokenLife,
    });
  } catch (err) {
    console.log(err);
  }
  return token;
};
export const verifyToken = (token) => {
  let data = null;
  try {
    data = jwt.verify(token, jwtSecret);
  } catch (err) {
    console.log(err);
  }
  return data;
};
