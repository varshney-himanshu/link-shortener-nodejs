export interface CreateUrlRecordId {
  id: number;
}

export interface CreateOriginalUrl {
  original_url: string;
}

export interface CreateShortUrlInfo {
  original_url: string;
  clicks: number;
}

export type RedirectParams = {
  shortCode: string;
};
