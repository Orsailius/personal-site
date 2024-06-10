import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'page.justinmoore.cardgame',
  appName: 'Card Game',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
