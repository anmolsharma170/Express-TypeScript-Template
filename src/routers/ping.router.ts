import express from 'express';
import { pingHandler } from '../controllers/ping.controller.js';
import type { Request, Response, NextFunction } from 'express';

const pingRouter = express.Router();

function middleware1(req: Request, res: Response,next: NextFunction){
    console.log("middleware 1");
    next();
}

function middleware2(req: Request, res: Response,next: NextFunction){
    console.log("middleware 2");
    next();
}

pingRouter.get('/ping',middleware1,middleware2,pingHandler);

export default pingRouter;