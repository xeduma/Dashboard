import { createRouter, createWebHistory } from 'vue-router';
import BDDListTable from './components/bdd-lister-tables.vue';

import Dessinpyramide from './components/Dessin-pyramide-patrimoine.vue';
	import Dessinpyramide1 from './components/Dessin-pyramide-patrimoine1.vue';
	import Dessinpyramide2 from './components/Dessin-pyramide-patrimoine2.vue';
	import Dessinpyramide3 from './components/Dessin-pyramide-patrimoine3.vue';
	import Dessinpyramide4 from './components/Dessin-pyramide-patrimoine4.vue';

//------------------------action bourse--------------------
import AjouterActionBourse from './components/Action_bourse_ajouter.vue';
import SupprimerActionBourse from './components/Action_bourse_supprimer.vue';
import ListerTableauBourseAction from './components/Action_bourse_lister.vue';

//------------------------performance action-------------------
import ListerPerfAction from './components/Perf_action_lister.vue';
import AjouterPerfAction from './components/Perf_action_ajouter.vue';
import GraphPerfAction from './components/Perf_action_graphique.vue';

//------------------------apexhchart--------------------
import Bar from './components/Apexchart_bar2.vue';
import Ligne from './components/Apexchart_ligne.vue';
import Donuts from './components/Apexchart_donuts.vue';
import Realtime from './components/Apexchart_bar2.vue';

//------------------------card (connecter a l'api)--------------------
import Cards from './components/Cards.vue';
import Cards2 from './components/Cards2.vue';


//------------------------autre--------------------
import Bitcoin from './components/Bitcoin.vue';
import script1 from './components/script1.vue';


//------------------------Plan Prod--------------------
import Plan_prod_lister from './components/Plan_prod_lister.vue';
import Plan_prod_ajouter from './components/Plan_prod_ajouter.vue';
import Plan_prod_today from './components/Plan_prod_today.vue';
import Plan_prod_today_print from './components/Plan_prod_today_print.vue';
import Plan_prod_pdf from './components/Plan_prod_pdf.vue';


const routes = [
  { path: '/dessin-pyramide', component: Dessinpyramide },
	  { path: '/dessin-pyramide/1', component: Dessinpyramide1 },
	  { path: '/dessin-pyramide/2', component: Dessinpyramide2 },
	  { path: '/dessin-pyramide/3', component: Dessinpyramide3 },
	  { path: '/dessin-pyramide/4', component: Dessinpyramide4 },

  { path: '/bdd-list-table', component: BDDListTable },

  { path: '/action', component: ListerTableauBourseAction },
  { path: '/action/ajouter', component: AjouterActionBourse },
  { path: '/action/supprimer', component: SupprimerActionBourse },

  { path: '/perf-action', component: ListerPerfAction },
  { path: '/perf-action/ajouter', component: AjouterPerfAction },
  { path: '/perf-action/graph', component: GraphPerfAction},

  { path: '/bar', component: Bar},
  { path: '/ligne', component: Ligne},
  { path: '/donuts', component: Donuts},
  { path: '/realtime', component: Realtime},


  { path: '/cards', component: Cards},
  { path: '/cards2', component: Cards2},

  { path: '/Bitcoin', component: Bitcoin},
  { path: '/script1', component: script1},

  { path: '/plan_prod/', component: Plan_prod_lister},
  { path: '/plan_prod/ajouter', component: Plan_prod_ajouter},
  { path: '/plan_prod/today', component: Plan_prod_today},
  { path: '/plan_prod/today/print', component: Plan_prod_today_print},
  { path: '/plan_prod/pdf', component: Plan_prod_pdf},

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
