import { Router } from "express";

const router = Router();

router.get("/", async (req, res, next) => {
  res.status(200).json({
      alive: true
    });
});

export default router;