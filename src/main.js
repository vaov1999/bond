import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

const vm = new Vue({
  data: {},
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

window.vm = vm;
