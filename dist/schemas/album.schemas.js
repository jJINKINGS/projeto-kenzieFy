"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumBodyCreateSchema = exports.albumSchema = void 0;
const zod_1 = require("zod");
//sem o zod, quando mando um body errado o erro que estora é no nivel do banco ja, o zod vai estorar um erro no nivel da aplicacao para poder retornar pro usuario
const albumSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    title: zod_1.z.string().max(255), //esse schema precisa ser sincronizado com a model do banco. //esse é para saida de dados
    year: zod_1.z.number().positive(), //junçao do optional(undefined) com o nullable(null)
    bandId: zod_1.z.number().positive()
});
exports.albumSchema = albumSchema;
const albumBodyCreateSchema = albumSchema.omit({ id: true }); //entrada de dados
exports.albumBodyCreateSchema = albumBodyCreateSchema;
