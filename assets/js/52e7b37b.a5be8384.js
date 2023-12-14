"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3016],{21256:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=t(85893),d=t(11151);const i={},r="MSP Extensions",l={id:"development/API/MSP-Extensions",title:"MSP Extensions",description:"Cleanflight includes a number of extensions to the MultiWii Serial Protocol (MSP). This document describes",source:"@site/docs/development/API/MSP-Extensions.mdx",sourceDirName:"development/API",slug:"/development/API/MSP-Extensions",permalink:"/docs/development/API/MSP-Extensions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"DisplayPort MSP Extensions",permalink:"/docs/development/API/DisplayPort"},next:{title:"Atomic Barrier implementation",permalink:"/docs/development/Atomic-Barrier"}},h={},o=[{value:"Mode Ranges",id:"mode-ranges",level:2},{value:"MSP_MODE_RANGES",id:"msp_mode_ranges",level:3},{value:"MSP_MODE_RANGES_EXTRA",id:"msp_mode_ranges_extra",level:3},{value:"MSP_SET_MODE_RANGE",id:"msp_set_mode_range",level:3},{value:"Implementation Notes",id:"implementation-notes",level:3},{value:"Adjustment Ranges",id:"adjustment-ranges",level:2},{value:"MSP_ADJUSTMENT_RANGES",id:"msp_adjustment_ranges",level:3},{value:"MSP_SET_ADJUSTMENT_RANGE",id:"msp_set_adjustment_range",level:3},{value:"MSP_SET_1WIRE",id:"msp_set_1wire",level:3},{value:"AdjustmentIndex",id:"adjustmentindex",level:4},{value:"AdjustmentFunction",id:"adjustmentfunction",level:4},{value:"Implementation Notes",id:"implementation-notes-1",level:3},{value:"Deprecated MSP",id:"deprecated-msp",level:2},{value:"See Also",id:"see-also",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"msp-extensions",children:"MSP Extensions"}),"\n",(0,s.jsx)(n.p,{children:"Cleanflight includes a number of extensions to the MultiWii Serial Protocol (MSP). This document describes\nthose extensions in order that 3rd party tools may identify cleanflight firmware and react appropriately."}),"\n",(0,s.jsx)(n.p,{children:"Issue the MSP_API_VERSION command to find out if the firmware supports them."}),"\n",(0,s.jsx)(n.h2,{id:"mode-ranges",children:"Mode Ranges"}),"\n",(0,s.jsx)(n.h3,{id:"msp_mode_ranges",children:"MSP_MODE_RANGES"}),"\n",(0,s.jsx)(n.p,{children:"The MSP_MODE_RANGES returns the current auxiliary mode settings from the flight controller. It should be invoked\nbefore any modification is made to the configuration."}),"\n",(0,s.jsx)(n.p,{children:"The message returns a group of 4 unsigned bytes for each 'slot' available in the flight controller. The number of\nslots should be calculated from the size of the returned message."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Command"}),(0,s.jsx)(n.th,{children:"Msg Id"}),(0,s.jsx)(n.th,{children:"Direction"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MSP_MODE_RANGES"}),(0,s.jsx)(n.td,{children:"34"}),(0,s.jsx)(n.td,{children:"to FC"}),(0,s.jsx)(n.td,{children:"Following this command, the FC returns a block of 4 bytes for each auxiliary mode 'slot'"})]})})]}),"\n",(0,s.jsx)(n.p,{children:"Unassigned slots have rangeStartStep == rangeEndStep. Each element contains the following fields."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Data"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"permanentId"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"See Modes.md for a definition of the permanent ids"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auxChannelIndex"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"The Aux switch number (indexed from 0)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeStartStep"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"The start value for this element in 'blocks' of 25 where 0 == 900 and 48 == 2100"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeEndStep"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"The end value for this element in 'blocks' of 25 where 0 == 900 and 48 == 2100"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Thus, for a cleanflight firmware with 40 slots 160 bytes would be returned in response to MSP_MODE_RANGES."}),"\n",(0,s.jsx)(n.h3,{id:"msp_mode_ranges_extra",children:"MSP_MODE_RANGES_EXTRA"}),"\n",(0,s.jsx)(n.p,{children:"The MSP_MODE_RANGES_EXTRA returns the extra mode setting parameters from the flight controller. It should be invoked\nin conjunction with MSP_MODE_RANGES before any modification is made to the configuration."}),"\n",(0,s.jsx)(n.p,{children:"The message returns the number of extra elements followed by a group of bytes for each 'slot' available in the flight\ncontroller. The number of slots should be the same as for MSP_MODE_RANGES, calculated from the size of the returned\nmessage and the number of bytes per group."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Command"}),(0,s.jsx)(n.th,{children:"Msg Id"}),(0,s.jsx)(n.th,{children:"Direction"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MSP_MODE_RANGES_EXTRA"}),(0,s.jsx)(n.td,{children:"238"}),(0,s.jsx)(n.td,{children:"to FC"}),(0,s.jsx)(n.td,{children:"Following this command, the FC returns a block of bytes for each auxiliary mode 'slot'"})]})})]}),"\n",(0,s.jsx)(n.p,{children:"The return message is prepended with the number of bytes per element (3 bytes). Each element contains the\nfollowing fields:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Data"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"permanentId"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"See Modes.md for a definition of the permanent ids"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modeLogic"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"0 = Logic AND; 1 = Logic OR"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"linkedTo"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"Permanent id to which this mode is linked."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Thus, for a cleanflight firmware with 20 slots, 61 bytes (including prepended size) would be returned in response to\nMSP_MODE_RANGES_EXTRA."}),"\n",(0,s.jsx)(n.h3,{id:"msp_set_mode_range",children:"MSP_SET_MODE_RANGE"}),"\n",(0,s.jsxs)(n.p,{children:["The MSP_SET_MODE_RANGE is used to inform the flight controller of\nauxiliary mode settings. The client ",(0,s.jsx)(n.em,{children:"must"})," return all auxiliary\nelements, including those that have been disabled or are undefined, by\nsending this message for all auxiliary slots."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Command"}),(0,s.jsx)(n.th,{children:"Msg Id"}),(0,s.jsx)(n.th,{children:"Direction"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MSP_SET_MODE_RANGE"}),(0,s.jsx)(n.td,{children:"35"}),(0,s.jsx)(n.td,{children:"to FC"})]})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Data"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sequence id"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"A monotonically increasing ID, from 0 to the number of slots -1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"permanentId"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"See Modes.md for a definition of the permanent ids"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auxChannelIndex"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"The Aux channel number (indexed from 0)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeStartStep"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"The start value for this element in 'blocks' of 25 where 0 == 900 and 48 == 2100"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeEndStep"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"The end value for this element in 'blocks' of 25 where 0 == 900 and 48 == 2100"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"implementation-notes",children:"Implementation Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The client should make no assumptions about the number of slots available. Rather, the number should be computed\nfrom the size of the MSP_MODE_RANGES message divided by the size of the returned data element (4 bytes);"}),"\n",(0,s.jsx)(n.li,{children:"The client should ensure that all changed items are returned to the flight controller, including those where a\nswitch or range has been disabled;"}),"\n",(0,s.jsx)(n.li,{children:"A 'null' return, with all values other than the sequence id set to 0, must be made for all unused slots, up to\nthe maximum number of slots calculated from the initial message."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"adjustment-ranges",children:"Adjustment Ranges"}),"\n",(0,s.jsx)(n.h3,{id:"msp_adjustment_ranges",children:"MSP_ADJUSTMENT_RANGES"}),"\n",(0,s.jsx)(n.p,{children:"The MSP_ADJUSTMENT_RANGES returns the current adjustment range settings from\nthe flight controller. It should be invoked before any modification is\nmade to the configuration."}),"\n",(0,s.jsx)(n.p,{children:"The message returns a group of 6 unsigned bytes for each 'slot'\navailable in the flight controller. The number of slots should be\ncalculated from the size of the returned message."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Command"}),(0,s.jsx)(n.th,{children:"Msg Id"}),(0,s.jsx)(n.th,{children:"Direction"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MSP_ADJUSTMENT_RANGES"}),(0,s.jsx)(n.td,{children:"52"}),(0,s.jsx)(n.td,{children:"to FC"}),(0,s.jsx)(n.td,{children:"Following this command, the FC returns a block of 6 bytes for each adjustment range 'slot'"})]})})]}),"\n",(0,s.jsx)(n.p,{children:"Unassigned slots have rangeStartStep == rangeEndStep. Each element contains the following fields."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Data"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"adjustmentStateIndex"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"See below"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auxChannelIndex"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"The Aux channel number (indexed from 0) used to activate the adjustment"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeStartStep"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"The start value for this element in 'blocks' of 25 where 0 == 900 and 48 == 2100"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeEndStep"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"The end value for this element in 'blocks' of 25 where 0 == 900 and 48 == 2100"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"adjustmentFunction"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"See below"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auxSwitchChannelIndex"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"The Aux channel number used to perform the function (indexed from 0)"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Thus, for a cleanflight firmware with 12 slots 72 bytes would be returned in response to MSP_ADJUSTMENT_RANGES,"}),"\n",(0,s.jsx)(n.h3,{id:"msp_set_adjustment_range",children:"MSP_SET_ADJUSTMENT_RANGE"}),"\n",(0,s.jsxs)(n.p,{children:["The MSP_SET_ADJUSTMENT_RANGE is used to inform the flight controller of\nadjustment range settings. The client ",(0,s.jsx)(n.em,{children:"must"})," return all adjustment range\nelements, including those that have been disabled or are undefined, by\nsending this message for all adjustment range slots."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Command"}),(0,s.jsx)(n.th,{children:"Msg Id"}),(0,s.jsx)(n.th,{children:"Direction"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MSP_SET_ADJUSTMENT_RANGE"}),(0,s.jsx)(n.td,{children:"53"}),(0,s.jsx)(n.td,{children:"to FC"})]})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Data"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sequence id"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"A monotonically increasing ID, from 0 to the number of slots -1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"adjustmentStateIndex"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"See below"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auxChannelIndex"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"The Aux channel number (indexed from 0)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeStartStep"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"The start value for this element in 'blocks' of 25 where 0 == 900 and 48 == 2100"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeEndStep"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"The end value for this element in 'blocks' of 25 where 0 == 900 and 48 == 2100"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"adjustmentFunction"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"See below"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auxSwitchChannelIndex"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"The Aux channel number used to perform the function (indexed from 0)"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"msp_set_1wire",children:"MSP_SET_1WIRE"}),"\n",(0,s.jsx)(n.p,{children:"The MSP_SET_1WIRE is used to enable serial1wire passthrough\nnote: it would be ideal to disable this when armed"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Command"}),(0,s.jsx)(n.th,{children:"Msg Id"}),(0,s.jsx)(n.th,{children:"Direction"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MSP_SET_1WIRE"}),(0,s.jsx)(n.td,{children:"243"}),(0,s.jsx)(n.td,{children:"to FC"})]})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Data"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"esc id"}),(0,s.jsx)(n.td,{children:"uint8"}),(0,s.jsx)(n.td,{children:"A monotonically increasing ID, from 0 to the number of escs -1"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"adjustmentindex",children:"AdjustmentIndex"}),"\n",(0,s.jsx)(n.p,{children:"The FC maintains internal state for each adjustmentStateIndex, currently 4 simultaneous adjustment states are maintained. Multiple adjustment ranges\ncan be configured to use the same state but care should be taken not to send multiple adjustment ranges that when active would confict."}),"\n",(0,s.jsx)(n.p,{children:"e.g. Configuring two identical adjustment ranges using the same slot would conflict, but configuring two adjustment ranges that used\nonly one half of the possible channel range each but used the same adjustmentStateIndex would not conflict."}),"\n",(0,s.jsx)(n.p,{children:"The FC does NOT check for conflicts."}),"\n",(0,s.jsx)(n.h4,{id:"adjustmentfunction",children:"AdjustmentFunction"}),"\n",(0,s.jsxs)(n.p,{children:["There are many adjustments that can be made, the numbers of them and their use is found in the documentation of the cli ",(0,s.jsx)(n.code,{children:"adjrange"})," command in the 'Inflight Adjustents' section."]}),"\n",(0,s.jsx)(n.h3,{id:"implementation-notes-1",children:"Implementation Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The client should make no assumptions about the number of slots available. Rather, the number should be computed\nfrom the size of the MSP_ADJUSTMENT_RANGES message divided by the size of the returned data element (6 bytes);"}),"\n",(0,s.jsx)(n.li,{children:"The client should ensure that all changed items are returned to the flight controller, including those where a\nswitch or range has been disabled;"}),"\n",(0,s.jsx)(n.li,{children:"A 'null' return, with all values except for the sequence id set to 0, must be made for all unused slots,\nup to the maximum number of slots calculated from the initial message."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deprecated-msp",children:"Deprecated MSP"}),"\n",(0,s.jsx)(n.p,{children:"The following MSP commands are replaced by the MSP_MODE_RANGES and\nMSP_SET_MODE_RANGE extensions, and are not recognised by\ncleanflight."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"MSP_BOX"}),"\n",(0,s.jsx)(n.li,{children:"MSP_SET_BOX"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See Also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/development/Modes",children:"Modes"})," describes the user visible implementation for the cleanflight\nmodes extension."]})]})}function a(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(67294);const d={},i=s.createContext(d);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);