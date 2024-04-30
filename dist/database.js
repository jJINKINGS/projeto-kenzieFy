"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client"); //trazer os metodos que vao ser transformados em querys -- interacao com o banco de dados
exports.prisma = new client_1.PrismaClient({
    log: ["query"],
});
