import { Pool, PoolClient } from "pg";

export class PostgresTransactionManager {
  constructor(private readonly db: Pool) {}

  async runInTransaction<T>(callback: (client: PoolClient) => Promise<T>): Promise<T> {
    const client = await this.db.connect();

    try {
      await client.query("BEGIN");

      const result = await callback(client);

      await client.query("COMMIT");

      return result;
    } catch (e) {
      await client.query("ROLLBACK");
      throw e;
    } finally {
      client.release();
    }
  }
}
