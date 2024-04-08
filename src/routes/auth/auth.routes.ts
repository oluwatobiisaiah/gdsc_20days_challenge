import { Router } from "express";
import asyncWrapper from "../../middlewares/asyncWrapper";
import container from "../../utils/helpers/ioc.config";
import AuthController from "../../controllers/auth/auth.controller";
import { validateCreateAuthor } from "../../utils/validations";

const authRoutes = Router();
const authController = container.resolve(AuthController);

authRoutes.route("/login").post(asyncWrapper(authController.login));
authRoutes.route("/register").post(asyncWrapper(authController.register));


export default authRoutes;