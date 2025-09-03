import{c as p,r as d,i as f,x as l}from"./Web3Utils-B9S0Ym5F.js";import{n as m,c as h}from"./index-I4fzqrLd.js";const x=p`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }
`;var u=function(e,r,o,n){var i=arguments.length,t=i<3?r:n===null?n=Object.getOwnPropertyDescriptor(r,o):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,r,o,n);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(t=(i<3?a(t):i>3?a(r,o,t):a(r,o))||t);return i>3&&t&&Object.defineProperty(r,o,t),t};let s=class extends f{constructor(){super(...arguments),this.text=""}render(){return l`${this.template()}`}template(){return this.text?l`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};s.styles=[d,x];u([m()],s.prototype,"text",void 0);s=u([h("wui-separator")],s);
