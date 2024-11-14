<template>
  <div>
    <h1>Données brutes du Bitcoin</h1>
    <pre>{{ bitcoinData }}</pre>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Bitcoin',
  data() {
    return {
      bitcoinData: null
    };
  },
  methods: {
    async fetchBitcoinData() {
      try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
          params: {
            symbol: 'BTC',
            convert: 'USD'
          },
          headers: {
            'X-CMC_PRO_API_KEY': '0a430aac-a849-4f5c-895d-fd3a23cfce04' // Remplacez par votre clé API
          }
        });

        this.bitcoinData = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données du Bitcoin:', error);
      }
    }
  },
  mounted() {
    this.fetchBitcoinData();
  }
});
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}

pre {
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
  background-color: #f8f8f8;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
