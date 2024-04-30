"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApp = exports.app = void 0;
require("reflect-metadata");
const express_1 = __importStar(require("express"));
require("express-async-errors");
const middlewares_1 = require("./middlewares");
const routers_1 = require("./routers");
const configs_1 = require("./configs");
const swagger_1 = require("./configs/swagger");
exports.app = (0, express_1.default)();
// INICALIZAR OS PROCESSOS NECESSARIOS PARA RODAR A APLICAÇÃO
const initApp = () => {
    exports.app.use((0, express_1.json)());
    (0, routers_1.initRoutes)(exports.app);
    (0, configs_1.initJwtEnvVars)();
    (0, swagger_1.initSwagger)(exports.app);
    //SEMPRE DEPOIS DA INICIALIZAÇÃO DAS ROTAS
    exports.app.use(middlewares_1.handleErrors);
};
exports.initApp = initApp;
