(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{7965:(t,e,n)=>{"use strict";var r=n(6426),i={"text/plain":"Text","text/html":"Url",default:"Text"};t.exports=function(t,e){var n,a,s,o,u,c,f,l,d=!1;e||(e={}),s=e.debug||!1;try{if(u=r(),c=document.createRange(),f=document.getSelection(),(l=document.createElement("span")).textContent=t,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(n){if(n.stopPropagation(),e.format){if(n.preventDefault(),void 0===n.clipboardData){s&&console.warn("unable to use e.clipboardData"),s&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=i[e.format]||i.default;window.clipboardData.setData(r,t)}else n.clipboardData.clearData(),n.clipboardData.setData(e.format,t)}e.onCopy&&(n.preventDefault(),e.onCopy(n.clipboardData))}),document.body.appendChild(l),c.selectNodeContents(l),f.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");d=!0}catch(r){s&&console.error("unable to copy using execCommand: ",r),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),d=!0}catch(r){s&&console.error("unable to copy using clipboardData: ",r),s&&console.error("falling back to prompt"),n="message"in e?e.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",o=n.replace(/#{\s*key\s*}/g,a),window.prompt(o,t)}}finally{f&&("function"==typeof f.removeRange?f.removeRange(c):f.removeAllRanges()),l&&document.body.removeChild(l),u()}return d}},4353:function(t){var e;e=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="week",a="month",s="quarter",o="year",u="date",c="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},h="en",m={};m[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}};var p="$isDayjsObject",$=function(t){return t instanceof M||!(!t||!t[p])},y=function t(e,n,r){var i;if(!e)return h;if("string"==typeof e){var a=e.toLowerCase();m[a]&&(i=a),n&&(m[a]=n,i=a);var s=e.split("-");if(!i&&s.length>1)return t(s[0])}else{var o=e.name;m[o]=e,i=o}return!r&&i&&(h=i),i||!r&&h},v=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},g={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+d(Math.floor(n/60),2,"0")+":"+d(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,o=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return({M:a,y:o,w:i,d:"day",D:u,h:r,m:n,s:e,ms:t,Q:s})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}};g.l=y,g.i=$,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function d(t){this.$L=y(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var h=d.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return g},h.isValid=function(){return this.$d.toString()!==c},h.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return v(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<v(t)},h.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,s){var c=this,f=!!g.u(s)||s,l=g.p(t),d=function(t,e){var n=g.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return f?n:n.endOf("day")},h=function(t,e){return g.w(c.toDate()[t].apply(c.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,p=this.$M,$=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case o:return f?d(1,0):d(31,11);case a:return f?d(1,p):d(0,p+1);case i:var v=this.$locale().weekStart||0,M=(m<v?m+7:m)-v;return d(f?$-M:$+(6-M),p);case"day":case u:return h(y+"Hours",0);case r:return h(y+"Minutes",1);case n:return h(y+"Seconds",2);case e:return h(y+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(i,s){var c,f=g.p(i),l="set"+(this.$u?"UTC":""),d=((c={}).day=l+"Date",c[u]=l+"Date",c[a]=l+"Month",c[o]=l+"FullYear",c[r]=l+"Hours",c[n]=l+"Minutes",c[e]=l+"Seconds",c[t]=l+"Milliseconds",c)[f],h="day"===f?this.$D+(s-this.$W):s;if(f===a||f===o){var m=this.clone().set(u,1);m.$d[d](h),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d](h);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[g.p(t)]()},h.add=function(t,s){var u,c=this;t=Number(t);var f=g.p(s),l=function(e){var n=v(c);return g.w(n.date(n.date()+Math.round(e*t)),c)};if(f===a)return this.set(a,this.$M+t);if(f===o)return this.set(o,this.$y+t);if("day"===f)return l(1);if(f===i)return l(7);var d=((u={})[n]=6e4,u[r]=36e5,u[e]=1e3,u)[f]||1,h=this.$d.getTime()+t*d;return g.w(h,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=g.z(this),a=this.$H,s=this.$m,o=this.$M,u=n.weekdays,f=n.months,d=n.meridiem,h=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},m=function(t){return g.s(a%12||12,t,"0")},p=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(l,function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return g.s(e.$y,4,"0");case"M":return o+1;case"MM":return g.s(o+1,2,"0");case"MMM":return h(n.monthsShort,o,f,3);case"MMMM":return h(f,o);case"D":return e.$D;case"DD":return g.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,u,2);case"ddd":return h(n.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(a);case"HH":return g.s(a,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return p(a,s,!0);case"A":return p(a,s,!1);case"m":return String(s);case"mm":return g.s(s,2,"0");case"s":return String(e.$s);case"ss":return g.s(e.$s,2,"0");case"SSS":return g.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(t,u,c){var f,l=this,d=g.p(u),h=v(t),m=(h.utcOffset()-this.utcOffset())*6e4,p=this-h,$=function(){return g.m(l,h)};switch(d){case o:f=$()/12;break;case a:f=$();break;case s:f=$()/3;break;case i:f=(p-m)/6048e5;break;case"day":f=(p-m)/864e5;break;case r:f=p/36e5;break;case n:f=p/6e4;break;case e:f=p/1e3;break;default:f=p}return c?f:g.a(f)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return m[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return g.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},d}(),D=M.prototype;return v.prototype=D,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W","day"],["$M",a],["$y",o],["$D",u]].forEach(function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,M,v),t.$i=!0),v},v.locale=y,v.isDayjs=$,v.unix=function(t){return v(1e3*t)},v.en=m[h],v.Ls=m,v.p={},v},t.exports=e()},5826:function(t){var e;e=function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}}},t.exports=e()},860:function(t,e,n){var r;r=function(t){"use strict";var e={name:"vi",weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ s\xe1u_thứ bảy".split("_"),months:"th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"),weekStart:1,weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),ordinal:function(t){return t},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},relativeTime:{future:"%s tới",past:"%s trước",s:"v\xe0i gi\xe2y",m:"một ph\xfat",mm:"%d ph\xfat",h:"một giờ",hh:"%d giờ",d:"một ng\xe0y",dd:"%d ng\xe0y",M:"một th\xe1ng",MM:"%d th\xe1ng",y:"một năm",yy:"%d năm"}};return(t&&"object"==typeof t&&"default"in t?t:{default:t}).default.locale(e,null,!0),e},t.exports=r(n(4353))},7375:function(t){var e;e=function(){return function(t,e){var n=e.prototype,r=n.format;n.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return r.bind(this)(t);var i=this.$utils(),a=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return n.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return n.ordinal(e.week(),"W");case"w":case"ww":return i.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return i.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return i.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}});return r.bind(this)(a)}}},t.exports=e()},5750:function(t){var e;e=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(e,n,r){var i=n.prototype,a=i.format;r.en.formats=t,i.format=function(e){void 0===e&&(e="YYYY-MM-DDTHH:mm:ssZ");var n,r,i=this.$locale().formats,s=(n=e,r=void 0===i?{}:i,n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(e,n,i){var a=i&&i.toUpperCase();return n||r[i]||t[i]||r[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,n){return e||n.slice(1)})}));return a.call(this,s)}}},t.exports=e()},6279:function(t){var e;e=function(){return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,a,s,o){for(var u,c,f,l=a.$locale().relativeTime||i,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=d.length,m=0;m<h;m+=1){var p=d[m];p.d&&(u=s?n(e).diff(a,p.d,!0):a.diff(e,p.d,!0));var $=(t.rounding||Math.round)(Math.abs(u));if(f=u>0,$<=p.r||!p.r){$<=1&&m>0&&(p=d[m-1]);var y=l[p.l];o&&($=o(""+$)),c="string"==typeof y?y.replace("%d",$):y($,r,p.l,f);break}}if(r)return c;var v=f?l.future:l.past;return"function"==typeof v?v(c):v.replace("%s",c)},r.to=function(t,e){return a(t,e,this,!0)},r.from=function(t,e){return a(t,e,this)};var s=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(s(this),t)},r.fromNow=function(t){return this.from(s(this),t)}}},t.exports=e()},8569:function(t){var e;e=function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,r,i){var a,s=function(t,n,r){void 0===r&&(r={});var i,a,s,o,u=new Date(t);return(void 0===(i=r)&&(i={}),(o=e[s=n+"|"+(a=i.timeZoneName||"short")])||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:n,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:a}),e[s]=o),o).formatToParts(u)},o=function(e,n){for(var r=s(e,n),a=[],o=0;o<r.length;o+=1){var u=r[o],c=u.type,f=u.value,l=t[c];l>=0&&(a[l]=parseInt(f,10))}var d=a[3],h=a[0]+"-"+a[1]+"-"+a[2]+" "+(24===d?0:d)+":"+a[4]+":"+a[5]+":000",m=+e;return(i.utc(h).valueOf()-(m-=m%1e3))/6e4},u=r.prototype;u.tz=function(t,e){void 0===t&&(t=a);var n=this.utcOffset(),r=this.toDate(),s=r.toLocaleString("en-US",{timeZone:t}),o=Math.round((r-new Date(s))/1e3/60),u=i(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(-(15*Math.round(r.getTimezoneOffset()/15))-o,!0);if(e){var c=u.utcOffset();u=u.add(n-c,"minute")}return u.$x.$timezone=t,u},u.offsetName=function(t){var e=this.$x.$timezone||i.tz.guess(),n=s(this.valueOf(),e,{timeZoneName:t}).find(function(t){return"timezonename"===t.type.toLowerCase()});return n&&n.value};var c=u.startOf;u.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return c.call(this,t,e);var n=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return c.call(n,t,e).tz(this.$x.$timezone,!0)},i.tz=function(t,e,n){var r=n&&e,s=n||e||a,u=o(+i(),s);if("string"!=typeof t)return i(t).tz(s);var c=function(t,e,n){var r=t-60*e*1e3,i=o(r,n);if(e===i)return[r,e];var a=o(r-=60*(i-e)*1e3,n);return i===a?[r,i]:[t-60*Math.min(i,a)*1e3,Math.max(i,a)]}(i.utc(t,r).valueOf(),u,s),f=c[0],l=c[1],d=i(f).utcOffset(l);return d.$x.$timezone=s,d},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(t){a=t}}},t.exports=e()},3826:function(t){var e;e=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,i,a){var s=i.prototype;a.utc=function(t){var e={date:t,utc:!0,args:arguments};return new i(e)},s.utc=function(e){var n=a(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},s.local=function(){return a(this.toDate(),{locale:this.$L,utc:!1})};var o=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var u=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else u.call(this)};var c=s.utcOffset;s.utcOffset=function(r,i){var a=this.$utils().u;if(a(r))return this.$u?0:a(this.$offset)?c.call(this):this.$offset;if("string"==typeof r&&null===(r=function(t){void 0===t&&(t="");var r=t.match(e);if(!r)return null;var i=(""+r[0]).match(n)||["-",0,0],a=i[0],s=60*+i[1]+ +i[2];return 0===s?0:"+"===a?s:-s}(r)))return this;var s=16>=Math.abs(r)?60*r:r,o=this;if(i)return o.$offset=s,o.$u=0===r,o;if(0!==r){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(s+u,t)).$offset=s,o.$x.$localOffset=u}else o=this.utc();return o};var f=s.format;s.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return f.call(this,e)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var l=s.toDate;s.toDate=function(t){return"s"===t&&this.$offset?a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var d=s.diff;s.diff=function(t,e,n){if(t&&this.$u===t.$u)return d.call(this,t,e,n);var r=this.local(),i=a(t).local();return d.call(r,i,e,n)}}},t.exports=e()},4811:()=>{},3778:t=>{"use strict";var e=function(t,e){return t+n(e)},n=function(t){return null===t||"boolean"==typeof t||void 0===t?"":"number"==typeof t?t.toString():"string"==typeof t?t:Array.isArray(t)?t.reduce(e,""):Object.prototype.hasOwnProperty.call(t,"props")&&Object.prototype.hasOwnProperty.call(t.props,"children")?n(t.props.children):""};n.default=n,t.exports=n},6426:t=>{t.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||n.forEach(function(e){t.addRange(e)}),e&&e.focus()}}},3728:(t,e,n)=>{t.exports.jsxRuntime=n(4848)},6175:(t,e,n)=>{"use strict";n.d(e,{m:()=>l});var r={};n.r(r),n.d(r,{MDXContext:()=>s,MDXProvider:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>o});var i=n(6540),a=n(3728);let s=i.createContext({});function o(t){return function(e){let n=u(e.components);return i.createElement(t,{...e,allComponents:n})}}function u(t){let e=i.useContext(s);return i.useMemo(()=>"function"==typeof t?t(e):{...e,...t},[e,t])}let c={};function f({components:t,children:e,disableParentContext:n}){let r;return r=n?"function"==typeof t?t({}):t||c:u(t),i.createElement(s.Provider,{value:r},e)}function l({compiledSource:t,frontmatter:e,scope:n,components:s={},lazy:o}){let[u,c]=(0,i.useState)(!o||"undefined"==typeof window);(0,i.useEffect)(()=>{if(o){let t=window.requestIdleCallback(()=>{c(!0)});return()=>window.cancelIdleCallback(t)}},[]);let l=(0,i.useMemo)(()=>{let i=Object.assign({opts:{...r,...a.jsxRuntime}},{frontmatter:e},n),s=Object.keys(i),o=Object.values(i),u=Reflect.construct(Function,s.concat(`${t}`));return u.apply(u,o).default},[n,t]);if(!u)return i.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let d=i.createElement(f,{components:s},i.createElement(l,null));return o?i.createElement("div",null,d):d}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(t){clearTimeout(t)})}}]);