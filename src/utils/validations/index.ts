import { NextFunction, Request, Response } from "express";
import { createSchemaFromDto } from "../helpers/dtoToSchema";
import AuthorDTO from "../../dto/author.dto"
import validationHandler from "../../middlewares/validationHandler";
import Joi from "joi";
import BookDTO from "../../dto/book.dto";
import BookSubCategoryDTO from "../../dto/bookSubCategory.dto";
import BookCategoryDTO from "../../dto/bookCategory.dto";

export function validateCreateAuthor(req: Request, res: Response, next: NextFunction){
    const schema =  Joi.object<AuthorDTO>({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        books: Joi.array(),
    });

    validationHandler(req, res, next, schema);
}

export function validateCreateBook(req: Request, res: Response, next: NextFunction){
    const schema =  Joi.object<BookDTO>({
        title: Joi.string().required(),
        authors: Joi.array().required(),
        category: Joi.string().required(),
        subCategory: Joi.string().required(),
        yearPublished: Joi.string().required(),
        yearLastPlublished: Joi.string(),
        quantityAvailable: Joi.number().required(),
        coverUrl: Joi.string(),
        rating:Joi.number(),
        descriptiion: Joi.string().required()
    });

    validationHandler(req, res, next, schema);
}



export function validateCreateBookCategory(req: Request, res: Response, next: NextFunction){
    const schema = Joi.object<BookCategoryDTO>({
        categoryTitle: Joi.string().required(),
        description: Joi.string().required(),
    });

    validationHandler(req, res, next, schema);
}

export function validateCreateBookSubCategory(req: Request, res: Response, next: NextFunction){
    const schema = Joi.object<BookSubCategoryDTO>({
        subCategoryTitle: Joi.string().required(),
        description: Joi.string().required(),
        category: Joi.string().required(),
    });

    validationHandler(req, res, next, schema);
}