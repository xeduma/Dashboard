<template>
  <div class="graph1">
    <h1>Graphique des performances des actions sur 5 ans</h1>
    <apexchart type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import axios from 'axios';
import VueApexCharts from 'vue3-apexcharts';

export default {
  name: 'PerformanceGraph',
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      performances: [],
      error: false,
      chartOptions: {
        chart: {
          id: 'performance-chart'
        },
        xaxis: {
          categories: []
        },
        yaxis: {
          title: {
            text: 'Prix ($)'
          }
        }
      },
      series: [
        {
          name: 'Prix ($)',
          data: []
        }
      ]
    };
  },
  methods: {
    async fetchPerformances() {
      try {
        const response = await axios.get('/api/performance_action/select');
        this.performances = response.data;
        this.error = false;
        this.updateChartData();
      } catch (error) {
        console.error('Erreur lors de la récupération des performances des actions:', error);
        this.performances = [];
        this.error = true;
      }
    },
    updateChartData() {
      this.chartOptions.xaxis.categories = this.performances.map(performance => performance.date);
      this.series[0].data = this.performances.map(performance => performance.prix_$);
    }
  },
  created() {
    this.fetchPerformances();
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}

.graph1 {
  width: 80%;
 border: solid 2px red;
}

</style>
