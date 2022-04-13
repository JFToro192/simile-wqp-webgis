import{C as _,O as X,a as ie,T as E,M as ne,d as re,S as le,V as oe,W as q,b as z,L as W,c as ce,o as p,e as m,f as y,t as u,g as r,F as B,r as D,p as x,h as C,n as M,i as K,j,w as O,k as de,v as ue,l as pe,m as v,q as w,s as me,u as _e,x as ge,y as ye,z as he}from"./vendor.eedb9b49.js";const ve=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(t){if(t.ep)return;t.ep=!0;const l=s(t);fetch(t.href,l)}};ve();var Ae="/assets/assev_simile.d3f83cf6.png";function fe(){const e="."+this.element.classList[0],a="."+e.split("-")[1]+"-item",s=$(e);s.hasClass("active")?($(`${a}`).slice(0).hide(),s.removeClass("active")):($(`${a}`).slice(0).show(),s.addClass("active"))}function P(){const e="."+this.element.classList[0],a="."+e.split("-")[1]+"-panel",s=$(e),i=$(a);i.hasClass("active")?(i.hide(),s.removeClass("active"),i.removeClass("active")):(i.show(),s.addClass("active"),i.addClass("active"))}class be extends _{constructor(a){const s=a||{},i=document.createElement("button");i.innerHTML='<i class="bi bi-list"></i>';const t=document.createElement("div");t.className="show-burger ol-unselectable ol-control control-bar active",t.appendChild(i);super({element:t,target:s.target});t.addEventListener("click",fe.bind(this),!1)}}class we extends _{constructor(a){const s=a||{},i=document.createElement("button");i.innerHTML='<i class="bi bi-stack"></i>',i.title="layers panel";const t=document.createElement("div");t.className="show-layer ol-unselectable ol-control control-bar burger-item",t.appendChild(i);super({element:t,target:s.target});t.addEventListener("click",P.bind(this),!1)}}class Le extends _{constructor(a){const s=a||{},i=document.createElement("button");i.innerHTML='<i class="bi bi-info-square"></i>',i.title="metadata panel";const t=document.createElement("div");t.className="show-metadata ol-unselectable ol-control control-bar burger-item",t.appendChild(i);super({element:t,target:s.target});t.addEventListener("click",P.bind(this),!1)}}class xe extends _{constructor(a){const s=a||{},i=document.createElement("button");i.innerHTML='<i class="bi bi-clock-history"></i>',i.title="time panel";const t=document.createElement("div");t.className="show-time ol-unselectable ol-control control-bar burger-item",t.appendChild(i);super({element:t,target:s.target});t.addEventListener("click",P.bind(this),!1)}}class Ce extends _{constructor(a){const s=a||{},i=document.createElement("button");i.innerHTML='<i class="bi bi-map"></i>',i.title="basemaps";const t=document.createElement("div");t.className="show-basemap ol-unselectable ol-control control-bar burger-item",t.appendChild(i);super({element:t,target:s.target});t.addEventListener("click",P.bind(this),!1)}}class Se extends _{constructor(a){const s=a||{},i=document.createElement("button");i.innerHTML='<i class="bi bi-file-earmark-easel"></i>',i.title="webgis guide";const t=document.createElement("div");t.className="show-slide ol-unselectable ol-control control-bar burger-item",t.appendChild(i);super({element:t,target:s.target});t.addEventListener("click",P.bind(this),!1)}}class Ie extends _{constructor(a){const s=a||{},i=document.createElement("button");i.innerHTML='<a href="https://www.geonode.eo.simile.polimi.it/"><i class="bi bi-people-fill"></i></a>',i.src=i.title="GeoNode";const t=document.createElement("div");t.className="show-geonode ol-unselectable ol-control control-bar",t.appendChild(i);super({element:t,target:s.target})}}class Ee extends _{constructor(a){const s=a||{},i=document.createElement("div"),t=document.createElement("a");t.href="https://www.progetti.interreg-italiasvizzera.eu/it/b/78/sistemainformativoperilmonitoraggiointegratodeilaghiinsubriciedeiloroe";const l=document.createElement("img");l.src=Ae,l.alt="logo-simile-interreg",t.appendChild(l),i.appendChild(t);const n=document.createElement("div");n.className="project-logo ol-unselectable ol-control",n.appendChild(i);super({element:n,target:s.target})}}const Be=new X,De=new ie({layers:[new E({source:Be})]});function Me(){return new ne({target:"map",controls:re().extend([new le,De,new be,new we,new Le,new xe,new Ce,new Se,new Ee,new Ie]),view:new oe({center:[994904.36016,5775887605341e-6],zoom:10})})}new _({element:document.getElementById("layerPanel")});new _({element:document.getElementById("metadataPanel")});new _({element:document.getElementById("timePanel")});new _({element:document.getElementById("basemapPanel")});new _({element:document.getElementById("plotPanel")});new _({element:document.getElementById("slidePanel")});new _({element:document.getElementById("popup")});new q;function Q(e,a,s,i){return new E({source:new ce({url:a,params:{LAYERS:e,TILED:!0,STYLES:i},serverType:"geoserver"}),visible:!1,opacity:s})}function R(e,a){return e[a.name]={},e[a.name].workspace=a.workspace,e[a.name].typology=a.typology,e[a.name].crs=a.crs,e[a.name].sensor=a.sensor,e[a.name].timeComplete=[a.timeComplete],e[a.name].timeFormatted=[a.timeFormatted],e[a.name].level=a.level,e[a.name].layer=[a.layer],e}function Pe(e,a,s){let i=Object.keys(a),t={};return t.static={},t.time={},t.basemap={},e.forEach(l=>{let n={},o=l.Name.split(":");if(n.workspace=o[0],n.name=o[1].split("_").slice(0,3).join("_"),n.sensor=o[1].split("_")[0],n.typology=o[1].split("_")[1],n.crs=o[1].split("_")[2],o[1].split("_")[3]!=null){n.timeComplete=o[1].split("_")[3];let d=o[1].split("_")[3].split("T")[0];n.timeFormatted=d.slice(0,4)+"-"+d.slice(4,6)+"-"+d.slice(6,8)}else n.timeComplete=void 0,n.timeFormatted=void 0;n.level=o[1].split("_")[4];let c="";i.includes(n.typology)&&(c=n.typology.toLowerCase()),n.layer=Q(l.Name,s,.5,c),n.timeComplete!=null?n.name in t.time?(n.layer=Q(l.Name,s,1,c),n.layer.title="time",n.layer.date=n.timeFormatted,n.layer.name=n.name,n.name.split("_")[1]=="LSWT"?n.layer.units="[\xB0C]":n.name.split("_")[1]=="CHL"?n.layer.units="[mg/m3]":n.name.split("_")[1]=="TSM"&&(n.layer.units="[g/m3]"),t.time[n.name].timeComplete.push(n.timeComplete),t.time[n.name].timeFormatted.push(n.timeFormatted),t.time[n.name].layer.push(n.layer)):(n.layer=Q(l.Name,s,1),n.layer.title="time",n.layer.name=n.name,n.layer.date=n.timeFormatted,n.name.split("_")[1]=="LSWT"?n.layer.units="[\xB0C]":n.name.split("_")[1]=="CHL"?n.layer.units="[mg/m3]":n.name.split("_")[1]=="TSM"&&(n.layer.units="[g/m3]"),t.time=R(t.time,n)):t.static=R(t.static,n)}),t}function Ve(e){let a={osm:{title:"osm",layer:[new E({source:new X,visible:!0})]},terrain:{title:"terrain",source:"Stamen",layer:[new E({source:new z({layer:"terrain"}),visible:!1})]},toner:{title:"toner",source:"Stamen",layer:[new E({source:new z({layer:"toner"}),visible:!1})]}};return e.basemap=a,e}function U(e){let a={},s=[],i=[],t=[],l=[],n=[];for(let o in e)if(o=="time")for(let c in e[o]){let d=e[o][c].layer;n.push(new W({layers:d,visible:!0,opacity:.5}))}else{for(let c in e[o])if(o=="basemap"){let d=e[o][c].layer[0];d.title="basemap",s.push(d)}else if(o=="static"){let d=e[o][c].layer[0];d.title="static",i.push(d)}l[0]=new W({layers:i,visible:!0,opacity:1}),t[0]=new W({layers:s,visible:!0,opacity:1})}return a.basemap=t,a.static=l,a.time=n,a}function Ne(e){e.forEach(a=>{a.then(s=>{})})}var h=(e,a)=>{const s=e.__vccOpts||e;for(const[i,t]of a)s[i]=t;return s};const ke={name:"Layer",props:{child_msg:{type:String,default:"Layer Panel"},layer_list:{type:Object}},data(){return{}},methods:{setLayerVisible(e,a,s,i,t){this.$emit("setLayerVisible",{nGroup:a,index:s}),e.target.checked&&this.setLayerMetadata(i,t)},setLayerOpacity(e,a,s){let i=e.target.value;this.$emit("setLayerOpacity",{opacity:i,nGroup:a,index:s})},setLayerMetadata(e,a){this.$emit("setLayerMetadata",{layerType:e,layerName:a})}}},L=e=>(x("data-v-3b7d1851"),e=e(),C(),e),Te={id:"layerPanel",class:"layer-panel ol-unselectable ol-control"},Ge=L(()=>r("h6",{class:"static-layers-title"},[r("i",{class:"bi bi-arrow-right"}),y("Static Layers")],-1)),We={class:"static-layers active",id:"staticLayers"},je={class:"layer-items"},Oe=["onChange"],Qe={class:"title-layer"},Ye=["title"],$e=L(()=>r("div",{class:"dwnld-layer"},[r("i",{class:"bi bi-box-arrow-down"})],-1)),Fe=["onClick"],He=L(()=>r("i",{class:"bi bi-info-square"},null,-1)),Je=[He],Xe=L(()=>r("div",{class:"opct-layer"},[r("i",{class:"bi bi-brightness-high"})],-1)),qe={class:"opct-range-layer"},ze=["onChange"],Ke=L(()=>r("h6",{class:"time-series-layers-title"},[r("i",{class:"bi bi-arrow-right"}),y("Time Series Layers")],-1)),Re={class:"time-series-layers active",id:"timeSeriesLayers"},Ue={class:"layer-items"},Ze=["onChange"],et={class:"title-layer"},tt=["title"],st=L(()=>r("div",{class:"dwnld-layer"},[r("i",{class:"bi bi-box-arrow-down"})],-1)),at=["onClick"],it=L(()=>r("i",{class:"bi bi-info-square"},null,-1)),nt=[it],rt=L(()=>r("div",{class:"opct-layer"},[r("i",{class:"bi bi-brightness-high"})],-1)),lt={class:"opct-range-layer"},ot=["onChange"];function ct(e,a,s,i,t,l){return p(),m("div",Te,[y(u(s.child_msg)+" ",1),Ge,r("div",We,[(p(!0),m(B,null,D(s.layer_list.static,(n,o,c)=>(p(),m("div",{class:"static-layer layer-list",key:n.static},[r("div",je,[r("div",{class:M("chckbx-layer layer-static-"+c)},[r("input",{type:"checkbox",title:"set visible",name:"",id:"",class:M("layer-static-"+c),onChange:d=>l.setLayerVisible(d,1,c,"static",{key:o})},null,42,Oe)],2),r("div",Qe,[r("p",{title:o},u(o),9,Ye)]),$e,r("div",{class:"info-layer",onClick:d=>l.setLayerMetadata("static",{key:o})},Je,8,Fe),Xe,r("div",qe,[r("input",{type:"range",name:"",id:"",min:"0",max:"1",step:"0.01",value:"0.5",onChange:d=>l.setLayerOpacity(d,1,c)},null,40,ze)])])]))),128))]),Ke,r("div",Re,[(p(!0),m(B,null,D(s.layer_list.time,(n,o,c)=>(p(),m("div",{class:"time-series-layer layer-list",key:n.time},[r("div",Ue,[r("div",{class:M("chckbx-layer"+c)},[r("input",{type:"checkbox",title:"set visible",name:"",id:"",class:M("layer-timeSeries-"+c),onChange:d=>l.setLayerVisible(d,2,c,"time",{key:o})},null,42,Ze)],2),r("div",et,[r("p",{title:o},u(o),9,tt)]),st,r("div",{class:"info-layer",onClick:d=>l.setLayerMetadata("time",{key:o})},nt,8,at),rt,r("div",lt,[r("input",{type:"range",name:"",id:"",min:"0",max:"1",step:"0.01",value:"0.5",onChange:d=>l.setLayerOpacity(d,2,c)},null,40,ot)])])]))),128))])])}var dt=h(ke,[["render",ct],["__scopeId","data-v-3b7d1851"]]);const ut={name:"Layer",props:{child_msg:{type:String,required:!0,default:"Metadata Panel"},title:{type:String,required:!0,default:"Title"},abstract:{type:String,required:!0,default:"Select a layer"},typology:{type:String,required:!0,default:"N/A"},units:{type:String,required:!0,default:"N/A"},crs:{type:String,required:!0,default:"N/A"},to:{type:String,required:!0,default:"N/A"},tf:{type:String,required:!0,default:"N/A"},legend:{type:String,required:!0,default:"N/A"}},data(){return{}}},A=e=>(x("data-v-cf4a443c"),e=e(),C(),e),pt={id:"metadataPanel",class:"metadata-panel ol-unselectable ol-control"},mt={class:"panel-title"},_t={class:"meta-title"},gt={class:"meta-abstract"},yt=A(()=>r("strong",null,"Abstract:",-1)),ht={class:"meta-info"},vt={class:"meta-details"},At={class:"meta-details-typology"},ft=A(()=>r("strong",null,"Typology:",-1)),bt={class:"meta-details-units"},wt=A(()=>r("strong",null,"Units:",-1)),Lt={class:"meta-details-crs"},xt=A(()=>r("strong",null,"CRS:",-1)),Ct={class:"meta-details-tstart"},St=A(()=>r("strong",null,"Time Start:",-1)),It=A(()=>r("br",null,null,-1)),Et={class:"meta-details-tend"},Bt=A(()=>r("strong",null,"Time end:",-1)),Dt=A(()=>r("br",null,null,-1)),Mt={class:"meta-legend"},Pt=A(()=>r("div",null,[r("strong",null,"Legend:")],-1)),Vt={class:"meta-legend-image"},Nt=["src"];function kt(e,a,s,i,t,l){return p(),m("div",pt,[r("div",mt,u(s.child_msg),1),r("div",_t,[r("h6",null,u(s.title),1)]),r("div",gt,[yt,y(u(s.abstract),1)]),r("div",ht,[r("div",vt,[r("div",At,[ft,y(u(s.typology),1)]),r("div",bt,[wt,y(" ["+u(s.units)+"]",1)]),r("div",Lt,[xt,y(u(s.crs),1)]),r("div",Ct,[St,It,y(u(s.to),1)]),r("div",Et,[Bt,Dt,y(u(s.tf),1)])]),r("div",Mt,[Pt,r("div",Vt,[r("img",{src:s.legend,alt:""},null,8,Nt)])])])])}var Tt=h(ut,[["render",kt],["__scopeId","data-v-cf4a443c"]]);const Gt={name:"Time",props:{child_msg:{type:String,default:"Time Panel"},title:{type:String,required:!0,default:"Select Layer"},datesList:{type:Object,required:!0,default:()=>({"0":"Select TS"})},datesListLength:{type:String,required:!0},currentDate:{type:String,required:!0},currentDateIndex:{type:Number,required:!0},currentGroup:{type:Number,required:!0}},data(){return{}},methods:{updateLayerSlider(e){console.log(e);let a=e.target.value,s=parseInt(a),i=this.currentGroup+2,t=document.getElementById("dropdownDate");t.selectedIndex=a,this.cDate=this.datesList[a],this.cDateIndex=a,this.$emit("updateLayerSlider",{nGroup:i,emitDate:s})},updateLayerDropdown(e){let a=e.target.value,s=parseInt(a),i=this.currentGroup+2,t=document.getElementById("sliderDate");t.value=a,this.cDate=this.datesList[a],this.cDateIndex=a,this.$emit("updateLayerDropdown",{nGroup:i,emitDate:s})},stepBackwards(){let e=document.getElementById("sliderDate").value,a=e-1,s=e-1,i=this.currentGroup+2;e-1>=0?(this.cDate=this.datesList[s],this.cDateIndex=s,document.getElementById("dropdownDate").selectedIndex=s,document.getElementById("sliderDate").value=s,this.$emit("updateLayerDropdown",{nGroup:i,emitDate:a})):alert("There are no previous maps for the current layer")},stepForwards(){let e=document.getElementById("dropdownDate").value,a=Number(e)+1,s=Number(e)+1,i=this.currentGroup+2;Number(e)+1<=this.datesListLength-1?(this.cDate=this.datesList[s],this.cDateIndex=s,document.getElementById("dropdownDate").selectedIndex=s,document.getElementById("sliderDate").value=s,this.$emit("updateLayerDropdown",{nGroup:i,emitDate:a})):alert("There are no later maps for the current layer")}}},Z=e=>(x("data-v-0b528842"),e=e(),C(),e),Wt={id:"timePanel",class:"time-panel ol-unselectable ol-control"},jt={class:"time-container"},Ot={class:"time-header"},Qt={class:"time-controls"},Yt={class:"time-controls-dates"},$t=["value","selected"],Ft={class:"time-slider"},Ht=["max","value"],Jt={id:"time-controls-backward",class:"time-controls_item ol-unselectable ol-control"},Xt=Z(()=>r("i",{class:"bi bi-skip-backward-circle"},null,-1)),qt=[Xt],zt={id:"time-controls-forward",class:"time-controls_item ol-unselectable ol-control"},Kt=Z(()=>r("i",{class:"bi bi-skip-forward-circle"},null,-1)),Rt=[Kt];function Ut(e,a,s,i,t,l){return p(),m("div",Wt,[r("p",null,u(s.child_msg),1),r("div",jt,[r("div",Ot,[r("strong",null,u(s.title),1)]),r("div",Qt,[r("div",Yt,[r("select",{name:"",id:"dropdownDate",onChange:a[0]||(a[0]=n=>l.updateLayerDropdown(n))},[(p(!0),m(B,null,D(s.datesList,(n,o)=>(p(),m("option",{value:o,selected:s.datesListLength,key:o},u(s.datesList[o]),9,$t))),128))],32)]),r("div",Ft,[r("input",{type:"range",name:"",id:"sliderDate",min:"0",max:s.datesListLength-1,value:s.currentDateIndex,step:"1",onChange:a[1]||(a[1]=n=>l.updateLayerSlider(n))},null,40,Ht)]),r("div",Jt,[r("button",{class:"time-panel-control-button",onClick:a[2]||(a[2]=(...n)=>l.stepBackwards&&l.stepBackwards(...n))},qt)]),r("div",zt,[r("button",{class:"time-panel-control-button",onClick:a[3]||(a[3]=(...n)=>l.stepForwards&&l.stepForwards(...n))},Rt)])])])])}var Zt=h(Gt,[["render",Ut],["__scopeId","data-v-0b528842"]]),es="/assets/osm.d6d13acb.png",ts="/assets/terrain.d843a7bb.png",ss="/assets/watercolor.8d0c5f2f.png",as="/assets/toner.19bbfbf8.png",is="data:image/png;base64,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";const ns={name:"Basemap",props:{child_msg:{type:String,default:"Basemap Panel"},data:{type:Array},layer_list:{type:Object,require:!0}},data(){return{}},methods:{getImage(e){if(e=="osm")return es;if(e=="terrain")return ts;if(e=="watercolor")return ss;if(e=="toner")return as;if(e=="none")return is},setLayerVisible(e,a){this.$emit("setLayerVisible",{nGroup:e,index:a})}}},rs={id:"basemapPanel",class:"basemap-panel ol-unselectable ol-control"},ls={class:"basemap-container"},os=["id","checked","onChange"],cs=["src"];function ds(e,a,s,i,t,l){return p(),m("div",rs,[r("p",null,u(s.child_msg),1),r("div",ls,[(p(!0),m(B,null,D(s.data,(n,o)=>(p(),m("div",{key:n.layer,class:"basemap-container_item"},[r("div",null,[r("input",{type:"radio",name:"basemap-radio",id:n.layer+"-option",class:M("basemap-option"),checked:n.active,onChange:c=>l.setLayerVisible(0,o)},null,40,os),r("p",null,u(n.layer),1)]),r("img",{src:l.getImage(n.layer),alt:""},null,8,cs)]))),128))])])}var us=h(ns,[["render",ds],["__scopeId","data-v-26d54738"]]);const ps={name:"Plot",props:{child_msg:{type:String,default:"Plot Panel"}},data(){return{}},mounted(){var e={top:10,right:30,bottom:30,left:60},a=$(".svg-container").parent().width(),s=$(".svg-container").parent().height()-80,i=d3.select(".svg-container").append("svg").attr("width",a+e.left+e.right).attr("height",s+e.top+e.bottom).append("g").attr("transform","translate("+e.left+","+e.top+")");d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/connectedscatter.csv",function(t){return{date:d3.timeParse("%Y-%m-%d")(t.date),value:t.value}},function(t){var l=d3.scaleTime().domain(d3.extent(t,function(o){return o.date})).range([0,a]);i.append("g").attr("transform","translate(0,"+s+")").call(d3.axisBottom(l));var n=d3.scaleLinear().domain([8e3,9200]).range([s,0]);i.append("g").call(d3.axisLeft(n)),i.append("path").datum(t).attr("fill","none").attr("stroke","#69b3a2").attr("stroke-width",1.5).attr("d",d3.line().x(function(o){return l(o.date)}).y(function(o){return n(o.value)})),i.append("g").selectAll("dot").data(t).enter().append("circle").attr("cx",function(o){return l(o.date)}).attr("cy",function(o){return n(o.value)}).attr("r",5).attr("fill","#69b3a2")})}},ms=e=>(x("data-v-636acc4b"),e=e(),C(),e),_s={id:"plotPanel",class:"plot-panel ol-unselectable ol-control"},gs=ms(()=>r("div",{class:"svg-container"},null,-1));function ys(e,a,s,i,t,l){return p(),m("div",_s,[y(u(s.child_msg)+" ",1),gs])}var hs=h(ps,[["render",ys],["__scopeId","data-v-636acc4b"]]),vs="/assets/i1.39c6eac4.png",As="/assets/i2.52627267.png",fs="/assets/i3.e76ce568.png",bs="/assets/i4.df51a994.png",ws="/assets/i5.9255129d.png",Ls="/assets/i6.c99fefa1.png",xs="/assets/i7.1425b493.png";const Cs={data(){return{}},methods:{prev(){this.$emit("prev")},next(){this.$emit("next")}}},ee=e=>(x("data-v-07c985f2"),e=e(),C(),e),Ss={class:"carousel-container"},Is=ee(()=>r("i",{class:"bi bi-caret-left-fill"},null,-1)),Es=[Is],Bs=ee(()=>r("i",{class:"bi bi-caret-right-fill"},null,-1)),Ds=[Bs];function Ms(e,a,s,i,t,l){return p(),m("div",Ss,[K(e.$slots,"default",{},void 0,!0),r("button",{class:"prev",onClick:a[0]||(a[0]=(...n)=>l.prev&&l.prev(...n))},Es),r("button",{class:"next",onClick:a[1]||(a[1]=(...n)=>l.next&&l.next(...n))},Ds)])}var Ps=h(Cs,[["render",Ms],["__scopeId","data-v-07c985f2"]]);const Vs={props:["visibleSlide","index","direction"],data(){return{}}},Ns={class:"carousel-slide"};function ks(e,a,s,i,t,l){return p(),j(pe,{name:s.direction},{default:O(()=>[de(r("div",Ns,[K(e.$slots,"default",{},void 0,!0)],512),[[ue,s.visibleSlide===s.index]])]),_:3},8,["name"])}var Ts=h(Vs,[["render",ks],["__scopeId","data-v-664b1638"]]);const Gs={name:"Slide",props:{child_msg:{type:String,default:"Slide Panel"},settings:{type:Object}},data(){return{visibleSlide:0,direction:""}},computed:{slidesLen(){return this.settings.slides.length}},methods:{prev(){this.visibleSlide<=0?this.visibleSlide=this.slidesLen-1:this.visibleSlide--,this.direction="right"},next(){this.visibleSlide>=this.slidesLen-1?this.visibleSlide=0:this.visibleSlide++,this.direction="left"},getImage(e){if(e=="i1.png")return vs;if(e=="i2.png")return As;if(e=="i3.png")return fs;if(e=="i4.png")return bs;if(e=="i5.png")return ws;if(e=="i6.png")return Ls;if(e=="i7.png")return xs}},mounted(){},components:{CarouselContainer:Ps,CarouselSlide:Ts}},Ws=e=>(x("data-v-339db63c"),e=e(),C(),e),js={id:"slidePanel",class:"slide-panel ol-unselectable ol-control",style:{display:"none"}},Os={class:"slidepanel-show"},Qs={class:"slide-title"},Ys={class:"slide-description"},$s=["src","alt"],Fs=Ws(()=>r("div",{class:"slide-current"},null,-1));function Hs(e,a,s,i,t,l){const n=v("carousel-slide"),o=v("carousel-container");return p(),m("div",js,[y(u(s.child_msg)+" ",1),r("div",Os,[w(o,{onPrev:l.prev,onNext:l.next},{default:O(()=>[(p(!0),m(B,null,D(s.settings.slides,(c,d)=>(p(),j(n,{key:c,index:d,visibleSlide:t.visibleSlide,direction:t.direction},{default:O(()=>[r("div",Qs,u(c.title),1),r("div",Ys,u(c.description),1),r("img",{src:l.getImage(c.src),alt:d},null,8,$s)]),_:2},1032,["index","visibleSlide","direction"]))),128))]),_:1},8,["onPrev","onNext"])]),Fs])}var Js=h(Gs,[["render",Hs],["__scopeId","data-v-339db63c"]]);const Xs={setup(){},data:function(){return{}},props:{map:{type:Object,required:!0},title:{type:String,required:!0,default:"Select layer"},evtCoordinate:{type:String,required:!0,default:"Select layer"},pixelCoordinate:{type:String,required:!0,default:"click-on map"},pixelInfo:{type:String,required:!0,default:"N/A"},pixelUnits:{type:String,required:!0,default:"N/A"}}},qs=e=>(x("data-v-3ecc9474"),e=e(),C(),e),zs={id:"popup",class:"ol-popup"},Ks={id:"popup-title"},Rs=qs(()=>r("a",{href:"#",id:"popup-closer",class:"ol-popup-closer"},null,-1)),Us={id:"popup-info"},Zs={id:"popup-getinfo"},ea={id:"popup-coordinate"};function ta(e,a,s,i,t,l){return p(),m("div",zs,[r("div",Ks,u(s.title),1),Rs,r("div",Us,[r("div",Zs,"Value: "+u(s.pixelInfo)+" "+u(s.pixelUnits),1),r("div",ea,"Coordinates: "+u(s.pixelCoordinate),1)])])}var sa=h(Xs,[["render",ta],["__scopeId","data-v-3ecc9474"]]),aa="/assets/chl_legend.60bb7d0f.png",ia="/assets/tsm_legend.d3624ad5.png",na="/assets/lswt_legend.56275681.png";const ra=new q,la={name:"WebGISContainer",data(){return{basemap_settings:this.settings.basemaps,layer_list:{},layer_groups:{},map:{},title:"Select a Layer",typology:"N/A",abstract:"N/A",to:"N/A",tf:"N/A",crs:"N/A",units:"N/A",legend:"N/A",datesList:{},currentGroup:"",currentDate:"",currentDateIndex:"",datesListLength:"",noGetinfo:0}},props:{settings:{type:Object,required:!0}},components:{layerPanel:dt,metadataPanel:Tt,timePanel:Zt,basemapPanel:us,plotPanel:hs,slidePanel:Js,popUp:sa},methods:{setLayerVisible(e){let a=e.index,s=e.nGroup;if(s==0){let i=this.map.getLayers().array_[s].values_.layers.array_;i.forEach((t,l)=>{a!=l||i.length<a?t.setVisible(!1):t.setVisible(!0)})}else if(s==1){let i=this.map.getLayers().array_[s].values_.layers.array_[a].getVisible();this.map.getLayers().array_[s].values_.layers.array_[a].setVisible(!i)}else{let t=this.map.getLayers().array_[s+a].values_.layers.array_.length-1,l=this.map.getLayers().array_[s+a].values_.layers.array_,n=0;l.forEach((o,c)=>{let d=this.map.getLayers().array_[s+a].values_.layers.array_[c].getVisible();if(o.getVisible()==!0&&c!=t)return this.map.getLayers().array_[s+a].values_.layers.array_[c].setVisible(!d),n++,!1;n==0&&c==t&&(this.map.getLayers().array_[s+a].values_.layers.array_[t].setVisible(!d),this.currentDate=o.date)})}},setLayerVisibleTS(e){let a=e.nGroup,s=e.emitDate;this.map.getLayers().array_[a].values_.layers.array_.forEach((t,l)=>{s==l?t.setVisible(!0):t.setVisible(!1)})},setLayerOpacity(e){let a=e.opacity,s=e.index,i=e.nGroup;if(i<=1)this.map.getLayers().array_[i].values_.layers.array_[s].getVisible()==!0?(this.map.getLayers().array_[i].values_.layers.array_[s].setVisible(!1),this.map.getLayers().array_[i].values_.layers.array_[s].values_.opacity=a,this.map.getLayers().array_[i].values_.layers.array_[s].setVisible(!0)):this.map.getLayers().array_[i].values_.layers.array_[s].values_.opacity=a;else{let t=this.map.getLayers().array_[i+s];t.getVisible()==!0?(t.setVisible(!1),t.values_.opacity=a,t.setVisible(!0)):t.values_.opacity=a}},setLayerMetadata(e){let a=e.layerType,s=e.layerName.key,i=this.layer_list[a][s];if(this.title=s,a=="time"){let t=i.typology,l=i.timeFormatted;this.typology=t,this.abstract=this.settings.typology[t].abstract,this.units=this.settings.typology[t].units,this.crs=i.crs,this.typology=="CHL"?this.legend=aa:this.typology=="TSM"?this.legend=ia:this.legend=na,this.to=l[0],this.tf=l[l.length-1],this.datesList=this.layer_list.time[s].timeFormatted,this.currentDate=this.datesList[Object.keys(this.datesList).length-1],this.currentDateIndex=Object.keys(this.datesList).length,this.datesListLength=Object.keys(this.datesList).length,this.currentGroup=Object.keys(this.layer_list.time).indexOf(s)}$(".metadata-panel").addClass("active"),$(".metadata-panel").css("display","block"),a=="time"&&($(".time-panel").addClass("active"),$(".time-panel").css("display","block"),$(".show-metadata").addClass("active"),$(".show-time").addClass("active"))},downloadData(){}},mounted(){this.basemap_settings=this.settings.basemaps,me.get(this.settings.urlWMSget).then(e=>{let s=ra.read(e.data).Capability.Layer.Layer,i=Pe(s,this.settings.typology,this.settings.urlWMS);Ve(i);let t=U(i);this.layer_list=i,this.layer_group=t;let l={};for(let[o,c]of Object.entries(i.time)){let d=o.split("_").splice(0,2).join("_");d in Object.keys(l)||(l[d]=c)}return this.layer_list.time=l,l=this.layer_list,{layers_groups_reduced:U(l),layers_dict_reduced:l}}).then(e=>{const a=e.layers_groups_reduced,s=e.layers_dict_reduced,i=Me();for(let g in a)for(let S in a[g])i.addLayer(a[g][S]);this.map=i;const t=document.getElementById("popup"),l=document.getElementById("popup-title"),n=document.getElementById("popup-coordinate"),o=document.getElementById("popup-getinfo"),c=document.getElementById("popup-closer"),d=new _e({element:t,autoPan:{animation:{duration:250}}});c.onclick=function(){return d.setPosition(void 0),c.blur(),!1},i.addControl(d);const V=this.map.getView().getResolution();i.on("singleclick",function(g){const S=g.coordinate,N=ge(ye(S));n.innerHTML="<p>Coordinate: </p><code>"+N+"</code>",d.setPosition(S);const k=i.getEventPixel(g.originalEvent);let T=[];this.noGetinfo=0,i.forEachLayerAtPixel(k,function(f,ga){if(f.title!="basemap"){var b=f.values_.source.getFeatureInfoUrl(g.coordinate,V,"EPSG:3857",{INFO_FORMAT:"application/json"}),b="/geoserver/"+b.split("/")[b.split("/").length-1];if(console.log(b),b){const te=new Request(b);fetch(te).then(I=>I.json()).then(I=>{o.innerHTML="<p>Value: </p><code>"+I.features[0].properties.GRAY_INDEX.toFixed(2)+" "+f.units+"</code>",l.innerHTML="<p>"+f.name.split("_").splice(0,2).join("_")+":"+f.date+"</p>"});let se=f.name.split("_").splice(0,2).join("_");f.name.split("_")[2],s[f.title][se].layer.forEach(I=>{var F=I.values_.source.getFeatureInfoUrl(g.coordinate,V,"EPSG:3857",{INFO_FORMAT:"application/json"}),F="/geoserver/"+b.split("/")[b.split("/").length-1];let ae=fetch(F).then(G=>G.json()).then(G=>{let H=G.features[0];if(H!=null){let J=H.properties.GRAY_INDEX;if(J!=null)return{Date:I.date,Value:J.toFixed(2)}}});T.push(ae)}),Ne(T)}}else o.innerHTML="<p>Value: </p><code>N/A</code>",l.innerHTML="Click on a layer"})}),i.on("pointermove",function(g){if(g.dragging)return;const S=i.getEventPixel(g.originalEvent),N=i.forEachLayerAtPixel(S,function(k,T){if(k.title!="basemap")return!0});i.getTargetElement().style.cursor=N?"pointer":""})}).catch(e=>console.log("No layers have been found in the site url"))}},oa=r("div",{id:"map",class:"map"},null,-1);function ca(e,a,s,i,t,l){const n=v("layerPanel"),o=v("metadataPanel"),c=v("timePanel"),d=v("basemapPanel"),Y=v("slidePanel"),V=v("plotPanel"),g=v("popUp");return p(),m("div",null,[oa,w(n,{child_msg:"Layer-Panel",layer_list:t.layer_list,onSetLayerVisible:l.setLayerVisible,onSetLayerOpacity:l.setLayerOpacity,onSetLayerMetadata:l.setLayerMetadata},null,8,["layer_list","onSetLayerVisible","onSetLayerOpacity","onSetLayerMetadata"]),w(o,{child_msg:"Metadata-Panel",settings:s.settings,title:t.title,abstract:t.abstract,to:t.to,tf:t.tf,typology:t.typology,units:t.units,crs:t.crs,legend:t.legend},null,8,["settings","title","abstract","to","tf","typology","units","crs","legend"]),w(c,{child_msg:"Time-Panel",title:t.title,datesList:t.datesList,datesListLength:t.datesListLength,currentDate:t.currentDate,currentDateIndex:t.currentDateIndex,currentGroup:t.currentGroup,onUpdateLayerSlider:l.setLayerVisibleTS,onUpdateLayerDropdown:l.setLayerVisibleTS,onStepBackwards:l.setLayerVisibleTS,onStepForwards:l.setLayerVisibleTS},null,8,["title","datesList","datesListLength","currentDate","currentDateIndex","currentGroup","onUpdateLayerSlider","onUpdateLayerDropdown","onStepBackwards","onStepForwards"]),w(d,{child_msg:"Basemap-Panel",data:t.basemap_settings,layer_list:t.layer_list,onSetLayerVisible:l.setLayerVisible},null,8,["data","layer_list","onSetLayerVisible"]),w(Y,{child_msg:"Slide-Panel",settings:s.settings},null,8,["settings"]),w(V,{child_msg:"Plot-Panel"}),w(g)])}var da=h(la,[["render",ca]]);const ua={urlWMS:"http://www.geonode.eo.simile.polimi.it/geoserver/geonode/wms",urlWMSget:"http://www.webgis.eo.simile.polimi.it/api/getLayers",typology:{CHL:{title:"Chlorophyll-a",abstract:"Chlorophyll-a allows plants to photosintezise. This measurement is used to classify the trophic conditionof a water body. The Chlorophyll-a maps presented have been processed using the Sentinel-3 OLCI sensor",style:"chl",units:"mg/m3"},TSM:{title:"Total Suspended Matter",abstract:"Total suspended matter concentration",style:"tsm",units:"g/m3"},LSWT:{title:"Lake Surface Water Temperature",abstract:"Average lake surface temperature",style:"lswt",units:"\xB0C"}},basemaps:[{layer:"osm",source:"osm",src:"osm.png",active:!0},{layer:"terrain",source:"terrain-labels",src:"terrain.png",active:!1},{layer:"toner",source:"toner",src:"toner.png",active:!1},{layer:"none",source:"none",src:"none.png",active:!1}],slides:[{title:"Welcome!",src:"i1.png",description:"1. SIMILE WebGIS enables the visualization of the water quality parameters (WQPs) maps produced for Lakes Maggiore, Lugano and Como."},{title:"Explore the different tools",src:"i2.png",description:"2. The WebGIS presents multtiple panels allowing to explore the different water quality parameters maps"},{title:"Visualize and explore the WQP",src:"i3.png",description:"3. Review the different components allowing the visualization of the maps, such as the layer panel, metadata panel and time controller"},{title:"Observe the evolution of the time series",src:"i4.png",description:"4. Use the time manager to observe the changes of the parameters in time."},{title:"Observe the evolution of the time series",src:"i5.png",description:"4. Use the time manager to observe the changes of the parameters in time."},{title:"Change the basemap",src:"i6.png",description:"5. Customize the view of the WebGIS by using different basemaps"},{title:"Explore the guide",src:"i7.png",description:"6. Review the guide for the WebGIS"}]};const pa={name:"App",data(){return{settings:ua}},components:{WebGISContainer:da}};function ma(e,a,s,i,t,l){const n=v("WebGISContainer");return p(),j(n,{settings:t.settings},null,8,["settings"])}var _a=h(pa,[["render",ma],["__scopeId","data-v-5b99cd36"]]);he(_a).mount("#app");
//# sourceMappingURL=index.3876ff91.js.map
