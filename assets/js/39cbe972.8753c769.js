"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[837],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),k=n,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||o;return r?a.createElement(d,l(l({ref:t},u),{},{components:r})):a.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},37792:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={},l="MATEKSYS F405-STD",i={unversionedId:"wiki/boards/MATEKF405",id:"wiki/boards/MATEKF405",title:"MATEKSYS F405-STD",description:"Description",source:"@site/docs/wiki/boards/MATEKF405.md",sourceDirName:"wiki/boards",slug:"/wiki/boards/MATEKF405",permalink:"/docs/wiki/boards/MATEKF405",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"Matek F405-CTR",permalink:"/docs/wiki/boards/MATEKF405-CTR"},next:{title:"MATEKSYS F411-MINI",permalink:"/docs/wiki/boards/MATEKF411"}},s={},p=[{value:"Description",id:"description",level:2},{value:"MCU, Sensors and Features",id:"mcu-sensors-and-features",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Features",id:"features",level:3},{value:"Manufacturers and Distributors",id:"manufacturers-and-distributors",level:2},{value:"Designers",id:"designers",level:2},{value:"Maintainers",id:"maintainers",level:2},{value:"Tips",id:"tips",level:2},{value:"FAQ &amp; Known Issues",id:"faq--known-issues",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mateksys-f405-std"},"MATEKSYS F405-STD"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"F405+ICM20602, w/ Betaflight OSD & SD Card Slot"),(0,n.kt)("h2",{id:"mcu-sensors-and-features"},"MCU, Sensors and Features"),(0,n.kt)("h3",{id:"hardware"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MCU: 168MHz STM32F405RGT6"),(0,n.kt)("li",{parentName:"ul"},"IMU: 32K ICM20602 gyro/accelerometer (SPI)"),(0,n.kt)("li",{parentName:"ul"},"Baro: BMP280 (I2C)"),(0,n.kt)("li",{parentName:"ul"},"OSD: BetaFlight OSD w/ AT7456E chip"),(0,n.kt)("li",{parentName:"ul"},"Blackbox: MicroSD card slot (SD/SDHC)"),(0,n.kt)("li",{parentName:"ul"},"VCP, UART1, UART2, UART3, UART4, UART5"),(0,n.kt)("li",{parentName:"ul"},"Built in inverter for SBUS input (UART2-RX)"),(0,n.kt)("li",{parentName:"ul"},"PPM/UART Shared: UART2-RX"),(0,n.kt)("li",{parentName:"ul"},"SoftSerial on TX2, S5 or S6 optional"),(0,n.kt)("li",{parentName:"ul"},"Camera control on S6 or DAC optional"),(0,n.kt)("li",{parentName:"ul"},"Smartaudio & Tramp VTX protocol supported"),(0,n.kt)("li",{parentName:"ul"},"Battery Voltage Sensor: 1:10"),(0,n.kt)("li",{parentName:"ul"},"Current Sensor: No (FCHUB-6S, FCHUB-VTX, FCHUB-W option)"),(0,n.kt)("li",{parentName:"ul"},"BEC 5V: No (FCHUB-6S, FCHUB-VTX, FCHUB-W option)"),(0,n.kt)("li",{parentName:"ul"},"LDO 3.3V: Max.300mA"),(0,n.kt)("li",{parentName:"ul"},"I2C1 SDA & SCL: Yes"),(0,n.kt)("li",{parentName:"ul"},"WS2812 Led Strip : Yes"),(0,n.kt)("li",{parentName:"ul"},"Beeper : Yes"),(0,n.kt)("li",{parentName:"ul"},"RSSI: Yes")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"3x LEDs for FC STATUS (Blue, Red) and 3.3V indicator(Red)"),(0,n.kt)("li",{parentName:"ul"},"6x PWM / DShot outputs without conflict"),(0,n.kt)("li",{parentName:"ul"},"2x 2812LED outputs option"),(0,n.kt)("li",{parentName:"ul"},"5x UARTs"),(0,n.kt)("li",{parentName:"ul"},"1x Group of 5V/G/S1/S2/S3/S4 pads for 4in1 ESC Signal/GND"),(0,n.kt)("li",{parentName:"ul"},"4x pairs of corner pads for ESC Signal/GND connections (DSHOT compatible)"),(0,n.kt)("li",{parentName:"ul"},"1x pair I2C1 pads"),(0,n.kt)("li",{parentName:"ul"},"1x Side-press button for BOOT(DFU) mode"),(0,n.kt)("li",{parentName:"ul"},"1x 16pin bottom mounted FFC Slot for FCHUB-6S, FCHUB-VTX or FCHUB-W connection"),(0,n.kt)("li",{parentName:"ul"},"36x36mm PCB with 30.5mm mounting holes")),(0,n.kt)("p",null,"w/ 2x 0.5mm","*","16Pin 5cm Flexible Flat Cable and 4pcs M3 Anti-vibration Standoffs"),(0,n.kt)("h2",{id:"manufacturers-and-distributors"},"Manufacturers and Distributors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Matek Systems",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.mateksys.com/?portfolio=f405-std"},"F405-STD (NEW)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.mateksys.com/?portfolio=f405-ctr"},"F405-CTR")))),(0,n.kt)("li",{parentName:"ul"},"Discontinued:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.mateksys.com/?portfolio=f405-osd"},"F405-OSD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.mateksys.com/?portfolio=f405-aio"},"F405-AIO")))),(0,n.kt)("li",{parentName:"ul"},"BANGGOOD",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.banggood.com/Matek-F405-OSD-BetaFlight-STM32F405-Flight-Controller-Built-in-OSD-Inverter-for-RC-Multirotor-FPV-Racing-Drone-p-1141282.html"},"F405-STD (NEW)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.banggood.com/Matek-Systems-BetaFlight-F405-AIO-STM32F405-Flight-Controller-Built-in-PDB-5V2A-9V2A-Dual-BEC-p-1165338.html"},"F405-CTR"))))),(0,n.kt)("h2",{id:"designers"},"Designers"),(0,n.kt)("p",null,"Matek Systems ",(0,n.kt)("a",{parentName:"p",href:"http://www.mateksys.com"},"www.mateksys.com")),(0,n.kt)("h2",{id:"maintainers"},"Maintainers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hardware: Matek Systems")),(0,n.kt)("h2",{id:"tips"},"Tips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Included rubber anti-vibration standoffs are necessary to avoid vibration issues."),(0,n.kt)("li",{parentName:"ul"},"2812LED_Strip share I2C1_SCL pad as default. Either enable LED_Strip, or enable Baro."),(0,n.kt)("li",{parentName:"ul"},"2812LED can be resourced to S7 (PB8) if using Baro the same time."),(0,n.kt)("li",{parentName:"ul"},"Put a piece of sponge on the barometer to reduce the impact of airflow.")),(0,n.kt)("h2",{id:"faq--known-issues"},"FAQ & Known Issues"),(0,n.kt)("p",null,"Setup Guide Matek F405-STD: ",(0,n.kt)("a",{parentName:"p",href:"http://www.mateksys.com/?portfolio=f405-std"},"http://www.mateksys.com/?portfolio=f405-std")),(0,n.kt)("p",null,"Rcgroups Thread Matek F405: ",(0,n.kt)("a",{parentName:"p",href:"https://www.rcgroups.com/forums/showthread.php?2889298-MATEKSYS-Flight-Controller-F405-OSD-32K-Gyro-5xUARTs-SD-Slot"},"https://www.rcgroups.com/forums/showthread.php?2889298-MATEKSYS-Flight-Controller-F405-OSD-32K-Gyro-5xUARTs-SD-Slot")),(0,n.kt)("p",null,"Matek FC Facebook Group: ",(0,n.kt)("a",{parentName:"p",href:"https://www.facebook.com/groups/1882519175321708/"},"https://www.facebook.com/groups/1882519175321708/")))}m.isMDXComponent=!0}}]);