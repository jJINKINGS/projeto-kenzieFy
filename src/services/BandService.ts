import { Band, BandCreate } from "../interfaces";
import { prisma } from "../database"
import { bandSchema } from "../schemas";

export class BandService {
    public list = async (): Promise<Array<Band>> => {
        return await prisma.band.findMany();
    };

    public create = async (payload: BandCreate): Promise<Band> => {
        const newBand = await prisma.band.create({ data: payload });
        return bandSchema.parse(newBand); //se tiver chave a mais ele so retorna as que tem na model/interface
    };
}