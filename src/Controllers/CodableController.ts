import { Codable, DecodableMessage, EncodableMessage } from "../Model/Codable";
import { Request } from 'express';

export class CodableController {

    private codable: Codable

    constructor(codable: Codable) {

        this.codable = codable;
    }

    public async encrypt(req: Request): Promise<string> {
        try {
            const encodableMessage: EncodableMessage = {
                text: req.body.text, 
                password: req.body.password
            };
            const encryptedMessage = await this.codable.encrypt(encodableMessage);
            return encryptedMessage;

        } catch (error) {
            throw(error);
        }
    }

    public async decrypt(req: Request) {
        try {
            const decodableMessage: DecodableMessage = {
                hash: req.query.hash as string, 
                password: req.query.password as string
            };
            const decryptedMessage = await this.codable.decrypt(decodableMessage);
            return decryptedMessage;

        } catch (error) {
            throw(error);
        }
    }

}