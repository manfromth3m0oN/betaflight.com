"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4458],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),h=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=h(o),c=n,f=d["".concat(l,".").concat(c)]||d[c]||p[c]||i;return o?a.createElement(f,r(r({ref:t},u),{},{components:o})):a.createElement(f,r({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,r[1]=s;for(var h=2;h<i;h++)r[h]=o[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},1179:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var a=o(87462),n=(o(67294),o(3905));const i={},r="Tuning Tips for BF 3.4",s={unversionedId:"wiki/archive/Tuning-Tips-for-Betaflight-3.4",id:"wiki/archive/Tuning-Tips-for-Betaflight-3.4",title:"Tuning Tips for BF 3.4",description:"Notes about some new 3.4 features and defaults",source:"@site/docs/wiki/archive/Tuning-Tips-for-Betaflight-3.4.md",sourceDirName:"wiki/archive",slug:"/wiki/archive/Tuning-Tips-for-Betaflight-3.4",permalink:"/docs/wiki/archive/Tuning-Tips-for-Betaflight-3.4",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"Tuning Dynamic Idle",permalink:"/docs/wiki/archive/Tuning-Dynamic-Idle"},next:{title:"Unified Targets for users",permalink:"/docs/wiki/archive/Unified-Targets"}},l={},h=[{value:"Notes about some new 3.4 features and defaults",id:"notes-about-some-new-34-features-and-defaults",level:2},{value:"I just want to fly, not read all this stuff...",id:"i-just-want-to-fly-not-read-all-this-stuff",level:3},{value:"The defaults are OK but I want to make some changes. What do I need to know?",id:"the-defaults-are-ok-but-i-want-to-make-some-changes-what-do-i-need-to-know",level:3},{value:"Can I enable the new features on F3 boards?",id:"can-i-enable-the-new-features-on-f3-boards",level:3},{value:"What about these new dual filters?",id:"what-about-these-new-dual-filters",level:3},{value:"What about the PIDs - are the defaults OK?",id:"what-about-the-pids---are-the-defaults-ok",level:2},{value:"My quad doesn&#39;t feel as responsive as it used to!",id:"my-quad-doesnt-feel-as-responsive-as-it-used-to",level:3},{value:"Should I keep the dynamic notch filter on always?",id:"should-i-keep-the-dynamic-notch-filter-on-always",level:3},{value:"Do I need the fixed notch filters anymore?",id:"do-i-need-the-fixed-notch-filters-anymore",level:3},{value:"Do I need to change Airmode settings?",id:"do-i-need-to-change-airmode-settings",level:3},{value:"Information about some of the new features:",id:"information-about-some-of-the-new-features",level:2},{value:"Filter based RC smoothing",id:"filter-based-rc-smoothing",level:3},{value:"iTerm Relax",id:"iterm-relax",level:3},{value:"Throttle Boost",id:"throttle-boost",level:3},{value:"iTerm Rotation",id:"iterm-rotation",level:3},{value:"Smart Feed Forward",id:"smart-feed-forward",level:3},{value:"Absolute Control",id:"absolute-control",level:3}],u={toc:h};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tuning-tips-for-bf-34"},"Tuning Tips for BF 3.4"),(0,n.kt)("h2",{id:"notes-about-some-new-34-features-and-defaults"},"Notes about some new 3.4 features and defaults"),(0,n.kt)("h3",{id:"i-just-want-to-fly-not-read-all-this-stuff"},"I just want to fly, not read all this stuff..."),(0,n.kt)("p",null,"No problem, flash the code, and do a brief test fly with the stock defaults. ",(0,n.kt)("strong",{parentName:"p"},"Both 8k and 32k gyro modes should fly on defaults"),", though 32k may require more filtering - always check motor temps after the first flight."),(0,n.kt)("p",null,"Note that 3.4 contains major changes to filtering and several new features that dramatically improve potential flight performance. Do not expect it to fly the same as earlier versions!"),(0,n.kt)("p",null,"If motor temps are OK, and handling generally alright, there are several changes that may further improve flight behaviour."),(0,n.kt)("p",null,"If motors are warmer than you'd like, check the section on filters below. Otherwise, the defaults are probably OK for your quad."),(0,n.kt)("p",null,"For optimal flight performance I'd recommend ",(0,n.kt)("strong",{parentName:"p"},"enabling iterm_relax")," by pasting into the CLI:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set iterm_relax = RP\n")),(0,n.kt)("p",null,"This will enable the term_relax code on pitch and roll. It markedly reduces I bounce-back after flips or rolls, and allows higher levels of I than before. Typically I can be increased by 50% or more, which improves directional stability while flying in turbulent air or when approaching gates at high speed."),(0,n.kt)("p",null,"I'd also recommend using the ",(0,n.kt)("strong",{parentName:"p"},"new filter based rc_smoothing on all axes"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set rc_smoothing_type = FILTER\nset rc_interp = AUTO\nset rc_interp_ch = RPYT\n\n")),(0,n.kt)("p",null,"This removes spikes and sharp edges that otherwise arise during rapid stick inputs. It should keep the motors sounding smooth and running cool during frequent rapid stick inputs, without delaying responsiveness as much as the older interpolation method (which is still available as an alternative)."),(0,n.kt)("p",null,"If you enable item_relax, throttle_boost, or use D setpoint weight above zero, you definitely should activate RC smoothing on the relevant axes, as above."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"IMPORTANT"),": SBus or FPort users ",(0,n.kt)("a",{parentName:"p",href:"SBus-FPort-and-RC-Smoothing-when-using-OpenTX"},"should stop using OpenTX when using 16 channels"),"."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"IMPORTANT"),": Spektrum users with certain transmitters (DX6i, DXe, DX6e) should read ",(0,n.kt)("a",{parentName:"p",href:"Spektrum-and-RC-Smoothing-Filter"},"this document")," for setting up RC Smoothing Filter correctly."),(0,n.kt)("p",null,"Note that with RC smoothing, the sharp spikes from D weight or throttle inputs will be smoothed out. While this improves efficiency, motor temperature, and smoothness of motor control signals, losing those spikes reduces the effectiveness of D weight, P, and throttle boost, during very rapid stick inputs, a tiny bit. ",(0,n.kt)("strong",{parentName:"p"},"After enabling RC smoothing, if you notice a small reduction in response to rapid stick inputs, consider increasing D weight, throttle boost and, perhaps, P by up to about 20%"),". Usually this is not required."),(0,n.kt)("h3",{id:"the-defaults-are-ok-but-i-want-to-make-some-changes-what-do-i-need-to-know"},"The defaults are OK but I want to make some changes. What do I need to know?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The new default D weight value is 0.6"),". This is approximately equal to 0.8 in pre-3.4 versions. More D weight means greater immediacy of stick responses, particularly to quick stick movements. If the default of 0.6 doesn't feel responsive enough at the same rates as before, try a higher value. 1.0 is sufficient to overcome the normal damping behaviour that D itself would otherwise slow down responses to your stick inputs - the quad shifts from the measurement mode of D calculation to to error mode. Values above 1.0 provide an additional 'feed forward' effect. Higher D weight can feel excessively twitchy, but can allow reduction in P while retaining the same overall responsiveness."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The new default D Setpoint Transition value is zero"),". If you previously flew with 1.0 or 0.5, to get a smooth centre feel for freestyle, and it now feels too twitchy around centre sticks, use your old setting. The default of 0 provides equal stick responsiveness regardless of stick position, and is recommended for racing. 0.5 is great for freestyle. Values above zero, but under 0.1, are not recommended, because they may cause glitching when the sticks are smoothly swept across the centre position."),(0,n.kt)("p",null,"If your PID settings were higher than the current defaults, and the quad feels like it is a bit less responsive than before, try with values for P, D, and D weight more like what you had, and consider trying 20% above your old defaults."),(0,n.kt)("h3",{id:"can-i-enable-the-new-features-on-f3-boards"},"Can I enable the new features on F3 boards?"),(0,n.kt)("p",null,"As of 3.4.0 official release, F3 boards will have most of the options available by default. Due to flash memory limitations, features like item_relax may not be available on some F3 boards."),(0,n.kt)("p",null,"A custom build compiled without some Rx protocols or Acro-Trainer will run all the new features on F3's with more than 128k of flash. As an example, a MOTOLAB F3 can run 4k4k at 30% CPU with dual filters, throttle boost, iTerm_relax and filter based rc_smoothing - and it flies really well."),(0,n.kt)("p",null,"Binaries of 3.4 with the new features enabled on F3 instead of Acro-Trainer can be found here:\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/joelucid/betaflight/releases/tag/3.4a"},"https://github.com/joelucid/betaflight/releases/tag/3.4a")),(0,n.kt)("h3",{id:"what-about-these-new-dual-filters"},"What about these new dual filters?"),(0,n.kt)("p",null,"3.4 provides dual low-pass filter capability for both gyro and D filtering. The default is to have all four low-pass filters active at the same time, the dynamic notch filter on, but no other notch filters active. This provides less filtering delay, typically, than before, but with better filter performance."),(0,n.kt)("p",null,"The two gyro filters clean up noise before the gyro signal enters the PID loop. P, I and D are then derived from that filtered data. The two D filters are applied only to the D signal."),(0,n.kt)("p",null,"To determine the relative contribution of P and D noise to overall motor noise, analyse a blackbox spectrum from PID_P and compare that to a spectrum from PID_D. Typically there will be more D noise than P noise. Hence we usually need filter D more heavily than P."),(0,n.kt)("p",null,"The more filtering we apply, the less noise gets through to the motors, and this keeps them sounding smooth and running cool. If we apply too much filtering, the PID calculations will be delayed, and flight performance will suffer. Without enough filtering, the motors may run hot, especially if the props get bent or the motor bearings are worn, etc."),(0,n.kt)("p",null,"Dual PT1 filters allow fine tuning of the amount of filtering to match the noisiness of the quad."),(0,n.kt)("p",null,"Here are some examples of typical filtering setups, that can be pasted into the CLI:"),(0,n.kt)("p",null,"A really good quad with a very solid frame, new motors, and only ever flown with clean well balanced light props:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set gyro_lowpass_type = PT1\nset gyro_lowpass_hz = 150\nset gyro_lowpass2_type = PT1\nset gyro_lowpass2_hz = 400\nset dterm_lowpass_hz = 100\nset dterm_lowpass2_hz = 250\n")),(0,n.kt)("p",null,"A typical 5\" quad with motors/props that aren't new but are average, and bent props aren't a problem:\n(if MPU6000 gyro is used ",(0,n.kt)("inlineCode",{parentName:"p"},"gyro_lowpass2")," can be set to 0 for best performance but logging/hot motors should be used to verify if this ok)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set gyro_lowpass_type = PT1\nset gyro_lowpass_hz = 120\nset gyro_lowpass2_type = PT1\nset gyro_lowpass2_hz = 300\nset dterm_lowpass_hz = 100\nset dterm_lowpass2_hz = 250\n")),(0,n.kt)("p",null,"A typical quad on a decent frame that needs to tolerate bent props:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set gyro_lowpass_type = PT1\nset gyro_lowpass_hz = 120\nset gyro_lowpass2_type = PT1\nset gyro_lowpass2_hz = 300\nset dterm_lowpass_hz = 80\nset dterm_lowpass2_hz = 160\n")),(0,n.kt)("p",null,"A beat up quad on a sloppy frame that often is flown with bent props:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set gyro_lowpass_type = PT1\nset gyro_lowpass_hz = 90\nset gyro_lowpass2_type = PT1\nset gyro_lowpass2_hz = 180\nset dterm_lowpass_hz = 70\nset dterm_lowpass2_hz = 140\n")),(0,n.kt)("p",null,"The higher the filter numbers - meaning, less filtering - and the better the state of the quad, the better it will fly."),(0,n.kt)("h2",{id:"what-about-the-pids---are-the-defaults-ok"},"What about the PIDs - are the defaults OK?"),(0,n.kt)("p",null,"We think the defaults are pretty good for most quads. Lots of people report that they fly great."),(0,n.kt)("p",null,"If your focus is racing, and your quad is not carrying a GoPro, and is light and responsive, you might try these settings:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set rc_smoothing_type = FILTER\n\nset setpoint_relax_ratio = 0\nset dterm_setpoint_weight = 120\n\nset iterm_rotation = ON\n\nset iterm_relax = RP\nset iterm_relax_type = SETPOINT\nset iterm_relax_cutoff = 12\n\nset throttle_boost = 2\nset throttle_boost_cutoff = 15\n\nset p_pitch = 32\nset i_pitch = 65\nset d_pitch = 23\nset p_roll = 30\nset i_roll = 60\nset d_roll = 21\nset p_yaw = 65\nset i_yaw = 60\nset d_yaw = 20\n\nset tpa_rate = 15\nset tpa_breakpoint = 1050\n")),(0,n.kt)("p",null,"If your focus is freestyle, and the quad is a little heavier, perhaps something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set rc_smoothing_type = FILTER\n\nset setpoint_relax_ratio = 50\nset dterm_setpoint_weight = 80\n\nset iterm_rotation = ON\n\nset iterm_relax = RP\nset iterm_relax_type = GYRO\nset iterm_relax_cutoff = 10\n\nset throttle_boost = 8\nset throttle_boost_cutoff = 15\n\nset p_pitch = 58\nset i_pitch = 65\nset d_pitch = 35\nset p_roll = 50\nset i_roll = 60\nset d_roll = 30\nset p_yaw = 65\nset i_yaw = 60\nset d_yaw = 20\n\nset tpa_rate = 20\nset tpa_breakpoint = 1050\n")),(0,n.kt)("p",null,"If experimenting with Absolute Control, use these settings:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set iterm_rotation = OFF\nset abs_control_gain = 10\n")),(0,n.kt)("p",null,"For smaller crafts use ",(0,n.kt)("inlineCode",{parentName:"p"},"abs_control_gain = 5")),(0,n.kt)("p",null,"*","See bottom of page for more info on Absolute Control"),(0,n.kt)("h3",{id:"my-quad-doesnt-feel-as-responsive-as-it-used-to"},"My quad doesn't feel as responsive as it used to!"),(0,n.kt)("p",null,"If you've enabled rc_smoothing and it is set to interpolation, try ",(0,n.kt)("inlineCode",{parentName:"p"},"set rc_smoothing_type = FILTER"),"."),(0,n.kt)("p",null,"Consider increasing P, I and D by around 20% over previous values."),(0,n.kt)("p",null,"If the quad didn't need much filtering, try the 'clean quad' filter settings, above."),(0,n.kt)("p",null,"If all else fails, revert to your old code - you may find, by now, that it doesn't feel quite as good as you remember it!"),(0,n.kt)("h3",{id:"should-i-keep-the-dynamic-notch-filter-on-always"},"Should I keep the dynamic notch filter on always?"),(0,n.kt)("p",null,"Probably. It does add delay, but really helps if a prop gets bent. For super clean setups where performance is everything, try with it off. Make a very heavily D filtered profile to limp home if needed, otherwise motors can overheat a lot."),(0,n.kt)("h3",{id:"do-i-need-the-fixed-notch-filters-anymore"},"Do I need the fixed notch filters anymore?"),(0,n.kt)("p",null,"Short answer: No. They cause a lot of delay, and dual PT1 filters usually are enough."),(0,n.kt)("p",null,"Long answer: Fixed notch filters may be useful if a log spectrum shows a clear noise peak despite the dynamic notch. Typically a problematic peak will appear at prop resonant frequency on flexible frames. The only way to know for sure is to get a blackbox log and use PID-Analyzer or Blackbox Explorer to perform spectral analysis. Prop resonant frequency can be determined using an audio spectrum analyser and 'plucking' the propeller, sometimes just setting a D notch at that frequency can be useful."),(0,n.kt)("h3",{id:"do-i-need-to-change-airmode-settings"},"Do I need to change Airmode settings?"),(0,n.kt)("p",null,"Nothing has changed. However quads are getting more powerful."),(0,n.kt)("p",null,"If you'd like to ensure that Airmode enables reliably on takeoff, set the start percentage to a value around your hover throttle value, e.g., for a quad that hovers on 20% throttle:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set airmode_start_throttle_percent = 20\n")),(0,n.kt)("p",null,"If you are a racer and would like to hold angle on a starting block, set the air mode start percentage to a value a bit below hover point; in the above example, 10-15 would start airmode at a throttle value that wouldn't make the quad take off."),(0,n.kt)("h2",{id:"information-about-some-of-the-new-features"},"Information about some of the new features:"),(0,n.kt)("h3",{id:"filter-based-rc-smoothing"},"Filter based RC smoothing"),(0,n.kt)("p",null,"3.4 brings, thanks to eTracer, RC smoothing, with less delay and less jitter than interpolation methods. Furthermore it is capable of adjusting the filter setpoint automatically to suite the RC command intervals."),(0,n.kt)("p",null,"To activate the filter method, paste and save ",(0,n.kt)("inlineCode",{parentName:"p"},"set rc_smoothing_type = FILTER")," in the CLI."),(0,n.kt)("p",null,"A biquad filter is then applied to the set incoming RC data, smoothing off the sharp square corners at the default frequency. Sharp steps on throttle, P and D weight are then attenuated. Because D setpoint weight adds even bigger spikes with each RC input, a second filter is applied specifically to D setpoint weight."),(0,n.kt)("p",null,"The end result is a smoother set of motor traces. Each incoming RC step results in an immediate step up in PIDsum and the motors, but the step up is not a sharp spike any more, reducing motor heat accumulation, improving efficiency, and making them sound smoother during rapid stick movements. Spikes also can trigger iterm_windup protection, this code avoids that problem."),(0,n.kt)("p",null,"When ",(0,n.kt)("inlineCode",{parentName:"p"},"set rc_smoothing_input_hz = 0"),", the code calculates the ideal low-pass value for RC command based on the initial RC interval. The same applies for ",(0,n.kt)("inlineCode",{parentName:"p"},"set rc_smoothing_derivative_hz = 0"),", which sets the second low-pass value that gets applied to D weight automatically. For 9ms Sbus, the automatic value is 50Hz. The actual values are written into the blackbox log header."),(0,n.kt)("p",null,"If you run very high levels of D weight, a somewhat lower derivative smoothing frequency may smooth out some of the big spikes that you might otherwise see."),(0,n.kt)("p",null,"Some people have voiced concern that low-pass filtering RC inputs will cause delay. While that is true, without any filtering the motors trace gets filled with spikes that appear at each RC input step. The current filter based smoothing code just takes the sharp point off these spikes, and doesn't delay the bulk of the step, or the majority of the D weight effect at all - the step up in the motors trace is still there at exactly the same time, just a bit smoother and rounder."),(0,n.kt)("h3",{id:"iterm-relax"},"iTerm Relax"),(0,n.kt)("p",null,"The new iTerm_relax functionality by JoeLucid cuts, or reduces, I accumulation during fast stick inputs. It can be enabled to work on pitch and roll alone, or pitch, roll and yaw."),(0,n.kt)("p",null,"The code has two operational modes, setpoint and gyro. Gyro mode is more clinical and complete in suppressing iTerm, Setpoint mode is a bit smoother with slightly softer landings after flips."),(0,n.kt)("p",null,"Setpoint mode applies a high-pass filter to RC input, resulting in a value that gets higher whenever the sticks are moved quickly. When the rate of change is zero (i.e., the sticks are not moving), iTerm accumulation is normal. Accumulation is then attenuated linearly as the stick movement approaches a threshold. Above threshold, no iTerm accumulation occurs at all."),(0,n.kt)("p",null,"Gyro mode uses a high-pass filter based on rate of change of stick movement, and uses this to create a window either side of the gyro value inside which the quad should be tracking. While inside the window, no iTerm accumulation occurs. If the sticks are held still, the window compresses back to nothing, and iTerm accumulation becomes normal again."),(0,n.kt)("p",null,"Since Gyro bases the amount of iTerm suppression on how well the quad follows the expected path it can adjust the iTerm if that's required to implement the setpoint change demanded by the sticks. This can facilitate better tracking in unbalanced quads or if throttle changes are applied during the move."),(0,n.kt)("p",null,"In both case the filter time constant can be adjusted to fine-tune the response. Typically no adjustment is required. Sometimes after a fast multi-rotation flip, or other fast input, some I may accumulate and hang around too long once the stick movements stop, causing a late settling of turn rate. Typically this will be less of a problem if the frequency is increased."),(0,n.kt)("p",null,"This feature is really useful and is capable, in a quad where P and D are well tuned, of totally eliminating bounce-back due to I."),(0,n.kt)("h3",{id:"throttle-boost"},"Throttle Boost"),(0,n.kt)("p",null,"This feature, also by JoeLucid, improves responsiveness to fast throttle inputs. The code uses high-pass filtering on the RC throttle signal to create additional 'kicks' in throttle. It is basically a feed forward factor on throttle. The faster the throttle stick is moved, the greater the boost effect. The result is a quicker, more responsive feel to fast throttle inputs - both on increasing throttle, and cutting throttle. It is particularly useful for quads that are weaker in terms of throttle responsiveness, or for making 3S feel like 4S, or 4S feel like 5S."),(0,n.kt)("p",null,"The height of each 'kick' is determined by the size of the RC step multiplied by the ",(0,n.kt)("inlineCode",{parentName:"p"},"throttle_boost")," amount, and how long it lasts is set by the ",(0,n.kt)("inlineCode",{parentName:"p"},"throttle_boost_cutoff")," value."),(0,n.kt)("p",null,"The default throttle_boost_cutoff value is 15Hz, meaning a time constant of 10ms. This works well for SBus 9ms radio setups, with or without rc smoothing on throttle. It results in about 40% residual 'kick' carrying over into the next step, accumulating as the stick movement continues quickly, and dissipating otherwise. The kick is rounded somewhat."),(0,n.kt)("p",null,"If rc_smoothing is enabled on throttle, a higher cutoff frequency can reduce the residual for accumulation, allowing the rc smoothing handles the spikes that would otherwise appear. For example, a value of 25 at 50Hz is about the same as 5 at 15Hz, but with less overshoot tendency."),(0,n.kt)("p",null,"If the throttle_boost value is 0, the effect is disabled."),(0,n.kt)("p",null,"With the default throttle_boost_cutoff of 15, throttle_boost = 5 is enough to overcome most to all RC smoothing delay on throttle (if indeed rc smoothing was applied to throttle). Throttle should feel a bit more responsive - and sound smoother - than un-smoothed throttle input. Increasing boost above 5 at 15Hz results in feed forward on throttle. Values of 10 or higher can be used to overcome excessive motor delay when over-propping weaker motors. Too much throttle boost may cause a kind of over-run and excessive sensitivity to big inputs. This can be attenuated by choosing a higher throttle boost cutoff frequency, e.g. 50Hz, and a corresponding increase in amount, e.g. 25. RC smoothing on throttle then becomes essential. That's because higher cutoff frequency will cause sharper spikes of shorter duration, with less tendency to accumulate."),(0,n.kt)("p",null,"Leaving the default value at 15 is probably a good idea. Better, if a sensitivity adjustment is needed, to change the throttle_boost value."),(0,n.kt)("h3",{id:"iterm-rotation"},"iTerm Rotation"),(0,n.kt)("p",null,"This is also by JoeLucid and is activated by default and much appreciated by LOS acro pilots, particularly when yawing continuously during rolls and when performing funnels and other tricks. The code rotates the current iTerm vector properly as the quad rotates on other axes. For FPV the effect is fairly subtle but can result in somewhat more predictable responses during abrupt stick inputs and while performing tricks. There are no settings to adjust, just on or off."),(0,n.kt)("h3",{id:"smart-feed-forward"},"Smart Feed Forward"),(0,n.kt)("p",null,"This experimental code, again by JoeLucid, modifies how D weight works. It is not enabled by default"),(0,n.kt)("p",null,"Normally, D setpoint weight is a feed forward amount that increases with quicker RC stick movements. The greater the D weight, the greater the stick sensitivity to pitch and roll."),(0,n.kt)("p",null,"In the classical betaflight PID system, D setpoint weight assists P in initiating turns. Typically D setpoint weight climbs quicker and relatively earlier than P. Adding more D setpoint weight, and reducing P a little, can reduce PID overshoot without losing stick sensitivity."),(0,n.kt)("p",null,"Smart Feed forward changes the D setpoint weight behaviour, such that it replaces P entirely, but only when it is greater than P (and in the same direction). For it to work, the D setpoint value must be set significantly higher than usual - up to 2.0 or more. Then, a large part of the initial part of a turn is driven very hard by D weight, and P doesn't need to do so much. In some settings, this can reduce overshoot a bit."),(0,n.kt)("h3",{id:"absolute-control"},"Absolute Control"),(0,n.kt)("p",null,"This is experimental code by JoeLucid as well. It's purpose is to address the same attitude issues as iterm_rotation but without some of its downsides."),(0,n.kt)("p",null,"Absolute Control continuously measures the error of the quads path over stick input, properly rotated into the quads coordinate system, and mixes a correction proportional to that error into the setpoint. It's as if you noticed every tiny attitude error the quad incurs and provided an instantaneous correction on your TX."),(0,n.kt)("p",null,"The result is significantly better tracking to sticks, particularly during rotations involving yaw and other difficult situations like throttle blips."),(0,n.kt)("p",null,"Absolute control will likely eventually replace iterm_rotation, but is not yet enabled by default. You should not enable abs_control and iterm_rotation at the same time."),(0,n.kt)("p",null,"To enable: ",(0,n.kt)("inlineCode",{parentName:"p"},"set abs_control_gain = 10"),". Smaller quads are ok with 5."),(0,n.kt)("p",null,"AbsoluteControl needs to be used with iTermRelax to avoid bounce-backs due to the latency between stick movement and quad response. iTermRelax will then suspend AbsoluteControl error accumulation as well during quick moves. Finally AbsoluteControl only kicks in once the throttle minimum for airmode activation is exceeded to avoid undue corrections on the ground."))}d.isMDXComponent=!0}}]);