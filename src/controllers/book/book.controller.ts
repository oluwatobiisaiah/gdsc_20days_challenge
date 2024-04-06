import { autoInjectable } from "tsyringe";
import { createCustomError } from "../../errors/customErrors";
import { NextFunction, Request,Response } from "express";

@autoInjectable()
export default class BookController{
    async createBook(req:Request,res:Response,next:NextFunction){
        try {
            
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async getAllBooks(req:Request,res:Response,next:NextFunction){
        try {
            
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    
    async getABook(req:Request,res:Response,next:NextFunction){
        try {
            
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async updateBook(req:Request,res:Response,next:NextFunction){
        try {
            
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async deleteBook(req:Request,res:Response,next:NextFunction){
        try {
            
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

}