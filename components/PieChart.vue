<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
  },
  data(){
    return {
      options: {
        responsive: true,
        cutoutPercentage: 80,
        /**
         * Default legends are ugly and impossible to style.
         * See examples in charts.html to add your own legends
         *  */
        legend: {
          display: false,
        },
      },
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style>

</style>