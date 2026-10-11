import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";
import logger from "../config/logger.config.js";

export const validateRequestBody = (schema: ZodObject)=>{
    return async(req: Request,res: Response, next: NextFunction)=>{
        try {
            logger.info("Validating request body", {correlationId: req.headers["x-correlation-id"]});
            await schema.parseAsync(req.body);
            logger.info("Request body is valid", {correlationId: req.headers["x-correlation-id"]});
            next();
        } catch (error) {
            //if validation fails this block will be executed
            logger.error("Request body is invalid", {correlationId: req.headers["x-correlation-id"], error: error});

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