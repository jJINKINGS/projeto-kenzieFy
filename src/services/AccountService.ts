import { Account, AccountBodyCreate, AccountReturn } from "../interfaces";
import { prisma } from "../database"
import { accountSchema, accountReturnSchema } from "../schemas";
import { hash } from "bcryptjs";

export class AccountService {

    public create = async (payload: AccountBodyCreate): Promise<AccountReturn> => {
        payload.password = await hash(payload.password, 10); //exige esforço computacional para gerar esse hash

        const newAccount = await prisma.account.create({ data: payload });

        return accountReturnSchema.parse(newAccount); //se tiver chave a mais ele so retorna as que tem na model/interface
    };


    
    public list = async (): Promise<Array<AccountReturn>> => {
        const accounts = await prisma.account.findMany();

        return accountReturnSchema.array().parse(accounts);
    };
}