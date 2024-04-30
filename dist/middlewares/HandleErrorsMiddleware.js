"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = void 0;
const zod_1 = require("zod");
const AppError_1 = require("../errors/AppError");
const jsonwebtoken_1 = require("jsonwebtoken");
const utils_1 = require("../utils");
class HandleErrorsMidlleware {
    static execute = (error, req, res, next) => {
        if (error instanceof AppError_1.AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
            return res.status(utils_1.status.HTTP_401_UNAUTHORIZED).json({ message: error.message });
        }
        if (error instanceof zod_1.ZodError) {
            return res.status(utils_1.status.HTTP_400_BAD_REQUEST).json({ messageError: error.errors });
        }
        return res.status(utils_1.status.HTTP_500_INTERNAL_SERVER_ERROR).json({ messsage: "Internal Server Error" });
    };
}
exports.handleErrors = HandleErrorsMidlleware.execute;
