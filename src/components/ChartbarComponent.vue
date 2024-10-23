<template>
  <div>
    <h3>Graphique à Barres</h3>
    <apexchart type="bar" :options="chartOptions" :series="chartSeries"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "ChartBarComponent",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "bar",
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
          text: "Données Barres",
          align: "center",
        },
      },
      chartSeries: [
        {
          name: "Series 1",
          data: [30, 40, 45, 50],
        },
      ],
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
