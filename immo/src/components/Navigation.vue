<template>
  <div class="menu-grid">
    <router-link to="/" class="menu-item">Accueil</router-link>
    <router-link to="/bdd-list-table" class="menu-item">list BDD</router-link>
    <router-link to="/dessin-pyramide" class="menu-item">Pyramide</router-link>

    <router-link to="/listertableau" class="menu-item">List Action</router-link>
    <router-link to="/ajouter" class="menu-item">Action Ajouter</router-link>
    <router-link to="/supprimer" class="menu-item">Action Supprimer</router-link>

    <router-link to="/listerperfaction" class="menu-item">PerfAction Lister</router-link>
    <router-link to="/ajouterperfaction" class="menu-item">PerfAction Ajouter</router-link>
    <router-link to="/graphperfaction" class="menu-item">PerfActionGraph</router-link>

    <router-link to="/bar" class="menu-item">Bar</router-link>
    <router-link to="/ligne" class="menu-item">Ligne</router-link>
    <router-link to="/donuts" class="menu-item">Donuts</router-link>

    <router-link to="/realtime" class="menu-item">Realtime</router-link>
    <router-link to="/cards" class="menu-item">Cards</router-link>
    <router-link to="/cards2" class="menu-item">Cards2</router-link>

    <router-link to="/Bitcoin" class="menu-item">Bitcoin</router-link>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navigation'
});
</script>

<style scoped>
.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}

.menu-item {
  background-color: #f0f8ff; /* Couleur de fond claire */
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 5px;
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
