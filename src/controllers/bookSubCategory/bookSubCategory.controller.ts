import { autoInjectable } from "tsyringe";
import { NextFunction, Request,Response } from "express";
import { createCustomError } from "../../errors/customErrors";


@autoInjectable()
export default class BookSubCategoryController{
    async createBookSubCategory(req:Request,res:Response,next:NextFunction){
        try {
           
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async getAllBookSubCategories(req:Request,res:Response,next:NextFunction){
        try {
           
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async getABookSubCategory(req:Request,res:Response,next:NextFunction){
        try {
           
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async updateBookSubCategory(req:Request,res:Response,next:NextFunction){
        try {
           
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async deleteBookSubCategory(req:Request,res:Response,next:NextFunction){
        try {
           
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }
}