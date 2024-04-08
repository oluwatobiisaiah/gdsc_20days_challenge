import { Router } from "express";
import asyncWrapper from "../../middlewares/asyncWrapper";
import container from "../../utils/helpers/ioc.config";
import BookController from "../../controllers/book/book.controller";
import { validateCreateBook } from "../../utils/validations";
import { validateToken } from "../../utils/helpers/token";

const bookRoutes = Router();
const bookController = container.resolve(BookController);

// bookRoutes.use(validateToken);
bookRoutes.route("/book").post(validateToken,validateCreateBook, asyncWrapper(bookController.createBook)).get(validateToken,asyncWrapper(bookController.getAllBooks));
bookRoutes.route("/book/:id").get(validateToken,asyncWrapper(bookController.getABook)).patch(validateToken,validateCreateBook,asyncWrapper(bookController.updateBook)).delete(validateToken,asyncWrapper(bookController.deleteBook));
export default bookRoutes;