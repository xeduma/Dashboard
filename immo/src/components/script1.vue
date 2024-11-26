<template>
  <div class="container">
    <h1 class="title">Exécuter le Script</h1>
    
    <div class="content">
      <button class="btn" @click="runScript" :disabled="loading">
        <span v-if="loading" class="loading-text">Chargement...</span>
        <span v-else>Exécuter le Script</span>
      </button>

      <div v-if="loading" class="loader"></div>

      <div v-if="message" class="message success">
        <p><strong>Message:</strong> {{ message }}</p>
        <pre><strong>Sortie:</strong> {{ output }}</pre>
      </div>

      <div v-if="error" class="message error">
        <p><strong>Erreur:</strong> {{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: null,
      output: null,
      error: null,
      loading: false,
    };
  },
  methods: {
    async runScript() {
      this.loading = true;
      this.message = null;
      this.output = null;
      this.error = null;

      try {
        const response = await axios.get('http://127.0.0.1:3018/run-script');
        this.message = response.data.message;
        this.output = response.data.output;
      } catch (err) {
        this.error = err.response ? err.response.data.error : 'Erreur de connexion au serveur';
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* Container principal */
.container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

/* Titre */
.title {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

/* Contenu principal */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Bouton */
.btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
}

.btn:hover {
  background-color: #45a049;
}

.btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.loading-text {
  font-weight: bold;
}

/* Loader */
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4CAF50;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

/* Message */
.message {
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
}

.message.success {
  background-color: #e0f7e0;
  color: #388e3c;
}

.message.error {
  background-color: #f8d7da;
  color: #c82333;
}

pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}

/* Animation spinner */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
