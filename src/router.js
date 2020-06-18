import Vue from "vue";
import Router from "vue-router";
import dashboard from "./views/dashboard.vue";
import customersList from "./views/customersList"
import servicesList from "./views/servicesList"
import customersEdit from "./views/customersEdit.vue";
import entityEdit from "./views/entityEdit.vue";
Vue.use(Router);
var router = new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: dashboard,
      meta: { keepAlive: true },
    },
    {
      path: "/entity/customers",
      name: "customersList",
      component: customersList,
      meta: { keepAlive: true },
    },
    {
      path: "/entity/services",
      name: "servicesList",
      component: servicesList,
      meta: { keepAlive: true },
    },
    {
      path: "/entity/customers/:id",
      name: "customersEdit",
      component: customersEdit,
      meta: { keepAlive: false },
    },
    {
      path: "/entity/:entity/:id",
      name: "entityEdit",
      component: entityEdit,
      meta: { keepAlive: false },
    },
  ],
});
export default router;
