"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRoutes = void 0;
const band_router_1 = require("./band.router");
const album_router_1 = require("./album.router");
const track_router_1 = require("./track.router");
const account_router_1 = require("./account.router");
const session_router_1 = require("./session.router");
const initRoutes = (app) => {
    app.use("/api/bands", band_router_1.bandRouter);
    app.use("/api/albums", album_router_1.albumRouter);
    app.use("/api/tracks", track_router_1.trackRouter);
    app.use("/api/accounts", account_router_1.accountRouter);
    app.use("/api", session_router_1.sessionRouter);
};
exports.initRoutes = initRoutes;
