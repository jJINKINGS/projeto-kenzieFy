import  express, { json }  from "express";
import "express-async-errors";
import { bandRouter, albumRouter, trackRouter, accountRouter, sessionRouter } from "./routers";
import { handleErrors } from "./middlewares";

export const app = express();

app.use(json());

app.use("/api/bands", bandRouter);
app.use("/api/albums", albumRouter);
app.use("/api/tracks", trackRouter);
app.use("/api/accounts", accountRouter);
app.use("/api", sessionRouter);

app.use(handleErrors);