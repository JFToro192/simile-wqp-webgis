import{o as u,c as _,a as p,r as f,b as v,d as y,C as a,O as w,e as C,f as E,T as b,M as L,g as M,F as T,S as H,V as x,h as k}from"./vendor.70e4cbfc.js";const N=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}};N();var g=(l,n)=>{const o=l.__vccOpts||l;for(const[t,e]of n)o[t]=e;return o};const S={},I=p("div",{id:"map",class:"map"},null,-1),O=p("div",{style:{display:"none"}},null,-1),A=[I,O];function B(l,n){return u(),_("div",null,A)}var j=g(S,[["render",B]]);const G={name:"App",components:{WebGISContainer:j}};function P(l,n,o,t,e,s){const i=f("WebGISContainer");return u(),v(i)}var W=g(G,[["render",P],["__scopeId","data-v-09d448c2"]]);y(W).mount("#app");function d(){const l="."+this.element.classList[0],n="."+l.split("-")[1]+"-item",o=$(l);o.hasClass("active")?($(`${n}`).slice(0).hide(),o.removeClass("active")):($(`${n}`).slice(0).show(),o.addClass("active"))}class z extends a{constructor(n){const o=n||{},t=document.createElement("button");t.innerHTML='<i class="bi bi-list"></i>';const e=document.createElement("div");e.className="show-burger ol-unselectable ol-control control-bar active",e.appendChild(t);super({element:e,target:o.target});e.addEventListener("click",d.bind(this),!1)}}class F extends a{constructor(n){const o=n||{},t=document.createElement("button");t.innerHTML='<i class="bi bi-stack"></i>',t.title="layers panel";const e=document.createElement("div");e.className="show-layers ol-unselectable ol-control control-bar burger-item",e.appendChild(t);super({element:e,target:o.target})}}class V extends a{constructor(n){const o=n||{},t=document.createElement("button");t.innerHTML='<i class="bi bi-info-square"></i>',t.title="metadata panel";const e=document.createElement("div");e.className="show-metadata ol-unselectable ol-control control-bar burger-item",e.appendChild(t);super({element:e,target:o.target})}}class q extends a{constructor(n){const o=n||{},t=document.createElement("button");t.innerHTML='<i class="bi bi-clock-history"></i>',t.title="time panel";const e=document.createElement("div");e.className="show-time ol-unselectable ol-control control-bar burger-item",e.appendChild(t);super({element:e,target:o.target})}}class K extends a{constructor(n){const o=n||{},t=document.createElement("button");t.innerHTML='<i class="bi bi-map"></i>',t.title="basemaps";const e=document.createElement("div");e.className="show-basemap ol-unselectable ol-control control-bar burger-item",e.appendChild(t);super({element:e,target:o.target})}}class D extends a{constructor(n){const o=n||{},t=document.createElement("button");t.innerHTML='<i class="bi bi-graph-up"></i>',t.title="plot time series";const e=document.createElement("div");e.className="show-plot ol-unselectable ol-control control-bar burger-item",e.appendChild(t);super({element:e,target:o.target})}}class J extends a{constructor(n){const o=n||{},t=document.createElement("ul"),e=document.createElement("li"),s=document.createElement("li"),i=document.createElement("li"),c=document.createElement("li"),r=document.createElement("li");e.innerHTML='<button><i class="bi bi-people"></i></button>',s.innerHTML='<button class="social-item" style="display:none;"><i class="bi bi-facebook"></i></button>',i.innerHTML='<button class="social-item" style="display:none;"><i class="bi bi-twitter"></i></button>',c.innerHTML='<button class="social-item" style="display:none;"><i class="bi bi-linkedin"></i></button>',r.innerHTML='<button class="social-item" style="display:none;"><i class="bi bi-instagram"></i></button>',e.title="social",s.title="facebook",i.title="twitter",c.title="linkedin",r.title="instagram";const m=document.createElement("div");m.className="show-social ol-unselectable ol-control control-bar burger-item",t.appendChild(e),t.appendChild(s),t.appendChild(i),t.appendChild(c),t.appendChild(r),m.appendChild(t);super({element:m,target:o.target});e.addEventListener("click",d.bind(this),!1)}}class Q extends a{constructor(n){const o=n||{},t=document.createElement("ul"),e=document.createElement("li"),s=document.createElement("li"),i=document.createElement("li"),c=document.createElement("li"),r=document.createElement("li");e.innerHTML='<button ><i class="bi bi-journals"></i></button>',s.innerHTML='<button class="about-item" style="display:none;"><i class="bi bi-newspaper"></i></button>',i.innerHTML='<button class="about-item" style="display:none;"><i class="bi bi-briefcase"></i></button>',c.innerHTML='<button class="about-item" style="display:none;"><i class="bi bi-github"></i></button>',r.innerHTML='<button class="about-item" style="display:none;"><i class="bi bi-calendar-week"></i></button>',e.title="portfolio",s.title="news",i.title="business intelligence platform",c.title="webgis github repository",r.title="calendar";const m=document.createElement("div");m.className="show-about ol-unselectable ol-control control-bar burger-item",t.appendChild(e),t.appendChild(s),t.appendChild(i),t.appendChild(c),t.appendChild(r),m.appendChild(t);super({element:m,target:o.target});e.addEventListener("click",d.bind(this),!1)}}class R extends a{constructor(n){const o=n||{},t=document.createElement("div"),e=document.createElement("a");e.href="https://www.progetti.interreg-italiasvizzera.eu/it/b/78/sistemainformativoperilmonitoraggiointegratodeilaghiinsubriciedeiloroe";const s=document.createElement("img");s.src="src/assets/img/assev_simile.png",s.alt="logo-simile-interreg",e.appendChild(s),t.appendChild(e);const i=document.createElement("div");i.className="project-logo ol-unselectable ol-control",i.appendChild(t);super({element:i,target:o.target})}}new w({element:document.getElementById("interregsimile")});const h=new C,U=new E({layers:[new b({source:h})]});new L({target:"map",controls:M().extend([new T,new H,U,new z,new F,new V,new q,new K,new D,new J,new Q,new R]),layers:[new b({source:h})],view:new x({center:[0,0],zoom:2})});k([16.3725,48.208889]);
//# sourceMappingURL=index.852f80fb.js.map
