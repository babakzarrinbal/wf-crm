// my own proto functions
require("./utils/prototypes");
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// custom styles
import "./scss/globalstyle.scss";
import "./scss/vue-transitions.scss";

// fast click to disable touch delay
var attachFastClick = require("fastclick");
attachFastClick.attach(document.body);

require("./serviceworker/registerServiceWorker");

// prepairing vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// adding mixin
import dataCenter from "./utils/dataCenter";
const eventBus = new Vue();
Vue.mixin({
  data: function() {
    return {
      dataCenter,
      emit: (...args) => eventBus.$emit(...args),
      on: (...args) => eventBus.$on(...args),
    };
  },
});
// initializing app
Vue.config.productionTip = true;
new Vue({
  data: {
    entities: {
      services: {
        schema: {
          customer: {
            lable: "اطلاعات مشتری",
            entity: "customers",
            type: "relation",
          },
          date: { lable: "تاریخ سرویس", type: "date" },
          type: { lable: "نوع سرویس", type: "text" },
          description: { lable: "شرح خدمات", type: "text" },
          amount: { lable: " مبلغ دریافتی", type: "text" },
          personel: { lable: "سرویسکار", type: "text" },
        },
        detailPage: {
          meta: {
            new: "سرویس جدید",
            edit: "تغییر اطلاعات سرویس",
            view: "مشاهده اطلاعات سرویس",
          },
          sections: [
            {
              entity: "customers",
              view: "single",
              fields: ["name"],
              pageQty: 10,
            },
            {
              entity: "services",
              fields: null,
            },
          ],
        },
        listPage: {
          meta: {
            header: "لیست سرویسها",
            newBtnLable: "ایجاد سرویس جدید",
            newBtnUrl: "entity/services/new",
            itemUrlPrefix: "entity/services/",
          },
          fields: [
            { path: "date", lable: "تاریخ سرویس" },
            { path: "customers.name", lable: "نام مشتری" },
            { path: "type", lable: "نوع سرویس" },
            { path: "description", lable: "شرح خدمات" },
            { path: "amount", lable: " مبلغ دریافتی" },
            { path: "personel", lable: "سرویسکار" },
          ],
        },
      },
      customers: {
        name: "customers",
        schema: {
          nextservicedate: { lable: "تاریخ سرویس بعدی", type: "date" },
          name: { lable: "نام ", type: "text" },
          phone: { lable: "شماره تلفن", type: "text" },
          address: { lable: "آدرس", type: "textarea" },
          referer: { lable: "معرف", type: "text" },
          installationDate: { lable: "تاریخ نصب", type: "date" },
          installer: { lable: "نام نصاب", type: "text" },
          services: {
            lable: "اطلاعات سرویسها",
            type: "relation",
            entity: "services",
          },
        },
        detailPage: {
          meta: {
            newLable: "مشتری جدید",
            editLable: "تغییر اطلاعات مشتری",
            viewLable: "مشاهده اطلاعات مشتری",
          },
          sections: [
            "customer",
            {
              lable: "اطلاعات سرویسها",
              entity: "services",
              view: "list",
              pageQty: 10,
              type: "relation",
            },
          ],
        },
        listPage: {
          meta: {
            header: "لیست مشتریان",
            newBtnLable: "ایجاد مشتری جدید",
            newBtnUrl: "/entity/customers/new",
            itemUrlPrefix: "/entity/customers/",
          },
          fields: [
            { path: "nextservicedate", lable: "تاریخ سرویس بعدی" },
            { path: "name", lable: "نام" },
            { path: "phone", lable: "شماره تلفن" },
            { path: "address", lable: "آدرس" },
            { path: "referer", lable: "معرف" },
            { path: "installationDate", lable: "تاریخ نصب" },
            { path: "installer", lable: "نام نصاب" },
          ],
        },
      },
      // devices: {
      //   meta: {
      //     title: {
      //       new: "دستگاه جدید",
      //       edit: "تغییر اطلاعات دستگاه",
      //       list: "لیست دستگاهها",
      //     },
      //     newbtn: {
      //       lable: "ایجاد دستگاه جدید",
      //     },
      //   },
      //   sections: {
      //     __main: {
      //       lable: "اطلاعات دستگاه",
      //       expanded: true,
      //       fields: {
      //         name: {
      //           lable: "نام دستگاه ",
      //           type: "text",
      //         },
      //         type: {
      //           lable: "نوع دستگاه",
      //           type: "text",
      //         },
      //         description: {
      //           lable: "توضیحات",
      //           type: "textarea",
      //         },
      //       },
      //     },
      //   },
      // },
    },
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
