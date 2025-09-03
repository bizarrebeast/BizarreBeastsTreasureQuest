import{c as h,r as g,e as m,i as p,x as a}from"./Web3Utils-BRIOHfTF.js";import{n as s,c as b}from"./index-BrjUboAN.js";import"./index-Vl1dJ8BS.js";import"./index-B6sUXBO_.js";const x=h`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
  }

  .left-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var n=function(e,t,r,d){var l=arguments.length,i=l<3?t:d===null?d=Object.getOwnPropertyDescriptor(t,r):d,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,d);else for(var c=e.length-1;c>=0;c--)(u=e[c])&&(i=(l<3?u(i):l>3?u(t,r,i):u(t,r))||i);return l>3&&i&&Object.defineProperty(t,r,i),i};const f={lg:"lg-regular",md:"lg-regular",sm:"md-regular"},w={lg:"lg",md:"md",sm:"sm"};let o=class extends p{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.text="",this.loading=!1}render(){return this.loading?a` <wui-flex alignItems="center" gap="01" padding="01">
        <wui-shimmer width="20px" height="20px"></wui-shimmer>
        <wui-shimmer width="32px" height="18px" borderRadius="4xs"></wui-shimmer>
      </wui-flex>`:a`
      <button ?disabled=${this.disabled} data-size=${this.size}>
        ${this.imageTemplate()} ${this.textTemplate()}
      </button>
    `}imageTemplate(){if(this.imageSrc)return a`<wui-image src=${this.imageSrc}></wui-image>`;const t=w[this.size];return a` <wui-flex class="left-icon-container">
      <wui-icon size=${t} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}textTemplate(){const t=f[this.size];return a`<wui-text color="primary" variant=${t}
      >${this.text}</wui-text
    >`}};o.styles=[g,m,x];n([s()],o.prototype,"size",void 0);n([s()],o.prototype,"imageSrc",void 0);n([s({type:Boolean})],o.prototype,"disabled",void 0);n([s()],o.prototype,"text",void 0);n([s({type:Boolean})],o.prototype,"loading",void 0);o=n([b("wui-token-button")],o);
