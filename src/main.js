// Importar los estilos
import "./assets/main.css";

// Importar las dependencias de Vue
import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Importar los componentes y configuraciones de la aplicación
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import {
  faUserSecret,
  faPlaneDeparture,
  faPlaneArrival,
  faArrowRightArrowLeft,
  faPassport,
  faAt,
  faChild,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faUserSecret,
  faPlaneDeparture,
  faPlaneArrival,
  faPassport,
  faArrowRightArrowLeft,
  faUser,
  faChild,
  faAt
);

// Crear la aplicación de Vue
const app = createApp(App);

// Registrar los componentes y configuraciones en la aplicación
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(ElementPlus);
app.use(router);
app.mount("#app");

// Registrar los iconos de Element Plus
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
