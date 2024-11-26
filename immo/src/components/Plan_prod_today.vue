<template>
<router-link to="/plan_prod/today/print">
        <div class="bubble2">
		<img src="../assets/printer.svg" alt="Plus" />
        </div>
</router-link>


<router-link to="/plan_prod">
        <div class="bubble1"><-retour</div>
</router-link>


  <div class="action-list">
    <div v-for="plan in filteredPlans" :key="plan.id" class="action-card">
      <img src="../assets/folder.jpg" alt="Folder Icon" class="folder-icon" />
      <h2 class="action-title">{{ plan.nom_affaire }}</h2>
      <p class="action-price">{{ plan.dimention }} </p>
    </div>
  </div>


</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Plan_prod_imprimer',
  data() {
    return {
		      plans: [], // Liste des plans récupérés depuis l'API
		      today: new Date().toISOString().split("T")[0], // Date du jour
    };
  },
  computed: {
    filteredPlans() {
      return this.plans.filter(plan => plan.date === this.today);
    },
  },
  created() {
    axios
      .get("/api/plan_prod/select")
      .then(response => {
        this.plans = response.data;
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des plans :", error);
      });
  },



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
  border-radius: 15px;
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

