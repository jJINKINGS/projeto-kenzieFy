"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
const tsyringe_1 = require("tsyringe");
let AccountController = class AccountController {
    service;
    // private service = new AccountService();
    constructor(service) {
        this.service = service;
        // this.service = service;
    }
    create = async (req, res) => {
        const newAccount = await this.service.create(req.body);
        return res.status(201).json(newAccount);
    };
    list = async (req, res) => {
        const accounts = await this.service.list();
        console.log(res.locals);
        return res.status(200).json(accounts);
    };
    retrieve = async (req, res) => {
        const account = await this.service.retrieve(Number(req.params.accountId));
        // const account = res.locals.account;
        // const accountId = Number(req.params.accountId);
        // const account = await this.service.retrieve(accountId);
        // console.log(res.locals);
        return res.status(200).json(account);
    };
};
exports.AccountController = AccountController;
exports.AccountController = AccountController = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("AccountService")),
    __metadata("design:paramtypes", [Object])
], AccountController);
