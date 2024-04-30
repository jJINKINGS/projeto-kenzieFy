import "reflect-metadata";
import  express, { json }  from "express";
import "express-async-errors";
import { handleErrors } from "./middlewares";
import { initRoutes } from "./routers";
import { initJwtEnvVars } from "./configs";
import { initSwagger } from "./configs/swagger";

export const app = express();

// INICALIZAR OS PROCESSOS NECESSARIOS PARA RODAR A APLICAÇÃO
export const initApp = () => {
    app.use(json());
    initRoutes(app);
    initJwtEnvVars();
    initSwagger(app);


    //SEMPRE DEPOIS DA INICIALIZAÇÃO DAS ROTAS
    app.use(handleErrors);
};