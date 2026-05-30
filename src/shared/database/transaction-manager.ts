import { Pool, PoolClient } from "pg";

export interface TransactionManager {
  runInTransaction<T>(callback: (client: PoolClient) => Promise<T>): Promise<T>;
}
