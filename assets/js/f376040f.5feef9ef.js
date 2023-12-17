"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2720],{87012:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(85893),d=t(11151);const i={},r="DisplayPort MSP Extensions",l={id:"development/api/DisplayPort",title:"DisplayPort MSP Extensions",description:"Betaflight supports what is sometimes referred to as Canvas Mode whereby the OSD can send arbitrary character strings to be displayed at given screen coordinates.",source:"@site/docs/development/api/DisplayPort.md",sourceDirName:"development/api",slug:"/development/api/DisplayPort",permalink:"/docs/development/api/DisplayPort",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"Betaflight 4.4 Cloud Build API",permalink:"/docs/development/api/Cloud-Build-API"},next:{title:"MSP Extensions",permalink:"/docs/development/api/MSP-Extensions"}},h={},c=[{value:"DisplayPort MSP commands",id:"displayport-msp-commands",level:2},{value:"MSP_SET_OSD_CANVAS",id:"msp_set_osd_canvas",level:3},{value:"MSP_OSD_CANVAS",id:"msp_osd_canvas",level:3},{value:"MSP_DISPLAYPORT",id:"msp_displayport",level:3},{value:"DisplayPort sub-commands",id:"displayport-sub-commands",level:2},{value:"MSP_DP_HEARTBEAT",id:"msp_dp_heartbeat",level:4},{value:"MSP_DP_RELEASE",id:"msp_dp_release",level:4},{value:"MSP_DP_CLEAR_SCREEN",id:"msp_dp_clear_screen",level:4},{value:"MSP_DP_WRITE_STRING",id:"msp_dp_write_string",level:4},{value:"MSP_DP_DRAW_SCREEN",id:"msp_dp_draw_screen",level:4},{value:"MSP_DP_OPTIONS",id:"msp_dp_options",level:4},{value:"MSP_DP_SYS",id:"msp_dp_sys",level:4}];function o(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"displayport-msp-extensions",children:"DisplayPort MSP Extensions"}),"\n",(0,n.jsx)(s.p,{children:"Betaflight supports what is sometimes referred to as Canvas Mode whereby the OSD can send arbitrary character strings to be displayed at given screen coordinates."}),"\n",(0,n.jsx)(s.h2,{id:"displayport-msp-commands",children:"DisplayPort MSP commands"}),"\n",(0,n.jsx)(s.h3,{id:"msp_set_osd_canvas",children:"MSP_SET_OSD_CANVAS"}),"\n",(0,n.jsxs)(s.p,{children:["The MSP_SET_OSD_CANVAS command is sent by the VTX, or display device, to the FC to indicate the size of the canvas available to the DisplayPort rendering when in HD mode. HD mode, as is indicated by ",(0,n.jsx)(s.code,{children:"vcd_video_system = HD"})," is automatically set on reception of this command."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Command"}),(0,n.jsx)(s.th,{children:"Msg Id"}),(0,n.jsx)(s.th,{children:"Direction"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MSP_SET_OSD_CANVAS"}),(0,n.jsx)(s.td,{children:"188"}),(0,n.jsx)(s.td,{children:"to FC"}),(0,n.jsx)(s.td,{children:"Sets the canvas size"})]})})]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Data"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"canvas_cols"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"The number of columns"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"canvas_rows"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"The number of rows"})]})]})]}),"\n",(0,n.jsx)(s.mermaid,{value:"sequenceDiagram\n    participant FC\n    participant VTX\n    FC->>VTX: MSP_DP_HEARTBEAT sent and detected\n    VTX->>FC: MSP_SET_OSD_CANVAS set rows/columns\n    FC->>VTX: MSP request success"}),"\n",(0,n.jsx)(s.h3,{id:"msp_osd_canvas",children:"MSP_OSD_CANVAS"}),"\n",(0,n.jsx)(s.p,{children:"The MSP_OSD_CANVAS command is sent by the configurator to the FC to determine the size of the canvas available to the DisplayPort rendering when in HD mode. This is then used on the OSD tab to show the correct number of rows/columns when editing the OSD element positions."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Command"}),(0,n.jsx)(s.th,{children:"Msg Id"}),(0,n.jsx)(s.th,{children:"Direction"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MSP_OSD_CANVAS"}),(0,n.jsx)(s.td,{children:"189"}),(0,n.jsx)(s.td,{children:"to FC"}),(0,n.jsx)(s.td,{children:"Gets the canvas size"})]})})]}),"\n",(0,n.jsx)(s.p,{children:"Response is two bytes."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Data"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"canvas_cols"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"The number of columns"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"canvas_rows"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"The number of rows"})]})]})]}),"\n",(0,n.jsx)(s.mermaid,{value:"sequenceDiagram\n    participant FC\n    participant Configurator\n    participant Preview\n    Configurator->>FC: Configurator connects to FC\n    Configurator->>FC: MSP_OSD_CANVAS get rows/columns\n    Configurator->>Preview: OSD Preview pane resized"}),"\n",(0,n.jsx)(s.h3,{id:"msp_displayport",children:"MSP_DISPLAYPORT"}),"\n",(0,n.jsx)(s.p,{children:"The MSP_DISPLAYPORT command is sent by the FC to the display device/VTX to perform a DisplayPort operation."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Command"}),(0,n.jsx)(s.th,{children:"Msg Id"}),(0,n.jsx)(s.th,{children:"Direction"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MSP_DISPLAYPORT"}),(0,n.jsx)(s.td,{children:"182"}),(0,n.jsx)(s.td,{children:"from FC"}),(0,n.jsx)(s.td,{children:"DisplayPort specific commands follow"})]})})]}),"\n",(0,n.jsx)(s.p,{children:"One of the following sub-commands will then follow."}),"\n",(0,n.jsx)(s.h2,{id:"displayport-sub-commands",children:"DisplayPort sub-commands"}),"\n",(0,n.jsx)(s.h4,{id:"msp_dp_heartbeat",children:"MSP_DP_HEARTBEAT"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Command"}),(0,n.jsx)(s.th,{children:"Msg Id"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MSP_DP_HEARTBEAT"}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Prevent OSD Slave boards from displaying a 'disconnected' status"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"msp_dp_release",children:"MSP_DP_RELEASE"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Command"}),(0,n.jsx)(s.th,{children:"Msg Id"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MSP_DP_RELEASE"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"Clears the display and allows local rendering on the display device based on telemetry information etc."})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"msp_dp_clear_screen",children:"MSP_DP_CLEAR_SCREEN"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Command"}),(0,n.jsx)(s.th,{children:"Msg Id"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MSP_DP_CLEAR_SCREEN"}),(0,n.jsx)(s.td,{children:"2"}),(0,n.jsx)(s.td,{children:"Clear the display"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"msp_dp_write_string",children:"MSP_DP_WRITE_STRING"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Command"}),(0,n.jsx)(s.th,{children:"Msg Id"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MSP_DP_WRITE_STRING"}),(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"Write a string"})]})})]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Data"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"row"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"Row on which to position the first character of the string"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"column"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"Column on which to position the first character of the string"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"attribute"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"Byte indicating the font to use and if the text should flash"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"uint8 x n"}),(0,n.jsx)(s.td,{children:"NULL terminated string of up to 30 characters in length"})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"attribute"})," parameter is encoded thus."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field"}),(0,n.jsx)(s.th,{children:"Bits"}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Version"}),(0,n.jsx)(s.td,{children:"7"}),(0,n.jsx)(s.td,{children:"Must be 0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"DISPLAYPORT_MSP_ATTR_BLINK"}),(0,n.jsx)(s.td,{children:"6"}),(0,n.jsx)(s.td,{children:"Set to have the display device automatically blink the string"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Reserved"}),(0,n.jsx)(s.td,{children:"2 - 5"}),(0,n.jsx)(s.td,{children:"Must be 0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Font number"}),(0,n.jsx)(s.td,{children:"0 - 1"}),(0,n.jsx)(s.td,{children:"Selects one of four fonts, each of 256 8 bit characters"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"msp_dp_draw_screen",children:"MSP_DP_DRAW_SCREEN"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Command"}),(0,n.jsx)(s.th,{children:"Msg Id"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MSP_DP_DRAW_SCREEN"}),(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Triggers the display of a frame after it has been cleared/rendered"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"msp_dp_options",children:"MSP_DP_OPTIONS"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Command"}),(0,n.jsx)(s.th,{children:"Msg Id"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MSP_DP_OPTIONS"}),(0,n.jsx)(s.td,{children:"5"}),(0,n.jsx)(s.td,{children:"Not used by Betaflight. Used by INAV and Ardupilot to set display resolution. 0 = SD (30x16), 1 = HD (50x18), 2 = 30x16 SD grid centered in an HD 50x18 grid (HDZero uses), 3 = 60x22 ( used by INAV / DJI WTF )"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"msp_dp_sys",children:"MSP_DP_SYS"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Command"}),(0,n.jsx)(s.th,{children:"Msg Id"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MSP_DP_SYS"}),(0,n.jsx)(s.td,{children:"6"}),(0,n.jsx)(s.td,{children:"Display system element displayportSystemElement_e at given coordinates"})]})})]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Data"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"row"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"Row on which to position the first character of the string"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"column"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"Column on which to position the first character of the string"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"system_element"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"System element to be rendered by the VTX/goggle/display device"})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"system_element"})," will be one of the following as defined by ",(0,n.jsx)(s.code,{children:"displayPortSystemElement_e "}),". Once one MSP_DP_SYS sub-command has been received by the VTX/goggle/display device then the default system elements should no longer be displayed in their default locations, but only explicitly as directed by this command. In this way, the default behaviour is as before, but as soon as any system element is explicitly positioned these OSD elements behave just like any other and can be called up is specific locations by any given OSD profile."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"// System elements rendered by VTX or Goggles\ntypedef enum {\n    DISPLAYPORT_SYS_GOGGLE_VOLTAGE = 0,\n    DISPLAYPORT_SYS_VTX_VOLTAGE = 1,\n    DISPLAYPORT_SYS_BITRATE = 2,\n    DISPLAYPORT_SYS_DELAY = 3,\n    DISPLAYPORT_SYS_DISTANCE = 4,\n    DISPLAYPORT_SYS_LQ = 5,\n    DISPLAYPORT_SYS_GOGGLE_DVR = 6,\n    DISPLAYPORT_SYS_VTX_DVR = 7,\n    DISPLAYPORT_SYS_WARNINGS = 8,\n    DISPLAYPORT_SYS_VTX_TEMP = 9,\n    DISPLAYPORT_SYS_FAN_SPEED = 10,\n    DISPLAYPORT_SYS_COUNT,\n} displayPortSystemElement_e;\n"})})]})}function a(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>r});var n=t(67294);const d={},i=n.createContext(d);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);