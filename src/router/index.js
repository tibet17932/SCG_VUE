import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld"
import Layout from "../components/template/Layout"
import Cv from "../components/Cv"

Vue.use(Router);

const router = new Router({
    base: process.env.NODE_ENV === "production" ? "/" : "/",
    mode: "history",
    routes: [{
        path: "/",
        name: "SCG",
        component: Layout
    }, {
        path: "/SCG",
        name: "SCG",
        component: Layout,
        children: [{
            path: "HelloWorld",
            name: "HelloWorld",
            component: HelloWorld,
        }, {
            path: "Cv",
            name: "Cv",
            component: Cv,
        }]
    }]


});

export default router;