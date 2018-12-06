import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import SvgIcon from "vue-svgicon";

import VueMq from "vue-mq";

export const eventBus = new Vue();

Vue.use(VueMq, {
  breakpoints: {
    mobile: 750,
    tablet: 1200,
    laptop: 1800,
    desktop: Infinity
  }
});

Vue.config.productionTip = false;
Vue.use(SvgIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
