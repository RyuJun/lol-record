const serverUrl = 'https://kr.api.riotgames.com/';
export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'lol-record',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Roboto&family=Russo+One&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  // css: ["~/assets/antd/main.less"],
  css: ['./assets/tailwind/tailwind.output.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  // plugins: ["@/plugins/antd-ui"],
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  axios: {
    baseURL: 'https://kr.api.riotgames.com/lol', // Used as fallback if no runtime config is provided
    proxy: true,
    headers: {
      'X-Riot-Token': 'RGAPI-4b3d4787-b483-40be-a4c7-52e2fe280f80',
    },
  },
  proxy: {
    // /api로 들어오는 모든 요청은
    '/api': {
      // https://kr.api.riotgames.com/lol에 날린다.
      target: 'https://kr.api.riotgames.com/lol',
      // /api 및 이전 path를 전부 /로 변경
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // loaders: {
    //   less: {
    //     lessOptions: {
    //       javascriptEnabled: true
    //     }
    //   }
    // }
  },
};
