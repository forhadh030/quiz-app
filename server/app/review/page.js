(()=>{var e={};e.id=975,e.ids=[975],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},9637:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>l});var s=t(260),a=t(8203),n=t(5155),i=t.n(n),o=t(7292),d={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);t.d(r,d);let l=["",{children:["review",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,1891)),"C:\\Users\\syedf\\OneDrive\\Documents\\min_projects\\my-quizapp\\app\\review\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,9611)),"C:\\Users\\syedf\\OneDrive\\Documents\\min_projects\\my-quizapp\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\syedf\\OneDrive\\Documents\\min_projects\\my-quizapp\\app\\review\\page.tsx"],u={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/review/page",pathname:"/review",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},546:(e,r,t)=>{Promise.resolve().then(t.bind(t,1891))},7402:(e,r,t)=>{Promise.resolve().then(t.bind(t,8016))},7959:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,802,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},7279:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,8903,23)),Promise.resolve().then(t.t.bind(t,7174,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},1475:()=>{},1865:()=>{},8016:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var s=t(5512),a=t(8009),n=t(9334),i=t(7021),o=t(7643),d=t(6235),l=t(8496),c=t(7137),u=t(6583);let m=(0,t(1680).A)("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);function p(){let e=(0,n.useRouter)(),[r,t]=(0,a.useState)(null),[p,x]=(0,a.useState)(!0),[h,b]=(0,a.useState)(1);if(p)return(0,s.jsx)("div",{className:"flex justify-center items-center min-h-screen",children:(0,s.jsx)(d.A,{className:"h-8 w-8 animate-spin text-blue-600"})});if(!r)return(0,s.jsxs)("div",{className:"container mx-auto px-4 py-8 text-center",children:[(0,s.jsx)("p",{className:"text-gray-700",children:"No results found. Please take a quiz first."}),(0,s.jsx)(i.$,{onClick:()=>e.push("/"),className:"mt-4 bg-blue-600 hover:bg-blue-700 text-white",children:"Go to Home"})]});let v=Math.ceil(r.questions.length/5),f=5*h,g=f-5,y=r.questions.slice(g,f);r.userAnswers.slice(g,f);let j=e=>b(e);return(0,s.jsxs)("div",{className:"container mx-auto px-4 py-8 max-w-4xl",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold text-blue-700",children:"Detailed Review"}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsxs)(i.$,{variant:"outline",onClick:()=>{sessionStorage.removeItem("quizQuestions"),sessionStorage.removeItem("userAnswers"),sessionStorage.removeItem("quizScore"),sessionStorage.removeItem("quizResults"),e.push("/setup")},className:"border-blue-300 text-blue-700 hover:bg-blue-50",children:[(0,s.jsx)(l.A,{className:"mr-2 h-4 w-4"}),"New Quiz"]}),(0,s.jsxs)(i.$,{variant:"ghost",onClick:()=>{sessionStorage.removeItem("quizQuestions"),sessionStorage.removeItem("userAnswers"),sessionStorage.removeItem("quizScore"),sessionStorage.removeItem("quizResults"),e.push("/")},className:"text-blue-600 hover:text-blue-700 hover:bg-blue-50",children:[(0,s.jsx)(c.A,{className:"mr-2 h-4 w-4"}),"Start Over"]})]})]}),(0,s.jsx)("div",{className:"space-y-6 mb-8",children:y.map((e,t)=>{let a=g+t,n=r.userAnswers[a]===e.correct_answer;return(0,s.jsxs)(o.Zp,{className:`bg-white border shadow-md rounded-xl ${n?"border-l-4 border-l-green-500":"border-l-4 border-l-red-500"}`,children:[(0,s.jsxs)(o.aR,{className:"pb-2 border-b border-gray-100",children:[(0,s.jsxs)("div",{className:"flex justify-between items-start",children:[(0,s.jsx)(o.ZB,{className:"text-lg font-medium text-gray-800",dangerouslySetInnerHTML:{__html:e.question}}),n?(0,s.jsx)(u.A,{className:"h-5 w-5 text-green-500 flex-shrink-0 ml-2"}):(0,s.jsx)(m,{className:"h-5 w-5 text-red-500 flex-shrink-0 ml-2"})]}),(0,s.jsxs)("div",{className:"flex gap-2 mt-1",children:[(0,s.jsx)("span",{className:"text-xs font-medium text-gray-500",children:e.category}),(0,s.jsxs)("span",{className:"text-xs font-medium text-gray-500",children:["• ",e.difficulty]})]})]}),(0,s.jsx)(o.Wu,{className:"p-4",children:(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("p",{className:"text-sm font-medium text-gray-700",children:"Your answer:"}),(0,s.jsx)("div",{className:`p-3 rounded-md text-sm ${n?"bg-green-50 text-green-800 border border-green-200":"bg-red-50 text-red-800 border border-red-200"}`,dangerouslySetInnerHTML:{__html:r.userAnswers[a]||"No answer provided"}})]}),!n&&(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("p",{className:"text-sm font-medium text-gray-700",children:"Correct answer:"}),(0,s.jsx)("div",{className:"p-3 rounded-md bg-green-50 text-green-800 text-sm border border-green-200",dangerouslySetInnerHTML:{__html:e.correct_answer}})]})]})})]},t)})}),v>1&&(0,s.jsxs)("div",{className:"flex justify-center items-center gap-2 mt-6",children:[(0,s.jsx)("button",{onClick:()=>j(Math.max(1,h-1)),disabled:1===h,className:`px-4 py-2 rounded-md border ${1===h?"opacity-50 cursor-not-allowed bg-gray-100 text-gray-500":"hover:bg-blue-50 text-blue-700 border-blue-200"}`,children:"Previous"}),Array.from({length:v},(e,r)=>r+1).map(e=>(0,s.jsx)("button",{onClick:()=>j(e),className:`w-10 h-10 rounded-md flex items-center justify-center ${e===h?"bg-blue-600 text-white":"border hover:bg-blue-50 text-blue-700 border-blue-200"}`,children:e},e)),(0,s.jsx)("button",{onClick:()=>j(Math.min(v,h+1)),disabled:h===v,className:`px-4 py-2 rounded-md border ${h===v?"opacity-50 cursor-not-allowed bg-gray-100 text-gray-500":"hover:bg-blue-50 text-blue-700 border-blue-200"}`,children:"Next"})]})]})}},7021:(e,r,t)=>{"use strict";t.d(r,{$:()=>d});var s=t(5512),a=t(8009),n=t(1643),i=t(9462);let o=(0,n.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef(({className:e,variant:r,size:t,asChild:a=!1,...n},d)=>(0,s.jsx)("button",{className:(0,i.cn)(o({variant:r,size:t,className:e})),ref:d,...n}));d.displayName="Button"},7643:(e,r,t)=>{"use strict";t.d(r,{Wu:()=>l,ZB:()=>d,Zp:()=>i,aR:()=>o,wL:()=>c});var s=t(5512),a=t(8009),n=t(9462);let i=a.forwardRef(({className:e,...r},t)=>(0,s.jsx)("div",{ref:t,className:(0,n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...r}));i.displayName="Card";let o=a.forwardRef(({className:e,...r},t)=>(0,s.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",e),...r}));o.displayName="CardHeader";let d=a.forwardRef(({className:e,...r},t)=>(0,s.jsx)("h3",{ref:t,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",e),...r}));d.displayName="CardTitle",a.forwardRef(({className:e,...r},t)=>(0,s.jsx)("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",e),...r})).displayName="CardDescription";let l=a.forwardRef(({className:e,...r},t)=>(0,s.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",e),...r}));l.displayName="CardContent";let c=a.forwardRef(({className:e,...r},t)=>(0,s.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",e),...r}));c.displayName="CardFooter"},9462:(e,r,t)=>{"use strict";t.d(r,{cn:()=>n});var s=t(2281),a=t(4805);function n(...e){return(0,a.QP)((0,s.$)(e))}},6583:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});let s=(0,t(1680).A)("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},7137:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});let s=(0,t(1680).A)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]])},8496:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});let s=(0,t(1680).A)("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]])},9611:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o,metadata:()=>i});var s=t(2740),a=t(1421),n=t.n(a);t(2704);let i={title:"Trivia Quiz App",description:"Test your knowledge with questions from the Open Trivia Database",generator:"v0.dev"};function o({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${n().className} bg-[#f8fafc]`,suppressHydrationWarning:!0,children:e})})}},1891:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\syedf\\\\OneDrive\\\\Documents\\\\min_projects\\\\my-quizapp\\\\app\\\\review\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\syedf\\OneDrive\\Documents\\min_projects\\my-quizapp\\app\\review\\page.tsx","default")},6055:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(8077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},2704:()=>{}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,447,77,812],()=>t(9637));module.exports=s})();