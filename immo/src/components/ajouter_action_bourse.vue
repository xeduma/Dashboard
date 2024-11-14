<template>
  <div>
    <h1>Ajouter une action de bourse</h1>
    <form @submit.prevent="addActionBourse">
      <div>
        <label for="nom">Nom:</label>
        <input type="text" id="nom" v-model="action.nom" required>
      </div>
      <div>
        <label for="type">Type:</label>
        <input type="text" id="type" v-model="action.type" required>
      </div>
      <div>
        <label for="prix_actuel">Prix actuel:</label>
        <input type="number" id="prix_actuel" v-model="action.prix_actuel" required>
      </div>
      <div>
        <label for="dividendes">Dividendes:</label>
        <input type="number" id="dividendes" v-model="action.dividendes" required>
      </div>
      <div>
        <label for="dividendes_nb_1an">Nombre de dividendes en 1 an:</label>
        <input type="number" id="dividendes_nb_1an" v-model="action.dividendes_nb_1an" required>
      </div>
      <div>
        <label for="dividendes_mois_versement">Mois de versement des dividendes:</label>
        <input type="text" id="dividendes_mois_versement" v-model="action.dividendes_mois_versement" required>
      </div>
      <div>
        <label for="dividendes_annual">Dividendes annuels:</label>
        <input type="number" id="dividendes_annual" v-model="action.dividendes_annual" required>
      </div>
      <button type="submit">Ajouter</button>
    </form>
    <p v-if="success">Action de bourse ajoutée avec succès!</p>
    <p v-if="error">Erreur lors de l'ajout de l'action de bourse.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      action: {
        nom: 'A',
        type: 'A',
        prix_actuel: 0,
        dividendes: 0,
        dividendes_nb_1an: 0,
        dividendes_mois_versement: 'A',
        dividendes_annual: 0
      },
      success: false,
      error: false
    };
  },
  methods: {
    addActionBourse() {
      axios.post('/api/bourse_action/insert', this.action)
        .then(response => {
          this.success = true;
          this.error = false;
          this.action = {
            nom: '',
            type: '',
            prix_actuel: 0,
            dividendes: 0,
            dividendes_nb_1an: 0,
            dividendes_mois_versement: '',
            dividendes_annual: 0
          }; // Réinitialiser le formulaire
        })
        .catch(error => {
          console.error('Erreur lors de l\'ajout de l\'action de bourse:', error);
          this.success = false;
          this.error = true;
        });
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}
form div {
  margin-bottom: 10px;
}
button {
  margin-top: 10px;
}
</style>
