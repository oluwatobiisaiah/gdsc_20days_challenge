import { Router } from "express";
import asyncWrapper from "../../middlewares/asyncWrapper";
import container from "../../utils/helpers/ioc.config";
import BookController from "../../controllers/book/book.controller";
import { validateCreateBook } from "../../utils/validations";
import { validateToken } from "../../utils/helpers/token";

const bookRoutes = Router();
const bookController = container.resolve(BookController);

// bookRoutes.use(validateToken);
bookRoutes.route("/book").post(validateCreateBook, asyncWrapper(bookController.createBook)).get(asyncWrapper(bookController.getAllBooks));
bookRoutes.route("/book/:id").get(asyncWrapper(bookController.getABook)).patch(validateCreateBook,asyncWrapper(bookController.updateBook)).delete(asyncWrapper(bookController.deleteBook));
export default bookRoutes;