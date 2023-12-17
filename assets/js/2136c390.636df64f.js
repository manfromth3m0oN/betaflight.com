"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8891],{17636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=n(85893),i=n(11151);const r={},o="Freestyle Tuning Principles",l={id:"wiki/guides/current/Freestyle-Tuning-Principles",title:"Freestyle Tuning Principles",description:"This is a work in progress and not a final document.",source:"@site/docs/wiki/guides/current/Freestyle-Tuning-Principles.md",sourceDirName:"wiki/guides/current",slug:"/wiki/guides/current/Freestyle-Tuning-Principles",permalink:"/docs/wiki/guides/current/Freestyle-Tuning-Principles",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"FrSky FPORT Protocol",permalink:"/docs/wiki/guides/current/FrSky-FPort-Protocol"},next:{title:"GPS Rescue 4.1 to 4.3",permalink:"/docs/wiki/guides/current/GPS-Rescue-Mode-v4-1-to-v4-3"}},a={},d=[{value:"This is a work in progress and not a final document.",id:"this-is-a-work-in-progress-and-not-a-final-document",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Principles and Attributes",id:"principles-and-attributes",level:2},{value:"Betaflight Tune",id:"betaflight-tune",level:2},{value:"VBat Sag Compensation",id:"vbat-sag-compensation",level:3},{value:"Suggested setting: values for a 5&quot;",id:"suggested-setting-values-for-a-5",level:4},{value:"\ud83d\udca1 Advanced Considerations",id:"bulb-advanced-considerations",level:4},{value:"PID",id:"pid",level:2},{value:"Suggested settings: values for a 5&quot;",id:"suggested-settings-values-for-a-5",level:3},{value:"\ud83d\udca1 Advanced Considerations",id:"bulb-advanced-considerations-1",level:3},{value:"Feed Forward",id:"feed-forward",level:2},{value:"Suggested setting: values for a 5&quot;",id:"suggested-setting-values-for-a-5-1",level:3},{value:"D Min",id:"d-min",level:2},{value:"Suggested setting: off",id:"suggested-setting-off",level:3},{value:"TPA",id:"tpa",level:2},{value:"Suggested setting: values for a 5&quot;",id:"suggested-setting-values-for-a-5-2",level:3},{value:"Thrust Linear",id:"thrust-linear",level:2},{value:"I term relax and iterm_windup",id:"i-term-relax-and-iterm_windup",level:2},{value:"Suggested setting: values for a 5&quot;",id:"suggested-setting-values-for-a-5-3",level:3},{value:"Anti gravity",id:"anti-gravity",level:2},{value:"Suggested setting: values for a 5&quot;",id:"suggested-setting-values-for-a-5-4",level:3},{value:"Motor Idle Throttle Value, Dynamic Idle Value &amp; Thrust Linear",id:"motor-idle-throttle-value-dynamic-idle-value--thrust-linear",level:2},{value:"Suggested setting: values for a 5&quot;",id:"suggested-setting-values-for-a-5-5",level:3},{value:"RC smoothing",id:"rc-smoothing",level:2},{value:"Suggested setting:",id:"suggested-setting",level:3},{value:"PWM Frequency",id:"pwm-frequency",level:2},{value:"Suggested setting: values for a 5&quot;",id:"suggested-setting-values-for-a-5-6",level:3},{value:"\ud83d\udca1 Advanced Considerations",id:"bulb-advanced-considerations-2",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"freestyle-tuning-principles",children:"Freestyle Tuning Principles"}),"\n",(0,s.jsx)(t.h2,{id:"this-is-a-work-in-progress-and-not-a-final-document",children:"This is a work in progress and not a final document."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Authors: Elia Palme, Daniel Appel, Hugo Chiang(DusKing1), Mark Spatz and co."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsx)(t.p,{children:"Provide easy and simple guidelines to set-up Betaflight for freestyle."}),"\n",(0,s.jsx)(t.p,{children:"While Betaflight benefits from a large and vivid developers community\nwith frequent updates and new features releases, it has often been\ncriticized by freestyle pilots for being too complicated to use and hard\nto keep up with."}),"\n",(0,s.jsx)(t.p,{children:"This guide aims to provide simple guiding principles and tune\nsuggestions to make the best out of Betaflight for freestyle purposes."}),"\n",(0,s.jsxs)(t.p,{children:["Note: before editing this guide consider discussing changes on the original ",(0,s.jsx)(t.a,{href:"https://docs.google.com/document/d/1ki5_OdsD6xIo6t1pZLV04wH0uaplabWEtOenDJmnYX4",children:"document"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"principles-and-attributes",children:"Principles and Attributes"}),"\n",(0,s.jsx)(t.p,{children:"Freestyle is mainly about the footage of a smooth and precise acrobatic\nflight."}),"\n",(0,s.jsx)(t.p,{children:"To achieve such goals a freestyle quad should be tuned with the\nfollowing principles in mind:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Optimized for smoothness over low latency and sharp control."}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:'Freestyle pilots tend to prefer a smoother and "looser"\nquad over an extremely reactive (brain reading feeling) one. Mainly\nbecause it helps to smooth out micro correction and makes the footage\nlook more organic and fluid.'}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Optimized to behave predictively and with consistency."}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Consistency helps pilots to build muscle memory and get a feel of the\nquad, hence gain confidence and precision. One among the best pilots,\nMr. Steel is known for running the same setup for several years and he\nvery rarely makes changes to it."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"With the above principles in mind we can distill three attributes we\nshould optimize for:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Consistency"})}),(0,s.jsxs)(t.td,{children:["Consistency is the ability of the craft to behave based in a consistent and predictable manner given the provided stick inputs. The more predictable is the quad behaving the more ",(0,s.jsx)(t.strong,{children:"precision and confidence the pilot will gain"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Attitude Hold"})}),(0,s.jsxs)(t.td,{children:["Attitude hold is the ability of the craft to keep it\u2019s trajectory and behave as expected. A quadcopter with good attitude resists changes in orientation from outside forces, and responds only to user stick inputs. These outside forces can include wind, propwash, vibrations, and other forces. Attitude provides ",(0,s.jsx)(t.strong,{children:"smoothness"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Responsiveness"})}),(0,s.jsxs)(t.td,{children:["Responsiveness is the ability of the craft to track setpoint (stick inputs) as close as possible. A responsive quad has very ",(0,s.jsx)(t.strong,{children:"low latency and feels connected"}),"."]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"In theory all three attributes are equally important in practice an\nincrease of responsiveness might affect the pilot ability to fly\nsmoothly and consistently."}),"\n",(0,s.jsx)(t.p,{children:"Therefore it is advised to compromise on responsiveness to keep the\nquad behaving in a predictive and consistent manner"}),"\n",(0,s.jsx)(t.h2,{id:"betaflight-tune",children:"Betaflight Tune"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Important note:"}),' the suggested tuning values are intended for a typical 5" setup either 6S with [1600 to 1800] KV motors or 4S with [2400-2600] KV motors.']}),"\n",(0,s.jsx)(t.h3,{id:"vbat-sag-compensation",children:"VBat Sag Compensation"}),"\n",(0,s.jsxs)(t.p,{children:["This feature aims to provide motor response consistency across the\nentire flight (",(0,s.jsx)(t.a,{href:"/docs/wiki/tuning/4.2-Tuning-Notes#dynamic-battery-sag-compensation",children:"BF doc ref"}),").\nBy enabling VBat Sag Compensation the craft will fly more consistently\nand predictively."]}),"\n",(0,s.jsx)(t.p,{children:"If you plan to use this feature it's crucial to enable it before\nperforming the PID tuning."}),"\n",(0,s.jsx)(t.h4,{id:"suggested-setting-values-for-a-5",children:'Suggested setting: values for a 5"'}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Value"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"VBat Sag Period (vbat_sag_lpf_period)"})}),(0,s.jsx)(t.td,{children:"200 (20 second)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"VBat compensation"})}),(0,s.jsx)(t.td,{children:"40-70"})]})]})]}),"\n",(0,s.jsxs)(t.h4,{id:"bulb-advanced-considerations",children:["\ud83d\udca1"," Advanced Considerations"]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)("summary",{children:"Click to expand!"}),"\nVBatSagCompensation works by adjusting the overall motor outputs depending on battery voltage.  Using higher values of VBatSagCompensation, such as 100, will attempt to completely eliminate reduction in power from battery response down to the 3.3V/cell threshold.  This will reduce opportunities for a pilot to perceive battery sag .While a very consistent response for the same throttle inputs from the start of a flight towards the end of the flight is great, the inherent risk with this approach is that flight performance will go from nominal to battery dropping below 3.0V/cell very quickly if all the battery capacity is used.  For this reason, many pilots would prefer to run lower  values if they are accustomed to using the battery sag response to gauge when it is prudent to land."]}),(0,s.jsx)(t.p,{children:"Due to the chemistry of Lithium Polymer batteries, operating them below 3.0V/cell results in plating lithium onto the anode, which permanently reduces both the capacity and to to a peak discharge capability of the battery. This is to be avoided if at all possible."})]}),"\n",(0,s.jsx)(t.h2,{id:"pid",children:"PID"}),"\n",(0,s.jsx)(t.p,{children:"PID are at the core of a quad tuning, with PID tuning we can achieve a\ngood quadcopter attitude."}),"\n",(0,s.jsx)(t.p,{children:"D is the most important PID term to achieve smooth flying, D helps to\nminimize propwash as well as dampening any quads movement. Freestyle\nquads tend to use higher D gains."}),"\n",(0,s.jsx)(t.p,{children:"To counterbalance a higher than usual D gain P needs to be increased as\nwell."}),"\n",(0,s.jsxs)(t.p,{children:["A simple approach to tune P and D is to set a desired D gain (e.g. 45)\nand slowly increase P as high as possible without producing any bounce\nback on flips and rolls (see ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=qK5APBg76AU",children:"UAV Tech video"}),")."]}),"\n",(0,s.jsx)(t.p,{children:"The I term is generally good enough on default, however if the quad\nfeels sloppy increasing the gain could improve the overall attitude."}),"\n",(0,s.jsx)(t.h3,{id:"suggested-settings-values-for-a-5",children:'Suggested settings: values for a 5"'}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"P"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"I"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"D"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Roll"})}),(0,s.jsx)(t.td,{children:"60-70"}),(0,s.jsx)(t.td,{children:"90-100"}),(0,s.jsx)(t.td,{children:"40-50"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Pitch"})}),(0,s.jsx)(t.td,{children:"60-70"}),(0,s.jsx)(t.td,{children:"90-100"}),(0,s.jsx)(t.td,{children:"40-50"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Yaw"})}),(0,s.jsx)(t.td,{children:"30-40"}),(0,s.jsx)(t.td,{children:"90-100"}),(0,s.jsx)(t.td,{children:"0"})]})]})]}),"\n",(0,s.jsxs)(t.h3,{id:"bulb-advanced-considerations-1",children:["\ud83d\udca1"," Advanced Considerations"]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Click to expand!"}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Equal setpoint tracking latency across axes"})}),(0,s.jsx)(t.p,{children:"To further improve consistency it's important to properly tune all axes\n(Roll, Pitch and Yaw) this will ensure that the setpoint tracking\nlatency is equal for each axe.\nYaw can tolerate some additional tracking latency, just because of how differently it produces torque about the yaw axis. This is likely a very minor note, but why increasing Yaw P values can very frequently improve performance, particularly with larger frames or other designs that have more frame mass farther from the CG."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Motor max out"})}),(0,s.jsx)(t.p,{children:"Another big factor for consistency is that when the craft is commanded\nto make a move, the motors should not max out. If that happens you'll\nget completely different responsiveness, and somewhat unpredictably.\nThis is again a key factor in consistency: having enough power and\nauthority on all axes."})]}),"\n",(0,s.jsx)(t.h2,{id:"feed-forward",children:"Feed Forward"}),"\n",(0,s.jsx)(t.p,{children:"Feed Forward is used to help the quad copter tracking the setpoint\n(stick inputs) closer. In other words it reduces the latency between\nstick movement and quadcopter movement."}),"\n",(0,s.jsx)(t.p,{children:"Feed Forward is intended to increase responsiveness by more directly applying stick inputs into the mixer ahead of other PID inputs, reducing the need for the PID controller to respond to setpoint error in order to respond to inputs\nFeed Forward is great to increase responsiveness by anticipating a soon expected PID error based on stick movement."}),"\n",(0,s.jsx)(t.h3,{id:"suggested-setting-values-for-a-5-1",children:'Suggested setting: values for a 5"'}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Feed Forward Transition"})}),(0,s.jsx)(t.td,{children:"0.9-1"})]})})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Feed Forward"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Roll"})}),(0,s.jsx)(t.td,{children:"90-100"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Pitch"})}),(0,s.jsx)(t.td,{children:"90-100"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Yaw"})}),(0,s.jsx)(t.td,{children:"90-100"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"d-min",children:"D Min"}),"\n",(0,s.jsx)(t.p,{children:"D Min allows to run higher D gain on not so clean builds by dynamically\nincreasing D on sharp moves.It has been introduced to run cooler motors,\nand have faster stick responsiveness."}),"\n",(0,s.jsx)(t.p,{children:"D Min can negatively affect consistency as D is no longer constant but\nvaries depending on how quick the move is. Also, running a lower D\nduring shallow flight will reduce smoothness."}),"\n",(0,s.jsx)(t.h3,{id:"suggested-setting-off",children:"Suggested setting: off"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"If your quad allows it (clean build with low noise) disabling D Min\nincreases the quad flight consistency by keeping D constant and at a\ngenerally higher value."})}),"\n",(0,s.jsx)(t.h2,{id:"tpa",children:"TPA"}),"\n",(0,s.jsx)(t.p,{children:"TPA lowers the D and P gain after a certain throttle threshold. It has\nbeen introduced to address fast oscillations induced by high throttle\nmotor noises on quads running high PID gains."}),"\n",(0,s.jsxs)(t.p,{children:["Similar to D Min this settings could negatively affect consistency\nleading to an increase of rotation rate when more throttle applied\n",(0,s.jsx)(t.a,{href:"/docs/development/PID-tuning#tpa-and-tpa-breakpoint",children:"BF doc ref"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Increasing the default breakpoint value allows to keep D constant also\naround mid throttle ."})}),"\n",(0,s.jsx)(t.h3,{id:"suggested-setting-values-for-a-5-2",children:'Suggested setting: values for a 5"'}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Rate"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Breakpoint"})})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"TPA"})}),(0,s.jsx)(t.td,{children:"0.40-0.50"}),(0,s.jsx)(t.td,{children:"1600- 1750"})]})})]}),"\n",(0,s.jsx)(t.p,{children:"Lower rate and higher breakpoint will increase consistency but\neventually introduce oscillations, carefully tune the settings to\nminimize the impact of TPA while avoiding oscillations."}),"\n",(0,s.jsx)(t.h2,{id:"thrust-linear",children:"Thrust Linear"}),"\n",(0,s.jsx)(t.p,{children:"If a unusually large TPA is required to avoid high-throttle oscillations whilst good performance is observed at low and mid throttle then consider reducing TPA and employing thrust_linear. Thrust linearization is designed to account for situations where a linear throttle input produces an exponential throttle output. This can happen on builds which fall outside of the normal power/weight ratio. In these cases thrust_linear can be used to PID boost response at low throttle and reduce PID response at high throttle."}),"\n",(0,s.jsx)(t.p,{children:"thrust_linear defaults to 0. If you experience oscillations which TPA cannot sufficiently correct then thrust_linear is a good next step."}),"\n",(0,s.jsx)(t.p,{children:"Because thrust_linear will boost PID response at low throttle the master PID values should be reduced one or two notches on the slider before introducing thrust_linear.\nSet thrust_linear initially at a value around 25 and then increase in increments of 5 whilst observing the effect on high-throttle oscillations."}),"\n",(0,s.jsx)(t.h2,{id:"i-term-relax-and-iterm_windup",children:"I term relax and iterm_windup"}),"\n",(0,s.jsxs)(t.p,{children:["I term relax aims to inhibit I during fast manoeuvres by preventing it\nfrom further accumulating avoiding I term induced bounce back on flips\nand rolls (",(0,s.jsx)(t.a,{href:"I-Term-Relax-Explained",children:"BF doc ref"}),")."]}),"\n",(0,s.jsx)(t.h3,{id:"suggested-setting-values-for-a-5-3",children:'Suggested setting: values for a 5"'}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Axes"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Type"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Cutoff"})})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Iterm Relax"})}),(0,s.jsx)(t.td,{children:"RP (Increment only)"}),(0,s.jsx)(t.td,{children:"Setpoint"}),(0,s.jsx)(t.td,{children:"7-12"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"anti-gravity",children:"Anti gravity"}),"\n",(0,s.jsxs)(t.p,{children:["Anti Gravity boosts the I term when fast throttle changes are detected.\nIt has been introduced to mitigate the craft nose tilt on throttle\nchanges (",(0,s.jsx)(t.a,{href:"PID-Tuning-Guide#antigravity",children:"BF doc ref"}),")."]}),"\n",(0,s.jsx)(t.p,{children:"Anti gravity helps to increase smoothness and hold the attitude on\nmaneuvers with fast throttle changes like boosts, powerloops, etc."}),"\n",(0,s.jsx)(t.h3,{id:"suggested-setting-values-for-a-5-4",children:'Suggested setting: values for a 5"'}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Gain"})})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Anti gravity"})}),(0,s.jsx)(t.td,{children:"3.5 - 5"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"motor-idle-throttle-value-dynamic-idle-value--thrust-linear",children:"Motor Idle Throttle Value, Dynamic Idle Value & Thrust Linear"}),"\n",(0,s.jsx)(t.p,{children:"Lower than default Motor Idle Throttle Value allows for greater hang\ntime and cleaner dives. However it comes at the cost of a weaker\nattitude hold at zero throttle and increased risk of de-sync."}),"\n",(0,s.jsx)(t.p,{children:"Dynamic Idle Value and Thrust Linear will help to mitigate those\ncollateral effects."}),"\n",(0,s.jsx)(t.p,{children:"Dynamic Idle Value allows to define minimum motor RPM, if set at a\nreasonable amount it avoids de-sync due to too low motor RPM."}),"\n",(0,s.jsx)(t.p,{children:"Thrust Linear helps to boost the PID gains low throttle helping to offset reduced motor responsiveness in low RPM operation compared to higher RPM responsiveness of motors. This can have some interactions with D gains at higher throttle values, which may require use of higher TPA_rate to offset."}),"\n",(0,s.jsx)(t.h3,{id:"suggested-setting-values-for-a-5-5",children:'Suggested setting: values for a 5"'}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Value"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Motor Idle Throttle Value"})}),(0,s.jsx)(t.td,{children:"3% - 4%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Dynamic Idle"})}),(0,s.jsxs)(t.td,{children:["Needs to be computed according to ",(0,s.jsx)(t.a,{href:"Tuning-Dynamic-Idle#setup---enabling-dynamic-idle",children:"doc"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Thrust Linear"})}),(0,s.jsx)(t.td,{children:"20-25"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"rc-smoothing",children:"RC smoothing"}),"\n",(0,s.jsx)(t.p,{children:"Higher than default RC smoothing helps reducing stick input gliches caused by noise in the RC link."}),"\n",(0,s.jsx)(t.h3,{id:"suggested-setting",children:"Suggested setting:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Value"})})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"RC smoothing"})}),(0,s.jsx)(t.td,{children:"20"})]})})]}),"\n",(0,s.jsx)(t.h1,{id:"betaflight-filtering",children:"Betaflight Filtering"}),"\n",(0,s.jsx)(t.p,{children:"Generally speaking the less the better as filtering introduces latency, for freestyling a more conservative approach with enough amount of filtering is advised.\nNot enough filtering can negatively affect smoothness and in some cases even burn motors."}),"\n",(0,s.jsx)(t.p,{children:"Via incremental tuning effort try minimizing Gyro LPF filtering (biggest drain on phase delay that makes propwash response poor) followed by minimizing how much delay is coming from dynamic notch filtering (ideally single notch with smaller DFT bins - W=0, Q=250, MinHz 105, MaxHz 465)."}),"\n",(0,s.jsx)(t.p,{children:"Lastly, try reducing the D-term filtering, slider values up to 1.4 range, still attenuates most D_term noise very well but reduces phase latency."}),"\n",(0,s.jsx)(t.h1,{id:"esc-settings",children:"ESC Settings"}),"\n",(0,s.jsx)(t.h2,{id:"pwm-frequency",children:"PWM Frequency"}),"\n",(0,s.jsx)(t.p,{children:"Increasing PWM frequency helps to run smoother motors, and provide greater control at the cost of losing some thrust."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Warning:"})," Increasing PWM frequency can introduce wobbles at zero or low throttle. Such undesired effect can be mitigated by increasing Thrust Linear or Dynamic Idle values."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"suggested-setting-values-for-a-5-6",children:'Suggested setting: values for a 5"'}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Value"})})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"PWM Frequency"})}),(0,s.jsx)(t.td,{children:"48kHz - 96kHz or use Variable PWM Frequency"})]})})]}),"\n",(0,s.jsxs)(t.h3,{id:"bulb-advanced-considerations-2",children:["\ud83d\udca1"," Advanced Considerations"]}),"\n",(0,s.jsx)(n,{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)("summary",{children:"Click to expand!"}),"\nIncreasing PWM frequency tends to result in smoother running motors and may mitigate issues with aliasing that results in some mid-throttle oscillations, however higher PWM frequencies have downside. As the PWM frequency increases, the PWM resolution is bound to decrease, and depending on ESC deadtime required in switching, lower throttle responsiveness may also be reduced."]})})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(67294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);