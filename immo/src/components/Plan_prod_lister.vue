<template>
<router-link to="/plan_prod/today">
        <div class="bubble4">
                <img src="../assets/today.png" alt="Plus" />
        </div>
</router-link>

<router-link to="/plan_prod/today/print">
        <div class="bubble3">
                <img src="../assets/printer.svg" alt="Plus" />
        </div>
</router-link>

<router-link to="/plan_prod/pdf">
        <div class="bubble2">
                <img src="../assets/pdf.jpg" alt="Plus" />
        </div>
</router-link>

<router-link to="/plan_prod/ajouter">
        <div class="bubble1">+</div>
</router-link>


  <div>
    <h1>Liste des plan de prod</h1>
    <div id="result">
      <table v-if="actions.length > 0" class="action-table">
        <thead>
          <tr>
            <th>Nom Affaire</th>
            <th>dimention</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="action in actions" :key="action.id">
            <td>{{ action.nom_affaire }}</td>
            <td>{{ action.dimention }}</td>
            <td>{{ action.date }}</td>
          </tr>
        </tbody>
      </table>
      <p v-if="error" class="error-message">Erreur lors de la récupération des plan de prod.</p>
      <p v-if="actions.length === 0 && !error" class="no-data-message">Aucun plan prod trouvée.</p>
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
    this.fetchPlanProd();
  },
  methods: {
    async fetchPlanProd() {
      try {
        const response = await axios.get('/api/plan_prod/select');
        this.actions = response.data;
        this.error = false;
      } catch (error) {
        console.error('Erreur lors de la récupération des plan de prod:', error);
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


/*---------------------------bubble2 PDF------------*/
.bubble2 {
  position: fixed;
  top: 470px;
  left: 25px; /* Distance du côté droit */
  width: 60px; /* Largeur de la bulle */
  height: 60px; /* Hauteur de la bulle */
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
  width: 44px; /* Ajustez la taille de l'image */
  height: 44px;
  border-radius: 50%;

}

/*---------------------------bubble3 print-----------*/
.bubble3 {
  position: fixed;
  top: 370px;
  left: 25px; /* Distance du côté droit */
  width: 60px; /* Largeur de la bulle */
  height: 60px; /* Hauteur de la bulle */
  background-color: #FFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Effet d'ombre */
/*  cursor: pointer;*/
  z-index: 999;
}

.bubble3:hover {
  background-color: #0056b3; /* Couleur plus sombre au survol */
}

.bubble3 img {
  width: 40px; /* Ajustez la taille de l'image */
  height: 40px;
  border-radius: 40%;

}

/*---------------------------bubble4 today------------*/
.bubble4 {
  position: fixed;
  top: 270px;
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

.bubble4:hover {
  background-color: #0056b3; /* Couleur plus sombre au survol */
}

.bubble4 img {
  width: 70px; /* Ajustez la taille de l'image */
  height: 70px;
  border-radius: 50%;

}

</style>
