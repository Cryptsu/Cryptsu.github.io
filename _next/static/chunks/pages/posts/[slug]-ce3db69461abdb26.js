(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{640:function(e,t,o){"use strict";var r=o(1742),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,l,i,c,a,s,d,u,g=!1;t||(t={}),i=t.debug||!1;try{if(a=r(),s=document.createRange(),d=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(o){if(o.stopPropagation(),t.format){if(o.preventDefault(),void 0===o.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=n[t.format]||n.default;window.clipboardData.setData(r,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e)}t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))}),document.body.appendChild(u),s.selectNodeContents(u),d.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");g=!0}catch(r){i&&console.error("unable to copy using execCommand: ",r),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),g=!0}catch(r){i&&console.error("unable to copy using clipboardData: ",r),i&&console.error("falling back to prompt"),o="message"in t?t.message:"Copy to clipboard: #{key}, Enter",l=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",c=o.replace(/#{\s*key\s*}/g,l),window.prompt(c,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(s):d.removeAllRanges()),u&&document.body.removeChild(u),a()}return g}},592:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return o(3689)}])},5831:function(e,t,o){"use strict";o.d(t,{FU:function(){return r.Z},Km:function(){return n.Z},RO:function(){return i.Z},nQ:function(){return l.Z}});var r=o(6261);o(2482);var n=o(2292),l=o(3909),i=o(2071)},3689:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return eJ},default:function(){return e0}});var r={};o.r(r),o.d(r,{MDXContext:function(){return c},MDXProvider:function(){return u},useMDXComponents:function(){return s},withMDXComponents:function(){return a}});var n=o(5893),l=o(7294),i=o(2746);let c=l.createContext({});function a(e){return function(t){let o=s(t.components);return l.createElement(e,{...t,allComponents:o})}}function s(e){let t=l.useContext(c);return l.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let d={};function u({components:e,children:t,disableParentContext:o}){let r;return r=o?"function"==typeof e?e({}):e||d:s(e),l.createElement(c.Provider,{value:r},t)}function g({compiledSource:e,frontmatter:t,scope:o,components:n={},lazy:c}){let[a,s]=(0,l.useState)(!c||"undefined"==typeof window);(0,l.useEffect)(()=>{if(c){let e=window.requestIdleCallback(()=>{s(!0)});return()=>window.cancelIdleCallback(e)}},[]);let d=(0,l.useMemo)(()=>{let n=Object.assign({opts:{...r,...i.jsxRuntime}},{frontmatter:t},o),l=Object.keys(n),c=Object.values(n),a=Reflect.construct(Function,l.concat(`${e}`));return a.apply(a,c).default},[o,e]);if(!a)return l.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let g=l.createElement(u,{components:n},l.createElement(d,null));return c?l.createElement("div",null,g):g}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});let m=(0,l.createContext)({headingIDs:[{headingContent:"",headingID:"",level:-1}],addHeadingID(e,t,o){}});var f=o(1533),p=o(5919);let h=e=>{let{children:t,...o}=e;return(0,n.jsx)(f.Z,{style:S,...o,children:t})},S={fontFamily:p.rS.fonts.toc,fontSize:p.rS.fontSizes.toc,fontWeight:p.rS.fontWeights.toc,letterSpacing:p.rS.letterSpacings.toc,color:p.rS.colors.toc,borderWidth:2,borderColor:p.rS.colors.tableBorder,borderStyle:"solid",position:"sticky",top:80,marginLeft:40,marginRight:40,paddingLeft:32,paddingRight:32,paddingTop:16,paddingBottom:16},x=()=>{let e=(0,l.useContext)(m);if(!e)throw Error("useContent must be used inside of a ContentContext.Provider.");return e};var y=o(5626),b=o(792),j=o.n(b),w=o(43);let C=e=>{let{children:t,id:o="",...r}=e,{addHeadingID:l}=x();return(0,y.Z)(()=>{l(j()(t),o,1)},[]),(0,n.jsx)(f.Z,{style:v,elementName:w.H1,...r,children:t})},v={fontFamily:"".concat(p.rS.fonts.content," !important"),fontSize:"".concat(p.rS.fontSizes.h1," !important"),fontWeight:"".concat(p.rS.fontWeights.h1," !important"),letterSpacing:"".concat(p.rS.letterSpacings.h1," !important"),lineHeight:p.rS.lineHeights.h1,color:p.rS.colors.contentText,textTransform:"uppercase",paddingBottom:8,borderBottom:4,borderTop:0,borderLeft:0,borderRight:0,borderStyle:"dashed",borderColor:p.rS.colors.divider,marginTop:16,marginBottom:16},T=e=>{let{children:t,id:o="",...r}=e,{addHeadingID:l}=x();return(0,y.Z)(()=>{l(j()(t),o,2)},[]),(0,n.jsx)(f.Z,{style:k,elementName:w.H2,...r,children:t})},k={fontFamily:p.rS.fonts.content,fontSize:p.rS.fontSizes.h2,fontWeight:p.rS.fontWeights.h2,letterSpacing:p.rS.letterSpacings.h2,lineHeight:p.rS.lineHeights.h2,color:p.rS.colors.contentText,textTransform:"uppercase",marginTop:16,marginBottom:16},Z=e=>{let{children:t,id:o="",...r}=e,{addHeadingID:l}=x();return(0,y.Z)(()=>{l(j()(t),o,3)},[]),(0,n.jsx)(f.Z,{style:N,elementName:w.H3,...r,children:t})},N={fontFamily:p.rS.fonts.content,fontSize:p.rS.fontSizes.h3,fontWeight:p.rS.fontWeights.h3,letterSpacing:p.rS.letterSpacings.h3,lineHeight:p.rS.lineHeights.h3,color:p.rS.colors.contentText,textTransform:"uppercase",marginTop:12,marginBottom:12},E=e=>{let{children:t,id:o="",...r}=e,{addHeadingID:l}=x();return(0,y.Z)(()=>{l(j()(t),o,4)},[]),(0,n.jsx)(f.Z,{style:L,elementName:w.H4,...r,children:t})},L={fontFamily:p.rS.fonts.content,fontSize:p.rS.fontSizes.h4,fontWeight:p.rS.fontWeights.h4,letterSpacing:p.rS.letterSpacings.h4,lineHeight:p.rS.lineHeights.h4,color:p.rS.colors.contentText,textTransform:"uppercase",marginTop:12,marginBottom:12},R=e=>{let{children:t,id:o="",...r}=e,{addHeadingID:l}=x();return(0,y.Z)(()=>{l(j()(t),o,5)},[]),(0,n.jsx)(f.Z,{style:D,elementName:w.H5,...r,children:t})},D={fontFamily:p.rS.fonts.content,fontSize:p.rS.fontSizes.h5,fontWeight:p.rS.fontWeights.h5,letterSpacing:p.rS.letterSpacings.h5,lineHeight:p.rS.lineHeights.h5,color:p.rS.colors.contentText,textTransform:"uppercase",marginTop:8,marginBottom:8},H=e=>{let{children:t,id:o="",...r}=e,{addHeadingID:l}=x();return(0,y.Z)(()=>{l(j()(t),o,6)},[]),(0,n.jsx)(f.Z,{style:W,elementName:w.H6,...r,children:t})},W={fontFamily:p.rS.fonts.content,fontSize:p.rS.fontSizes.h6,fontWeight:p.rS.fontWeights.h6,letterSpacing:p.rS.letterSpacings.h6,lineHeight:p.rS.lineHeights.h6,color:p.rS.colors.contentText,textTransform:"uppercase",marginTop:8,marginBottom:8},B=e=>{let{children:t,...o}=e;return(0,n.jsx)(f.Z,{style:I,elementName:w.P,...o,children:t})},I={fontFamily:p.rS.fonts.content,fontSize:p.rS.fontSizes.content,fontWeight:p.rS.fontWeights.content,letterSpacing:p.rS.letterSpacings.content,lineHeight:p.rS.lineHeights.content,color:p.rS.colors.contentText,marginTop:12,marginBottom:12},z=e=>{let{children:t,...o}=e;return(0,n.jsx)(f.Z,{style:F,elementName:w.Cs,...o,children:(0,n.jsx)(f.Z,{style:A,children:t})})},F={fontFamily:p.rS.fonts.content,fontSize:p.rS.fontSizes.content,fontWeight:p.rS.fontWeights.content,letterSpacing:p.rS.letterSpacings.content,lineHeight:p.rS.lineHeights.content,marginTop:12,marginBottom:12,marginLeft:8,marginRight:8,paddingLeft:32,paddingRight:32,paddingTop:8,paddingBottom:8,borderLeft:8,borderRight:0,borderTop:0,borderBottom:0,borderStyle:"solid",backgroundColor:p.rS.colors.quoteBackground,borderColor:p.rS.colors.quoteLegend,borderRadius:24,boxShadow:p.rS.shadows.quoteBlockShadow},A={opacity:.75};var _=o(1664),O=o.n(_);let P=e=>{let{children:t,...o}=e;return(0,n.jsx)(f.Z,{as:O(),style:U,...o,children:t})},U={color:p.rS.colors.linkText,paddingBottom:4,"&:visited":{color:p.rS.colors.clickedLinkText},movUnderline:"".concat(p.rS.colors.linkTextUnderlineHover," 2px 0px 0px"),"&:active":{color:p.rS.colors.activeLinkText,movUnderlineColor:p.rS.colors.activeLinkTextUnderlineHover}},M=e=>{let{children:t,...o}=e;return(0,n.jsx)(f.Z,{style:X,elementName:w.cO,...o,children:t})},X={fontFamily:p.rS.fonts.code,color:p.rS.colors.codeNoHighlight,paddingLeft:8,paddingRight:8,backgroundColor:p.rS.colors.codeInnerBackground,borderRadius:8,textTransform:"none"},q=(0,l.createContext)({showInner:0,ToggleContentFn:()=>{}}),K=e=>{let{children:t,...o}=e;return(0,n.jsx)(f.Z,{style:Q,...o,children:t})},Q={width:12,height:12,borderRadius:"100%",backgroundColor:p.rS.colors.green},Y=e=>{let{children:t,...o}=e;return(0,n.jsx)(f.Z,{style:G,...o,children:t})},G={width:12,height:12,borderRadius:"100%",backgroundColor:p.rS.colors.red},V=e=>{let{children:t,...o}=e;return(0,n.jsx)(f.Z,{style:$,...o,children:t})},$={width:12,height:12,borderRadius:"100%",backgroundColor:p.rS.colors.yellow},J=e=>{let{children:t,...o}=e,{ToggleContentFn:r}=(0,l.useContext)(q);return(0,n.jsxs)(f.Z,{style:ee,...o,children:[(0,n.jsx)(Y,{onClick:r}),(0,n.jsx)(V,{}),(0,n.jsx)(K,{})]})},ee={display:"flex",flexDirection:"row",justifyContent:"left",alignItems:"center",gap:8};var et=o(640),eo=o.n(et);let er=e=>{let{children:t,style:o,...r}=e;return(0,n.jsx)(f.Z,{css:o,style:en,...r,children:t})},en={display:"flex",justifyContent:"center",userSelect:"none",fontFamily:p.rS.fonts.content,color:p.rS.colors.contentText,borderRadius:8,borderStyle:"solid","&:hover":{backgroundColor:p.rS.colors.buttonHoverBackground},"&:active":{transform:"translateY(4px)"}};var el=o(5831);let ei=e=>{let{content:t,refreshTime:o=2e3,style:r,...i}=e,[c,a]=(0,l.useState)(!1),s=e=>{e.currentTarget.blur();let o=eo()(j()(t));a(o)};return(0,l.useEffect)(()=>{if(!c)return;let e=setTimeout(()=>{a(!1)},o);return()=>{clearTimeout(e)}},[o,c]),(0,n.jsx)(f.Z,{css:r,as:er,style:ec,onClick:s,...i,children:c?(0,n.jsx)(el.nQ,{style:es}):(0,n.jsx)(el.Km,{style:ea})})},ec={borderColor:p.rS.colors.copyBtnBorder,boxShadow:p.rS.shadows.codeCopyBtnNormal,"&:active":{backgroundColor:p.rS.colors.copyBtnHoverBackground,boxShadow:p.rS.shadows.codeCopyBtnClick},width:24,height:24,display:"flex",justifyContent:"center",alignItems:"center"},ea={fill:p.rS.colors.copyIcon,width:12,height:12},es={fill:p.rS.colors.copiedIcon,width:12,height:12},ed=e=>{let{content:t,...o}=e;return(0,n.jsx)(f.Z,{style:eu,...o,children:(0,n.jsx)(ei,{content:t})})},eu={display:"flex",flexDirection:"row",justifyContent:"right",alignItems:"center"},eg=e=>{let{languageName:t=""}=e;return(0,n.jsx)(f.Z,{style:em,children:t})},em={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",fontSize:p.rS.fontSizes.codeLang,letterSpacing:p.rS.letterSpacings.codeLang,color:p.rS.colors.codeLang,fontWeight:p.rS.fontWeights.codeLang,textTransform:"capitalize"},ef=e=>{let{content:t,className:o,...r}=e,l=null==o?void 0:o.split(" "),i=null==l?void 0:l.find(e=>/language-*/.test(e)),c=i?i.slice(9):"";return(0,n.jsxs)(f.Z,{style:ep,...r,children:[(0,n.jsx)(f.Z,{as:J,style:eh}),(0,n.jsx)(f.Z,{as:eg,style:eS,languageName:c}),(0,n.jsx)(f.Z,{as:ed,style:ex,content:t})]})},ep={display:"grid",gridTemplateAreas:"'codeblock-header-ifhone-btn codeblock-header-lang-area codeblock-header-action-btn'",gridTemplateColumns:"1fr 1fr 1fr",paddingLeft:16,paddingRight:16},eh={gridArea:"codeblock-header-ifhone-btn"},eS={gridArea:"codeblock-header-lang-area"},ex={gridArea:"codeblock-header-action-btn"},ey=e=>{let{noLines:t}=e,o=[];for(let e=1;e<=t;++e)o.push((0,n.jsx)("div",{children:e},e));return(0,n.jsx)(f.Z,{style:eb,children:o})},eb={color:p.rS.colors.codeLineNumber,fontWeight:p.rS.fontWeights.codeLineNumber,textAlign:"center",userSelect:"none",paddingRight:8,height:"max-content",border:0,borderRight:4,borderStyle:"double",borderColor:p.rS.colors.codeLineNumberDivider},ej=e=>{let{children:t,...o}=e;return(0,n.jsx)(f.Z,{style:ew,...o,children:t})},ew={overflow:"auto",paddingBottom:8,scrollbarWidth:"thin",color:p.rS.colors.codeHighlight,marginLeft:4,".token":{"&.keyword":{fontWeight:"bold"},"&.comment, &.prolog, &.cdata":{color:p.rS.colors.codeComment},"&.delimiter, &.boolean, &.keyword, &.selector, &.important, &.doctype, &.atrule, &.url":{color:p.rS.colors.codeKeyword},"&.tag, &.builtin, &.regex":{color:p.rS.colors.codeNamespace},"&.property, &.variable, &.attr-value, &.class-name, &.string, &.char":{color:p.rS.colors.codeVariable},"&.literal-property, &.attr-name":{color:p.rS.colors.codeAttribute},"&.function":{color:p.rS.colors.codeFunction},"&.tag .punctuation, &.attr-value .punctuation":{color:p.rS.colors.codePunctuation},"&.operator":{color:p.rS.colors.codeOperator},"&.boolean, &.number, &.constant":{color:p.rS.colors.codeLiteral},"&.inserted":{color:p.rS.colors.codeAddition},"&.deleted":{color:p.rS.colors.codeDeletion},"&.url":{textDecoration:"underline"},"&.bold, &.important":{fontWeight:"bold"},"&.italic":{fontStyle:"italic"}}},eC=e=>{let{children:t,...o}=e,r=l.Children.count(t),{showInner:i}=(0,l.useContext)(q);return(0,n.jsx)(f.Z,{children:(0,n.jsxs)(f.Z,{style:ev,css:{display:i?"":"none"},...o,children:[(0,n.jsx)(ey,{noLines:r}),(0,n.jsx)(ej,{children:t})]})})},ev={fontSize:"".concat(p.rS.fontSizes.code," !important"),letterSpacing:p.rS.letterSpacings.code,lineHeight:p.rS.lineHeights.code,display:"flex",flexDirection:"row",gap:8},eT=e=>{let{children:t,className:o,...r}=e,[i,c]=(0,l.useState)(1),a=()=>{c(i?0:1)};return(0,n.jsx)(q.Provider,{value:{showInner:i,ToggleContentFn:a},children:(0,n.jsx)(f.Z,{style:ek,elementName:w.cO,...r,children:(0,n.jsxs)(f.Z,{style:eZ,children:[(0,n.jsx)(ef,{content:t,className:o}),(0,n.jsx)(eC,{children:t})]})})})},ek={fontFamily:p.rS.fonts.code,maxWidth:"100%"},eZ={marginTop:16,marginBottom:16,marginLeft:32,marginRight:32,borderRadius:16,display:"flex",flexDirection:"column",padding:16,gap:8,backgroundImage:"".concat(p.rS.colors.codeBlockBackground),boxShadow:p.rS.shadows.codeBlockShadow,pointerEvents:"none","*":{pointerEvents:"auto"}},eN=e=>{let{children:t,...o}=e;return(0,n.jsx)(f.Z,{style:eE,elementName:w.UL,...o,children:t})},eE={position:"relative",fontFamily:p.rS.fonts.content,fontSize:p.rS.fontSizes.content,color:p.rS.colors.contentText,letterSpacing:p.rS.letterSpacings.content,margin:0,marginLeft:48,marginRight:48,listStyle:"none",counterReset:"ListItemNo",["& ".concat(w.LI)]:{["".concat(w.LI,":before")]:{content:"◦"}},["& ".concat(w.LI,":before")]:{content:"•",color:p.rS.colors.listHeading,fontWeight:p.rS.fontWeights.listHeading}},eL=e=>{let{children:t,...o}=e;return(0,n.jsx)(f.Z,{style:eR,elementName:w.OL,...o,children:t})},eR={position:"relative",fontFamily:p.rS.fonts.content,fontSize:p.rS.fontSizes.content,color:p.rS.colors.contentText,letterSpacing:p.rS.letterSpacings.content,margin:0,marginLeft:48,marginRight:48,listStyle:"none",counterReset:"ListItemNo",["& ".concat(w.LI)]:{counterIncrement:"ListItemNo"},["& ".concat(w.LI,":before")]:{content:'counters(ListItemNo, ".")"."',color:p.rS.colors.listHeading,fontWeight:p.rS.fontWeights.listHeading}},eD=e=>{let{children:t,...o}=e;return(0,n.jsx)(f.Z,{style:eH,elementName:w.LI,...o,children:(0,n.jsx)(f.Z,{elementName:w.tK,style:eW,children:t})})},eH={display:"flex",flexDirection:"row",gap:8,marginBottom:8,marginTop:8},eW={width:"100%","&> :first-child":{marginTop:0}},eB=e=>{let{children:t,alt:o,width:r,height:l,...i}=e;return(0,n.jsxs)(f.Z,{style:eI,children:[(0,n.jsx)(f.Z,{elementName:w.MY,style:ez,css:{width:r,height:l},alt:o,...i,children:t}),o?(0,n.jsx)(f.Z,{style:eF,children:o}):(0,n.jsx)(n.Fragment,{})]})},eI={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:0,marginTop:32,marginBottom:32,gap:8},ez={maxWidth:"90%",borderRadius:16},eF={color:p.rS.colors.contentText,fontFamily:p.rS.fonts.content,fontSize:p.rS.fontSizes.imgalt,fontWeight:p.rS.fontWeights.imgalt,letterSpacing:p.rS.letterSpacings.content,borderWidth:2,borderStyle:"dashed",borderRadius:8,padding:8,borderColor:"#00000000","&:hover":{borderColor:p.rS.colors.grey}},eA=e=>{let{children:t,...o}=e;return(0,n.jsx)(f.Z,{style:e_,elementName:w.tK,...o,children:t})},e_={color:p.rS.colors.contentText,overflowX:"auto"},eO=e=>{let{children:t,...o}=e;return(0,n.jsx)(f.Z,{style:eP,elementName:w.bg,...o,children:t})},eP={color:p.rS.colors.contentText,overflowX:"auto",border:0,borderTop:2,borderBottom:2,borderStyle:"dashed",borderColor:p.rS.colors.mathDivider},eU=e=>{let{children:t,...o}=e;return(0,n.jsx)(f.Z,{style:eM,children:(0,n.jsx)(f.Z,{style:eX,elementName:w.Fe,...o,children:t})})},eM={color:p.rS.colors.contentText,fontSize:p.rS.fontSizes.content,fontFamily:p.rS.fonts.content,letterSpacing:p.rS.letterSpacings.content,wordBreak:"break-all",overflowWrap:"break-word",display:"flex",alignItems:"center",justifyContent:"center",marginTop:32,marginBottom:32},eX={maxWidth:"100%",marginLeft:16,marginRight:16,borderCollapse:"collapse",["".concat(w.TH,", ").concat(w.TD)]:{border:"4px solid",borderColor:p.rS.colors.tableBorder,padding:8}};var eq=(e=>{let t={};for(let o of Object.keys(e))t[o]=t=>{let{children:r,className:l,...i}=t,c=l?l.split(" "):[];for(let t of e[o]){let e=!0;if(t.classNames){for(let o of t.classNames)if(!c.includes(o)){e=!1;break}}if(e)return(0,n.jsx)(f.Z,{as:t.replacedElement,className:l,...i,children:r})}return(0,n.jsx)(f.Z,{elementName:o,className:l,...i,children:r})};return t})({h1:[{replacedElement:C}],h2:[{replacedElement:T}],h3:[{replacedElement:Z}],h4:[{replacedElement:E}],h5:[{replacedElement:R}],h6:[{replacedElement:H}],p:[{replacedElement:B}],blockquote:[{replacedElement:z}],a:[{replacedElement:P}],code:[{replacedElement:eT,classNames:["code-highlight"]},{replacedElement:M}],ul:[{replacedElement:eN}],ol:[{replacedElement:eL}],img:[{replacedElement:eB}],span:[{replacedElement:eA,classNames:["math-inline","math"]}],div:[{replacedElement:eO,classNames:["math-display","math"]}],li:[{replacedElement:eD}],table:[{replacedElement:eU}],BlogImg:[{replacedElement:eB}]});let eK=e=>{let{children:t,data:o,...r}=e,[i,c]=(0,l.useState)([]),[a,s]=(0,l.useState)(),d=(e,t,o)=>{console.log("added",{headingContent:e,headingID:t,level:o})};return(0,n.jsx)(m.Provider,{value:{headingIDs:i,addHeadingID:d},children:(0,n.jsxs)(f.Z,{style:eQ,children:[(0,n.jsx)(f.Z,{style:eY,children:(0,n.jsx)(h,{children:"Some data here?"})}),(0,n.jsx)(f.Z,{style:eG,children:(0,n.jsx)(g,{...o.sourceContent,components:eq})}),(0,n.jsx)(f.Z,{style:eV})]})})},eQ={display:"grid",gridTemplateAreas:"'post-left post-content post-right'",gridTemplateColumns:"calc(50% - 336px) 672px calc(50% - 336px)"},eY={gridArea:"post-left"},eG={gridArea:"post-content"},eV={gridArea:"post-right"};o(8594);let e$=e=>{let{frontMatter:t,sourceContent:o}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(eK,{data:{frontMatter:t,sourceContent:o}})})};var eJ=!0,e0=e$},8594:function(){},792:function(e){"use strict";var t=function(e,t){return e+o(t)},o=function(e){return null===e||"boolean"==typeof e||void 0===e?"":"number"==typeof e?e.toString():"string"==typeof e?e:Array.isArray(e)?e.reduce(t,""):Object.prototype.hasOwnProperty.call(e,"props")&&Object.prototype.hasOwnProperty.call(e.props,"children")?o(e.props.children):""};o.default=o,e.exports=o},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],r=0;r<e.rangeCount;r++)o.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},2746:function(e,t,o){e.exports.jsxRuntime=o(5893)}},function(e){e.O(0,[700,850,774,888,179],function(){return e(e.s=592)}),_N_E=e.O()}]);