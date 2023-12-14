"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[206],{21406:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=r(85893),t=r(11151);const a={},o=void 0,i={id:"support/boards/ASGARD32",title:"ASGARD32",description:"Firmware targets",source:"@site/docs/support/boards/ASGARD32.md",sourceDirName:"support/boards",slug:"/support/boards/ASGARD32",permalink:"/docs/support/boards/ASGARD32",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"support",previous:{title:"ASGARD",permalink:"/docs/support/boards/ASGARD"},next:{title:"BeeRotor F4",permalink:"/docs/support/boards/BEEROTORF4"}},d={},l=[{value:"Firmware targets",id:"firmware-targets",level:3},{value:"Known problems and workarounds of Asgard32 F4 and Asgard32 F7.",id:"known-problems-and-workarounds-of-asgard32-f4-and-asgard32-f7",level:3},{value:"Pad/Pin function map for Asgard32 F4",id:"padpin-function-map-for-asgard32-f4",level:3},{value:"Adding a (real) beeper function",id:"adding-a-real-beeper-function",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"firmware-targets",children:"Firmware targets"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For Asgard32 F4, use ",(0,s.jsx)(n.code,{children:"AG3XF4"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["For Asgard32 F7, use ",(0,s.jsx)(n.code,{children:"AG3XF7"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"known-problems-and-workarounds-of-asgard32-f4-and-asgard32-f7",children:"Known problems and workarounds of Asgard32 F4 and Asgard32 F7."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The pad for LED strip (PB6) does not work due to timer collision with Motor 4.\nThere is a very little choice of pads for workaround;\nPA2 (TX2, labelled S/A for SmartAudio) is a descent choice.\nSmartAudio can be moved to one of available timer channels.\nThis workaround configuration is implemented in official releases."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The buzzer function is overloaded with status LED function, and there is no dedicated pad for buzzers.\n(The BUZ- pad is switched to ground by the status LED signal.)\nIf a buzzer is connected the BUZ-, then beeper beeps on events that normal beeper doesn't beep (like attitude on ground).\nWorkaround is described below\n(",(0,s.jsx)(n.a,{href:"Board---Asgard32#adding-a-real-beeper-function",children:"Adding a (real) beeper function"}),")."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"padpin-function-map-for-asgard32-f4",children:"Pad/Pin function map for Asgard32 F4"}),"\n",(0,s.jsxs)(n.p,{children:["![",(0,s.jsx)(n.a,{href:"https://user-images.githubusercontent.com/14850998/43266681-f9381526-9126-11e8-974e-eaa5d4129487.png",children:"https://user-images.githubusercontent.com/14850998/43266681-f9381526-9126-11e8-974e-eaa5d4129487.png"}),"]"]}),"\n",(0,s.jsxs)(n.p,{children:["[",(0,s.jsx)(n.a,{href:"https://github.com/betaflight/betaflight/files/2232258/AG3XF4-function_map-20180626.pdf",children:"https://github.com/betaflight/betaflight/files/2232258/AG3XF4-function_map-20180626.pdf"}),"]"]}),"\n",(0,s.jsx)(n.h3,{id:"adding-a-real-beeper-function",children:"Adding a (real) beeper function"}),"\n",(0,s.jsx)(n.p,{children:"The beeper feature is configured but no pin is assigned by default for v3.4.1 and later."}),"\n",(0,s.jsx)(n.p,{children:"To use this facility to drive an actual beeper, you will need one of the followings."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"External MOSFET switch for self activating beeper/buzzer (the one that beeps only by applying an appropriate voltage at + and -."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A buzzer unit, such as ",(0,s.jsx)(n.a,{href:"http://www.mateksys.com/?portfolio=dbuz5v",children:"http://www.mateksys.com/?portfolio=dbuz5v"})," or similar level triggered buzzer."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To activate it as a level I/O, pick a pin and assign it as a beeper resource. For example, M7 pad (PB14) is a good candidate."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"resource beeper b14\n"})}),"\n",(0,s.jsx)(n.p,{children:'Connect selected pad to buzzer\'s signal pad. For Mateksys unit mentioned above, "B-" is the signal pad.'}),"\n",(0,s.jsx)(n.p,{children:"You may need to adjust the polarity of the signal."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"set beeper_inversion = OFF # if your beeper beeps when it supposed to be silent\nset beeper_inversion = ON # default\n"})}),"\n",(0,s.jsx)(n.p,{children:"This is the circuit used for testing."}),"\n",(0,s.jsxs)(n.p,{children:["![",(0,s.jsx)(n.a,{href:"https://user-images.githubusercontent.com/14850998/36553159-f7805d12-183e-11e8-8e22-8cd2740a53b8.png",children:"https://user-images.githubusercontent.com/14850998/36553159-f7805d12-183e-11e8-8e22-8cd2740a53b8.png"}),"]"]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var s=r(67294);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);