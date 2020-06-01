// my own proto functions
require("./utils/prototypes");
import dataCenter from "./utils/dataCenter";
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
Vue.mixin({
  data: function() {
    return {
      dataCenter,
    };
  },
});
// initializing app
Vue.config.productionTip = true;
new Vue({
  data: {
    entities: {
      services: {
        meta: {
          title: {
            new: "سرویس جدید",
            edit: "تغییر سرویس",
            list:"لیست سرویسها"
          },
          newbtn:{
            label:"ایجاد سرویس جدید"
          }
        },
        sections: {
          cutomer: {
            label: "مشتری",
            expanded: true,
            fields: {
              name: {
                label: "نام مشتری",
                type: "text",
                readonly: true,
                entity: "customers.name",
              },
              phone: {
                label: "شماره تلفن",
                type: "text",
                readonly: true,
                entity: "customers.phone",
              },
            },
          },
          __main: {
            label: "اطلاعات سرویس",
            expanded: true,
            fields: {
              date: {
                label: "تاریخ سرویس",
                type: "date",
              },
              type: {
                label: "نوع سرویس",
                type: "text",
              },
              description: {
                label: "شرح خدمات",
                type: "text",
              },
              amount: {
                label: " مبلغ دریافتی",
                type: "text",
              },
              personel: {
                label: "سرویسکار",
                type: "text",
              },
            },
          },
        },
      },
      customers: {
        meta: {
          title: {
            new: "مشتری جدید",
            edit: "تغییر اطلاعات مشتری",
            list:"لیست مشتریان"
          },
          newbtn:{
            label:"ایجاد مشتری جدید"
          }
        },
        sections: {
          __main: {
            label: "اطلاعات مشتری",
            expanded: true,
            fields: {
              nextservicedate:{
                label:"تاریخ سرویس بعدی",
                type:"date",
              },
              name: {
                label: "نام ",
                type: "text",
              },
              phone: {
                label: "شماره تلفن",
                type: "text",
              },
              address: {
                label: "آدرس",
                type: "textarea",
              },
              referer: {
                label: "معرف",
                type: "text",
              },
              installationDate: {
                label: "تاریخ نصب",
                type: "date",
              },
              installer: {
                label: "نام نصاب",
                type: "text",
              },
            },
          },
        },
      },
      devices: {
        meta: {
          title: {
            new: "دستگاه جدید",
            edit: "تغییر اطلاعات دستگاه",
            list:"لیست دستگاهها"
          },
          newbtn:{
            label:"ایجاد دستگاه جدید"
          }
        },
        sections: {
          __main: {
            label: "اطلاعات دستگاه",
            expanded: true,
            fields: {
              name: {
                label: "نام دستگاه ",
                type: "text",
              },
              type: {
                label: "نوع دستگاه",
                type: "text",
              },
              description: {
                label: "توضیحات",
                type: "textarea",
              },
            },
          },
        },
      },
    },
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
