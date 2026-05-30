export interface CreateUrlRecordId {
  id: number;
}

export interface CreateOriginalUrl {
  original_url: string;
}

export interface DbExecutor {
  query<T>(text: string, params?: unknown[]): Promise<{ rows: T[] }>;
}

export type RedirectParams = {
  shortCode: string;
};
