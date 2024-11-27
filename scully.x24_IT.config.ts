import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'x24_IT',
  distFolder: './dist/x24_IT/browser',
  outDir: './dist/static',
  routes: {
    '/blog/:id': {
      type: 'json',
      id: {
        url: 'https://example.com/api/posts', // URL до вашого API
        property: 'id' // Поле, яке використовується як параметр маршруту
      }
    }
  }
};
