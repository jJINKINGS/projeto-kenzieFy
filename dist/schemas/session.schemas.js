"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionReturnSchema = exports.sessionBodyCreateSchema = void 0;
const zod_1 = require("zod");
const sessionBodyCreateSchema = zod_1.z.object({
    username: zod_1.z.string().max(50),
    password: zod_1.z.string().max(255),
});
exports.sessionBodyCreateSchema = sessionBodyCreateSchema;
const sessionReturnSchema = zod_1.z.object({
    token: zod_1.z.string()
});
exports.sessionReturnSchema = sessionReturnSchema;
