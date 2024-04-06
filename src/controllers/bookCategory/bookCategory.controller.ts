import { autoInjectable } from "tsyringe";
import { successResponse } from "../../utils/helpers/responseTraits";
import { NextFunction, Request,Response } from "express";
import { createCustomError } from "../../errors/customErrors";


@autoInjectable()
export default class BookCategoryController{
    async createBookCategory(req:Request,res:Response,next:NextFunction){
        try {
            // const bookCategoryService = container.resolve(BookCategoryService);
            // const {name} = req.body;
            // const bookCategory = await bookCategoryService.save({...req.body,name});
            // res.status(201).json(
            //     successResponse({
            //       data: bookCategory,
            //       message: "Book Category created successfully",
            //       statusCode: 201,
            //     })
            //   );
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async getAllBookCategories(req:Request,res:Response,next:NextFunction){
        try {
            // const bookCategoryService = container.resolve(BookCategoryService);
            // const bookCategories = await bookCategoryService.getAll();
            // res.status(200).json(
            //     successResponse({
            //       data: bookCategories,
            //       message: "Book Categories fetched successfully",
            //       statusCode: 200,
            //     })
            //   );
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async getABookCategory(req:Request,res:Response,next:NextFunction){
        try {
            // const id = req.params.id;
            // const bookCategoryService = container.resolve(BookCategoryService);
            // const bookCategory = await bookCategoryService.getOne(id);
            // res.status(200).json(
            //     successResponse({
            //       data: bookCategory,
            //       message: "Book Category fetched successfully",
            //       statusCode: 200,
            //     })
            //   );
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async updateBookCategory(req:Request,res:Response,next:NextFunction){
        try {
            // const id = req.params.id;
            // const bookCategoryService = container.resolve(BookCategoryService);
            // const bookCategory = await bookCategoryService.update({id},{...req.body});
            // res.status(200).json(
            //     successResponse({
            //       data: bookCategory,
            //       message: "Book Category updated successfully",
            //       statusCode: 200,
            //     })
            //   );
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async deleteBookCategory(req:Request,res:Response,next:NextFunction){
        try {
            // const id = req.params.id;
            // const bookCategoryService = container.resolve(BookCategoryService);
            // const bookCategory = await bookCategoryService.delete(id);
            // res.status(200).json(
            //     successResponse({
            //       data: bookCategory,
            //       message: "Book Category deleted successfully",
            //       statusCode: 200,
            //     })
            //   );
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }
}
