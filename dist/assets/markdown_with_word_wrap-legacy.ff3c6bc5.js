!function(){function r(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,o,u=[],a=!0,i=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(u.push(e.value),!t||u.length!==t);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return u}(r,n)||function(r,n){if(!r)return;if("string"==typeof r)return t(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}System.register(["./index-legacy.6ddc1ca8.js"],(function(t){"use strict";var n,e,o,u;return{setters:[function(r){n=r.dj,e=r.c,o=r.ab,u=r.aa}],execute:function(){t("default",(function(){var t=r(n(),1)[0];return e(u,{get loading(){return t.loading},get children(){return e(o,{class:"word-wrap",get children(){var r;return null===(r=t())||void 0===r?void 0:r.content},toc:!0})}})}))}}}))}();
