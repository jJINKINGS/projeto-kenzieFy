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

/** 
 * @openapi
 * /api/bands:
 *  get:
 *    tags:
 *      - Bandas
 *    summary: Listar bandas
 *    description: Retorna todas as bandas.
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items: 
 *                $ref: '#/components/schemas/Band'
 *  post:
 *    tags:
 *      - Bandas
 *    summary: Criar uma banda
 *    description: Cria e retorna a banda.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Band'
 *    responses:
 *      201:
 *        description: Created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Band'
 *      400:
 *        description: Bad Request
 */
bandRouter.get("", bandController.list);
bandRouter.post("", ensure.bodyIsValid(bandPayloadSchema), bandController.create);

//musicians
bandRouter.post("/:bandId/musicians", musicianController.create);
bandRouter.get("/:bandId/musicians", musicianController.list);