import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.alphaflowx.app',
  appName: 'AlphaFlowX',
  webDir: 'dist',
  backgroundColor: '#0b0d12',
  server: {
    url: 'https://www.alphaflowx.com',
    androidScheme: 'https',
    allowNavigation: ['www.alphaflowx.com', 'alphaflowx.com'],
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      backgroundColor: '#0b0d12',
      showSpinner: false,
    },
  },
}

export default config
