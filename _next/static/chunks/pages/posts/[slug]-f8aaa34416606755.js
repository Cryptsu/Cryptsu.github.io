(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{592:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(869)}])},6845:function(e,t,r){"use strict";r.d(t,{Z:function(){return W}});var o=r(5893),n=r(7294),l=r(2051);let i=()=>{let e=(0,n.useContext)(l.V);if(!e)throw Error("useLayout must be used inside of a LayoutProvider.");return e};var s=r(1533),a=r(7484),c=r.n(a),d=r(178),h=r.n(d),g=r(9387),u=r.n(g),m=r(4110),f=r.n(m),p=r(6176),S=r.n(p),x=r(8734),y=r.n(x);r(5054),r(7553);var b=r(1255),j=r(3015);let v=(e,t)=>(c().extend(h()),c().extend(u()),c().extend(f()),c().extend(S()),c().extend(y()),c()(t).tz(b.X.Xu).locale(e).clone()),w=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.NE,r=arguments.length>2?arguments[2]:void 0;return v(t,e).format(r)};var C=r(43);let Z=e=>{let{children:t,dateStr:r,format:n="D MMMM, YYYY",...l}=e,{currentLocale:a}=i();return(0,o.jsx)(s.Z,{style:k,elementName:C.nf,...l,children:w(r,a,n)})},k={};var W=Z},1255:function(e,t,r){"use strict";r.d(t,{X:function(){return o}});var o={};r.r(o),r.d(o,{XN:function(){return c},C7:function(){return d},x1:function(){return a},$A:function(){return h},yC:function(){return i},Xu:function(){return s}});var n=r(5260),l=r(2654);let i="posts",s="Antarctica/Davis",a="Mistsu",c=n.Bq,d=l.J6,h=8;r(8964)},869:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return e9},default:function(){return e7}});var o=r(5893),n=r(7294);let l=(0,n.createContext)({headingInfos:[],UpdateHeadingInfoReducer:e=>{}}),i=(e,t)=>{let r=e.findIndex(e=>e.headingID===t.headingID&&e.level===t.level);return -1===r?[...e,t]:e},s=e=>{let{children:t,...r}=e,[s,a]=(0,n.useReducer)(i,[]);return(0,o.jsx)(l.Provider,{value:{headingInfos:s,UpdateHeadingInfoReducer:a},children:t})};var a=r(1533);let c=()=>{let e=(0,n.useContext)(l);if(!e)throw Error("useContent must be used inside of a ContentContext.Provider.");return e};var d=r(5919),h=r(5260);let g=e=>{let{children:t,...r}=e,[l,i]=(0,n.useReducer)((e,t)=>{for(let e=0;e<t.length;++e)if(e<t.length-1){if(-1==t[e]&&1==t[e+1]){t[e]=0;break}}else if(-1==t[e]){t[e]=0;break}return t},[]),{headingInfos:s}=c(),g=()=>{let e=[];for(let r=0;r<s.length;++r){var t;let o=null===(t=s[r].headingRef.current)||void 0===t?void 0:t.getBoundingClientRect(),n=2;o&&(n=o.top<-1?-1:o.bottom>(window.innerHeight||document.documentElement.clientHeight)-68?1:0),e.push(n)}i(e)};(0,n.useEffect)(()=>(window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)));let S=(0,n.useRef)(null),x=(0,n.useMemo)(()=>l&&S.current?[S.current.scrollLeft,S.current.scrollTop]:[0,0],[l]);return(0,n.useLayoutEffect)(()=>{var e;null===(e=S.current)||void 0===e||e.scrollTo(x[0],x[1])},[l,x]),(0,o.jsxs)(a.Z,{ref:S,style:u,...r,children:[(0,o.jsx)(a.Z,{style:m,children:h.PC}),s.map((e,t)=>(0,o.jsx)(a.Z,{style:f,css:{marginTop:1===e.level?4:0,marginLeft:"calc(1.5rem * ".concat(e.level-1,")"),borderWidth:"0px 0px 0px ".concat(0==l[t]?4:0,"px"),fontWeight:0==l[t]?d.rS.fontWeights.bold:d.rS.fontWeights.normal,color:0==l[t]?d.rS.colors.textActive:d.rS.colors.textLess},children:(0,o.jsx)(a.Z,{onClick:()=>{var t;let r=null===(t=e.headingRef.current)||void 0===t?void 0:t.getBoundingClientRect();r&&window.scrollTo({top:window.scrollY+r.y,behavior:"smooth"})},children:(0,o.jsx)(a.Z,{style:p,children:e.headingContent})})},t))]})},u={fontFamily:d.rS.fonts.global,fontWeight:d.rS.fontWeights.h6,fontSize:d.rS.fontSizes.h6,letterSpacing:d.rS.letterSpacings.h4,color:d.rS.colors.textLess,borderWidth:4,borderColor:d.rS.colors.borderGeneral,borderStyle:"solid",scrollBehavior:"auto",overflow:"auto",userSelect:"none",position:"sticky",top:"10vh",maxHeight:"calc(80vh)",maxWidth:"400px",display:"flex",flexDirection:"column",marginLeft:64,marginRight:64,paddingLeft:32,paddingRight:32,paddingTop:12,paddingBottom:16},m={color:d.rS.colors.tocHeader,fontSize:d.rS.fontSizes.h5,fontWeight:d.rS.fontWeights.bold,textAlign:"center",border:0,margin:0,borderBottom:2,marginBottom:16,paddingBottom:8,borderStyle:"dashed",borderColor:d.rS.colors.divider25,"&:before":{content:"'< '",color:d.rS.colors.divider25},"&:after":{content:"' />'",color:d.rS.colors.divider25}},f={display:"flex",borderStyle:"solid",borderColor:d.rS.colors.textLess},p={padding:0,paddingLeft:8,paddingRight:8,"&:visisted":{color:d.rS.colors.textLess},"&:hover":{color:d.rS.colors.textActive},"&:active":{transform:"translateY(4px)",color:d.rS.colors.textActive}};var S=r(3305),x=r(5626);let y=e=>{let{children:t,level:r=1,id:l="",...i}=e,s=(0,n.useRef)(null),{UpdateHeadingInfoReducer:d}=c();return(0,x.Z)(()=>{d({headingContent:t,headingID:l,headingRef:s,level:r})},[]),(0,o.jsxs)(a.Z,{style:W,css:L[r],elementName:"h".concat(r),...i,children:[(0,o.jsx)(a.Z,{style:k,ref:s,id:l}),t]})},b=e=>(0,o.jsx)(y,{level:1,...e}),j=e=>(0,o.jsx)(y,{level:2,...e}),v=e=>(0,o.jsx)(y,{level:3,...e}),w=e=>(0,o.jsx)(y,{level:4,...e}),C=e=>(0,o.jsx)(y,{level:5,...e}),Z=e=>(0,o.jsx)(y,{level:6,...e}),k={position:"absolute",top:-68},W={position:"relative",textTransform:"uppercase"},L={1:{fontSize:d.rS.fontSizes.h1,fontWeight:d.rS.fontWeights.h1,letterSpacing:d.rS.letterSpacings.h1,lineHeight:d.rS.lineHeights.h1,marginTop:16,marginBottom:16},2:{fontSize:d.rS.fontSizes.h2,fontWeight:d.rS.fontWeights.h2,letterSpacing:d.rS.letterSpacings.h2,lineHeight:d.rS.lineHeights.h2,marginTop:16,marginBottom:16},3:{fontSize:d.rS.fontSizes.h3,fontWeight:d.rS.fontWeights.h3,letterSpacing:d.rS.letterSpacings.h3,lineHeight:d.rS.lineHeights.h3,marginTop:16,marginBottom:16},4:{fontSize:d.rS.fontSizes.h4,fontWeight:d.rS.fontWeights.h4,letterSpacing:d.rS.letterSpacings.h4,lineHeight:d.rS.lineHeights.h4,marginTop:16,marginBottom:16},5:{fontSize:d.rS.fontSizes.h5,fontWeight:d.rS.fontWeights.h5,letterSpacing:d.rS.letterSpacings.h5,lineHeight:d.rS.lineHeights.h5,marginTop:8,marginBottom:8},6:{fontSize:d.rS.fontSizes.h6,fontWeight:d.rS.fontWeights.h6,letterSpacing:d.rS.letterSpacings.h6,lineHeight:d.rS.lineHeights.h6,marginTop:8,marginBottom:8}};var R=r(43);let T=e=>{let{children:t,...r}=e;return(0,o.jsx)(a.Z,{style:B,elementName:R.P,...r,children:t})},B={marginTop:12,marginBottom:12},N=e=>{let{children:t,...r}=e;return(0,o.jsx)(a.Z,{style:E,elementName:R.Cs,...r,children:(0,o.jsx)(a.Z,{style:I,children:t})})},E={marginTop:12,marginBottom:12,marginLeft:8,marginRight:8,paddingLeft:32,paddingRight:32,paddingTop:8,paddingBottom:8,borderLeft:8,borderRight:0,borderTop:0,borderBottom:0,borderStyle:"solid",backgroundColor:d.rS.colors.quoteBackground,borderColor:d.rS.colors.quoteLegend,borderRadius:24,boxShadow:d.rS.shadows.quoteBlockShadow},I={opacity:.75};var z=r(1664),H=r.n(z);let D=e=>{let{children:t,...r}=e;return(0,o.jsx)(a.Z,{as:H(),style:A,...r,children:t})},A={color:d.rS.colors.tertiary,paddingBottom:4,"&:visited":{color:d.rS.colors.color23},movUnderline:"".concat(d.rS.colors.gTertiary," 2px 0px 0px"),"&:active":{color:d.rS.colors.secondary,movUnderlineColor:d.rS.colors.gSecondary}},_=e=>{let{children:t,...r}=e;return(0,o.jsx)(a.Z,{style:M,elementName:R.cO,...r,children:t})},M={fontFamily:d.rS.fonts.code,color:d.rS.colors.primary,paddingLeft:8,paddingRight:8,backgroundColor:d.rS.colors.codeInnerBackground,borderRadius:8,textTransform:"none"},F=(0,n.createContext)({showInner:0,ToggleContentFn:()=>{}}),P=e=>{let{children:t,...r}=e;return(0,o.jsx)(a.Z,{style:X,...r,children:t})},X={width:12,height:12,borderRadius:"100%",backgroundColor:d.rS.colors.green,"&:hover":{cursor:"pointer"}},Y=e=>{let{children:t,...r}=e;return(0,o.jsx)(a.Z,{style:G,...r,children:t})},G={width:12,height:12,borderRadius:"100%",backgroundColor:d.rS.colors.red,"&:hover":{cursor:"pointer"}},O=e=>{let{children:t,...r}=e;return(0,o.jsx)(a.Z,{style:q,...r,children:t})},q={width:12,height:12,borderRadius:"100%",backgroundColor:d.rS.colors.yellow,"&:hover":{cursor:"pointer"}},K=e=>{let{children:t,...r}=e,{ToggleContentFn:l}=(0,n.useContext)(F);return(0,o.jsxs)(a.Z,{style:U,...r,children:[(0,o.jsx)(Y,{onClick:l}),(0,o.jsx)(O,{}),(0,o.jsx)(P,{})]})},U={display:"flex",flexDirection:"row",justifyContent:"left",alignItems:"center",gap:8};var V=r(792),Q=r.n(V),J=r(640),$=r.n(J);let ee=e=>{let{children:t,style:r,...n}=e;return(0,o.jsx)(a.Z,{css:r,style:et,...n,children:t})},et={display:"flex",justifyContent:"center",userSelect:"none",borderRadius:8,borderStyle:"solid","&:hover":{backgroundColor:d.rS.colors.buttonHoverBackground,cursor:"pointer"},"&:active":{transform:"translateY(4px)"}};var er=r(1811);let eo=e=>{let{content:t,refreshTime:r=2e3,style:l,...i}=e,[s,c]=(0,n.useState)(!1),d=e=>{e.currentTarget.blur();let r=$()(Q()(t));c(r)};return(0,n.useEffect)(()=>{if(!s)return;let e=setTimeout(()=>{c(!1)},r);return()=>{clearTimeout(e)}},[r,s]),(0,o.jsx)(a.Z,{css:l,as:ee,style:en,onClick:d,...i,children:s?(0,o.jsx)(er.nQ,{style:ei}):(0,o.jsx)(er.Km,{style:el})})},en={borderColor:d.rS.colors.next,boxShadow:d.rS.shadows.codeCopyBtnNormal,"&:active":{backgroundColor:d.rS.colors.next,boxShadow:d.rS.shadows.codeCopyBtnClick},width:24,height:24,display:"flex",justifyContent:"center",alignItems:"center"},el={fill:d.rS.colors.copyIcon,width:12,height:12},ei={fill:d.rS.colors.success,width:12,height:12},es=e=>{let{content:t,...r}=e;return(0,o.jsx)(a.Z,{style:ea,...r,children:(0,o.jsx)(eo,{content:t})})},ea={display:"flex",flexDirection:"row",justifyContent:"right",alignItems:"center"},ec=e=>{let{languageName:t=""}=e;return(0,o.jsx)(a.Z,{style:ed,children:t})},ed={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",userSelect:"none",color:d.rS.colors.textLess,fontSize:d.rS.fontSizes.h5,letterSpacing:d.rS.letterSpacings.h5,fontWeight:d.rS.fontWeights.bold,textTransform:"capitalize"},eh=e=>{let{content:t,className:r,...n}=e,l=null==r?void 0:r.split(" "),i=null==l?void 0:l.find(e=>/language-*/.test(e)),s=i?i.slice(9):"";return(0,o.jsxs)(a.Z,{style:eg,...n,children:[(0,o.jsx)(a.Z,{as:K,style:eu}),(0,o.jsx)(a.Z,{as:ec,style:em,languageName:s}),(0,o.jsx)(a.Z,{as:es,style:ef,content:t})]})},eg={display:"grid",gridTemplateAreas:"'codeblock-header-ifhone-btn codeblock-header-lang-area codeblock-header-action-btn'",gridTemplateColumns:"1fr 1fr 1fr",paddingLeft:16,paddingRight:16},eu={gridArea:"codeblock-header-ifhone-btn"},em={gridArea:"codeblock-header-lang-area"},ef={gridArea:"codeblock-header-action-btn"},ep=e=>{let{children:t,...r}=e;return(0,o.jsx)(a.Z,{style:eS,...r,children:t})},eS={overflow:"auto",paddingBottom:8,scrollbarWidth:"thin",color:d.rS.colors.textGeneral,marginLeft:4,".token":{"&.keyword":{fontWeight:"bold"},"&.comment, &.prolog, &.cdata":{color:d.rS.colors.codeComment},"&.delimiter, &.boolean, &.keyword, &.selector, &.important, &.doctype, &.atrule, &.url":{color:d.rS.colors.codeKeyword},"&.tag, &.builtin, &.regex":{color:d.rS.colors.codeNamespace},"&.property, &.variable, &.attr-value, &.class-name, &.string, &.char":{color:d.rS.colors.codeVariable},"&.literal-property, &.attr-name":{color:d.rS.colors.codeAttribute},"&.function":{color:d.rS.colors.codeFunction},"&.tag .punctuation, &.attr-value .punctuation":{color:d.rS.colors.codePunctuation},"&.operator":{color:d.rS.colors.codeOperator},"&.boolean, &.number, &.constant":{color:d.rS.colors.codeLiteral},"&.inserted":{color:d.rS.colors.codeAddition},"&.deleted":{color:d.rS.colors.codeDeletion},"&.url":{textDecoration:"underline"},"&.bold, &.important":{fontWeight:"bold"},"&.italic":{fontStyle:"italic"}}},ex=e=>{let{children:t,...r}=e,{showInner:l}=(0,n.useContext)(F);return(0,o.jsx)(a.Z,{children:(0,o.jsx)(a.Z,{style:ey,css:{display:l?"":"none"},...r,children:(0,o.jsx)(ep,{children:t})})})},ey={fontSize:"".concat(d.rS.fontSizes.h5," !important"),letterSpacing:d.rS.letterSpacings.h5,lineHeight:d.rS.lineHeights.h5,display:"flex",flexDirection:"row",gap:8},eb=e=>{let{children:t,className:r,...l}=e,[i,s]=(0,n.useState)(1),c=()=>{s(i?0:1)};return(0,o.jsx)(F.Provider,{value:{showInner:i,ToggleContentFn:c},children:(0,o.jsx)(a.Z,{style:ej,elementName:R.cO,...l,children:(0,o.jsxs)(a.Z,{style:ev,children:[(0,o.jsx)(eh,{content:t,className:r}),(0,o.jsx)(ex,{children:t})]})})})},ej={fontFamily:d.rS.fonts.code,maxWidth:"100%"},ev={marginTop:16,marginBottom:16,marginLeft:32,marginRight:32,borderRadius:16,display:"flex",flexDirection:"column",padding:16,gap:8,backgroundImage:"".concat(d.rS.colors.codeBlockBackground),boxShadow:d.rS.shadows.codeBlockShadow,pointerEvents:"none","*":{pointerEvents:"auto"}},ew=e=>{let{children:t,...r}=e;return(0,o.jsx)(a.Z,{style:eC,elementName:R.UL,...r,children:t})},eC={position:"relative",margin:0,marginLeft:48,marginRight:48,listStyle:"none",counterReset:"ListItemNo",["& ".concat(R.LI)]:{["".concat(R.LI,":before")]:{content:"◦"}},["& ".concat(R.LI,":before")]:{content:"•",color:d.rS.colors.primary,fontWeight:d.rS.fontWeights.bold}},eZ=e=>{let{children:t,...r}=e;return(0,o.jsx)(a.Z,{style:ek,elementName:R.OL,...r,children:t})},ek={position:"relative",margin:0,marginLeft:48,marginRight:48,listStyle:"none",counterReset:"ListItemNo",["& ".concat(R.LI)]:{counterIncrement:"ListItemNo"},["& ".concat(R.LI,":before")]:{content:'counters(ListItemNo, ".")"."',color:d.rS.colors.primary,fontWeight:d.rS.fontWeights.bold}},eW=e=>{let{children:t,...r}=e;return(0,o.jsx)(a.Z,{style:eL,elementName:R.LI,...r,children:(0,o.jsx)(a.Z,{elementName:R.tK,style:eR,children:t})})},eL={display:"flex",flexDirection:"row",gap:8,marginBottom:8,marginTop:8},eR={width:"100%","&> :first-child":{marginTop:0}};var eT=r(2654);let eB=e=>{let{children:t,alt:r,width:n,height:l,...i}=e;return(0,o.jsxs)(a.Z,{style:eN,children:[(0,o.jsx)(a.Z,{elementName:R.MY,style:eE,alt:r,css:{width:n,height:l},onError:e=>{e.target.src=eT.bR},...i,children:t}),(()=>{if(r)return(0,o.jsx)(a.Z,{style:eI,children:r})})()]})},eN={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:0,marginTop:32,marginBottom:32,gap:8},eE={maxWidth:"90%",borderRadius:16},eI={fontSize:d.rS.fontSizes.h5,fontWeight:d.rS.fontWeights.bold,borderWidth:2,borderStyle:"dashed",borderRadius:8,padding:8,borderColor:"#00000000","&:hover":{borderColor:d.rS.colors.borderGeneral}},ez=e=>{let{children:t,...r}=e;return(0,o.jsx)(a.Z,{style:eH,elementName:R.tK,...r,children:t})},eH={overflowX:"auto"},eD=e=>{let{children:t,...r}=e;return(0,o.jsx)(a.Z,{style:eA,elementName:R.bg,...r,children:t})},eA={overflowX:"auto",border:0,borderTop:2,borderBottom:2,borderStyle:"dashed",borderColor:d.rS.colors.divider50},e_=e=>{let{children:t,...r}=e;return(0,o.jsx)(a.Z,{style:eM,children:(0,o.jsx)(a.Z,{style:eF,elementName:R.Fe,...r,children:t})})},eM={wordBreak:"break-all",overflowWrap:"break-word",display:"flex",alignItems:"center",justifyContent:"center",marginTop:32,marginBottom:32},eF={maxWidth:"100%",marginLeft:16,marginRight:16,borderCollapse:"collapse",["".concat(R.TH,", ").concat(R.TD)]:{border:"4px solid",borderColor:d.rS.colors.borderGeneral,padding:8}};var eP=(e=>{let t={};for(let r of Object.keys(e))t[r]=t=>{let{children:n,className:l,...i}=t,s=l?l.split(" "):[];for(let t of e[r]){let e=!0;if(t.classNames){for(let r of t.classNames)if(!s.includes(r)){e=!1;break}}if(e)return(0,o.jsx)(a.Z,{as:t.replacedElement,className:l,...i,children:n})}return(0,o.jsx)(a.Z,{elementName:r,className:l,...i,children:n})};return t})({h1:[{replacedElement:b}],h2:[{replacedElement:j}],h3:[{replacedElement:v}],h4:[{replacedElement:w}],h5:[{replacedElement:C}],h6:[{replacedElement:Z}],p:[{replacedElement:T}],blockquote:[{replacedElement:N}],a:[{replacedElement:D}],code:[{replacedElement:eb,classNames:["code-highlight"]},{replacedElement:_}],ul:[{replacedElement:ew}],ol:[{replacedElement:eZ}],img:[{replacedElement:eB}],span:[{replacedElement:ez,classNames:["math-inline","math"]}],div:[{replacedElement:eD,classNames:["math-display","math"]}],li:[{replacedElement:eW}],table:[{replacedElement:e_}],BlogImg:[{replacedElement:eB}]});let eX=e=>{let{sourceContent:t}=e;return(0,o.jsx)(S.R,{...t,components:eP})};var eY=(0,n.memo)(eX);let eG=e=>{let{children:t,...r}=e;return(0,o.jsx)(a.Z,{style:eO,...r,children:t})},eO={color:d.rS.colors.textGeneral,fontSize:d.rS.fontSizes.h0,fontWeight:d.rS.fontWeights.h0,letterSpacing:d.rS.letterSpacings.h0,textDecoration:"underline",textAlign:"center"};var eq=r(6845);let eK=e=>{let{children:t,frontMatter:r,...n}=e;return(0,o.jsxs)(a.Z,{style:eU,children:[(0,o.jsxs)(a.Z,{style:eV,children:[(0,o.jsx)(er.Qu,{style:{fill:d.rS.colors.tertiary,width:16,height:16}}),(0,o.jsx)(eq.Z,{dateStr:r.date})]}),(0,o.jsxs)(a.Z,{style:eV,children:[(0,o.jsx)(er.Zi,{style:{fill:d.rS.colors.tertiary,width:16,height:16}}),"".concat(r.noWords," ").concat(h.Kw)]}),(0,o.jsxs)(a.Z,{style:eV,children:[(0,o.jsx)(er.T3,{style:{fill:d.rS.colors.tertiary,width:16,height:16}}),"".concat(r.minsRead," ").concat(h.G8)]})]})},eU={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:16,color:d.rS.colors.textLesser,fontSize:d.rS.fontSizes.h5,letterSpacing:d.rS.letterSpacings.h5},eV={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:8},eQ=e=>{let{children:t,coverImageURL:r,...n}=e;return(0,o.jsx)(a.Z,{style:eJ,children:(0,o.jsx)(a.Z,{style:e$,elementName:R.MY,src:r||eT.V9,onError:e=>{e.target.src=eT.bR},...n,children:t})})},eJ={margin:0,marginTop:16,gap:8,backgroundImage:d.rS.colors.gradient12,borderRadius:16,display:"flex",width:"75%",padding:4},e$={backgroundColor:d.rS.colors.pageBackground,borderRadius:16,width:"100%"},e0=e=>{let{children:t,frontMatter:r,...n}=e;return(0,o.jsxs)(a.Z,{style:e1,...n,children:[(0,o.jsx)(eQ,{coverImageURL:r.coverImage}),(0,o.jsx)(eG,{children:r.title}),(0,o.jsx)(eK,{frontMatter:r})]})},e1={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:8,marginTop:24,marginBottom:40,fontFamily:d.rS.fonts.global},e2=e=>{let{children:t,frontMatter:r,sourceContent:n,...l}=e;return(0,o.jsxs)(s,{children:[(0,o.jsx)(e0,{frontMatter:r}),(0,o.jsxs)(a.Z,{style:e6,children:[(0,o.jsx)(a.Z,{style:e8}),(0,o.jsx)(a.Z,{style:e5,children:(0,o.jsx)(eY,{sourceContent:n})}),(0,o.jsx)(a.Z,{style:e4,children:(0,o.jsx)(g,{})})]})]})},e6={display:"grid",gridTemplateAreas:"'post-left post-content post-right'",gridTemplateColumns:"1fr 792px 2.5fr",marginBottom:24},e8={gridArea:"post-left"},e5={gridArea:"post-content",color:d.rS.colors.textGeneral,fontFamily:d.rS.fonts.content,fontSize:d.rS.fontSizes.h5,fontWeight:d.rS.fontWeights.h5,lineHeight:d.rS.lineHeights.h5,letterSpacing:d.rS.letterSpacings.h5},e4={gridArea:"post-right"};r(8594);let e3=e=>{let{frontMatter:t,sourceContent:r}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e2,{frontMatter:t,sourceContent:r})})};var e9=!0,e7=e3}},function(e){e.O(0,[958,774,888,179],function(){return e(e.s=592)}),_N_E=e.O()}]);