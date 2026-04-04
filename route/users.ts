import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("users route working");
});

router.get("/hello", (req: Request, res: Response) => {
  res.send("hello from users route");
});

export default router;