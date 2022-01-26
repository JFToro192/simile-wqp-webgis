import{o as p,c as h,a as f,r as w,b as y,d as _,C as i,O as E,e as C,T as b,S as v,M as L,f as M,g as P,F as T,V as k}from"./vendor.0e79122a.js";const H=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};H();var g=(s,l)=>{const n=s.__vccOpts||s;for(const[t,e]of l)n[t]=e;return n};const x={},I=f('<div id="map" class="map"></div><div id="layerPanel" class="layer-panel ol-unselectable ol-control">Layer Panel</div><div id="metadataPanel" class="metadata-panel ol-unselectable ol-control">Metadata Panel</div><div id="timePanel" class="time-panel ol-unselectable ol-control">Time Panel</div><div id="basemapPanel" class="basemap-panel ol-unselectable ol-control">Basemap Panel</div><div id="plotPanel" class="plot-panel ol-unselectable ol-control">Plot Panel</div><div id="popup" class="popup ol-unselectable ol-control"></div>',7),N=[I];function S(s,l){return p(),h("div",null,N)}var B=g(x,[["render",S]]);const O={name:"App",components:{WebGISContainer:B}};function A(s,l,n,t,e,o){const a=w("WebGISContainer");return p(),y(a)}var j=g(O,[["render",A],["__scopeId","data-v-09d448c2"]]);_(j).mount("#app");var G="/assets/assev_simile.d3f83cf6.png";function u(){const s="."+this.element.classList[0],l="."+s.split("-")[1]+"-item",n=$(s);n.hasClass("active")?($(`${l}`).slice(0).hide(),n.removeClass("active")):($(`${l}`).slice(0).show(),n.addClass("active"))}function m(){const s="."+this.element.classList[0],l="."+s.split("-")[1]+"-panel",n=$(l);n.hasClass("active")?(n.hide(),n.removeClass("active")):(n.show(),n.addClass("active"))}class W extends i{constructor(l){const n=l||{},t=document.createElement("button");t.innerHTML='<i class="bi bi-list"></i>';const e=document.createElement("div");e.className="show-burger ol-unselectable ol-control control-bar active",e.appendChild(t);super({element:e,target:n.target});e.addEventListener("click",u.bind(this),!1)}}class z extends i{constructor(l){const n=l||{},t=document.createElement("button");t.innerHTML='<i class="bi bi-stack"></i>',t.title="layers panel";const e=document.createElement("div");e.className="show-layer ol-unselectable ol-control control-bar burger-item",e.appendChild(t);super({element:e,target:n.target});e.addEventListener("click",m.bind(this),!1)}}class F extends i{constructor(l){const n=l||{},t=document.createElement("button");t.innerHTML='<i class="bi bi-info-square"></i>',t.title="metadata panel";const e=document.createElement("div");e.className="show-metadata ol-unselectable ol-control control-bar burger-item",e.appendChild(t);super({element:e,target:n.target});e.addEventListener("click",m.bind(this),!1)}}class V extends i{constructor(l){const n=l||{},t=document.createElement("button");t.innerHTML='<i class="bi bi-clock-history"></i>',t.title="time panel";const e=document.createElement("div");e.className="show-time ol-unselectable ol-control control-bar burger-item",e.appendChild(t);super({element:e,target:n.target});e.addEventListener("click",m.bind(this),!1)}}class q extends i{constructor(l){const n=l||{},t=document.createElement("button");t.innerHTML='<i class="bi bi-map"></i>',t.title="basemaps";const e=document.createElement("div");e.className="show-basemap ol-unselectable ol-control control-bar burger-item",e.appendChild(t);super({element:e,target:n.target});e.addEventListener("click",m.bind(this),!1)}}class K extends i{constructor(l){const n=l||{},t=document.createElement("button");t.innerHTML='<i class="bi bi-graph-up"></i>',t.title="plot time series";const e=document.createElement("div");e.className="show-plot ol-unselectable ol-control control-bar burger-item",e.appendChild(t);super({element:e,target:n.target});e.addEventListener("click",m.bind(this),!1)}}class U extends i{constructor(l){const n=l||{},t=document.createElement("ul"),e=document.createElement("li"),o=document.createElement("li"),a=document.createElement("li"),c=document.createElement("li"),r=document.createElement("li");e.innerHTML='<button><i class="bi bi-people"></i></button>',o.innerHTML='<button class="social-item" style="display:none;"><i class="bi bi-facebook"></i></button>',a.innerHTML='<button class="social-item" style="display:none;"><i class="bi bi-twitter"></i></button>',c.innerHTML='<button class="social-item" style="display:none;"><i class="bi bi-linkedin"></i></button>',r.innerHTML='<button class="social-item" style="display:none;"><i class="bi bi-instagram"></i></button>',e.title="social",o.title="facebook",a.title="twitter",c.title="linkedin",r.title="instagram";const d=document.createElement("div");d.className="show-social ol-unselectable ol-control control-bar burger-item",t.appendChild(e),t.appendChild(o),t.appendChild(a),t.appendChild(c),t.appendChild(r),d.appendChild(t);super({element:d,target:n.target});e.addEventListener("click",u.bind(this),!1)}}class D extends i{constructor(l){const n=l||{},t=document.createElement("ul"),e=document.createElement("li"),o=document.createElement("li"),a=document.createElement("li"),c=document.createElement("li"),r=document.createElement("li");e.innerHTML='<button ><i class="bi bi-journals"></i></button>',o.innerHTML='<button class="about-item" style="display:none;"><i class="bi bi-newspaper"></i></button>',a.innerHTML='<button class="about-item" style="display:none;"><i class="bi bi-briefcase"></i></button>',c.innerHTML='<button class="about-item" style="display:none;"><i class="bi bi-github"></i></button>',r.innerHTML='<button class="about-item" style="display:none;"><i class="bi bi-calendar-week"></i></button>',e.title="portfolio",o.title="news",a.title="business intelligence platform",c.title="webgis github repository",r.title="calendar";const d=document.createElement("div");d.className="show-about ol-unselectable ol-control control-bar burger-item",t.appendChild(e),t.appendChild(o),t.appendChild(a),t.appendChild(c),t.appendChild(r),d.appendChild(t);super({element:d,target:n.target});e.addEventListener("click",u.bind(this),!1)}}class J extends i{constructor(l){const n=l||{},t=document.createElement("div"),e=document.createElement("a");e.href="https://www.progetti.interreg-italiasvizzera.eu/it/b/78/sistemainformativoperilmonitoraggiointegratodeilaghiinsubriciedeiloroe";const o=document.createElement("img");o.src=G,o.alt="logo-simile-interreg",e.appendChild(o),t.appendChild(e);const a=document.createElement("div");a.className="project-logo ol-unselectable ol-control",a.appendChild(t);super({element:a,target:n.target})}}const Q=new i({element:document.getElementById("layerPanel")}),R=new i({element:document.getElementById("metadataPanel")}),X=new i({element:document.getElementById("timePanel")}),Y=new i({element:document.getElementById("basemapPanel")}),Z=new i({element:document.getElementById("plotPanel")});new i({element:document.getElementById("popup")});new E;const ee=new C({layers:[new b({source:new v({layer:"watercolor"})})]});new L({target:"map",controls:M().extend([new P,new T,ee,new W,new z,Q,new F,R,new V,X,new q,Y,new K,Z,new U,new D,new J]),layers:[new b({source:new v({layer:"watercolor"})})],view:new k({center:[0,0],zoom:2})});
//# sourceMappingURL=index.37c6dba7.js.map
