import { SessionBodyCreate, SessionReturn } from "../interfaces";
import { prisma } from "../database"
import { sessionReturnSchema } from "../schemas";
import { compare } from "bcryptjs";
import { AppError } from "../errors/AppError";
import { sign } from "jsonwebtoken";
import { jwtConfig } from "../configs";
import { status } from "../utils";

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
            throw new AppError("Invalid credentials.", status.HTTP_401_UNAUTHORIZED);
        }

        // VERIFICAR SENHA
        const passwordMatch = await compare(password, foundUser.password);

        if(!passwordMatch) {
            // throw new AppError("Invalid credentials", 401);
            throw new AppError("Invalid credentials.", status.HTTP_401_UNAUTHORIZED);
        }

        // GERAR TOKEN JWT
        // const secret = process.env.SECRET_KEY!; //com essa exclamaçao estou  afirmando que essa chave existe
        // const expiresIn = process.env.EXPIRES_IN!;
        const {secret, expiresIn} = jwtConfig()


        const token = sign({ favoriteColor: foundUser.favoriteColor, role: foundUser.role }, secret, {
            expiresIn: expiresIn,
            subject: foundUser.id.toString(),
        });

        return { token };
        // return sessionReturnSchema.parse(token);
        // return { message: "credenciais válidas" }; 
    };
}