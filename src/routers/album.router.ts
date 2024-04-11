import { Router } from "express";
import { ensure, ensureBand } from "../middlewares";
import { AlbumController } from "../controllers";
import { albumCreateSchema } from "../schemas";


export const albumRouter = Router();

const albumController = new AlbumController();


albumRouter.get('', albumController.list);
albumRouter.post('', ensure.bodyIsValid(albumCreateSchema), ensureBand.idExists, albumController.create);