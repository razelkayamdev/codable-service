export class AppConfiguration {

    public readonly environment: string
    public readonly port: number

    constructor() {

        if (process.env.NODE_ENV !== 'production') {
            require('dotenv').config();
        }
        
        this.environment = process.env.NODE_ENV || "develop"
        this.port = parseInt(process.env.PORT || "3000");
    }
}