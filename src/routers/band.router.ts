import { Router } from "express";
import { BandController, musicianController } from "../controllers";
import { ensure } from "../middlewares";
import { bandPayloadSchema } from "../schemas";
import { bandService, bandInMemoryService, BandService } from "../services";
import { container } from "tsyringe";

export const bandRouter = Router();
container.registerSingleton("BandService", BandService);

// const bandController = new BandController(bandService);
// const bandController = new BandController(bandInMemoryService);
const bandController = container.resolve(BandController);


bandRouter.get("", bandController.list);
bandRouter.post("", ensure.bodyIsValid(bandPayloadSchema), bandController.create);

//musicians
bandRouter.post("/:bandId/musicians", musicianController.create);
bandRouter.get("/:bandId/musicians", musicianController.list);