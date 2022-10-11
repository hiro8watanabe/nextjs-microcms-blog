import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "jamstack-nextjs",
  apiKey: process.env.API_KEY,
});
