import { createApp } from "vue";
import { createPinia } from "pinia";
import Recipes from "./Recipes.vue";
import "./styles/main.css";

const app = createApp(Recipes);
app.use(createPinia());
app.mount("#fritel-filterables-products-module");
