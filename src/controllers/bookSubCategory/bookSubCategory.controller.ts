import { autoInjectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { createCustomError } from "../../errors/customErrors";
import BookSubCategoryService from "../../services/bookSubCategory/bookSubCategory.service";
import container from "../../utils/helpers/ioc.config";
import { successResponse } from "../../utils/helpers/responseTraits";

@autoInjectable()
export default class BookSubCategoryController {
    async createBookSubCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const bookSubCategoryService = container.resolve(BookSubCategoryService);
            const bookSubCategory = await bookSubCategoryService.save(req.body);
            res.status(201).json(
                successResponse({
                    data:bookSubCategory,
                    message:"Book subcategory created",
                    statusCode:201
                })
            );
        } catch (error) {
            next(
                createCustomError(error.message, error.statusCode ?? 500)
            );
        }
    }

    async getAllBookSubCategories(req: Request, res: Response, next: NextFunction) {
        try {
            const bookSubCategoryService = container.resolve(BookSubCategoryService);
            const bookCategories = await bookSubCategoryService.getAll();
            res.status(200).json(
                successResponse({
                  data: bookCategories,
                  message: "Book subcategories fetched successfully",
                  statusCode: 200,
                })
              );

        } catch (error) {
            next(
                createCustomError(error.message, error.statusCode ?? 500)
            );
        }
    }

    async getABookSubCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const bookSubCategoryService = container.resolve(BookSubCategoryService);
            const bookCategory = await bookSubCategoryService.getOne({id});
            if(!bookCategory) throw createCustomError("Book subcategory not found",404);
            res.status(200).json(
                successResponse({
                  data: bookCategory,
                  message: "Book subcategory fetched successfully",
                  statusCode: 200,
                })
              );
        } catch (error) {
            next(
                createCustomError(error.message, error.statusCode ?? 500)
            );
        }
    }

    async updateBookSubCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const bookSubCategoryService = container.resolve(BookSubCategoryService);
            const id = req.params.id;
            const getBook = await bookSubCategoryService.getOne({id});
            if(!getBook) throw createCustomError("Book subcategory not found",404);
            const bookCategory = await bookSubCategoryService.update({id},{...req.body});
            res.status(200).json(
                successResponse({
                  data: bookCategory,
                  message: "Book subcategory updated successfully",
                  statusCode: 200,
                })
              );
        } catch (error) {
            next(
                createCustomError(error.message, error.statusCode ?? 500)
            );
        }
    }

    async deleteBookSubCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const bookSubCategoryService = container.resolve(BookSubCategoryService);
            const id = req.params.id;
            const getBook = await bookSubCategoryService.getOne({id});
            if(!getBook) throw createCustomError("Book subcategory not found",404);
            const bookCategory = await bookSubCategoryService.delete(id);
            res.status(200).json(
                successResponse({
                  data: bookCategory,
                  message: "Book subcategory deleted successfully",
                  statusCode: 200,
                })
              );
        } catch (error) {
            next(
                createCustomError(error.message, error.statusCode ?? 500)
            );
        }
    }
}