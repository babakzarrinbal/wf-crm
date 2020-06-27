
 
 window.machineId = window.localStorage.getItem('machineId');
 if(!window.machineId){
   window.machineId = require('uniqid')();
   if(process.env.IS_ELECTRON){
    let {machineIdSync} =require('node-machine-id');
    window.machineId = machineIdSync();
  }
  window.localStorage.setItem('machineId',window.machineId)
 }
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

// toastr
window.toastr = require("toastr");
window.toastr.options.preventDuplicates = true;
window.toastr.options.rtl=true;
import "toastr/build/toastr.min.css";

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
    schemas:{
      services:{
        customer: {
          lable: "اطلاعات مشتری",
          entity: "customers",
          type: "relation",
        },
        serviceDate: { lable: "تاریخ سرویس", type: "date" },
        type: { lable: "نوع سرویس", type: "text" },
        description: { lable: "شرح خدمات", type: "textarea" },
        amount: { lable: " مبلغ دریافتی", type: "number" },
        personel: { lable: "سرویسکار", type: "text" },
      },
      customers:{
        nextServiceDate: { lable: "تاریخ سرویس بعدی", type: "date" },
        name: { lable: "نام ", type: "text" },
        phone: { lable: "شماره تلفن", type: "text" },
        address: { lable: "آدرس", type: "textarea" },
        referer: { lable: "معرف", type: "text" },
        installationDate: { lable: "تاریخ نصب", type: "date" },
        installer: { lable: "نام نصاب", type: "text" },
        deviceType: { lable: "نوع دستگاه", type: "text" },
        deviceDesc: { lable: "توضیحات دستگاه", type: "textarea" },
        active:{lable:'مشتری فعال',type:'checkbox'},
        services: {
          lable: "اطلاعات سرویسها",
          type: "relation",
          entity: "services",
        },
      }
    },
    entities: {
      services: {
        schema: {
          customer: {
            lable: "اطلاعات مشتری",
            entity: "customers",
            type: "relation",
          },
          serviceDate: { lable: "تاریخ سرویس", type: "date" },
          type: { lable: "نوع سرویس", type: "text" },
          description: { lable: "شرح خدمات", type: "textarea" },
          amount: { lable: " مبلغ دریافتی", type: "number" },
          personel: { lable: "سرویسکار", type: "text" },
        },
      },
      customers: {
        schema: {
          nextServiceDate: { lable: "تاریخ سرویس بعدی", type: "date" },
          name: { lable: "نام ", type: "text" },
          phone: { lable: "شماره تلفن", type: "text" },
          address: { lable: "آدرس", type: "textarea" },
          referer: { lable: "معرف", type: "text" },
          installationDate: { lable: "تاریخ نصب", type: "date" },
          installer: { lable: "نام نصاب", type: "text" },
          deviceType: { lable: "نوع دستگاه", type: "text" },
          deviceDesc: { lable: "توضیحات دستگاه", type: "textarea" },
          
          services: {
            lable: "اطلاعات سرویسها",
            type: "relation",
            entity: "services",
          },
        }
      },
    },
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
