<template>
  <div>
    <h3>Graphique Donut</h3>
    <apexchart type="donut" :options="chartOptions" :series="chartSeries"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "ChartdonutsComponent",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "donut",
        },
        labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        title: {
          text: "Données de la finance",
          align: "center",
        },
      },
      chartSeries: [44, 55, 41, 17], // Remplace les valeurs par les tiennes
    };
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
  color: #333;
}

.apexcharts-canvas {
  margin: 0 auto;
  max-width: 100%;
  width: 400px;
  height: auto;
}

@media (max-width: 480px) {
  .apexcharts-canvas {
    width: 300px;
  }
}
</style>
