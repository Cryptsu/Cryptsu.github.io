(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{640:function(e,t,n){"use strict";var r=n(1742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,l,i,c,a,s,d,u,g=!1;t||(t={}),i=t.debug||!1;try{if(a=r(),s=document.createRange(),d=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(u),s.selectNodeContents(u),d.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");g=!0}catch(r){i&&console.error("unable to copy using execCommand: ",r),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),g=!0}catch(r){i&&console.error("unable to copy using clipboardData: ",r),i&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",l=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",c=n.replace(/#{\s*key\s*}/g,l),window.prompt(c,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(s):d.removeAllRanges()),u&&document.body.removeChild(u),a()}return g}},592:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(5266)}])},5831:function(e,t,n){"use strict";n.d(t,{FU:function(){return r.Z},Km:function(){return o.Z},RO:function(){return i.Z},nQ:function(){return l.Z}});var r=n(6261);n(2482);var o=n(2292),l=n(3909),i=n(2071)},5266:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return eO},default:function(){return eU}});var r={};n.r(r),n.d(r,{MDXContext:function(){return c},MDXProvider:function(){return u},useMDXComponents:function(){return s},withMDXComponents:function(){return a}});var o=n(5893),l=n(7294),i=n(2746);let c=l.createContext({});function a(e){return function(t){let n=s(t.components);return l.createElement(e,{...t,allComponents:n})}}function s(e){let t=l.useContext(c);return l.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let d={};function u({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||d:s(e),l.createElement(c.Provider,{value:r},t)}function g({compiledSource:e,frontmatter:t,scope:n,components:o={},lazy:c}){let[a,s]=(0,l.useState)(!c||"undefined"==typeof window);(0,l.useEffect)(()=>{if(c){let e=window.requestIdleCallback(()=>{s(!0)});return()=>window.cancelIdleCallback(e)}},[]);let d=(0,l.useMemo)(()=>{let o=Object.assign({opts:{...r,...i.jsxRuntime}},{frontmatter:t},n),l=Object.keys(o),c=Object.values(o),a=Reflect.construct(Function,l.concat(`${e}`));return a.apply(a,c).default},[n,e]);if(!a)return l.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let g=l.createElement(u,{components:o},l.createElement(d,null));return c?l.createElement("div",null,g):g}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var m=n(1533),f=n(5919),p=n(43);let h=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:S,elementName:p.H1,...n,children:t})},S={fontFamily:"".concat(f.rS.fonts.content," !important"),fontSize:"".concat(f.rS.fontSizes.h1," !important"),fontWeight:"".concat(f.rS.fontWeights.h1," !important"),letterSpacing:"".concat(f.rS.letterSpacings.h1," !important"),lineHeight:f.rS.lineHeights.h1,color:f.rS.colors.contentText,textTransform:"uppercase",paddingBottom:8,borderBottom:4,borderTop:0,borderLeft:0,borderRight:0,borderStyle:"dashed",borderColor:f.rS.colors.divider,marginTop:16,marginBottom:16},x=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:y,elementName:p.H2,...n,children:t})},y={fontFamily:f.rS.fonts.content,fontSize:f.rS.fontSizes.h2,fontWeight:f.rS.fontWeights.h2,letterSpacing:f.rS.letterSpacings.h2,lineHeight:f.rS.lineHeights.h2,color:f.rS.colors.contentText,textTransform:"uppercase",marginTop:16,marginBottom:16},b=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:j,elementName:p.H3,...n,children:t})},j={fontFamily:f.rS.fonts.content,fontSize:f.rS.fontSizes.h3,fontWeight:f.rS.fontWeights.h3,letterSpacing:f.rS.letterSpacings.h3,lineHeight:f.rS.lineHeights.h3,color:f.rS.colors.contentText,textTransform:"uppercase",marginTop:12,marginBottom:12},w=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:v,elementName:p.H4,...n,children:t})},v={fontFamily:f.rS.fonts.content,fontSize:f.rS.fontSizes.h4,fontWeight:f.rS.fontWeights.h4,letterSpacing:f.rS.letterSpacings.h4,lineHeight:f.rS.lineHeights.h4,color:f.rS.colors.contentText,textTransform:"uppercase",marginTop:12,marginBottom:12},C=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:T,elementName:p.H5,...n,children:t})},T={fontFamily:f.rS.fonts.content,fontSize:f.rS.fontSizes.h5,fontWeight:f.rS.fontWeights.h5,letterSpacing:f.rS.letterSpacings.h5,lineHeight:f.rS.lineHeights.h5,color:f.rS.colors.contentText,textTransform:"uppercase",marginTop:8,marginBottom:8},k=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:N,elementName:p.H6,...n,children:t})},N={fontFamily:f.rS.fonts.content,fontSize:f.rS.fontSizes.h6,fontWeight:f.rS.fontWeights.h6,letterSpacing:f.rS.letterSpacings.h6,lineHeight:f.rS.lineHeights.h6,color:f.rS.colors.contentText,textTransform:"uppercase",marginTop:8,marginBottom:8},Z=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:E,elementName:p.P,...n,children:t})},E={fontFamily:f.rS.fonts.content,fontSize:f.rS.fontSizes.content,fontWeight:f.rS.fontWeights.content,letterSpacing:f.rS.letterSpacings.content,lineHeight:f.rS.lineHeights.content,color:f.rS.colors.contentText,marginTop:12,marginBottom:12},H=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:R,elementName:p.Cs,...n,children:(0,o.jsx)(m.Z,{style:L,children:t})})},R={fontFamily:f.rS.fonts.content,fontSize:f.rS.fontSizes.content,fontWeight:f.rS.fontWeights.content,letterSpacing:f.rS.letterSpacings.content,lineHeight:f.rS.lineHeights.content,marginTop:12,marginBottom:12,marginLeft:8,marginRight:8,paddingLeft:32,paddingRight:32,paddingTop:8,paddingBottom:8,borderLeft:8,borderRight:0,borderTop:0,borderBottom:0,borderStyle:"solid",backgroundColor:f.rS.colors.quoteBackground,borderColor:f.rS.colors.quoteLegend,borderRadius:24},L={opacity:.75};var B=n(1664),I=n.n(B);let D=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{as:I(),style:z,...n,children:t})},z={color:f.rS.colors.linkText,paddingBottom:4,"&:visited":{color:f.rS.colors.clickedLinkText},movUnderline:"".concat(f.rS.colors.linkTextUnderlineHover," 2px 0px 0px"),"&:active":{color:f.rS.colors.activeLinkText,movUnderlineColor:f.rS.colors.activeLinkTextUnderlineHover}},W=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:F,elementName:p.cO,...n,children:t})},F={fontFamily:f.rS.fonts.code,color:f.rS.colors.codeNoHighlight,paddingLeft:8,paddingRight:8,backgroundColor:f.rS.colors.codeInnerBackground,borderRadius:8,textTransform:"none"},_=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:A,...n,children:t})},A={width:12,height:12,borderRadius:"100%",backgroundColor:f.rS.colors.green},O=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:U,...n,children:t})},U={width:12,height:12,borderRadius:"100%",backgroundColor:f.rS.colors.red},M=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:P,...n,children:t})},P={width:12,height:12,borderRadius:"100%",backgroundColor:f.rS.colors.yellow},X=e=>{let{children:t,...n}=e;return(0,o.jsxs)(m.Z,{style:q,...n,children:[(0,o.jsx)(O,{}),(0,o.jsx)(M,{}),(0,o.jsx)(_,{})]})},q={display:"flex",flexDirection:"row",justifyContent:"left",alignItems:"center",gap:8};var K=n(792),Q=n.n(K),Y=n(640),G=n.n(Y);let $=e=>{let{children:t,style:n,...r}=e;return(0,o.jsx)(m.Z,{css:n,style:J,...r,children:t})},J={display:"flex",justifyContent:"center",userSelect:"none",fontFamily:f.rS.fonts.content,color:f.rS.colors.contentText,borderRadius:8,borderStyle:"solid","&:hover":{backgroundColor:f.rS.colors.buttonHoverBackground},"&:active":{transform:"translateY(4px)"}};var V=n(5831);let ee=e=>{let{content:t,refreshTime:n=2e3,style:r,...i}=e,[c,a]=(0,l.useState)(!1),s=e=>{e.currentTarget.blur();let n=G()(Q()(t));a(n)};return(0,l.useEffect)(()=>{if(!c)return;let e=setTimeout(()=>{a(!1)},n);return()=>{clearTimeout(e)}},[n,c]),(0,o.jsx)(m.Z,{css:r,as:$,style:et,onClick:s,...i,children:c?(0,o.jsx)(V.nQ,{style:er}):(0,o.jsx)(V.Km,{style:en})})},et={borderColor:f.rS.colors.copyBtnBorder,boxShadow:f.rS.shadows.codeCopyBtnNormal,"&:active":{backgroundColor:f.rS.colors.copyBtnHoverBackground,boxShadow:f.rS.shadows.codeCopyBtnClick},width:24,height:24,display:"flex",justifyContent:"center",alignItems:"center"},en={fill:f.rS.colors.copyIcon,width:12,height:12},er={fill:f.rS.colors.copiedIcon,width:12,height:12},eo=e=>{let{content:t,...n}=e;return(0,o.jsx)(m.Z,{style:el,...n,children:(0,o.jsx)(ee,{content:t})})},el={display:"flex",flexDirection:"row",justifyContent:"right",alignItems:"center"},ei=e=>{let{languageName:t=""}=e;return(0,o.jsx)(m.Z,{style:ec,children:t})},ec={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",fontSize:f.rS.fontSizes.codeLang,letterSpacing:f.rS.letterSpacings.codeLang,color:f.rS.colors.codeLang,fontWeight:f.rS.fontWeights.codeLang,textTransform:"capitalize"},ea=e=>{let{content:t,className:n,...r}=e,l=null==n?void 0:n.split(" "),i=null==l?void 0:l.find(e=>/language-*/.test(e)),c=i?i.slice(9):"";return(0,o.jsxs)(m.Z,{style:es,...r,children:[(0,o.jsx)(m.Z,{as:X,style:ed}),(0,o.jsx)(m.Z,{as:ei,style:eu,languageName:c}),(0,o.jsx)(m.Z,{as:eo,style:eg,content:t})]})},es={display:"grid",gridTemplateAreas:"'codeblock-header-ifhone-btn codeblock-header-lang-area codeblock-header-action-btn'",gridTemplateColumns:"1fr 1fr 1fr",paddingLeft:16,paddingRight:16},ed={gridArea:"codeblock-header-ifhone-btn"},eu={gridArea:"codeblock-header-lang-area"},eg={gridArea:"codeblock-header-action-btn"},em=e=>{let{noLines:t}=e,n=[];for(let e=1;e<=t;++e)n.push((0,o.jsx)("div",{children:e},e));return(0,o.jsx)(m.Z,{style:ef,children:n})},ef={fontSize:"".concat(f.rS.fontSizes.code," !important"),letterSpacing:f.rS.letterSpacings.code,lineHeight:f.rS.lineHeights.code,fontWeight:f.rS.fontWeights.codeLineNumber,color:f.rS.colors.codeLineNumber,textAlign:"center",userSelect:"none",paddingRight:8,height:"max-content",border:0,borderRight:4,borderStyle:"double",borderColor:f.rS.colors.codeLineNumberDivider},ep=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:eh,...n,children:t})},eh={marginLeft:4,fontSize:"".concat(f.rS.fontSizes.code," !important"),letterSpacing:f.rS.letterSpacings.code,lineHeight:f.rS.lineHeights.code,color:f.rS.colors.codeHighlight},eS=e=>{let{children:t,...n}=e,r=l.Children.count(t);return(0,o.jsxs)(m.Z,{style:ex,...n,children:[(0,o.jsx)(em,{noLines:r}),(0,o.jsx)(ep,{children:t})]})},ex={paddingBottom:8,overflow:"auto",display:"flex",flexDirection:"row",gap:8};var ey=n(2654);let eb=e=>{let{children:t,className:n,...r}=e;return(0,o.jsx)(m.Z,{style:ej,elementName:p.cO,...r,children:(0,o.jsx)(m.Z,{style:ew,children:(0,o.jsxs)(m.Z,{style:ev,children:[(0,o.jsx)(ea,{content:t,className:n}),(0,o.jsx)(eS,{children:t})]})})})},ej={fontFamily:f.rS.fonts.code,maxWidth:"100%"},ew={marginTop:16,marginBottom:16,marginLeft:32,marginRight:32,borderRadius:16,backgroundImage:"".concat(f.rS.colors.codeBoxBorder),backgroundPosition:"-4px -4px",backgroundSize:"calc(100% + 8px) calc(100% + 8px)",borderColor:f.rS.colors.codeBoxBorderInv,borderStyle:"dashed",borderWidth:4},ev={display:"flex",flexDirection:"column",padding:16,gap:8,backgroundImage:'url("'.concat(ey.n,'"), ').concat(f.rS.colors.codeBlockBackground),borderRadius:12},eC=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:eT,elementName:p.UL,...n,children:t})},eT={position:"relative",fontFamily:f.rS.fonts.content,fontSize:f.rS.fontSizes.content,color:f.rS.colors.contentText,letterSpacing:f.rS.letterSpacings.content,margin:0,marginLeft:48,marginRight:48,listStyle:"none",counterReset:"ListItemNo",["& ".concat(p.LI)]:{["".concat(p.LI,":before")]:{content:"◦"}},["& ".concat(p.LI,":before")]:{content:"•",color:f.rS.colors.listHeading,fontWeight:f.rS.fontWeights.listHeading}},ek=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:eN,elementName:p.OL,...n,children:t})},eN={position:"relative",fontFamily:f.rS.fonts.content,fontSize:f.rS.fontSizes.content,color:f.rS.colors.contentText,letterSpacing:f.rS.letterSpacings.content,margin:0,marginLeft:48,marginRight:48,listStyle:"none",counterReset:"ListItemNo",["& ".concat(p.LI)]:{counterIncrement:"ListItemNo"},["& ".concat(p.LI,":before")]:{content:'counters(ListItemNo, ".")"."',color:f.rS.colors.listHeading,fontWeight:f.rS.fontWeights.listHeading}},eZ=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:eE,elementName:p.LI,...n,children:(0,o.jsx)(m.Z,{elementName:p.tK,style:eH,children:t})})},eE={display:"flex",flexDirection:"row",gap:8,marginBottom:8,marginTop:8},eH={width:"100%","&> :first-child":{marginTop:0}},eR=e=>{let{children:t,alt:n,width:r,height:l,...i}=e;return(0,o.jsxs)(m.Z,{style:eL,children:[(0,o.jsx)(m.Z,{elementName:p.MY,style:eB,css:{width:r,height:l},alt:n,...i,children:t}),n?(0,o.jsx)(m.Z,{style:eI,children:n}):(0,o.jsx)(o.Fragment,{})]})},eL={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:0,marginTop:32,marginBottom:32,gap:8},eB={maxWidth:"90%",borderRadius:16},eI={color:f.rS.colors.contentText,fontFamily:f.rS.fonts.content,fontSize:f.rS.fontSizes.imgalt,fontWeight:f.rS.fontWeights.imgalt,letterSpacing:f.rS.letterSpacings.content,borderWidth:2,borderStyle:"dashed",borderRadius:8,padding:8,borderColor:"#00000000","&:hover":{borderColor:f.rS.colors.grey}},eD=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:ez,elementName:p.tK,...n,children:t})},ez={color:f.rS.colors.contentText,overflowX:"auto"},eW=e=>{let{children:t,...n}=e;return(0,o.jsx)(m.Z,{style:eF,elementName:p.bg,...n,children:t})},eF={color:f.rS.colors.contentText,overflowX:"auto",border:0,borderTop:2,borderBottom:2,borderStyle:"dashed",borderColor:f.rS.colors.mathDivider};var e_=(e=>{let t={};for(let n of Object.keys(e))t[n]=t=>{let{children:r,className:l,...i}=t,c=l?l.split(" "):[];for(let t of e[n]){let e=!0;if(t.classNames){for(let n of t.classNames)if(!c.includes(n)){e=!1;break}}if(e)return(0,o.jsx)(m.Z,{as:t.replacedElement,className:l,...i,children:r})}return(0,o.jsx)(m.Z,{elementName:n,className:l,...i,children:r})};return t})({h1:[{replacedElement:h}],h2:[{replacedElement:x}],h3:[{replacedElement:b}],h4:[{replacedElement:w}],h5:[{replacedElement:C}],h6:[{replacedElement:k}],p:[{replacedElement:Z}],blockquote:[{replacedElement:H}],a:[{replacedElement:D}],code:[{replacedElement:eb,classNames:["code-highlight"]},{replacedElement:W}],ul:[{replacedElement:eC}],ol:[{replacedElement:ek}],img:[{replacedElement:eR}],span:[{replacedElement:eD,classNames:["math-inline","math"]}],div:[{replacedElement:eW,classNames:["math-display","math"]}],li:[{replacedElement:eZ}],BlogImg:[{replacedElement:eR}]});n(8594);let eA=e=>{let{frontMatter:t,sourceContent:n}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(g,{...n,components:e_})})};var eO=!0,eU=eA},8594:function(){},792:function(e){"use strict";var t=function(e,t){return e+n(t)},n=function(e){return null===e||"boolean"==typeof e||void 0===e?"":"number"==typeof e?e.toString():"string"==typeof e?e:Array.isArray(e)?e.reduce(t,""):Object.prototype.hasOwnProperty.call(e,"props")&&Object.prototype.hasOwnProperty.call(e.props,"children")?n(e.props.children):""};n.default=n,e.exports=n},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},2746:function(e,t,n){e.exports.jsxRuntime=n(5893)}},function(e){e.O(0,[700,850,774,888,179],function(){return e(e.s=592)}),_N_E=e.O()}]);