<template>
  <div>
    <h1>Graphique en forme de donut</h1>
	<div class="graph-grid">
		<apexchart type="donut" :options="chartOptions" :series="series" class="grid-item"></apexchart>
		<apexchart type="donut" :options="chartOptions" :series="series" class="grid-item"></apexchart>
		<apexchart type="donut" :options="chartOptions" :series="series" class="grid-item"></apexchart>
	</div>
	 <div class="graph-grid2">
                <apexchart type="donut" :options="chartOptions" :series="series" class="grid-item2"></apexchart>
                <apexchart type="donut" :options="chartOptions" :series="series" class="grid-item2"></apexchart>
        </div>
<apexchart type="donut" :options="chartOptions" :series="series" class="grid-item"></apexchart>

  </div>
</template>

<script>
import { defineComponent } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

export default defineComponent({
  name: 'DonutChart',
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'donut'
        },
        labels: ['cc', 'aa', 'ZZ'],
        legend: {
          position: 'bottom'
        },
        responsive: [{
          breakpoint: 100,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: 'bottom'
            }

          }
        }]
      },
      series: [25, 30, 45] // 25% pour cc, 30% pour aa, et le reste pour ZZ
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
  grid-template-columns: 130px 130px 130px;
}


.graph-grid2 {
  display: grid;
  grid-template-columns: 190px 190px;
}



</style>
