import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./vuex";

import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import solid from "@fortawesome/fontawesome-free-solid";
import regular from "@fortawesome/fontawesome-free-regular";
import brands from "@fortawesome/fontawesome-free-brands";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import "@/styles/index.styl"; // global css
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/zh-CN";

fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)

Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.use(ElementUI, {
    locale
})

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
