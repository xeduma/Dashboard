<template>
  <div class="action-list">
    <div v-for="action in actions" :key="action.id" class="action-card">
	<img src="../assets/action.png" alt="Folder Icon" class="folder-icon" />
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
        this.actions = response.data.slice(0, 7); // Prendre les 3 premières actions
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
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px;
}

/*--------------------------list en colonne pour item-------------*/
.action-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 15px;

  background-color: #2c8e43;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  width: 30%;
  margin: 15px;
}

.action-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}


/*--------------------------item-------------*/
.folder-icon {
  width: 50px;
  height: 50px;
  align-self: flex-start;
}
.action-title {
  font-size: 1.6em;
  color: #FFF;
}

.action-price {
  margin: 10px 0 0;
  font-size: 1,4em;
  color: #77E;
}
</style>
