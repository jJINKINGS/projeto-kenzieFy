"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const schemas_1 = require("../schemas");
const services_1 = require("../services");
const tsyringe_1 = require("tsyringe");
exports.accountRouter = (0, express_1.Router)();
tsyringe_1.container.registerSingleton("AccountService", services_1.AccountService);
const accountController = tsyringe_1.container.resolve(controllers_1.AccountController);
// const accountController = new AccountController(accountService);
exports.accountRouter.post("", middlewares_1.ensure.bodyIsValid(schemas_1.accountBodyCreateSchema), accountController.create);
exports.accountRouter.get("", 
//   auth.isAuthenticated,
//   auth.isAdmin,
accountController.list);
exports.accountRouter.get("/:accountId", middlewares_1.auth.isAuthenticated, middlewares_1.auth.isResourceOwner, accountController.retrieve);
