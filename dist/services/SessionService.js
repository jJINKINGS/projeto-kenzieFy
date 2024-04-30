"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionService = void 0;
const database_1 = require("../database");
const bcryptjs_1 = require("bcryptjs");
const AppError_1 = require("../errors/AppError");
const jsonwebtoken_1 = require("jsonwebtoken");
// import { jwtConfig } from "../configs";
const utils_1 = require("../utils");
class SessionService {
    login = async ({ username, password }) => {
        //VERIFICAR USERNAME
        const foundUser = await database_1.prisma.account.findFirst({
            where: { username: username },
        });
        // 401 - Unauthorized (adequado para login/credenciais)
        // 403 - Forbidden (servidor se recusa a fornecer o recurso pelo nível de acesso do usuario, rotas que exigem um token, nao tem permissao necessaria)
        // 400 - bad request ( nao é adequado )
        if (!foundUser) {
            throw new AppError_1.AppError("Invalid credentials.", utils_1.status.HTTP_401_UNAUTHORIZED);
        }
        // VERIFICAR SENHA
        const passwordMatch = await (0, bcryptjs_1.compare)(password, foundUser.password);
        if (!passwordMatch) {
            // throw new AppError("Invalid credentials", 401);
            throw new AppError_1.AppError("Invalid credentials.", utils_1.status.HTTP_401_UNAUTHORIZED);
        }
        // GERAR TOKEN JWT
        // const secret = process.env.SECRET_KEY!; //com essa exclamaçao estou  afirmando que essa chave existe
        // const expiresIn = process.env.EXPIRES_IN!;
        // const {secret, expiresIn} = jwtConfig()
        const secret = process.env.JWT_SECRET_KEY;
        const expiresIn = process.env.EXPIRES_IN || "1h";
        const token = (0, jsonwebtoken_1.sign)({ favoriteColor: foundUser.favoriteColor, role: foundUser.role }, secret, {
            expiresIn: expiresIn,
            subject: foundUser.id.toString(),
        });
        return { token };
        // return sessionReturnSchema.parse(token);
        // return { message: "credenciais válidas" }; 
    };
}
exports.SessionService = SessionService;
