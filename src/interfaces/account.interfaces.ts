// import { Band } from "@prisma/client";

import { z } from "zod";
import { accountBodyCreateSchema, accountSchema, accountReturnSchema } from "../schemas";

type Account = z.infer<typeof accountSchema>;
type AccountBodyCreate = z.infer<typeof accountBodyCreateSchema>;
type AccountReturn = z.infer<typeof accountReturnSchema>;

interface IAccountService {
    list(): Promise<Array<AccountReturn>>;
    create(payload: AccountBodyCreate): Promise<AccountReturn>;
    retrieve(accountId: number): Promise<AccountReturn>;
    isUsernameUnique(username: string): Promise<boolean>;
}

export { Account, AccountBodyCreate, AccountReturn, IAccountService };