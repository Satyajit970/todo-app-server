
import { Request, Response } from "express";

export const Login = async (req: Request, res: Response) => {
  console.log("Inside login controller");
  console.log("Request body:", req.body);
  console.log("Content-Type:", req.headers["content-type"]);

  res.send(req.body);
};

export const Register = async (req: Request, res: Response) => {
  console.log("Inside Register controller");
  console.log("Request body:", req.body);

  res.send(req.body);
};