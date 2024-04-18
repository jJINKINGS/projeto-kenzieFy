// import { Band } from "@prisma/client";

import { z } from "zod";
import { accountBodyCreateSchema, accountSchema, accountReturnSchema } from "../schemas";

type Account = z.infer<typeof accountSchema>;
type AccountBodyCreate = z.infer<typeof accountBodyCreateSchema>;
type AccountReturn = z.infer<typeof accountReturnSchema>;

export { Account, AccountBodyCreate, AccountReturn };