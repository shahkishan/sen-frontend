webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("/5sW"),r=n("3EgV"),o=n.n(r),s=(n("QCv7"),{data:function(){return{title:"Placement Portal",sideNav:!1,menuItems:[{link:"/",icon:"dashboard",name:"Dashboard"},{link:"/profile",icon:"face",name:"Profile"},{link:"/login",icon:"exit_to_app",name:"Login"}]}},computed:{}}),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{absolute:"",temporary:"","disable-resize-watcher":"false"},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[n("v-list",t._l(t.menuItems,function(e){return n("v-list-tile",{key:e.name,attrs:{to:e.link}},[n("v-list-tile-action",[n("v-icon",{attrs:{dark:""}},[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-tile-content",[t._v(t._s(e.name))])],1)}))],1),t._v(" "),n("v-toolbar",{staticClass:"primary",attrs:{dark:""}},[n("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),t._v(" "),n("v-toolbar-title",[n("router-link",{attrs:{to:"/",tag:"span",tyle:"cursor: pointer"}},[t._v("DA Placement Portal\n        "),n("v-icon",{attrs:{"x-large":"",dark:""}},[t._v("school")])],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",{staticClass:"hidden-xs-only"},t._l(t.menuItems,function(e){return n("v-btn",{key:e.name,attrs:{flat:"",to:e.link}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.name)+"\n      ")],1)}))],1),t._v(" "),n("main",[n("router-view")],1)],1)},l=[],c={render:i,staticRenderFns:l},v=c,u=n("VU/8"),d=u(s,v,!1,null,null,null),m=d.exports,p=n("/ocq"),_={},f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"mt-0":""}},[n("h1",[t._v("Hello world")])])},b=[],g={render:f,staticRenderFns:b},k=g,h=n("VU/8"),w=h(_,k,!1,null,null,null),x=w.exports,y={data:function(){return{}}},N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"mt-0":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{lg4:"","offset-lg4":"",md8:"","offset-md2":"",sm6:"","offset-sm3":""}},[n("h1",[t._v("Login")]),t._v(" "),n("v-form",[n("v-text-field",{attrs:{label:"Student ID",required:"true"}}),t._v(" "),n("v-text-field",{attrs:{type:"password",label:"Password"}})],1),t._v(" "),n("v-btn",{attrs:{primary:""}},[t._v("Login")])],1)],1)],1)},P=[],C={render:N,staticRenderFns:P},E=C,H=n("VU/8"),I=H(y,E,!1,null,null,null),L=I.exports;a.a.use(p.a);var V=new p.a({routes:[{path:"/",name:"Home",component:x},{path:"/login",name:"Login",component:L}]});a.a.use(o.a),a.a.component("app-login",L),a.a.config.productionTip=!1,new a.a({el:"#app",router:V,render:function(t){return t(m)}})},QCv7:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0ba268e263fcbcbeb8c9.js.map