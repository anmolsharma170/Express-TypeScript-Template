import type { NextFunction, Request, Response } from 'express';
import logger from '../config/logger.config.js';
export const pingHandler = async (_req: Request,res: Response,next: NextFunction) => {
    logger.info("Ping request receieved", {correlationId: _req.headers["x-correlation-id"]});
    res.status(200).json({message:"pong"});
};

