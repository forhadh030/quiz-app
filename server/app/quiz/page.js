(()=>{var e={};e.id=602,e.ids=[602],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},1593:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>c,pages:()=>d,routeModule:()=>f,tree:()=>u});var n=r(260),s=r(8203),a=r(5155),o=r.n(a),i=r(7292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let u=["",{children:["quiz",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4378)),"C:\\Users\\syedf\\OneDrive\\Documents\\min_projects\\my-quizapp\\app\\quiz\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9611)),"C:\\Users\\syedf\\OneDrive\\Documents\\min_projects\\my-quizapp\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\syedf\\OneDrive\\Documents\\min_projects\\my-quizapp\\app\\quiz\\page.tsx"],c={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/quiz/page",pathname:"/quiz",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},4297:(e,t,r)=>{Promise.resolve().then(r.bind(r,4378))},1273:(e,t,r)=>{Promise.resolve().then(r.bind(r,1793))},1793:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>e_});var n=r(5512),s=r(8009),a=r(9334),o=r(1412),i=r(9952),l=r(6004),u=r(830),d=r(9217),c=r(96),f=r(447),m=r(3024),p=r(9018),x="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},h="RovingFocusGroup",[b,g,y]=(0,d.N)(h),[w,N]=(0,l.A)(h,[y]),[j,A]=w(h),R=s.forwardRef((e,t)=>(0,n.jsx)(b.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,n.jsx)(b.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,n.jsx)(k,{...e,ref:t})})}));R.displayName=h;var k=s.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:a,loop:l=!1,dir:d,currentTabStopId:c,defaultCurrentTabStopId:h,onCurrentTabStopIdChange:b,onEntryFocus:y,preventScrollOnEntryFocus:w=!1,...N}=e,A=s.useRef(null),R=(0,i.s)(t,A),k=(0,p.jH)(d),[I=null,C]=(0,m.i)({prop:c,defaultProp:h,onChange:b}),[S,P]=s.useState(!1),_=(0,f.c)(y),q=g(r),D=s.useRef(!1),[M,T]=s.useState(0);return s.useEffect(()=>{let e=A.current;if(e)return e.addEventListener(x,_),()=>e.removeEventListener(x,_)},[_]),(0,n.jsx)(j,{scope:r,orientation:a,dir:k,loop:l,currentTabStopId:I,onItemFocus:s.useCallback(e=>C(e),[C]),onItemShiftTab:s.useCallback(()=>P(!0),[]),onFocusableItemAdd:s.useCallback(()=>T(e=>e+1),[]),onFocusableItemRemove:s.useCallback(()=>T(e=>e-1),[]),children:(0,n.jsx)(u.sG.div,{tabIndex:S||0===M?-1:0,"data-orientation":a,...N,ref:R,style:{outline:"none",...e.style},onMouseDown:(0,o.m)(e.onMouseDown,()=>{D.current=!0}),onFocus:(0,o.m)(e.onFocus,e=>{let t=!D.current;if(e.target===e.currentTarget&&t&&!S){let t=new CustomEvent(x,v);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=q().filter(e=>e.focusable);E([e.find(e=>e.active),e.find(e=>e.id===I),...e].filter(Boolean).map(e=>e.ref.current),w)}}D.current=!1}),onBlur:(0,o.m)(e.onBlur,()=>P(!1))})})}),I="RovingFocusGroupItem",C=s.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:a=!0,active:i=!1,tabStopId:l,...d}=e,f=(0,c.B)(),m=l||f,p=A(I,r),x=p.currentTabStopId===m,v=g(r),{onFocusableItemAdd:h,onFocusableItemRemove:y}=p;return s.useEffect(()=>{if(a)return h(),()=>y()},[a,h,y]),(0,n.jsx)(b.ItemSlot,{scope:r,id:m,focusable:a,active:i,children:(0,n.jsx)(u.sG.span,{tabIndex:x?0:-1,"data-orientation":p.orientation,...d,ref:t,onMouseDown:(0,o.m)(e.onMouseDown,e=>{a?p.onItemFocus(m):e.preventDefault()}),onFocus:(0,o.m)(e.onFocus,()=>p.onItemFocus(m)),onKeyDown:(0,o.m)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let s=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(s))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(s)))return S[s]}(e,p.orientation,p.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let r=v().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){"prev"===t&&r.reverse();let n=r.indexOf(e.currentTarget);r=p.loop?function(e,t){return e.map((r,n)=>e[(t+n)%e.length])}(r,n+1):r.slice(n+1)}setTimeout(()=>E(r))}})})})});C.displayName=I;var S={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function E(e,t=!1){let r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var P=r(8762),_=r(6582),q=r(9397),D=e=>{let{present:t,children:r}=e,n=function(e){var t,r;let[n,a]=s.useState(),o=s.useRef({}),i=s.useRef(e),l=s.useRef("none"),[u,d]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},s.useReducer((e,t)=>r[e][t]??e,t));return s.useEffect(()=>{let e=M(o.current);l.current="mounted"===u?e:"none"},[u]),(0,q.N)(()=>{let t=o.current,r=i.current;if(r!==e){let n=l.current,s=M(t);e?d("MOUNT"):"none"===s||t?.display==="none"?d("UNMOUNT"):r&&n!==s?d("ANIMATION_OUT"):d("UNMOUNT"),i.current=e}},[e,d]),(0,q.N)(()=>{if(n){let e;let t=n.ownerDocument.defaultView??window,r=r=>{let s=M(o.current).includes(r.animationName);if(r.target===n&&s&&(d("ANIMATION_END"),!i.current)){let r=n.style.animationFillMode;n.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=r)})}},s=e=>{e.target===n&&(l.current=M(o.current))};return n.addEventListener("animationstart",s),n.addEventListener("animationcancel",r),n.addEventListener("animationend",r),()=>{t.clearTimeout(e),n.removeEventListener("animationstart",s),n.removeEventListener("animationcancel",r),n.removeEventListener("animationend",r)}}d("ANIMATION_END")},[n,d]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:s.useCallback(e=>{e&&(o.current=getComputedStyle(e)),a(e)},[])}}(t),a="function"==typeof r?r({present:n.isPresent}):s.Children.only(r),o=(0,i.s)(n.ref,function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(a));return"function"==typeof r||n.isPresent?s.cloneElement(a,{ref:o}):null};function M(e){return e?.animationName||"none"}D.displayName="Presence";var T="Radio",[O,z]=(0,l.A)(T),[F,L]=O(T),G=s.forwardRef((e,t)=>{let{__scopeRadio:r,name:a,checked:l=!1,required:d,disabled:c,value:f="on",onCheck:m,form:p,...x}=e,[v,h]=s.useState(null),b=(0,i.s)(t,e=>h(e)),g=s.useRef(!1),y=!v||p||!!v.closest("form");return(0,n.jsxs)(F,{scope:r,checked:l,disabled:c,children:[(0,n.jsx)(u.sG.button,{type:"button",role:"radio","aria-checked":l,"data-state":H(l),"data-disabled":c?"":void 0,disabled:c,value:f,...x,ref:b,onClick:(0,o.m)(e.onClick,e=>{l||m?.(),y&&(g.current=e.isPropagationStopped(),g.current||e.stopPropagation())})}),y&&(0,n.jsx)(K,{control:v,bubbles:!g.current,name:a,value:f,checked:l,required:d,disabled:c,form:p,style:{transform:"translateX(-100%)"}})]})});G.displayName=T;var U="RadioIndicator",$=s.forwardRef((e,t)=>{let{__scopeRadio:r,forceMount:s,...a}=e,o=L(U,r);return(0,n.jsx)(D,{present:s||o.checked,children:(0,n.jsx)(u.sG.span,{"data-state":H(o.checked),"data-disabled":o.disabled?"":void 0,...a,ref:t})})});$.displayName=U;var K=e=>{let{control:t,checked:r,bubbles:a=!0,...o}=e,i=s.useRef(null),l=(0,_.Z)(r),u=(0,P.X)(t);return s.useEffect(()=>{let e=i.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(l!==r&&t){let n=new Event("click",{bubbles:a});t.call(e,r),e.dispatchEvent(n)}},[l,r,a]),(0,n.jsx)("input",{type:"radio","aria-hidden":!0,defaultChecked:r,...o,tabIndex:-1,ref:i,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function H(e){return e?"checked":"unchecked"}var B=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],W="RadioGroup",[V,X]=(0,l.A)(W,[N,z]),J=N(),Q=z(),[Z,Y]=V(W),ee=s.forwardRef((e,t)=>{let{__scopeRadioGroup:r,name:s,defaultValue:a,value:o,required:i=!1,disabled:l=!1,orientation:d,dir:c,loop:f=!0,onValueChange:x,...v}=e,h=J(r),b=(0,p.jH)(c),[g,y]=(0,m.i)({prop:o,defaultProp:a,onChange:x});return(0,n.jsx)(Z,{scope:r,name:s,required:i,disabled:l,value:g,onValueChange:y,children:(0,n.jsx)(R,{asChild:!0,...h,orientation:d,dir:b,loop:f,children:(0,n.jsx)(u.sG.div,{role:"radiogroup","aria-required":i,"aria-orientation":d,"data-disabled":l?"":void 0,dir:b,...v,ref:t})})})});ee.displayName=W;var et="RadioGroupItem",er=s.forwardRef((e,t)=>{let{__scopeRadioGroup:r,disabled:a,...l}=e,u=Y(et,r),d=u.disabled||a,c=J(r),f=Q(r),m=s.useRef(null),p=(0,i.s)(t,m),x=u.value===l.value,v=s.useRef(!1);return s.useEffect(()=>{let e=e=>{B.includes(e.key)&&(v.current=!0)},t=()=>v.current=!1;return document.addEventListener("keydown",e),document.addEventListener("keyup",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}},[]),(0,n.jsx)(C,{asChild:!0,...c,focusable:!d,active:x,children:(0,n.jsx)(G,{disabled:d,required:u.required,checked:x,...f,...l,name:u.name,ref:p,onCheck:()=>u.onValueChange(l.value),onKeyDown:(0,o.m)(e=>{"Enter"===e.key&&e.preventDefault()}),onFocus:(0,o.m)(l.onFocus,()=>{v.current&&m.current?.click()})})})});er.displayName=et;var en=s.forwardRef((e,t)=>{let{__scopeRadioGroup:r,...s}=e,a=Q(r);return(0,n.jsx)($,{...a,...s,ref:t})});en.displayName="RadioGroupIndicator";var es=r(1680);let ea=(0,es.A)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);var eo=r(9462);let ei=s.forwardRef(({className:e,...t},r)=>(0,n.jsx)(ee,{className:(0,eo.cn)("grid gap-2",e),...t,ref:r}));ei.displayName=ee.displayName;let el=s.forwardRef(({className:e,...t},r)=>(0,n.jsx)(er,{ref:r,className:(0,eo.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),...t,children:(0,n.jsx)(en,{className:"flex items-center justify-center",children:(0,n.jsx)(ea,{className:"h-2.5 w-2.5 fill-current text-current"})})}));el.displayName=er.displayName;var eu=r(3261);function ed({question:e,selectedAnswer:t,onSelectAnswer:r}){let[a,o]=(0,s.useState)([]);return(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)("h3",{className:"text-xl font-medium text-center mb-6 text-gray-800",dangerouslySetInnerHTML:{__html:e.question}}),(0,n.jsx)(ei,{value:t,onValueChange:r,className:"space-y-3",children:a.map((e,s)=>(0,n.jsxs)("div",{className:`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-colors 
              ${t===e?"bg-[#eff6ff] border-[#93c5fd] shadow-sm":"hover:bg-[#f9fafb] border-[#e5e7eb]"}`,onClick:()=>r(e),children:[(0,n.jsx)(el,{value:e,id:`option-${s}`,className:"text-[#2563eb] border-[#9ca3af]"}),(0,n.jsx)(eu.J,{htmlFor:`option-${s}`,className:"flex-grow cursor-pointer text-[#374151]",dangerouslySetInnerHTML:{__html:e}})]},s))})]})}var ec=r(7021),ef=r(7643),em="Progress",[ep,ex]=(0,l.A)(em),[ev,eh]=ep(em),eb=s.forwardRef((e,t)=>{var r,s;let{__scopeProgress:a,value:o=null,max:i,getValueLabel:l=ew,...d}=e;(i||0===i)&&!eA(i)&&console.error((r=`${i}`,`Invalid prop \`max\` of value \`${r}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`));let c=eA(i)?i:100;null===o||eR(o,c)||console.error((s=`${o}`,`Invalid prop \`value\` of value \`${s}\` supplied to \`Progress\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`));let f=eR(o,c)?o:null,m=ej(f)?l(f,c):void 0;return(0,n.jsx)(ev,{scope:a,value:f,max:c,children:(0,n.jsx)(u.sG.div,{"aria-valuemax":c,"aria-valuemin":0,"aria-valuenow":ej(f)?f:void 0,"aria-valuetext":m,role:"progressbar","data-state":eN(f,c),"data-value":f??void 0,"data-max":c,...d,ref:t})})});eb.displayName=em;var eg="ProgressIndicator",ey=s.forwardRef((e,t)=>{let{__scopeProgress:r,...s}=e,a=eh(eg,r);return(0,n.jsx)(u.sG.div,{"data-state":eN(a.value,a.max),"data-value":a.value??void 0,"data-max":a.max,...s,ref:t})});function ew(e,t){return`${Math.round(e/t*100)}%`}function eN(e,t){return null==e?"indeterminate":e===t?"complete":"loading"}function ej(e){return"number"==typeof e}function eA(e){return ej(e)&&!isNaN(e)&&e>0}function eR(e,t){return ej(e)&&!isNaN(e)&&e<=t&&e>=0}ey.displayName=eg;let ek=s.forwardRef(({className:e,value:t,indicatorClassName:r,...s},a)=>(0,n.jsx)(eb,{ref:a,className:(0,eo.cn)("relative h-4 w-full overflow-hidden rounded-full bg-secondary",e),...s,children:(0,n.jsx)(ey,{className:(0,eo.cn)("h-full w-full flex-1 bg-[#2563eb] transition-all",r),style:{transform:`translateX(-${100-(t||0)}%)`}})}));ek.displayName=eb.displayName;var eI=r(6235),eC=r(7137),eS=r(5668),eE=r(6583);let eP=(0,es.A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);function e_(){let e=(0,a.useRouter)(),[t,r]=(0,s.useState)([]),[o,i]=(0,s.useState)([]),[l,u]=(0,s.useState)(0),[d,c]=(0,s.useState)(!0),[f,m]=(0,s.useState)(!1);if(d)return(0,n.jsx)("div",{className:"flex justify-center items-center min-h-screen",children:(0,n.jsx)(eI.A,{className:"h-8 w-8 animate-spin text-[#2563eb]"})});let p=(l+1)/t.length*100,x=l===t.length-1;return(0,n.jsxs)("div",{className:"container mx-auto px-4 py-8 max-w-4xl",children:[(0,n.jsx)("div",{className:"flex justify-between items-center mb-6",children:(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsxs)(ec.$,{variant:"ghost",size:"sm",onClick:()=>{sessionStorage.removeItem("quizQuestions"),sessionStorage.removeItem("userAnswers"),sessionStorage.removeItem("quizScore"),sessionStorage.removeItem("quizResults"),e.push("/")},className:"text-[#2563eb] hover:text-[#1d4ed8] hover:bg-[#eff6ff]",children:[(0,n.jsx)(eC.A,{className:"h-4 w-4 mr-2"}),"Start Over"]})})}),(0,n.jsxs)("div",{className:"mb-8",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,n.jsxs)("span",{className:"text-sm font-medium text-[#4b5563]",children:["Question ",l+1," of ",t.length]}),(0,n.jsxs)("span",{className:"text-sm font-medium text-[#4b5563]",children:[Math.round(p),"%"]})]}),(0,n.jsx)(ek,{value:p,className:"h-2 bg-[#e5e7eb]"})]}),t.length>0&&(0,n.jsxs)(ef.Zp,{className:"w-full bg-white border border-[#e5e7eb] shadow-lg rounded-xl",children:[(0,n.jsxs)(ef.aR,{className:"border-b border-[#f3f4f6] bg-[#f9fafb] rounded-t-xl",children:[(0,n.jsx)(ef.ZB,{className:"text-center text-[#2563eb]",children:t[l].category}),(0,n.jsxs)("div",{className:"flex justify-center gap-2 mt-2",children:[(0,n.jsx)("span",{className:"inline-flex items-center rounded-full bg-[#dbeafe] text-[#1e40af] px-2.5 py-0.5 text-xs font-semibold capitalize",children:t[l].difficulty}),(0,n.jsx)("span",{className:"inline-flex items-center rounded-full bg-[#f3e8ff] text-[#6b21a8] px-2.5 py-0.5 text-xs font-semibold capitalize",children:"multiple"===t[l].type?"Multiple Choice":"True/False"})]})]}),(0,n.jsx)(ef.Wu,{className:"p-6",children:(0,n.jsx)(ed,{question:t[l],selectedAnswer:o[l]||"",onSelectAnswer:e=>{let t=[...o];t[l]=e,i(t),sessionStorage.setItem("userAnswers",JSON.stringify(t))}})}),(0,n.jsxs)(ef.wL,{className:"flex justify-between border-t border-[#f3f4f6] bg-[#f9fafb] p-4 rounded-b-xl",children:[(0,n.jsxs)(ec.$,{variant:"outline",onClick:()=>{l>0&&u(l-1)},disabled:0===l,className:"border-[#d1d5db] text-[#4b5563] hover:bg-[#f3f4f6]",children:[(0,n.jsx)(eS.A,{className:"mr-2 h-4 w-4"})," Previous"]}),x?(0,n.jsx)(ec.$,{onClick:()=>{m(!0);let r=0;t.forEach((e,t)=>{o[t]===e.correct_answer&&r++});let n=r/t.length*100;sessionStorage.setItem("quizScore",n.toString()),sessionStorage.setItem("quizResults",JSON.stringify({questions:t,userAnswers:o,correctAnswers:r,totalQuestions:t.length})),e.push("/results")},disabled:f||o.some(e=>""===e),className:"bg-[#16a34a] hover:bg-[#15803d] text-white",children:f?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(eI.A,{className:"mr-2 h-4 w-4 animate-spin"}),"Submitting..."]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(eE.A,{className:"mr-2 h-4 w-4"})," Submit"]})}):(0,n.jsxs)(ec.$,{onClick:()=>{l<t.length-1&&u(l+1)},disabled:!o[l],className:"bg-[#2563eb] hover:bg-[#1d4ed8] text-white",children:["Next ",(0,n.jsx)(eP,{className:"ml-2 h-4 w-4"})]})]})]})]})}},6583:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(1680).A)("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},7137:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(1680).A)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]])},4378:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\syedf\\\\OneDrive\\\\Documents\\\\min_projects\\\\my-quizapp\\\\app\\\\quiz\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\syedf\\OneDrive\\Documents\\min_projects\\my-quizapp\\app\\quiz\\page.tsx","default")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,447,77,812,826],()=>r(1593));module.exports=n})();