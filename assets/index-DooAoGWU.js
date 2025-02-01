import{r as zn,g as ni,a as ri}from"./vendor-Bw76hHLb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var mt={exports:{}},Ie={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rn;function ii(){if(rn)return Ie;rn=1;var t=zn(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(c,o,l){var d,p={},h=null,m=null;l!==void 0&&(h=""+l),o.key!==void 0&&(h=""+o.key),o.ref!==void 0&&(m=o.ref);for(d in o)r.call(o,d)&&!s.hasOwnProperty(d)&&(p[d]=o[d]);if(c&&c.defaultProps)for(d in o=c.defaultProps,o)p[d]===void 0&&(p[d]=o[d]);return{$$typeof:e,type:c,key:h,ref:m,props:p,_owner:i.current}}return Ie.Fragment=n,Ie.jsx=a,Ie.jsxs=a,Ie}var sn;function si(){return sn||(sn=1,mt.exports=ii()),mt.exports}var y=si(),u=zn();const ce=ni(u);var Ve={},an;function ai(){if(an)return Ve;an=1;var t=ri();return Ve.createRoot=t.createRoot,Ve.hydrateRoot=t.hydrateRoot,Ve}var oi=ai(),be={},on;function ci(){if(on)return be;on=1,Object.defineProperty(be,"__esModule",{value:!0}),be.parse=a,be.serialize=l;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,s=(()=>{const h=function(){};return h.prototype=Object.create(null),h})();function a(h,m){const g=new s,w=h.length;if(w<2)return g;const v=(m==null?void 0:m.decode)||d;let f=0;do{const _=h.indexOf("=",f);if(_===-1)break;const I=h.indexOf(";",f),C=I===-1?w:I;if(_>C){f=h.lastIndexOf(";",_-1)+1;continue}const b=c(h,f,_),k=o(h,_,b),A=h.slice(b,k);if(g[A]===void 0){let $=c(h,_+1,C),R=o(h,C,$);const L=v(h.slice($,R));g[A]=L}f=C+1}while(f<w);return g}function c(h,m,g){do{const w=h.charCodeAt(m);if(w!==32&&w!==9)return m}while(++m<g);return g}function o(h,m,g){for(;m>g;){const w=h.charCodeAt(--m);if(w!==32&&w!==9)return m+1}return g}function l(h,m,g){const w=(g==null?void 0:g.encode)||encodeURIComponent;if(!t.test(h))throw new TypeError(`argument name is invalid: ${h}`);const v=w(m);if(!e.test(v))throw new TypeError(`argument val is invalid: ${m}`);let f=h+"="+v;if(!g)return f;if(g.maxAge!==void 0){if(!Number.isInteger(g.maxAge))throw new TypeError(`option maxAge is invalid: ${g.maxAge}`);f+="; Max-Age="+g.maxAge}if(g.domain){if(!n.test(g.domain))throw new TypeError(`option domain is invalid: ${g.domain}`);f+="; Domain="+g.domain}if(g.path){if(!r.test(g.path))throw new TypeError(`option path is invalid: ${g.path}`);f+="; Path="+g.path}if(g.expires){if(!p(g.expires)||!Number.isFinite(g.expires.valueOf()))throw new TypeError(`option expires is invalid: ${g.expires}`);f+="; Expires="+g.expires.toUTCString()}if(g.httpOnly&&(f+="; HttpOnly"),g.secure&&(f+="; Secure"),g.partitioned&&(f+="; Partitioned"),g.priority)switch(typeof g.priority=="string"?g.priority.toLowerCase():void 0){case"low":f+="; Priority=Low";break;case"medium":f+="; Priority=Medium";break;case"high":f+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${g.priority}`)}if(g.sameSite)switch(typeof g.sameSite=="string"?g.sameSite.toLowerCase():g.sameSite){case!0:case"strict":f+="; SameSite=Strict";break;case"lax":f+="; SameSite=Lax";break;case"none":f+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${g.sameSite}`)}return f}function d(h){if(h.indexOf("%")===-1)return h;try{return decodeURIComponent(h)}catch{return h}}function p(h){return i.call(h)==="[object Date]"}return be}ci();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var cn="popstate";function li(t={}){function e(r,i){let{pathname:s,search:a,hash:c}=r.location;return Ct("",{pathname:s,search:a,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ke(i)}return di(e,n,null,t)}function T(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function O(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ui(){return Math.random().toString(36).substring(2,10)}function ln(t,e){return{usr:t.state,key:t.key,idx:e}}function Ct(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?_e(e):e,state:n,key:e&&e.key||r||ui()}}function ke({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function _e(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function di(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,c="POP",o=null,l=d();l==null&&(l=0,a.replaceState({...a.state,idx:l},""));function d(){return(a.state||{idx:null}).idx}function p(){c="POP";let v=d(),f=v==null?null:v-l;l=v,o&&o({action:c,location:w.location,delta:f})}function h(v,f){c="PUSH";let _=Ct(w.location,v,f);l=d()+1;let I=ln(_,l),C=w.createHref(_);try{a.pushState(I,"",C)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(C)}s&&o&&o({action:c,location:w.location,delta:1})}function m(v,f){c="REPLACE";let _=Ct(w.location,v,f);l=d();let I=ln(_,l),C=w.createHref(_);a.replaceState(I,"",C),s&&o&&o({action:c,location:w.location,delta:0})}function g(v){let f=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof v=="string"?v:ke(v);return _=_.replace(/ $/,"%20"),T(f,`No window.location.(origin|href) available to create URL for href: ${_}`),new URL(_,f)}let w={get action(){return c},get location(){return t(i,a)},listen(v){if(o)throw new Error("A history only accepts one active listener");return i.addEventListener(cn,p),o=v,()=>{i.removeEventListener(cn,p),o=null}},createHref(v){return e(i,v)},createURL:g,encodeLocation(v){let f=g(v);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:m,go(v){return a.go(v)}};return w}function qn(t,e,n="/"){return hi(t,e,n,!1)}function hi(t,e,n,r){let i=typeof e=="string"?_e(e):e,s=te(i.pathname||"/",n);if(s==null)return null;let a=Kn(t);fi(a);let c=null;for(let o=0;c==null&&o<a.length;++o){let l=Si(s);c=Ii(a[o],l,r)}return c}function Kn(t,e=[],n=[],r=""){let i=(s,a,c)=>{let o={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};o.relativePath.startsWith("/")&&(T(o.relativePath.startsWith(r),`Absolute route path "${o.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length));let l=W([r,o.relativePath]),d=n.concat(o);s.children&&s.children.length>0&&(T(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),Kn(s.children,e,d,l)),!(s.path==null&&!s.index)&&e.push({path:l,score:wi(l,s.index),routesMeta:d})};return t.forEach((s,a)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))i(s,a);else for(let o of Gn(s.path))i(s,a,o)}),e}function Gn(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Gn(r.join("/")),c=[];return c.push(...a.map(o=>o===""?s:[s,o].join("/"))),i&&c.push(...a),c.map(o=>t.startsWith("/")&&o===""?"/":o)}function fi(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Ei(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var pi=/^:[\w-]+$/,mi=3,gi=2,yi=1,_i=10,vi=-2,un=t=>t==="*";function wi(t,e){let n=t.split("/"),r=n.length;return n.some(un)&&(r+=vi),e&&(r+=gi),n.filter(i=>!un(i)).reduce((i,s)=>i+(pi.test(s)?mi:s===""?yi:_i),r)}function Ei(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Ii(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",a=[];for(let c=0;c<r.length;++c){let o=r[c],l=c===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Qe({path:o.relativePath,caseSensitive:o.caseSensitive,end:l},d),h=o.route;if(!p&&l&&n&&!r[r.length-1].route.index&&(p=Qe({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:W([s,p.pathname]),pathnameBase:Pi(W([s,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(s=W([s,p.pathnameBase]))}return a}function Qe(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=bi(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((l,{paramName:d,isOptional:p},h)=>{if(d==="*"){let g=c[h]||"";a=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const m=c[h];return p&&!m?l[d]=void 0:l[d]=(m||"").replace(/%2F/g,"/"),l},{}),pathname:s,pathnameBase:a,pattern:t}}function bi(t,e=!1,n=!0){O(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,c,o)=>(r.push({paramName:c,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Si(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return O(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function te(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ci(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?_e(t):t;return{pathname:n?n.startsWith("/")?n:Ti(n,e):e,search:ki(r),hash:Ai(i)}}function Ti(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function gt(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ri(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ut(t){let e=Ri(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function Ft(t,e,n,r=!1){let i;typeof t=="string"?i=_e(t):(i={...t},T(!i.pathname||!i.pathname.includes("?"),gt("?","pathname","search",i)),T(!i.pathname||!i.pathname.includes("#"),gt("#","pathname","hash",i)),T(!i.search||!i.search.includes("#"),gt("#","search","hash",i)));let s=t===""||i.pathname==="",a=s?"/":i.pathname,c;if(a==null)c=n;else{let p=e.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),p-=1;i.pathname=h.join("/")}c=p>=0?e[p]:"/"}let o=Ci(i,c),l=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(l||d)&&(o.pathname+="/"),o}var W=t=>t.join("/").replace(/\/\/+/g,"/"),Pi=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ki=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ai=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Oi(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Jn=["POST","PUT","PATCH","DELETE"];new Set(Jn);var Ni=["GET",...Jn];new Set(Ni);var ve=u.createContext(null);ve.displayName="DataRouter";var lt=u.createContext(null);lt.displayName="DataRouterState";var Yn=u.createContext({isTransitioning:!1});Yn.displayName="ViewTransition";var xi=u.createContext(new Map);xi.displayName="Fetchers";var Li=u.createContext(null);Li.displayName="Await";var x=u.createContext(null);x.displayName="Navigation";var Le=u.createContext(null);Le.displayName="Location";var F=u.createContext({outlet:null,matches:[],isDataRoute:!1});F.displayName="Route";var jt=u.createContext(null);jt.displayName="RouteError";function Di(t,{relative:e}={}){T(we(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=u.useContext(x),{hash:i,pathname:s,search:a}=De(t,{relative:e}),c=s;return n!=="/"&&(c=s==="/"?n:W([n,s])),r.createHref({pathname:c,search:a,hash:i})}function we(){return u.useContext(Le)!=null}function ne(){return T(we(),"useLocation() may be used only in the context of a <Router> component."),u.useContext(Le).location}var Xn="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Qn(t){u.useContext(x).static||u.useLayoutEffect(t)}function ut(){let{isDataRoute:t}=u.useContext(F);return t?Gi():Mi()}function Mi(){T(we(),"useNavigate() may be used only in the context of a <Router> component.");let t=u.useContext(ve),{basename:e,navigator:n}=u.useContext(x),{matches:r}=u.useContext(F),{pathname:i}=ne(),s=JSON.stringify(Ut(r)),a=u.useRef(!1);return Qn(()=>{a.current=!0}),u.useCallback((o,l={})=>{if(O(a.current,Xn),!a.current)return;if(typeof o=="number"){n.go(o);return}let d=Ft(o,JSON.parse(s),i,l.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:W([e,d.pathname])),(l.replace?n.replace:n.push)(d,l.state,l)},[e,n,s,i,t])}u.createContext(null);function De(t,{relative:e}={}){let{matches:n}=u.useContext(F),{pathname:r}=ne(),i=JSON.stringify(Ut(n));return u.useMemo(()=>Ft(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function Ui(t,e){return Zn(t,e)}function Zn(t,e,n,r){var f;T(we(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=u.useContext(x),{matches:s}=u.useContext(F),a=s[s.length-1],c=a?a.params:{},o=a?a.pathname:"/",l=a?a.pathnameBase:"/",d=a&&a.route;{let _=d&&d.path||"";er(o,!d||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let p=ne(),h;if(e){let _=typeof e=="string"?_e(e):e;T(l==="/"||((f=_.pathname)==null?void 0:f.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${_.pathname}" was given in the \`location\` prop.`),h=_}else h=p;let m=h.pathname||"/",g=m;if(l!=="/"){let _=l.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(_.length).join("/")}let w=qn(t,{pathname:g});O(d||w!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),O(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=Hi(w&&w.map(_=>Object.assign({},_,{params:Object.assign({},c,_.params),pathname:W([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:W([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,r);return e&&v?u.createElement(Le.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},v):v}function Fi(){let t=Ki(),e=Oi(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",t),a=u.createElement(u.Fragment,null,u.createElement("p",null,"💿 Hey developer 👋"),u.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",u.createElement("code",{style:s},"ErrorBoundary")," or"," ",u.createElement("code",{style:s},"errorElement")," prop on your route.")),u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},e),n?u.createElement("pre",{style:i},n):null,a)}var ji=u.createElement(Fi,null),$i=class extends u.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?u.createElement(F.Provider,{value:this.props.routeContext},u.createElement(jt.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Bi({routeContext:t,match:e,children:n}){let r=u.useContext(ve);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),u.createElement(F.Provider,{value:t},n)}function Hi(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,s=n==null?void 0:n.errors;if(s!=null){let o=i.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id])!==void 0);T(o>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,o+1))}let a=!1,c=-1;if(n)for(let o=0;o<i.length;o++){let l=i[o];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(c=o),l.route.id){let{loaderData:d,errors:p}=n,h=l.route.loader&&!d.hasOwnProperty(l.route.id)&&(!p||p[l.route.id]===void 0);if(l.route.lazy||h){a=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((o,l,d)=>{let p,h=!1,m=null,g=null;n&&(p=s&&l.route.id?s[l.route.id]:void 0,m=l.route.errorElement||ji,a&&(c<0&&d===0?(er("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,g=null):c===d&&(h=!0,g=l.route.hydrateFallbackElement||null)));let w=e.concat(i.slice(0,d+1)),v=()=>{let f;return p?f=m:h?f=g:l.route.Component?f=u.createElement(l.route.Component,null):l.route.element?f=l.route.element:f=o,u.createElement(Bi,{match:l,routeContext:{outlet:o,matches:w,isDataRoute:n!=null},children:f})};return n&&(l.route.ErrorBoundary||l.route.errorElement||d===0)?u.createElement($i,{location:n.location,revalidation:n.revalidation,component:m,error:p,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}function $t(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vi(t){let e=u.useContext(ve);return T(e,$t(t)),e}function Wi(t){let e=u.useContext(lt);return T(e,$t(t)),e}function zi(t){let e=u.useContext(F);return T(e,$t(t)),e}function Bt(t){let e=zi(t),n=e.matches[e.matches.length-1];return T(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function qi(){return Bt("useRouteId")}function Ki(){var r;let t=u.useContext(jt),e=Wi("useRouteError"),n=Bt("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function Gi(){let{router:t}=Vi("useNavigate"),e=Bt("useNavigate"),n=u.useRef(!1);return Qn(()=>{n.current=!0}),u.useCallback(async(i,s={})=>{O(n.current,Xn),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var dn={};function er(t,e,n){!e&&!dn[t]&&(dn[t]=!0,O(!1,n))}u.memo(Ji);function Ji({routes:t,future:e,state:n}){return Zn(t,void 0,n,e)}function hn({to:t,replace:e,state:n,relative:r}){T(we(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=u.useContext(x);O(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=u.useContext(F),{pathname:a}=ne(),c=ut(),o=Ft(t,Ut(s),a,r==="path"),l=JSON.stringify(o);return u.useEffect(()=>{c(JSON.parse(l),{replace:e,state:n,relative:r})},[c,l,r,e,n]),null}function Tt(t){T(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Yi({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){T(!we(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=t.replace(/^\/*/,"/"),c=u.useMemo(()=>({basename:a,navigator:i,static:s,future:{}}),[a,i,s]);typeof n=="string"&&(n=_e(n));let{pathname:o="/",search:l="",hash:d="",state:p=null,key:h="default"}=n,m=u.useMemo(()=>{let g=te(o,a);return g==null?null:{location:{pathname:g,search:l,hash:d,state:p,key:h},navigationType:r}},[a,o,l,d,p,h,r]);return O(m!=null,`<Router basename="${a}"> is not able to match the URL "${o}${l}${d}" because it does not start with the basename, so the <Router> won't render anything.`),m==null?null:u.createElement(x.Provider,{value:c},u.createElement(Le.Provider,{children:e,value:m}))}function Xi({children:t,location:e}){return Ui(Rt(t),e)}function Rt(t,e=[]){let n=[];return u.Children.forEach(t,(r,i)=>{if(!u.isValidElement(r))return;let s=[...e,i];if(r.type===u.Fragment){n.push.apply(n,Rt(r.props.children,s));return}T(r.type===Tt,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Rt(r.props.children,s)),n.push(a)}),n}var qe="get",Ke="application/x-www-form-urlencoded";function dt(t){return t!=null&&typeof t.tagName=="string"}function Qi(t){return dt(t)&&t.tagName.toLowerCase()==="button"}function Zi(t){return dt(t)&&t.tagName.toLowerCase()==="form"}function es(t){return dt(t)&&t.tagName.toLowerCase()==="input"}function ts(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ns(t,e){return t.button===0&&(!e||e==="_self")&&!ts(t)}var We=null;function rs(){if(We===null)try{new FormData(document.createElement("form"),0),We=!1}catch{We=!0}return We}var is=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function yt(t){return t!=null&&!is.has(t)?(O(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ke}"`),null):t}function ss(t,e){let n,r,i,s,a;if(Zi(t)){let c=t.getAttribute("action");r=c?te(c,e):null,n=t.getAttribute("method")||qe,i=yt(t.getAttribute("enctype"))||Ke,s=new FormData(t)}else if(Qi(t)||es(t)&&(t.type==="submit"||t.type==="image")){let c=t.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let o=t.getAttribute("formaction")||c.getAttribute("action");if(r=o?te(o,e):null,n=t.getAttribute("formmethod")||c.getAttribute("method")||qe,i=yt(t.getAttribute("formenctype"))||yt(c.getAttribute("enctype"))||Ke,s=new FormData(c,t),!rs()){let{name:l,type:d,value:p}=t;if(d==="image"){let h=l?`${l}.`:"";s.append(`${h}x`,"0"),s.append(`${h}y`,"0")}else l&&s.append(l,p)}}else{if(dt(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=qe,r=null,i=Ke,a=t}return s&&i==="text/plain"&&(a=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:a}}function Ht(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function as(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function os(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function cs(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let a=await as(s,n);return a.links?a.links():[]}return[]}));return hs(r.flat(1).filter(os).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function fn(t,e,n,r,i,s){let a=(o,l)=>n[l]?o.route.id!==n[l].route.id:!0,c=(o,l)=>{var d;return n[l].pathname!==o.pathname||((d=n[l].route.path)==null?void 0:d.endsWith("*"))&&n[l].params["*"]!==o.params["*"]};return s==="assets"?e.filter((o,l)=>a(o,l)||c(o,l)):s==="data"?e.filter((o,l)=>{var p;let d=r.routes[o.route.id];if(!d||!d.hasLoader)return!1;if(a(o,l)||c(o,l))return!0;if(o.route.shouldRevalidate){let h=o.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(t,window.origin),nextParams:o.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function ls(t,e){return us(t.map(n=>{let r=e.routes[n.route.id];if(!r)return[];let i=[r.module];return r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function us(t){return[...new Set(t)]}function ds(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function hs(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(ds(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function fs(t){let e=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function ps(){let t=u.useContext(ve);return Ht(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function ms(){let t=u.useContext(lt);return Ht(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Vt=u.createContext(void 0);Vt.displayName="FrameworkContext";function tr(){let t=u.useContext(Vt);return Ht(t,"You must render this element inside a <HydratedRouter> element"),t}function gs(t,e){let n=u.useContext(Vt),[r,i]=u.useState(!1),[s,a]=u.useState(!1),{onFocus:c,onBlur:o,onMouseEnter:l,onMouseLeave:d,onTouchStart:p}=e,h=u.useRef(null);u.useEffect(()=>{if(t==="render"&&a(!0),t==="viewport"){let w=f=>{f.forEach(_=>{a(_.isIntersecting)})},v=new IntersectionObserver(w,{threshold:.5});return h.current&&v.observe(h.current),()=>{v.disconnect()}}},[t]),u.useEffect(()=>{if(r){let w=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(w)}}},[r]);let m=()=>{i(!0)},g=()=>{i(!1),a(!1)};return n?t!=="intent"?[s,h,{}]:[s,h,{onFocus:Se(c,m),onBlur:Se(o,g),onMouseEnter:Se(l,m),onMouseLeave:Se(d,g),onTouchStart:Se(p,m)}]:[!1,h,{}]}function Se(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function ys({page:t,...e}){let{router:n}=ps(),r=u.useMemo(()=>qn(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?u.createElement(vs,{page:t,matches:r,...e}):null}function _s(t){let{manifest:e,routeModules:n}=tr(),[r,i]=u.useState([]);return u.useEffect(()=>{let s=!1;return cs(t,e,n).then(a=>{s||i(a)}),()=>{s=!0}},[t,e,n]),r}function vs({page:t,matches:e,...n}){let r=ne(),{manifest:i,routeModules:s}=tr(),{loaderData:a,matches:c}=ms(),o=u.useMemo(()=>fn(t,e,c,i,r,"data"),[t,e,c,i,r]),l=u.useMemo(()=>fn(t,e,c,i,r,"assets"),[t,e,c,i,r]),d=u.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let m=new Set,g=!1;if(e.forEach(v=>{var _;let f=i.routes[v.route.id];!f||!f.hasLoader||(!o.some(I=>I.route.id===v.route.id)&&v.route.id in a&&((_=s[v.route.id])!=null&&_.shouldRevalidate)||f.hasClientLoader?g=!0:m.add(v.route.id))}),m.size===0)return[];let w=fs(t);return g&&m.size>0&&w.searchParams.set("_routes",e.filter(v=>m.has(v.route.id)).map(v=>v.route.id).join(",")),[w.pathname+w.search]},[a,r,i,o,e,t,s]),p=u.useMemo(()=>ls(l,i),[l,i]),h=_s(l);return u.createElement(u.Fragment,null,d.map(m=>u.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...n})),p.map(m=>u.createElement("link",{key:m,rel:"modulepreload",href:m,...n})),h.map(({key:m,link:g})=>u.createElement("link",{key:m,...g})))}function ws(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var nr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{nr&&(window.__reactRouterVersion="7.1.3")}catch{}function Es({basename:t,children:e,window:n}){let r=u.useRef();r.current==null&&(r.current=li({window:n,v5Compat:!0}));let i=r.current,[s,a]=u.useState({action:i.action,location:i.location}),c=u.useCallback(o=>{u.startTransition(()=>a(o))},[a]);return u.useLayoutEffect(()=>i.listen(c),[i,c]),u.createElement(Yi,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:i})}var rr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ir=u.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:a,state:c,target:o,to:l,preventScrollReset:d,viewTransition:p,...h},m){let{basename:g}=u.useContext(x),w=typeof l=="string"&&rr.test(l),v,f=!1;if(typeof l=="string"&&w&&(v=l,nr))try{let R=new URL(window.location.href),L=l.startsWith("//")?new URL(R.protocol+l):new URL(l),nn=te(L.pathname,g);L.origin===R.origin&&nn!=null?l=nn+L.search+L.hash:f=!0}catch{O(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let _=Di(l,{relative:i}),[I,C,b]=gs(r,h),k=Cs(l,{replace:a,state:c,target:o,preventScrollReset:d,relative:i,viewTransition:p});function A(R){e&&e(R),R.defaultPrevented||k(R)}let $=u.createElement("a",{...h,...b,href:v||_,onClick:f||s?e:A,ref:ws(m,C),target:o,"data-discover":!w&&n==="render"?"true":void 0});return I&&!w?u.createElement(u.Fragment,null,$,u.createElement(ys,{page:_})):$});ir.displayName="Link";var Is=u.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:a,viewTransition:c,children:o,...l},d){let p=De(a,{relative:l.relative}),h=ne(),m=u.useContext(lt),{navigator:g,basename:w}=u.useContext(x),v=m!=null&&As(p)&&c===!0,f=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,_=h.pathname,I=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;n||(_=_.toLowerCase(),I=I?I.toLowerCase():null,f=f.toLowerCase()),I&&w&&(I=te(I,w)||I);const C=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let b=_===f||!i&&_.startsWith(f)&&_.charAt(C)==="/",k=I!=null&&(I===f||!i&&I.startsWith(f)&&I.charAt(f.length)==="/"),A={isActive:b,isPending:k,isTransitioning:v},$=b?e:void 0,R;typeof r=="function"?R=r(A):R=[r,b?"active":null,k?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let L=typeof s=="function"?s(A):s;return u.createElement(ir,{...l,"aria-current":$,className:R,ref:d,style:L,to:a,viewTransition:c},typeof o=="function"?o(A):o)});Is.displayName="NavLink";var bs=u.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:a=qe,action:c,onSubmit:o,relative:l,preventScrollReset:d,viewTransition:p,...h},m)=>{let g=Ps(),w=ks(c,{relative:l}),v=a.toLowerCase()==="get"?"get":"post",f=typeof c=="string"&&rr.test(c),_=I=>{if(o&&o(I),I.defaultPrevented)return;I.preventDefault();let C=I.nativeEvent.submitter,b=(C==null?void 0:C.getAttribute("formmethod"))||a;g(C||I.currentTarget,{fetcherKey:e,method:b,navigate:n,replace:i,state:s,relative:l,preventScrollReset:d,viewTransition:p})};return u.createElement("form",{ref:m,method:v,action:w,onSubmit:r?o:_,...h,"data-discover":!f&&t==="render"?"true":void 0})});bs.displayName="Form";function Ss(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sr(t){let e=u.useContext(ve);return T(e,Ss(t)),e}function Cs(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:a}={}){let c=ut(),o=ne(),l=De(t,{relative:s});return u.useCallback(d=>{if(ns(d,e)){d.preventDefault();let p=n!==void 0?n:ke(o)===ke(l);c(t,{replace:p,state:r,preventScrollReset:i,relative:s,viewTransition:a})}},[o,c,l,n,r,e,t,i,s,a])}var Ts=0,Rs=()=>`__${String(++Ts)}__`;function Ps(){let{router:t}=sr("useSubmit"),{basename:e}=u.useContext(x),n=qi();return u.useCallback(async(r,i={})=>{let{action:s,method:a,encType:c,formData:o,body:l}=ss(r,e);if(i.navigate===!1){let d=i.fetcherKey||Rs();await t.fetch(d,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:o,body:l,formMethod:i.method||a,formEncType:i.encType||c,flushSync:i.flushSync})}else await t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:o,body:l,formMethod:i.method||a,formEncType:i.encType||c,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function ks(t,{relative:e}={}){let{basename:n}=u.useContext(x),r=u.useContext(F);T(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...De(t||".",{relative:e})},a=ne();if(t==null){s.search=a.search;let c=new URLSearchParams(s.search),o=c.getAll("index");if(o.some(d=>d==="")){c.delete("index"),o.filter(p=>p).forEach(p=>c.append("index",p));let d=c.toString();s.search=d?`?${d}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:W([n,s.pathname])),ke(s)}function As(t,e={}){let n=u.useContext(Yn);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=sr("useViewTransitionState"),i=De(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=te(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=te(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Qe(i.pathname,a)!=null||Qe(i.pathname,s)!=null}new TextEncoder;var pn={};/**
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
 */const ar=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Os=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],c=t[n++],o=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(o&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},or={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,c=a?t[i+1]:0,o=i+2<t.length,l=o?t[i+2]:0,d=s>>2,p=(s&3)<<4|c>>4;let h=(c&15)<<2|l>>6,m=l&63;o||(m=64,a||(h=64)),r.push(n[d],n[p],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ar(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Os(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||c==null||l==null||p==null)throw new Ns;const h=s<<2|c>>4;if(r.push(h),l!==64){const m=c<<4&240|l>>2;if(r.push(m),p!==64){const g=l<<6&192|p;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ns extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xs=function(t){const e=ar(t);return or.encodeByteArray(e,!0)},cr=function(t){return xs(t).replace(/\./g,"")},lr=function(t){try{return or.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ls(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ds=()=>Ls().__FIREBASE_DEFAULTS__,Ms=()=>{if(typeof process>"u"||typeof pn>"u")return;const t=pn.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Us=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lr(t[1]);return e&&JSON.parse(e)},Wt=()=>{try{return Ds()||Ms()||Us()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fs=t=>{var e,n;return(n=(e=Wt())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ur=()=>{var t;return(t=Wt())===null||t===void 0?void 0:t.config},dr=t=>{var e;return(e=Wt())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class js{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function P(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $s(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(P())}function Bs(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hs(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vs(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ws(){const t=P();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zs(){try{return typeof indexedDB=="object"}catch{return!1}}function qs(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ks="FirebaseError";class re extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ks,Object.setPrototypeOf(this,re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Me.prototype.create)}}class Me{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Gs(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new re(i,c,r)}}function Gs(t,e){return t.replace(Js,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Js=/\{\$([^}]+)}/g;function Ys(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ze(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(mn(s)&&mn(a)){if(!Ze(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mn(t){return t!==null&&typeof t=="object"}/**
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
 */function Ue(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ce(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Te(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Xs(t,e){const n=new Qs(t,e);return n.subscribe.bind(n)}class Qs{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Zs(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=_t),i.error===void 0&&(i.error=_t),i.complete===void 0&&(i.complete=_t);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zs(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _t(){}/**
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
 */function ie(t){return t&&t._delegate?t._delegate:t}class ye{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const oe="[DEFAULT]";/**
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
 */class ea{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new js;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(na(e))try{this.getOrInitializeService({instanceIdentifier:oe})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=oe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=oe){return this.instances.has(e)}getOptions(e=oe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ta(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=oe){return this.component?this.component.multipleInstances?e:oe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ta(t){return t===oe?void 0:t}function na(t){return t.instantiationMode==="EAGER"}/**
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
 */class ra{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ea(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var S;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(S||(S={}));const ia={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},sa=S.INFO,aa={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},oa=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=aa[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hr{constructor(e){this.name=e,this._logLevel=sa,this._logHandler=oa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ia[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const ca=(t,e)=>e.some(n=>t instanceof n);let gn,yn;function la(){return gn||(gn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ua(){return yn||(yn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fr=new WeakMap,Pt=new WeakMap,pr=new WeakMap,vt=new WeakMap,zt=new WeakMap;function da(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Z(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&fr.set(n,t)}).catch(()=>{}),zt.set(e,t),e}function ha(t){if(Pt.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Pt.set(t,e)}let kt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Z(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fa(t){kt=t(kt)}function pa(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wt(this),e,...n);return pr.set(r,e.sort?e.sort():[e]),Z(r)}:ua().includes(t)?function(...e){return t.apply(wt(this),e),Z(fr.get(this))}:function(...e){return Z(t.apply(wt(this),e))}}function ma(t){return typeof t=="function"?pa(t):(t instanceof IDBTransaction&&ha(t),ca(t,la())?new Proxy(t,kt):t)}function Z(t){if(t instanceof IDBRequest)return da(t);if(vt.has(t))return vt.get(t);const e=ma(t);return e!==t&&(vt.set(t,e),zt.set(e,t)),e}const wt=t=>zt.get(t);function ga(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),c=Z(a);return r&&a.addEventListener("upgradeneeded",o=>{r(Z(a.result),o.oldVersion,o.newVersion,Z(a.transaction),o)}),n&&a.addEventListener("blocked",o=>n(o.oldVersion,o.newVersion,o)),c.then(o=>{s&&o.addEventListener("close",()=>s()),i&&o.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const ya=["get","getKey","getAll","getAllKeys","count"],_a=["put","add","delete","clear"],Et=new Map;function _n(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Et.get(e))return Et.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ya.includes(n)))return;const s=async function(a,...c){const o=this.transaction(a,i?"readwrite":"readonly");let l=o.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),i&&o.done]))[0]};return Et.set(e,s),s}fa(t=>({...t,get:(e,n,r)=>_n(e,n)||t.get(e,n,r),has:(e,n)=>!!_n(e,n)||t.has(e,n)}));/**
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
 */class va{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wa(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wa(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const At="@firebase/app",vn="0.10.18";/**
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
 */const q=new hr("@firebase/app"),Ea="@firebase/app-compat",Ia="@firebase/analytics-compat",ba="@firebase/analytics",Sa="@firebase/app-check-compat",Ca="@firebase/app-check",Ta="@firebase/auth",Ra="@firebase/auth-compat",Pa="@firebase/database",ka="@firebase/data-connect",Aa="@firebase/database-compat",Oa="@firebase/functions",Na="@firebase/functions-compat",xa="@firebase/installations",La="@firebase/installations-compat",Da="@firebase/messaging",Ma="@firebase/messaging-compat",Ua="@firebase/performance",Fa="@firebase/performance-compat",ja="@firebase/remote-config",$a="@firebase/remote-config-compat",Ba="@firebase/storage",Ha="@firebase/storage-compat",Va="@firebase/firestore",Wa="@firebase/vertexai",za="@firebase/firestore-compat",qa="firebase",Ka="11.2.0";/**
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
 */const Ot="[DEFAULT]",Ga={[At]:"fire-core",[Ea]:"fire-core-compat",[ba]:"fire-analytics",[Ia]:"fire-analytics-compat",[Ca]:"fire-app-check",[Sa]:"fire-app-check-compat",[Ta]:"fire-auth",[Ra]:"fire-auth-compat",[Pa]:"fire-rtdb",[ka]:"fire-data-connect",[Aa]:"fire-rtdb-compat",[Oa]:"fire-fn",[Na]:"fire-fn-compat",[xa]:"fire-iid",[La]:"fire-iid-compat",[Da]:"fire-fcm",[Ma]:"fire-fcm-compat",[Ua]:"fire-perf",[Fa]:"fire-perf-compat",[ja]:"fire-rc",[$a]:"fire-rc-compat",[Ba]:"fire-gcs",[Ha]:"fire-gcs-compat",[Va]:"fire-fst",[za]:"fire-fst-compat",[Wa]:"fire-vertex","fire-js":"fire-js",[qa]:"fire-js-all"};/**
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
 */const et=new Map,Ja=new Map,Nt=new Map;function wn(t,e){try{t.container.addComponent(e)}catch(n){q.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ae(t){const e=t.name;if(Nt.has(e))return q.debug(`There were multiple attempts to register component ${e}.`),!1;Nt.set(e,t);for(const n of et.values())wn(n,t);for(const n of Ja.values())wn(n,t);return!0}function mr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function D(t){return t.settings!==void 0}/**
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
 */const Ya={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ee=new Me("app","Firebase",Ya);/**
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
 */class Xa{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ee.create("app-deleted",{appName:this._name})}}/**
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
 */const Fe=Ka;function gr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ot,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ee.create("bad-app-name",{appName:String(i)});if(n||(n=ur()),!n)throw ee.create("no-options");const s=et.get(i);if(s){if(Ze(n,s.options)&&Ze(r,s.config))return s;throw ee.create("duplicate-app",{appName:i})}const a=new ra(i);for(const o of Nt.values())a.addComponent(o);const c=new Xa(n,r,a);return et.set(i,c),c}function Qa(t=Ot){const e=et.get(t);if(!e&&t===Ot&&ur())return gr();if(!e)throw ee.create("no-app",{appName:t});return e}function fe(t,e,n){var r;let i=(r=Ga[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),q.warn(c.join(" "));return}Ae(new ye(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Za="firebase-heartbeat-database",eo=1,Oe="firebase-heartbeat-store";let It=null;function yr(){return It||(It=ga(Za,eo,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oe)}catch(n){console.warn(n)}}}}).catch(t=>{throw ee.create("idb-open",{originalErrorMessage:t.message})})),It}async function to(t){try{const n=(await yr()).transaction(Oe),r=await n.objectStore(Oe).get(_r(t));return await n.done,r}catch(e){if(e instanceof re)q.warn(e.message);else{const n=ee.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});q.warn(n.message)}}}async function En(t,e){try{const r=(await yr()).transaction(Oe,"readwrite");await r.objectStore(Oe).put(e,_r(t)),await r.done}catch(n){if(n instanceof re)q.warn(n.message);else{const r=ee.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});q.warn(r.message)}}}function _r(t){return`${t.name}!${t.options.appId}`}/**
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
 */const no=1024,ro=30*24*60*60*1e3;class io{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ao(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=In();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=ro}),this._storage.overwrite(this._heartbeatsCache))}catch(r){q.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=In(),{heartbeatsToSend:r,unsentEntries:i}=so(this._heartbeatsCache.heartbeats),s=cr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return q.warn(n),""}}}function In(){return new Date().toISOString().substring(0,10)}function so(t,e=no){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),bn(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bn(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ao{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zs()?qs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await to(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return En(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return En(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bn(t){return cr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function oo(t){Ae(new ye("platform-logger",e=>new va(e),"PRIVATE")),Ae(new ye("heartbeat",e=>new io(e),"PRIVATE")),fe(At,vn,t),fe(At,vn,"esm2017"),fe("fire-js","")}oo("");function qt(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function vr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const co=vr,wr=new Me("auth","Firebase",vr());/**
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
 */const tt=new hr("@firebase/auth");function lo(t,...e){tt.logLevel<=S.WARN&&tt.warn(`Auth (${Fe}): ${t}`,...e)}function Ge(t,...e){tt.logLevel<=S.ERROR&&tt.error(`Auth (${Fe}): ${t}`,...e)}/**
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
 */function N(t,...e){throw Kt(t,...e)}function M(t,...e){return Kt(t,...e)}function Er(t,e,n){const r=Object.assign(Object.assign({},co()),{[e]:n});return new Me("auth","Firebase",r).create(e,{appName:t.name})}function z(t){return Er(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kt(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wr.create(t,...e)}function E(t,e,...n){if(!t)throw Kt(e,...n)}function B(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ge(e),new Error(e)}function K(t,e){t||B(e)}/**
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
 */function xt(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uo(){return Sn()==="http:"||Sn()==="https:"}function Sn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ho(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uo()||Hs()||"connection"in navigator)?navigator.onLine:!0}function fo(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class je{constructor(e,n){this.shortDelay=e,this.longDelay=n,K(n>e,"Short delay should be less than long delay!"),this.isMobile=$s()||Vs()}get(){return ho()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gt(t,e){K(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ir{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;B("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;B("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;B("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const po={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mo=new je(3e4,6e4);function se(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ae(t,e,n,r,i={}){return br(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=Ue(Object.assign({key:t.config.apiKey},a)).slice(1),o=await t._getAdditionalHeaders();o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:o},s);return Bs()||(l.referrerPolicy="no-referrer"),Ir.fetch()(Sr(t,t.config.apiHost,n,c),l)})}async function br(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},po),e);try{const i=new yo(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ze(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[o,l]=c.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw ze(t,"credential-already-in-use",a);if(o==="EMAIL_EXISTS")throw ze(t,"email-already-in-use",a);if(o==="USER_DISABLED")throw ze(t,"user-disabled",a);const d=r[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Er(t,d,l);N(t,d)}}catch(i){if(i instanceof re)throw i;N(t,"network-request-failed",{message:String(i)})}}async function $e(t,e,n,r,i={}){const s=await ae(t,e,n,r,i);return"mfaPendingCredential"in s&&N(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Sr(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Gt(t.config,i):`${t.config.apiScheme}://${i}`}function go(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yo{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(M(this.auth,"network-request-failed")),mo.get())})}}function ze(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=M(t,e,r);return i.customData._tokenResponse=n,i}function Cn(t){return t!==void 0&&t.enterprise!==void 0}class _o{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return go(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function vo(t,e){return ae(t,"GET","/v2/recaptchaConfig",se(t,e))}/**
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
 */async function wo(t,e){return ae(t,"POST","/v1/accounts:delete",e)}async function Cr(t,e){return ae(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Re(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Eo(t,e=!1){const n=ie(t),r=await n.getIdToken(e),i=Jt(r);E(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Re(bt(i.auth_time)),issuedAtTime:Re(bt(i.iat)),expirationTime:Re(bt(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bt(t){return Number(t)*1e3}function Jt(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ge("JWT malformed, contained fewer than 3 sections"),null;try{const i=lr(n);return i?JSON.parse(i):(Ge("Failed to decode base64 JWT payload"),null)}catch(i){return Ge("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Tn(t){const e=Jt(t);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ne(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof re&&Io(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Io({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lt{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Re(this.lastLoginAt),this.creationTime=Re(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nt(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ne(t,Cr(n,{idToken:r}));E(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Tr(s.providerUserInfo):[],c=Co(t.providerData,a),o=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(c!=null&&c.length),d=o?l:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Lt(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function So(t){const e=ie(t);await nt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Co(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Tr(t){return t.map(e=>{var{providerId:n}=e,r=qt(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function To(t,e){const n=await br(t,{},async()=>{const r=Ue({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=Sr(t,i,"/v1/token",`key=${s}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ir.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ro(t,e){return ae(t,"POST","/v2/accounts:revokeToken",se(t,e))}/**
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
 */class pe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){E(e.length!==0,"internal-error");const n=Tn(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(E(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await To(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new pe;return r&&(E(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(E(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(E(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pe,this.toJSON())}_performRefresh(){return B("not implemented")}}/**
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
 */function G(t,e){E(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class H{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lt(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ne(this,this.stsTokenManager.getToken(this.auth,e));return E(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Eo(this,e)}reload(){return So(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new H(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(D(this.auth.app))return Promise.reject(z(this.auth));const e=await this.getIdToken();return await Ne(this,wo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,c,o,l,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(a=n.photoURL)!==null&&a!==void 0?a:void 0,w=(c=n.tenantId)!==null&&c!==void 0?c:void 0,v=(o=n._redirectEventId)!==null&&o!==void 0?o:void 0,f=(l=n.createdAt)!==null&&l!==void 0?l:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:C,isAnonymous:b,providerData:k,stsTokenManager:A}=n;E(I&&A,e,"internal-error");const $=pe.fromJSON(this.name,A);E(typeof I=="string",e,"internal-error"),G(p,e.name),G(h,e.name),E(typeof C=="boolean",e,"internal-error"),E(typeof b=="boolean",e,"internal-error"),G(m,e.name),G(g,e.name),G(w,e.name),G(v,e.name),G(f,e.name),G(_,e.name);const R=new H({uid:I,auth:e,email:h,emailVerified:C,displayName:p,isAnonymous:b,photoURL:g,phoneNumber:m,tenantId:w,stsTokenManager:$,createdAt:f,lastLoginAt:_});return k&&Array.isArray(k)&&(R.providerData=k.map(L=>Object.assign({},L))),v&&(R._redirectEventId=v),R}static async _fromIdTokenResponse(e,n,r=!1){const i=new pe;i.updateFromServerResponse(n);const s=new H({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nt(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];E(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Tr(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new pe;c.updateFromIdToken(r);const o=new H({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(o,l),o}}/**
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
 */const Rn=new Map;function V(t){K(t instanceof Function,"Expected a class definition");let e=Rn.get(t);return e?(K(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rn.set(t,e),e)}/**
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
 */class Rr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rr.type="NONE";const Pn=Rr;/**
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
 */function Je(t,e,n){return`firebase:${t}:${e}:${n}`}class me{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Je(this.userKey,i.apiKey,s),this.fullPersistenceKey=Je("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?H._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new me(V(Pn),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||V(Pn);const a=Je(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const d=await l._get(a);if(d){const p=H._fromJSON(e,d);l!==s&&(c=p),s=l;break}}catch{}const o=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!o.length?new me(s,e,r):(s=o[0],c&&await s._set(a,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new me(s,e,r))}}/**
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
 */function kn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Or(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xr(e))return"Blackberry";if(Lr(e))return"Webos";if(kr(e))return"Safari";if((e.includes("chrome/")||Ar(e))&&!e.includes("edge/"))return"Chrome";if(Nr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pr(t=P()){return/firefox\//i.test(t)}function kr(t=P()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ar(t=P()){return/crios\//i.test(t)}function Or(t=P()){return/iemobile/i.test(t)}function Nr(t=P()){return/android/i.test(t)}function xr(t=P()){return/blackberry/i.test(t)}function Lr(t=P()){return/webos/i.test(t)}function Yt(t=P()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Po(t=P()){var e;return Yt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ko(){return Ws()&&document.documentMode===10}function Dr(t=P()){return Yt(t)||Nr(t)||Lr(t)||xr(t)||/windows phone/i.test(t)||Or(t)}/**
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
 */function Mr(t,e=[]){let n;switch(t){case"Browser":n=kn(P());break;case"Worker":n=`${kn(P())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fe}/${r}`}/**
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
 */class Ao{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,c)=>{try{const o=e(s);a(o)}catch(o){c(o)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Oo(t,e={}){return ae(t,"GET","/v2/passwordPolicy",se(t,e))}/**
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
 */const No=6;class xo{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:No,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,c;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(n=o.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(r=o.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(i=o.containsLowercaseLetter)!==null&&i!==void 0?i:!0),o.isValid&&(o.isValid=(s=o.containsUppercaseLetter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(a=o.containsNumericCharacter)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(c=o.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),o}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Lo{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new An(this),this.idTokenSubscription=new An(this),this.beforeStateQueue=new Ao(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=V(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Cr(this,{idToken:e}),r=await H._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(D(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!a||a===c)&&(o!=null&&o.user)&&(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fo()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(D(this.app))return Promise.reject(z(this));const n=e?ie(e):null;return n&&E(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return D(this.app)?Promise.reject(z(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return D(this.app)?Promise.reject(z(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(V(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Oo(this),n=new xo(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Me("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ro(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&V(e)||this._popupRedirectResolver;E(n,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[V(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(E(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const o=e.addObserver(n,r,i);return()=>{a=!0,o()}}else{const o=e.addObserver(n);return()=>{a=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lo(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function de(t){return ie(t)}class An{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xs(n=>this.observer=n)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ht={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Do(t){ht=t}function Ur(t){return ht.loadJS(t)}function Mo(){return ht.recaptchaEnterpriseScript}function Uo(){return ht.gapiScript}function Fo(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class jo{constructor(){this.enterprise=new $o}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class $o{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Bo="recaptcha-enterprise",Fr="NO_RECAPTCHA";class Ho{constructor(e){this.type=Bo,this.auth=de(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{vo(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new _o(o);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,a(l.siteKey)}}).catch(o=>{c(o)})})}function i(s,a,c){const o=window.grecaptcha;Cn(o)?o.enterprise.ready(()=>{o.enterprise.execute(s,{action:e}).then(l=>{a(l)}).catch(()=>{a(Fr)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jo().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(c=>{if(!n&&Cn(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let o=Mo();o.length!==0&&(o+=c),Ur(o).then(()=>{i(c,s,a)}).catch(l=>{a(l)})}}).catch(c=>{a(c)})})}}async function On(t,e,n,r=!1,i=!1){const s=new Ho(t);let a;if(i)a=Fr;else try{a=await s.verify(n)}catch{a=await s.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const o=c.phoneEnrollmentInfo.phoneNumber,l=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const o=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:o,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Dt(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await On(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await On(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(a)})}/**
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
 */function Vo(t,e){const n=mr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ze(s,e??{}))return i;N(i,"already-initialized")}return n.initialize({options:e})}function Wo(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(V);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zo(t,e,n){const r=de(t);E(r._canInitEmulator,r,"emulator-config-failed"),E(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=jr(e),{host:a,port:c}=qo(e),o=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${o}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Ko()}function jr(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qo(t){const e=jr(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nn(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Nn(a)}}}function Nn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ko(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Xt{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return B("not implemented")}_getIdTokenResponse(e){return B("not implemented")}_linkToIdToken(e,n){return B("not implemented")}_getReauthenticationResolver(e){return B("not implemented")}}async function Go(t,e){return ae(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Jo(t,e){return $e(t,"POST","/v1/accounts:signInWithPassword",se(t,e))}/**
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
 */async function Yo(t,e){return $e(t,"POST","/v1/accounts:signInWithEmailLink",se(t,e))}async function Xo(t,e){return $e(t,"POST","/v1/accounts:signInWithEmailLink",se(t,e))}/**
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
 */class xe extends Xt{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new xe(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xe(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dt(e,n,"signInWithPassword",Jo);case"emailLink":return Yo(e,{email:this._email,oobCode:this._password});default:N(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dt(e,r,"signUpPassword",Go);case"emailLink":return Xo(e,{idToken:n,email:this._email,oobCode:this._password});default:N(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ge(t,e){return $e(t,"POST","/v1/accounts:signInWithIdp",se(t,e))}/**
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
 */const Qo="http://localhost";class le extends Xt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new le(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):N("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qt(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new le(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ge(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ge(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ge(e,n)}buildRequest(){const e={requestUri:Qo,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ue(n)}return e}}/**
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
 */function Zo(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ec(t){const e=Ce(Te(t)).link,n=e?Ce(Te(e)).deep_link_id:null,r=Ce(Te(t)).deep_link_id;return(r?Ce(Te(r)).link:null)||r||n||e||t}class Qt{constructor(e){var n,r,i,s,a,c;const o=Ce(Te(e)),l=(n=o.apiKey)!==null&&n!==void 0?n:null,d=(r=o.oobCode)!==null&&r!==void 0?r:null,p=Zo((i=o.mode)!==null&&i!==void 0?i:null);E(l&&d&&p,"argument-error"),this.apiKey=l,this.operation=p,this.code=d,this.continueUrl=(s=o.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=o.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=o.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=ec(e);try{return new Qt(n)}catch{return null}}}/**
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
 */class Ee{constructor(){this.providerId=Ee.PROVIDER_ID}static credential(e,n){return xe._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qt.parseLink(n);return E(r,"argument-error"),xe._fromEmailAndCode(e,r.code,r.tenantId)}}Ee.PROVIDER_ID="password";Ee.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ee.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $r{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Be extends $r{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class J extends Be{constructor(){super("facebook.com")}static credential(e){return le._fromParams({providerId:J.PROVIDER_ID,signInMethod:J.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return J.credentialFromTaggedObject(e)}static credentialFromError(e){return J.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return J.credential(e.oauthAccessToken)}catch{return null}}}J.FACEBOOK_SIGN_IN_METHOD="facebook.com";J.PROVIDER_ID="facebook.com";/**
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
 */class Y extends Be{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return le._fromParams({providerId:Y.PROVIDER_ID,signInMethod:Y.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Y.credentialFromTaggedObject(e)}static credentialFromError(e){return Y.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Y.credential(n,r)}catch{return null}}}Y.GOOGLE_SIGN_IN_METHOD="google.com";Y.PROVIDER_ID="google.com";/**
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
 */class X extends Be{constructor(){super("github.com")}static credential(e){return le._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return X.credential(e.oauthAccessToken)}catch{return null}}}X.GITHUB_SIGN_IN_METHOD="github.com";X.PROVIDER_ID="github.com";/**
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
 */class Q extends Be{constructor(){super("twitter.com")}static credential(e,n){return le._fromParams({providerId:Q.PROVIDER_ID,signInMethod:Q.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Q.credentialFromTaggedObject(e)}static credentialFromError(e){return Q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Q.credential(n,r)}catch{return null}}}Q.TWITTER_SIGN_IN_METHOD="twitter.com";Q.PROVIDER_ID="twitter.com";/**
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
 */async function tc(t,e){return $e(t,"POST","/v1/accounts:signUp",se(t,e))}/**
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
 */class ue{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await H._fromIdTokenResponse(e,r,i),a=xn(r);return new ue({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xn(r);return new ue({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class rt extends re{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new rt(e,n,r,i)}}function Br(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?rt._fromErrorAndOperation(t,s,e,r):s})}async function nc(t,e,n=!1){const r=await Ne(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ue._forOperation(t,"link",r)}/**
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
 */async function rc(t,e,n=!1){const{auth:r}=t;if(D(r.app))return Promise.reject(z(r));const i="reauthenticate";try{const s=await Ne(t,Br(r,i,e,t),n);E(s.idToken,r,"internal-error");const a=Jt(s.idToken);E(a,r,"internal-error");const{sub:c}=a;return E(t.uid===c,r,"user-mismatch"),ue._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&N(r,"user-mismatch"),s}}/**
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
 */async function Hr(t,e,n=!1){if(D(t.app))return Promise.reject(z(t));const r="signIn",i=await Br(t,r,e),s=await ue._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ic(t,e){return Hr(de(t),e)}/**
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
 */async function Vr(t){const e=de(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sc(t,e,n){if(D(t.app))return Promise.reject(z(t));const r=de(t),a=await Dt(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tc).catch(o=>{throw o.code==="auth/password-does-not-meet-requirements"&&Vr(t),o}),c=await ue._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function ac(t,e,n){return D(t.app)?Promise.reject(z(t)):ic(ie(t),Ee.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Vr(t),r})}function oc(t,e,n,r){return ie(t).onIdTokenChanged(e,n,r)}function cc(t,e,n){return ie(t).beforeAuthStateChanged(e,n)}function lc(t,e,n,r){return ie(t).onAuthStateChanged(e,n,r)}const it="__sak";/**
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
 */class Wr{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(it,"1"),this.storage.removeItem(it),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const uc=1e3,dc=10;class zr extends Wr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,o)=>{this.notifyListeners(a,o)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);ko()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,dc):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zr.type="LOCAL";const hc=zr;/**
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
 */class qr extends Wr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qr.type="SESSION";const Kr=qr;/**
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
 */function fc(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ft{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ft(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async l=>l(n.origin,s)),o=await fc(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:o})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ft.receivers=[];/**
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
 */function Zt(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,o)=>{const l=Zt("",20);i.port1.start();const d=setTimeout(()=>{o(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(p){const h=p;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(h.data.response);break;default:clearTimeout(d),clearTimeout(s),o(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function U(){return window}function mc(t){U().location.href=t}/**
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
 */function Gr(){return typeof U().WorkerGlobalScope<"u"&&typeof U().importScripts=="function"}async function gc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yc(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _c(){return Gr()?self:null}/**
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
 */const Jr="firebaseLocalStorageDb",vc=1,st="firebaseLocalStorage",Yr="fbase_key";class He{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pt(t,e){return t.transaction([st],e?"readwrite":"readonly").objectStore(st)}function wc(){const t=indexedDB.deleteDatabase(Jr);return new He(t).toPromise()}function Mt(){const t=indexedDB.open(Jr,vc);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(st,{keyPath:Yr})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(st)?e(r):(r.close(),await wc(),e(await Mt()))})})}async function Ln(t,e,n){const r=pt(t,!0).put({[Yr]:e,value:n});return new He(r).toPromise()}async function Ec(t,e){const n=pt(t,!1).get(e),r=await new He(n).toPromise();return r===void 0?null:r.value}function Dn(t,e){const n=pt(t,!0).delete(e);return new He(n).toPromise()}const Ic=800,bc=3;class Xr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mt(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ft._getInstance(_c()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gc(),!this.activeServiceWorker)return;this.sender=new pc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mt();return await Ln(e,it,"1"),await Dn(e,it),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ln(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ec(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pt(i,!1).getAll();return new He(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ic)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xr.type="LOCAL";const Sc=Xr;new je(3e4,6e4);/**
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
 */function Cc(t,e){return e?V(e):(E(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class en extends Xt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ge(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ge(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ge(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Tc(t){return Hr(t.auth,new en(t),t.bypassAuthState)}function Rc(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),rc(n,new en(t),t.bypassAuthState)}async function Pc(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),nc(n,new en(t),t.bypassAuthState)}/**
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
 */class Qr{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const o={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tc;case"linkViaPopup":case"linkViaRedirect":return Pc;case"reauthViaPopup":case"reauthViaRedirect":return Rc;default:N(this.auth,"internal-error")}}resolve(e){K(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){K(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kc=new je(2e3,1e4);class he extends Qr{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,he.currentPopupAction&&he.currentPopupAction.cancel(),he.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){K(this.filter.length===1,"Popup operations only handle one event");const e=Zt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(M(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(M(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,he.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(M(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kc.get())};e()}}he.currentPopupAction=null;/**
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
 */const Ac="pendingRedirect",Ye=new Map;class Oc extends Qr{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ye.get(this.auth._key());if(!e){try{const r=await Nc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ye.set(this.auth._key(),e)}return this.bypassAuthState||Ye.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nc(t,e){const n=Dc(e),r=Lc(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function xc(t,e){Ye.set(t._key(),e)}function Lc(t){return V(t._redirectPersistence)}function Dc(t){return Je(Ac,t.config.apiKey,t.name)}async function Mc(t,e,n=!1){if(D(t.app))return Promise.reject(z(t));const r=de(t),i=Cc(r,e),a=await new Oc(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Uc=10*60*1e3;class Fc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jc(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zr(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(M(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Uc&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mn(e))}saveEventToCache(e){this.cachedEventUids.add(Mn(e)),this.lastProcessedEventTime=Date.now()}}function Mn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zr({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zr(t);default:return!1}}/**
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
 */async function $c(t,e={}){return ae(t,"GET","/v1/projects",e)}/**
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
 */const Bc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hc=/^https?/;async function Vc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $c(t);for(const n of e)try{if(Wc(n))return}catch{}N(t,"unauthorized-domain")}function Wc(t){const e=xt(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Hc.test(n))return!1;if(Bc.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const zc=new je(3e4,6e4);function Un(){const t=U().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qc(t){return new Promise((e,n)=>{var r,i,s;function a(){Un(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Un(),n(M(t,"network-request-failed"))},timeout:zc.get()})}if(!((i=(r=U().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=U().gapi)===null||s===void 0)&&s.load)a();else{const c=Fo("iframefcb");return U()[c]=()=>{gapi.load?a():n(M(t,"network-request-failed"))},Ur(`${Uo()}?onload=${c}`).catch(o=>n(o))}}).catch(e=>{throw Xe=null,e})}let Xe=null;function Kc(t){return Xe=Xe||qc(t),Xe}/**
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
 */const Gc=new je(5e3,15e3),Jc="__/auth/iframe",Yc="emulator/auth/iframe",Xc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zc(t){const e=t.config;E(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gt(e,Yc):`https://${t.config.authDomain}/${Jc}`,r={apiKey:e.apiKey,appName:t.name,v:Fe},i=Qc.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ue(r).slice(1)}`}async function el(t){const e=await Kc(t),n=U().gapi;return E(n,t,"internal-error"),e.open({where:document.body,url:Zc(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xc,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=M(t,"network-request-failed"),c=U().setTimeout(()=>{s(a)},Gc.get());function o(){U().clearTimeout(c),i(r)}r.ping(o).then(o,()=>{s(a)})}))}/**
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
 */const tl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nl=500,rl=600,il="_blank",sl="http://localhost";class Fn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function al(t,e,n,r=nl,i=rl){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const o=Object.assign(Object.assign({},tl),{width:r.toString(),height:i.toString(),top:s,left:a}),l=P().toLowerCase();n&&(c=Ar(l)?il:n),Pr(l)&&(e=e||sl,o.scrollbars="yes");const d=Object.entries(o).reduce((h,[m,g])=>`${h}${m}=${g},`,"");if(Po(l)&&c!=="_self")return ol(e||"",c),new Fn(null);const p=window.open(e||"",c,d);E(p,t,"popup-blocked");try{p.focus()}catch{}return new Fn(p)}function ol(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cl="__/auth/handler",ll="emulator/auth/handler",ul=encodeURIComponent("fac");async function jn(t,e,n,r,i,s){E(t.config.authDomain,t,"auth-domain-config-required"),E(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fe,eventId:i};if(e instanceof $r){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Ys(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Be){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const o=await t._getAppCheckToken(),l=o?`#${ul}=${encodeURIComponent(o)}`:"";return`${dl(t)}?${Ue(c).slice(1)}${l}`}function dl({config:t}){return t.emulator?Gt(t,ll):`https://${t.authDomain}/${cl}`}/**
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
 */const St="webStorageSupport";class hl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kr,this._completeRedirectFn=Mc,this._overrideRedirectResult=xc}async _openPopup(e,n,r,i){var s;K((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await jn(e,n,r,xt(),i);return al(e,a,Zt())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await jn(e,n,r,xt(),i);return mc(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(K(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await el(e),r=new Fc(e);return n.register("authEvent",i=>(E(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(St,{type:St},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[St];a!==void 0&&n(!!a),N(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vc(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dr()||kr()||Yt()}}const fl=hl;var $n="@firebase/auth",Bn="1.8.2";/**
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
 */class pl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ml(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gl(t){Ae(new ye("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;E(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const o={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mr(t)},l=new Lo(r,i,s,o);return Wo(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ae(new ye("auth-internal",e=>{const n=de(e.getProvider("auth").getImmediate());return(r=>new pl(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fe($n,Bn,ml(t)),fe($n,Bn,"esm2017")}/**
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
 */const yl=5*60,_l=dr("authIdTokenMaxAge")||yl;let Hn=null;const vl=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_l)return;const i=n==null?void 0:n.token;Hn!==i&&(Hn=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tn(t=Qa()){const e=mr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Vo(t,{popupRedirectResolver:fl,persistence:[Sc,hc,Kr]}),r=dr("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=vl(s.toString());cc(n,a,()=>a(n.currentUser)),oc(n,c=>a(c))}}const i=Fs("auth");return i&&zo(n,`http://${i}`),n}function wl(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Do({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=M("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",wl().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gl("Browser");var El="firebase",Il="11.2.0";/**
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
 */fe(El,Il,"app");const bl={apiKey:"AIzaSyCVBWgvQ8vyyNvdAq2_-uLer9D5CSkWyHI",authDomain:"mp3-player-a6490.firebaseapp.com",projectId:"mp3-player-a6490",storageBucket:"mp3-player-a6490.firebasestorage.app",messagingSenderId:"161294449231",appId:"1:161294449231:web:78ee85682def41d312483a"},Sl=gr(bl),Pe=tn(Sl);var ei={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vn=ce.createContext&&ce.createContext(ei),Cl=["attr","size","title"];function Tl(t,e){if(t==null)return{};var n=Rl(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Rl(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function at(){return at=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},at.apply(this,arguments)}function Wn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ot(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Wn(Object(n),!0).forEach(function(r){Pl(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Wn(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Pl(t,e,n){return e=kl(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kl(t){var e=Al(t,"string");return typeof e=="symbol"?e:e+""}function Al(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ti(t){return t&&t.map((e,n)=>ce.createElement(e.tag,ot({key:n},e.attr),ti(e.child)))}function j(t){return e=>ce.createElement(Ol,at({attr:ot({},t.attr)},e),ti(t.child))}function Ol(t){var e=n=>{var{attr:r,size:i,title:s}=t,a=Tl(t,Cl),c=i||n.size||"1em",o;return n.className&&(o=n.className),t.className&&(o=(o?o+" ":"")+t.className),ce.createElement("svg",at({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:o,style:ot(ot({color:t.color||n.color},n.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&ce.createElement("title",null,s),t.children)};return Vn!==void 0?ce.createElement(Vn.Consumer,null,n=>e(n)):e(ei)}function Nl(t){return j({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M215 71l-89 89H24a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h102.06L215 441c15 15 41 4.47 41-17V88c0-21.47-26-32-41-17z"},child:[]}]})(t)}function xl(t){return j({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(t)}function Ll(t){return j({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"},child:[]}]})(t)}function Dl(t){return j({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"},child:[]}]})(t)}function Ml({audioRef:t}){const[e,n]=u.useState(1),r=ut(),i=tn(),s=async()=>{try{await i.signOut(),r("/auth")}catch(c){console.error("Error logging out:",c)}},a=c=>{const o=parseFloat(c.target.value);n(o),t.current.volume=o};return u.useEffect(()=>{n(1)},[]),y.jsxs("header",{children:[y.jsx("h1",{children:"Patrick's mp3 player"}),y.jsxs("div",{className:"volume-slider-section",children:[y.jsx(Nl,{}),y.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:e,onChange:a}),y.jsx(xl,{})]}),y.jsx("button",{className:"logout-button",onClick:s,children:"Logout"})]})}const ct="https://mp3-player-production.up.railway.app";function Ul({audioDatabase:t,setAudioDatabase:e,selectedTrack:n,setSelectedTrack:r}){u.useEffect(()=>{(async()=>{if(Pe.currentUser)try{const o=await Pe.currentUser.getIdToken(),d=await(await fetch(`${ct}/api/tracks`,{headers:{Authorization:`Bearer ${o}`}})).json();e(d)}catch(o){console.error("Error fetching tracks:",o)}})()},[]);const i=u.useCallback(c=>({...c,audioUrl:c.audioUrl,coverUrl:c.coverUrl}),[]),s=u.useCallback(c=>{if(!(!c||(n==null?void 0:n.id)===c.id))try{const o=i(c);o&&r(o)}catch(o){console.error("Error selecting track:",o)}},[n,i]),a=async(c,o)=>{o.stopPropagation();try{const l=await Pe.currentUser.getIdToken(),d=t[c];if(!(await fetch(`${ct}/api/tracks/${d.id}`,{method:"DELETE",headers:{Authorization:`Bearer ${l}`}})).ok)throw new Error("Failed to delete track");const h=t.filter((m,g)=>g!==c);e(h)}catch(l){console.error("Error removing track:",l)}};return y.jsxs("div",{className:"file-list",children:[y.jsx("h2",{children:"File List"}),t.length>0?y.jsx("ol",{children:t.map((c,o)=>y.jsxs("li",{className:"file-list-item",style:{backgroundColor:(n==null?void 0:n.id)===c.id?"#dcf2ff":"transparent"},children:[y.jsx("div",{className:"file-title",onClick:()=>s(c),children:c.title}),y.jsx("button",{onClick:l=>a(o,l),className:"remove-button",children:"X"})]},o))}):y.jsx("p",{children:"Please add some files"})]})}function Fl(t){return j({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32z"},child:[]}]})(t)}function jl(t){return j({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"},child:[]}]})(t)}function $l(t){return j({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z"},child:[]},{tag:"path",attr:{d:"m117.23 246.7 114.45-69.14a10.78 10.78 0 0 1 16.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0 1 16.32 9.31v138.26a10.78 10.78 0 0 1-16.32 9.31L248 271.81v53.32a10.78 10.78 0 0 1-16.32 9.31L117.23 265.3a10.89 10.89 0 0 1 0-18.6z"},child:[]}]})(t)}function Bl(t){return j({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256zm69.23-9.3 114.45-69.14a10.78 10.78 0 0 1 16.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0 1 16.32 9.31v138.26a10.78 10.78 0 0 1-16.32 9.31L248 271.81v53.32a10.78 10.78 0 0 1-16.32 9.31L117.23 265.3a10.89 10.89 0 0 1 0-18.6z"},child:[]}]})(t)}function Hl(t){return j({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"},child:[]},{tag:"path",attr:{d:"m394.77 246.7-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v53.32l-103.68-62.63a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31L264 271.81v53.32a10.78 10.78 0 0 0 16.32 9.31l114.45-69.14a10.89 10.89 0 0 0 0-18.6z"},child:[]}]})(t)}function Vl(t){return j({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm138.77 217.3-114.45 69.14a10.78 10.78 0 0 1-16.32-9.31v-53.32l-103.68 62.63a10.78 10.78 0 0 1-16.32-9.31V186.87a10.78 10.78 0 0 1 16.32-9.31L264 240.19v-53.32a10.78 10.78 0 0 1 16.32-9.31l114.45 69.14a10.89 10.89 0 0 1 0 18.6z"},child:[]}]})(t)}function Wl({selectedTrack:t,setSelectedTrack:e,audioDatabase:n,audioRef:r}){const[i,s]=u.useState(null),[a,c]=u.useState(!1),[o,l]=u.useState(0),[d,p]=u.useState(0),h=f=>{const _=Math.floor(f/60),I=Math.floor(f%60);return`${_}:${I.toString().padStart(2,"0")}`},m=()=>{a?r.current.pause():r.current.play(),c(!a)},g=()=>{r.current&&(r.current.currentTime=0)},w=()=>{const f=n.findIndex(_=>_.id===t.id);if(f>0){const _=n[f-1];e(_)}},v=()=>{const f=n.findIndex(_=>_.id===t.id);if(f+1<n.length){const _=n[f+1];e(_)}};return u.useEffect(()=>{if(!t||(console.log("Selected Track Details:",{id:t.id,title:t.title,url:t.audioUrl}),fetch(t.audioUrl).then(b=>(console.log("URL Response:",{status:b.status,statusText:b.statusText,headers:Object.fromEntries(b.headers.entries())}),b.blob())).then(b=>{console.log("Content Type:",b.type)}).catch(b=>{console.error("Fetch Error:",b)}),!r.current))return;const f=r.current;if(console.log("Loading audio URL:",t==null?void 0:t.audioUrl),f.load(),f.addEventListener("error",b=>{console.error("Audio error:",b),console.error("Audio error details:",f.error)}),a){const b=()=>{f.play().catch(k=>console.error("Error auto-playing track:",k)),f.removeEventListener("loadeddata",b)};f.addEventListener("loadeddata",b)}const _=()=>{l(f.currentTime)},I=()=>{p(f.duration)},C=()=>{c(!1),l(0)};return f.addEventListener("timeupdate",_),f.addEventListener("loadedmetadata",I),f.addEventListener("ended",C),()=>{f&&(f.removeEventListener("timeupdate",_),f.removeEventListener("loadedmetadata",I),f.removeEventListener("ended",C))}},[t]),u.useEffect(()=>{t&&o===d&&(m(),l(0))},[o]),t?y.jsxs("div",{className:"media-player",children:[console.log("Selected Track:",t),console.log("Audio URL:",t==null?void 0:t.audioUrl),y.jsx("h2",{children:"Media Player"}),t.coverUrl&&y.jsx("img",{src:t.coverUrl}),y.jsx("h3",{children:t.title}),y.jsxs("audio",{ref:r,preload:"metadata",onError:f=>{console.error("Audio Error:",{error:f.target.error,networkState:r.current.networkState,readyState:r.current.readyState,src:r.current.src})},children:[y.jsx("source",{src:t.audioUrl,type:"audio/mpeg"}),y.jsx("source",{src:t.audioUrl,type:"audio/mp3"}),"Your browser does not support the audio element."]}),y.jsxs("div",{className:"slider-section",children:[y.jsx("p",{children:h(o)}),y.jsx("input",{className:"slider",type:"range",min:0,max:d,value:o,onChange:f=>{const _=parseFloat(f.target.value);r.current.currentTime=_}}),y.jsx("p",{children:h(d)})]}),y.jsxs("div",{className:"button-section",children:[i==="rewind"?y.jsx(Bl,{className:"button",onClick:g,onDoubleClick:w,onMouseLeave:()=>s(null)}):y.jsx($l,{className:"button",onClick:g,onDoubleClick:w,onMouseEnter:()=>s("rewind")}),a?i==="play"?y.jsx(Fl,{className:"button",onClick:m,onMouseLeave:()=>s(null)}):y.jsx(Ll,{className:"button",onClick:m,onMouseEnter:()=>s("play")}):i==="play"?y.jsx(jl,{className:"button",onClick:m,onMouseLeave:()=>s(null)}):y.jsx(Dl,{className:"button",onClick:m,onMouseEnter:()=>s("play")}),i==="forward"?y.jsx(Vl,{className:"button",onClick:v,onMouseLeave:()=>s(null)}):y.jsx(Hl,{className:"button",onClick:v,onMouseEnter:()=>s("forward")})]})]}):y.jsxs("div",{className:"media-player",children:[y.jsx("h2",{children:"Media Player"}),y.jsx("p",{children:"Select a track to play"})]})}function zl({setAudioDatabase:t}){const[e,n]=u.useState(null),[r,i]=u.useState("Your MP3"),[s,a]=u.useState(null),[c,o]=u.useState(""),l=async h=>{h.preventDefault();try{const m=await Pe.currentUser.getIdToken(),g=new FormData;e&&e.size>0&&(g.append("filename",e.name),g.append("filetype",e.type),g.append("file",e)),g.append("title",r),s&&g.append("coverImage",s),o("Uploading...");const w=await fetch(`${ct}/api/tracks/upload`,{method:"POST",headers:{Authorization:`Bearer ${m}`},body:g}),v=await w.text();let f;try{f=JSON.parse(v)}catch{throw console.error("Failed to parse response:",v),new Error("Invalid server response")}if(!w.ok)throw new Error(f.error||"Upload failed");const I=await(await fetch(`${ct}/api/tracks`,{headers:{Authorization:`Bearer ${m}`}})).json();t(I),o("Upload successful!"),n(null),i("Your MP3"),a(null),h.target.reset()}catch(m){console.error("Upload error:",m),o(`Upload failed: ${m.message}`)}},d=h=>{const m=h.target.files[0];if(m){if(m.size>50*1024*1024){alert("File is too large. Please select a file under 50MB."),h.target.value="";return}n(m)}},p=h=>{const m=h.target.files[0];if(m){if(m.size>5*1024*1024){alert("Cover image is too large. Please select an image under 5MB."),h.target.value="";return}console.log("Cover selected:",{name:m.name,size:m.size,type:m.type}),a(m)}};return y.jsxs("div",{className:"file-editor",children:[y.jsx("h2",{children:"File Editor"}),y.jsxs("form",{onSubmit:l,children:[y.jsxs("div",{className:"form-section",children:[y.jsx("label",{htmlFor:"file",children:"MP3 File (max 50MB): "}),y.jsx("input",{type:"file",id:"file",name:"file",accept:"audio/mp3",onChange:d,required:!0})]}),y.jsxs("div",{className:"form-section",children:[y.jsx("label",{htmlFor:"title",children:"File Name: "}),y.jsx("input",{type:"text",id:"title",value:r,onChange:h=>i(h.target.value),required:!0})]}),y.jsxs("div",{className:"form-section",children:[y.jsx("label",{htmlFor:"cover",children:"Cover Image (Optional, max 5MB): "}),y.jsx("input",{type:"file",id:"cover",name:"cover",accept:"image/png, image/jpg, image/jpeg",onChange:p})]}),y.jsx("button",{type:"submit",children:"Upload"})]}),c&&y.jsx("div",{className:"upload-status",children:c})]})}function ql(){const[t,e]=u.useState([]),[n,r]=u.useState(null),i=u.useRef(null);return u.useEffect(()=>()=>{t.forEach(s=>{s.url&&URL.revokeObjectURL(s.url)})},[]),y.jsxs(y.Fragment,{children:[y.jsx(Ml,{audioRef:i}),y.jsxs("main",{children:[y.jsx(Ul,{audioDatabase:t,setAudioDatabase:e,selectedTrack:n,setSelectedTrack:r}),y.jsxs("div",{className:"right-section",children:[y.jsx(Wl,{selectedTrack:n,setSelectedTrack:r,audioDatabase:t,audioRef:i}),y.jsx(zl,{setAudioDatabase:e})]})]})]})}function Kl(){const[t,e]=u.useState(!1),[n,r]=u.useState(""),[i,s]=u.useState(""),[a,c]=u.useState(""),o=ut(),l=tn(),d=async p=>{p.preventDefault(),c("");try{t?await sc(l,n,i):await ac(l,n,i),o("/")}catch(h){c(h.message)}};return y.jsxs("div",{className:"auth-container",children:[y.jsx("h2",{children:t?"Sign Up":"Login"}),y.jsxs("form",{onSubmit:d,children:[y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"email",children:"Email:"}),y.jsx("input",{type:"email",id:"email",value:n,onChange:p=>r(p.target.value),required:!0})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"password",children:"Password:"}),y.jsx("input",{type:"password",id:"password",value:i,onChange:p=>s(p.target.value),required:!0})]}),a&&y.jsx("p",{className:"error",children:a}),y.jsx("button",{type:"submit",children:t?"Sign Up":"Login"})]}),y.jsxs("p",{children:[t?"Already have an account? ":"Don't have an account? ",y.jsx("button",{onClick:()=>e(!t),children:t?"Login":"Sign Up"})]})]})}function Gl(){const[t,e]=u.useState(null),[n,r]=u.useState(!0);return u.useEffect(()=>{const i=lc(Pe,s=>{e(s),r(!1)});return()=>i()},[]),n?y.jsx("div",{children:"Loading..."}):y.jsx(Es,{basename:"/mp3-player",children:y.jsxs(Xi,{children:[y.jsx(Tt,{path:"/auth",element:t?y.jsx(hn,{to:"/"}):y.jsx(Kl,{})}),y.jsx(Tt,{path:"/",element:t?y.jsx(ql,{}):y.jsx(hn,{to:"/auth"})})]})})}oi.createRoot(document.getElementById("root")).render(y.jsx(u.StrictMode,{children:y.jsx(Gl,{})}));
