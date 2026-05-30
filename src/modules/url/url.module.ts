import UrlService from "./url.service";
import UrlController from "./url.controller";
import { UrlRepository } from "./url.repository";
import { db } from "../../config/db";
import { PostgresTransactionManager } from "../../shared/database/postgres-transaction-manager";

export const repository = new UrlRepository(db);

const transactionManager = new PostgresTransactionManager(db);

export const service = new UrlService(repository, transactionManager);

export const controller = new UrlController(service);
