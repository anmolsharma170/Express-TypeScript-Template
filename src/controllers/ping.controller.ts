import type { NextFunction, Request, Response } from 'express';
import fs from 'fs/promises';
import {NotFoundError} from "../utils/errors/app.error.js";

export const pingHandler = async (_req: Request,res: Response,next: NextFunction) => {
    try {
        await fs.readFile('sample');
        res.status(200).json({ message: 'pong' });
    } catch (error) {
        throw new NotFoundError("File not found");
    }
};

