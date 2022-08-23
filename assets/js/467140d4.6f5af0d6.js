"use strict";(self.webpackChunkengineering_standards=self.webpackChunkengineering_standards||[]).push([[7984],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,c(c({ref:n},p),{},{components:t})):r.createElement(f,c({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8093:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={},c="Favor Functional Components",i={unversionedId:"clientside/react/components/favor-functional-components",id:"clientside/react/components/favor-functional-components",title:"Favor Functional Components",description:"- eslint-plugin-react-prefer-function-component",source:"@site/docs/clientside/react/components/favor-functional-components.md",sourceDirName:"clientside/react/components",slug:"/clientside/react/components/favor-functional-components",permalink:"/docs/clientside/react/components/favor-functional-components",draft:!1,editUrl:"https://github.com/radically-digital/radically-digital.github.io/tree/main/docs/docs/clientside/react/components/favor-functional-components.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Don't Hardcode Markup",permalink:"/docs/clientside/react/components/don-t-hardcode-markup"},next:{title:"Get Functional - Map and Reduce",permalink:"/docs/clientside/react/components/get-functional-map-and-reduce"}},l={},s=[],p={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"favor-functional-components"},"Favor Functional Components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/eslint-plugin-react-prefer-function-component"},"eslint-plugin-react-prefer-function-component"))),(0,o.kt)("p",null,"Favor functional components - they have a simpler syntax. No lifecycle methods, constructors or boilerplate. You can express the same logic with less characters without losing readability."),(0,o.kt)("p",null,"Unless you need an error boundary they should be your go-to approach. The mental model you need to keep in your head is a lot smaller."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// \ud83d\udc4e Class components are verbose\nclass Counter extends React.Component {\n  state = {\n    counter: 0,\n  };\n\n  constructor(props) {\n    super(props);\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  handleClick() {\n    this.setState({ counter: this.state.counter + 1 });\n  }\n\n  render() {\n    return (\n      <div>\n        <p>counter: {this.state.counter}</p>\n        <button onClick={this.handleClick}>Increment</button>\n      </div>\n    );\n  }\n}\n\n// \ud83d\udc4d Functional components are easier to read and maintain\nfunction Counter() {\n  const [counter, setCounter] = useState(0);\n\n  handleClick = () => setCounter(counter + 1);\n\n  return (\n    <div>\n      <p>counter: {counter}</p>\n      <button onClick={handleClick}>Increment</button>\n    </div>\n  );\n}\n")))}u.isMDXComponent=!0}}]);