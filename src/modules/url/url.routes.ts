import { Router } from "express";
import { controller } from "./url.module";
import { validate } from "../../middlewares/validate.middlware";
import { createShortUrlSchema } from "./url.validation";

const urlRoutes = Router();

urlRoutes.post("/create", validate(createShortUrlSchema), controller.createShortUrl);

export default urlRoutes;
