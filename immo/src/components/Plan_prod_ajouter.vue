<template>

<router-link to="/plan_prod">
        <div class="bubble1"><-retour</div>
</router-link>
  <div>
    <h1>Ajouter un plan de prod</h1>
    <form @submit.prevent="addPlanProd">
      <div>
        <label for="nom_action">Nom de l'affaire:</label>
        <input type="text" id="nom_affaire" v-model="nom_affaire" required>
      </div>
      <div>
        <label for="dimention">Dimention:</label>
        <input type="number" id="dimention" v-model="dimention" required>
      </div>
      <div>
        <label for="date">Date (YYYY-MM-DD):</label>
        <input type="date" id="date" v-model="date" required>
      </div>
      <button type="submit" class="btn-add">Ajouter</button>
    </form>
    <p v-if="success" class="success-message">Plan Prod ajoutée avec succès!</p>
    <p v-if="error" class="error-message">Erreur lors de l'ajout du plan de prod: {{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nom_affaire: 'AA',
      dimention: '1',
      date: '2024-11-08',
      success: false,
      error: false,
      errorMessage: ''
    };
  },
  methods: {
    async addPlanProd() {
      try {
        const response = await axios.post('/api/plan_prod/insert', {
          nom_affaire: this.nom_affaire,
          dimention: this.dimention,
          date: this.date
        });
        this.success = true;
        this.error = false;
        this.nom_affaire = '';
        this.dimention = '';
        this.date = '';
      } catch (error) {
        console.error('Erreur lors de l\'ajout d\'un plna de prod:', error);
        this.success = false;
        this.error = true;
        this.errorMessage = error.response ? error.response.data.error : 'Erreur inconnue';
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
form div {
  margin-bottom: 10px;
}
button.btn-add {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
button.btn-add:hover {
  background-color: #218838;
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
  top: 330px;
  right: 10px; /* Distance du côté droit */
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
