import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cl.solarsol.app',
  appName: 'Solarsol',
  webDir: 'www',
  server: {
    url: 'https://www.solarsol.cl/app.html',
    cleartext: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#12141A',
      showSpinner: false,
    },
  },
  ios: {
    contentInset: 'always',
    allowsLinkPreview: false,
  },
  android: {
    allowMixedContent: false,
  },
};

export default config;
