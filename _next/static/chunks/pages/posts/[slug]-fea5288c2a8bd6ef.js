(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{592:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(7144)}])},6845:function(e,t,r){"use strict";r.d(t,{Z:function(){return C}});var o=r(5893),n=r(7294),l=r(2051);let i=()=>{let e=(0,n.useContext)(l.V);if(!e)throw Error("useLayout must be used inside of a LayoutProvider.");return e};var s=r(7484),a=r.n(s),c=r(178),d=r.n(c),h=r(9387),g=r.n(h),S=r(4110),f=r.n(S),p=r(6176),m=r.n(p),u=r(8734),x=r.n(u);r(5054),r(7553);var y=r(1255),b=r(3015);let v=(e,t)=>(a().extend(d()),a().extend(g()),a().extend(f()),a().extend(m()),a().extend(x()),a()(t).tz(y.X.Xu).locale(e).clone()),j=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b.NE,r=arguments.length>2?arguments[2]:void 0;return v(t,e).format(r)},w=e=>{let{children:t,dateStr:r,format:n="D MMMM, YYYY",...l}=e,{currentLocale:s}=i();return(0,o.jsx)(o.Fragment,{children:j(r,s,n)})};var C=w},1255:function(e,t,r){"use strict";r.d(t,{X:function(){return o}});var o={};r.r(o),r.d(o,{XN:function(){return c},C7:function(){return d},x1:function(){return a},$A:function(){return h},yC:function(){return i},Xu:function(){return s}});var n=r(5260),l=r(2654);let i="posts",s="Antarctica/Davis",a="Mistsu",c=n.Bq,d=l.J6,h=8;r(8964)},7144:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return tZ},default:function(){return tB}});var o,n,l=r(5893),i=r(7294);let s=(0,i.createContext)({headingInfos:[],UpdateHeadingInfoReducer:e=>{}}),a=(e,t)=>{let r=e.findIndex(e=>e.headingID===t.headingID&&e.level===t.level);return -1===r?[...e,t]:e},c=e=>{let{children:t,...r}=e,[o,n]=(0,i.useReducer)(a,[]);return(0,l.jsx)(s.Provider,{value:{headingInfos:o,UpdateHeadingInfoReducer:n},children:t})};var d=r(1533);let h=()=>{let e=(0,i.useContext)(s);if(!e)throw Error("useContent must be used inside of a ContentContext.Provider.");return e};var g=r(5919),S=r(1622),f=r(5260);let p=e=>{let{children:t,...r}=e,{headingInfos:o}=h(),[n,s]=(0,i.useReducer)((e,t)=>{for(let e=0;e<t.length;++e)if(e<t.length-1){if(-1==t[e]&&1==t[e+1]){t[e]=0;break}}else if(-1==t[e]){t[e]=0;break}let r=t.findIndex(e=>0===e);if(-1!==r){let e=o[r].level,n=r-1;for(;n>=0&&e>=1;)for(;n>=0;){if(o[n].level<e){t[n]=0,e=o[n].level;break}n--}}return JSON.stringify(e)===JSON.stringify(t)?e:t},[]),a=()=>{let e=[];for(let r=0;r<o.length;++r){var t;let n=null===(t=o[r].headingRef.current)||void 0===t?void 0:t.getBoundingClientRect(),l=2;n&&(l=n.top<-1?-1:n.bottom>(window.innerHeight||document.documentElement.clientHeight)-S.w?1:0),e.push(l)}s(e)};(0,i.useEffect)(()=>(0===n.length&&0!==o.length&&a(),window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)));let c=(0,i.useRef)(null),p=(0,i.useMemo)(()=>n&&c.current?[c.current.scrollLeft,c.current.scrollTop]:[0,0],[n]);return(0,i.useLayoutEffect)(()=>{var e;null===(e=c.current)||void 0===e||e.scrollTo(p[0],p[1])},[n,p]),(0,l.jsxs)(d.Z,{ref:c,style:m,...r,children:[(0,l.jsx)(d.Z,{style:u,children:f.PC}),o.map((e,t)=>(0,l.jsx)(d.Z,{style:x,css:{marginTop:1===e.level&&0!==t?4:0,marginLeft:"calc(24px * ".concat(e.level-1,")"),borderWidth:"0px 0px 0px ".concat(0==n[t]?4:0,"px"),fontWeight:0==n[t]?g.rS.fontWeights.bold:g.rS.fontWeights.normal,color:0==n[t]?g.rS.colors.textActive:g.rS.colors.textLess},children:(0,l.jsx)(d.Z,{onClick:()=>{var t;let r=null===(t=e.headingRef.current)||void 0===t?void 0:t.getBoundingClientRect();r&&window.scrollTo({top:window.scrollY+r.y,behavior:"smooth"})},children:(0,l.jsx)(d.Z,{style:y,children:e.headingContent})})},t))]})},m={fontFamily:g.rS.fonts.global,fontWeight:g.rS.fontWeights.h6,fontSize:g.rS.fontSizes.h6,letterSpacing:g.rS.letterSpacings.h4,color:g.rS.colors.textLess,wordBreak:"break-word",borderWidth:4,borderColor:g.rS.colors.borderGeneral,borderStyle:"solid",scrollBehavior:"auto",overflow:"auto",userSelect:"none",position:"sticky",top:S.w+32,maxHeight:"calc((100vh - ".concat(S.w+32,"px) * 0.9)"),maxWidth:"400px",display:"flex",flexDirection:"column",marginLeft:"20%",marginRight:"15%",paddingLeft:32,paddingRight:32,"&>:last-child":{marginBottom:16}},u={color:g.rS.colors.tertiary,fontSize:g.rS.fontSizes.h5,fontWeight:g.rS.fontWeights.bold,textAlign:"center",border:0,margin:0,borderBottom:2,marginBottom:16,marginTop:16,paddingBottom:8,borderStyle:"dashed",borderColor:g.rS.colors.divider25,"&:before":{content:"'< '",color:g.rS.colors.divider25},"&:after":{content:"' />'",color:g.rS.colors.divider25}},x={display:"flex",borderStyle:"solid",borderColor:g.rS.colors.textLess},y={padding:0,paddingLeft:8,paddingRight:8,"&:visisted":{color:g.rS.colors.textLess},"&:hover":{color:g.rS.colors.textActive,cursor:"pointer"},"&:active":{transform:"translateY(4px)",color:g.rS.colors.textActive}};var b=r(3305),v=r(5626);let j=e=>{let{children:t,level:r=1,id:o="",...n}=e,s=(0,i.useRef)(null),{UpdateHeadingInfoReducer:a}=h();return(0,v.Z)(()=>{a({headingContent:t,headingID:o,headingRef:s,level:r})},[]),(0,l.jsxs)(d.Z,{style:T,css:R[r],elementName:"h".concat(r),...n,children:[(0,l.jsx)(d.Z,{style:L,ref:s,id:o}),t]})},w=e=>(0,l.jsx)(j,{level:1,...e}),C=e=>(0,l.jsx)(j,{level:2,...e}),k=e=>(0,l.jsx)(j,{level:3,...e}),Z=e=>(0,l.jsx)(j,{level:4,...e}),B=e=>(0,l.jsx)(j,{level:5,...e}),W=e=>(0,l.jsx)(j,{level:6,...e}),L={position:"absolute",top:-S.w},T={position:"relative",textTransform:"uppercase",wordBreak:"break-word"},R={1:{fontSize:g.rS.fontSizes.h1,fontWeight:g.rS.fontWeights.h1,letterSpacing:g.rS.letterSpacings.h1,lineHeight:g.rS.lineHeights.h1,marginTop:16,marginBottom:16},2:{fontSize:g.rS.fontSizes.h2,fontWeight:g.rS.fontWeights.h2,letterSpacing:g.rS.letterSpacings.h2,lineHeight:g.rS.lineHeights.h2,marginTop:16,marginBottom:16},3:{fontSize:g.rS.fontSizes.h3,fontWeight:g.rS.fontWeights.h3,letterSpacing:g.rS.letterSpacings.h3,lineHeight:g.rS.lineHeights.h3,marginTop:16,marginBottom:16},4:{fontSize:g.rS.fontSizes.h4,fontWeight:g.rS.fontWeights.h4,letterSpacing:g.rS.letterSpacings.h4,lineHeight:g.rS.lineHeights.h4,marginTop:16,marginBottom:16},5:{fontSize:g.rS.fontSizes.h5,fontWeight:g.rS.fontWeights.h5,letterSpacing:g.rS.letterSpacings.h5,lineHeight:g.rS.lineHeights.h5,marginTop:8,marginBottom:8},6:{fontSize:g.rS.fontSizes.h6,fontWeight:g.rS.fontWeights.h6,letterSpacing:g.rS.letterSpacings.h6,lineHeight:g.rS.lineHeights.h6,marginTop:8,marginBottom:8}};var z=r(43);let I=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:N,elementName:z.P,...r,children:t})},N={marginTop:12,marginBottom:12,wordBreak:"break-word"},E=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:H,elementName:z.Cs,...r,children:(0,l.jsx)(d.Z,{style:D,children:t})})},H={marginTop:12,marginBottom:12,marginLeft:8,marginRight:8,paddingLeft:32,paddingRight:32,paddingTop:8,paddingBottom:8,borderLeft:8,borderRight:0,borderTop:0,borderBottom:0,borderStyle:"solid",backgroundColor:g.rS.colors.quoteBackground,borderColor:g.rS.colors.quoteLegend,borderRadius:24,boxShadow:g.rS.shadows.depthShadow},D={opacity:.75};var A=r(1664),G=r.n(A);let _=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{as:G(),style:F,...r,children:t})},F={color:g.rS.colors.tertiary,paddingBottom:4,movUnderline:"".concat(g.rS.colors.gTertiary," 2px 0px 0px"),"&:visited":{color:g.rS.colors.color23},"&:active":{color:g.rS.colors.secondary,movUnderlineColor:g.rS.colors.gSecondary}},P=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:Y,elementName:z.cO,...r,children:t})},Y={fontFamily:g.rS.fonts.code,color:g.rS.colors.primary,paddingLeft:8,paddingRight:8,backgroundColor:g.rS.colors.codeInnerBackground,borderRadius:8,textTransform:"none",wordBreak:"break-word"};(o=n||(n={}))[o.normal=0]="normal",o[o.wrapCode=1]="wrapCode",o[o.closeBox=2]="closeBox";let M=[n.normal,n.wrapCode,n.closeBox],X=(0,i.createContext)({showInner:!0,wrapCode:!1,codeBlockState:n.normal,ToggleContentFn:()=>{},ToggleWrapFn:()=>{},UpdateVisualStateFn:()=>{}});var U=r(6260);let O=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:K,...r,children:(0,l.jsx)(d.Z,{style:q,as:U.ZN})})},K={width:12,height:12,borderRadius:"100%",cursor:"pointer",display:"flex",backgroundColor:g.rS.colors.green,"&:hover":{backgroundColor:g.rS.colors.brightGreen},"&:active":{backgroundColor:g.rS.colors.darkGreen}},q={fill:g.rS.colors.black,width:12,height:12,opacity:"0%","&:hover":{opacity:"100%"}},Q=e=>{let{children:t,showInner:r,...o}=e;return(0,l.jsx)(d.Z,{style:V,...o,children:(0,l.jsx)(d.Z,{style:J,as:r?U.g8:U.v4})})},V={width:12,height:12,borderRadius:"100%",cursor:"pointer",display:"flex",backgroundColor:g.rS.colors.red,"&:hover":{backgroundColor:g.rS.colors.brightRed},"&:active":{backgroundColor:g.rS.colors.darkRed}},J={fill:g.rS.colors.black,width:12,height:12,opacity:"0%","&:hover":{opacity:"100%"}},$=e=>{let{children:t,wrapCode:r,...o}=e;return(0,l.jsx)(d.Z,{style:ee,...o,children:(0,l.jsx)(d.Z,{style:et,as:r?U.Wk:U.HA})})},ee={width:12,height:12,borderRadius:"100%",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:g.rS.colors.yellow,"&:hover":{backgroundColor:g.rS.colors.brightYellow},"&:active":{backgroundColor:g.rS.colors.darkYellow}},et={fill:g.rS.colors.black,width:10,height:10,transform:"scaleY(-1)",opacity:"0%","&:hover":{opacity:"100%"}},er=e=>{let{children:t,style:r,...o}=e;return(0,l.jsx)(d.Z,{css:r,style:eo,...o,children:t})},eo={display:"flex",justifyContent:"center",userSelect:"none",borderRadius:8,borderStyle:"solid","&:hover":{backgroundColor:g.rS.colors.buttonHoverBackground,cursor:"pointer"},"&:active":{transform:"translateY(4px)"}},en={[n.normal]:U.v4,[n.closeBox]:U.g8,[n.wrapCode]:U.HA},el={[n.normal]:{},[n.closeBox]:{},[n.wrapCode]:{transform:"scaleY(-1)"}},ei=e=>{let{children:t,codeBlockState:r,...o}=e;return(0,l.jsx)(d.Z,{as:er,style:es,...o,children:(0,l.jsx)(d.Z,{css:el[r],style:ea,as:en[r]})})},es={width:48,height:24,borderRadius:24,cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",userSelect:"none",borderColor:g.rS.colors.red,boxShadow:g.rS.shadows.codeBlockMobileBtnNormal,"&:active":{boxShadow:g.rS.shadows.codeBlockMobileBtnClick}},ea={fill:g.rS.colors.iconGeneral,width:20,height:20};var ec=r(6189);let ed=e=>{let{children:t,...r}=e,{ToggleContentFn:o,ToggleWrapFn:n,UpdateVisualStateFn:s,showInner:a,wrapCode:c,codeBlockState:h}=(0,i.useContext)(X);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.Z,{style:eg,...r,children:(0,l.jsx)(ei,{codeBlockState:h,onClick:s})}),(0,l.jsxs)(d.Z,{style:eh,...r,children:[(0,l.jsx)(Q,{title:f.VN,showInner:a,onClick:o}),(0,l.jsx)($,{title:f.pV,wrapCode:c,onClick:n}),(0,l.jsx)(O,{title:f.QK})]})]})},eh={display:"flex",flexDirection:"row",justifyContent:"left",alignItems:"center",gap:8,[".".concat(ec.Qf," &")]:{display:"none"},[".".concat(ec.UU," &")]:{display:"none"}},eg={display:"none",[".".concat(ec.Qf," &")]:{display:"block"},[".".concat(ec.UU," &")]:{display:"block"}};var eS=r(792),ef=r.n(eS),ep=r(640),em=r.n(ep);let eu=e=>{let{content:t,refreshTime:r=2e3,style:o,...n}=e,[s,a]=(0,i.useState)(!1),c=e=>{e.currentTarget.blur();let r=em()(ef()(t));a(r)};return(0,i.useEffect)(()=>{if(!s)return;let e=setTimeout(()=>{a(!1)},r);return()=>{clearTimeout(e)}},[r,s]),(0,l.jsx)(d.Z,{css:o,as:er,style:ex,onClick:c,...n,children:s?(0,l.jsx)(U.nQ,{style:eb}):(0,l.jsx)(U.Km,{style:ey})})},ex={borderColor:g.rS.colors.next,boxShadow:g.rS.shadows.codeCopyBtnNormal,"&:active":{backgroundColor:g.rS.colors.next,boxShadow:g.rS.shadows.codeCopyBtnClick},width:24,height:24,display:"flex",justifyContent:"center",alignItems:"center"},ey={fill:g.rS.colors.iconGeneral,width:12,height:12},eb={fill:g.rS.colors.success,width:12,height:12},ev=e=>{let{content:t,...r}=e;return(0,l.jsx)(d.Z,{title:f.uh,style:ej,...r,children:(0,l.jsx)(eu,{content:t})})},ej={display:"flex",flexDirection:"row",justifyContent:"right",alignItems:"center"},ew=e=>{let{languageName:t="",...r}=e;return(0,l.jsx)(d.Z,{style:eC,...r,children:t})},eC={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",userSelect:"none",color:g.rS.colors.textLess,fontSize:g.rS.fontSizes.h5,letterSpacing:g.rS.letterSpacings.h5,fontWeight:g.rS.fontWeights.bold,textTransform:"capitalize"},ek=e=>{let{content:t,className:r,...o}=e,n=null==r?void 0:r.split(" "),i=null==n?void 0:n.find(e=>/language-*/.test(e)),s=i?i.slice(9):"";return(0,l.jsxs)(d.Z,{style:eZ,...o,children:[(0,l.jsx)(d.Z,{as:ed,style:eB}),(0,l.jsx)(d.Z,{as:ew,style:eW,languageName:s}),(0,l.jsx)(d.Z,{as:ev,style:eL,content:t})]})},eZ={display:"grid",gridTemplateAreas:"'codeblock-header-ifhone-btn codeblock-header-lang-area codeblock-header-action-btn'",gridTemplateColumns:"1fr 1fr 1fr",paddingLeft:16,paddingRight:16},eB={gridArea:"codeblock-header-ifhone-btn"},eW={gridArea:"codeblock-header-lang-area"},eL={gridArea:"codeblock-header-action-btn"},eT=e=>{let{children:t,wrapCode:r,...o}=e;return(0,l.jsx)(d.Z,{style:eR,css:r?{whiteSpace:"pre-wrap",lineBreak:"anywhere"}:{overflow:"auto"},...o,children:t})},eR={paddingBottom:8,scrollbarWidth:"thin",color:g.rS.colors.textGeneral,marginLeft:4,".token":{"&.keyword":{fontWeight:"bold"},"&.comment, &.prolog, &.cdata":{color:g.rS.colors.codeComment},"&.delimiter, &.boolean, &.keyword, &.selector, &.important, &.doctype, &.atrule, &.url":{color:g.rS.colors.codeKeyword},"&.tag, &.builtin, &.regex":{color:g.rS.colors.codeNamespace},"&.property, &.variable, &.attr-value, &.class-name, &.string, &.char":{color:g.rS.colors.codeVariable},"&.literal-property, &.attr-name":{color:g.rS.colors.codeAttribute},"&.function":{color:g.rS.colors.codeFunction},"&.tag .punctuation, &.attr-value .punctuation":{color:g.rS.colors.codePunctuation},"&.operator":{color:g.rS.colors.codeOperator},"&.boolean, &.number, &.constant":{color:g.rS.colors.codeLiteral},"&.inserted":{color:g.rS.colors.codeAddition},"&.deleted":{color:g.rS.colors.codeDeletion},"&.url":{textDecoration:"underline"},"&.bold, &.important":{fontWeight:"bold"},"&.italic":{fontStyle:"italic"}}},ez=e=>{let{children:t,...r}=e,{showInner:o,wrapCode:n}=(0,i.useContext)(X);return(0,l.jsx)(d.Z,{children:(0,l.jsx)(d.Z,{style:eI,css:{display:o?"":"none"},...r,children:(0,l.jsx)(eT,{wrapCode:n,children:t})})})},eI={fontSize:g.rS.fontSizes.h5,letterSpacing:g.rS.letterSpacings.h5,lineHeight:g.rS.lineHeights.h5,"@small":{fontSize:g.rS.fontSizes.h6,letterSpacing:g.rS.letterSpacings.h6,lineHeight:g.rS.lineHeights.h6},display:"flex",flexDirection:"row",gap:8},eN=e=>{let{children:t,className:r,...o}=e,[s,a]=(0,i.useState)(!0),[c,h]=(0,i.useState)(!1),[g,S]=(0,i.useState)(n.normal),f=()=>{a(!s)},p=()=>{h(!c)},m=()=>{let e=(g+1)%M.length;switch(S(e),M[e]){case n.normal:a(!0),h(!1);break;case n.wrapCode:a(!0),h(!0);break;case n.closeBox:a(!1)}};return(0,l.jsx)(X.Provider,{value:{showInner:s,wrapCode:c,codeBlockState:M[g],ToggleContentFn:f,ToggleWrapFn:p,UpdateVisualStateFn:m},children:(0,l.jsx)(d.Z,{style:eE,elementName:z.cO,...o,children:(0,l.jsxs)(d.Z,{style:eH,children:[(0,l.jsx)(ek,{content:t,className:r}),(0,l.jsx)(ez,{children:t})]})})})},eE={fontFamily:g.rS.fonts.code},eH={marginTop:16,marginBottom:16,marginLeft:32,marginRight:32,borderRadius:16,"@large":{marginLeft:0,marginRight:0},display:"flex",flexDirection:"column",padding:16,gap:16,backgroundImage:"".concat(g.rS.colors.codeBlockBackground),boxShadow:g.rS.shadows.depthShadow},eD=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:eA,elementName:z.UL,...r,children:t})},eA={position:"relative",listStyle:"none",margin:0,marginLeft:48,marginRight:48,"@small":{marginLeft:16,marginRight:16},counterReset:"ListItemNo",["& ".concat(z.LI)]:{["".concat(z.LI,":before")]:{content:"◦"}},["& ".concat(z.LI,":before")]:{content:"•",color:g.rS.colors.primary,fontWeight:g.rS.fontWeights.bold}},eG=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:e_,elementName:z.OL,...r,children:t})},e_={position:"relative",listStyle:"none",margin:0,marginLeft:48,marginRight:48,"@small":{marginLeft:16,marginRight:16},counterReset:"ListItemNo",["& ".concat(z.LI)]:{counterIncrement:"ListItemNo"},["& ".concat(z.LI,":before")]:{content:'counters(ListItemNo, ".")"."',color:g.rS.colors.primary,fontWeight:g.rS.fontWeights.bold}},eF=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:eP,elementName:z.LI,...r,children:(0,l.jsx)(d.Z,{elementName:z.tK,style:eY,children:t})})},eP={display:"flex",flexDirection:"row",gap:8,marginBottom:8,marginTop:8},eY={maxWidth:"100%","&> :first-child":{marginTop:0}};var eM=r(2654);let eX=e=>{let{children:t,alt:r,width:o,height:n,...i}=e;return(0,l.jsxs)(d.Z,{style:eU,children:[(0,l.jsx)(d.Z,{elementName:z.MY,style:eO,alt:r,css:{width:o,height:n},onError:e=>{e.target.src=eM.bR},...i,children:t}),(()=>{if(r)return(0,l.jsx)(d.Z,{style:eK,children:r})})()]})},eU={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:0,marginTop:32,marginBottom:32},eO={maxWidth:"90%","@medium":{maxWidth:"100%"},borderRadius:16},eK={wordBreak:"break-word",textAlign:"center",fontSize:g.rS.fontSizes.h5,fontWeight:g.rS.fontWeights.bold,maxWidth:"90%","@medium":{fontSize:g.rS.fontSizes.h6,maxWidth:"100%"},borderWidth:2,borderStyle:"dashed",borderRadius:8,paddingTop:4,paddingBottom:4,paddingLeft:8,paddingRight:8,borderColor:"#00000000","&:hover":{borderColor:g.rS.colors.borderGeneral}},eq=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:eQ,elementName:z.tK,...r,children:t})},eQ={overflowX:"auto",textTransform:"none"},eV=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:eJ,elementName:z.bg,...r,children:t})},eJ={overflowX:"auto",border:0,borderTop:2,borderBottom:2,borderStyle:"dashed",borderColor:g.rS.colors.divider50},e$=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:e0,children:(0,l.jsx)(d.Z,{style:e1,elementName:z.Fe,...r,children:t})})},e0={overflow:"auto",display:"grid",alignItems:"center",margin:"auto",marginTop:32,marginBottom:32},e1={marginLeft:16,marginRight:16,borderCollapse:"collapse",["".concat(z.TH,", ").concat(z.TD)]:{border:"4px solid",borderColor:g.rS.colors.borderGeneral,padding:8}};var e2=(e=>{let t={};for(let r of Object.keys(e))t[r]=t=>{let{children:o,className:n,...i}=t,s=n?n.split(" "):[];for(let t of e[r]){let e=!0;if(t.classNames){for(let r of t.classNames)if(!s.includes(r)){e=!1;break}}if(e)return(0,l.jsx)(d.Z,{as:t.replacedElement,className:n,...i,children:o})}return(0,l.jsx)(d.Z,{elementName:r,className:n,...i,children:o})};return t})({h1:[{replacedElement:w}],h2:[{replacedElement:C}],h3:[{replacedElement:k}],h4:[{replacedElement:Z}],h5:[{replacedElement:B}],h6:[{replacedElement:W}],p:[{replacedElement:I}],blockquote:[{replacedElement:E}],a:[{replacedElement:_}],code:[{replacedElement:eN,classNames:["code-highlight"]},{replacedElement:P}],ul:[{replacedElement:eD}],ol:[{replacedElement:eG}],img:[{replacedElement:eX}],span:[{replacedElement:eq,classNames:["math-inline","math"]}],div:[{replacedElement:eV,classNames:["math-display","math"]}],li:[{replacedElement:eF}],table:[{replacedElement:e$}],BlogImg:[{replacedElement:eX}]});let e6=e=>{let{sourceContent:t}=e;return(0,l.jsx)(b.R,{...t,components:e2})};var e4=(0,i.memo)(e6);let e5=e=>{let{children:t,...r}=e;return(0,l.jsx)(d.Z,{style:e8,...r,children:t})},e8={color:g.rS.colors.textGeneral,fontSize:g.rS.fontSizes.h0,fontWeight:g.rS.fontWeights.h0,letterSpacing:g.rS.letterSpacings.h0,"@medium":{fontSize:g.rS.fontSizes.h2,fontWeight:g.rS.fontWeights.h2,letterSpacing:g.rS.letterSpacings.h2},textDecoration:"underline",textAlign:"center",width:"75%"};var e3=r(6845);let e9=e=>{let{children:t,frontMatter:r,...o}=e;return(0,l.jsxs)(d.Z,{style:e7,children:[(0,l.jsxs)(d.Z,{style:te,children:[(0,l.jsx)(U.Qu,{style:{fill:g.rS.colors.tertiary,width:16,height:16}}),(0,l.jsx)(e3.Z,{dateStr:r.date})]}),(0,l.jsxs)(d.Z,{style:te,children:[(0,l.jsx)(U.Zi,{style:{fill:g.rS.colors.tertiary,width:16,height:16}}),"".concat(r.noWords," ").concat(f.Kw)]}),(0,l.jsxs)(d.Z,{style:te,children:[(0,l.jsx)(U.T3,{style:{fill:g.rS.colors.tertiary,width:16,height:16}}),"".concat(r.minsRead," ").concat(f.G8)]})]})},e7={display:"flex",justifyContent:"center",alignItems:"center",gap:16,flexDirection:"row","@small":{gap:4,flexDirection:"column"},color:g.rS.colors.textLesser,fontSize:g.rS.fontSizes.h5,letterSpacing:g.rS.letterSpacings.h5,"@medium":{fontSize:g.rS.fontSizes.h6,letterSpacing:g.rS.letterSpacings.h6}},te={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:8},tt=e=>{let{children:t,frontMatter:r,...o}=e;return(0,l.jsxs)(d.Z,{style:tr,...o,children:[(0,l.jsx)(e5,{children:r.title}),(0,l.jsx)(e9,{frontMatter:r})]})},tr={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:8,marginTop:24,marginBottom:40,fontFamily:g.rS.fonts.global},to=e=>{let{children:t,direction:r,postTitle:o,postLink:n,...i}=e;return(0,l.jsx)(d.Z,{as:o?G():void 0,style:td,href:n,children:(0,l.jsxs)(d.Z,{style:tn,css:"next"===r?o?ts:ta:o?tl:ti,as:er,...i,children:[(0,l.jsx)(d.Z,{style:tc,children:"next"===r?o?"->":"x":o?"<-":"x"}),(0,l.jsx)(d.Z,{style:th,children:o||f.pq})]})})},tn={paddingTop:24,paddingBottom:24,borderRadius:16,borderWidth:4,fontSize:g.rS.fontSizes.h5,fontWeight:g.rS.fontWeights.h5,letterSpacing:g.rS.letterSpacings.h5,"@small":{fontSize:g.rS.fontSizes.h6,fontWeight:g.rS.fontWeights.h6,letterSpacing:g.rS.letterSpacings.h6},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},tl={borderColor:g.rS.colors.prev,boxShadow:g.rS.shadows.prevBtn,"&:hover":{backgroundColor:g.rS.colors.prev,fontWeight:g.rS.fontWeights.bold},"&:active":{boxShadow:g.rS.shadows.prevBtnClick}},ti={color:g.rS.colors.textLesser,fontWeight:g.rS.fontWeights.bold,borderColor:g.rS.colors.prevInactive,backgroundColor:g.rS.colors.prevInactive,boxShadow:g.rS.shadows.prevBtn,"&:hover":{backgroundColor:g.rS.colors.prevInactive},"&:active":{boxShadow:g.rS.shadows.prevBtnClick}},ts={borderColor:g.rS.colors.next,boxShadow:g.rS.shadows.nextBtn,"&:hover":{backgroundColor:g.rS.colors.next,fontWeight:g.rS.fontWeights.bold},"&:active":{boxShadow:g.rS.shadows.nextBtnClick}},ta={color:g.rS.colors.textLesser,fontWeight:g.rS.fontWeights.bold,borderColor:g.rS.colors.nextInactive,backgroundColor:g.rS.colors.nextInactive,boxShadow:g.rS.shadows.nextBtn,"&:hover":{backgroundColor:g.rS.colors.nextInactive},"&:active":{boxShadow:g.rS.shadows.nextBtnClick}},tc={fontWeight:g.rS.fontWeights.bold},td={"&:link":{color:g.rS.colors.textGeneral},"&:visited":{color:g.rS.colors.textGeneral}},th={paddingLeft:32,paddingRight:32};var tg=r(1255);let tS=e=>{let{children:t,prevPost:r,nextPost:o,...n}=e;return(0,l.jsxs)(d.Z,{style:tf,...n,children:[(0,l.jsxs)(d.Z,{style:tp,children:[(0,l.jsx)(d.Z,{style:tm,elementName:z.tK}),(0,l.jsx)(d.Z,{style:tu,children:f.UY}),(0,l.jsx)(d.Z,{style:tm,elementName:z.tK})]}),(0,l.jsxs)(d.Z,{style:tx,children:[(0,l.jsx)(to,{direction:"prev",postTitle:null==r?void 0:r.title,postLink:"/".concat(tg.X.yC,"/").concat(null==r?void 0:r.slug)}),(0,l.jsx)(to,{direction:"next",postTitle:null==o?void 0:o.title,postLink:"/".concat(tg.X.yC,"/").concat(null==o?void 0:o.slug)})]})]})},tf={width:"100%",fontFamily:g.rS.fonts.global,color:g.rS.colors.textGeneral},tp={display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",gap:24,fontSize:g.rS.fontSizes.h4,fontWeight:g.rS.fontWeights.h4,letterSpacing:g.rS.letterSpacings.h4},tm={height:0,border:0,borderBottom:4,borderStyle:"solid",borderColor:g.rS.colors.divider25},tu={"&:before":{content:"< ",color:g.rS.colors.textLesser},"&:after":{content:" />",color:g.rS.colors.textLesser}},tx={paddingLeft:32,paddingRight:32,paddingTop:16,paddingBottom:16,display:"flex",flexDirection:"row",alignItems:"center",gap:40,"& > *":{width:"100%"},"@medium":{flexDirection:"column",gap:16,"& > *":{width:"min(100%, 328px)"}}},ty=e=>{let{children:t,frontMatter:r,sourceContent:o,prevPost:n,nextPost:i,...s}=e;return(0,l.jsxs)(c,{children:[(0,l.jsx)(tt,{frontMatter:r}),(0,l.jsxs)(d.Z,{style:tb,children:[(0,l.jsx)(d.Z,{style:tv}),(0,l.jsxs)(d.Z,{style:tj,children:[(0,l.jsx)(e4,{sourceContent:o}),(0,l.jsx)(d.Z,{style:tC,children:(0,l.jsx)(tS,{nextPost:i,prevPost:n})})]}),(0,l.jsx)(d.Z,{style:tw,children:(0,l.jsx)(p,{})})]})]})},tb={display:"grid",gridTemplateAreas:"'post-left post-content post-right'",gridTemplateColumns:"1fr 768px 2.5fr",marginBottom:24,"@larger":{gridTemplateColumns:"1fr 768px 1fr"},"@medium":{gridTemplateColumns:"1fr calc(100vw - 32px) 1fr",paddingLeft:16,paddingRight:16}},tv={gridArea:"post-left","@larger":{display:"none"}},tj={gridArea:"post-content",color:g.rS.colors.textGeneral,fontFamily:g.rS.fonts.content,fontSize:g.rS.fontSizes.h5,fontWeight:g.rS.fontWeights.h5,lineHeight:g.rS.lineHeights.h5,letterSpacing:g.rS.letterSpacings.h5},tw={gridArea:"post-right","@larger":{display:"none"}},tC={display:"flex",justifyContent:"center",alignItems:"center",paddingTop:24,paddingBottom:24};r(8594);let tk=e=>{let{frontMatter:t,sourceContent:r,prevPost:o,nextPost:n}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(ty,{frontMatter:t,sourceContent:r,prevPost:o,nextPost:n})})};var tZ=!0,tB=tk}},function(e){e.O(0,[958,774,888,179],function(){return e(e.s=592)}),_N_E=e.O()}]);