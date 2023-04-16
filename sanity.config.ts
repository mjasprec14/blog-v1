import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'jswvt59x',
  dataset: 'production',
  title: 'blog-v1',
  apiVersion: '2023-16-04',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
});

export default config;
