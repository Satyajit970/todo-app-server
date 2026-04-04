import { Router, Request, Response } from "express";
import * as loginController from "../controller/authController";

const router = Router();

router.post("/login", (req: Request, res: Response) => {
  loginController.Login(req, res);
});

router.post("/register", (req: Request, res: Response) => {
  loginController.Register(req, res);
});

router.get("/hello", (req: Request, res: Response) => {
  res.send("hello for auth route");
});

export default router;