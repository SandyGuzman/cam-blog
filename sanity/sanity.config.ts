import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';  // Importa la correcta

export default defineConfig({
  name: 'default',
  title: 'CAM blog',

  projectId: 'fbcpyu2x',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],  // Usa el importado

  schema: {
    types: schemaTypes,
  },
});
