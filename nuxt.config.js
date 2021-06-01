export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'solut',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/pwa', '@nuxtjs/firebase'],

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyB1Jb16EPfOSwI6txAr0bnC6OP4xjqMZC0',
      authDomain: 'solut-3961b.firebaseapp.com',
      projectId: 'solut-3961b',
      storageBucket: 'solut-3961b.appspot.com',
      messagingSenderId: '1023760805376',
      appId: '1:1023760805376:web:8bac431fb45dfc7a6c32e5',
      measurementId: 'G-0RTQKB8693',
    },
    services: {
      auth: true,
      firestore: true,
      storage: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
