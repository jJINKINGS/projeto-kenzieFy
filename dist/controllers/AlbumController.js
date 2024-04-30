"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumController = exports.AlbumController = void 0;
const services_1 = require("../services");
class AlbumController {
    service = new services_1.AlbumService();
    list = async (req, res) => {
        const albums = await this.service.list();
        return res.status(200).json(albums);
    };
    create = async (req, res) => {
        const newAlbum = await this.service.create(req.body);
        return res.status(201).json(newAlbum);
    };
}
exports.AlbumController = AlbumController;
exports.albumController = new AlbumController();
