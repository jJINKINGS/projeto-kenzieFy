"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const AppError_1 = require("../errors/AppError");
const jsonwebtoken_1 = require("jsonwebtoken");
const utils_1 = require("../utils");
class AuthMiddleware {
    isAuthenticated = (req, res, next) => {
        const { authorization } = req.headers;
        if (!authorization) {
            // throw new AppError("Misssing bearer token", 401);
            throw new AppError_1.AppError("Misssing bearer token", utils_1.status.HTTP_401_UNAUTHORIZED);
        }
        const [_prefix, token] = authorization.split(' ');
        // const secret = process.env.SECRET_KEY!;
        // const {secret} = jwtConfig();
        const secret = process.env.JWT_SECRET_KEY;
        const jwtPayload = (0, jsonwebtoken_1.verify)(token, secret);
        res.locals = {
            ...res.locals, decoded: jwtPayload,
        };
        return next();
    };
    isResourceOwner = async (req, res, next) => {
        const { decoded } = res.locals;
        const { accountId } = req.params;
        if (decoded.sub !== accountId) {
            throw new AppError_1.AppError("You dont have permission to perform this acction", utils_1.status.HTTP_403_FORBIDDEN);
        }
        return next();
    };
    isAdmin = async (req, res, next) => {
        const { decoded } = res.locals;
        if (decoded.role !== "ADMIN") {
            throw new AppError_1.AppError("You dont have permission to perform this acction", utils_1.status.HTTP_403_FORBIDDEN);
        }
        return next();
    };
}
exports.auth = new AuthMiddleware();
