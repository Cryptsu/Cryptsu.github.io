(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{592:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(4792)}])},7266:function(e,t,r){"use strict";var o=r(5893),n=r(7294),l=r(1533),i=r(5919),s=r(8617);let a=e=>{let{children:t,text:r,blinkColor:i,...a}=e,[h,g]=(0,n.useState)(""),[m,S]=(0,n.useState)(0),[p,u]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(m>=r.length)return;let e=setTimeout(()=>{u(!p)},100*Math.random());return()=>clearTimeout(e)}),(0,n.useEffect)(()=>{.1>Math.random()||S(m+1)},[p]),(0,n.useEffect)(()=>{m>=r.length||g(h+r[m])},[m]),(0,o.jsxs)(l.Z,{style:c,...a,children:[h,(0,o.jsx)(l.Z,{style:d,css:{color:i},elementName:s.rZ.tK,children:s.Zg.v6})]})},c={whiteSpace:"pre-line"},d={paddingLeft:"0.25em",animation:"".concat((0,i.F4)({"0%":{opacity:1},"50%":{opacity:0},"100%":{opacity:1}})," 1.5s infinite ease-in-out")};t.Z=a},6845:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var o=r(5893),n=r(7294),l=r(2051);let i=()=>{let e=(0,n.useContext)(l.V);if(!e)throw Error("useLayout must be used inside of a LayoutProvider.");return e};var s=r(7484),a=r.n(s),c=r(178),d=r.n(c),h=r(9387),g=r.n(h),m=r(4110),S=r.n(m),p=r(6176),u=r.n(p),f=r(8734),x=r.n(f);r(5054),r(7553);var b=r(1255),y=r(8617);let v=(e,t)=>(a().extend(d()),a().extend(g()),a().extend(S()),a().extend(u()),a().extend(x()),a()(t).tz(b.X.Xu).locale(e).clone()),w=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.e3.NE,r=arguments.length>2?arguments[2]:void 0;return v(t,e).format(r)},j=e=>{let{children:t,dateStr:r,format:n="D MMMM, YYYY",...l}=e,{currentLocale:s}=i();return(0,o.jsx)(o.Fragment,{children:w(r,s,n)})};var k=j},4792:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return tN},default:function(){return tE}});var o,n,l=r(5893),i=r(2962),s=r(2714),a=r(7294);let c=(0,a.createContext)({headingInfos:[],UpdateHeadingInfoReducer:e=>{}}),d=(e,t)=>{let r=e.findIndex(e=>e.headingID===t.headingID&&e.level===t.level);return -1===r?[...e,t]:e},h=e=>{let{children:t,...r}=e,[o,n]=(0,a.useReducer)(d,[]);return(0,l.jsx)(c.Provider,{value:{headingInfos:o,UpdateHeadingInfoReducer:n},children:t})};var g=r(1533),m=r(3305);let S=()=>{let e=(0,a.useContext)(c);if(!e)throw Error("useContent must be used inside of a ContentContext.Provider.");return e};var p=r(5626),u=r(5919);let f=e=>{let{children:t,level:r=1,id:o="",...n}=e,i=(0,a.useRef)(null),{UpdateHeadingInfoReducer:s}=S();return(0,p.Z)(()=>{s({headingContent:t,headingID:o,headingRef:i,level:r})},[]),(0,l.jsxs)(g.Z,{style:Z,css:C[r],elementName:"h".concat(r),...n,children:[(0,l.jsx)(g.Z,{style:k,ref:i,id:o}),t]})},x=e=>(0,l.jsx)(f,{level:1,...e}),b=e=>(0,l.jsx)(f,{level:2,...e}),y=e=>(0,l.jsx)(f,{level:3,...e}),v=e=>(0,l.jsx)(f,{level:4,...e}),w=e=>(0,l.jsx)(f,{level:5,...e}),j=e=>(0,l.jsx)(f,{level:6,...e}),k={position:"absolute",top:-90},Z={position:"relative",textTransform:"uppercase",wordBreak:"break-word"},C={1:{fontSize:u.rS.fontSizes.h1,fontWeight:u.rS.fontWeights.h1,letterSpacing:u.rS.letterSpacings.h1,lineHeight:u.rS.lineHeights.h1,marginTop:16,marginBottom:16},2:{fontSize:u.rS.fontSizes.h2,fontWeight:u.rS.fontWeights.h2,letterSpacing:u.rS.letterSpacings.h2,lineHeight:u.rS.lineHeights.h2,marginTop:16,marginBottom:16},3:{fontSize:u.rS.fontSizes.h3,fontWeight:u.rS.fontWeights.h3,letterSpacing:u.rS.letterSpacings.h3,lineHeight:u.rS.lineHeights.h3,marginTop:16,marginBottom:16},4:{fontSize:u.rS.fontSizes.h4,fontWeight:u.rS.fontWeights.h4,letterSpacing:u.rS.letterSpacings.h4,lineHeight:u.rS.lineHeights.h4,marginTop:16,marginBottom:16},5:{fontSize:u.rS.fontSizes.h5,fontWeight:u.rS.fontWeights.h5,letterSpacing:u.rS.letterSpacings.h5,lineHeight:u.rS.lineHeights.h5,marginTop:8,marginBottom:8},6:{fontSize:u.rS.fontSizes.h6,fontWeight:u.rS.fontWeights.h6,letterSpacing:u.rS.letterSpacings.h6,lineHeight:u.rS.lineHeights.h6,marginTop:8,marginBottom:8}};var B=r(8617);let W=e=>{let{children:t,...r}=e;return(0,l.jsx)(g.Z,{style:I,elementName:B.rZ.P,...r,children:t})},I={marginTop:12,marginBottom:12,wordBreak:"break-word"},T=e=>{let{children:t,...r}=e;return(0,l.jsx)(g.Z,{style:z,elementName:B.rZ.Cs,...r,children:t})},z={marginTop:"0.75em",marginBottom:"0.75em",marginLeft:"0.5em",marginRight:"0.5em",paddingLeft:"2em",paddingRight:"2em",paddingTop:"0.5em",paddingBottom:"0.5em",borderLeft:"0.5em",borderRight:0,borderTop:0,borderBottom:0,borderStyle:"solid",backgroundColor:u.rS.colors.quoteBackground,borderColor:u.rS.colors.quoteLegend,borderRadius:"1.5em",boxShadow:u.rS.shadows.depthShadow,color:u.rS.colors.textLLess};var L=r(1664),R=r.n(L);let N=e=>{let{children:t,...r}=e;return(0,l.jsx)(g.Z,{as:R(),style:E,...r,children:t})},E={color:u.rS.colors.tertiary,paddingBottom:4,movUnderline:"".concat(u.rS.colors.gTertiary," 2px 0px 0px"),"&:visited":{color:u.rS.colors.color23},"&:active":{color:u.rS.colors.secondary,movUnderlineColor:u.rS.colors.gSecondary}},H=e=>{let{children:t,...r}=e;return(0,l.jsx)(g.Z,{style:D,elementName:B.rZ.cO,...r,children:t})},D={fontFamily:u.rS.fonts.code,color:u.rS.colors.primary,paddingLeft:8,paddingRight:8,backgroundColor:u.rS.colors.codeInnerBackground,borderRadius:8,textTransform:"none",wordBreak:"break-word"};(o=n||(n={}))[o.normal=0]="normal",o[o.wrapCode=1]="wrapCode",o[o.closeBox=2]="closeBox";let F=[n.normal,n.wrapCode,n.closeBox],A=(0,a.createContext)({showInner:!0,wrapCode:!1,codeBlockState:n.normal,blockHeight:null,shouldToggleAnimation:!0,ToggleContentFn:()=>{},ToggleWrapFn:()=>{},UpdateVisualStateFn:()=>{},UpdateBlockHeightFn:e=>{}});var X=r(9091);let G=e=>{let{children:t,...r}=e;return(0,l.jsx)(g.Z,{style:P,...r,children:(0,l.jsx)(g.Z,{style:Y,as:X.ZN})})},P={width:"0.75em",height:"0.75em",borderRadius:"100%",cursor:"pointer",display:"flex",backgroundColor:u.rS.colors.green,"&:hover":{backgroundColor:u.rS.colors.brightGreen},"&:active":{backgroundColor:u.rS.colors.darkGreen}},Y={fill:u.rS.colors.black,width:"0.75em",height:"0.75em",opacity:"0%","&:hover":{opacity:"100%"}},M=e=>{let{children:t,showInner:r,...o}=e;return(0,l.jsx)(g.Z,{style:_,...o,children:(0,l.jsx)(g.Z,{style:U,as:r?X.g8:X.v4})})},_={width:"0.75em",height:"0.75em",borderRadius:"100%",cursor:"pointer",display:"flex",backgroundColor:u.rS.colors.red,"&:hover":{backgroundColor:u.rS.colors.brightRed},"&:active":{backgroundColor:u.rS.colors.darkRed}},U={fill:u.rS.colors.black,width:"0.75em",height:"0.75em",opacity:"0%","&:hover":{opacity:"100%"}},O=e=>{let{children:t,wrapCode:r,...o}=e;return(0,l.jsx)(g.Z,{style:K,...o,children:(0,l.jsx)(g.Z,{style:Q,as:r?X.Wk:X.HA})})},K={width:"0.75em",height:"0.75em",borderRadius:"100%",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:u.rS.colors.yellow,"&:hover":{backgroundColor:u.rS.colors.brightYellow},"&:active":{backgroundColor:u.rS.colors.darkYellow}},Q={fill:u.rS.colors.black,width:"0.625em",height:"0.625em",transform:"scaleY(-1)",opacity:"0%","&:hover":{opacity:"100%"}},J=e=>{let{children:t,style:r,...o}=e;return(0,l.jsx)(g.Z,{css:r,style:V,...o,children:t})},V={display:"flex",justifyContent:"center",alignItems:"center",userSelect:"none",borderRadius:"0.5em",borderStyle:"solid","@media (hover: hover)":{"&:hover":{backgroundColor:u.rS.colors.buttonHoverBackground,cursor:"pointer"}},"&:active":{transform:"translateY(4px)"}},q={[n.normal]:X.v4,[n.closeBox]:X.g8,[n.wrapCode]:X.HA},$={[n.normal]:{},[n.closeBox]:{},[n.wrapCode]:{transform:"scaleY(-1)"}},ee=e=>{let{children:t,codeBlockState:r,...o}=e;return(0,l.jsx)(g.Z,{as:J,style:et,...o,children:(0,l.jsx)(g.Z,{css:$[r],style:er,as:q[r]})})},et={width:"1.5em",height:"1.5em",borderRadius:"8px !important",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",userSelect:"none",borderWidth:"0.125em",borderColor:u.rS.colors.tertiary,boxShadow:u.rS.shadows.codeBlockMobileBtnNormal,"&:active":{boxShadow:u.rS.shadows.codeBlockMobileBtnClick}},er={fill:u.rS.colors.iconGeneral,width:"1em",height:"1em"},eo=e=>{let{children:t,...r}=e,{ToggleContentFn:o,ToggleWrapFn:n,UpdateVisualStateFn:i,showInner:s,wrapCode:c,codeBlockState:d}=(0,a.useContext)(A);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.Z,{style:el,...r,children:(0,l.jsx)(ee,{codeBlockState:d,onClick:i})}),(0,l.jsxs)(g.Z,{style:en,...r,children:[(0,l.jsx)(M,{title:B.Zg.VN,showInner:s,onClick:o}),(0,l.jsx)(O,{title:B.Zg.pV,wrapCode:c,onClick:n}),(0,l.jsx)(G,{title:B.Zg.QK})]})]})},en={display:"flex",flexDirection:"row",justifyContent:"left",alignItems:"center",transform:"translateY(2px)",gap:8,[".".concat(B.JI.Qf," &")]:{display:"none"},[".".concat(B.JI.UU," &")]:{display:"none"}},el={display:"none",[".".concat(B.JI.Qf," &")]:{display:"block"},[".".concat(B.JI.UU," &")]:{display:"block"}};var ei=r(792),es=r.n(ei),ea=r(640),ec=r.n(ea);let ed=e=>{let{content:t,refreshTime:r=2e3,style:o,...n}=e,[i,s]=(0,a.useState)(!1),c=e=>{e.currentTarget.blur();let r=ec()(es()(t));s(r)};return(0,a.useEffect)(()=>{if(!i)return;let e=setTimeout(()=>{s(!1)},r);return()=>{clearTimeout(e)}},[r,i]),(0,l.jsx)(g.Z,{css:o,as:J,style:eh,onClick:c,...n,children:i?(0,l.jsx)(X.nQ,{style:em}):(0,l.jsx)(X.Km,{viewBox:"0 0 7 8",style:eg})})},eh={borderWidth:"0.125em",borderColor:u.rS.colors.next,boxShadow:u.rS.shadows.codeCopyBtnNormal,"&:active":{backgroundColor:u.rS.colors.next,boxShadow:u.rS.shadows.codeCopyBtnClick},width:"1.5em",height:"1.5em",display:"flex",justifyContent:"center",alignItems:"center"},eg={fill:u.rS.colors.iconGeneral,width:"0.75em",height:"0.75em"},em={fill:u.rS.colors.success,width:"0.75em",height:"0.75em"},eS=e=>{let{content:t,...r}=e;return(0,l.jsx)(g.Z,{title:B.Zg.uh,style:ep,...r,children:(0,l.jsx)(ed,{content:t})})},ep={display:"flex",flexDirection:"row",justifyContent:"right",alignItems:"center"},eu=e=>{let{languageName:t="",...r}=e;return(0,l.jsx)(g.Z,{style:ef,...r})},ef={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",userSelect:"none",color:u.rS.colors.textLess,fontSize:u.rS.fontSizes.h5,letterSpacing:u.rS.letterSpacings.h5,fontWeight:u.rS.fontWeights.bold,textTransform:"capitalize",transform:"translateY(0.0625em)"},ex=e=>{let{content:t,className:r,...o}=e,n=null==r?void 0:r.split(" "),i=null==n?void 0:n.find(e=>/language-*/.test(e)),s=i?i.slice(9):"";return(0,l.jsxs)(g.Z,{style:eb,...o,children:[(0,l.jsx)(g.Z,{as:eo,style:ey}),(0,l.jsx)(g.Z,{as:eu,style:ev,languageName:s}),(0,l.jsx)(g.Z,{as:eS,style:ew,content:t})]})},eb={display:"grid",gridTemplateAreas:"'codeblock-header-ifhone-btn codeblock-header-lang-area codeblock-header-action-btn'",gridTemplateColumns:"1fr 1fr 1fr",paddingLeft:16,paddingRight:16},ey={gridArea:"codeblock-header-ifhone-btn"},ev={gridArea:"codeblock-header-lang-area"},ew={gridArea:"codeblock-header-action-btn"},ej=e=>{let{children:t,wrapCode:r,elementRef:o,...n}=e;return(0,l.jsx)(g.Z,{ref:o,style:ek,css:r?{whiteSpace:"pre-wrap",lineBreak:"anywhere"}:{overflowX:"auto"},...n,children:t})},ek={paddingBottom:8,overflowY:"hidden",scrollbarWidth:"thin","&::-webkit-scrollbar":{height:"6px"},"&::-webkit-scrollbar-thumb:horizontal":{backgroundImage:"linear-gradient(".concat(u.rS.colors.scrollbarThumb,", ").concat(u.rS.colors.scrollbarThumb,")"),backgroundSize:"100% 4px",backgroundPositionY:"1px","&:hover":{backgroundImage:"none"}},"&::-webkit-scrollbar-track:horizontal:hover":{backgroundImage:"linear-gradient(".concat(u.rS.colors.scrollbarTrack,", ").concat(u.rS.colors.scrollbarTrack,")"),backgroundSize:"100% 2px",backgroundPositionY:"2px",backgroundRepeat:"repeat-x"},color:u.rS.colors.textGeneral,marginLeft:4,".token":{"&.keyword":{fontWeight:"bold"},"&.comment, &.prolog, &.cdata":{color:u.rS.colors.codeComment},"&.delimiter, &.boolean, &.keyword, &.selector, &.important, &.doctype, &.atrule, &.url":{color:u.rS.colors.codeKeyword},"&.tag, &.builtin, &.regex":{color:u.rS.colors.codeNamespace},"&.property, &.variable, &.attr-value, &.class-name, &.string, &.char":{color:u.rS.colors.codeVariable},"&.literal-property, &.attr-name":{color:u.rS.colors.codeAttribute},"&.function":{color:u.rS.colors.codeFunction},"&.tag .punctuation, &.attr-value .punctuation":{color:u.rS.colors.codePunctuation},"&.operator":{color:u.rS.colors.codeOperator},"&.boolean, &.number, &.constant":{color:u.rS.colors.codeLiteral},"&.inserted":{color:u.rS.colors.codeAddition},"&.deleted":{color:u.rS.colors.codeDeletion},"&.url":{textDecoration:"underline"},"&.bold, &.important":{fontWeight:"bold"},"&.italic":{fontStyle:"italic"}}},eZ=e=>{let{children:t,...r}=e,o=(0,a.useRef)(null),{showInner:n,wrapCode:i,blockHeight:s,shouldToggleAnimation:c,UpdateBlockHeightFn:d}=(0,a.useContext)(A);return(0,a.useLayoutEffect)(()=>{let e=o.current;e&&d(e.scrollHeight)}),(0,l.jsx)(g.Z,{style:eW,css:c?{...n?eC:eB,height:s}:{height:n?"auto":"0px",opacity:n?1:0},...r,children:(0,l.jsx)(ej,{wrapCode:i,elementRef:o,children:t})})},eC={animation:"".concat((0,u.F4)({"0%":{opacity:0,height:0},"100%":{opacity:1}})," 1s ease forwards")},eB={animation:"".concat((0,u.F4)({"100%":{opacity:0,height:0}})," 1s ease forwards")},eW={fontSize:u.rS.fontSizes.h5,letterSpacing:u.rS.letterSpacings.h5,lineHeight:u.rS.lineHeights.h5,"@small":{fontSize:u.rS.fontSizes.h6,letterSpacing:u.rS.letterSpacings.h6,lineHeight:u.rS.lineHeights.h6},display:"flex",flexDirection:"row",gap:8},eI=e=>{let{children:t,className:r,...o}=e,[i,s]=(0,a.useState)(n.normal),[c,d]=(0,a.useState)(!0),[h,m]=(0,a.useState)(!1),[S,p]=(0,a.useState)(null),[u,f]=(0,a.useState)(!1),x=()=>{f(!0),d(!c)},b=()=>{f(!1),m(!h)},y=()=>{let e=(i+1)%F.length;switch(s(e),F[e]){case n.normal:f(!0),d(!0);break;case n.wrapCode:f(!1),d(!0),m(!0);break;case n.closeBox:f(!0),m(!1),d(!1)}};return(0,l.jsx)(A.Provider,{value:{showInner:c,wrapCode:h,codeBlockState:F[i],blockHeight:S,shouldToggleAnimation:u,ToggleContentFn:x,ToggleWrapFn:b,UpdateVisualStateFn:y,UpdateBlockHeightFn:p},children:(0,l.jsx)(g.Z,{style:eT,elementName:B.rZ.cO,...o,children:(0,l.jsxs)(g.Z,{style:ez,children:[(0,l.jsx)(ex,{content:t,className:r}),(0,l.jsx)(eZ,{children:t})]})})})},eT={fontFamily:u.rS.fonts.code},ez={marginTop:"1em",marginBottom:"1em",marginLeft:"2em",marginRight:"2em",borderRadius:"1em","@large":{marginLeft:0,marginRight:0},display:"flex",flexDirection:"column",padding:"1em",gap:"1em",backgroundImage:"".concat(u.rS.colors.codeBlockBackground),boxShadow:u.rS.shadows.depthShadow},eL=e=>{let{children:t,...r}=e;return(0,l.jsx)(g.Z,{style:eR,elementName:B.rZ.UL,...r,children:t})},eR={position:"relative",listStyle:"none",margin:0,marginLeft:48,marginRight:48,"@small":{marginLeft:16,marginRight:16},counterReset:"ListItemNo",["& ".concat(B.rZ.LI)]:{["".concat(B.rZ.LI,":before")]:{content:"◦"}},["& ".concat(B.rZ.LI,":before")]:{content:"•",color:u.rS.colors.primary,fontWeight:u.rS.fontWeights.bold}},eN=e=>{let{children:t,...r}=e;return(0,l.jsx)(g.Z,{style:eE,elementName:B.rZ.OL,...r,children:t})},eE={position:"relative",listStyle:"none",margin:0,marginLeft:48,marginRight:48,"@small":{marginLeft:16,marginRight:16},counterReset:"ListItemNo",["& ".concat(B.rZ.LI)]:{counterIncrement:"ListItemNo"},["& ".concat(B.rZ.LI,":before")]:{content:'counters(ListItemNo, ".")"."',color:u.rS.colors.primary,fontWeight:u.rS.fontWeights.bold}},eH=e=>{let{children:t,...r}=e;return(0,l.jsx)(g.Z,{style:eD,elementName:B.rZ.LI,...r,children:(0,l.jsx)(g.Z,{elementName:B.rZ.tK,style:eF,children:t})})},eD={display:"flex",flexDirection:"row",gap:8,marginBottom:8,marginTop:8},eF={maxWidth:"100%","&> :first-child":{marginTop:0}},eA=e=>{let{children:t,alt:r,width:o,height:n,...i}=e;return(0,l.jsxs)(g.Z,{style:eX,children:[(0,l.jsx)(g.Z,{elementName:B.rZ.MY,style:eG,alt:r,css:{width:o,height:n},onError:e=>{e.target.src=B.R3.gp},...i,children:t}),(()=>{if(r)return(0,l.jsx)(g.Z,{style:eP,children:r})})()]})},eX={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"0.5em",margin:0,marginTop:"2em",marginBottom:"2em"},eG={maxWidth:"90%","@medium":{maxWidth:"100%"},borderRadius:16},eP={wordBreak:"break-word",textAlign:"center",fontSize:u.rS.fontSizes.h5,fontWeight:u.rS.fontWeights.bold,maxWidth:"90%","@medium":{fontSize:u.rS.fontSizes.h6,maxWidth:"100%"},borderWidth:"0.125em",borderStyle:"dashed",borderRadius:16,paddingTop:"0.25em",paddingBottom:"0.25em",paddingLeft:"0.75em",paddingRight:"0.75em",borderColor:"#00000000","&:hover":{borderColor:u.rS.colors.borderGeneral}},eY=e=>{let{children:t,...r}=e;return(0,l.jsx)(g.Z,{style:eM,elementName:B.rZ.tK,...r,children:t})},eM={overflowX:"auto",textTransform:"none"},e_=e=>{let{children:t,...r}=e;return(0,l.jsx)(g.Z,{style:eU,elementName:B.rZ.bg,...r,children:t})},eU={overflowX:"auto",border:0,borderTop:2,borderBottom:2,borderStyle:"dashed",borderColor:u.rS.colors.divider50},eO=e=>{let{children:t,...r}=e;return(0,l.jsx)(g.Z,{style:eK,children:(0,l.jsx)(g.Z,{style:eQ,elementName:B.rZ.Fe,...r,children:t})})},eK={overflow:"auto",display:"flex",alignItems:"center","&::before, &::after":{content:" ",margin:"auto"},margin:"auto",marginTop:"2em",marginBottom:"2em"},eQ={marginLeft:"1em",marginRight:"1em",borderCollapse:"collapse",["".concat(B.rZ.TH,", ").concat(B.rZ.TD)]:{border:"4px solid",borderColor:u.rS.colors.borderGeneral,padding:8}};var eJ=(e=>{let t={};for(let r of Object.keys(e))t[r]=t=>{let{children:o,className:n,...i}=t,s=n?n.split(" "):[];for(let t of e[r]){let e=!0;if(t.classNames){for(let r of t.classNames)if(!s.includes(r)){e=!1;break}}if(e)return(0,l.jsx)(g.Z,{as:t.replacedElement,className:n,...i,children:o})}return(0,l.jsx)(g.Z,{elementName:r,className:n,...i,children:o})};return t})({h1:[{replacedElement:x}],h2:[{replacedElement:b}],h3:[{replacedElement:y}],h4:[{replacedElement:v}],h5:[{replacedElement:w}],h6:[{replacedElement:j}],p:[{replacedElement:W}],blockquote:[{replacedElement:T}],a:[{replacedElement:N}],code:[{replacedElement:eI,classNames:["code-highlight"]},{replacedElement:H}],ul:[{replacedElement:eL}],ol:[{replacedElement:eN}],img:[{replacedElement:eA}],span:[{replacedElement:eY,classNames:["math-inline","math"]}],div:[{replacedElement:e_,classNames:["math-display","math"]}],li:[{replacedElement:eH}],table:[{replacedElement:eO}]});let eV=e=>{let{sourceContent:t}=e;return(0,l.jsx)(m.R,{...t,components:eJ})};var eq=(0,a.memo)(eV),e$=r(7266);let e0=e=>{let{children:t,...r}=e;return(0,l.jsx)(g.Z,{style:e1,...r,children:t})},e1={color:u.rS.colors.textGeneral,fontSize:u.rS.fontSizes.h0,fontWeight:u.rS.fontWeights.h0,letterSpacing:u.rS.letterSpacings.h0,"@medium":{fontSize:u.rS.fontSizes.h2,fontWeight:u.rS.fontWeights.bold,letterSpacing:u.rS.letterSpacings.h2},textDecoration:"underline",textAlign:"center",width:"75%"};var e5=r(6845);let e2=e=>{let{children:t,frontMatter:r,...o}=e;return(0,l.jsxs)(g.Z,{style:e6,children:[(0,l.jsxs)(g.Z,{style:e4,children:[(0,l.jsx)(X.Qu,{style:{fill:u.rS.colors.tertiary,width:"1em",height:"1em"}}),(0,l.jsx)(e5.Z,{dateStr:r.date})]}),(0,l.jsxs)(g.Z,{style:e4,children:[(0,l.jsx)(X.Zi,{style:{fill:u.rS.colors.tertiary,width:"1em",height:"1em"}}),"".concat(r.noWords," ").concat(B.Zg.Kw)]}),(0,l.jsxs)(g.Z,{style:e4,children:[(0,l.jsx)(X.T3,{style:{fill:u.rS.colors.tertiary,width:"1em",height:"1em"}}),"".concat(r.minsRead," ").concat(B.Zg.G8)]})]})},e6={display:"flex",justifyContent:"center",alignItems:"center",gap:"1em",flexDirection:"row","@small":{gap:"0.25em",flexDirection:"column"},color:u.rS.colors.textLesser,fontSize:u.rS.fontSizes.h5,letterSpacing:u.rS.letterSpacings.h5,"@medium":{fontSize:u.rS.fontSizes.h6,letterSpacing:u.rS.letterSpacings.h6}},e4={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"0.5em"},e7=e=>{let{description:t}=e;return(0,l.jsx)(l.Fragment,{children:t&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(g.Z,{style:e8,children:t})})})},e8={paddingBottom:"0.25em",color:u.rS.colors.textGeneral,fontSize:u.rS.fontSizes.h4,fontWeight:u.rS.fontWeights.h4,letterSpacing:u.rS.letterSpacings.h4,textDecoration:"underline",textAlign:"center",width:"75%",whiteSpace:"pre-line"},e9=e=>{let{children:t,frontMatter:r,...o}=e;return(0,l.jsxs)(g.Z,{style:e3,...o,children:[(0,l.jsx)(e0,{children:(0,l.jsx)(e$.Z,{text:r.title,blinkColor:u.rS.colors.secondary.value})}),(0,l.jsx)(e7,{description:r.description}),(0,l.jsx)(e2,{frontMatter:r})]})},e3={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"0.5em",marginTop:"1.5em",marginBottom:"2.5em",fontFamily:u.rS.fonts.global},te=e=>{let{children:t,direction:r,postTitle:o,postLink:n,...i}=e;return(0,l.jsx)(g.Z,{as:o?R():void 0,style:ts,href:n,children:(0,l.jsxs)(g.Z,{style:tt,css:"next"===r?o?tn:tl:o?tr:to,as:J,...i,children:[(0,l.jsx)(g.Z,{style:ti,children:"next"===r?o?"->":"x":o?"<-":"x"}),(0,l.jsx)(g.Z,{style:ta,children:o||B.Zg.pq})]})})},tt={paddingTop:"1.5em",paddingBottom:"1.5em",borderRadius:16,borderWidth:4,fontSize:u.rS.fontSizes.h5,fontWeight:u.rS.fontWeights.h5,letterSpacing:u.rS.letterSpacings.h5,"@small":{fontSize:u.rS.fontSizes.h6,fontWeight:u.rS.fontWeights.h6,letterSpacing:u.rS.letterSpacings.h6},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},tr={borderColor:u.rS.colors.prev,boxShadow:u.rS.shadows.prevBtn,"&:hover":{backgroundColor:u.rS.colors.prev,fontWeight:u.rS.fontWeights.bold},"&:active":{boxShadow:u.rS.shadows.prevBtnClick}},to={color:u.rS.colors.textLesser,fontWeight:u.rS.fontWeights.bold,borderColor:u.rS.colors.prevInactive,backgroundColor:u.rS.colors.prevInactive,boxShadow:u.rS.shadows.prevBtn,"&:hover":{backgroundColor:u.rS.colors.prevInactive},"&:active":{boxShadow:u.rS.shadows.prevBtnClick}},tn={borderColor:u.rS.colors.next,boxShadow:u.rS.shadows.nextBtn,"&:hover":{backgroundColor:u.rS.colors.next,fontWeight:u.rS.fontWeights.bold},"&:active":{boxShadow:u.rS.shadows.nextBtnClick}},tl={color:u.rS.colors.textLesser,fontWeight:u.rS.fontWeights.bold,borderColor:u.rS.colors.nextInactive,backgroundColor:u.rS.colors.nextInactive,boxShadow:u.rS.shadows.nextBtn,"&:hover":{backgroundColor:u.rS.colors.nextInactive},"&:active":{boxShadow:u.rS.shadows.nextBtnClick}},ti={fontWeight:u.rS.fontWeights.bold},ts={"&:link":{color:u.rS.colors.textGeneral},"&:visited":{color:u.rS.colors.textGeneral}},ta={paddingLeft:32,paddingRight:32};var tc=r(1255);let td=e=>{let{children:t,prevPost:r,nextPost:o,...n}=e;return(0,l.jsxs)(g.Z,{style:th,...n,children:[(0,l.jsxs)(g.Z,{style:tg,children:[(0,l.jsx)(g.Z,{style:tm,elementName:B.rZ.tK}),(0,l.jsx)(g.Z,{style:tS,children:B.Zg.UY}),(0,l.jsx)(g.Z,{style:tm,elementName:B.rZ.tK})]}),(0,l.jsxs)(g.Z,{style:tp,children:[(0,l.jsx)(te,{direction:"prev",postTitle:null==r?void 0:r.title,postLink:"/".concat(tc.X.yC,"/").concat(null==r?void 0:r.slug)}),(0,l.jsx)(te,{direction:"next",postTitle:null==o?void 0:o.title,postLink:"/".concat(tc.X.yC,"/").concat(null==o?void 0:o.slug)})]})]})},th={width:"100%",fontFamily:u.rS.fonts.global,color:u.rS.colors.textGeneral},tg={display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",gap:"1.5em",fontSize:u.rS.fontSizes.h4,fontWeight:u.rS.fontWeights.h4,letterSpacing:u.rS.letterSpacings.h4},tm={height:0,border:0,borderBottom:"0.25em",borderStyle:"solid",borderColor:u.rS.colors.divider25},tS={"&:before":{content:"< ",color:u.rS.colors.textLesser},"&:after":{content:" />",color:u.rS.colors.textLesser}},tp={paddingLeft:"2em",paddingRight:"2em",paddingTop:"1em",paddingBottom:"1em",display:"flex",flexDirection:"row",alignItems:"center",gap:"2.5em","& > *":{width:"100%"},"@medium":{flexDirection:"column",gap:16,"& > *":{width:"min(100%, 328px)"}}},tu=e=>{let{children:t,css:r,...o}=e,{headingInfos:n}=S(),[i,s]=(0,a.useReducer)((e,t)=>{for(let e=0;e<t.length;++e)if(e<t.length-1){if(-1==t[e]&&1==t[e+1]){t[e]=0;break}}else if(-1==t[e]){t[e]=0;break}let r=t.findIndex(e=>0===e);if(-1!==r){let e=n[r].level,o=r-1;for(;o>=0&&e>=1;)for(;o>=0;){if(n[o].level<e){t[o]=0,e=n[o].level;break}o--}}return JSON.stringify(e)===JSON.stringify(t)?e:t},[]),c=()=>{let e=[];for(let r=0;r<n.length;++r){var t;let o=null===(t=n[r].headingRef.current)||void 0===t?void 0:t.getBoundingClientRect(),l=2;o&&(l=o.top<-1?-1:o.bottom>(window.innerHeight||document.documentElement.clientHeight)-72?1:0),e.push(l)}s(e)};(0,a.useEffect)(()=>(0===i.length&&0!==n.length&&c(),window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)));let d=(0,a.useRef)(null),h=(0,a.useMemo)(()=>i&&d.current?[d.current.scrollLeft,d.current.scrollTop]:[0,0],[i]);return(0,a.useLayoutEffect)(()=>{var e;null===(e=d.current)||void 0===e||e.scrollTo(h[0],h[1])},[i,h]),(0,l.jsxs)(g.Z,{ref:d,style:tf,css:r,...o,children:[(0,l.jsx)(g.Z,{style:tx,children:B.Zg.PC}),n.map((e,t)=>(0,l.jsxs)(g.Z,{style:tb,css:{marginLeft:"calc(1.5em * ".concat(e.level-1,")"),marginTop:1===e.level&&0!==t?"0.5em":0,fontSize:1===e.level?u.rS.fontSizes.h5:u.rS.fontSizes.h6,fontWeight:0==i[t]?u.rS.fontWeights.bold:u.rS.fontWeights.normal,color:0==i[t]?u.rS.colors.textActive:u.rS.colors.textLess},children:[(0,l.jsx)(g.Z,{css:{position:"absolute",height:"100%",borderStyle:"solid",borderColor:u.rS.colors.textLess,borderWidth:"0px 0px 0px ".concat(0==i[t]?"0.25em":0)}}),(0,l.jsx)(g.Z,{onClick:()=>{var t;let r=null===(t=e.headingRef.current)||void 0===t?void 0:t.getBoundingClientRect();r&&window.scrollTo({top:window.scrollY+r.y,behavior:"smooth"})},children:(0,l.jsx)(g.Z,{style:ty,children:e.headingContent})})]},t))]})},tf={fontFamily:u.rS.fonts.global,letterSpacing:u.rS.letterSpacings.h4,wordBreak:"break-word",borderWidth:"0.25em",borderColor:u.rS.colors.borderGeneral,borderStyle:"solid",scrollBehavior:"auto",overflow:"auto",userSelect:"none",display:"flex",flexDirection:"column",paddingLeft:"2em",paddingRight:"2em","&>:nth-child(2)":{marginTop:"0.75em"},"&>:last-child":{marginBottom:"1em"},"&::-webkit-scrollbar":{width:"8px"},"&::-webkit-scrollbar-thumb:vertical":{backgroundImage:"linear-gradient(".concat(u.rS.colors.scrollbarThumb,", ").concat(u.rS.colors.scrollbarThumb,")"),backgroundSize:"4px 100%",backgroundPositionX:"2px",backgroundRepeat:"no-repeat","&:hover":{backgroundImage:"none"}},"&::-webkit-scrollbar-track:vertical:hover":{backgroundImage:"none"}},tx={color:u.rS.colors.tertiary,fontSize:u.rS.fontSizes.h6,fontWeight:u.rS.fontWeights.bold,textAlign:"center",border:0,margin:0,borderBottom:"0.125em",paddingBottom:"0.25em",paddingTop:"0.5em",borderStyle:"dashed",borderColor:u.rS.colors.divider25,"&:before":{content:"'< '",color:u.rS.colors.divider25},"&:after":{content:"' />'",color:u.rS.colors.divider25}},tb={position:"relative",display:"flex"},ty={padding:0,paddingLeft:"0.75em",paddingRight:"0.75em","&:visisted":{color:u.rS.colors.textLess},"&:hover":{color:u.rS.colors.textActive,cursor:"pointer"},"&:active":{transform:"translateY(0.25em)",color:u.rS.colors.textActive}},tv=e=>{let{children:t,showTOCMobile:r,...o}=e;return(0,l.jsx)(g.Z,{as:J,style:tw,css:r?{zIndex:u.rS.zIndices.tocBtnClick}:{zIndex:u.rS.zIndices.tocBtnNormal},...o,children:r?(0,l.jsx)(g.Z,{style:tk,as:X.b0}):(0,l.jsx)(g.Z,{style:tj,as:X.X4})})},tw={position:"fixed",bottom:"4vh",right:"4vw",borderWidth:4,width:"2.25em",height:"2.25em",cursor:"pointer",justifyContent:"center",alignItems:"center",userSelect:"none",backgroundColor:u.rS.colors.pageBackground,borderColor:u.rS.colors.secondary,boxShadow:u.rS.shadows.tocMobileBtnNormal,"&:active":{backgroundColor:u.rS.colors.secondary,boxShadow:u.rS.shadows.tocMobileBtnClick},display:"none","@larger":{display:"flex"}},tj={fill:u.rS.colors.iconGeneral,width:"1em",height:"1em"},tk={fill:u.rS.colors.error,width:"1.5em",height:"1.5em"},tZ=e=>{let{children:t,...r}=e,[o,n]=(0,a.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.Z,{style:tC,css:o?{height:"100%","@larger":{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backdropFilter:"blur(4px)",backgroundColor:u.rS.colors.tocBlur}}:{height:"100%"},children:(0,l.jsx)(tu,{css:{position:"sticky",top:96,width:"110%",maxHeight:"calc((100vh - 96px) * 0.9)",maxWidth:"min(calc(110% - 32px), 320px)",marginLeft:"min(20%, 96px)","@larger":{position:"fixed",display:o?"":"none",width:"50vw",maxWidth:"20em",top:"5vh",bottom:"10vh",maxHeight:"80vh",marginLeft:"1em",marginRight:"1em"}}})}),(0,l.jsx)(tv,{showTOCMobile:o,onClick:()=>{n(!o)}})]})},tC={zIndex:u.rS.zIndices.tocBackground,"@larger":{display:"flex",justifyContent:"center",alignItems:"center"}},tB=e=>{let{children:t,frontMatter:r,sourceContent:o,prevPost:n,nextPost:i,...s}=e;return(0,l.jsxs)(h,{children:[(0,l.jsx)(e9,{frontMatter:r}),(0,l.jsx)(g.Z,{style:tW,children:(0,l.jsxs)(g.Z,{style:tI,children:[(0,l.jsx)(g.Z,{style:tT,children:(0,l.jsx)(eq,{sourceContent:o})}),(0,l.jsx)(g.Z,{style:tz,children:(0,l.jsx)(tZ,{})}),(0,l.jsx)(g.Z,{style:tL,children:(0,l.jsx)(td,{nextPost:i,prevPost:n})})]})})]})},tW={display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.5em"},tI={display:"grid",gridTemplateAreas:"'content-inner content-toc' 'content-nav content-toc'",gridTemplateColumns:"768px 280px","@larger":{gridTemplateAreas:"'content-inner' 'content-nav'",gridTemplateColumns:"768px"},"@medium":{gridTemplateColumns:"calc(100vw - 32px)"},color:u.rS.colors.textGeneral,fontFamily:u.rS.fonts.content,fontSize:u.rS.fontSizes.h5,fontWeight:u.rS.fontWeights.h5,lineHeight:u.rS.lineHeights.h5,letterSpacing:u.rS.letterSpacings.h5},tT={gridArea:"content-inner"},tz={gridArea:"content-toc"},tL={gridArea:"content-nav",display:"flex",justifyContent:"center",alignItems:"center",paddingTop:24,paddingBottom:24};r(8594);let tR=e=>{let{frontMatter:t,sourceContent:r,prevPost:o,nextPost:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.PB,{title:t.title,description:t.description||tc.X.XN,canonical:t.permalink,openGraph:{title:t.title,url:t.permalink,type:"article",article:{authors:[tc.X.x1],tags:t.tags,publishedTime:t.date,modifiedTime:t.date},images:[{url:"".concat(tc.X.Ql).concat(t.coverImage||tc.X.C7),alt:t.title}]},twitter:{cardType:"summary_large_image"}}),(0,l.jsx)(i.dX,{url:t.permalink,title:t.title,description:t.description||tc.X.XN,datePublished:t.date,dateModified:t.date,images:["".concat(tc.X.Ql).concat(t.coverImage||tc.X.C7)],...s.UE}),(0,l.jsx)(tB,{frontMatter:t,sourceContent:r,prevPost:o,nextPost:n})]})};var tN=!0,tE=tR}},function(e){e.O(0,[958,774,888,179],function(){return e(e.s=592)}),_N_E=e.O()}]);