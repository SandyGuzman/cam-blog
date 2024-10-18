import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'; 

export default defineConfig({
  name: 'default',
  title: 'CAM blog',

  projectId: 'fbcpyu2x',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});

