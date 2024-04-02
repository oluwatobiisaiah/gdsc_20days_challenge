import { Request, Response,NextFunction } from 'express';
import { successResponse } from '../../utils/helpers/responseTraits';

export const helloWithHtml = (req:Request,res:Response,next:NextFunction)=>{
    return res.status(200).send(`<b>Hello, GDSC!</b>`)
}   

export const helloWithJson = (req:Request,res:Response,next:NextFunction)=>{
    return res.status(200).json(successResponse({message:"Hello, GDSC!",statusCode:200,data:null}))
}