<template>
	<div class="menu-grid">
    <router-link to="/dessin-pyramide/1" class="menu-item">Dessin 1</router-link>
    <router-link to="/dessin-pyramide/2" class="menu-item">Dessin 2</router-link>
    <router-link to="/dessin-pyramide/3" class="menu-item">Dessin 3</router-link>
    <router-link to="/dessin-pyramide/4" class="menu-item">Dessin 4</router-link>
	</div>

  <div class="pyramid-container">
    <div class="pyramid-background"></div>
    <div class="pyramid-level level-4">
      <div class="pyramid-item">Autres</div>
    </div>
    <div class="pyramid-level level-3">
      <div class="pyramid-item">Crypto</div>
    </div>
    <div class="pyramid-level level-2">
      <div class="pyramid-item">Bourse</div>
      <div class="pyramid-item">Immo</div>
    </div>
    <div class="pyramid-level level-1">
      <div class="pyramid-item">Matela sécu - Livrets</div>
    </div>
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



/*---------------------------pyramide-------------*/

.pyramid-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.pyramid-background {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 300px solid transparent;
  border-right: 300px solid transparent;
  border-bottom: 450px solid #f0f0f0;
  z-index: -1;

}

.pyramid-level {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;

}

.pyramid-item {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
}

.level-1 {
  width: 100%;

}
.level-2 {
  width: 80%;
}

.level-3 {
  width: 60%;
}

.level-4 {
  width: 40%;
}
</style>
