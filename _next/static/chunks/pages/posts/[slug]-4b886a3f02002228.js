(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{640:function(e,t,r){"use strict";var o=r(1742),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,l,i,a,c,s,d,g,u=!1;t||(t={}),i=t.debug||!1;try{if(c=o(),s=document.createRange(),d=document.getSelection(),(g=document.createElement("span")).textContent=e,g.ariaHidden="true",g.style.all="unset",g.style.position="fixed",g.style.top=0,g.style.clip="rect(0, 0, 0, 0)",g.style.whiteSpace="pre",g.style.webkitUserSelect="text",g.style.MozUserSelect="text",g.style.msUserSelect="text",g.style.userSelect="text",g.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=n[t.format]||n.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(g),s.selectNodeContents(g),d.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");u=!0}catch(o){i&&console.error("unable to copy using execCommand: ",o),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(o){i&&console.error("unable to copy using clipboardData: ",o),i&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",l=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",a=r.replace(/#{\s*key\s*}/g,l),window.prompt(a,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(s):d.removeAllRanges()),g&&document.body.removeChild(g),c()}return u}},592:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(1218)}])},1218:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return tn},default:function(){return tl}});var o={};r.r(o),r.d(o,{MDXContext:function(){return y},MDXProvider:function(){return w},useMDXComponents:function(){return v},withMDXComponents:function(){return b}});var n=r(5893),l=r(7294);let i=(0,l.createContext)({headingInfos:[],UpdateHeadingInfoReducer:e=>{}}),a=(e,t)=>{let r=e.findIndex(e=>e.headingID===t.headingID&&e.level===t.level);return -1===r?[...e,t]:e},c=e=>{let{children:t,...r}=e,[o,c]=(0,l.useReducer)(a,[]);return(0,n.jsx)(i.Provider,{value:{headingInfos:o,UpdateHeadingInfoReducer:c},children:t})};var s=r(1533);let d=()=>{let e=(0,l.useContext)(i);if(!e)throw Error("useContent must be used inside of a ContentContext.Provider.");return e};var g=r(5919),u=r(5260);let m=e=>{let{children:t,...r}=e,[o,i]=(0,l.useReducer)((e,t)=>{for(let e=0;e<t.length;++e)if(e<t.length-1){if(-1==t[e]&&1==t[e+1]){t[e]=0;break}}else if(-1==t[e]){t[e]=0;break}return t},[]),{headingInfos:a}=d(),c=()=>{let e=[];for(let r=0;r<a.length;++r){var t;let o=null===(t=a[r].headingRef.current)||void 0===t?void 0:t.getBoundingClientRect(),n=2;o&&(n=o.top<-1?-1:o.bottom>(window.innerHeight||document.documentElement.clientHeight)-68?1:0),e.push(n)}i(e)};(0,l.useEffect)(()=>(window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)));let m=(0,l.useRef)(null),x=(0,l.useMemo)(()=>o&&m.current?[m.current.scrollLeft,m.current.scrollTop]:[0,0],[o]);return(0,l.useLayoutEffect)(()=>{var e;null===(e=m.current)||void 0===e||e.scrollTo(x[0],x[1])},[o,x]),(0,n.jsxs)(s.Z,{ref:m,style:f,...r,children:[(0,n.jsx)(s.Z,{style:h,children:u.PC}),a.map((e,t)=>(0,n.jsx)(s.Z,{style:p,css:{marginTop:1===e.level?4:0,marginLeft:"calc(1.5rem * ".concat(e.level-1,")"),borderWidth:"0px 0px 0px ".concat(0==o[t]?4:0,"px"),fontWeight:0==o[t]?g.rS.fontWeights.tocHighlighted:g.rS.fontWeights.toc,color:0==o[t]?g.rS.colors.tocActive:g.rS.colors.toc},children:(0,n.jsx)(s.Z,{onClick:()=>{var t;let r=null===(t=e.headingRef.current)||void 0===t?void 0:t.getBoundingClientRect();r&&window.scrollTo({top:window.scrollY+r.y,behavior:"smooth"})},style:S,children:(0,n.jsx)(s.Z,{children:e.headingContent})})},t))]})},f={fontFamily:g.rS.fonts.toc,fontWeight:g.rS.fontWeights.toc,fontSize:g.rS.fontSizes.toc,letterSpacing:g.rS.letterSpacings.toc,color:g.rS.colors.toc,borderWidth:2,borderColor:g.rS.colors.tableBorder,borderStyle:"solid",scrollBehavior:"auto",overflow:"auto",userSelect:"none",position:"sticky",top:"10vh",maxHeight:"calc(70vh)",maxWidth:"400px",display:"flex",flexDirection:"column",marginLeft:64,marginRight:64,paddingLeft:32,paddingRight:32,paddingTop:16,paddingBottom:16},h={fontSize:g.rS.fontSizes.tocHeader,fontWeight:g.rS.fontWeights.tocHeader,textAlign:"center",border:0,margin:0,borderBottom:2,marginBottom:16,paddingBottom:8,borderStyle:"dashed",borderColor:g.rS.colors.tocDivider,"&:before":{content:"'< '",color:g.rS.colors.tocDivider},"&:after":{content:"' />'",color:g.rS.colors.tocDivider}},p={display:"flex",borderStyle:"solid",borderColor:g.rS.colors.toc},S={padding:0,paddingLeft:8,paddingRight:8,"&:visisted":{color:g.rS.colors.toc},"&:hover":{color:g.rS.colors.tocActive}};var x=r(2746);let y=l.createContext({});function b(e){return function(t){let r=v(t.components);return l.createElement(e,{...t,allComponents:r})}}function v(e){let t=l.useContext(y);return l.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let j={};function w({components:e,children:t,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||j:v(e),l.createElement(y.Provider,{value:o},t)}function C({compiledSource:e,frontmatter:t,scope:r,components:n={},lazy:i}){let[a,c]=(0,l.useState)(!i||"undefined"==typeof window);(0,l.useEffect)(()=>{if(i){let e=window.requestIdleCallback(()=>{c(!0)});return()=>window.cancelIdleCallback(e)}},[]);let s=(0,l.useMemo)(()=>{let n=Object.assign({opts:{...o,...x.jsxRuntime}},{frontmatter:t},r),l=Object.keys(n),i=Object.values(n),a=Reflect.construct(Function,l.concat(`${e}`));return a.apply(a,i).default},[r,e]);if(!a)return l.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let d=l.createElement(w,{components:n},l.createElement(s,null));return i?l.createElement("div",null,d):d}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var k=r(5626);let Z=e=>{let{children:t,level:r=1,id:o="",...i}=e,a=(0,l.useRef)(null),{UpdateHeadingInfoReducer:c}=d();return(0,k.Z)(()=>{c({headingContent:t,headingID:o,headingRef:a,level:r})},[]),(0,n.jsxs)(s.Z,{style:L,css:N[r],elementName:"h".concat(r),...i,children:[(0,n.jsx)(s.Z,{style:W,ref:a,id:o}),t]})},E=e=>(0,n.jsx)(Z,{level:1,...e}),R=e=>(0,n.jsx)(Z,{level:2,...e}),T=e=>(0,n.jsx)(Z,{level:3,...e}),I=e=>(0,n.jsx)(Z,{level:4,...e}),D=e=>(0,n.jsx)(Z,{level:5,...e}),B=e=>(0,n.jsx)(Z,{level:6,...e}),W={position:"absolute",top:-68},L={position:"relative",textTransform:"uppercase"},N={1:{fontSize:g.rS.fontSizes.h1,fontWeight:g.rS.fontWeights.h1,letterSpacing:g.rS.letterSpacings.h1,lineHeight:g.rS.lineHeights.h1,marginTop:16,marginBottom:16},2:{fontSize:g.rS.fontSizes.h2,fontWeight:g.rS.fontWeights.h2,letterSpacing:g.rS.letterSpacings.h2,lineHeight:g.rS.lineHeights.h2,marginTop:16,marginBottom:16},3:{fontSize:g.rS.fontSizes.h3,fontWeight:g.rS.fontWeights.h3,letterSpacing:g.rS.letterSpacings.h3,lineHeight:g.rS.lineHeights.h3,marginTop:16,marginBottom:16},4:{fontSize:g.rS.fontSizes.h4,fontWeight:g.rS.fontWeights.h4,letterSpacing:g.rS.letterSpacings.h4,lineHeight:g.rS.lineHeights.h4,marginTop:16,marginBottom:16},5:{fontSize:g.rS.fontSizes.h5,fontWeight:g.rS.fontWeights.h5,letterSpacing:g.rS.letterSpacings.h5,lineHeight:g.rS.lineHeights.h5,marginTop:8,marginBottom:8},6:{fontSize:g.rS.fontSizes.h6,fontWeight:g.rS.fontWeights.h6,letterSpacing:g.rS.letterSpacings.h6,lineHeight:g.rS.lineHeights.h6,marginTop:8,marginBottom:8}};var H=r(43);let z=e=>{let{children:t,...r}=e;return(0,n.jsx)(s.Z,{style:A,elementName:H.P,...r,children:t})},A={marginTop:12,marginBottom:12},_=e=>{let{children:t,...r}=e;return(0,n.jsx)(s.Z,{style:M,elementName:H.Cs,...r,children:(0,n.jsx)(s.Z,{style:O,children:t})})},M={marginTop:12,marginBottom:12,marginLeft:8,marginRight:8,paddingLeft:32,paddingRight:32,paddingTop:8,paddingBottom:8,borderLeft:8,borderRight:0,borderTop:0,borderBottom:0,borderStyle:"solid",backgroundColor:g.rS.colors.quoteBackground,borderColor:g.rS.colors.quoteLegend,borderRadius:24,boxShadow:g.rS.shadows.quoteBlockShadow},O={opacity:.75};var P=r(1664),U=r.n(P);let F=e=>{let{children:t,...r}=e;return(0,n.jsx)(s.Z,{as:U(),style:X,...r,children:t})},X={color:g.rS.colors.linkText,paddingBottom:4,"&:visited":{color:g.rS.colors.clickedLinkText},movUnderline:"".concat(g.rS.colors.linkTextUnderlineHover," 2px 0px 0px"),"&:active":{color:g.rS.colors.activeLinkText,movUnderlineColor:g.rS.colors.activeLinkTextUnderlineHover}},q=e=>{let{children:t,...r}=e;return(0,n.jsx)(s.Z,{style:K,elementName:H.cO,...r,children:t})},K={fontFamily:g.rS.fonts.code,color:g.rS.colors.codeNoHighlight,paddingLeft:8,paddingRight:8,backgroundColor:g.rS.colors.codeInnerBackground,borderRadius:8,textTransform:"none"},Y=(0,l.createContext)({showInner:0,ToggleContentFn:()=>{}}),G=e=>{let{children:t,...r}=e;return(0,n.jsx)(s.Z,{style:Q,...r,children:t})},Q={width:12,height:12,borderRadius:"100%",backgroundColor:g.rS.colors.green},V=e=>{let{children:t,...r}=e;return(0,n.jsx)(s.Z,{style:$,...r,children:t})},$={width:12,height:12,borderRadius:"100%",backgroundColor:g.rS.colors.red},J=e=>{let{children:t,...r}=e;return(0,n.jsx)(s.Z,{style:ee,...r,children:t})},ee={width:12,height:12,borderRadius:"100%",backgroundColor:g.rS.colors.yellow},et=e=>{let{children:t,...r}=e,{ToggleContentFn:o}=(0,l.useContext)(Y);return(0,n.jsxs)(s.Z,{style:er,...r,children:[(0,n.jsx)(V,{onClick:o}),(0,n.jsx)(J,{}),(0,n.jsx)(G,{})]})},er={display:"flex",flexDirection:"row",justifyContent:"left",alignItems:"center",gap:8};var eo=r(792),en=r.n(eo),el=r(640),ei=r.n(el);let ea=e=>{let{children:t,style:r,...o}=e;return(0,n.jsx)(s.Z,{css:r,style:ec,...o,children:t})},ec={display:"flex",justifyContent:"center",userSelect:"none",borderRadius:8,borderStyle:"solid","&:hover":{backgroundColor:g.rS.colors.buttonHoverBackground},"&:active":{transform:"translateY(4px)"}};var es=r(1811);let ed=e=>{let{content:t,refreshTime:r=2e3,style:o,...i}=e,[a,c]=(0,l.useState)(!1),d=e=>{e.currentTarget.blur();let r=ei()(en()(t));c(r)};return(0,l.useEffect)(()=>{if(!a)return;let e=setTimeout(()=>{c(!1)},r);return()=>{clearTimeout(e)}},[r,a]),(0,n.jsx)(s.Z,{css:o,as:ea,style:eg,onClick:d,...i,children:a?(0,n.jsx)(es.nQ,{style:em}):(0,n.jsx)(es.Km,{style:eu})})},eg={borderColor:g.rS.colors.copyBtnBorder,boxShadow:g.rS.shadows.codeCopyBtnNormal,"&:active":{backgroundColor:g.rS.colors.copyBtnHoverBackground,boxShadow:g.rS.shadows.codeCopyBtnClick},width:24,height:24,display:"flex",justifyContent:"center",alignItems:"center"},eu={fill:g.rS.colors.copyIcon,width:12,height:12},em={fill:g.rS.colors.copiedIcon,width:12,height:12},ef=e=>{let{content:t,...r}=e;return(0,n.jsx)(s.Z,{style:eh,...r,children:(0,n.jsx)(ed,{content:t})})},eh={display:"flex",flexDirection:"row",justifyContent:"right",alignItems:"center"},ep=e=>{let{languageName:t=""}=e;return(0,n.jsx)(s.Z,{style:eS,children:t})},eS={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",fontSize:g.rS.fontSizes.codeLang,letterSpacing:g.rS.letterSpacings.codeLang,color:g.rS.colors.codeLang,fontWeight:g.rS.fontWeights.codeLang,textTransform:"capitalize"},ex=e=>{let{content:t,className:r,...o}=e,l=null==r?void 0:r.split(" "),i=null==l?void 0:l.find(e=>/language-*/.test(e)),a=i?i.slice(9):"";return(0,n.jsxs)(s.Z,{style:ey,...o,children:[(0,n.jsx)(s.Z,{as:et,style:eb}),(0,n.jsx)(s.Z,{as:ep,style:ev,languageName:a}),(0,n.jsx)(s.Z,{as:ef,style:ej,content:t})]})},ey={display:"grid",gridTemplateAreas:"'codeblock-header-ifhone-btn codeblock-header-lang-area codeblock-header-action-btn'",gridTemplateColumns:"1fr 1fr 1fr",paddingLeft:16,paddingRight:16},eb={gridArea:"codeblock-header-ifhone-btn"},ev={gridArea:"codeblock-header-lang-area"},ej={gridArea:"codeblock-header-action-btn"},ew=e=>{let{children:t,...r}=e;return(0,n.jsx)(s.Z,{style:eC,...r,children:t})},eC={overflow:"auto",paddingBottom:8,scrollbarWidth:"thin",color:g.rS.colors.codeHighlight,marginLeft:4,".token":{"&.keyword":{fontWeight:"bold"},"&.comment, &.prolog, &.cdata":{color:g.rS.colors.codeComment},"&.delimiter, &.boolean, &.keyword, &.selector, &.important, &.doctype, &.atrule, &.url":{color:g.rS.colors.codeKeyword},"&.tag, &.builtin, &.regex":{color:g.rS.colors.codeNamespace},"&.property, &.variable, &.attr-value, &.class-name, &.string, &.char":{color:g.rS.colors.codeVariable},"&.literal-property, &.attr-name":{color:g.rS.colors.codeAttribute},"&.function":{color:g.rS.colors.codeFunction},"&.tag .punctuation, &.attr-value .punctuation":{color:g.rS.colors.codePunctuation},"&.operator":{color:g.rS.colors.codeOperator},"&.boolean, &.number, &.constant":{color:g.rS.colors.codeLiteral},"&.inserted":{color:g.rS.colors.codeAddition},"&.deleted":{color:g.rS.colors.codeDeletion},"&.url":{textDecoration:"underline"},"&.bold, &.important":{fontWeight:"bold"},"&.italic":{fontStyle:"italic"}}},ek=e=>{let{children:t,...r}=e,{showInner:o}=(0,l.useContext)(Y);return(0,n.jsx)(s.Z,{children:(0,n.jsx)(s.Z,{style:eZ,css:{display:o?"":"none"},...r,children:(0,n.jsx)(ew,{children:t})})})},eZ={fontSize:"".concat(g.rS.fontSizes.code," !important"),letterSpacing:g.rS.letterSpacings.code,lineHeight:g.rS.lineHeights.code,display:"flex",flexDirection:"row",gap:8},eE=e=>{let{children:t,className:r,...o}=e,[i,a]=(0,l.useState)(1),c=()=>{a(i?0:1)};return(0,n.jsx)(Y.Provider,{value:{showInner:i,ToggleContentFn:c},children:(0,n.jsx)(s.Z,{style:eR,elementName:H.cO,...o,children:(0,n.jsxs)(s.Z,{style:eT,children:[(0,n.jsx)(ex,{content:t,className:r}),(0,n.jsx)(ek,{children:t})]})})})},eR={fontFamily:g.rS.fonts.code,maxWidth:"100%"},eT={marginTop:16,marginBottom:16,marginLeft:32,marginRight:32,borderRadius:16,display:"flex",flexDirection:"column",padding:16,gap:8,backgroundImage:"".concat(g.rS.colors.codeBlockBackground),boxShadow:g.rS.shadows.codeBlockShadow,pointerEvents:"none","*":{pointerEvents:"auto"}},eI=e=>{let{children:t,...r}=e;return(0,n.jsx)(s.Z,{style:eD,elementName:H.UL,...r,children:t})},eD={position:"relative",margin:0,marginLeft:48,marginRight:48,listStyle:"none",counterReset:"ListItemNo",["& ".concat(H.LI)]:{["".concat(H.LI,":before")]:{content:"◦"}},["& ".concat(H.LI,":before")]:{content:"•",color:g.rS.colors.listHeading,fontWeight:g.rS.fontWeights.listHeading}},eB=e=>{let{children:t,...r}=e;return(0,n.jsx)(s.Z,{style:eW,elementName:H.OL,...r,children:t})},eW={position:"relative",margin:0,marginLeft:48,marginRight:48,listStyle:"none",counterReset:"ListItemNo",["& ".concat(H.LI)]:{counterIncrement:"ListItemNo"},["& ".concat(H.LI,":before")]:{content:'counters(ListItemNo, ".")"."',color:g.rS.colors.listHeading,fontWeight:g.rS.fontWeights.listHeading}},eL=e=>{let{children:t,...r}=e;return(0,n.jsx)(s.Z,{style:eN,elementName:H.LI,...r,children:(0,n.jsx)(s.Z,{elementName:H.tK,style:eH,children:t})})},eN={display:"flex",flexDirection:"row",gap:8,marginBottom:8,marginTop:8},eH={width:"100%","&> :first-child":{marginTop:0}};var ez=r(2654);let eA=e=>{let{children:t,alt:r,width:o,height:l,...i}=e;return(0,n.jsxs)(s.Z,{style:e_,children:[(0,n.jsx)(s.Z,{elementName:H.MY,style:eM,alt:r,css:{width:o,height:l},onError:e=>{e.target.src=ez.bR},...i,children:t}),(()=>{if(r)return(0,n.jsx)(s.Z,{style:eO,children:r})})()]})},e_={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:0,marginTop:32,marginBottom:32,gap:8},eM={maxWidth:"90%",borderRadius:16},eO={fontSize:g.rS.fontSizes.imgalt,fontWeight:g.rS.fontWeights.imgalt,borderWidth:2,borderStyle:"dashed",borderRadius:8,padding:8,borderColor:"#00000000","&:hover":{borderColor:g.rS.colors.grey}},eP=e=>{let{children:t,...r}=e;return(0,n.jsx)(s.Z,{style:eU,elementName:H.tK,...r,children:t})},eU={overflowX:"auto"},eF=e=>{let{children:t,...r}=e;return(0,n.jsx)(s.Z,{style:eX,elementName:H.bg,...r,children:t})},eX={overflowX:"auto",border:0,borderTop:2,borderBottom:2,borderStyle:"dashed",borderColor:g.rS.colors.mathDivider},eq=e=>{let{children:t,...r}=e;return(0,n.jsx)(s.Z,{style:eK,children:(0,n.jsx)(s.Z,{style:eY,elementName:H.Fe,...r,children:t})})},eK={wordBreak:"break-all",overflowWrap:"break-word",display:"flex",alignItems:"center",justifyContent:"center",marginTop:32,marginBottom:32},eY={maxWidth:"100%",marginLeft:16,marginRight:16,borderCollapse:"collapse",["".concat(H.TH,", ").concat(H.TD)]:{border:"4px solid",borderColor:g.rS.colors.tableBorder,padding:8}};var eG=(e=>{let t={};for(let r of Object.keys(e))t[r]=t=>{let{children:o,className:l,...i}=t,a=l?l.split(" "):[];for(let t of e[r]){let e=!0;if(t.classNames){for(let r of t.classNames)if(!a.includes(r)){e=!1;break}}if(e)return(0,n.jsx)(s.Z,{as:t.replacedElement,className:l,...i,children:o})}return(0,n.jsx)(s.Z,{elementName:r,className:l,...i,children:o})};return t})({h1:[{replacedElement:E}],h2:[{replacedElement:R}],h3:[{replacedElement:T}],h4:[{replacedElement:I}],h5:[{replacedElement:D}],h6:[{replacedElement:B}],p:[{replacedElement:z}],blockquote:[{replacedElement:_}],a:[{replacedElement:F}],code:[{replacedElement:eE,classNames:["code-highlight"]},{replacedElement:q}],ul:[{replacedElement:eI}],ol:[{replacedElement:eB}],img:[{replacedElement:eA}],span:[{replacedElement:eP,classNames:["math-inline","math"]}],div:[{replacedElement:eF,classNames:["math-display","math"]}],li:[{replacedElement:eL}],table:[{replacedElement:eq}],BlogImg:[{replacedElement:eA}]});let eQ=e=>{let{sourceContent:t}=e;return(0,n.jsx)(C,{...t,components:eG})};var eV=(0,l.memo)(eQ);let e$=e=>{let{children:t,...r}=e;return(0,n.jsx)(s.Z,{style:eJ,...r,children:t})},eJ={color:g.rS.colors.title,fontSize:g.rS.fontSizes.title,fontWeight:g.rS.fontWeights.title,letterSpacing:g.rS.letterSpacings.title,textDecoration:"underline",textAlign:"center"},e0=e=>{let{children:t,frontMatter:r,...o}=e;return(0,n.jsxs)(s.Z,{style:e1,children:[(0,n.jsxs)(s.Z,{style:e2,children:[(0,n.jsx)(es.Qu,{style:{fill:g.rS.colors.metadataIcon,width:16,height:16}}),r.date]}),(0,n.jsxs)(s.Z,{style:e2,children:[(0,n.jsx)(es.Zi,{style:{fill:g.rS.colors.metadataIcon,width:16,height:16}}),"".concat(r.noWords," ").concat(u.Kw)]}),(0,n.jsxs)(s.Z,{style:e2,children:[(0,n.jsx)(es.T3,{style:{fill:g.rS.colors.metadataIcon,width:16,height:16}}),"".concat(r.minsRead," ").concat(u.G8)]})]})},e1={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:16,color:g.rS.colors.metadata,fontSize:g.rS.fontSizes.metadata,letterSpacing:g.rS.letterSpacings.metadata},e2={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:8},e6=e=>{let{children:t,coverImageURL:r,...o}=e;return(0,n.jsx)(s.Z,{style:e8,children:(0,n.jsx)(s.Z,{style:e4,elementName:H.MY,src:r||ez.V9,onError:e=>{e.target.src=ez.bR},...o,children:t})})},e8={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:0,marginTop:16,gap:8,backgroundImage:g.rS.colors.gradient,borderRadius:16,width:"75%",padding:4},e4={backgroundColor:g.rS.colors.pageBackground,borderRadius:16,width:"100%"},e3=e=>{let{children:t,frontMatter:r,...o}=e;return(0,n.jsxs)(s.Z,{style:e5,...o,children:[(0,n.jsx)(e6,{coverImageURL:r.coverImage}),(0,n.jsx)(e$,{children:r.title}),(0,n.jsx)(e0,{frontMatter:r})]})},e5={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:8,marginTop:24,marginBottom:40,fontFamily:g.rS.fonts.title},e9=e=>{let{children:t,frontMatter:r,sourceContent:o,...l}=e;return(0,n.jsxs)(c,{children:[(0,n.jsx)(e3,{frontMatter:r}),(0,n.jsxs)(s.Z,{style:e7,children:[(0,n.jsx)(s.Z,{style:te}),(0,n.jsx)(s.Z,{style:tt,children:(0,n.jsx)(eV,{sourceContent:o})}),(0,n.jsx)(s.Z,{style:tr,children:(0,n.jsx)(m,{})})]})]})},e7={display:"grid",gridTemplateAreas:"'post-left post-content post-right'",gridTemplateColumns:"1fr 792px 2.5fr",marginBottom:24},te={gridArea:"post-left"},tt={gridArea:"post-content",color:g.rS.colors.content,fontFamily:g.rS.fonts.content,fontSize:g.rS.fontSizes.content,fontWeight:g.rS.fontWeights.content,lineHeight:g.rS.lineHeights.content,letterSpacing:g.rS.letterSpacings.content},tr={gridArea:"post-right"};r(8594);let to=e=>{let{frontMatter:t,sourceContent:r}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e9,{frontMatter:t,sourceContent:r})})};var tn=!0,tl=to},8594:function(){},792:function(e){"use strict";var t=function(e,t){return e+r(t)},r=function(e){return null===e||"boolean"==typeof e||void 0===e?"":"number"==typeof e?e.toString():"string"==typeof e?e:Array.isArray(e)?e.reduce(t,""):Object.prototype.hasOwnProperty.call(e,"props")&&Object.prototype.hasOwnProperty.call(e.props,"children")?r(e.props.children):""};r.default=r,e.exports=r},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},2746:function(e,t,r){e.exports.jsxRuntime=r(5893)}},function(e){e.O(0,[850,774,888,179],function(){return e(e.s=592)}),_N_E=e.O()}]);