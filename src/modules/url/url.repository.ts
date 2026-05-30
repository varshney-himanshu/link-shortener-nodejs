import CreateShortUrlDto from "./dto/create-short-url-request.dto";
import { CreateUrlRecordId, CreateOriginalUrl, DbExecutor } from "./url.types";

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

  async updateShortCode(shortCode: string, id: Number, client: DbExecutor = this.db) {
    let query = `
    UPDATE urls 
    SET short_code = $1
    WHERE id = $2
    `;

    let values = [shortCode, id];
    console.log("Updating short code with values:", values);

    let result = await client.query(query, values);
    console.log("Update short code result:", result);

    if (result.rowCount === 0) {
      throw new Error("Failed to update short code");
    }
  }

  async fetchOriginalUrl(shortCode: string, client: DbExecutor = this.db): Promise<CreateOriginalUrl> {
    // TODO: Figure out how to optimize the search query so its fast - indexing???

    console.log("Fetching original URL for short code:", shortCode);

    let query = `
    SELECT original_url FROM urls 
    WHERE short_code = $1
    `;

    let values = [shortCode];

    let result = await client.query<CreateOriginalUrl>(query, values);

    if (result.rows.length === 0) {
      throw new Error("Short code not found");
    }

    return result.rows[0];
  }
}
