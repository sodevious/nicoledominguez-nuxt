import pkg from './package'

export default {
  mode: 'spa',

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      // { property: 'og:image', content: '' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: pkg.description },
      { property: 'og:title', content: pkg.name },
      // { property: 'og:url', content: '' },
      { name: 'twitter:creator', content: '@sodevious' },
      { name: 'twitter:card', content: 'summary' },
      { property: 'google-site-verification', content: 'af0x8lMFq5Izj7MNfhrGXiObtaPCSo4QrON2DW8BjIM' },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#715F80' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],


  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  modules: [
    'nuxt-webfontloader',
    'nuxt-fontawesome',
    '@nuxtjs/style-resources'
  ],

  build: {
    postcss: {
     plugins: {
       'stylelint': false, // turning this off because it's not ignoring node_modules like it's supposed to
       'autoprefixer': {},
     },
     preset: {
       autoprefixer: {
         grid: true
       }
     }
   }
  },

  webfontloader: {
   typekit: {
     id: 'amr1fda'
   }
  },

  fontawesome: {
    imports: [
      {
        component: 'fa',
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },

  styleResources: {
    scss: ['./assets/scss/_mixins.scss', './assets/scss/_variables.scss']
  }
}
