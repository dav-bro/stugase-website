(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2mql":function(e,t,r){"use strict";r("ioFf"),r("HAE/");var n=r("TOwV"),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function l(e){return n.isMemo(e)?i:c[e.$$typeof]||a}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var s=Object.defineProperty,u=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(m){var a=f(r);a&&a!==m&&e(t,a,n)}var i=u(r);p&&(i=i.concat(p(r)));for(var c=l(t),h=l(r),y=0;y<i.length;++y){var b=i[y];if(!(o[b]||n&&n[b]||h&&h[b]||c&&c[b])){var g=d(r,b);try{s(t,b,g)}catch(v){}}}}return t}},"6VBw":function(e,t,r){"use strict";r("91GP"),r("f3/d"),r("yt8O"),r("RW0V"),r("V+eJ"),r("HAE/"),r("LK8F"),r("a1Th"),r("h7Nl"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo");var n=r("q1tI"),a=r.n(n),o=r("TSYQ"),i=r.n(o),c=(r("WLL4"),r("jm62"),r("8+KV"),r("0l/t"),r("bWfx"),r("DNiP"),r("HXN9")),l={};function s(e,t){0}function u(e,t,r){t||l[r]||(e(!1,r),l[r]=!0)}var p=function(e,t){u(s,e,t)},d=r("Gu+u");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e){return"object"===y(e)&&"string"==typeof e.name&&"string"==typeof e.theme&&("object"===y(e.icon)||"function"==typeof e.icon)}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,r){var n=e[r];switch(r){case"class":t.className=n,delete t.class;break;default:t[r]=n}return t}),{})}function v(e){return Object(c.generate)(e)[0]}function w(e){return e?Array.isArray(e)?e:[e]:[]}var O="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",E=!1;function x(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var N=function(e){var t,r,o=e.icon,i=e.className,c=e.onClick,l=e.style,s=e.primaryColor,u=e.secondaryColor,f=x(e,["icon","className","onClick","style","primaryColor","secondaryColor"]),h=k;if(s&&(h={primaryColor:s,secondaryColor:u||v(s)}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;Object(n.useEffect)((function(){E||(Object(d.insertCss)(e,{prepend:!0}),E=!0)}),[])}(),t=b(o),r="icon should be icon definiton, but got ".concat(o),p(t,"[@ant-design/icons] ".concat(r)),!b(o))return null;var y=o;return y&&"function"==typeof y.icon&&(y=C({},y,{icon:y.icon(h.primaryColor,h.secondaryColor)})),function e(t,r,n){return n?a.a.createElement(t.tag,m({key:r},g(t.attrs),{},n),(t.children||[]).map((function(n,a){return e(n,"".concat(r,"-").concat(t.tag,"-").concat(a))}))):a.a.createElement(t.tag,m({key:r},g(t.attrs)),(t.children||[]).map((function(n,a){return e(n,"".concat(r,"-").concat(t.tag,"-").concat(a))})))}(y.icon,"svg-".concat(y.name),C({className:i,onClick:c,style:l,"data-icon":y.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},f))};N.displayName="IconReact",N.getTwoToneColors=function(){return C({},k)},N.setTwoToneColors=function(e){var t=e.primaryColor,r=e.secondaryColor;k.primaryColor=t,k.secondaryColor=r||v(t),k.calculated=!!r};var _=N;function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function L(e){var t=P(w(e),2),r=t[0],n=t[1];return _.setTwoToneColors({primaryColor:r,secondaryColor:n})}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function I(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}L("#1890ff");var T=function(e,t){var r,n,o,c=e.className,l=e.icon,s=e.spin,u=e.rotate,p=e.tabIndex,d=e.onClick,f=e.twoToneColor,m=I(e,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),h=i()("anticon",(r={},n="anticon-".concat(l.name),o=Boolean(l.name),n in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,r),c),y=i()({"anticon-spin":!!s||"loading"===l.name}),b=p;void 0===b&&d&&(b=-1);var g=u?{msTransform:"rotate(".concat(u,"deg)"),transform:"rotate(".concat(u,"deg)")}:void 0,v=R(w(f),2),O=v[0],E=v[1];return a.a.createElement("span",Object.assign({role:"img","aria-label":l.name},m,{ref:t,tabIndex:b,onClick:d,className:h}),a.a.createElement(_,{className:y,icon:l,primaryColor:O,secondaryColor:E,style:g}))};T.displayName="AntdIcon",T.getTwoToneColor=function(){var e=_.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},T.setTwoToneColor=L;t.a=a.a.forwardRef(T)},"9Odx":function(e,t,r){"use strict";r("91GP"),r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("q1tI")),a=i(r("FhTr")),o=i(r("KQxl"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e,t){return n.default.createElement(o.default,Object.assign({},e,{ref:t,icon:a.default}))};c.displayName="RightOutlined";var l=n.default.forwardRef(c);t.default=l},"Cuy+":function(e,t,r){"use strict";r.r(t);r("tUrg"),r("f3/d"),r("a1Th"),r("Btvt"),r("I5cv");var n=r("q1tI"),a=r.n(n),o=r("9kay"),i=(r("91GP"),{name:"link",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]}}),c=r("6VBw"),l=function(e,t){return a.a.createElement(c.a,Object.assign({},e,{ref:t,icon:i}))};l.displayName="LinkOutlined";var s=a.a.forwardRef(l),u=r("QS3V"),p=r("IGiP"),d=r.n(p),f=r("V92u"),m=r.n(f),h=r("Wbzz"),y=r("kIla"),b=r("f6S5"),g=r("9Odx"),v=r.n(g),w=(r("2Spj"),r("hHhE"),r("V+eJ"),r("rGqo"),r("yt8O"),r("RW0V"),r("17x9")),O=r.n(w);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var j=function(e){var t,r;function n(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(x(t)),t.handleErrored=t.handleErrored.bind(x(t)),t.handleChange=t.handleChange.bind(x(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(x(t)),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},o.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},o.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},o.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},o.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},o.handleErrored=function(){this.props.onErrored&&this.props.onErrored()},o.handleChange=function(e){this.props.onChange&&this.props.onChange(e)},o.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},o.componentDidMount=function(){this.explicitRender()},o.componentDidUpdate=function(){this.explicitRender()},o.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},o.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},o.handleRecaptchaRef=function(e){this.captcha=e},o.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return a.a.createElement("div",E({},t,{ref:this.handleRecaptchaRef}))},n}(a.a.Component);j.displayName="ReCAPTCHA",j.propTypes={sitekey:O.a.string.isRequired,onChange:O.a.func,grecaptcha:O.a.object,theme:O.a.oneOf(["dark","light"]),type:O.a.oneOf(["image","audio"]),tabindex:O.a.number,onExpired:O.a.func,onErrored:O.a.func,size:O.a.oneOf(["compact","normal","invisible"]),stoken:O.a.string,hl:O.a.string,badge:O.a.oneOf(["bottomright","bottomleft","inline"])},j.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var C=r("2mql"),S=r.n(C);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var N={},_=0;var P,L;(P=function(){return"https://"+(("undefined"!=typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload=onloadcallback&render=explicit"},L=(L={callbackName:"onloadcallback",globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",r=function(t){var r,a;function o(e,r){var n;return(n=t.call(this,e,r)||this).state={},n.__scriptURL="",n}a=t,(r=o).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var i=o.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+_++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL="function"==typeof P?P():P,this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=N[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[L.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),n=L,a=n.globalName,o=n.callbackName,i=n.scriptId;if(a&&void 0!==window[a]&&(N[t]={loaded:!0,observers:{}}),N[t]){var c=N[t];return c&&(c.loaded||c.errored)?void this.asyncScriptLoaderHandleLoad(c):void(c.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var l={};l[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},N[t]={loaded:!1,observers:l};var s=document.createElement("script");s.src=t,s.async=!0,i&&(s.id=i);var u=function(e){if(N[t]){var r=N[t].observers;for(var n in r)e(r[n])&&delete r[n]}};o&&"undefined"!=typeof window&&(window[o]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),s.onload=function(){var e=N[t];e&&(e.loaded=!0,u((function(t){return!o&&(t(e),!0)})))},s.onerror=function(){var e=N[t];e&&(e.errored=!0,u((function(t){return t(e),!0})))},document.body.appendChild(s)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===L.removeOnUnmount)for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r+=1)t[r].src.indexOf(e)>-1&&t[r].parentNode&&t[r].parentNode.removeChild(t[r]);var n=N[e];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===L.removeOnUnmount&&delete N[e])},i.render=function(){var t=L.globalName,r=this.props,a=(r.asyncScriptOnLoad,r.forwardedRef),o=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(r,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!=typeof window&&(o[t]=void 0!==window[t]?window[t]:void 0),o.ref=a,Object(n.createElement)(e,o)},o}(n.Component),a=Object(n.forwardRef)((function(e,t){return Object(n.createElement)(r,k({},e,{forwardedRef:t}))}));return a.displayName="AsyncScriptLoader("+t+")",a.propTypes={asyncScriptOnLoad:O.a.func},S()(a,e)})(j),r("2Gyv");function R(e){return function(){var t,r=A(e);if(T()){var n=A(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return I(this,t)}}function I(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var z=[{type:"text",name:"name",label:"Name",placeholder:"name"},{type:"text",name:"mail",label:"E-Mail",placeholder:"mail"},{type:"text",name:"betreff",label:"betreff",placeholder:"Betreff"},{type:"textarea",name:"nachricht",label:"Nachricht",placeholder:"Bitte gib eine Nachricht ein"},{type:"submit",name:"senden"}],$=function(e){D(t,e);R(t);function t(){return e.apply(this,arguments)||this}return t.prototype.render=function(){var e=this.props.t;return a.a.createElement(b.b,null,(function(t){var r=t.data.theme;return a.a.createElement(y.a,{theme:r,title:e("contact.header.title"),text:e("contact.header.text")},a.a.createElement("div",{key:"main-content",className:""},a.a.createElement(U,{title:e("contact.office.title"),extra:"IW 1+2, "+e("general.room")+" 1310"},a.a.createElement("div",{className:"m-5"},a.a.createElement(o.a,{i18nKey:"contact.office.detail"},"you can find us in the ",a.a.createElement("strong",null,"IW 1+2"),"."),a.a.createElement("div",{className:"flex flex-col items-center sm:flex-row sm:justify-between"},a.a.createElement(u.a,{header:a.a.createElement("p",{className:"ml-2 "},e("contact.find-us.room.title")),footer:a.a.createElement(F,{link:"https://oracle-web.zfn.uni-bremen.de/web/p_ebenen_ansicht?haus=IW&raum=1310&pi_anz=0"})},a.a.createElement("img",{alt:"unser StugA Raum im IW 1+2",src:d.a})),a.a.createElement(u.a,{header:e("contact.find-us.campus.title"),footer:a.a.createElement(F,{link:"https://www.uni-bremen.de/universitaet/campus/lageplan/"})},a.a.createElement("img",{alt:"unser StugA Raum auf dem Campus",src:m.a}))))),a.a.createElement(U,{title:e("contact.consultings.title")},a.a.createElement("div",{className:"m-5"},a.a.createElement(o.a,{i18nKey:"contact.consultings.text"},"Jede zweite, ungerade Woche ",a.a.createElement("strong",null,"Donnerstags")," bieten wir von ",a.a.createElement("strong",null," 13:00-15:00 Uhr "),"eine Sprechstunde an. In dieser Zeit könnt ihr uns Fragen rund ums Studium stellen. Die genauen Termine findet ihr natürlich auch bei ",a.a.createElement(h.Link,{to:"dates"},"Termine")))),a.a.createElement(U,{title:e("contact.formula.title"),defaultCollapsed:!0},a.a.createElement(M,{theme:r},z)),a.a.createElement(j,{sitekey:"6LfdyeAUAAAAAKMaiwzy-V0alf1Cszr2vFUdIXzo",onChange:function(){return console.log("captcha completed")}})))}))},t}(a.a.Component),M=function(e){D(t,e);R(t);function t(){return e.apply(this,arguments)||this}return t.prototype.render=function(){var e=this.props.children.map((function(e){var t,r=e.type,n=e.name,o=e.label,i=e.placeholder,c=r+"-"+n,l=e.label?a.a.createElement("label",{htmlFor:c},o):null;switch(r){case"textarea":t=a.a.createElement("textarea",{className:"h-48 shadow appearance-none border border-primary rounded w-full py-2 px-3 bg-input leading-tight",id:c,placeholder:i});break;case"submit":t=a.a.createElement("input",{type:r,value:n,className:"float-right bg-blue-600 text-white p-2 -ml-3 rounded-sm flex flex-row justify-center items-center pl-4 pr-4"});break;default:case"password":case"text":t=a.a.createElement("input",{className:"bg-input border-primary shadow appearance-none border rounded w-full py-2 px-3 leading-tight  ",id:c,type:r,placeholder:i})}return a.a.createElement("div",{className:"flex w-full mb-3"},a.a.createElement("div",{className:"w-0 sm:w-1/3 invisible sm:visible text-right pt-2 pr-4 font-bold"},l),a.a.createElement("div",{className:"w-full pr-2 sm:w-2/3"},t))}));return a.a.createElement("div",{className:"w-full sm:w-1/2 "},a.a.createElement("form",{className:"m-4 "},a.a.createElement("div",{className:"flex flex-col w-full "},e)))},t}(a.a.Component),U=function(e){D(t,e);R(t);function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={collapsed:!t.props.defaultCollapsed},t}return t.prototype.render=function(){var e=this,t=this.props,r=t.title,n=t.extra,o=t.children;return a.a.createElement("div",{className:"border-collapse"},a.a.createElement("div",{className:" w-full border-b border-primary  flex h-10 collapse-header cursor-pointer",onClick:function(){return e.setState((function(e){return{collapsed:!e.collapsed}}))}},a.a.createElement("span",{className:"image-wrapper"},a.a.createElement(v.a,{rotate:this.state.collapsed?0:90,className:"image-center-vertical"})),a.a.createElement("div",{className:"text-sm sm:text-lg relative ml-6 w-full"},a.a.createElement("p",{className:" text-center-vertical float-left"}," ",r," "),a.a.createElement("p",{className:" float-right text-center-vertical mr-6 overflow-hidden"}," ",n," "))),a.a.createElement("div",{className:"w-full border-b border-primary collapse-content",style:{display:this.state.collapsed?"none":"flex"}},o))},t}(a.a.Component);function F(e){var t=Object(o.c)().t;return a.a.createElement("button",{className:"bg-btn-primary text-white p-2 -ml-3 rounded-sm flex flex-row justify-center items-center",onClick:function(){return window.open(e.link)}},a.a.createElement(s,null),a.a.createElement("p",{className:"ml-2"},t("contact.find-us.link-button")))}var V=Object(o.d)()($);t.default=V},FhTr:function(e,t,r){"use strict";r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"right",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]}}},IGiP:function(e,t,r){e.exports=r.p+"static/room-b16b16145747a43eadc9a09d89041d1e.jpg"},OGtf:function(e,t,r){var n=r("XKFU"),a=r("eeVq"),o=r("vhPU"),i=/"/g,c=function(e,t,r,n){var a=String(o(e)),c="<"+t;return""!==r&&(c+=" "+r+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(c),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},QS3V:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("f6S5");t.a=function(e){var t=e.children,r=e.header,n=e.footer;return a.a.createElement(o.b,null,(function(e){e.data;return a.a.createElement("div",{className:"max-w-sm  overflow-hidden border border-primary shadow-lg mt-3 card"},a.a.createElement("div",{className:"text-sm sm:text-lg font-bold mb-2 border-b border-primary "},r),a.a.createElement("div",null,t),a.a.createElement("div",{className:"px-6 py-4 border-t border-primary border-top"},n))}))}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},V92u:function(e,t,r){e.exports=r.p+"static/campus-c8bb66596422df2ad41c9e3cd95dfe04.jpg"},kIla:function(e,t,r){"use strict";r("91GP"),r("a1Th"),r("Btvt"),r("I5cv");var n=r("q1tI"),a=r.n(n),o=r("9kay");function i(e){var t=Object(o.c)().t,r=e.theme;return r=r||"light",a.a.createElement("div",{className:"flex page-head bg-header"},a.a.createElement("div",{className:"w-0 lg:w-6/24 xl:w-5/24 "}),a.a.createElement("div",{className:"w-24/24 lg:w-12/24 xl:w-14/24"},a.a.createElement("h1",{className:"text-4xl heading"},e.title?e.title:t("in-progress")),a.a.createElement("p",null,e.text?e.text:t("in-progress"))),a.a.createElement("div",{className:"w-0 lg:w-6/24 xl:w-5/24 "}))}var c=r("YYbf"),l=r("f6S5");var s,u=["sm","md"],p=function(e){var t,r;r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var n;n=o;function o(){return e.apply(this,arguments)||this}return o.prototype.render=function(){var e=this,t=null,r=this.props.children,n=null;return a.a.Children.map(this.props.children,(function(e){switch(e.key){case"left-content":t=e;break;case"main-content":r=[e];break;case"right-content":n=e}})),u.some((function(t){return t===e.props.breakpoint}))&&r.push(t,n),a.a.createElement(l.b,null,(function(o){var c=o.data;return a.a.createElement("div",null,a.a.createElement(i,{theme:c.theme,title:e.props.title,text:e.props.text}),a.a.createElement("div",null,a.a.createElement("div",{className:"flex flex-row "},a.a.createElement("div",{className:"w-0 lg:w-6/24 xl:w-5/24 "},t),a.a.createElement("div",{className:"w-24/24 lg:w-12/24 xl:w-14/24 border-l border-primary border-r shadow h-screen"},r),a.a.createElement("div",{className:"w-0 lg:w-6/24 xl:w-5/24 "},n))))}))},o}(a.a.Component);s=p,p=function(e){var t=Object(c.a)(),r=t?t.breakpoint:"xxl";return a.a.createElement(s,Object.assign({},e,{breakpoint:r}))};t.a=p},qT12:function(e,t,r){"use strict";r("rE2o"),r("ioFf"),r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,a=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116;function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case p:case d:case i:case l:case c:case m:return e;default:switch(e=e&&e.$$typeof){case u:case f:case s:return e;default:return t}}case y:case h:case o:return t}}}function g(e){return b(e)===d}t.typeOf=b,t.AsyncMode=p,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=s,t.Element=a,t.ForwardRef=f,t.Fragment=i,t.Lazy=y,t.Memo=h,t.Portal=o,t.Profiler=l,t.StrictMode=c,t.Suspense=m,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===l||e===c||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===s||e.$$typeof===u||e.$$typeof===f)},t.isAsyncMode=function(e){return g(e)||b(e)===p},t.isConcurrentMode=g,t.isContextConsumer=function(e){return b(e)===u},t.isContextProvider=function(e){return b(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return b(e)===f},t.isFragment=function(e){return b(e)===i},t.isLazy=function(e){return b(e)===y},t.isMemo=function(e){return b(e)===h},t.isPortal=function(e){return b(e)===o},t.isProfiler=function(e){return b(e)===l},t.isStrictMode=function(e){return b(e)===c},t.isSuspense=function(e){return b(e)===m}},tUrg:function(e,t,r){"use strict";r("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-contact-js-b73d559f4d9d06d19bce.js.map