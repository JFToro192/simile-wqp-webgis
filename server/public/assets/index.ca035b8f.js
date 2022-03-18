import{C as _,O as J,a as ae,T as I,M as ie,d as ne,S as re,V as le,W as X,b as q,L as W,c as oe,o as p,e as m,f as y,t as u,g as r,F as E,r as B,p as L,h as x,n as D,i as z,j,w as O,k as ce,v as de,l as ue,m as v,q as b,s as pe,u as me,x as _e,y as ge,z as ye}from"./vendor.eedb9b49.js";const he=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(t){if(t.ep)return;t.ep=!0;const l=s(t);fetch(t.href,l)}};he();var ve="/assets/assev_simile.d3f83cf6.png";function Ae(){const e="."+this.element.classList[0],a="."+e.split("-")[1]+"-item",s=$(e);s.hasClass("active")?($(`${a}`).slice(0).hide(),s.removeClass("active")):($(`${a}`).slice(0).show(),s.addClass("active"))}function M(){const e="."+this.element.classList[0],a="."+e.split("-")[1]+"-panel",s=$(e),i=$(a);i.hasClass("active")?(i.hide(),s.removeClass("active"),i.removeClass("active")):(i.show(),s.addClass("active"),i.addClass("active"))}class fe extends _{constructor(a){const s=a||{},i=document.createElement("button");i.innerHTML='<i class="bi bi-list"></i>';const t=document.createElement("div");t.className="show-burger ol-unselectable ol-control control-bar active",t.appendChild(i);super({element:t,target:s.target});t.addEventListener("click",Ae.bind(this),!1)}}class be extends _{constructor(a){const s=a||{},i=document.createElement("button");i.innerHTML='<i class="bi bi-stack"></i>',i.title="layers panel";const t=document.createElement("div");t.className="show-layer ol-unselectable ol-control control-bar burger-item",t.appendChild(i);super({element:t,target:s.target});t.addEventListener("click",M.bind(this),!1)}}class we extends _{constructor(a){const s=a||{},i=document.createElement("button");i.innerHTML='<i class="bi bi-info-square"></i>',i.title="metadata panel";const t=document.createElement("div");t.className="show-metadata ol-unselectable ol-control control-bar burger-item",t.appendChild(i);super({element:t,target:s.target});t.addEventListener("click",M.bind(this),!1)}}class Le extends _{constructor(a){const s=a||{},i=document.createElement("button");i.innerHTML='<i class="bi bi-clock-history"></i>',i.title="time panel";const t=document.createElement("div");t.className="show-time ol-unselectable ol-control control-bar burger-item",t.appendChild(i);super({element:t,target:s.target});t.addEventListener("click",M.bind(this),!1)}}class xe extends _{constructor(a){const s=a||{},i=document.createElement("button");i.innerHTML='<i class="bi bi-map"></i>',i.title="basemaps";const t=document.createElement("div");t.className="show-basemap ol-unselectable ol-control control-bar burger-item",t.appendChild(i);super({element:t,target:s.target});t.addEventListener("click",M.bind(this),!1)}}class Ce extends _{constructor(a){const s=a||{},i=document.createElement("button");i.innerHTML='<i class="bi bi-file-earmark-easel"></i>',i.title="webgis guide";const t=document.createElement("div");t.className="show-slide ol-unselectable ol-control control-bar burger-item",t.appendChild(i);super({element:t,target:s.target});t.addEventListener("click",M.bind(this),!1)}}class Se extends _{constructor(a){const s=a||{},i=document.createElement("button");i.innerHTML='<a href="https://www.geonode.eo.simile.polimi.it/"><i class="bi bi-people-fill"></i></a>',i.src=i.title="GeoNode";const t=document.createElement("div");t.className="show-geonode ol-unselectable ol-control control-bar",t.appendChild(i);super({element:t,target:s.target})}}class Ie extends _{constructor(a){const s=a||{},i=document.createElement("div"),t=document.createElement("a");t.href="https://www.progetti.interreg-italiasvizzera.eu/it/b/78/sistemainformativoperilmonitoraggiointegratodeilaghiinsubriciedeiloroe";const l=document.createElement("img");l.src=ve,l.alt="logo-simile-interreg",t.appendChild(l),i.appendChild(t);const n=document.createElement("div");n.className="project-logo ol-unselectable ol-control",n.appendChild(i);super({element:n,target:s.target})}}const Ee=new J,Be=new ae({layers:[new I({source:Ee})]});function De(){return new ie({target:"map",controls:ne().extend([new re,Be,new fe,new be,new we,new Le,new xe,new Ce,new Ie,new Se]),view:new le({center:[994904.36016,5775887605341e-6],zoom:10})})}new _({element:document.getElementById("layerPanel")});new _({element:document.getElementById("metadataPanel")});new _({element:document.getElementById("timePanel")});new _({element:document.getElementById("basemapPanel")});new _({element:document.getElementById("plotPanel")});new _({element:document.getElementById("slidePanel")});new _({element:document.getElementById("popup")});new X;function Q(e,a,s,i){return new I({source:new oe({url:a,params:{LAYERS:e,TILED:!0,STYLES:i},serverType:"geoserver"}),visible:!1,opacity:s})}function K(e,a){return e[a.name]={},e[a.name].workspace=a.workspace,e[a.name].typology=a.typology,e[a.name].crs=a.crs,e[a.name].sensor=a.sensor,e[a.name].timeComplete=[a.timeComplete],e[a.name].timeFormatted=[a.timeFormatted],e[a.name].level=a.level,e[a.name].layer=[a.layer],e}function Me(e,a,s){let i=Object.keys(a),t={};return t.static={},t.time={},t.basemap={},e.forEach(l=>{let n={},o=l.Name.split(":");if(n.workspace=o[0],n.name=o[1].split("_").slice(0,3).join("_"),n.sensor=o[1].split("_")[0],n.typology=o[1].split("_")[1],n.crs=o[1].split("_")[2],o[1].split("_")[3]!=null){n.timeComplete=o[1].split("_")[3];let d=o[1].split("_")[3].split("T")[0];n.timeFormatted=d.slice(0,4)+"-"+d.slice(4,6)+"-"+d.slice(6,8)}else n.timeComplete=void 0,n.timeFormatted=void 0;n.level=o[1].split("_")[4];let c="";i.includes(n.typology)&&(c=n.typology.toLowerCase()),n.layer=Q(l.Name,s,.5,c),n.timeComplete!=null?n.name in t.time?(n.layer=Q(l.Name,s,1,c),n.layer.title="time",n.layer.date=n.timeFormatted,n.layer.name=n.name,n.name.split("_")[1]=="LSWT"?n.layer.units="[\xB0C]":n.name.split("_")[1]=="CHL"?n.layer.units="[mg/m3]":n.name.split("_")[1]=="TSM"&&(n.layer.units="[g/m3]"),t.time[n.name].timeComplete.push(n.timeComplete),t.time[n.name].timeFormatted.push(n.timeFormatted),t.time[n.name].layer.push(n.layer)):(n.layer=Q(l.Name,s,1),n.layer.title="time",n.layer.name=n.name,n.layer.date=n.timeFormatted,n.name.split("_")[1]=="LSWT"?n.layer.units="[\xB0C]":n.name.split("_")[1]=="CHL"?n.layer.units="[mg/m3]":n.name.split("_")[1]=="TSM"&&(n.layer.units="[g/m3]"),t.time=K(t.time,n)):t.static=K(t.static,n)}),t}function Pe(e){let a={osm:{title:"osm",layer:[new I({source:new J,visible:!0})]},terrain:{title:"terrain",source:"Stamen",layer:[new I({source:new q({layer:"terrain"}),visible:!1})]},toner:{title:"toner",source:"Stamen",layer:[new I({source:new q({layer:"toner"}),visible:!1})]}};return e.basemap=a,e}function R(e){let a={},s=[],i=[],t=[],l=[],n=[];for(let o in e)if(o=="time")for(let c in e[o]){let d=e[o][c].layer;n.push(new W({layers:d,visible:!0,opacity:.5}))}else{for(let c in e[o])if(o=="basemap"){let d=e[o][c].layer[0];d.title="basemap",s.push(d)}else if(o=="static"){let d=e[o][c].layer[0];d.title="static",i.push(d)}l[0]=new W({layers:i,visible:!0,opacity:1}),t[0]=new W({layers:s,visible:!0,opacity:1})}return a.basemap=t,a.static=l,a.time=n,a}function Ve(e){e.forEach(a=>{a.then(s=>{})})}var h=(e,a)=>{const s=e.__vccOpts||e;for(const[i,t]of a)s[i]=t;return s};const Ne={name:"Layer",props:{child_msg:{type:String,default:"Layer Panel"},layer_list:{type:Object}},data(){return{}},methods:{setLayerVisible(e,a,s,i,t){this.$emit("setLayerVisible",{nGroup:a,index:s}),e.target.checked&&this.setLayerMetadata(i,t)},setLayerOpacity(e,a,s){let i=e.target.value;this.$emit("setLayerOpacity",{opacity:i,nGroup:a,index:s})},setLayerMetadata(e,a){this.$emit("setLayerMetadata",{layerType:e,layerName:a})}}},w=e=>(L("data-v-3b7d1851"),e=e(),x(),e),ke={id:"layerPanel",class:"layer-panel ol-unselectable ol-control"},Te=w(()=>r("h6",{class:"static-layers-title"},[r("i",{class:"bi bi-arrow-right"}),y("Static Layers")],-1)),Ge={class:"static-layers active",id:"staticLayers"},We={class:"layer-items"},je=["onChange"],Oe={class:"title-layer"},Qe=["title"],Ye=w(()=>r("div",{class:"dwnld-layer"},[r("i",{class:"bi bi-box-arrow-down"})],-1)),$e=["onClick"],Fe=w(()=>r("i",{class:"bi bi-info-square"},null,-1)),He=[Fe],Je=w(()=>r("div",{class:"opct-layer"},[r("i",{class:"bi bi-brightness-high"})],-1)),Xe={class:"opct-range-layer"},qe=["onChange"],ze=w(()=>r("h6",{class:"time-series-layers-title"},[r("i",{class:"bi bi-arrow-right"}),y("Time Series Layers")],-1)),Ke={class:"time-series-layers active",id:"timeSeriesLayers"},Re={class:"layer-items"},Ue=["onChange"],Ze={class:"title-layer"},et=["title"],tt=w(()=>r("div",{class:"dwnld-layer"},[r("i",{class:"bi bi-box-arrow-down"})],-1)),st=["onClick"],at=w(()=>r("i",{class:"bi bi-info-square"},null,-1)),it=[at],nt=w(()=>r("div",{class:"opct-layer"},[r("i",{class:"bi bi-brightness-high"})],-1)),rt={class:"opct-range-layer"},lt=["onChange"];function ot(e,a,s,i,t,l){return p(),m("div",ke,[y(u(s.child_msg)+" ",1),Te,r("div",Ge,[(p(!0),m(E,null,B(s.layer_list.static,(n,o,c)=>(p(),m("div",{class:"static-layer layer-list",key:n.static},[r("div",We,[r("div",{class:D("chckbx-layer layer-static-"+c)},[r("input",{type:"checkbox",title:"set visible",name:"",id:"",class:D("layer-static-"+c),onChange:d=>l.setLayerVisible(d,1,c,"static",{key:o})},null,42,je)],2),r("div",Oe,[r("p",{title:o},u(o),9,Qe)]),Ye,r("div",{class:"info-layer",onClick:d=>l.setLayerMetadata("static",{key:o})},He,8,$e),Je,r("div",Xe,[r("input",{type:"range",name:"",id:"",min:"0",max:"1",step:"0.01",value:"0.5",onChange:d=>l.setLayerOpacity(d,1,c)},null,40,qe)])])]))),128))]),ze,r("div",Ke,[(p(!0),m(E,null,B(s.layer_list.time,(n,o,c)=>(p(),m("div",{class:"time-series-layer layer-list",key:n.time},[r("div",Re,[r("div",{class:D("chckbx-layer"+c)},[r("input",{type:"checkbox",title:"set visible",name:"",id:"",class:D("layer-timeSeries-"+c),onChange:d=>l.setLayerVisible(d,2,c,"time",{key:o})},null,42,Ue)],2),r("div",Ze,[r("p",{title:o},u(o),9,et)]),tt,r("div",{class:"info-layer",onClick:d=>l.setLayerMetadata("time",{key:o})},it,8,st),nt,r("div",rt,[r("input",{type:"range",name:"",id:"",min:"0",max:"1",step:"0.01",value:"0.5",onChange:d=>l.setLayerOpacity(d,2,c)},null,40,lt)])])]))),128))])])}var ct=h(Ne,[["render",ot],["__scopeId","data-v-3b7d1851"]]);const dt={name:"Layer",props:{child_msg:{type:String,required:!0,default:"Metadata Panel"},title:{type:String,required:!0,default:"Title"},abstract:{type:String,required:!0,default:"Select a layer"},typology:{type:String,required:!0,default:"N/A"},units:{type:String,required:!0,default:"N/A"},crs:{type:String,required:!0,default:"N/A"},to:{type:String,required:!0,default:"N/A"},tf:{type:String,required:!0,default:"N/A"},legend:{type:String,required:!0,default:"N/A"}},data(){return{}}},A=e=>(L("data-v-cf4a443c"),e=e(),x(),e),ut={id:"metadataPanel",class:"metadata-panel ol-unselectable ol-control"},pt={class:"panel-title"},mt={class:"meta-title"},_t={class:"meta-abstract"},gt=A(()=>r("strong",null,"Abstract:",-1)),yt={class:"meta-info"},ht={class:"meta-details"},vt={class:"meta-details-typology"},At=A(()=>r("strong",null,"Typology:",-1)),ft={class:"meta-details-units"},bt=A(()=>r("strong",null,"Units:",-1)),wt={class:"meta-details-crs"},Lt=A(()=>r("strong",null,"CRS:",-1)),xt={class:"meta-details-tstart"},Ct=A(()=>r("strong",null,"Time Start:",-1)),St=A(()=>r("br",null,null,-1)),It={class:"meta-details-tend"},Et=A(()=>r("strong",null,"Time end:",-1)),Bt=A(()=>r("br",null,null,-1)),Dt={class:"meta-legend"},Mt=A(()=>r("div",null,[r("strong",null,"Legend:")],-1)),Pt={class:"meta-legend-image"},Vt=["src"];function Nt(e,a,s,i,t,l){return p(),m("div",ut,[r("div",pt,u(s.child_msg),1),r("div",mt,[r("h6",null,u(s.title),1)]),r("div",_t,[gt,y(u(s.abstract),1)]),r("div",yt,[r("div",ht,[r("div",vt,[At,y(u(s.typology),1)]),r("div",ft,[bt,y(" ["+u(s.units)+"]",1)]),r("div",wt,[Lt,y(u(s.crs),1)]),r("div",xt,[Ct,St,y(u(s.to),1)]),r("div",It,[Et,Bt,y(u(s.tf),1)])]),r("div",Dt,[Mt,r("div",Pt,[r("img",{src:s.legend,alt:""},null,8,Vt)])])])])}var kt=h(dt,[["render",Nt],["__scopeId","data-v-cf4a443c"]]);const Tt={name:"Time",props:{child_msg:{type:String,default:"Time Panel"},title:{type:String,required:!0,default:"Select Layer"},datesList:{type:Object,required:!0,default:()=>({"0":"Select TS"})},datesListLength:{type:String,required:!0},currentDate:{type:String,required:!0},currentDateIndex:{type:Number,required:!0},currentGroup:{type:Number,required:!0}},data(){return{}},methods:{updateLayerSlider(e){console.log(e);let a=e.target.value,s=parseInt(a),i=this.currentGroup+2,t=document.getElementById("dropdownDate");t.selectedIndex=a,this.cDate=this.datesList[a],this.cDateIndex=a,this.$emit("updateLayerSlider",{nGroup:i,emitDate:s})},updateLayerDropdown(e){let a=e.target.value,s=parseInt(a),i=this.currentGroup+2,t=document.getElementById("sliderDate");t.value=a,this.cDate=this.datesList[a],this.cDateIndex=a,this.$emit("updateLayerDropdown",{nGroup:i,emitDate:s})},stepBackwards(){let e=document.getElementById("sliderDate").value,a=e-1,s=e-1,i=this.currentGroup+2;e-1>=0?(this.cDate=this.datesList[s],this.cDateIndex=s,document.getElementById("dropdownDate").selectedIndex=s,document.getElementById("sliderDate").value=s,this.$emit("updateLayerDropdown",{nGroup:i,emitDate:a})):alert("There are no previous maps for the current layer")},stepForwards(){let e=document.getElementById("dropdownDate").value,a=Number(e)+1,s=Number(e)+1,i=this.currentGroup+2;Number(e)+1<=this.datesListLength-1?(this.cDate=this.datesList[s],this.cDateIndex=s,document.getElementById("dropdownDate").selectedIndex=s,document.getElementById("sliderDate").value=s,this.$emit("updateLayerDropdown",{nGroup:i,emitDate:a})):alert("There are no later maps for the current layer")}}},U=e=>(L("data-v-0b528842"),e=e(),x(),e),Gt={id:"timePanel",class:"time-panel ol-unselectable ol-control"},Wt={class:"time-container"},jt={class:"time-header"},Ot={class:"time-controls"},Qt={class:"time-controls-dates"},Yt=["value","selected"],$t={class:"time-slider"},Ft=["max","value"],Ht={id:"time-controls-backward",class:"time-controls_item ol-unselectable ol-control"},Jt=U(()=>r("i",{class:"bi bi-skip-backward-circle"},null,-1)),Xt=[Jt],qt={id:"time-controls-forward",class:"time-controls_item ol-unselectable ol-control"},zt=U(()=>r("i",{class:"bi bi-skip-forward-circle"},null,-1)),Kt=[zt];function Rt(e,a,s,i,t,l){return p(),m("div",Gt,[r("p",null,u(s.child_msg),1),r("div",Wt,[r("div",jt,[r("strong",null,u(s.title),1)]),r("div",Ot,[r("div",Qt,[r("select",{name:"",id:"dropdownDate",onChange:a[0]||(a[0]=n=>l.updateLayerDropdown(n))},[(p(!0),m(E,null,B(s.datesList,(n,o)=>(p(),m("option",{value:o,selected:s.datesListLength,key:o},u(s.datesList[o]),9,Yt))),128))],32)]),r("div",$t,[r("input",{type:"range",name:"",id:"sliderDate",min:"0",max:s.datesListLength-1,value:s.currentDateIndex,step:"1",onChange:a[1]||(a[1]=n=>l.updateLayerSlider(n))},null,40,Ft)]),r("div",Ht,[r("button",{class:"time-panel-control-button",onClick:a[2]||(a[2]=(...n)=>l.stepBackwards&&l.stepBackwards(...n))},Xt)]),r("div",qt,[r("button",{class:"time-panel-control-button",onClick:a[3]||(a[3]=(...n)=>l.stepForwards&&l.stepForwards(...n))},Kt)])])])])}var Ut=h(Tt,[["render",Rt],["__scopeId","data-v-0b528842"]]),Zt="/assets/osm.d6d13acb.png",es="/assets/terrain.d843a7bb.png",ts="/assets/watercolor.8d0c5f2f.png",ss="/assets/toner.19bbfbf8.png",as="data:image/png;base64,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";const is={name:"Basemap",props:{child_msg:{type:String,default:"Basemap Panel"},data:{type:Array},layer_list:{type:Object,require:!0}},data(){return{}},methods:{getImage(e){if(e=="osm")return Zt;if(e=="terrain")return es;if(e=="watercolor")return ts;if(e=="toner")return ss;if(e=="none")return as},setLayerVisible(e,a){this.$emit("setLayerVisible",{nGroup:e,index:a})}}},ns={id:"basemapPanel",class:"basemap-panel ol-unselectable ol-control"},rs={class:"basemap-container"},ls=["id","checked","onChange"],os=["src"];function cs(e,a,s,i,t,l){return p(),m("div",ns,[r("p",null,u(s.child_msg),1),r("div",rs,[(p(!0),m(E,null,B(s.data,(n,o)=>(p(),m("div",{key:n.layer,class:"basemap-container_item"},[r("div",null,[r("input",{type:"radio",name:"basemap-radio",id:n.layer+"-option",class:D("basemap-option"),checked:n.active,onChange:c=>l.setLayerVisible(0,o)},null,40,ls),r("p",null,u(n.layer),1)]),r("img",{src:l.getImage(n.layer),alt:""},null,8,os)]))),128))])])}var ds=h(is,[["render",cs],["__scopeId","data-v-26d54738"]]);const us={name:"Plot",props:{child_msg:{type:String,default:"Plot Panel"}},data(){return{}},mounted(){var e={top:10,right:30,bottom:30,left:60},a=$(".svg-container").parent().width(),s=$(".svg-container").parent().height()-80,i=d3.select(".svg-container").append("svg").attr("width",a+e.left+e.right).attr("height",s+e.top+e.bottom).append("g").attr("transform","translate("+e.left+","+e.top+")");d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/connectedscatter.csv",function(t){return{date:d3.timeParse("%Y-%m-%d")(t.date),value:t.value}},function(t){var l=d3.scaleTime().domain(d3.extent(t,function(o){return o.date})).range([0,a]);i.append("g").attr("transform","translate(0,"+s+")").call(d3.axisBottom(l));var n=d3.scaleLinear().domain([8e3,9200]).range([s,0]);i.append("g").call(d3.axisLeft(n)),i.append("path").datum(t).attr("fill","none").attr("stroke","#69b3a2").attr("stroke-width",1.5).attr("d",d3.line().x(function(o){return l(o.date)}).y(function(o){return n(o.value)})),i.append("g").selectAll("dot").data(t).enter().append("circle").attr("cx",function(o){return l(o.date)}).attr("cy",function(o){return n(o.value)}).attr("r",5).attr("fill","#69b3a2")})}},ps=e=>(L("data-v-636acc4b"),e=e(),x(),e),ms={id:"plotPanel",class:"plot-panel ol-unselectable ol-control"},_s=ps(()=>r("div",{class:"svg-container"},null,-1));function gs(e,a,s,i,t,l){return p(),m("div",ms,[y(u(s.child_msg)+" ",1),_s])}var ys=h(us,[["render",gs],["__scopeId","data-v-636acc4b"]]),hs="/assets/i1.39c6eac4.png",vs="/assets/i2.52627267.png",As="/assets/i3.e76ce568.png",fs="/assets/i4.df51a994.png",bs="/assets/i5.9255129d.png",ws="/assets/i6.c99fefa1.png",Ls="/assets/i7.1425b493.png";const xs={data(){return{}},methods:{prev(){this.$emit("prev")},next(){this.$emit("next")}}},Z=e=>(L("data-v-07c985f2"),e=e(),x(),e),Cs={class:"carousel-container"},Ss=Z(()=>r("i",{class:"bi bi-caret-left-fill"},null,-1)),Is=[Ss],Es=Z(()=>r("i",{class:"bi bi-caret-right-fill"},null,-1)),Bs=[Es];function Ds(e,a,s,i,t,l){return p(),m("div",Cs,[z(e.$slots,"default",{},void 0,!0),r("button",{class:"prev",onClick:a[0]||(a[0]=(...n)=>l.prev&&l.prev(...n))},Is),r("button",{class:"next",onClick:a[1]||(a[1]=(...n)=>l.next&&l.next(...n))},Bs)])}var Ms=h(xs,[["render",Ds],["__scopeId","data-v-07c985f2"]]);const Ps={props:["visibleSlide","index","direction"],data(){return{}}},Vs={class:"carousel-slide"};function Ns(e,a,s,i,t,l){return p(),j(ue,{name:s.direction},{default:O(()=>[ce(r("div",Vs,[z(e.$slots,"default",{},void 0,!0)],512),[[de,s.visibleSlide===s.index]])]),_:3},8,["name"])}var ks=h(Ps,[["render",Ns],["__scopeId","data-v-664b1638"]]);const Ts={name:"Slide",props:{child_msg:{type:String,default:"Slide Panel"},settings:{type:Object}},data(){return{visibleSlide:0,direction:""}},computed:{slidesLen(){return this.settings.slides.length}},methods:{prev(){this.visibleSlide<=0?this.visibleSlide=this.slidesLen-1:this.visibleSlide--,this.direction="right"},next(){this.visibleSlide>=this.slidesLen-1?this.visibleSlide=0:this.visibleSlide++,this.direction="left"},getImage(e){if(e=="i1.png")return hs;if(e=="i2.png")return vs;if(e=="i3.png")return As;if(e=="i4.png")return fs;if(e=="i5.png")return bs;if(e=="i6.png")return ws;if(e=="i7.png")return Ls}},mounted(){},components:{CarouselContainer:Ms,CarouselSlide:ks}},Gs=e=>(L("data-v-339db63c"),e=e(),x(),e),Ws={id:"slidePanel",class:"slide-panel ol-unselectable ol-control",style:{display:"none"}},js={class:"slidepanel-show"},Os={class:"slide-title"},Qs={class:"slide-description"},Ys=["src","alt"],$s=Gs(()=>r("div",{class:"slide-current"},null,-1));function Fs(e,a,s,i,t,l){const n=v("carousel-slide"),o=v("carousel-container");return p(),m("div",Ws,[y(u(s.child_msg)+" ",1),r("div",js,[b(o,{onPrev:l.prev,onNext:l.next},{default:O(()=>[(p(!0),m(E,null,B(s.settings.slides,(c,d)=>(p(),j(n,{key:c,index:d,visibleSlide:t.visibleSlide,direction:t.direction},{default:O(()=>[r("div",Os,u(c.title),1),r("div",Qs,u(c.description),1),r("img",{src:l.getImage(c.src),alt:d},null,8,Ys)]),_:2},1032,["index","visibleSlide","direction"]))),128))]),_:1},8,["onPrev","onNext"])]),$s])}var Hs=h(Ts,[["render",Fs],["__scopeId","data-v-339db63c"]]);const Js={setup(){},data:function(){return{}},props:{map:{type:Object,required:!0},title:{type:String,required:!0,default:"Select layer"},evtCoordinate:{type:String,required:!0,default:"Select layer"},pixelCoordinate:{type:String,required:!0,default:"click-on map"},pixelInfo:{type:String,required:!0,default:"N/A"},pixelUnits:{type:String,required:!0,default:"N/A"}}},Xs=e=>(L("data-v-3ecc9474"),e=e(),x(),e),qs={id:"popup",class:"ol-popup"},zs={id:"popup-title"},Ks=Xs(()=>r("a",{href:"#",id:"popup-closer",class:"ol-popup-closer"},null,-1)),Rs={id:"popup-info"},Us={id:"popup-getinfo"},Zs={id:"popup-coordinate"};function ea(e,a,s,i,t,l){return p(),m("div",qs,[r("div",zs,u(s.title),1),Ks,r("div",Rs,[r("div",Us,"Value: "+u(s.pixelInfo)+" "+u(s.pixelUnits),1),r("div",Zs,"Coordinates: "+u(s.pixelCoordinate),1)])])}var ta=h(Js,[["render",ea],["__scopeId","data-v-3ecc9474"]]),sa="/assets/chl_legend.60bb7d0f.png",aa="/assets/tsm_legend.d3624ad5.png",ia="/assets/lswt_legend.56275681.png";const na=new X,ra={name:"WebGISContainer",data(){return{basemap_settings:this.settings.basemaps,layer_list:{},layer_groups:{},map:{},title:"Select a Layer",typology:"N/A",abstract:"N/A",to:"N/A",tf:"N/A",crs:"N/A",units:"N/A",legend:"N/A",datesList:{},currentGroup:"",currentDate:"",currentDateIndex:"",datesListLength:"",noGetinfo:0}},props:{settings:{type:Object,required:!0}},components:{layerPanel:ct,metadataPanel:kt,timePanel:Ut,basemapPanel:ds,plotPanel:ys,slidePanel:Hs,popUp:ta},methods:{setLayerVisible(e){let a=e.index,s=e.nGroup;if(s==0){let i=this.map.getLayers().array_[s].values_.layers.array_;i.forEach((t,l)=>{a!=l||i.length<a?t.setVisible(!1):t.setVisible(!0)})}else if(s==1){let i=this.map.getLayers().array_[s].values_.layers.array_[a].getVisible();this.map.getLayers().array_[s].values_.layers.array_[a].setVisible(!i)}else{let t=this.map.getLayers().array_[s+a].values_.layers.array_.length-1,l=this.map.getLayers().array_[s+a].values_.layers.array_,n=0;l.forEach((o,c)=>{let d=this.map.getLayers().array_[s+a].values_.layers.array_[c].getVisible();if(o.getVisible()==!0&&c!=t)return this.map.getLayers().array_[s+a].values_.layers.array_[c].setVisible(!d),n++,!1;n==0&&c==t&&(this.map.getLayers().array_[s+a].values_.layers.array_[t].setVisible(!d),this.currentDate=o.date)})}},setLayerVisibleTS(e){let a=e.nGroup,s=e.emitDate;this.map.getLayers().array_[a].values_.layers.array_.forEach((t,l)=>{s==l?t.setVisible(!0):t.setVisible(!1)})},setLayerOpacity(e){let a=e.opacity,s=e.index,i=e.nGroup;if(i<=1)this.map.getLayers().array_[i].values_.layers.array_[s].getVisible()==!0?(this.map.getLayers().array_[i].values_.layers.array_[s].setVisible(!1),this.map.getLayers().array_[i].values_.layers.array_[s].values_.opacity=a,this.map.getLayers().array_[i].values_.layers.array_[s].setVisible(!0)):this.map.getLayers().array_[i].values_.layers.array_[s].values_.opacity=a;else{let t=this.map.getLayers().array_[i+s];t.getVisible()==!0?(t.setVisible(!1),t.values_.opacity=a,t.setVisible(!0)):t.values_.opacity=a}},setLayerMetadata(e){let a=e.layerType,s=e.layerName.key,i=this.layer_list[a][s];if(this.title=s,a=="time"){let t=i.typology,l=i.timeFormatted;this.typology=t,this.abstract=this.settings.typology[t].abstract,this.units=this.settings.typology[t].units,this.crs=i.crs,this.typology=="CHL"?this.legend=sa:this.typology=="TSM"?this.legend=aa:this.legend=ia,this.to=l[0],this.tf=l[l.length-1],this.datesList=this.layer_list.time[s].timeFormatted,this.currentDate=this.datesList[Object.keys(this.datesList).length-1],this.currentDateIndex=Object.keys(this.datesList).length,this.datesListLength=Object.keys(this.datesList).length,this.currentGroup=Object.keys(this.layer_list.time).indexOf(s)}$(".metadata-panel").addClass("active"),$(".metadata-panel").css("display","block"),a=="time"&&($(".time-panel").addClass("active"),$(".time-panel").css("display","block"),$(".show-metadata").addClass("active"),$(".show-time").addClass("active"))},downloadData(){}},mounted(){this.basemap_settings=this.settings.basemaps,pe.get(this.settings.urlWMSget).then(e=>{let s=na.read(e.data).Capability.Layer.Layer,i=Me(s,this.settings.typology,this.settings.urlWMS);Pe(i);let t=R(i);this.layer_list=i,this.layer_group=t;let l={};for(let[o,c]of Object.entries(i.time)){let d=o.split("_").splice(0,2).join("_");d in Object.keys(l)||(l[d]=c)}return this.layer_list.time=l,l=this.layer_list,{layers_groups_reduced:R(l),layers_dict_reduced:l}}).then(e=>{const a=e.layers_groups_reduced,s=e.layers_dict_reduced,i=De();for(let g in a)for(let C in a[g])i.addLayer(a[g][C]);this.map=i;const t=document.getElementById("popup"),l=document.getElementById("popup-title"),n=document.getElementById("popup-coordinate"),o=document.getElementById("popup-getinfo"),c=document.getElementById("popup-closer"),d=new me({element:t,autoPan:{animation:{duration:250}}});c.onclick=function(){return d.setPosition(void 0),c.blur(),!1},i.addControl(d);const P=this.map.getView().getResolution();i.on("singleclick",function(g){const C=g.coordinate,V=_e(ge(C));n.innerHTML="<p>Coordinate: </p><code>"+V+"</code>",d.setPosition(C);const N=i.getEventPixel(g.originalEvent);let k=[];this.noGetinfo=0,i.forEachLayerAtPixel(N,function(f,_a){if(f.title!="basemap"){var T=f.values_.source.getFeatureInfoUrl(g.coordinate,P,"EPSG:3857",{INFO_FORMAT:"application/json"});if(T){console.log(T),fetch(T).then(S=>S.json()).then(S=>{o.innerHTML="<p>Value: </p><code>"+S.features[0].properties.GRAY_INDEX.toFixed(2)+" "+f.units+"</code>",l.innerHTML="<p>"+f.name.split("_").splice(0,2).join("_")+":"+f.date+"</p>"});let ee=f.name.split("_").splice(0,2).join("_");f.name.split("_")[2],s[f.title][ee].layer.forEach(S=>{var te=S.values_.source.getFeatureInfoUrl(g.coordinate,P,"EPSG:3857",{INFO_FORMAT:"application/json"});let se=fetch(te).then(G=>G.json()).then(G=>{let F=G.features[0];if(F!=null){let H=F.properties.GRAY_INDEX;if(H!=null)return{Date:S.date,Value:H.toFixed(2)}}});k.push(se)}),Ve(k)}}else o.innerHTML="<p>Value: </p><code>N/A</code>",l.innerHTML="Click on a layer"})}),i.on("pointermove",function(g){if(g.dragging)return;const C=i.getEventPixel(g.originalEvent),V=i.forEachLayerAtPixel(C,function(N,k){if(N.title!="basemap")return!0});i.getTargetElement().style.cursor=V?"pointer":""})}).catch(e=>console.log("No layers have been found in the site url"))}},la=r("div",{id:"map",class:"map"},null,-1);function oa(e,a,s,i,t,l){const n=v("layerPanel"),o=v("metadataPanel"),c=v("timePanel"),d=v("basemapPanel"),Y=v("slidePanel"),P=v("plotPanel"),g=v("popUp");return p(),m("div",null,[la,b(n,{child_msg:"Layer-Panel",layer_list:t.layer_list,onSetLayerVisible:l.setLayerVisible,onSetLayerOpacity:l.setLayerOpacity,onSetLayerMetadata:l.setLayerMetadata},null,8,["layer_list","onSetLayerVisible","onSetLayerOpacity","onSetLayerMetadata"]),b(o,{child_msg:"Metadata-Panel",settings:s.settings,title:t.title,abstract:t.abstract,to:t.to,tf:t.tf,typology:t.typology,units:t.units,crs:t.crs,legend:t.legend},null,8,["settings","title","abstract","to","tf","typology","units","crs","legend"]),b(c,{child_msg:"Time-Panel",title:t.title,datesList:t.datesList,datesListLength:t.datesListLength,currentDate:t.currentDate,currentDateIndex:t.currentDateIndex,currentGroup:t.currentGroup,onUpdateLayerSlider:l.setLayerVisibleTS,onUpdateLayerDropdown:l.setLayerVisibleTS,onStepBackwards:l.setLayerVisibleTS,onStepForwards:l.setLayerVisibleTS},null,8,["title","datesList","datesListLength","currentDate","currentDateIndex","currentGroup","onUpdateLayerSlider","onUpdateLayerDropdown","onStepBackwards","onStepForwards"]),b(d,{child_msg:"Basemap-Panel",data:t.basemap_settings,layer_list:t.layer_list,onSetLayerVisible:l.setLayerVisible},null,8,["data","layer_list","onSetLayerVisible"]),b(Y,{child_msg:"Slide-Panel",settings:s.settings},null,8,["settings"]),b(P,{child_msg:"Plot-Panel"}),b(g)])}var ca=h(ra,[["render",oa]]);const da={urlWMS:"https://www.geonode.eo.simile.polimi.it/geoserver/geonode/wms",urlWMSget:"https://www.webgis.eo.simile.polimi.it/api/layers",typology:{CHL:{title:"Chlorophyll-a",abstract:"Chlorophyll-a allows plants to photosintezise. This measurement is used to classify the trophic conditionof a water body. The Chlorophyll-a maps presented have been processed using the Sentinel-3 OLCI sensor",style:"chl",units:"mg/m3"},TSM:{title:"Total Suspended Matter",abstract:"Total suspended matter concentration",style:"tsm",units:"g/m3"},LSWT:{title:"Lake Surface Water Temperature",abstract:"Average lake surface temperature",style:"lswt",units:"\xB0C"}},basemaps:[{layer:"osm",source:"osm",src:"osm.png",active:!0},{layer:"terrain",source:"terrain-labels",src:"terrain.png",active:!1},{layer:"toner",source:"toner",src:"toner.png",active:!1},{layer:"none",source:"none",src:"none.png",active:!1}],slides:[{title:"Welcome!",src:"i1.png",description:"1. SIMILE WebGIS enables the visualization of the water quality parameters (WQPs) maps produced for Lakes Maggiore, Lugano and Como."},{title:"Explore the different tools",src:"i2.png",description:"2. The WebGIS presents multtiple panels allowing to explore the different water quality parameters maps"},{title:"Visualize and explore the WQP",src:"i3.png",description:"3. Review the different components allowing the visualization of the maps, such as the layer panel, metadata panel and time controller"},{title:"Observe the evolution of the time series",src:"i4.png",description:"4. Use the time manager to observe the changes of the parameters in time."},{title:"Observe the evolution of the time series",src:"i5.png",description:"4. Use the time manager to observe the changes of the parameters in time."},{title:"Change the basemap",src:"i6.png",description:"5. Customize the view of the WebGIS by using different basemaps"},{title:"Explore the guide",src:"i7.png",description:"6. Review the guide for the WebGIS"}]};const ua={name:"App",data(){return{settings:da}},components:{WebGISContainer:ca}};function pa(e,a,s,i,t,l){const n=v("WebGISContainer");return p(),j(n,{settings:t.settings},null,8,["settings"])}var ma=h(ua,[["render",pa],["__scopeId","data-v-5b99cd36"]]);ye(ma).mount("#app");
//# sourceMappingURL=index.ca035b8f.js.map
