import { Request, Response, NextFunction, response } from "express";
import ApiResponse from "../shared/types/api-response.type";

export const errorMiddleware = (error: Error, req: Request, res: Response<ApiResponse<null>>, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: error.message,
    data: null,
  });
};
