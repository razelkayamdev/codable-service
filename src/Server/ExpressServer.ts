import express from 'express';
import { Application, Response, Request } from 'express';
import { Server } from 'http';
import ROUTES_DEFINES from '../Routes/routes_defines';
import applicationRoutes from '../Routes/routes_index';

export class ExpressServer {
    
    private app: Application
    private port: number
    private server: Server | undefined

    constructor(port: number) {
        this.app = express();
        this.app.use(express.json());
        this.app.use(this.errorHandler);
        this.port = port;

        this.loadRouters();
    }

    public listen() {
        this.server = this.app.listen(this.port, () => {
            console.log(`Express server is listening on http://localhost:${this.port}`);
        })
    }

    private loadRouters() {
        this.app.use(ROUTES_DEFINES.IS_ALIVE_ROUTE, applicationRoutes.get(ROUTES_DEFINES.IS_ALIVE_ROUTE)!);
        this.app.use(ROUTES_DEFINES.CODEABLE, applicationRoutes.get(ROUTES_DEFINES.CODEABLE)!);
    }

    private errorHandler(err: any, req: Request, res: Response, next: any) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
        next();
    }
}