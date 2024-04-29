import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { verify } from "jsonwebtoken";
import { jwtConfig } from "../configs";
import { prisma } from "../database";
import { status } from "../utils";

class AuthMiddleware {
    public isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
        const { authorization } = req.headers;

        if(!authorization){
            // throw new AppError("Misssing bearer token", 401);
            throw new AppError("Misssing bearer token", status.HTTP_401_UNAUTHORIZED);
        }

        const [ _prefix, token ] = authorization.split(' ');

        // const secret = process.env.SECRET_KEY!;
        const {secret} = jwtConfig();
        const jwtPayload = verify(token, secret);

        res.locals = {
            ...res.locals, decoded: jwtPayload,
        }

        return next();
    }


    public isResourceOwner = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { decoded } = res.locals;
        const { accountId } = req.params;

        if(decoded.sub !== accountId){
            throw new AppError("You dont have permission to perform this acction", status.HTTP_403_FORBIDDEN);
        }


        return next();
    }


    public isAdmin = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { decoded } = res.locals;
    

        if(decoded.role !== "ADMIN"){
            throw new AppError("You dont have permission to perform this acction", status.HTTP_403_FORBIDDEN);
        }

        return next();
    }
}

export const auth = new AuthMiddleware();