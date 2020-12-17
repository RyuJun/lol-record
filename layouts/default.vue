<template>
  <div id="wrap" class="flex h-screen bg-gray-50 dark:bg-gray-900"
      :class="{ 'overflow-hidden': getIsSideMenuOpen}">
    <Aside />
    <div class="flex flex-col flex-1">
      <Header />
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Header from '../components/layout/header.vue'
import Aside from '../components/layout/aside.vue';

export default {
  components: {
    Aside,
    Header,
  },
   computed: {
    getIsSideMenuOpen() {
      return this.$store.state.common.isSideMenuOpen;
    }
  },
  mounted () {
    document.querySelector('html').classList.add(`theme-${this.$store.state.common.theme}`);
  }
}
</script>
<style>
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
