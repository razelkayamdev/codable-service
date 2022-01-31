import { Codable } from "../Model/Codable";
import { ExpressServer, ServerConfig } from "./ExpressServer";

export class AppServer {

    private experssServer: ExpressServer;

    constructor(port: number) {
        const serverConfig: ServerConfig = {
            port: port, 
            codable: new Codable(undefined)
        }
        this.experssServer = new ExpressServer(serverConfig);
    }

    public createServer() {
        this.experssServer.listen();
        console.log('Server started listening');
    }
}