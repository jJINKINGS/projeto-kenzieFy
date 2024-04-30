"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumService = void 0;
const database_1 = require("../database");
const schemas_1 = require("../schemas");
const AppError_1 = require("../errors/AppError");
class AlbumService {
    //private prismaModel = prisma.album;
    list = async () => {
        const albums = await database_1.prisma.album.findMany();
        return schemas_1.albumSchema.array().parse(albums);
    };
    retrieve = async (albumId) => {
        const album = await database_1.prisma.album.findFirst({
            where: {
                id: albumId,
            }
        });
        ;
        return schemas_1.albumSchema.parse(album);
    };
    create = async (payload) => {
        const foundBand = await database_1.prisma.band.findFirst({
            where: {
                id: payload.bandId,
            }
        });
        if (!foundBand) {
            throw new AppError_1.NotFoundError("Band not found.");
        }
        const newAlbum = await database_1.prisma.album.create({ data: payload });
        return schemas_1.albumSchema.parse(newAlbum); //se tiver chave a mais ele so retorna as que tem na model/interface
    };
}
exports.AlbumService = AlbumService;
