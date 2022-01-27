import { Router } from "express";

const router = Router();

router.get("/", async (req, res, next) => {
  console.log(`Served user-agent: ${req.get('user-agent')}`);
  res.status(200).json({
      alive: true
    });
});

export default router;