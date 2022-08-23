"use strict";(self.webpackChunkengineering_standards=self.webpackChunkengineering_standards||[]).push([[6574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},o="Data Fetching",c={unversionedId:"clientside/react/data-fetching/index",id:"clientside/react/data-fetching/index",title:"Data Fetching",description:"Use a Data Fetching Library",source:"@site/docs/clientside/react/data-fetching/index.md",sourceDirName:"clientside/react/data-fetching",slug:"/clientside/react/data-fetching/",permalink:"/docs/clientside/react/data-fetching/",draft:!1,editUrl:"https://github.com/radically-digital/radically-digital.github.io/tree/main/docs/docs/clientside/react/data-fetching/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Write Consistent Components",permalink:"/docs/clientside/react/components/write-consistent-components"},next:{title:"New React Project",permalink:"/docs/clientside/react/new-react-project/"}},l={},s=[{value:"Use a Data Fetching Library",id:"use-a-data-fetching-library",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-fetching"},"Data Fetching"),(0,a.kt)("h2",{id:"use-a-data-fetching-library"},"Use a Data Fetching Library"),(0,a.kt)("p",null,"React doesn\u2019t come with an opinionated way of fetching or updating data from an API. Each team creates their own implementation usually involving a service that holds async functions which communicate with the API."),(0,a.kt)("p",null,"Going that route means that we need to manage loading states and handle http errors on our own. That leads to verbose code with a lot of boilerplate."),(0,a.kt)("p",null,"Instead of doing that we should use libraries like ",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"React Query")," or ",(0,a.kt)("a",{parentName:"p",href:"https://swr.vercel.app/"},"SWR"),". They make communicating with a server a natural part of the component lifecycle in an idiomatic way - a hook."),(0,a.kt)("p",null,"They come with caching built in and manage loading and error states for us. We just need to handle them. Also, they remove the need to use a state management library to handle that data."))}p.isMDXComponent=!0}}]);