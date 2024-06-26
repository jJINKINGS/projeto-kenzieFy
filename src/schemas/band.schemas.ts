import { z } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    Band:
 *      type: object
 *      required: 
 *        - name
 *      properties: 
 *        id:
 *          type: integer
 *          readOnly: true
 *          example: 1
 *        name:
 *          type: string
 *          example: Minha Nova Banda
 *          description: Required. 255 characters or fewer
 *          maxLength: 255
 *        foundedAt:
 *          type: integer
 *          example: 1993
 *          description: Optional. Positive Integer
 *          nullable: true
 */

//sem o zod, quando mando um body errado o erro que estora é no nivel do banco ja, o zod vai estorar um erro no nivel da aplicacao para poder retornar pro usuario
const bandSchema  = z.object({
    id: z.number().positive(),
    name: z.string().max(255), //esse schema precisa ser sincronizado com a model do banco. //esse é para saida de dados
    foundedAt: z.number().positive().nullish(), //junçao do optional(undefined) com o nullable(null)
});

const bandPayloadSchema = bandSchema.omit({ id: true }); //entrada de dados

export { bandSchema, bandPayloadSchema };