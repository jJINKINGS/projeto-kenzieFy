"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensure = void 0;
class EnsureMiddleware {
    //curryng(possibilita que uma função retorne outra função)
    bodyIsValid = (schema) => (req, res, next) => {
        req.body = schema.parse(req.body);
        return next();
    };
}
exports.ensure = new EnsureMiddleware();
