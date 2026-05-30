import CreateShortUrlDto from "./dto/create-short-url-request.dto";
import { CreateUrlRecordId, DbExecutor } from "./url.types";

export class UrlRepository {
  constructor(private readonly db: DbExecutor) {}

  async create(dto: CreateShortUrlDto, client: DbExecutor = this.db): Promise<CreateUrlRecordId> {
    const orignal_url = dto.url;

    let query = `
        INSERT INTO urls (original_url, short_code)
        VALUES ($1, $2) RETURNING id
    `;

    let values = [orignal_url, ""];

    let result = await client.query<CreateUrlRecordId>(query, values);
    return result.rows[0];
  }

  async updateShortUrl(shortUrl: string, id: Number, client: DbExecutor = this.db) {
    let query = `
    UPDATE urls 
    SET short_code = $1
    WHERE id = $2
    `;

    let values = [shortUrl, id];

    await client.query(query, values);
  }
}
