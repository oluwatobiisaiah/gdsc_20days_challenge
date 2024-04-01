// src/middlewares/advancedErrorHandlerMiddleware.ts
import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../../utils/helpers/responseTraits";
import { CustomAPIError } from "../../errors/customErrors";
export const advancedErrorHandler = async (
  err: any,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    return res
      .status(err.code)
      .json(
        errorResponse({
          message: err.message,
          statusCode: err.code,
          data: null,
        })
      );
  } else {
    return res
      .status(500)
      .json(
        errorResponse({
          message: "Something went wrong,please try again later.",
          statusCode: 500,
          data: null,
        })
      );
  }
};
