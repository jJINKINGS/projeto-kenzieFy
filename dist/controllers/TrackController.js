"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackController = exports.TrackController = void 0;
const services_1 = require("../services");
class TrackController {
    service = new services_1.TrackService();
    list = async (req, res) => {
        const tracks = await this.service.list();
        return res.status(200).json(tracks);
    };
    listByAlbumId = async (req, res) => {
        const albumId = Number(req.params.albumId);
        // const albumId = res.locals.foundAlbum.id
        const tracks = await this.service.listByAlbumId(albumId);
        return res.status(200).json(tracks);
    };
    create = async (req, res) => {
        console.log(req.body);
        const payload = { ...req.body, albumId: Number(req.params.albumId) };
        console.log(payload);
        const newtrack = await this.service.create(payload);
        return res.status(201).json(newtrack);
    };
    retrieve = async (req, res) => {
        const trackId = Number(req.params.trackId);
        const tracks = await this.service.retrieve(trackId);
        return res.status(200).json(tracks);
    };
}
exports.TrackController = TrackController;
exports.trackController = new TrackController();
