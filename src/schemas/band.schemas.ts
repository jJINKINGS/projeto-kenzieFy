import { z } from "zod";

//sem o zod, quando mando um body errado o erro que estora é no nivel do banco ja, o zod vai estorar um erro no nivel da aplicacao para poder retornar pro usuario
const bandSchema  = z.object({
    id: z.number().positive(),
    name: z.string().max(255), //esse schema precisa ser sincronizado com a model do banco. //esse é para saida de dados
    foundedAt: z.number().nullish(), //junçao do optional(undefined) com o nullable(null)
});

const bandPayloadSchema = bandSchema.omit({ id: true }); //entrada de dados

export { bandSchema, bandPayloadSchema };