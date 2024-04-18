import { Router } from "express";
import { ensure, ensureAlbum, ensureBand } from "../middlewares";
import { AlbumController, albumController, trackController } from "../controllers";
import { albumBodyCreateSchema, trackBodySchema, trackPayloadSchema } from "../schemas";


export const albumRouter = Router();

// const albumController = new AlbumController();


albumRouter.get("", albumController.list);
albumRouter.post("", ensure.bodyIsValid(albumBodyCreateSchema), ensureBand.idExists, albumController.create);

albumRouter.use("/:albumId/tracks", ensureAlbum.idExists);

albumRouter.get("/:albumId/tracks", trackController.listByAlbumId);
albumRouter.post("/:albumId/tracks", ensure.bodyIsValid(trackBodySchema), trackController.create);

