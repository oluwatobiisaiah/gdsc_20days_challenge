import { Request, Response, NextFunction } from "express";
import config from "../../utils/config/config";
import jwt, {Secret } from "jsonwebtoken";
import { errorResponse } from "./responseTraits";
import { UserDTO } from "../../dto/user.dto";

export const generateJWT = (payload: Pick<UserDTO,"username"|"id">, expiry: string) => {
  return { verify: jwt.sign({ payload }, config.JWT_SECRET as Secret, { expiresIn: expiry }) };
};

export const decodeJWT = (token: any): any /*Partial<userDTO> & { nextStep: number, type: string, servedAtStep: number }|JwtPayload |string */ => {
  try {
    return {verify: jwt.verify(token, config.JWT_SECRET as Secret)};
  } catch (error: any) {
    return {
      verify: false,
      message: error.message,
    };
  }
};

export const validateToken = (req: Request, res: Response, next: NextFunction): void => {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer ")
    ) {
      res.status(403).json(errorResponse({
        statusCode: 403,
        message: "User unauthorized to access this route...",
        data: null,
      }));
      return;
    }

    const authData = decodeJWT(req.headers.authorization.split(" ")[1]);
    if (authData.verify) {
      next();
    } else {
      res.status(403).json(errorResponse({ statusCode: 403, message: "User unauthorized", data: null }));
    }
  } catch (error: any) {
    res.status(403).json(errorResponse({
      statusCode: 403,
      message: error.message,
      data: null
    }));
  }
}