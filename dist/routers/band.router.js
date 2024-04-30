"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const schemas_1 = require("../schemas");
const services_1 = require("../services");
const tsyringe_1 = require("tsyringe");
exports.bandRouter = (0, express_1.Router)();
tsyringe_1.container.registerSingleton("BandService", services_1.BandService);
// const bandController = new BandController(bandService);
// const bandController = new BandController(bandInMemoryService);
const bandController = tsyringe_1.container.resolve(controllers_1.BandController);
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
exports.bandRouter.get("", bandController.list);
exports.bandRouter.post("", middlewares_1.ensure.bodyIsValid(schemas_1.bandPayloadSchema), bandController.create);
//musicians
exports.bandRouter.post("/:bandId/musicians", controllers_1.musicianController.create);
exports.bandRouter.get("/:bandId/musicians", controllers_1.musicianController.list);
