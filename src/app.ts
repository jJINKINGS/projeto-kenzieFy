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

postgres://m5_t20_demo_deploy_db_vb83_user:UkSfvsyyv2JPyQED76CXvSc5FfmygTp0@dpg-cooj8s2cn0vc738ij610-a.ohio-postgres.render.com/m5_t20_demo_deploy_db_vb83