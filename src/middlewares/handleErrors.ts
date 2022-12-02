import { Request, NextFunction, Response } from "express";

export function handleErrors(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof Error) {
    return response.json({
      message: error.message,
      status: 400
    });
  }

  return next();
}