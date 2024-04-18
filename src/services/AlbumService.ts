import { Album, AlbumBodyCreate } from "../interfaces";
import { prisma } from "../database"
import { albumSchema } from "../schemas";

export class AlbumService {
    //private prismaModel = prisma.album;
    public list = async (): Promise<Array<Album>> => {
        const albums = await prisma.album.findMany();

        return albumSchema.array().parse(albums);
    };


    public retrieve = async (albumId: number): Promise<Album> => {
        const album = await prisma.album.findFirst({
            where: {
                id: albumId,
            }
        });;

        return albumSchema.parse(album);
    };


    public create = async (payload: AlbumBodyCreate): Promise<Album> => {
        const newAlbum = await prisma.album.create({ data: payload });
        return albumSchema.parse(newAlbum); //se tiver chave a mais ele so retorna as que tem na model/interface
    };
}