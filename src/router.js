import Vue from "vue";
import Router from "vue-router";
import dashboard from "./views/dashboard.vue";
import entityList from "./views/entityList.vue";
import entityEdit from "./views/entityEdit.vue";
Vue.use(Router);
var router = new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: dashboard,
      // meta: { keepAlive: true },
    },
    {
      path: "/:entity",
      name: "entityList",
      component: entityList,
      // meta: { keepAlive: true },
    },
    {
      path: "/:entity/:id",
      name: "entityEdit",
      component: entityEdit,
      meta: { keepAlive: false },
    },
  ],
});
export default router;
