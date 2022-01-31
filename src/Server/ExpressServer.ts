import express from 'express';
import { Application, Response, Request } from 'express';
import { Server } from 'http';
import ROUTES_DEFINES from '../Routes/routes_defines';
import applicationRoutes from '../Routes/routes_index';
import { corsHandler, errorHandler, logHandler } from './Handlers';

export class ExpressServer {
    
    private app: Application
    private port: number
    private server: Server | undefined

    constructor(port: number) {
        this.app = express();
        this.app.use(express.json());
        this.port = port;
        this.loadHanlers();
        this.loadRouters();
    }

    public listen() {
        this.server = this.app.listen(this.port, () => {
            console.log(`Express server is listening on http://localhost:${this.port}`);
        });
    }

    private loadRouters() {
        this.app.use(ROUTES_DEFINES.IS_ALIVE_ROUTE, applicationRoutes.get(ROUTES_DEFINES.IS_ALIVE_ROUTE)!);
        this.app.use(ROUTES_DEFINES.CODABLE, applicationRoutes.get(ROUTES_DEFINES.CODABLE)!);
    }

    private loadHanlers() {
        this.app.use(logHandler);
        this.app.use(corsHandler);
        this.app.use(errorHandler);
    }
}