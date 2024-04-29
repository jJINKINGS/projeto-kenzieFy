// import { Band } from "@prisma/client";

import { z } from "zod";
import { bandPayloadSchema, bandSchema } from "../schemas";

type Band = z.infer<typeof bandSchema>;
type BandPayload = z.infer<typeof bandPayloadSchema>;

//Definindo um contrato sobre como deve ser o serviço de band, independente da base dados utilizada
interface IBandService {
    list(): Promise<Array<Band>>;
    create(payload: BandPayload): Promise<Band>;

}

export { Band, BandPayload, IBandService };