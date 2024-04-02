import { Router } from "express";
import rateLimiter from "../middlewares/rateLimiter";
import helloRoutes from "./hello/hello.routes";
const applicationRoutes = Router();
applicationRoutes.use(rateLimiter)
applicationRoutes.use(helloRoutes)

export default applicationRoutes;