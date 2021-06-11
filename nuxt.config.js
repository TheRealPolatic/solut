export default {
  ssr: false,

  server: {
    host: '0.0.0.0',
  },

  head: {
    title: 'solut',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: ['~/plugins/firebase.js', '~/plugins/vue-upload-component.js', '~/plugins/vue-form-wizard.js', '~/plugins/vue-bottom-sheet.js'],

  components: true,

  buildModules: ['@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/pwa'],

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {},
}
