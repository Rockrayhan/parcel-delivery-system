import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodSchema } from "zod";

export const validateRequest =
  (ZodSchema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = await ZodSchema.parseAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  };
