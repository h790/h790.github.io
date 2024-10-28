/*! For license information please see component---src-pages-index-tsx-00188b658eabb9587798.js.LICENSE.txt */
(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[691],{6476:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return Rr},default:function(){return Br}});var r=n(7294),o=n.t(r,2);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,s(r.key),r)}}function u(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var l=n(7326),g=n(9611);function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,g.Z)(e,t)}function d(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,l.Z)(e)}var p=n(1120);function m(e,t,n){return(t=s(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=n(9199),h=n(181);function M(e){return function(e){if(Array.isArray(e))return e}(e)||(0,y.Z)(e)||(0,h.Z)(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,t){console&&console[e]&&console[e].apply(console,t)}},w=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this.init(t,n)}return u(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||N,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(e){this.debug=e}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,n,r){return r&&!this.debug?null:("string"==typeof e[0]&&(e[0]="".concat(n).concat(this.prefix," ").concat(e[0])),this.logger[t](e))}},{key:"create",value:function(t){return new e(this.logger,v(v({},{prefix:"".concat(this.prefix,":").concat(t,":")}),this.options))}},{key:"clone",value:function(t){return(t=t||this.options).prefix=t.prefix||this.prefix,new e(this.logger,t)}}]),e}(),I=new w,b=function(){function e(){i(this,e),this.observers={}}return u(e,[{key:"on",value:function(e,t){var n=this;return e.split(" ").forEach((function(e){n.observers[e]=n.observers[e]||[],n.observers[e].push(t)})),this}},{key:"off",value:function(e,t){this.observers[e]&&(t?this.observers[e]=this.observers[e].filter((function(e){return e!==t})):delete this.observers[e])}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.observers[e]&&[].concat(this.observers[e]).forEach((function(e){e.apply(void 0,n)}));this.observers["*"]&&[].concat(this.observers["*"]).forEach((function(t){t.apply(t,[e].concat(n))}))}}]),e}();function D(){var e,t,n=new Promise((function(n,r){e=n,t=r}));return n.resolve=e,n.reject=t,n}function L(e){return null==e?"":""+e}function x(e,t,n){function r(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}function o(){return!e||"string"==typeof e}for(var a="string"!=typeof t?[].concat(t):t.split(".");a.length>1;){if(o())return{};var i=r(a.shift());!e[i]&&n&&(e[i]=new n),e=Object.prototype.hasOwnProperty.call(e,i)?e[i]:{}}return o()?{}:{obj:e,k:r(a.shift())}}function A(e,t,n){var r=x(e,t,Object);r.obj[r.k]=n}function C(e,t){var n=x(e,t),r=n.obj,o=n.k;if(r)return r[o]}function O(e,t,n){for(var r in t)"__proto__"!==r&&"constructor"!==r&&(r in e?"string"==typeof e[r]||e[r]instanceof String||"string"==typeof t[r]||t[r]instanceof String?n&&(e[r]=t[r]):O(e[r],t[r],n):e[r]=t[r]);return e}function S(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var E={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function T(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,(function(e){return E[e]})):e}var k="undefined"!=typeof window&&window.navigator&&void 0===window.navigator.userAgentData&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,z=[" ",",","?","!",";"];function Q(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(e){if(e[t])return e[t];for(var r=t.split(n),o=e,a=0;a<r.length;++a){if(!o)return;if("string"==typeof o[r[a]]&&a+1<r.length)return;if(void 0===o[r[a]]){for(var i=2,s=r.slice(a,a+i).join(n),c=o[s];void 0===c&&r.length>a+i;)i++,c=o[s=r.slice(a,a+i).join(n)];if(void 0===c)return;if(null===c)return null;if(t.endsWith(s)){if("string"==typeof c)return c;if(s&&"string"==typeof c[s])return c[s]}var u=r.slice(a+i).join(n);return u?Q(c,u,n):void 0}o=o[r[a]]}return o}}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,p.Z)(e);if(t){var o=(0,p.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}var B=function(e){f(n,e);var t=Y(n);function n(e){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return i(this,n),r=t.call(this),k&&b.call((0,l.Z)(r)),r.data=e||{},r.options=o,void 0===r.options.keySeparator&&(r.options.keySeparator="."),void 0===r.options.ignoreJSONStructure&&(r.options.ignoreJSONStructure=!0),r}return u(n,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,a=void 0!==r.ignoreJSONStructure?r.ignoreJSONStructure:this.options.ignoreJSONStructure,i=[e,t];n&&"string"!=typeof n&&(i=i.concat(n)),n&&"string"==typeof n&&(i=i.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(i=e.split("."));var s=C(this.data,i);return s||!a||"string"!=typeof n?s:Q(this.data&&this.data[e]&&this.data[e][t],n,o)}},{key:"addResource",value:function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},a=void 0!==o.keySeparator?o.keySeparator:this.options.keySeparator,i=[e,t];n&&(i=i.concat(a?n.split(a):n)),e.indexOf(".")>-1&&(r=t,t=(i=e.split("."))[1]),this.addNamespaces(t),A(this.data,i,r),o.silent||this.emit("added",e,t,n,r)}},{key:"addResources",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var o in n)"string"!=typeof n[o]&&"[object Array]"!==Object.prototype.toString.apply(n[o])||this.addResource(e,t,o,n[o],{silent:!0});r.silent||this.emit("added",e,t,n)}},{key:"addResourceBundle",value:function(e,t,n,r,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},i=[e,t];e.indexOf(".")>-1&&(r=n,n=t,t=(i=e.split("."))[1]),this.addNamespaces(t);var s=C(this.data,i)||{};r?O(s,n,o):s=U(U({},s),n),A(this.data,i,s),a.silent||this.emit("added",e,t,n)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?U(U({},{}),this.getResource(e,t)):this.getResource(e,t)}},{key:"getDataByLanguage",value:function(e){return this.data[e]}},{key:"hasLanguageSomeTranslations",value:function(e){var t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find((function(e){return t[e]&&Object.keys(t[e]).length>0}))}},{key:"toJSON",value:function(){return this.data}}]),n}(b),R={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,n,r,o){var a=this;return e.forEach((function(e){a.processors[e]&&(t=a.processors[e].process(t,n,r,o))})),t}};function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,p.Z)(e);if(t){var o=(0,p.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}var F={},W=function(e){f(n,e);var t=G(n);function n(e){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(this,n),r=t.call(this),k&&b.call((0,l.Z)(r)),function(e,t,n){e.forEach((function(e){t[e]&&(n[e]=t[e])}))}(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,(0,l.Z)(r)),r.options=o,void 0===r.options.keySeparator&&(r.options.keySeparator="."),r.logger=I.create("translator"),r}return u(n,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(null==e)return!1;var n=this.resolve(e,t);return n&&void 0!==n.res}},{key:"extractFromKey",value:function(e,t){var n=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===n&&(n=":");var r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,o=t.ns||this.options.defaultNS||[],a=n&&e.indexOf(n)>-1,i=!(this.options.userDefinedKeySeparator||t.keySeparator||this.options.userDefinedNsSeparator||t.nsSeparator||function(e,t,n){t=t||"",n=n||"";var r=z.filter((function(e){return t.indexOf(e)<0&&n.indexOf(e)<0}));if(0===r.length)return!0;var o=new RegExp("(".concat(r.map((function(e){return"?"===e?"\\?":e})).join("|"),")")),a=!o.test(e);if(!a){var i=e.indexOf(n);i>0&&!o.test(e.substring(0,i))&&(a=!0)}return a}(e,n,r));if(a&&!i){var s=e.match(this.interpolator.nestingRegexp);if(s&&s.length>0)return{key:e,namespaces:o};var c=e.split(n);(n!==r||n===r&&this.options.ns.indexOf(c[0])>-1)&&(o=c.shift()),e=c.join(r)}return"string"==typeof o&&(o=[o]),{key:e,namespaces:o}}},{key:"translate",value:function(e,t,r){var o=this;if("object"!==a(t)&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),"object"===a(t)&&(t=H({},t)),t||(t={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);var i=void 0!==t.returnDetails?t.returnDetails:this.options.returnDetails,s=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,c=this.extractFromKey(e[e.length-1],t),u=c.key,l=c.namespaces,g=l[l.length-1],f=t.lng||this.language,d=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(f&&"cimode"===f.toLowerCase()){if(d){var p=t.nsSeparator||this.options.nsSeparator;return i?{res:"".concat(g).concat(p).concat(u),usedKey:u,exactUsedKey:u,usedLng:f,usedNS:g}:"".concat(g).concat(p).concat(u)}return i?{res:u,usedKey:u,exactUsedKey:u,usedLng:f,usedNS:g}:u}var m=this.resolve(e,t),y=m&&m.res,h=m&&m.usedKey||u,M=m&&m.exactUsedKey||u,j=Object.prototype.toString.apply(y),v=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,N=!this.i18nFormat||this.i18nFormat.handleAsObject;if(N&&y&&("string"!=typeof y&&"boolean"!=typeof y&&"number"!=typeof y)&&["[object Number]","[object Function]","[object RegExp]"].indexOf(j)<0&&("string"!=typeof v||"[object Array]"!==j)){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,y,H(H({},t),{},{ns:l})):"key '".concat(u," (").concat(this.language,")' returned an object instead of string.");return i?(m.res=w,m):w}if(s){var I="[object Array]"===j,b=I?[]:{},D=I?M:h;for(var L in y)if(Object.prototype.hasOwnProperty.call(y,L)){var x="".concat(D).concat(s).concat(L);b[L]=this.translate(x,H(H({},t),{joinArrays:!1,ns:l})),b[L]===x&&(b[L]=y[L])}y=b}}else if(N&&"string"==typeof v&&"[object Array]"===j)(y=y.join(v))&&(y=this.extendTranslation(y,e,t,r));else{var A=!1,C=!1,O=void 0!==t.count&&"string"!=typeof t.count,S=n.hasDefaultValue(t),E=O?this.pluralResolver.getSuffix(f,t.count,t):"",T=t["defaultValue".concat(E)]||t.defaultValue;!this.isValidLookup(y)&&S&&(A=!0,y=T),this.isValidLookup(y)||(C=!0,y=u);var k=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&C?void 0:y,z=S&&T!==y&&this.options.updateMissing;if(C||A||z){if(this.logger.log(z?"updateKey":"missingKey",f,g,u,z?T:y),s){var Q=this.resolve(u,H(H({},t),{},{keySeparator:!1}));Q&&Q.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var P=[],U=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&U&&U[0])for(var Y=0;Y<U.length;Y++)P.push(U[Y]);else"all"===this.options.saveMissingTo?P=this.languageUtils.toResolveHierarchy(t.lng||this.language):P.push(t.lng||this.language);var B=function(e,n,r){var a=S&&r!==y?r:k;o.options.missingKeyHandler?o.options.missingKeyHandler(e,g,n,a,z,t):o.backendConnector&&o.backendConnector.saveMissing&&o.backendConnector.saveMissing(e,g,n,a,z,t),o.emit("missingKey",e,g,n,y)};this.options.saveMissing&&(this.options.saveMissingPlurals&&O?P.forEach((function(e){o.pluralResolver.getSuffixes(e,t).forEach((function(n){B([e],u+n,t["defaultValue".concat(n)]||T)}))})):B(P,u,T))}y=this.extendTranslation(y,e,t,m,r),C&&y===u&&this.options.appendNamespaceToMissingKey&&(y="".concat(g,":").concat(u)),(C||A)&&this.options.parseMissingKeyHandler&&(y="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(g,":").concat(u):u,A?y:void 0):this.options.parseMissingKeyHandler(y))}return i?(m.res=y,m):y}},{key:"extendTranslation",value:function(e,t,n,r,o){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,H(H({},this.options.interpolation.defaultVariables),n),r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init(H(H({},n),{interpolation:H(H({},this.options.interpolation),n.interpolation)}));var i,s="string"==typeof e&&(n&&n.interpolation&&void 0!==n.interpolation.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);if(s){var c=e.match(this.interpolator.nestingRegexp);i=c&&c.length}var u=n.replace&&"string"!=typeof n.replace?n.replace:n;if(this.options.interpolation.defaultVariables&&(u=H(H({},this.options.interpolation.defaultVariables),u)),e=this.interpolator.interpolate(e,u,n.lng||this.language,n),s){var l=e.match(this.interpolator.nestingRegexp);i<(l&&l.length)&&(n.nest=!1)}!n.lng&&"v1"!==this.options.compatibilityAPI&&r&&r.res&&(n.lng=r.usedLng),!1!==n.nest&&(e=this.interpolator.nest(e,(function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return o&&o[0]===r[0]&&!n.context?(a.logger.warn("It seems you are nesting recursively key: ".concat(r[0]," in key: ").concat(t[0])),null):a.translate.apply(a,r.concat([t]))}),n)),n.interpolation&&this.interpolator.reset()}var g=n.postProcess||this.options.postProcess,f="string"==typeof g?[g]:g;return null!=e&&f&&f.length&&!1!==n.applyPostProcessor&&(e=R.handle(f,e,t,this.options&&this.options.postProcessPassResolved?H({i18nResolved:r},n):n,this)),e}},{key:"resolve",value:function(e){var t,n,r,o,a,i=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e=[e]),e.forEach((function(e){if(!i.isValidLookup(t)){var c=i.extractFromKey(e,s),u=c.key;n=u;var l=c.namespaces;i.options.fallbackNS&&(l=l.concat(i.options.fallbackNS));var g=void 0!==s.count&&"string"!=typeof s.count,f=g&&!s.ordinal&&0===s.count&&i.pluralResolver.shouldUseIntlApi(),d=void 0!==s.context&&("string"==typeof s.context||"number"==typeof s.context)&&""!==s.context,p=s.lngs?s.lngs:i.languageUtils.toResolveHierarchy(s.lng||i.language,s.fallbackLng);l.forEach((function(e){i.isValidLookup(t)||(a=e,!F["".concat(p[0],"-").concat(e)]&&i.utils&&i.utils.hasLoadedNamespace&&!i.utils.hasLoadedNamespace(a)&&(F["".concat(p[0],"-").concat(e)]=!0,i.logger.warn('key "'.concat(n,'" for languages "').concat(p.join(", "),'" won\'t get resolved as namespace "').concat(a,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),p.forEach((function(n){if(!i.isValidLookup(t)){o=n;var a,c=[u];if(i.i18nFormat&&i.i18nFormat.addLookupKeys)i.i18nFormat.addLookupKeys(c,u,n,e,s);else{var l;g&&(l=i.pluralResolver.getSuffix(n,s.count,s));var p="".concat(i.options.pluralSeparator,"zero");if(g&&(c.push(u+l),f&&c.push(u+p)),d){var m="".concat(u).concat(i.options.contextSeparator).concat(s.context);c.push(m),g&&(c.push(m+l),f&&c.push(m+p))}}for(;a=c.pop();)i.isValidLookup(t)||(r=a,t=i.getResource(n,e,a,s))}})))}))}})),{res:t,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:a}}},{key:"isValidLookup",value:function(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}}],[{key:"hasDefaultValue",value:function(e){var t="defaultValue";for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t===n.substring(0,12)&&void 0!==e[n])return!0;return!1}}]),n}(b);function J(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Z=function(){function e(t){i(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=I.create("languageUtils")}return u(e,[{key:"getScriptPartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return null;var t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}},{key:"getLanguagePartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],n=e.split("-");return this.options.lowerCaseLng?n=n.map((function(e){return e.toLowerCase()})):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=J(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=J(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=J(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isSupportedCode",value:function(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}},{key:"getBestMatchFromCodes",value:function(e){var t,n=this;return e?(e.forEach((function(e){if(!t){var r=n.formatLanguageCode(e);n.options.supportedLngs&&!n.isSupportedCode(r)||(t=r)}})),!t&&this.options.supportedLngs&&e.forEach((function(e){if(!t){var r=n.getLanguagePartFromCode(e);if(n.isSupportedCode(r))return t=r;t=n.options.supportedLngs.find((function(e){return e===r?e:e.indexOf("-")<0&&r.indexOf("-")<0?void 0:0===e.indexOf(r)?e:void 0}))}})),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t):null}},{key:"getFallbackCodes",value:function(e,t){if(!e)return[];if("function"==typeof e&&(e=e(t)),"string"==typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];var n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}},{key:"toResolveHierarchy",value:function(e,t){var n=this,r=this.getFallbackCodes(t||this.options.fallbackLng||[],e),o=[],a=function(e){e&&(n.isSupportedCode(e)?o.push(e):n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))};return"string"==typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&a(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&a(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&a(this.getLanguagePartFromCode(e))):"string"==typeof e&&a(this.formatLanguageCode(e)),r.forEach((function(e){o.indexOf(e)<0&&a(n.formatLanguageCode(e))})),o}}]),e}(),K=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],X={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1&&e%100!=11?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0==e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3)}},q=["v1","v2","v3"],_={zero:0,one:1,two:2,few:3,many:4,other:5};var $=function(){function e(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this.languageUtils=t,this.options=r,this.logger=I.create("pluralResolver"),this.options.compatibilityJSON&&"v4"!==this.options.compatibilityJSON||"undefined"!=typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=(n={},K.forEach((function(e){e.lngs.forEach((function(t){n[t]={numbers:e.nr,plurals:X[e.fc]}}))})),n)}return u(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(e,{type:t.ordinal?"ordinal":"cardinal"})}catch(n){return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRule(e,t);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,n).map((function(e){return"".concat(t).concat(e)}))}},{key:"getSuffixes",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.getRule(e,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((function(e,t){return _[e]-_[t]})).map((function(e){return"".concat(t.options.prepend).concat(e)})):r.numbers.map((function(r){return t.getSuffix(e,r,n)})):[]}},{key:"getSuffix",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.getRule(e,n);return r?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(r.select(t)):this.getSuffixRetroCompatible(r,t):(this.logger.warn("no plural rule found for: ".concat(e)),"")}},{key:"getSuffixRetroCompatible",value:function(e,t){var n=this,r=e.noAbs?e.plurals(t):e.plurals(Math.abs(t)),o=e.numbers[r];this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]&&(2===o?o="plural":1===o&&(o=""));var a=function(){return n.options.prepend&&o.toString()?n.options.prepend+o.toString():o.toString()};return"v1"===this.options.compatibilityJSON?1===o?"":"number"==typeof o?"_plural_".concat(o.toString()):a():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]?a():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}},{key:"shouldUseIntlApi",value:function(){return!q.includes(this.options.compatibilityJSON)}}]),e}();function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ne(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=function(e,t,n){var r=C(e,n);return void 0!==r?r:C(t,n)}(e,t,n);return!a&&o&&"string"==typeof n&&void 0===(a=Q(e,n,r))&&(a=Q(t,n,r)),a}var re=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e),this.logger=I.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(e){return e},this.init(t)}return u(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});var t=e.interpolation;this.escape=void 0!==t.escape?t.escape:T,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?S(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?S(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?S(t.nestingPrefix):t.nestingPrefixEscaped||S("$t("),this.nestingSuffix=t.nestingSuffix?S(t.nestingSuffix):t.nestingSuffixEscaped||S(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=void 0!==t.alwaysFormat&&t.alwaysFormat,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(e,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var n="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(n,"g")}},{key:"interpolate",value:function(e,t,n,r){var o,a,i,s=this,c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(e){return e.replace(/\$/g,"$$$$")}var l=function(e){if(e.indexOf(s.formatSeparator)<0){var o=ne(t,c,e,s.options.keySeparator,s.options.ignoreJSONStructure);return s.alwaysFormat?s.format(o,void 0,n,te(te(te({},r),t),{},{interpolationkey:e})):o}var a=e.split(s.formatSeparator),i=a.shift().trim(),u=a.join(s.formatSeparator).trim();return s.format(ne(t,c,i,s.options.keySeparator,s.options.ignoreJSONStructure),u,n,te(te(te({},r),t),{},{interpolationkey:i}))};this.resetRegExp();var g=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,f=r&&r.interpolation&&void 0!==r.interpolation.skipOnVariables?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:function(e){return u(e)}},{regex:this.regexp,safeValue:function(e){return s.escapeValue?u(s.escape(e)):u(e)}}].forEach((function(t){for(i=0;o=t.regex.exec(e);){var n=o[1].trim();if(void 0===(a=l(n)))if("function"==typeof g){var c=g(e,o,r);a="string"==typeof c?c:""}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a="";else{if(f){a=o[0];continue}s.logger.warn("missed to pass in variable ".concat(n," for interpolating ").concat(e)),a=""}else"string"==typeof a||s.useRawValueToEscape||(a=L(a));var u=t.safeValue(a);if(e=e.replace(o[0],u),f?(t.regex.lastIndex+=a.length,t.regex.lastIndex-=o[0].length):t.regex.lastIndex=0,++i>=s.maxReplaces)break}})),e}},{key:"nest",value:function(e,t){var n,r,o,a=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};function s(e,t){var n=this.nestingOptionsSeparator;if(e.indexOf(n)<0)return e;var r=e.split(new RegExp("".concat(n,"[ ]*{"))),a="{".concat(r[1]);e=r[0];var i=(a=this.interpolate(a,o)).match(/'/g),s=a.match(/"/g);(i&&i.length%2==0&&!s||s.length%2!=0)&&(a=a.replace(/'/g,'"'));try{o=JSON.parse(a),t&&(o=te(te({},t),o))}catch(c){return this.logger.warn("failed parsing options string in nesting for key ".concat(e),c),"".concat(e).concat(n).concat(a)}return delete o.defaultValue,e}for(;n=this.nestingRegexp.exec(e);){var c=[];(o=(o=te({},i)).replace&&"string"!=typeof o.replace?o.replace:o).applyPostProcessor=!1,delete o.defaultValue;var u=!1;if(-1!==n[0].indexOf(this.formatSeparator)&&!/{.*}/.test(n[1])){var l=n[1].split(this.formatSeparator).map((function(e){return e.trim()}));n[1]=l.shift(),c=l,u=!0}if((r=t(s.call(this,n[1].trim(),o),o))&&n[0]===e&&"string"!=typeof r)return r;"string"!=typeof r&&(r=L(r)),r||(this.logger.warn("missed to resolve ".concat(n[1]," for nesting ").concat(e)),r=""),u&&(r=c.reduce((function(e,t){return a.format(e,t,i.lng,te(te({},i),{},{interpolationkey:n[1].trim()}))}),r.trim())),e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}]),e}();function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ie(e){var t={};return function(n,r,o){var a=r+JSON.stringify(o),i=t[a];return i||(i=e(r,o),t[a]=i),i(n)}}var se=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e),this.logger=I.create("formatter"),this.options=t,this.formats={number:ie((function(e,t){var n=new Intl.NumberFormat(e,ae({},t));return function(e){return n.format(e)}})),currency:ie((function(e,t){var n=new Intl.NumberFormat(e,ae(ae({},t),{},{style:"currency"}));return function(e){return n.format(e)}})),datetime:ie((function(e,t){var n=new Intl.DateTimeFormat(e,ae({},t));return function(e){return n.format(e)}})),relativetime:ie((function(e,t){var n=new Intl.RelativeTimeFormat(e,ae({},t));return function(e){return n.format(e,t.range||"day")}})),list:ie((function(e,t){var n=new Intl.ListFormat(e,ae({},t));return function(e){return n.format(e)}}))},this.init(t)}return u(e,[{key:"init",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||","}},{key:"add",value:function(e,t){this.formats[e.toLowerCase().trim()]=t}},{key:"addCached",value:function(e,t){this.formats[e.toLowerCase().trim()]=ie(t)}},{key:"format",value:function(e,t,n){var r=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t.split(this.formatSeparator).reduce((function(e,t){var a=function(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var o=r[1].substring(0,r[1].length-1);"currency"===t&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):"relativetime"===t&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach((function(e){if(e){var t=M(e.split(":")),r=t[0],o=t.slice(1).join(":").trim().replace(/^'+|'+$/g,"");n[r.trim()]||(n[r.trim()]=o),"false"===o&&(n[r.trim()]=!1),"true"===o&&(n[r.trim()]=!0),isNaN(o)||(n[r.trim()]=parseInt(o,10))}}))}return{formatName:t,formatOptions:n}}(t),i=a.formatName,s=a.formatOptions;if(r.formats[i]){var c=e;try{var u=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},l=u.locale||u.lng||o.locale||o.lng||n;c=r.formats[i](e,l,ae(ae(ae({},s),o),u))}catch(g){r.logger.warn(g)}return c}return r.logger.warn("there was no format function for ".concat(i)),e}),e)}}]),e}();function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function le(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,p.Z)(e);if(t){var o=(0,p.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}var ge=function(e){f(n,e);var t=le(n);function n(e,r,o){var a,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return i(this,n),a=t.call(this),k&&b.call((0,l.Z)(a)),a.backend=e,a.store=r,a.services=o,a.languageUtils=o.languageUtils,a.options=s,a.logger=I.create("backendConnector"),a.waitingReads=[],a.maxParallelReads=s.maxParallelReads||10,a.readingCalls=0,a.maxRetries=s.maxRetries>=0?s.maxRetries:5,a.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,a.state={},a.queue=[],a.backend&&a.backend.init&&a.backend.init(o,s.backend,s),a}return u(n,[{key:"queueLoad",value:function(e,t,n,r){var o=this,a={},i={},s={},c={};return e.forEach((function(e){var r=!0;t.forEach((function(t){var s="".concat(e,"|").concat(t);!n.reload&&o.store.hasResourceBundle(e,t)?o.state[s]=2:o.state[s]<0||(1===o.state[s]?void 0===i[s]&&(i[s]=!0):(o.state[s]=1,r=!1,void 0===i[s]&&(i[s]=!0),void 0===a[s]&&(a[s]=!0),void 0===c[t]&&(c[t]=!0)))})),r||(s[e]=!0)})),(Object.keys(a).length||Object.keys(i).length)&&this.queue.push({pending:i,pendingCount:Object.keys(i).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(a),pending:Object.keys(i),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(c)}}},{key:"loaded",value:function(e,t,n){var r=e.split("|"),o=r[0],a=r[1];t&&this.emit("failedLoading",o,a,t),n&&this.store.addResourceBundle(o,a,n),this.state[e]=t?-1:2;var i={};this.queue.forEach((function(n){var r,s,c,u,l,g;r=n.loaded,s=a,u=x(r,[o],Object),l=u.obj,g=u.k,l[g]=l[g]||[],c&&(l[g]=l[g].concat(s)),c||l[g].push(s),function(e,t){void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)}(n,e),t&&n.errors.push(t),0!==n.pendingCount||n.done||(Object.keys(n.loaded).forEach((function(e){i[e]||(i[e]={});var t=n.loaded[e];t.length&&t.forEach((function(t){void 0===i[e][t]&&(i[e][t]=!0)}))})),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())})),this.emit("loaded",i),this.queue=this.queue.filter((function(e){return!e.done}))}},{key:"read",value:function(e,t,n){var r=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,i=arguments.length>5?arguments[5]:void 0;if(!e.length)return i(null,{});if(this.readingCalls>=this.maxParallelReads)this.waitingReads.push({lng:e,ns:t,fcName:n,tried:o,wait:a,callback:i});else{this.readingCalls++;var s=function(s,c){if(r.readingCalls--,r.waitingReads.length>0){var u=r.waitingReads.shift();r.read(u.lng,u.ns,u.fcName,u.tried,u.wait,u.callback)}s&&c&&o<r.maxRetries?setTimeout((function(){r.read.call(r,e,t,n,o+1,2*a,i)}),a):i(s,c)},c=this.backend[n].bind(this.backend);if(2!==c.length)return c(e,t,s);try{var u=c(e,t);u&&"function"==typeof u.then?u.then((function(e){return s(null,e)})).catch(s):s(null,u)}catch(l){s(l)}}}},{key:"prepareLoading",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);var a=this.queueLoad(e,t,r,o);if(!a.toLoad.length)return a.pending.length||o(),null;a.toLoad.forEach((function(e){n.loadOne(e)}))}},{key:"load",value:function(e,t,n){this.prepareLoading(e,t,{},n)}},{key:"reload",value:function(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}},{key:"loadOne",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=e.split("|"),o=r[0],a=r[1];this.read(o,a,"read",void 0,void 0,(function(r,i){r&&t.logger.warn("".concat(n,"loading namespace ").concat(a," for language ").concat(o," failed"),r),!r&&i&&t.logger.log("".concat(n,"loaded namespace ").concat(a," for language ").concat(o),i),t.loaded(e,r,i)}))}},{key:"saveMissing",value:function(e,t,n,r,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t))this.logger.warn('did not save key "'.concat(n,'" as the namespace "').concat(t,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(null!=n&&""!==n){if(this.backend&&this.backend.create){var s=ue(ue({},a),{},{isUpdate:o}),c=this.backend.create.bind(this.backend);if(c.length<6)try{var u;(u=5===c.length?c(e,t,n,r,s):c(e,t,n,r))&&"function"==typeof u.then?u.then((function(e){return i(null,e)})).catch(i):i(null,u)}catch(l){i(l)}else c(e,t,n,r,i,s)}e&&e[0]&&this.store.addResource(e[0],t,n,r)}}}]),n}(b);function fe(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var t={};if("object"===a(e[1])&&(t=e[1]),"string"==typeof e[1]&&(t.defaultValue=e[1]),"string"==typeof e[2]&&(t.tDescription=e[2]),"object"===a(e[2])||"object"===a(e[3])){var n=e[3]||e[2];Object.keys(n).forEach((function(e){t[e]=n[e]}))}return t},interpolation:{escapeValue:!0,format:function(e,t,n,r){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function de(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ye(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,p.Z)(e);if(t){var o=(0,p.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function he(){}var Me=function(e){f(n,e);var t=ye(n);function n(){var e,r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(i(this,n),e=t.call(this),k&&b.call((0,l.Z)(e)),e.options=de(o),e.services={},e.logger=I,e.modules={external:[]},r=(0,l.Z)(e),Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((function(e){"function"==typeof r[e]&&(r[e]=r[e].bind(r))})),a&&!e.isInitialized&&!o.isClone){if(!e.options.initImmediate)return e.init(o,a),d(e,(0,l.Z)(e));setTimeout((function(){e.init(o,a)}),0)}return e}return u(n,[{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;"function"==typeof t&&(n=t,t={}),!t.defaultNS&&!1!==t.defaultNS&&t.ns&&("string"==typeof t.ns?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));var r=fe();function o(e){return e?"function"==typeof e?new e:e:null}if(this.options=me(me(me({},r),this.options),de(t)),"v1"!==this.options.compatibilityAPI&&(this.options.interpolation=me(me({},r.interpolation),this.options.interpolation)),void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator),!this.options.isClone){var a;this.modules.logger?I.init(o(this.modules.logger),this.options):I.init(null,this.options),this.modules.formatter?a=this.modules.formatter:"undefined"!=typeof Intl&&(a=se);var i=new Z(this.options);this.store=new B(this.options.resources,this.options);var s=this.services;s.logger=I,s.resourceStore=this.store,s.languageUtils=i,s.pluralResolver=new $(i,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!a||this.options.interpolation.format&&this.options.interpolation.format!==r.interpolation.format||(s.formatter=o(a),s.formatter.init(s,this.options),this.options.interpolation.format=s.formatter.format.bind(s.formatter)),s.interpolator=new re(this.options),s.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},s.backendConnector=new ge(o(this.modules.backend),s.resourceStore,s,this.options),s.backendConnector.on("*",(function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit.apply(e,[t].concat(r))})),this.modules.languageDetector&&(s.languageDetector=o(this.modules.languageDetector),s.languageDetector.init&&s.languageDetector.init(s,this.options.detection,this.options)),this.modules.i18nFormat&&(s.i18nFormat=o(this.modules.i18nFormat),s.i18nFormat.init&&s.i18nFormat.init(this)),this.translator=new W(this.services,this.options),this.translator.on("*",(function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit.apply(e,[t].concat(r))})),this.modules.external.forEach((function(t){t.init&&t.init(e)}))}if(this.format=this.options.interpolation.format,n||(n=he),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&"dev"!==c[0]&&(this.options.lng=c[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments)}}));["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments),e}}));var u=D(),l=function(){var t=function(t,r){e.isInitialized&&!e.initializedStoreOnce&&e.logger.warn("init: i18next is already initialized. You should call init just once!"),e.isInitialized=!0,e.options.isClone||e.logger.log("initialized",e.options),e.emit("initialized",e.options),u.resolve(r),n(t,r)};if(e.languages&&"v1"!==e.options.compatibilityAPI&&!e.isInitialized)return t(null,e.t.bind(e));e.changeLanguage(e.options.lng,t)};return this.options.resources||!this.options.initImmediate?l():setTimeout(l,0),u}},{key:"loadResources",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:he,r="string"==typeof e?e:this.language;if("function"==typeof e&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r&&"cimode"===r.toLowerCase())return n();var o=[],a=function(e){e&&t.services.languageUtils.toResolveHierarchy(e).forEach((function(e){o.indexOf(e)<0&&o.push(e)}))};if(r)a(r);else this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((function(e){return a(e)}));this.options.preload&&this.options.preload.forEach((function(e){return a(e)})),this.services.backendConnector.load(o,this.options.ns,(function(e){e||t.resolvedLanguage||!t.language||t.setResolvedLanguage(t.language),n(e)}))}else n(null)}},{key:"reloadResources",value:function(e,t,n){var r=D();return e||(e=this.languages),t||(t=this.options.ns),n||(n=he),this.services.backendConnector.reload(e,t,(function(e){r.resolve(),n(e)})),r}},{key:"use",value:function(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&R.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}},{key:"setResolvedLanguage",value:function(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1))for(var t=0;t<this.languages.length;t++){var n=this.languages[t];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}},{key:"changeLanguage",value:function(e,t){var n=this;this.isLanguageChangingTo=e;var r=D();this.emit("languageChanging",e);var o=function(e){n.language=e,n.languages=n.services.languageUtils.toResolveHierarchy(e),n.resolvedLanguage=void 0,n.setResolvedLanguage(e)},a=function(a){e||a||!n.services.languageDetector||(a=[]);var i="string"==typeof a?a:n.services.languageUtils.getBestMatchFromCodes(a);i&&(n.language||o(i),n.translator.language||n.translator.changeLanguage(i),n.services.languageDetector&&n.services.languageDetector.cacheUserLanguage&&n.services.languageDetector.cacheUserLanguage(i)),n.loadResources(i,(function(e){!function(e,a){a?(o(a),n.translator.changeLanguage(a),n.isLanguageChangingTo=void 0,n.emit("languageChanged",a),n.logger.log("languageChanged",a)):n.isLanguageChangingTo=void 0,r.resolve((function(){return n.t.apply(n,arguments)})),t&&t(e,(function(){return n.t.apply(n,arguments)}))}(e,i)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e):a(this.services.languageDetector.detect()),r}},{key:"getFixedT",value:function(e,t,n){var r=this,o=function e(t,o){var i;if("object"!==a(o)){for(var s=arguments.length,c=new Array(s>2?s-2:0),u=2;u<s;u++)c[u-2]=arguments[u];i=r.options.overloadTranslationOptionHandler([t,o].concat(c))}else i=me({},o);i.lng=i.lng||e.lng,i.lngs=i.lngs||e.lngs,i.ns=i.ns||e.ns,i.keyPrefix=i.keyPrefix||n||e.keyPrefix;var l,g=r.options.keySeparator||".";return l=i.keyPrefix&&Array.isArray(t)?t.map((function(e){return"".concat(i.keyPrefix).concat(g).concat(e)})):i.keyPrefix?"".concat(i.keyPrefix).concat(g).concat(t):t,r.t(l,i)};return"string"==typeof e?o.lng=e:o.lngs=e,o.ns=t,o.keyPrefix=n,o}},{key:"t",value:function(){var e;return this.translator&&(e=this.translator).translate.apply(e,arguments)}},{key:"exists",value:function(){var e;return this.translator&&(e=this.translator).exists.apply(e,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"hasLoadedNamespace",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var r=n.lng||this.resolvedLanguage||this.languages[0],o=!!this.options&&this.options.fallbackLng,a=this.languages[this.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};if(n.precheck){var s=n.precheck(this,i);if(void 0!==s)return s}return!!this.hasResourceBundle(r,e)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!i(r,e)||o&&!i(a,e)))}},{key:"loadNamespaces",value:function(e,t){var n=this,r=D();return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach((function(e){n.options.ns.indexOf(e)<0&&n.options.ns.push(e)})),this.loadResources((function(e){r.resolve(),t&&t(e)})),r):(t&&t(),Promise.resolve())}},{key:"loadLanguages",value:function(e,t){var n=D();"string"==typeof e&&(e=[e]);var r=this.options.preload||[],o=e.filter((function(e){return r.indexOf(e)<0}));return o.length?(this.options.preload=r.concat(o),this.loadResources((function(e){n.resolve(),t&&t(e)})),n):(t&&t(),Promise.resolve())}},{key:"dir",value:function(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";var t=this.services&&this.services.languageUtils||new Z(fe());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(t.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:he,o=me(me(me({},this.options),t),{isClone:!0}),a=new n(o);void 0===t.debug&&void 0===t.prefix||(a.logger=a.logger.clone(t));return["store","services","language"].forEach((function(t){a[t]=e[t]})),a.services=me({},this.services),a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a.translator=new W(a.services,a.options),a.translator.on("*",(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];a.emit.apply(a,[e].concat(n))})),a.init(o,r),a.translator.options=a.options,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(b);m(Me,"createInstance",(function(){return new Me(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}));var je=Me.createInstance();je.createInstance=Me.createInstance;je.createInstance,je.dir,je.init,je.loadResources,je.reloadResources,je.use,je.changeLanguage,je.getFixedT,je.t,je.exists,je.setDefaultNamespace,je.hasLoadedNamespace,je.loadNamespaces,je.loadLanguages;var ve=n(8416),Ne=(n(215),n(8698));n(1739);Object.create(null);function we(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var Ie={};function be(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&Ie[t[0]]||("string"==typeof t[0]&&(Ie[t[0]]=new Date),we.apply(void 0,t))}var De=function(e,t){return function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}};function Le(e,t,n){e.loadNamespaces(t,De(e,n))}function xe(e,t,n,r){"string"==typeof n&&(n=[n]),n.forEach((function(t){e.options.ns.indexOf(t)<0&&e.options.ns.push(t)})),e.loadLanguages(t,De(e,r))}var Ae=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Ce={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Oe=function(e){return Ce[e]};function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(n),!0).forEach((function(t){ve(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Te={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(Ae,Oe)}};var ke,ze=n(6690),Qe=n(9728);var Pe={type:"3rdParty",init:function(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Te=Ee(Ee({},Te),e)}(e.options.react),function(e){ke=e}(e)}};var Ue=(0,r.createContext)(),Ye=function(){function e(){ze(this,e),this.usedNamespaces={}}return Qe(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();var Be=n(7424);function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(n),!0).forEach((function(t){ve(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function He(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,o=(0,r.useContext)(Ue)||{},a=o.i18n,i=o.defaultNS,s=n||a||ke;if(s&&!s.reportNamespaces&&(s.reportNamespaces=new Ye),!s){be("You will need to pass in an i18next instance by using initReactI18next");var c=function(e,t){return"string"==typeof t?t:t&&"object"===Ne(t)&&"string"==typeof t.defaultValue?t.defaultValue:Array.isArray(e)?e[e.length-1]:e},u=[c,{},!1];return u.t=c,u.i18n={},u.ready=!1,u}s.options.react&&void 0!==s.options.react.wait&&be("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=Ve(Ve(Ve({},Te),s.options.react),t),g=l.useSuspense,f=l.keyPrefix,d=e||i||s.options&&s.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(d);var p=(s.isInitialized||s.initializedStoreOnce)&&d.every((function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0!==t.options.ignoreJSONStructure?t.hasLoadedNamespace(e,{lng:n.lng,precheck:function(t,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],o=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e)||!t.hasResourceBundle(r,e)&&t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages)&&(!i(r,e)||o&&!i(a,e)))}(e,t,n):(be("i18n.languages were undefined or empty",t.languages),!0)}(e,s,l)}));function m(){return s.getFixedT(t.lng||null,"fallback"===l.nsMode?d:d[0],f)}var y=(0,r.useState)(m),h=Be(y,2),M=h[0],j=h[1],v=d.join();t.lng&&(v="".concat(t.lng).concat(v));var N,w,I,b=(N=v,I=(0,r.useRef)(),(0,r.useEffect)((function(){I.current=w?I.current:N}),[N,w]),I.current),D=(0,r.useRef)(!0);(0,r.useEffect)((function(){var e=l.bindI18n,n=l.bindI18nStore;function r(){D.current&&j(m)}return D.current=!0,p||g||(t.lng?xe(s,t.lng,d,(function(){D.current&&j(m)})):Le(s,d,(function(){D.current&&j(m)}))),p&&b&&b!==v&&D.current&&j(m),e&&s&&s.on(e,r),n&&s&&s.store.on(n,r),function(){D.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,r)})),n&&s&&n.split(" ").forEach((function(e){return s.store.off(e,r)}))}}),[s,v]);var L=(0,r.useRef)(!0);(0,r.useEffect)((function(){D.current&&!L.current&&j(m),L.current=!1}),[s,f]);var x=[M,s,p];if(x.t=M,x.i18n=s,x.ready=p,p)return x;if(!p&&!g)return x;throw new Promise((function(e){t.lng?xe(s,t.lng,d,(function(){return e()})):Le(s,d,(function(){return e()}))}))}var Ge=JSON.parse('{"translation":{"cert":{"title":"My certifications"},"header":{"title1":"About me","title2":"My proyects","title3":"My certifications","title4":"Contact me"},"hero":{"h1":"Hey, I\'m Hugo","p1":"+5 years of experience developing and working in e-commerce.","strong1":"Engineer in Information and Communication Technologies","p2":" from Nayarit, Mexico","p3":"My most notable experience is in","strong2":"Salesforce B2C","p4":"where I have worked on several projects that were successfully launched, and I also have some certifications.","button1":"My Github","button2":"My LinkedIn"},"terminal":{"npx":"Welcome!","text":"Discover my journey in programming.","textSM":"Explore my coding journey."},"projects":{"title":"My Projects","cash":"This was my first project after graduating from university. The project was called CCTPOS and involved a CRM in PHP using the CodeIgniter framework, customized according to the clients\' needs. My work included creating templates, fixing small bugs related to site administration, and making minor designs for the mobile version. It was my first experience with a real project.","changeUp":"When I had the opportunity to work on the ChangeUp project, a donation cartridge for Salesforce, it was already completed. However, it had a series of bugs in the Business Manager (BM) and unusual issues when adding donations. I focused on fixing these problems by debugging to identify the causes and generating a fix. The issues in the BM were mainly due to JavaScript events, which I also analyzed and resolved.","darwing":"This was my first project in B2C Salesforce, called Darwin’s, where I learned a lot about the platform. My initial work involved setting up the sandboxes with the initial products and cartridges. Over time, I was responsible for modifying styles and customizing the site according to the client\'s needs. I particularly remember the implementation of Authorize.net, for which there was no existing cartridge, so I was assigned the task of researching how it worked and developing one from scratch. Despite the learning curve, I successfully created and implemented my first cartridge.","delta":"In the Delta project, there was an issue with the custom payment method due to misuse by users. The client requested the implementation of a cartridge to increase the security of the payment method. I investigated how the original cartridge worked and implemented a user tracking and blocking system. After its implementation, I was informed that the solution worked and the issues on the site were reduced.","foley":"The Foley project was my first job on the HubSpot platform. I was responsible for following the provided designs and creating the requested component structure, ensuring that the final design matched the specifications. I also performed a migration of pages from a sandbox (STG) to production using the HubSpot API, with scripts that I created in Python. Additionally, I migrated the site’s blog to the new design, which was only possible through these migrations.","making":"This was my third project in B2C Salesforce, in which I was involved from the first line of code to its launch. My main tasks included following the client\'s designs and implementing the requested cartridges. The project required a unique payment method that wasn\'t available among the existing cartridges at the time, so I researched and implemented it. I also handled the integration with the CRM to synchronize orders between the CRM and B2C. Additionally, I implemented a chat that was injected via JavaScript and managed from the CRM.","soriana":"I wasn\'t officially involved in this project, but several colleagues asked for my help with implementations and bugs, which made me feel part of the team. I ended up participating more than I had imagined and learned a lot about OCAPI, which was necessary for the project\'s mobile application and required several customizations. I also helped with implementing some custom discounts. Although I didn\'t receive official recognition or payment, I knew my code was implemented, albeit without my name. I did it for the love of the craft and to support my friends, which was rewarded with a beer in their company.","ylightning":"In this B2C Salesforce project, the client wanted their site to be faster. My tasks included reducing the size of JavaScript files and optimizing image loading. We modified Webpack to decrease file sizes and implemented techniques such as lazy loading images and scroll events to prevent full site loads. This resulted in a 20 to 25-second improvement in load time, which was well received by the client, who congratulated us on the achievement.","jbl":"I participated in the JBL project to migrate from SiteGenesis to B2C, where I integrated and adapted various cartridges, created new styles for the site, and implemented payment methods such as Apple Pay, Adyen, and PayPal. I also researched and replicated pipeline customizations in B2C and adapted old jobs. I worked on key integrations, such as the CRM with B2C and the OMS, as well as the integration of SAP, resolving issues with SOAP requests. Before the launch, I was responsible for migrating data between production sites using scripts. It was a challenging project where I learned a lot and it was successful.","harman":"I worked on the Harman site, which shared an instance with JBL. The biggest challenge of the project was that not all cartridges were shared and there were peculiar variations, such as VIP users. In this project, I implemented the new site design, resolved several bugs that arose from integrating the cartridges with customizations, and worked to avoid conflicts with other sites. Although JBL and Harman were similar, they were not identical.","link":{"cash":"Cash project","changeUp":"ChangeUp project","darwing":"Darwing project","delta":"Delta project","foley":"Foley project","making":"MakingCosmetics project","soriana":"Soriana project","ylightning":"Ylightning project","jbl":"JBL project","harman":"Harman project"},"alt":{"cash":"Image of the Cash project","changeUp":"Image of the ChangeUp project","darwing":"Image of the Darwing project","delta":"Image of the Delta project","foley":"Image of the Foley project","making":"Image of the MakingCosmetics project","soriana":"Image of the Soriana project","ylightning":"Image of the Ylightning project","jbl":"Image of the JBL project","harman":"Image of the Harman project"},"note":{"text1":"Note: ","text2":"These are not all the projects I have worked on, but they are the ones I consider important for my professional development."}},"contact":{"title":"Get in Touch","body":"Have a project in mind? Need technical help or advice? Looking to collaborate on something exciting? Let\'s connect.","label1":"Name: ","label2":"Email: ","label3":"Message: ","button":"Send message"},"alert":{"correct":"Your message has been successfully sent.","titleCorrect":"Successfully.","titleError":"Error!","error":"Your message could not be sent. Please try again later or reach out through one of the other social networks."}}}'),Fe=JSON.parse('{"translation":{"cert":{"title":"Mis certificaciones"},"header":{"title1":"Quien soy","title2":"Mis proyectos","title3":"mis certificaciones","title4":"Contactame"},"hero":{"h1":"Hey, soy Hugo","p1":"+5 años de experiencia desarrollando y trabajando en e-commerce.","strong1":"Ingeniero en Tecnologías de la Información y la Comunicación ","p2":"de Nayarit, México","p3":"Mi experiencia mas destacable es sobre","strong2":"Salesforce B2C","p4":" en donde cuanto con varios proyectos que se lanzaron exitosamente y tambien cuento con algunas certificationes.","button1":"Mi Github","button2":"Mi LinkedIn"},"terminal":{"npx":"¡Bienvenido! ","text":"Descubre mi trayectoria en programación.","textSM":"Mi viaje en código."},"projects":{"title":"Mis proyectos","cash":"Este fue mi primer proyecto después de salir de la universidad. El proyecto se llamaba CCTPOS y consistía en un CRM en PHP utilizando el framework CodeIgniter, personalizado según las necesidades de los clientes. Mi trabajo consistió en crear templates, solucionar pequeños bugs relacionados con la administración del sitio y realizar pequeños diseños para la versión móvil. Fue mi primer acercamiento a un proyecto real","changeUp":"Cuando tuve la oportunidad de trabajar en el proyecto ChangeUp, un cartucho para donaciones en Salesforce, ya estaba completado. Sin embargo, presentaba una serie de bugs en el Business Manager (BM) y problemas inusuales al agregar donaciones. Me dediqué a solucionar estos problemas, haciendo debug para identificar la causa y generando un fix. Los problemas en el BM se debían principalmente a eventos de JavaScript, los cuales también analicé y resolví.","darwing":"Este fue mi primer proyecto en B2C Salesforce, llamado Darwin’s, donde aprendí mucho sobre la plataforma. Mi trabajo inicial consistió en configurar las sandbox con los productos y cartuchos iniciales. Con el tiempo, me encargué de modificar estilos y personalizar el sitio según las necesidades del cliente. Recuerdo especialmente la implementación de Authorize.net, para la cual no existía un cartucho, por lo que me asignaron la tarea de investigar cómo funcionaba y desarrollar uno desde cero. A pesar de la curva de aprendizaje, logré crear e implementar exitosamente mi primer cartucho.","delta":"En el proyecto de Delta, había un problema con el método de pago personalizado debido a un uso indebido por parte de los usuarios. El cliente solicitó la implementación de un cartucho para aumentar la seguridad del método de pago. Me encargué de investigar cómo funcionaba el cartucho original y se implementó un sistema de seguimiento y bloqueo de usuarios. Después de su implementación, me informaron que la solución funcionó y que los problemas en el sitio disminuyeron.","foley":"El proyecto de Foley fue mi primer trabajo en la plataforma de HubSpot. Me encargué de seguir los diseños proporcionados y de crear la estructura de componentes solicitada, asegurando que el diseño final coincidiera con lo solicitado. También realicé una migración de páginas desde una sandbox (STG) a producción mediante la API de HubSpot, utilizando scripts que generé en Python. Además, migré el blog del sitio al nuevo diseño, lo cual solo fue posible mediante estas migraciones","making":"Este fue mi tercer proyecto en B2C Salesforce, en el que estuve involucrado desde la primera línea de código hasta su lanzamiento. Mi principal trabajo consistió en seguir los diseños del cliente e implementar los cartuchos solicitados. El proyecto requería un método de pago peculiar que no existía entre los cartuchos disponibles en ese momento, por lo que investigué y lo implementé. También realicé la integración con el CRM para sincronizar las órdenes entre el CRM y B2C. Además, implementé un chat que se inyectaba mediante JavaScript y se gestionaba desde el CRM.","soriana":"En este proyecto no estuve oficialmente involucrado, pero varios compañeros me pedían ayuda con implementaciones y bugs, lo que hizo que me sintiera parte del equipo. Terminé participando más de lo que imaginaba, y aprendí mucho sobre OCAPI, que era necesario para la aplicación móvil del proyecto y requería varias personalizaciones. También colaboré en la implementación de algunos descuentos personalizados. Aunque no recibí reconocimiento oficial ni pago, supe que mi código se implementó, aunque sin mi nombre. Lo hice por amor al arte y por apoyar a mis amigos, lo cual fue recompensado con una cerveza en su compañía.","ylightning":"En este proyecto de B2C Salesforce, el cliente quería que su sitio fuera más rápido. Mis tareas incluían reducir el tamaño de los archivos JavaScript y optimizar la carga de imágenes. Modificamos el Webpack para disminuir el tamaño de los archivos e implementamos técnicas como imágenes lazy y eventos de scroll para evitar cargas completas del sitio. Esto resultó en una mejora de entre 20 y 25 segundos en el tiempo de carga, lo cual fue muy bien recibido por el cliente, quien nos felicitó por el logro.","jbl":"Participé en el proyecto de JBL para migrar de SiteGenesis a B2C, donde integré y adapté varios cartuchos, creé nuevos estilos para el sitio e implementé métodos de pago como Apple Pay, Adyen y PayPal. También investigué y repliqué personalizaciones de pipelines en B2C, y adapté jobs antiguos. Trabajé en integraciones clave, como la del CRM con B2C y el OMS, así como en la integración de SAP, resolviendo problemas con solicitudes SOAP. Antes del lanzamiento, me encargué de migrar datos entre sitios de producción mediante scripts. Fue un proyecto desafiante, en el que aprendí mucho y que resultó exitoso.","harman":"Trabajé en el sitio de Harman, que compartía instancia con JBL. El mayor desafío del proyecto fue que no todos los cartuchos se compartían y había variaciones peculiares, como los usuarios VIP. En este proyecto, implementé el nuevo diseño del sitio, resolví varios bugs que surgieron al integrar los cartuchos con las personalizaciones y trabajé en evitar conflictos con los otros sitios. Aunque JBL y Harman eran similares, no eran idénticos.","link":{"cash":"Proyecto Cash","changeUp":"Proyecto ChangeUp","darwing":"Proyecto Darwing","delta":"Proyecto Delta","foley":"Proyecto Foley","making":"Proyecto MakingCosmetics","soriana":"Proyecto Soriana","ylightning":"Proyecto Ylightning","jbl":"Proyecto JBL","harman":"Proyecto Harman"},"alt":{"cash":"Imagen del proyecto Cash","changeUp":"Imagen del proyecto ChangeUp","darwing":"Imagen del proyecto Darwing","delta":"Imagen del proyecto Delta","foley":"Imagen del proyecto Foley","making":"Imagen del proyecto MakingCosmetics","soriana":"Imagen del proyecto Soriana","ylightning":"Imagen del proyecto Ylightning","jbl":"Imagen del proyecto JBL","harman":"Imagen del proyecto Harman"},"note":{"text1":"Nota: ","text2":"No son todos los proyectos en los que he trabajado, pero son los que considero fueron importantes para mi desarrollo profesional."}},"contact":{"title":"Ponte en contacto","body":"¿Tienes un proyecto en mente? ¿Necesitas ayuda técnica o asesoramiento? ¿Buscas colaborar en algo emocionante? Conectemos.","label1":"Nombre:","label2":"Email:","label3":"Mensaje:","button":"Enviar mensaje"},"alert":{"correct":"Tu mensaje ha sido enviado exitosamente.","titleCorrect":"Enviado exitosamente.","titleError":"¡Error!","error":"Tu mensaje no pudo ser enviado. Por favor, inténtalo de nuevo más tarde o comunícate a través de alguna de las otras redes sociales."}}}'),We=n(6261);var Je=()=>{const{0:e,1:t}=(0,r.useState)((()=>"undefined"!=typeof window&&"dark"===localStorage.getItem("theme")));return(0,r.useEffect)((()=>{"undefined"!=typeof window&&(e?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")))}),[e]),(0,r.useEffect)((()=>{if("undefined"!=typeof window){const n=window.matchMedia("(prefers-color-scheme: dark)");!e&&n.matches&&"y"!==localStorage.getItem("changeTheme")&&t(n.matches);const r=e=>t(e.matches);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)}}),[]),r.createElement(r.Fragment,null,r.createElement("label",{className:"theme-switch"},r.createElement("input",{type:"checkbox",className:"theme-switch__checkbox",checked:e,onChange:()=>t(!e),onClick:()=>localStorage.setItem("changeTheme","y"),autoComplete:"dark",id:"check-theme",name:"check-theme"}),r.createElement("div",{className:"theme-switch__container"},r.createElement("div",{className:"theme-switch__clouds"}),r.createElement("div",{className:"theme-switch__stars-container"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 144 55",fill:"none"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z",fill:"currentColor"}))),r.createElement("div",{className:"theme-switch__circle-container"},r.createElement("div",{className:"theme-switch__sun-moon-container"},r.createElement("div",{className:"theme-switch__moon"},r.createElement("div",{className:"theme-switch__spot"}),r.createElement("div",{className:"theme-switch__spot"}),r.createElement("div",{className:"theme-switch__spot"})))))))};const Ze=[{label:"🇪🇸 Español",code:"es"},{label:"🇺🇸 English",code:"en"}];var Ke=()=>{const{i18n:e,t:t}=He(),{0:n,1:o}=(0,r.useState)(!1);return r.createElement("header",{className:"nav"},r.createElement("nav",{className:"bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-md"},r.createElement("div",{className:"2xl:max-w-screen-2xl xl:max-w-screen-xl lgC:max-w-screen-lg-custom mdC:max-w-screen-md-custom  flex flex-wrap items-center justify-between mx-auto p-2"},r.createElement("div",{className:"flex items-center"},r.createElement(Je,null)),r.createElement("div",{className:"flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"},r.createElement("select",{defaultValue:e.language,onChange:t=>{const n=t.target.value;e.changeLanguage(n)},className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","aria-label":"Select your country",autoComplete:"en",name:"country"},Ze.map((e=>{let{code:t,label:n}=e;return r.createElement("option",{key:t,value:t},n)}))),r.createElement("button",{"data-collapse-toggle":"navbar-sticky",type:"button",className:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-sticky","aria-expanded":"false",onClick:()=>o(!n)},r.createElement("span",{className:"sr-only"},"Open main menu"),r.createElement("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 1h15M1 7h15M1 13h15"})))),r.createElement("div",{className:(n?"":"hidden")+" md:flex space-x-4 items-center justify-between  w-full md:flex md:w-auto md:order-1",id:"navbar-sticky"},r.createElement("ul",{className:"flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 dark:text-white"},r.createElement("li",null,r.createElement(We.rU,{activeClass:"active",smooth:!0,spy:!0,to:"about",href:"#"},t("header.title1"))),r.createElement("li",null,r.createElement(We.rU,{activeClass:"active",smooth:!0,spy:!0,to:"projects",href:"#"},t("header.title2"))),r.createElement("li",null,r.createElement(We.rU,{activeClass:"active",smooth:!0,spy:!0,to:"certifications",href:"#"},t("header.title3"))),r.createElement("li",null,r.createElement(We.rU,{activeClass:"active",smooth:!0,spy:!0,to:"contact",href:"#"},t("header.title4"))))))))};var Xe=()=>{const{t:e}=He();return r.createElement("div",{className:"card_terminal"},r.createElement("div",{className:"wrap_terminal"},r.createElement("div",{className:"terminal"},r.createElement("hgroup",{className:"head_terminal"},r.createElement("p",{className:"title_terminal"},r.createElement("svg",{width:"16px",height:"16px","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2",stroke:"currentColor",fill:"none"},r.createElement("path",{d:"M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"})),"Terminal")),r.createElement("div",{className:"body_terminal"},r.createElement("pre",{className:"pre_terminal"},"          ",r.createElement("code",null,"- "),r.createElement("code",null,e("terminal.npx")," "),r.createElement("code",{className:"cmd","data-cmd":e("terminal.text"),"data-cmd-sm":e("terminal.textSM")}))))))},qe=n(5893);var _e=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})),this.tags=[],this.ctr=0},e}(),$e=Math.abs,et=String.fromCharCode,tt=Object.assign;function nt(e){return e.trim()}function rt(e,t,n){return e.replace(t,n)}function ot(e,t){return e.indexOf(t)}function at(e,t){return 0|e.charCodeAt(t)}function it(e,t,n){return e.slice(t,n)}function st(e){return e.length}function ct(e){return e.length}function ut(e,t){return t.push(e),e}var lt=1,gt=1,ft=0,dt=0,pt=0,mt="";function yt(e,t,n,r,o,a,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:lt,column:gt,length:i,return:""}}function ht(e,t){return tt(yt("",null,null,"",null,null,0),e,{length:-e.length},t)}function Mt(){return pt=dt>0?at(mt,--dt):0,gt--,10===pt&&(gt=1,lt--),pt}function jt(){return pt=dt<ft?at(mt,dt++):0,gt++,10===pt&&(gt=1,lt++),pt}function vt(){return at(mt,dt)}function Nt(){return dt}function wt(e,t){return it(mt,e,t)}function It(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bt(e){return lt=gt=1,ft=st(mt=e),dt=0,[]}function Dt(e){return mt="",e}function Lt(e){return nt(wt(dt-1,Ct(91===e?e+2:40===e?e+1:e)))}function xt(e){for(;(pt=vt())&&pt<33;)jt();return It(e)>2||It(pt)>3?"":" "}function At(e,t){for(;--t&&jt()&&!(pt<48||pt>102||pt>57&&pt<65||pt>70&&pt<97););return wt(e,Nt()+(t<6&&32==vt()&&32==jt()))}function Ct(e){for(;jt();)switch(pt){case e:return dt;case 34:case 39:34!==e&&39!==e&&Ct(pt);break;case 40:41===e&&Ct(e);break;case 92:jt()}return dt}function Ot(e,t){for(;jt()&&e+pt!==57&&(e+pt!==84||47!==vt()););return"/*"+wt(t,dt-1)+"*"+et(47===e?e:jt())}function St(e){for(;!It(vt());)jt();return wt(e,dt)}var Et="-ms-",Tt="-moz-",kt="-webkit-",zt="comm",Qt="rule",Pt="decl",Ut="@keyframes";function Yt(e,t){for(var n="",r=ct(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Bt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Pt:return e.return=e.return||e.value;case zt:return"";case Ut:return e.return=e.value+"{"+Yt(e.children,r)+"}";case Qt:e.value=e.props.join(",")}return st(n=Yt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Rt(e){return Dt(Vt("",null,null,null,[""],e=bt(e),0,[0],e))}function Vt(e,t,n,r,o,a,i,s,c){for(var u=0,l=0,g=i,f=0,d=0,p=0,m=1,y=1,h=1,M=0,j="",v=o,N=a,w=r,I=j;y;)switch(p=M,M=jt()){case 40:if(108!=p&&58==at(I,g-1)){-1!=ot(I+=rt(Lt(M),"&","&\f"),"&\f")&&(h=-1);break}case 34:case 39:case 91:I+=Lt(M);break;case 9:case 10:case 13:case 32:I+=xt(p);break;case 92:I+=At(Nt()-1,7);continue;case 47:switch(vt()){case 42:case 47:ut(Gt(Ot(jt(),Nt()),t,n),c);break;default:I+="/"}break;case 123*m:s[u++]=st(I)*h;case 125*m:case 59:case 0:switch(M){case 0:case 125:y=0;case 59+l:-1==h&&(I=rt(I,/\f/g,"")),d>0&&st(I)-g&&ut(d>32?Ft(I+";",r,n,g-1):Ft(rt(I," ","")+";",r,n,g-2),c);break;case 59:I+=";";default:if(ut(w=Ht(I,t,n,u,l,o,s,j,v=[],N=[],g),a),123===M)if(0===l)Vt(I,t,w,w,v,a,g,s,N);else switch(99===f&&110===at(I,3)?100:f){case 100:case 108:case 109:case 115:Vt(e,w,w,r&&ut(Ht(e,w,w,0,0,o,s,j,o,v=[],g),N),o,N,g,s,r?v:N);break;default:Vt(I,w,w,w,[""],N,0,s,N)}}u=l=d=0,m=h=1,j=I="",g=i;break;case 58:g=1+st(I),d=p;default:if(m<1)if(123==M)--m;else if(125==M&&0==m++&&125==Mt())continue;switch(I+=et(M),M*m){case 38:h=l>0?1:(I+="\f",-1);break;case 44:s[u++]=(st(I)-1)*h,h=1;break;case 64:45===vt()&&(I+=Lt(jt())),f=vt(),l=g=st(j=I+=St(Nt())),M++;break;case 45:45===p&&2==st(I)&&(m=0)}}return a}function Ht(e,t,n,r,o,a,i,s,c,u,l){for(var g=o-1,f=0===o?a:[""],d=ct(f),p=0,m=0,y=0;p<r;++p)for(var h=0,M=it(e,g+1,g=$e(m=i[p])),j=e;h<d;++h)(j=nt(m>0?f[h]+" "+M:rt(M,/&\f/g,f[h])))&&(c[y++]=j);return yt(e,t,n,0===o?Qt:s,c,u,l)}function Gt(e,t,n){return yt(e,t,n,zt,et(pt),it(e,2,-2),0)}function Ft(e,t,n,r){return yt(e,t,n,Pt,it(e,0,r),it(e,r+1,-1),r)}var Wt=function(e,t,n){for(var r=0,o=0;r=o,o=vt(),38===r&&12===o&&(t[n]=1),!It(o);)jt();return wt(e,dt)},Jt=function(e,t){return Dt(function(e,t){var n=-1,r=44;do{switch(It(r)){case 0:38===r&&12===vt()&&(t[n]=1),e[n]+=Wt(dt-1,t,n);break;case 2:e[n]+=Lt(r);break;case 4:if(44===r){e[++n]=58===vt()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=et(r)}}while(r=jt());return e}(bt(e),t))},Zt=new WeakMap,Kt=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Zt.get(n))&&!r){Zt.set(e,!0);for(var o=[],a=Jt(t,o),i=n.props,s=0,c=0;s<a.length;s++)for(var u=0;u<i.length;u++,c++)e.props[c]=o[s]?a[s].replace(/&\f/g,i[u]):i[u]+" "+a[s]}}},Xt=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function qt(e,t){switch(function(e,t){return 45^at(e,0)?(((t<<2^at(e,0))<<2^at(e,1))<<2^at(e,2))<<2^at(e,3):0}(e,t)){case 5103:return kt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return kt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return kt+e+Tt+e+Et+e+e;case 6828:case 4268:return kt+e+Et+e+e;case 6165:return kt+e+Et+"flex-"+e+e;case 5187:return kt+e+rt(e,/(\w+).+(:[^]+)/,kt+"box-$1$2"+Et+"flex-$1$2")+e;case 5443:return kt+e+Et+"flex-item-"+rt(e,/flex-|-self/,"")+e;case 4675:return kt+e+Et+"flex-line-pack"+rt(e,/align-content|flex-|-self/,"")+e;case 5548:return kt+e+Et+rt(e,"shrink","negative")+e;case 5292:return kt+e+Et+rt(e,"basis","preferred-size")+e;case 6060:return kt+"box-"+rt(e,"-grow","")+kt+e+Et+rt(e,"grow","positive")+e;case 4554:return kt+rt(e,/([^-])(transform)/g,"$1"+kt+"$2")+e;case 6187:return rt(rt(rt(e,/(zoom-|grab)/,kt+"$1"),/(image-set)/,kt+"$1"),e,"")+e;case 5495:case 3959:return rt(e,/(image-set\([^]*)/,kt+"$1$`$1");case 4968:return rt(rt(e,/(.+:)(flex-)?(.*)/,kt+"box-pack:$3"+Et+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+kt+e+e;case 4095:case 3583:case 4068:case 2532:return rt(e,/(.+)-inline(.+)/,kt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(st(e)-1-t>6)switch(at(e,t+1)){case 109:if(45!==at(e,t+4))break;case 102:return rt(e,/(.+:)(.+)-([^]+)/,"$1"+kt+"$2-$3$1"+Tt+(108==at(e,t+3)?"$3":"$2-$3"))+e;case 115:return~ot(e,"stretch")?qt(rt(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==at(e,t+1))break;case 6444:switch(at(e,st(e)-3-(~ot(e,"!important")&&10))){case 107:return rt(e,":",":"+kt)+e;case 101:return rt(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+kt+(45===at(e,14)?"inline-":"")+"box$3$1"+kt+"$2$3$1"+Et+"$2box$3")+e}break;case 5936:switch(at(e,t+11)){case 114:return kt+e+Et+rt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return kt+e+Et+rt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return kt+e+Et+rt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return kt+e+Et+e+e}return e}var _t=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Pt:e.return=qt(e.value,e.length);break;case Ut:return Yt([ht(e,{value:rt(e.value,"@","@"+kt)})],r);case Qt:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Yt([ht(e,{props:[rt(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return Yt([ht(e,{props:[rt(t,/:(plac\w+)/,":"+kt+"input-$1")]}),ht(e,{props:[rt(t,/:(plac\w+)/,":-moz-$1")]}),ht(e,{props:[rt(t,/:(plac\w+)/,Et+"input-$1")]})],r)}return""}))}}],$t=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,o,a=e.stylisPlugins||_t,i={},s=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)i[t[n]]=!0;s.push(e)}));var c,u,l,g,f=[Bt,(g=function(e){c.insert(e)},function(e){e.root||(e=e.return)&&g(e)})],d=(u=[Kt,Xt].concat(a,f),l=ct(u),function(e,t,n,r){for(var o="",a=0;a<l;a++)o+=u[a](e,t,n,r)||"";return o});o=function(e,t,n,r){c=n,Yt(Rt(e?e+"{"+t.styles+"}":t.styles),d),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new _e({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:o};return p.sheet.hydrate(s),p};function en(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var tn=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},nn=function(e,t,n){tn(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+r:"",o,e.sheet,!0),o=o.next}while(void 0!==o)}};var rn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function on(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var an=!1,sn=/[A-Z]|^ms/g,cn=/_EMO_([^_]+?)_([^]*?)_EMO_/g,un=function(e){return 45===e.charCodeAt(1)},ln=function(e){return null!=e&&"boolean"!=typeof e},gn=on((function(e){return un(e)?e:e.replace(sn,"-$&").toLowerCase()})),fn=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(cn,(function(e,t,n){return mn={name:t,styles:n,next:mn},t}))}return 1===rn[e]||un(e)||"number"!=typeof t||0===t?t:t+"px"},dn="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function pn(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var o=n;if(1===o.anim)return mn={name:o.name,styles:o.styles,next:mn},o.name;var a=n;if(void 0!==a.styles){var i=a.next;if(void 0!==i)for(;void 0!==i;)mn={name:i.name,styles:i.styles,next:mn},i=i.next;return a.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=pn(e,t,n[o])+";";else for(var a in n){var i=n[a];if("object"!=typeof i){var s=i;null!=t&&void 0!==t[s]?r+=a+"{"+t[s]+"}":ln(s)&&(r+=gn(a)+":"+fn(a,s)+";")}else{if("NO_COMPONENT_SELECTOR"===a&&an)throw new Error(dn);if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var c=pn(e,t,i);switch(a){case"animation":case"animationName":r+=gn(a)+":"+c+";";break;default:r+=a+"{"+c+"}"}}else for(var u=0;u<i.length;u++)ln(i[u])&&(r+=gn(a)+":"+fn(a,i[u])+";")}}return r}(e,t,n);case"function":if(void 0!==e){var s=mn,c=n(e);return mn=s,pn(e,t,c)}}var u=n;if(null==t)return u;var l=t[u];return void 0!==l?l:u}var mn,yn=/label:\s*([^\s;\n{]+)\s*(;|$)/g;function hn(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,o="";mn=void 0;var a=e[0];null==a||void 0===a.raw?(r=!1,o+=pn(n,t,a)):o+=a[0];for(var i=1;i<e.length;i++){if(o+=pn(n,t,e[i]),r)o+=a[i]}yn.lastIndex=0;for(var s,c="";null!==(s=yn.exec(o));)c+="-"+s[1];var u=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(o)+c;return{name:u,styles:o,next:mn}}var Mn=!!o.useInsertionEffect&&o.useInsertionEffect,jn=Mn||function(e){return e()},vn=(Mn||r.useLayoutEffect,r.createContext("undefined"!=typeof HTMLElement?$t({key:"css"}):null)),Nn=(vn.Provider,function(e){return(0,r.forwardRef)((function(t,n){var o=(0,r.useContext)(vn);return e(t,o,n)}))}),wn=r.createContext({});var In={}.hasOwnProperty,bn="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Dn=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return tn(t,n,r),jn((function(){return nn(t,n,r)})),null},Ln=Nn((function(e,t,n){var o=e.css;"string"==typeof o&&void 0!==t.registered[o]&&(o=t.registered[o]);var a=e[bn],i=[o],s="";"string"==typeof e.className?s=en(t.registered,i,e.className):null!=e.className&&(s=e.className+" ");var c=hn(i,void 0,r.useContext(wn));s+=t.key+"-"+c.name;var u={};for(var l in e)In.call(e,l)&&"css"!==l&&l!==bn&&(u[l]=e[l]);return u.className=s,n&&(u.ref=n),r.createElement(r.Fragment,null,r.createElement(Dn,{cache:t,serialized:c,isStringTag:"string"==typeof a}),r.createElement(a,u))})),xn=(n(434),n(8679),qe.Fragment);function An(e,t,n){return In.call(t,"css")?qe.jsx(Ln,function(e,t){var n={};for(var r in t)In.call(t,r)&&(n[r]=t[r]);return n[bn]=e,n}(e,t),n):qe.jsx(e,t,n)}function Cn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return hn(t)}var On=function(){var e=Cn.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Sn=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var a=t[r];if(null!=a){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=e(a);else for(var s in i="",a)a[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=a}i&&(o&&(o+=" "),o+=i)}}return o};var En=function(e){var t=e.cache,n=e.serializedArr;return jn((function(){for(var e=0;e<n.length;e++)nn(t,n[e],!1)})),null},Tn=Nn((function(e,t){var n=[],o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var a=hn(r,t.registered);return n.push(a),tn(t,a,!1),t.key+"-"+a.name},a={css:o,cx:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e,t,n){var r=[],o=en(e,r,n);return r.length<2?n:o+t(r)}(t.registered,o,Sn(n))},theme:r.useContext(wn)},i=e.children(a);return!0,r.createElement(r.Fragment,null,r.createElement(En,{cache:t,serializedArr:n}),i)})),kn=Object.defineProperty,zn=(e,t,n)=>((e,t,n)=>t in e?kn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!=typeof t?t+"":t,n),Qn=new Map,Pn=new WeakMap,Un=0,Yn=void 0;function Bn(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(n=e.root,n?(Pn.has(n)||(Un+=1,Pn.set(n,Un.toString())),Pn.get(n)):"0"):e[t]}`;var n})).toString()}function Rn(e,t,n={},r=Yn){if(void 0===window.IntersectionObserver&&void 0!==r){const o=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:a,elements:i}=function(e){const t=Bn(e);let n=Qn.get(t);if(!n){const r=new Map;let o;const a=new IntersectionObserver((t=>{t.forEach((t=>{var n;const a=t.isIntersecting&&o.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(n=r.get(t.target))||n.forEach((e=>{e(a,t)}))}))}),e);o=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},Qn.set(t,n)}return n}(n),s=i.get(e)||[];return i.has(e)||i.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(i.delete(e),a.unobserve(e)),0===i.size&&(a.disconnect(),Qn.delete(o))}}var Vn=class extends r.Component{constructor(e){super(e),zn(this,"node",null),zn(this,"_unobserveCb",null),zn(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),zn(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!=typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:a}=this.props;this._unobserveCb=Rn(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},a)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"==typeof e){const{inView:t,entry:n}=this.state;return e({inView:t,entry:n,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:o,root:a,rootMargin:i,onChange:s,skip:c,trackVisibility:u,delay:l,initialInView:g,fallbackInView:f,...d}=this.props;return r.createElement(t||"div",{ref:this.handleNode,...d},e)}};function Hn({threshold:e,delay:t,trackVisibility:n,rootMargin:o,root:a,triggerOnce:i,skip:s,initialInView:c,fallbackInView:u,onChange:l}={}){var g;const[f,d]=r.useState(null),p=r.useRef(),[m,y]=r.useState({inView:!!c,entry:void 0});p.current=l,r.useEffect((()=>{if(s||!f)return;let r;return r=Rn(f,((e,t)=>{y({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&i&&r&&(r(),r=void 0)}),{root:a,rootMargin:o,threshold:e,trackVisibility:n,delay:t},u),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,f,a,o,i,s,n,u,t]);const h=null==(g=m.entry)?void 0:g.target,M=r.useRef();f||!h||i||s||M.current===h||(M.current=h,y({inView:!!c,entry:void 0}));const j=[d,m.inView,m.entry];return j.ref=j[0],j.inView=j[1],j.entry=j[2],j}var Gn=n(4954);On`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,On`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,On`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,On`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,On`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,On`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,On`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,On`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,On`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,On`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,On`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,On`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,On`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Fn=On`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Wn=On`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Jn=On`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Zn=On`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Kn=On`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Xn=On`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qn=On`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_n=On`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$n=On`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,er=On`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tr=On`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nr=On`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,rr=On`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function or(e,t){return n=>n?e():t()}function ar(e){return or(e,(()=>null))}function ir(e){return ar((()=>({opacity:0})))(e)}const sr=e=>{const{cascade:t=!1,damping:n=.5,delay:o=0,duration:a=1e3,fraction:i=0,keyframes:s=Xn,triggerOnce:c=!1,className:u,style:l,childClassName:g,childStyle:f,children:d,onVisibilityChange:p}=e,m=(0,r.useMemo)((()=>function({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Xn,iterationCount:o=1}){return Cn`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:s,duration:a})),[a,s]);return function(e){return null==e}(d)?null:"string"==typeof(y=d)||"number"==typeof y||"boolean"==typeof y?An(ur,{...e,animationStyles:m,children:String(d)}):(0,Gn.isFragment)(d)?An(lr,{...e,animationStyles:m}):An(xn,{children:r.Children.map(d,((s,d)=>{if(!(0,r.isValidElement)(s))return null;const y=o+(t?d*a*n:0);switch(s.type){case"ol":case"ul":return An(Tn,{children:({cx:t})=>An(s.type,{...s.props,className:t(u,s.props.className),style:Object.assign({},l,s.props.style),children:An(sr,{...e,children:s.props.children})})});case"li":return An(Vn,{threshold:i,triggerOnce:c,onChange:p,children:({inView:e,ref:t})=>An(Tn,{children:({cx:n})=>An(s.type,{...s.props,ref:t,className:n(g,s.props.className),css:ar((()=>m))(e),style:Object.assign({},f,s.props.style,ir(!e),{animationDelay:y+"ms"})})})});default:return An(Vn,{threshold:i,triggerOnce:c,onChange:p,children:({inView:e,ref:t})=>An("div",{ref:t,className:u,css:ar((()=>m))(e),style:Object.assign({},l,ir(!e),{animationDelay:y+"ms"}),children:An(Tn,{children:({cx:e})=>An(s.type,{...s.props,className:e(g,s.props.className),style:Object.assign({},f,s.props.style)})})})})}}))});var y},cr={display:"inline-block",whiteSpace:"pre"},ur=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:a=1e3,fraction:i=0,triggerOnce:s=!1,className:c,style:u,children:l,onVisibilityChange:g}=e,{ref:f,inView:d}=Hn({triggerOnce:s,threshold:i,onChange:g});return or((()=>An("div",{ref:f,className:c,style:Object.assign({},u,cr),children:l.split("").map(((e,n)=>An("span",{css:ar((()=>t))(d),style:{animationDelay:o+n*a*r+"ms"},children:e},n)))})),(()=>An(lr,{...e,children:l})))(n)},lr=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:a,children:i,onVisibilityChange:s}=e,{ref:c,inView:u}=Hn({triggerOnce:r,threshold:n,onChange:s});return An("div",{ref:c,className:o,css:ar((()=>t))(u),style:Object.assign({},a,ir(!u)),children:i})};On`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,On`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,On`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,On`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,On`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,On`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,On`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,On`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,On`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,On`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const gr=On`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,fr=On`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,dr=On`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,pr=On`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,mr=On`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,yr=On`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,hr=On`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Mr=On`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,jr=On`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,vr=On`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Nr=On`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,wr=On`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Ir=On`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const br=e=>{const{big:t=!1,direction:n,reverse:o=!1,...a}=e,i=(0,r.useMemo)((()=>function(e,t,n){switch(n){case"bottom-left":return t?fr:Wn;case"bottom-right":return t?dr:Jn;case"down":return e?t?mr:Kn:t?pr:Zn;case"left":return e?t?hr:qn:t?yr:Xn;case"right":return e?t?jr:$n:t?Mr:_n;case"top-left":return t?vr:er;case"top-right":return t?Nr:tr;case"up":return e?t?Ir:rr:t?wr:nr;default:return t?gr:Fn}}(t,o,n)),[t,n,o]);return An(sr,{keyframes:i,...a})};On`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,On`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,On`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,On`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,On`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;On`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,On`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,On`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,On`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;On`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,On`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,On`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,On`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,On`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,On`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,On`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,On`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,On`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,On`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const Dr=On`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Lr=On`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,xr=On`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ar=On`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Cr=On`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Or=On`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Sr=On`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Er=On`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;const Tr=e=>{const{direction:t,reverse:n=!1,...o}=e,a=(0,r.useMemo)((()=>function(e,t){switch(t){case"down":return e?Cr:Dr;case"right":return e?Sr:xr;case"up":return e?Er:Ar;default:return e?Or:Lr}}(n,t)),[t,n]);return An(sr,{keyframes:a,...o})};On`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,On`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,On`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,On`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,On`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,On`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,On`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,On`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,On`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,On`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;var kr=()=>{const{t:e}=He();return r.createElement("div",{className:"w-full text-start "},r.createElement("div",{className:"2xl:max-w-screen-2xl xl:max-w-screen-xl  sm:max-w-screen-sm md:max-w-screen-sm lgC:max-w-screen-lg-custom mdC:max-w-screen-md-custom justify-between md:mx-auto items-center m-4"},r.createElement("div",{className:"w-12/12"},r.createElement(Tr,{cascade:!0,damping:.1,direction:"down",triggerOnce:!0},r.createElement("h1",{className:"text-5xl font-bold font-Onest mt-6 dark:text-white"},e("hero.h1")))),r.createElement("div",{className:"flex gap-4 flex-wrap  xl:flex-nowrap"},r.createElement("div",{className:"xl:w-6/12 w-12/12"},r.createElement(Tr,{cascade:!0,damping:.1,direction:"left",triggerOnce:!0},r.createElement("p",{className:"font-Onest mt-6 text-xl [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-white"},e("hero.p1")," ",r.createElement("strong",null,e("hero.strong1")),e("hero.p2")),r.createElement("p",{className:"font-Onest text-xl [&>strong]:text-blue-500 [&>strong]:font-semibold dark:text-white"},e("hero.p3")," ",r.createElement("strong",null,e("hero.strong2"))," ",e("hero.p4")))),r.createElement("div",{className:"xl:w-6/12 w-full content-center"},r.createElement(Tr,{cascade:!0,damping:.1,direction:"right",triggerOnce:!0},r.createElement(Xe,null))))),r.createElement("div",{className:"2xl:max-w-screen-2xl xl:max-w-screen-xl  md:max-w-screen-sm flex lgC:max-w-screen-lg-custom mdC:max-w-screen-md-custom justify-between md:mx-auto md:mt-6 m-4"},r.createElement(Tr,{cascade:!0,damping:.1,direction:"up",triggerOnce:!0},r.createElement("div",null,r.createElement("a",{href:"https://github.com/h790",className:"text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#24292F]/80 me-2 mb-2"},r.createElement("svg",{className:"w-4 h-4 me-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},r.createElement("path",{fillRule:"evenodd",d:"M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z",clipRule:"evenodd"})),e("hero.button1")),r.createElement("a",{href:"https://www.linkedin.com/in/hugo-kevin-lara-lopez-80b146195/",className:"text-white bg-[#0077b5] hover:bg-[#0077b5]/90 focus:ring-4 focus:outline-none focus:ring-[#0077b5]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#0077b5]/80 me-2 mb-2 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:me-2"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 448 512"},r.createElement("path",{d:"M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"})),e("hero.button2"))))))};var zr=e=>{const{t:t}=He();return r.createElement("div",{className:"gap-5 m-4"},r.createElement("img",{className:"float-left object-cover rounded-lg relative aspect-w-4 aspect-h-5 sm:aspect-w-16 sm:aspect-h-9 mr-4 "+e.classCustom||0,src:e.img,alt:t(e.alt)||"",style:e.css||{},width:e.width||"auto",height:e.height||"auto",loading:"eager"}),r.createElement("p",null,t(e.text)),r.createElement("a",{href:e.url,className:"text-blue-800 hover:text-blue-900 hover:underline transition duration-300 dark:text-blue-300 dark:hover:text-blue-400"},t(e.textLink)))},Qr=n.p+"static/Darwing-31f6b86eff3b8e6bce1ecbd9b9f96013.svg";const Pr={jbl:{img:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjUyN3B4IiBoZWlnaHQ9IjQ5NnB4IiB2aWV3Qm94PSIwIDAgNTI3IDQ5NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBkYXRhLWVtYmVyLWV4dGVuc2lvbj0iMSI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MSAoNTc0NjIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5sb2dvPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcy8+DQogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlV2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGxSdWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IlN0YXRpYy0vLWxvZ28iPg0KICAgICAgICAgICAgPGcgaWQ9ImxvZ28iPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01MTMuMTIzLDM5OC4wNTIgQzUwNS40NzYsMzk4LjA1MiA0OTkuMjUyLDM5MS44NzkgNDk5LjI1MiwzODQuMjIyIEM0OTkuMjUyLDM3Ni42MTkgNTA1LjQ3NiwzNzAuMzkxIDUxMy4xMjMsMzcwLjM5MSBDNTIwLjc3LDM3MC4zOTEgNTI3LDM3Ni42MTkgNTI3LDM4NC4yMjIgQzUyNywzOTEuODc5IDUyMC43NywzOTguMDUyIDUxMy4xMjMsMzk4LjA1MiBaIE01MTMuMTIzLDM3My4wMzQgQzUwNi45MDYsMzczLjAzNCA1MDEuODYzLDM3OC4wNDIgNTAxLjg2MywzODQuMjIyIEM1MDEuODYzLDM5MC40NDkgNTA2LjkwNiwzOTUuNDY0IDUxMy4xMjMsMzk1LjQ2NCBDNTE5LjM1MywzOTUuNDY0IDUyNC4zODMsMzkwLjQ0OSA1MjQuMzgzLDM4NC4yMjIgQzUyNC4zODMsMzc4LjA0MiA1MTkuMzUzLDM3My4wMzQgNTEzLjEyMywzNzMuMDM0IFogTTUxNi42NTUsMzkyLjA0MiBMNTEyLjcxNiwzODUuMzIgTDUxMC40MjUsMzg1LjMyIEw1MTAuNDI1LDM5Mi4wNDIgTDUwNy44MTUsMzkyLjA0MiBMNTA3LjgxNSwzNzYuMzk1IEw1MTMuNjE4LDM3Ni4zOTUgQzUxNy40ODIsMzc2LjM5NSA1MTkuNTU3LDM3Ny42ODkgNTE5LjU1NywzODAuOTgzIEM1MTkuNTU3LDM4My44MjIgNTE3Ljc2NywzODQuOTQ3IDUxNS4zMzMsMzg1LjIwNCBMNTE5LjY1OCwzOTIuMDQyIEw1MTYuNjU1LDM5Mi4wNDIgWiBNNTE2LjkxOSwzODAuNzU5IEM1MTYuOTE5LDM3OC44OTYgNTE1LjE1LDM3OC41NSA1MTMuNjE4LDM3OC41NSBMNTEwLjQyNSwzNzguNTUgTDUxMC40MjUsMzgzLjE1MSBMNTEzLjU3LDM4My4xNTEgQzUxNS40MTQsMzgzLjE1MSA1MTYuOTE5LDM4Mi44ODcgNTE2LjkxOSwzODAuNzU5IFogTTAsMCBMNDg1LjcxMywwIEw0ODUuNzEzLDM5Ny42MzEgTDAsMzk3LjYzMSBMMCwwIFogTTMuNjI5LDQ3MS43OTQgQzUuNDUzLDQ2OS45ODQgNy4xMjcsNDY4LjkyMSA5LjkyNyw0NjguOTIxIEMxNC41MjMsNDY4LjkyMSAxNy43MTYsNDcyLjQ2NCAxNy43MTYsNDc3LjU0IEMxNy43MTYsNDgzLjQ4MyAxMy44NTksNDg3LjI5OCA3Ljk0Nyw0ODcuMjk4IEM1Ljg0Niw0ODcuMjk4IDQuMTMxLDQ4Ni45MDUgMS43NTgsNDg1Ljk2MyBMMS43NTgsNDYwLjEwNCBMMy42MjksNDYwLjEwNCBMMy42MjksNDcxLjc5NCBaIE0zLjYyOSw0ODQuNjI4IEM1LjE4MSw0ODUuMjE4IDYuNTQ0LDQ4NS40NDggNy45MDcsNDg1LjQ0OCBDMTIuNDYyLDQ4NS40NDggMTUuNzMsNDgyLjE4MiAxNS43Myw0NzcuNjU1IEMxNS43Myw0NzMuNDg4IDEzLjIwMSw0NzAuNDkzIDkuNjk2LDQ3MC40OTMgQzcuNTIsNDcwLjQ5MyA1LjczMSw0NzEuNTE2IDMuNjI5LDQ3My45MjEgTDMuNjI5LDQ4NC42MjggWiBNMjIuMTg4LDQ2OS4yNzQgTDI4LjUzMyw0ODEuNjM0IEwzNC41NjcsNDY5LjI3NCBMMzYuNDcyLDQ2OS4yNzQgTDIzLjM5NSw0OTYgTDIxLjQ5LDQ5NiBMMjcuNTk4LDQ4My41MjUgTDIwLjI0Miw0NjkuMjc0IEwyMi4xODgsNDY5LjI3NCBaIE02My43MTMsNDU0LjY3NiBMOTQuNTkzLDQ1NC42NzYgTDk0LjU5Myw0MjcuNzk0IEwxMDcuMTAxLDQyNy43OTQgTDEwNy4xMDEsNDg4LjMyNyBMMTAyLjMwOCw0ODguMzI3IEMxMDEuNTg5LDQ4OC4zMjcgMTAwLjgwMyw0ODguMjUzIDk5LjkwOCw0ODguMDk3IEM5OC45ODYsNDg3LjkyOCA5OC4xMzgsNDg3LjYxNiA5Ny4zNjYsNDg3LjE1NSBDOTYuNTczLDQ4Ni42ODEgOTUuOTAxLDQ4Ni4wMTcgOTUuMzczLDQ4NS4xNzYgQzk0Ljg0NCw0ODQuMzA5IDk0LjU3OSw0ODMuMTg0IDk0LjU3OSw0ODEuODE1IEw5NC41OTMsNDYwLjEwNCBMNjMuNzEzLDQ2MC4xMDQgTDYzLjcxMyw0ODguMzI3IEw1MS4yMTIsNDg4LjMyNyBMNTEuMjEyLDQyNy43OTQgTDYzLjcxMyw0MjcuNzk0IEw2My43MTMsNDU0LjY3NiBaIE0xNTQuNTMyLDQyNi40NDkgTDE4NS44MTksNDg4LjMyNCBMMTc4LjExNyw0ODguMzI0IEMxNzYuMjE5LDQ4OC4zMjQgMTc0LjY1Myw0ODcuOTc4IDE3My40NTMsNDg3LjE5OSBDMTcyLjI2LDQ4Ni40NCAxNzEuMjQzLDQ4NS4yIDE3MC40MjksNDgzLjUxOSBMMTYzLjIyMyw0NjkuMDc5IEwxNDAuNDQ0LDQ2OS4wNzkgTDE0My42MTcsNDYyLjkwNiBMMTYwLjA3Nyw0NjIuOTA2IEwxNDkuODI3LDQ0Mi41NTYgTDEyNi4xMDYsNDg4LjMxNyBMMTE4LjgwNSw0ODguMzE3IEwxNTAuODcxLDQyNi40NDkgTDE1NC41MzIsNDI2LjQ0OSBaIE0yMzYuMTkzLDQzMC43NzIgQzI0Mi4zODksNDMzLjkxIDI0NS4wMTMsNDM4LjMyMSAyNDUuMDEzLDQ0My45MTIgQzI0NS4wMTMsNDQ5LjUwOSAyNDEuNzA1LDQ1Ni4xMDkgMjI5Ljg0OCw0NTkuNDI5IEwyNTMuNzMxLDQ4OC4zMTcwMTYgTDI0NC4xNTIsNDg4LjMxNyBDMjQ0LjE1Miw0ODguMzE3IDI0Mi4xMzgsNDg4LjMzMSAyMzkuNzkzLDQ4Ny41MjQgQzIzNy40NDcsNDg2LjcxOCAyMzQuOTEyLDQ4My40NjUgMjM0LjkxMiw0ODMuNDY1IEwyMTYuNDc5LDQ2MC42NDkgTDIxMC4wNzIsNDYwLjY0OSBMMjEwLjA3Miw0ODguMzEgTDE5Ny41NzEsNDg4LjMxIEwxOTcuNTcxLDQyNy43ODQgTDIyMC41MTksNDI3Ljc4NCBDMjIwLjUxOSw0MjcuNzg0IDIyOS45OSw0MjcuNjM1IDIzNi4xOTMsNDMwLjc3MiBaIE0yMTAuMDM4LDQzMy4xMDMgTDIxMC4wMzgsNDU2LjAzNSBMMjE1LjgyMSw0NTYuMDM1IEMyMTUuODIxLDQ1Ni4wMzUgMjIxLjU2Myw0NTYuMTIzIDIyNS4yOTIsNDUzLjk2MSBDMjI5LjAyNyw0NTEuNzk5IDIzMS42NjUsNDQ4Ljc5MSAyMzEuNjY1LDQ0NC4yOTggQzIzMS42NjUsNDM5LjgwNSAyMjguODE3LDQzNS44MjEgMjI0Ljc5LDQzNC4yNDkgQzIyNC43OSw0MzQuMjQ5IDIyMi40ODUsNDMzLjEwMyAyMTguMzc3LDQzMy4xMDMgTDIxMC4wMzgsNDMzLjEwMyBaIE0zMDIuMjY0LDQ3Mi42MjQgTDMyNi43Myw0MjcuNzkyIEwzMzguOTYxLDQyNy43OTIgTDMzOC45NjEsNDg4LjMyNSBMMzM0LjE2OCw0ODguMzI1IEMzMzMuNDM1LDQ4OC4zMjUgMzMyLjY0OSw0ODguMjM3IDMzMS43NjEsNDg4LjA4OCBDMzMwLjg1Miw0ODcuOTI1IDMyOS45OTgsNDg3LjYwNyAzMjkuMjE4LDQ4Ny4xNDYgQzMyOC40MjUsNDg2LjY2NSAzMjcuNzU0LDQ4NS45OTQgMzI3LjIzOSw0ODUuMTYxIEMzMjYuNzAzLDQ4NC4zIDMyNi40MTksNDgzLjE3NSAzMjYuNDE5LDQ4MS44MDYgTDMyNi40MTksNDQxLjc0NCBMMzAwLjg0LDQ4OC4zMjUgTDI5Ny41NzksNDg4LjMyNSBMMjcxLjMxNiw0NDEuMzc4IEwyNzEuMzE2LDQ4OC4zMjUgTDI2NC45MzcsNDg4LjMyNSBMMjY0LjkzNyw0MjcuNzkyIEwyNzcuMzE2LDQyNy43OTIgTDMwMi4yNjQsNDcyLjYyNCBaIE0zODYuMTE2LDQyNi40NDcgTDQxNy4zNjksNDg4LjMyMiBMNDA5LjczNSw0ODguMzIyIEM0MDcuODM3LDQ4OC4zMjIgNDA2LjI2NCw0ODcuOTcgNDA1LjA2NCw0ODcuMTkgQzQwMy44NzgsNDg2LjQzMSA0MDIuODYxLDQ4NS4xOTEgNDAyLjA0OCw0ODMuNTExIEwzODEuNDA0LDQ0Mi41NjEgTDM3MC44NzYsNDYyLjkwNCBMMzg3LjI1NSw0NjIuOTA0IEwzOTAuMzk0LDQ2OS4wNzcgTDM2Ny42OSw0NjkuMDc3IEwzNTcuNzQ1LDQ4OC4zMjkgTDM1MC40MzYsNDg4LjMyOSBMMzgyLjQ0OSw0MjYuNDQ3IEwzODYuMTE2LDQyNi40NDcgWiBNNDc4LjU0MSw0NzAuMTI5IEw0NzguNTQxLDQzMS4xMDQgQzQ3OC41NDEsNDMwLjQyIDQ3OC42ODMsNDI5LjgzNyA0NzguOTYxLDQyOS4zODMgQzQ3OS4yMTksNDI4Ljk2MyA0NzkuNTcxLDQyOC42MTcgNDc5Ljk5MSw0MjguMzYgQzQ4MC4zNzgsNDI4LjEyOSA0ODAuODA1LDQyNy45NzMgNDgxLjI1Miw0MjcuODg1IEM0ODEuNjkzLDQyNy44MTggNDgyLjA2Niw0MjcuNzkgNDgyLjQwNSw0MjcuNzkgTDQ4NS43MDcsNDI3Ljc5IEw0ODUuNzA3LDQ4OC4zMjQgTDQ4NC44MzgsNDg4LjMyNCBDNDgyLjUyNyw0ODguMzI0IDQ4MC4xNDcsNDg4LjQ1MyA0NzguNDE5LDQ4Ni44MiBMNDM2LjE5LDQ0Mi42ODUgTDQzNi4xOSw0ODguMzI0IEw0MjguODk2LDQ4OC4zMjQgTDQyOC44OTYsNDI3Ljc5IEw0MzYuOTIyLDQyNy43OSBMNDc4LjU0MSw0NzAuMTI5IFoiIGlkPSJCYWNrIiBmaWxsPSIjRkYzMzAwIi8+DQogICAgICAgICAgICAgICAgPGcgaWQ9IkpCTCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTkuMDAwMDAwLCAxMTUuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMTguNzE0LDE2Ni42NjcgTDMwMS44ODMsMTY2LjY2NyBMMzAxLjg4MywxMTMuNjQyIEwyNzQuNDI3LDExMy42NDIgTDI3NC40NDcsMTQyLjYzMSBDMjc0LjQ0NywxNTAuNDA0IDI2OC4xMTUsMTU2LjczMyAyNjAuMzA1LDE1Ni43MzMgQzI1Mi41MDIsMTU2LjczMyAyNDYuMTYzLDE1MC40MDQgMjQ2LjE2MywxNDIuNjMxIEwyNDYuMTYzLDAuMTQ0IEwyMTguNzE0LDAuMTQ0IEwyMTguNzE0LDE2Ni42NjcgWiIgaWQ9IlBhdGgiLz4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExNi40MjcsMTY2LjY2NyBMMTE2LjQyNywwLjE0NCBMMTcxLjMwNiwwLjE0NCBDMTgxLjg5NSwwLjE0NCAxOTguNzQyLDguODM4IDE5OC43NDIsMjcuMjc3IEwxOTguNzQyLDU1LjY0MyBDMTk4Ljc0Miw2My45MzcgMTkxLjQ2OCw3OC42MzUgMTgwLjY2MSw3OC42MzUgQzE5MS40NjgsNzguNjM1IDE5OC43NDIsODcuOTQ2IDE5OC43NDIsOTUgTDE5OC43NDIsMTQ0LjkxNSBDMTk4Ljc0MiwxNTMuNDA1IDE5MS44ODgsMTY2LjY2NyAxNzEuMzA2LDE2Ni42NjcgTDExNi40MjcsMTY2LjY2NyBaIE0xNTguODMyLDcxLjgzOCBDMTY4LjgxMSw3MS44MzggMTcxLjMwNiw3MC4xNTggMTcxLjMwNiw0NC4wNTUgQzE3MS4zMDYsMTcuOTU5IDE2OC44MTEsMTUuODc5IDE1OC44MzIsMTUuODc5IEwxNDMuODQzLDE1Ljg3OSBMMTQzLjg0Myw3MS43OTggTDE1OC44MzIsNzEuODM4IFogTTE3MS4zMDYsMTE5LjY0NiBDMTcxLjMwNiw5My41MzYgMTcxLjMwNiw4NS44OTIgMTYwLjQ3Miw4NS44OTIgTDE0My44NDMsODUuODkyIEwxNDMuODQzLDE1Mi45ODUgTDE2MC40NzIsMTUzLjAxOSBDMTcxLjMwNiwxNTMuMDE5IDE3MS4zMDYsMTQ1LjczNSAxNzEuMzA2LDExOS42NDYgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIi8+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi40NDYsMTM3LjY2NCBDMTIuNDQ2LDE0OS42NzIgMjMuMjU5LDE2OS4xNCA1NC4wMjMsMTY5LjE0IEM4NC43OTUsMTY5LjE0IDk1LjYxNSwxNTQuMjQ2IDk1LjYxNSwxMzcuNjY0IEw5NS42MTUsMC4xNDQgTDY4LjE1OCwwLjE0NCBMNjguMTcyLDE0Mi40NDEgQzY4LjE3MiwxNTAuMjE0IDYxLjg1MywxNTYuNzMzIDU0LjA0NCwxNTYuNzMzIEM0Ni4yMjcsMTU2LjczMyAzOS44OTUsMTUwLjQwNCAzOS44OTUsMTQyLjYzMSBMMzkuODc1LDExMy42NDIgTDEyLjQ0NiwxMTMuNjQyIEwxMi40NDYsMTM3LjY2NCBaIiBpZD0iUGF0aCIvPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjYuMTY3LDk1LjUwMSBDMzQuOTI2LDk1LjUwMSA0Mi4wNDQsODguNDA2IDQyLjA0NCw3OS42ODUgQzQyLjA0NCw3MC45MjMgMzQuOTI2LDYzLjg1NiAyNi4xNjcsNjMuODU2IEMxNy4zODEsNjMuODU2IDEwLjI4Myw3MC45MjMgMTAuMjgzLDc5LjY4NSBDMTAuMjgzLDg4LjQwNiAxNy4zODEsOTUuNTAxIDI2LjE2Nyw5NS41MDEgWiIgaWQ9IlBhdGgiLz4NCiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMjYuMTY3IDU3LjcxNiA1MS41MjkgMC4xNDQgMC43OTkgMC4xNDQiLz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=",url:"https://www.jbl.com/",text:"projects.jbl",alt:"projects.alt.jbl",textLink:"projects.link.jbl",css:{fontDisplay:"swap"},classCustom:"w-20",height:"76px",width:"80px"},harman:{img:n.p+"static/harman-08d85a171eb6e83443d24ed062405223.svg",url:"https://www.harmanaudio.com",text:"projects.harman",alt:"projects.alt.harman",textLink:"projects.link.harman",classCustom:"w-20 dark:bg-white",height:"76px",width:"88px"},cash:{img:"data:image/webp;base64,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",url:"https://www.cctpos.com/",text:"projects.cash",alt:"projects.alt.cash",textLink:"projects.link.cash",classCustom:"w-20",height:"76px",width:"88px"},changeUp:{img:"data:image/png;base64,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",url:"https://appexchange.salesforce.com/appxListingDetail?listingId=81c55759-0c38-40a8-aed4-6d759d2c826d",text:"projects.changeUp",alt:"projects.alt.changeUp",textLink:"projects.link.changeUp",classCustom:"w-20",height:"76px",width:"88px"},darwing:{img:Qr,url:"https://www.darwinspet.com/",text:"projects.darwing",alt:"projects.alt.darwing",textLink:"projects.link.darwing",classCustom:"w-40 dark:bg-yellow-50",height:"40px",width:"147px"},delta:{img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTQ3IiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTQ3IDQwIj4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNLjA0Mi4xNDloMTQ2LjUwMXYzOS40OEguMDQzeiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbFJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnPgogICAgICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0MxMUU0MyIgZD0iTTE0Ni41NDMgMzEuNzNjMCA0LjM2Mi0zLjY1IDcuODk4LTguMTU3IDcuODk4SDguMTU1QzMuNjUxIDM5LjYyOCAwIDM2LjA5MiAwIDMxLjczMVY4LjA0NUMwIDMuNjgyIDMuNjUxLjE0OSA4LjE1NS4xNDloMTMwLjIzYzQuNTA3IDAgOC4xNTggMy41MzMgOC4xNTggNy44OTZWMzEuNzMiIG1hc2s9InVybCgjYikiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZmlsbD0iIzFBMTkxOSIgZD0iTTMzLjQ5NCAxOS41MzNjMCA3LjcwNy02LjI0OSAxMy45NTUtMTMuOTU3IDEzLjk1NS03LjcwNiAwLTEzLjk1NS02LjI0OC0xMy45NTUtMTMuOTU1IDAtNy43MDUgNi4yNDktMTMuOTUyIDEzLjk1NS0xMy45NTIgNy43MDggMCAxMy45NTcgNi4yNDcgMTMuOTU3IDEzLjk1MiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkZGRkUiIGQ9Ik00NC4yIDcuNDg4bC0zLjI2LjA0LS4wMDMuMjI2djIxLjkyOGwyLjU3Ny4wMzkgMy40NzkuMDQ2YzguNDQxIDAgMTMuNDgyLTQuMjUgMTMuNDgyLTExLjM3IDAtNy4yNjktNC4xNzEtMTAuOTU1LTEyLjM5Ni0xMC45NTVsLTMuODc4LjA0NnptMy4zNTcgMi41YzYuMzI1IDAgOS41MzIgMi44OTggOS41MzIgOC42MTYgMCA1LjUwMy0zLjQ2MiA4LjUzNC05Ljc0OCA4LjUzNC0uOTQyIDAtMi4zMDMtLjAzOS0zLjE0Ny0uMTA3VjEwLjA5OWE1NC4wNCA1NC4wNCAwIDAgMSAzLjM2My0uMTEyek03OS45MyA3LjQ0Mkg2Ni45ODd2MjIuMzI1aDEzLjAyNlYyNy4xNkg3MC40di03LjY1M0g3OS42di0yLjUyMkg3MC40di02Ljk4aDkuNjEzVjcuNDQyaC0uMDgzTTg5Ljc1NyA3LjQ0MmgtMy4yMzJ2MjIuMzI1SDk4LjYydi0yLjY1aC04Ljc4M1Y3LjQ0M2gtLjA4TTExNy4xNDUgNy40NDJIOTkuNTUxdjIuNjQ4aDcuMTQydjE5LjY3N2gzLjM0OFYxMC4wOWg3LjE4N1Y3LjQ0MmgtLjA4M00xMjguNjY4IDcuNDQyaC0zLjI2NmwtOS4xMDUgMjIuMzI1aDMuMjk1czIuMDItNC45OTEgMi4wNTYtNS4wODhoMTAuNDgxbDIuMDE2IDUuMDg4aDMuNTUxbC04Ljk3NC0yMi4zMjVoLS4wNTR6bS0xLjc1IDMuNjk2YTkwLjI5OCA5MC4yOTggMCAwIDAgMS4xNjQgMy4yNTlsMy4wNSA3Ljc2aC04LjQ4M2wzLjA4OC03LjcxNWMuNDI3LTEuMDYuODIxLTIuMTcyIDEuMTgtMy4zMDR6TTE0MC41NTcgMzAuNjk4bC0uNDc4LS42NzZjLS4wNC0uMDYtLjA5NC0uMTMtLjEzOC0uMTkyLjI5LS4wMTcuNTEzLS4xOTYuNTEzLS41MjYgMC0uMzQ1LS4yMjMtLjQ2Ny0uNTIyLS40NjctLjE2OSAwLS4yNzQuMDA0LS4zNzUuMDF2MS44NWguMTgydi0uODU0aC4wMDdsLjU3Ny44NTVoLjIzNHptLS4yOS0xLjM2M2MwIC4yMDUtLjE0LjM1Mi0uMzg1LjM1Mi0uMDcxIDAtLjExNi0uMDA0LS4xNDMtLjAwN3YtLjY2NmMuMDQ4LS4wMDYuMDkzLS4wMS4xNTMtLjAxLjI0MyAwIC4zNzUuMDg4LjM3NS4zM3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGRkZFIiBkPSJNMTM4Ljc3OCAyOS4zMDVhMS4yNDQgMS4yNDQgMCAxIDEgMS4yNDQgMS4yNDIgMS4yNDUgMS4yNDUgMCAwIDEtMS4yNDQtMS4yNDJ6bS0uMTUxIDBhMS4zOTUgMS4zOTUgMCAxIDAgMi43OS0uMDA1IDEuMzk1IDEuMzk1IDAgMCAwLTIuNzkuMDA1ek0xMi4xMjUgMjcuOTA3bDEyLjk5NS0uMDA1cy0xMC45NTUtNS44MjgtMTEuMjUtNS45ODlhNC4zMTIgNC4zMTIgMCAwIDAtMS0uNDAzYy0xLjkxNC0uNDcyLTMuODc1LjU1LTQuMzc3IDIuMjg1LS41MDQgMS43MzUuNjM2IDMuNTI0IDIuNTUyIDMuOTk2LjM2LjA5LjczLjExMyAxLjA4LjExNiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkZGRkUiIGQ9Ik0zMC4xODcgMjMuMzQ0TDI0LjE5IDEyLjA5M3MuMDA1IDEyLjY0Ny4wMDMgMTIuOTljLS4wMDMuMzU3LjAyMS43Mi4xMTMgMS4wODEuNDcxIDEuOTE2IDIuMjYyIDMuMDU3IDMuOTk1IDIuNTU1IDEuNzM2LS41MDUgMi43Ni0yLjQ2NCAyLjI4Ni00LjM4YTQuMzY3IDQuMzY3IDAgMCAwLS40LS45OTVNMTcuNTc5IDkuMzU2Yy0uMTcxLjI5My02LjQxNCAxMS4xMS02LjQxNCAxMS4xMXMxMC44MTQtNi4yNDggMTEuMTA5LTYuNDE1Yy4zMDYtLjE3NC42MDUtLjM3NS44NjYtLjY0IDEuMzgyLTEuMzgyIDEuNDAzLTMuNjA0LjA0My00Ljk2My0xLjM2LTEuMzU3LTMuNTgzLTEuMzQtNC45NjYuMDQyYTQuMTg0IDQuMTg0IDAgMCAwLS42MzguODY2Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=",url:"https://deltafaucet.com/",text:"projects.delta",alt:"projects.alt.delta",textLink:"projects.link.delta",classCustom:"w-40",height:"40px",width:"147px"},foley:{img:"data:image/webp;base64,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",url:"https://www.foleyservices.com/",text:"projects.foley",alt:"projects.alt.foley",textLink:"projects.link.foley",css:{backgroundColor:"#011129",padding:"4px 8px"},classCustom:"w-40",height:"40px",width:"147px"},making:{img:"data:image/webp;base64,UklGRk4JAABXRUJQVlA4WAoAAAAQAAAALwIAYwAAQUxQSNUGAAARDzD/ERHCt7N/biNn23bWlKByIMReJHAJosMOaJYuXYAgCrh2hIPZAfUVZUBoli5dcA6rV752pdoCfMWNqMaVczlzLtOshcCW2tlLEf2fAL6Y6urTwTafDu2nROc/HfpPCd98jtCfGv5TwXgvPiVkRFfB1SfnbyrWBM1pfHk+7X+Tn816fz78C2XMA/o0rffqfCavztZLU55Pl1cJAeYk2sPqfFTduUwF7V1oRUyCPYktwYrzXTnvVaI+ictBc/7eeu9Bf6xgc5JWcReNv/be57H5aeSdcH7vvW/Qj07W3Y3OS++9Rz/KoThJL+5E71VP74V++xP2m7xDe6nfLmHawBgrkbMljLAePHfSm7yVtFLflJAltJjtgs6rhPYSOmkUtMZXzpcrXAM+1ujSqUgFkwZyrDTMuqBiRhNxPgevTD6o89J4GfGysjm91NcVjBN1TOcsdKxlhVHTmIQdKypyK1SkrxpTOi/1dQMqMWfWCUZG8VRixRYjF6aELqFzFo4s5r323ku9b0A26BIrC2adZGQl6CpS4oQV82FGsdnyWCqUeu/RqceYdYqREymdY4UDU0GfsBK2xBNCC48WDWaFlSNm/1aMWsBEjMJIB+sK/p9wAhaJVeTdQESWWDlm9sf8FhKjEh8lWgHLlPXel05o0QsjGuodVkpmr5aMdgOsROfBFTxKMWSH8SURaYgdBLOsuoUYoFMdsBsQBp20NDzVYo/EVgOcgNIJ1t2QHbC9RUtQ0zBvsQ+Dq1PIwLSD2sR2iNrQcOGE/W7QDWuB0irWrRhwFYhYO6BVcxoKJ+xHQStOUAbr1Apwatg2yBeBFdZH5Ki6xco0rJ2sb1HGXGSHFi4vaMistF4wy9wJtBdrJ58aZn1CBMugnCbeDayK6CF4tbZq3ho1QHsZsQNsZGSU/ZNklpl8VOEb3QzpypivUvRq0CqoMhrGgQrKE7hqbfLiFm0ek8EMLUw1oeGezu0x0AG7YSYhGWDLiImUQTOmQQY5s4xqtIIdg2jWusxuoauIjuRooRsVKe0hchXzqRKuTkBCAVoFXtJo70t7KIP+FN1al6PUVWQVIU8xQEa60VXQC8CJSLumGp/ByIigMbCychW0aneae6ldZBebBSLoB1wFTnVBJ2M6B7fmSp5oCtgYNGvYWbkLrGqDVgFWpvoB3bBFQNBBU0e6hGCHy2NGRTqRaiPL2AbYDHgKWivbwCgXKUFfK4yc38YJyFI1sIjsoJnHxCxDKyvZYSswe4WVc7ZrWgZIeCxlgGlkG3M30slZBsrkLNENOHKcqG9jFXWR0gImkQU0RcTGdMkEvOCKGS2W5ZrNAJOzmDOLIUFG5jF7I60KxvRGQZe7kh07jFgN0yWzDXlihBZgBBfQPAb2T9JERrReQOu9wh1KtMrXPEVrVITeKHutErAGtABoMjB/kiYPQOeA8R6MV+BVzFeR1gvtxYCztxLYAS1rGKJLWPL1zFYEGrKMOjCAUakakInDABG711J2VdBFjCCbYlMuT1wMOwpgBJhUt6+6MphENGQZdWrxWKIYdgAYAzohJ8cHTIMxyYyhGSkGyVRSy/HRkp1hckesVH81TCL1zCj3tlHZG/65n6itdBc5Y7b6hcutzvvnjOLbS/ONd61o3yX/46HaYm/u50YueWrIxDa27N51edDmvXCuZEx/88bHnan651zOsXF506r+XVN1L1Qd7Z/erlzuITIOptbNi8mbT02zzNSL6fPCbBYoXnj44m+O9byoF49xvJln+XTywtFuppPx6xTm7fnix0eBHL9lUMG2NsV8bCiyrK6LQkkzD+RDfbi+Xxd1AUdTTFWWyeO8zrLxmMJcbqZGC+TkNzfIwD4wxVwNkNLM5ygt/6YP+2AaKeT4JyI2Ceos0r3gdUQ/NF0lja6ybD5IvLU/7N9uijpL9L8WR9dk2XjKJuIFcqv+p0VAzFZZVtRF8UJkrMXzLxz2jwZMhzjs9WU9iSBrk5oizWaRZdO6KJ4XCfX6Yf8tEvNMjrU4zsmysRH6GABSy40hUSDNfJFlWV0UXWSipfrFYX+fop4GLh+iBb+5rLOYWNiELVCRcV0UO4IMKX8SKwIrZablcTNMgDQUsR/9abN5bPLmfDnNVF0U9yLL6QvP/uKwf8CiXjzG0Vwgp6MXjvapyGO/uawX+gDSMq0j/U3jyu7ovrl81T8sil4Ebd7fvHHYX1fugcs5mjaXreqPpsqyq572eFm73IPcMNlEdnVpcndtHs5jMrBya1447Pe5fWAUR+NKaeXySJll2x3OXNZW7kBecG8eoeaWitMWnP3T6Z48zcX0rvUnavO71nJaK8/3pTYAVlA4IFICAAAwIACdASowAmQAP/3+/3+/v7+7rNW8q/A/iU3cGCTmLvBj5B3K/R3kAP4Bqf+z/5oD8x/W25y0dCnbcWLQnRnEmEMCSJOV2GnbYQwJIooVwxGwLmf5zhefc+KeVjZugNOULzCSjQHCN51LfJ2tO7Q1lnJXTgvSKU3r7fE71rj9FJTwnDFnlk+6wZdSbHa3IW1b3rIEbqM+fbPuxp5oHgPVRGonwiVwd0zMQlF6ZEJ7OEsQygvg3VTmk4dLpP7L8NVKer5o34OXHai4LCxEAb6BeH0eWUZdVo49wREjp5goLAiQZRKsd443G3isQn0ifzdDMUJEI6lqlAGqjaHslugMek+iKjcKa7bWAAD+CBshwyqs2Djj3lUPlhXMb6DsqraP2Q1AAPr84KExB0XxjhPpFzBgcWk/T8waI25vl6nX3UG2b3DiXETF931YzrZoNr92Bhvc8PCIjotRqt0HHVVRYZEB6HGTEMj2v7f6nGh55TWUna8k7Bj0ZNkziLdj8uHRx0FHvyEAhc1VGQbwA6mVTzGzl5zpLuW+byEmdNO9mCQh8xqvg6UDhXU2S2lRvZ7HpUnBxaQGjcHU3PqOjMeTXwLODMrkpsScxkdRG/Ky6YRAyHMgJuIeXFX4nOXLPvgK85jTbSUle2TgLOkdyuAmPjmjRUJVChy/vIsz2c8Jnl+ZuVOdSYgKoA3t8VO2KKvN5dYBq0JZMvVXG7a6ca6P6eC+s18iypud3LIUKhuYd9kFhpX6dossvGT2JCkLEPHDtondvxJZ5sYxgAAAAAAAAAA=",url:"https://www.makingcosmetics.com/",text:"projects.making",alt:"projects.alt.making",textLink:"projects.link.making",classCustom:"w-40  dark:bg-white",height:"40px",width:"147px"},soriana:{img:"data:image/webp;base64,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",url:"https://www.soriana.com/",text:"projects.soriana",alt:"projects.alt.soriana",textLink:"projects.link.soriana",classCustom:"w-40  dark:bg-white",height:"40px",width:"147px"},ylightning:{img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zWGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMDUuOSIgaGVpZ2h0PSI1Ni4wMzEiDQogICAgeG1sbnNWPSJodHRwczovL3ZlY3RhLmlvL25hbm8iPg0KICAgIDxnIGZpbGw9IiMxMDBmMGQiPg0KICAgICAgICA8cGF0aA0KICAgICAgICAgICAgZD0iTTY0LjU3MiAzOC44NDZ2OC4yMjhINjMuNTN2LTguMjI4aC0yLjE4N3YtLjkzN2g1LjUydi45Mzd6bTIuODA3LTEuODc0aDEuMDQxdjVhMi4yNSAyLjI1IDAgMCAxIDEuNjY2LS44MzNjLjY1Mi4wMTQgMS4yNjQuMzE5IDEuNjY2LjgzM2EyLjQ5IDIuNDkgMCAwIDEgLjMxMiAxLjU2MnYzLjUzOGgtMS4wMzZ2LTMuNTM5YTEuMzcgMS4zNyAwIDAgMC0uMzEyLTEuMDQxIDEuMzIgMS4zMiAwIDAgMC0uOTM3LS40MiAxLjQ5IDEuNDkgMCAwIDAtMS4wNDEuNDE3Yy0uMzI5LjQ1LS40NzggMS4wMDgtLjQxNyAxLjU2MnYzLjAyMWgtMS4wNDJ2LTEwLjF6bTExLjg3OCA4LjY0NGE1LjcgNS43IDAgMCAxLS43MjkuOTM3IDIuNTEgMi41MSAwIDAgMS0xLjg3NS43MjkgMi43MyAyLjczIDAgMCAxLTIuODEyLTMuMDIgMi43OSAyLjc5IDAgMCAxIDIuODEyLTMuMDIgMi42IDIuNiAwIDAgMSAyLjE4OCAxLjA0MSA0LjUyIDQuNTIgMCAwIDEgLjUyMSAyLjE4N2gtNC40OGExLjg4IDEuODggMCAwIDAgLjQ3NSAxLjM1N2MuMzMyLjM3MS43OTguNTk1IDEuMjk2LjYyMmExLjQyIDEuNDIgMCAwIDAgMS4xNDYtLjQxNyAxLjYyIDEuNjIgMCAwIDAgLjYyNS0uODMzem0tMS4wNDEtMi4wODNhMS42OCAxLjY4IDAgMCAwLTMuMzMzIDB6bTguNTM5LTUuNjI0Yy43NS0uMDc1IDEuNDk4LjE1IDIuMDgzLjYyNS41NjIuNDU1Ljg3MiAxLjE1My44MzMgMS44NzVhMi4wMiAyLjAyIDAgMCAxLS45MzcgMS43NzEgMi4zNyAyLjM3IDAgMCAxIDEuNzcgMi4yOTEgMi41OCAyLjU4IDAgMCAxLS45MzcgMS45NzkgMy4xIDMuMSAwIDAgMS0yLjE4Ny42MjVoLTIuMjkxdi05LjE2NnptLS42MjUgMy45NThoLjcyOWMuNjA0LjA3NSAxLjE5OC0uMjA1IDEuNTI0LS43MnMuMzI2LTEuMTcxIDAtMS42ODUtLjkxOS0uNzk1LTEuNTI0LS43MmgtLjgzM3YzLjEyNHptMCA0LjI3aDEuMTQ2YTEuOTkgMS45OSAwIDAgMCAxLjU2Mi0uNDE3Yy4zNjctLjMxNy41OTItLjc2Ny42MjUtMS4yNWExLjQ1IDEuNDUgMCAwIDAtLjgzMy0xLjM1NGMtLjQ4Mi0uMjQ2LTEuMDIzLS4zNTQtMS41NjItLjMxMmgtMS4wNDJ2My4zMzN6bTExLjQ1Ny0uNTIxYTUuNyA1LjcgMCAwIDEtLjcyOS45MzcgMi41MSAyLjUxIDAgMCAxLTEuODc1LjcyOSAyLjczIDIuNzMgMCAwIDEtMi44MTItMy4wMiAyLjc5IDIuNzkgMCAwIDEgMi44MTItMy4wMiAyLjYgMi42IDAgMCAxIDIuMTg4IDEuMDQxIDQuNTIgNC41MiAwIDAgMSAuNTIxIDIuMTg3aC00LjQ4Yy0uMDI4LjQ5Ny4xNDMuOTg1LjQ3NSAxLjM1NmExLjg4IDEuODggMCAwIDAgMS4yOTUuNjIzYy40MjUuMDQuODQ2LS4xMTMgMS4xNDYtLjQxN2ExLjYyIDEuNjIgMCAwIDAgLjYyNS0uODMzem0tLjkzNy0yLjA4M2ExLjY4IDEuNjggMCAwIDAtMy4zMzMgMHptNS4zMTEtLjgzM2MtLjExOC0uMzYzLS40NTEtLjYxMy0uODMzLS42MjVhLjY5LjY5IDAgMCAwLS43MjkuNjI1YzAgLjQxNy4zMTIuNTIxLjkzNy44MzMuNTM5LjE3MiAxLjAzNi40NTYgMS40NTguODMzYTEuMzcgMS4zNyAwIDAgMSAuMzEyIDEuMDQxIDEuNzggMS43OCAwIDAgMS0xLjk3OSAxLjg3NSAxLjk2IDEuOTYgMCAwIDEtMS45NzgtMS40NThsLjgzMy0uMzEyYy4xMzUuNTMuNi45MSAxLjE0Ni45MzdhLjkzLjkzIDAgMCAwIC45MzctLjkzN2MwLS41MjEtLjQxNy0uNzI5LS45MzctLjkzN2EzLjAxIDMuMDEgMCAwIDEtMS4zNTQtLjgzMyAxLjM5IDEuMzkgMCAwIDEtLjMxMi0uODMzIDEuNSAxLjUgMCAwIDEgMS42NjYtMS41NjNjLjY4NC0uMDAzIDEuMzAxLjQwOSAxLjU2MiAxLjA0MXptMy45NTctLjQxN3Y0Ljc5MWgtMS4wNDF2LTQuNzkxaC0uNjI1di0uOTM3aC42MjV2LTIuMDgzaDEuMDQxdjIuMDgzaDEuMDQxdi45Mzd6bTYuNDU3LTMuODUzYS43My43MyAwIDEgMS0uNzI5LjcyOS43MS43MSAwIDAgMSAuNzI5LS43Mjl6bS41MjEgMi45MTZ2NS43MjhoLTEuMDQxdi01LjcyOHoiPg0KICAgICAgICA8L3BhdGg+DQogICAgICAgIDx1c2UgeGxpbmtIcmVmPSIjQiI+PC91c2U+DQogICAgICAgIDxwYXRoDQogICAgICAgICAgICBkPSJNMTI1LjYwMiA0Ny4wNzVsMS41NjItOS42ODYgMy41NDEgNy44MTEgMy42NDUtNy44MTEgMS40NTggOS42ODZoLTEuMDQxbC0uODMzLTYuMzUzLTMuMTI1IDYuNzY3LTMuMTI0LTYuNzctLjkzNyA2LjM1M3ptMTIuMDgxLTIuODEzYTMuMDIgMy4wMiAwIDEgMSAzLjAyIDMuMDIgMi45NiAyLjk2IDAgMCAxLTMuMDItMy4wMnptLjkzNyAwYTEuOTggMS45OCAwIDAgMCAyLjk5NSAxLjc5IDEuOTggMS45OCAwIDAgMCAuOTYzLTEuNzljLjA2MS0uNTYtLjEyMS0xLjEyLS40OTktMS41MzhhMS45NyAxLjk3IDAgMCAwLTEuNDgtLjY0OSAyLjAzIDIuMDMgMCAwIDAtMS45NzkgMi4xODd6bTExLjQ1Ny03LjI5aDEuMDQxdjEwLjFoLTEuMDQxdi0uODMzYy0uNDcuNjEzLTEuMjA3Ljk2Mi0xLjk3OS45MzdhMi43OSAyLjc5IDAgMCAxLTIuODEyLTMuMDIgMi43OSAyLjc5IDAgMCAxIDIuODEyLTMuMDIgMi41MiAyLjUyIDAgMCAxIDEuOTc5LjkzN3ptLTMuNzQ5IDcuMTg2YTEuOSAxLjkgMCAxIDAgMy43NDkgMGMuMDc2LS43MTctLjI2NC0xLjQxNS0uODc1LTEuNzk3cy0xLjM4Ny0uMzgyLTEuOTk5IDAtLjk1MSAxLjA4LS44NzUgMS43OTd6bTEyLjA4MSAxLjQ1OGE1LjcgNS43IDAgMCAxLS43MjkuOTM3IDIuNTEgMi41MSAwIDAgMS0xLjg3NS43MjkgMi43MyAyLjczIDAgMCAxLTIuODEyLTMuMDIgMi43OSAyLjc5IDAgMCAxIDIuODEyLTMuMDIgMi42IDIuNiAwIDAgMSAyLjE4NyAxLjA0MSA0LjUyIDQuNTIgMCAwIDEgLjUyMSAyLjE4N2gtNC40NzhhMS44OCAxLjg4IDAgMCAwIC40NzUgMS4zNTdjLjMzMi4zNzEuNzk4LjU5NSAxLjI5Ni42MjJhMS40MiAxLjQyIDAgMCAwIDEuMTQ2LS40MTcgMS42MiAxLjYyIDAgMCAwIC42MjUtLjgzM3ptLS45MzctMi4wODNhMS42OCAxLjY4IDAgMCAwLTMuMzMzIDB6bTIuOTE1LTIuMTkxaDEuMDQxdi42MjVhMS43IDEuNyAwIDAgMSAxLjI1LS43MjkgMS45NiAxLjk2IDAgMCAxIC44MzMuMjA4bC0uNTIxLjkzN2ExLjQ4IDEuNDggMCAwIDAtLjYyNS0uMjA4IDEuNTUgMS41NSAwIDAgMC0uODMzLjMxMmMtLjIwOC4yMDgtLjMxMi42MjUtLjMxMiAxLjU2MnYzLjAyaC0xLjA0MXYtNS43Mjd6Ij4NCiAgICAgICAgPC9wYXRoPg0KICAgICAgICA8dXNlIHhsaW5rSHJlZj0iI0IiIHg9IjQ5LjY3OSI+PC91c2U+DQogICAgICAgIDxwYXRoDQogICAgICAgICAgICBkPSJNMTc2LjYzNCAzNy45MDl2OC4yMjhoMi41di45MzdoLTMuNTQxdi05LjE2NXptNC41ODMuNTIxYS43My43MyAwIDAgMSAuNzI5LjcyOS43My43MyAwIDAgMS0uNzI5LjcyOS43My43MyAwIDAgMS0uNzI5LS43MjljLjAyNi0uMzkxLjMzOC0uNzAzLjcyOS0uNzI5em0uNTIxIDIuOTE2djUuNzI4aC0xLjA0MXYtNS43Mjh6bTIuNjA0IDBsMS42NjYgMy44NTMgMS42NjYtMy44NTNoMS4xNDZsLTIuODEyIDYuMTQ1LTIuODEyLTYuMTQ1em02LjQ1Ny0yLjkxNmEuNzMuNzMgMCAwIDEgLjcyOS43MjkuNzMuNzMgMCAwIDEtLjcyOS43MjkuNzMuNzMgMCAwIDEtLjcyOS0uNzI5LjcxLjcxIDAgMCAxIC43MjktLjcyOXptLjUyMSAyLjkxNnY1LjcyOGgtMS4wNDJ2LTUuNzI4em0yLjI4NiAwaDEuMDQydi42MjVhMi4yNSAyLjI1IDAgMCAxIDEuNjY2LS44MzNjLjY1Mi4wMTQgMS4yNjQuMzE5IDEuNjY2LjgzM2EyLjQ5IDIuNDkgMCAwIDEgLjMxMyAxLjU2MnYzLjU0MWgtMS4wNDF2LTMuNTM2YTEuMzcgMS4zNyAwIDAgMC0uMzEzLTEuMDQxIDEuMzIgMS4zMiAwIDAgMC0uOTM3LS40MTcgMS40OSAxLjQ5IDAgMCAwLTEuMDQxLjQxN2MtLjMyOS40NS0uNDc4IDEuMDA4LS40MTcgMS41NjJ2My4wMmgtMS4wMzh2LTUuNzMzem0xMS4yNTMtLjAwNGgxLjA0MXY1LjYyNGE0LjA0IDQuMDQgMCAwIDEtLjUyMSAyLjI5MSAyLjY5IDIuNjkgMCAwIDEtMi4yOTEgMS4wNDEgMy41MSAzLjUxIDAgMCAxLTIuMDgzLS43MjkgMi40MSAyLjQxIDAgMCAxLS43MjktMS44NzVoLjkzN2MtLjAxMS40MjEuMTM4LjgzLjQxNyAxLjE0NmExLjg3IDEuODcgMCAwIDAgMS4zNTQuNTIxIDEuNjMgMS42MyAwIDAgMCAxLjU2Mi0uODMzIDIuNDggMi40OCAwIDAgMCAuMzEyLTEuNDU4di0uODI4Yy0uNDcuNjEzLTEuMjA3Ljk2Mi0xLjk3OS45MzdhMi44NSAyLjg1IDAgMCAxLTEuOTc5LS43MjkgMy4xMyAzLjEzIDAgMCAxLS44MzMtMi4yOTEgMi44NiAyLjg2IDAgMCAxIC44MzMtMi4xODdjLjUyNy0uNTEyIDEuMjQ2LS43NzcgMS45NzktLjcyOWEyLjQyIDIuNDIgMCAwIDEgMS45NzkuOTM3em0tMy4xMjQgMS4yNWEyLjE3IDIuMTcgMCAwIDAtLjYyNSAxLjU2MmMtLjAzLjYxOC4xOTYgMS4yMi42MjUgMS42NjZhMS43NiAxLjc2IDAgMCAwIDIuNSAwIDIuMiAyLjIgMCAwIDAgLjYyNS0xLjY2NmMuMDM2LS41ODgtLjE5My0xLjE2MS0uNjI1LTEuNTYyYTEuOTIgMS45MiAwIDAgMC0xLjI1LS41MjEgMi4yOCAyLjI4IDAgMCAwLTEuMjUxLjUyNXoiPg0KICAgICAgICA8L3BhdGg+DQogICAgPC9nPg0KICAgIDxwYXRoDQogICAgICAgIGQ9Ik02NC4xNTUgMTUuODN2MTIuMTg1aDQuNTgydjIuNWgtNy4zOTRWMTUuODN6bTEwLjcyNyAwdjE0LjY4NWgtMi45MTZWMTUuODN6bTEyLjE4NSA2Ljc3aDYuNzd2LjIwOGMwIDEuMDQxLS4xIDQuMDYyLTIuMTg3IDYuMDQxLTEuMzg4IDEuMzUtMy4yNzIgMi4wNjYtNS4yMDYgMS45NzlhNy4xIDcuMSAwIDAgMS01LjMxMi0xLjk3OSA3LjkgNy45IDAgMCAxLTIuMTg4LTUuNjI0IDcuMTMgNy4xMyAwIDAgMSAyLjE4Ny01LjQxNmMxLjUzOS0xLjU0NSAzLjY1My0yLjM3NSA1LjgzMi0yLjI5MWE4LjE3IDguMTcgMCAwIDEgMy40MzcuNzI5IDYuNzMgNi43MyAwIDAgMSAyLjcwOCAyLjcwOGwtMi41IDEuMzU0YTQuMDYgNC4wNiAwIDAgMC0xLjc3LTEuNzcxIDQuNjcgNC42NyAwIDAgMC0yLjA4My0uNDE3IDUuMzggNS4zOCAwIDAgMC0zLjQzNyAxLjI1IDUuNDMgNS40MyAwIDAgMC0xLjQ1OCAzLjg1M2MtLjA1MyAxLjM5OC40NzQgMi43NTUgMS40NTggMy43NDlhNC40MyA0LjQzIDAgMCAwIDMuMjI5IDEuMjUgNS44OSA1Ljg5IDAgMCAwIDIuOTE2LS44MzMgMy4zMyAzLjMzIDAgMCAwIDEuMzU0LTIuMjkxaC0zLjc1di0yLjV6bTEzLjU0LTEuMTQ2aDYuMjQ5di01LjcyOGgyLjkxNnYxNC42ODVoLTIuOTE2di02LjQ1N2gtNi4yNDl2Ni41NjFoLTIuOTE2VjE1LjgyNmgyLjkxNnptMTguNDM0LTMuMjI4djEyLjE4NWgtMi45MTZWMTguMjI2aC0zLjMzM3YtMi41aDkuNDc3djIuNXptOS4yNjktMi4zOTZ2MTQuNjg1aC0yLjkxNlYxNS44M3ptNC42ODcgMTQuNjg1VjE1LjgzaDEuOTc5bDguOTU3IDkuNzl2LTkuNzloMi45MTZ2MTQuNjg1aC0yLjA4M2wtOC45NTctOS43OXY5Ljc5ek0xNTguOTMgMjIuNmg2Ljc3di4yMDhjMCAxLjA0MS0uMSA0LjA2Mi0yLjE4NyA2LjA0MS0xLjM4OCAxLjM1LTMuMjczIDIuMDY2LTUuMjA3IDEuOTc5YTcuMSA3LjEgMCAwIDEtNS4zMTItMS45NzkgNy45IDcuOSAwIDAgMS0yLjE4Ny01LjYyNCA3LjEzIDcuMTMgMCAwIDEgMi4xODctNS40MTZjMS41MzktMS41NDUgMy42NTMtMi4zNzUgNS44MzItMi4yOTFhOC4xNyA4LjE3IDAgMCAxIDMuNDM3LjcyOSA2LjczIDYuNzMgMCAwIDEgMi43MDggMi43MDhsLTIuNSAxLjM1NGE0LjA2IDQuMDYgMCAwIDAtMS43NzEtMS43NzEgNC42NyA0LjY3IDAgMCAwLTIuMDgzLS40MTcgNS4zOCA1LjM4IDAgMCAwLTMuNDM3IDEuMjUgNS40MyA1LjQzIDAgMCAwLTEuNDU4IDMuODUzYy0uMDUzIDEuMzk4LjQ3NCAyLjc1NSAxLjQ1OCAzLjc0OWE0LjQzIDQuNDMgMCAwIDAgMy4yMjkgMS4yNSA1Ljg5IDUuODkgMCAwIDAgMi45MTYtLjgzMyAzLjMzIDMuMzMgMCAwIDAgMS4zNTQtMi4yOTFoLTMuNzQ5ek0zMy4xMTkgMzYuNjZMMTguNTM4IDE1LjgzaDEyLjVsNy42IDEwLjkzNiA3LjI5LTEwLjkzNmg3LjI5YTI4LjAwNyAyOC4wMDcgMCAxIDAtMjUuMiA0MC4yIDI3LjM0OCAyNy4zNDggMCAwIDAgNS4xLS41MjF6bTEwLjQxNSAwdjE0LjU4YTI3LjgzIDI3LjgzIDAgMCAwIDEyLjM5NC0yMy4yMjVjLjAwMy0yLjQ2LS4zMTItNC45MS0uOTM3LTcuMjl6Ig0KICAgICAgICBmaWxsPSIjZTcwMDAwIj48L3BhdGg+DQogICAgPHBhdGgNCiAgICAgICAgZD0iTTUzLjIxOSAxNS44M2gtNy4yOWwtNy4yOTEgMTAuOTM2LTcuNi0xMC45MzZoLTEyLjVsMTQuNDc3IDIwLjkzNHYxOC44NWMzLjc1OS0uNyA3LjMzOS0yLjE1MiAxMC41MjMtNC4yN3YtMTQuNThMNTQuOTkgMjAuODNjLS40MTctMS43MjMtMS4wMTEtMy4zOTktMS43NzEtNXoiDQogICAgICAgIGZpbGw9IiNmZmYiPjwvcGF0aD4NCiAgICA8ZGVmcz4NCiAgICAgICAgPHBhdGggaWQ9IkIiDQogICAgICAgICAgICBkPSJNMTE1LjE4MyA0MS4zNDZoMS4wNDJ2LjYyNWEyLjI1IDIuMjUgMCAwIDEgMS42NjYtLjgzM2MuNjUyLjAxNCAxLjI2NC4zMTkgMS42NjYuODMzYTIuNDkgMi40OSAwIDAgMSAuMzEzIDEuNTYydjMuNTQxaC0xLjA0MnYtMy41MzZhMS4zNyAxLjM3IDAgMCAwLS4zMTItMS4wNDEgMS4zMiAxLjMyIDAgMCAwLS45MzctLjQxNyAxLjQ5IDEuNDkgMCAwIDAtMS4wNDEuNDE3Yy0uMzI5LjQ1LS40NzggMS4wMDgtLjQxNyAxLjU2MnYzLjAyaC0xLjAzOHYtNS43MzN6Ij4NCiAgICAgICAgPC9wYXRoPg0KICAgIDwvZGVmcz4NCjwvc3ZnPg==",url:"https://www.lumens.com/ylighting-is-now-lumens.html",text:"projects.ylightning",alt:"projects.alt.ylightning",textLink:"projects.link.ylightning",classCustom:"w-40  dark:bg-white",height:"40px",width:"147px"}};var Ur=()=>{const{t:e}=He();return r.createElement("div",{className:"w-full text-start"},r.createElement("div",{className:"bg-white w-full 2xl:max-w-screen-2xl xl:max-w-screen-xl md:max-w-screen-sm lgC:max-w-screen-lg-custom mdC:max-w-screen-md-custom justify-between mx-auto items-center rounded-lg border-4 border-neutral-700/50 dark:bg-gray-800 dark:border-neutral-300/50 dark:text-white shadow-md"},r.createElement("div",{className:"flex p-2 gap-1 border-b-4 border-b-neutral-500/50 "},r.createElement("div",{className:""},r.createElement("span",{className:"bg-red-500 inline-block center w-3 h-3 rounded-full"})),r.createElement("div",{className:"circle"},r.createElement("span",{className:"bg-yellow-500 inline-block center w-3 h-3 rounded-full"})),r.createElement("div",{className:"circle"},r.createElement("span",{className:"bg-green-500 box inline-block center w-3 h-3 rounded-full"})),r.createElement("div",{className:"mx-auto font-bold text-xl"},e("projects.title"))),r.createElement("div",{className:"card__content flex flex-wrap"},r.createElement(br,{cascade:!0,damping:.1,direction:"up",triggerOnce:!0},Object.entries(Pr).map(((e,t)=>{let[n,{url:o,alt:a,img:i,text:s,textLink:c,css:u,classCustom:l,height:g,width:f}]=e;return r.createElement("div",{key:n,className:"gap-5 m-4"},r.createElement(zr,{url:o,img:i,text:s,alt:a,textLink:c,css:u,classCustom:l,height:g,width:f}))}))),r.createElement("div",{className:"flex justify-center items-center text-center mt-8 w-full"},r.createElement("p",{className:"font-Onest text-gray-600 text-sm [&>strong]:text-red-800 dark:text-white dark:[&>strong]:text-red-300 m-4 md:mb-2"},r.createElement("strong",null,e("projects.note.text1")),e("projects.note.text2"))))))},Yr=n.p+"static/salesfoces-0ae87df0607705543bb87781ffffc8aa.jpg";je.use(Pe).init({resources:{en:Ge,es:Fe},fallbackLng:"en",interpolation:{escapeValue:!1}});var Br=()=>r.createElement("main",null,r.createElement("div",{className:"container-scroll"},r.createElement(Ke,null),r.createElement("section",{className:"App flex mx-auto py-20 mb-2",id:"about"},r.createElement(kr,null)),r.createElement("section",{className:"App flex mx-auto py-20 mb-2",id:"projects"},r.createElement(Ur,null))));const Rr=()=>r.createElement(r.Fragment,null,r.createElement("html",{lang:"en"}),r.createElement("title",null,"Expert Salesforce B2C Developer | HubSpot, React, PHP Specialist"),r.createElement("link",{rel:"manifest",href:"/manifest.json"}),r.createElement("meta",{name:"description",content:"Certified Salesforce B2C developer with expertise in HubSpot, React, and PHP. Available for freelance projects and contract work to build, integrate, and optimize web solutions."}),r.createElement("meta",{name:"robots",content:"index, follow"}),r.createElement("meta",{property:"og:title",content:"Expert Salesforce B2C Developer | HubSpot, React, PHP Specialist"}),r.createElement("meta",{property:"og:description",content:"Offering custom development services in Salesforce B2C, HubSpot, React, and PHP. Contact me for your next web project."}),r.createElement("meta",{property:"og:url",content:"https://h790.github.io/"}),r.createElement("meta",{property:"og:image",content:Yr}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:site_name",content:"Hugo Kevin | Salesforce B2C Developer"}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:"Salesforce B2C Developer | HubSpot, React, PHP Specialist"}),r.createElement("meta",{name:"twitter:description",content:"Experienced developer in Salesforce B2C, HubSpot, React, and PHP. Let's work together on your next project."}),r.createElement("meta",{name:"twitter:image",content:Yr}),r.createElement("meta",{name:"twitter:site",content:"@HK72232150"}),r.createElement("meta",{name:"twitter:creator",content:"@HK72232150"}))},8679:function(e,t,n){"use strict";var r=n(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return r.isMemo(e)?i:s[e.$$typeof]||o}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=i;var u=Object.defineProperty,l=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(p){var o=d(n);o&&o!==p&&e(t,o,r)}var i=l(n);g&&(i=i.concat(g(n)));for(var s=c(t),m=c(n),y=0;y<i.length;++y){var h=i[y];if(!(a[h]||r&&r[h]||m&&m[h]||s&&s[h])){var M=f(n,h);try{u(t,h,M)}catch(j){}}}}return t}},3096:function(e,t,n){var r="Expected a function",o=NaN,a="[object Symbol]",i=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,g="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,f="object"==typeof self&&self&&self.Object===Object&&self,d=g||f||Function("return this")(),p=Object.prototype.toString,m=Math.max,y=Math.min,h=function(){return d.Date.now()};function M(e,t,n){var o,a,i,s,c,u,l=0,g=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=a;return o=a=void 0,l=t,s=e.apply(r,n)}function M(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-l>=i}function N(){var e=h();if(M(e))return w(e);c=setTimeout(N,function(e){var n=t-(e-u);return f?y(n,i-(e-l)):n}(e))}function w(e){return c=void 0,d&&o?p(e):(o=a=void 0,s)}function I(){var e=h(),n=M(e);if(o=arguments,a=this,u=e,n){if(void 0===c)return function(e){return l=e,c=setTimeout(N,t),g?p(e):s}(u);if(f)return c=setTimeout(N,t),p(u)}return void 0===c&&(c=setTimeout(N,t)),s}return t=v(t)||0,j(n)&&(g=!!n.leading,i=(f="maxWait"in n)?m(v(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),I.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=u=a=c=void 0},I.flush=function(){return void 0===c?s:w(h())},I}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==a}(e))return o;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=c.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):s.test(e)?o:+e}e.exports=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError(r);return j(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),M(e,t,{leading:o,maxWait:t,trailing:a})}},4415:function(e,t){"use strict";var n,r=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.server_context"),g=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen");function h(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case a:case s:case i:case f:case d:return e;default:switch(e=e&&e.$$typeof){case l:case u:case g:case m:case p:case c:return e;default:return t}}case o:return t}}}n=Symbol.for("react.module.reference"),t.isFragment=function(e){return h(e)===a}},4954:function(e,t,n){"use strict";e.exports=n(4415)},9921:function(e,t){"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,g=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,h=n?Symbol.for("react.block"):60121,M=n?Symbol.for("react.fundamental"):60117,j=n?Symbol.for("react.responder"):60118,v=n?Symbol.for("react.scope"):60119;function N(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case g:case a:case s:case i:case d:return e;default:switch(e=e&&e.$$typeof){case u:case f:case y:case m:case c:return e;default:return t}}case o:return t}}}function w(e){return N(e)===g}t.AsyncMode=l,t.ConcurrentMode=g,t.ContextConsumer=u,t.ContextProvider=c,t.Element=r,t.ForwardRef=f,t.Fragment=a,t.Lazy=y,t.Memo=m,t.Portal=o,t.Profiler=s,t.StrictMode=i,t.Suspense=d,t.isAsyncMode=function(e){return w(e)||N(e)===l},t.isConcurrentMode=w,t.isContextConsumer=function(e){return N(e)===u},t.isContextProvider=function(e){return N(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return N(e)===f},t.isFragment=function(e){return N(e)===a},t.isLazy=function(e){return N(e)===y},t.isMemo=function(e){return N(e)===m},t.isPortal=function(e){return N(e)===o},t.isProfiler=function(e){return N(e)===s},t.isStrictMode=function(e){return N(e)===i},t.isSuspense=function(e){return N(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===g||e===s||e===i||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f||e.$$typeof===M||e.$$typeof===j||e.$$typeof===v||e.$$typeof===h)},t.typeOf=N},9864:function(e,t,n){"use strict";e.exports=n(9921)},8477:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(7294)),a=i(n(1093));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return o.default.createElement("button",this.props,this.props.children)}}]),t}(o.default.Component);t.default=(0,a.default)(s)},5343:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=c(n(7294)),i=c(n(8e3)),s=c(n(5697));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this,t=r({},this.props);return delete t.name,t.parentBindings&&delete t.parentBindings,a.default.createElement("div",r({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}(a.default.Component);u.propTypes={name:s.default.string,id:s.default.string},t.default=(0,i.default)(u)},8939:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(7294)),o=a(n(1093));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.render=function(){return r.default.createElement("a",o.props,o.props.children)},i(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(r.default.Component);t.default=(0,o.default)(s)},6261:function(e,t,n){"use strict";t.rU=void 0;var r=d(n(8939)),o=d(n(8477)),a=d(n(5343)),i=d(n(2628)),s=d(n(4592)),c=d(n(7606)),u=d(n(3200)),l=d(n(1093)),g=d(n(8e3)),f=d(n(8482));function d(e){return e&&e.__esModule?e:{default:e}}t.rU=r.default,o.default,a.default,i.default,s.default,c.default,u.default,l.default,g.default,f.default,r.default,o.default,a.default,i.default,s.default,c.default,u.default,l.default,g.default,f.default},8482:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(7294),u=(n(3935),n(4259),n(7606)),l=n(2628),g=n(5697),f=n(9678),d={to:g.string.isRequired,containerId:g.string,container:g.object,activeClass:g.string,spy:g.bool,smooth:g.oneOfType([g.bool,g.string]),offset:g.number,delay:g.number,isDynamic:g.bool,onClick:g.func,duration:g.oneOfType([g.number,g.func]),absolute:g.bool,onSetActive:g.func,onSetInactive:g.func,ignoreCancelEvents:g.bool,hashSpy:g.bool,spyThrottle:g.number},p={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||l,g=function(t){function l(e){a(this,l);var t=i(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return p.call(t),t.state={active:!1},t}return s(l,t),o(l,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();u.isMounted(e)||u.mount(e,this.props.spyThrottle),this.props.hashSpy&&(f.isMounted()||f.mount(n),f.mapContainer(this.props.to,e)),this.props.spy&&u.addStateHandler(this.stateHandler),u.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){u.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=r({},this.props);for(var o in d)n.hasOwnProperty(o)&&delete n[o];return n.className=t,n.onClick=this.handleClick,c.createElement(e,n)}}]),l}(c.Component),p=function(){var e=this;this.scrollTo=function(t,o){n.scrollTo(t,r({},e.state,o))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var r=e.getScrollSpyContainer();if(!f.isMounted()||f.isInitialized()){var o=e.props.to,a=null,i=0,s=0,c=0;if(r.getBoundingClientRect)c=r.getBoundingClientRect().top;if(!a||e.props.isDynamic){if(!(a=n.get(o)))return;var l=a.getBoundingClientRect();s=(i=l.top-c+t)+l.height}var g=t-e.props.offset,d=g>=Math.floor(i)&&g<Math.floor(s),p=g<Math.floor(i)||g>=Math.floor(s),m=n.getActiveLink();return p?(o===m&&n.setActiveLink(void 0),e.props.hashSpy&&f.getHash()===o&&f.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),u.updateStates()):d&&m!==o?(n.setActiveLink(o),e.props.hashSpy&&f.changeHash(o),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(o)),u.updateStates()):void 0}}};return g.propTypes=d,g.defaultProps={offset:0},g},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){a(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return s(n,t),o(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;l.unregister(this.props.name)}},{key:"registerElems",value:function(e){l.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return c.createElement(e,r({},this.props,{parentBindings:this.childBindings}))}}]),n}(c.Component);return t.propTypes={name:g.string,id:g.string},t}};e.exports=p},3200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=(s(n(4259)),s(n(9765))),a=s(n(140)),i=s(n(4592));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return o.default[e.smooth]||o.default.defaultEasing},u=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())},l=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollLeft;var n=void 0!==window.pageXOffset,r="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},g=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,r="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},f=function e(t,n,r){var o=n.data;if(n.ignoreCancelEvents||!o.cancel)if(o.delta=Math.round(o.targetPosition-o.startPosition),null===o.start&&(o.start=r),o.progress=r-o.start,o.percent=o.progress>=o.duration?1:t(o.progress/o.duration),o.currentPosition=o.startPosition+Math.ceil(o.delta*o.percent),o.containerElement&&o.containerElement!==document&&o.containerElement!==document.body?n.horizontal?o.containerElement.scrollLeft=o.currentPosition:o.containerElement.scrollTop=o.currentPosition:n.horizontal?window.scrollTo(o.currentPosition,0):window.scrollTo(0,o.currentPosition),o.percent<1){var a=e.bind(null,t,n);u.call(window,a)}else i.default.registered.end&&i.default.registered.end(o.to,o.target,o.currentPosition);else i.default.registered.end&&i.default.registered.end(o.to,o.target,o.currentPositionY)},d=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},p=function(e,t,n,r){t.data=t.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(t.data.delayTimeout);if(a.default.subscribe((function(){t.data.cancel=!0})),d(t),t.data.start=null,t.data.cancel=!1,t.data.startPosition=t.horizontal?l(t):g(t),t.data.targetPosition=t.absolute?e:e+t.data.startPosition,t.data.startPosition!==t.data.targetPosition){var o;t.data.delta=Math.round(t.data.targetPosition-t.data.startPosition),t.data.duration=("function"==typeof(o=t.duration)?o:function(){return o})(t.data.delta),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=r;var s=c(t),p=f.bind(null,s,t);t&&t.delay>0?t.data.delayTimeout=window.setTimeout((function(){i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),u.call(window,p)}),t.delay):(i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),u.call(window,p))}else i.default.registered.end&&i.default.registered.end(t.data.to,t.data.target,t.data.currentPosition)},m=function(e){return(e=r({},e)).data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},e.absolute=!0,e};t.default={animateTopScroll:p,getAnimationType:c,scrollToTop:function(e){p(0,m(e))},scrollToBottom:function(e){e=m(e),d(e),p(e.horizontal?function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollWidth-t.offsetWidth;var n=document.body,r=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)}(e):function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var n=document.body,r=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)}(e),e)},scrollTo:function(e,t){p(e,m(t))},scrollMore:function(e,t){t=m(t),d(t);var n=t.horizontal?l(t):g(t);p(e+n,t)}}},140:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5236),o=["mousedown","mousewheel","touchmove","keydown"];t.default={subscribe:function(e){return"undefined"!=typeof document&&o.forEach((function(t){return(0,r.addPassiveEventListener)(document,t,e)}))}}},5236:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPassiveEventListener=function(e,t,r){var o=r.name;o||(o=t,console.warn("Listener must be a named function.")),n.has(t)||n.set(t,new Set);var a=n.get(t);if(!a.has(o)){var i=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}();e.addEventListener(t,r,!!i&&{passive:!0}),a.add(o)}},t.removePassiveEventListener=function(e,t,r){e.removeEventListener(t,r),n.get(t).delete(r.name||t)};var n=new Map},8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=c(n(7294)),i=(c(n(3935)),c(n(2628))),s=c(n(5697));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),o(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;i.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){i.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return a.default.createElement(e,r({},this.props,{parentBindings:this.childBindings}))}}]),n}(a.default.Component);return t.propTypes={name:s.default.string,id:s.default.string},t}},4592:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={registered:{},scrollEvent:{register:function(e,t){n.registered[e]=t},remove:function(e){n.registered[e]=null}}};t.default=n},9678:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(5236);var r,o=n(4259),a=(r=o)&&r.__esModule?r:{default:r};var i={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout((function(){e.scrollTo(t,!0),e.initialized=!0}),10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var r=this.containers[e]||document;n.scrollTo(e,{container:r})}},getHash:function(){return a.default.getHash()},changeHash:function(e,t){this.isInitialized()&&a.default.getHash()!==e&&a.default.updateHash(e,t)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};t.default=i},1093:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=l(n(7294)),i=l(n(7606)),s=l(n(2628)),c=l(n(5697)),u=l(n(9678));function l(e){return e&&e.__esModule?e:{default:e}}var g={to:c.default.string.isRequired,containerId:c.default.string,container:c.default.object,activeClass:c.default.string,activeStyle:c.default.object,spy:c.default.bool,horizontal:c.default.bool,smooth:c.default.oneOfType([c.default.bool,c.default.string]),offset:c.default.number,delay:c.default.number,isDynamic:c.default.bool,onClick:c.default.func,duration:c.default.oneOfType([c.default.number,c.default.func]),absolute:c.default.bool,onSetActive:c.default.func,onSetInactive:c.default.func,ignoreCancelEvents:c.default.bool,hashSpy:c.default.bool,saveHashHistory:c.default.bool,spyThrottle:c.default.number};t.default=function(e,t){var n=t||s.default,c=function(t){function s(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return l.call(t),t.state={active:!1},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,t),o(s,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();i.default.isMounted(e)||i.default.mount(e,this.props.spyThrottle),this.props.hashSpy&&(u.default.isMounted()||u.default.mount(n),u.default.mapContainer(this.props.to,e)),i.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){i.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n={};n=this.state&&this.state.active?r({},this.props.style,this.props.activeStyle):r({},this.props.style);var o=r({},this.props);for(var i in g)o.hasOwnProperty(i)&&delete o[i];return o.className=t,o.style=n,o.onClick=this.handleClick,a.default.createElement(e,o)}}]),s}(a.default.PureComponent),l=function(){var e=this;this.scrollTo=function(t,o){n.scrollTo(t,r({},e.state,o))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t,r){var o=e.getScrollSpyContainer();if(!u.default.isMounted()||u.default.isInitialized()){var a=e.props.horizontal,i=e.props.to,s=null,c=void 0,l=void 0;if(a){var g=0,f=0,d=0;if(o.getBoundingClientRect)d=o.getBoundingClientRect().left;if(!s||e.props.isDynamic){if(!(s=n.get(i)))return;var p=s.getBoundingClientRect();f=(g=p.left-d+t)+p.width}var m=t-e.props.offset;c=m>=Math.floor(g)&&m<Math.floor(f),l=m<Math.floor(g)||m>=Math.floor(f)}else{var y=0,h=0,M=0;if(o.getBoundingClientRect)M=o.getBoundingClientRect().top;if(!s||e.props.isDynamic){if(!(s=n.get(i)))return;var j=s.getBoundingClientRect();h=(y=j.top-M+r)+j.height}var v=r-e.props.offset;c=v>=Math.floor(y)&&v<Math.floor(h),l=v<Math.floor(y)||v>=Math.floor(h)}var N=n.getActiveLink();if(l){if(i===N&&n.setActiveLink(void 0),e.props.hashSpy&&u.default.getHash()===i){var w=e.props.saveHashHistory,I=void 0!==w&&w;u.default.changeHash("",I)}e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(i,s))}if(c&&(N!==i||!1===e.state.active)){n.setActiveLink(i);var b=e.props.saveHashHistory,D=void 0!==b&&b;e.props.hashSpy&&u.default.changeHash(i,D),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(i,s))}}}};return c.propTypes=g,c.defaultProps={offset:0},c}},7606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(3096),a=(r=o)&&r.__esModule?r:{default:r},i=n(5236);var s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,t){if(e){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:66;return(0,a.default)(e,t)}((function(t){s.scrollHandler(e)}),t);s.scrollSpyContainers.push(e),(0,i.addPassiveEventListener)(e,"scroll",n)}},isMounted:function(e){return-1!==s.scrollSpyContainers.indexOf(e)},currentPositionX:function(e){if(e===document){var t=void 0!==window.pageYOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}return e.scrollLeft},currentPositionY:function(e){if(e===document){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach((function(t){return t(s.currentPositionX(e),s.currentPositionY(e))}))},addStateHandler:function(e){s.spySetState.push(e)},addSpyHandler:function(e,t){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(s.currentPositionX(t),s.currentPositionY(t))},updateStates:function(){s.spySetState.forEach((function(e){return e()}))},unmount:function(e,t){s.scrollSpyContainers.forEach((function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.indexOf(t)>-1&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)})),s.spySetState&&s.spySetState.length&&s.spySetState.indexOf(e)>-1&&s.spySetState.splice(s.spySetState.indexOf(e),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach((function(e){return s.scrollHandler(e)}))}};t.default=s},2628:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n(4259)),a=s(n(3200)),i=s(n(4592));function s(e){return e&&e.__esModule?e:{default:e}}var c={},u=void 0;t.default={unmount:function(){c={}},register:function(e,t){c[e]=t},unregister:function(e){delete c[e]},get:function(e){return c[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return u=e},getActiveLink:function(){return u},scrollTo:function(e,t){var n=this.get(e);if(n){var s=(t=r({},t,{absolute:!1})).containerId,c=t.container,u=void 0;u=s?document.getElementById(s):c&&c.nodeType?c:document,t.absolute=!0;var l=t.horizontal,g=o.default.scrollOffset(u,n,l)+(t.offset||0);if(!t.smooth)return i.default.registered.begin&&i.default.registered.begin(e,n),u===document?t.horizontal?window.scrollTo(g,0):window.scrollTo(0,g):u.scrollTop=g,void(i.default.registered.end&&i.default.registered.end(e,n));a.default.animateTopScroll(g,t,e,n)}else console.warn("target Element not found")}}},9765:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},4259:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){for(var n=e.offsetTop,r=e.offsetParent;r&&!t(r);)n+=r.offsetTop,r=r.offsetParent;return{offsetTop:n,offsetParent:r}};t.default={updateHash:function(e,t){var n=0===e.indexOf("#")?e.substring(1):e,r=n?"#"+n:"",o=window&&window.location,a=r?o.pathname+o.search+r:o.pathname+o.search;t?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t,r){if(r)return e===document?t.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(e).position?t.offsetLeft:t.offsetLeft-e.offsetLeft;if(e===document)return t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if("static"!==getComputedStyle(e).position){if(t.offsetParent!==e){var o=n(t,(function(t){return t===e||t===document})),a=o.offsetTop;if(o.offsetParent!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return t.offsetTop}if(t.offsetParent===e.offsetParent)return t.offsetTop-e.offsetTop;var i=function(e){return e===document};return n(t,i).offsetTop-n(e,i).offsetTop}}},1739:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},5372:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},6690:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},9728:function(e,t,n){var r=n(4062);function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e,t,n){var r=n(4062);e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},8872:function(e){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,s=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(l){u=!0,o=l}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return s}},e.exports.__esModule=!0,e.exports.default=e.exports},2218:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},215:function(e,t,n){var r=n(7071);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},7424:function(e,t,n){var r=n(5372),o=n(8872),a=n(6116),i=n(2218);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,n){var r=n(8698).default;e.exports=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,n){var r=n(8698).default,o=n(5036);e.exports=function(e){var t=o(e,"string");return"symbol"===r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,n){var r=n(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-tsx-00188b658eabb9587798.js.map