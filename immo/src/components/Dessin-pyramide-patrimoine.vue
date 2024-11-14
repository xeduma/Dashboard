<template>
	<div class="menu-grid">
    <router-link to="/dessin-pyramide/1" class="menu-item">Dessin 1</router-link>
    <router-link to="/dessin-pyramide/2" class="menu-item">Dessin 2</router-link>
    <router-link to="/dessin-pyramide/3" class="menu-item">Dessin 3</router-link>
    <router-link to="/dessin-pyramide/4" class="menu-item">Dessin 4</router-link>
	</div>
</template>

<script>
export default {
  name: 'DessinPyramidePatrimoine'
};
</script>

<style scoped>
/*---------------------------menu-------------*/

.menu-grid {
  display: grid;
/*  grid-template-columns: repeat(4, 1fr);*/
  grid-template-columns: auto auto auto auto;
  gap: 10px;
/*  padding: 20px;*/
margin-left: -20px;
}

.menu-item {
  background-color: #f0f8ff; /* Couleur de fond claire */
  border: 1px solid #ddd;
  border-radius: 8px;
/*  padding: 20px;*/
  text-align: center;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;
}

.menu-item:hover {
  background-color: #007bff; /* Couleur de fond au survol */
  color: white;
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}


</style>
