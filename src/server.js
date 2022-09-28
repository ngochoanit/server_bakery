import express from "express";
import bodyParser from "body-parser";
import initWebRoutes from "./route/web";
import { port } from "./config";
import { connectDB } from "./config/connectDB";
import cors from "cors";

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();
initWebRoutes(app);
app.listen(port, () => {
  console.log("backend running" + port);
});
