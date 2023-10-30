"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4097],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=o,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},69771:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:11},a="Servos Tab",s={unversionedId:"wiki/configurator/servos-tab",id:"wiki/configurator/servos-tab",title:"Servos Tab",description:"Servos Tab",source:"@site/docs/wiki/configurator/servos-tab.mdx",sourceDirName:"wiki/configurator",slug:"/wiki/configurator/servos-tab",permalink:"/docs/wiki/configurator/servos-tab",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"wiki",previous:{title:"Adjustments Tab",permalink:"/docs/wiki/configurator/adjustments-tab"},next:{title:"GPS Tab",permalink:"/docs/wiki/configurator/gps-tab"}},c={},l=[],u={toc:l};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"servos-tab"},"Servos Tab"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Servos Tab",src:r(12191).Z,width:"1616",height:"724"})),(0,o.kt)("p",null,"Configure a servo to move when in response to one of your receiver's channels. Set the servo endpoints with MIN, MID\nand MAX. Check the box for the channel you want to control the servo. "),(0,o.kt)("p",null,"Direction and Rate control is a weighting which controls the direction and range of the servo movement"),(0,o.kt)("p",null,"Enable live mode to move your servos when configurator is running"))}p.isMDXComponent=!0},12191:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/betaflight_configurator_servos_tab-aced49b126b05d587802ca093883326b.png"}}]);