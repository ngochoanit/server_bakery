import express from "express";
import { getListProduct } from "../controllers/productControllers";
import {
  handleCreateUser,
  handleGetListUser,
  handleGetUserById,
  handleLogin,
} from "../controllers/userController";
import { isAuth } from "../middleware/AuthMiddleware";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.send("hello world");
  });
  router.post("/admin/login", handleLogin);
  router.post("/admin/user", handleCreateUser);
  router.get("/admin/user", handleGetListUser);
  router.get("/admin/user/:id", handleGetUserById);
  //private routes
  router.use(isAuth);

  return app.use("/", router);
};
export default initWebRoutes;
