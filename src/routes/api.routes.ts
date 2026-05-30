import urlRoutes from "../modules/url/url.routes";
import { Router } from "express";

const apiRouter = Router();

apiRouter.use("/urls", urlRoutes);

export default apiRouter;
