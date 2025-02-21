import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ari72kmz",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-02-21",
});
