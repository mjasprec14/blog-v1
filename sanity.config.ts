import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: 'jswvt59x',
  dataset: 'production',
  title: 'blog-v1',
  apiVersion: '2023-16-04',
  basePath: '/admin',
  plugins: [deskTool()],
});

export default config;
