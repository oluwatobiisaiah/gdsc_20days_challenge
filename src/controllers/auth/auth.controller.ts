import { NextFunction, Request,Response } from "express";
import { autoInjectable } from "tsyringe";
import { createCustomError } from "../../errors/customErrors";
import AuthService from "../../services/auth/auth.service";
import container from "../../utils/helpers/ioc.config";
import { successResponse } from "../../utils/helpers/responseTraits";
@autoInjectable()
export default class AuthController{
    async register(req:Request,res:Response,next:NextFunction){
        try {
            const authService = container.resolve(AuthService);
            const newUser = await authService.signUp({...req.body});
            res.status(201).json(
                successResponse({
                  data: newUser,
                  message: "User created successfully",
                  statusCode: 201,
                })
              );
        } catch (error) {
            next(
                createCustomError(error.message,error.statusCode??500)
            );
        }
    }

    async login(req:Request,res:Response,next:NextFunction){
        try {
            const authService = container.resolve(AuthService);
            const user = await authService.login(req.body);
            res.status(200).json(
                successResponse({
                  data: user,
                  message: "User logged in successfully",
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