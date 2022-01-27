import * as crypto from "crypto";

export type EncodableMessage = {
    text: string, 
    password: string
}

export type DecodableMessage = {
    hash: string, 
    password: string
}

export class Codable {

    private iv = crypto.randomBytes(16);
    private algorithm: string;

    constructor(algorithm: string | undefined) {
        this.algorithm = algorithm || "aes256";
    }

    public async encrypt(message: EncodableMessage): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                const key = crypto
                    .createHash("sha256")
                    .update(message.password)
                    .digest();
                const cipher = crypto.createCipheriv(this.algorithm, key, this.iv);
                let encrypted = cipher.update(message.text, "utf8", "hex");
                encrypted += cipher.final("hex");
                resolve(encrypted);
            } catch (error) {
                reject(error);
            }
        });
    }

    public async decrypt(message: DecodableMessage): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                const key = crypto
                    .createHash("sha256")
                    .update(message.password)
                    .digest();
                const decipher = crypto.createDecipheriv(this.algorithm, key, this.iv);
                let decrypted = decipher.update(message.hash, "hex", "utf8");
                decrypted += decipher.final("utf8");
                resolve(decrypted);
            } catch (error) {
                reject(error);
            }
        });
    }
}