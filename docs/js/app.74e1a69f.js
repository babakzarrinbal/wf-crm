(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],u=0,p=[];u<o.length;u++)s=o[u],r[s]&&p.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/wf-crm/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1449:function(e,t,n){"use strict";n.r(t);n("c5f6");var a=n("795b"),r=n.n(a),i=(n("96cf"),n("3b8d"));n("cadf"),n("551c"),n("f751"),n("097d");window.delay=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new r.a((function(e){return setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Number.prototype.round=function(e){var t=window.Math.pow(10,e);return window.Math.round(this*t)/t}},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a={},r=a,i=(n("ab8b"),n("87b8"),n("9180"),n("2b0e")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{widht:"100vw",height:"100%"},attrs:{id:"app"},on:{drop:function(t){return e.createNewJson(t.dataTransfer.files)}}},[n("Header",{attrs:{id:"header"},on:{openMenu:function(t){e.expandSettings=!e.expandSettings}}}),n("div",{staticClass:"body"},[n("transition",{attrs:{name:"width"}},[e.expandSettings?n("div",{staticClass:"sidebar"},[n("ul",{staticClass:"list"},e._l({"داشبرد":"/","مشتریان":"/customers","سرویسها":"/services","دستگاه‌ها":"/devices"},(function(t,a){return n("router-link",{key:t,staticClass:"pr-1 listItem",attrs:{to:t,tag:"li"},on:{click:function(e){e.stopPropagation()}}},[e._v(e._s(a))])})),1)]):e._e()]),n("div",{staticClass:"maincontent"},[n("keep-alive",[n("router-view",{staticClass:"mainrouteview",attrs:{id:"pagecontainer"}})],1)],1)],1)],1)},o=[],c=(n("96cf"),n("3b8d")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid bg-dark d-flex justify-content-start text-light"},[n("div",{staticClass:"clickable",on:{click:function(t){return e.$emit("openMenu")}}},[n("img",{attrs:{src:"img/icon/list-white.png",alt:""}})])])},d=[],u={},p=u,f=n("2877"),m=Object(f["a"])(p,l,d,!1,null,null,null),b=m.exports,y={data:function(){return{expandSettings:!0}},components:{Header:b},created:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),methods:{},watch:{},computed:{}},h=y,v=(n("d942"),Object(f["a"])(h,s,o,!1,null,"cdd77f3a",null)),w=v.exports,x=n("8c4f"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("H1",[e._v("صفحه داشبرد اولیه برای لیست اطلاعات مورد نیاز")])],1)},g=[],C={},k=C,j=Object(f["a"])(k,_,g,!1,null,null,null),O=j.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%",overflow:"auto"}},[n("div",{staticClass:"actions rounded p2 m-2 text-right"},[n("router-link",{staticClass:"btn btn-info",attrs:{to:"/"+e.$route.params.entity+"/new",tag:"div"}},[e._v(e._s(e.entity.meta.newbtn.label))])],1),n("table",{staticClass:"table table-striped",staticStyle:{direction:"rtl"}},[n("thead",[n("tr",e._l(e.entity.sections.__main.fields,(function(t,a){return n("th",{key:a,staticClass:"clickable",attrs:{scope:"col"}},[e._v(e._s(t.label))])})),0)]),n("tbody",e._l(e.data,(function(t,a){return n("router-link",{key:a,staticClass:"small clickable",attrs:{to:"/"+e.$route.params.entity+"/1",tag:"tr"}},e._l(e.entity.sections.__main.fields,(function(a,r){return n("td",{key:r},[e._v(e._s(t[r]))])})),0)})),1)])])},$=[],D=n("f499"),M=n.n(D),P={data:function(){return{testdata:{services:[{date:"1399/1/1",type:"نوع سرویس تستی",description:"توضیحات تستی",amount:1e6,personel:"نام سرویسکار تستی"},{date:"1399/1/1",type:"نوع سرویس تستی",description:"توضیحات تستی",amount:1e6,personel:"نام سرویسکار تستی"},{date:"1399/1/1",type:"نوع سرویس تستی",description:"توضیحات تستی",amount:1e6,personel:"نام سرویسکار تستی"},{date:"1399/1/1",type:"نوع سرویس تستی",description:"توضیحات تستی",amount:1e6,personel:"نام سرویسکار تستی"},{date:"1399/1/1",type:"نوع سرویس تستی",description:"توضیحات تستی",amount:1e6,personel:"نام سرویسکار تستی"},{date:"1399/1/1",type:"نوع سرویس تستی",description:"توضیحات تستی",amount:1e6,personel:"نام سرویسکار تستی"},{date:"1399/1/1",type:"نوع سرویس تستی",description:"توضیحات تستی",amount:1e6,personel:"نام سرویسکار تستی"},{date:"1399/1/1",type:"نوع سرویس تستی",description:"توضیحات تستی",amount:1e6,personel:"نام سرویسکار تستی"},{date:"1399/1/1",type:"نوع سرویس تستی",description:"توضیحات تستی",amount:1e6,personel:"نام سرویسکار تستی"},{date:"1399/1/1",type:"نوع سرویس تستی",description:"توضیحات تستی",amount:1e6,personel:"نام سرویسکار تستی"},{date:"1399/1/1",type:"نوع سرویس تستی",description:"توضیحات تستی",amount:1e6,personel:"نام سرویسکار تستی"}],customers:[{nextservicedate:"1399/10/10",name:"نام تستی",phone:"923334234",address:"، خیابان پاسداران ،ساری",referer:"یزدانی",installationDate:"1398/1/1",installer:"علی"},{nextservicedate:"1399/10/10",name:"نام تستی",phone:"923334234",address:"، خیابان پاسداران ،ساری",referer:"یزدانی",installationDate:"1398/1/1",installer:"علی"},{nextservicedate:"1399/10/10",name:"نام تستی",phone:"923334234",address:"، خیابان پاسداران ،ساری",referer:"یزدانی",installationDate:"1398/1/1",installer:"علی"},{nextservicedate:"1399/10/10",name:"نام تستی",phone:"923334234",address:"، خیابان پاسداران ،ساری",referer:"یزدانی",installationDate:"1398/1/1",installer:"علی"},{nextservicedate:"1399/10/10",name:"نام تستی",phone:"923334234",address:"، خیابان پاسداران ،ساری",referer:"یزدانی",installationDate:"1398/1/1",installer:"علی"},{nextservicedate:"1399/10/10",name:"نام تستی",phone:"923334234",address:"، خیابان پاسداران ،ساری",referer:"یزدانی",installationDate:"1398/1/1",installer:"علی"},{nextservicedate:"1399/10/10",name:"نام تستی",phone:"923334234",address:"، خیابان پاسداران ،ساری",referer:"یزدانی",installationDate:"1398/1/1",installer:"علی"}],devices:[{name:"دستگاه تستی",type:"نوع تستی",description:"توضیحات تستی"},{name:"دستگاه تستی",type:"نوع تستی",description:"توضیحات تستی"},{name:"دستگاه تستی",type:"نوع تستی",description:"توضیحات تستی"},{name:"دستگاه تستی",type:"نوع تستی",description:"توضیحات تستی"},{name:"دستگاه تستی",type:"نوع تستی",description:"توضیحات تستی"},{name:"دستگاه تستی",type:"نوع تستی",description:"توضیحات تستی"},{name:"دستگاه تستی",type:"نوع تستی",description:"توضیحات تستی"},{name:"دستگاه تستی",type:"نوع تستی",description:"توضیحات تستی"},{name:"دستگاه تستی",type:"نوع تستی",description:"توضیحات تستی"}]}}},created:function(){},computed:{entity:function(){return JSON.parse(M()(this.$root.entities[this.$route.params.entity]))},data:function(){return this.testdata[this.$route.params.entity]}},deactivated:function(){this.$destroy()}},E=P,U=Object(f["a"])(E,S,$,!1,null,null,null),H=U.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",{staticClass:"header m-3"},[e._v(e._s(e.meta.title))]),n("div",{staticClass:"form container p-0"},e._l(e.sections,(function(t,a){return n("section",{key:a,staticClass:"group border border-secondary rounded p-2 pt-4 mt-4 position-relative"},[n("h5",{staticClass:"sectiontitle clickable mb-3",on:{click:function(n){t.expanded=!t.expanded,e.$forceUpdate()}}},[e._v("\n        "+e._s(t.label)+"\n        "),n("span",{staticClass:"arrow",class:{open:t.expanded},staticStyle:{"font-size":"18px",padding:"3px 5px 0"}},[e._v("◀")])]),n("transition",{attrs:{name:"max-height"}},[t.expanded?n("div",{ref:a,refInFor:!0,staticClass:"fields px-2",style:"overflow:hidden;max-height:"+(t.maxHeight||"auto")},e._l(t.fields,(function(t,a){return n("div",{key:a,staticClass:"field input-group mb-1",staticStyle:{direction:"rtl"}},[n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[e._v(e._s(t.label))])]),["text","number","date"].includes(t.type)?n("input",{staticClass:"form-control rounded-left",attrs:{disabled:t.readonly,type:t.type,placeholder:t.label,"aria-label":"Username","aria-describedby":"basic-addon1"}}):e._e(),"textarea"==t.type?n("textarea",{staticClass:"form-control"}):e._e()])})),0):e._e()])],1)})),0),e._m(0)])},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"foote border-primary rounded p-2 m-2 text-right",staticStyle:{direction:"rtl"}},[n("div",{staticClass:"btn btn-success ml-2"},[e._v("ذخیره اطلاعات")]),n("div",{staticClass:"btn btn-danger"},[e._v("کنسل")])])}],J=n("7618"),L=n("a4bb"),I=n.n(L),R=(n("ac6a"),{data:function(){return{window:window,entity:null,meta:{},data:{},sections:{}}},created:function(){var e=this.$root.entities[this.$route.params.entity];this.meta.title="new"==this.$route.params.id?e.meta.title.new:e.meta.title.edit,this.copyObject(e.sections,this.sections)},mounted:function(){var e=this;I()(this.sections).forEach((function(t){e.sections[t].maxHeight=e.$refs[t][0].offsetHeight+"px",e.$forceUpdate()}))},methods:{copyObject:function(e,t){var n=this;I()(e).forEach((function(a){"object"==Object(J["a"])(a)?(t[a]={},n.copyObject(e[a],t[a])):t[a]=JSON.parse(M()(e[a]))}))}},deactivated:function(){this.$destroy()},watch:{data:{deep:!0},meta:{deep:!0},sections:{deep:!0}}}),W=R,A=(n("d727"),Object(f["a"])(W,N,T,!1,null,"24285f57",null)),F=A.exports;i["a"].use(x["a"]);var z=new x["a"]({routes:[{path:"/",name:"dashboard",component:O},{path:"/:entity",name:"entityList",component:H},{path:"/:entity/:id",name:"entityEdit",component:F,meta:{keepAlive:!1}}]}),B=z;n("1449");var K=n("fe3c");K.attach(document.body),n("8aa8"),i["a"].mixin({data:function(){return{dataCenter:r}}}),i["a"].config.productionTip=!0,new i["a"]({data:{entities:{services:{meta:{title:{new:"سرویس جدید",edit:"تغییر سرویس",list:"لیست سرویسها"},newbtn:{label:"ایجاد سرویس جدید"}},sections:{cutomer:{label:"مشتری",expanded:!0,fields:{name:{label:"نام مشتری",type:"text",readonly:!0,entity:"customers.name"},phone:{label:"شماره تلفن",type:"text",readonly:!0,entity:"customers.phone"}}},__main:{label:"اطلاعات سرویس",expanded:!0,fields:{date:{label:"تاریخ سرویس",type:"date"},type:{label:"نوع سرویس",type:"text"},description:{label:"شرح خدمات",type:"text"},amount:{label:" مبلغ دریافتی",type:"text"},personel:{label:"سرویسکار",type:"text"}}}}},customers:{meta:{title:{new:"مشتری جدید",edit:"تغییر اطلاعات مشتری",list:"لیست مشتریان"},newbtn:{label:"ایجاد مشتری جدید"}},sections:{__main:{label:"اطلاعات مشتری",expanded:!0,fields:{nextservicedate:{label:"تاریخ سرویس بعدی",type:"date"},name:{label:"نام ",type:"text"},phone:{label:"شماره تلفن",type:"text"},address:{label:"آدرس",type:"textarea"},referer:{label:"معرف",type:"text"},installationDate:{label:"تاریخ نصب",type:"date"},installer:{label:"نام نصاب",type:"text"}}}}},devices:{meta:{title:{new:"دستگاه جدید",edit:"تغییر اطلاعات دستگاه",list:"لیست دستگاهها"},newbtn:{label:"ایجاد دستگاه جدید"}},sections:{__main:{label:"اطلاعات دستگاه",expanded:!0,fields:{name:{label:"نام دستگاه ",type:"text"},type:{label:"نوع دستگاه",type:"text"},description:{label:"توضیحات",type:"textarea"}}}}}}},router:B,render:function(e){return e(w)}}).$mount("#app")},"87b8":function(e,t,n){},"8aa8":function(e,t,n){"use strict";n.r(t);var a,r,i=n("f499"),s=n.n(i),o=(n("34ef"),n("a481"),n("14b9"),n("795b")),c=n.n(o),l=(n("cadf"),n("551c"),n("f751"),n("097d"),n("9483")),d="BJIGTwPsHQ_J1Yg_9xbUDLnrz_jTq8-nDxuU3_nXPF7-DNU645CLMBsrm73g6HefM74RSTjtLr2upgWKQ30SFLk";function u(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),a=window.atob(n),r=new Uint8Array(a.length),i=0;i<a.length;++i)r[i]=a.charCodeAt(i);return r}window.serviceWorkerPromise=new c.a((function(e){return a=e})),window.subscribeUser=function(){return new c.a((function(e,t){if("granted"==window.Notification.permission)return e('localStorage.getItem("pushNotificationCredentials")');window.serviceWorkerPromise.then((function(n){n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:u(d)}).then((function(t){window.localStorage.setItem("pushNotificationCredentials",s()(t)),e(t)})).catch(t)}))}))},window.propforinstall=null,Object(l["a"])("".concat("/wf-crm/","service-worker.js"),{registered:a}),(window.navigator||{}).serviceWorker&&window.navigator.serviceWorker.ready.then((function(){window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),r=e,window.propforinstall=function(){r.prompt(),r.userChoice.then((function(e){"accepted"===e.outcome&&window.subscribeUser(),r=null}))}}))}))},"8e91":function(e,t,n){},9180:function(e,t,n){},bb16:function(e,t,n){},d727:function(e,t,n){"use strict";var a=n("bb16"),r=n.n(a);r.a},d942:function(e,t,n){"use strict";var a=n("8e91"),r=n.n(a);r.a}});