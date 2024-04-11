import  express, { json }  from "express";
import { bandRouter, albumRouter } from "./routers";
import { handleErrors } from "./middlewares";

export const app = express();

app.use(json());

app.use("/api/bands", bandRouter);
app.use("/api/albums", albumRouter);

app.use(handleErrors);