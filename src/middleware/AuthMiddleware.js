import jwt from "jsonwebtoken";
import { jwtSecret } from "../configs";
import { ERROR_CODE } from "../constants/errorCode";
import { verifyToken } from "../helpers/jwt.helper";

export const isAuth = async (req, res, next) => {
  // Lấy token được gửi lên từ phía client, thông thường tốt nhất là các bạn nên truyền token vào header
  const tokenFromClient = req.body.token || req.query.token || req.headers["x-access-token"];

  if (tokenFromClient) {
    // Nếu tồn tại token
    try {
      // Thực hiện giải mã token xem có hợp lệ hay không?
      const decoded = await verifyToken(tokenFromClient, accessTokenSecret);

      // Nếu token hợp lệ, lưu thông tin giải mã được vào đối tượng req, dùng cho các xử lý ở phía sau.
      req.jwtDecoded = decoded;

      // Cho phép req đi tiếp sang controller.
      next();
    } catch (error) {
      // Nếu giải mã gặp lỗi: Không đúng, hết hạn...etc:
      // Lưu ý trong dự án thực tế hãy bỏ dòng debug bên dưới, mình để đây để debug lỗi cho các bạn xem thôi
      return res.status(401).json(ERROR_CODE.TOKEN_INCORRECT_OR_TOKEN_EXPIRED);
    }
  } else {
    // Không tìm thấy token trong request
    return res.status(403).send(ERROR_CODE.NO_TOKEN_PROVIDED);
  }
}