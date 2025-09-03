import{c as f,r as w,e as z,i as v,x as h,$ as b}from"./Web3Utils-B9S0Ym5F.js";import{n as a,c as y}from"./index-I4fzqrLd.js";import"./index-UUekRcgQ.js";import"./index-CCXQaVjG.js";const x=f`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:t})=>t.core.foregroundAccent020};
  }

  @media (hover: hover) {
    button:hover:enabled {
      border-radius: ${({borderRadius:t})=>t[32]};
    }
  }

  button[data-variant='accent'] {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  button[data-variant='secondary'] {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  button[data-size='sm'] {
    padding: ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:t})=>t[3]};
    border-radius: ${({borderRadius:t})=>t[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:t})=>t[3]};
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 24px;
    height: 24px;
  }

  button[data-full-width] {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var g=function(t,e,o,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(i=(s<3?n(i):s>3?n(e,o,i):n(e,o))||i);return s>3&&i&&Object.defineProperty(e,o,i),i};let u=class extends v{constructor(){super(...arguments),this.icon="card",this.variant="accent",this.size="md",this.fullWidth=!1,this.disabled=!1}render(){const e={accent:"accent-primary",secondary:"inverse"};return h`<button
      data-variant=${this.variant}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color=${e[this.variant]} name=${this.icon}></wui-icon>
    </button>`}};u.styles=[w,z,x];g([a()],u.prototype,"icon",void 0);g([a()],u.prototype,"variant",void 0);g([a()],u.prototype,"size",void 0);g([a({type:Boolean})],u.prototype,"fullWidth",void 0);g([a({type:Boolean})],u.prototype,"disabled",void 0);u=g([y("wui-icon-button")],u);const $=b`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,k=b`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,S=b`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,I=f`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:t})=>t.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var p=function(t,e,o,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(i=(s<3?n(i):s>3?n(e,o,i):n(e,o))||i);return s>3&&i&&Object.defineProperty(e,o,i),i};let d=class extends v{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:S,md:k,lg:$},this.selected=!1,this.round=!1}render(){const e={sm:"4",md:"6",lg:"10"};return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${e[this.size]});
    `,h`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?h`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:h`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};d.styles=[w,I];p([a()],d.prototype,"size",void 0);p([a()],d.prototype,"name",void 0);p([a({type:Object})],d.prototype,"networkImagesBySize",void 0);p([a()],d.prototype,"imageSrc",void 0);p([a({type:Boolean})],d.prototype,"selected",void 0);p([a({type:Boolean})],d.prototype,"round",void 0);d=p([y("wui-network-image")],d);const j=f`
  :host {
    position: relative;
    background-color: ${({tokens:t})=>t.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:t})=>t.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:t})=>t.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 32px;
    height: 32px;
  }

  wui-icon[data-parent-size='md'] {
    width: 40px;
    height: 40px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
    padding: 1px;
  }
`;var m=function(t,e,o,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(i=(s<3?n(i):s>3?n(e,o,i):n(e,o))||i);return s>3&&i&&Object.defineProperty(e,o,i),i};let c=class extends v{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="1";return this.size==="lg"?e="4":this.size==="md"?e="2":this.size==="sm"&&(e="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${e});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),h`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?h`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?h`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:h`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};c.styles=[w,j];m([a()],c.prototype,"size",void 0);m([a()],c.prototype,"name",void 0);m([a()],c.prototype,"imageSrc",void 0);m([a()],c.prototype,"walletIcon",void 0);m([a({type:Boolean})],c.prototype,"installed",void 0);m([a()],c.prototype,"badgeSize",void 0);c=m([y("wui-wallet-image")],c);export{k as n};
