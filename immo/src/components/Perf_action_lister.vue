<template>
<router-link to="/perf-action/ajouter">
        <div class="bubble1">+</div>
</router-link>

<router-link to="/perf-action/graph">
        <div class="bubble2">
<img src="../assets/line-chart-line-graph.svg" alt="Plus" />
	</div>
</router-link>

  <div>
    <h1>Liste des performances des actions</h1>
    <table v-if="performances.length > 0" class="performance-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom de l'action</th>
          <th>Prix ($)</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="performance in performances" :key="performance.id">
          <td>{{ performance.id }}</td>
          <td>{{ performance.nom_action }}</td>
          <td>{{ performance.prix_$ }}</td>
          <td>{{ performance.date }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="error" class="error-message">Erreur lors de la récupération des performances des actions.</p>
    <p v-if="performances.length === 0 && !error" class="no-data-message">Aucune performance d'action trouvée.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      performances: [],
      error: false
    };
  },
  methods: {
    async fetchPerformances() {
      try {
        const response = await axios.get('/api/performance_action/select');
        this.performances = response.data;
        this.error = false;
      } catch (error) {
        console.error('Erreur lors de la récupération des performances des actions:', error);
        this.performances = [];
        this.error = true;
      }
    }
  },
  created() {
    this.fetchPerformances();
  }
};
</script>

<style scoped>
.performance-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
.performance-table th, .performance-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
.performance-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}
.performance-table tr:nth-child(even) {
  background-color: #f9f9f9;
}
.performance-table tr:hover {
  background-color: #f1f1f1;
}
.error-message {
  color: red;
  font-weight: bold;
}
.no-data-message {
  color: #555;
  font-style: italic;
}


/*---------------------------bubble1 ajouter------------*/
.bubble1 {
  position: fixed;
  top: 570px;
  left: 30px; /* Distance du côté droit */
  width: 70px; /* Largeur de la bulle */
  height: 70px; /* Hauteur de la bulle */
  background-color: #53c660;
  color: white; /* Couleur du texte ou icône */
  font-size: xx-large;
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


/*---------------------------bubble2 graph------------*/
.bubble2 {
  position: fixed;
  top: 470px;
  left: 25px; /* Distance du côté droit */
  width: 80px; /* Largeur de la bulle */
  height: 80px; /* Hauteur de la bulle */
  background-color: #FFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Effet d'ombre */
/*  cursor: pointer;*/
  z-index: 999;
}

.bubble2:hover {
  background-color: #0056b3; /* Couleur plus sombre au survol */
}

.bubble2 img {
  width: 50px; /* Ajustez la taille de l'image */
  height: 50px;
}

</style>
