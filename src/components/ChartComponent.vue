<template>
  <div>
    <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [
        {
          name: "Sales",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Sales Trends by Monthcccccc',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // alternating row colors
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
      }
    };
  }
};
</script>

<style scoped>

/* Add component-specific styles here */
#chart {
  max-width: 400px;
  margin: 35px auto;
}


#app {
  max-width: 100%;
  padding: 20px;
}

@media (max-width: 768px) {
  #app {
    padding: 10px;
  }
}

/* Correct */
.element {
font-weight: bold;
opacity: 0.8;
}

/* Add any specific styling for your chart component */
</style>
