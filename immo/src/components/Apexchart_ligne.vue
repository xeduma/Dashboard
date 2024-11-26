<template>
  <div>
    <h1>Graphique du cours du Bitcoin</h1>
	<div class="graph-grid">
		<apexchart width="250" type="line" :options="chartOptions" :series="series" class="grid-item"></apexchart>
		<apexchart width="250" type="line" :options="chartOptions" :series="series" class="grid-item"></apexchart>
	</div>
		<apexchart width="350" type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

export default defineComponent({
  name: 'BitcoinGraph',
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'bitcoin-chart',
          type: 'line',
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yaxis: {
          title: {
            text: 'Prix (USD)'
          }
        }
      },
      series: [
        {
          name: 'Bitcoin',
          data: [30000, 35000, 32000, 38000, 40000, 42000, 45000, 48000, 50000, 52000, 55000, 60000]
        }
      ]

    };
  }
});
</script>

<style scoped>
h1 {
  text-align: center;
}

.graph-grid {
display: grid;
grid-template-columns: auto auto;

}

.grid-item {
  border: 1px solid red;
border-radius: 40px;

}

</style>
