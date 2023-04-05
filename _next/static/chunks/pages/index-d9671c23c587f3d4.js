(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7484:function(t){var e,r,n,i,o,s,a,u,l,c,h,d,f,m,g,p,S,y,v,$,x;t.exports=(e="millisecond",r="second",n="minute",i="hour",o="week",s="month",a="quarter",u="year",l="date",c="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},(g={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||"th")+"]"}},p=function(t){return t instanceof $},S=function t(e,r,n){var i;if(!e)return m;if("string"==typeof e){var o=e.toLowerCase();g[o]&&(i=o),r&&(g[o]=r,i=o);var s=e.split("-");if(!i&&s.length>1)return t(s[0])}else{var a=e.name;g[a]=e,i=a}return!n&&i&&(m=i),i||!n&&m},y=function(t,e){if(p(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new $(r)},(v={s:f,z:function(t){var e=-t.utcOffset(),r=Math.abs(e);return(e<=0?"+":"-")+f(Math.floor(r/60),2,"0")+":"+f(r%60,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,s),o=r-i<0,a=e.clone().add(n+(o?-1:1),s);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:s,y:u,w:o,d:"day",D:l,h:i,m:n,s:r,ms:e,Q:a})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=S,v.i=p,v.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},x=($=function(){function t(t){this.$L=S(t.locale,null,!0),this.parse(t)}var f=t.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(h);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return v},f.isValid=function(){return this.$d.toString()!==c},f.isSame=function(t,e){var r=y(t);return this.startOf(e)<=r&&r<=this.endOf(e)},f.isAfter=function(t,e){return y(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<y(t)},f.$g=function(t,e,r){return v.u(t)?this[e]:this.set(r,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,e){var a=this,c=!!v.u(e)||e,h=v.p(t),d=function(t,e){var r=v.w(a.$u?Date.UTC(a.$y,e,t):new Date(a.$y,e,t),a);return c?r:r.endOf("day")},f=function(t,e){return v.w(a.toDate()[t].apply(a.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),a)},m=this.$W,g=this.$M,p=this.$D,S="set"+(this.$u?"UTC":"");switch(h){case u:return c?d(1,0):d(31,11);case s:return c?d(1,g):d(0,g+1);case o:var y=this.$locale().weekStart||0,$=(m<y?m+7:m)-y;return d(c?p-$:p+(6-$),g);case"day":case l:return f(S+"Hours",0);case i:return f(S+"Minutes",1);case n:return f(S+"Seconds",2);case r:return f(S+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(t,o){var a,c=v.p(t),h="set"+(this.$u?"UTC":""),d=((a={}).day=h+"Date",a[l]=h+"Date",a[s]=h+"Month",a[u]=h+"FullYear",a[i]=h+"Hours",a[n]=h+"Minutes",a[r]=h+"Seconds",a[e]=h+"Milliseconds",a)[c],f="day"===c?this.$D+(o-this.$W):o;if(c===s||c===u){var m=this.clone().set(l,1);m.$d[d](f),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d](f);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[v.p(t)]()},f.add=function(t,e){var a,l=this;t=Number(t);var c=v.p(e),h=function(e){var r=y(l);return v.w(r.date(r.date()+Math.round(e*t)),l)};if(c===s)return this.set(s,this.$M+t);if(c===u)return this.set(u,this.$y+t);if("day"===c)return h(1);if(c===o)return h(7);var d=((a={})[n]=6e4,a[i]=36e5,a[r]=1e3,a)[c]||1,f=this.$d.getTime()+t*d;return v.w(f,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||c;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=v.z(this),o=this.$H,s=this.$m,a=this.$M,u=r.weekdays,l=r.months,h=function(t,r,i,o){return t&&(t[r]||t(e,n))||i[r].slice(0,o)},f=function(t){return v.s(o%12||12,t,"0")},m=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:v.s(a+1,2,"0"),MMM:h(r.monthsShort,a,l,3),MMMM:h(l,a),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:h(r.weekdaysMin,this.$W,u,2),ddd:h(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(o),HH:v.s(o,2,"0"),h:f(1),hh:f(2),a:m(o,s,!0),A:m(o,s,!1),m:String(s),mm:v.s(s,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:i};return n.replace(d,function(t,e){return e||g[t]||i.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(t,e,l){var c,h=v.p(e),d=y(t),f=(d.utcOffset()-this.utcOffset())*6e4,m=this-d,g=v.m(this,d);return g=((c={})[u]=g/12,c[s]=g,c[a]=g/3,c[o]=(m-f)/6048e5,c.day=(m-f)/864e5,c[i]=m/36e5,c[n]=m/6e4,c[r]=m/1e3,c)[h]||m,l?g:v.a(g)},f.daysInMonth=function(){return this.endOf(s).$D},f.$locale=function(){return g[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=S(t,e,!0);return n&&(r.$L=n),r},f.clone=function(){return v.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},t}()).prototype,y.prototype=x,[["$ms",e],["$s",r],["$m",n],["$H",i],["$W","day"],["$M",s],["$y",u],["$D",l]].forEach(function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),y.extend=function(t,e){return t.$i||(t(e,$,y),t.$i=!0),y},y.locale=S,y.isDayjs=p,y.unix=function(t){return y(1e3*t)},y.en=g[m],y.Ls=g,y.p={},y)},5054:function(t){t.exports={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||"th")+"]"}}},7553:function(t,e,r){var n,i;t.exports=(n=r(7484),i={name:"vi",weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ s\xe1u_thứ bảy".split("_"),months:"th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"),weekStart:1,weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),ordinal:function(t){return t},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},relativeTime:{future:"%s tới",past:"%s trước",s:"v\xe0i gi\xe2y",m:"một ph\xfat",mm:"%d ph\xfat",h:"một giờ",hh:"%d giờ",d:"một ng\xe0y",dd:"%d ng\xe0y",M:"một th\xe1ng",MM:"%d th\xe1ng",y:"một năm",yy:"%d năm"}},(n&&"object"==typeof n&&"default"in n?n:{default:n}).default.locale(i,null,!0),i)},8734:function(t){t.exports=function(t,e){var r=e.prototype,n=r.format;r.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return n.bind(this)(t);var i=this.$utils(),o=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return r.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return r.ordinal(e.week(),"W");case"w":case"ww":return i.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return i.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return i.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}});return n.bind(this)(o)}}},6176:function(t){var e;t.exports=(e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},function(t,r,n){var i=r.prototype,o=i.format;n.en.formats=e,i.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var r,n,i=this.$locale().formats,s=(r=t,n=void 0===i?{}:i,r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,r,i){var o=i&&i.toUpperCase();return r||n[i]||e[i]||n[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,r){return e||r.slice(1)})}));return o.call(this,s)}})},4110:function(t){t.exports=function(t,e,r){t=t||{};var n=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(t,e,r,i){return n.fromToBase(t,e,r,i)}r.en.relativeTime=i,n.fromToBase=function(e,n,o,s,a){for(var u,l,c,h=o.$locale().relativeTime||i,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=d.length,m=0;m<f;m+=1){var g=d[m];g.d&&(u=s?r(e).diff(o,g.d,!0):o.diff(e,g.d,!0));var p=(t.rounding||Math.round)(Math.abs(u));if(c=u>0,p<=g.r||!g.r){p<=1&&m>0&&(g=d[m-1]);var S=h[g.l];a&&(p=a(""+p)),l="string"==typeof S?S.replace("%d",p):S(p,n,g.l,c);break}}if(n)return l;var y=c?h.future:h.past;return"function"==typeof y?y(l):y.replace("%s",l)},n.to=function(t,e){return o(t,e,this,!0)},n.from=function(t,e){return o(t,e,this)};var s=function(t){return t.$u?r.utc():r()};n.toNow=function(t){return this.to(s(this),t)},n.fromNow=function(t){return this.from(s(this),t)}}},9387:function(t){var e,r;t.exports=(e={year:0,month:1,day:2,hour:3,minute:4,second:5},r={},function(t,n,i){var o,s=function(t,e,n){void 0===n&&(n={});var i,o,s,a,u=new Date(t);return(void 0===(i=n)&&(i={}),(a=r[s=e+"|"+(o=i.timeZoneName||"short")])||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:o}),r[s]=a),a).formatToParts(u)},a=function(t,r){for(var n=s(t,r),o=[],a=0;a<n.length;a+=1){var u=n[a],l=u.type,c=u.value,h=e[l];h>=0&&(o[h]=parseInt(c,10))}var d=o[3],f=o[0]+"-"+o[1]+"-"+o[2]+" "+(24===d?0:d)+":"+o[4]+":"+o[5]+":000",m=+t;return(i.utc(f).valueOf()-(m-=m%1e3))/6e4},u=n.prototype;u.tz=function(t,e){void 0===t&&(t=o);var r=this.utcOffset(),n=this.toDate(),s=n.toLocaleString("en-US",{timeZone:t}),a=Math.round((n-new Date(s))/1e3/60),u=i(s).$set("millisecond",this.$ms).utcOffset(-(15*Math.round(n.getTimezoneOffset()/15))-a,!0);if(e){var l=u.utcOffset();u=u.add(r-l,"minute")}return u.$x.$timezone=t,u},u.offsetName=function(t){var e=this.$x.$timezone||i.tz.guess(),r=s(this.valueOf(),e,{timeZoneName:t}).find(function(t){return"timezonename"===t.type.toLowerCase()});return r&&r.value};var l=u.startOf;u.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return l.call(this,t,e);var r=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(r,t,e).tz(this.$x.$timezone,!0)},i.tz=function(t,e,r){var n=r||e||o,s=a(+i(),n);if("string"!=typeof t)return i(t).tz(n);var u=function(t,e,r){var n=t-60*e*1e3,i=a(n,r);if(e===i)return[n,e];var o=a(n-=60*(i-e)*1e3,r);return i===o?[n,i]:[t-60*Math.min(i,o)*1e3,Math.max(i,o)]}(i.utc(t,r&&e).valueOf(),s,n),l=u[0],c=u[1],h=i(l).utcOffset(c);return h.$x.$timezone=n,h},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(t){o=t}})},178:function(t){var e,r,n;t.exports=(e="minute",r=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g,function(t,i,o){var s=i.prototype;o.utc=function(t){var e={date:t,utc:!0,args:arguments};return new i(e)},s.utc=function(t){var r=o(this.toDate(),{locale:this.$L,utc:!0});return t?r.add(this.utcOffset(),e):r},s.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var a=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var u=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else u.call(this)};var l=s.utcOffset;s.utcOffset=function(t,i){var o=this.$utils().u;if(o(t))return this.$u?0:o(this.$offset)?l.call(this):this.$offset;if("string"==typeof t&&null===(t=function(t){void 0===t&&(t="");var e=t.match(r);if(!e)return null;var i=(""+e[0]).match(n)||["-",0,0],o=i[0],s=60*+i[1]+ +i[2];return 0===s?0:"+"===o?s:-s}(t)))return this;var s=16>=Math.abs(t)?60*t:t,a=this;if(i)return a.$offset=s,a.$u=0===t,a;if(0!==t){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(s+u,e)).$offset=s,a.$x.$localOffset=u}else a=this.utc();return a};var c=s.format;s.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,e)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var h=s.toDate;s.toDate=function(t){return"s"===t&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():h.call(this)};var d=s.diff;s.diff=function(t,e,r){if(t&&this.$u===t.$u)return d.call(this,t,e,r);var n=this.local(),i=o(t).local();return d.call(n,i,e,r)}})},8312:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(971)}])},6845:function(t,e,r){"use strict";r.d(e,{Z:function(){return w}});var n=r(5893),i=r(7294),o=r(2051);let s=()=>{let t=(0,i.useContext)(o.V);if(!t)throw Error("useLayout must be used inside of a LayoutProvider.");return t};var a=r(1533),u=r(7484),l=r.n(u),c=r(178),h=r.n(c),d=r(9387),f=r.n(d),m=r(4110),g=r.n(m),p=r(6176),S=r.n(p),y=r(8734),v=r.n(y);r(5054),r(7553);var $=r(1255),x=r(3015);let M=(t,e)=>(l().extend(h()),l().extend(f()),l().extend(g()),l().extend(S()),l().extend(v()),l()(e).tz($.X.Xu).locale(t).clone()),_=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x.NE,r=arguments.length>2?arguments[2]:void 0;return M(e,t).format(r)};var Y=r(43);let D=t=>{let{children:e,dateStr:r,format:i="D MMMM, YYYY",...o}=t,{currentLocale:u}=s();return(0,n.jsx)(a.Z,{style:T,elementName:Y.nf,...o,children:_(r,u,i)})},T={};var w=D},1255:function(t,e,r){"use strict";r.d(e,{X:function(){return n}});var n={};r.r(n),r.d(n,{XN:function(){return l},C7:function(){return c},x1:function(){return u},$A:function(){return h},yC:function(){return s},Xu:function(){return a}});var i=r(5260),o=r(2654);let s="posts",a="Antarctica/Davis",u="Mistsu",l=i.Bq,c=o.J6,h=8;r(8964)},971:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return tt},default:function(){return te}});var n=r(5893),i=r(7294),o=r(1533),s=r(5919),a=r(43),u=r(5260);let l=t=>{let{children:e,text:r,blinkColor:s,...l}=t,[d,f]=(0,i.useState)(""),[m,g]=(0,i.useState)(0),[p,S]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{if(m>=r.length)return;let t=setTimeout(()=>{S(!p)},100*Math.random());return()=>clearTimeout(t)}),(0,i.useEffect)(()=>{.1>Math.random()||g(m+1)},[p]),(0,i.useEffect)(()=>{m>=r.length||f(d+r[m])},[m]),(0,n.jsxs)(o.Z,{style:c,...l,children:[d,(0,n.jsx)(o.Z,{style:h,css:{color:s},elementName:a.tK,children:u.v6})]})},c={whiteSpace:"pre-line"},h={animation:"".concat((0,s.F4)({"0%":{opacity:1},"50%":{opacity:0},"100%":{opacity:1}})," 1.5s infinite ease-in-out")};var d=r(1255);let f=t=>{let{children:e,...r}=t;return(0,n.jsxs)(o.Z,{style:m,...r,children:[(0,n.jsx)(o.Z,{src:d.X.C7,as:a.MY,style:g}),(0,n.jsx)(o.Z,{style:p,children:d.X.x1}),(0,n.jsx)(o.Z,{style:S,children:(0,n.jsx)(l,{text:d.X.XN,blinkColor:"".concat(s.rS.colors.secondary)})})]})},m={border:2,borderRadius:16,borderStyle:"dashed",borderColor:s.rS.colors.divider25,paddingLeft:80,paddingRight:80,paddingTop:16,paddingBottom:16,backgroundColor:s.rS.colors.authorBackground,boxShadow:s.rS.shadows.homeAuthor,display:"grid",gridTemplateAreas:'"intro-author-logo intro-author-name" "intro-author-logo intro-author-desc"',columnGap:32,rowGap:4,fontFamily:s.rS.fonts.content},g={gridArea:"intro-author-logo",borderRadius:"100%",width:180,height:180},p={gridArea:"intro-author-name",display:"flex",justifyContent:"center",alignItems:"end",fontSize:s.rS.fontSizes.h4,fontWeight:s.rS.fontWeights.h4,letterSpacing:s.rS.letterSpacings.h4,textDecoration:"underline",color:s.rS.colors.tertiary},S={gridArea:"intro-author-desc",display:"flex",justifyContent:"center",alignItems:"top",textAlign:"center",fontSize:s.rS.fontSizes.h5,letterSpacing:s.rS.letterSpacings.h5,lineHeight:s.rS.lineHeights.h5,color:s.rS.colors.textGeneral},y=t=>{let{children:e,...r}=t;return(0,n.jsx)(o.Z,{style:v,...r,children:(0,n.jsx)(f,{})})},v={paddingLeft:120,paddingRight:120,paddingTop:40,paddingBottom:40};var $=r(6232),x=r(2654);let M=t=>{let{children:e,coverImageURL:r,link:i,...s}=t;return(0,n.jsx)(o.Z,{style:_,children:(0,n.jsx)(o.Z,{as:$.Z,style:Y,href:i,children:(0,n.jsx)(o.Z,{style:D,elementName:a.MY,src:r||x.V9,onError:t=>{t.target.src=x.bR},...s,children:e})})})},_={display:"flex",justifyContent:"center",alignItems:"center",paddingTop:8,paddingBottom:8},Y={display:"flex",width:"75%",padding:4,backgroundImage:s.rS.colors.gradient12,borderRadius:16,"&:hover":{transform:"translateX(-6px) translateY(-6px)",boxShadow:s.rS.shadows.homePostCoverHover},"&:active":{transform:"translateX(-1px) translateY(-1px)",boxShadow:s.rS.shadows.homePostCoverClick}},D={backgroundColor:s.rS.colors.pageBackground,boxShadow:s.rS.shadows.homePostCoverNormal,borderRadius:16,width:"100%",height:200,objectFit:"cover"},T=t=>{let{children:e,title:r,link:i,...s}=t;return(0,n.jsx)(o.Z,{as:$.Z,style:w,href:i,...s,children:r})},w={color:s.rS.colors.textLess,fontSize:s.rS.fontSizes.h3,fontWeight:s.rS.fontWeights.bold,letterSpacing:s.rS.letterSpacings.h3,padding:0,"&:link":{textDecoration:"underline"},"&:hover":{color:s.rS.colors.textActive,backgroundColor:"transparent"}},b=t=>{let{children:e,description:r,...i}=t;return(0,n.jsx)(o.Z,{style:j,...i,children:r||u.S5})},j={color:s.rS.colors.textLesser,fontSize:s.rS.fontSizes.h5,letterSpacing:s.rS.letterSpacings.h5};var L=r(6845);let C=t=>{var e;let{children:r,post:i,...s}=t;return(0,n.jsxs)(o.Z,{style:O,...s,children:[(0,n.jsxs)(o.Z,{style:Z,children:[(0,n.jsx)(L.Z,{dateStr:i.date})," \xa0|\xa0",i.minsRead," ",u.G8]}),(0,n.jsx)(o.Z,{style:z,children:null===(e=i.tags)||void 0===e?void 0:e.map((t,e)=>(0,n.jsx)(o.Z,{style:H,children:"#".concat(t)},e))})]})},O={display:"grid",gridTemplateColumns:"1fr 1fr",fontSize:s.rS.fontSizes.h6,fontWeight:s.rS.fontWeights.bold,letterSpacing:s.rS.letterSpacings.h6},Z={display:"flex",justifyContent:"left",color:s.rS.colors.textLess},z={display:"flex",justifyContent:"right",gap:4},H={color:s.rS.colors.primaryInactive,"&:hover":{color:s.rS.colors.primary,textDecoration:"underline"}},k=t=>{let{children:e,posts:r,...i}=t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{style:W,children:u.Kb}),r.map((t,e)=>(0,n.jsxs)(o.Z,{style:N,...i,children:[(0,n.jsx)(M,{coverImageURL:t.coverImage,link:"/".concat(d.X.yC,"/").concat(t.slug)}),(0,n.jsx)(T,{title:t.title,link:"/".concat(d.X.yC,"/").concat(t.slug)}),(0,n.jsx)(b,{description:t.description}),(0,n.jsx)(C,{post:t})]},e))]})},W={fontFamily:s.rS.fonts.global,fontSize:s.rS.fontSizes.h2,fontWeight:s.rS.fontWeights.h2,letterSpacing:s.rS.letterSpacings.h2,color:s.rS.colors.textLess,paddingBottom:8,paddingLeft:16,"&:before":{content:"< ",color:s.rS.colors.textLeast},"&:after":{content:" />",color:s.rS.colors.textLeast}},N={paddingLeft:24,paddingRight:24,paddingBottom:24,paddingTop:8,display:"flex",flexDirection:"column",gap:4,fontFamily:s.rS.fonts.global,border:0,borderTop:2,borderStyle:"dashed",borderColor:s.rS.colors.divider25},A=t=>{let{children:e,currentPage:r,setCurrentPage:i,noPosts:s,...l}=t,c=Math.ceil(s/d.X.$A);if(r>=c||r<0)return(0,n.jsx)(o.Z,{style:I,...l,children:u.SY});let h=t=>{t>=0&&t<c&&i(t)},f=()=>{r<c-1&&i(r+1)},m=()=>{r>0&&i(r-1)},g=[];r-1>0&&g.push(0),r-1>1&&g.push("...");for(let t=Math.max(r-1,0);t<=Math.min(r+1,c-1);++t)g.push(t);return r+1<c-2&&g.push("..."),r+1<c-1&&g.push(c-1),(0,n.jsxs)(o.Z,{style:I,...l,children:[(0,n.jsx)(o.Z,{style:r>0?B:G,elementName:a.tK,onClick:()=>{m()},children:"<-"}),g.map(t=>(0,n.jsx)(o.Z,{css:t===r?X:U,style:F,elementName:a.tK,onClick:()=>{"number"==typeof t&&h(t)},children:t},t)),(0,n.jsx)(o.Z,{style:r<c-1?E:P,elementName:a.tK,onClick:()=>{f()},children:"->"})]})},I={fontFamily:s.rS.fonts.global,userSelect:"none",display:"flex",alignItems:"end",justifyContent:"center",gap:8,paddingTop:8,paddingBottom:8},X={fontSize:s.rS.fontSizes.h4,fontWeight:s.rS.fontWeights.bold,letterSpacing:s.rS.letterSpacings.h4},U={fontSize:s.rS.fontSizes.h5,letterSpacing:s.rS.letterSpacings.h5,"&:active":{transform:"translateY(4px)"}},F={color:s.rS.colors.textLess,"&:hover":{color:s.rS.colors.textActive}},B={color:s.rS.colors.prev,fontWeight:s.rS.fontWeights.bold,"&:hover":{color:s.rS.colors.prevActive},"&:active":{transform:"translateY(4px)"}},G={color:s.rS.colors.prevShade,fontWeight:s.rS.fontWeights.bold},E={color:s.rS.colors.next,fontWeight:s.rS.fontWeights.bold,"&:hover":{color:s.rS.colors.nextActive},"&:active":{transform:"translateY(4px)"}},P={color:s.rS.colors.nextShade,fontWeight:s.rS.fontWeights.bold},R=t=>{let{children:e,posts:r,...s}=t,[a,u]=(0,i.useState)(0);return(0,n.jsxs)(o.Z,{style:J,...s,children:[(0,n.jsx)(o.Z,{style:V,children:(0,n.jsx)(y,{})}),(0,n.jsx)(o.Z,{style:K,children:(0,n.jsx)(k,{posts:r.slice(d.X.$A*a,d.X.$A*(a+1))})}),(0,n.jsx)(o.Z,{style:Q,children:(0,n.jsx)(A,{currentPage:a,setCurrentPage:u,noPosts:r.length})})]})},J={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingBottom:24},V={width:832},K={width:832},Q={width:832},q=t=>{let{posts:e}=t;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(R,{posts:e})})};var tt=!0,te=q}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);