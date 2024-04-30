"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountReturnSchema = exports.accountBodyCreateSchema = exports.accountSchema = void 0;
const zod_1 = require("zod");
//sem o zod, quando mando um body errado o erro que estora é no nivel do banco ja, o zod vai estorar um erro no nivel da aplicacao para poder retornar pro usuario
const accountSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    username: zod_1.z.string().max(50),
    password: zod_1.z.string().max(255),
    favoriteColor: zod_1.z.string().max(255).nullish(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.accountSchema = accountSchema;
const accountBodyCreateSchema = accountSchema.omit({ id: true, createdAt: true, updatedAt: true }); //entrada de dados
exports.accountBodyCreateSchema = accountBodyCreateSchema;
const accountReturnSchema = accountSchema.omit({ password: true });
exports.accountReturnSchema = accountReturnSchema;
