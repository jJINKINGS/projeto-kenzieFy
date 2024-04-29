import { Request, Response } from "express";
import { AccountService } from "../services";
import { IAccountService } from "../interfaces";
import { inject, injectable } from "tsyringe";

@injectable()
export class AccountController {
    // private service = new AccountService();

    constructor(@inject("AccountService")private service: IAccountService){
        // this.service = service;
    }

    public create = async (req: Request, res: Response): Promise<Response> => {
        const newAccount = await this.service.create(req.body);

        return res.status(201).json(newAccount);
    };


    public list = async (req: Request, res: Response): Promise<Response> => {
        const accounts = await this.service.list();

        console.log(res.locals);

        return res.status(200).json(accounts);
    };

    public retrieve = async (req: Request, res: Response): Promise<Response> => {
        const account = await this.service.retrieve(Number(req.params.accountId));
        // const account = res.locals.account;
        // const accountId = Number(req.params.accountId);
        // const account = await this.service.retrieve(accountId);

        // console.log(res.locals);

        return res.status(200).json(account);
    };
}
