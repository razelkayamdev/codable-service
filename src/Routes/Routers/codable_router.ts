import { Router } from "express";
import { Request, Response } from 'express';
import { CodableController } from "../../Controllers/CodableController";
import { Codable } from "../../Model/Codable";

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
});

export default router;