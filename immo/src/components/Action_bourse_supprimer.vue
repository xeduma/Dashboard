<template>
<router-link to="/action">
        <div class="bubble1"><-retour</div>
</router-link>

  <div>
    <h1>Supprimer une action de bourse</h1>
    <form @submit.prevent="deleteActionBourse">
      <div>
        <label for="nom">Nom de l'action:</label>
        <select nom="nom" v-model="selectedActionNom" required>
          <option v-for="action in actions" :key="action.nom" :value="action.nom">{{ action.nom }}</option>
        </select>
      </div>
      <button type="submit" class="btn-delete">Supprimer</button>
    </form>
    <p v-if="success" class="success-message">Action de bourse supprimée avec succès!</p>
    <p v-if="errorHtml" class="error-message">Erreur HTML: {{ errorHtmlMessage }}</p>
    <p v-if="errorApiSelect" class="error-message">Erreur API lors de la sélection de la liste: {{ errorApiSelectMessage }}</p>
    <p v-if="errorApiDelete" class="error-message">Erreur API lors de la suppression: {{ errorApiDeleteMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedActionNom: '',
      actions: [],
      success: false,
      errorHtml: false,
      errorHtmlMessage: '',
      errorApiSelect: false,
      errorApiSelectMessage: '',
      errorApiDelete: false,
      errorApiDeleteMessage: ''
    };
  },
  methods: {
    async fetchActions() {
      try {
        const response = await axios.get('/api/bourse_action/select');
        this.actions = response.data;
        this.errorApiSelect = false;
      } catch (error) {
        console.error('Erreur lors de la récupération des actions de bourse:', error);
        this.actions = [];
        this.errorApiSelect = true;
        this.errorApiSelectMessage = error.response ? error.response.data.error : 'Erreur inconnue';
      }
    },
    async deleteActionBourse() {
      try {
        await axios.delete(`/api/bourse_action/delete/${this.selectedActionNom}`);
        this.success = true;
        this.errorApiDelete = false;
        this.selectedActionNom = ''; // Réinitialiser le formulaire
        this.fetchActions(); // Mettre à jour la liste des actions
      } catch (error) {
        console.error('Erreur lors de la suppression de l\'action de bourse:', error);
        this.success = false;
        this.errorApiDelete = true;
        this.errorApiDeleteMessage = error.response ? error.response.data.error : 'Erreur inconnue';
      }
    }
  },
  created() {
    this.fetchActions();
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
button.btn-delete {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
button.btn-delete:hover {
  background-color: #ff1a1a;
}
.success-message {
  color: green;
  font-weight: bold;
}
.error-message {
  color: red;
  font-weight: bold;
}



/*---------------------------bubble1 retour------------*/
.bubble1 {
  position: fixed;
  top: 350px;
  right: 30px; /* Distance du côté droit */
  width: 70px; /* Largeur de la bulle */
  height: 70px; /* Hauteur de la bulle */
  background-color: #007bff;
  color: white; /* Couleur du texte ou icône */
  font-size: small;
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


</style>
