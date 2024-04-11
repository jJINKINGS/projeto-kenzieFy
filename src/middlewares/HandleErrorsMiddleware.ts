import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

class HandleErrorsMidlleware{
    public static execute = (
        error: Error,
        req: Request,
        res: Response,
        next: NextFunction
    ): Response => {
        if(error instanceof ZodError ) {
            return res.status(400).json({ messageError: error.errors});
        }

        return res.status(500).json({messsage: "Internal Server Error" });
    };
}

export const handleErrors = HandleErrorsMidlleware.execute;