(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{592:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(641)}])},6845:function(e,t,r){"use strict";r.d(t,{Z:function(){return C}});var o=r(5893),n=r(7294),l=r(2051);let i=()=>{let e=(0,n.useContext)(l.V);if(!e)throw Error("useLayout must be used inside of a LayoutProvider.");return e};var s=r(7484),a=r.n(s),c=r(178),d=r.n(c),h=r(9387),g=r.n(h),m=r(4110),S=r.n(m),f=r(6176),p=r.n(f),u=r(8734),x=r.n(u);r(5054),r(7553);var y=r(1255),b=r(3015);let v=(e,t)=>(a().extend(d()),a().extend(g()),a().extend(S()),a().extend(p()),a().extend(x()),a()(t).tz(y.X.Xu).locale(e).clone()),j=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b.NE,r=arguments.length>2?arguments[2]:void 0;return v(t,e).format(r)},w=e=>{let{children:t,dateStr:r,format:n="D MMMM, YYYY",...l}=e,{currentLocale:s}=i();return(0,o.jsx)(o.Fragment,{children:j(r,s,n)})};var C=w},1255:function(e,t,r){"use strict";r.d(t,{X:function(){return o}});var o={};r.r(o),r.d(o,{XN:function(){return c},C7:function(){return d},x1:function(){return a},$A:function(){return h},yC:function(){return i},Xu:function(){return s}});var n=r(5260),l=r(2654);let i="posts",s="Antarctica/Davis",a="Mistsu",c=n.Bq,d=l.J6,h=5;r(8964)},641:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return tL},default:function(){return tT}});var o,n,l=r(5893),i=r(7294);let s=(0,i.createContext)({headingInfos:[],UpdateHeadingInfoReducer:e=>{}}),a=(e,t)=>{let r=e.findIndex(e=>e.headingID===t.headingID&&e.level===t.level);return -1===r?[...e,t]:e},c=e=>{let{children:t,...r}=e,[o,n]=(0,i.useReducer)(a,[]);return(0,l.jsx)(s.Provider,{value:{headingInfos:o,UpdateHeadingInfoReducer:n},children:t})};var d=r(1533),h=r(3305);let g=()=>{let e=(0,i.useContext)(s);if(!e)throw Error("useContent must be used inside of a ContentContext.Provider.");return e};var m=r(5626),S=r(5919);let f=e=>{let{children:t,level:r=1,id:o="",...n}=e,s=(0,i.useRef)(null),{UpdateHeadingInfoReducer:a}=g();return(0,m.Z)(()=>{a({headingContent:t,headingID:o,headingRef:s,level:r})},[]),(0,l.jsxs)(d.Z,{style:w,css:C[r],elementName:"h".concat(r),...n,children:[(0,l.jsx)(d.Z,{style:j,ref:s,id:o}),t]})},p=e=>(0,l.jsx)(f,{level:1,...e}),u=e=>(0,l.jsx)(f,{level:2,...e}),x=e=>(0,l.jsx)(f,{level:3,...e}),y=e=>(0,l.jsx)(f,{level:4,...e}),b=e=>(0,l.jsx)(f,{level:5,...e}),v=e=>(0,l.jsx)(f,{level:6,...e}),j={position:"absolute",top:-90},w={position:"relative",textTransform:"uppercase",wordBreak:"break-word"},C={1:{fontSize:S.rS.fontSizes.h1,fontWeight:S.rS.fontWeights.h1,letterSpacing:S.rS.letterSpacings.h1,lineHeight:S.rS.lineHeights.h1,marginTop:16,marginBottom:16},2:{fontSize:S.rS.fontSizes.h2,fontWeight:S.rS.fontWeights.h2,letterSpacing:S.rS.letterSpacings.h2,lineHeight:S.rS.lineHeights.h2,marginTop:16,marginBottom:16},3:{fontSize:S.rS.fontSizes.h3,fontWeight:S.rS.fontWeights.h3,letterSpacing:S.rS.letterSpacings.h3,lineHeight:S.rS.lineHeights.h3,marginTop:16,marginBottom:16},4:{fontSize:S.rS.fontSizes.h4,fontWeight:S.rS.fontWeights.h4,letterSpacing:S.rS.letterSpacings.h4,lineHeight:S.rS.lineHeights.h4,marginTop:16,marginBottom:16},5:{fontSize:S.rS.fontSizes.h5,fontWeight:S.rS.fontWeights.h5,letterSpacing:S.rS.letterSpacings.h5,lineHeight:S.rS.lineHeights.h5,marginTop:8,marginBottom:8},6:{fontSize:S.rS.fontSizes.h6,fontWeight:S.rS.fontWeights.h6,letterSpacing:S.rS.letterSpacings.h6,lineHeight:S.rS.lineHeights.h6,marginTop:8,marginBottom:8}};var k=r(43);let Z=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:B,elementName:k.P,...r,children:t})},B={marginTop:12,marginBottom:12,wordBreak:"break-word"},W=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:I,elementName:k.Cs,...r,children:(0,l.jsx)(d.Z,{style:L,children:t})})},I={marginTop:"0.75em",marginBottom:"0.75em",marginLeft:"0.5em",marginRight:"0.5em",paddingLeft:"2em",paddingRight:"2em",paddingTop:"0.5em",paddingBottom:"0.5em",borderLeft:"0.5em",borderRight:0,borderTop:0,borderBottom:0,borderStyle:"solid",backgroundColor:S.rS.colors.quoteBackground,borderColor:S.rS.colors.quoteLegend,borderRadius:"1.5em",boxShadow:S.rS.shadows.depthShadow},L={opacity:.75};var T=r(1664),z=r.n(T);let N=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{as:z(),style:R,...r,children:t})},R={color:S.rS.colors.tertiary,paddingBottom:4,movUnderline:"".concat(S.rS.colors.gTertiary," 2px 0px 0px"),"&:visited":{color:S.rS.colors.color23},"&:active":{color:S.rS.colors.secondary,movUnderlineColor:S.rS.colors.gSecondary}},E=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:H,elementName:k.cO,...r,children:t})},H={fontFamily:S.rS.fonts.code,color:S.rS.colors.primary,paddingLeft:8,paddingRight:8,backgroundColor:S.rS.colors.codeInnerBackground,borderRadius:8,textTransform:"none",wordBreak:"break-word"};(o=n||(n={}))[o.normal=0]="normal",o[o.wrapCode=1]="wrapCode",o[o.closeBox=2]="closeBox";let D=[n.normal,n.wrapCode,n.closeBox],A=(0,i.createContext)({showInner:!0,wrapCode:!1,codeBlockState:n.normal,ToggleContentFn:()=>{},ToggleWrapFn:()=>{},UpdateVisualStateFn:()=>{}});var F=r(9091);let G=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:M,...r,children:(0,l.jsx)(d.Z,{style:Y,as:F.ZN})})},M={width:"0.75em",height:"0.75em",borderRadius:"100%",cursor:"pointer",display:"flex",backgroundColor:S.rS.colors.green,"&:hover":{backgroundColor:S.rS.colors.brightGreen},"&:active":{backgroundColor:S.rS.colors.darkGreen}},Y={fill:S.rS.colors.black,width:"0.75em",height:"0.75em",opacity:"0%","&:hover":{opacity:"100%"}},_=e=>{let{children:t,showInner:r,...o}=e;return(0,l.jsx)(d.Z,{style:P,...o,children:(0,l.jsx)(d.Z,{style:X,as:r?F.g8:F.v4})})},P={width:"0.75em",height:"0.75em",borderRadius:"100%",cursor:"pointer",display:"flex",backgroundColor:S.rS.colors.red,"&:hover":{backgroundColor:S.rS.colors.brightRed},"&:active":{backgroundColor:S.rS.colors.darkRed}},X={fill:S.rS.colors.black,width:"0.75em",height:"0.75em",opacity:"0%","&:hover":{opacity:"100%"}},O=e=>{let{children:t,wrapCode:r,...o}=e;return(0,l.jsx)(d.Z,{style:U,...o,children:(0,l.jsx)(d.Z,{style:K,as:r?F.Wk:F.HA})})},U={width:"0.75em",height:"0.75em",borderRadius:"100%",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:S.rS.colors.yellow,"&:hover":{backgroundColor:S.rS.colors.brightYellow},"&:active":{backgroundColor:S.rS.colors.darkYellow}},K={fill:S.rS.colors.black,width:"0.625em",height:"0.625em",transform:"scaleY(-1)",opacity:"0%","&:hover":{opacity:"100%"}},q=e=>{let{children:t,style:r,...o}=e;return(0,l.jsx)(d.Z,{css:r,style:Q,...o,children:t})},Q={display:"flex",justifyContent:"center",userSelect:"none",borderWidth:"0.125em",borderRadius:"0.5em",borderStyle:"solid","@media (hover: hover)":{"&:hover":{backgroundColor:S.rS.colors.buttonHoverBackground,cursor:"pointer"}},"&:active":{transform:"translateY(4px)"}},V={[n.normal]:F.v4,[n.closeBox]:F.g8,[n.wrapCode]:F.HA},J={[n.normal]:{},[n.closeBox]:{},[n.wrapCode]:{transform:"scaleY(-1)"}},$=e=>{let{children:t,codeBlockState:r,...o}=e;return(0,l.jsx)(d.Z,{as:q,style:ee,...o,children:(0,l.jsx)(d.Z,{css:J[r],style:et,as:V[r]})})},ee={width:"1.75em",height:"1.5em",borderRadius:"1.5em !important",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",userSelect:"none",borderColor:S.rS.colors.tertiary,boxShadow:S.rS.shadows.codeBlockMobileBtnNormal,"&:active":{boxShadow:S.rS.shadows.codeBlockMobileBtnClick}},et={fill:S.rS.colors.iconGeneral,width:"1em",height:"1em"};var er=r(5260),eo=r(6189);let en=e=>{let{children:t,...r}=e,{ToggleContentFn:o,ToggleWrapFn:n,UpdateVisualStateFn:s,showInner:a,wrapCode:c,codeBlockState:h}=(0,i.useContext)(A);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.Z,{style:ei,...r,children:(0,l.jsx)($,{codeBlockState:h,onClick:s})}),(0,l.jsxs)(d.Z,{style:el,...r,children:[(0,l.jsx)(_,{title:er.VN,showInner:a,onClick:o}),(0,l.jsx)(O,{title:er.pV,wrapCode:c,onClick:n}),(0,l.jsx)(G,{title:er.QK})]})]})},el={display:"flex",flexDirection:"row",justifyContent:"left",alignItems:"center",transform:"translateY(2px)",gap:8,[".".concat(eo.Qf," &")]:{display:"none"},[".".concat(eo.UU," &")]:{display:"none"}},ei={display:"none",[".".concat(eo.Qf," &")]:{display:"block"},[".".concat(eo.UU," &")]:{display:"block"}};var es=r(792),ea=r.n(es),ec=r(640),ed=r.n(ec);let eh=e=>{let{content:t,refreshTime:r=2e3,style:o,...n}=e,[s,a]=(0,i.useState)(!1),c=e=>{e.currentTarget.blur();let r=ed()(ea()(t));a(r)};return(0,i.useEffect)(()=>{if(!s)return;let e=setTimeout(()=>{a(!1)},r);return()=>{clearTimeout(e)}},[r,s]),(0,l.jsx)(d.Z,{css:o,as:q,style:eg,onClick:c,...n,children:s?(0,l.jsx)(F.nQ,{style:eS}):(0,l.jsx)(F.Km,{viewBox:"0 0 7 8",style:em})})},eg={borderColor:S.rS.colors.next,boxShadow:S.rS.shadows.codeCopyBtnNormal,"&:active":{backgroundColor:S.rS.colors.next,boxShadow:S.rS.shadows.codeCopyBtnClick},width:"1.5em",height:"1.5em",display:"flex",justifyContent:"center",alignItems:"center"},em={fill:S.rS.colors.iconGeneral,width:"0.75em",height:"0.75em"},eS={fill:S.rS.colors.success,width:"0.75em",height:"0.75em"},ef=e=>{let{content:t,...r}=e;return(0,l.jsx)(d.Z,{title:er.uh,style:ep,...r,children:(0,l.jsx)(eh,{content:t})})},ep={display:"flex",flexDirection:"row",justifyContent:"right",alignItems:"center"},eu=e=>{let{languageName:t="",...r}=e;return(0,l.jsx)(d.Z,{style:ex,...r,children:t})},ex={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",userSelect:"none",color:S.rS.colors.textLess,fontSize:S.rS.fontSizes.h5,letterSpacing:S.rS.letterSpacings.h5,fontWeight:S.rS.fontWeights.bold,textTransform:"capitalize",transform:"translateY(2px)"},ey=e=>{let{content:t,className:r,...o}=e,n=null==r?void 0:r.split(" "),i=null==n?void 0:n.find(e=>/language-*/.test(e)),s=i?i.slice(9):"";return(0,l.jsxs)(d.Z,{style:eb,...o,children:[(0,l.jsx)(d.Z,{as:en,style:ev}),(0,l.jsx)(d.Z,{as:eu,style:ej,languageName:s}),(0,l.jsx)(d.Z,{as:ef,style:ew,content:t})]})},eb={display:"grid",gridTemplateAreas:"'codeblock-header-ifhone-btn codeblock-header-lang-area codeblock-header-action-btn'",gridTemplateColumns:"1fr 1fr 1fr",paddingLeft:16,paddingRight:16},ev={gridArea:"codeblock-header-ifhone-btn"},ej={gridArea:"codeblock-header-lang-area"},ew={gridArea:"codeblock-header-action-btn"},eC=e=>{let{children:t,wrapCode:r,...o}=e;return(0,l.jsx)(d.Z,{style:ek,css:r?{whiteSpace:"pre-wrap",lineBreak:"anywhere"}:{overflow:"auto"},...o,children:t})},ek={paddingBottom:8,scrollbarWidth:"thin",color:S.rS.colors.textGeneral,marginLeft:4,".token":{"&.keyword":{fontWeight:"bold"},"&.comment, &.prolog, &.cdata":{color:S.rS.colors.codeComment},"&.delimiter, &.boolean, &.keyword, &.selector, &.important, &.doctype, &.atrule, &.url":{color:S.rS.colors.codeKeyword},"&.tag, &.builtin, &.regex":{color:S.rS.colors.codeNamespace},"&.property, &.variable, &.attr-value, &.class-name, &.string, &.char":{color:S.rS.colors.codeVariable},"&.literal-property, &.attr-name":{color:S.rS.colors.codeAttribute},"&.function":{color:S.rS.colors.codeFunction},"&.tag .punctuation, &.attr-value .punctuation":{color:S.rS.colors.codePunctuation},"&.operator":{color:S.rS.colors.codeOperator},"&.boolean, &.number, &.constant":{color:S.rS.colors.codeLiteral},"&.inserted":{color:S.rS.colors.codeAddition},"&.deleted":{color:S.rS.colors.codeDeletion},"&.url":{textDecoration:"underline"},"&.bold, &.important":{fontWeight:"bold"},"&.italic":{fontStyle:"italic"}}},eZ=e=>{let{children:t,...r}=e,{showInner:o,wrapCode:n}=(0,i.useContext)(A);return(0,l.jsx)(d.Z,{children:(0,l.jsx)(d.Z,{style:eB,css:{display:o?"":"none"},...r,children:(0,l.jsx)(eC,{wrapCode:n,children:t})})})},eB={fontSize:S.rS.fontSizes.h5,letterSpacing:S.rS.letterSpacings.h5,lineHeight:S.rS.lineHeights.h5,"@small":{fontSize:S.rS.fontSizes.h6,letterSpacing:S.rS.letterSpacings.h6,lineHeight:S.rS.lineHeights.h6},display:"flex",flexDirection:"row",gap:8},eW=e=>{let{children:t,className:r,...o}=e,[s,a]=(0,i.useState)(!0),[c,h]=(0,i.useState)(!1),[g,m]=(0,i.useState)(n.normal),S=()=>{a(!s)},f=()=>{h(!c)},p=()=>{let e=(g+1)%D.length;switch(m(e),D[e]){case n.normal:a(!0),h(!1);break;case n.wrapCode:a(!0),h(!0);break;case n.closeBox:a(!1)}};return(0,l.jsx)(A.Provider,{value:{showInner:s,wrapCode:c,codeBlockState:D[g],ToggleContentFn:S,ToggleWrapFn:f,UpdateVisualStateFn:p},children:(0,l.jsx)(d.Z,{style:eI,elementName:k.cO,...o,children:(0,l.jsxs)(d.Z,{style:eL,children:[(0,l.jsx)(ey,{content:t,className:r}),(0,l.jsx)(eZ,{children:t})]})})})},eI={fontFamily:S.rS.fonts.code},eL={marginTop:"1em",marginBottom:"1em",marginLeft:"2em",marginRight:"2em",borderRadius:"1em","@large":{marginLeft:0,marginRight:0},display:"flex",flexDirection:"column",padding:"1em",gap:"1em",backgroundImage:"".concat(S.rS.colors.codeBlockBackground),boxShadow:S.rS.shadows.depthShadow},eT=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:ez,elementName:k.UL,...r,children:t})},ez={position:"relative",listStyle:"none",margin:0,marginLeft:48,marginRight:48,"@small":{marginLeft:16,marginRight:16},counterReset:"ListItemNo",["& ".concat(k.LI)]:{["".concat(k.LI,":before")]:{content:"◦"}},["& ".concat(k.LI,":before")]:{content:"•",color:S.rS.colors.primary,fontWeight:S.rS.fontWeights.bold}},eN=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:eR,elementName:k.OL,...r,children:t})},eR={position:"relative",listStyle:"none",margin:0,marginLeft:48,marginRight:48,"@small":{marginLeft:16,marginRight:16},counterReset:"ListItemNo",["& ".concat(k.LI)]:{counterIncrement:"ListItemNo"},["& ".concat(k.LI,":before")]:{content:'counters(ListItemNo, ".")"."',color:S.rS.colors.primary,fontWeight:S.rS.fontWeights.bold}},eE=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:eH,elementName:k.LI,...r,children:(0,l.jsx)(d.Z,{elementName:k.tK,style:eD,children:t})})},eH={display:"flex",flexDirection:"row",gap:8,marginBottom:8,marginTop:8},eD={maxWidth:"100%","&> :first-child":{marginTop:0}};var eA=r(2654);let eF=e=>{let{children:t,alt:r,width:o,height:n,...i}=e;return(0,l.jsxs)(d.Z,{style:eG,children:[(0,l.jsx)(d.Z,{elementName:k.MY,style:eM,alt:r,css:{width:o,height:n},onError:e=>{e.target.src=eA.bR},...i,children:t}),(()=>{if(r)return(0,l.jsx)(d.Z,{style:eY,children:r})})()]})},eG={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:0,marginTop:32,marginBottom:32},eM={maxWidth:"90%","@medium":{maxWidth:"100%"},borderRadius:16},eY={wordBreak:"break-word",textAlign:"center",fontSize:S.rS.fontSizes.h5,fontWeight:S.rS.fontWeights.bold,maxWidth:"90%","@medium":{fontSize:S.rS.fontSizes.h6,maxWidth:"100%"},borderWidth:2,borderStyle:"dashed",borderRadius:8,paddingTop:4,paddingBottom:4,paddingLeft:8,paddingRight:8,borderColor:"#00000000","&:hover":{borderColor:S.rS.colors.borderGeneral}},e_=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:eP,elementName:k.tK,...r,children:t})},eP={overflowX:"auto",textTransform:"none"},eX=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:eO,elementName:k.bg,...r,children:t})},eO={overflowX:"auto",border:0,borderTop:2,borderBottom:2,borderStyle:"dashed",borderColor:S.rS.colors.divider50},eU=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:eK,children:(0,l.jsx)(d.Z,{style:eq,elementName:k.Fe,...r,children:t})})},eK={overflow:"auto",display:"flex",alignItems:"center","&::before, &::after":{content:" ",margin:"auto"},margin:"auto",marginTop:"2em",marginBottom:"2em"},eq={marginLeft:"1em",marginRight:"1em",borderCollapse:"collapse",["".concat(k.TH,", ").concat(k.TD)]:{border:"4px solid",borderColor:S.rS.colors.borderGeneral,padding:8}};var eQ=(e=>{let t={};for(let r of Object.keys(e))t[r]=t=>{let{children:o,className:n,...i}=t,s=n?n.split(" "):[];for(let t of e[r]){let e=!0;if(t.classNames){for(let r of t.classNames)if(!s.includes(r)){e=!1;break}}if(e)return(0,l.jsx)(d.Z,{as:t.replacedElement,className:n,...i,children:o})}return(0,l.jsx)(d.Z,{elementName:r,className:n,...i,children:o})};return t})({h1:[{replacedElement:p}],h2:[{replacedElement:u}],h3:[{replacedElement:x}],h4:[{replacedElement:y}],h5:[{replacedElement:b}],h6:[{replacedElement:v}],p:[{replacedElement:Z}],blockquote:[{replacedElement:W}],a:[{replacedElement:N}],code:[{replacedElement:eW,classNames:["code-highlight"]},{replacedElement:E}],ul:[{replacedElement:eT}],ol:[{replacedElement:eN}],img:[{replacedElement:eF}],span:[{replacedElement:e_,classNames:["math-inline","math"]}],div:[{replacedElement:eX,classNames:["math-display","math"]}],li:[{replacedElement:eE}],table:[{replacedElement:eU}],BlogImg:[{replacedElement:eF}]});let eV=e=>{let{sourceContent:t}=e;return(0,l.jsx)(h.R,{...t,components:eQ})};var eJ=(0,i.memo)(eV);let e$=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:e0,...r,children:t})},e0={color:S.rS.colors.textGeneral,fontSize:S.rS.fontSizes.h0,fontWeight:S.rS.fontWeights.h0,letterSpacing:S.rS.letterSpacings.h0,"@medium":{fontSize:S.rS.fontSizes.h2,fontWeight:S.rS.fontWeights.bold,letterSpacing:S.rS.letterSpacings.h2},textDecoration:"underline",textAlign:"center",width:"75%"};var e1=r(6845);let e5=e=>{let{children:t,frontMatter:r,...o}=e;return(0,l.jsxs)(d.Z,{style:e2,children:[(0,l.jsxs)(d.Z,{style:e6,children:[(0,l.jsx)(F.Qu,{style:{fill:S.rS.colors.tertiary,width:"1em",height:"1em"}}),(0,l.jsx)(e1.Z,{dateStr:r.date})]}),(0,l.jsxs)(d.Z,{style:e6,children:[(0,l.jsx)(F.Zi,{style:{fill:S.rS.colors.tertiary,width:"1em",height:"1em"}}),"".concat(r.noWords," ").concat(er.Kw)]}),(0,l.jsxs)(d.Z,{style:e6,children:[(0,l.jsx)(F.T3,{style:{fill:S.rS.colors.tertiary,width:"1em",height:"1em"}}),"".concat(r.minsRead," ").concat(er.G8)]})]})},e2={display:"flex",justifyContent:"center",alignItems:"center",gap:"1em",flexDirection:"row","@small":{gap:"0.25em",flexDirection:"column"},color:S.rS.colors.textLesser,fontSize:S.rS.fontSizes.h5,letterSpacing:S.rS.letterSpacings.h5,"@medium":{fontSize:S.rS.fontSizes.h6,letterSpacing:S.rS.letterSpacings.h6}},e6={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"0.5em"},e4=e=>{let{children:t,frontMatter:r,...o}=e;return(0,l.jsxs)(d.Z,{style:e8,...o,children:[(0,l.jsx)(e$,{children:r.title}),(0,l.jsx)(e5,{frontMatter:r})]})},e8={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"0.5em",marginTop:"1.5em",marginBottom:"2.5em",fontFamily:S.rS.fonts.global},e7=e=>{let{children:t,direction:r,postTitle:o,postLink:n,...i}=e;return(0,l.jsx)(d.Z,{as:o?z():void 0,style:tn,href:n,children:(0,l.jsxs)(d.Z,{style:e3,css:"next"===r?o?tt:tr:o?e9:te,as:q,...i,children:[(0,l.jsx)(d.Z,{style:to,children:"next"===r?o?"->":"x":o?"<-":"x"}),(0,l.jsx)(d.Z,{style:tl,children:o||er.pq})]})})},e3={paddingTop:"1.5em",paddingBottom:"1.5em",borderRadius:16,borderWidth:4,fontSize:S.rS.fontSizes.h5,fontWeight:S.rS.fontWeights.h5,letterSpacing:S.rS.letterSpacings.h5,"@small":{fontSize:S.rS.fontSizes.h6,fontWeight:S.rS.fontWeights.h6,letterSpacing:S.rS.letterSpacings.h6},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},e9={borderColor:S.rS.colors.prev,boxShadow:S.rS.shadows.prevBtn,"&:hover":{backgroundColor:S.rS.colors.prev,fontWeight:S.rS.fontWeights.bold},"&:active":{boxShadow:S.rS.shadows.prevBtnClick}},te={color:S.rS.colors.textLesser,fontWeight:S.rS.fontWeights.bold,borderColor:S.rS.colors.prevInactive,backgroundColor:S.rS.colors.prevInactive,boxShadow:S.rS.shadows.prevBtn,"&:hover":{backgroundColor:S.rS.colors.prevInactive},"&:active":{boxShadow:S.rS.shadows.prevBtnClick}},tt={borderColor:S.rS.colors.next,boxShadow:S.rS.shadows.nextBtn,"&:hover":{backgroundColor:S.rS.colors.next,fontWeight:S.rS.fontWeights.bold},"&:active":{boxShadow:S.rS.shadows.nextBtnClick}},tr={color:S.rS.colors.textLesser,fontWeight:S.rS.fontWeights.bold,borderColor:S.rS.colors.nextInactive,backgroundColor:S.rS.colors.nextInactive,boxShadow:S.rS.shadows.nextBtn,"&:hover":{backgroundColor:S.rS.colors.nextInactive},"&:active":{boxShadow:S.rS.shadows.nextBtnClick}},to={fontWeight:S.rS.fontWeights.bold},tn={"&:link":{color:S.rS.colors.textGeneral},"&:visited":{color:S.rS.colors.textGeneral}},tl={paddingLeft:32,paddingRight:32};var ti=r(1255);let ts=e=>{let{children:t,prevPost:r,nextPost:o,...n}=e;return(0,l.jsxs)(d.Z,{style:ta,...n,children:[(0,l.jsxs)(d.Z,{style:tc,children:[(0,l.jsx)(d.Z,{style:td,elementName:k.tK}),(0,l.jsx)(d.Z,{style:th,children:er.UY}),(0,l.jsx)(d.Z,{style:td,elementName:k.tK})]}),(0,l.jsxs)(d.Z,{style:tg,children:[(0,l.jsx)(e7,{direction:"prev",postTitle:null==r?void 0:r.title,postLink:"/".concat(ti.X.yC,"/").concat(null==r?void 0:r.slug)}),(0,l.jsx)(e7,{direction:"next",postTitle:null==o?void 0:o.title,postLink:"/".concat(ti.X.yC,"/").concat(null==o?void 0:o.slug)})]})]})},ta={width:"100%",fontFamily:S.rS.fonts.global,color:S.rS.colors.textGeneral},tc={display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",gap:"1.5em",fontSize:S.rS.fontSizes.h4,fontWeight:S.rS.fontWeights.h4,letterSpacing:S.rS.letterSpacings.h4},td={height:0,border:0,borderBottom:"0.25em",borderStyle:"solid",borderColor:S.rS.colors.divider25},th={"&:before":{content:"< ",color:S.rS.colors.textLesser},"&:after":{content:" />",color:S.rS.colors.textLesser}},tg={paddingLeft:"2em",paddingRight:"2em",paddingTop:"1em",paddingBottom:"1em",display:"flex",flexDirection:"row",alignItems:"center",gap:"2.5em","& > *":{width:"100%"},"@medium":{flexDirection:"column",gap:16,"& > *":{width:"min(100%, 328px)"}}},tm=e=>{let{children:t,css:r,...o}=e,{headingInfos:n}=g(),[s,a]=(0,i.useReducer)((e,t)=>{for(let e=0;e<t.length;++e)if(e<t.length-1){if(-1==t[e]&&1==t[e+1]){t[e]=0;break}}else if(-1==t[e]){t[e]=0;break}let r=t.findIndex(e=>0===e);if(-1!==r){let e=n[r].level,o=r-1;for(;o>=0&&e>=1;)for(;o>=0;){if(n[o].level<e){t[o]=0,e=n[o].level;break}o--}}return JSON.stringify(e)===JSON.stringify(t)?e:t},[]),c=()=>{let e=[];for(let r=0;r<n.length;++r){var t;let o=null===(t=n[r].headingRef.current)||void 0===t?void 0:t.getBoundingClientRect(),l=2;o&&(l=o.top<-1?-1:o.bottom>(window.innerHeight||document.documentElement.clientHeight)-72?1:0),e.push(l)}a(e)};(0,i.useEffect)(()=>(0===s.length&&0!==n.length&&c(),window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)));let h=(0,i.useRef)(null),m=(0,i.useMemo)(()=>s&&h.current?[h.current.scrollLeft,h.current.scrollTop]:[0,0],[s]);return(0,i.useLayoutEffect)(()=>{var e;null===(e=h.current)||void 0===e||e.scrollTo(m[0],m[1])},[s,m]),(0,l.jsxs)(d.Z,{ref:h,style:tS,css:r,...o,children:[(0,l.jsx)(d.Z,{style:tf,children:er.PC}),n.map((e,t)=>(0,l.jsx)(d.Z,{style:tp,css:{marginTop:1===e.level&&0!==t?4:0,marginLeft:"calc(24px * ".concat(e.level-1,")"),borderWidth:"0px 0px 0px ".concat(0==s[t]?4:0,"px"),fontWeight:0==s[t]?S.rS.fontWeights.bold:S.rS.fontWeights.normal,color:0==s[t]?S.rS.colors.textActive:S.rS.colors.textLess},children:(0,l.jsx)(d.Z,{onClick:()=>{var t;let r=null===(t=e.headingRef.current)||void 0===t?void 0:t.getBoundingClientRect();r&&window.scrollTo({top:window.scrollY+r.y,behavior:"smooth"})},children:(0,l.jsx)(d.Z,{style:tu,children:e.headingContent})})},t))]})},tS={fontFamily:S.rS.fonts.global,fontWeight:S.rS.fontWeights.h6,fontSize:S.rS.fontSizes.h6,letterSpacing:S.rS.letterSpacings.h4,color:S.rS.colors.textLess,wordBreak:"break-word",borderWidth:"0.25em",borderColor:S.rS.colors.borderGeneral,borderStyle:"solid",scrollBehavior:"auto",overflow:"auto",userSelect:"none",display:"flex",flexDirection:"column",paddingLeft:"2em",paddingRight:"2em","&>:last-child":{marginBottom:"1em"}},tf={color:S.rS.colors.tertiary,fontSize:S.rS.fontSizes.h5,fontWeight:S.rS.fontWeights.bold,textAlign:"center",border:0,margin:0,borderBottom:"0.125em",marginBottom:"1em",marginTop:"1em",paddingBottom:"0.5em",borderStyle:"dashed",borderColor:S.rS.colors.divider25,"&:before":{content:"'< '",color:S.rS.colors.divider25},"&:after":{content:"' />'",color:S.rS.colors.divider25}},tp={display:"flex",borderStyle:"solid",borderColor:S.rS.colors.textLess},tu={padding:0,paddingLeft:"0.75em",paddingRight:"0.75em","&:visisted":{color:S.rS.colors.textLess},"&:hover":{color:S.rS.colors.textActive,cursor:"pointer"},"&:active":{transform:"translateY(0.25em)",color:S.rS.colors.textActive}},tx=e=>{let{children:t,showTOCMobile:r,...o}=e;return(0,l.jsx)(d.Z,{as:q,style:ty,css:r?{zIndex:S.rS.zIndices.tocBtnClick}:{zIndex:S.rS.zIndices.tocBtnNormal},...o,children:(0,l.jsx)(d.Z,{style:tb,as:F.X4})})},ty={position:"fixed",bottom:"4vh",right:"4vw",width:"2.25em",height:"2.25em",cursor:"pointer",justifyContent:"center",alignItems:"center",userSelect:"none",backgroundColor:S.rS.colors.pageBackground,borderColor:S.rS.colors.secondary,boxShadow:S.rS.shadows.tocMobileBtnNormal,"&:active":{backgroundColor:S.rS.colors.secondary,boxShadow:S.rS.shadows.tocMobileBtnClick},display:"none","@larger":{display:"flex"}},tb={fill:S.rS.colors.iconGeneral,width:"1em",height:"1em"},tv=e=>{let{children:t,...r}=e,[o,n]=(0,i.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.Z,{style:tj,css:o?{height:"100%","@larger":{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backdropFilter:"blur(4px)",backgroundColor:S.rS.colors.tocBlur}}:{height:"100%"},children:(0,l.jsx)(tm,{css:{position:"sticky",top:96,width:"110%",maxHeight:"calc((100vh - 96px) * 0.9)",maxWidth:"min(calc(110% - 32px), 320px)",marginLeft:"min(20%, 96px)","@larger":{position:"fixed",display:o?"":"none",width:"50vw",maxWidth:320,top:"10vh",bottom:"10vh",maxHeight:"80vh",marginLeft:16,marginRight:16}}})}),(0,l.jsx)(tx,{showTOCMobile:o,onClick:()=>{n(!o)}})]})},tj={zIndex:S.rS.zIndices.tocBackground,"@larger":{display:"flex",justifyContent:"center",alignItems:"center"}},tw=e=>{let{children:t,frontMatter:r,sourceContent:o,prevPost:n,nextPost:i,...s}=e;return(0,l.jsxs)(c,{children:[(0,l.jsx)(e4,{frontMatter:r}),(0,l.jsx)(d.Z,{style:tC,children:(0,l.jsxs)(d.Z,{style:tk,children:[(0,l.jsx)(d.Z,{style:tZ,children:(0,l.jsx)(eJ,{sourceContent:o})}),(0,l.jsx)(d.Z,{style:tB,children:(0,l.jsx)(tv,{})}),(0,l.jsx)(d.Z,{style:tW,children:(0,l.jsx)(ts,{nextPost:i,prevPost:n})})]})})]})},tC={display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.5em"},tk={display:"grid",gridTemplateAreas:"'content-inner content-toc' 'content-nav content-toc'",gridTemplateColumns:"768px 280px","@larger":{gridTemplateAreas:"'content-inner' 'content-nav'",gridTemplateColumns:"768px"},"@medium":{gridTemplateColumns:"calc(100vw - 32px)"},color:S.rS.colors.textGeneral,fontFamily:S.rS.fonts.content,fontSize:S.rS.fontSizes.h5,fontWeight:S.rS.fontWeights.h5,lineHeight:S.rS.lineHeights.h5,letterSpacing:S.rS.letterSpacings.h5},tZ={gridArea:"content-inner"},tB={gridArea:"content-toc"},tW={gridArea:"content-nav",display:"flex",justifyContent:"center",alignItems:"center",paddingTop:24,paddingBottom:24};r(8594);let tI=e=>{let{frontMatter:t,sourceContent:r,prevPost:o,nextPost:n}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(tw,{frontMatter:t,sourceContent:r,prevPost:o,nextPost:n})})};var tL=!0,tT=tI}},function(e){e.O(0,[958,774,888,179],function(){return e(e.s=592)}),_N_E=e.O()}]);