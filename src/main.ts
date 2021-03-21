import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

Vue.directive("transparent", {
    inserted: function(element) {
        const children = Array.from(element.children);
        const parent = element.parentElement;
        if (parent) {
            children.forEach(item => {
                parent.appendChild(item);
            });
            parent.removeChild(element);
        }
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
