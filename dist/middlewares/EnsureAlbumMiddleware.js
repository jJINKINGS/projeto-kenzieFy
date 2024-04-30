"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAlbum = exports.EnsureAlbumMiddleware = void 0;
const database_1 = require("../database");
class EnsureAlbumMiddleware {
    idExists = async (req, res, next) => {
        const foundAlbum = await database_1.prisma.album.findFirst({
            where: {
                id: Number(req.params.albumId),
            }
        });
        if (!foundAlbum) {
            return res.status(404).json({ message: "Album not found " });
        }
        res.locals = { foundAlbum };
        return next();
    };
}
exports.EnsureAlbumMiddleware = EnsureAlbumMiddleware;
exports.ensureAlbum = new EnsureAlbumMiddleware();
