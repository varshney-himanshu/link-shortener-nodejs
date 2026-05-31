import config from "../../config/config";
import { PostgresTransactionManager } from "../../shared/database/postgres-transaction-manager";
import { Base62 } from "../../utils/base62";

import { UrlRepository } from "./url.repository";

class UrlService {
  constructor(
    private readonly respository: UrlRepository,
    private readonly transactionManager: PostgresTransactionManager,
  ) {}

  createShortUrl = async (originalUrl: string): Promise<string> => {
    return this.transactionManager.runInTransaction(async (dbclient) => {
      const { id } = await this.respository.create({ url: originalUrl }, dbclient);

      let shortCode = Base62.encode(id);

      await this.respository.updateShortCode(shortCode, id, dbclient);

      return `${config.baseUrl}/${shortCode}`;
    });
  };

  fetchOriginalUrl = async (shortCode: string): Promise<string> => {
    const { original_url } = await this.respository.fetchOriginalUrl(shortCode);

    return original_url;
  };
}

export default UrlService;
