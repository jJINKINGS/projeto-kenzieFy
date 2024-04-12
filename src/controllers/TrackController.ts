import { Request, Response } from "express";
import { TrackService } from "../services";

export class TrackController {
    private service = new TrackService();

    public list = async (req: Request, res: Response): Promise<Response> => {
        const tracks = await this.service.list();
        return res.status(200).json(tracks);
    };

    public listByAlbumId = async (req: Request, res: Response): Promise<Response> => {
        const albumId = Number(req.params.albumId);
        // const albumId = res.locals.foundAlbum.id
        const tracks = await this.service.listByAlbumId(albumId);
        return res.status(200).json(tracks);
    };

    public create = async (req: Request, res: Response): Promise<Response> => {
        console.log(req.body);
        const payload = {...req.body, albumId: Number(req.params.albumId)};
        console.log(payload);
        const newtrack = await this.service.create(payload);
        return res.status(201).json(newtrack);
    };

    public retrieve = async (req: Request, res: Response): Promise<Response> => {
        const trackId = Number(req.params.trackId);
        const tracks = await this.service.retrieve(trackId);
        return res.status(200).json(tracks);
    };
}

export const trackController = new TrackController();