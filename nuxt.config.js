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

  css: ['@/assets/main.css', '@/assets/iconfont/icon-dist/icons.css'],

  plugins: ['~/plugins/vue-avatar-cropper.js'], ['~/plugins/firebase.js'],


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
