import{r as Kr,g as Ps,a as As}from"./vendor-Bw76hHLb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Vt={exports:{}},De={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qn;function Os(){if(qn)return De;qn=1;var t=Kr(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(a,c,l){var u,h={},p=null,_=null;l!==void 0&&(p=""+l),c.key!==void 0&&(p=""+c.key),c.ref!==void 0&&(_=c.ref);for(u in c)r.call(c,u)&&!s.hasOwnProperty(u)&&(h[u]=c[u]);if(a&&a.defaultProps)for(u in c=a.defaultProps,c)h[u]===void 0&&(h[u]=c[u]);return{$$typeof:e,type:a,key:p,ref:_,props:h,_owner:i.current}}return De.Fragment=n,De.jsx=o,De.jsxs=o,De}var Kn;function ks(){return Kn||(Kn=1,Vt.exports=Os()),Vt.exports}var b=ks(),f=Kr();const ye=Ps(f);var ot={},Gn;function xs(){if(Gn)return ot;Gn=1;var t=As();return ot.createRoot=t.createRoot,ot.hydrateRoot=t.hydrateRoot,ot}var Ns=xs(),Me={},Jn;function Ls(){if(Jn)return Me;Jn=1,Object.defineProperty(Me,"__esModule",{value:!0}),Me.parse=o,Me.serialize=l;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,s=(()=>{const p=function(){};return p.prototype=Object.create(null),p})();function o(p,_){const d=new s,w=p.length;if(w<2)return d;const y=(_==null?void 0:_.decode)||u;let g=0;do{const E=p.indexOf("=",g);if(E===-1)break;const v=p.indexOf(";",g),T=v===-1?w:v;if(E>T){g=p.lastIndexOf(";",E-1)+1;continue}const I=a(p,g,E),A=c(p,E,I),x=p.slice(I,A);if(d[x]===void 0){let D=a(p,E+1,T),k=c(p,T,D);const H=y(p.slice(D,k));d[x]=H}g=T+1}while(g<w);return d}function a(p,_,d){do{const w=p.charCodeAt(_);if(w!==32&&w!==9)return _}while(++_<d);return d}function c(p,_,d){for(;_>d;){const w=p.charCodeAt(--_);if(w!==32&&w!==9)return _+1}return d}function l(p,_,d){const w=(d==null?void 0:d.encode)||encodeURIComponent;if(!t.test(p))throw new TypeError(`argument name is invalid: ${p}`);const y=w(_);if(!e.test(y))throw new TypeError(`argument val is invalid: ${_}`);let g=p+"="+y;if(!d)return g;if(d.maxAge!==void 0){if(!Number.isInteger(d.maxAge))throw new TypeError(`option maxAge is invalid: ${d.maxAge}`);g+="; Max-Age="+d.maxAge}if(d.domain){if(!n.test(d.domain))throw new TypeError(`option domain is invalid: ${d.domain}`);g+="; Domain="+d.domain}if(d.path){if(!r.test(d.path))throw new TypeError(`option path is invalid: ${d.path}`);g+="; Path="+d.path}if(d.expires){if(!h(d.expires)||!Number.isFinite(d.expires.valueOf()))throw new TypeError(`option expires is invalid: ${d.expires}`);g+="; Expires="+d.expires.toUTCString()}if(d.httpOnly&&(g+="; HttpOnly"),d.secure&&(g+="; Secure"),d.partitioned&&(g+="; Partitioned"),d.priority)switch(typeof d.priority=="string"?d.priority.toLowerCase():void 0){case"low":g+="; Priority=Low";break;case"medium":g+="; Priority=Medium";break;case"high":g+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${d.priority}`)}if(d.sameSite)switch(typeof d.sameSite=="string"?d.sameSite.toLowerCase():d.sameSite){case!0:case"strict":g+="; SameSite=Strict";break;case"lax":g+="; SameSite=Lax";break;case"none":g+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${d.sameSite}`)}return g}function u(p){if(p.indexOf("%")===-1)return p;try{return decodeURIComponent(p)}catch{return p}}function h(p){return i.call(p)==="[object Date]"}return Me}Ls();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Yn="popstate";function Ds(t={}){function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return rn("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ve(i)}return Us(e,n,null,t)}function P(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function F(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ms(){return Math.random().toString(36).substring(2,10)}function Xn(t,e){return{usr:t.state,key:t.key,idx:e}}function rn(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Ae(e):e,state:n,key:e&&e.key||r||Ms()}}function Ve({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ae(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function Us(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a="POP",c=null,l=u();l==null&&(l=0,o.replaceState({...o.state,idx:l},""));function u(){return(o.state||{idx:null}).idx}function h(){a="POP";let y=u(),g=y==null?null:y-l;l=y,c&&c({action:a,location:w.location,delta:g})}function p(y,g){a="PUSH";let E=rn(w.location,y,g);l=u()+1;let v=Xn(E,l),T=w.createHref(E);try{o.pushState(v,"",T)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(T)}s&&c&&c({action:a,location:w.location,delta:1})}function _(y,g){a="REPLACE";let E=rn(w.location,y,g);l=u();let v=Xn(E,l),T=w.createHref(E);o.replaceState(v,"",T),s&&c&&c({action:a,location:w.location,delta:0})}function d(y){let g=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof y=="string"?y:Ve(y);return E=E.replace(/ $/,"%20"),P(g,`No window.location.(origin|href) available to create URL for href: ${E}`),new URL(E,g)}let w={get action(){return a},get location(){return t(i,o)},listen(y){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Yn,h),c=y,()=>{i.removeEventListener(Yn,h),c=null}},createHref(y){return e(i,y)},createURL:d,encodeLocation(y){let g=d(y);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:_,go(y){return o.go(y)}};return w}function Gr(t,e,n="/"){return Fs(t,e,n,!1)}function Fs(t,e,n,r){let i=typeof e=="string"?Ae(e):e,s=le(i.pathname||"/",n);if(s==null)return null;let o=Jr(t);js(o);let a=null;for(let c=0;a==null&&c<o.length;++c){let l=Ys(s);a=Gs(o[c],l,r)}return a}function Jr(t,e=[],n=[],r=""){let i=(s,o,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(P(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length));let l=Q([r,c.relativePath]),u=n.concat(c);s.children&&s.children.length>0&&(P(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),Jr(s.children,e,u,l)),!(s.path==null&&!s.index)&&e.push({path:l,score:qs(l,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let c of Yr(s.path))i(s,o,c)}),e}function Yr(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Yr(r.join("/")),a=[];return a.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function js(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Ks(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Bs=/^:[\w-]+$/,$s=3,Hs=2,Vs=1,Ws=10,zs=-2,Qn=t=>t==="*";function qs(t,e){let n=t.split("/"),r=n.length;return n.some(Qn)&&(r+=zs),e&&(r+=Hs),n.filter(i=>!Qn(i)).reduce((i,s)=>i+(Bs.test(s)?$s:s===""?Vs:Ws),r)}function Ks(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Gs(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let c=r[a],l=a===r.length-1,u=s==="/"?e:e.slice(s.length)||"/",h=wt({path:c.relativePath,caseSensitive:c.caseSensitive,end:l},u),p=c.route;if(!h&&l&&n&&!r[r.length-1].route.index&&(h=wt({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},u)),!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:Q([s,h.pathname]),pathnameBase:eo(Q([s,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(s=Q([s,h.pathnameBase]))}return o}function wt(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Js(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((l,{paramName:u,isOptional:h},p)=>{if(u==="*"){let d=a[p]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}const _=a[p];return h&&!_?l[u]=void 0:l[u]=(_||"").replace(/%2F/g,"/"),l},{}),pathname:s,pathnameBase:o,pattern:t}}function Js(t,e=!1,n=!0){F(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ys(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return F(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function le(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Xs(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ae(t):t;return{pathname:n?n.startsWith("/")?n:Qs(n,e):e,search:to(r),hash:no(i)}}function Qs(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wt(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Zs(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function vn(t){let e=Zs(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function In(t,e,n,r=!1){let i;typeof t=="string"?i=Ae(t):(i={...t},P(!i.pathname||!i.pathname.includes("?"),Wt("?","pathname","search",i)),P(!i.pathname||!i.pathname.includes("#"),Wt("#","pathname","hash",i)),P(!i.search||!i.search.includes("#"),Wt("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}a=h>=0?e[h]:"/"}let c=Xs(i,a),l=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(l||u)&&(c.pathname+="/"),c}var Q=t=>t.join("/").replace(/\/\/+/g,"/"),eo=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),to=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,no=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ro(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Xr=["POST","PUT","PATCH","DELETE"];new Set(Xr);var io=["GET",...Xr];new Set(io);var Oe=f.createContext(null);Oe.displayName="DataRouter";var kt=f.createContext(null);kt.displayName="DataRouterState";var Qr=f.createContext({isTransitioning:!1});Qr.displayName="ViewTransition";var so=f.createContext(new Map);so.displayName="Fetchers";var oo=f.createContext(null);oo.displayName="Await";var B=f.createContext(null);B.displayName="Navigation";var Je=f.createContext(null);Je.displayName="Location";var K=f.createContext({outlet:null,matches:[],isDataRoute:!1});K.displayName="Route";var Sn=f.createContext(null);Sn.displayName="RouteError";function ao(t,{relative:e}={}){P(ke(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=f.useContext(B),{hash:i,pathname:s,search:o}=Ye(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:Q([n,s])),r.createHref({pathname:a,search:o,hash:i})}function ke(){return f.useContext(Je)!=null}function ue(){return P(ke(),"useLocation() may be used only in the context of a <Router> component."),f.useContext(Je).location}var Zr="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ei(t){f.useContext(B).static||f.useLayoutEffect(t)}function xt(){let{isDataRoute:t}=f.useContext(K);return t?bo():co()}function co(){P(ke(),"useNavigate() may be used only in the context of a <Router> component.");let t=f.useContext(Oe),{basename:e,navigator:n}=f.useContext(B),{matches:r}=f.useContext(K),{pathname:i}=ue(),s=JSON.stringify(vn(r)),o=f.useRef(!1);return ei(()=>{o.current=!0}),f.useCallback((c,l={})=>{if(F(o.current,Zr),!o.current)return;if(typeof c=="number"){n.go(c);return}let u=In(c,JSON.parse(s),i,l.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:Q([e,u.pathname])),(l.replace?n.replace:n.push)(u,l.state,l)},[e,n,s,i,t])}f.createContext(null);function Ye(t,{relative:e}={}){let{matches:n}=f.useContext(K),{pathname:r}=ue(),i=JSON.stringify(vn(n));return f.useMemo(()=>In(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function lo(t,e){return ti(t,e)}function ti(t,e,n,r){var g;P(ke(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=f.useContext(B),{matches:s}=f.useContext(K),o=s[s.length-1],a=o?o.params:{},c=o?o.pathname:"/",l=o?o.pathnameBase:"/",u=o&&o.route;{let E=u&&u.path||"";ni(c,!u||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let h=ue(),p;if(e){let E=typeof e=="string"?Ae(e):e;P(l==="/"||((g=E.pathname)==null?void 0:g.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${E.pathname}" was given in the \`location\` prop.`),p=E}else p=h;let _=p.pathname||"/",d=_;if(l!=="/"){let E=l.replace(/^\//,"").split("/");d="/"+_.replace(/^\//,"").split("/").slice(E.length).join("/")}let w=Gr(t,{pathname:d});F(u||w!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),F(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=mo(w&&w.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:Q([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:Q([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&y?f.createElement(Je.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},y):y}function uo(){let t=_o(),e=ro(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=f.createElement(f.Fragment,null,f.createElement("p",null,"💿 Hey developer 👋"),f.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",f.createElement("code",{style:s},"ErrorBoundary")," or"," ",f.createElement("code",{style:s},"errorElement")," prop on your route.")),f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},e),n?f.createElement("pre",{style:i},n):null,o)}var ho=f.createElement(uo,null),fo=class extends f.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?f.createElement(K.Provider,{value:this.props.routeContext},f.createElement(Sn.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function po({routeContext:t,match:e,children:n}){let r=f.useContext(Oe);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),f.createElement(K.Provider,{value:t},n)}function mo(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,s=n==null?void 0:n.errors;if(s!=null){let c=i.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id])!==void 0);P(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let o=!1,a=-1;if(n)for(let c=0;c<i.length;c++){let l=i[c];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(a=c),l.route.id){let{loaderData:u,errors:h}=n,p=l.route.loader&&!u.hasOwnProperty(l.route.id)&&(!h||h[l.route.id]===void 0);if(l.route.lazy||p){o=!0,a>=0?i=i.slice(0,a+1):i=[i[0]];break}}}return i.reduceRight((c,l,u)=>{let h,p=!1,_=null,d=null;n&&(h=s&&l.route.id?s[l.route.id]:void 0,_=l.route.errorElement||ho,o&&(a<0&&u===0?(ni("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,d=null):a===u&&(p=!0,d=l.route.hydrateFallbackElement||null)));let w=e.concat(i.slice(0,u+1)),y=()=>{let g;return h?g=_:p?g=d:l.route.Component?g=f.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=c,f.createElement(po,{match:l,routeContext:{outlet:c,matches:w,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?f.createElement(fo,{location:n.location,revalidation:n.revalidation,component:_,error:h,children:y(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):y()},null)}function Rn(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function go(t){let e=f.useContext(Oe);return P(e,Rn(t)),e}function yo(t){let e=f.useContext(kt);return P(e,Rn(t)),e}function wo(t){let e=f.useContext(K);return P(e,Rn(t)),e}function Tn(t){let e=wo(t),n=e.matches[e.matches.length-1];return P(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function Eo(){return Tn("useRouteId")}function _o(){var r;let t=f.useContext(Sn),e=yo("useRouteError"),n=Tn("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function bo(){let{router:t}=go("useNavigate"),e=Tn("useNavigate"),n=f.useRef(!1);return ei(()=>{n.current=!0}),f.useCallback(async(i,s={})=>{F(n.current,Zr),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var Zn={};function ni(t,e,n){!e&&!Zn[t]&&(Zn[t]=!0,F(!1,n))}f.memo(vo);function vo({routes:t,future:e,state:n}){return ti(t,void 0,n,e)}function er({to:t,replace:e,state:n,relative:r}){P(ke(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=f.useContext(B);F(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=f.useContext(K),{pathname:o}=ue(),a=xt(),c=In(t,vn(s),o,r==="path"),l=JSON.stringify(c);return f.useEffect(()=>{a(JSON.parse(l),{replace:e,state:n,relative:r})},[a,l,r,e,n]),null}function sn(t){P(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Io({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){P(!ke(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=f.useMemo(()=>({basename:o,navigator:i,static:s,future:{}}),[o,i,s]);typeof n=="string"&&(n=Ae(n));let{pathname:c="/",search:l="",hash:u="",state:h=null,key:p="default"}=n,_=f.useMemo(()=>{let d=le(c,o);return d==null?null:{location:{pathname:d,search:l,hash:u,state:h,key:p},navigationType:r}},[o,c,l,u,h,p,r]);return F(_!=null,`<Router basename="${o}"> is not able to match the URL "${c}${l}${u}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:f.createElement(B.Provider,{value:a},f.createElement(Je.Provider,{children:e,value:_}))}function So({children:t,location:e}){return lo(on(t),e)}function on(t,e=[]){let n=[];return f.Children.forEach(t,(r,i)=>{if(!f.isValidElement(r))return;let s=[...e,i];if(r.type===f.Fragment){n.push.apply(n,on(r.props.children,s));return}P(r.type===sn,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),P(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=on(r.props.children,s)),n.push(o)}),n}var lt="get",ut="application/x-www-form-urlencoded";function Nt(t){return t!=null&&typeof t.tagName=="string"}function Ro(t){return Nt(t)&&t.tagName.toLowerCase()==="button"}function To(t){return Nt(t)&&t.tagName.toLowerCase()==="form"}function Co(t){return Nt(t)&&t.tagName.toLowerCase()==="input"}function Po(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ao(t,e){return t.button===0&&(!e||e==="_self")&&!Po(t)}var at=null;function Oo(){if(at===null)try{new FormData(document.createElement("form"),0),at=!1}catch{at=!0}return at}var ko=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zt(t){return t!=null&&!ko.has(t)?(F(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ut}"`),null):t}function xo(t,e){let n,r,i,s,o;if(To(t)){let a=t.getAttribute("action");r=a?le(a,e):null,n=t.getAttribute("method")||lt,i=zt(t.getAttribute("enctype"))||ut,s=new FormData(t)}else if(Ro(t)||Co(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=t.getAttribute("formaction")||a.getAttribute("action");if(r=c?le(c,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||lt,i=zt(t.getAttribute("formenctype"))||zt(a.getAttribute("enctype"))||ut,s=new FormData(a,t),!Oo()){let{name:l,type:u,value:h}=t;if(u==="image"){let p=l?`${l}.`:"";s.append(`${p}x`,"0"),s.append(`${p}y`,"0")}else l&&s.append(l,h)}}else{if(Nt(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=lt,r=null,i=ut,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}function Cn(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function No(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Lo(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Do(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await No(s,n);return o.links?o.links():[]}return[]}));return jo(r.flat(1).filter(Lo).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function tr(t,e,n,r,i,s){let o=(c,l)=>n[l]?c.route.id!==n[l].route.id:!0,a=(c,l)=>{var u;return n[l].pathname!==c.pathname||((u=n[l].route.path)==null?void 0:u.endsWith("*"))&&n[l].params["*"]!==c.params["*"]};return s==="assets"?e.filter((c,l)=>o(c,l)||a(c,l)):s==="data"?e.filter((c,l)=>{var h;let u=r.routes[c.route.id];if(!u||!u.hasLoader)return!1;if(o(c,l)||a(c,l))return!0;if(c.route.shouldRevalidate){let p=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((h=n[0])==null?void 0:h.params)||{},nextUrl:new URL(t,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function Mo(t,e){return Uo(t.map(n=>{let r=e.routes[n.route.id];if(!r)return[];let i=[r.module];return r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Uo(t){return[...new Set(t)]}function Fo(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function jo(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(Fo(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function Bo(t){let e=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function $o(){let t=f.useContext(Oe);return Cn(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Ho(){let t=f.useContext(kt);return Cn(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Pn=f.createContext(void 0);Pn.displayName="FrameworkContext";function ri(){let t=f.useContext(Pn);return Cn(t,"You must render this element inside a <HydratedRouter> element"),t}function Vo(t,e){let n=f.useContext(Pn),[r,i]=f.useState(!1),[s,o]=f.useState(!1),{onFocus:a,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:h}=e,p=f.useRef(null);f.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let w=g=>{g.forEach(E=>{o(E.isIntersecting)})},y=new IntersectionObserver(w,{threshold:.5});return p.current&&y.observe(p.current),()=>{y.disconnect()}}},[t]),f.useEffect(()=>{if(r){let w=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(w)}}},[r]);let _=()=>{i(!0)},d=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,p,{}]:[s,p,{onFocus:Ue(a,_),onBlur:Ue(c,d),onMouseEnter:Ue(l,_),onMouseLeave:Ue(u,d),onTouchStart:Ue(h,_)}]:[!1,p,{}]}function Ue(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function Wo({page:t,...e}){let{router:n}=$o(),r=f.useMemo(()=>Gr(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?f.createElement(qo,{page:t,matches:r,...e}):null}function zo(t){let{manifest:e,routeModules:n}=ri(),[r,i]=f.useState([]);return f.useEffect(()=>{let s=!1;return Do(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function qo({page:t,matches:e,...n}){let r=ue(),{manifest:i,routeModules:s}=ri(),{loaderData:o,matches:a}=Ho(),c=f.useMemo(()=>tr(t,e,a,i,r,"data"),[t,e,a,i,r]),l=f.useMemo(()=>tr(t,e,a,i,r,"assets"),[t,e,a,i,r]),u=f.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let _=new Set,d=!1;if(e.forEach(y=>{var E;let g=i.routes[y.route.id];!g||!g.hasLoader||(!c.some(v=>v.route.id===y.route.id)&&y.route.id in o&&((E=s[y.route.id])!=null&&E.shouldRevalidate)||g.hasClientLoader?d=!0:_.add(y.route.id))}),_.size===0)return[];let w=Bo(t);return d&&_.size>0&&w.searchParams.set("_routes",e.filter(y=>_.has(y.route.id)).map(y=>y.route.id).join(",")),[w.pathname+w.search]},[o,r,i,c,e,t,s]),h=f.useMemo(()=>Mo(l,i),[l,i]),p=zo(l);return f.createElement(f.Fragment,null,u.map(_=>f.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...n})),h.map(_=>f.createElement("link",{key:_,rel:"modulepreload",href:_,...n})),p.map(({key:_,link:d})=>f.createElement("link",{key:_,...d})))}function Ko(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var ii=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ii&&(window.__reactRouterVersion="7.1.3")}catch{}function Go({basename:t,children:e,window:n}){let r=f.useRef();r.current==null&&(r.current=Ds({window:n,v5Compat:!0}));let i=r.current,[s,o]=f.useState({action:i.action,location:i.location}),a=f.useCallback(c=>{f.startTransition(()=>o(c))},[o]);return f.useLayoutEffect(()=>i.listen(a),[i,a]),f.createElement(Io,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:i})}var si=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oi=f.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:a,target:c,to:l,preventScrollReset:u,viewTransition:h,...p},_){let{basename:d}=f.useContext(B),w=typeof l=="string"&&si.test(l),y,g=!1;if(typeof l=="string"&&w&&(y=l,ii))try{let k=new URL(window.location.href),H=l.startsWith("//")?new URL(k.protocol+l):new URL(l),zn=le(H.pathname,d);H.origin===k.origin&&zn!=null?l=zn+H.search+H.hash:g=!0}catch{F(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let E=ao(l,{relative:i}),[v,T,I]=Vo(r,p),A=Qo(l,{replace:o,state:a,target:c,preventScrollReset:u,relative:i,viewTransition:h});function x(k){e&&e(k),k.defaultPrevented||A(k)}let D=f.createElement("a",{...p,...I,href:y||E,onClick:g||s?e:x,ref:Ko(_,T),target:c,"data-discover":!w&&n==="render"?"true":void 0});return v&&!w?f.createElement(f.Fragment,null,D,f.createElement(Wo,{page:E})):D});oi.displayName="Link";var Jo=f.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:a,children:c,...l},u){let h=Ye(o,{relative:l.relative}),p=ue(),_=f.useContext(kt),{navigator:d,basename:w}=f.useContext(B),y=_!=null&&ra(h)&&a===!0,g=d.encodeLocation?d.encodeLocation(h).pathname:h.pathname,E=p.pathname,v=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;n||(E=E.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&w&&(v=le(v,w)||v);const T=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let I=E===g||!i&&E.startsWith(g)&&E.charAt(T)==="/",A=v!=null&&(v===g||!i&&v.startsWith(g)&&v.charAt(g.length)==="/"),x={isActive:I,isPending:A,isTransitioning:y},D=I?e:void 0,k;typeof r=="function"?k=r(x):k=[r,I?"active":null,A?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let H=typeof s=="function"?s(x):s;return f.createElement(oi,{...l,"aria-current":D,className:k,ref:u,style:H,to:o,viewTransition:a},typeof c=="function"?c(x):c)});Jo.displayName="NavLink";var Yo=f.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=lt,action:a,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:h,...p},_)=>{let d=ta(),w=na(a,{relative:l}),y=o.toLowerCase()==="get"?"get":"post",g=typeof a=="string"&&si.test(a),E=v=>{if(c&&c(v),v.defaultPrevented)return;v.preventDefault();let T=v.nativeEvent.submitter,I=(T==null?void 0:T.getAttribute("formmethod"))||o;d(T||v.currentTarget,{fetcherKey:e,method:I,navigate:n,replace:i,state:s,relative:l,preventScrollReset:u,viewTransition:h})};return f.createElement("form",{ref:_,method:y,action:w,onSubmit:r?c:E,...p,"data-discover":!g&&t==="render"?"true":void 0})});Yo.displayName="Form";function Xo(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ai(t){let e=f.useContext(Oe);return P(e,Xo(t)),e}function Qo(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o}={}){let a=xt(),c=ue(),l=Ye(t,{relative:s});return f.useCallback(u=>{if(Ao(u,e)){u.preventDefault();let h=n!==void 0?n:Ve(c)===Ve(l);a(t,{replace:h,state:r,preventScrollReset:i,relative:s,viewTransition:o})}},[c,a,l,n,r,e,t,i,s,o])}var Zo=0,ea=()=>`__${String(++Zo)}__`;function ta(){let{router:t}=ai("useSubmit"),{basename:e}=f.useContext(B),n=Eo();return f.useCallback(async(r,i={})=>{let{action:s,method:o,encType:a,formData:c,body:l}=xo(r,e);if(i.navigate===!1){let u=i.fetcherKey||ea();await t.fetch(u,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:c,body:l,formMethod:i.method||o,formEncType:i.encType||a,flushSync:i.flushSync})}else await t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:c,body:l,formMethod:i.method||o,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function na(t,{relative:e}={}){let{basename:n}=f.useContext(B),r=f.useContext(K);P(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Ye(t||".",{relative:e})},o=ue();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),c=a.getAll("index");if(c.some(u=>u==="")){a.delete("index"),c.filter(h=>h).forEach(h=>a.append("index",h));let u=a.toString();s.search=u?`?${u}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Q([n,s.pathname])),Ve(s)}function ra(t,e={}){let n=f.useContext(Qr);P(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=ai("useViewTransitionState"),i=Ye(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=le(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=le(n.nextLocation.pathname,r)||n.nextLocation.pathname;return wt(i.pathname,o)!=null||wt(i.pathname,s)!=null}new TextEncoder;var nr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ia=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},li={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),r.push(n[u],n[h],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ci(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ia(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new sa;const p=s<<2|a>>4;if(r.push(p),l!==64){const _=a<<4&240|l>>2;if(r.push(_),h!==64){const d=l<<6&192|h;r.push(d)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oa=function(t){const e=ci(t);return li.encodeByteArray(e,!0)},ui=function(t){return oa(t).replace(/\./g,"")},di=function(t){try{return li.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=()=>aa().__FIREBASE_DEFAULTS__,la=()=>{if(typeof process>"u"||typeof nr>"u")return;const t=nr.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ua=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&di(t[1]);return e&&JSON.parse(e)},An=()=>{try{return ca()||la()||ua()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},da=t=>{var e,n;return(n=(e=An())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hi=()=>{var t;return(t=An())===null||t===void 0?void 0:t.config},fi=t=>{var e;return(e=An())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(L())}function pa(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ma(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ga(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ya(){const t=L();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wa(){try{return typeof indexedDB=="object"}catch{return!1}}function Ea(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="FirebaseError";class de extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_a,Object.setPrototypeOf(this,de.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xe.prototype.create)}}class Xe{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ba(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new de(i,a,r)}}function ba(t,e){return t.replace(va,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const va=/\{\$([^}]+)}/g;function Ia(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Et(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(rr(s)&&rr(o)){if(!Et(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function rr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function je(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Be(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Sa(t,e){const n=new Ra(t,e);return n.subscribe.bind(n)}class Ra{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ta(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qt),i.error===void 0&&(i.error=qt),i.complete===void 0&&(i.complete=qt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ta(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t){return t&&t._delegate?t._delegate:t}class Pe{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ha;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Aa(e))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=me){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=me){return this.instances.has(e)}getOptions(e=me){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Pa(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=me){return this.component?this.component.multipleInstances?e:me:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pa(t){return t===me?void 0:t}function Aa(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ca(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var C;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(C||(C={}));const ka={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},xa=C.INFO,Na={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},La=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Na[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pi{constructor(e){this.name=e,this._logLevel=xa,this._logHandler=La,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ka[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}const Da=(t,e)=>e.some(n=>t instanceof n);let ir,sr;function Ma(){return ir||(ir=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ua(){return sr||(sr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mi=new WeakMap,an=new WeakMap,gi=new WeakMap,Kt=new WeakMap,On=new WeakMap;function Fa(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ae(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mi.set(n,t)}).catch(()=>{}),On.set(e,t),e}function ja(t){if(an.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});an.set(t,e)}let cn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return an.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gi.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ae(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ba(t){cn=t(cn)}function $a(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gt(this),e,...n);return gi.set(r,e.sort?e.sort():[e]),ae(r)}:Ua().includes(t)?function(...e){return t.apply(Gt(this),e),ae(mi.get(this))}:function(...e){return ae(t.apply(Gt(this),e))}}function Ha(t){return typeof t=="function"?$a(t):(t instanceof IDBTransaction&&ja(t),Da(t,Ma())?new Proxy(t,cn):t)}function ae(t){if(t instanceof IDBRequest)return Fa(t);if(Kt.has(t))return Kt.get(t);const e=Ha(t);return e!==t&&(Kt.set(t,e),On.set(e,t)),e}const Gt=t=>On.get(t);function Va(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ae(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ae(o.result),c.oldVersion,c.newVersion,ae(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Wa=["get","getKey","getAll","getAllKeys","count"],za=["put","add","delete","clear"],Jt=new Map;function or(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jt.get(e))return Jt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=za.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Wa.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Jt.set(e,s),s}Ba(t=>({...t,get:(e,n,r)=>or(e,n)||t.get(e,n,r),has:(e,n)=>!!or(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ka(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ka(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ln="@firebase/app",ar="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new pi("@firebase/app"),Ga="@firebase/app-compat",Ja="@firebase/analytics-compat",Ya="@firebase/analytics",Xa="@firebase/app-check-compat",Qa="@firebase/app-check",Za="@firebase/auth",ec="@firebase/auth-compat",tc="@firebase/database",nc="@firebase/data-connect",rc="@firebase/database-compat",ic="@firebase/functions",sc="@firebase/functions-compat",oc="@firebase/installations",ac="@firebase/installations-compat",cc="@firebase/messaging",lc="@firebase/messaging-compat",uc="@firebase/performance",dc="@firebase/performance-compat",hc="@firebase/remote-config",fc="@firebase/remote-config-compat",pc="@firebase/storage",mc="@firebase/storage-compat",gc="@firebase/firestore",yc="@firebase/vertexai",wc="@firebase/firestore-compat",Ec="firebase",_c="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="[DEFAULT]",bc={[ln]:"fire-core",[Ga]:"fire-core-compat",[Ya]:"fire-analytics",[Ja]:"fire-analytics-compat",[Qa]:"fire-app-check",[Xa]:"fire-app-check-compat",[Za]:"fire-auth",[ec]:"fire-auth-compat",[tc]:"fire-rtdb",[nc]:"fire-data-connect",[rc]:"fire-rtdb-compat",[ic]:"fire-fn",[sc]:"fire-fn-compat",[oc]:"fire-iid",[ac]:"fire-iid-compat",[cc]:"fire-fcm",[lc]:"fire-fcm-compat",[uc]:"fire-perf",[dc]:"fire-perf-compat",[hc]:"fire-rc",[fc]:"fire-rc-compat",[pc]:"fire-gcs",[mc]:"fire-gcs-compat",[gc]:"fire-fst",[wc]:"fire-fst-compat",[yc]:"fire-vertex","fire-js":"fire-js",[Ec]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new Map,vc=new Map,dn=new Map;function cr(t,e){try{t.container.addComponent(e)}catch(n){ee.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function We(t){const e=t.name;if(dn.has(e))return ee.debug(`There were multiple attempts to register component ${e}.`),!1;dn.set(e,t);for(const n of _t.values())cr(n,t);for(const n of vc.values())cr(n,t);return!0}function yi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function W(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ce=new Xe("app","Firebase",Ic);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ce.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=_c;function wi(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:un,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ce.create("bad-app-name",{appName:String(i)});if(n||(n=hi()),!n)throw ce.create("no-options");const s=_t.get(i);if(s){if(Et(n,s.options)&&Et(r,s.config))return s;throw ce.create("duplicate-app",{appName:i})}const o=new Oa(i);for(const c of dn.values())o.addComponent(c);const a=new Sc(n,r,o);return _t.set(i,a),a}function Rc(t=un){const e=_t.get(t);if(!e&&t===un&&hi())return wi();if(!e)throw ce.create("no-app",{appName:t});return e}function Se(t,e,n){var r;let i=(r=bc[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ee.warn(a.join(" "));return}We(new Pe(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="firebase-heartbeat-database",Cc=1,ze="firebase-heartbeat-store";let Yt=null;function Ei(){return Yt||(Yt=Va(Tc,Cc,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ze)}catch(n){console.warn(n)}}}}).catch(t=>{throw ce.create("idb-open",{originalErrorMessage:t.message})})),Yt}async function Pc(t){try{const n=(await Ei()).transaction(ze),r=await n.objectStore(ze).get(_i(t));return await n.done,r}catch(e){if(e instanceof de)ee.warn(e.message);else{const n=ce.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ee.warn(n.message)}}}async function lr(t,e){try{const r=(await Ei()).transaction(ze,"readwrite");await r.objectStore(ze).put(e,_i(t)),await r.done}catch(n){if(n instanceof de)ee.warn(n.message);else{const r=ce.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ee.warn(r.message)}}}function _i(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=1024,Oc=30*24*60*60*1e3;class kc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nc(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ur();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Oc}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ee.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ur(),{heartbeatsToSend:r,unsentEntries:i}=xc(this._heartbeatsCache.heartbeats),s=ui(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ee.warn(n),""}}}function ur(){return new Date().toISOString().substring(0,10)}function xc(t,e=Ac){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),dr(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),dr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wa()?Ea().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Pc(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function dr(t){return ui(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t){We(new Pe("platform-logger",e=>new qa(e),"PRIVATE")),We(new Pe("heartbeat",e=>new kc(e),"PRIVATE")),Se(ln,ar,t),Se(ln,ar,"esm2017"),Se("fire-js","")}Lc("");function kn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function bi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dc=bi,vi=new Xe("auth","Firebase",bi());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new pi("@firebase/auth");function Mc(t,...e){bt.logLevel<=C.WARN&&bt.warn(`Auth (${Ze}): ${t}`,...e)}function dt(t,...e){bt.logLevel<=C.ERROR&&bt.error(`Auth (${Ze}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,...e){throw xn(t,...e)}function z(t,...e){return xn(t,...e)}function Ii(t,e,n){const r=Object.assign(Object.assign({},Dc()),{[e]:n});return new Xe("auth","Firebase",r).create(e,{appName:t.name})}function Z(t){return Ii(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xn(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vi.create(t,...e)}function S(t,e,...n){if(!t)throw xn(e,...n)}function J(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dt(e),new Error(e)}function te(t,e){t||J(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Uc(){return hr()==="http:"||hr()==="https:"}function hr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uc()||ma()||"connection"in navigator)?navigator.onLine:!0}function jc(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){this.shortDelay=e,this.longDelay=n,te(n>e,"Short delay should be less than long delay!"),this.isMobile=fa()||ga()}get(){return Fc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,e){te(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;J("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;J("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;J("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new et(3e4,6e4);function fe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pe(t,e,n,r,i={}){return Ri(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qe(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},s);return pa()||(l.referrerPolicy="no-referrer"),Si.fetch()(Ti(t,t.config.apiHost,n,a),l)})}async function Ri(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bc),e);try{const i=new Vc(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ct(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ct(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ct(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ct(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ii(t,u,l);j(t,u)}}catch(i){if(i instanceof de)throw i;j(t,"network-request-failed",{message:String(i)})}}async function tt(t,e,n,r,i={}){const s=await pe(t,e,n,r,i);return"mfaPendingCredential"in s&&j(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ti(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Nn(t.config,i):`${t.config.apiScheme}://${i}`}function Hc(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Vc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(z(this.auth,"network-request-failed")),$c.get())})}}function ct(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=z(t,e,r);return i.customData._tokenResponse=n,i}function fr(t){return t!==void 0&&t.enterprise!==void 0}class Wc{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Hc(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function zc(t,e){return pe(t,"GET","/v2/recaptchaConfig",fe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qc(t,e){return pe(t,"POST","/v1/accounts:delete",e)}async function Ci(t,e){return pe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kc(t,e=!1){const n=he(t),r=await n.getIdToken(e),i=Ln(r);S(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:$e(Xt(i.auth_time)),issuedAtTime:$e(Xt(i.iat)),expirationTime:$e(Xt(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xt(t){return Number(t)*1e3}function Ln(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return dt("JWT malformed, contained fewer than 3 sections"),null;try{const i=di(n);return i?JSON.parse(i):(dt("Failed to decode base64 JWT payload"),null)}catch(i){return dt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pr(t){const e=Ln(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof de&&Gc(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Gc({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$e(this.lastLoginAt),this.creationTime=$e(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qe(t,Ci(n,{idToken:r}));S(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Pi(s.providerUserInfo):[],a=Xc(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fn(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Yc(t){const e=he(t);await vt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xc(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Pi(t){return t.map(e=>{var{providerId:n}=e,r=kn(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qc(t,e){const n=await Ri(t,{},async()=>{const r=Qe({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ti(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Si.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Zc(t,e){return pe(t,"POST","/v2/accounts:revokeToken",fe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){S(e.length!==0,"internal-error");const n=pr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(S(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Qc(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Re;return r&&(S(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(S(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(S(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Re,this.toJSON())}_performRefresh(){return J("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Y{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=kn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fn(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qe(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Kc(this,e)}reload(){return Yc(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Y(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(W(this.auth.app))return Promise.reject(Z(this.auth));const e=await this.getIdToken();return await qe(this,qc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,d=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,g=(l=n.createdAt)!==null&&l!==void 0?l:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:T,isAnonymous:I,providerData:A,stsTokenManager:x}=n;S(v&&x,e,"internal-error");const D=Re.fromJSON(this.name,x);S(typeof v=="string",e,"internal-error"),ne(h,e.name),ne(p,e.name),S(typeof T=="boolean",e,"internal-error"),S(typeof I=="boolean",e,"internal-error"),ne(_,e.name),ne(d,e.name),ne(w,e.name),ne(y,e.name),ne(g,e.name),ne(E,e.name);const k=new Y({uid:v,auth:e,email:p,emailVerified:T,displayName:h,isAnonymous:I,photoURL:d,phoneNumber:_,tenantId:w,stsTokenManager:D,createdAt:g,lastLoginAt:E});return A&&Array.isArray(A)&&(k.providerData=A.map(H=>Object.assign({},H))),y&&(k._redirectEventId=y),k}static async _fromIdTokenResponse(e,n,r=!1){const i=new Re;i.updateFromServerResponse(n);const s=new Y({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vt(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];S(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Pi(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Re;a.updateFromIdToken(r);const c=new Y({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new fn(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new Map;function X(t){te(t instanceof Function,"Expected a class definition");let e=mr.get(t);return e?(te(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mr.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ai.type="NONE";const gr=Ai;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e,n){return`firebase:${t}:${e}:${n}`}class Te{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ht(this.userKey,i.apiKey,s),this.fullPersistenceKey=ht("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Y._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Te(X(gr),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||X(gr);const o=ht(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Y._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Te(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Te(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ni(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Oi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Di(e))return"Blackberry";if(Mi(e))return"Webos";if(ki(e))return"Safari";if((e.includes("chrome/")||xi(e))&&!e.includes("edge/"))return"Chrome";if(Li(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Oi(t=L()){return/firefox\//i.test(t)}function ki(t=L()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xi(t=L()){return/crios\//i.test(t)}function Ni(t=L()){return/iemobile/i.test(t)}function Li(t=L()){return/android/i.test(t)}function Di(t=L()){return/blackberry/i.test(t)}function Mi(t=L()){return/webos/i.test(t)}function Dn(t=L()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function el(t=L()){var e;return Dn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tl(){return ya()&&document.documentMode===10}function Ui(t=L()){return Dn(t)||Li(t)||Mi(t)||Di(t)||/windows phone/i.test(t)||Ni(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t,e=[]){let n;switch(t){case"Browser":n=yr(L());break;case"Worker":n=`${yr(L())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ze}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(t,e={}){return pe(t,"GET","/v2/passwordPolicy",fe(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=6;class sl{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:il,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wr(this),this.idTokenSubscription=new wr(this),this.beforeStateQueue=new nl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=X(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Te.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ci(this,{idToken:e}),r=await Y._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(W(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(W(this.app))return Promise.reject(Z(this));const n=e?he(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return W(this.app)?Promise.reject(Z(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return W(this.app)?Promise.reject(Z(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(X(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rl(this),n=new sl(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xe("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Zc(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&X(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await Te.create(this,[X(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Mc(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ve(t){return he(t)}class wr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sa(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function al(t){Lt=t}function ji(t){return Lt.loadJS(t)}function cl(){return Lt.recaptchaEnterpriseScript}function ll(){return Lt.gapiScript}function ul(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class dl{constructor(){this.enterprise=new hl}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class hl{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const fl="recaptcha-enterprise",Bi="NO_RECAPTCHA";class pl{constructor(e){this.type=fl,this.auth=ve(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{zc(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Wc(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;fr(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(Bi)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dl().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&fr(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=cl();c.length!==0&&(c+=a),ji(c).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Er(t,e,n,r=!1,i=!1){const s=new pl(t);let o;if(i)o=Bi;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function pn(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Er(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Er(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t,e){const n=yi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Et(s,e??{}))return i;j(i,"already-initialized")}return n.initialize({options:e})}function gl(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(X);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yl(t,e,n){const r=ve(t);S(r._canInitEmulator,r,"emulator-config-failed"),S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=$i(e),{host:o,port:a}=wl(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),El()}function $i(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wl(t){const e=$i(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:_r(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:_r(o)}}}function _r(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function El(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return J("not implemented")}_getIdTokenResponse(e){return J("not implemented")}_linkToIdToken(e,n){return J("not implemented")}_getReauthenticationResolver(e){return J("not implemented")}}async function _l(t,e){return pe(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bl(t,e){return tt(t,"POST","/v1/accounts:signInWithPassword",fe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(t,e){return tt(t,"POST","/v1/accounts:signInWithEmailLink",fe(t,e))}async function Il(t,e){return tt(t,"POST","/v1/accounts:signInWithEmailLink",fe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends Mn{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ke(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ke(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pn(e,n,"signInWithPassword",bl);case"emailLink":return vl(e,{email:this._email,oobCode:this._password});default:j(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pn(e,r,"signUpPassword",_l);case"emailLink":return Il(e,{idToken:n,email:this._email,oobCode:this._password});default:j(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(t,e){return tt(t,"POST","/v1/accounts:signInWithIdp",fe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="http://localhost";class Ee extends Mn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ee(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):j("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=kn(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ee(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ce(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ce(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ce(e,n)}buildRequest(){const e={requestUri:Sl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qe(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tl(t){const e=je(Be(t)).link,n=e?je(Be(e)).deep_link_id:null,r=je(Be(t)).deep_link_id;return(r?je(Be(r)).link:null)||r||n||e||t}class Un{constructor(e){var n,r,i,s,o,a;const c=je(Be(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Rl((i=c.mode)!==null&&i!==void 0?i:null);S(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Tl(e);try{return new Un(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(){this.providerId=xe.PROVIDER_ID}static credential(e,n){return Ke._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Un.parseLink(n);return S(r,"argument-error"),Ke._fromEmailAndCode(e,r.code,r.tenantId)}}xe.PROVIDER_ID="password";xe.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Hi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends nt{constructor(){super("facebook.com")}static credential(e){return Ee._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return re.credentialFromTaggedObject(e)}static credentialFromError(e){return re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return re.credential(e.oauthAccessToken)}catch{return null}}}re.FACEBOOK_SIGN_IN_METHOD="facebook.com";re.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie extends nt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ee._fromParams({providerId:ie.PROVIDER_ID,signInMethod:ie.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ie.credentialFromTaggedObject(e)}static credentialFromError(e){return ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ie.credential(n,r)}catch{return null}}}ie.GOOGLE_SIGN_IN_METHOD="google.com";ie.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends nt{constructor(){super("github.com")}static credential(e){return Ee._fromParams({providerId:se.PROVIDER_ID,signInMethod:se.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return se.credentialFromTaggedObject(e)}static credentialFromError(e){return se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return se.credential(e.oauthAccessToken)}catch{return null}}}se.GITHUB_SIGN_IN_METHOD="github.com";se.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends nt{constructor(){super("twitter.com")}static credential(e,n){return Ee._fromParams({providerId:oe.PROVIDER_ID,signInMethod:oe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return oe.credentialFromTaggedObject(e)}static credentialFromError(e){return oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return oe.credential(n,r)}catch{return null}}}oe.TWITTER_SIGN_IN_METHOD="twitter.com";oe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(t,e){return tt(t,"POST","/v1/accounts:signUp",fe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Y._fromIdTokenResponse(e,r,i),o=br(r);return new _e({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=br(r);return new _e({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function br(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends de{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,It.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new It(e,n,r,i)}}function Vi(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?It._fromErrorAndOperation(t,s,e,r):s})}async function Pl(t,e,n=!1){const r=await qe(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _e._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(t,e,n=!1){const{auth:r}=t;if(W(r.app))return Promise.reject(Z(r));const i="reauthenticate";try{const s=await qe(t,Vi(r,i,e,t),n);S(s.idToken,r,"internal-error");const o=Ln(s.idToken);S(o,r,"internal-error");const{sub:a}=o;return S(t.uid===a,r,"user-mismatch"),_e._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&j(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e,n=!1){if(W(t.app))return Promise.reject(Z(t));const r="signIn",i=await Vi(t,r,e),s=await _e._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ol(t,e){return Wi(ve(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t){const e=ve(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kl(t,e,n){if(W(t.app))return Promise.reject(Z(t));const r=ve(t),o=await pn(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Cl).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&zi(t),c}),a=await _e._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function xl(t,e,n){return W(t.app)?Promise.reject(Z(t)):Ol(he(t),xe.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zi(t),r})}function Nl(t,e,n,r){return he(t).onIdTokenChanged(e,n,r)}function Ll(t,e,n){return he(t).beforeAuthStateChanged(e,n)}function Dl(t,e,n,r){return he(t).onAuthStateChanged(e,n,r)}const St="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(St,"1"),this.storage.removeItem(St),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=1e3,Ul=10;class Ki extends qi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ui(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tl()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ul):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ml)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ki.type="LOCAL";const Fl=Ki;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends qi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gi.type="SESSION";const Ji=Gi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Dt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await jl(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Fn("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(){return window}function $l(t){q().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){return typeof q().WorkerGlobalScope<"u"&&typeof q().importScripts=="function"}async function Hl(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vl(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Wl(){return Yi()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="firebaseLocalStorageDb",zl=1,Rt="firebaseLocalStorage",Qi="fbase_key";class rt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mt(t,e){return t.transaction([Rt],e?"readwrite":"readonly").objectStore(Rt)}function ql(){const t=indexedDB.deleteDatabase(Xi);return new rt(t).toPromise()}function mn(){const t=indexedDB.open(Xi,zl);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rt,{keyPath:Qi})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rt)?e(r):(r.close(),await ql(),e(await mn()))})})}async function vr(t,e,n){const r=Mt(t,!0).put({[Qi]:e,value:n});return new rt(r).toPromise()}async function Kl(t,e){const n=Mt(t,!1).get(e),r=await new rt(n).toPromise();return r===void 0?null:r.value}function Ir(t,e){const n=Mt(t,!0).delete(e);return new rt(n).toPromise()}const Gl=800,Jl=3;class Zi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Jl)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dt._getInstance(Wl()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Hl(),!this.activeServiceWorker)return;this.sender=new Bl(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mn();return await vr(e,St,"1"),await Ir(e,St),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vr(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Kl(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ir(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Mt(i,!1).getAll();return new rt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zi.type="LOCAL";const Yl=Zi;new et(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t,e){return e?X(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Mn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ce(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ce(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ce(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ql(t){return Wi(t.auth,new jn(t),t.bypassAuthState)}function Zl(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Al(n,new jn(t),t.bypassAuthState)}async function eu(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Pl(n,new jn(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ql;case"linkViaPopup":case"linkViaRedirect":return eu;case"reauthViaPopup":case"reauthViaRedirect":return Zl;default:j(this.auth,"internal-error")}}resolve(e){te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=new et(2e3,1e4);class Ie extends es{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ie.currentPopupAction&&Ie.currentPopupAction.cancel(),Ie.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){te(this.filter.length===1,"Popup operations only handle one event");const e=Fn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(z(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(z(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ie.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(z(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tu.get())};e()}}Ie.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="pendingRedirect",ft=new Map;class ru extends es{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ft.get(this.auth._key());if(!e){try{const r=await iu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ft.set(this.auth._key(),e)}return this.bypassAuthState||ft.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iu(t,e){const n=au(e),r=ou(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function su(t,e){ft.set(t._key(),e)}function ou(t){return X(t._redirectPersistence)}function au(t){return ht(nu,t.config.apiKey,t.name)}async function cu(t,e,n=!1){if(W(t.app))return Promise.reject(Z(t));const r=ve(t),i=Xl(r,e),o=await new ru(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=10*60*1e3;class uu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!du(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ts(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(z(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lu&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sr(e))}saveEventToCache(e){this.cachedEventUids.add(Sr(e)),this.lastProcessedEventTime=Date.now()}}function Sr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ts({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function du(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ts(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hu(t,e={}){return pe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pu=/^https?/;async function mu(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hu(t);for(const n of e)try{if(gu(n))return}catch{}j(t,"unauthorized-domain")}function gu(t){const e=hn(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pu.test(n))return!1;if(fu.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=new et(3e4,6e4);function Rr(){const t=q().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wu(t){return new Promise((e,n)=>{var r,i,s;function o(){Rr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rr(),n(z(t,"network-request-failed"))},timeout:yu.get()})}if(!((i=(r=q().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=q().gapi)===null||s===void 0)&&s.load)o();else{const a=ul("iframefcb");return q()[a]=()=>{gapi.load?o():n(z(t,"network-request-failed"))},ji(`${ll()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw pt=null,e})}let pt=null;function Eu(t){return pt=pt||wu(t),pt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new et(5e3,15e3),bu="__/auth/iframe",vu="emulator/auth/iframe",Iu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Su=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ru(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nn(e,vu):`https://${t.config.authDomain}/${bu}`,r={apiKey:e.apiKey,appName:t.name,v:Ze},i=Su.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qe(r).slice(1)}`}async function Tu(t){const e=await Eu(t),n=q().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:Ru(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Iu,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=z(t,"network-request-failed"),a=q().setTimeout(()=>{s(o)},_u.get());function c(){q().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pu=500,Au=600,Ou="_blank",ku="http://localhost";class Tr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xu(t,e,n,r=Pu,i=Au){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Cu),{width:r.toString(),height:i.toString(),top:s,left:o}),l=L().toLowerCase();n&&(a=xi(l)?Ou:n),Oi(l)&&(e=e||ku,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[_,d])=>`${p}${_}=${d},`,"");if(el(l)&&a!=="_self")return Nu(e||"",a),new Tr(null);const h=window.open(e||"",a,u);S(h,t,"popup-blocked");try{h.focus()}catch{}return new Tr(h)}function Nu(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="__/auth/handler",Du="emulator/auth/handler",Mu=encodeURIComponent("fac");async function Cr(t,e,n,r,i,s){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ze,eventId:i};if(e instanceof Hi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ia(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof nt){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Mu}=${encodeURIComponent(c)}`:"";return`${Uu(t)}?${Qe(a).slice(1)}${l}`}function Uu({config:t}){return t.emulator?Nn(t,Du):`https://${t.authDomain}/${Lu}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="webStorageSupport";class Fu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ji,this._completeRedirectFn=cu,this._overrideRedirectResult=su}async _openPopup(e,n,r,i){var s;te((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Cr(e,n,r,hn(),i);return xu(e,o,Fn())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Cr(e,n,r,hn(),i);return $l(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(te(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Tu(e),r=new uu(e);return n.register("authEvent",i=>(S(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qt,{type:Qt},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Qt];o!==void 0&&n(!!o),j(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mu(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ui()||ki()||Dn()}}const ju=Fu;var Pr="@firebase/auth",Ar="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hu(t){We(new Pe("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;S(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fi(t)},l=new ol(r,i,s,c);return gl(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),We(new Pe("auth-internal",e=>{const n=ve(e.getProvider("auth").getImmediate());return(r=>new Bu(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Se(Pr,Ar,$u(t)),Se(Pr,Ar,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=5*60,Wu=fi("authIdTokenMaxAge")||Vu;let Or=null;const zu=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Wu)return;const i=n==null?void 0:n.token;Or!==i&&(Or=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Bn(t=Rc()){const e=yi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ml(t,{popupRedirectResolver:ju,persistence:[Yl,Fl,Ji]}),r=fi("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=zu(s.toString());Ll(n,o,()=>o(n.currentUser)),Nl(n,a=>o(a))}}const i=da("auth");return i&&yl(n,`http://${i}`),n}function qu(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}al({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=z("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qu().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hu("Browser");var Ku="firebase",Gu="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Se(Ku,Gu,"app");const Ju={apiKey:"AIzaSyCVBWgvQ8vyyNvdAq2_-uLer9D5CSkWyHI",authDomain:"mp3-player-a6490.firebaseapp.com",projectId:"mp3-player-a6490",storageBucket:"mp3-player-a6490.firebasestorage.app",messagingSenderId:"161294449231",appId:"1:161294449231:web:78ee85682def41d312483a"},Yu=wi(Ju),He=Bn(Yu);var ns={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},kr=ye.createContext&&ye.createContext(ns),Xu=["attr","size","title"];function Qu(t,e){if(t==null)return{};var n=Zu(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Zu(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Tt(){return Tt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tt.apply(this,arguments)}function xr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ct(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xr(Object(n),!0).forEach(function(r){ed(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xr(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ed(t,e,n){return e=td(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function td(t){var e=nd(t,"string");return typeof e=="symbol"?e:e+""}function nd(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function rs(t){return t&&t.map((e,n)=>ye.createElement(e.tag,Ct({key:n},e.attr),rs(e.child)))}function G(t){return e=>ye.createElement(rd,Tt({attr:Ct({},t.attr)},e),rs(t.child))}function rd(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=Qu(t,Xu),a=i||n.size||"1em",c;return n.className&&(c=n.className),t.className&&(c=(c?c+" ":"")+t.className),ye.createElement("svg",Tt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:c,style:Ct(Ct({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&ye.createElement("title",null,s),t.children)};return kr!==void 0?ye.createElement(kr.Consumer,null,n=>e(n)):e(ns)}function id(t){return G({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M215 71l-89 89H24a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h102.06L215 441c15 15 41 4.47 41-17V88c0-21.47-26-32-41-17z"},child:[]}]})(t)}function sd(t){return G({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(t)}function od(t){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"},child:[]}]})(t)}function ad(t){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"},child:[]}]})(t)}function cd({audioRef:t}){const[e,n]=f.useState(1),r=xt(),i=Bn(),s=async()=>{try{await i.signOut(),r("/auth")}catch(a){console.error("Error logging out:",a)}},o=a=>{const c=parseFloat(a.target.value);n(c),t.current.volume=c};return f.useEffect(()=>{n(1)},[]),b.jsxs("header",{children:[b.jsx("h1",{children:"Patrick's mp3 player"}),b.jsxs("div",{className:"volume-slider-section",children:[b.jsx(id,{}),b.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:e,onChange:o}),b.jsx(sd,{})]}),b.jsx("button",{className:"logout-button",onClick:s,children:"Logout"})]})}const Pt="https://mp3-player-production.up.railway.app";function ld({audioDatabase:t,setAudioDatabase:e,selectedTrack:n,setSelectedTrack:r}){f.useEffect(()=>{(async()=>{if(He.currentUser)try{const c=await He.currentUser.getIdToken(),u=await(await fetch(`${Pt}/api/tracks`,{headers:{Authorization:`Bearer ${c}`}})).json();e(u)}catch(c){console.error("Error fetching tracks:",c)}})()},[]);const i=f.useCallback(a=>({...a,audioUrl:a.audioUrl,coverUrl:a.coverUrl}),[]),s=f.useCallback(a=>{if(!(!a||(n==null?void 0:n.id)===a.id))try{const c=i(a);c&&r(c)}catch(c){console.error("Error selecting track:",c)}},[n,i]),o=async(a,c)=>{c.stopPropagation();try{const l=await He.currentUser.getIdToken(),u=t[a];if(!(await fetch(`${Pt}/api/tracks/${u.id}`,{method:"DELETE",headers:{Authorization:`Bearer ${l}`}})).ok)throw new Error("Failed to delete track");const p=t.filter((_,d)=>d!==a);e(p)}catch(l){console.error("Error removing track:",l)}};return b.jsxs("div",{className:"file-list",children:[b.jsx("h2",{children:"File List"}),t.length>0?b.jsx("ol",{children:t.map((a,c)=>b.jsxs("li",{className:"file-list-item",style:{backgroundColor:(n==null?void 0:n.id)===a.id?"#dcf2ff":"transparent"},children:[b.jsx("div",{className:"file-title",onClick:()=>s(a),children:a.title}),b.jsx("button",{onClick:l=>o(c,l),className:"remove-button",children:"X"})]},c))}):b.jsx("p",{children:"Please add some files"})]})}function ud(t){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32z"},child:[]}]})(t)}function dd(t){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"},child:[]}]})(t)}function hd(t){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z"},child:[]},{tag:"path",attr:{d:"m117.23 246.7 114.45-69.14a10.78 10.78 0 0 1 16.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0 1 16.32 9.31v138.26a10.78 10.78 0 0 1-16.32 9.31L248 271.81v53.32a10.78 10.78 0 0 1-16.32 9.31L117.23 265.3a10.89 10.89 0 0 1 0-18.6z"},child:[]}]})(t)}function fd(t){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256zm69.23-9.3 114.45-69.14a10.78 10.78 0 0 1 16.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0 1 16.32 9.31v138.26a10.78 10.78 0 0 1-16.32 9.31L248 271.81v53.32a10.78 10.78 0 0 1-16.32 9.31L117.23 265.3a10.89 10.89 0 0 1 0-18.6z"},child:[]}]})(t)}function pd(t){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"},child:[]},{tag:"path",attr:{d:"m394.77 246.7-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v53.32l-103.68-62.63a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31L264 271.81v53.32a10.78 10.78 0 0 0 16.32 9.31l114.45-69.14a10.89 10.89 0 0 0 0-18.6z"},child:[]}]})(t)}function md(t){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm138.77 217.3-114.45 69.14a10.78 10.78 0 0 1-16.32-9.31v-53.32l-103.68 62.63a10.78 10.78 0 0 1-16.32-9.31V186.87a10.78 10.78 0 0 1 16.32-9.31L264 240.19v-53.32a10.78 10.78 0 0 1 16.32-9.31l114.45 69.14a10.89 10.89 0 0 1 0 18.6z"},child:[]}]})(t)}function gd({selectedTrack:t,setSelectedTrack:e,audioDatabase:n,audioRef:r}){const[i,s]=f.useState(null),[o,a]=f.useState(!1),[c,l]=f.useState(0),[u,h]=f.useState(0),p=g=>{const E=Math.floor(g/60),v=Math.floor(g%60);return`${E}:${v.toString().padStart(2,"0")}`},_=()=>{o?r.current.pause():r.current.play(),a(!o)},d=()=>{r.current&&(r.current.currentTime=0)},w=()=>{const g=n.findIndex(E=>E.id===t.id);if(g>0){const E=n[g-1];e(E)}},y=()=>{const g=n.findIndex(E=>E.id===t.id);if(g+1<n.length){const E=n[g+1];e(E)}};return f.useEffect(()=>{if(!t||(console.log("Selected Track Details:",{id:t.id,title:t.title,url:t.audioUrl}),fetch(t.audioUrl).then(I=>(console.log("URL Response:",{status:I.status,statusText:I.statusText,headers:Object.fromEntries(I.headers.entries())}),I.blob())).then(I=>{console.log("Content Type:",I.type)}).catch(I=>{console.error("Fetch Error:",I)}),!r.current))return;const g=r.current;if(console.log("Loading audio URL:",t==null?void 0:t.audioUrl),g.load(),g.addEventListener("error",I=>{console.error("Audio error:",I),console.error("Audio error details:",g.error)}),o){const I=()=>{g.play().catch(A=>console.error("Error auto-playing track:",A)),g.removeEventListener("loadeddata",I)};g.addEventListener("loadeddata",I)}const E=()=>{l(g.currentTime)},v=()=>{h(g.duration)},T=()=>{a(!1),l(0)};return g.addEventListener("timeupdate",E),g.addEventListener("loadedmetadata",v),g.addEventListener("ended",T),()=>{g&&(g.removeEventListener("timeupdate",E),g.removeEventListener("loadedmetadata",v),g.removeEventListener("ended",T))}},[t]),f.useEffect(()=>{t&&c===u&&(_(),l(0))},[c]),t?b.jsxs("div",{className:"media-player",children:[console.log("Selected Track:",t),console.log("Audio URL:",t==null?void 0:t.audioUrl),b.jsx("h2",{children:"Media Player"}),t.coverUrl&&b.jsx("img",{src:t.coverUrl}),b.jsx("h3",{children:t.title}),b.jsxs("audio",{ref:r,preload:"metadata",onError:g=>{console.error("Audio Error:",{error:g.target.error,networkState:r.current.networkState,readyState:r.current.readyState,src:r.current.src})},children:[b.jsx("source",{src:t.audioUrl,type:"audio/mpeg"}),b.jsx("source",{src:t.audioUrl,type:"audio/mp3"}),"Your browser does not support the audio element."]}),b.jsxs("div",{className:"slider-section",children:[b.jsx("p",{children:p(c)}),b.jsx("input",{className:"slider",type:"range",min:0,max:u,value:c,onChange:g=>{const E=parseFloat(g.target.value);r.current.currentTime=E}}),b.jsx("p",{children:p(u)})]}),b.jsxs("div",{className:"button-section",children:[i==="rewind"?b.jsx(fd,{className:"button",onClick:d,onDoubleClick:w,onMouseLeave:()=>s(null)}):b.jsx(hd,{className:"button",onClick:d,onDoubleClick:w,onMouseEnter:()=>s("rewind")}),o?i==="play"?b.jsx(ud,{className:"button",onClick:_,onMouseLeave:()=>s(null)}):b.jsx(od,{className:"button",onClick:_,onMouseEnter:()=>s("play")}):i==="play"?b.jsx(dd,{className:"button",onClick:_,onMouseLeave:()=>s(null)}):b.jsx(ad,{className:"button",onClick:_,onMouseEnter:()=>s("play")}),i==="forward"?b.jsx(md,{className:"button",onClick:y,onMouseLeave:()=>s(null)}):b.jsx(pd,{className:"button",onClick:y,onMouseEnter:()=>s("forward")})]})]}):b.jsxs("div",{className:"media-player",children:[b.jsx("h2",{children:"Media Player"}),b.jsx("p",{children:"Select a track to play"})]})}function is(t,e){return function(){return t.apply(e,arguments)}}const{toString:yd}=Object.prototype,{getPrototypeOf:$n}=Object,Ut=(t=>e=>{const n=yd.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),$=t=>(t=t.toLowerCase(),e=>Ut(e)===t),Ft=t=>e=>typeof e===t,{isArray:Ne}=Array,Ge=Ft("undefined");function wd(t){return t!==null&&!Ge(t)&&t.constructor!==null&&!Ge(t.constructor)&&U(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const ss=$("ArrayBuffer");function Ed(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ss(t.buffer),e}const _d=Ft("string"),U=Ft("function"),os=Ft("number"),jt=t=>t!==null&&typeof t=="object",bd=t=>t===!0||t===!1,mt=t=>{if(Ut(t)!=="object")return!1;const e=$n(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},vd=$("Date"),Id=$("File"),Sd=$("Blob"),Rd=$("FileList"),Td=t=>jt(t)&&U(t.pipe),Cd=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||U(t.append)&&((e=Ut(t))==="formdata"||e==="object"&&U(t.toString)&&t.toString()==="[object FormData]"))},Pd=$("URLSearchParams"),[Ad,Od,kd,xd]=["ReadableStream","Request","Response","Headers"].map($),Nd=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function it(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Ne(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function as(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const ge=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,cs=t=>!Ge(t)&&t!==ge;function gn(){const{caseless:t}=cs(this)&&this||{},e={},n=(r,i)=>{const s=t&&as(e,i)||i;mt(e[s])&&mt(r)?e[s]=gn(e[s],r):mt(r)?e[s]=gn({},r):Ne(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&it(arguments[r],n);return e}const Ld=(t,e,n,{allOwnKeys:r}={})=>(it(e,(i,s)=>{n&&U(i)?t[s]=is(i,n):t[s]=i},{allOwnKeys:r}),t),Dd=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Md=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Ud=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&$n(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Fd=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},jd=t=>{if(!t)return null;if(Ne(t))return t;let e=t.length;if(!os(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Bd=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&$n(Uint8Array)),$d=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},Hd=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Vd=$("HTMLFormElement"),Wd=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Nr=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),zd=$("RegExp"),ls=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};it(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},qd=t=>{ls(t,(e,n)=>{if(U(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(U(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Kd=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Ne(t)?r(t):r(String(t).split(e)),n},Gd=()=>{},Jd=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Zt="abcdefghijklmnopqrstuvwxyz",Lr="0123456789",us={DIGIT:Lr,ALPHA:Zt,ALPHA_DIGIT:Zt+Zt.toUpperCase()+Lr},Yd=(t=16,e=us.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Xd(t){return!!(t&&U(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Qd=t=>{const e=new Array(10),n=(r,i)=>{if(jt(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Ne(r)?[]:{};return it(r,(o,a)=>{const c=n(o,i+1);!Ge(c)&&(s[a]=c)}),e[i]=void 0,s}}return r};return n(t,0)},Zd=$("AsyncFunction"),eh=t=>t&&(jt(t)||U(t))&&U(t.then)&&U(t.catch),ds=((t,e)=>t?setImmediate:e?((n,r)=>(ge.addEventListener("message",({source:i,data:s})=>{i===ge&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),ge.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",U(ge.postMessage)),th=typeof queueMicrotask<"u"?queueMicrotask.bind(ge):typeof process<"u"&&process.nextTick||ds,m={isArray:Ne,isArrayBuffer:ss,isBuffer:wd,isFormData:Cd,isArrayBufferView:Ed,isString:_d,isNumber:os,isBoolean:bd,isObject:jt,isPlainObject:mt,isReadableStream:Ad,isRequest:Od,isResponse:kd,isHeaders:xd,isUndefined:Ge,isDate:vd,isFile:Id,isBlob:Sd,isRegExp:zd,isFunction:U,isStream:Td,isURLSearchParams:Pd,isTypedArray:Bd,isFileList:Rd,forEach:it,merge:gn,extend:Ld,trim:Nd,stripBOM:Dd,inherits:Md,toFlatObject:Ud,kindOf:Ut,kindOfTest:$,endsWith:Fd,toArray:jd,forEachEntry:$d,matchAll:Hd,isHTMLForm:Vd,hasOwnProperty:Nr,hasOwnProp:Nr,reduceDescriptors:ls,freezeMethods:qd,toObjectSet:Kd,toCamelCase:Wd,noop:Gd,toFiniteNumber:Jd,findKey:as,global:ge,isContextDefined:cs,ALPHABET:us,generateString:Yd,isSpecCompliantForm:Xd,toJSONObject:Qd,isAsyncFn:Zd,isThenable:eh,setImmediate:ds,asap:th};function R(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}m.inherits(R,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:m.toJSONObject(this.config),code:this.code,status:this.status}}});const hs=R.prototype,fs={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{fs[t]={value:t}});Object.defineProperties(R,fs);Object.defineProperty(hs,"isAxiosError",{value:!0});R.from=(t,e,n,r,i,s)=>{const o=Object.create(hs);return m.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),R.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const nh=null;function yn(t){return m.isPlainObject(t)||m.isArray(t)}function ps(t){return m.endsWith(t,"[]")?t.slice(0,-2):t}function Dr(t,e,n){return t?t.concat(e).map(function(i,s){return i=ps(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function rh(t){return m.isArray(t)&&!t.some(yn)}const ih=m.toFlatObject(m,{},null,function(e){return/^is[A-Z]/.test(e)});function Bt(t,e,n){if(!m.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=m.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,y){return!m.isUndefined(y[w])});const r=n.metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&m.isSpecCompliantForm(e);if(!m.isFunction(i))throw new TypeError("visitor must be a function");function l(d){if(d===null)return"";if(m.isDate(d))return d.toISOString();if(!c&&m.isBlob(d))throw new R("Blob is not supported. Use a Buffer instead.");return m.isArrayBuffer(d)||m.isTypedArray(d)?c&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,w,y){let g=d;if(d&&!y&&typeof d=="object"){if(m.endsWith(w,"{}"))w=r?w:w.slice(0,-2),d=JSON.stringify(d);else if(m.isArray(d)&&rh(d)||(m.isFileList(d)||m.endsWith(w,"[]"))&&(g=m.toArray(d)))return w=ps(w),g.forEach(function(v,T){!(m.isUndefined(v)||v===null)&&e.append(o===!0?Dr([w],T,s):o===null?w:w+"[]",l(v))}),!1}return yn(d)?!0:(e.append(Dr(y,w,s),l(d)),!1)}const h=[],p=Object.assign(ih,{defaultVisitor:u,convertValue:l,isVisitable:yn});function _(d,w){if(!m.isUndefined(d)){if(h.indexOf(d)!==-1)throw Error("Circular reference detected in "+w.join("."));h.push(d),m.forEach(d,function(g,E){(!(m.isUndefined(g)||g===null)&&i.call(e,g,m.isString(E)?E.trim():E,w,p))===!0&&_(g,w?w.concat(E):[E])}),h.pop()}}if(!m.isObject(t))throw new TypeError("data must be an object");return _(t),e}function Mr(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Hn(t,e){this._pairs=[],t&&Bt(t,this,e)}const ms=Hn.prototype;ms.append=function(e,n){this._pairs.push([e,n])};ms.toString=function(e){const n=e?function(r){return e.call(this,r,Mr)}:Mr;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function sh(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function gs(t,e,n){if(!e)return t;const r=n&&n.encode||sh;m.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let s;if(i?s=i(e,n):s=m.isURLSearchParams(e)?e.toString():new Hn(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Ur{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){m.forEach(this.handlers,function(r){r!==null&&e(r)})}}const ys={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},oh=typeof URLSearchParams<"u"?URLSearchParams:Hn,ah=typeof FormData<"u"?FormData:null,ch=typeof Blob<"u"?Blob:null,lh={isBrowser:!0,classes:{URLSearchParams:oh,FormData:ah,Blob:ch},protocols:["http","https","file","blob","url","data"]},Vn=typeof window<"u"&&typeof document<"u",wn=typeof navigator=="object"&&navigator||void 0,uh=Vn&&(!wn||["ReactNative","NativeScript","NS"].indexOf(wn.product)<0),dh=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",hh=Vn&&window.location.href||"http://localhost",fh=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Vn,hasStandardBrowserEnv:uh,hasStandardBrowserWebWorkerEnv:dh,navigator:wn,origin:hh},Symbol.toStringTag,{value:"Module"})),N={...fh,...lh};function ph(t,e){return Bt(t,new N.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return N.isNode&&m.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function mh(t){return m.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function gh(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function ws(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=s>=n.length;return o=!o&&m.isArray(i)?i.length:o,c?(m.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!m.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&m.isArray(i[o])&&(i[o]=gh(i[o])),!a)}if(m.isFormData(t)&&m.isFunction(t.entries)){const n={};return m.forEachEntry(t,(r,i)=>{e(mh(r),i,n,0)}),n}return null}function yh(t,e,n){if(m.isString(t))try{return(e||JSON.parse)(t),m.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(t)}const st={transitional:ys,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=m.isObject(e);if(s&&m.isHTMLForm(e)&&(e=new FormData(e)),m.isFormData(e))return i?JSON.stringify(ws(e)):e;if(m.isArrayBuffer(e)||m.isBuffer(e)||m.isStream(e)||m.isFile(e)||m.isBlob(e)||m.isReadableStream(e))return e;if(m.isArrayBufferView(e))return e.buffer;if(m.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ph(e,this.formSerializer).toString();if((a=m.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Bt(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),yh(e)):e}],transformResponse:[function(e){const n=this.transitional||st.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(m.isResponse(e)||m.isReadableStream(e))return e;if(e&&m.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?R.from(a,R.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:N.classes.FormData,Blob:N.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};m.forEach(["delete","get","head","post","put","patch"],t=>{st.headers[t]={}});const wh=m.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Eh=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&wh[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Fr=Symbol("internals");function Fe(t){return t&&String(t).trim().toLowerCase()}function gt(t){return t===!1||t==null?t:m.isArray(t)?t.map(gt):String(t)}function _h(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const bh=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function en(t,e,n,r,i){if(m.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!m.isString(e)){if(m.isString(r))return e.indexOf(r)!==-1;if(m.isRegExp(r))return r.test(e)}}function vh(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Ih(t,e){const n=m.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class M{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,c,l){const u=Fe(c);if(!u)throw new Error("header name must be a non-empty string");const h=m.findKey(i,u);(!h||i[h]===void 0||l===!0||l===void 0&&i[h]!==!1)&&(i[h||c]=gt(a))}const o=(a,c)=>m.forEach(a,(l,u)=>s(l,u,c));if(m.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(m.isString(e)&&(e=e.trim())&&!bh(e))o(Eh(e),n);else if(m.isHeaders(e))for(const[a,c]of e.entries())s(c,a,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=Fe(e),e){const r=m.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return _h(i);if(m.isFunction(n))return n.call(this,i,r);if(m.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Fe(e),e){const r=m.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||en(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Fe(o),o){const a=m.findKey(r,o);a&&(!n||en(r,r[a],a,n))&&(delete r[a],i=!0)}}return m.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||en(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return m.forEach(this,(i,s)=>{const o=m.findKey(r,s);if(o){n[o]=gt(i),delete n[s];return}const a=e?vh(s):String(s).trim();a!==s&&delete n[s],n[a]=gt(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return m.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&m.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[Fr]=this[Fr]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Fe(o);r[a]||(Ih(i,o),r[a]=!0)}return m.isArray(e)?e.forEach(s):s(e),this}}M.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);m.reduceDescriptors(M.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});m.freezeMethods(M);function tn(t,e){const n=this||st,r=e||n,i=M.from(r.headers);let s=r.data;return m.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Es(t){return!!(t&&t.__CANCEL__)}function Le(t,e,n){R.call(this,t??"canceled",R.ERR_CANCELED,e,n),this.name="CanceledError"}m.inherits(Le,R,{__CANCEL__:!0});function _s(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new R("Request failed with status code "+n.status,[R.ERR_BAD_REQUEST,R.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Sh(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Rh(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[s];o||(o=l),n[i]=c,r[i]=l;let h=s,p=0;for(;h!==i;)p+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),l-o<e)return;const _=u&&l-u;return _?Math.round(p*1e3/_):void 0}}function Th(t,e){let n=0,r=1e3/e,i,s;const o=(l,u=Date.now())=>{n=u,i=null,s&&(clearTimeout(s),s=null),t.apply(null,l)};return[(...l)=>{const u=Date.now(),h=u-n;h>=r?o(l,u):(i=l,s||(s=setTimeout(()=>{s=null,o(i)},r-h)))},()=>i&&o(i)]}const At=(t,e,n=3)=>{let r=0;const i=Rh(50,250);return Th(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,c=o-r,l=i(c),u=o<=a;r=o;const h={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(h)},n)},jr=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Br=t=>(...e)=>m.asap(()=>t(...e)),Ch=N.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,N.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(N.origin),N.navigator&&/(msie|trident)/i.test(N.navigator.userAgent)):()=>!0,Ph=N.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];m.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),m.isString(r)&&o.push("path="+r),m.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ah(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Oh(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function bs(t,e){return t&&!Ah(e)?Oh(t,e):e}const $r=t=>t instanceof M?{...t}:t;function be(t,e){e=e||{};const n={};function r(l,u,h,p){return m.isPlainObject(l)&&m.isPlainObject(u)?m.merge.call({caseless:p},l,u):m.isPlainObject(u)?m.merge({},u):m.isArray(u)?u.slice():u}function i(l,u,h,p){if(m.isUndefined(u)){if(!m.isUndefined(l))return r(void 0,l,h,p)}else return r(l,u,h,p)}function s(l,u){if(!m.isUndefined(u))return r(void 0,u)}function o(l,u){if(m.isUndefined(u)){if(!m.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,h){if(h in e)return r(l,u);if(h in t)return r(void 0,l)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,h)=>i($r(l),$r(u),h,!0)};return m.forEach(Object.keys(Object.assign({},t,e)),function(u){const h=c[u]||i,p=h(t[u],e[u],u);m.isUndefined(p)&&h!==a||(n[u]=p)}),n}const vs=t=>{const e=be({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=M.from(o),e.url=gs(bs(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(m.isFormData(n)){if(N.hasStandardBrowserEnv||N.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[l,...u]=c?c.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...u].join("; "))}}if(N.hasStandardBrowserEnv&&(r&&m.isFunction(r)&&(r=r(e)),r||r!==!1&&Ch(e.url))){const l=i&&s&&Ph.read(s);l&&o.set(i,l)}return e},kh=typeof XMLHttpRequest<"u",xh=kh&&function(t){return new Promise(function(n,r){const i=vs(t);let s=i.data;const o=M.from(i.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=i,u,h,p,_,d;function w(){_&&_(),d&&d(),i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let y=new XMLHttpRequest;y.open(i.method.toUpperCase(),i.url,!0),y.timeout=i.timeout;function g(){if(!y)return;const v=M.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),I={data:!a||a==="text"||a==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:v,config:t,request:y};_s(function(x){n(x),w()},function(x){r(x),w()},I),y=null}"onloadend"in y?y.onloadend=g:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(g)},y.onabort=function(){y&&(r(new R("Request aborted",R.ECONNABORTED,t,y)),y=null)},y.onerror=function(){r(new R("Network Error",R.ERR_NETWORK,t,y)),y=null},y.ontimeout=function(){let T=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const I=i.transitional||ys;i.timeoutErrorMessage&&(T=i.timeoutErrorMessage),r(new R(T,I.clarifyTimeoutError?R.ETIMEDOUT:R.ECONNABORTED,t,y)),y=null},s===void 0&&o.setContentType(null),"setRequestHeader"in y&&m.forEach(o.toJSON(),function(T,I){y.setRequestHeader(I,T)}),m.isUndefined(i.withCredentials)||(y.withCredentials=!!i.withCredentials),a&&a!=="json"&&(y.responseType=i.responseType),l&&([p,d]=At(l,!0),y.addEventListener("progress",p)),c&&y.upload&&([h,_]=At(c),y.upload.addEventListener("progress",h),y.upload.addEventListener("loadend",_)),(i.cancelToken||i.signal)&&(u=v=>{y&&(r(!v||v.type?new Le(null,t,y):v),y.abort(),y=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const E=Sh(i.url);if(E&&N.protocols.indexOf(E)===-1){r(new R("Unsupported protocol "+E+":",R.ERR_BAD_REQUEST,t));return}y.send(s||null)})},Nh=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,i;const s=function(l){if(!i){i=!0,a();const u=l instanceof Error?l:this.reason;r.abort(u instanceof R?u:new Le(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new R(`timeout ${e} of ms exceeded`,R.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),t=null)};t.forEach(l=>l.addEventListener("abort",s));const{signal:c}=r;return c.unsubscribe=()=>m.asap(a),c}},Lh=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},Dh=async function*(t,e){for await(const n of Mh(t))yield*Lh(n,e)},Mh=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Hr=(t,e,n,r)=>{const i=Dh(t,e);let s=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await i.next();if(l){a(),c.close();return}let h=u.byteLength;if(n){let p=s+=h;n(p)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),i.return()}},{highWaterMark:2})},$t=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Is=$t&&typeof ReadableStream=="function",Uh=$t&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Ss=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Fh=Is&&Ss(()=>{let t=!1;const e=new Request(N.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Vr=64*1024,En=Is&&Ss(()=>m.isReadableStream(new Response("").body)),Ot={stream:En&&(t=>t.body)};$t&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Ot[e]&&(Ot[e]=m.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new R(`Response type '${e}' is not supported`,R.ERR_NOT_SUPPORT,r)})})})(new Response);const jh=async t=>{if(t==null)return 0;if(m.isBlob(t))return t.size;if(m.isSpecCompliantForm(t))return(await new Request(N.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(m.isArrayBufferView(t)||m.isArrayBuffer(t))return t.byteLength;if(m.isURLSearchParams(t)&&(t=t+""),m.isString(t))return(await Uh(t)).byteLength},Bh=async(t,e)=>{const n=m.toFiniteNumber(t.getContentLength());return n??jh(e)},$h=$t&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:h="same-origin",fetchOptions:p}=vs(t);l=l?(l+"").toLowerCase():"text";let _=Nh([i,s&&s.toAbortSignal()],o),d;const w=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let y;try{if(c&&Fh&&n!=="get"&&n!=="head"&&(y=await Bh(u,r))!==0){let I=new Request(e,{method:"POST",body:r,duplex:"half"}),A;if(m.isFormData(r)&&(A=I.headers.get("content-type"))&&u.setContentType(A),I.body){const[x,D]=jr(y,At(Br(c)));r=Hr(I.body,Vr,x,D)}}m.isString(h)||(h=h?"include":"omit");const g="credentials"in Request.prototype;d=new Request(e,{...p,signal:_,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:g?h:void 0});let E=await fetch(d);const v=En&&(l==="stream"||l==="response");if(En&&(a||v&&w)){const I={};["status","statusText","headers"].forEach(k=>{I[k]=E[k]});const A=m.toFiniteNumber(E.headers.get("content-length")),[x,D]=a&&jr(A,At(Br(a),!0))||[];E=new Response(Hr(E.body,Vr,x,()=>{D&&D(),w&&w()}),I)}l=l||"text";let T=await Ot[m.findKey(Ot,l)||"text"](E,t);return!v&&w&&w(),await new Promise((I,A)=>{_s(I,A,{data:T,headers:M.from(E.headers),status:E.status,statusText:E.statusText,config:t,request:d})})}catch(g){throw w&&w(),g&&g.name==="TypeError"&&/fetch/i.test(g.message)?Object.assign(new R("Network Error",R.ERR_NETWORK,t,d),{cause:g.cause||g}):R.from(g,g&&g.code,t,d)}}),_n={http:nh,xhr:xh,fetch:$h};m.forEach(_n,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Wr=t=>`- ${t}`,Hh=t=>m.isFunction(t)||t===null||t===!1,Rs={getAdapter:t=>{t=m.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!Hh(n)&&(r=_n[(o=String(n)).toLowerCase()],r===void 0))throw new R(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Wr).join(`
`):" "+Wr(s[0]):"as no adapter specified";throw new R("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:_n};function nn(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Le(null,t)}function zr(t){return nn(t),t.headers=M.from(t.headers),t.data=tn.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Rs.getAdapter(t.adapter||st.adapter)(t).then(function(r){return nn(t),r.data=tn.call(t,t.transformResponse,r),r.headers=M.from(r.headers),r},function(r){return Es(r)||(nn(t),r&&r.response&&(r.response.data=tn.call(t,t.transformResponse,r.response),r.response.headers=M.from(r.response.headers))),Promise.reject(r)})}const Ts="1.7.9",Ht={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ht[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const qr={};Ht.transitional=function(e,n,r){function i(s,o){return"[Axios v"+Ts+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new R(i(o," has been removed"+(n?" in "+n:"")),R.ERR_DEPRECATED);return n&&!qr[o]&&(qr[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};Ht.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function Vh(t,e,n){if(typeof t!="object")throw new R("options must be an object",R.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],c=a===void 0||o(a,s,t);if(c!==!0)throw new R("option "+s+" must be "+c,R.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new R("Unknown option "+s,R.ERR_BAD_OPTION)}}const yt={assertOptions:Vh,validators:Ht},V=yt.validators;class we{constructor(e){this.defaults=e,this.interceptors={request:new Ur,response:new Ur}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=be(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&yt.assertOptions(r,{silentJSONParsing:V.transitional(V.boolean),forcedJSONParsing:V.transitional(V.boolean),clarifyTimeoutError:V.transitional(V.boolean)},!1),i!=null&&(m.isFunction(i)?n.paramsSerializer={serialize:i}:yt.assertOptions(i,{encode:V.function,serialize:V.function},!0)),yt.assertOptions(n,{baseUrl:V.spelling("baseURL"),withXsrfToken:V.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&m.merge(s.common,s[n.method]);s&&m.forEach(["delete","get","head","post","put","patch","common"],d=>{delete s[d]}),n.headers=M.concat(o,s);const a=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(c=c&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const l=[];this.interceptors.response.forEach(function(w){l.push(w.fulfilled,w.rejected)});let u,h=0,p;if(!c){const d=[zr.bind(this),void 0];for(d.unshift.apply(d,a),d.push.apply(d,l),p=d.length,u=Promise.resolve(n);h<p;)u=u.then(d[h++],d[h++]);return u}p=a.length;let _=n;for(h=0;h<p;){const d=a[h++],w=a[h++];try{_=d(_)}catch(y){w.call(this,y);break}}try{u=zr.call(this,_)}catch(d){return Promise.reject(d)}for(h=0,p=l.length;h<p;)u=u.then(l[h++],l[h++]);return u}getUri(e){e=be(this.defaults,e);const n=bs(e.baseURL,e.url);return gs(n,e.params,e.paramsSerializer)}}m.forEach(["delete","get","head","options"],function(e){we.prototype[e]=function(n,r){return this.request(be(r||{},{method:e,url:n,data:(r||{}).data}))}});m.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(be(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}we.prototype[e]=n(),we.prototype[e+"Form"]=n(!0)});class Wn{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Le(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Wn(function(i){e=i}),cancel:e}}}function Wh(t){return function(n){return t.apply(null,n)}}function zh(t){return m.isObject(t)&&t.isAxiosError===!0}const bn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(bn).forEach(([t,e])=>{bn[e]=t});function Cs(t){const e=new we(t),n=is(we.prototype.request,e);return m.extend(n,we.prototype,e,{allOwnKeys:!0}),m.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return Cs(be(t,i))},n}const O=Cs(st);O.Axios=we;O.CanceledError=Le;O.CancelToken=Wn;O.isCancel=Es;O.VERSION=Ts;O.toFormData=Bt;O.AxiosError=R;O.Cancel=O.CanceledError;O.all=function(e){return Promise.all(e)};O.spread=Wh;O.isAxiosError=zh;O.mergeConfig=be;O.AxiosHeaders=M;O.formToJSON=t=>ws(m.isHTMLForm(t)?new FormData(t):t);O.getAdapter=Rs.getAdapter;O.HttpStatusCode=bn;O.default=O;function qh({setAudioDatabase:t}){const[e,n]=f.useState(null),[r,i]=f.useState("Your MP3"),[s,o]=f.useState(null),[a,c]=f.useState(""),[l,u]=f.useState(0),h=async d=>{var w,y;d.preventDefault();try{const g=await He.currentUser.getIdToken(),E=new FormData;if(e&&e.size>0&&E.append("file",e),E.append("title",r),s&&E.append("coverImage",s),c("Uploading..."),u(0),(await O.post(`${Pt}/api/tracks/upload`,E,{headers:{Authorization:`Bearer ${g}`,"Content-Type":"multipart/form-data"},onUploadProgress:T=>{const I=T.loaded/T.total*100;u(Math.round(I)),c(`Uploading... ${Math.round(I)}%`)}})).status===201){const T=await O.get(`${Pt}/api/tracks`,{headers:{Authorization:`Bearer ${g}`}});t(T.data),c("Upload successful!"),n(null),i("Your MP3"),o(null),d.target.reset()}}catch(g){console.error("Upload error:",g);const E=((y=(w=g.response)==null?void 0:w.data)==null?void 0:y.error)||g.message;c(`Upload failed: ${E}`),u(0)}},p=d=>{const w=d.target.files[0];if(w){if(w.size>50*1024*1024){alert("File is too large. Please select a file under 50MB."),d.target.value="";return}n(w)}},_=d=>{const w=d.target.files[0];if(w){if(w.size>5*1024*1024){alert("Cover image is too large. Please select an image under 5MB."),d.target.value="";return}o(w)}};return b.jsxs("div",{className:"file-editor",children:[b.jsx("h2",{children:"File Editor"}),b.jsxs("form",{onSubmit:h,children:[b.jsxs("div",{className:"form-section",children:[b.jsx("label",{htmlFor:"file",children:"MP3 File (max 50MB): "}),b.jsx("input",{type:"file",id:"file",name:"file",accept:"audio/mp3",onChange:p,required:!0})]}),b.jsxs("div",{className:"form-section",children:[b.jsx("label",{htmlFor:"title",children:"File Name: "}),b.jsx("input",{type:"text",id:"title",value:r,onChange:d=>i(d.target.value),required:!0})]}),b.jsxs("div",{className:"form-section",children:[b.jsx("label",{htmlFor:"cover",children:"Cover Image (Optional, max 5MB): "}),b.jsx("input",{type:"file",id:"cover",name:"cover",accept:"image/png, image/jpg, image/jpeg",onChange:_})]}),b.jsx("button",{type:"submit",children:"Upload"})]}),a&&b.jsxs("div",{className:"upload-status",children:[a,l>0&&l<100&&b.jsx("div",{className:"progress-bar",children:b.jsx("div",{className:"progress",style:{width:`${l}%`}})})]})]})}function Kh(){const[t,e]=f.useState([]),[n,r]=f.useState(null),i=f.useRef(null);return f.useEffect(()=>()=>{t.forEach(s=>{s.url&&URL.revokeObjectURL(s.url)})},[]),b.jsxs(b.Fragment,{children:[b.jsx(cd,{audioRef:i}),b.jsxs("main",{children:[b.jsx(ld,{audioDatabase:t,setAudioDatabase:e,selectedTrack:n,setSelectedTrack:r}),b.jsxs("div",{className:"right-section",children:[b.jsx(gd,{selectedTrack:n,setSelectedTrack:r,audioDatabase:t,audioRef:i}),b.jsx(qh,{setAudioDatabase:e})]})]})]})}function Gh(){const[t,e]=f.useState(!1),[n,r]=f.useState(""),[i,s]=f.useState(""),[o,a]=f.useState(""),c=xt(),l=Bn(),u=async h=>{h.preventDefault(),a("");try{t?await kl(l,n,i):await xl(l,n,i),c("/")}catch(p){a(p.message)}};return b.jsxs("div",{className:"auth-container",children:[b.jsx("h2",{children:t?"Sign Up":"Login"}),b.jsxs("form",{onSubmit:u,children:[b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"email",children:"Email:"}),b.jsx("input",{type:"email",id:"email",value:n,onChange:h=>r(h.target.value),required:!0})]}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"password",children:"Password:"}),b.jsx("input",{type:"password",id:"password",value:i,onChange:h=>s(h.target.value),required:!0})]}),o&&b.jsx("p",{className:"error",children:o}),b.jsx("button",{type:"submit",children:t?"Sign Up":"Login"})]}),b.jsxs("p",{children:[t?"Already have an account? ":"Don't have an account? ",b.jsx("button",{onClick:()=>e(!t),children:t?"Login":"Sign Up"})]})]})}function Jh(){const[t,e]=f.useState(null),[n,r]=f.useState(!0);return f.useEffect(()=>{const i=Dl(He,s=>{e(s),r(!1)});return()=>i()},[]),n?b.jsx("div",{children:"Loading..."}):b.jsx(Go,{basename:"/mp3-player",children:b.jsxs(So,{children:[b.jsx(sn,{path:"/auth",element:t?b.jsx(er,{to:"/"}):b.jsx(Gh,{})}),b.jsx(sn,{path:"/",element:t?b.jsx(Kh,{}):b.jsx(er,{to:"/auth"})})]})})}Ns.createRoot(document.getElementById("root")).render(b.jsx(f.StrictMode,{children:b.jsx(Jh,{})}));
