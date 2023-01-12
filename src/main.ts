import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faStop, faPlay } from "@fortawesome/free-solid-svg-icons";
library.add(faPhone, faStop, faPlay);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
