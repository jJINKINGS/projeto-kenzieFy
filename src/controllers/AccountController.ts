import { Request, Response } from "express";
import { AccountService } from "../services";

export class AccountController {
    private service = new AccountService();

    public create = async (req: Request, res: Response): Promise<Response> => {
        const newAccount = await this.service.create(req.body);

        return res.status(201).json(newAccount);
    };


    public list = async (req: Request, res: Response): Promise<Response> => {
        const accounts = await this.service.list();

        console.log(res.locals);

        return res.status(200).json(accounts);
    };
}

export const accountController = new AccountController();