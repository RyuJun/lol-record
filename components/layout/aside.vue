<template>
  <div class="bg-white dark:bg-gray-800">
     <!-- Desktop sidebar -->
        <aside class="z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block">
          <div class="py-4 text-gray-500 dark:text-gray-400">
           <Logo />
            <!-- <div class="mt-6">
              <img :src="getProfileIcon" />
            </div> -->
            <div class="w-full flex justify-center mt-6">
              <div class="relative hidden rounded-full md:block flex justify-center items-end" style="height:100px; width:100px;">
                <img class="object-cover w-full h-full rounded-full" :src="getProfileIcon" alt="" height="100px" width="100px">
                <div class="w-full text-sm text-center font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple" aria-hidden="true" style="max-width:70px; margin:0 auto;">
                  {{getSummoner.summonerLevel}}
                </div>
              </div>
            </div>
            <div class="full mt-6 p-4">
             <div class="text-center font-bold mt-5 text-gray-700 dark:text-gray-200">
                {{getSummoner.name}}
              </div>
            </div>
            <div class="full p-4">
              <h4 class="mb-2 mt-5 font-bold text-center">
                최근 7일 랭크 
              </h4>
              <div class="grid gap-6 mb-8 mt-5">
                <!-- Card -->
                <div
                  v-for="masteryData in championMasteryData"
                  v-bind:key="masteryData.championId"
                  class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-700"
                >
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img class="object-cover w-full h-full rounded-full" :src="masteryData.src" alt="">
                  </div>
                  <div>
                    <p
                      class="text-xs font-medium text-gray-600 dark:text-gray-400"
                    >
                      Total clients
                    </p>
                    <p
                      class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                    >
                      6389
                    </p>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </aside>
      <!-- Mobile sidebar -->
      <!-- Backdrop -->
      <div
        v-show="getIsSideMenuOpen"
        class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center md:hidden"
      ></div>
      
      <aside
        class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
        v-show="getIsSideMenuOpen"
      >
        <div class="py-4 text-gray-500 dark:text-gray-400">
          <Logo />
          <div class="w-full flex justify-center mt-6">
            <div class="relative mr-3 rounded-full flex justify-center items-end flex-col" style="height:100px; width:100px;">
              <img class="object-cover w-full h-full rounded-full" :src="getProfileIcon" alt="" height="100%" width="100%" loading="lazy">
              <div class="w-full text-sm text-center font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple" aria-hidden="true" style="max-width:70px; margin:0 auto;">
                {{getSummoner.level}}
              </div>
            </div>
          </div>
        </div>
      </aside>
  </div>
</template>

<script>

import Logo from '../Logo.vue'

export default {
  components: {
    Logo,
  },
  name: 'Aside',
  data() {
    return {
      isPagesMenuOpen : false,
      championMasteryData : [],
    };
  },
  created() {
    this.getChampionMastery();
  },
  computed: {
    getSummoner() {
      return this.$store.state.common.sommoner;
    },
    getProfileIcon () {
      const profileIconId = this.$store.state.common.sommoner.profileIconId;
      return `/cdn/10.25.1/img/profileicon/${profileIconId}.png`;
    },
    getTheme () {
      return this.$store.state.common.theme;
    },
    getIsSideMenuOpen() {
      return this.$store.state.common.isSideMenuOpen;
    }
  },
  methods: {
    togglePagesMenu() {
      this.isPagesMenuOpen = !this.isPagesMenuOpen;
    },
    
    getChampionMastery() {
      const champions = this.$store.state.common.champions;
      const championMastery = this.$axios.$get(`/api/champion-mastery/v4/champion-masteries/by-summoner/${this.$store.state.common.sommoner.id}`);
      
      championMastery.then(result => {
        const maxLevelCampion = result.filter(item => item.championLevel === 7);
        const topFiveCampion = maxLevelCampion.sort((a, b) => {
          return a.championPoints > b.championPoints
        }).slice(0,5).map(item => {
          const selectChampion = champions.filter(campion => campion.key === String(item.championId));
          return {
            ...item,
            src:`/cdn/10.25.1/img/champion/${selectChampion[0].id}.png`,
            name: selectChampion[0].name,
            title: selectChampion[0].title
          }
        })
        this.championMasteryData = topFiveCampion; 
      });
    },
  },
}
</script>

<style>

</style>

