(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[975],{2614:(e,r,s)=>{Promise.resolve().then(s.bind(s,974))},974:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>x});var t=s(5155),a=s(2115),n=s(6046),l=s(4085),o=s(5007),d=s(4505),i=s(1556),c=s(6507),u=s(3239);let m=(0,s(7401).A)("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);function x(){let e=(0,n.useRouter)(),[r,s]=(0,a.useState)(null),[x,h]=(0,a.useState)(!0),[b,f]=(0,a.useState)(1);if((0,a.useEffect)(()=>{let r=sessionStorage.getItem("quizResults");if(!r){e.push("/");return}s(JSON.parse(r)),h(!1)},[e]),x)return(0,t.jsx)("div",{className:"flex justify-center items-center min-h-screen",children:(0,t.jsx)(d.A,{className:"h-8 w-8 animate-spin text-blue-600"})});if(!r)return(0,t.jsxs)("div",{className:"container mx-auto px-4 py-8 text-center",children:[(0,t.jsx)("p",{className:"text-gray-700",children:"No results found. Please take a quiz first."}),(0,t.jsx)(l.$,{onClick:()=>e.push("/"),className:"mt-4 bg-blue-600 hover:bg-blue-700 text-white",children:"Go to Home"})]});let g=Math.ceil(r.questions.length/5),p=5*b,v=p-5,y=r.questions.slice(v,p);r.userAnswers.slice(v,p);let N=e=>f(e);return(0,t.jsxs)("div",{className:"container mx-auto px-4 py-8 max-w-4xl",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold text-blue-700",children:"Detailed Review"}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsxs)(l.$,{variant:"outline",onClick:()=>{sessionStorage.removeItem("quizQuestions"),sessionStorage.removeItem("userAnswers"),sessionStorage.removeItem("quizScore"),sessionStorage.removeItem("quizResults"),e.push("/setup")},className:"border-blue-300 text-blue-700 hover:bg-blue-50",children:[(0,t.jsx)(i.A,{className:"mr-2 h-4 w-4"}),"New Quiz"]}),(0,t.jsxs)(l.$,{variant:"ghost",onClick:()=>{sessionStorage.removeItem("quizQuestions"),sessionStorage.removeItem("userAnswers"),sessionStorage.removeItem("quizScore"),sessionStorage.removeItem("quizResults"),e.push("/")},className:"text-blue-600 hover:text-blue-700 hover:bg-blue-50",children:[(0,t.jsx)(c.A,{className:"mr-2 h-4 w-4"}),"Start Over"]})]})]}),(0,t.jsx)("div",{className:"space-y-6 mb-8",children:y.map((e,s)=>{let a=v+s,n=r.userAnswers[a]===e.correct_answer;return(0,t.jsxs)(o.Zp,{className:"bg-white border shadow-md rounded-xl ".concat(n?"border-l-4 border-l-green-500":"border-l-4 border-l-red-500"),children:[(0,t.jsxs)(o.aR,{className:"pb-2 border-b border-gray-100",children:[(0,t.jsxs)("div",{className:"flex justify-between items-start",children:[(0,t.jsx)(o.ZB,{className:"text-lg font-medium text-gray-800",dangerouslySetInnerHTML:{__html:e.question}}),n?(0,t.jsx)(u.A,{className:"h-5 w-5 text-green-500 flex-shrink-0 ml-2"}):(0,t.jsx)(m,{className:"h-5 w-5 text-red-500 flex-shrink-0 ml-2"})]}),(0,t.jsxs)("div",{className:"flex gap-2 mt-1",children:[(0,t.jsx)("span",{className:"text-xs font-medium text-gray-500",children:e.category}),(0,t.jsxs)("span",{className:"text-xs font-medium text-gray-500",children:["• ",e.difficulty]})]})]}),(0,t.jsx)(o.Wu,{className:"p-4",children:(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsx)("p",{className:"text-sm font-medium text-gray-700",children:"Your answer:"}),(0,t.jsx)("div",{className:"p-3 rounded-md text-sm ".concat(n?"bg-green-50 text-green-800 border border-green-200":"bg-red-50 text-red-800 border border-red-200"),dangerouslySetInnerHTML:{__html:r.userAnswers[a]||"No answer provided"}})]}),!n&&(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsx)("p",{className:"text-sm font-medium text-gray-700",children:"Correct answer:"}),(0,t.jsx)("div",{className:"p-3 rounded-md bg-green-50 text-green-800 text-sm border border-green-200",dangerouslySetInnerHTML:{__html:e.correct_answer}})]})]})})]},s)})}),g>1&&(0,t.jsxs)("div",{className:"flex justify-center items-center gap-2 mt-6",children:[(0,t.jsx)("button",{onClick:()=>N(Math.max(1,b-1)),disabled:1===b,className:"px-4 py-2 rounded-md border ".concat(1===b?"opacity-50 cursor-not-allowed bg-gray-100 text-gray-500":"hover:bg-blue-50 text-blue-700 border-blue-200"),children:"Previous"}),Array.from({length:g},(e,r)=>r+1).map(e=>(0,t.jsx)("button",{onClick:()=>N(e),className:"w-10 h-10 rounded-md flex items-center justify-center ".concat(e===b?"bg-blue-600 text-white":"border hover:bg-blue-50 text-blue-700 border-blue-200"),children:e},e)),(0,t.jsx)("button",{onClick:()=>N(Math.min(g,b+1)),disabled:b===g,className:"px-4 py-2 rounded-md border ".concat(b===g?"opacity-50 cursor-not-allowed bg-gray-100 text-gray-500":"hover:bg-blue-50 text-blue-700 border-blue-200"),children:"Next"})]})]})}},4085:(e,r,s)=>{"use strict";s.d(r,{$:()=>d});var t=s(5155),a=s(2115),n=s(1027),l=s(9602);let o=(0,n.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,r)=>{let{className:s,variant:a,size:n,asChild:d=!1,...i}=e;return(0,t.jsx)("button",{className:(0,l.cn)(o({variant:a,size:n,className:s})),ref:r,...i})});d.displayName="Button"},5007:(e,r,s)=>{"use strict";s.d(r,{Wu:()=>i,ZB:()=>d,Zp:()=>l,aR:()=>o,wL:()=>c});var t=s(5155),a=s(2115),n=s(9602);let l=a.forwardRef((e,r)=>{let{className:s,...a}=e;return(0,t.jsx)("div",{ref:r,className:(0,n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",s),...a})});l.displayName="Card";let o=a.forwardRef((e,r)=>{let{className:s,...a}=e;return(0,t.jsx)("div",{ref:r,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",s),...a})});o.displayName="CardHeader";let d=a.forwardRef((e,r)=>{let{className:s,...a}=e;return(0,t.jsx)("h3",{ref:r,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",s),...a})});d.displayName="CardTitle",a.forwardRef((e,r)=>{let{className:s,...a}=e;return(0,t.jsx)("p",{ref:r,className:(0,n.cn)("text-sm text-muted-foreground",s),...a})}).displayName="CardDescription";let i=a.forwardRef((e,r)=>{let{className:s,...a}=e;return(0,t.jsx)("div",{ref:r,className:(0,n.cn)("p-6 pt-0",s),...a})});i.displayName="CardContent";let c=a.forwardRef((e,r)=>{let{className:s,...a}=e;return(0,t.jsx)("div",{ref:r,className:(0,n.cn)("flex items-center p-6 pt-0",s),...a})});c.displayName="CardFooter"},9602:(e,r,s)=>{"use strict";s.d(r,{cn:()=>n});var t=s(3463),a=s(9795);function n(){for(var e=arguments.length,r=Array(e),s=0;s<e;s++)r[s]=arguments[s];return(0,a.QP)((0,t.$)(r))}},3239:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(7401).A)("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},6507:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(7401).A)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]])},1556:(e,r,s)=>{"use strict";s.d(r,{A:()=>t});let t=(0,s(7401).A)("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]])}},e=>{var r=r=>e(e.s=r);e.O(0,[92,441,517,358],()=>r(2614)),_N_E=e.O()}]);