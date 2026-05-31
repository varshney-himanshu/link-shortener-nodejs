export interface DbQueryResult<T> {
  rows: T[];
  rowCount: number | null;
}

export interface DbExecutor {
  query<T>(text: string, params?: unknown[]): Promise<DbQueryResult<T>>;
}
