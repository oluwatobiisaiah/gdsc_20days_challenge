import { autoInjectable } from "tsyringe";
import { createCustomError } from "../../errors/customErrors";
import { NextFunction, Request,Response } from "express";
import container from "../../utils/helpers/ioc.config";
import BookService from "../../services/book/book.service";

@autoInjectable()
export default class BookController{
    async createBook(req:Request,res:Response,next:NextFunction){
        try {
            const bookService = container.resolve(BookService);
            const book = await bookService.save(req.body);
            res.status(201).json({
                data:book,
                message:"Book created successfully",
                statusCode:201
            });
            
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async getAllBooks(req:Request,res:Response,next:NextFunction){
        try {
            const bookService = container.resolve(BookService);
            const books = await bookService.getAll();
            res.status(200).json({
                data:books,
                message:"Books fetched successfully",
                statusCode:200
            });
            
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    
    async getABook(req:Request,res:Response,next:NextFunction){
        try {
            const bookService = container.resolve(BookService);
            const id = req.params.id;
            const book = await bookService.getOne({id});
            if(!book) throw createCustomError("Book not found",404);
            res.status(200).json({
                data:book,
                message:"Book fetched successfully",
                statusCode:200
            });
            
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async updateBook(req:Request,res:Response,next:NextFunction){
        try {
            const bookService = container.resolve(BookService);
            const id = req.params.id;
            const singleBook = await bookService.getOne({id});
            if(!singleBook) throw createCustomError("Book not found",404);
            
            const book = await bookService.update({id},req.body);
            res.status(200).json({
                data:book,
                message:"Book updated successfully",
                statusCode:200
            });
            
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async deleteBook(req:Request,res:Response,next:NextFunction){
        try {
            const bookService = container.resolve(BookService);
            const id = req.params.id;
            const singleBook = await bookService.getOne({id});
            if(!singleBook) throw createCustomError("Book not found",404);
            await bookService.delete(id);
            res.status(200).json({
                data:null,
                message:"Book deleted successfully",
                statusCode:200
            });
            
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

}