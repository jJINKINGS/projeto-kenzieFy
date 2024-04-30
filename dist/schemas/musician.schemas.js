"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicianCreateSchema = exports.musicianSchema = void 0;
const zod_1 = require("zod");
//sem o zod, quando mando um body errado o erro que estora é no nivel do banco ja, o zod vai estorar um erro no nivel da aplicacao para poder retornar pro usuario
const musicianSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    firstName: zod_1.z.string().max(255), //esse schema precisa ser sincronizado com a model do banco. //esse é para saida de dados
    lastName: zod_1.z.string().max(255), //junçao do optional(undefined) com o nullable(null)
    birthDate: zod_1.z.date().nullish()
});
exports.musicianSchema = musicianSchema;
const musicianCreateSchema = musicianSchema.omit({ id: true }).extend({ joined: zod_1.z.number().positive(), left: zod_1.z.date().nullish() }); //entrada de dados
exports.musicianCreateSchema = musicianCreateSchema;
