<template>
  <div>
    <h1>Liste des tables de la base de données</h1>
    <table v-if="tables.length > 0" class="tables-table">
      <thead>
        <tr>
          <th>Nom de la table</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="table in tables" :key="table.name">
          <td>{{ table.name }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="error" class="error-message">Erreur lors de la récupération des tables de la base de données.</p>
    <p v-if="tables.length === 0 && !error" class="no-data-message">Aucune table trouvée.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tables: [],
      error: false
    };
  },
  methods: {
    async fetchTables() {
      try {
        const response = await axios.get('/api/bdd-lister-table');
        this.tables = response.data;
        this.error = false;
      } catch (error) {
        console.error('Erreur lors de la récupération des tables de la base de données:', error);
        this.tables = [];
        this.error = true;
      }
    }
  },
  created() {
    this.fetchTables();
  }
};
</script>

<style scoped>
.tables-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
.tables-table th, .tables-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
.tables-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}
.tables-table tr:nth-child(even) {
  background-color: #f9f9f9;
}
.tables-table tr:hover {
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
