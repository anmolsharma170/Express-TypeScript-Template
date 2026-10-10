import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

export const validateRequestBody = (schema: ZodObject)=>{
    return async(req: Request,res: Response, next: NextFunction)=>{
        try {
            await schema.parseAsync(req.body);
            console.log("Request body is valid");
            next();
        } catch (error) {
            //if validation fails this block will be executed

            res.status(400).json({
                message: "Invalid request body",
                success: false,
                error: error
            });
        }
    }
}

export const validateQueryParams = (schema: ZodObject)=>{
    return async (req:Request, res: Response,next:NextFunction)=>{
        try {
            await schema.parseAsync(req.query);
            console.log("query params are valid");
            next();
        } catch (error) {
            res.status(400).json({
                message: "Invalid query params",
                success: false,
                error:error
            });
        }
    }
}