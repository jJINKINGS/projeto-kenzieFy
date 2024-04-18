import { Router } from "express";
import { accountController } from "../controllers";
import { auth, ensure } from "../middlewares";
import { accountBodyCreateSchema } from "../schemas";


export const accountRouter = Router();

accountRouter.post("", ensure.bodyIsValid(accountBodyCreateSchema), accountController.create);

accountRouter.get("", auth.isAuthenticated, accountController.list);



