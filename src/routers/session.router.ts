import { Router } from "express";
import { sessionController } from "../controllers";
import { ensure } from "../middlewares";
import { sessionBodyCreateSchema } from "../schemas";


export const sessionRouter = Router();

// accountRouter.get("", accountController.list);
sessionRouter.post("/login", ensure.bodyIsValid(sessionBodyCreateSchema), sessionController.login);

