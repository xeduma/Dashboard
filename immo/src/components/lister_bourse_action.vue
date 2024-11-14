<template>
  <div>
    <h1>Liste des actions de bourse</h1>
    <div id="result">
      <table v-if="actions.length > 0" class="action-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Type</th>
            <th>Prix actuel</th>
            <th>Dividendes</th>
            <th>Nombre de dividendes en 1 an</th>
            <th>Mois de versement des dividendes</th>
            <th>Dividendes annuels</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="action in actions" :key="action.id">
            <td>{{ action.nom }}</td>
            <td>{{ action.type }}</td>
            <td>{{ action.prix_actuel }}</td>
            <td>{{ action.dividendes }}</td>
            <td>{{ action.dividendes_nb_1an }}</td>
            <td>{{ action.dividendes_mois_versement }}</td>
            <td>{{ action.dividendes_annual }}</td>
          </tr>
        </tbody>
      </table>
      <p v-if="error" class="error-message">Erreur lors de la récupération des actions de bourse.</p>
      <p v-if="actions.length === 0 && !error" class="no-data-message">Aucune action de bourse trouvée.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      actions: [],
      error: false
    };
  },
  created() {
    this.fetchBourseActions();
  },
  methods: {
    async fetchBourseActions() {
      try {
        const response = await axios.get('/api/bourse_action/select');
        this.actions = response.data;
        this.error = false;
      } catch (error) {
        console.error('Erreur lors de la récupération des actions de bourse:', error);
        this.actions = [];
        this.error = true;
      }
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}
#result {
  margin-top: 20px;
}
.action-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
.action-table th, .action-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
.action-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}
.action-table tr:nth-child(even) {
  background-color: #f9f9f9;
}
.action-table tr:hover {
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
</style>
