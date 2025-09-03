import{O as B,P as b,C as O,b as h,k as E,a0 as W,j as w,a1 as q,p as z,a as _,S as T,A as g,R as M,M as x,s as X,f as J,h as F,i as H,x as p,T as Z,q as Y,u as Q}from"./Web3Utils-B9S0Ym5F.js";import{r as y,c as K}from"./index-I4fzqrLd.js";import{o as G}from"./if-defined-C8_ZzyAc.js";import"./index-Ddk00MiS.js";import"./index-pfWwU5eL.js";import"./index-oti-9ByX.js";import"./index-UUekRcgQ.js";import"./index-B0_mgjNB.js";import"./index-CdtdjONF.js";import"./index-DBSzlyzl.js";import"./index-BGeU57eE.js";import"./main-3dNVu2Fx.js";import"./index-CCXQaVjG.js";const i={INVALID_PAYMENT_CONFIG:"INVALID_PAYMENT_CONFIG",INVALID_RECIPIENT:"INVALID_RECIPIENT",INVALID_ASSET:"INVALID_ASSET",INVALID_AMOUNT:"INVALID_AMOUNT",UNKNOWN_ERROR:"UNKNOWN_ERROR",UNABLE_TO_INITIATE_PAYMENT:"UNABLE_TO_INITIATE_PAYMENT",INVALID_CHAIN_NAMESPACE:"INVALID_CHAIN_NAMESPACE",GENERIC_PAYMENT_ERROR:"GENERIC_PAYMENT_ERROR",UNABLE_TO_GET_EXCHANGES:"UNABLE_TO_GET_EXCHANGES",ASSET_NOT_SUPPORTED:"ASSET_NOT_SUPPORTED",UNABLE_TO_GET_PAY_URL:"UNABLE_TO_GET_PAY_URL",UNABLE_TO_GET_BUY_STATUS:"UNABLE_TO_GET_BUY_STATUS"},A={[i.INVALID_PAYMENT_CONFIG]:"Invalid payment configuration",[i.INVALID_RECIPIENT]:"Invalid recipient address",[i.INVALID_ASSET]:"Invalid asset specified",[i.INVALID_AMOUNT]:"Invalid payment amount",[i.UNKNOWN_ERROR]:"Unknown payment error occurred",[i.UNABLE_TO_INITIATE_PAYMENT]:"Unable to initiate payment",[i.INVALID_CHAIN_NAMESPACE]:"Invalid chain namespace",[i.GENERIC_PAYMENT_ERROR]:"Unable to process payment",[i.UNABLE_TO_GET_EXCHANGES]:"Unable to get exchanges",[i.ASSET_NOT_SUPPORTED]:"Asset not supported by the selected exchange",[i.UNABLE_TO_GET_PAY_URL]:"Unable to get payment URL",[i.UNABLE_TO_GET_BUY_STATUS]:"Unable to get buy status"};class c extends Error{get message(){return A[this.code]}constructor(e,s){super(A[e]),this.name="AppKitPayError",this.code=e,this.details=s,Error.captureStackTrace&&Error.captureStackTrace(this,c)}}const ee="https://rpc.walletconnect.org/v1/json-rpc";class te extends Error{}function ne(){const n=B.getSnapshot().projectId;return`${ee}?projectId=${n}`}async function L(n,e){const s=ne(),{sdkType:a,sdkVersion:r,projectId:o}=B.getSnapshot(),u={jsonrpc:"2.0",id:1,method:n,params:{...e||{},st:a,sv:r,projectId:o}},N=await(await fetch(s,{method:"POST",body:JSON.stringify(u),headers:{"Content-Type":"application/json"}})).json();if(N.error)throw new te(N.error.message);return N}async function V(n){return(await L("reown_getExchanges",n)).result}async function se(n){return(await L("reown_getExchangePayUrl",n)).result}async function ae(n){return(await L("reown_getExchangeBuyStatus",n)).result}const re=["eip155","solana"],ie={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function v(n,e){const{chainNamespace:s,chainId:a}=b.parseCaipNetworkId(n),r=ie[s];if(!r)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${s}`);let o=r.native.assetNamespace,u=r.native.assetReference;return e!=="native"&&(o=r.defaultTokenNamespace,u=e),`${`${s}:${a}`}/${o}:${u}`}function oe(n){const{chainNamespace:e}=b.parseCaipNetworkId(n);return re.includes(e)}async function ce(n){const{paymentAssetNetwork:e,activeCaipNetwork:s,approvedCaipNetworkIds:a,requestedCaipNetworks:r}=n,u=O.sortRequestedNetworks(a,r).find(P=>P.caipNetworkId===e);if(!u)throw new c(i.INVALID_PAYMENT_CONFIG);if(u.caipNetworkId===s.caipNetworkId)return;const d=h.getNetworkProp("supportsAllNetworks",u.chainNamespace);if(!(a?.includes(u.caipNetworkId)||d))throw new c(i.INVALID_PAYMENT_CONFIG);try{await h.switchActiveNetwork(u)}catch(P){throw new c(i.GENERIC_PAYMENT_ERROR,P)}}async function ue(n,e,s){if(e!==E.CHAIN.EVM)throw new c(i.INVALID_CHAIN_NAMESPACE);if(!s.fromAddress)throw new c(i.INVALID_PAYMENT_CONFIG,"fromAddress is required for native EVM payments.");const a=typeof s.amount=="string"?parseFloat(s.amount):s.amount;if(isNaN(a))throw new c(i.INVALID_PAYMENT_CONFIG);const r=n.metadata?.decimals??18,o=w.parseUnits(a.toString(),r);if(typeof o!="bigint")throw new c(i.GENERIC_PAYMENT_ERROR);return await w.sendTransaction({chainNamespace:e,to:s.recipient,address:s.fromAddress,value:o,data:"0x"})??void 0}async function le(n,e){if(!e.fromAddress)throw new c(i.INVALID_PAYMENT_CONFIG,"fromAddress is required for ERC20 EVM payments.");const s=n.asset,a=e.recipient,r=Number(n.metadata.decimals),o=w.parseUnits(e.amount.toString(),r);if(o===void 0)throw new c(i.GENERIC_PAYMENT_ERROR);return await w.writeContract({fromAddress:e.fromAddress,tokenAddress:s,args:[a,o],method:"transfer",abi:q.getERC20Abi(s),chainNamespace:E.CHAIN.EVM})??void 0}async function de(n,e){if(n!==E.CHAIN.SOLANA)throw new c(i.INVALID_CHAIN_NAMESPACE);if(!e.fromAddress)throw new c(i.INVALID_PAYMENT_CONFIG,"fromAddress is required for Solana payments.");const s=typeof e.amount=="string"?parseFloat(e.amount):e.amount;if(isNaN(s)||s<=0)throw new c(i.INVALID_PAYMENT_CONFIG,"Invalid payment amount.");try{if(!W.getProvider(n))throw new c(i.GENERIC_PAYMENT_ERROR,"No Solana provider available.");const r=await w.sendTransaction({chainNamespace:E.CHAIN.SOLANA,to:e.recipient,value:s,tokenMint:e.tokenMint});if(!r)throw new c(i.GENERIC_PAYMENT_ERROR,"Transaction failed.");return r}catch(a){throw a instanceof c?a:new c(i.GENERIC_PAYMENT_ERROR,`Solana payment failed: ${a}`)}}const $=0,R="unknown",t=z({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0}),l={state:t,subscribe(n){return J(t,()=>n(t))},subscribeKey(n,e){return X(t,n,e)},async handleOpenPay(n){this.resetState(),this.setPaymentConfig(n),this.subscribeEvents(),this.initializeAnalytics(),t.isConfigured=!0,_.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:t.exchanges,configuration:{network:t.paymentAsset.network,asset:t.paymentAsset.asset,recipient:t.recipient,amount:t.amount}}}),await x.open({view:"Pay"})},resetState(){t.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},t.recipient="0x0",t.amount=0,t.isConfigured=!1,t.error=null,t.isPaymentInProgress=!1,t.isLoading=!1,t.currentPayment=void 0},setPaymentConfig(n){if(!n.paymentAsset)throw new c(i.INVALID_PAYMENT_CONFIG);try{t.paymentAsset=n.paymentAsset,t.recipient=n.recipient,t.amount=n.amount,t.openInNewTab=n.openInNewTab??!0,t.redirectUrl=n.redirectUrl,t.payWithExchange=n.payWithExchange,t.error=null}catch(e){throw new c(i.INVALID_PAYMENT_CONFIG,e.message)}},getPaymentAsset(){return t.paymentAsset},getExchanges(){return t.exchanges},async fetchExchanges(){try{t.isLoading=!0;const n=await V({page:$,asset:v(t.paymentAsset.network,t.paymentAsset.asset),amount:t.amount.toString()});t.exchanges=n.exchanges.slice(0,2)}catch{throw T.showError(A.UNABLE_TO_GET_EXCHANGES),new c(i.UNABLE_TO_GET_EXCHANGES)}finally{t.isLoading=!1}},async getAvailableExchanges(n){try{const e=n?.asset&&n?.network?v(n.network,n.asset):void 0;return await V({page:n?.page??$,asset:e,amount:n?.amount?.toString()})}catch{throw new c(i.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(n,e,s=!1){try{const a=Number(e.amount),r=await se({exchangeId:n,asset:v(e.network,e.asset),amount:a.toString(),recipient:`${e.network}:${e.recipient}`});return _.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:n},configuration:{network:e.network,asset:e.asset,recipient:e.recipient,amount:a},currentPayment:{type:"exchange",exchangeId:n},headless:s}}),s&&(this.initiatePayment(),_.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:t.paymentId||R,configuration:{network:e.network,asset:e.asset,recipient:e.recipient,amount:a},currentPayment:{type:"exchange",exchangeId:n}}})),r}catch(a){throw a instanceof Error&&a.message.includes("is not supported")?new c(i.ASSET_NOT_SUPPORTED):new Error(a.message)}},async openPayUrl(n,e,s=!1){try{const a=await this.getPayUrl(n.exchangeId,e,s);if(!a)throw new c(i.UNABLE_TO_GET_PAY_URL);const o=n.openInNewTab??!0?"_blank":"_self";return O.openHref(a.url,o),a}catch(a){throw a instanceof c?t.error=a.message:t.error=A.GENERIC_PAYMENT_ERROR,new c(i.UNABLE_TO_GET_PAY_URL)}},subscribeEvents(){t.isConfigured||(w.subscribeKey("connections",n=>{n.size>0&&this.handlePayment()}),g.subscribeKey("caipAddress",n=>{const e=w.hasAnyConnection(E.CONNECTOR_ID.WALLET_CONNECT);n&&(e?setTimeout(()=>{this.handlePayment()},100):this.handlePayment())}))},async handlePayment(){t.currentPayment={type:"wallet",status:"IN_PROGRESS"};const n=g.state.caipAddress;if(!n)return;const{chainId:e,address:s}=b.parseCaipAddress(n),a=h.state.activeChain;if(!s||!e||!a||!W.getProvider(a))return;const o=h.state.activeCaipNetwork;if(o&&!t.isPaymentInProgress)try{this.initiatePayment();const u=h.getAllRequestedCaipNetworks(),d=h.getAllApprovedCaipNetworkIds();switch(await ce({paymentAssetNetwork:t.paymentAsset.network,activeCaipNetwork:o,approvedCaipNetworkIds:d,requestedCaipNetworks:u}),await x.open({view:"PayLoading"}),a){case E.CHAIN.EVM:t.paymentAsset.asset==="native"&&(t.currentPayment.result=await ue(t.paymentAsset,a,{recipient:t.recipient,amount:t.amount,fromAddress:s})),t.paymentAsset.asset.startsWith("0x")&&(t.currentPayment.result=await le(t.paymentAsset,{recipient:t.recipient,amount:t.amount,fromAddress:s})),t.currentPayment.status="SUCCESS";break;case E.CHAIN.SOLANA:t.currentPayment.result=await de(a,{recipient:t.recipient,amount:t.amount,fromAddress:s,tokenMint:t.paymentAsset.asset==="native"?void 0:t.paymentAsset.asset}),t.currentPayment.status="SUCCESS";break;default:throw new c(i.INVALID_CHAIN_NAMESPACE)}}catch(u){u instanceof c?t.error=u.message:t.error=A.GENERIC_PAYMENT_ERROR,t.currentPayment.status="FAILED",T.showError(t.error)}finally{t.isPaymentInProgress=!1}},getExchangeById(n){return t.exchanges.find(e=>e.id===n)},validatePayConfig(n){const{paymentAsset:e,recipient:s,amount:a}=n;if(!e)throw new c(i.INVALID_PAYMENT_CONFIG);if(!s)throw new c(i.INVALID_RECIPIENT);if(!e.asset)throw new c(i.INVALID_ASSET);if(a==null||a<=0)throw new c(i.INVALID_AMOUNT)},handlePayWithWallet(){const n=g.state.caipAddress;if(!n){M.push("Connect");return}const{chainId:e,address:s}=b.parseCaipAddress(n),a=h.state.activeChain;if(!s||!e||!a){M.push("Connect");return}this.handlePayment()},async handlePayWithExchange(n){try{t.currentPayment={type:"exchange",exchangeId:n};const{network:e,asset:s}=t.paymentAsset,a={network:e,asset:s,amount:t.amount,recipient:t.recipient},r=await this.getPayUrl(n,a);if(!r)throw new c(i.UNABLE_TO_INITIATE_PAYMENT);return t.currentPayment.sessionId=r.sessionId,t.currentPayment.status="IN_PROGRESS",t.currentPayment.exchangeId=n,this.initiatePayment(),{url:r.url,openInNewTab:t.openInNewTab}}catch(e){return e instanceof c?t.error=e.message:t.error=A.GENERIC_PAYMENT_ERROR,t.isPaymentInProgress=!1,T.showError(t.error),null}},async getBuyStatus(n,e){try{const s=await ae({sessionId:e,exchangeId:n});return(s.status==="SUCCESS"||s.status==="FAILED")&&_.sendEvent({type:"track",event:s.status==="SUCCESS"?"PAY_SUCCESS":"PAY_ERROR",properties:{source:"pay",paymentId:t.paymentId||R,configuration:{network:t.paymentAsset.network,asset:t.paymentAsset.asset,recipient:t.recipient,amount:t.amount},currentPayment:{type:"exchange",exchangeId:t.currentPayment?.exchangeId,sessionId:t.currentPayment?.sessionId,result:s.txHash}}}),s}catch{throw new c(i.UNABLE_TO_GET_BUY_STATUS)}},async updateBuyStatus(n,e){try{const s=await this.getBuyStatus(n,e);t.currentPayment&&(t.currentPayment.status=s.status,t.currentPayment.result=s.txHash),(s.status==="SUCCESS"||s.status==="FAILED")&&(t.isPaymentInProgress=!1)}catch{throw new c(i.UNABLE_TO_GET_BUY_STATUS)}},initiatePayment(){t.isPaymentInProgress=!0,t.paymentId=crypto.randomUUID()},initializeAnalytics(){t.analyticsSet||(t.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",n=>{if(t.currentPayment?.status&&t.currentPayment.status!=="UNKNOWN"){const e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[t.currentPayment.status];_.sendEvent({type:"track",event:e,properties:{source:"pay",paymentId:t.paymentId||R,configuration:{network:t.paymentAsset.network,asset:t.paymentAsset.asset,recipient:t.recipient,amount:t.amount},currentPayment:{type:t.currentPayment.type,exchangeId:t.currentPayment.exchangeId,sessionId:t.currentPayment.sessionId,result:t.currentPayment.result}}})}}))}},pe=F`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }
`;var f=function(n,e,s,a){var r=arguments.length,o=r<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,s):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,s,a);else for(var d=n.length-1;d>=0;d--)(u=n[d])&&(o=(r<3?u(o):r>3?u(e,s,o):u(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o};let m=class extends H{constructor(){super(),this.unsubscribe=[],this.amount="",this.tokenSymbol="",this.networkName="",this.exchanges=l.state.exchanges,this.isLoading=l.state.isLoading,this.loadingExchangeId=null,this.connectedWalletInfo=g.state.connectedWalletInfo,this.initializePaymentDetails(),this.unsubscribe.push(l.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(l.subscribeKey("isLoading",e=>this.isLoading=e)),this.unsubscribe.push(g.subscribe(e=>this.connectedWalletInfo=e.connectedWalletInfo)),l.fetchExchanges()}get isWalletConnected(){return g.state.status==="connected"}render(){return p`
      <wui-flex flexDirection="column">
        <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
          ${this.renderPaymentHeader()}

          <wui-flex flexDirection="column" gap="3">
            ${this.renderPayWithWallet()} ${this.renderExchangeOptions()}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}initializePaymentDetails(){const e=l.getPaymentAsset();this.networkName=e.network,this.tokenSymbol=e.metadata.symbol,this.amount=l.state.amount.toString()}renderPayWithWallet(){return oe(this.networkName)?p`<wui-flex flexDirection="column" gap="3">
        ${this.isWalletConnected?this.renderConnectedView():this.renderDisconnectedView()}
      </wui-flex>
      <wui-separator text="or"></wui-separator>`:p``}renderPaymentHeader(){let e=this.networkName;if(this.networkName){const a=h.getAllRequestedCaipNetworks().find(r=>r.caipNetworkId===this.networkName);a&&(e=a.name)}return p`
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex alignItems="center" gap="2">
          <wui-text variant="h1-regular" color="primary">${this.amount||"0.0000"}</wui-text>
          <wui-flex class="token-display" alignItems="center" gap="1">
            <wui-text variant="md-medium" color="primary">
              ${this.tokenSymbol||"Unknown Asset"}
            </wui-text>
            ${e?p`
                  <wui-text variant="sm-medium" color="secondary">
                    on ${e}
                  </wui-text>
                `:""}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderConnectedView(){const e=this.connectedWalletInfo?.name||"connected wallet";return p`
      <wui-list-item
        @click=${this.onWalletPayment}
        ?chevron=${!0}
        ?fullSize=${!0}
        ?rounded=${!0}
        data-testid="wallet-payment-option"
        imageSrc=${G(this.connectedWalletInfo?.icon)}
      >
        <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
      </wui-list-item>

      <wui-list-item
        icon="power"
        ?rounded=${!0}
        iconColor="error"
        @click=${this.onDisconnect}
        data-testid="disconnect-button"
        ?chevron=${!1}
      >
        <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
      </wui-list-item>
    `}renderDisconnectedView(){return p`<wui-list-item
      variant="icon"
      iconVariant="overlay"
      icon="wallet"
      ?rounded=${!0}
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="inherit">Pay from wallet</wui-text>
    </wui-list-item>`}renderExchangeOptions(){return this.isLoading?p`<wui-flex justifyContent="center" alignItems="center">
        <wui-spinner size="md"></wui-spinner>
      </wui-flex>`:this.exchanges.length===0?p`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:this.exchanges.map(e=>p`
        <wui-list-item
          @click=${()=>this.onExchangePayment(e.id)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          ?disabled=${this.loadingExchangeId!==null}
          ?loading=${this.loadingExchangeId===e.id}
          imageSrc=${G(e.imageUrl)}
        >
          <wui-flex alignItems="center" gap="3">
            <wui-text flexGrow="1" variant="md-medium" color="inherit"
              >Pay with ${e.name} <wui-spinner size="sm" color="secondary"></wui-spinner
            ></wui-text>
          </wui-flex>
        </wui-list-item>
      `)}onWalletPayment(){l.handlePayWithWallet()}async onExchangePayment(e){try{this.loadingExchangeId=e;const s=await l.handlePayWithExchange(e);s&&(await x.open({view:"PayLoading"}),O.openHref(s.url,s.openInNewTab?"_blank":"_self"))}catch(s){console.error("Failed to pay with exchange",s),T.showError("Failed to pay with exchange")}finally{this.loadingExchangeId=null}}async onDisconnect(e){e.stopPropagation();try{await w.disconnect()}catch{console.error("Failed to disconnect"),T.showError("Failed to disconnect")}}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}};m.styles=pe;f([y()],m.prototype,"amount",void 0);f([y()],m.prototype,"tokenSymbol",void 0);f([y()],m.prototype,"networkName",void 0);f([y()],m.prototype,"exchanges",void 0);f([y()],m.prototype,"isLoading",void 0);f([y()],m.prototype,"loadingExchangeId",void 0);f([y()],m.prototype,"connectedWalletInfo",void 0);m=f([K("w3m-pay-view")],m);const me=F`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }
`;var k=function(n,e,s,a){var r=arguments.length,o=r<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,s):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,s,a);else for(var d=n.length-1;d>=0;d--)(u=n[d])&&(o=(r<3?u(o):r>3?u(e,s,o):u(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o};const ye=4e3;let I=class extends H{constructor(){super(),this.loadingMessage="",this.subMessage="",this.paymentState="in-progress",this.paymentState=l.state.isPaymentInProgress?"in-progress":"completed",this.updateMessages(),this.setupSubscription(),this.setupExchangeSubscription()}disconnectedCallback(){clearInterval(this.exchangeSubscription)}render(){return p`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["7","5","5","5"]}
        gap="9"
      >
        <wui-flex justifyContent="center" alignItems="center"> ${this.getStateIcon()} </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary">
            ${this.loadingMessage}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">
            ${this.subMessage}
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}updateMessages(){switch(this.paymentState){case"completed":this.loadingMessage="Payment completed",this.subMessage="Your transaction has been successfully processed";break;case"error":this.loadingMessage="Payment failed",this.subMessage="There was an error processing your transaction";break;case"in-progress":default:l.state.currentPayment?.type==="exchange"?(this.loadingMessage="Payment initiated",this.subMessage="Please complete the payment on the exchange"):(this.loadingMessage="Awaiting payment confirmation",this.subMessage="Please confirm the payment transaction in your wallet");break}}getStateIcon(){switch(this.paymentState){case"completed":return this.successTemplate();case"error":return this.errorTemplate();case"in-progress":default:return this.loaderTemplate()}}setupExchangeSubscription(){l.state.currentPayment?.type==="exchange"&&(this.exchangeSubscription=setInterval(async()=>{const e=l.state.currentPayment?.exchangeId,s=l.state.currentPayment?.sessionId;e&&s&&(await l.updateBuyStatus(e,s),l.state.currentPayment?.status==="SUCCESS"&&clearInterval(this.exchangeSubscription))},ye))}setupSubscription(){l.subscribeKey("isPaymentInProgress",e=>{!e&&this.paymentState==="in-progress"&&(l.state.error||!l.state.currentPayment?.result?this.paymentState="error":this.paymentState="completed",this.updateMessages(),setTimeout(()=>{w.state.status!=="disconnected"&&x.close()},3e3))}),l.subscribeKey("error",e=>{e&&this.paymentState==="in-progress"&&(this.paymentState="error",this.updateMessages())})}loaderTemplate(){const e=Z.state.themeVariables["--w3m-border-radius-master"],s=e?parseInt(e.replace("px",""),10):4,a=this.getPaymentIcon();return p`
      <wui-flex justifyContent="center" alignItems="center" style="position: relative;">
        ${a?p`<wui-wallet-image size="lg" imageSrc=${a}></wui-wallet-image>`:null}
        <wui-loading-thumbnail radius=${s*9}></wui-loading-thumbnail>
      </wui-flex>
    `}getPaymentIcon(){const e=l.state.currentPayment;if(e){if(e.type==="exchange"){const s=e.exchangeId;if(s)return l.getExchangeById(s)?.imageUrl}if(e.type==="wallet"){const s=g.state.connectedWalletInfo?.icon;if(s)return s;const a=h.state.activeChain;if(!a)return;const r=Y.getConnectorId(a);if(!r)return;const o=Y.getConnectorById(r);return o?Q.getConnectorImage(o):void 0}}}successTemplate(){return p`<wui-icon size="xl" color="success" name="checkmark"></wui-icon>`}errorTemplate(){return p`<wui-icon size="xl" color="error" name="close"></wui-icon>`}};I.styles=me;k([y()],I.prototype,"loadingMessage",void 0);k([y()],I.prototype,"subMessage",void 0);k([y()],I.prototype,"paymentState",void 0);I=k([K("w3m-pay-loading-view")],I);const he=3e5;async function we(n){return l.handleOpenPay(n)}async function Re(n,e=he){if(e<=0)throw new c(i.INVALID_PAYMENT_CONFIG,"Timeout must be greater than 0");try{await we(n)}catch(s){throw s instanceof c?s:new c(i.UNABLE_TO_INITIATE_PAYMENT,s.message)}return new Promise((s,a)=>{let r=!1;const o=setTimeout(()=>{r||(r=!0,S(),a(new c(i.GENERIC_PAYMENT_ERROR,"Payment timeout")))},e);function u(){if(r)return;const C=l.state.currentPayment,U=l.state.error,j=l.state.isPaymentInProgress;if(C?.status==="SUCCESS"){r=!0,S(),clearTimeout(o),s({success:!0,result:C.result});return}if(C?.status==="FAILED"){r=!0,S(),clearTimeout(o),s({success:!1,error:U||"Payment failed"});return}U&&!j&&!C&&(r=!0,S(),clearTimeout(o),s({success:!1,error:U}))}const d=D("currentPayment",u),N=D("error",u),P=D("isPaymentInProgress",u),S=fe([d,N,P]);u()})}function De(){return l.getExchanges()}function Oe(){return l.state.currentPayment?.result}function Le(){return l.state.error}function Me(){return l.state.isPaymentInProgress}function D(n,e){return l.subscribeKey(n,e)}function fe(n){return()=>{n.forEach(e=>{try{e()}catch{}})}}const Ye={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},Ge={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Ve={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},$e={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Be={network:"eip155:10",asset:"0x0b2c639c533813f4aa9d7837caf62653d097ff85",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},We={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Fe={network:"eip155:137",asset:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},He={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Ke={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},je={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},qe={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ze={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Xe={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Je={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}};export{I as W3mPayLoadingView,m as W3mPayView,We as arbitrumUSDC,qe as arbitrumUSDT,Ye as baseETH,Ve as baseSepoliaETH,Ge as baseUSDC,$e as ethereumUSDC,Ke as ethereumUSDT,De as getExchanges,Me as getIsPaymentInProgress,Le as getPayError,Oe as getPayResult,we as openPay,Be as optimismUSDC,je as optimismUSDT,Re as pay,Fe as polygonUSDC,ze as polygonUSDT,Je as solanaSOL,He as solanaUSDC,Xe as solanaUSDT};
