(function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"533fa853"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,a[1](l)}n[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"034f":function(e,t,a){"use strict";a("85ec")},"0c22":function(e,t,a){"use strict";a("9081")},"85ec":function(e,t,a){},9081:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"row"},[a("div",{attrs:{id:"nav"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("div",{staticClass:"container-fluid"},[a("b-icon-columns-gap"),a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("MyExpo")]),e._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link active",attrs:{"aria-current":"page",to:"/"}},[e._v("Home")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[e._v("About")])],1),e._m(1),e._m(2)]),e._m(3)])],1)])])]),a("router-view")],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[e._v(" Dropdown ")]),a("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Action")])]),a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Another action")])]),a("li",[a("hr",{staticClass:"dropdown-divider"})]),a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Something else here")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link disabled"},[e._v("Disabled")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"d-flex"},[a("input",{staticClass:"form-control me-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),a("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"}},[e._v("Search")])])}],s=(a("034f"),a("2877")),i={},c=Object(s["a"])(i,n,o,!1,null,null,null),l=c.exports,u=a("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7"),a("3ca3"),a("ddb0");var d=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("b-icon-badge4k"),a("b-row",[a("b-container",[a("Expo",{attrs:{msg:"Expo Information"}})],1)],1)],1)},p=[],m=a("d4ec"),b=a("262e"),v=a("2caf"),h=a("9ab4"),g=a("1b40"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[e._v(" "+e._s(e.msg)+" ")])])]),a("div",{staticClass:"row"},[e.show?a("b-form",{on:{submit:e.onSubmit}},[a("b-form-group",{attrs:{id:"input-group-1",label:"Message: ","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",placeholder:"Beacon Id",required:""},model:{value:e.form.beaconId,callback:function(t){e.$set(e.form,"beaconId",t)},expression:"form.beaconId"}}),a("b-form-input",{attrs:{id:"input-1",placeholder:"Beacon Name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),a("b-form-input",{attrs:{id:"input-1",placeholder:"Expo Id",required:""},model:{value:e.form.expoID,callback:function(t){e.$set(e.form,"expoID",t)},expression:"form.expoID"}}),a("b-form-input",{attrs:{id:"input-1",placeholder:"Message",required:""},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}}),a("b-form-input",{attrs:{id:"input-1",placeholder:"Auth Key"},model:{value:e.basicAuthHeader,callback:function(t){e.basicAuthHeader=t},expression:"basicAuthHeader"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1):e._e()],1),a("b-card",{staticClass:"mt-3",attrs:{header:"Payload to send to the api"}},[a("pre",{staticClass:"m-0"},[e._v(e._s(e.form))])]),a("b-alert",{attrs:{variant:"success",dismissible:"",show:e.showAlert},on:{dismissed:function(t){e.showAlert=!1}}},[e._v(" "+e._s(e.alertMessage)+" ")])],1)},y=[],_=a("1da1"),x=a("bee2"),C=(a("96cf"),a("e9c4"),function(e){Object(b["a"])(a,e);var t=Object(v["a"])(a);function a(){var e;return Object(m["a"])(this,a),e=t.apply(this,arguments),e.show=!0,e.showAlert=!1,e.alertMessage="",e.basicAuthHeader="shawnmurtagh",e.form={beaconId:"",name:"",expoID:0,message:""},e}return Object(x["a"])(a,[{key:"onSubmit",value:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://localhost:8080/exhibits",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:this.basicAuthHeader},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(this.form)});case 3:return a=e.sent,console.debug(a),e.next=7,a.json();case 7:if(e.t0=e.sent,e.t0){e.next=10;break}e.t0={};case 10:if(r=e.t0,a.ok){e.next=14;break}throw n=r.error?r.error.error||r.error:a.status,new Error(n);case 14:this.alertMessage="Beacon saved successfully.",this.showAlert=!0;case 16:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),a}(g["c"]));Object(h["a"])([Object(g["b"])()],C.prototype,"msg",void 0),C=Object(h["a"])([g["a"]],C);var j=C,O=j,k=(a("0c22"),Object(s["a"])(O,w,y,!1,null,"03ad1a51",null)),S=k.exports,A=function(e){Object(b["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(m["a"])(this,a),t.apply(this,arguments)}return a}(g["c"]);A=Object(h["a"])([Object(g["a"])({components:{Expo:S}})],A);var E=A,P=E,$=Object(s["a"])(P,f,p,!1,null,null,null),I=$.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("FormulateForm",{model:{value:e.loginForm,callback:function(t){e.loginForm=t},expression:"loginForm"}},[a("FormulateForm",{attrs:{schema:e.schema},on:{submit:e.onSubmit},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}})],1)},D=[],F=a("bc3a"),T=function(e){Object(b["a"])(a,e);var t=Object(v["a"])(a);function a(){var e;return Object(m["a"])(this,a),e=t.apply(this,arguments),e.form={},e.schema=[{type:"text",name:"username",label:"Username",validation:"required"},{type:"password",name:"password",label:"Password",validation:"required",validationName:"Password confirmation"},{type:"submit",label:"Login"}],e}return Object(x["a"])(a,[{key:"onSubmit",value:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F["Axios"].prototype.post("http://localhost:8081/auth",t);case 2:alert("Thank you, ".concat(t.username));case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),a}(g["c"]),q=T,H=Object(s["a"])(q,M,D,!1,null,null,null),N=H.exports;r["default"].use(d["a"]);var L=[{path:"/",name:"Home",component:I},{path:"/login",name:"Login",component:N},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],B=new d["a"]({routes:L}),R=B,J=a("2f62");r["default"].use(J["a"]);var z=new J["a"].Store({state:{user:{name:"Ladiezman007",org:"Chicago Museum of Natural History"},expos:[]},mutations:{},actions:{},modules:{}}),K=a("5f5b"),U=a("b1e0"),G=a("d644");a("f9e3"),a("2dd8");r["default"].use(G["a"]),r["default"].use(K["a"]),r["default"].use(U["a"]),r["default"].config.productionTip=!1,new r["default"]({router:R,store:z,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.a3c05d5c.js.map