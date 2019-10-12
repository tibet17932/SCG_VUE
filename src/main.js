import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from "./router/index";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

let ar = ["X", 5, 9, 15, 23, "Y", "Z"];
let xyz = [];
ar.find((element) => {
    let x = parseInt(element);
    isNaN(x) ? xyz.push(element) : '';
});
console.log(xyz)


Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')