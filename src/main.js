import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "nprogress/nprogress.css";

Vue.use(Buefy);
Vue.use(require("vue-moment"));
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
