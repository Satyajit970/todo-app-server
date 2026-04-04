import { Router, Request, Response } from "express";
import usersRouter from "./users";
import authRouter from "./auth";

const router = Router();

// routes
router.use("/users", usersRouter);
router.use("/auth", authRouter);

// test routes
router.get("/", (req: Request, res: Response) => {
  res.send("index route");
});

router.get("/hello", (req: Request, res: Response) => {
  res.send("hello from index route");
});

export default router;