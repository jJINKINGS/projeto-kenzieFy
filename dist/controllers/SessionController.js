"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionController = exports.SessionController = void 0;
const services_1 = require("../services");
class SessionController {
    service = new services_1.SessionService();
    // public list = async (req: Request, res: Response): Promise<Response> => {
    //     const accounts = await this.service.list();
    //     return res.status(200).json(accounts);
    // };
    login = async (req, res) => {
        const account = await this.service.login(req.body);
        return res.status(200).json(account);
    };
}
exports.SessionController = SessionController;
exports.sessionController = new SessionController();
