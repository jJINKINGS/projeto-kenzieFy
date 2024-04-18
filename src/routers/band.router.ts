import { Router } from "express";
import { bandController, musicianController } from "../controllers";
import { ensure } from "../middlewares";
import { bandPayloadSchema } from "../schemas";


export const bandRouter = Router();



bandRouter.get("", bandController.list);
bandRouter.post("", ensure.bodyIsValid(bandPayloadSchema), bandController.create);

//musicians
bandRouter.post("/:bandId/musicians", musicianController.create);
bandRouter.get("/:bandId/musicians", musicianController.list);