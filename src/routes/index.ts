import { Router } from "express";
import rateLimiter from "../middlewares/rateLimiter";
import helloRoutes from "./hello/hello.routes";
import authorRoutes from "./author/author.routes";
import bookRoutes from "./book/book.routes";
import bookCategoryRoutes from "./bookCategory/bookCategory.routes";
import bookSubCategoryRoutes from "./bookSubCategory/bookSubCategory.routes";
import authRoutes from "./auth/auth.routes";
const applicationRoutes = Router();
applicationRoutes.use(rateLimiter);
applicationRoutes.use(helloRoutes);
applicationRoutes.use(authorRoutes);
applicationRoutes.use(bookRoutes);
applicationRoutes.use(bookCategoryRoutes);
applicationRoutes.use(bookSubCategoryRoutes);
applicationRoutes.use(authRoutes);

export default applicationRoutes;