"use strict";(self.webpackChunkengineering_standards=self.webpackChunkengineering_standards||[]).push([[8379],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9005:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={},a="Don't Optimize Prematurely",c={unversionedId:"clientside/react/performance/don-t-optimize-prematurely",id:"clientside/react/performance/don-t-optimize-prematurely",title:"Don't Optimize Prematurely",description:"Before you make any kinds of optimizations, make sure that there is a reason for them. Following e best practice blindly is a waste of effort unless it\u2019s impacting your application in a way.",source:"@site/docs/clientside/react/performance/don-t-optimize-prematurely.md",sourceDirName:"clientside/react/performance",slug:"/clientside/react/performance/don-t-optimize-prematurely",permalink:"/docs/clientside/react/performance/don-t-optimize-prematurely",draft:!1,editUrl:"https://github.com/radically-digital/radically-digital.github.io/tree/main/docs/docs/clientside/react/performance/don-t-optimize-prematurely.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"New React Project",permalink:"/docs/clientside/react/new-react-project/"},next:{title:"Rerenders - Callbacks, Arrays and Objects",permalink:"/docs/clientside/react/performance/rerenders-callbacks-arrays-and-objects"}},l={},p=[],s={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dont-optimize-prematurely"},"Don't Optimize Prematurely"),(0,o.kt)("p",null,"Before you make any kinds of optimizations, make sure that there is a reason for them. Following e best practice blindly is a waste of effort unless it\u2019s impacting your application in a way."),(0,o.kt)("p",null,"Yes, it\u2019s important to be aware of certain things but prioritize building readable and maintainable components before performance. Well written code is easier to improve."),(0,o.kt)("p",null,"When you notice a performance problem in your application - measure and identify the cause of your problem. No point in trying to reduce rerender count if your bundle size is enormous."),(0,o.kt)("p",null,"Once you know where the performance problems are coming from, fix them in the order of their impact."))}m.isMDXComponent=!0}}]);