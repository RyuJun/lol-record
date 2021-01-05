<template>
  <div class="w-full overflow-x-auto custom-scrollbar-ui">
    <table class="w-full whitespace-no-wrap">
      <tbody
        class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
      >
        <tr v-for="(match, index) in matches" v-bind:key="match.gameId" class="text-gray-700 dark:text-gray-400">
          <td class="px-4 py-3">
            <div class="grid grid-cols-12 gap-2 relative">
              <div class="flex items-center text-sm col-span-6 sm:col-span-4 md:col-span-3">
                <!-- Avatar with inset shadow -->
                <div
                  class="relative w-8 h-8 mr-3 rounded-full"
                >
                  <img
                    class="object-cover w-full h-full rounded-full"
                    :src="match.src"
                    alt=""
                  />
                </div>
                <div>
                  <p class="font-semibold">
                    {{match.campionName}} 
                    <span class="font-normal text-xs text-gray-600 dark:text-gray-400">
                      {{`${match.time.gap} ${match.time.desc} 전`}} 
                    </span>
                  </p>
                  <p v-if="matchDetails[index]" class="text-xs text-gray-600 dark:text-gray-400" >
                    PlayTime {{Math.floor(matchDetails[index].gameDuration / 60)}} 분
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="flex flex-col">
                  <div class="relative w-5 h-5 m-1 rounded-full">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      :src="match.src"
                      alt=""
                    />
                  </div>
                  <div class="relative w-5 h-5 m-1 rounded-full">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      :src="match.src"
                      alt=""
                    />
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="relative w-5 h-5 m-1 rounded-full">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      :src="match.src"
                      alt=""
                    />
                  </div>
                  <div class="relative w-5 h-5 m-1 ounded-full">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      :src="match.src"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="flex">
              </div>
              <div class="flex">
              </div>
              <div class="flex">
              </div>
            </div>
          </td>
          <!-- <td class="px-4 py-3 text-sm grid grid-cols-2 gap-1">
            <div class="relative hidden w-5 h-5 rounded-full md:block m-center">
              <img
                class="object-cover w-full h-full rounded-full"
                :src="match.src"
                alt=""
              />
            </div>
            <div class="relative hidden w-5 h-5 rounded-full md:block m-center">
              <img
                class="object-cover w-full h-full rounded-full"
                :src="match.src"
                alt=""
              />
            </div>
            <div class="relative hidden w-5 h-5 rounded-full md:block m-center">
              <img
                class="object-cover w-full h-full rounded-full"
                :src="match.src"
                alt=""
              />
            </div>
            <div class="relative hidden w-5 h-5 ounded-full md:block m-center">
              <img
                class="object-cover w-full h-full rounded-full"
                :src="match.src"
                alt=""
              />
            </div>
          </td>
          <td class="px-4 py-3 text-xs">
            <span
              class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
            >
              Approved
            </span>
          </td>
          <td class="px-4 py-3 text-sm">
            6/10/2020
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center space-x-4 text-sm">
              <button
                class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                aria-label="Edit"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                  ></path>
                </svg>
              </button>
              <button
                class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                aria-label="Delete"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'matchTable',
  data() {
    return {
      activeTable: false,
      matches: [],
      matchDetails: []
    };
  },
  computed: {
    getSummoner() {
      return this.$store.state.common.sommoner;
    },
    getCampions() {
      return this.$store.state.common.champions;
    },
  },
  created() {
    this.getMatchs(3);
  },
  mounted() {
  },
  methods: {
    getTimeGap(oldTimeStamp) {
      const old = new Date(oldTimeStamp);
      const now = new Date();
      const gap = now.getTime() - old.getTime();
      const result = {
        sec_gap : Math.floor(gap/1000),
        min_gap : Math.floor(gap/1000/60),
        hours_gap : Math.floor(gap/1000/60/60),
        day_gap :  Math.floor(gap/1000/60/60/24),
      }
      if(result.day_gap > 0){
        return {gap:result.day_gap, desc:'일'}
      }else{
        if(result.hours_gap > 0){
          return {gap:result.hours_gap, desc:'시간'}
        }else{
          if(result.min_gap > 0){
            return {gap:result.min_gap, desc:'분'}
          }else{
            if(result.sec_gap > 0){
              return {gap:result.sec_gap, desc:'초'}
            }
          } 
        }
      }
    },
    async getMatchs(endIndex) {
      try {
        const param = `?${endIndex && `endIndex=${endIndex}`}`
        const matchsRequest = await this.$axios.$get(`/api/match/v4/matchlists/by-account/${this.$store.state.common.sommoner.accountId}${param}`);

        this.matches = matchsRequest.matches;
        this.matches.forEach(game => {
          const selectChampion = this.getCampions.filter(campion => campion.key === String(game.champion));
          this.getMatchDetail(game.gameId);
          game.src = `/cdn/10.25.1/img/champion/${selectChampion[0].id}.png`
          game.campionName = selectChampion[0].name
          game.time = this.getTimeGap(game.timestamp);
        });
      } catch (error) {
        console.log(error);
      } finally {
        // setLoading(false);
      }
    },
    async getMatchDetail(gameId) {
      try {
        const matchsDetails = await this.$axios.$get(`/api/match/v4/matches/${gameId}`);
        console.log(matchsDetails);

        this.matchDetails.push(matchsDetails);
      } catch (error) {
        console.log(error);
      } finally {
        // setLoading(false);
      }
    },
    // getMatchs() {
    //   const matchsRequest = this.$axios.$get(`/api/match/v4/matchlists/by-account/${this.$store.state.common.sommoner.accountId}`);
    //   matchsRequest.then(data => {
        // let playChampions = {};
        // data.matches.forEach(match => {
        //   const matchCampion = match.champion;
        //   if(playChampions[match.champion]){
        //     playChampions[match.champion].list = [
        //       ...playChampions[match.champion].list,
            
        //       match
        //     ]
        //   }else{
        //     playChampions[match.champion] = playChampions[match.champion]
        //   }
        // })
    //   });
    // },
  },
}
</script>

<style>

</style>