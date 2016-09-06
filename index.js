import Vue from "vue";
import App from "./components/App.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router=new VueRouter();
const Root=Vue.extend({});      //空的根组件

router.map({
    '/display':{
        component:App
    }
});

router.start(Root,"#app");