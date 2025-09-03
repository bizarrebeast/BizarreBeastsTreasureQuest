import{aa as yt,c as nt,i as st,x as m,r as At,b as pt,ab as R,C as xt,R as Ct,O as kt,a as Rt,l as Lt,W as jt}from"./Web3Utils-B9S0Ym5F.js";import{U as _t,n as _,c as at,r as ot}from"./index-I4fzqrLd.js";import"./index-CCXQaVjG.js";import"./index-Ctfs7oXl.js";import{o as Nt}from"./if-defined-C8_ZzyAc.js";import"./index-UUekRcgQ.js";import"./index-nFwtAFPe.js";var ft={exports:{}},zt=ft.exports,It;function Ft(){return It||(It=1,(function(t,e){(function(i,s){t.exports=s()})(zt,(function(){var i=1e3,s=6e4,u=36e5,r="millisecond",c="second",d="minute",w="hour",g="day",v="week",$="month",U="quarter",M="year",C="date",j="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,X=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,tt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(p){var o=["th","st","nd","rd"],n=p%100;return"["+p+(o[(n-20)%10]||o[n]||o[0])+"]"}},et=function(p,o,n){var l=String(p);return!l||l.length>=o?p:""+Array(o+1-l.length).join(n)+p},E={s:et,z:function(p){var o=-p.utcOffset(),n=Math.abs(o),l=Math.floor(n/60),a=n%60;return(o<=0?"+":"-")+et(l,2,"0")+":"+et(a,2,"0")},m:function p(o,n){if(o.date()<n.date())return-p(n,o);var l=12*(n.year()-o.year())+(n.month()-o.month()),a=o.clone().add(l,$),h=n-a<0,f=o.clone().add(l+(h?-1:1),$);return+(-(l+(n-a)/(h?a-f:f-a))||0)},a:function(p){return p<0?Math.ceil(p)||0:Math.floor(p)},p:function(p){return{M:$,y:M,w:v,d:g,D:C,h:w,m:d,s:c,ms:r,Q:U}[p]||String(p||"").toLowerCase().replace(/s$/,"")},u:function(p){return p===void 0}},O="en",S={};S[O]=tt;var G="$isDayjsObject",W=function(p){return p instanceof lt||!(!p||!p[G])},ct=function p(o,n,l){var a;if(!o)return O;if(typeof o=="string"){var h=o.toLowerCase();S[h]&&(a=h),n&&(S[h]=n,a=h);var f=o.split("-");if(!a&&f.length>1)return p(f[0])}else{var x=o.name;S[x]=o,a=x}return!l&&a&&(O=a),a||!l&&O},T=function(p,o){if(W(p))return p.clone();var n=typeof o=="object"?o:{};return n.date=p,n.args=arguments,new lt(n)},y=E;y.l=ct,y.i=W,y.w=function(p,o){return T(p,{locale:o.$L,utc:o.$u,x:o.$x,$offset:o.$offset})};var lt=(function(){function p(n){this.$L=ct(n.locale,null,!0),this.parse(n),this.$x=this.$x||n.x||{},this[G]=!0}var o=p.prototype;return o.parse=function(n){this.$d=(function(l){var a=l.date,h=l.utc;if(a===null)return new Date(NaN);if(y.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var f=a.match(B);if(f){var x=f[2]-1||0,b=(f[7]||"0").substring(0,3);return h?new Date(Date.UTC(f[1],x,f[3]||1,f[4]||0,f[5]||0,f[6]||0,b)):new Date(f[1],x,f[3]||1,f[4]||0,f[5]||0,f[6]||0,b)}}return new Date(a)})(n),this.init()},o.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},o.$utils=function(){return y},o.isValid=function(){return this.$d.toString()!==j},o.isSame=function(n,l){var a=T(n);return this.startOf(l)<=a&&a<=this.endOf(l)},o.isAfter=function(n,l){return T(n)<this.startOf(l)},o.isBefore=function(n,l){return this.endOf(l)<T(n)},o.$g=function(n,l,a){return y.u(n)?this[l]:this.set(a,n)},o.unix=function(){return Math.floor(this.valueOf()/1e3)},o.valueOf=function(){return this.$d.getTime()},o.startOf=function(n,l){var a=this,h=!!y.u(l)||l,f=y.p(n),x=function(P,A){var F=y.w(a.$u?Date.UTC(a.$y,A,P):new Date(a.$y,A,P),a);return h?F:F.endOf(g)},b=function(P,A){return y.w(a.toDate()[P].apply(a.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(A)),a)},D=this.$W,I=this.$M,k=this.$D,Z="set"+(this.$u?"UTC":"");switch(f){case M:return h?x(1,0):x(31,11);case $:return h?x(1,I):x(0,I+1);case v:var H=this.$locale().weekStart||0,it=(D<H?D+7:D)-H;return x(h?k-it:k+(6-it),I);case g:case C:return b(Z+"Hours",0);case w:return b(Z+"Minutes",1);case d:return b(Z+"Seconds",2);case c:return b(Z+"Milliseconds",3);default:return this.clone()}},o.endOf=function(n){return this.startOf(n,!1)},o.$set=function(n,l){var a,h=y.p(n),f="set"+(this.$u?"UTC":""),x=(a={},a[g]=f+"Date",a[C]=f+"Date",a[$]=f+"Month",a[M]=f+"FullYear",a[w]=f+"Hours",a[d]=f+"Minutes",a[c]=f+"Seconds",a[r]=f+"Milliseconds",a)[h],b=h===g?this.$D+(l-this.$W):l;if(h===$||h===M){var D=this.clone().set(C,1);D.$d[x](b),D.init(),this.$d=D.set(C,Math.min(this.$D,D.daysInMonth())).$d}else x&&this.$d[x](b);return this.init(),this},o.set=function(n,l){return this.clone().$set(n,l)},o.get=function(n){return this[y.p(n)]()},o.add=function(n,l){var a,h=this;n=Number(n);var f=y.p(l),x=function(I){var k=T(h);return y.w(k.date(k.date()+Math.round(I*n)),h)};if(f===$)return this.set($,this.$M+n);if(f===M)return this.set(M,this.$y+n);if(f===g)return x(1);if(f===v)return x(7);var b=(a={},a[d]=s,a[w]=u,a[c]=i,a)[f]||1,D=this.$d.getTime()+n*b;return y.w(D,this)},o.subtract=function(n,l){return this.add(-1*n,l)},o.format=function(n){var l=this,a=this.$locale();if(!this.isValid())return a.invalidDate||j;var h=n||"YYYY-MM-DDTHH:mm:ssZ",f=y.z(this),x=this.$H,b=this.$m,D=this.$M,I=a.weekdays,k=a.months,Z=a.meridiem,H=function(A,F,rt,dt){return A&&(A[F]||A(l,h))||rt[F].slice(0,dt)},it=function(A){return y.s(x%12||12,A,"0")},P=Z||function(A,F,rt){var dt=A<12?"AM":"PM";return rt?dt.toLowerCase():dt};return h.replace(X,(function(A,F){return F||(function(rt){switch(rt){case"YY":return String(l.$y).slice(-2);case"YYYY":return y.s(l.$y,4,"0");case"M":return D+1;case"MM":return y.s(D+1,2,"0");case"MMM":return H(a.monthsShort,D,k,3);case"MMMM":return H(k,D);case"D":return l.$D;case"DD":return y.s(l.$D,2,"0");case"d":return String(l.$W);case"dd":return H(a.weekdaysMin,l.$W,I,2);case"ddd":return H(a.weekdaysShort,l.$W,I,3);case"dddd":return I[l.$W];case"H":return String(x);case"HH":return y.s(x,2,"0");case"h":return it(1);case"hh":return it(2);case"a":return P(x,b,!0);case"A":return P(x,b,!1);case"m":return String(b);case"mm":return y.s(b,2,"0");case"s":return String(l.$s);case"ss":return y.s(l.$s,2,"0");case"SSS":return y.s(l.$ms,3,"0");case"Z":return f}return null})(A)||f.replace(":","")}))},o.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},o.diff=function(n,l,a){var h,f=this,x=y.p(l),b=T(n),D=(b.utcOffset()-this.utcOffset())*s,I=this-b,k=function(){return y.m(f,b)};switch(x){case M:h=k()/12;break;case $:h=k();break;case U:h=k()/3;break;case v:h=(I-D)/6048e5;break;case g:h=(I-D)/864e5;break;case w:h=I/u;break;case d:h=I/s;break;case c:h=I/i;break;default:h=I}return a?h:y.a(h)},o.daysInMonth=function(){return this.endOf($).$D},o.$locale=function(){return S[this.$L]},o.locale=function(n,l){if(!n)return this.$L;var a=this.clone(),h=ct(n,l,!0);return h&&(a.$L=h),a},o.clone=function(){return y.w(this.$d,this)},o.toDate=function(){return new Date(this.valueOf())},o.toJSON=function(){return this.isValid()?this.toISOString():null},o.toISOString=function(){return this.$d.toISOString()},o.toString=function(){return this.$d.toUTCString()},p})(),Dt=lt.prototype;return T.prototype=Dt,[["$ms",r],["$s",c],["$m",d],["$H",w],["$W",g],["$M",$],["$y",M],["$D",C]].forEach((function(p){Dt[p[1]]=function(o){return this.$g(o,p[0],p[1])}})),T.extend=function(p,o){return p.$i||(p(o,lt,T),p.$i=!0),T},T.locale=ct,T.isDayjs=W,T.unix=function(p){return T(1e3*p)},T.en=S[O],T.Ls=S,T.p={},T}))})(ft)),ft.exports}var Yt=Ft();const Q=yt(Yt);var mt={exports:{}},Ut=mt.exports,Mt;function Bt(){return Mt||(Mt=1,(function(t,e){(function(i,s){t.exports=s()})(Ut,(function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var s=["th","st","nd","rd"],u=i%100;return"["+i+(s[(u-20)%10]||s[u]||s[0])+"]"}}}))})(mt)),mt.exports}var Et=Bt();const Wt=yt(Et);var gt={exports:{}},Ht=gt.exports,Ot;function Pt(){return Ot||(Ot=1,(function(t,e){(function(i,s){t.exports=s()})(Ht,(function(){return function(i,s,u){i=i||{};var r=s.prototype,c={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function d(g,v,$,U){return r.fromToBase(g,v,$,U)}u.en.relativeTime=c,r.fromToBase=function(g,v,$,U,M){for(var C,j,B,X=$.$locale().relativeTime||c,tt=i.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],et=tt.length,E=0;E<et;E+=1){var O=tt[E];O.d&&(C=U?u(g).diff($,O.d,!0):$.diff(g,O.d,!0));var S=(i.rounding||Math.round)(Math.abs(C));if(B=C>0,S<=O.r||!O.r){S<=1&&E>0&&(O=tt[E-1]);var G=X[O.l];M&&(S=M(""+S)),j=typeof G=="string"?G.replace("%d",S):G(S,v,O.l,B);break}}if(v)return j;var W=B?X.future:X.past;return typeof W=="function"?W(j):W.replace("%s",j)},r.to=function(g,v){return d(g,v,this,!0)},r.from=function(g,v){return d(g,v,this)};var w=function(g){return g.$u?u.utc():u()};r.toNow=function(g){return this.to(w(this),g)},r.fromNow=function(g){return this.from(w(this),g)}}}))})(gt)),gt.exports}var Vt=Pt();const qt=yt(Vt);var wt={exports:{}},Jt=wt.exports,St;function Gt(){return St||(St=1,(function(t,e){(function(i,s){t.exports=s()})(Jt,(function(){return function(i,s,u){u.updateLocale=function(r,c){var d=u.Ls[r];if(d)return(c?Object.keys(c):[]).forEach((function(w){d[w]=c[w]})),d}}}))})(wt)),wt.exports}var Zt=Gt();const Kt=yt(Zt);Q.extend(qt);Q.extend(Kt);const Qt={...Wt,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},Xt=["January","February","March","April","May","June","July","August","September","October","November","December"];Q.locale("en-web3-modal",Qt);const vt={getMonthNameByIndex(t){return Xt[t]},getYear(t=new Date().toISOString()){return Q(t).year()},getRelativeDateFromNow(t){return Q(t).locale("en-web3-modal").fromNow(!0)},formatDate(t,e="DD MMM"){return Q(t).format(e)}},te=3,ee=["receive","deposit","borrow","claim"],ie=["withdraw","repay","burn"],K={getTransactionGroupTitle(t,e){const i=vt.getYear(),s=vt.getMonthNameByIndex(e);return t===i?s:`${s} ${t}`},getTransactionImages(t){const[e,i]=t,s=!!e&&t?.every(c=>!!c.nft_info),u=t?.length>1;return t?.length===2&&!s?[this.getTransactionImage(i),this.getTransactionImage(e)]:u?t.map(c=>this.getTransactionImage(c)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:K.getTransactionTransferTokenType(t),url:K.getTransactionImageURL(t)}},getTransactionImageURL(t){let e;const i=!!t?.nft_info,s=!!t?.fungible_info;return t&&i?e=t?.nft_info?.content?.preview?.url:t&&s&&(e=t?.fungible_info?.icon?.url),e},getTransactionTransferTokenType(t){if(t?.fungible_info)return"FUNGIBLE";if(t?.nft_info)return"NFT"},getTransactionDescriptions(t){const e=t?.metadata?.operationType,i=t?.transfers,s=t?.transfers?.length>0,u=t?.transfers?.length>1,r=s&&i?.every($=>!!$?.fungible_info),[c,d]=i;let w=this.getTransferDescription(c),g=this.getTransferDescription(d);if(!s)return(e==="send"||e==="receive")&&r?(w=_t.getTruncateString({string:t?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),g=_t.getTruncateString({string:t?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[w,g]):[t.metadata.status];if(u)return i.map($=>this.getTransferDescription($)).reverse();let v="";return ee.includes(e)?v="+":ie.includes(e)&&(v="-"),w=v.concat(w),[w]},getTransferDescription(t){let e="";return t&&(t?.nft_info?e=t?.nft_info?.name||"-":t?.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){return t?[this.getQuantityFixedValue(t?.quantity.numeric),t?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue(t){return t?parseFloat(t).toFixed(te):null}};var bt;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(bt||(bt={}));const re=nt`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.core.glass010};
    background-color: ${({tokens:t})=>t.core.glass010};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:t})=>t[4]};
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:t})=>t.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var q=function(t,e,i,s){var u=arguments.length,r=u<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,s);else for(var d=t.length-1;d>=0;d--)(c=t[d])&&(r=(u<3?c(r):u>3?c(e,i,r):c(e,i))||r);return u>3&&r&&Object.defineProperty(e,i,r),r};let N=class extends st{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,i]=this.images;this.images.length||(this.dataset.noImages="true");const s=e?.type==="NFT",u=i?.url?i.type==="NFT":s,r=s?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)",c=u?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)";return this.style.cssText=`
    --local-left-border-radius: ${r};
    --local-right-border-radius: ${c};
    `,m`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,i]=this.images,s=e?.type;return this.images.length===2&&(e?.url||i?.url)?m`<div class="swap-images-container">
        ${e?.url?m`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${i?.url?m`<wui-image src=${i.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?m`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:s==="NFT"?m`<wui-icon size="inherit" color="default" name="nftPlaceholder"></wui-icon>`:m`<wui-icon size="inherit" color="default" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-primary",i;return i=this.getIcon(),this.status&&(e=this.getStatusColor()),i?m`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${e} icon=${i}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontal":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};N.styles=[re];q([_()],N.prototype,"type",void 0);q([_()],N.prototype,"status",void 0);q([_()],N.prototype,"direction",void 0);q([_({type:Boolean})],N.prototype,"onlyDirectionIcon",void 0);q([_({type:Array})],N.prototype,"images",void 0);q([_({type:Object})],N.prototype,"secondImage",void 0);N=q([at("wui-transaction-visual")],N);const ne=nt`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Y=function(t,e,i,s){var u=arguments.length,r=u<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,s);else for(var d=t.length-1;d>=0;d--)(c=t[d])&&(r=(u<3?c(r):u>3?c(e,i,r):c(e,i))||r);return u>3&&r&&Object.defineProperty(e,i,r),r};let L=class extends st{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return m`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${Nt(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${bt[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const e=this.descriptions?.[0];return e?m`
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){const e=this.descriptions?.[1];return e?m`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}};L.styles=[At,ne];Y([_()],L.prototype,"type",void 0);Y([_({type:Array})],L.prototype,"descriptions",void 0);Y([_()],L.prototype,"date",void 0);Y([_({type:Boolean})],L.prototype,"onlyDirectionIcon",void 0);Y([_()],L.prototype,"status",void 0);Y([_()],L.prototype,"direction",void 0);Y([_({type:Array})],L.prototype,"images",void 0);L=Y([at("wui-transaction-list-item")],L);const se=nt`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:t})=>t[128]};
  }

  .fallback-icon {
    color: ${({tokens:t})=>t.theme.iconInverse};
    border-radius: ${({borderRadius:t})=>t[3]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:t})=>t[128]};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:t})=>t["01"]};
    color: ${({tokens:t})=>t.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:t})=>t.core.textSuccess} 30%,
      ${({tokens:t})=>t.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:t})=>t[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:t})=>t[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var ut=function(t,e,i,s){var u=arguments.length,r=u<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,s);else for(var d=t.length-1;d>=0;d--)(c=t[d])&&(r=(u<3?c(r):u>3?c(e,i,r):c(e,i))||r);return u>3&&r&&Object.defineProperty(e,i,r),r};const $t={sm:"xxs",lg:"md"};let V=class extends st{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return m`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){const[e,i]=this.images;return this.images.length===2&&(e||i)?m`
        <wui-image class="swap-crop-left-image" src=${e} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${i} alt="Swap image"></wui-image>
      `:e?m`<wui-image src=${e} alt="Swap image"></wui-image>`:null}fiatTemplate(){return m`<wui-icon
      class="fallback-icon"
      size=${$t[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return m`<wui-icon
      class="fallback-icon"
      size=${$t[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){const[e]=this.images;return e?m`<wui-image src=${e} alt="Token image"></wui-image> `:m`<wui-icon
      class="fallback-icon"
      name=${this.type==="nft"?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?m`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:m`<wui-icon
      class="direction-icon"
      size=${$t[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return this.type==="trade"?"arrowClockWise":"arrowBottom"}};V.styles=[se];ut([_()],V.prototype,"type",void 0);ut([_()],V.prototype,"size",void 0);ut([_()],V.prototype,"statusImageUrl",void 0);ut([_({type:Array})],V.prototype,"images",void 0);V=ut([at("wui-transaction-thumbnail")],V);const ae=nt`
  :host > wui-flex:first-child {
    gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var oe=function(t,e,i,s){var u=arguments.length,r=u<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,s);else for(var d=t.length-1;d>=0;d--)(c=t[d])&&(r=(u<3?c(r):u>3?c(e,i,r):c(e,i))||r);return u>3&&r&&Object.defineProperty(e,i,r),r};let Tt=class extends st{render(){return m`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};Tt.styles=[At,ae];Tt=oe([at("wui-transaction-list-item-loader")],Tt);const ue=nt`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:t})=>t[3]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:t})=>t[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var J=function(t,e,i,s){var u=arguments.length,r=u<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,s);else for(var d=t.length-1;d>=0;d--)(c=t[d])&&(r=(u<3?c(r):u>3?c(e,i,r):c(e,i))||r);return u>3&&r&&Object.defineProperty(e,i,r),r};const ht="last-transaction",ce=7;let z=class extends st{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=pt.state.activeCaipAddress,this.transactionsByYear=R.state.transactionsByYear,this.loading=R.state.loading,this.empty=R.state.empty,this.next=R.state.next,R.clearCursor(),this.unsubscribe.push(pt.subscribeKey("activeCaipAddress",e=>{e&&this.caipAddress!==e&&(R.resetTransactions(),R.fetchTransactions(e)),this.caipAddress=e}),pt.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),R.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return m` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){R.resetTransactions(),this.caipAddress&&R.fetchTransactions(xt.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(i=>{const s=parseInt(i,10),u=new Array(12).fill(null).map((r,c)=>{const d=K.getTransactionGroupTitle(s,c),w=this.transactionsByYear[s]?.[c];return{groupTitle:d,transactions:w}}).filter(({transactions:r})=>r).reverse();return u.map(({groupTitle:r,transactions:c},d)=>{const w=d===u.length-1;return c?m`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${w?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${r}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(c,w)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,i){const{date:s,descriptions:u,direction:r,isAllNFT:c,images:d,status:w,transfers:g,type:v}=this.getTransactionListItemProps(e),$=g?.length>1;return g?.length===2&&!c?m`
        <wui-transaction-list-item
          date=${s}
          .direction=${r}
          id=${i&&this.next?ht:""}
          status=${w}
          type=${v}
          .images=${d}
          .descriptions=${u}
        ></wui-transaction-list-item>
      `:$?g.map((M,C)=>{const j=K.getTransferDescription(M),B=i&&C===g.length-1;return m` <wui-transaction-list-item
          date=${s}
          direction=${M.direction}
          id=${B&&this.next?ht:""}
          status=${w}
          type=${v}
          .onlyDirectionIcon=${!0}
          .images=${[d[C]]}
          .descriptions=${[j]}
        ></wui-transaction-list-item>`}):m`
      <wui-transaction-list-item
        date=${s}
        .direction=${r}
        id=${i&&this.next?ht:""}
        status=${w}
        type=${v}
        .images=${d}
        .descriptions=${u}
      ></wui-transaction-list-item>
    `}templateTransactions(e,i){return e.map((s,u)=>{const r=i&&u===e.length-1;return m`${this.templateRenderTransaction(s,r)}`})}emptyStateActivity(){return m`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return m`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?m`${this.emptyStateAccount()}`:m`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(ce).fill(m` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){Ct.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=kt.state;this.paginationObserver=new IntersectionObserver(([i])=>{i?.isIntersecting&&!this.loading&&(R.fetchTransactions(xt.getPlainAddress(this.caipAddress)),Rt.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:xt.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:Lt(pt.state.activeChain)===jt.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const e=this.shadowRoot?.querySelector(`#${ht}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){const i=vt.formatDate(e?.metadata?.minedAt),s=K.getTransactionDescriptions(e),u=e?.transfers,r=e?.transfers?.[0],c=!!r&&e?.transfers?.every(w=>!!w.nft_info),d=K.getTransactionImages(u);return{date:i,direction:r?.direction,descriptions:s,isAllNFT:c,images:d,status:e.metadata?.status,transfers:u,type:e.metadata?.operationType}}};z.styles=ue;J([_()],z.prototype,"page",void 0);J([ot()],z.prototype,"caipAddress",void 0);J([ot()],z.prototype,"transactionsByYear",void 0);J([ot()],z.prototype,"loading",void 0);J([ot()],z.prototype,"empty",void 0);J([ot()],z.prototype,"next",void 0);z=J([at("w3m-activity-list")],z);
