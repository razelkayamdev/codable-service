import { Router } from "express";
import { Codable, EncodableMessage, DecodableMessage } from "../../Model/Codable";

const router = Router();
const codable = new Codable(undefined);

router.get("/", async (req, res, next) => {

  console.log(`Served user-agent: ${req.get('user-agent')}`);

  let decodableMessage: DecodableMessage = {
    hash: req.query.hash as string, 
    password: req.query.password as string
  }

  let decryptedMessage = await codable.decrypt(decodableMessage);

  res.status(200).json({
      message: decryptedMessage
    });
});

router.post("/", async (req, res, next) => {

  console.log(`Served user-agent: ${req.get('user-agent')}`);

  let encodableMessage: EncodableMessage = {
    text: req.body.text, 
    password: req.body.password
  }

  let encryptedMessage = await codable.encrypt(encodableMessage);
  
  res.status(200).json({
      message: encryptedMessage
    });
});

export default router;