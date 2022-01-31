import express from 'express';
import { Application, Response, Request } from 'express';
import { Server } from 'http';
import { Codable } from '../Model/Codable';
import ROUTES_DEFINES from '../Routes/routes_defines';
import * as applicationRoutes from '../Routes/routes_index';
import { corsHandler, errorHandler, logHandler } from './Handlers';

export type ServerConfig = {
    port: number;
    codable: Codable;
}
export class ExpressServer {
    
    private app: Application
    private server: Server | undefined
    private port: number
    private codable: Codable

    constructor(config: ServerConfig) {
        this.port = config.port;
        this.codable = config.codable;
        this.app = express();
        this.app.use(express.json());
        this.loadHanlers();
        this.loadRouters();
    }

    public listen() {
        this.server = this.app.listen(this.port, () => {
            console.log(`Express server is listening on http://localhost:${this.port}`);
        });
    }

    private loadRouters() {

        const config: applicationRoutes.RoutesConfig = {codable: this.codable};
        const routes = applicationRoutes.create(config);

        this.app.use(ROUTES_DEFINES.IS_ALIVE_ROUTE, routes.get(ROUTES_DEFINES.IS_ALIVE_ROUTE)!);
        this.app.use(ROUTES_DEFINES.CODABLE, routes.get(ROUTES_DEFINES.CODABLE)!);
    }

    private loadHanlers() {
        this.app.use(logHandler);
        this.app.use(corsHandler);
        this.app.use(errorHandler);
    }
}