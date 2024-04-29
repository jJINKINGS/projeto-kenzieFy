import { Request, Response } from "express";
import { IBandService } from "../interfaces";
import { injectable, inject } from "tsyringe";

@injectable()
export class BandController {
    // private service = new BandService();

    constructor(@inject("BandService") private service: IBandService){};

    public list = async (req: Request, res: Response): Promise<Response> => {
        const bands = await this.service.list();
        return res.status(200).json(bands);
    };

    public create = async (req: Request, res: Response): Promise<Response> => {
        const newBand = await this.service.create(req.body);
        return res.status(201).json(newBand);
    };
}

// export const bandController = new BandController();