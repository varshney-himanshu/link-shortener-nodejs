import { Request, Response, NextFunction, response } from "express";
import ApiResponse from "../shared/types/api-response.type";
import { AppError } from "../shared/errors/app-errors";

export const errorMiddleware = (error: Error, req: Request, res: Response<ApiResponse<null>>, next: NextFunction) => {
  if (res.headersSent) {
    return next(error as Error);
  }

  let statusCode = 500;
  let message = "Internal Server Error";

  if (error instanceof AppError) {
    statusCode = error.statusCode;
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    data: null,
  });
};
