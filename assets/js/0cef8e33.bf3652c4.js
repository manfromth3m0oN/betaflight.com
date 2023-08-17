"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2154],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),f=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=f(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=f(r),m=a,g=l["".concat(u,".").concat(m)]||l[m]||p[m]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var f=2;f<i;f++)o[f]=r[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37465:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>f});var n=r(87462),a=(r(67294),r(3905));const i={},o="Requirements for the Submission of New and Updated Targets",s={unversionedId:"manufacturer/requirements-for-submission-of-targets",id:"manufacturer/requirements-for-submission-of-targets",title:"Requirements for the Submission of New and Updated Targets",description:"The following new requirements for pull requests adding new targets or modifying existing targets are put in place from now on:",source:"@site/docs/manufacturer/requirements-for-submission-of-targets.mdx",sourceDirName:"manufacturer",slug:"/manufacturer/requirements-for-submission-of-targets",permalink:"/docs/manufacturer/requirements-for-submission-of-targets",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manufacturer",previous:{title:"Betaflight Flight Controller Manufacturer Design Guidelines",permalink:"/docs/manufacturer/manufacturer-design-guidelines"}},u={},f=[],c={toc:f};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"requirements-for-the-submission-of-new-and-updated-targets"},"Requirements for the Submission of New and Updated Targets"),(0,a.kt)("p",null,"The following new requirements for pull requests adding new targets or modifying existing targets are put in place from now on:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Read the ",(0,a.kt)("a",{parentName:"p",href:"manufacturer-design-guidelines"},"hardware specification"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For any new target that is to be added, only a Unified Target config into ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/betaflight/unified-targets/tree/master/configs/default"},"https://github.com/betaflight/unified-targets/tree/master/configs/default")," needs to be submitted. See the ",(0,a.kt)("a",{parentName:"p",href:"creating-an-unified-target"},"instructions")," for how to create a Unified Target configuration. If there is no Unified Target for the MCU type of the new target (see instructions above), then a 'legacy' format target definition into ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/target/")," has to be submitted as well;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For changes to existing targets, the change needs to be applied to the Unified Target config in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/betaflight/unified-targets/tree/master/configs/default"},"https://github.com/betaflight/unified-targets/tree/master/configs/default"),". If no Unified Target configuration for the target exists, a new Unified Target configuration will have to be created and submitted. If there is no Unified Target for the MCU type of the new target (see instructions above), then an update to the 'legacy' format target definition in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/target/")," has to be submitted alongside the update to the Unified Target configuration."))))}l.isMDXComponent=!0}}]);