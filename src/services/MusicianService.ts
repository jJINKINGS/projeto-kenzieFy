import { Musician, MusicianCreate, MusicianPayload } from "../interfaces";
import { prisma } from "../database"
import { musicianSchema } from "../schemas";

export class MusicianService {
    private musician = prisma.musician;

    public list = async (): Promise<Array<Musician>> => {
        return await this.musician.findMany();
    };

    public create = async (payload: MusicianPayload): Promise<Musician> => {
        // const newMusician = await this.musician.create({ data: payload });
        const newMusician = await this.musician.create({ data: {
            firstName: payload.firstName,
            lastName: payload.lastName,
            groupMembers: {
                create: {
                    joined: payload.joined,
                    band: {
                        connect: {
                            id: payload.bandId,
                        }
                    }
                }
            }
        } });
        return musicianSchema.parse(newMusician); //se tiver chave a mais ele so retorna as que tem na model/interface
    };
}