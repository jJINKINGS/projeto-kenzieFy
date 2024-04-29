import { Router } from "express";
import { AccountController } from "../controllers";
import { auth, ensure } from "../middlewares";
import { accountBodyCreateSchema } from "../schemas";
import { AccountService } from "../services";
import { container } from "tsyringe";

export const accountRouter = Router();

container.registerSingleton("AccountService", AccountService);
const accountController = container.resolve(AccountController);

// const accountController = new AccountController(accountService);

accountRouter.post(
  "",
  ensure.bodyIsValid(accountBodyCreateSchema),
  accountController.create
);

accountRouter.get(
  "",
//   auth.isAuthenticated,
//   auth.isAdmin,
  accountController.list
);

accountRouter.get(
  "/:accountId",
  auth.isAuthenticated,
  auth.isResourceOwner,
  accountController.retrieve
);
