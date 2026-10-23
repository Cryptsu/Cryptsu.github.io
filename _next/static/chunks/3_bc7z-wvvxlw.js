(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,58458,(e,t,i)=>{let r="/404";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(65184)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},65184,e=>{"use strict";var t=e.i(91398),i=e.i(91788),r=e.i(43466),n=e.i(31646),l=e.i(48174),o=e.i(9202),o=o,s=o,c=o;let f=e=>(Math.random()+.1)/800*e,a={position:"relative",overflowX:"auto",height:"100%"},d={position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginLeft:0,maringRight:0,marginTop:32,marginBottom:32,paddingBottom:"2em",paddingLeft:"3em",paddingRight:"3em","@medium":{paddingBottom:"2em",paddingLeft:"1.5em",paddingRight:"1.5em"},borderColor:l.B.colors.borderGeneral,borderStyle:"dashed",borderWidth:"0.5em",borderRadius:32,width:"fit-content"},h={height:"1.0625em",fontSize:l.B.fontSizes.err,fontWeight:l.B.fontWeights.extrabold,letterSpacing:l.B.letterSpacings.h0,color:l.B.colors.error,textAlign:"center"},p={fontSize:l.B.fontSizes.h2,fontWeight:l.B.fontWeights.h2,letterSpacing:l.B.letterSpacings.h2,textAlign:"center",textDecoration:"underline"};e.s(["default",0,({children:e,...l})=>{let[u,g]=(0,i.useState)(!1),[m,x]=(0,i.useState)([0,0,0,0]),T=(0,i.useRef)(null),y=(0,i.useRef)(null),_=()=>{let e=y.current,t=T.current;if(!e||!t)return;let i=e.offsetWidth,r=e.offsetHeight,n=t.offsetWidth,l=t.offsetHeight;if(e.style.minHeight=`
      calc(${l+32+32}px)
    `,e.style.minWidth=`
      calc(${n+0+0}px)
    `,!u){let e=f(i),o=f(r),s=(i-(n+0+0))/2,c=(r-(l+32+32))/2;m[0]=e,m[1]=o,m[2]=s,m[3]=c,x(m),t.style.top=`
        clamp(
          -32px,
          calc(50% - ${r/2-c}px),
          calc(100% - ${l+32}px)
        )
      `,t.style.left=`
        clamp(
          -0px,
          calc(50% - ${i/2-s}px),
          calc(100% - ${n+0}px)
        )
      `}};return(0,i.useLayoutEffect)(()=>(_(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_))),(0,i.useEffect)(()=>{let e=setTimeout(()=>{g(!0)},2e4);return()=>clearTimeout(e)},[]),(0,i.useLayoutEffect)(()=>{if(u&&y.current&&T.current){let e=setInterval(()=>{let t=y.current,i=T.current;if(!t||!i)return()=>clearInterval(e);let r=i.offsetWidth,n=i.offsetHeight,l=t.offsetWidth,o=t.offsetHeight,[s,c,a,d]=m,h=a+0,p=d+32;h+r+s>=l?s=-f(l):h+s<=0&&(s=f(l)),p+n+c>=o?c=-f(o):p+c<=0&&(c=f(o)),a+=s,d+=c,i.style.top=`
          clamp(
            -32px,
            ${d}px,
            calc(100% - ${n+32}px)
          )
        `,i.style.left=`
          clamp(
            -0px,
            ${a}px,
            calc(100% - ${r+0}px)
          )
        `,m[0]=s,m[1]=c,m[2]=a,m[3]=d},5);return()=>clearInterval(e)}},[u]),(0,t.jsxs)(t.Fragment,{children:[(0,r.L)({title:o.TXT_TITLE_404}),(0,t.jsx)(n.f,{ref:y,style:a,...l,children:(0,t.jsxs)(n.f,{ref:T,style:d,children:[(0,t.jsx)(n.f,{style:h,children:s.TXT_404}),(0,t.jsx)(n.f,{style:p,children:c.TXT_PAGE_NOT_FOUND})]})})]})}],65184)}]);