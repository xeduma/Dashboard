<template>
	<div class="menu-grid">
    <router-link to="/dessin-pyramide/1" class="menu-item">Dessin 1</router-link>
    <router-link to="/dessin-pyramide/2" class="menu-item">Dessin 2</router-link>
    <router-link to="/dessin-pyramide/3" class="menu-item">Dessin 3</router-link>
    <router-link to="/dessin-pyramide/4" class="menu-item">Dessin 4</router-link>
	</div>

  <div class="pyramid-container">
    <div class="pyramid-background"></div>
    <div class="pyramid-level">
      <div class="autres">Autres</div>
    </div>
    <div class="pyramid-level">
      <div class="crypto">Crypto</div>
    </div>
    <div class="pyramid-level level-2">
      <div class="bourse">Bourse</div>
      <div class="immo">Immo</div>
    </div>
    <div class="pyramid-level level-1">
      <div class="livrets">Matela sécu - Livrets</div>
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
  margin: 0 auto;
  margin-top: 100px;
}

.pyramid-background {
  position: absolute;
  top: -30%;
  left: 50%;
  transform: translateX(-50%);
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
  border-bottom: 350px solid #f0f0f0;
  z-index: -1;

}

.pyramid-level {
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 1;

}

.pyramid-item {
  background-color: #f9f9f9;
  border: 2px solid #dde;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
}

/*---------------------------------------custom item ici-----------------------*/
.livrets {
  background-color: #f9f9f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  color: #333;

        width: 300px;
	padding: 30px;
}
.bourse {
  background-color: #f9f9f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  color: #333;

        width: 100px;
	padding: 30px;

}

.immo {
  background-color: #f9f9f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  color: #333;

        width: 100px;
	padding: 5px;

}
.crypto {
  background-color: #f9f9f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  color: #333;

        width: 100px;
	padding: 20px;

}

.autres {
  background-color: #f9f9f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  color: #333;

        width: 70px;
	padding: 5px;

}

</style>
