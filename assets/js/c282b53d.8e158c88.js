"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8969],{22374:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=i(85893),s=i(11151);const a={},r="External OSD - MWOSD - CMS",l={id:"support/archive/External-OSD-MWOSD-CMS",title:"External OSD - MWOSD - CMS",description:"This guide is intended for users who do not have an embedded OSD and / or wish to use an external OSD",source:"@site/docs/support/archive/External-OSD-MWOSD-CMS.md",sourceDirName:"support/archive",slug:"/support/archive/External-OSD-MWOSD-CMS",permalink:"/docs/support/archive/External-OSD-MWOSD-CMS",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"support",previous:{title:"ESC Telemetry",permalink:"/docs/support/archive/ESC-Telemetry"},next:{title:"FAQ",permalink:"/docs/support/archive/FAQ"}},o={},d=[{value:"Typical MWOSD installation and configuration",id:"typical-mwosd-installation-and-configuration",level:2},{value:"About this mode:",id:"about-this-mode",level:3},{value:"MWOSD configuration",id:"mwosd-configuration",level:3},{value:"FC configuration",id:"fc-configuration",level:3},{value:"Menu activation",id:"menu-activation",level:3},{value:"Non typical DISPLAYPORT installation and configuration.",id:"non-typical-displayport-installation-and-configuration",level:2},{value:"About this mode:",id:"about-this-mode-1",level:3}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"external-osd---mwosd---cms",children:"External OSD - MWOSD - CMS"}),"\n",(0,t.jsx)(e.p,{children:"This guide is intended for users who do not have an embedded OSD and / or wish to use an external OSD"}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"typical-mwosd-installation-and-configuration",children:"Typical MWOSD installation and configuration"}),"\n",(0,t.jsx)(e.h3,{id:"about-this-mode",children:"About this mode:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"MWOSD requests raw data from FC, manipulates into human readable format and display"}),"\n",(0,t.jsx)(e.li,{children:"Screen layouts and displayed items are determined by MWOSD GUI configurator"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"mwosd-configuration",children:"MWOSD configuration"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["MWOSD install guides etc. are available via ",(0,t.jsx)(e.a,{href:"https://github.com/ShikOfTheRa/scarab-osd/wiki",children:"MWOSD wiki"}),"."]}),"\n",(0,t.jsx)(e.li,{children:"Installing the latest firmware from MWOSD GUI configurator is recommended."}),"\n",(0,t.jsx)(e.li,{children:"Versions 1.7 onward have CMS support enabled for Betaflight."}),"\n",(0,t.jsxs)(e.li,{children:["If you are building your own MWOSD firmware, ensure ",(0,t.jsx)(e.code,{children:"CANVAS_SUPPORT"})," is enabled in config."]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"fc-configuration",children:"FC configuration"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"BetaFlight v3.1.0 onwards for most pre-built targets F3, F4 and F7 have CMS support enabled."}),"\n",(0,t.jsx)(e.li,{children:"Use OSD should be disabled in the FC GUI configurator."}),"\n",(0,t.jsx)(e.li,{children:"MSP must be enabled on the serial port the OSD is attached to."}),"\n",(0,t.jsx)(e.li,{children:"Baud rate must match the OSD. Typically this is 115k"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"If you are building your own Betaflight FC firmware:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["It must be built with ",(0,t.jsx)(e.code,{children:"CMS"})," and ",(0,t.jsx)(e.code,{children:"USE_MSP_DISPLAYPORT"})," or equivalent options."]}),"\n",(0,t.jsx)(e.li,{children:"Corresponding features should be turned on in configuration if they are controlled via features."}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"menu-activation",children:"Menu activation"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["BetaFlight CMS menu activation is ",(0,t.jsx)(e.code,{children:"Thr MID + Yaw LEFT + Pitch UP"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["MWOSD menu activation is ",(0,t.jsx)(e.code,{children:"Thr MID + Yaw RIGHT + Pitch UP"}),"."]}),"\n"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"non-typical-displayport-installation-and-configuration",children:"Non typical DISPLAYPORT installation and configuration."}),"\n",(0,t.jsx)(e.h3,{id:"about-this-mode-1",children:"About this mode:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"MWOSD acts dumb and displays screen sent from FC."}),"\n",(0,t.jsx)(e.li,{children:"OSD layouts are configured in the Betaflight Configurator OSD tab."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Limitations:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Screen update speed is slower than a typical installation."}),"\n",(0,t.jsx)(e.li,{children:"If this mode is required, raise a request with MWOSD team. A small amount of development is required to resolve issues with flickering display."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"To use with DISPLAYPORT:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Install latest MWOSD firmware on the OSD."}),"\n",(0,t.jsxs)(e.li,{children:["READ CAREFULLY - Install the ",(0,t.jsx)(e.code,{children:"FC fonts"})," onto the OSD using MWOSD gui configurator. Using MWOSD fonts may display strange characters."]}),"\n",(0,t.jsx)(e.li,{children:"Use OSD should be enabled in the FC GUI configurator."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"If you are building your own Betaflight FC firmware:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Build FC firmware with added options. E.g. make ",(0,t.jsx)(e.code,{children:"OPTIONS=USE_OSD USE_OSD_OVER_MSP_DISPLAYPORT REVOLT"})]}),"\n",(0,t.jsx)(e.li,{children:"This will enable the OSD tab and full DISPLAYPORT support from the FC."}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["See also: ",(0,t.jsx)(e.a,{href:"OSD-and-CMS-Adjusting-Screen",children:"CMS adjustment"})]})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>l,a:()=>r});var t=i(67294);const s={},a=t.createContext(s);function r(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);