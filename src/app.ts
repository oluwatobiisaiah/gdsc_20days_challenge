import "reflect-metadata";
import express, { Application,Request,Response } from "express"
import helmet from "helmet";
import cors from "cors";
import xssClean from "xss-clean"
import corsOptions from "./utils/config/cors";
import { notFound } from "./middlewares/errors/notFound";
import {advancedErrorHandler} from "./middlewares/errors/errorHandler"
import applicationRoutes from "./routes";

const app:Application = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(xssClean());
app.disable("x-powered-by");

app.get(`/api/v1/health`, (_: Request, res: Response) => {
  return res
    .status(200)
    .json({ message: "Server running!", statusCode: 200, data: null });
});
app.use("/",applicationRoutes)
app.use(notFound);
app.use(advancedErrorHandler)

export default app;