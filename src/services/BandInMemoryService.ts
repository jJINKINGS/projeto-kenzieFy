import { Band, BandPayload, IBandService } from "../interfaces";
import { prisma } from "../database"
import { bandSchema } from "../schemas";

const bandsDB: Array<Band> = [];

const genNextId = (): number => {
    const lastBand: Band | undefined = bandsDB.sort((a, b) => a.id - b.id).at(-1);

    if (lastBand) {
        return lastBand.id + 1;
    }

    return 1;
}

export class BandInMemoryService implements IBandService {
    public list = async (): Promise<Array<Band>> => {
        // return await prisma.band.findMany();
        return bandSchema.array().parse(bandsDB)
    };

    public create = async (payload: BandPayload): Promise<Band> => {
        // const newBand = await prisma.band.create({ data: payload });
        // return bandSchema.parse(newBand); //se tiver chave a mais ele so retorna as que tem na model/interface

        const newBand = {
            id: genNextId(),
            foundedAt: payload.foundedAt || null,
            ...payload
        };

        bandsDB.push(newBand);

        return bandSchema.parse(newBand);
    };
}

export const bandInMemoryService = new BandInMemoryService();