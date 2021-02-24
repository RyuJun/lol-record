<template>
  <div class="bg-white dark:bg-gray-800">
     <!-- Desktop sidebar -->
        <aside class="z-20 flex-shrink-0 w-64  bg-white dark:bg-gray-800 hidden lg:block">
          <div class="py-4 text-gray-500 dark:text-gray-400">
            <div class="flex flex-col justify-center pr-4 pl-4 ">

              <Logo />

              <div class="relative rounded-full flex justify-center flex-col items-center mt-8">
                <img class="w-full h-full rounded-full" :src="getProfileIcon" alt="" style="max-width:100px;">
                <div class="w-full text-sm text-center font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple" style="max-width:70px; margin:0 auto;" aria-hidden="true">
                  {{getSummoner.summonerLevel}}
                </div>
              </div>

              <div class="text-center font-bold mt-2 text-gray-700 dark:text-gray-200">
                {{getSummoner.name}}
              </div>
            </div>

              <h4 class="font-bold text-center mt-8">
                챔피언 숙련도
              </h4>
              <div class="grid gap-4 overflow-y-auto custom-scrollbar-ui p-4" style="max-height:600px;">
                <!-- Card -->
                <template 
                  v-if="championMasteryData.length"
                >
                  <div
                    v-for="masteryData in championMasteryData"
                    v-bind:key="masteryData.championId"
                    class="flex items-center p-3 bg-white rounded-lg shadow-xs dark:bg-gray-700"
                  >
                    <div class="relative w-8 h-8 mr-3 rounded-full">
                      <img class="object-cover w-full h-full rounded-full" :src="masteryData.src" alt="">
                    </div>
                      <div class="w-full">
                      <div
                        class="text-md font-semibold text-gray-700 dark:text-gray-200 flex justify-between"
                      >
                        {{masteryData.name}}
                        <span class="text-sm font-thin leading-relaxed">
                          {{masteryData.championPoints | comma}}점
                        </span>
                      </div>
                      <p
                        class="text-xs font-medium text-gray-600 dark:text-gray-400"
                      >
                        {{masteryData.title}}
                      </p>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <h4 class="text-center text-xs">
                    7LV 미만 챔피언은 표시하지 않습니다.
                  </h4>
                </template>
              </div>
          </div>
        </aside>
      <!-- Mobile sidebar -->
      <!-- Backdrop -->
      <div
        v-show="getIsSideMenuOpen"
        class="fixed inset-0 z-10 bg-black bg-opacity-50  lg:hidden"
      ></div>
      <aside
        class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto custom-scrollbar-ui bg-white dark:bg-gray-800 lg:hidden"
        v-show="getIsSideMenuOpen"
      >
        <div class="py-4 text-gray-500 dark:text-gray-400">
          <Logo />
          <div class="w-full flex justify-center mt-6">
            <div class="relative rounded-full flex justify-center flex-col items-end" style="height:100px; width:100px;">
              <img class="w-full h-full rounded-full" :src="getProfileIcon" alt="" height="100px" width="100px">
              <div class="w-full text-sm text-center font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple" style="max-width:70px; margin:0 auto;" aria-hidden="true">
                {{getSummoner.summonerLevel}}
              </div>
            </div>
          </div>
            <div class="full p-4">
            <div class="text-center font-bold mt-5 text-gray-700 dark:text-gray-200">
              {{getSummoner.name}}
            </div>
          </div>
          <div class="full p-4">
            <h4 class="mb-2 font-bold text-center">
              챔피언 숙련도
            </h4>
            <div class="grid gap-4 mb-8">
              <template 
                  v-if="championMasteryData.length"
                >
                  <div
                    v-for="masteryData in championMasteryData"
                    v-bind:key="masteryData.championId"
                    class="flex items-center p-3 bg-white rounded-lg shadow-xs dark:bg-gray-700"
                  >
                    <div class="relative w-8 h-8 mr-3 rounded-full">
                      <img class="object-cover w-full h-full rounded-full" :src="masteryData.src" alt="">
                    </div>
                      <div class="w-full">
                      <div
                        class="text-md font-semibold text-gray-700 dark:text-gray-200 flex justify-between"
                      >
                        {{masteryData.name}}
                        <span class="text-sm font-thin leading-relaxed">
                          {{masteryData.championPoints | comma}}점
                        </span>
                      </div>
                      <p
                        class="text-xs font-medium text-gray-600 dark:text-gray-400"
                      >
                        {{masteryData.title}}
                      </p>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <h4 class="text-center text-xs">
                    7LV 미만 챔피언은 표시하지 않습니다.
                  </h4>
                </template>
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
  filters:{
    comma(val){
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
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
      return `/cdn/11.4.1/img/profileicon/${profileIconId}.png`;
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
        }).map(item => {
        // }).splice(0,7).map(item => {
          const selectChampion = champions.filter(campion => campion.key === String(item.championId));
          console.log(selectChampion);
          return {
            ...item,
            src:`/cdn/11.4.1/img/champion/${selectChampion[0].id}.png`,
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

