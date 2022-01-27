import { Router } from "express";
import { Request, Response } from 'express';
import { CodableController } from "../../Controllers/CodableController";
import { Codable, DecodableMessage } from "../../Model/Codable";

const router = Router();
const codable = new Codable(undefined);

router.get("/", async (req: Request, res: Response, next) => {

  const codableController = new CodableController(codable);
  try {
    const decryptedMessage = await codableController.decrypt(req);
    res.status(200).json({
      message: decryptedMessage
  });

  } catch (error) {
    res.status(500).json({
      error: error
    });
  }
  
  console.log(`Served user-agent: ${req.get('user-agent')}`);
});

router.post("/", async (req: Request, res: Response, next) => {

  const codableController = new CodableController(codable);
  try {
    const hash = await codableController.encrypt(req);
    res.status(200).json({
      message: hash
    });
  } catch (error) {
    res.status(500).json({
      error: error
    });
  }

  console.log(`Served user-agent: ${req.get('user-agent')}`);
});

export default router;