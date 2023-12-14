"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4223],{63614:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var i=r(85893),s=r(11151);const t={},d='OMNIBUS F4 AIO, F4 V2/V3/V4, F4 Pro "(v2)"/V3 and ASGARD',l={id:"support/boards/OMNIBUSF4",title:'OMNIBUS F4 AIO, F4 V2/V3/V4, F4 Pro "(v2)"/V3 and ASGARD',description:"Board identification",source:"@site/docs/support/boards/OMNIBUSF4.md",sourceDirName:"support/boards",slug:"/support/boards/OMNIBUSF4",permalink:"/docs/support/boards/OMNIBUSF4",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"support",previous:{title:"OMNIBUSF4-V2",permalink:"/docs/support/boards/OMNIBUSF4-V2"},next:{title:"Board Omnibus F4 Nano V7",permalink:"/docs/support/boards/OMNIBUSF4NANOV7"}},h={},o=[{value:"Board identification",id:"board-identification",level:3},{value:"Note for Omnibus F4 V6 and Omnibus F4 Nano V6 users (2019-01-17)",id:"note-for-omnibus-f4-v6-and-omnibus-f4-nano-v6-users-2019-01-17",level:3},{value:"Note for Omnibus F4 Nano V4, V5 and V6 users (2018-08-24)",id:"note-for-omnibus-f4-nano-v4-v5-and-v6-users-2018-08-24",level:3},{value:"Note for OMNIBUS F4 V3, V4, V5 and ASGARD users",id:"note-for-omnibus-f4-v3-v4-v5-and-asgard-users",level:3},{value:"v3.1.7 and later: LED strip pin assignment has changed for OMNIBUSF4SD target",id:"v317-and-later-led-strip-pin-assignment-has-changed-for-omnibusf4sd-target",level:3},{value:"Board naming (needs updating)",id:"board-naming-needs-updating",level:3},{value:"OMNIBUS F4 AIO Features",id:"omnibus-f4-aio-features",level:2},{value:"OMNIBUS F4 Pro features",id:"omnibus-f4-pro-features",level:2},{value:"Betaflight 3.1 specific configuration",id:"betaflight-31-specific-configuration",level:2},{value:"OMNIBUS F4 AIO",id:"omnibus-f4-aio",level:3},{value:"Resource mapping (WIP)",id:"resource-mapping-wip",level:4},{value:"OMNIBUS F4 V2 and F4 Pro",id:"omnibus-f4-v2-and-f4-pro",level:3},{value:"Resource Mapping (WIP)",id:"resource-mapping-wip-1",level:4},{value:"Other Resources",id:"other-resources",level:2},{value:"Receiver Setup",id:"receiver-setup",level:2},{value:"Serial RX",id:"serial-rx",level:3},{value:"Spektrum Binding (v3.1.6+)",id:"spektrum-binding-v316",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"omnibus-f4-aio-f4-v2v3v4-f4-pro-v2v3-and-asgard",children:'OMNIBUS F4 AIO, F4 V2/V3/V4, F4 Pro "(v2)"/V3 and ASGARD'}),"\n",(0,i.jsx)(n.h3,{id:"board-identification",children:"Board identification"}),"\n",(0,i.jsxs)(n.p,{children:["For board identification, see\n",(0,i.jsx)(n.a,{href:"https://www.rcgroups.com/forums/showthread.php?2837385-OMNIBUS-F4-V2-Identifying-revisions",children:"OMNIBUS F4 V2 & V3 : Identifying revisions"})]}),"\n",(0,i.jsx)(n.h3,{id:"note-for-omnibus-f4-v6-and-omnibus-f4-nano-v6-users-2019-01-17",children:"Note for Omnibus F4 V6 and Omnibus F4 Nano V6 users (2019-01-17)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Firmware target for V6 is ",(0,i.jsx)(n.code,{children:"OMNIBUSF4V6"}),"and for Nano V6 is ",(0,i.jsx)(n.code,{children:"OMNIBUSF4FW"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"note-for-omnibus-f4-nano-v4-v5-and-v6-users-2018-08-24",children:"Note for Omnibus F4 Nano V4, V5 and V6 users (2018-08-24)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Serial RX port for inverted protocols (e.g., S.BUS) is UART1, and there is no programmable inverters."}),"\n",(0,i.jsx)(n.li,{children:"Flit10 Rx works only on UART3"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"note-for-omnibus-f4-v3-v4-v5-and-asgard-users",children:"Note for OMNIBUS F4 V3, V4, V5 and ASGARD users"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On OMNIBUS F4 V3 and later, serial RX is ",(0,i.jsx)(n.strong,{children:"UART6"}),", not UART1."]}),"\n",(0,i.jsx)(n.li,{children:"ASGARD also uses UART6 RX (J5) for serial RX."}),"\n",(0,i.jsx)(n.li,{children:"These boards require a firmware with programmable inverter support (still OMNIBUSF4SD target)."}),"\n",(0,i.jsx)(n.li,{children:"With the support, inversion will be enabled/disabled according to selected serial RX protocol (e.g. SBUS, IBUS, ...)."}),"\n",(0,i.jsx)(n.li,{children:"However, inverter pin differs between F4 V3/V4 and ASGARD, and OMNIBUSF4SD target defaults to F4 V3/V4 design.\nASGARD users must explicitly change the pin mapping by executing the following CLI command."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"resource inverter 6 c9\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The full inverter support is available as current dev master, available at ",(0,i.jsx)(n.a,{href:"http://andwho.sytes.net:8080/job/BorisB_BetaFlight/",children:"http://andwho.sytes.net:8080/job/BorisB_BetaFlight/"})," . Select build after #1253."]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed inversion firmware based on 3.1.7 is available at ",(0,i.jsx)(n.a,{href:"https://www.dropbox.com/s/hj4jd3av8oko9ji/betaflight_3.1.6_Asgard_PC9_HIGH_SBUSInverter_Enabled?dl=0",children:"https://www.dropbox.com/s/hj4jd3av8oko9ji/betaflight_3.1.6_Asgard_PC9_HIGH_SBUSInverter_Enabled?dl=0"}),"\nWith this firmware, UART6 is serial RX with inversion (SBUS)."]}),"\n",(0,i.jsx)(n.li,{children:"Note Spektrum users can use stock 3.1.7."}),"\n",(0,i.jsx)(n.li,{children:"IBUS users probably need the full inverter support (for stability reasons)."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"v317-and-later-led-strip-pin-assignment-has-changed-for-omnibusf4sd-target",children:"v3.1.7 and later: LED strip pin assignment has changed for OMNIBUSF4SD target"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"THIS ALSO APPLIES TO ASGARD"})}),"\n",(0,i.jsx)(n.p,{children:"v3.1.x and earlier uses PWM5 (OMNIBUSF4 target) or PWM6 (OMNIBUSF4SD target) for LED strip, not the LED labelled pin. This was a work around for the original OMNIBUS F4 AIO having invalid pin on the designated pin. However, newer revisions of the OMNIBUS F4 family has valid (usable) pin assigned to the LED pin. Unfortunately, the pin was not ready for use with BF3.1.6 and earlier, but is was made default after BF3.1.7 and later. It means the current working connection to non-LED connector/through-hole in BF3.1.6 and earlier does not work unless explicitly remapped to the current pin."}),"\n",(0,i.jsxs)(n.p,{children:["Those users with working LED strip on PWM5 or PWM6 can either migrate to the new assignment if the board supports the mapping, or explicitly assign older mapping with the ",(0,i.jsx)(n.code,{children:"resource"})," CLI command."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Migrating to the new assignment"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Users of the following boards can migrate (rewire the LED strip signal) to the new assignment that uses the designated LED through-hole/connector."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"OMNIBUS F4 V2 (J9)"}),"\n",(0,i.jsx)(n.li,{children:"OMNIBUS F4 V3 (J9)"}),"\n",(0,i.jsx)(n.li,{children:"OMNIBUS F4 Pro V3 (J1)"}),"\n",(0,i.jsx)(n.li,{children:"ASGARD V1 and V2 (J1)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Notes:\n(1) v3.1.7 firmware is already modified to use these through-hole/connector.\n(2) Unfortunately, PPM users can't use this new assignment because The new pin (MCU PB6) has a timer collision with PPM input pin (PB8); these users are forced to use the remap method below."}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Explicit pin assignment remapping."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Users who choose (or forced in PPM case) not to migrate to the new assignment have to explicitly remap the assignment to the older default using the resource CLI command below."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"resource led_strip a8\n"})}),"\n",(0,i.jsx)(n.h3,{id:"board-naming-needs-updating",children:"Board naming (needs updating)"}),"\n",(0,i.jsx)(n.p,{children:"These boards are called differently depending on the distributor."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"+----------------------+----------------------------+-------------+\n| myairbot.com         | RTFQ                       | BF target   |\n+----------------------+----------------------------+-------------+\n| OMNIBUS AIO F4       | FLIP32-F4-OMNIBUS          | OMNIBUSF4   |\n| OMNIBUS AIO F4 V2    | FLIP32-F4-OMNIBUS V2       | OMNIBUSF4SD |\n| OMNIBUS F4 Pro       | FLIP32-F4-OMNIBUS V2 PRO   | OMNIBUSF4SD |\n| OMNIBUS F4 Pro (v2)  |                            |             |\n+----------------------+----------------------------+-------------+\n"})}),"\n",(0,i.jsx)(n.h2,{id:"omnibus-f4-aio-features",children:"OMNIBUS F4 AIO Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SPI Gyro MPU6000"}),"\n",(0,i.jsx)(n.li,{children:"STM32 F405 MCU, Runs Betaflight 3.0 firmware"}),"\n",(0,i.jsx)(n.li,{children:"SBUS/PPM input (Pinheaders)"}),"\n",(0,i.jsx)(n.li,{children:"6PWM output (1-4Pinheaders and Sh1.0 Plug, 5-6 as Pinheaders)"}),"\n",(0,i.jsx)(n.li,{children:"NO BARO"}),"\n",(0,i.jsx)(n.li,{children:"128Mbit Flash"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"omnibus-f4-pro-features",children:"OMNIBUS F4 Pro features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SPI Gyro MPU6000"}),"\n",(0,i.jsx)(n.li,{children:"On-Board OSD (controlled by Betaflight, FC over SPI bus)"}),"\n",(0,i.jsx)(n.li,{children:"MicroSD Blackbox"}),"\n",(0,i.jsx)(n.li,{children:"Baro (BMP280)"}),"\n",(0,i.jsx)(n.li,{children:"F4 Processor (F405)"}),"\n",(0,i.jsx)(n.li,{children:"5v 3a SBEC"}),"\n",(0,i.jsx)(n.li,{children:"Built-in Current Sensor"}),"\n",(0,i.jsx)(n.li,{children:"On-Board Video Filter (can only supply 5V to VTX and Camera)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"betaflight-31-specific-configuration",children:"Betaflight 3.1 specific configuration"}),"\n",(0,i.jsx)(n.h3,{id:"omnibus-f4-aio",children:"OMNIBUS F4 AIO"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use OMNIBUSF4 target."}),"\n",(0,i.jsx)(n.li,{children:"LED strip port is PWM5."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"resource-mapping-wip",children:"Resource mapping (WIP)"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Label"}),(0,i.jsx)(n.th,{children:"Pin"}),(0,i.jsx)(n.th,{children:"Timer"}),(0,i.jsx)(n.th,{children:"DMA"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Note"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RSSI"}),(0,i.jsx)(n.td,{children:"A0"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Not ADC capable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PWM5"}),(0,i.jsx)(n.td,{children:"A1"}),(0,i.jsx)(n.td,{children:"5,2"}),(0,i.jsx)(n.td,{children:"1,4"}),(0,i.jsx)(n.td,{children:"motor 5, led_strip"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PWM4"}),(0,i.jsx)(n.td,{children:"A2"}),(0,i.jsx)(n.td,{children:"2,3"}),(0,i.jsx)(n.td,{children:"1,1"}),(0,i.jsx)(n.td,{children:"motor 4"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PWM3"}),(0,i.jsx)(n.td,{children:"A3"}),(0,i.jsx)(n.td,{children:"2,4"}),(0,i.jsx)(n.td,{children:"1,6"}),(0,i.jsx)(n.td,{children:"motor 3"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PWM6"}),(0,i.jsx)(n.td,{children:"A8"}),(0,i.jsx)(n.td,{children:"1,1"}),(0,i.jsx)(n.td,{children:"2,3"}),(0,i.jsx)(n.td,{children:"motor 6"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UART1 TX"}),(0,i.jsx)(n.td,{children:"A9"}),(0,i.jsx)(n.td,{children:"1,2"}),(0,i.jsx)(n.td,{children:"2,2"}),(0,i.jsx)(n.td,{children:"serial_tx 1"}),(0,i.jsx)(n.td,{children:"Not remappable with v3.1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UART1 RX"}),(0,i.jsx)(n.td,{children:"A10"}),(0,i.jsx)(n.td,{children:"1,3"}),(0,i.jsx)(n.td,{children:"?,?"}),(0,i.jsx)(n.td,{children:"serial_rx 1"}),(0,i.jsx)(n.td,{children:"Not remappable with v3.1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PWM1"}),(0,i.jsx)(n.td,{children:"B0"}),(0,i.jsx)(n.td,{children:"3,3"}),(0,i.jsx)(n.td,{children:"1,7"}),(0,i.jsx)(n.td,{children:"motor 1"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PWM2"}),(0,i.jsx)(n.td,{children:"B1"}),(0,i.jsx)(n.td,{children:"3,4"}),(0,i.jsx)(n.td,{children:"1,2"}),(0,i.jsx)(n.td,{children:"motor 2"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LED"}),(0,i.jsx)(n.td,{children:"B6"}),(0,i.jsx)(n.td,{children:"4,1"}),(0,i.jsx)(n.td,{children:"1,0"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"J9 (Not accessible with v3.1)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PPM"}),(0,i.jsx)(n.td,{children:"B14"}),(0,i.jsx)(n.td,{children:"12,3"}),(0,i.jsx)(n.td,{children:"n.a"}),(0,i.jsx)(n.td,{children:"ppm"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CH2"}),(0,i.jsx)(n.td,{children:"B15"}),(0,i.jsx)(n.td,{children:"12,4"}),(0,i.jsx)(n.td,{children:"n.a"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UART3 TX"}),(0,i.jsx)(n.td,{children:"B10"}),(0,i.jsx)(n.td,{children:"2,3(!)"}),(0,i.jsx)(n.td,{children:"?,?"}),(0,i.jsx)(n.td,{children:"serial_tx 2"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UART3 RX"}),(0,i.jsx)(n.td,{children:"B11"}),(0,i.jsx)(n.td,{children:"2,4(!)"}),(0,i.jsx)(n.td,{children:"?,?"}),(0,i.jsx)(n.td,{children:"serial_rx 2"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CRNT"}),(0,i.jsx)(n.td,{children:"C1"}),(0,i.jsx)(n.td,{children:"---"}),(0,i.jsx)(n.td,{children:"2,4"}),(0,i.jsx)(n.td,{children:"adc_curr"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"VBAT"}),(0,i.jsx)(n.td,{children:"C2"}),(0,i.jsx)(n.td,{children:"---"}),(0,i.jsx)(n.td,{children:"2,4"}),(0,i.jsx)(n.td,{children:"adc_batt"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UART6 TX"}),(0,i.jsx)(n.td,{children:"C6"}),(0,i.jsx)(n.td,{children:"8,1"}),(0,i.jsx)(n.td,{children:"2,2"}),(0,i.jsx)(n.td,{children:"serial_tx 3"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UART6 RX"}),(0,i.jsx)(n.td,{children:"C7"}),(0,i.jsx)(n.td,{children:"8,2"}),(0,i.jsx)(n.td,{children:"2,3"}),(0,i.jsx)(n.td,{children:"serial_rx 3"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CH5"}),(0,i.jsx)(n.td,{children:"C8"}),(0,i.jsx)(n.td,{children:"8,3"}),(0,i.jsx)(n.td,{children:"2,4"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CH6"}),(0,i.jsx)(n.td,{children:"C9"}),(0,i.jsx)(n.td,{children:"8,4"}),(0,i.jsx)(n.td,{children:"2,7"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"omnibus-f4-v2-and-f4-pro",children:"OMNIBUS F4 V2 and F4 Pro"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use OMNIBUSF4SD target."}),"\n",(0,i.jsx)(n.li,{children:"v3.1.7 and later: For OMNIBUS F4 Pro V2, LED strip signal is connected to PWM6."}),"\n",(0,i.jsx)(n.li,{children:"v3.1.6 and earlier: LED strip signal is connected to PWM6."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"resource-mapping-wip-1",children:"Resource Mapping (WIP)"}),"\n",(0,i.jsx)(n.p,{children:"(Not available yet)"}),"\n",(0,i.jsx)(n.h2,{id:"other-resources",children:"Other Resources"}),"\n",(0,i.jsxs)(n.p,{children:["RCgroups thread for the F4 AIO at ",(0,i.jsx)(n.a,{href:"https://www.rcgroups.com/forums/showthread.php?2754926-Omnibus-F4-AIO",children:"https://www.rcgroups.com/forums/showthread.php?2754926-Omnibus-F4-AIO"})]}),"\n",(0,i.jsxs)(n.p,{children:["RCgroups thread for the F4 Pro at ",(0,i.jsx)(n.a,{href:"https://www.rcgroups.com/forums/showthread.php?2801694-Omnibus-f4-pro",children:"https://www.rcgroups.com/forums/showthread.php?2801694-Omnibus-f4-pro"})]}),"\n",(0,i.jsxs)(n.p,{children:["Layouts for F4 Pro ",(0,i.jsx)(n.a,{href:"https://www.rcgroups.com/forums/showatt.php?attachmentid=9631520&d=1482680395",children:"Top"})," ",(0,i.jsx)(n.a,{href:"https://www.rcgroups.com/forums/showatt.php?attachmentid=9631521&d=1482680397",children:"Bottom"})]}),"\n",(0,i.jsx)(n.h2,{id:"receiver-setup",children:"Receiver Setup"}),"\n",(0,i.jsx)(n.h3,{id:"serial-rx",children:"Serial RX"}),"\n",(0,i.jsx)(n.p,{children:"On the OMNIBUSF4, the UART1 RX pin is available for use on 3 different headers, only one of which can be used at any given time:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SBUS port (via inverter), this pin is also shared with the PPM pin."}),"\n",(0,i.jsx)(n.li,{children:"Spektrum sat header (no inverter)"}),"\n",(0,i.jsx)(n.li,{children:"UART1 header (no inverter)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"spektrum-binding-v316",children:"Spektrum Binding (v3.1.6+)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure the flight controller for your receiver by opening the BetaFlight Configurator and on the ports page, set UART1 to Serial RX and click save. Switch to the configuration tab and in the Receiver section, set the mode to SerialRX and provider to either:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Spektrum 2048 for DSMX"}),"\n",(0,i.jsx)(n.li,{children:"Spektrum 1024 for DSM2"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the CLI run:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"set spektrum_sat_bind = 9\nset spektrum_sat_bind_autorst = 0\nsave\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Wait for the board to reboot, then remove all power from the board (unplug the USB), wait a moment then and plug the in the USB cable."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The bind light on the receiver should be flashing."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Turn on your transmitter in bind mode."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The flashing light on the receiver should now be solid."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Turn of your transmitter."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Finally take the receiver out of bind mode by running the following in the CLI:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"set spektrum_sat_bind = 0\nsave\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Make sure to change to TAER channel order under the Receiver tab in the BetaFlight configurator."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>d});var i=r(67294);const s={},t=i.createContext(s);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);