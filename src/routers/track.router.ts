import { Router } from "express";
import { TrackController } from "../controllers";
import { ensure } from "../middlewares";



export const trackRouter = Router();

const trackController = new TrackController();


trackRouter.get('', trackController.list);
trackRouter.get('/:trackId', trackController.retrieve);
// trackRouter.post('', ensure.bodyIsValid(trackCreateSchema), trackController.create);