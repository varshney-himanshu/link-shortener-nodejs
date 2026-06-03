import CreateShortUrlDto from "./dto/create-short-url-request.dto";
import { CreateUrlRecordId, CreateOriginalUrl } from "./url.types";
import { DbExecutor } from "../../shared/types/db";
import { AppError } from "../../shared/errors/app-errors";

export class UrlRepository {
  constructor(private readonly db: DbExecutor) {}

  async create(dto: CreateShortUrlDto, client: DbExecutor = this.db): Promise<CreateUrlRecordId> {
    const original_url = dto.url;

    let query = `
        INSERT INTO urls (original_url, short_code)
        VALUES ($1, NULL) RETURNING id
    `;

    let values = [original_url];

    let result = await client.query<CreateUrlRecordId>(query, values);

    if (result.rowCount === 0) {
      throw new AppError("Failed to Create code. Please try again later", 500);
    }

    return result.rows[0];
  }

  async updateShortCode(shortCode: string, id: number, client: DbExecutor = this.db) {
    let query = `
    UPDATE urls 
    SET short_code = $1
    WHERE id = $2
    `;

    let values = [shortCode, id];

    let result = await client.query(query, values);

    if (result.rowCount === 0) {
      throw new AppError("Failed to Create code. Please try again later", 500);
    }
  }

  async fetchOriginalUrl(shortCode: string): Promise<CreateOriginalUrl> {
    let query = `
    SELECT original_url FROM urls 
    WHERE short_code = $1
    `;

    let values = [shortCode];

    let result = await this.db.query<CreateOriginalUrl>(query, values);

    if (result.rows.length === 0) {
      throw new AppError("Short url not found", 404);
    }

    return result.rows[0];
  }
}
