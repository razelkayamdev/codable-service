import { AppConfiguration } from "./Configurations/AppConfiguration";
import { Codable } from "./Model/Codable";
import { AppServer } from "./Server/AppServer";

class Launcher {

    private appConfiguration: AppConfiguration = new AppConfiguration();
    private server: AppServer

    constructor() {
        this.server = new AppServer(this.appConfiguration.port);
    }

    public launchApp() {
        console.log('Started app');
        this.server.createServer();
    }
}

new Launcher().launchApp();