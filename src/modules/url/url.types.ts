export interface CreateUrlRecordId {
  id: number;
}

export interface CreateOriginalUrl {
  original_url: string;
}

export interface DbQueryResult<T> {
  rows: T[];
  rowCount: number | null;
}

export interface DbExecutor {
  query<T>(text: string, params?: unknown[]): Promise<DbQueryResult<T>>;
}

export type RedirectParams = {
  shortCode: string;
};
