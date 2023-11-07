import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.faciliwise.app',
  appName: 'FaciliWise',
  webDir: 'dist/FaciliWise',
  server: {
    androidScheme: 'https'
  }
};

export default config;
