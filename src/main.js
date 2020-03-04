import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import { install as installVuexORM } from "@vuex-orm/core";
import database from "./database";

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  plugins: [installVuexORM(database)]
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
