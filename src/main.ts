import { Capacitor } from '@capacitor/core'
import { App as CapacitorApp } from '@capacitor/app'
import { Browser } from '@capacitor/browser'
import { Share } from '@capacitor/share'
import './style.css'

const SITE_URL = 'https://www.alphaflowx.com'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root not found')
}

const isNative = Capacitor.isNativePlatform()

const openSite = async (url = SITE_URL) => {
  if (isNative) {
    await Browser.open({ url, presentationStyle: 'fullscreen' })
    return
  }
  window.location.href = url
}

const shareApp = async () => {
  const shareText =
    'AlphaFlowX App: AI trading dashboard on mobile. Open: https://www.alphaflowx.com'

  if (isNative) {
    await Share.share({
      title: 'AlphaFlowX',
      text: shareText,
      url: SITE_URL,
      dialogTitle: 'Share AlphaFlowX',
    })
    return
  }

  if (navigator.share) {
    await navigator.share({
      title: 'AlphaFlowX',
      text: shareText,
      url: SITE_URL,
    })
    return
  }

  await navigator.clipboard.writeText(SITE_URL)
  window.alert('Link copied: https://www.alphaflowx.com')
}

app.innerHTML = `
  <main class="shell">
    <section class="hero">
      <img class="logo" src="https://www.alphaflowx.com/icons/alphaflowx-mark-v2.svg" alt="AlphaFlowX" />
      <div class="eyebrow">ALPHAFLOWX APP</div>
      <h1>Independent mobile shell for AlphaFlowX</h1>
      <p>
        This app is isolated from the current mobile website. It opens the live AlphaFlowX platform in a dedicated
        mobile container for iPhone, Android, and Huawei Android devices.
      </p>
      <div class="actions">
        <button id="open-dashboard" class="primary">Open AlphaFlowX</button>
        <button id="open-login" class="secondary">Login</button>
        <button id="share-app" class="secondary">Share App</button>
      </div>
      <div class="meta">
        <span>Capacitor runtime</span>
        <span>Common codebase</span>
        <span>iOS / Android / Huawei Android</span>
      </div>
    </section>
  </main>
`

document.querySelector<HTMLButtonElement>('#open-dashboard')?.addEventListener('click', () => {
  void openSite(SITE_URL)
})

document.querySelector<HTMLButtonElement>('#open-login')?.addEventListener('click', () => {
  void openSite(`${SITE_URL}/login`)
})

document.querySelector<HTMLButtonElement>('#share-app')?.addEventListener('click', () => {
  void shareApp()
})

if (isNative) {
  void CapacitorApp.addListener('appUrlOpen', ({ url }) => {
    if (!url) return
    if (url.includes('/share/')) {
      void openSite(url.replace('com.alphaflowx.app://', SITE_URL + '/'))
      return
    }
    void openSite(SITE_URL)
  })
}
