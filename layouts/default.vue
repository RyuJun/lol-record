<template>
  <div id="wrap" class="flex h-screen bg-gray-50 dark:bg-gray-900"
      :class="{ 'overflow-hidden': getIsSideMenuOpen}">
    <template v-if="!getSommoner">
      <div class="flex flex-col flex-1 justify-center items-center">
        <div class="ready-logo-wrapper flex justify-center ">
           <Logo />
        </div>
      <div class="flex justify-center w-full">
          <div
            class="relative w-full max-w-xl mr-6 ml-6 focus-within:text-purple-500"
          >
            <div class="absolute inset-y-0 flex items-center pl-2">
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              class="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
              type="text"
              placeholder="Search Summoner Name"
              aria-label="Search"
              v-model="nameInput"
              @keypress.enter="searchSommoner()"
            />
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <Aside />
      <div class="flex flex-col flex-1">
        <Header />
        <Nuxt />
      </div>
    </template>
  </div>
</template>
<script>
import Header from '../components/layout/header.vue'
import Aside from '../components/layout/aside.vue';
import Logo from '../components/Logo.vue'

export default {
  components: {
    Aside,
    Header,
  },
  data() {
    return {
      nameInput: null,
    }
  },
  mounted () {
    document.querySelector('html').classList.add(`theme-${this.$store.state.common.theme}`);
  },
  computed: {
    getIsSideMenuOpen() {
      return this.$store.state.common.isSideMenuOpen;
    },
    getSommoner() {
      return this.$store.state.common.sommoner;
    }
  },
  methods: {
    async searchSommoner() {
      try {
        const response = await this.$axios.$get(`/api/summoner/v4/summoners/by-name/${encodeURIComponent(this.nameInput)}`);
        console.log(response);
        this.$store.commit('common/setSommoner', response);
      } catch (error) {
        console.log(error);
        this.$store.commit('common/setSommoner', null);
      } finally {
        // setLoading(false);
      }
      
      // 
      
    }
  }
}
</script>
<style lang="scss">
html {
  font-family: 'Roboto', 'Noto Sans KR', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.ready-logo-wrapper {
  max-width:250px;
  margin-bottom:10px;
  .logoWrapper {
    max-width:100%;
    &:after {
      background-image: linear-gradient(120deg, transparent, transparent, rgba(18, 19, 23, 0.26));
    }
  }
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
