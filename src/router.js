import Vue from "vue";
import Router from "vue-router";
import dashboard from "./views/dashboard.vue";
import customersList from "./views/customersList"
import InactiveCustomersList from "./views/InactiveCustomersList.vue"
import servicesList from "./views/servicesList"
import customerEdit from "./views/customerEdit.vue";
import serviceEdit from "./views/serviceEdit.vue";
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
      path: "/entity/inactivecustomers",
      name: "inactiveCustomersList",
      component: InactiveCustomersList,
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
      name: "customerEdit",
      component: customerEdit,
      meta: { keepAlive: false },
    },
    {
      path: "/entity/services/:id/:cid?",
      name: "serviceEdit",
      component: serviceEdit,
      meta: { keepAlive: false },
    },
  ],
});
export default router;
