import { Router } from "express";
import asyncWrapper from "../../middlewares/asyncWrapper";
import { helloWithHtml, helloWithJson } from "../../controllers/hello/hello.controllers";

const helloRoutes = Router();

helloRoutes.get(`/hello`,asyncWrapper(helloWithHtml))
helloRoutes.get(`/api/hello`,asyncWrapper(helloWithJson))
export default helloRoutes;