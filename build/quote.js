(()=>{var e={6199:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".template-quote{position:absolute;display:flex;align-items:center;width:100%;height:100%}.template-quote.hide{transition:1.5s;bottom:-100%}.template-quote.show{transition:1.5s;bottom:0px}.template-quote .quotation-mark{margin:1%}.template-quote .quote{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;text-overflow:ellipsis;font-size:1.75em}.template-quote .quote.two-lines{font-size:1.2em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis}.template-quote .quote-container{margin-left:1%}.template-quote .author{font-style:italic}",""]);const i=o},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},2703:(e,t,n)=>{"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:(e,t,n)=>{e.exports=n(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var l=e[o],s=t.base?l[0]+t.base:l[0],u=n[s]||0,c="".concat(s," ").concat(u);n[s]=u+1;var f=a(c),d={css:l[1],media:l[2],sourceMap:l[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:c,updater:h(d,t),references:1}),r.push(c)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,c=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=c(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(e,t){var n,r,o;if(t.singleton){var i=m++;n=p||(p=s(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=s(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var s=l(e,t),u=0;u<n.length;u++){var c=a(n[u]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}n=s}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{default:()=>b});const e=require("react");var t=n.n(e),o=n(5697),i=n.n(o),a=n(3379),l=n.n(a),s=n(6199);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}l()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;const f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"slideDone",void 0),c(this,"slide",void 0),c(this,"slideTimeout",null),this.slide=t,this.slideDone=n}var t,n;return t=e,(n=[{key:"start",value:function(e){var t=this;null!==this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=setTimeout((function(){t.slideDone(t.slide),t.slideTimeout=null}),e)}},{key:"stop",value:function(){null!==this.slideTimeout&&(clearTimeout(this.slideTimeout),this.slideTimeout=null)}}])&&u(t.prototype,n),e}();var d;function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}const m=function(t){return e.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:38,height:28},t),d||(d=e.createElement("path",{fill:"none",stroke:"current",d:"M4 26.5h7.5l5-10v-15h-15v15H9l-5 10zm20 0h7.5l5-10v-15h-15v15H29l-5 10z"})))};function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(n){var r=n.slide,o=n.content,i=n.run,a=n.slideDone,l=o.quotes,s=o.quoteInTwoLines?"quote two-lines":"quote",u=h(l,1)[0],c=h((0,e.useState)(u),2),d=c[0],p=c[1],v=h((0,e.useState)(!0),2),y=v[0],b=v[1],g=new f(r,a);return(0,e.useEffect)((function(){i?g.start(r.duration):g.stop()}),[i]),(0,e.useEffect)((function(){var e=setTimeout((function(){var e=(l.indexOf(d)+1)%l.length;p(l[e]),b(!0)}),d.duration),t=setTimeout((function(){b(!1)}),d.duration-1500);return function(){null!==e&&clearInterval(e),null!==t&&clearInterval(t)}}),[d]),t().createElement(t().Fragment,null,t().createElement("div",{className:y?"template-quote show":"template-quote hide"},t().createElement(m,{style:{stroke:"red"}}),t().createElement("div",{className:"quote-container"},t().createElement("div",{className:s},d.quote),t().createElement("div",{className:"author"},d.author))))}y.propTypes={run:i().bool.isRequired,slideDone:i().func.isRequired,slide:i().shape({duration:i().number.isRequired}).isRequired,content:i().shape({quotes:i().arrayOf(i().shape({quote:i().string,author:i().string})),quoteInTwoLines:i().bool}).isRequired};const b=y})();var o=exports;for(var i in r)o[i]=r[i];r.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();