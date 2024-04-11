import { NextFunction, Request, Response } from "express";
import { prisma } from "../database";

export class EnsureBandMiddleware {
    public idExists = async (req: Request, res: Response, next: NextFunction) => {
        const foudnBand = await prisma.band.findFirst({
            where: {
                id: req.body.bandId,
            }
        });

        if(!foudnBand) {
            return res.status(404).json({ message: "Band not found "});
        }

        res.locals = { foudnBand };

        return next();
    };
}

export const ensureBand = new EnsureBandMiddleware();