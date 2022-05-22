"use strict";(self["webpackChunkalgorithm_visualizer"]=self["webpackChunkalgorithm_visualizer"]||[]).push([[274],{5545:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(9032),o=n(4066);const{cubicBezierEaseIn:l,cubicBezierEaseOut:i}=o.Z;function a({transformOrigin:t="inherit",duration:e=".2s",enterScale:n=".9",originalTransform:o="",originalTransition:a=""}={}){return[(0,r.c)("&.fade-in-scale-up-transition-leave-active",{transformOrigin:t,transition:`opacity ${e} ${l}, transform ${e} ${l} ${a&&","+a}`}),(0,r.c)("&.fade-in-scale-up-transition-enter-active",{transformOrigin:t,transition:`opacity ${e} ${i}, transform ${e} ${i} ${a&&","+a}`}),(0,r.c)("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${o} scale(${n})`}),(0,r.c)("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${o} scale(1)`})]}},9211:function(t,e,n){n.d(e,{n:function(){return p}});var r=n(2045),o=n(8226),l=n(6252),i=n(2262),a=n(1465);(0,a.U)("n-internal-select-menu");const s=(0,a.U)("n-internal-select-menu-body");var d=n(6294),u=n(8523),f=n(2671);const h="__disabled__";function p(t){const e=(0,l.f3)(d.Z,null),n=(0,l.f3)(u.H,null),a=(0,l.f3)(f.c,null),p=(0,l.f3)(s,null),c=(0,i.iH)();if("undefined"!==typeof document){c.value=document.fullscreenElement;const t=()=>{c.value=document.fullscreenElement};(0,l.bv)((()=>{(0,o.on)("fullscreenchange",document,t)})),(0,l.Jd)((()=>{(0,o.S)("fullscreenchange",document,t)}))}return(0,r.Z)((()=>{var r;const{to:o}=t;return void 0!==o?!1===o?h:!0===o?c.value||"body":o:(null===e||void 0===e?void 0:e.value)?null!==(r=e.value.$el)&&void 0!==r?r:e.value:(null===n||void 0===n?void 0:n.value)?n.value:(null===a||void 0===a?void 0:a.value)?a.value:(null===p||void 0===p?void 0:p.value)?p.value:null!==o&&void 0!==o?o:c.value||"body"}))}p.tdkey=h,p.propTo={type:[String,Object,Boolean],default:void 0}},8523:function(t,e,n){n.d(e,{H:function(){return o}});var r=n(1465);const o=(0,r.U)("n-drawer-body");(0,r.U)("n-drawer")},6294:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(1465);const o=(0,r.U)("n-modal-body");(0,r.U)("n-modal")},2671:function(t,e,n){n.d(e,{c:function(){return o}});var r=n(1465);const o=(0,r.U)("n-popover-body")},7170:function(t,e){e["Z"]={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"}},3450:function(t,e,n){n.d(e,{Z:function(){return s}});new Set;function r(t,e){console.error(`[vdirs/${t}]: ${e}`)}class o{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(t,e){const{elementZIndex:n}=this;if(void 0!==e)return t.style.zIndex=`${e}`,void n.delete(t);const{nextZIndex:r}=this;if(n.has(t)){const e=n.get(t);if(e+1===this.nextZIndex)return}t.style.zIndex=`${r}`,n.set(t,r),this.nextZIndex=r+1,this.squashState()}unregister(t,e){const{elementZIndex:n}=this;n.has(t)?n.delete(t):void 0===e&&r("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:t}=this;t||(this.nextZIndex=2e3),this.nextZIndex-t>2500&&this.rearrange()}rearrange(){const t=Array.from(this.elementZIndex.entries());t.sort(((t,e)=>t[1]-e[1])),this.nextZIndex=2e3,t.forEach((t=>{const e=t[0],n=this.nextZIndex++;`${n}`!==e.style.zIndex&&(e.style.zIndex=`${n}`)}))}}var l=new o;const i="@@ziContext",a={mounted(t,e){const{value:n={}}=e,{zIndex:r,enabled:o}=n;t[i]={enabled:!!o,initialized:!1},o&&(l.ensureZIndex(t,r),t[i].initialized=!0)},updated(t,e){const{value:n={}}=e,{zIndex:r,enabled:o}=n,a=t[i].enabled;o&&!a&&(l.ensureZIndex(t,r),t[i].initialized=!0),t[i].enabled=!!o},unmounted(t,e){if(!t[i].initialized)return;const{value:n={}}=e,{zIndex:r}=n;l.unregister(t,r)}};var s=a},5661:function(t,e,n){var r=n(6252),o=n(2262),l=n(6999),i=n(8226),a=n(6220),s=n(6991);const d=(0,r.aZ)({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(t){var e;(0,r.JJ)("VBinder",null===(e=(0,r.FN)())||void 0===e?void 0:e.proxy);const n=(0,r.f3)("VBinder",null),a=(0,o.iH)(null),d=e=>{a.value=e,n&&t.syncTargetWithParent&&n.setTargetRef(e)};let u=[];const f=()=>{let t=a.value;while(1){if(t=(0,s.rP)(t),null===t)break;u.push(t)}for(const e of u)(0,i.on)("scroll",e,v,!0)},h=()=>{for(const t of u)(0,i.S)("scroll",t,v,!0);u=[]},p=new Set,c=t=>{0===p.size&&f(),p.has(t)||p.add(t)},m=t=>{p.has(t)&&p.delete(t),0===p.size&&h()},v=()=>{(0,l.J)(g)},g=()=>{p.forEach((t=>t()))},x=new Set,b=t=>{0===x.size&&(0,i.on)("resize",window,y),x.has(t)||x.add(t)},$=t=>{x.has(t)&&x.delete(t),0===x.size&&(0,i.S)("resize",window,y)},y=()=>{x.forEach((t=>t()))};return(0,r.Jd)((()=>{(0,i.S)("resize",window,y),h()})),{targetRef:a,setTargetRef:d,addScrollListener:c,removeScrollListener:m,addResizeListener:b,removeResizeListener:$}},render(){return(0,a.z9)("binder",this.$slots)}});e["Z"]=d},6623:function(t,e,n){n.d(e,{Z:function(){return I}});var r=n(6252),o=n(2262),l=n(3450),i=n(2045),a=n(232),s=n(8878),d=n(1527),u=n(4858);function f(t){const e=(0,o.iH)(!!t.value);if(e.value)return(0,o.OT)(e);const n=(0,r.YP)(t,(t=>{t&&(e.value=!0,n())}));return(0,o.OT)(e)}var h=n(6220),p=(0,r.aZ)({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(t){return{showTeleport:f((0,o.Vh)(t,"show")),mergedTo:(0,r.Fl)((()=>{const{to:e}=t;return null!==e&&void 0!==e?e:"body"}))}},render(){return this.showTeleport?this.disabled?(0,h.z9)("lazy-teleport",this.$slots):(0,r.h)(r.lR,{disabled:this.disabled,to:this.mergedTo},(0,h.z9)("lazy-teleport",this.$slots)):null}});const c={top:"bottom",bottom:"top",left:"right",right:"left"},m={start:"end",center:"center",end:"start"},v={top:"height",bottom:"height",left:"width",right:"width"},g={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},x={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},b={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},$={top:!0,bottom:!1,left:!0,right:!1},y={top:"end",bottom:"start",left:"end",right:"start"};function w(t,e,n,r,o,l){if(!o||l)return{placement:t,top:0,left:0};const[i,a]=t.split("-");let s=null!==a&&void 0!==a?a:"center",d={top:0,left:0};const u=(t,o,l)=>{let i=0,a=0;const s=n[t]-e[o]-e[t];return s>0&&r&&(l?a=$[o]?s:-s:i=$[o]?s:-s),{left:i,top:a}},f="left"===i||"right"===i;if("center"!==s){const r=b[t],o=c[r],l=v[r];if(n[l]>e[l]){if(e[r]+e[l]<n[l]){const t=(n[l]-e[l])/2;e[r]<t||e[o]<t?e[r]<e[o]?(s=m[a],d=u(l,o,f)):d=u(l,r,f):s="center"}}else n[l]<e[l]&&e[o]<0&&e[r]>e[o]&&(s=m[a])}else{const t="bottom"===i||"top"===i?"left":"top",r=c[t],o=v[t],l=(n[o]-e[o])/2;(e[t]<l||e[r]<l)&&(e[t]>e[r]?(s=y[t],d=u(o,t,f)):(s=y[r],d=u(o,r,f)))}let h=i;return e[i]<n[v[i]]&&e[i]<e[c[i]]&&(h=c[i]),{placement:"center"!==s?`${h}-${s}`:h,left:d.left,top:d.top}}function M(t,e){return e?x[t]:g[t]}function z(t,e,n,r,o,l){if(l)switch(t){case"bottom-start":return{top:`${Math.round(n.top-e.top+n.height)}px`,left:`${Math.round(n.left-e.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-e.top+n.height)}px`,left:`${Math.round(n.left-e.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-e.top)}px`,left:`${Math.round(n.left-e.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-e.top)}px`,left:`${Math.round(n.left-e.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-e.top)}px`,left:`${Math.round(n.left-e.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-e.top+n.height)}px`,left:`${Math.round(n.left-e.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-e.top)}px`,left:`${Math.round(n.left-e.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-e.top+n.height)}px`,left:`${Math.round(n.left-e.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-e.top)}px`,left:`${Math.round(n.left-e.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-e.top+n.height/2)}px`,left:`${Math.round(n.left-e.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-e.top+n.height/2)}px`,left:`${Math.round(n.left-e.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-e.top+n.height)}px`,left:`${Math.round(n.left-e.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(t){case"bottom-start":return{top:`${Math.round(n.top-e.top+n.height+r)}px`,left:`${Math.round(n.left-e.left+o)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-e.top+n.height+r)}px`,left:`${Math.round(n.left-e.left+n.width+o)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-e.top+r)}px`,left:`${Math.round(n.left-e.left+o)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-e.top+r)}px`,left:`${Math.round(n.left-e.left+n.width+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-e.top+r)}px`,left:`${Math.round(n.left-e.left+n.width+o)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-e.top+n.height+r)}px`,left:`${Math.round(n.left-e.left+n.width+o)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-e.top+r)}px`,left:`${Math.round(n.left-e.left+o)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-e.top+n.height+r)}px`,left:`${Math.round(n.left-e.left+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-e.top+r)}px`,left:`${Math.round(n.left-e.left+n.width/2+o)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-e.top+n.height/2+r)}px`,left:`${Math.round(n.left-e.left+n.width+o)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-e.top+n.height/2+r)}px`,left:`${Math.round(n.left-e.left+o)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-e.top+n.height+r)}px`,left:`${Math.round(n.left-e.left+n.width/2+o)}px`,transform:"translateX(-50%)"}}}var Z=n(6991);const T=(0,u.c)([(0,u.c)(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),(0,u.c)(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[(0,u.c)("> *",{pointerEvents:"all"})])]);var I=(0,r.aZ)({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(t){const e=(0,r.f3)("VBinder"),n=(0,i.Z)((()=>void 0!==t.enabled?t.enabled:t.show)),l=(0,o.iH)(null),f=(0,o.iH)(null),h=()=>{const{syncTrigger:n}=t;n.includes("scroll")&&e.addScrollListener(m),n.includes("resize")&&e.addResizeListener(m)},p=()=>{e.removeScrollListener(m),e.removeResizeListener(m)};(0,r.bv)((()=>{n.value&&(m(),h())}));const c=(0,d.O)();T.mount({id:"vueuc/binder",head:!0,anchorMetaName:u.A,ssr:c}),(0,r.Jd)((()=>{p()})),(0,a.Z)((()=>{n.value&&m()}));const m=()=>{if(!n.value)return;const r=l.value;if(null===r)return;const o=e.targetRef,{x:i,y:a,overlap:s}=t,d=void 0!==i&&void 0!==a?(0,Z.Tt)(i,a):(0,Z.Dz)(o);r.style.setProperty("--v-target-width",`${Math.round(d.width)}px`),r.style.setProperty("--v-target-height",`${Math.round(d.height)}px`);const{width:u,minWidth:h,placement:p,internalShift:c,flip:m}=t;r.setAttribute("v-placement",p),s?r.setAttribute("v-overlap",""):r.removeAttribute("v-overlap");const{style:v}=r;v.width="target"===u?`${d.width}px`:void 0!==u?u:"",v.minWidth="target"===h?`${d.width}px`:void 0!==h?h:"";const g=(0,Z.Dz)(r),x=(0,Z.Dz)(f.value),{left:b,top:$,placement:y}=w(p,d,g,c,m,s),T=M(y,s),{left:I,top:S,transform:B}=z(y,x,d,$,b,s);r.setAttribute("v-placement",y),r.style.setProperty("--v-offset-left",`${Math.round(b)}px`),r.style.setProperty("--v-offset-top",`${Math.round($)}px`),r.style.transform=`translateX(${I}) translateY(${S}) ${B}`,r.style.transformOrigin=T};(0,r.YP)(n,(t=>{t?(h(),v()):p()}));const v=()=>{(0,r.Y3)().then(m).catch((t=>console.error(t)))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach((e=>{(0,r.YP)((0,o.Vh)(t,e),m)})),["teleportDisabled"].forEach((e=>{(0,r.YP)((0,o.Vh)(t,e),v)})),(0,r.YP)((0,o.Vh)(t,"syncTrigger"),(t=>{t.includes("resize")?e.addResizeListener(m):e.removeResizeListener(m),t.includes("scroll")?e.addScrollListener(m):e.removeScrollListener(m)}));const g=(0,s.Z)(),x=(0,i.Z)((()=>{const{to:e}=t;if(void 0!==e)return e;g.value}));return{VBinder:e,mergedEnabled:n,offsetContainerRef:f,followerRef:l,mergedTo:x,syncPosition:m}},render(){return(0,r.h)(p,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var t,e;const n=(0,r.h)("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[(0,r.h)("div",{class:"v-binder-follower-content",ref:"followerRef"},null===(e=(t=this.$slots).default)||void 0===e?void 0:e.call(t))]);return this.zindexable?(0,r.wy)(n,[[l.Z,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}})},4539:function(t,e,n){var r=n(6252),o=n(6220);e["Z"]=(0,r.aZ)({name:"Target",setup(){const{setTargetRef:t,syncTarget:e}=(0,r.f3)("VBinder"),n={mounted:t,updated:t};return{syncTarget:e,setTargetDirective:n}},render(){const{syncTarget:t,setTargetDirective:e}=this;return t?(0,r.wy)((0,o.Nb)("follower",this.$slots),[[e]]):(0,o.Nb)("follower",this.$slots)}})},6991:function(t,e,n){n.d(e,{Dz:function(){return i},Tt:function(){return l},rP:function(){return s}});let r=null;function o(){if(null===r&&(r=document.getElementById("v-binder-view-measurer"),null===r)){r=document.createElement("div"),r.id="v-binder-view-measurer";const{style:t}=r;t.position="fixed",t.left="0",t.right="0",t.top="0",t.bottom="0",t.pointerEvents="none",t.visibility="hidden",document.body.appendChild(r)}return r.getBoundingClientRect()}function l(t,e){const n=o();return{top:e,left:t,height:0,width:0,right:n.width-t,bottom:n.height-e}}function i(t){const e=t.getBoundingClientRect(),n=o();return{left:e.left-n.left,top:e.top-n.top,bottom:n.height+n.top-e.bottom,right:n.width+n.left-e.right,width:e.width,height:e.height}}function a(t){return 9===t.nodeType?null:t.parentNode}function s(t){if(null===t)return null;const e=a(t);if(null===e)return null;if(9===e.nodeType)return document;if(1===e.nodeType){const{overflow:t,overflowX:n,overflowY:r}=getComputedStyle(e);if(/(auto|scroll|overlay)/.test(t+r+n))return e}return s(e)}},6220:function(t,e,n){n.d(e,{Nb:function(){return i},z9:function(){return o}});var r=n(6252);function o(t,e,n="default"){const r=e[n];if(void 0===r)throw new Error(`[vueuc/${t}]: slot[${n}] is empty.`);return r()}function l(t,e=!0,n=[]){return t.forEach((t=>{if(null!==t)if("object"===typeof t)if(Array.isArray(t))l(t,e,n);else if(t.type===r.HY){if(null===t.children)return;Array.isArray(t.children)&&l(t.children,e,n)}else t.type!==r.sv&&n.push(t);else"string"!==typeof t&&"number"!==typeof t||n.push((0,r.Uk)(String(t)))})),n}function i(t,e,n="default"){const r=e[n];if(void 0===r)throw new Error(`[vueuc/${t}]: slot[${n}] is empty.`);const o=l(r());if(1===o.length)return o[0];throw new Error(`[vueuc/${t}]: slot[${n}] should have exactly one child.`)}}}]);
//# sourceMappingURL=274.66a15b5f.js.map