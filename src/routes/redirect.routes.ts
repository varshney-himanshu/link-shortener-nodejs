import { Router, Request, Response } from "express";

const redirectRouter = Router();

redirectRouter.get("/:shortUrl", (req: Request, res: Response) => {
  const { shortUrl } = req.params;

  res.redirect("https://www.google.com");
});

export default redirectRouter;
