import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faStop, faPlay , faTasks, faDiagramProject} from "@fortawesome/free-solid-svg-icons";
import roteador from './roteador';
import { key, store } from './store';
library.add(faPhone, faStop, faPlay, faTasks, faDiagramProject);

createApp(App)
  .use(roteador)
  .use(store, key)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
