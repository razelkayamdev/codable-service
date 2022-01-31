import { Response, Request } from 'express';

export const corsHandler = (req: Request, res: Response, next: any) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}

export const errorHandler = (err: any, req: Request, res: Response, next: any) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
    next();
}

export const logHandler = (req: Request, res: Response, next: any) => {
    console.log(`Serving user-agent: ${req.get('user-agent')} @ ${new Date()}`);
    next();
}