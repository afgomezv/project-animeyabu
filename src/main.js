import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Bootstrap Vue
import "@/plugins/bootstrapVue";
// sweetAlert
import "@/plugins/sweetAlert";

Vue.prototype.$http = axios;
axios.defaults.baseURL = " http://localhost:5000/user";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
