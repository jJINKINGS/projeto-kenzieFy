import { SessionBodyCreate, SessionReturn } from "../interfaces";
import { prisma } from "../database"
import { sessionReturnSchema } from "../schemas";
import { compare } from "bcryptjs";
import { AppError } from "../errors/AppError";
import { sign } from "jsonwebtoken";

export class SessionService {

    public login = async ({ username, password }: SessionBodyCreate): Promise<SessionReturn> => {
        //VERIFICAR USERNAME
        const foundUser = await prisma.account.findFirst({
            where: { username: username },
        });

        // 401 - Unauthorized (adequado para login/credenciais)
        // 403 - Forbidden (servidor se recusa a fornecer o recurso pelo nível de acesso do usuario, rotas que exigem um token, nao tem permissao necessaria)
        // 400 - bad request ( nao é adequado )
        if(!foundUser) {
            throw new AppError("Invalid credentials.", 401);
        }

        // VERIFICAR SENHA
        const passwordMatch = await compare(password, foundUser.password);

        if(!passwordMatch) {
            // throw new AppError("Invalid credentials", 401);
            throw new AppError("Invalid credentials.", 401);
        }

        // GERAR TOKEN JWT
        const secret = process.env.SECRET_KEY!; //com essa exclamaçao estou  afirmando que essa chave existe
        const expiresIn = process.env.EXPIRES_IN!;


        const token = sign({ favoriteColor: foundUser.favoriteColor, id: foundUser.id }, secret, {
            expiresIn: expiresIn,
        });

        return { token };
        // return sessionReturnSchema.parse(token);
        // return { message: "credenciais válidas" }; 
    };
}