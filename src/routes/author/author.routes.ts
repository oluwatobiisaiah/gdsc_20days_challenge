import { Router } from "express";
import asyncWrapper from "../../middlewares/asyncWrapper";
import container from "../../utils/helpers/ioc.config";
import AuthorController from "../../controllers/author/author.controller";
import { validateCreateAuthor } from "../../utils/validations";

const authorRoutes = Router();
const authorController = container.resolve(AuthorController);

authorRoutes.route("/author").post(validateCreateAuthor, asyncWrapper(authorController.createAuthor)).get(asyncWrapper(authorController.getAllAuthors));
authorRoutes.route("/author/:id").get(asyncWrapper(authorController.getAnAuthor)).patch(validateCreateAuthor,asyncWrapper(authorController.updateAuthor)).delete(asyncWrapper(authorController.deleteAuthor));

export default authorRoutes;