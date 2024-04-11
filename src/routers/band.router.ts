import { Router } from "express";
import { BandController } from "../controllers";
import { ensure } from "../middlewares";
import { bandCreateSchema } from "../schemas";


export const bandRouter = Router();

const bandController = new BandController();


bandRouter.get('', bandController.list);
bandRouter.post('', ensure.bodyIsValid(bandCreateSchema), bandController.create);