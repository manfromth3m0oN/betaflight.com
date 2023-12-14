"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[722],{70872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(85893),o=n(11151);const s={},i="Running with reversed motors",a={id:"support/archive/Reversed-motor-direction",title:"Running with reversed motors",description:"Spinning outwards at the front and back",source:"@site/docs/support/archive/Reversed-motor-direction.md",sourceDirName:"support/archive",slug:"/support/archive/Reversed-motor-direction",permalink:"/docs/support/archive/Reversed-motor-direction",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"support",previous:{title:"Resource Remapping Command",permalink:"/docs/support/archive/Resource-remapping"},next:{title:"RunCam Device Protocol",permalink:"/docs/support/archive/RunCam-Device-Protocol"}},c={},d=[{value:"Spinning outwards at the front and back",id:"spinning-outwards-at-the-front-and-back",level:3}];function h(e){const t={em:"em",h1:"h1",h3:"h3",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"running-with-reversed-motors",children:"Running with reversed motors"}),"\n",(0,r.jsx)(t.h3,{id:"spinning-outwards-at-the-front-and-back",children:"Spinning outwards at the front and back"}),"\n",(0,r.jsx)(t.p,{children:"This page is primarily for myself since I always forget which command it is."}),"\n",(0,r.jsx)(t.p,{children:"Reversed motors would be spinning outwards (contrary to the standard inwards), that is the front left spins counterclockwise, front right clockwise:"}),"\n",(0,r.jsx)(t.p,{children:"^    ^\n4|    |2\n\\   /\nx\n^  /   \\ ^\n|3      1|"}),"\n",(0,r.jsx)(t.p,{children:"To make betaflight understand this change, the command given is (as of betaflight 3.2):"}),"\n",(0,r.jsx)(t.p,{children:"set YAW_MOTORS_REVERSED=ON"}),"\n",(0,r.jsx)(t.p,{children:"For older betaflight:"}),"\n",(0,r.jsx)(t.p,{children:"set YAW_MOTOR_DIRECTION=-1"}),"\n",(0,r.jsxs)(t.p,{children:["Note - setting these values ",(0,r.jsx)(t.em,{children:"will not make the motors spin the other direction"}),". It simply tells betaflight that the motors are reversed so it can control the yaw accordingly. Motor direction has to either be changed in blheli or by swapping motor wires."]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);