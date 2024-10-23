<template>
 <div id="app">

<!-- 1 div avec le graph ligne -->
    <div id="chartcomponent">
        <h1>apexchart2</h1>
        <ChartComponent />
    </div>

<!-- 2 div avec le graphique donut -->
    <div id="chartdonuts">
      <ChartdonutsComponent />
    </div>

<!-- 3 div avec le graphique barre colones -->
    <div id="chartbar">
      <ChartbarComponent />
    </div>


 </div>
</template>

<script>
import ChartComponent from './components/ChartComponent.vue';
import ChartdonutsComponent from './components/ChartdonutsComponent.vue';
import ChartbarComponent from './components/ChartbarComponent.vue';

export default {
  name: 'App',
  components: {
    ChartComponent,
    ChartdonutsComponent,
    ChartbarComponent,
  }
};
</script>

<style>
/* Add global styles here */
</style>
