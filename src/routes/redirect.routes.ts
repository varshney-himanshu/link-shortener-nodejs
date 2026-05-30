import { Router } from "express";
import { controller as urlController } from "../modules/url/url.module";

const redirectRouter = Router();

redirectRouter.get("/:shortCode", urlController.redirecttoOriginalUrl);

export default redirectRouter;
