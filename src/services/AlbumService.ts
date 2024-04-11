import { Album, AlbumCreate } from "../interfaces";
import { prisma } from "../database"
import { albumSchema } from "../schemas";

export class AlbumService {
    //private prismaModel = prisma.album;
    public list = async (): Promise<Array<Album>> => {
        return await prisma.album.findMany();
    };

    public create = async (payload: AlbumCreate): Promise<Album> => {
        const newAlbum = await prisma.album.create({ data: payload });
        return albumSchema.parse(newAlbum); //se tiver chave a mais ele so retorna as que tem na model/interface
    };
}