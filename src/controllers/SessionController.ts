import { Request, Response } from "express";
import { SessionService } from "../services";

export class SessionController {
    private service = new SessionService();

    // public list = async (req: Request, res: Response): Promise<Response> => {
    //     const accounts = await this.service.list();
    //     return res.status(200).json(accounts);
    // };

    public login = async (req: Request, res: Response): Promise<Response> => {
        const account = await this.service.login(req.body);
        return res.status(200).json(account);
    };
}

export const sessionController = new SessionController();