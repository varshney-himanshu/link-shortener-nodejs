import { Router } from "express";
import { controller } from "./url.module";

const urlRoutes = Router();

urlRoutes.post("/create", controller.createShortUrl);

export default urlRoutes;
