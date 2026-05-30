import ApiResponse from "../../shared/types/api-response.type";
import CreateShortUrlDto from "./dto/create-short-url-request.dto";
import { CreateShortUrlResponseDto } from "./dto/create-url-response.dto";
import UrlService from "./url.service";
import { Request, Response, NextFunction } from "express";

import { RedirectParams } from "./url.types";

class UrlController {
  constructor(private readonly urlService: UrlService) {}

  createShortUrl = async (
    req: Request<{}, ApiResponse<CreateShortUrlResponseDto>, CreateShortUrlDto>,
    res: Response<ApiResponse<CreateShortUrlResponseDto>>,
    next: NextFunction,
  ) => {
    try {
      const originalUrl = req.body.url;

      const shortUrl: string = await this.urlService.createShortUrl(originalUrl);

      return res.status(200).json({
        success: true,
        message: "Short URL created successfully",
        data: { shortUrl },
      });
    } catch (error) {
      next(error);
    }
  };

  redirecttoOriginalUrl = async (req: Request<RedirectParams>, res: Response, next: NextFunction) => {
    const { shortCode } = req.params;

    try {
      const originalUrl = await this.urlService.fetchOriginalUrl(shortCode);

      return res.redirect(originalUrl);
    } catch (error) {
      next(error);
    }
  };
}

export default UrlController;
