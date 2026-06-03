import { z } from "zod";

export const createShortUrlSchema = z.object({
  body: z.object({
    url: z.url("Please provide a valid URL"),
  }),
});
