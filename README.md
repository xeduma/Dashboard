# Dashboard

# Sommaire
1. installation du Framework vuejs
 - [install vue js](#installation-vuejs)
2. Création du projet
   - [création projet dashboard](#Création-projet-dashboard)
   - [installation librairies apexchart](#Installation-des-libraires-Apexchart)
3. Lancement du serveur
 - [Lancement du serveur](#lancement-du-server)
   


# installation vuejs
## node JS
node est déja installé

## vue JS
installation de vue3js
```bash
```


# Création projet dashboard
```bash
sudo npm create vue@latest
```
dashboard > N + Entrée >N >N >N >n .....
```bash
cd dashboard
npm install
npm run dev
```
# Configuration
```bash
npm install apexcharts vue3-apexcharts

```


autre option 
# Apexchart vue3 js

```bash
sudo vue create dashboard
cd vue_js/dashboard
```
app.vue est la page principale de lancement
dans le dossier components, ce sont les fichiers pour la creation de graphiques, appeler dans App.vue
```bash
cd src/
```
```bash
App.vue
├── assets
│   └── logo.png
├── components
│   ├── ChartbarComponent.vue
│   ├── ChartComponent.vue
│   ├── ChartdonutsComponent.vue
│   └── HelloWorld.vue
└── main.js
```

# Installation des libraires Apexchart

```bash
npm install apexcharts --save
npm install --save vue3-apexcharts
```


# lancement du server
```bash
screen -S apexchart
cd dashboard/
sudo npm run serve
ctrl + A + D
```

