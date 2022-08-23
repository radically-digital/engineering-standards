"use strict";(self.webpackChunkengineering_standards=self.webpackChunkengineering_standards||[]).push([[6404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},c="Button Example",i={unversionedId:"clientside/react/application-structure/button-example",id:"clientside/react/application-structure/button-example",title:"Button Example",description:"",source:"@site/docs/clientside/react/application-structure/button-example.md",sourceDirName:"clientside/react/application-structure",slug:"/clientside/react/application-structure/button-example",permalink:"/docs/clientside/react/application-structure/button-example",draft:!1,editUrl:"https://github.com/radically-digital/radically-digital.github.io/tree/main/docs/docs/clientside/react/application-structure/button-example.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/clientside/react/intro"},next:{title:"Create a Common Module",permalink:"/docs/clientside/react/application-structure/create-a-common-module"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"button-example"},"Button Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const SIZE = {\n  PRIMARY: "PRIMARY",\n  SMALL: "SMALL",\n  LARGE: "LARGE",\n} as const;\n\nconst KIND = {\n  PRIMARY: "PRIMARY",\n  SECONDARY: "SECONDARY",\n  DANGER: "DANGER",\n} as const;\n\ninterface Props\n  extends React.DetailedHTMLProps<\n      React.ButtonHTMLAttributes<HTMLButtonElement>,\n      HTMLButtonElement\n    >,\n    React.AriaAttributes {\n  size: keyof typeof SIZE;\n  kind: keyof typeof KIND;\n}\n\nconst getSizeStyle = (size: keyof typeof SIZE) => {\n  switch (size) {\n    case SIZE.SMALL:\n      return styles.small;\n    case SIZE.LARGE:\n      return styles.large;\n    case SIZE.PRIMARY:\n    default:\n      return styles.button;\n  }\n};\n\nconst getKindStyle = (size: keyof typeof KIND) => {\n  switch (size) {\n    case KIND.SECONDARY:\n      return styles.secondary;\n    case KIND.DANGER:\n      return styles.danger;\n    default:\n    case KIND.PRIMARY:\n      return styles.primary;\n  }\n};\n\nexport const Button: React.FC<Props> = ({ children, ...props }) => {\n  const size = getSizeStyle(props.size);\n  const kind = getKindStyle(props.kind);\n  const className = [size, kind].join(" ");\n\n  return (\n    <button className={className} {...props}>\n      {children}\n    </button>\n  );\n};\n')))}u.isMDXComponent=!0}}]);