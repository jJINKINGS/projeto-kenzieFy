import {  AccountBodyCreate, AccountReturn, IAccountService } from "../interfaces";
import { prisma } from "../database"
import {  accountReturnSchema } from "../schemas";
import { hash } from "bcryptjs";
import { injectable } from "tsyringe";
import { AppError } from "../errors/AppError";
import { status } from "../utils";

@injectable()
export class AccountService implements IAccountService {

    public isUsernameUnique = async(username: string): Promise<boolean> => {
        const foundUser = await prisma.account.findFirst({ where: { username }});
        
        return Boolean(foundUser);
        
    }

    public list = async (): Promise<Array<AccountReturn>> => {
        const accounts = await prisma.account.findMany();

        return accountReturnSchema.array().parse(accounts);
    };

    public create = async (payload: AccountBodyCreate): Promise<AccountReturn> => {
        const foundAccount = await this.isUsernameUnique(payload.username);

        if(foundAccount){
            throw new AppError("Username already exists.", status.HTTP_409_CONFLICT)
        }

        payload.password = await hash(payload.password, 10); //exige esforço computacional para gerar esse hash

        const newAccount = await prisma.account.create({ data: payload });

        return accountReturnSchema.parse(newAccount); //se tiver chave a mais ele so retorna as que tem na model/interface
    };


    public retrieve = async (accountId: number): Promise<AccountReturn> => {
        const account = await prisma.account.findFirst({
            where: {id: accountId}
        });

        return accountReturnSchema.parse(account);
    };
}

// export const accountService = new AccountService();