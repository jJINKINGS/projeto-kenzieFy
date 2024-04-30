"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicianController = exports.MusicianController = void 0;
const services_1 = require("../services");
class MusicianController {
    service = new services_1.MusicianService();
    list = async (req, res) => {
        const musicians = await this.service.list();
        return res.status(200).json(musicians);
    };
    create = async (req, res) => {
        const payload = { ...req.body, bandId: Number(req.params.bandId) };
        const newMusician = await this.service.create(payload);
        return res.status(201).json(newMusician);
    };
}
exports.MusicianController = MusicianController;
exports.musicianController = new MusicianController();
