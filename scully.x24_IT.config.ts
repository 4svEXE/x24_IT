import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'x24_IT',
  distFolder: './dist/x24_IT/browser',
  outDir: './dist/static',
  routes: {},
  extraRoutes: [
    '/blog/:id',
    // other dynamic routes
  ],
};


