<template>
  <div class="action-list">
    <div v-for="action in actions" :key="action.id" class="action-card">
      <img src="../assets/folder.jpg" alt="Folder Icon" class="folder-icon" />
      <h2 class="action-title">{{ action.nom }}</h2>
      <p class="action-price">{{ action.prix_actuel }} €</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Cards',
  data() {
    return {
      actions: []
    };
  },
  methods: {
    async fetchActions() {
      try {
        const response = await axios.get('/api/bourse_action/select');
        this.actions = response.data.slice(0, 10); // Prendre les 3 premières actions
      } catch (error) {
        console.error('Erreur lors de la récupération des actions:', error);
      }
    }
  },
  mounted() {
    this.fetchActions();
  }
});
</script>

<style scoped>
.action-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.action-card {
  display: grid;
  grid-template-columns: 90px 50% 20%;

/*  align-items: center;*/
  padding: 7px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: #f0f8ff; /* Couleur de fond plus claire */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  width: 90%;
  margin: 5px;
}

.action-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.folder-icon {
  width: 60px;
  height: 60px;
  
}

.action-title {
  font-size: 1.4em; /* Titre en gros */
  color: #333;
}

.action-price {
  font-size: 1,2em;
  color: #007bff; /* Poids en petit bleu */
  text-align: right;

}
</style>

