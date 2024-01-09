"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2527],{29918:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var o=i(85893),r=i(11151);const t={},l="Betaflight 4.4 Cloud Build API",d={id:"development/api/Cloud-Build-API",title:"Betaflight 4.4 Cloud Build API",description:"API",source:"@site/docs/development/api/Cloud-Build-API.md",sourceDirName:"development/api",slug:"/development/api/Cloud-Build-API",permalink:"/docs/development/api/Cloud-Build-API",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"Bus and External Device Drivers",permalink:"/docs/development/api/BusDrivers"},next:{title:"DisplayPort MSP Extensions",permalink:"/docs/development/api/DisplayPort"}},s={},a=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:2},{value:"Radio Protocols",id:"radio-protocols",level:3},{value:"Telemetry Protocols",id:"telemetry-protocols",level:3},{value:"Other Options",id:"other-options",level:3},{value:"Motor Protocols",id:"motor-protocols",level:3},{value:"Custom Defines",id:"custom-defines",level:3},{value:"RACE_PRO Define",id:"race_pro-define",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"betaflight-44-cloud-build-api",children:"Betaflight 4.4 Cloud Build API"}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(n.p,{children:"Avoiding EOL on 512K targets we have introduced a cloud build API saving around 25% of firmware flash usage."}),"\n",(0,o.jsxs)(n.p,{children:["Unified targets define hardware drivers to be included in the firmware as described in the ",(0,o.jsx)(n.a,{href:"/docs/development/manufacturer/manufacturer-design-guidelines#42-definitions-for-unified-targets",children:"Hardware specification"})]}),"\n",(0,o.jsx)(n.p,{children:"The build log has information about the build in case of failure."}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["For optimal use please select ONLY the appropiate hardware for the flight controller after selecting the right target (using auto-detect button).\nChoices below are further described in the ",(0,o.jsx)(n.a,{href:"/docs/wiki/configurator/firmware-flasher-tab",children:"wiki/Firmware Flasher page"})]}),"\n",(0,o.jsx)(n.h3,{id:"radio-protocols",children:"Radio Protocols"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"CRSF\nEXPRESSLRS\nFPORT\nGHOST\nIBUS\nJETIEXBUS\nPPM\nSBUS\nSPECTRUM\nSRXL2\nSUMD\nSUMH\nXBUS\n"})}),"\n",(0,o.jsx)(n.h3,{id:"telemetry-protocols",children:"Telemetry Protocols"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"FRSKY_HUB\nGHOST\nHOTT\nIBUS_EXTENDED\nJETIEXBUS\nLTM\nMAVLINK\nSMARTPORT\nSRXL\n"})}),"\n",(0,o.jsx)(n.p,{children:"Note: telemetry for CRSF, ELRS, FPORT and GHST are included during the build."}),"\n",(0,o.jsx)(n.h3,{id:"other-options",children:"Other Options"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"AKK (SA FIX)\nFLASH\nGPS\nLED\nLED64\nMAG\nOSD\nOSD (HD)\nPINIO\nVTX\n"})}),"\n",(0,o.jsx)(n.h3,{id:"motor-protocols",children:"Motor Protocols"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"BRUSHED\nDSHOT\nMULTISHOT\nONESHOT\nPROSHOT\nPWM\n"})}),"\n",(0,o.jsx)(n.h3,{id:"custom-defines",children:"Custom Defines"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"ACRO_TRAINER\nBATTERY_CONTINUE\nDASHBOARD\nEMFAT_AUTORUN\nEMFAT_ICON\nESCSERIAL_SIMONK\nGPS\nGPS_PLUS_CODES\nLED_STRIP\nQUICK_OSD_MENU\nRC_STATS\nRPM_LIMIT\nSERIAL_4WAY_SK_BOOTLOADER\nSPEC_PREARM_SCREEN\n"})}),"\n",(0,o.jsx)(n.h3,{id:"race_pro-define",children:"RACE_PRO Define"}),"\n",(0,o.jsx)(n.p,{children:"There is a special RACE_PRO define which combines the following defines as one feature pack:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"QUICK_OSD_MENU\nRC_STATS\nRPM_LIMIT\nSPEC_PREARM_SCREEN\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>l});var o=i(67294);const r={},t=o.createContext(r);function l(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);