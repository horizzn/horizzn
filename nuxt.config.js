export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'Horizzn° | %s',
    title: 'Tools For The Awakened',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description
      },
      // Open Graph / Facebook
      {property: 'og:type', content: 'website'},
      {hid: 'og:url', property: 'og:url', content: 'https://horizzn.com'},
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Horizzn° |  Tools for the Awakened'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: process.env.npm_package_description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://horizzn.com/images/horizzn-meta-poster.png'
      },
      // Twitter
      {
        his: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: 'https://horizzn.com'
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Horizzn° |  Tools for the Awakened'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: process.env.npm_package_description
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://horizzn.com/images/horizzn-meta-poster.png'
      }
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/panzoom'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-130081653-1'
        //  For testing analytics in dev mode
        // debug: {
        //   enabled: true,
        //   sendHitTask: true
        // }
      }
    ]
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css'
    // purgeCSSInDev: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
