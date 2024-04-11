import { PrismaClient } from "@prisma/client"; //trazer os metodos que vao ser transformados em querys -- interacao com o banco de dados

export const prisma = new PrismaClient({
    log: ["query"],
});