(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{592:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(5989)}])},5989:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return tp},default:function(){return tS}});var o=r(5893),n=r(7294);let l=(0,n.createContext)({headingInfos:[],UpdateHeadingInfoReducer:e=>{}}),i=(e,t)=>{let r=e.findIndex(e=>e.headingID===t.headingID&&e.level===t.level);return -1===r?[...e,t]:e},s=e=>{let{children:t,...r}=e,[s,c]=(0,n.useReducer)(i,[]);return(0,o.jsx)(l.Provider,{value:{headingInfos:s,UpdateHeadingInfoReducer:c},children:t})};var c=r(1533);let a=()=>{let e=(0,n.useContext)(l);if(!e)throw Error("useContent must be used inside of a ContentContext.Provider.");return e};var d=r(5919),g=r(5260);let h=e=>{let{children:t,...r}=e,[l,i]=(0,n.useReducer)((e,t)=>{for(let e=0;e<t.length;++e)if(e<t.length-1){if(-1==t[e]&&1==t[e+1]){t[e]=0;break}}else if(-1==t[e]){t[e]=0;break}return t},[]),{headingInfos:s}=a(),h=()=>{let e=[];for(let r=0;r<s.length;++r){var t;let o=null===(t=s[r].headingRef.current)||void 0===t?void 0:t.getBoundingClientRect(),n=2;o&&(n=o.top<-1?-1:o.bottom>(window.innerHeight||document.documentElement.clientHeight)-68?1:0),e.push(n)}i(e)};(0,n.useEffect)(()=>(window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)));let S=(0,n.useRef)(null),x=(0,n.useMemo)(()=>l&&S.current?[S.current.scrollLeft,S.current.scrollTop]:[0,0],[l]);return(0,n.useLayoutEffect)(()=>{var e;null===(e=S.current)||void 0===e||e.scrollTo(x[0],x[1])},[l,x]),(0,o.jsxs)(c.Z,{ref:S,style:m,...r,children:[(0,o.jsx)(c.Z,{style:f,children:g.PC}),s.map((e,t)=>(0,o.jsx)(c.Z,{style:u,css:{marginTop:1===e.level?4:0,marginLeft:"calc(1.5rem * ".concat(e.level-1,")"),borderWidth:"0px 0px 0px ".concat(0==l[t]?4:0,"px"),fontWeight:0==l[t]?d.rS.fontWeights.tocHighlighted:d.rS.fontWeights.toc,color:0==l[t]?d.rS.colors.tocActive:d.rS.colors.toc},children:(0,o.jsx)(c.Z,{onClick:()=>{var t;let r=null===(t=e.headingRef.current)||void 0===t?void 0:t.getBoundingClientRect();r&&window.scrollTo({top:window.scrollY+r.y,behavior:"smooth"})},style:p,children:(0,o.jsx)(c.Z,{children:e.headingContent})})},t))]})},m={fontFamily:d.rS.fonts.toc,fontWeight:d.rS.fontWeights.toc,fontSize:d.rS.fontSizes.toc,letterSpacing:d.rS.letterSpacings.toc,color:d.rS.colors.toc,borderWidth:2,borderColor:d.rS.colors.tableBorder,borderStyle:"solid",scrollBehavior:"auto",overflow:"auto",userSelect:"none",position:"sticky",top:"10vh",maxHeight:"calc(70vh)",maxWidth:"400px",display:"flex",flexDirection:"column",marginLeft:64,marginRight:64,paddingLeft:32,paddingRight:32,paddingTop:16,paddingBottom:16},f={fontSize:d.rS.fontSizes.tocHeader,fontWeight:d.rS.fontWeights.tocHeader,textAlign:"center",border:0,margin:0,borderBottom:2,marginBottom:16,paddingBottom:8,borderStyle:"dashed",borderColor:d.rS.colors.tocDivider,"&:before":{content:"'< '",color:d.rS.colors.tocDivider},"&:after":{content:"' />'",color:d.rS.colors.tocDivider}},u={display:"flex",borderStyle:"solid",borderColor:d.rS.colors.toc},p={padding:0,paddingLeft:8,paddingRight:8,"&:visisted":{color:d.rS.colors.toc},"&:hover":{color:d.rS.colors.tocActive}};var S=r(3305),x=r(5626);let y=e=>{let{children:t,level:r=1,id:l="",...i}=e,s=(0,n.useRef)(null),{UpdateHeadingInfoReducer:d}=a();return(0,x.Z)(()=>{d({headingContent:t,headingID:l,headingRef:s,level:r})},[]),(0,o.jsxs)(c.Z,{style:B,css:T[r],elementName:"h".concat(r),...i,children:[(0,o.jsx)(c.Z,{style:k,ref:s,id:l}),t]})},b=e=>(0,o.jsx)(y,{level:1,...e}),j=e=>(0,o.jsx)(y,{level:2,...e}),v=e=>(0,o.jsx)(y,{level:3,...e}),w=e=>(0,o.jsx)(y,{level:4,...e}),C=e=>(0,o.jsx)(y,{level:5,...e}),Z=e=>(0,o.jsx)(y,{level:6,...e}),k={position:"absolute",top:-68},B={position:"relative",textTransform:"uppercase"},T={1:{fontSize:d.rS.fontSizes.h1,fontWeight:d.rS.fontWeights.h1,letterSpacing:d.rS.letterSpacings.h1,lineHeight:d.rS.lineHeights.h1,marginTop:16,marginBottom:16},2:{fontSize:d.rS.fontSizes.h2,fontWeight:d.rS.fontWeights.h2,letterSpacing:d.rS.letterSpacings.h2,lineHeight:d.rS.lineHeights.h2,marginTop:16,marginBottom:16},3:{fontSize:d.rS.fontSizes.h3,fontWeight:d.rS.fontWeights.h3,letterSpacing:d.rS.letterSpacings.h3,lineHeight:d.rS.lineHeights.h3,marginTop:16,marginBottom:16},4:{fontSize:d.rS.fontSizes.h4,fontWeight:d.rS.fontWeights.h4,letterSpacing:d.rS.letterSpacings.h4,lineHeight:d.rS.lineHeights.h4,marginTop:16,marginBottom:16},5:{fontSize:d.rS.fontSizes.h5,fontWeight:d.rS.fontWeights.h5,letterSpacing:d.rS.letterSpacings.h5,lineHeight:d.rS.lineHeights.h5,marginTop:8,marginBottom:8},6:{fontSize:d.rS.fontSizes.h6,fontWeight:d.rS.fontWeights.h6,letterSpacing:d.rS.letterSpacings.h6,lineHeight:d.rS.lineHeights.h6,marginTop:8,marginBottom:8}};var W=r(43);let L=e=>{let{children:t,...r}=e;return(0,o.jsx)(c.Z,{style:R,elementName:W.P,...r,children:t})},R={marginTop:12,marginBottom:12},I=e=>{let{children:t,...r}=e;return(0,o.jsx)(c.Z,{style:E,elementName:W.Cs,...r,children:(0,o.jsx)(c.Z,{style:N,children:t})})},E={marginTop:12,marginBottom:12,marginLeft:8,marginRight:8,paddingLeft:32,paddingRight:32,paddingTop:8,paddingBottom:8,borderLeft:8,borderRight:0,borderTop:0,borderBottom:0,borderStyle:"solid",backgroundColor:d.rS.colors.quoteBackground,borderColor:d.rS.colors.quoteLegend,borderRadius:24,boxShadow:d.rS.shadows.quoteBlockShadow},N={opacity:.75};var H=r(1664),z=r.n(H);let D=e=>{let{children:t,...r}=e;return(0,o.jsx)(c.Z,{as:z(),style:A,...r,children:t})},A={color:d.rS.colors.linkText,paddingBottom:4,"&:visited":{color:d.rS.colors.clickedLinkText},movUnderline:"".concat(d.rS.colors.linkTextUnderlineHover," 2px 0px 0px"),"&:active":{color:d.rS.colors.activeLinkText,movUnderlineColor:d.rS.colors.activeLinkTextUnderlineHover}},_=e=>{let{children:t,...r}=e;return(0,o.jsx)(c.Z,{style:M,elementName:W.cO,...r,children:t})},M={fontFamily:d.rS.fonts.code,color:d.rS.colors.codeNoHighlight,paddingLeft:8,paddingRight:8,backgroundColor:d.rS.colors.codeInnerBackground,borderRadius:8,textTransform:"none"},F=(0,n.createContext)({showInner:0,ToggleContentFn:()=>{}}),P=e=>{let{children:t,...r}=e;return(0,o.jsx)(c.Z,{style:Y,...r,children:t})},Y={width:12,height:12,borderRadius:"100%",backgroundColor:d.rS.colors.green},O=e=>{let{children:t,...r}=e;return(0,o.jsx)(c.Z,{style:U,...r,children:t})},U={width:12,height:12,borderRadius:"100%",backgroundColor:d.rS.colors.red},K=e=>{let{children:t,...r}=e;return(0,o.jsx)(c.Z,{style:q,...r,children:t})},q={width:12,height:12,borderRadius:"100%",backgroundColor:d.rS.colors.yellow},X=e=>{let{children:t,...r}=e,{ToggleContentFn:l}=(0,n.useContext)(F);return(0,o.jsxs)(c.Z,{style:V,...r,children:[(0,o.jsx)(O,{onClick:l}),(0,o.jsx)(K,{}),(0,o.jsx)(P,{})]})},V={display:"flex",flexDirection:"row",justifyContent:"left",alignItems:"center",gap:8};var G=r(792),Q=r.n(G),J=r(640),$=r.n(J);let ee=e=>{let{children:t,style:r,...n}=e;return(0,o.jsx)(c.Z,{css:r,style:et,...n,children:t})},et={display:"flex",justifyContent:"center",userSelect:"none",borderRadius:8,borderStyle:"solid","&:hover":{backgroundColor:d.rS.colors.buttonHoverBackground},"&:active":{transform:"translateY(4px)"}};var er=r(1811);let eo=e=>{let{content:t,refreshTime:r=2e3,style:l,...i}=e,[s,a]=(0,n.useState)(!1),d=e=>{e.currentTarget.blur();let r=$()(Q()(t));a(r)};return(0,n.useEffect)(()=>{if(!s)return;let e=setTimeout(()=>{a(!1)},r);return()=>{clearTimeout(e)}},[r,s]),(0,o.jsx)(c.Z,{css:l,as:ee,style:en,onClick:d,...i,children:s?(0,o.jsx)(er.nQ,{style:ei}):(0,o.jsx)(er.Km,{style:el})})},en={borderColor:d.rS.colors.copyBtnBorder,boxShadow:d.rS.shadows.codeCopyBtnNormal,"&:active":{backgroundColor:d.rS.colors.copyBtnHoverBackground,boxShadow:d.rS.shadows.codeCopyBtnClick},width:24,height:24,display:"flex",justifyContent:"center",alignItems:"center"},el={fill:d.rS.colors.copyIcon,width:12,height:12},ei={fill:d.rS.colors.copiedIcon,width:12,height:12},es=e=>{let{content:t,...r}=e;return(0,o.jsx)(c.Z,{style:ec,...r,children:(0,o.jsx)(eo,{content:t})})},ec={display:"flex",flexDirection:"row",justifyContent:"right",alignItems:"center"},ea=e=>{let{languageName:t=""}=e;return(0,o.jsx)(c.Z,{style:ed,children:t})},ed={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",fontSize:d.rS.fontSizes.codeLang,letterSpacing:d.rS.letterSpacings.codeLang,color:d.rS.colors.codeLang,fontWeight:d.rS.fontWeights.codeLang,textTransform:"capitalize"},eg=e=>{let{content:t,className:r,...n}=e,l=null==r?void 0:r.split(" "),i=null==l?void 0:l.find(e=>/language-*/.test(e)),s=i?i.slice(9):"";return(0,o.jsxs)(c.Z,{style:eh,...n,children:[(0,o.jsx)(c.Z,{as:X,style:em}),(0,o.jsx)(c.Z,{as:ea,style:ef,languageName:s}),(0,o.jsx)(c.Z,{as:es,style:eu,content:t})]})},eh={display:"grid",gridTemplateAreas:"'codeblock-header-ifhone-btn codeblock-header-lang-area codeblock-header-action-btn'",gridTemplateColumns:"1fr 1fr 1fr",paddingLeft:16,paddingRight:16},em={gridArea:"codeblock-header-ifhone-btn"},ef={gridArea:"codeblock-header-lang-area"},eu={gridArea:"codeblock-header-action-btn"},ep=e=>{let{children:t,...r}=e;return(0,o.jsx)(c.Z,{style:eS,...r,children:t})},eS={overflow:"auto",paddingBottom:8,scrollbarWidth:"thin",color:d.rS.colors.codeHighlight,marginLeft:4,".token":{"&.keyword":{fontWeight:"bold"},"&.comment, &.prolog, &.cdata":{color:d.rS.colors.codeComment},"&.delimiter, &.boolean, &.keyword, &.selector, &.important, &.doctype, &.atrule, &.url":{color:d.rS.colors.codeKeyword},"&.tag, &.builtin, &.regex":{color:d.rS.colors.codeNamespace},"&.property, &.variable, &.attr-value, &.class-name, &.string, &.char":{color:d.rS.colors.codeVariable},"&.literal-property, &.attr-name":{color:d.rS.colors.codeAttribute},"&.function":{color:d.rS.colors.codeFunction},"&.tag .punctuation, &.attr-value .punctuation":{color:d.rS.colors.codePunctuation},"&.operator":{color:d.rS.colors.codeOperator},"&.boolean, &.number, &.constant":{color:d.rS.colors.codeLiteral},"&.inserted":{color:d.rS.colors.codeAddition},"&.deleted":{color:d.rS.colors.codeDeletion},"&.url":{textDecoration:"underline"},"&.bold, &.important":{fontWeight:"bold"},"&.italic":{fontStyle:"italic"}}},ex=e=>{let{children:t,...r}=e,{showInner:l}=(0,n.useContext)(F);return(0,o.jsx)(c.Z,{children:(0,o.jsx)(c.Z,{style:ey,css:{display:l?"":"none"},...r,children:(0,o.jsx)(ep,{children:t})})})},ey={fontSize:"".concat(d.rS.fontSizes.code," !important"),letterSpacing:d.rS.letterSpacings.code,lineHeight:d.rS.lineHeights.code,display:"flex",flexDirection:"row",gap:8},eb=e=>{let{children:t,className:r,...l}=e,[i,s]=(0,n.useState)(1),a=()=>{s(i?0:1)};return(0,o.jsx)(F.Provider,{value:{showInner:i,ToggleContentFn:a},children:(0,o.jsx)(c.Z,{style:ej,elementName:W.cO,...l,children:(0,o.jsxs)(c.Z,{style:ev,children:[(0,o.jsx)(eg,{content:t,className:r}),(0,o.jsx)(ex,{children:t})]})})})},ej={fontFamily:d.rS.fonts.code,maxWidth:"100%"},ev={marginTop:16,marginBottom:16,marginLeft:32,marginRight:32,borderRadius:16,display:"flex",flexDirection:"column",padding:16,gap:8,backgroundImage:"".concat(d.rS.colors.codeBlockBackground),boxShadow:d.rS.shadows.codeBlockShadow,pointerEvents:"none","*":{pointerEvents:"auto"}},ew=e=>{let{children:t,...r}=e;return(0,o.jsx)(c.Z,{style:eC,elementName:W.UL,...r,children:t})},eC={position:"relative",margin:0,marginLeft:48,marginRight:48,listStyle:"none",counterReset:"ListItemNo",["& ".concat(W.LI)]:{["".concat(W.LI,":before")]:{content:"◦"}},["& ".concat(W.LI,":before")]:{content:"•",color:d.rS.colors.listHeading,fontWeight:d.rS.fontWeights.listHeading}},eZ=e=>{let{children:t,...r}=e;return(0,o.jsx)(c.Z,{style:ek,elementName:W.OL,...r,children:t})},ek={position:"relative",margin:0,marginLeft:48,marginRight:48,listStyle:"none",counterReset:"ListItemNo",["& ".concat(W.LI)]:{counterIncrement:"ListItemNo"},["& ".concat(W.LI,":before")]:{content:'counters(ListItemNo, ".")"."',color:d.rS.colors.listHeading,fontWeight:d.rS.fontWeights.listHeading}},eB=e=>{let{children:t,...r}=e;return(0,o.jsx)(c.Z,{style:eT,elementName:W.LI,...r,children:(0,o.jsx)(c.Z,{elementName:W.tK,style:eW,children:t})})},eT={display:"flex",flexDirection:"row",gap:8,marginBottom:8,marginTop:8},eW={width:"100%","&> :first-child":{marginTop:0}};var eL=r(2654);let eR=e=>{let{children:t,alt:r,width:n,height:l,...i}=e;return(0,o.jsxs)(c.Z,{style:eI,children:[(0,o.jsx)(c.Z,{elementName:W.MY,style:eE,alt:r,css:{width:n,height:l},onError:e=>{e.target.src=eL.bR},...i,children:t}),(()=>{if(r)return(0,o.jsx)(c.Z,{style:eN,children:r})})()]})},eI={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:0,marginTop:32,marginBottom:32,gap:8},eE={maxWidth:"90%",borderRadius:16},eN={fontSize:d.rS.fontSizes.imgalt,fontWeight:d.rS.fontWeights.imgalt,borderWidth:2,borderStyle:"dashed",borderRadius:8,padding:8,borderColor:"#00000000","&:hover":{borderColor:d.rS.colors.grey}},eH=e=>{let{children:t,...r}=e;return(0,o.jsx)(c.Z,{style:ez,elementName:W.tK,...r,children:t})},ez={overflowX:"auto"},eD=e=>{let{children:t,...r}=e;return(0,o.jsx)(c.Z,{style:eA,elementName:W.bg,...r,children:t})},eA={overflowX:"auto",border:0,borderTop:2,borderBottom:2,borderStyle:"dashed",borderColor:d.rS.colors.mathDivider},e_=e=>{let{children:t,...r}=e;return(0,o.jsx)(c.Z,{style:eM,children:(0,o.jsx)(c.Z,{style:eF,elementName:W.Fe,...r,children:t})})},eM={wordBreak:"break-all",overflowWrap:"break-word",display:"flex",alignItems:"center",justifyContent:"center",marginTop:32,marginBottom:32},eF={maxWidth:"100%",marginLeft:16,marginRight:16,borderCollapse:"collapse",["".concat(W.TH,", ").concat(W.TD)]:{border:"4px solid",borderColor:d.rS.colors.tableBorder,padding:8}};var eP=(e=>{let t={};for(let r of Object.keys(e))t[r]=t=>{let{children:n,className:l,...i}=t,s=l?l.split(" "):[];for(let t of e[r]){let e=!0;if(t.classNames){for(let r of t.classNames)if(!s.includes(r)){e=!1;break}}if(e)return(0,o.jsx)(c.Z,{as:t.replacedElement,className:l,...i,children:n})}return(0,o.jsx)(c.Z,{elementName:r,className:l,...i,children:n})};return t})({h1:[{replacedElement:b}],h2:[{replacedElement:j}],h3:[{replacedElement:v}],h4:[{replacedElement:w}],h5:[{replacedElement:C}],h6:[{replacedElement:Z}],p:[{replacedElement:L}],blockquote:[{replacedElement:I}],a:[{replacedElement:D}],code:[{replacedElement:eb,classNames:["code-highlight"]},{replacedElement:_}],ul:[{replacedElement:ew}],ol:[{replacedElement:eZ}],img:[{replacedElement:eR}],span:[{replacedElement:eH,classNames:["math-inline","math"]}],div:[{replacedElement:eD,classNames:["math-display","math"]}],li:[{replacedElement:eB}],table:[{replacedElement:e_}],BlogImg:[{replacedElement:eR}]});let eY=e=>{let{sourceContent:t}=e;return(0,o.jsx)(S.R,{...t,components:eP})};var eO=(0,n.memo)(eY);let eU=e=>{let{children:t,...r}=e;return(0,o.jsx)(c.Z,{style:eK,...r,children:t})},eK={color:d.rS.colors.title,fontSize:d.rS.fontSizes.title,fontWeight:d.rS.fontWeights.title,letterSpacing:d.rS.letterSpacings.title,textDecoration:"underline",textAlign:"center"};var eq=r(2051);let eX=()=>{let e=(0,n.useContext)(eq.V);if(!e)throw Error("useLayout must be used inside of a LayoutProvider.");return e};var eV=r(7484),eG=r.n(eV),eQ=r(178),eJ=r.n(eQ),e$=r(9387),e0=r.n(e$),e1=r(4110),e2=r.n(e1),e6=r(6176),e8=r.n(e6),e4=r(8734),e5=r.n(e4);r(5054),r(7553),r(8964);var e3=r(3015);let e9=(e,t)=>(eG().extend(eJ()),eG().extend(e0()),eG().extend(e2()),eG().extend(e8()),eG().extend(e5()),eG()(t).tz("Antarctica/Davis").locale(e).clone()),e7=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e3.NE,r=arguments.length>2?arguments[2]:void 0;return e9(t,e).format(r)},te=e=>{let{children:t,dateStr:r,format:n="D MMMM, YYYY",...l}=e,{currentLocale:i}=eX();return(0,o.jsx)(c.Z,{style:tt,...l,children:e7(r,i,n)})},tt={},tr=e=>{let{children:t,frontMatter:r,...n}=e;return(0,o.jsxs)(c.Z,{style:to,children:[(0,o.jsxs)(c.Z,{style:tn,children:[(0,o.jsx)(er.Qu,{style:{fill:d.rS.colors.metadataIcon,width:16,height:16}}),(0,o.jsx)(te,{dateStr:r.date})]}),(0,o.jsxs)(c.Z,{style:tn,children:[(0,o.jsx)(er.Zi,{style:{fill:d.rS.colors.metadataIcon,width:16,height:16}}),"".concat(r.noWords," ").concat(g.Kw)]}),(0,o.jsxs)(c.Z,{style:tn,children:[(0,o.jsx)(er.T3,{style:{fill:d.rS.colors.metadataIcon,width:16,height:16}}),"".concat(r.minsRead," ").concat(g.G8)]})]})},to={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:16,color:d.rS.colors.metadata,fontSize:d.rS.fontSizes.metadata,letterSpacing:d.rS.letterSpacings.metadata},tn={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:8},tl=e=>{let{children:t,coverImageURL:r,...n}=e;return(0,o.jsx)(c.Z,{style:ti,children:(0,o.jsx)(c.Z,{style:ts,elementName:W.MY,src:r||eL.V9,onError:e=>{e.target.src=eL.bR},...n,children:t})})},ti={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:0,marginTop:16,gap:8,backgroundImage:d.rS.colors.gradient,borderRadius:16,width:"75%",padding:4},ts={backgroundColor:d.rS.colors.pageBackground,borderRadius:16,width:"100%"},tc=e=>{let{children:t,frontMatter:r,...n}=e;return(0,o.jsxs)(c.Z,{style:ta,...n,children:[(0,o.jsx)(tl,{coverImageURL:r.coverImage}),(0,o.jsx)(eU,{children:r.title}),(0,o.jsx)(tr,{frontMatter:r})]})},ta={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:8,marginTop:24,marginBottom:40,fontFamily:d.rS.fonts.title},td=e=>{let{children:t,frontMatter:r,sourceContent:n,...l}=e;return(0,o.jsxs)(s,{children:[(0,o.jsx)(tc,{frontMatter:r}),(0,o.jsxs)(c.Z,{style:tg,children:[(0,o.jsx)(c.Z,{style:th}),(0,o.jsx)(c.Z,{style:tm,children:(0,o.jsx)(eO,{sourceContent:n})}),(0,o.jsx)(c.Z,{style:tf,children:(0,o.jsx)(h,{})})]})]})},tg={display:"grid",gridTemplateAreas:"'post-left post-content post-right'",gridTemplateColumns:"1fr 792px 2.5fr",marginBottom:24},th={gridArea:"post-left"},tm={gridArea:"post-content",color:d.rS.colors.content,fontFamily:d.rS.fonts.content,fontSize:d.rS.fontSizes.content,fontWeight:d.rS.fontWeights.content,lineHeight:d.rS.lineHeights.content,letterSpacing:d.rS.letterSpacings.content},tf={gridArea:"post-right"};r(8594);let tu=e=>{let{frontMatter:t,sourceContent:r}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(td,{frontMatter:t,sourceContent:r})})};var tp=!0,tS=tu}},function(e){e.O(0,[958,774,888,179],function(){return e(e.s=592)}),_N_E=e.O()}]);