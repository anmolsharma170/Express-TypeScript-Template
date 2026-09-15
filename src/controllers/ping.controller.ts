import type { Request, Response } from 'express';

export const pingHandler = (req: Request, res: Response)=>{
    res.send('pong');
}