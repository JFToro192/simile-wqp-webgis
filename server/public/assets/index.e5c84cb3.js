import{C as c,M as i,d as a,F as u,T as d,O as f,V as m}from"./vendor.bb997eda.js";const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};p();class y extends c{constructor(o){const n=o||{},r=document.createElement("button");r.innerHTML="L";const e=document.createElement("div");e.className="show-layers ol-unselectable ol-control",e.appendChild(r);super({element:e,target:n.target})}}new i({target:"map",controls:a().extend([new u,new y]),layers:[new d({source:new f})],view:new m({center:[0,0],zoom:2})});
//# sourceMappingURL=index.e5c84cb3.js.map
