<template>
<router-link to="/perf-action">
        <div class="bubble1"><-retour</div>
</router-link>


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



/*---------------------------bubble1 retour------------*/
.bubble1 {
  position: fixed;
  top: 350px;
  right: 30px; /* Distance du côté droit */
  width: 70px; /* Largeur de la bulle */
  height: 70px; /* Hauteur de la bulle */
  background-color: #007bff;
  color: white; /* Couleur du texte ou icône */
  font-size: small;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Effet d'ombre */
  cursor: pointer;
  z-index: 999;
}

.bubble1:hover {
  background-color: #0056b3; /* Couleur plus sombre au survol */
}


</style>
