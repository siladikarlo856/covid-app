(function(t){function e(e){for(var n,o,u=e[0],i=e[1],s=e[2],l=0,m=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&m.push(c[o][0]),c[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);d&&d(e);while(m.length)m.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,o=1;o<r.length;o++){var u=r[o];0!==c[u]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},c={app:0},a=[];function u(t){return i.p+"js/"+({perday:"perday"}[t]||t)+"."+{perday:"5a8f159a"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r={perday:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var n="css/"+({perday:"perday"}[t]||t)+"."+{perday:"e443502f"}[t]+".css",c=i.p+n,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===c))return e()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){s=m[u],l=s.getAttribute("data-href");if(l===n||l===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[t],d.parentNode.removeChild(d),r(a)},d.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){o[t]=0})));var n=c[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,r){n=c[t]=[e,r]}));e.push(n[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(t);var m=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var r=c[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",m.name="ChunkLoadError",m.type=n,m.request=o,r[1](m)}c[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var m=0;m<s.length;m++)e(s[m]);var d=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"033e":function(t,e,r){},"0c09":function(t,e,r){"use strict";r("209a")},1127:function(t,e,r){},"209a":function(t,e,r){},2599:function(t,e,r){"use strict";r("7fdb")},"3d2e":function(t,e,r){"use strict";r("1127")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o=Object(n["g"])("header",null,[Object(n["g"])("img",{src:"https://www.un.org/sites/un2.un.org/files/covid-19.svg",alt:"Covid Logo",class:"covid-logo"}),Object(n["g"])("h1",null,"COVID-19 app")],-1);function c(t,e){var r=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["f"])(n["a"],null,[o,Object(n["i"])(r)],64)}r("2599");var a=r("6b0d"),u=r.n(a);const i={},s=u()(i,[["render",c]]);var l=s,m=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),d=function(t){return Object(n["v"])("data-v-0403c633"),t=t(),Object(n["t"])(),t},b={key:0,class:"summary-container"},f={class:"global-summary-container"},y={class:"countries-summary-container"},p=d((function(){return Object(n["g"])("h2",null,"Countries Summary",-1)})),g={class:"countries-items"};function O(t,e,r,o,c,a){var u=Object(n["z"])("pulse-loader"),i=Object(n["z"])("GlobalSummary"),s=Object(n["z"])("CountrySummary");return Object(n["s"])(),Object(n["f"])(n["a"],null,[Object(n["i"])(u,{loading:c.loading,color:t.color,size:t.size},null,8,["loading","color","size"]),c.loading?Object(n["e"])("",!0):(Object(n["s"])(),Object(n["f"])("div",b,[Object(n["g"])("div",f,[Object(n["i"])(i,{globalSummary:t.globalSummary},null,8,["globalSummary"])]),Object(n["g"])("div",y,[p,Object(n["g"])("div",g,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(t.countriesSummary,(function(t){return Object(n["s"])(),Object(n["d"])(s,{key:t.ID,countrySummary:t},null,8,["countrySummary"])})),128))])])]))],64)}var j=r("5530"),v=r("5502"),h=function(t){return Object(n["v"])("data-v-6f4d3c02"),t=t(),Object(n["t"])(),t},S={class:"global-summary-item"},C=h((function(){return Object(n["g"])("h2",{class:"card-title"},"Global Summary",-1)})),P={class:"global-summary-data"},T=h((function(){return Object(n["g"])("strong",null,"Total Confirmed:",-1)})),_=h((function(){return Object(n["g"])("strong",null,"Total Deaths:",-1)})),D=h((function(){return Object(n["g"])("strong",null,"Total Recovered:",-1)}));function E(t,e,r,o,c,a){return Object(n["s"])(),Object(n["f"])("div",S,[C,Object(n["g"])("div",P,[Object(n["g"])("p",null,[T,Object(n["h"])(" "+Object(n["B"])(r.globalSummary.TotalConfirmed),1)]),Object(n["g"])("p",null,[_,Object(n["h"])(" "+Object(n["B"])(r.globalSummary.TotalDeaths),1)]),Object(n["g"])("p",null,[D,Object(n["h"])(" "+Object(n["B"])(r.globalSummary.TotalRecovered),1)])])])}var w={name:"GlobalSummary",props:["globalSummary"]};r("acf0");const A=u()(w,[["render",E],["__scopeId","data-v-6f4d3c02"]]);var k=A,B=function(t){return Object(n["v"])("data-v-8d8e6bd6"),t=t(),Object(n["t"])(),t},N={class:"card-title"},U={class:"country-summary-data"},I=B((function(){return Object(n["g"])("strong",null,"Total Confirmed:",-1)})),L=B((function(){return Object(n["g"])("strong",null,"Total Deaths:",-1)})),R=B((function(){return Object(n["g"])("strong",null,"Total Recovered:",-1)}));function M(t,e,r,o,c,a){return Object(n["s"])(),Object(n["f"])("div",{class:"country-summary-item",onClick:e[0]||(e[0]=function(t){return a.openCountryPerDay(r.countrySummary)})},[Object(n["g"])("h3",N,Object(n["B"])(r.countrySummary.Country),1),Object(n["g"])("div",U,[Object(n["g"])("p",null,[I,Object(n["h"])(" "+Object(n["B"])(r.countrySummary.TotalConfirmed),1)]),Object(n["g"])("p",null,[L,Object(n["h"])(" "+Object(n["B"])(r.countrySummary.TotalDeaths),1)]),Object(n["g"])("p",null,[R,Object(n["h"])(" "+Object(n["B"])(r.countrySummary.TotalRecovered),1)])])])}var x="covid-app",z={name:"CountrySummary",props:["countrySummary"],methods:{openCountryPerDay:function(t){this.$store.dispatch("setSelectedCountry",t),this.$router.push("/".concat(x,"/perday/").concat(t.Slug))}}};r("3d2e");const G=u()(z,[["render",M],["__scopeId","data-v-8d8e6bd6"]]);var Y=G,$=r("8a5d"),F={name:"Summary",data:function(){return{loading:!0}},components:{GlobalSummary:k,CountrySummary:Y,PulseLoader:$["a"]},computed:Object(j["a"])({},Object(v["b"])(["globalSummary","countriesSummary"])),created:function(){var t=this;this.$store.dispatch("getSummary").then((function(){t.loading=!1})).catch((function(e){t.$router.push("/".concat("covid-app","/error")),console.log("Summary created() getSummary error: ",e)}))}};r("0c09");const q=u()(F,[["render",O],["__scopeId","data-v-0403c633"]]);var H=q,J=function(t){return Object(n["v"])("data-v-5d4495f3"),t=t(),Object(n["t"])(),t},K=J((function(){return Object(n["g"])("h1",null,"Sorry. Page Not Found :(",-1)})),V=Object(n["h"])(" Please go back or use "),Q=Object(n["h"])("THIS LINK"),W=Object(n["h"])(" to navigate on summary page ");function X(t,e,r,o,c,a){var u=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",null,[K,Object(n["g"])("p",null,[V,Object(n["i"])(u,{to:"/",class:"hyperlink-text"},{default:Object(n["G"])((function(){return[Q]})),_:1}),W])])}var Z={name:"NotFound"};r("ec7a");const tt=u()(Z,[["render",X],["__scopeId","data-v-5d4495f3"]]);var et,rt,nt=tt,ot=[{path:"/",redirect:{name:"Summary"}},{path:"/".concat("covid-app","/summary"),name:"Summary",component:H},{path:"/".concat("covid-app","/perday/:country"),name:"PerDay",component:function(){return r.e("perday").then(r.bind(null,"08a5"))},props:!0},{path:"/".concat("covid-app","/error"),component:nt},{path:"/".concat("covid-app","/:pathMatch(.*)*"),component:nt}],ct=Object(m["a"])({history:Object(m["b"])("/"),routes:ot,scrollBehavior:function(t,e,r){return r||{top:0}}}),at=ct,ut=r("ade3"),it=(r("99af"),r("bc3a")),st=r.n(it),lt="UPDATE_GLOABL_SUMMARY",mt="UPDATE_COUNTRIES_SUMMARY",dt="UPDATE_COUNTRY_PER_DAY",bt="UPDATE_COUNTRIES",ft="UPDATE_SELECTED_COUNTRY",yt={countries:[],countryPerDay:[]},pt=(et={},Object(ut["a"])(et,bt,(function(t,e){t.countries=e})),Object(ut["a"])(et,dt,(function(t,e){t.countryPerDay=e})),et),gt={getCountries:function(t){var e=t.commit;return st.a.get("".concat("https://api.covid19api.com","/countries")).then((function(t){return e(bt,t.data),Promise.resolve(t.status)})).catch((function(t){return console.log("getCountries error: ",t),Promise.reject(t)}))},getDataPerDay:function(t,e){var r=t.commit;return st.a.get("".concat("https://api.covid19api.com","/dayone/country/").concat(e)).then((function(t){return r(dt,t.data.reverse()),Promise.resolve(t.status)})).catch((function(t){return console.log("getDataPerDay error: ",t),Promise.reject(t.response.status)}))}},Ot={countries:function(t){return t.countries},countryPerDay:function(t){return t.countryPerDay}},jt={state:yt,mutations:pt,actions:gt,getters:Ot},vt=jt,ht={globalSummary:{},countriesSummary:[],selectedCountry:{}},St=(rt={},Object(ut["a"])(rt,lt,(function(t,e){t.globalSummary=e})),Object(ut["a"])(rt,mt,(function(t,e){t.countriesSummary=e})),Object(ut["a"])(rt,ft,(function(t,e){t.selectedCountry=e})),rt),Ct={getSummary:function(t){var e=t.commit;return st.a.get("".concat("https://api.covid19api.com","/summary")).then((function(t){return e(lt,t.data.Global),e(mt,t.data.Countries),Promise.resolve(t.status)})).catch((function(t){return console.log("getSummary error: ",t),Promise.reject(t.response.status)}))},setSelectedCountry:function(t,e){var r=t.commit;r(ft,e)}},Pt={globalSummary:function(t){return t.globalSummary},countriesSummary:function(t){return t.countriesSummary},selectedCountry:function(t){return t.selectedCountry}},Tt={state:ht,mutations:St,actions:Ct,getters:Pt},_t=Tt,Dt=Object(v["a"])({modules:{perDay:vt,summary:_t}});Object(n["c"])(l).use(Dt).use(at).mount("#app")},"7fdb":function(t,e,r){},a8b6:function(t,e,r){},acf0:function(t,e,r){"use strict";r("a8b6")},ec7a:function(t,e,r){"use strict";r("033e")}});
//# sourceMappingURL=app.f486c14e.js.map