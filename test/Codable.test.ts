import { test } from "@jest/globals";
import { Codable, DecodableMessage, EncodableMessage } from "../src/Model/Codable"

describe("Codable encryption and decryption", () => {

    const codable = new Codable(undefined);
    const password = "1234", text = "Some Text";
    const expectedHashLength = 32;
    const encodableMessage: EncodableMessage = {
        text,
        password
    }

    test("it encrypts with expected length", async () => {

        const hash = await codable.encrypt(encodableMessage);
        expect(hash.length).toBe(expectedHashLength);
    });

    test("it decrypts what it encrypts", async () => {
        const hash = await codable.encrypt(encodableMessage);
        const decodableMessage: DecodableMessage = {
            hash,
            password
        }
        const output = await codable.decrypt(decodableMessage);
        expect(output).toBe(text);
    });
});