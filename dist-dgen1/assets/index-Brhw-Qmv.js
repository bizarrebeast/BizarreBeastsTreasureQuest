import{c as x,r as W,e as N,i as f,x as l,b as u,O as y,a5 as ke,u as C,A as v,C as b,M as D,h as ie,a as A,y as le,q as w,k as S,R as m,d as P,S as E,l as xe,W as ae,j as g,a6 as pn,az as Ee,aA as ye,aB as G,P as fn,a8 as I,aC as We,n as Gi,_ as wn,Z as mn,Y as bn,T as ii,aD as gn,aE as yn,a7 as Ei}from"./Web3Utils-BRIOHfTF.js";import{n as c,c as p,U as F,r as d,a as Yi}from"./index-BrjUboAN.js";import{o as h}from"./if-defined-BrgvXt0H.js";import"./index-Vl1dJ8BS.js";import"./index-DciViAC8.js";import"./index-C9FjAwcR.js";import"./index-DnECKsWL.js";import{a as sa,W as aa}from"./index-De8qk1EU.js";import"./index-B-WrvfhI.js";import"./index-CwH5kU-h.js";import"./index-ChFfvf8e.js";import{H as fi}from"./HelpersUtil-Bjvz0AaL.js";import{n as xn}from"./index-DqYe18GL.js";import"./index-D63-aOHf.js";import"./index-DZi6pn7R.js";import"./index-B4VlrwD6.js";import{M as Ct}from"./index-eVP-2_Bq.js";import"./index-D0nPICWt.js";import"./index-BENe6gZJ.js";import{e as wi,n as mi}from"./ref-BDJihUvJ.js";import"./index-C7qXAUPc.js";import"./index-B6sUXBO_.js";import"./index-CYwEQoX3.js";import"./index-GzO2cSqj.js";import{O as St}from"./index-_W7CWz6X.js";import{e as vn}from"./index-CIQOgfBB.js";import"./index-DRlqr3WT.js";import"./index-DH4_b1E2.js";import{N as $n}from"./NavigationUtil-DmfK5sOV.js";import"./index-CvWvt1O6.js";import"./main-D5HJ1j_d.js";import"./ConstantsUtil-Dmg8YACJ.js";const Cn=x`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:t})=>t[20]};
    background: ${({tokens:t})=>t.theme.foregroundPrimary};
    display: flex;
    gap: ${({spacing:t})=>t[1]};
    padding: ${({spacing:t})=>t[1]};
    color: ${({tokens:t})=>t.theme.textSecondary};
    border-radius: ${({borderRadius:t})=>t[16]};
    height: 32px;
    transition: box-shadow ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({borderRadius:t})=>t[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({borderRadius:t})=>t[16]};
    padding-left: ${({spacing:t})=>t[1]};
    padding-right: ${({spacing:t})=>t[1]};
    background: ${({tokens:t})=>t.theme.foregroundSecondary};
    color: ${({tokens:t})=>t.theme.textPrimary};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({tokens:t})=>t.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`;var de=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Y=class extends f{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return l`
      <button
        ?disabled=${this.disabled}
        class=${h(this.balance?void 0:"local-no-balance")}
        data-error=${h(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `}imageTemplate(){const e=this.networkSrc?l`<wui-image src=${this.networkSrc}></wui-image>`:l` <wui-icon size="inherit" color="inherit" icon="networkPlaceholder"></wui-icon> `;return l`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${e}</wui-flex>
    </wui-flex>`}addressTemplate(){return l`<wui-text variant="md-regular" color="inherit">
      ${this.address?F.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
    </wui-text>`}balanceTemplate(){if(this.balance){const e=this.loading?l`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`:l`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;return l`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${e}</wui-flex
      >`}return null}};Y.styles=[W,N,Cn];de([c()],Y.prototype,"networkSrc",void 0);de([c()],Y.prototype,"avatarSrc",void 0);de([c()],Y.prototype,"balance",void 0);de([c({type:Boolean})],Y.prototype,"isUnsupportedChain",void 0);de([c({type:Boolean})],Y.prototype,"disabled",void 0);de([c({type:Boolean})],Y.prototype,"loading",void 0);de([c()],Y.prototype,"address",void 0);de([c()],Y.prototype,"profileName",void 0);de([c()],Y.prototype,"charsStart",void 0);de([c()],Y.prototype,"charsEnd",void 0);Y=de([p("wui-account-button")],Y);var z=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};class M extends f{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=y.state.allowUnsupportedChain?!0:u.state.activeChain?u.checkIfSupportedNetwork(u.state.activeChain):!0}connectedCallback(){super.connectedCallback(),this.setAccountData(u.getAccountData(this.namespace)),this.setNetworkData(u.getNetworkData(this.namespace))}firstUpdated(){const e=this.namespace;e?this.unsubscribe.push(u.subscribeChainProp("accountState",n=>{this.setAccountData(n)},e),u.subscribeChainProp("networkState",n=>{this.setNetworkData(n),this.isSupported=u.checkIfSupportedNetwork(e,n?.caipNetwork?.caipNetworkId)},e)):this.unsubscribe.push(ke.subscribeNetworkImages(()=>{this.networkImage=C.getNetworkImage(this.network)}),u.subscribeKey("activeCaipAddress",n=>{this.caipAddress=n}),v.subscribeKey("balance",n=>this.balanceVal=n),v.subscribeKey("balanceSymbol",n=>this.balanceSymbol=n),v.subscribeKey("profileName",n=>this.profileName=n),v.subscribeKey("profileImage",n=>this.profileImage=n),u.subscribeKey("activeCaipNetwork",n=>{this.network=n,this.networkImage=C.getNetworkImage(n),this.isSupported=n?.chainNamespace?u.checkIfSupportedNetwork(n?.chainNamespace):!0,this.fetchNetworkImage(n)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!u.state.activeChain)return null;const e=this.balance==="show",n=typeof this.balanceVal!="string",{formattedText:o}=b.parseBalance(this.balanceVal,this.balanceSymbol);return l`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${y.state.allowUnsupportedChain?!1:!this.isSupported}
        address=${h(b.getPlainAddress(this.caipAddress))}
        profileName=${h(this.profileName)}
        networkSrc=${h(this.networkImage)}
        avatarSrc=${h(this.profileImage)}
        balance=${e?o:""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${n}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||y.state.allowUnsupportedChain?D.open({namespace:this.namespace}):D.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await C.fetchNetworkImage(e?.assets?.imageId))}setAccountData(e){e&&(this.caipAddress=e.caipAddress,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol,this.profileName=e.profileName,this.profileImage=e.profileImage)}setNetworkData(e){e&&(this.network=e.caipNetwork,this.networkImage=C.getNetworkImage(e.caipNetwork))}}z([c({type:Boolean})],M.prototype,"disabled",void 0);z([c()],M.prototype,"balance",void 0);z([c()],M.prototype,"charsStart",void 0);z([c()],M.prototype,"charsEnd",void 0);z([c()],M.prototype,"namespace",void 0);z([d()],M.prototype,"caipAddress",void 0);z([d()],M.prototype,"balanceVal",void 0);z([d()],M.prototype,"balanceSymbol",void 0);z([d()],M.prototype,"profileName",void 0);z([d()],M.prototype,"profileImage",void 0);z([d()],M.prototype,"network",void 0);z([d()],M.prototype,"networkImage",void 0);z([d()],M.prototype,"isSupported",void 0);let Wi=class extends M{};Wi=z([p("w3m-account-button")],Wi);let _i=class extends M{};_i=z([p("appkit-account-button")],_i);const Sn=ie`
  :host {
    display: block;
    width: max-content;
  }
`;var ue=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};class ne extends f{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){this.caipAddress=this.namespace?u.state.chains.get(this.namespace)?.accountState?.caipAddress:u.state.activeCaipAddress,this.namespace?this.unsubscribe.push(u.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},this.namespace)):this.unsubscribe.push(u.subscribeKey("activeCaipAddress",e=>this.caipAddress=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?l`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${h(this.balance)}
            .charsStart=${h(this.charsStart)}
            .charsEnd=${h(this.charsEnd)}
            namespace=${h(this.namespace)}
          >
          </appkit-account-button>
        `:l`
          <appkit-connect-button
            size=${h(this.size)}
            label=${h(this.label)}
            loadingLabel=${h(this.loadingLabel)}
            namespace=${h(this.namespace)}
          ></appkit-connect-button>
        `}}ne.styles=Sn;ue([c({type:Boolean})],ne.prototype,"disabled",void 0);ue([c()],ne.prototype,"balance",void 0);ue([c()],ne.prototype,"size",void 0);ue([c()],ne.prototype,"label",void 0);ue([c()],ne.prototype,"loadingLabel",void 0);ue([c()],ne.prototype,"charsStart",void 0);ue([c()],ne.prototype,"charsEnd",void 0);ue([c()],ne.prototype,"namespace",void 0);ue([d()],ne.prototype,"caipAddress",void 0);let Ti=class extends ne{};Ti=ue([p("w3m-button")],Ti);let Ni=class extends ne{};Ni=ue([p("appkit-button")],Ni);const An=x`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  button[data-size='sm'] {
    padding: ${({spacing:t})=>t[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:t})=>t[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:t})=>t[4]};
  }

  button[data-variant='primary'] {
    background: ${({tokens:t})=>t.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({borderRadius:t})=>t[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({borderRadius:t})=>t[32]};
    padding: ${({spacing:t})=>t[2]} ${({spacing:t})=>t[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({borderRadius:t})=>t[20]};
    padding: ${({spacing:t})=>t[3]} ${({spacing:t})=>t[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({borderRadius:t})=>t[16]};
    padding: ${({spacing:t})=>t[4]} ${({spacing:t})=>t[5]};
  }
`;var ft=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let _e=class extends f{constructor(){super(...arguments),this.size="md",this.variant="primary",this.loading=!1,this.text="Connect Wallet"}render(){return l`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `}contentTemplate(){const e={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},n={primary:"invert",secondary:"accent-primary"};return this.loading?l`<wui-loading-spinner
      color=${n[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`:l` <wui-text variant=${e[this.size]} color=${n[this.variant]}>
        ${this.text}
      </wui-text>`}};_e.styles=[W,N,An];ft([c()],_e.prototype,"size",void 0);ft([c()],_e.prototype,"variant",void 0);ft([c({type:Boolean})],_e.prototype,"loading",void 0);ft([c()],_e.prototype,"text",void 0);_e=ft([p("wui-connect-button")],_e);var Ae=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};class Ie extends f{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=D.state.open,this.loading=this.namespace?D.state.loadingNamespaceMap.get(this.namespace):D.state.loading,this.unsubscribe.push(D.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-connect-button
        size=${h(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?D.close():this.loading||D.open({view:"Connect",namespace:this.namespace})}}Ae([c()],Ie.prototype,"size",void 0);Ae([c()],Ie.prototype,"label",void 0);Ae([c()],Ie.prototype,"loadingLabel",void 0);Ae([c()],Ie.prototype,"namespace",void 0);Ae([d()],Ie.prototype,"open",void 0);Ae([d()],Ie.prototype,"loading",void 0);let Ri=class extends Ie{};Ri=Ae([p("w3m-connect-button")],Ri);let Oi=class extends Ie{};Oi=Ae([p("appkit-connect-button")],Oi);const In=x`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:t})=>t[32]};
    display: flex;
    gap: ${({spacing:t})=>t[1]};
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]}
      ${({spacing:t})=>t[1]} ${({spacing:t})=>t[1]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({borderRadius:t})=>t[32]};
  }
`;var wt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Te=class extends f{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.size="lg"}render(){const e={sm:"sm-regular",md:"md-regular",lg:"lg-regular"};return l`
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${e[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?l` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `:this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:l` <wui-icon-box color="default" icon="networkPlaceholder"></wui-icon-box> `}};Te.styles=[W,N,In];wt([c()],Te.prototype,"imageSrc",void 0);wt([c({type:Boolean})],Te.prototype,"isUnsupportedChain",void 0);wt([c({type:Boolean})],Te.prototype,"disabled",void 0);wt([c()],Te.prototype,"size",void 0);Te=wt([p("wui-network-button")],Te);const kn=ie`
  :host {
    display: block;
    width: max-content;
  }
`;var ge=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};class fe extends f{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=u.state.activeCaipNetwork,this.networkImage=C.getNetworkImage(this.network),this.caipAddress=u.state.activeCaipAddress,this.loading=D.state.loading,this.isSupported=y.state.allowUnsupportedChain?!0:u.state.activeChain?u.checkIfSupportedNetwork(u.state.activeChain):!0,this.unsubscribe.push(ke.subscribeNetworkImages(()=>{this.networkImage=C.getNetworkImage(this.network)}),u.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),u.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=C.getNetworkImage(e),this.isSupported=e?.chainNamespace?u.checkIfSupportedNetwork(e.chainNamespace):!0,C.fetchNetworkImage(e?.assets?.imageId)}),D.subscribeKey("loading",e=>this.loading=e))}firstUpdated(){C.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.network?u.checkIfSupportedNetwork(this.network.chainNamespace):!0;return l`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${y.state.allowUnsupportedChain?!1:!e}
        imageSrc=${h(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?!this.isSupported&&!y.state.allowUnsupportedChain?"Switch Network":this.network.name:this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(A.sendEvent({type:"track",event:"CLICK_NETWORKS"}),D.open({view:"Networks"}))}}fe.styles=kn;ge([c({type:Boolean})],fe.prototype,"disabled",void 0);ge([c({type:String})],fe.prototype,"label",void 0);ge([d()],fe.prototype,"network",void 0);ge([d()],fe.prototype,"networkImage",void 0);ge([d()],fe.prototype,"caipAddress",void 0);ge([d()],fe.prototype,"loading",void 0);ge([d()],fe.prototype,"isSupported",void 0);let Pi=class extends fe{};Pi=ge([p("w3m-network-button")],Pi);let Di=class extends fe{};Di=ge([p("appkit-network-button")],Di);const En=x`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:t})=>t[4]};
    padding: ${({spacing:t})=>t[3]};
    border-radius: ${({borderRadius:t})=>t[4]};
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({spacing:t})=>t[2]};
    color: ${({tokens:t})=>t.theme.textInvert};
    background-color: ${({tokens:t})=>t.core.backgroundAccentPrimary};
    border-radius: ${({borderRadius:t})=>t[2]};
    align-items: normal;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.core.foregroundAccent020};
    }
  }
`;var zt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Fe=class extends f{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return l`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="md" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `}};Fe.styles=[W,N,En];zt([c()],Fe.prototype,"label",void 0);zt([c()],Fe.prototype,"description",void 0);zt([c()],Fe.prototype,"icon",void 0);Fe=zt([p("wui-notice-card")],Fe);var Xi=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let ni=class extends f{constructor(){super(),this.unsubscribe=[],this.socialProvider=le.getConnectedSocialProvider(),this.socialUsername=le.getConnectedSocialUsername(),this.namespace=u.state.activeChain,this.unsubscribe.push(u.subscribeKey("activeChain",e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=w.getConnectorId(this.namespace),n=w.getAuthConnector();if(!n||e!==S.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const o=n.provider.getEmail()??"";return!o&&!this.socialUsername?(this.style.cssText="display: none",null):l`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider??"mail"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(o,this.socialProvider)}}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(o)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,n){n||m.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?this.socialProvider==="discord"&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};Xi([d()],ni.prototype,"namespace",void 0);ni=Xi([p("w3m-account-auth-button")],ni);var we=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let ce=class extends f{constructor(){super(),this.usubscribe=[],this.networkImages=ke.state.networkImages,this.address=v.state.address,this.profileImage=v.state.profileImage,this.profileName=v.state.profileName,this.network=u.state.activeCaipNetwork,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.remoteFeatures=y.state.remoteFeatures,this.usubscribe.push(v.subscribe(e=>{e.address&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName)}),u.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}),y.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[this.network?.assets?.imageId??""];return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["0","5","3","5"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${h(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${F.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${h(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const e=this.network?.chainNamespace,n=w.getConnectorId(e),o=w.getAuthConnector();return!u.checkIfNamesSupported()||!o||n!==S.CONNECTOR_ID.AUTH||this.profileName?null:l`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){const e=w.getConnectorId(this.network?.chainNamespace),n=w.getAuthConnector(),{origin:o}=location;return!n||e!==S.CONNECTOR_ID.AUTH||o.includes(P.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=u.getAllRequestedCaipNetworks(),n=e?e.length>1:!1,o=e?.find(({id:r})=>r===this.network?.id);return n||!o}onCopyAddress(){try{this.address&&(b.copyToClopboard(this.address),E.showSuccess("Address copied"))}catch{E.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const e=this.network?.chainNamespace,n=u.checkIfSmartAccountEnabled(),o=w.getConnectorId(e);return!w.getAuthConnector()||o!==S.CONNECTOR_ID.AUTH||!n?null:(this.switched||(this.text=xe(e)===ae.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account"),l`
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${!0}
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `)}onChooseName(){m.push("ChooseAccountName")}async changePreferredAccountType(){const e=this.network?.chainNamespace,n=u.checkIfSmartAccountEnabled(),o=xe(e)===ae.ACCOUNT_TYPES.SMART_ACCOUNT||!n?ae.ACCOUNT_TYPES.EOA:ae.ACCOUNT_TYPES.SMART_ACCOUNT;w.getAuthConnector()&&(this.loading=!0,await g.setPreferredAccountType(o,e),this.text=o===ae.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account",this.switched=!0,pn.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&m.push("Networks")}async onDisconnect(){try{this.disconnecting=!0;const e=this.network?.chainNamespace,o=g.getConnections(e).length>0,r=e&&w.state.activeConnectorIds[e],i=this.remoteFeatures?.multiWallet;await g.disconnect(i?{id:r,namespace:e}:{}),o&&i&&(m.push("ProfileWallets"),E.showSuccess("Wallet deleted"))}catch{A.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),E.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){A.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),m.push("UpgradeEmailWallet")}};we([d()],ce.prototype,"address",void 0);we([d()],ce.prototype,"profileImage",void 0);we([d()],ce.prototype,"profileName",void 0);we([d()],ce.prototype,"network",void 0);we([d()],ce.prototype,"disconnecting",void 0);we([d()],ce.prototype,"loading",void 0);we([d()],ce.prototype,"switched",void 0);we([d()],ce.prototype,"text",void 0);we([d()],ce.prototype,"remoteFeatures",void 0);ce=we([p("w3m-account-settings-view")],ce);const Wn=x`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]};
    column-gap: ${({spacing:t})=>t[1]};
    color: ${({tokens:t})=>t.theme.textSecondary};
    border-radius: ${({borderRadius:t})=>t[20]};
    background-color: transparent;
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:t})=>t.theme.textPrimary};
    background-color: ${({tokens:t})=>t.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:t})=>t.theme.textPrimary};
    }
  }
`;var mt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const _n={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},Tn={lg:"md",md:"sm",sm:"sm"};let Ne=class extends f{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return l`
      <button data-active=${this.active}>
        ${this.icon?l`<wui-icon size=${Tn[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${_n[this.size]}> ${this.label} </wui-text>
      </button>
    `}};Ne.styles=[W,N,Wn];mt([c()],Ne.prototype,"icon",void 0);mt([c()],Ne.prototype,"size",void 0);mt([c()],Ne.prototype,"label",void 0);mt([c({type:Boolean})],Ne.prototype,"active",void 0);Ne=mt([p("wui-tab-item")],Ne);const Nn=x`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    border-radius: ${({borderRadius:t})=>t[32]};
    padding: ${({spacing:t})=>t["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var bt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Re=class extends f{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,n)=>{const o=n===this.activeTab;return l`
        <wui-tab-item
          @click=${()=>this.onTabClick(n)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${o}
          data-active=${o}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};Re.styles=[W,N,Nn];bt([c({type:Array})],Re.prototype,"tabs",void 0);bt([c()],Re.prototype,"onTabChange",void 0);bt([c()],Re.prototype,"size",void 0);bt([d()],Re.prototype,"activeTab",void 0);Re=bt([p("wui-tabs")],Re);const Rn=x`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[4]};
    column-gap: ${({spacing:t})=>t[1]};
    background-color: transparent;
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:t})=>t[6]};
    height: ${({spacing:t})=>t[6]};
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:t})=>t.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    }
  }
`;var me=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let te=class extends f{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return l`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const e=this.icon?l`<wui-icon
          size=${h(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:l`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return l`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${e}
        <wui-flex class="circle"></wui-flex>
      </wui-flex>
    `}textTemplate(){return l`
      <wui-text variant="lg-regular" color="primary">
        ${F.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return l`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};te.styles=[W,N,Rn];me([c()],te.prototype,"address",void 0);me([c()],te.prototype,"profileName",void 0);me([c()],te.prototype,"alt",void 0);me([c()],te.prototype,"imageSrc",void 0);me([c()],te.prototype,"icon",void 0);me([c()],te.prototype,"iconSize",void 0);me([c({type:Boolean})],te.prototype,"loading",void 0);me([c({type:Number})],te.prototype,"charsStart",void 0);me([c({type:Number})],te.prototype,"charsEnd",void 0);te=me([p("wui-wallet-switch")],te);const On=x`
  wui-icon-link {
    margin-right: calc(${({spacing:t})=>t[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({spacing:t})=>t[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:t})=>t[3]};
    height: 48px;
    padding: ${({spacing:t})=>t[2]};
    padding-right: ${({spacing:t})=>t[3]};
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.theme.foregroundPrimary};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[6]};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
  }

  .account-button:hover {
    background-color: ${({tokens:t})=>t.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({tokens:t})=>t.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({spacing:t})=>t[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({tokens:t})=>t.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({durations:t})=>t.md}
        ${({easings:t})=>t["ease-out-power-1"]},
      opacity ${({durations:t})=>t.md} ${({easings:t})=>t["ease-out-power-1"]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var oe=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let V=class extends f{constructor(){super(),this.unsubscribe=[],this.caipAddress=v.state.caipAddress,this.address=b.getPlainAddress(v.state.caipAddress),this.profileImage=v.state.profileImage,this.profileName=v.state.profileName,this.disconnecting=!1,this.balance=v.state.balance,this.balanceSymbol=v.state.balanceSymbol,this.features=y.state.features,this.remoteFeatures=y.state.remoteFeatures,this.namespace=u.state.activeChain,this.activeConnectorIds=w.state.activeConnectorIds,this.unsubscribe.push(v.subscribeKey("caipAddress",e=>{this.address=b.getPlainAddress(e),this.caipAddress=e}),v.subscribeKey("balance",e=>this.balance=e),v.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),v.subscribeKey("profileName",e=>this.profileName=e),v.subscribeKey("profileImage",e=>this.profileImage=e),y.subscribeKey("features",e=>this.features=e),y.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),w.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),u.subscribeKey("activeChain",e=>this.namespace=e),u.subscribeKey("activeCaipNetwork",e=>{e?.chainNamespace&&(this.namespace=e?.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress||!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],n=e?w.getConnectorById(e):void 0,o=C.getConnectorImage(n),{value:r,decimals:i,symbol:s}=b.parseBalance(this.balance,this.balanceSymbol);return l`<wui-flex
        flexDirection="column"
        .padding=${["0","5","4","5"]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${h(this.caipAddress)}
          address=${h(b.getPlainAddress(this.caipAddress))}
          imageSrc=${h(this.profileImage===null?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${o}
          alt=${n?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <wui-flex flexDirection="row" alignItems="flex-end" justifyContent="center" gap="1">
          <wui-text variant="h3-regular" color="primary">${r}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${i}</wui-text>
          <wui-text variant="h6-medium" color="primary">${s}</wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${["0","3","3","3"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;const e=P.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),n=P.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),o=!!this.features?.receive,r=this.remoteFeatures?.onramp&&e,i=this.remoteFeatures?.payWithExchange&&n;return!r&&!o&&!i?null:l`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||P.DEFAULT_FEATURES.walletFeaturesOrder).map(n=>{switch(n){case"onramp":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){return this.namespace&&this.remoteFeatures?.activity&&P.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?l` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){const e=this.remoteFeatures?.swaps,n=u.state.activeChain===S.CHAIN.EVM;return!e||!n?null:l`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `}sendTemplate(){const e=this.features?.send,n=u.state.activeChain;if(!n)throw new Error("SendController:sendTemplate - namespace is required");const o=P.SEND_SUPPORTED_NAMESPACES.includes(n);return!e||!o?null:l`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `}authCardTemplate(){const e=u.state.activeChain;if(!e)throw new Error("AuthCardTemplate:authCardTemplate - namespace is required");const n=w.getConnectorId(e),o=w.getAuthConnector(),{origin:r}=location;return!o||n!==S.CONNECTOR_ID.AUTH||r.includes(P.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){m.push("FundWallet")}handleClickSwap(){m.push("Swap")}handleClickSend(){m.push("WalletSend")}explorerBtnTemplate(){return v.state.addressExplorerUrl?l`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){A.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:xe(u.state.activeChain)===ae.ACCOUNT_TYPES.SMART_ACCOUNT}}),m.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0;const n=g.getConnections(this.namespace).length>0,o=this.namespace&&w.state.activeConnectorIds[this.namespace],r=this.remoteFeatures?.multiWallet;await g.disconnect(r?{id:o,namespace:this.namespace}:{}),n&&r&&(m.push("ProfileWallets"),E.showSuccess("Wallet deleted"))}catch{A.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),E.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=v.state.addressExplorerUrl;e&&b.openHref(e,"_blank")}onGoToUpgradeView(){A.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),m.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){m.push("ProfileWallets")}};V.styles=On;oe([d()],V.prototype,"caipAddress",void 0);oe([d()],V.prototype,"address",void 0);oe([d()],V.prototype,"profileImage",void 0);oe([d()],V.prototype,"profileName",void 0);oe([d()],V.prototype,"disconnecting",void 0);oe([d()],V.prototype,"balance",void 0);oe([d()],V.prototype,"balanceSymbol",void 0);oe([d()],V.prototype,"features",void 0);oe([d()],V.prototype,"remoteFeatures",void 0);oe([d()],V.prototype,"namespace",void 0);oe([d()],V.prototype,"activeConnectorIds",void 0);V=oe([p("w3m-account-default-widget")],V);const Pn=x`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({tokens:t})=>t.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({tokens:t})=>t.theme.textSecondary};
  }
`;var bi=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let ot=class extends f{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return l`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};ot.styles=[W,Pn];bi([c()],ot.prototype,"dollars",void 0);bi([c()],ot.prototype,"pennies",void 0);ot=bi([p("wui-balance")],ot);const Dn=x`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({colors:t})=>t.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({colors:t})=>t.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({colors:t})=>t.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({colors:t})=>t.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({colors:t})=>t.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({colors:t})=>t.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  :host([data-size='md']) {
    padding: ${({spacing:t})=>t[2]} ${({spacing:t})=>t[3]};
    border-radius: ${({borderRadius:t})=>t[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var gt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const jn={sm:"sm-regular",md:"md-regular"};let Oe=class extends f{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.size="md",this.message=""}render(){return this.dataset.variant=this.variant,this.dataset.size=this.size,l`<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${jn[this.size]}>${this.message}</wui-text>`}};Oe.styles=[W,N,Dn];gt([c()],Oe.prototype,"placement",void 0);gt([c()],Oe.prototype,"variant",void 0);gt([c()],Oe.prototype,"size",void 0);gt([c()],Oe.prototype,"message",void 0);Oe=gt([p("wui-tooltip")],Oe);const Ln=ie`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var Bn=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let oi=class extends f{render(){return l`<w3m-activity-list page="account"></w3m-activity-list>`}};oi.styles=Ln;oi=Bn([p("w3m-account-activity-widget")],oi);const Un=x`
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
`;var zn=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let ri=class extends f{render(){return l`${this.nftTemplate()}`}nftTemplate(){return l` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="5"
    >
      <wui-icon-box icon="wallet" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="md-regular"
          align="center"
          color="primary"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="sm-regular"
          align="center"
          color="secondary"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){m.push("WalletReceive")}};ri.styles=Un;ri=zn([p("w3m-account-nfts-widget")],ri);const Mn=x`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({spacing:t})=>t[4]};
    padding: ${({spacing:t})=>t[4]};
    background-color: transparent;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    }
  }
`;var Xe=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let ve=class extends f{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description?l`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`:null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag?l`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`:null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `}};ve.styles=[W,N,Mn];Xe([c()],ve.prototype,"icon",void 0);Xe([c()],ve.prototype,"text",void 0);Xe([c()],ve.prototype,"description",void 0);Xe([c()],ve.prototype,"tag",void 0);Xe([c({type:Boolean})],ve.prototype,"disabled",void 0);ve=Xe([p("wui-list-description")],ve);const Fn=ie`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var gi=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let rt=class extends f{constructor(){super(),this.unsubscribe=[],this.tokenBalance=v.state.tokenBalance,this.remoteFeatures=y.state.remoteFeatures,this.unsubscribe.push(v.subscribe(e=>{this.tokenBalance=e.tokenBalance}),y.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?l`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`:l` <wui-flex flexDirection="column" gap="2"
      >${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){return this.remoteFeatures?.onramp?l`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:l``}tokenItemTemplate(){return this.tokenBalance?.map(e=>l`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){m.push("WalletReceive")}onBuyClick(){A.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:xe(u.state.activeChain)===ae.ACCOUNT_TYPES.SMART_ACCOUNT}}),m.push("OnRampProviders")}};rt.styles=Fn;gi([d()],rt.prototype,"tokenBalance",void 0);gi([d()],rt.prototype,"remoteFeatures",void 0);rt=gi([p("w3m-account-tokens-widget")],rt);const Vn=x`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({spacing:t})=>t[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({spacing:t})=>t[4]};
  }

  wui-tabs {
    width: 100%;
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
`;var he=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let X=class extends f{constructor(){super(),this.unsubscribe=[],this.address=v.state.address,this.profileName=v.state.profileName,this.network=u.state.activeCaipNetwork,this.currentTab=v.state.currentTab,this.tokenBalance=v.state.tokenBalance,this.features=y.state.features,this.namespace=u.state.activeChain,this.activeConnectorIds=w.state.activeConnectorIds,this.remoteFeatures=y.state.remoteFeatures,this.unsubscribe.push(v.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):D.close()}),w.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),u.subscribeKey("activeChain",e=>this.namespace=e),u.subscribeKey("activeCaipNetwork",e=>this.network=e),y.subscribeKey("features",e=>this.features=e),y.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){v.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");if(!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],n=e?w.getConnectorById(e):void 0,{icon:o,iconSize:r}=this.getAuthData();return l`<wui-flex
      flexDirection="column"
      .padding=${["0","5","4","5"]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${o}
          iconSize=${r}
          alt=${n?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){const e=this.features?.walletFeaturesOrder||P.DEFAULT_FEATURES.walletFeaturesOrder;if(e.every(i=>i==="send"||i==="receive"?!this.features?.[i]:i==="swaps"||i==="onramp"?!this.remoteFeatures?.[i]:!0))return null;const o=e.map(i=>i==="receive"||i==="onramp"?"fund":i),r=[...new Set(o)];return l`<wui-flex gap="3">
      ${r.map(i=>{switch(i){case"fund":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;const e=P.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),n=P.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),o=this.features?.receive,r=this.remoteFeatures?.onramp&&e,i=this.remoteFeatures?.payWithExchange&&n;return!r&&!o&&!i?null:l`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-icon-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          icon="dollar"
          variant="accent"
          fullWidth
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `}swapsTemplate(){const e=this.remoteFeatures?.swaps,n=u.state.activeChain===S.CHAIN.EVM;return!e||!n?null:l`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
          variant="accent"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `}sendTemplate(){const e=this.features?.send,n=u.state.activeChain,o=P.SEND_SUPPORTED_NAMESPACES.includes(n);return!e||!o?null:l`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
          variant="accent"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `}watchSwapValues(){this.watchTokenBalance=setInterval(()=>v.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===S.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return this.currentTab===0?l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?l`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:this.currentTab===2?l`<w3m-account-activity-widget></w3m-account-activity-widget>`:l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const e=b.calculateBalance(this.tokenBalance),{dollars:n="0",pennies:o="00"}=b.formatTokenBalance(e);return l`<wui-balance dollars=${n} pennies=${o}></wui-balance>`}return l`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const e=fi.getTabsByNamespace(u.state.activeChain);return e.length===0?null:l`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){v.setCurrentTab(e)}onFundWalletClick(){m.push("FundWallet")}onSwapClick(){this.network?.caipNetworkId&&!P.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?m.push("UnsupportedChain",{swapUnsupportedChain:!0}):(A.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:xe(u.state.activeChain)===ae.ACCOUNT_TYPES.SMART_ACCOUNT}}),m.push("Swap"))}getAuthData(){const e=le.getConnectedSocialProvider(),n=le.getConnectedSocialUsername(),r=w.getAuthConnector()?.provider.getEmail()??"";return{name:Ee.getAuthName({email:r,socialUsername:n,socialProvider:e}),icon:e??"mail",iconSize:e?"xl":"md"}}onGoToProfileWalletsView(){m.push("ProfileWallets")}onSendClick(){A.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:xe(u.state.activeChain)===ae.ACCOUNT_TYPES.SMART_ACCOUNT}}),m.push("WalletSend")}};X.styles=Vn;he([d()],X.prototype,"watchTokenBalance",void 0);he([d()],X.prototype,"address",void 0);he([d()],X.prototype,"profileName",void 0);he([d()],X.prototype,"network",void 0);he([d()],X.prototype,"currentTab",void 0);he([d()],X.prototype,"tokenBalance",void 0);he([d()],X.prototype,"features",void 0);he([d()],X.prototype,"namespace",void 0);he([d()],X.prototype,"activeConnectorIds",void 0);he([d()],X.prototype,"remoteFeatures",void 0);X=he([p("w3m-account-wallet-features-widget")],X);var Qi=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let si=class extends f{constructor(){super(),this.unsubscribe=[],this.namespace=u.state.activeChain,this.unsubscribe.push(u.subscribeKey("activeChain",e=>{this.namespace=e}))}render(){if(!this.namespace)return null;const e=w.getConnectorId(this.namespace),n=w.getAuthConnector();return l`
      ${n&&e===S.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return l`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return l`<w3m-account-default-widget></w3m-account-default-widget>`}};Qi([d()],si.prototype,"namespace",void 0);si=Qi([p("w3m-account-view")],si);const Hn=x`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({borderRadius:t})=>t[2]};
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:t})=>t["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var q=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let j=class extends f{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral-primary",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return l`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return l`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?l`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return l` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?l`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?l`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:l`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return this.content.length===0?null:l`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map(e=>this.labelAndTagTemplate(e))}
      </wui-flex>
    `}labelAndTagTemplate({address:e,profileName:n,label:o,description:r,enableButton:i,buttonType:s,buttonLabel:a,buttonVariant:$,tagVariant:k,tagLabel:_,alignItems:J="flex-end"}){return l`
      <wui-flex justifyContent="space-between" alignItems=${J} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${o?l`<wui-text variant="sm-medium" color="secondary">${o}</wui-text>`:null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${F.getTruncateString({string:n||e,charsStart:n?16:this.charsStart,charsEnd:n?0:this.charsEnd,truncate:n?"end":"middle"})}
            </wui-text>

            ${k&&_?l`<wui-tag variant=${k} size="sm">${_}</wui-tag>`:null}
          </wui-flex>

          ${r?l`<wui-text variant="sm-regular" color="secondary">${r}</wui-text>`:null}
        </wui-flex>

        ${i?this.buttonTemplate({buttonType:s,buttonLabel:a,buttonVariant:$}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:e,buttonLabel:n,buttonVariant:o}){return l`
      <wui-button
        size="sm"
        variant=${o}
        @click=${e==="disconnect"?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${e==="disconnect"?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${n}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};j.styles=[W,N,Hn];q([c()],j.prototype,"address",void 0);q([c()],j.prototype,"profileName",void 0);q([c({type:Array})],j.prototype,"content",void 0);q([c()],j.prototype,"alt",void 0);q([c()],j.prototype,"imageSrc",void 0);q([c()],j.prototype,"icon",void 0);q([c()],j.prototype,"iconSize",void 0);q([c()],j.prototype,"iconBadge",void 0);q([c()],j.prototype,"iconBadgeSize",void 0);q([c()],j.prototype,"buttonVariant",void 0);q([c({type:Boolean})],j.prototype,"enableMoreButton",void 0);q([c({type:Number})],j.prototype,"charsStart",void 0);q([c({type:Number})],j.prototype,"charsEnd",void 0);j=q([p("wui-active-profile-wallet-item")],j);const Kn=x`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:t})=>t["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var L=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let R=class extends f{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent-primary",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="signOut",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return l`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?l`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?l`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:l`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return l`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${F.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return l`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${h(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};R.styles=[W,N,Kn];L([c()],R.prototype,"address",void 0);L([c()],R.prototype,"profileName",void 0);L([c()],R.prototype,"alt",void 0);L([c()],R.prototype,"buttonLabel",void 0);L([c()],R.prototype,"buttonVariant",void 0);L([c()],R.prototype,"imageSrc",void 0);L([c()],R.prototype,"icon",void 0);L([c()],R.prototype,"iconSize",void 0);L([c()],R.prototype,"iconBadge",void 0);L([c()],R.prototype,"iconBadgeSize",void 0);L([c()],R.prototype,"rightIcon",void 0);L([c()],R.prototype,"rightIconSize",void 0);L([c({type:Boolean})],R.prototype,"loading",void 0);L([c({type:Number})],R.prototype,"charsStart",void 0);L([c({type:Number})],R.prototype,"charsEnd",void 0);R=L([p("wui-inactive-profile-wallet-item")],R);const ei={getAuthData(t){const e=t.connectorId===S.CONNECTOR_ID.AUTH;if(!e)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};const n=t?.auth?.name??le.getConnectedSocialProvider(),o=t?.auth?.username??le.getConnectedSocialUsername(),i=w.getAuthConnector()?.provider.getEmail()??"";return{isAuth:!0,icon:n??"mail",iconSize:n?"xl":"md",name:e?Ee.getAuthName({email:i,socialUsername:o,socialProvider:n}):void 0}}},qn=x`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({easings:t})=>t["ease-out-power-1"]}
      ${({durations:t})=>t.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({spacing:t})=>t[4]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-separator {
    margin: ${({spacing:t})=>t[2]} 0 ${({spacing:t})=>t[2]} 0;
  }

  .active-connection {
    padding: ${({spacing:t})=>t[2]};
  }

  .recent-connection {
    padding: ${({spacing:t})=>t[2]} 0 ${({spacing:t})=>t[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;var Q=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const ee={ADDRESS_DISPLAY:{START:4,END:6},BADGE:{SIZE:"md",ICON:"lightbulb"},SCROLL_THRESHOLD:50,OPACITY_RANGE:[0,1]},nt={eip155:"ethereum",solana:"solana",bip122:"bitcoin"},Gn=[{namespace:"eip155",icon:nt.eip155,label:"EVM"},{namespace:"solana",icon:nt.solana,label:"Solana"},{namespace:"bip122",icon:nt.bip122,label:"Bitcoin"}],Yn={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"}};let B=class extends f{constructor(){super(),this.unsubscribers=[],this.currentTab=0,this.namespace=u.state.activeChain,this.namespaces=Array.from(u.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=w.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=u.state.activeCaipNetwork,this.user=v.state.user,this.remoteFeatures=y.state.remoteFeatures,this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=u.getAccountData(this.namespace)?.caipAddress,this.profileName=u.getAccountData(this.namespace)?.profileName,this.unsubscribers.push(g.subscribeKey("connections",()=>this.onConnectionsChange()),g.subscribeKey("recentConnections",()=>this.requestUpdate()),w.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),u.subscribeKey("activeCaipNetwork",e=>this.caipNetwork=e),v.subscribeKey("user",e=>this.user=e),y.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.chainListener=u.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName},this.namespace)}disconnectedCallback(){this.unsubscribers.forEach(e=>e()),this.resizeObserver?.disconnect(),this.removeScrollListener(),this.chainListener?.()}firstUpdated(){const e=this.shadowRoot?.querySelector(".wallet-list");if(!e)return;const n=()=>this.updateScrollOpacity(e);requestAnimationFrame(n),e.addEventListener("scroll",n),this.resizeObserver=new ResizeObserver(n),this.resizeObserver.observe(e),n()}render(){const e=this.namespace;if(!e)throw new Error("Namespace is not set");return l`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(e)}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `}renderTabs(){const e=Gn.filter(o=>this.namespaces.includes(o.namespace));return e.length>1?l`
        <wui-tabs
          .onTabChange=${o=>this.handleTabChange(o)}
          .activeTab=${this.currentTab}
          .tabs=${e}
        ></wui-tabs>
      `:null}renderHeader(e){const o=this.getActiveConnections(e).flatMap(({accounts:r})=>r).length+(this.caipAddress?1:0);return l`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${nt[e]??nt.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${o>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${o}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>g.disconnect({namespace:e})}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(e){const n=this.hasAnyConnections(e);return l`
      <wui-flex flexDirection="column" class=${Yi({"wallet-list":!0,"active-wallets-box":n,"empty-wallet-list-box":!n})} rowgap="3">
        ${n?this.renderActiveConnections(e):this.renderEmptyState(e)}
      </wui-flex>
    `}renderActiveConnections(e){const n=this.getActiveConnections(e),o=this.activeConnectorIds[e],r=this.getPlainAddress();return l`
      ${r||o||n.length>0?l`<wui-flex
            flexDirection="column"
            .padding=${["4","0","4","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(e)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(e)}
    `}renderActiveProfile(e){const n=this.activeConnectorIds[e];if(!n)return null;const{connections:o}=ye.getConnectionsData(e),r=w.getConnectorById(n),i=C.getConnectorImage(r),s=this.getPlainAddress();if(!s)return null;const a=e===S.CHAIN.BITCOIN,$=ei.getAuthData({connectorId:n,accounts:[]}),k=this.getActiveConnections(e).flatMap(T=>T.accounts).length>0,_=o.find(T=>T.connectorId===n),J=_?.accounts.filter(T=>!G.isLowerCaseMatch(T.address,s));return l`
      <wui-flex flexDirection="column" .padding=${["0","4","0","4"]}>
        <wui-active-profile-wallet-item
          address=${s}
          alt=${r?.name}
          .content=${this.getProfileContent({address:s,connections:o,connectorId:n,namespace:e})}
          .charsStart=${ee.ADDRESS_DISPLAY.START}
          .charsEnd=${ee.ADDRESS_DISPLAY.END}
          .icon=${$.icon}
          .iconSize=${$.iconSize}
          .iconBadge=${this.isSmartAccount(s)?ee.BADGE.ICON:void 0}
          .iconBadgeSize=${this.isSmartAccount(s)?ee.BADGE.SIZE:void 0}
          imageSrc=${i}
          ?enableMoreButton=${$.isAuth}
          @copy=${()=>this.handleCopyAddress(s)}
          @disconnect=${()=>this.handleDisconnect(e,{id:n})}
          @switch=${()=>{a&&_&&J?.[0]&&this.handleSwitchWallet(_,J[0].address,e)}}
          @externalLink=${()=>this.handleExternalLink(s)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${k?l`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(e){const n=this.getActiveConnections(e);return n.length===0?null:l`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
        ${this.renderConnectionList(n,!1,e)}
      </wui-flex>
    `}renderRecentConnections(e){const{recentConnections:n}=ye.getConnectionsData(e);return n.flatMap(r=>r.accounts).length===0?null:l`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
          ${this.renderConnectionList(n,!0,e)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(e,n,o){return e.filter(r=>r.accounts.length>0).map((r,i)=>{const s=w.getConnectorById(r.connectorId),a=C.getConnectorImage(s)??"",$=ei.getAuthData(r);return r.accounts.map((k,_)=>{const J=i!==0||_!==0,T=this.isAccountLoading(r.connectorId,k.address);return l`
            <wui-flex flexDirection="column">
              ${J?l`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${k.address}
                alt=${r.connectorId}
                buttonLabel=${n?"Connect":"Switch"}
                buttonVariant=${n?"neutral-secondary":"accent-secondary"}
                rightIcon=${n?"bin":"power"}
                rightIconSize="sm"
                class=${n?"recent-connection":"active-connection"}
                data-testid=${n?"recent-connection":"active-connection"}
                imageSrc=${a}
                .iconBadge=${this.isSmartAccount(k.address)?ee.BADGE.ICON:void 0}
                .iconBadgeSize=${this.isSmartAccount(k.address)?ee.BADGE.SIZE:void 0}
                .icon=${$.icon}
                .iconSize=${$.iconSize}
                .loading=${T}
                .showBalance=${!1}
                .charsStart=${ee.ADDRESS_DISPLAY.START}
                .charsEnd=${ee.ADDRESS_DISPLAY.END}
                @buttonClick=${()=>this.handleSwitchWallet(r,k.address,o)}
                @iconClick=${()=>this.handleWalletAction({connection:r,address:k.address,isRecentConnection:n,namespace:o})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(e){if(!this.isMultiWalletEnabled()&&this.caipAddress||!this.hasAnyConnections(e))return null;const{title:n}=this.getChainLabelInfo(e);return l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${n}</wui-text>
      </wui-list-item>
    `}renderEmptyState(e){const{title:n,description:o}=this.getChainLabelInfo(e);return l`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${o}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(e)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${n}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(e){const n=this.namespaces[e];n&&(this.chainListener?.(),this.currentTab=this.namespaces.indexOf(n),this.namespace=n,this.caipAddress=u.getAccountData(n)?.caipAddress,this.profileName=u.getAccountData(n)?.profileName,this.chainListener=u.subscribeChainProp("accountState",o=>{this.caipAddress=o?.caipAddress},n))}async handleSwitchWallet(e,n,o){try{this.isSwitching=!0,this.lastSelectedConnectorId=e.connectorId,this.lastSelectedAddress=n,await g.switchConnection({connection:e,address:n,namespace:o,closeModalOnConnect:!1,onChange({hasSwitchedAccount:r,hasSwitchedWallet:i}){i?E.showSuccess("Wallet switched"):r&&E.showSuccess("Account switched")}})}catch{E.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(e){const{connection:n,address:o,isRecentConnection:r,namespace:i}=e;r?(le.deleteAddressFromConnection({connectorId:n.connectorId,address:o,namespace:i}),g.syncStorageConnections(),E.showSuccess("Wallet deleted")):this.handleDisconnect(i,{id:n.connectorId})}async handleDisconnect(e,{id:n}){try{await g.disconnect({id:n,namespace:e}),E.showSuccess("Wallet disconnected")}catch{E.showError("Failed to disconnect wallet")}}handleCopyAddress(e){b.copyToClopboard(e),E.showSuccess("Address copied")}handleMore(){m.push("AccountSettings")}handleExternalLink(e){const n=this.caipNetwork?.blockExplorers?.default.url;n&&b.openHref(`${n}/address/${e}`,"_blank")}handleAddConnection(e){w.setFilterByNamespace(e),m.push("Connect")}getChainLabelInfo(e){return Yn[e]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(e){if(!this.namespace)return!1;const n=this.user?.accounts?.find(o=>o.type==="smartAccount");return n&&e?G.isLowerCaseMatch(n.address,e):!1}getPlainAddress(){return this.caipAddress?b.getPlainAddress(this.caipAddress):void 0}getActiveConnections(e){const n=this.activeConnectorIds[e],{connections:o}=ye.getConnectionsData(e),[r]=o.filter($=>G.isLowerCaseMatch($.connectorId,n));if(!n)return o;const i=e===S.CHAIN.BITCOIN,{address:s}=this.caipAddress?fn.parseCaipAddress(this.caipAddress):{};let a=[...s?[s]:[]];return i&&r&&(a=r.accounts.map($=>$.address)||[]),ye.excludeConnectorAddressFromConnections({connectorId:n,addresses:a,connections:o})}hasAnyConnections(e){const n=this.getActiveConnections(e),{recentConnections:o}=ye.getConnectionsData(e);return!!this.caipAddress||n.length>0||o.length>0}isAccountLoading(e,n){return G.isLowerCaseMatch(this.lastSelectedConnectorId,e)&&G.isLowerCaseMatch(this.lastSelectedAddress,n)&&this.isSwitching}getProfileContent(e){const{address:n,connections:o,connectorId:r,namespace:i}=e,[s]=o.filter($=>G.isLowerCaseMatch($.connectorId,r));if(i===S.CHAIN.BITCOIN&&s?.accounts.every($=>typeof $.type=="string"))return this.getBitcoinProfileContent(s.accounts,n);const a=ei.getAuthData({connectorId:r,accounts:[]});return[{address:n,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary",...a.isAuth?{description:this.isSmartAccount(n)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(e,n){const o=e.length>1,r=this.getPlainAddress();return e.map(i=>{const s=G.isLowerCaseMatch(i.address,r);let a="PAYMENT";return i.type==="ordinal"&&(a="ORDINALS"),{address:i.address,tagLabel:G.isLowerCaseMatch(i.address,n)?"Active":void 0,tagVariant:G.isLowerCaseMatch(i.address,n)?"success":void 0,enableButton:!0,...o?{label:a,alignItems:"flex-end",buttonType:s?"disconnect":"switch",buttonLabel:s?"Disconnect":"Switch",buttonVariant:s?"neutral-secondary":"accent-secondary"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary"}}})}removeScrollListener(){const e=this.shadowRoot?.querySelector(".wallet-list");e&&e.removeEventListener("scroll",()=>this.handleConnectListScroll())}handleConnectListScroll(){const e=this.shadowRoot?.querySelector(".wallet-list");e&&this.updateScrollOpacity(e)}isMultiWalletEnabled(){return!!this.remoteFeatures?.multiWallet}updateScrollOpacity(e){e.style.setProperty("--connect-scroll--top-opacity",Ct.interpolate([0,ee.SCROLL_THRESHOLD],ee.OPACITY_RANGE,e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",Ct.interpolate([0,ee.SCROLL_THRESHOLD],ee.OPACITY_RANGE,e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){const{connections:e}=ye.getConnectionsData(this.namespace);e.length===0&&m.reset("ProfileWallets")}this.requestUpdate()}};B.styles=qn;Q([d()],B.prototype,"currentTab",void 0);Q([d()],B.prototype,"namespace",void 0);Q([d()],B.prototype,"namespaces",void 0);Q([d()],B.prototype,"caipAddress",void 0);Q([d()],B.prototype,"profileName",void 0);Q([d()],B.prototype,"activeConnectorIds",void 0);Q([d()],B.prototype,"lastSelectedAddress",void 0);Q([d()],B.prototype,"lastSelectedConnectorId",void 0);Q([d()],B.prototype,"isSwitching",void 0);Q([d()],B.prototype,"caipNetwork",void 0);Q([d()],B.prototype,"user",void 0);Q([d()],B.prototype,"remoteFeatures",void 0);B=Q([p("w3m-profile-wallets-view")],B);const Xn=x`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      color ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      border ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      box-shadow ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      width ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      height ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:t})=>t.neutrals300};
    border-radius: ${({borderRadius:t})=>t.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      color ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      border ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      box-shadow ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      width ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      height ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:t})=>t.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:t})=>t.core.iconAccentPrimary};
    background-color: ${({tokens:t})=>t.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:t})=>t.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:t})=>t.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:t})=>t.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:t})=>t.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:t})=>t.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:t})=>t.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:t})=>t.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:t})=>t.theme.textTertiary};
  }
`;var Mt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Ve=class extends f{constructor(){super(...arguments),this.inputElementRef=wi(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return l`
      <label data-size=${this.size}>
        <input
          ${mi(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};Ve.styles=[W,N,Xn];Mt([c({type:Boolean})],Ve.prototype,"checked",void 0);Mt([c({type:Boolean})],Ve.prototype,"disabled",void 0);Mt([c()],Ve.prototype,"size",void 0);Ve=Mt([p("wui-toggle")],Ve);const Qn=x`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[2]} ${({spacing:t})=>t[3]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.theme.foregroundPrimary};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var Zi=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let At=class extends f{constructor(){super(...arguments),this.checked=!1}render(){return l`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};At.styles=[W,N,Qn];Zi([c({type:Boolean})],At.prototype,"checked",void 0);At=Zi([p("wui-certified-switch")],At);const Zn=x`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:t})=>t[3]};
    color: ${({tokens:t})=>t.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:t})=>t[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:t})=>t[4]};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }
`;var Ji=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let It=class extends f{constructor(){super(...arguments),this.inputComponentRef=wi(),this.inputValue=""}render(){return l`
      <wui-input-text
        ${mi(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?l`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){const n=this.inputComponentRef.value?.inputElementRef.value;n&&(n.value="",this.inputValue="",n.focus(),n.dispatchEvent(new Event("input")))}};It.styles=[W,Zn];Ji([c()],It.prototype,"inputValue",void 0);It=Ji([p("wui-search-bar")],It);const Jn=x`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:t})=>t[2]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:t})=>t.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var en=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let kt=class extends f{constructor(){super(...arguments),this.type="wallet"}render(){return l`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?l` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${xn}`:l`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};kt.styles=[W,N,Jn];en([c()],kt.prototype,"type",void 0);kt=en([p("wui-card-select-loader")],kt);const eo=ie`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var re=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let H=class extends f{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&F.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&F.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&F.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&F.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&F.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&F.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&F.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&F.getSpacingStyles(this.margin,3)};
    `,l`<slot></slot>`}};H.styles=[W,eo];re([c()],H.prototype,"gridTemplateRows",void 0);re([c()],H.prototype,"gridTemplateColumns",void 0);re([c()],H.prototype,"justifyItems",void 0);re([c()],H.prototype,"alignItems",void 0);re([c()],H.prototype,"justifyContent",void 0);re([c()],H.prototype,"alignContent",void 0);re([c()],H.prototype,"columnGap",void 0);re([c()],H.prototype,"rowGap",void 0);re([c()],H.prototype,"gap",void 0);re([c()],H.prototype,"padding",void 0);re([c()],H.prototype,"margin",void 0);H=re([p("wui-grid")],H);const to=x`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[3]} ${({spacing:t})=>t[0]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:t})=>t[4]}, 20px);
    transition:
      color ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-1"]},
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-1"]},
      border-radius ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:t})=>t.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:t})=>t.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:t})=>t.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:t})=>t.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:t})=>t.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var yt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Pe=class extends f{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const e=this.wallet?.badge_type==="certified";return l`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${h(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?l`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():l`
      <wui-wallet-image
        size="lg"
        imageSrc=${h(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return l`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=C.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await C.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Pe.styles=to;yt([d()],Pe.prototype,"visible",void 0);yt([d()],Pe.prototype,"imageSrc",void 0);yt([d()],Pe.prototype,"imageLoading",void 0);yt([c()],Pe.prototype,"wallet",void 0);Pe=yt([p("w3m-all-wallets-list-item")],Pe);const io=x`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:t})=>t.xl};
    animation-timing-function: ${({easings:t})=>t["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:t})=>t[4]};
    padding-bottom: ${({spacing:t})=>t[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Qe=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const ji="local-paginator";let $e=class extends f{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!I.state.wallets.length,this.wallets=I.state.wallets,this.recommended=I.state.recommended,this.featured=I.state.featured,this.filteredWallets=I.state.filteredWallets,this.unsubscribe.push(I.subscribeKey("wallets",e=>this.wallets=e),I.subscribeKey("recommended",e=>this.recommended=e),I.subscribeKey("featured",e=>this.featured=e),I.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return l`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const e=this.shadowRoot?.querySelector("wui-grid");e&&(await I.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,n){return[...Array(e)].map(()=>l`
        <wui-card-select-loader type="wallet" id=${h(n)}></wui-card-select-loader>
      `)}getWallets(){const e=[...this.featured,...this.recommended];this.filteredWallets?.length>0?e.push(...this.filteredWallets):e.push(...this.wallets);const n=b.uniqueBy(e,"id"),o=We.markWalletsAsInstalled(n);return We.markWalletsWithDisplayIndex(o)}walletsTemplate(){return this.getWallets().map(n=>l`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${n.id}"
          @click=${()=>this.onConnectWallet(n)}
          .wallet=${n}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:n,featured:o,count:r,mobileFilteredOutWalletsLength:i}=I.state,s=window.innerWidth<352?3:4,a=e.length+n.length;let k=Math.ceil(a/s)*s-a+s;return k-=e.length?o.length%s:0,r===0&&o.length>0?null:r===0||[...o,...e,...n].length<r-(i??0)?this.shimmerTemplate(k,ji):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${ji}`);e&&(this.paginationObserver=new IntersectionObserver(([n])=>{if(n?.isIntersecting&&!this.loading){const{page:o,count:r,wallets:i}=I.state;i.length<r&&I.fetchWalletsByPage({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){w.selectWalletConnector(e)}};$e.styles=io;Qe([d()],$e.prototype,"loading",void 0);Qe([d()],$e.prototype,"wallets",void 0);Qe([d()],$e.prototype,"recommended",void 0);Qe([d()],$e.prototype,"featured",void 0);Qe([d()],$e.prototype,"filteredWallets",void 0);$e=Qe([p("w3m-all-wallets-list")],$e);const no=ie`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Ft=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let He=class extends f{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?l`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await I.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=I.state,n=We.markWalletsAsInstalled(e);return e.length?l`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${n.map(o=>l`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(o)}
              .wallet=${o}
              data-testid="wallet-search-item-${o.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:l`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){w.selectWalletConnector(e)}};He.styles=no;Ft([d()],He.prototype,"loading",void 0);Ft([c()],He.prototype,"query",void 0);Ft([c()],He.prototype,"badge",void 0);He=Ft([p("w3m-all-wallets-search")],He);var yi=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Et=class extends f{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=b.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return l`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge==="certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?l`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:l`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",E.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return b.isMobile()?l`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){m.push("ConnectingWalletConnect")}};yi([d()],Et.prototype,"search",void 0);yi([d()],Et.prototype,"badge",void 0);Et=yi([p("w3m-all-wallets-view")],Et);const oo=x`
  button {
    display: flex;
    gap: ${({spacing:t})=>t[1]};
    padding: ${({spacing:t})=>t[4]};
    width: 100%;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  :host([data-size='md']) button {
    padding: ${({spacing:t})=>t[3]};
    border-radius: ${({borderRadius:t})=>t[3]};
  }

  button:hover {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var Ze=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Ce=class extends f{constructor(){super(...arguments),this.text="",this.disabled=!1,this.size="lg",this.icon="copy",this.tabIdx=void 0}render(){this.dataset.size=this.size;const e=`${this.size}-regular`;return l`
      <button ?disabled=${this.disabled} tabindex=${h(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${e} color="primary">${this.text}</wui-text>
      </button>
    `}};Ce.styles=[W,N,oo];Ze([c()],Ce.prototype,"text",void 0);Ze([c({type:Boolean})],Ce.prototype,"disabled",void 0);Ze([c()],Ce.prototype,"size",void 0);Ze([c()],Ce.prototype,"icon",void 0);Ze([c()],Ce.prototype,"tabIdx",void 0);Ce=Ze([p("wui-list-button")],Ce);const ro=x`
  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({spacing:t})=>t[2]};
  }

  wui-loading-spinner {
    right: ${({spacing:t})=>t[3]};
  }

  wui-text {
    margin: ${({spacing:t})=>t[2]} ${({spacing:t})=>t[3]}
      ${({spacing:t})=>t[0]} ${({spacing:t})=>t[3]};
  }
`;var Je=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Se=class extends f{constructor(){super(),this.unsubscribe=[],this.formRef=wi(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=y.state.remoteFeatures,this.unsubscribe.push(y.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{e.key==="Enter"&&this.onSubmitEmail(e)})}render(){const e=g.hasAnyConnection(S.CONNECTOR_ID.AUTH);return l`
      <form ${mi(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${h(this.tabIdx)}
          ?disabled=${e}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?l`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?l`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:null}templateError(){return this.error?l`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(!fi.isValidEmail(this.email)){Gi.open({displayMessage:wn.ALERT_WARNINGS.INVALID_EMAIL.displayMessage},"warning");return}if(!S.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(o=>o===u.state.activeChain)){const o=u.getFirstCaipNetworkSupportsAuthConnector();if(o){m.push("SwitchNetwork",{network:o});return}}try{if(this.loading)return;this.loading=!0,e.preventDefault();const o=w.getAuthConnector();if(!o)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:r}=await o.provider.connectEmail({email:this.email});if(A.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),r==="VERIFY_OTP")A.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),m.push("EmailVerifyOtp",{email:this.email});else if(r==="VERIFY_DEVICE")m.push("EmailVerifyDevice",{email:this.email});else if(r==="CONNECT"){const i=this.remoteFeatures?.multiWallet;await g.connectExternal(o,u.state.activeChain),i?(m.replace("ProfileWallets"),E.showSuccess("New Wallet Added")):m.replace("Account")}}catch(o){b.parseError(o)?.includes("Invalid email")?this.error="Invalid email. Try again.":E.showError(o)}finally{this.loading=!1}}onFocusEvent(){A.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};Se.styles=ro;Je([c()],Se.prototype,"tabIdx",void 0);Je([d()],Se.prototype,"email",void 0);Je([d()],Se.prototype,"loading",void 0);Je([d()],Se.prototype,"error",void 0);Je([d()],Se.prototype,"remoteFeatures",void 0);Se=Je([p("w3m-email-login-widget")],Se);const so=x`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  button > wui-icon {
    width: 24px;
    height: 24px;
  }
`;var Vt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Ke=class extends f{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${h(this.tabIdx)}>
        <wui-icon name=${this.logo}></wui-icon>
      </button>
    `}};Ke.styles=[W,N,so];Vt([c()],Ke.prototype,"logo",void 0);Vt([c({type:Boolean})],Ke.prototype,"disabled",void 0);Vt([c()],Ke.prototype,"tabIdx",void 0);Ke=Vt([p("wui-logo-select")],Ke);const ao=x`
  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1)
      ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }
`;var Me=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const Li=2,Bi=6;let be=class extends f{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=w.state.connectors,this.remoteFeatures=y.state.remoteFeatures,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.isPwaLoading=!1,this.unsubscribe.push(w.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(n=>n.type==="AUTH")}),y.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){const e=this.walletGuide==="explore";let n=this.remoteFeatures?.socials;return!n&&e?(n=P.DEFAULT_SOCIALS,this.renderTopViewContent(n)):n?this.renderTopViewContent(n):null}renderTopViewContent(e){return e.length===2?l` <wui-flex gap="2">
        ${e.slice(0,Li).map(n=>l`<wui-logo-select
              data-testid=${`social-selector-${n}`}
              @click=${()=>{this.onSocialClick(n)}}
              logo=${n}
              tabIdx=${h(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:l` <wui-list-button
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      size="lg"
      icon=${h(e[0])}
      text=${`Continue with ${e[0]}`}
      tabIdx=${h(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-button>`}bottomViewTemplate(){let e=this.remoteFeatures?.socials;const n=this.walletGuide==="explore";return(!this.authConnector||!e||e.length===0)&&n&&(e=P.DEFAULT_SOCIALS),!e||e.length<=Li?null:e&&e.length>Bi?l`<wui-flex gap="2">
        ${e.slice(1,Bi-1).map(r=>l`<wui-logo-select
              data-testid=${`social-selector-${r}`}
              @click=${()=>{this.onSocialClick(r)}}
              logo=${r}
              tabIdx=${h(this.tabIdx)}
              ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${h(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:e?l`<wui-flex gap="2">
      ${e.slice(1,e.length).map(r=>l`<wui-logo-select
            data-testid=${`social-selector-${r}`}
            @click=${()=>{this.onSocialClick(r)}}
            logo=${r}
            tabIdx=${h(this.tabIdx)}
            ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){m.push("ConnectSocials")}async onSocialClick(e){if(!S.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(o=>o===u.state.activeChain)){const o=u.getFirstCaipNetworkSupportsAuthConnector();if(o){m.push("SwitchNetwork",{network:o});return}}e&&await vn(e)}async handlePwaFrameLoad(){if(b.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof mn&&await this.authConnector.provider.init()}catch(e){Gi.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return g.hasAnyConnection(S.CONNECTOR_ID.AUTH)}};be.styles=ao;Me([c()],be.prototype,"walletGuide",void 0);Me([c()],be.prototype,"tabIdx",void 0);Me([d()],be.prototype,"connectors",void 0);Me([d()],be.prototype,"remoteFeatures",void 0);Me([d()],be.prototype,"authConnector",void 0);Me([d()],be.prototype,"isPwaLoading",void 0);be=Me([p("w3m-social-login-widget")],be);const lo=x`
  :host {
    position: relative;
    border-radius: ${({borderRadius:t})=>t[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:t})=>t.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:t})=>t[1]};
    padding: ${({spacing:t})=>t[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;var tn=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const ti=4;let Wt=class extends f{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<ti;return l`${this.walletImages.slice(0,ti).map(({src:n,walletName:o})=>l`
          <wui-wallet-image
            size="sm"
            imageSrc=${n}
            name=${h(o)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(ti-this.walletImages.length)].map(()=>l` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};Wt.styles=[W,lo];tn([c({type:Array})],Wt.prototype,"walletImages",void 0);Wt=tn([p("wui-all-wallets-image")],Wt);const co=x`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:t})=>t[4]};
    color: ${({tokens:t})=>t.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:t})=>t.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:t})=>t.core.glass010};
    color: ${({tokens:t})=>t.theme.foregroundTertiary};
  }
`;var Z=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let U=class extends f{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,l`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${h(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?l` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?l` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?l`<wui-wallet-image
        size=${h(this.size==="sm"?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?l`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?l`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?l`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};U.styles=[W,N,co];Z([c({type:Array})],U.prototype,"walletImages",void 0);Z([c()],U.prototype,"imageSrc",void 0);Z([c()],U.prototype,"name",void 0);Z([c()],U.prototype,"size",void 0);Z([c()],U.prototype,"tagLabel",void 0);Z([c()],U.prototype,"tagVariant",void 0);Z([c()],U.prototype,"walletIcon",void 0);Z([c()],U.prototype,"tabIdx",void 0);Z([c({type:Boolean})],U.prototype,"disabled",void 0);Z([c({type:Boolean})],U.prototype,"showAllWallets",void 0);Z([c({type:Boolean})],U.prototype,"loading",void 0);Z([c({type:String})],U.prototype,"loadingSpinnerColor",void 0);U=Z([p("wui-list-wallet")],U);var et=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let De=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.count=I.state.count,this.filteredCount=I.state.filteredWallets.length,this.isFetchingRecommendedWallets=I.state.isFetchingRecommendedWallets,this.unsubscribe.push(w.subscribeKey("connectors",e=>this.connectors=e),I.subscribeKey("count",e=>this.count=e),I.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),I.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(k=>k.id==="walletConnect"),{allWallets:n}=y.state;if(!e||n==="HIDE"||n==="ONLY_MOBILE"&&!b.isMobile())return null;const o=I.state.featured.length,r=this.count+o,i=r<10?r:Math.floor(r/10)*10,s=this.filteredCount>0?this.filteredCount:i;let a=`${s}`;this.filteredCount>0?a=`${this.filteredCount}`:s<r&&(a=`${s}+`);const $=g.hasAnyConnection(S.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${h(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${$}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){A.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),m.push("AllWallets")}};et([c()],De.prototype,"tabIdx",void 0);et([d()],De.prototype,"connectors",void 0);et([d()],De.prototype,"count",void 0);et([d()],De.prototype,"filteredCount",void 0);et([d()],De.prototype,"isFetchingRecommendedWallets",void 0);De=et([p("w3m-all-wallets-widget")],De);var Ht=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let st=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.connections=g.state.connections,this.unsubscribe.push(w.subscribeKey("connectors",e=>this.connectors=e),g.subscribeKey("connections",e=>this.connections=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(n=>n.type==="ANNOUNCED");return e?.length?l`
      <wui-flex flexDirection="column" gap="2">
        ${e.filter(Ee.showConnector).map(n=>{const r=(this.connections.get(n.chain)??[]).some(i=>G.isLowerCaseMatch(i.connectorId,n.id));return l`
            <wui-list-wallet
              imageSrc=${h(C.getConnectorImage(n))}
              name=${n.name??"Unknown"}
              @click=${()=>this.onConnector(n)}
              tagVariant=${r?"info":"success"}
              tagLabel=${r?"connected":"installed"}
              size="sm"
              data-testid=${`wallet-selector-${n.id}`}
              .installed=${!0}
              tabIdx=${h(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.id==="walletConnect"?b.isMobile()?m.push("AllWallets"):m.push("ConnectingWalletConnect"):m.push("ConnectingExternal",{connector:e})}};Ht([c()],st.prototype,"tabIdx",void 0);Ht([d()],st.prototype,"connectors",void 0);Ht([d()],st.prototype,"connections",void 0);st=Ht([p("w3m-connect-announced-widget")],st);var Kt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let at=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.loading=!1,this.unsubscribe.push(w.subscribeKey("connectors",e=>this.connectors=e)),b.isTelegram()&&b.isIos()&&(this.loading=!g.state.wcUri,this.unsubscribe.push(g.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=y.state;if(!e?.length)return this.style.cssText="display: none",null;const n=this.filterOutDuplicateWallets(e),o=g.hasAnyConnection(S.CONNECTOR_ID.WALLET_CONNECT);return l`<wui-flex flexDirection="column" gap="2">
      ${n.map(r=>l`
          <wui-list-wallet
            imageSrc=${h(C.getWalletImage(r))}
            name=${r.name??"Unknown"}
            @click=${()=>this.onConnectWallet(r)}
            size="sm"
            data-testid=${`wallet-selector-${r.id}`}
            tabIdx=${h(this.tabIdx)}
            ?loading=${this.loading}
            ?disabled=${o}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const n=le.getRecentWallets(),o=this.connectors.map(a=>a.info?.rdns).filter(Boolean),r=n.map(a=>a.rdns).filter(Boolean),i=o.concat(r);if(i.includes("io.metamask.mobile")&&b.isMobile()){const a=i.indexOf("io.metamask.mobile");i[a]="io.metamask"}return e.filter(a=>!i.includes(String(a?.rdns)))}onConnectWallet(e){this.loading||m.push("ConnectingWalletConnect",{wallet:e})}};Kt([c()],at.prototype,"tabIdx",void 0);Kt([d()],at.prototype,"connectors",void 0);Kt([d()],at.prototype,"loading",void 0);at=Kt([p("w3m-connect-custom-widget")],at);var xi=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let _t=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.unsubscribe.push(w.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const o=this.connectors.filter(i=>i.type==="EXTERNAL").filter(Ee.showConnector).filter(i=>i.id!==S.CONNECTOR_ID.COINBASE_SDK);if(!o?.length)return this.style.cssText="display: none",null;const r=g.hasAnyConnection(S.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-flex flexDirection="column" gap="2">
        ${o.map(i=>l`
            <wui-list-wallet
              imageSrc=${h(C.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              data-testid=${`wallet-selector-external-${i.id}`}
              size="sm"
              @click=${()=>this.onConnector(i)}
              tabIdx=${h(this.tabIdx)}
              ?disabled=${r}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(e){m.push("ConnectingExternal",{connector:e})}};xi([c()],_t.prototype,"tabIdx",void 0);xi([d()],_t.prototype,"connectors",void 0);_t=xi([p("w3m-connect-external-widget")],_t);var vi=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Tt=class extends f{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){if(!this.wallets.length)return this.style.cssText="display: none",null;const e=g.hasAnyConnection(S.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-flex flexDirection="column" gap="2">
        ${this.wallets.map(n=>l`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${n.id}`}
              imageSrc=${h(C.getWalletImage(n))}
              name=${n.name??"Unknown"}
              @click=${()=>this.onConnectWallet(n)}
              tabIdx=${h(this.tabIdx)}
              size="sm"
              ?disabled=${e}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){w.selectWalletConnector(e)}};vi([c()],Tt.prototype,"tabIdx",void 0);vi([c()],Tt.prototype,"wallets",void 0);Tt=vi([p("w3m-connect-featured-widget")],Tt);var qt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let lt=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=[],this.connections=g.state.connections,this.unsubscribe.push(g.subscribeKey("connections",e=>this.connections=e))}render(){const e=this.connectors.filter(Ee.showConnector);return e.length===0?(this.style.cssText="display: none",null):l`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(n=>{const r=(this.connections.get(n.chain)??[]).some(i=>G.isLowerCaseMatch(i.connectorId,n.id));return l`
            <wui-list-wallet
              imageSrc=${h(C.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name??"Unknown"}
              tagVariant=${r?"info":"success"}
              tagLabel=${r?"connected":"installed"}
              data-testid=${`wallet-selector-${n.id}`}
              size="sm"
              @click=${()=>this.onConnector(n)}
              tabIdx=${h(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(e){w.setActiveConnector(e),m.push("ConnectingExternal",{connector:e})}};qt([c()],lt.prototype,"tabIdx",void 0);qt([c()],lt.prototype,"connectors",void 0);qt([d()],lt.prototype,"connections",void 0);lt=qt([p("w3m-connect-injected-widget")],lt);var $i=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Nt=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.unsubscribe.push(w.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(n=>n.type==="MULTI_CHAIN"&&n.name!=="WalletConnect");return e?.length?l`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(n=>l`
            <wui-list-wallet
              imageSrc=${h(C.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name??"Unknown"}
              tagVariant="info"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${n.id}`}
              size="sm"
              @click=${()=>this.onConnector(n)}
              tabIdx=${h(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){w.setActiveConnector(e),m.push("ConnectingMultiChain")}};$i([c()],Nt.prototype,"tabIdx",void 0);$i([d()],Nt.prototype,"connectors",void 0);Nt=$i([p("w3m-connect-multi-chain-widget")],Nt);var Gt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let ct=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.loading=!1,this.unsubscribe.push(w.subscribeKey("connectors",e=>this.connectors=e)),b.isTelegram()&&b.isIos()&&(this.loading=!g.state.wcUri,this.unsubscribe.push(g.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const n=le.getRecentWallets().filter(r=>!We.isExcluded(r)).filter(r=>!this.hasWalletConnector(r)).filter(r=>this.isWalletCompatibleWithCurrentChain(r));if(!n.length)return this.style.cssText="display: none",null;const o=g.hasAnyConnection(S.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-flex flexDirection="column" gap="2">
        ${n.map(r=>l`
            <wui-list-wallet
              imageSrc=${h(C.getWalletImage(r))}
              name=${r.name??"Unknown"}
              @click=${()=>this.onConnectWallet(r)}
              tagLabel="recent"
              tagVariant="info"
              size="sm"
              tabIdx=${h(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${o}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){this.loading||w.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some(n=>n.id===e.id||n.name===e.name)}isWalletCompatibleWithCurrentChain(e){const n=u.state.activeChain;return n&&e.chains?e.chains.some(o=>{const r=o.split(":")[0];return n===r}):!0}};Gt([c()],ct.prototype,"tabIdx",void 0);Gt([d()],ct.prototype,"connectors",void 0);Gt([d()],ct.prototype,"loading",void 0);ct=Gt([p("w3m-connect-recent-widget")],ct);var Yt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let dt=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,b.isTelegram()&&b.isIos()&&(this.loading=!g.state.wcUri,this.unsubscribe.push(g.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const{connectors:e}=w.state,{customWallets:n,featuredWalletIds:o}=y.state,r=le.getRecentWallets(),i=e.find(T=>T.id==="walletConnect"),a=e.filter(T=>T.type==="INJECTED"||T.type==="ANNOUNCED"||T.type==="MULTI_CHAIN").filter(T=>T.name!=="Browser Wallet");if(!i)return null;if(o||n||!this.wallets.length)return this.style.cssText="display: none",null;const $=a.length+r.length,k=Math.max(0,2-$),_=We.filterOutDuplicateWallets(this.wallets).slice(0,k);if(!_.length)return this.style.cssText="display: none",null;const J=g.hasAnyConnection(S.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-flex flexDirection="column" gap="2">
        ${_.map(T=>l`
            <wui-list-wallet
              imageSrc=${h(C.getWalletImage(T))}
              name=${T?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(T)}
              size="sm"
              tabIdx=${h(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${J}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){if(this.loading)return;const n=w.getConnector({id:e.id,rdns:e.rdns});n?m.push("ConnectingExternal",{connector:n}):m.push("ConnectingWalletConnect",{wallet:e})}};Yt([c()],dt.prototype,"tabIdx",void 0);Yt([c()],dt.prototype,"wallets",void 0);Yt([d()],dt.prototype,"loading",void 0);dt=Yt([p("w3m-connect-recommended-widget")],dt);var Xt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let ut=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.connectorImages=ke.state.connectorImages,this.unsubscribe.push(w.subscribeKey("connectors",e=>this.connectors=e),ke.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(b.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(r=>r.id==="walletConnect");if(!e)return this.style.cssText="display: none",null;const n=e.imageUrl||this.connectorImages[e?.imageId??""],o=g.hasAnyConnection(S.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-list-wallet
        imageSrc=${h(n)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="accent"
        tabIdx=${h(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
        size="sm"
        ?disabled=${o}
      >
      </wui-list-wallet>
    `}onConnector(e){w.setActiveConnector(e),m.push("ConnectingWalletConnect")}};Xt([c()],ut.prototype,"tabIdx",void 0);Xt([d()],ut.prototype,"connectors",void 0);Xt([d()],ut.prototype,"connectorImages",void 0);ut=Xt([p("w3m-connect-walletconnect-widget")],ut);const uo=x`
  :host {
    margin-top: ${({spacing:t})=>t[1]};
  }
  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1)
      ${({spacing:t})=>t[2]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }
`;var xt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let je=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.recommended=I.state.recommended,this.featured=I.state.featured,this.unsubscribe.push(w.subscribeKey("connectors",e=>this.connectors=e),I.subscribeKey("recommended",e=>this.recommended=e),I.subscribeKey("featured",e=>this.featured=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:e,recent:n,announced:o,injected:r,multiChain:i,recommended:s,featured:a,external:$}=Ee.getConnectorsByType(this.connectors,this.recommended,this.featured);return Ee.getConnectorTypeOrder({custom:e,recent:n,announced:o,injected:r,multiChain:i,recommended:s,featured:a,external:$}).map(_=>{switch(_){case"injected":return l`
            ${i.length?l`<w3m-connect-multi-chain-widget
                  tabIdx=${h(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${o.length?l`<w3m-connect-announced-widget
                  tabIdx=${h(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${r.length?l`<w3m-connect-injected-widget
                  .connectors=${r}
                  tabIdx=${h(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return l`<w3m-connect-walletconnect-widget
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return l`<w3m-connect-recent-widget
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return l`<w3m-connect-featured-widget
            .wallets=${a}
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return l`<w3m-connect-custom-widget
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return l`<w3m-connect-external-widget
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return l`<w3m-connect-recommended-widget
            .wallets=${s}
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${_}`),null}})}};je.styles=uo;xt([c()],je.prototype,"tabIdx",void 0);xt([d()],je.prototype,"connectors",void 0);xt([d()],je.prototype,"recommended",void 0);xt([d()],je.prototype,"featured",void 0);je=xt([p("w3m-connector-list")],je);var nn=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let ai=class extends f{constructor(){super(...arguments),this.tabIdx=void 0}render(){return l`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${h(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${h(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};nn([c()],ai.prototype,"tabIdx",void 0);ai=nn([p("w3m-wallet-login-list")],ai);const ho=x`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }
`;var se=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const po=470;let K=class extends f{constructor(){super(),this.unsubscribe=[],this.connectors=w.state.connectors,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.features=y.state.features,this.remoteFeatures=y.state.remoteFeatures,this.enableWallets=y.state.enableWallets,this.noAdapters=u.state.noAdapters,this.walletGuide="get-started",this.checked=St.state.isLegalCheckboxChecked,this.isEmailEnabled=this.remoteFeatures?.email&&!u.state.noAdapters,this.isSocialEnabled=this.remoteFeatures?.socials&&this.remoteFeatures.socials.length>0&&!u.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(w.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(n=>n.type==="AUTH"),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),y.subscribeKey("features",e=>{this.features=e}),y.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),y.subscribeKey("enableWallets",e=>this.enableWallets=e),u.subscribeKey("noAdapters",e=>this.setEmailAndSocialEnableCheck(e,this.remoteFeatures)),St.subscribeKey("isLegalCheckboxChecked",e=>this.checked=e))}disconnectedCallback(){this.unsubscribe.forEach(n=>n()),this.resizeObserver?.disconnect(),this.shadowRoot?.querySelector(".connect")?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){const e=this.shadowRoot?.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(e),this.handleConnectListScroll())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=y.state,o=y.state.features?.legalCheckbox,s=!!(e||n)&&!!o&&this.walletGuide==="get-started"&&!this.checked,a={connect:!0,disabled:s},$=y.state.enableWalletGuide,k=this.enableWallets,_=this.isSocialEnabled||this.authConnector,J=s?-1:void 0;return l`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${["0","0","4","0"]}
          class=${Yi(a)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${_&&k&&$&&this.walletGuide==="get-started"?["1","3","0","3"]:["1","3","3","3"]}
          >
            ${this.renderConnectMethod(J)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}reownBrandingTemplate(){return fi.hasFooter()||!this.remoteFeatures?.reownBranding?null:l`<wui-ux-by-reown></wui-ux-by-reown>`}setEmailAndSocialEnableCheck(e,n){this.isEmailEnabled=n?.email&&!e,this.isSocialEnabled=n?.socials&&n.socials.length>0&&!e,this.remoteFeatures=n,this.noAdapters=e}checkIfAuthEnabled(e){const n=e.filter(r=>r.type===bn.CONNECTOR_TYPE_AUTH).map(r=>r.chain);return S.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(r=>n.includes(r))}renderConnectMethod(e){const n=We.getConnectOrderMethod(this.features,this.connectors);return l`${n.map((o,r)=>{switch(o){case"email":return l`${this.emailTemplate(e)} ${this.separatorTemplate(r,"email")}`;case"social":return l`${this.socialListTemplate(e)}
          ${this.separatorTemplate(r,"social")}`;case"wallet":return l`${this.walletListTemplate(e)}
          ${this.separatorTemplate(r,"wallet")}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){const o=We.getConnectOrderMethod(this.features,this.connectors)[e+1];return o?this.checkMethodEnabled(o)?o:this.checkIsThereNextMethod(e+1):void 0}separatorTemplate(e,n){const o=this.checkIsThereNextMethod(e),r=this.walletGuide==="explore";switch(n){case"wallet":return this.enableWallets&&o&&!r?l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const i=o==="social";return this.isAuthEnabled&&this.isEmailEnabled&&!i&&o?l`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const i=o==="email";return this.isAuthEnabled&&this.isSocialEnabled&&!i&&o?l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return!this.isEmailEnabled||!this.isAuthEnabled?null:l`<w3m-email-login-widget tabIdx=${h(e)}></w3m-email-login-widget>`}socialListTemplate(e){return!this.isSocialEnabled||!this.isAuthEnabled?null:l`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${h(e)}
    ></w3m-social-login-widget>`}walletListTemplate(e){const n=this.enableWallets,o=this.features?.emailShowWallets===!1,r=this.features?.collapseWallets,i=o||r;return!n||(b.isTelegram()&&(b.isSafari()||b.isIos())&&g.connectWalletConnect().catch(a=>({})),this.walletGuide==="explore")?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&i?l`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${h(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:l`<w3m-wallet-login-list tabIdx=${h(e)}></w3m-wallet-login-list>`}legalCheckboxTemplate(){return this.walletGuide==="explore"?null:l`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){const e=this.shadowRoot?.querySelector(".connect");if(!e)return;e.scrollHeight>po?(e.style.setProperty("--connect-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty("--connect-scroll--top-opacity",Ct.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",Ct.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){m.push("ConnectWallets")}};K.styles=ho;se([d()],K.prototype,"connectors",void 0);se([d()],K.prototype,"authConnector",void 0);se([d()],K.prototype,"features",void 0);se([d()],K.prototype,"remoteFeatures",void 0);se([d()],K.prototype,"enableWallets",void 0);se([d()],K.prototype,"noAdapters",void 0);se([c()],K.prototype,"walletGuide",void 0);se([d()],K.prototype,"checked",void 0);se([d()],K.prototype,"isEmailEnabled",void 0);se([d()],K.prototype,"isSocialEnabled",void 0);se([d()],K.prototype,"isAuthEnabled",void 0);K=se([p("w3m-connect-view")],K);const fo=x`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[5]};
    padding-left: ${({spacing:t})=>t[3]};
    padding-right: ${({spacing:t})=>t[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:t})=>t[6]};
  }

  wui-text {
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var Qt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let qe=class extends f{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};qe.styles=[W,N,fo];Qt([c({type:Boolean})],qe.prototype,"disabled",void 0);Qt([c()],qe.prototype,"label",void 0);Qt([c()],qe.prototype,"buttonLabel",void 0);qe=Qt([p("wui-cta-button")],qe);const wo=x`
  :host {
    display: block;
    padding: 0 ${({spacing:t})=>t[5]} ${({spacing:t})=>t[5]};
  }
`;var on=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Rt=class extends f{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:n,play_store:o,chrome_store:r,homepage:i}=this.wallet,s=b.isMobile(),a=b.isIos(),$=b.isAndroid(),k=[n,o,i,r].filter(Boolean).length>1,_=F.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return k&&!s?l`
        <wui-cta-button
          label=${`Don't have ${_}?`}
          buttonLabel="Get"
          @click=${()=>m.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!k&&i?l`
        <wui-cta-button
          label=${`Don't have ${_}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?l`
        <wui-cta-button
          label=${`Don't have ${_}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&$?l`
        <wui-cta-button
          label=${`Don't have ${_}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&b.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&b.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&b.openHref(this.wallet.homepage,"_blank")}};Rt.styles=[wo];on([c({type:Object})],Rt.prototype,"wallet",void 0);Rt=on([p("w3m-mobile-download-links")],Rt);const mo=x`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t[1]} * -1);
    bottom: calc(${({spacing:t})=>t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:t})=>t.lg};
    transition-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:t})=>t[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:t})=>t["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var pe=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};class O extends f{constructor(){super(),this.wallet=m.state.data?.wallet,this.connector=m.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=C.getWalletImage(this.wallet)??C.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=g.state.wcUri,this.error=g.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(g.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),g.subscribeKey("wcError",e=>this.error=e)),(b.isTelegram()||b.isSafari())&&b.isIos()&&g.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),g.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n="";return this.label?n=this.label:(n=`Continue in ${this.name}`,this.error&&(n="Connection declined")),l`
      <wui-flex
        data-error=${h(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${h(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?l`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?l`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){g.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const e=ii.state.themeVariables["--w3m-border-radius-master"],n=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(b.copyToClopboard(this.uri),E.showSuccess("Link copied"))}catch{E.showError("Failed to copy")}}}O.styles=mo;pe([d()],O.prototype,"isRetrying",void 0);pe([d()],O.prototype,"uri",void 0);pe([d()],O.prototype,"error",void 0);pe([d()],O.prototype,"ready",void 0);pe([d()],O.prototype,"showRetry",void 0);pe([d()],O.prototype,"label",void 0);pe([d()],O.prototype,"secondaryBtnLabel",void 0);pe([d()],O.prototype,"secondaryLabel",void 0);pe([d()],O.prototype,"isLoading",void 0);pe([c({type:Boolean})],O.prototype,"isMobile",void 0);pe([c()],O.prototype,"onRetry",void 0);var bo=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Ui=class extends O{constructor(){if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=g.getConnections(this.connector?.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=y.state.remoteFeatures,this.currentActiveConnectorId=w.state.activeConnectorIds[this.connector?.chain],!this.connector)throw new Error("w3m-connecting-view: No connector provided");const e=this.connector?.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),A.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser",displayIndex:this.wallet?.display_index}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(w.subscribeKey("activeConnectorIds",n=>{const o=n[e],r=this.remoteFeatures?.multiWallet;o!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&r?(m.replace("ProfileWallets"),E.showSuccess("New Wallet Added")):D.close())}),g.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;(this.connector.id!==S.CONNECTOR_ID.COINBASE_SDK||!this.error)&&(await g.connectExternal(this.connector,this.connector.chain),A.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}}catch(e){A.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}onConnectionsChange(e){if(this.connector?.chain&&e.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){const n=e.get(this.connector.chain)??[],o=this.remoteFeatures?.multiWallet;if(n.length===0)m.replace("Connect");else{const r=ye.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(s=>s.accounts),i=ye.getConnectionsByConnectorId(n,this.connector.id).flatMap(s=>s.accounts);i.length===0?this.hasMultipleConnections&&o?(m.replace("ProfileWallets"),E.showSuccess("Wallet deleted")):D.close():!r.every(a=>i.some($=>G.isLowerCaseMatch(a.address,$.address)))&&o&&m.replace("ProfileWallets")}}}isAlreadyConnected(e){return!!e&&this.connectionsByNamespace.some(n=>G.isLowerCaseMatch(n.connectorId,e.id))}};Ui=bo([p("w3m-connecting-external-view")],Ui);const go=ie`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var rn=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Ot=class extends f{constructor(){super(),this.unsubscribe=[],this.activeConnector=w.state.activeConnector,this.unsubscribe.push(w.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${h(C.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["0","3","0","3"]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","2","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map(e=>e.name?l`
            <wui-list-wallet
              imageSrc=${h(C.getChainImage(e.chain))}
              name=${S.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              size="sm"
              data-testid="wui-list-chain-${e.chain}"
            ></wui-list-wallet>
          `:null)}onConnector(e){const n=this.activeConnector?.connectors?.find(o=>o.chain===e.chain);if(!n){E.showError("Failed to find connector");return}n.id==="walletConnect"?b.isMobile()?m.push("AllWallets"):m.push("ConnectingWalletConnect"):m.push("ConnectingExternal",{connector:n})}};Ot.styles=go;rn([d()],Ot.prototype,"activeConnector",void 0);Ot=rn([p("w3m-connecting-multi-chain-view")],Ot);var Ci=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Pt=class extends f{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return l`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:n})=>n),e}onTabChange(e){const n=this.platformTabs[e];n&&this.onSelectPlatfrom?.(n)}};Ci([c({type:Array})],Pt.prototype,"platforms",void 0);Ci([c()],Pt.prototype,"onSelectPlatfrom",void 0);Pt=Ci([p("w3m-connecting-header")],Pt);var yo=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let zi=class extends O{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),A.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=w.state,n=e.find(o=>o.type==="ANNOUNCED"&&o.info?.rdns===this.wallet?.rdns||o.type==="INJECTED"||o.name===this.wallet?.name);if(n)await g.connectExternal(n,n.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");D.close(),A.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){A.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};zi=yo([p("w3m-connecting-wc-browser")],zi);var xo=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Mi=class extends O{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),A.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:n}=this.wallet,{redirect:o,href:r}=b.formatNativeUrl(e,this.uri);g.setWcLinking({name:n,href:r}),g.setRecentWallet(this.wallet),b.openHref(o,"_blank")}catch{this.error=!0}}};Mi=xo([p("w3m-connecting-wc-desktop")],Mi);var tt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Le=class extends O{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=y.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,link_mode:n,name:o}=this.wallet,{redirect:r,redirectUniversalLink:i,href:s}=b.formatNativeUrl(e,this.uri,n);this.redirectDeeplink=r,this.redirectUniversalLink=i,this.target=b.isIframe()?"_top":"_self",g.setWcLinking({name:o,href:s}),g.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?b.openHref(this.redirectUniversalLink,this.target):b.openHref(this.redirectDeeplink,this.target)}catch(e){A.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=P.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(g.subscribeKey("wcUri",()=>{this.onHandleURI()})),A.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){g.setWcError(!1),this.onConnect?.()}};tt([d()],Le.prototype,"redirectDeeplink",void 0);tt([d()],Le.prototype,"redirectUniversalLink",void 0);tt([d()],Le.prototype,"target",void 0);tt([d()],Le.prototype,"preferUniversalLinks",void 0);tt([d()],Le.prototype,"isLoading",void 0);Le=tt([p("w3m-connecting-wc-mobile")],Le);const vo=x`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:t})=>t.xl};
    animation-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var $o=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let li=class extends O{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),A.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return g.setWcLinking(void 0),g.setRecentWallet(this.wallet),l` <wui-qr-code
      size=${e}
      theme=${ii.state.themeMode}
      uri=${this.uri}
      imageSrc=${h(C.getWalletImage(this.wallet))}
      color=${h(ii.state.themeVariables["--w3m-qr-color"])}
      alt=${h(n)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return l`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};li.styles=vo;li=$o([p("w3m-connecting-wc-qrcode")],li);var Co=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Fi=class extends f{constructor(){if(super(),this.wallet=m.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");A.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index}})}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${h(C.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Fi=Co([p("w3m-connecting-wc-unsupported")],Fi);var sn=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let ci=class extends O{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=P.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(g.subscribeKey("wcUri",()=>{this.updateLoadingState()})),A.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:n}=this.wallet,{redirect:o,href:r}=b.formatUniversalUrl(e,this.uri);g.setWcLinking({name:n,href:r}),g.setRecentWallet(this.wallet),b.openHref(o,"_blank")}catch{this.error=!0}}};sn([d()],ci.prototype,"isLoading",void 0);ci=sn([p("w3m-connecting-wc-web")],ci);var it=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Be=class extends f{constructor(){super(),this.wallet=m.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!y.state.siwx,this.remoteFeatures=y.state.remoteFeatures,this.displayBranding=!0,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(y.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return!this.remoteFeatures?.reownBranding||!this.displayBranding?null:l`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(e=!1){if(!(this.platform==="browser"||y.state.manualWCControl&&!e))try{const{wcPairingExpiry:n,status:o}=g.state;if(e||y.state.enableEmbedded||b.isPairingExpired(n)||o==="connecting"){const r=g.getConnections(u.state.activeChain),i=this.remoteFeatures?.multiWallet,s=r.length>0;await g.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(s&&i?(m.replace("ProfileWallets"),E.showSuccess("New Wallet Added")):D.close())}}catch(n){if(n instanceof Error&&n.message.includes("An error occurred when attempting to switch chain")&&!y.state.enableNetworkSwitch&&u.state.activeChain){u.setActiveCaipNetwork(gn.getUnsupportedNetwork(`${u.state.activeChain}:${u.state.activeCaipNetwork?.id}`)),u.showUnsupportedChainUI();return}A.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:n?.message??"Unknown"}}),g.setWcError(!0),E.showError(n.message??"Connection error"),g.resetWcConnection(),m.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:e,desktop_link:n,webapp_link:o,injected:r,rdns:i}=this.wallet,s=r?.map(({injected_id:hn})=>hn).filter(Boolean),a=[...i?[i]:s??[]],$=y.state.isUniversalProvider?!1:a.length,k=e,_=o,J=g.checkInstalled(a),T=$&&J,un=n&&!b.isMobile();T&&!u.state.noAdapters&&this.platforms.push("browser"),k&&this.platforms.push(b.isMobile()?"mobile":"qrcode"),_&&this.platforms.push("web"),un&&this.platforms.push("desktop"),!T&&$&&!u.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return l`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return l`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return l`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return l`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return l`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return l`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?l`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const n=this.shadowRoot?.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};it([d()],Be.prototype,"platform",void 0);it([d()],Be.prototype,"platforms",void 0);it([d()],Be.prototype,"isSiwxEnabled",void 0);it([d()],Be.prototype,"remoteFeatures",void 0);it([c({type:Boolean})],Be.prototype,"displayBranding",void 0);Be=it([p("w3m-connecting-wc-view")],Be);var Si=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Dt=class extends f{constructor(){super(),this.unsubscribe=[],this.isMobile=b.isMobile(),this.remoteFeatures=y.state.remoteFeatures,this.unsubscribe.push(y.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){const{featured:e,recommended:n}=I.state,{customWallets:o}=y.state,r=le.getRecentWallets(),i=e.length||n.length||o?.length||r.length;return l`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${i?l`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return l`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?l` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};Si([d()],Dt.prototype,"isMobile",void 0);Si([d()],Dt.prototype,"remoteFeatures",void 0);Dt=Si([p("w3m-connecting-wc-basic-view")],Dt);const So=ie`
  .continue-button-container {
    width: 100%;
  }
`;var an=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let jt=class extends f{constructor(){super(...arguments),this.loading=!1}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{b.openHref($n.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","8","0","8"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){m.push("RegisterAccountName"),A.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:xe(u.state.activeChain)===ae.ACCOUNT_TYPES.SMART_ACCOUNT}})}};jt.styles=So;an([d()],jt.prototype,"loading",void 0);jt=an([p("w3m-choose-account-name-view")],jt);var Ao=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Vi=class extends f{constructor(){super(...arguments),this.wallet=m.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return l`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?l`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?l`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?l`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?l`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&b.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&b.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&b.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&b.openHref(this.wallet.homepage,"_blank")}};Vi=Ao([p("w3m-downloads-view")],Vi);var Io=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const ko="https://walletconnect.com/explorer";let Hi=class extends f{render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{b.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:n}=I.state,{customWallets:o}=y.state;return[...n,...o??[],...e].slice(0,4).map(i=>l`
        <wui-list-wallet
          name=${i.name??"Unknown"}
          tagVariant="accent"
          size="sm"
          imageSrc=${h(C.getWalletImage(i))}
          @click=${()=>{b.openHref(i.homepage??ko,"_blank")}}
        ></wui-list-wallet>
      `)}};Hi=Io([p("w3m-get-wallet-view")],Hi);var ln=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let di=class extends f{constructor(){super(...arguments),this.data=[]}render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(e=>l`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${e.images.map(n=>l`<wui-visual size="sm" name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${e.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${e.text}</wui-text
              >
            </wui-flex>
          `)}
      </wui-flex>
    `}};ln([c({type:Array})],di.prototype,"data",void 0);di=ln([p("w3m-help-widget")],di);var Eo=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const Wo=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Ki=class extends f{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${Wo}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){A.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),m.push("GetWallet")}};Ki=Eo([p("w3m-what-is-a-wallet-view")],Ki);const _o=x`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var cn=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Lt=class extends f{constructor(){super(),this.unsubscribe=[],this.checked=St.state.isLegalCheckboxChecked,this.unsubscribe.push(St.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=y.state,o=y.state.features?.legalCheckbox,i=!!(e||n)&&!!o,s=i&&!this.checked,a=s?-1:void 0;return l`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i?["0","3","3","3"]:"3"}
        gap="2"
        class=${h(s?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${h(a)}></w3m-wallet-login-list>
      </wui-flex>
    `}};Lt.styles=_o;cn([d()],Lt.prototype,"checked",void 0);Lt=cn([p("w3m-connect-wallets-view")],Lt);const To=x`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${t=>t.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var No=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let ui=class extends f{render(){return l`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};ui.styles=[W,To];ui=No([p("wui-loading-hexagon")],ui);const Ro=ie`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Ai=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let ht=class extends f{constructor(){super(),this.network=m.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),n=this.getSubLabel();return l`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","10","5"]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${h(C.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:l`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${e}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=w.getConnectorId(u.state.activeChain);return w.getAuthConnector()&&e===S.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const e=w.getConnectorId(u.state.activeChain);return w.getAuthConnector()&&e===S.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,u.state.activeChain!==this.network?.chainNamespace&&u.setIsSwitchingNamespace(!0),this.network&&await u.switchActiveNetwork(this.network)}catch{this.error=!0}}};ht.styles=Ro;Ai([d()],ht.prototype,"showRetry",void 0);Ai([d()],ht.prototype,"error",void 0);ht=Ai([p("w3m-network-switch-view")],ht);const Oo=x`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:t})=>t[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var vt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Ue=class extends f{constructor(){super(...arguments),this.imageSrc="ethereum",this.name="Ethereum",this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${h(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};Ue.styles=[W,N,Oo];vt([c()],Ue.prototype,"imageSrc",void 0);vt([c()],Ue.prototype,"name",void 0);vt([c()],Ue.prototype,"tabIdx",void 0);vt([c({type:Boolean})],Ue.prototype,"disabled",void 0);Ue=vt([p("wui-list-network")],Ue);const Po=ie`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var $t=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let ze=class extends f{constructor(){super(),this.unsubscribe=[],this.network=u.state.activeCaipNetwork,this.requestedCaipNetworks=u.getCaipNetworks(),this.search="",this.onDebouncedSearch=b.debounce(e=>{this.search=e},100),this.unsubscribe.push(ke.subscribeNetworkImages(()=>this.requestUpdate()),u.subscribeKey("activeCaipNetwork",e=>this.network=e),u.subscribe(()=>{this.requestedCaipNetworks=u.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","3","3","3"]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `}templateSearchInput(){return l`
      <wui-flex gap="2" .padding=${["0","3","3","3"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}networksTemplate(){const e=u.getAllApprovedCaipNetworkIds(),n=b.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.search?this.filteredNetworks=n?.filter(o=>o?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=n,this.filteredNetworks?.map(o=>l`
        <wui-list-network
          .selected=${this.network?.id===o.id}
          imageSrc=${h(C.getNetworkImage(o))}
          type="network"
          name=${o.name??o.id}
          @click=${()=>this.onSwitchNetwork(o)}
          .disabled=${this.getNetworkDisabled(o)}
          data-testid=${`w3m-network-switch-${o.name??o.id}`}
        ></wui-list-network>
      `)}getNetworkDisabled(e){const n=e.chainNamespace,o=v.getCaipAddress(n),r=u.getAllApprovedCaipNetworkIds(),i=u.getNetworkProp("supportsAllNetworks",n)!==!1,s=w.getConnectorId(n),a=w.getAuthConnector(),$=s===S.CONNECTOR_ID.AUTH&&a;return!o||i||$?!1:!r?.includes(e.caipNetworkId)}onSwitchNetwork(e){yn.onSwitchNetwork({network:e})}};ze.styles=Po;$t([d()],ze.prototype,"network",void 0);$t([d()],ze.prototype,"requestedCaipNetworks",void 0);$t([d()],ze.prototype,"filteredNetworks",void 0);$t([d()],ze.prototype,"search",void 0);ze=$t([p("w3m-networks-view")],ze);const Do=x`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({borderRadius:t})=>t[1]} * 9 - ${({borderRadius:t})=>t[3]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({borderRadius:t})=>t[1]} * 9 - ${({borderRadius:t})=>t[3]}
    );
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t[1]} * -1);
    bottom: calc(${({spacing:t})=>t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:t})=>t[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:t})=>t["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:t})=>t["01"]} ${({spacing:t})=>t[2]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var dn=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const jo={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let Bt=class extends f{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=m.state.data?.switchToChain,this.caipNetwork=m.state.data?.network,this.activeChain=u.state.activeChain}firstUpdated(){this.unsubscribe.push(u.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.switchToChain?S.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const n=S.CHAIN_NAME_MAP[this.switchToChain];return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","2","2","2"]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${h(jo[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${n}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${n}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${e} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(u.setIsSwitchingNamespace(!0),w.setFilterByNamespace(this.switchToChain),this.caipNetwork?await u.switchActiveNetwork(this.caipNetwork):u.setActiveNamespace(this.switchToChain),m.reset("Connect"))}};Bt.styles=Do;dn([c()],Bt.prototype,"activeChain",void 0);Bt=dn([p("w3m-switch-active-chain-view")],Bt);var Lo=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const Bo=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let qi=class extends f{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${Bo}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{b.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};qi=Lo([p("w3m-what-is-a-network-view")],qi);const Uo=ie`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Ii=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let pt=class extends f{constructor(){super(),this.swapUnsupportedChain=m.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=y.state.remoteFeatures,this.unsubscribe.push(ke.subscribeNetworkImages(()=>this.requestUpdate()),y.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["3","5","2","5"]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?l`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:l`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=u.getAllRequestedCaipNetworks(),n=u.getAllApprovedCaipNetworkIds(),o=b.sortRequestedNetworks(n,e);return(this.swapUnsupportedChain?o.filter(i=>P.SWAP_SUPPORTED_NETWORKS.includes(i.caipNetworkId)):o).map(i=>l`
        <wui-list-network
          imageSrc=${h(C.getNetworkImage(i))}
          name=${i.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(i)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconnecting=!0;const e=u.state.activeChain,o=g.getConnections(e).length>0,r=e&&w.state.activeConnectorIds[e],i=this.remoteFeatures?.multiWallet;await g.disconnect(i?{id:r,namespace:e}:{}),o&&i&&(m.push("ProfileWallets"),E.showSuccess("Wallet deleted"))}catch{A.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),E.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(e){const n=v.state.caipAddress,o=u.getAllApprovedCaipNetworkIds(),r=u.getNetworkProp("supportsAllNetworks",e.chainNamespace),i=m.state.data;n?o?.includes(e.caipNetworkId)?await u.switchActiveNetwork(e):r?m.push("SwitchNetwork",{...i,network:e}):m.push("SwitchNetwork",{...i,network:e}):n||(u.setActiveCaipNetwork(e),m.push("Connect"))}};pt.styles=Uo;Ii([d()],pt.prototype,"disconnecting",void 0);Ii([d()],pt.prototype,"remoteFeatures",void 0);pt=Ii([p("w3m-unsupported-chain-view")],pt);const zo=x`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[4]};
    padding: ${({spacing:t})=>t[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({tokens:t})=>t.theme.textSecondary};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({tokens:t})=>t.core.textSuccess};
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({tokens:t})=>t.core.textError};
    background-color: ${({tokens:t})=>t.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({tokens:t})=>t.core.textWarning};
    background-color: ${({tokens:t})=>t.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({tokens:t})=>t.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({tokens:t})=>t.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`;var Zt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Ge=class extends f{constructor(){super(...arguments),this.icon="externalLink",this.text="",this.type="info"}render(){return l`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `}};Ge.styles=[W,N,zo];Zt([c()],Ge.prototype,"icon",void 0);Zt([c()],Ge.prototype,"text",void 0);Zt([c()],Ge.prototype,"type",void 0);Ge=Zt([p("wui-banner")],Ge);const Mo=ie`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Fo=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let hi=class extends f{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l` <wui-flex flexDirection="column" .padding=${["2","3","3","3"]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=u.getAllRequestedCaipNetworks(),n=u.getAllApprovedCaipNetworkIds(),o=u.state.activeCaipNetwork,r=u.checkIfSmartAccountEnabled();let i=b.sortRequestedNetworks(n,e);if(r&&xe(o?.chainNamespace)===ae.ACCOUNT_TYPES.SMART_ACCOUNT){if(!o)return null;i=[o]}return i.filter(a=>a.chainNamespace===o?.chainNamespace).map(a=>l`
        <wui-list-network
          imageSrc=${h(C.getNetworkImage(a))}
          name=${a.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};hi.styles=Mo;hi=Fo([p("w3m-wallet-compatible-networks-view")],hi);const Vo=x`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({tokens:t})=>t.theme.borderPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Jt=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Ye=class extends f{render(){return this.dataset.borderRadiusFull=this.borderRadiusFull?"true":"false",l`${this.templateVisual()}`}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:l`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};Ye.styles=[W,Vo];Jt([c()],Ye.prototype,"imageSrc",void 0);Jt([c()],Ye.prototype,"alt",void 0);Jt([c({type:Boolean})],Ye.prototype,"borderRadiusFull",void 0);Ye=Jt([p("wui-visual-thumbnail")],Ye);const Ho=x`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({spacing:t})=>t[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var Ko=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let pi=class extends f{constructor(){super(...arguments),this.dappImageUrl=y.state.metadata?.icons,this.walletImageUrl=v.state.connectedWalletInfo?.icon}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return l`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,n){e.animate([{transform:"translateX(0px)"},{transform:n}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};pi.styles=Ho;pi=Ko([p("w3m-siwx-sign-message-thumbnails")],pi);var ki=function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Ut=class extends f{constructor(){super(...arguments),this.dappName=y.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return l`
      <wui-flex justifyContent="center" .padding=${["8","0","6","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${["0","20","5","20"]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["0","10","4","10"]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["4","5","5","5"]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await Ei.requestSignMessage()}catch(e){if(e instanceof Error&&e.message.includes("OTP is required")){E.showError({message:"Something went wrong. We need to verify your account again."}),m.replace("DataCapture");return}throw e}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await Ei.cancelSignMessage().finally(()=>this.isCancelling=!1)}};ki([d()],Ut.prototype,"isCancelling",void 0);ki([d()],Ut.prototype,"isSigning",void 0);Ut=ki([p("w3m-siwx-sign-message-view")],Ut);export{_i as AppKitAccountButton,Ni as AppKitButton,Oi as AppKitConnectButton,Di as AppKitNetworkButton,Wi as W3mAccountButton,ce as W3mAccountSettingsView,si as W3mAccountView,Et as W3mAllWalletsView,Ti as W3mButton,jt as W3mChooseAccountNameView,Ri as W3mConnectButton,K as W3mConnectView,Lt as W3mConnectWalletsView,Ui as W3mConnectingExternalView,Ot as W3mConnectingMultiChainView,Dt as W3mConnectingWcBasicView,Be as W3mConnectingWcView,Vi as W3mDownloadsView,sa as W3mFooter,Hi as W3mGetWalletView,Pi as W3mNetworkButton,ht as W3mNetworkSwitchView,ze as W3mNetworksView,B as W3mProfileWalletsView,aa as W3mRouter,Ut as W3mSIWXSignMessageView,Bt as W3mSwitchActiveChainView,pt as W3mUnsupportedChainView,hi as W3mWalletCompatibleNetworksView,qi as W3mWhatIsANetworkView,Ki as W3mWhatIsAWalletView};
