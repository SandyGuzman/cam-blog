import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';  

export default defineConfig({
  name: 'default',
  title: 'CAM blog',

  projectId: 'NEXT_PUBLIC_SANITY_PROJECT_ID',
  dataset: 'NEXT_PUBLIC_SANITY_DATASET',

  plugins: [structureTool(), visionTool()],  

  schema: {
    types: schemaTypes,
  },
});
