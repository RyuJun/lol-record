<template>

  <main class="h-full overflow-y-auto custom-scrollbar-ui">
    <div class="container px-6 mx-auto grid mt-6">
      <div class="w-full flex flex-row items-center justify-start mt-6" >
        <img class="object-cover rounded-full" :src="tierSrc" alt="" width="100%" height="auto" style="max-width:140px">
        <div class="font-bold text-gray-600 dark:text-gray-300 ">
          <div class="text-md">League - <span class="text-sm font-normal">{{leagueDetailData.name}}</span></div>
          <div class="text-2xl">{{`${leagueData.tier && `${leagueData.tier} - ${leagueData.rank}`}`}}</div>
          <div class="text-lg">{{`${leagueData.queueType}`}}</div>
        </div>
      </div>
      <h2
        class="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
      >
      </h2>
      <div class="grid gap-6 mb-8 md:grid-cols-3">
        
        <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
          <template v-if="leagueData.wins">
            <div class="flex justify-start items-center flex-row md:flex-col text-gray-800 dark:text-gray-300 mb-3 ">
              <div class="text-3xl font-bold">{{recordAverage}}%</div>
              <div class="text-sm">{{leagueData.wins && leagueData.wins + leagueData.losses}}전 {{leagueData.wins}}승 {{leagueData.losses}}패</div>
            </div>
            <PieChart 
              v-if="leagueData.wins"
              :height="250"
              :chartdata="{
                datasets: [
                  {
                    data:[leagueData.losses, leagueData.wins],
                    backgroundColor: ['#374151', '#7e3af2'],
                  },
                ],
                labels: ['losses', 'wins'],
              }"
            />
            <div class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
              <div class="flex items-center">
                <span
                  class="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
                ></span>
                <span>승리</span>
              </div>
              <div class="flex items-center">
                <span
                  class="inline-block w-3 h-3 mr-1 bg-gray-700 rounded-full"
                ></span>
                <span>패배</span>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="spinner flex justify-center items-center p-4">
                <div class="bg-gray-700 dark:bg-purple-600 rounded-full animate-ping ease-in duration-500 w-10 h-10"></div>
            </div>
          </template>
        </div>
        <div class="min-w-0 p-4 bg-white rounded-lg flex items-center shadow-xs dark:bg-gray-800">
            <div class="w-full flex flex-col items-center justify-center" >
             
            </div>
        </div>

        <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
          <h2 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          </h2>

          <div class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
          </div>
        </div>
      </div>
    </div>

    <div class="container grid px-6 mx-auto">
      <h2
        class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
      >
        게임 정보
      </h2>
      <div class="w-full overflow-hidden rounded-lg shadow-xs mb-20">
        <MatchTable />
      </div>
    </div>
  </main>

</template>

<script>
import PieChart from '../components/layout/PieChart';
import MatchTable from '../components/layout/MatchTable'
export default {
  name: 'Index',
  components: {
    PieChart,
    MatchTable
  },
  data() {
    return {
      leagueData: {
        tier: '',
        rank: '',
        queueType:'',
        wins:0,
        losses:0,
      },
      matchesManufactured : [],
      matches: [],
      recordAverage : 0,
      leagueDetailData: {},
      endTime : 0,
      beginTime: 0,
      tierSrc: '',
    };
  },
  computed: {
    getSummoner() {
      return this.$store.state.common.sommoner;
    },
  },
  created() {
    this.getLeague();
  },
  mounted() {
  },
  methods: {
    async getLeague() {
      try {
        const league = (await this.$axios.$get(`/api/league/v4/entries/by-summoner/${this.$store.state.common.sommoner.id}`)).filter(item => item.queueType === 'RANKED_SOLO_5x5' )[0];
        const leagueDetail = await this.$axios.$get(`/api/league/v4/leagues/${league.leagueId}`); 

        this.leagueData = league;
        this.leagueDetailData = leagueDetail;
        this.recordAverage =  ((league.wins / (league.wins + league.losses))*100).toFixed(1);

        let myRank = 0;
        switch (league.rank){ 
          case "I" : myRank = 1; break; 
          case "II" : myRank = 2; break; 
          case "III" : myRank = 3; break; 
          case "IV" : myRank = 4; break; 
          case "V" : myRank = 5; break; 
          default : myRank = "I"; 
        }
        this.tierSrc = `https://opgg-static.akamaized.net/images/medals/${league.tier.toLowerCase()}_${myRank}.png`
      } catch (error) {
        console.log(error);
      } finally {
        // setLoading(false);
      }
    },
  },
};
</script>
 
<style lang="scss">

</style>
