"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initJwtEnvVars = void 0;
const initJwtEnvVars = () => {
    const secret = process.env.JWT_SECRET_KEY;
    const expiresIn = process.env.EXPIRES_IN;
    if (!secret) {
        throw new Error("Missing JWT enviroment variable `JWT_SECRET_KEY`");
    }
    return { secret, expiresIn };
};
exports.initJwtEnvVars = initJwtEnvVars;
