import { NextFunction, Request,Response } from "express";
import { autoInjectable } from "tsyringe";
import { createCustomError } from "../../errors/customErrors";
import AuthorService from "../../services/author/author.service";
import container from "../../utils/helpers/ioc.config";
import { successResponse } from "../../utils/helpers/responseTraits";
@autoInjectable()
export default class AuthorController{
    async createAuthor(req:Request,res:Response,next:NextFunction){
        try {
            const authorService = container.resolve(AuthorService);
            const {firstName,lastName} = req.body;
            const author = await authorService.save({...req.body,firstName,lastName});
            res.status(201).json(
                successResponse({
                  data: author,
                  message: "Author created successfully",
                  statusCode: 201,
                })
              );
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async getAllAuthors(req:Request,res:Response,next:NextFunction){
        try {
            const authorService = container.resolve(AuthorService);
            const authors = await authorService.getAll();
            res.status(200).json(
                successResponse({
                  data: authors,
                  message: "Authors fetched successfully",
                  statusCode: 200,
                })
              );
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async getAnAuthor(req:Request,res:Response,next:NextFunction){
        try {
            const id = req.params.id;
            const authorService = container.resolve(AuthorService);
            const author = await authorService.getOne(id);
            res.status(200).json(
                successResponse({
                  data: author,
                  message: "Author fetched successfully",
                  statusCode: 200,
                })
              );
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async updateAuthor(req:Request,res:Response,next:NextFunction){
        try {
            const id = req.params.id;
            const authorService = container.resolve(AuthorService);
            const author = await authorService.update({id},{...req.body});
            res.status(200).json(
                successResponse({
                  data: author,
                  message: "Author updated successfully",
                  statusCode: 200,
                })
              );
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async deleteAuthor(req:Request,res:Response,next:NextFunction){
        try {
            const id = req.params.id;
            const authorService = container.resolve(AuthorService);
            await authorService.delete(id);
            res.status(200).json(
                successResponse({
                  data: null,
                  message: "Author deleted successfully",
                  statusCode: 200,
                })
              );
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }
}