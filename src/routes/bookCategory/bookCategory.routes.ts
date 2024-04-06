import { Router } from "express";
import asyncWrapper from "../../middlewares/asyncWrapper";
import container from "../../utils/helpers/ioc.config";
import BookCategoryController from "../../controllers/bookCategory/bookCategory.controller";
import { validateCreateBookCategory } from "../../utils/validations";

const bookCategoryRoutes = Router();
const bookCategoryController = container.resolve(BookCategoryController);
bookCategoryRoutes.route("/book-category").post(validateCreateBookCategory, asyncWrapper(bookCategoryController.createBookCategory)).get(asyncWrapper(bookCategoryController.getAllBookCategories));
bookCategoryRoutes.route("/book-category/:id").get(asyncWrapper(bookCategoryController.getABookCategory)).patch(validateCreateBookCategory, asyncWrapper(bookCategoryController.updateBookCategory)).delete(asyncWrapper(bookCategoryController.deleteBookCategory));
export default bookCategoryRoutes;