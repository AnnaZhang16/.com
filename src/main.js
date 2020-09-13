import Vue from "vue";
import App from "./App.vue";
import VueSimpleContextMenu from "vue-simple-context-menu";

Vue.config.productionTip = false;

new Vue({
    components: {
        "vue-simple-context-menu": VueSimpleContextMenu,
    },
    render: (h) => h(App),
}).$mount("#app");