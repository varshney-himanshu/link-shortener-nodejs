import { TransactionManager } from "../../shared/database/transaction-manager";
import CreateShortUrlResponseDto from "./dto/create-short-url-response.dto";

import { UrlRepository } from "./url.repository";
class UrlService {
  constructor(
    private readonly respository: UrlRepository,
    private readonly transactionManager: TransactionManager,
  ) {}

  createShortUrl = async (): Promise<CreateShortUrlResponseDto> => {
    // TODO: Save the original url to the datastore
    // TODO: retreive the unique id of the saved url
    // TODO: encode the unique id to base62 string
    // TODO: return the short url by appending the base62 string to the domain name

    return {
      url: "",
    };
  };
}

export default UrlService;
