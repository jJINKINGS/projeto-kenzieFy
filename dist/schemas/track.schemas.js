"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackRetrieveSchema = exports.trackBodySchema = exports.trackPayloadSchema = exports.trackSchema = void 0;
const zod_1 = require("zod");
const album_schemas_1 = require("./album.schemas");
//sem o zod, quando mando um body errado o erro que estora é no nivel do banco ja, o zod vai estorar um erro no nivel da aplicacao para poder retornar pro usuario
const trackSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    title: zod_1.z.string().max(255), //esse schema precisa ser sincronizado com a model do banco. //esse é para saida de dados
    trackNumber: zod_1.z.number().positive().nullish(),
    length: zod_1.z.number().positive(),
    albumId: zod_1.z.number().positive()
});
exports.trackSchema = trackSchema;
const trackPayloadSchema = trackSchema.omit({ id: true });
exports.trackPayloadSchema = trackPayloadSchema;
const trackBodySchema = trackSchema.omit({ id: true, albumId: true }); //entrada de dados
exports.trackBodySchema = trackBodySchema;
const trackRetrieveSchema = trackSchema.omit({ albumId: true }).extend({ album: album_schemas_1.albumSchema });
exports.trackRetrieveSchema = trackRetrieveSchema;
