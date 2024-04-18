import { z } from "zod";

//sem o zod, quando mando um body errado o erro que estora é no nivel do banco ja, o zod vai estorar um erro no nivel da aplicacao para poder retornar pro usuario
const accountSchema  = z.object({
    id: z.number().positive(),
    username: z.string().max(50), 
    password: z.string().max(255),
    favoriteColor: z.string().max(255).nullish(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

const accountBodyCreateSchema = accountSchema.omit({ id: true, createdAt: true, updatedAt: true }); //entrada de dados

const accountReturnSchema = accountSchema.omit({ password: true });

export { accountSchema, accountBodyCreateSchema, accountReturnSchema };