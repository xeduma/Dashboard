import { createRouter, createWebHistory } from 'vue-router';
import BDDListTable from './components/bdd-lister-tables.vue';

import Dessinpyramide from './components/Dessin-pyramide-patrimoine.vue';
	import Dessinpyramide1 from './components/Dessin-pyramide-patrimoine1.vue';
	import Dessinpyramide2 from './components/Dessin-pyramide-patrimoine2.vue';
	import Dessinpyramide3 from './components/Dessin-pyramide-patrimoine3.vue';
	import Dessinpyramide4 from './components/Dessin-pyramide-patrimoine4.vue';


import AjouterActionBourse from './components/ajouter_action_bourse.vue';
import SupprimerActionBourse from './components/supprimer_action_bourse.vue';
import ListerTableauBourseAction from './components/lister_bourse_action.vue';

import ListerPerfAction from './components/ListPerformanceAction.vue';
import AjouterPerfAction from './components/AjouterPerformanceAction.vue';
import GraphPerfAction from './components/PerformanceGraph.vue';

import Bar from './components/Bar_Apexchart.vue';
import Ligne from './components/Ligne_Apexchart.vue';
import Donuts from './components/Donuts_Apexchart.vue';

import Realtime from './components/Realtime_Apexchart.vue';
import Bitcoin from './components/Bitcoin.vue';
import Cards from './components/Cards.vue';
import Cards2 from './components/Cards2.vue';


const routes = [
  { path: '/dessin-pyramide', component: Dessinpyramide },
	  { path: '/dessin-pyramide/1', component: Dessinpyramide1 },
	  { path: '/dessin-pyramide/2', component: Dessinpyramide2 },
	  { path: '/dessin-pyramide/3', component: Dessinpyramide3 },
	  { path: '/dessin-pyramide/4', component: Dessinpyramide4 },

  { path: '/bdd-list-table', component: BDDListTable },

  { path: '/listertableau', component: ListerTableauBourseAction },
  { path: '/ajouter', component: AjouterActionBourse },
  { path: '/supprimer', component: SupprimerActionBourse },

  { path: '/listerperfaction', component: ListerPerfAction },
  { path: '/ajouterperfaction', component: AjouterPerfAction },
  { path: '/graphperfaction', component: GraphPerfAction},

  { path: '/bar', component: Bar},
  { path: '/ligne', component: Ligne},
  { path: '/donuts', component: Donuts},

  { path: '/realtime', component: Realtime},
  { path: '/Bitcoin', component: Bitcoin},
  { path: '/cards', component: Cards},
  { path: '/cards2', component: Cards2},

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
