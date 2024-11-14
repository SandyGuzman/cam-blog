import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { defineConfig } from 'sanity';

export default defineConfig({
  name: 'default',
  title: 'CAM blog',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [visionTool()],

  schema: {
    types: schemaTypes,
  },
});
