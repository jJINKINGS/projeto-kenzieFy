import { z } from "zod";

//sem o zod, quando mando um body errado o erro que estora é no nivel do banco ja, o zod vai estorar um erro no nivel da aplicacao para poder retornar pro usuario
const musicianSchema  = z.object({
    id: z.number().positive(),
    firstName: z.string().max(255), //esse schema precisa ser sincronizado com a model do banco. //esse é para saida de dados
    lastName: z.string().max(255), //junçao do optional(undefined) com o nullable(null)
    birthDate: z.date().nullish()
});

const musicianCreateSchema = musicianSchema.omit({ id: true }).extend({joined: z.number().positive(), left: z.date().nullish() }); //entrada de dados

export { musicianSchema, musicianCreateSchema };