import Vue from "vue";
import App from "./App.vue";
import BusinessHours from "vue-business-hours";

Vue.use(BusinessHours);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
