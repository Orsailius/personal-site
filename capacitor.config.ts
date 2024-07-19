import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'page.justinmoore',
  appName: 'Personal Site',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
