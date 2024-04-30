"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const database_1 = require("../database");
const schemas_1 = require("../schemas");
const bcryptjs_1 = require("bcryptjs");
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("../errors/AppError");
const utils_1 = require("../utils");
let AccountService = class AccountService {
    isUsernameUnique = async (username) => {
        const foundUser = await database_1.prisma.account.findFirst({ where: { username } });
        return Boolean(foundUser);
    };
    list = async () => {
        const accounts = await database_1.prisma.account.findMany();
        return schemas_1.accountReturnSchema.array().parse(accounts);
    };
    create = async (payload) => {
        const foundAccount = await this.isUsernameUnique(payload.username);
        if (foundAccount) {
            throw new AppError_1.AppError("Username already exists.", utils_1.status.HTTP_409_CONFLICT);
        }
        payload.password = await (0, bcryptjs_1.hash)(payload.password, 10); //exige esforço computacional para gerar esse hash
        const newAccount = await database_1.prisma.account.create({ data: payload });
        return schemas_1.accountReturnSchema.parse(newAccount); //se tiver chave a mais ele so retorna as que tem na model/interface
    };
    retrieve = async (accountId) => {
        const account = await database_1.prisma.account.findFirst({
            where: { id: accountId }
        });
        return schemas_1.accountReturnSchema.parse(account);
    };
};
exports.AccountService = AccountService;
exports.AccountService = AccountService = __decorate([
    (0, tsyringe_1.injectable)()
], AccountService);
// export const accountService = new AccountService();
