export default {
  server: {
    host: '0.0.0.0',
  },
  ssr: false,

  head: {
    title: 'Solut',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
  },

  css: ['@/assets/main.css', '@/assets/iconfont/icon-dist/icons.css'],

  plugins: [
    '~/plugins/firebase.js',
    '~/plugins/vue-upload-component.js',
    '~/plugins/vue-form-wizard.js',
    '~/plugins/vue-bottom-sheet.js',
    '~/plugins/firebaseAuth.js',
    '~/plugins/vuelidate.js',
  ],

  components: true,

  buildModules: ['@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/pwa'],

  pwa: {
    manifest: {
      name: 'Solut App',
      short_name: 'Solut',
      lang: 'en',
      description: 'Solut is an app that helps people become more resillient to extreme weatherconditions due to climate change.',
    },
    icon: {
      source: '~/static/solut_logo.png',
      fileName: 'solut_logo.png',
      purpose: 'maskable',
    },
  },

  build: {},
}
