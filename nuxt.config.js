export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  generate: {
    subFolders: true,
  },
  router: {
    base: '/',
    prefetchLinks: false
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Schooley and Sons Tackle',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Shooley and Sons Tackle has been providing premier ice fishing equiptment for two generations' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],
  env:{
    strapiBaseUri: process.env.API_URL || "http://localhost:1337"
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    //Nuxt appolo 
    '@nuxtjs/apollo'
  ],
  //Appolo config to connect to strapi graphql API
  apollo: {  
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql"
      }
    }
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
