import ApiResponse from "../../shared/types/api-response.type";
import CreateShortUrlDto from "./dto/create-short-url-request.dto";
import CreateShortUrlResponseDto from "./dto/create-short-url-response.dto";
import UrlService from "./url.service";
import { Request, Response, NextFunction } from "express";

class UrlController {
  constructor(private readonly urlService: UrlService) {}

  createShortUrl = async (
    req: Request<{}, ApiResponse<CreateShortUrlResponseDto>, CreateShortUrlDto>,
    res: Response<ApiResponse<CreateShortUrlResponseDto>>,
    next: NextFunction,
  ) => {
    try {
      const shortUrl: CreateShortUrlResponseDto = await this.urlService.createShortUrl();

      return res.status(200).json({
        success: true,
        message: "Short URL created successfully",
        data: shortUrl,
      });
    } catch (error) {
      next(error);
    }
  };

  redirecttoOriginalUrl = async (req: Request, res: Response<ApiResponse<CreateShortUrlResponseDto>>, next: NextFunction) => {
    try {
      const shortUrl: CreateShortUrlResponseDto = await this.urlService.createShortUrl();

      return res.status(200).json({
        success: true,
        message: "Short URL created successfully",
        data: shortUrl,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default UrlController;
