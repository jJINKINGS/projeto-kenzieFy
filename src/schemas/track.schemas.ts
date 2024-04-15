import { z } from "zod";
import { albumSchema } from "./album.schemas";

//sem o zod, quando mando um body errado o erro que estora é no nivel do banco ja, o zod vai estorar um erro no nivel da aplicacao para poder retornar pro usuario
const trackSchema  = z.object({
    id: z.number().positive(),
    title: z.string().max(255), //esse schema precisa ser sincronizado com a model do banco. //esse é para saida de dados
    trackNumber: z.number().positive().nullish(),
    length: z.number().positive(),
    albumId: z.number().positive()
});


const trackPayloadSchema = trackSchema.omit({ id: true });
const trackBodySchema = trackSchema.omit({ id: true, albumId: true }); //entrada de dados
const trackRetrieveSchema = trackSchema.omit({ albumId: true}).extend({ album: albumSchema });

export { trackSchema, trackPayloadSchema, trackBodySchema, trackRetrieveSchema };