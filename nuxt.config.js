const isDev = process.env.NODE_ENV === 'development'
const useEmulators = true

export default {
  server: {
    host: '0.0.0.0',
  },
  ssr: false,

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
  css: ['@/assets/main.css'],

  plugins: ['~/plugins/vue-avatar-cropper.js'],

  components: true,

  buildModules: ['@nuxtjs/tailwindcss'],

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
      auth: {
        emulatorPort: isDev && useEmulators ? 9099 : undefined,
        disableEmulatorWarnings: true,
      },
      firestore: {
        emulatorPort: isDev && useEmulators ? 8080 : undefined,
      },
    },
  },

  build: {},
}
