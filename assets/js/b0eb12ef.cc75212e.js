"use strict";(self.webpackChunkengineering_standards=self.webpackChunkengineering_standards||[]).push([[5908],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const i={},a="Conditional Rendering",c={unversionedId:"clientside/react/components/conditional-rendering",id:"clientside/react/components/conditional-rendering",title:"Conditional Rendering",description:"- See Write Consistent Components",source:"@site/docs/clientside/react/components/conditional-rendering.md",sourceDirName:"clientside/react/components",slug:"/clientside/react/components/conditional-rendering",permalink:"/docs/clientside/react/components/conditional-rendering",draft:!1,editUrl:"https://github.com/radically-digital/radically-digital.github.io/tree/main/docs/docs/clientside/react/components/conditional-rendering.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Component Length",permalink:"/docs/clientside/react/components/component-length"},next:{title:"Destructure Props",permalink:"/docs/clientside/react/components/destructure-props"}},s={},l=[],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"conditional-rendering"},"Conditional Rendering"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("a",{parentName:"li",href:"#write-consistent-components"},"Write Consistent Components"))),(0,o.kt)("p",null,"In some situations using short circuit operators for conditional rendering may backfire and you may end up with an unwanted ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," in your UI. To avoid this default to using ternary operators. The only caveat is that they\u2019re more verbose."),(0,o.kt)("p",null,"The short-circuit operator reduces the amount of code which is always nice. Ternaries are more verbose but there is no chance to get it wrong. Plus, adding the alternative condition is less of a change."),(0,o.kt)("p",null,"Prefer returing a react fragment (",(0,o.kt)("inlineCode",{parentName:"p"},"<React.Fragment />")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"<></>"),") over ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to take advantage of typescripts type inference."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// \ud83d\udc4e Try to avoid short-circuit operators\nfunction Component() {\n  const count = 0;\n\n  return <div>{count && <h1>Messages: {count}</h1>}</div>;\n}\n\n// \ud83d\udc4d Use early return\nfunction Component() {\n  const count = 0;\n\n  if (!count) {\n    return <></>;\n  }\n\n  return (\n    <div>\n      <h1>Messages: {count}</h1>\n    </div>\n  );\n}\n\n// \ud83d\udc4d or use a ternary instead\nfunction Component() {\n  const count = 0;\n\n  return <div>{count ? <h1>Messages: {count}</h1> : <></>}</div>;\n}\n")))}u.isMDXComponent=!0}}]);