import { Router } from "express";
import asyncWrapper from "../../middlewares/asyncWrapper";
import container from "../../utils/helpers/ioc.config";
import BookSubCategoryController from "../../controllers/bookSubCategory/bookSubCategory.controller";
import { validateCreateBookSubCategory } from "../../utils/validations";

const bookSubCategoryRoutes = Router();
const bookSubCategoryController = container.resolve(BookSubCategoryController);
bookSubCategoryRoutes.route("/book-category").post(validateCreateBookSubCategory, asyncWrapper(bookSubCategoryController.createBookSubCategory)).get(asyncWrapper(bookSubCategoryController.getAllBookSubCategories));
bookSubCategoryRoutes.route("/book-category/:id").get(asyncWrapper(bookSubCategoryController.getABookSubCategory)).patch(validateCreateBookSubCategory, asyncWrapper(bookSubCategoryController.updateBookSubCategory)).delete(asyncWrapper(bookSubCategoryController.deleteBookSubCategory));
export default bookSubCategoryRoutes;