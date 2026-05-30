export interface CreateUrlRecordId {
  id: number;
}

export interface DbExecutor {
  query<T>(text: string, params?: unknown[]): Promise<{ rows: T[] }>;
}
