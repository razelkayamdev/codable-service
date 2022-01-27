import { ExpressServer } from "./ExpressServer";

export class AppServer {

    private experssServer: ExpressServer;

    constructor(port: number) {
        this.experssServer = new ExpressServer(port);
    }

    public createServer() {
        this.experssServer.listen();
        console.log('Server started listening');
    }
}