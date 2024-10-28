/*! For license information please see component---src-pages-index-tsx-059be3de-07d33f2adc881b8cef8c.js.LICENSE.txt */
(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[130],{3096:function(t,r,a){var e="Expected a function",n=NaN,o="[object Symbol]",s=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,f=/^0o[0-7]+$/i,m=parseInt,l="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g,d="object"==typeof self&&self&&self.Object===Object&&self,p=l||d||Function("return this")(),u=Object.prototype.toString,y=Math.max,g=Math.min,b=function(){return p.Date.now()};function h(t,r,a){var n,o,s,i,c,f,m=0,l=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError(e);function u(r){var a=n,e=o;return n=o=void 0,m=r,i=t.apply(e,a)}function h(t){var a=t-f;return void 0===f||a>=r||a<0||d&&t-m>=s}function F(){var t=b();if(h(t))return w(t);c=setTimeout(F,function(t){var a=r-(t-f);return d?g(a,s-(t-m)):a}(t))}function w(t){return c=void 0,p&&n?u(t):(n=o=void 0,i)}function k(){var t=b(),a=h(t);if(n=arguments,o=this,f=t,a){if(void 0===c)return function(t){return m=t,c=setTimeout(F,r),l?u(t):i}(f);if(d)return c=setTimeout(F,r),u(f)}return void 0===c&&(c=setTimeout(F,r)),i}return r=x(r)||0,v(a)&&(l=!!a.leading,s=(d="maxWait"in a)?y(x(a.maxWait)||0,r):s,p="trailing"in a?!!a.trailing:p),k.cancel=function(){void 0!==c&&clearTimeout(c),m=0,n=f=o=c=void 0},k.flush=function(){return void 0===c?i:w(b())},k}function v(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&u.call(t)==o}(t))return n;if(v(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=v(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var a=c.test(t);return a||f.test(t)?m(t.slice(2),a?2:8):i.test(t)?n:+t}t.exports=function(t,r,a){var n=!0,o=!0;if("function"!=typeof t)throw new TypeError(e);return v(a)&&(n="leading"in a?!!a.leading:n,o="trailing"in a?!!a.trailing:o),h(t,r,{leading:n,maxWait:r,trailing:o})}},4415:function(t,r){"use strict";var a,e=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),m=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function b(t){if("object"==typeof t&&null!==t){var r=t.$$typeof;switch(r){case e:switch(t=t.type){case o:case i:case s:case d:case p:return t;default:switch(t=t&&t.$$typeof){case m:case f:case l:case y:case u:case c:return t;default:return r}}case n:return r}}}a=Symbol.for("react.module.reference"),r.isFragment=function(t){return b(t)===o}},4954:function(t,r,a){"use strict";t.exports=a(4415)},2252:function(t,r,a){"use strict";a.d(r,{sm:function(){return P},pT:function(){return it},BW:function(){return ut},Mi:function(){return kt}});var e=a(5944),n=a(917),o=a(7294),s=Object.defineProperty,i=(t,r,a)=>((t,r,a)=>r in t?s(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a)(t,"symbol"!=typeof r?r+"":r,a),c=new Map,f=new WeakMap,m=0,l=void 0;function d(t){return Object.keys(t).sort().filter((r=>void 0!==t[r])).map((r=>{return`${r}_${"root"===r?(a=t.root,a?(f.has(a)||(m+=1,f.set(a,m.toString())),f.get(a)):"0"):t[r]}`;var a})).toString()}function p(t,r,a={},e=l){if(void 0===window.IntersectionObserver&&void 0!==e){const n=t.getBoundingClientRect();return r(e,{isIntersecting:e,target:t,intersectionRatio:"number"==typeof a.threshold?a.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:o,elements:s}=function(t){const r=d(t);let a=c.get(r);if(!a){const e=new Map;let n;const o=new IntersectionObserver((r=>{r.forEach((r=>{var a;const o=r.isIntersecting&&n.some((t=>r.intersectionRatio>=t));t.trackVisibility&&void 0===r.isVisible&&(r.isVisible=o),null==(a=e.get(r.target))||a.forEach((t=>{t(o,r)}))}))}),t);n=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),a={id:r,observer:o,elements:e},c.set(r,a)}return a}(a),i=s.get(t)||[];return s.has(t)||s.set(t,i),i.push(r),o.observe(t),function(){i.splice(i.indexOf(r),1),0===i.length&&(s.delete(t),o.unobserve(t)),0===s.size&&(o.disconnect(),c.delete(n))}}var u=class extends o.Component{constructor(t){super(t),i(this,"node",null),i(this,"_unobserveCb",null),i(this,"handleNode",(t=>{this.node&&(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()})),i(this,"handleChange",((t,r)=>{t&&this.props.triggerOnce&&this.unobserve(),function(t){return"function"!=typeof t.children}(this.props)||this.setState({inView:t,entry:r}),this.props.onChange&&this.props.onChange(t,r)})),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:r,rootMargin:a,trackVisibility:e,delay:n,fallbackInView:o}=this.props;this._unobserveCb=p(this.node,this.handleChange,{threshold:t,root:r,rootMargin:a,trackVisibility:e,delay:n},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if("function"==typeof t){const{inView:r,entry:a}=this.state;return t({inView:r,entry:a,ref:this.handleNode})}const{as:r,triggerOnce:a,threshold:e,root:n,rootMargin:s,onChange:i,skip:c,trackVisibility:f,delay:m,initialInView:l,fallbackInView:d,...p}=this.props;return o.createElement(r||"div",{ref:this.handleNode,...p},t)}};function y({threshold:t,delay:r,trackVisibility:a,rootMargin:e,root:n,triggerOnce:s,skip:i,initialInView:c,fallbackInView:f,onChange:m}={}){var l;const[d,u]=o.useState(null),y=o.useRef(),[g,b]=o.useState({inView:!!c,entry:void 0});y.current=m,o.useEffect((()=>{if(i||!d)return;let o;return o=p(d,((t,r)=>{b({inView:t,entry:r}),y.current&&y.current(t,r),r.isIntersecting&&s&&o&&(o(),o=void 0)}),{root:n,rootMargin:e,threshold:t,trackVisibility:a,delay:r},f),()=>{o&&o()}}),[Array.isArray(t)?t.toString():t,d,n,e,s,i,a,f,r]);const h=null==(l=g.entry)?void 0:l.target,v=o.useRef();d||!h||s||i||v.current===h||(v.current=h,b({inView:!!c,entry:void 0}));const x=[u,g.inView,g.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}var g=a(4954);n.F4`
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
`,n.F4`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,n.F4`
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
`,n.F4`
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
`,n.F4`
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
`,n.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,n.F4`
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
`,n.F4`
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
`,n.F4`
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
`,n.F4`
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
`,n.F4`
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
`,n.F4`
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
`,n.F4`
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
`;const b=n.F4`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,h=n.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,v=n.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,x=n.F4`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,F=n.F4`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,w=n.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,k=n.F4`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,V=n.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,S=n.F4`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,O=n.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Y=n.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,C=n.F4`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,X=n.F4`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function z(t,r){return a=>a?t():r()}function N(t){return z(t,(()=>null))}function Z(t){return N((()=>({opacity:0})))(t)}const j=t=>{const{cascade:r=!1,damping:a=.5,delay:s=0,duration:i=1e3,fraction:c=0,keyframes:f=w,triggerOnce:m=!1,className:l,style:d,childClassName:p,childStyle:y,children:b,onVisibilityChange:h}=t,v=(0,o.useMemo)((()=>function({duration:t=1e3,delay:r=0,timingFunction:a="ease",keyframes:e=w,iterationCount:o=1}){return n.iv`
    animation-duration: ${t}ms;
    animation-timing-function: ${a};
    animation-delay: ${r}ms;
    animation-name: ${e};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:f,duration:i})),[i,f]);return null==b?null:"string"==typeof(x=b)||"number"==typeof x||"boolean"==typeof x?(0,e.tZ)($,{...t,animationStyles:v,children:String(b)}):(0,g.isFragment)(b)?(0,e.tZ)(_,{...t,animationStyles:v}):(0,e.tZ)(e.HY,{children:o.Children.map(b,((f,g)=>{if(!(0,o.isValidElement)(f))return null;const b=s+(r?g*i*a:0);switch(f.type){case"ol":case"ul":return(0,e.tZ)(n.ms,{children:({cx:r})=>(0,e.tZ)(f.type,{...f.props,className:r(l,f.props.className),style:Object.assign({},d,f.props.style),children:(0,e.tZ)(j,{...t,children:f.props.children})})});case"li":return(0,e.tZ)(u,{threshold:c,triggerOnce:m,onChange:h,children:({inView:t,ref:r})=>(0,e.tZ)(n.ms,{children:({cx:a})=>(0,e.tZ)(f.type,{...f.props,ref:r,className:a(p,f.props.className),css:N((()=>v))(t),style:Object.assign({},y,f.props.style,Z(!t),{animationDelay:b+"ms"})})})});default:return(0,e.tZ)(u,{threshold:c,triggerOnce:m,onChange:h,children:({inView:t,ref:r})=>(0,e.tZ)("div",{ref:r,className:l,css:N((()=>v))(t),style:Object.assign({},d,Z(!t),{animationDelay:b+"ms"}),children:(0,e.tZ)(n.ms,{children:({cx:t})=>(0,e.tZ)(f.type,{...f.props,className:t(p,f.props.className),style:Object.assign({},y,f.props.style)})})})})}}))});var x},M={display:"inline-block",whiteSpace:"pre"},$=t=>{const{animationStyles:r,cascade:a=!1,damping:n=.5,delay:o=0,duration:s=1e3,fraction:i=0,triggerOnce:c=!1,className:f,style:m,children:l,onVisibilityChange:d}=t,{ref:p,inView:u}=y({triggerOnce:c,threshold:i,onChange:d});return z((()=>(0,e.tZ)("div",{ref:p,className:f,style:Object.assign({},m,M),children:l.split("").map(((t,a)=>(0,e.tZ)("span",{css:N((()=>r))(u),style:{animationDelay:o+a*s*n+"ms"},children:t},a)))})),(()=>(0,e.tZ)(_,{...t,children:l})))(a)},_=t=>{const{animationStyles:r,fraction:a=0,triggerOnce:n=!1,className:o,style:s,children:i,onVisibilityChange:c}=t,{ref:f,inView:m}=y({triggerOnce:n,threshold:a,onChange:c});return(0,e.tZ)("div",{ref:f,className:o,css:N((()=>r))(m),style:Object.assign({},s,Z(!m)),children:i})};const I=n.F4`
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
`,E=n.F4`
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
`,T=n.F4`
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
`,R=n.F4`
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
`,D=n.F4`
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
`,W=n.F4`
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
`,A=n.F4`
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
`,B=n.F4`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,U=n.F4`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,H=n.F4`
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
`;const P=t=>{const{direction:r,reverse:a=!1,...n}=t,s=(0,o.useMemo)((()=>function(t,r){switch(r){case"down":return t?A:E;case"left":return t?B:T;case"right":return t?U:R;case"up":return t?H:D;default:return t?W:I}}(a,r)),[r,a]);return(0,e.tZ)(j,{keyframes:s,...n})},q=n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,G=n.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,J=n.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,K=n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,L=n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Q=n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,tt=n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,rt=n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,at=n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,et=n.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,nt=n.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,ot=n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,st=n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const it=t=>{const{big:r=!1,direction:a,reverse:n=!1,...s}=t,i=(0,o.useMemo)((()=>function(t,r,a){switch(a){case"bottom-left":return r?G:h;case"bottom-right":return r?J:v;case"down":return t?r?L:F:r?K:x;case"left":return t?r?tt:k:r?Q:w;case"right":return t?r?at:S:r?rt:V;case"top-left":return r?et:O;case"top-right":return r?nt:Y;case"up":return t?r?st:X:r?ot:C;default:return r?q:b}}(r,n,a)),[r,a,n]);return(0,e.tZ)(j,{keyframes:i,...s})},ct=n.F4`
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
`,ft=n.F4`
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
`,mt=n.F4`
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
`,lt=n.F4`
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
`,dt=n.F4`
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
`;const pt={backfaceVisibility:"visible"},ut=t=>{const{direction:r,reverse:a=!1,style:n,...s}=t,i=(0,o.useMemo)((()=>function(t,r){switch(r){case"horizontal":return t?lt:ft;case"vertical":return t?dt:mt;default:return ct}}(a,r)),[r,a]);return(0,e.tZ)(j,{keyframes:i,style:Object.assign({},n,pt),...s})};n.F4`
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
`,n.F4`
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
`,n.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;n.F4`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,n.F4`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,n.F4`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,n.F4`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,n.F4`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,n.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const yt=n.F4`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,gt=n.F4`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,bt=n.F4`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ht=n.F4`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,vt=n.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,xt=n.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Ft=n.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,wt=n.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;const kt=t=>{const{direction:r,reverse:a=!1,...n}=t,s=(0,o.useMemo)((()=>function(t,r){switch(r){case"down":return t?vt:yt;case"right":return t?Ft:bt;case"up":return t?wt:ht;default:return t?xt:gt}}(a,r)),[r,a]);return(0,e.tZ)(j,{keyframes:s,...n})};n.F4`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,n.F4`
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
`,n.F4`
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
`,n.F4`
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
`,n.F4`
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
`,n.F4`
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
`,n.F4`
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
`,n.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,n.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,n.F4`
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
`}}]);
//# sourceMappingURL=component---src-pages-index-tsx-059be3de-07d33f2adc881b8cef8c.js.map