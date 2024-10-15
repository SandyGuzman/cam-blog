import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'fbcpyu2x', 
  dataset: 'production', 
  useCdn: false, 
  apiVersion: 'v2023-10-01', 
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) { 
  return builder.image(source);
}

export default client;  
