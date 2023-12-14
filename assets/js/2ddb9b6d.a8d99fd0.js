"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5667],{43091:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=t(85893),r=t(11151);const i={},d="Resource Remapping Command",c={id:"support/archive/Resource-remapping",title:"Resource Remapping Command",description:"NOTE: this command is only available in version 3.1 and newer of Betaflight.",source:"@site/docs/support/archive/Resource-remapping.md",sourceDirName:"support/archive",slug:"/support/archive/Resource-remapping",permalink:"/docs/support/archive/Resource-remapping",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"support",previous:{title:"Remapping Motors with Resource Command",permalink:"/docs/support/archive/Remapping-Motors-with-Resource-Command"},next:{title:"Running with reversed motors",permalink:"/docs/support/archive/Reversed-motor-direction"}},l={},o=[{value:"Available functions, values and constraints",id:"available-functions-values-and-constraints",level:2},{value:"Wiki pages with examples of using the Resource Commands:",id:"wiki-pages-with-examples-of-using-the-resource-commands",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"resource-remapping-command",children:"Resource Remapping Command"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE: this command is only available in version 3.1 and newer of Betaflight."})}),"\n",(0,s.jsx)(n.p,{children:"The IO remapping allows you to configure the pins on the MCU to be utilised for various functions. This is the starting framework - more work can be done."}),"\n",(0,s.jsx)(n.p,{children:"Pins are remapped using the resources command line interface command."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"resource [function name] [index] [pin]"})," (e.g. ",(0,s.jsx)(n.code,{children:"resource MOTOR 1 A1"}),")"]}),"\n",(0,s.jsx)(n.p,{children:"Where MOTOR is the function, 1 is the motor index (1 based e.g. 1-4 on a quad) and A1 is Port A pin 1 or more commonly referred to as PA1 in STM datasheet documentation."}),"\n",(0,s.jsxs)(n.p,{children:["To remove a mapping, use ",(0,s.jsx)(n.code,{children:"NONE"})," in place of PIN, e.g. ",(0,s.jsx)(n.code,{children:"resource MOTOR 5 NONE"})]}),"\n",(0,s.jsxs)(n.p,{children:["Where a function does not require an index (i.e. there is only 1 possible pin assignment), e.g. ",(0,s.jsx)(n.code,{children:"BEEPER"}),", ",(0,s.jsx)(n.code,{children:"SONAR_ECHO"})," or ",(0,s.jsx)(n.code,{children:"SONAR_TRIGGER"})," then the index ",(0,s.jsx)(n.strong,{children:"must"})," be omitted (e.g. ",(0,s.jsx)(n.code,{children:"resource BEEPER B6"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"resource"})," on its own will list all the available configurable options, and their current setting. This is the output to be added to the ",(0,s.jsx)(n.code,{children:"dump"})," for use in backing up and restoring configuration. Note that this command will list all configured that would be allocated if used."]}),"\n",(0,s.jsxs)(n.p,{children:["As an example ",(0,s.jsx)(n.code,{children:"resource"})," will show motors 1-8, but if your mixer is set to QuadX then only motors 1-4 will actually be used, if you change to Oct as the mixer (and reboot) then all 8 motors will be configured."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"resource list"})," (or ",(0,s.jsx)(n.code,{children:"resource show"})," in more recent versions of Betaflight) will list all pins and their current assignments, including all those in use by system components and ",(0,s.jsx)(n.strong,{children:"not"})," configurable by the user. It will also list the currently active DMA utilisation. Note for any adjustments made a save and reboot is required in order for those changes to be visible here. Consider this command the output of the currently active state."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that the ",(0,s.jsx)(n.code,{children:"save"})," command must be used after changing pin mapping via the CLI."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<center>\n<img src="https://cloud.githubusercontent.com/assets/14850998/21921215/c5d3521c-d9a9-11e6-8ed8-c53afdbda50f.jpg" width="70%"><br>\nFigure: How different resource command variation works\n</center>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"available-functions-values-and-constraints",children:"Available functions, values and constraints"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Function"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Index"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Constraints"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ADC_BATT"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{children:"Battery voltage sensor"}),(0,s.jsx)(n.td,{children:"Can only be mapped to other ADC pin"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ADC_CURR"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{children:"Battery current sensor"}),(0,s.jsx)(n.td,{children:"Can only be mapped to other ADC pin"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ADC_RSSI"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{children:"Analog RSSI input from receiver"}),(0,s.jsx)(n.td,{children:"Can only be mapped to other ADC pin"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"BEEPER"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{children:"Signal buzzer"}),(0,s.jsx)(n.td,{children:"Usually hard-wired to the base of a transistor to switch the buzzer."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CAMERA_CONTROL"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{children:"FPV camera OSD control"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"FPV-Camera-Control-Joystick-Emulation",children:"Emulates joystick key presses"}),". Needs hard-wired resistor and/or capacitor.",(0,s.jsx)("br",{}),"Therefore existing CAMERA",(0,s.jsx)(n.em,{children:"CONTROL pin _may"})," only be usable for certain low frequency applications, like SmartAudio."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ESCSERIAL"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"?"}),(0,s.jsx)(n.td,{children:"?"}),(0,s.jsx)(n.td,{children:"?"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"I2C_SCL"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"1-n"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"I2C_SDA"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"1-n"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"INVERTER"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"LED"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"1-3"})}),(0,s.jsx)(n.td,{children:"Indicator LEDs"}),(0,s.jsx)(n.td,{children:"Don't confuse with LED_STRIP!"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"LED_STRIP"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{children:"WS2812 LED data"}),(0,s.jsx)(n.td,{children:"Usually very good choice for alternative usage, if no WS2812-LEDs are connected/used"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"MOTOR"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"1-n"})}),(0,s.jsx)(n.td,{children:"Motor signal"}),(0,s.jsxs)(n.td,{children:["Mapping between other ",(0,s.jsx)(n.a,{href:"Remapping-Motors-with-Resource-Command",children:"motor pins"}),") (swapping) should always work fine. Other pins may not work (DMA conflict with DShot)."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PPM"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{children:"Receiver PPM input"}),(0,s.jsx)(n.td,{children:"Usually good choice for alternative usage"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PWM"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"1-n"})}),(0,s.jsx)(n.td,{children:"Receiver PWM input"}),(0,s.jsx)(n.td,{children:"?"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SERIAL_RX"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"1-n"})}),(0,s.jsx)(n.td,{children:"Serial receive pin"}),(0,s.jsxs)(n.td,{children:["Can not be remapped to any other pins, but can be used for different functions (including ",(0,s.jsx)(n.a,{href:"Single-Wire-Software-Serial",children:"software serial ports"}),")."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SERIAL_TX"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"1-n"})}),(0,s.jsx)(n.td,{children:"Serial send pin"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"SERIAL_RX"}),"/",(0,s.jsx)(n.code,{children:"SERIAL_TX"})," ",(0,s.jsx)(n.code,{children:"11-12"})," are software serial ports #1 and #2"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SERVO"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"1-n"})}),(0,s.jsx)(n.td,{children:"Servo signal"}),(0,s.jsx)(n.td,{children:"?"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SONAR_ECHO"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SONAR_TRIGGER"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SPI_MISO"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"1-n"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SPI_MOSI"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"1-n"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SPI_SCK"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"1-n"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"wiki-pages-with-examples-of-using-the-resource-commands",children:"Wiki pages with examples of using the Resource Commands:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"Remapping-Motors-with-Resource-Command",children:"Remapping Motor outputs"}),"\n",(0,s.jsx)(n.a,{href:"Servos-&-SERVO_TILT-for-3.1",children:"Using Servos & SERVO_TILT"}),"\n",(0,s.jsx)(n.a,{href:"CHANNEL_FORWARDING-for-3.1",children:"Using CHANNEL_FORWARDING"}),"\n",(0,s.jsx)(n.a,{href:"Setup-for-a-Fixed-Wing-Aircraft",children:"Setup on a Fixed Wing Aircraft"})]})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>d});var s=t(67294);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);