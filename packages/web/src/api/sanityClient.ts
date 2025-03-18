import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";


export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
});

const builder = ImageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)