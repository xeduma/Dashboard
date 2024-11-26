<template>
<p>impression ne fonctionne pas encore</p>
<p>.... ne cours de recherche</p>

<router-link to="/plan_prod">
        <div class="bubble1"><-retour</div>
</router-link>
</template>

<script>
</script>

<style scoped>
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
