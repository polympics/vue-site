import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import twemoji from "twemoji";

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

Vue.directive("emoji", {
    inserted: function(element) {
        element.innerHTML = twemoji.parse(element.innerHTML);
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
