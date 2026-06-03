import { NextFunction, Request, Response } from "express";

import { ZodType } from "zod";

import ApiResponse from "../shared/types/api-response.type";
import { AppError } from "../shared/errors/app-errors";

export const validate = (schema: ZodType) => (req: Request, res: Response<ApiResponse<null>>, next: NextFunction) => {
  const result = schema.safeParse({
    body: req.body,
    params: req.params,
    query: req.query,
  });

  if (!result.success) {
    let errorMessage = result.error.issues.map((issue) => issue.message).join(", ");

    throw new AppError(errorMessage, 400);
  }

  next();
};
