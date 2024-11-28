# Dashboard

# Sommaire
1. installation du Framework vuejs
    - [install vue js](#1-installation-vuejs)
3. Création du projet
    - [création projet dashboard](#2-Création-projet-dashboard)
    - [installation librairies apexchart](#Installation-des-libraires-Apexchart)
5. Lancement du serveur
    - [Lancement du serveur](#3-lancement-du-server)
   


# 1. installation vuejs
## node JS
node est déja installé

## vue JS
installation de vue3js
```bash
```


# 2. Création projet dashboard
```bash
sudo npm create vue@latest
```
dashboard > N + Entrée >N >N >N >n .....
```bash
cd dashboard
npm install
npm run dev
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


# 3. lancement du server
```bash
screen -S apexchart
cd dashboard/
sudo npm run serve
ctrl + A + D
```

