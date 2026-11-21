(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Nd={exports:{}},gl={};var z_;function HM(){if(z_)return gl;z_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return gl.Fragment=e,gl.jsx=i,gl.jsxs=i,gl}var I_;function VM(){return I_||(I_=1,Nd.exports=HM()),Nd.exports}var C=VM(),Ud={exports:{}},_l={},Ld={exports:{}},Od={};var F_;function GM(){return F_||(F_=1,(function(o){function e(j,rt){var q=j.length;j.push(rt);t:for(;0<q;){var vt=q-1>>>1,dt=j[vt];if(0<l(dt,rt))j[vt]=rt,j[q]=dt,q=vt;else break t}}function i(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var rt=j[0],q=j.pop();if(q!==rt){j[0]=q;t:for(var vt=0,dt=j.length,qt=dt>>>1;vt<qt;){var oe=2*(vt+1)-1,Ee=j[oe],B=oe+1,pt=j[B];if(0>l(Ee,q))B<dt&&0>l(pt,Ee)?(j[vt]=pt,j[B]=q,vt=B):(j[vt]=Ee,j[oe]=q,vt=oe);else if(B<dt&&0>l(pt,q))j[vt]=pt,j[B]=q,vt=B;else break t}}return rt}function l(j,rt){var q=j.sortIndex-rt.sortIndex;return q!==0?q:j.id-rt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,y=3,b=!1,M=!1,A=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function F(j){for(var rt=i(p);rt!==null;){if(rt.callback===null)s(p);else if(rt.startTime<=j)s(p),rt.sortIndex=rt.expirationTime,e(m,rt);else break;rt=i(p)}}function V(j){if(A=!1,F(j),!M)if(i(m)!==null)M=!0,O||(O=!0,at());else{var rt=i(p);rt!==null&&ft(V,rt.startTime-j)}}var O=!1,P=-1,Y=5,D=-1;function w(){return S?!0:!(o.unstable_now()-D<Y)}function k(){if(S=!1,O){var j=o.unstable_now();D=j;var rt=!0;try{t:{M=!1,A&&(A=!1,N(P),P=-1),b=!0;var q=y;try{e:{for(F(j),x=i(m);x!==null&&!(x.expirationTime>j&&w());){var vt=x.callback;if(typeof vt=="function"){x.callback=null,y=x.priorityLevel;var dt=vt(x.expirationTime<=j);if(j=o.unstable_now(),typeof dt=="function"){x.callback=dt,F(j),rt=!0;break e}x===i(m)&&s(m),F(j)}else s(m);x=i(m)}if(x!==null)rt=!0;else{var qt=i(p);qt!==null&&ft(V,qt.startTime-j),rt=!1}}break t}finally{x=null,y=q,b=!1}rt=void 0}}finally{rt?at():O=!1}}}var at;if(typeof L=="function")at=function(){L(k)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,_t=ot.port2;ot.port1.onmessage=k,at=function(){_t.postMessage(null)}}else at=function(){v(k,0)};function ft(j,rt){P=v(function(){j(o.unstable_now())},rt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(j){j.callback=null},o.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<j?Math.floor(1e3/j):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(j){switch(y){case 1:case 2:case 3:var rt=3;break;default:rt=y}var q=y;y=rt;try{return j()}finally{y=q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(j,rt){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var q=y;y=j;try{return rt()}finally{y=q}},o.unstable_scheduleCallback=function(j,rt,q){var vt=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?vt+q:vt):q=vt,j){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=q+dt,j={id:g++,callback:rt,priorityLevel:j,startTime:q,expirationTime:dt,sortIndex:-1},q>vt?(j.sortIndex=q,e(p,j),i(m)===null&&j===i(p)&&(A?(N(P),P=-1):A=!0,ft(V,q-vt))):(j.sortIndex=dt,e(m,j),M||b||(M=!0,O||(O=!0,at()))),j},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(j){var rt=y;return function(){var q=y;y=rt;try{return j.apply(this,arguments)}finally{y=q}}}})(Od)),Od}var B_;function kM(){return B_||(B_=1,Ld.exports=GM()),Ld.exports}var Pd={exports:{}},he={};var H_;function XM(){if(H_)return he;H_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),b=Symbol.iterator;function M(B){return B===null||typeof B!="object"?null:(B=b&&B[b]||B["@@iterator"],typeof B=="function"?B:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,v={};function N(B,pt,Q){this.props=B,this.context=pt,this.refs=v,this.updater=Q||A}N.prototype.isReactComponent={},N.prototype.setState=function(B,pt){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,pt,"setState")},N.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function L(){}L.prototype=N.prototype;function F(B,pt,Q){this.props=B,this.context=pt,this.refs=v,this.updater=Q||A}var V=F.prototype=new L;V.constructor=F,S(V,N.prototype),V.isPureReactComponent=!0;var O=Array.isArray;function P(){}var Y={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function w(B,pt,Q){var et=Q.ref;return{$$typeof:o,type:B,key:pt,ref:et!==void 0?et:null,props:Q}}function k(B,pt){return w(B.type,pt,B.props)}function at(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function ot(B){var pt={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Q){return pt[Q]})}var _t=/\/+/g;function ft(B,pt){return typeof B=="object"&&B!==null&&B.key!=null?ot(""+B.key):pt.toString(36)}function j(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(P,P):(B.status="pending",B.then(function(pt){B.status==="pending"&&(B.status="fulfilled",B.value=pt)},function(pt){B.status==="pending"&&(B.status="rejected",B.reason=pt)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function rt(B,pt,Q,et,Tt){var Lt=typeof B;(Lt==="undefined"||Lt==="boolean")&&(B=null);var Nt=!1;if(B===null)Nt=!0;else switch(Lt){case"bigint":case"string":case"number":Nt=!0;break;case"object":switch(B.$$typeof){case o:case e:Nt=!0;break;case g:return Nt=B._init,rt(Nt(B._payload),pt,Q,et,Tt)}}if(Nt)return Tt=Tt(B),Nt=et===""?"."+ft(B,0):et,O(Tt)?(Q="",Nt!=null&&(Q=Nt.replace(_t,"$&/")+"/"),rt(Tt,pt,Q,"",function(ce){return ce})):Tt!=null&&(at(Tt)&&(Tt=k(Tt,Q+(Tt.key==null||B&&B.key===Tt.key?"":(""+Tt.key).replace(_t,"$&/")+"/")+Nt)),pt.push(Tt)),1;Nt=0;var At=et===""?".":et+":";if(O(B))for(var kt=0;kt<B.length;kt++)et=B[kt],Lt=At+ft(et,kt),Nt+=rt(et,pt,Q,Lt,Tt);else if(kt=M(B),typeof kt=="function")for(B=kt.call(B),kt=0;!(et=B.next()).done;)et=et.value,Lt=At+ft(et,kt++),Nt+=rt(et,pt,Q,Lt,Tt);else if(Lt==="object"){if(typeof B.then=="function")return rt(j(B),pt,Q,et,Tt);throw pt=String(B),Error("Objects are not valid as a React child (found: "+(pt==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":pt)+"). If you meant to render a collection of children, use an array instead.")}return Nt}function q(B,pt,Q){if(B==null)return B;var et=[],Tt=0;return rt(B,et,"","",function(Lt){return pt.call(Q,Lt,Tt++)}),et}function vt(B){if(B._status===-1){var pt=B._result,Q=pt();Q.then(function(et){(B._status===0||B._status===-1)&&(B._status=1,B._result=et,Q.status===void 0&&(Q.status="fulfilled",Q.value=et))},function(et){(B._status===0||B._status===-1)&&(B._status=2,B._result=et,Q.status===void 0&&(Q.status="rejected",Q.reason=et))}),B._status===-1&&(B._status=0,B._result=Q)}if(B._status===1)return B._result.default;throw B._result}var dt=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var pt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(pt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function qt(B){var pt=Y.T,Q={};Q.types=pt!==null?pt.types:null,Y.T=Q;try{var et=B(),Tt=Y.S;Tt!==null&&Tt(Q,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(P,dt)}catch(Lt){dt(Lt)}finally{pt!==null&&Q.types!==null&&(pt.types=Q.types),Y.T=pt}}function oe(B){var pt=Y.T;if(pt!==null){var Q=pt.types;Q===null?pt.types=[B]:Q.indexOf(B)===-1&&Q.push(B)}else qt(oe.bind(null,B))}var Ee={map:q,forEach:function(B,pt,Q){q(B,function(){pt.apply(this,arguments)},Q)},count:function(B){var pt=0;return q(B,function(){pt++}),pt},toArray:function(B){return q(B,function(pt){return pt})||[]},only:function(B){if(!at(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return he.Activity=x,he.Children=Ee,he.Component=N,he.Fragment=i,he.Profiler=l,he.PureComponent=F,he.StrictMode=s,he.Suspense=m,he.ViewTransition=y,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,he.__COMPILER_RUNTIME={__proto__:null,c:function(B){return Y.H.useMemoCache(B)}},he.addTransitionType=oe,he.cache=function(B){return function(){return B.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(B,pt,Q){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var et=S({},B.props),Tt=B.key;if(pt!=null)for(Lt in pt.key!==void 0&&(Tt=""+pt.key),pt)!D.call(pt,Lt)||Lt==="key"||Lt==="__self"||Lt==="__source"||Lt==="ref"&&pt.ref===void 0||(et[Lt]=pt[Lt]);var Lt=arguments.length-2;if(Lt===1)et.children=Q;else if(1<Lt){for(var Nt=Array(Lt),At=0;At<Lt;At++)Nt[At]=arguments[At+2];et.children=Nt}return w(B.type,Tt,et)},he.createContext=function(B){return B={$$typeof:h,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:u,_context:B},B},he.createElement=function(B,pt,Q){var et,Tt={},Lt=null;if(pt!=null)for(et in pt.key!==void 0&&(Lt=""+pt.key),pt)D.call(pt,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(Tt[et]=pt[et]);var Nt=arguments.length-2;if(Nt===1)Tt.children=Q;else if(1<Nt){for(var At=Array(Nt),kt=0;kt<Nt;kt++)At[kt]=arguments[kt+2];Tt.children=At}if(B&&B.defaultProps)for(et in Nt=B.defaultProps,Nt)Tt[et]===void 0&&(Tt[et]=Nt[et]);return w(B,Lt,Tt)},he.createRef=function(){return{current:null}},he.forwardRef=function(B){return{$$typeof:d,render:B}},he.isValidElement=at,he.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:vt}},he.memo=function(B,pt){return{$$typeof:p,type:B,compare:pt===void 0?null:pt}},he.startTransition=qt,he.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},he.use=function(B){return Y.H.use(B)},he.useActionState=function(B,pt,Q){return Y.H.useActionState(B,pt,Q)},he.useCallback=function(B,pt){return Y.H.useCallback(B,pt)},he.useContext=function(B){return Y.H.useContext(B)},he.useDebugValue=function(){},he.useDeferredValue=function(B,pt){return Y.H.useDeferredValue(B,pt)},he.useEffect=function(B,pt){return Y.H.useEffect(B,pt)},he.useEffectEvent=function(B){return Y.H.useEffectEvent(B)},he.useId=function(){return Y.H.useId()},he.useImperativeHandle=function(B,pt,Q){return Y.H.useImperativeHandle(B,pt,Q)},he.useInsertionEffect=function(B,pt){return Y.H.useInsertionEffect(B,pt)},he.useLayoutEffect=function(B,pt){return Y.H.useLayoutEffect(B,pt)},he.useMemo=function(B,pt){return Y.H.useMemo(B,pt)},he.useOptimistic=function(B,pt){return Y.H.useOptimistic(B,pt)},he.useReducer=function(B,pt,Q){return Y.H.useReducer(B,pt,Q)},he.useRef=function(B){return Y.H.useRef(B)},he.useState=function(B){return Y.H.useState(B)},he.useSyncExternalStore=function(B,pt,Q){return Y.H.useSyncExternalStore(B,pt,Q)},he.useTransition=function(){return Y.H.useTransition()},he.version="19.3.1",he}var V_;function fm(){return V_||(V_=1,Pd.exports=XM()),Pd.exports}var zd={exports:{}},Ln={};var G_;function jM(){if(G_)return Ln;G_=1;var o=fm();function e(g){var x="https://react.dev/errors/"+g;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)x+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(g,x,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:b===h?h:""+b,children:g,containerInfo:x,implementation:y}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,x){if(g==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.browser=function(g){return{$$typeof:u,_reason:g}},Ln.createPortal=function(g,x){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(e(299));return d(g,x,null,y)},Ln.flushSync=function(g){var x=m.T,y=s.p;try{if(m.T=null,s.p=2,g)return g()}finally{m.T=x,s.p=y,s.d.f()}},Ln.preconnect=function(g,x){typeof g=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,s.d.C(g,x))},Ln.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Ln.preinit=function(g,x){if(typeof g=="string"&&x&&typeof x.as=="string"){var y=x.as,b=p(y,x.crossOrigin),M=typeof x.integrity=="string"?x.integrity:void 0,A=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;y==="style"?s.d.S(g,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:b,integrity:M,fetchPriority:A}):y==="script"&&s.d.X(g,{crossOrigin:b,integrity:M,fetchPriority:A,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Ln.preinitModule=function(g,x){if(typeof g=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var y=p(x.as,x.crossOrigin);s.d.M(g,{crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0})}}else x==null&&s.d.M(g)},Ln.preload=function(g,x){if(typeof g=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var y=x.as,b=p(y,x.crossOrigin);s.d.L(g,y,{crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Ln.preloadModule=function(g,x){if(typeof g=="string")if(x){var y=p(x.as,x.crossOrigin);s.d.m(g,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0})}else s.d.m(g)},Ln.requestFormReset=function(g){s.d.r(g)},Ln.unstable_batchedUpdates=function(g,x){return g(x)},Ln.useFormState=function(g,x,y){return m.H.useFormState(g,x,y)},Ln.useFormStatus=function(){return m.H.useHostTransitionStatus()},Ln.version="19.3.1",Ln}var k_;function qM(){if(k_)return zd.exports;k_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zd.exports=jM(),zd.exports}var X_;function YM(){if(X_)return _l;X_=1;var o=kM(),e=fm(),i=qM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,E=c.child;E;){if(E===a){_=!0,a=c,r=f;break}if(E===r){_=!0,r=c,a=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===a){_=!0,a=f,r=c;break}if(E===r){_=!0,r=f,a=c;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}function x(t,n,a,r,c,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,c,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&x(t.child,n,a,r,c,f))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function b(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function M(t){var n=[null,null],a=y(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,r))return!0;a=a.sibling}return!1}function S(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var v=null,N=null;function L(t,n,a){return t===a?!0:t===n?(v=t,!0):!1}function F(t,n,a){return t===a?(N=t,!1):t===n?(N!==null&&(v=t),!0):!1}function V(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function O(t,n,a){for(var r=0,c=t;c;c=a(c))r++;c=0;for(var f=n;f;f=a(f))c++;for(;0<r-c;)t=a(t),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,Y=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),at=Symbol.for("react.strict_mode"),ot=Symbol.for("react.profiler"),_t=Symbol.for("react.consumer"),ft=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),qt=Symbol.for("react.activity"),oe=Symbol.for("react.legacy_hidden"),Ee=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),pt=Symbol.for("react.recoverable"),Q=Symbol.iterator;function et(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Symbol.for("react.client.reference");function Lt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Tt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case ot:return"Profiler";case at:return"StrictMode";case rt:return"Suspense";case q:return"SuspenseList";case qt:return"Activity";case B:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case ft:return t.displayName||"Context";case _t:return(t._context.displayName||"Context")+".Consumer";case j:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vt:return n=t.displayName||null,n!==null?n:Lt(t.type)||"Memo";case dt:n=t._payload,t=t._init;try{return Lt(t(n))}catch{}}return null}var Nt=Array.isArray,At=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,kt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},De=[],H=-1;function ne(t){return{current:t}}function Vt(t){0>H||(t.current=De[H],De[H]=null,H--)}function $t(t,n){H++,De[H]=t.current,t.current=n}var It=ne(null),ye=ne(null),Yt=ne(null),ie=ne(null);function U(t,n){switch($t(Yt,n),$t(ye,t),$t(It,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?jg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=jg(n),t=qg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Vt(It),$t(It,t)}function T(){Vt(It),Vt(ye),Vt(Yt)}function nt(t){var n=t.memoizedState;n!==null&&(qr._currentValue=n.memoizedState,$t(ie,t)),n=It.current;var a=qg(n,t.type);n!==a&&($t(ye,t),$t(It,a))}function yt(t){ye.current===t&&(Vt(It),Vt(ye)),ie.current===t&&(Vt(ie),qr._currentValue=ce)}var Mt,ht;function Xt(t){if(Mt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Mt=n&&n[1]||"",ht=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+t+ht}var Ot=!1;function Qt(t,n){if(!t||Ot)return"";Ot=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(Pt){var X=Pt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(Pt){X=Pt}gt=!1;try{var it=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),gt=!0,new t}finally{gt&&(it!==void 0?Object.defineProperty(t.prototype,"props",it):delete t.prototype.props)}}}else{try{throw Error()}catch(Pt){X=Pt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(Pt){if(Pt&&X&&typeof Pt.stack=="string")return[Pt.stack,X.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var I=_.split(`
`),Z=E.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<Z.length&&!Z[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===Z.length)for(r=I.length-1,c=Z.length-1;1<=r&&0<=c&&I[r]!==Z[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==Z[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==Z[c]){var st=`
`+I[r].replace(" at new "," at ");return t.displayName&&st.includes("<anonymous>")&&(st=st.replace("<anonymous>",t.displayName)),st}while(1<=r&&0<=c);break}}}finally{Ot=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Xt(a):""}function Zt(t,n){switch(t.tag){case 26:case 27:case 5:return Xt(t.type);case 16:return Xt("Lazy");case 13:return t.child!==n&&n!==null?Xt("Suspense Fallback"):Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return Qt(t.type,!1);case 11:return Qt(t.type.render,!1);case 1:return Qt(t.type,!0);case 31:return Xt("Activity");case 30:return Xt("ViewTransition");default:return""}}function Et(t){try{var n="",a=null;do n+=Zt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Dt=Object.prototype.hasOwnProperty,te=o.unstable_scheduleCallback,ee=o.unstable_cancelCallback,Bt=o.unstable_shouldYield,ct=o.unstable_requestPaint,z=o.unstable_now,St=o.unstable_getCurrentPriorityLevel,Ct=o.unstable_ImmediatePriority,Rt=o.unstable_UserBlockingPriority,bt=o.unstable_NormalPriority,mt=o.unstable_LowPriority,jt=o.unstable_IdlePriority,fe=o.log,We=o.unstable_setDisableYieldValue,Ue=null,tn=null;function fn(t){if(typeof fe=="function"&&We(t),tn&&typeof tn.setStrictMode=="function")try{tn.setStrictMode(Ue,t)}catch{}}var Gn=Math.clz32?Math.clz32:ca,jl=Math.log,ql=Math.LN2;function ca(t){return t>>>=0,t===0?32:31-(jl(t)/ql|0)|0}var Va=256,Cs=262144,Rs=4194304;function yi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ws(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=yi(r):(_&=E,_!==0?c=yi(_):a||(a=E&~t,a!==0&&(c=yi(a))))):(E=r&~f,E!==0?c=yi(E):_!==0?c=yi(_):a||(a=r&~t,a!==0&&(c=yi(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function ji(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ao(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-Gn(a),c=1<<r;n|=t[r],a&=~c}return n}function Yl(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wl(){var t=Rs;return Rs<<=1,(Rs&62914560)===0&&(Rs=4194304),t}function Co(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ds(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function rf(t,n,a,r,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,I=t.expirationTimes,Z=t.hiddenUpdates;for(a=_&~a;0<a;){var st=31-Gn(a),gt=1<<st;E[st]=0,I[st]=-1;var X=Z[st];if(X!==null)for(Z[st]=null,st=0;st<X.length;st++){var it=X[st];it!==null&&(it.lane&=-536870913)}a&=~gt}r!==0&&Zl(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Zl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Gn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Kl(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Gn(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function R(t,n){var a=n&-n;return a=(a&42)!==0?1:K(a),(a&(t.suspendedLanes|n))!==0?0:a}function K(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function lt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ut(){var t=kt.p;return t!==0?t:(t=window.event,t===void 0?32:w_(t.type))}function J(t,n){var a=kt.p;try{return kt.p=t,n()}finally{kt.p=a}}var wt=Math.random().toString(36).slice(2),Ut="__reactFiber$"+wt,zt="__reactProps$"+wt,Ht="__reactContainer$"+wt,re="__reactEvents$"+wt,ue="__reactListeners$"+wt,ae="__reactHandles$"+wt,Se="__reactResources$"+wt,Le="__reactMarker$"+wt,Ze="__reactLoad$"+wt;function Ke(t){delete t[Ut],delete t[zt],delete t[ue],delete t[ae]}function Ne(t){var n;if(n=t[Ut])return n;for(var a=t.parentNode;a;){if(n=a[Ht]||a[Ut]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=c_(t);t!==null;){if(a=t[Ut])return a;t=c_(t)}return n}t=a,a=t.parentNode}return null}function Kt(t){if(t=t[Ut]||t[Ht]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ve(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function be(t){var n=t[Se];return n||(n=t[Se]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pe(t){t[Le]=!0}function ua(t){t[Ze]=void 0}var On=new Set,Ga={};function Fe(t,n){ln(t,n),ln(t+"Capture",n)}function ln(t,n){for(Ga[t]=n,t=0;t<n.length;t++)On.add(n[t])}var Zn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bn={},Cn={};function Ro(t){return Dt.call(Cn,t)?!0:Dt.call(bn,t)?!1:Zn.test(t)?Cn[t]=!0:(bn[t]=!0,!1)}var _e=!1;function Nm(){var t=_e;return _e=!1,t}function Ql(t,n,a){if(Ro(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Jl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function fa(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function ri(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Um(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rS(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function of(t){if(!t._valueTracker){var n=Um(t)?"checked":"value";t._valueTracker=rS(t,n,""+t[n])}}function Lm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Um(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var oS=/[\n"\\]/g;function Si(t){return t.replace(oS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function lf(t,n,a,r,c,f,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ri(n)):t.value!==""+ri(n)&&(t.value=""+ri(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?cf(t,ri(t.value)):cf(t,ri(n)):a!=null?cf(t,ri(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ri(E):t.removeAttribute("name")}function Om(t,n,a,r,c,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){of(t);return}a=a!=null?""+ri(a):"",n=n!=null?""+ri(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),of(t)}function cf(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ur(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ri(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Pm(t,n,a){if(n!=null&&(n=""+ri(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ri(a):""}function zm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Nt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ri(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),of(t)}function fr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var lS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Im(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||lS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Fm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",_e=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(Im(t,c,r),_e=!0)}else for(var f in n)n.hasOwnProperty(f)&&Im(t,f,n[f])}function uf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $l(t){return uS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var ff=null;function hf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hr=null,dr=null;function Bm(t){var n=Kt(t);if(n&&(t=n.stateNode)){var a=t[zt]||null;t:switch(t=n.stateNode,n.type){case"input":if(lf(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Si(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[zt]||null;if(!c)throw Error(s(90));lf(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Lm(r)}break t;case"textarea":Pm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ur(t,!!a.multiple,n,!1)}}}var df=!1;function Hm(t,n,a){if(df)return t(n,a);df=!0;try{var r=t(n);return r}finally{if(df=!1,(hr!==null||dr!==null)&&($c(),hr&&(n=hr,t=dr,dr=hr=null,Bm(n),t)))for(n=0;n<t.length;n++)Bm(t[n])}}function wo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[zt]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pf=!1;if(ha)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){pf=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{pf=!1}var ka=null,mf=null,tc=null;function Vm(){if(tc)return tc;var t,n=mf,a=n.length,r,c="value"in ka?ka.value:ka.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return tc=c.slice(t,1<r?1-r:void 0)}function ec(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function nc(){return!0}function Gm(){return!1}function kn(t){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nc:Gm,this.isPropagationStopped=Gm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nc)},persist:function(){},isPersistent:nc}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=kn(Xa),No=P({},Xa,{view:0,detail:0}),fS=kn(No),xf,gf,Uo,ac=P({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uo&&(Uo&&t.type==="mousemove"?(xf=t.screenX-Uo.screenX,gf=t.screenY-Uo.screenY):gf=xf=0,Uo=t),xf)},movementY:function(t){return"movementY"in t?t.movementY:gf}}),km=kn(ac),hS=P({},ac,{dataTransfer:0}),dS=kn(hS),pS=P({},No,{relatedTarget:0}),_f=kn(pS),mS=P({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),xS=kn(mS),gS=P({},Xa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_S=kn(gS),vS=P({},Xa,{data:0}),Xm=kn(vS),yS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=bS[t])?!!n[t]:!1}function vf(){return MS}var ES=P({},No,{key:function(t){if(t.key){var n=yS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ec(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vf,charCode:function(t){return t.type==="keypress"?ec(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ec(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TS=kn(ES),AS=P({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jm=kn(AS),CS=P({},Xa,{submitter:0}),RS=kn(CS),wS=P({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vf}),DS=kn(wS),NS=P({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),US=kn(NS),LS=P({},ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),OS=kn(LS),PS=P({},Xa,{newState:0,oldState:0,source:0}),zS=kn(PS),IS=[9,13,27,32],yf=ha&&"CompositionEvent"in window,Lo=null;ha&&"documentMode"in document&&(Lo=document.documentMode);var FS=ha&&"TextEvent"in window&&!Lo,qm=ha&&(!yf||Lo&&8<Lo&&11>=Lo),Ym=" ",Wm=!1;function Zm(t,n){switch(t){case"keyup":return IS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Km(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pr=!1;function BS(t,n){switch(t){case"compositionend":return Km(n);case"keypress":return n.which!==32?null:(Wm=!0,Ym);case"textInput":return t=n.data,t===Ym&&Wm?null:t;default:return null}}function HS(t,n){if(pr)return t==="compositionend"||!yf&&Zm(t,n)?(t=Vm(),tc=mf=ka=null,pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qm&&n.locale!=="ko"?null:n.data;default:return null}}var VS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!VS[t.type]:n==="textarea"}function Jm(t,n,a,r){hr?dr?dr.push(r):dr=[r]:hr=r,n=su(n,"onChange"),0<n.length&&(a=new ic("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Oo=null,Po=null;function GS(t){Bg(t,0)}function sc(t){var n=Ve(t);if(Lm(n))return t}function $m(t,n){if(t==="change")return n}var t0=!1;if(ha){var Sf;if(ha){var bf="oninput"in document;if(!bf){var e0=document.createElement("div");e0.setAttribute("oninput","return;"),bf=typeof e0.oninput=="function"}Sf=bf}else Sf=!1;t0=Sf&&(!document.documentMode||9<document.documentMode)}function n0(){Oo&&(Oo.detachEvent("onpropertychange",i0),Po=Oo=null)}function i0(t){if(t.propertyName==="value"&&sc(Po)){var n=[];Jm(n,Po,t,hf(t)),Hm(GS,n)}}function kS(t,n,a){t==="focusin"?(n0(),Oo=n,Po=a,Oo.attachEvent("onpropertychange",i0)):t==="focusout"&&n0()}function XS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sc(Po)}function jS(t,n){if(t==="click")return sc(n)}function qS(t,n){if(t==="input"||t==="change")return sc(n)}function YS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var oi=typeof Object.is=="function"?Object.is:YS;function zo(t,n){if(oi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Dt.call(n,c)||!oi(t[c],n[c]))return!1}return!0}function Mf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function a0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function s0(t,n){var a=a0(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=a0(a)}}function r0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?r0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function o0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Mf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Mf(t.document)}return n}function Ef(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var WS=ha&&"documentMode"in document&&11>=document.documentMode,mr=null,Tf=null,Io=null,Af=!1;function l0(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Af||mr==null||mr!==Mf(r)||(r=mr,"selectionStart"in r&&Ef(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&zo(Io,r)||(Io=r,r=su(Tf,"onSelect"),0<r.length&&(n=new ic("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=mr)))}function Ns(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var xr={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionrun:Ns("Transition","TransitionRun"),transitionstart:Ns("Transition","TransitionStart"),transitioncancel:Ns("Transition","TransitionCancel"),transitionend:Ns("Transition","TransitionEnd")},Cf={},c0={};ha&&(c0=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Us(t){if(Cf[t])return Cf[t];if(!xr[t])return t;var n=xr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in c0)return Cf[t]=n[a];return t}var u0=Us("animationend"),f0=Us("animationiteration"),h0=Us("animationstart"),ZS=Us("transitionrun"),KS=Us("transitionstart"),QS=Us("transitioncancel"),d0=Us("transitionend"),p0=new Map,Rf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rf.push("scrollEnd");function Pi(t,n){p0.set(t,n),Fe(n,[t])}var JS=0;function da(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Bi.identifierPrefix;var a=JS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function m0(t){if(t==null||typeof t=="string")return t;var n=null,a=zr;if(a!==null)for(var r=0;r<a.length;r++){var c=t[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function pa(t,n){return t=m0(t),n=m0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var rc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},bi=[],gr=0,wf=0;function oc(){for(var t=gr,n=wf=gr=0;n<t;){var a=bi[n];bi[n++]=null;var r=bi[n];bi[n++]=null;var c=bi[n];bi[n++]=null;var f=bi[n];if(bi[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&x0(a,c,f)}}function lc(t,n,a,r){bi[gr++]=t,bi[gr++]=n,bi[gr++]=a,bi[gr++]=r,wf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Df(t,n,a,r){return lc(t,n,a,r),cc(t)}function Ls(t,n){return lc(t,null,null,n),cc(t)}function x0(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Gn(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function cc(t){if(50<sl)throw sl=0,Jc=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var _r={};function $S(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,r){return new $S(t,n,a,r)}function Nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ma(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function g0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function uc(t,n,a,r,c,f){var _=0;if(r=t,typeof r=="function")Nf(r)&&(_=1);else if(typeof r=="string")_=CM(t,a,It.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case qt:return t=Kn(31,a,n,c),t.elementType=qt,t.lanes=f,t;case k:return Os(a.children,c,f,n);case at:_=8,c|=24;break;case ot:return t=Kn(12,a,n,c|2),t.elementType=ot,t.lanes=f,t;case rt:return t=Kn(13,a,n,c),t.elementType=rt,t.lanes=f,t;case q:return t=Kn(19,a,n,c),t.elementType=q,t.lanes=f,t;case oe:case B:return t=c|32,t=Kn(30,a,n,t),t.elementType=B,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ft:_=10;break t;case _t:_=9;break t;case j:_=11;break t;case vt:_=14;break t;case dt:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Kn(_,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function Os(t,n,a,r){return t=Kn(7,t,r,n),t.lanes=a,t}function Uf(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function _0(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Lf(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var v0=new WeakMap;function Mi(t,n){if(typeof t=="object"&&t!==null){var a=v0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Et(n)},v0.set(t,n),n)}return{value:t,source:n,stack:Et(n)}}var vr=[],yr=0,fc=null,Fo=0,Ei=[],Ti=0,ja=null,Yi=1,Wi="";function xa(t,n){vr[yr++]=Fo,vr[yr++]=fc,fc=t,Fo=n}function y0(t,n,a){Ei[Ti++]=Yi,Ei[Ti++]=Wi,Ei[Ti++]=ja,ja=t;var r=Yi;t=Wi;var c=32-Gn(r)-1;r&=~(1<<c),a+=1;var f=32-Gn(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,Yi=1<<32-Gn(n)+c|a<<c|r,Wi=f+t}else Yi=1<<f|a<<c|r,Wi=t}function hc(t){t.return!==null&&(xa(t,1),y0(t,1,0))}function Of(t){for(;t===fc;)fc=vr[--yr],vr[yr]=null,Fo=vr[--yr],vr[yr]=null;for(;t===ja;)ja=Ei[--Ti],Ei[Ti]=null,Wi=Ei[--Ti],Ei[Ti]=null,Yi=Ei[--Ti],Ei[Ti]=null}function S0(t,n){Ei[Ti++]=Yi,Ei[Ti++]=Wi,Ei[Ti++]=ja,Yi=n.id,Wi=n.overflow,ja=t}var Mn=null,Je=null,Me=!1,qa=null,Ai=!1,Pf=Error(s(519));function Ya(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Bo(Mi(n,t)),Pf}function b0(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Ut]=t,n[zt]=r,a){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<ol.length;a++)Ae(ol[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),Om(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),zm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||kg(n.textContent,a)?(r.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),r.onScroll!=null&&Ae("scroll",n),r.onScrollEnd!=null&&Ae("scrollend",n),r.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Ya(t,!0)}function dc(t){for(Mn=t.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:Mn=Mn.return}}function Sr(t){if(t!==Mn)return!1;if(!Me)return dc(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||fd(t.type,t.memoizedProps)),a=!a),a&&Je&&Ya(t),dc(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Je=l_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Je=l_(t)}else n===27?(n=Je,cs(t.type)?(t=yd,yd=null,Je=t):Je=n):Je=Mn?Ri(t.stateNode.nextSibling):null;return!0}function Ps(){Je=Mn=null,Me=!1}function zf(){var t=qa;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),qa=null),t}function Bo(t){qa===null?qa=[t]:qa.push(t)}var If=ne(null),zs=null,ga=null;function Wa(t,n,a){$t(If,n._currentValue),n._currentValue=a}function _a(t){t._currentValue=If.current,Vt(If)}function pc(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Ff(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var I=0;I<n.length;I++)if(E.context===n[I]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),pc(f.return,a,t),r||(_=null);break t}f=E.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),pc(_,a,t),_=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,_=c.alternate,_!==null&&(_.lanes|=a),pc(c.return,a,t),_=c.child,_=_!==null?_.sibling:null):_=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Is(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=c.type;oi(c.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(c===ie.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(qr):t=[qr])}c=c.return}return t!==null&&Ff(n,t,a,r),n.flags|=262144,t!==null}function mc(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Fs(t){zs=t,ga=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return M0(zs,t)}function xc(t,n){return zs===null&&Fs(t),M0(t,n)}function M0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ga===null){if(t===null)throw Error(s(308));ga=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ga=ga.next=n;return a}var tb=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},eb=o.unstable_scheduleCallback,nb=o.unstable_NormalPriority,hn={$$typeof:ft,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bf(){return{controller:new tb,data:new Map,refCount:0}}function Ho(t){t.refCount--,t.refCount===0&&eb(nb,function(){t.controller.abort()})}function E0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Vo=null;function ib(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Go=null,Hf=0,Bs=0,br=null;function ab(t,n){if(Go===null){var a=Go=[];Hf=0,Bs=nd(),br={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Hf++,n.then(T0,T0),n}function T0(){if(--Hf===0&&(Vo=null,Go!==null)){br!==null&&(br.status="fulfilled");var t=Go;Go=null,Bs=0,br=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function sb(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var A0=At.S;At.S=function(t,n){if(_g=z(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ab(t,n),Vo!==null)for(var a=Hr;a!==null;)E0(a,Vo),a=a.next;if(a=t.types,a!==null){for(var r=Hr;r!==null;)E0(r,a),r=r.next;if(Bs!==0){r=Vo,r===null&&(r=Vo=[]);for(var c=0;c<a.length;c++){var f=a[c];r.indexOf(f)===-1&&r.push(f)}}}A0!==null&&A0(t,n)};var Hs=ne(null);function Vf(){var t=Hs.current;return t!==null?t:Qe.pooledCache}function gc(t,n){n===null?$t(Hs,Hs.current):$t(Hs,n.pool)}function C0(){var t=Vf();return t===null?null:{parent:hn._currentValue,pool:t}}var Mr=Error(s(460)),Gf=Error(s(474)),_c=Error(s(542)),vc={then:function(){}};function R0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function w0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,N0(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=Qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,N0(t),t}throw Gs=n,Mr}}function Vs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Gs=a,Mr):a}}var Gs=null;function D0(){if(Gs===null)throw Error(s(459));var t=Gs;return Gs=null,t}function N0(t){if(t===Mr||t===_c)throw Error(s(483))}var Er=null,ko=0;function yc(t){var n=ko;return ko+=1,Er===null&&(Er=[]),w0(Er,t,n)}function Za(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sc(t,n){throw n.$$typeof===Y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function U0(t){function n(W,G){if(t){var $=W.deletions;$===null?(W.deletions=[G],W.flags|=16):$.push(G)}}function a(W,G){if(!t)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function r(W){for(var G=new Map;W!==null;)W.key===null?G.set(W.index,W):G.set(W.key,W),W=W.sibling;return G}function c(W,G){return W=ma(W,G),W.index=0,W.sibling=null,W}function f(W,G,$){return W.index=$,t?($=W.alternate,$!==null?($=$.index,$<G?(W.flags|=2,G):$):(W.flags|=134217730,G)):(W.flags|=1048576,G)}function _(W){return t&&W.alternate===null&&(W.flags|=134217730),W}function E(W,G,$,xt){return G===null||G.tag!==6?(G=Uf($,W.mode,xt),G.return=W,G):(G=c(G,$),G.return=W,G)}function I(W,G,$,xt){var Gt=$.type;return Gt===k?(W=st(W,G,$.props.children,xt,$.key),Za(W,$),W):G!==null&&(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===dt&&Vs(Gt)===G.type)?(G=c(G,$.props),Za(G,$),G.return=W,G):(G=uc($.type,$.key,$.props,null,W.mode,xt),Za(G,$),G.return=W,G)}function Z(W,G,$,xt){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=Lf($,W.mode,xt),G.return=W,G):(G=c(G,$.children||[]),G.return=W,G)}function st(W,G,$,xt,Gt){return G===null||G.tag!==7?(G=Os($,W.mode,xt,Gt),G.return=W,G):(G=c(G,$),G.return=W,G)}function gt(W,G,$){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Uf(""+G,W.mode,$),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case D:return $=uc(G.type,G.key,G.props,null,W.mode,$),Za($,G),$.return=W,$;case w:return G=Lf(G,W.mode,$),G.return=W,G;case dt:return G=Vs(G),gt(W,G,$)}if(Nt(G)||et(G))return G=Os(G,W.mode,$,null),G.return=W,G;if(typeof G.then=="function")return gt(W,yc(G),$);if(G.$$typeof===ft)return gt(W,xc(W,G),$);Sc(W,G)}return null}function X(W,G,$,xt){var Gt=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Gt!==null?null:E(W,G,""+$,xt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case D:return $.key===Gt?I(W,G,$,xt):null;case w:return $.key===Gt?Z(W,G,$,xt):null;case dt:return $=Vs($),X(W,G,$,xt)}if(Nt($)||et($))return Gt!==null?null:st(W,G,$,xt,null);if(typeof $.then=="function")return X(W,G,yc($),xt);if($.$$typeof===ft)return X(W,G,xc(W,$),xt);Sc(W,$)}return null}function it(W,G,$,xt,Gt){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return W=W.get($)||null,E(G,W,""+xt,Gt);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case D:return W=W.get(xt.key===null?$:xt.key)||null,I(G,W,xt,Gt);case w:return W=W.get(xt.key===null?$:xt.key)||null,Z(G,W,xt,Gt);case dt:return xt=Vs(xt),it(W,G,$,xt,Gt)}if(Nt(xt)||et(xt))return W=W.get($)||null,st(G,W,xt,Gt,null);if(typeof xt.then=="function")return it(W,G,$,yc(xt),Gt);if(xt.$$typeof===ft)return it(W,G,$,xc(G,xt),Gt);Sc(G,xt)}return null}function Pt(W,G,$,xt){for(var Gt=null,we=null,Jt=G,le=G=0,mn=null;Jt!==null&&le<$.length;le++){Jt.index>le?(mn=Jt,Jt=null):mn=Jt.sibling;var Oe=X(W,Jt,$[le],xt);if(Oe===null){Jt===null&&(Jt=mn);break}t&&Jt&&Oe.alternate===null&&n(W,Jt),G=f(Oe,G,le),we===null?Gt=Oe:we.sibling=Oe,we=Oe,Jt=mn}if(le===$.length)return a(W,Jt),Me&&xa(W,le),Gt;if(Jt===null){for(;le<$.length;le++)Jt=gt(W,$[le],xt),Jt!==null&&(G=f(Jt,G,le),we===null?Gt=Jt:we.sibling=Jt,we=Jt);return Me&&xa(W,le),Gt}for(Jt=r(Jt);le<$.length;le++)mn=it(Jt,W,le,$[le],xt),mn!==null&&(t&&(Oe=mn.alternate,Oe!==null&&Jt.delete(Oe.key===null?le:Oe.key)),G=f(mn,G,le),we===null?Gt=mn:we.sibling=mn,we=mn);return t&&Jt.forEach(function(ps){return n(W,ps)}),Me&&xa(W,le),Gt}function Wt(W,G,$,xt){if($==null)throw Error(s(151));for(var Gt=null,we=null,Jt=G,le=G=0,mn=null,Oe=$.next();Jt!==null&&!Oe.done;le++,Oe=$.next()){Jt.index>le?(mn=Jt,Jt=null):mn=Jt.sibling;var ps=X(W,Jt,Oe.value,xt);if(ps===null){Jt===null&&(Jt=mn);break}t&&Jt&&ps.alternate===null&&n(W,Jt),G=f(ps,G,le),we===null?Gt=ps:we.sibling=ps,we=ps,Jt=mn}if(Oe.done)return a(W,Jt),Me&&xa(W,le),Gt;if(Jt===null){for(;!Oe.done;le++,Oe=$.next())Oe=gt(W,Oe.value,xt),Oe!==null&&(G=f(Oe,G,le),we===null?Gt=Oe:we.sibling=Oe,we=Oe);return Me&&xa(W,le),Gt}for(Jt=r(Jt);!Oe.done;le++,Oe=$.next())Oe=it(Jt,W,le,Oe.value,xt),Oe!==null&&(t&&(mn=Oe.alternate,mn!==null&&Jt.delete(mn.key===null?le:mn.key)),G=f(Oe,G,le),we===null?Gt=Oe:we.sibling=Oe,we=Oe);return t&&Jt.forEach(function(BM){return n(W,BM)}),Me&&xa(W,le),Gt}function xe(W,G,$,xt){if(typeof $=="object"&&$!==null&&$.type===k&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case D:t:{for(var Gt=$.key;G!==null;){if(G.key===Gt){if(Gt=$.type,Gt===k){if(G.tag===7){a(W,G.sibling),xt=c(G,$.props.children),Za(xt,$),xt.return=W,W=xt;break t}}else if(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===dt&&Vs(Gt)===G.type){a(W,G.sibling),xt=c(G,$.props),Za(xt,$),xt.return=W,W=xt;break t}a(W,G);break}else n(W,G);G=G.sibling}$.type===k?(xt=Os($.props.children,W.mode,xt,$.key),Za(xt,$),xt.return=W,W=xt):(xt=uc($.type,$.key,$.props,null,W.mode,xt),Za(xt,$),xt.return=W,W=xt)}return _(W);case w:t:{for(Gt=$.key;G!==null;){if(G.key===Gt)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){a(W,G.sibling),xt=c(G,$.children||[]),xt.return=W,W=xt;break t}else{a(W,G);break}else n(W,G);G=G.sibling}xt=Lf($,W.mode,xt),xt.return=W,W=xt}return _(W);case dt:return $=Vs($),xe(W,G,$,xt)}if(Nt($))return Pt(W,G,$,xt);if(et($)){if(Gt=et($),typeof Gt!="function")throw Error(s(150));return $=Gt.call($),Wt(W,G,$,xt)}if(typeof $.then=="function")return xe(W,G,yc($),xt);if($.$$typeof===ft)return xe(W,G,xc(W,$),xt);Sc(W,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,G!==null&&G.tag===6?(a(W,G.sibling),xt=c(G,$),xt.return=W,W=xt):(a(W,G),xt=Uf($,W.mode,xt),xt.return=W,W=xt),_(W)):a(W,G)}return function(W,G,$,xt){try{ko=0;var Gt=xe(W,G,$,xt);return Er=null,Gt}catch(Jt){if(Jt===Mr||Jt===_c)throw Jt;var we=Kn(29,Jt,null,W.mode);return we.lanes=xt,we.return=W,we}}}var ks=U0(!0),L0=U0(!1),Ka=!1;function kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ja(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Be&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=cc(t),x0(t,null,a),n}return lc(t,r,n,a),cc(t)}function Xo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Kl(t,a)}}function jf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var qf=!1;function jo(){if(qf){var t=br;if(t!==null)throw t}}function qo(t,n,a,r){qf=!1;var c=t.updateQueue;Ka=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var I=E,Z=I.next;I.next=null,_===null?f=Z:_.next=Z,_=I;var st=t.alternate;st!==null&&(st=st.updateQueue,E=st.lastBaseUpdate,E!==_&&(E===null?st.firstBaseUpdate=Z:E.next=Z,st.lastBaseUpdate=I))}if(f!==null){var gt=c.baseState;_=0,st=Z=I=null,E=f;do{var X=E.lane&-536870913,it=X!==E.lane;if(it?(Re&X)===X:(r&X)===X){X!==0&&X===Bs&&(qf=!0),st!==null&&(st=st.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Pt=t,Wt=E;X=n;var xe=a;switch(Wt.tag){case 1:if(Pt=Wt.payload,typeof Pt=="function"){gt=Pt.call(xe,gt,X);break t}gt=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=Wt.payload,X=typeof Pt=="function"?Pt.call(xe,gt,X):Pt,X==null)break t;gt=P({},gt,X);break t;case 2:Ka=!0}}X=E.callback,X!==null&&(t.flags|=64,it&&(t.flags|=8192),it=c.callbacks,it===null?c.callbacks=[X]:it.push(X))}else it={lane:X,tag:E.tag,payload:E.payload,callback:E.callback,next:null},st===null?(Z=st=it,I=gt):st=st.next=it,_|=X;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;it=E,E=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);st===null&&(I=gt),c.baseState=I,c.firstBaseUpdate=Z,c.lastBaseUpdate=st,f===null&&(c.shared.lanes=0),ss|=_,t.lanes=_,t.memoizedState=gt}}function O0(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function P0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)O0(a[t],n)}var $a=ne(null),bc=ne(0);function z0(t,n){t=Ma,$t(bc,t),$t($a,n),Ma=t|n.baseLanes}function Yf(){$t(bc,Ma),$t($a,$a.current)}function Wf(){Ma=bc.current,Vt($a),Vt(bc)}var wn=ne(null),Pn=null;function ts(t){var n=t.alternate;$t(Dn,Dn.current&1),$t(wn,t),Pn===null&&(n===null||$a.current!==null||n.memoizedState!==null)&&(Pn=t)}function Zf(t){$t(Dn,Dn.current),$t(wn,t),Pn===null&&(Pn=t)}function I0(t){t.tag===22?($t(Dn,Dn.current),$t(wn,t),Pn===null&&(Pn=t)):es()}function es(){$t(Dn,Dn.current),$t(wn,wn.current)}function li(t){Vt(wn),Pn===t&&(Pn=null),Vt(Dn)}var Dn=ne(0);function Yo(t,n){$t(wn,wn.current),$t(Dn,n)}function Kf(t){Vt(Dn),Vt(wn),Pn===t&&(Pn=null)}function Mc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||_d(a)||vd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var va=0,me=null,je=null,dn=null,Ec=!1,Tr=!1,Xs=!1,Tc=0,Wo=0,Ar=null,rb=0;function an(){throw Error(s(321))}function Qf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!oi(t[a],n[a]))return!1;return!0}function Jf(t,n,a,r,c,f){return va=f,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,At.H=t===null||t.memoizedState===null?yx:Sx,Xs=!1,f=a(r,c),Xs=!1,Tr&&(f=B0(n,a,r,c)),F0(t),f}function F0(t){At.H=Uc;var n=je!==null&&je.next!==null;if(va=0,dn=je=me=null,Ec=!1,Wo=0,Ar=null,n)throw Error(s(300));t===null||pn||(t=t.dependencies,t!==null&&mc(t)&&(pn=!0))}function B0(t,n,a,r){me=t;var c=0;do{if(Tr&&(Ar=null),Wo=0,Tr=!1,25<=c)throw Error(s(301));if(c+=1,dn=je=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}At.H=pb,f=n(a,r)}while(Tr);return f}function ob(){var t=At.H,n=t.useState()[0];return n=typeof n.then=="function"?Zo(n):n,t=t.useState()[0],(je!==null?je.memoizedState:null)!==t&&(me.flags|=1024),n}function $f(){var t=Tc!==0;return Tc=0,t}function th(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function eh(t){if(Ec){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ec=!1}va=0,dn=je=me=null,Tr=!1,Wo=Tc=0,Ar=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?me.memoizedState=dn=t:dn=dn.next=t,dn}function cn(){if(je===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var n=dn===null?me.memoizedState:dn.next;if(n!==null)dn=n,je=t;else{if(t===null)throw me.alternate===null?Error(s(467)):Error(s(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},dn===null?me.memoizedState=dn=t:dn=dn.next=t}return dn}function Ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zo(t){var n=Wo;return Wo+=1,Ar===null&&(Ar=[]),t=w0(Ar,t,n),n=me,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,At.H=n===null||n.memoizedState===null?yx:Sx),t}function Cc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Zo(t);if(t.$$typeof===pt)return;if(t.$$typeof===ft)return Rn(t)}throw Error(s(438,String(t)))}function nh(t){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=me.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ac(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Ee;return n.index++,a}function ya(t,n){return typeof n=="function"?n(t):n}function Rc(t){var n=cn();return ih(n,je,t)}function ih(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=_=null,I=null,Z=n,st=!1;do{var gt=Z.lane&-536870913;if(gt!==Z.lane?(Re&gt)===gt:(va&gt)===gt){var X=Z.revertLane;if(X===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),gt===Bs&&(st=!0);else if((va&X)===X){Z=Z.next,X===Bs&&(st=!0);continue}else gt={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},I===null?(E=I=gt,_=f):I=I.next=gt,me.lanes|=X,ss|=X;gt=Z.action,Xs&&a(f,gt),f=Z.hasEagerState?Z.eagerState:a(f,gt)}else X={lane:gt,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},I===null?(E=I=X,_=f):I=I.next=X,me.lanes|=gt,ss|=gt;Z=Z.next}while(Z!==null&&Z!==n);if(I===null?_=f:I.next=E,!oi(f,t.memoizedState)&&(pn=!0,st&&(a=br,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=I,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function ah(t){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);oi(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function H0(t,n,a){var r=me,c=cn(),f=Me;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!oi((je||c).memoizedState,a);if(_&&(c.memoizedState=a,pn=!0),c=c.queue,oh(k0.bind(null,r,c,t),[t]),t=c.getSnapshot!==n||_||dn!==null&&(dn.memoizedState.tag&1)!==0,Cr(t?9:8,{destroy:void 0},G0.bind(null,r,c,a,n),null),t){if(r.flags|=2048,Qe===null)throw Error(s(349));f||(va&127)!==0||V0(r,n,a)}return a}function V0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=Ac(),me.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function G0(t,n,a,r){n.value=a,n.getSnapshot=r,X0(n)&&j0(t)}function k0(t,n,a){return a(function(){X0(n)&&j0(t)})}function X0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!oi(t,a)}catch{return!0}}function j0(t){var n=Ls(t,2);n!==null&&ti(n,t,2)}function sh(t){var n=Xn();if(typeof t=="function"){var a=t;if(t=a(),Xs){fn(!0);try{a()}finally{fn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},n}function q0(t,n,a,r){return t.baseState=a,ih(t,je,typeof r=="function"?r:ya)}function lb(t,n,a,r,c){if(Nc(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};At.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Y0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Y0(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=At.T,_={};_.types=f!==null?f.types:null,At.T=_;try{var E=a(c,r),I=At.S;I!==null&&I(_,E),W0(t,n,E)}catch(Z){rh(t,n,Z)}finally{f!==null&&_.types!==null&&(f.types=_.types),At.T=f}}else try{f=a(c,r),W0(t,n,f)}catch(Z){rh(t,n,Z)}}function W0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Z0(t,n,r)},function(r){return rh(t,n,r)}):Z0(t,n,a)}function Z0(t,n,a){n.status="fulfilled",n.value=a,K0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Y0(t,a)))}function rh(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,K0(n),n=n.next;while(n!==r)}t.action=null}function K0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Q0(t,n){return n}function J0(t,n){if(Me){var a=Qe.formState;if(a!==null){t:{var r=me;if(Me){if(Je){e:{for(var c=Je,f=Ai;c.nodeType!==8;){if(!f){c=null;break e}if(c=Ri(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Je=Ri(c.nextSibling),r=c.data==="F!";break t}}Ya(r)}r=!1}r&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Q0,lastRenderedState:n},a.queue=r,a=gx.bind(null,me,r),r.dispatch=a,r=sh(!1),f=hh.bind(null,me,!1,r.queue),r=Xn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=lb.bind(null,me,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function $0(t){var n=cn();return tx(n,je,t)}function tx(t,n,a){if(n=ih(t,n,Q0)[0],t=Rc(ya)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Zo(n)}catch(_){throw _===Mr?_c:_}else r=n;n=cn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(me.flags|=2048,Cr(9,{destroy:void 0},cb.bind(null,c,a),null)),[r,f,t]}function cb(t,n){t.action=n}function ex(t){var n=cn(),a=je;if(a!==null)return tx(n,a,t);cn(),n=n.memoizedState,a=cn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Cr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=me.updateQueue,n===null&&(n=Ac(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function nx(){return cn().memoizedState}function wc(t,n,a,r){var c=Xn();me.flags|=t,c.memoizedState=Cr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Dc(t,n,a,r){var c=cn();r=r===void 0?null:r;var f=c.memoizedState.inst;je!==null&&r!==null&&Qf(r,je.memoizedState.deps)?c.memoizedState=Cr(n,f,a,r):(me.flags|=t,c.memoizedState=Cr(1|n,f,a,r))}function ix(t,n){wc(8390656,8,t,n)}function oh(t,n){Dc(2048,8,t,n)}function ub(t){me.flags|=4;var n=me.updateQueue;if(n===null)n=Ac(),me.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function ax(t){var n=cn().memoizedState;return ub({ref:n,nextImpl:t}),function(){if((Be&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function sx(t,n){return Dc(4,2,t,n)}function rx(t,n){return Dc(4,4,t,n)}function ox(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function lx(t,n,a){a=a!=null?a.concat([t]):null,Dc(4,4,ox.bind(null,n,t),a)}function lh(){}function cx(t,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Qf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function ux(t,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Qf(n,r[1]))return r[0];if(r=t(),Xs){fn(!0);try{t()}finally{fn(!1)}}return a.memoizedState=[r,n],r}function ch(t,n,a){return a===void 0||(va&1073741824)!==0&&(Re&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=yg(),me.lanes|=t,ss|=t,a)}function fx(t,n,a,r){return oi(a,n)?a:$a.current!==null?(t=ch(t,a,r),oi(t,n)||(pn=!0),t):(va&106)===0||(va&1073741824)!==0&&(Re&261930)===0?(pn=!0,t.memoizedState=a):(t=yg(),me.lanes|=t,ss|=t,n)}function hx(t,n,a,r,c){var f=kt.p;kt.p=f!==0&&8>f?f:8;var _=At.T,E={};E.types=_!==null?_.types:null,At.T=E,hh(t,!1,n,a);try{var I=c(),Z=At.S;if(Z!==null&&Z(E,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var st=sb(I,r);Ko(t,n,st,hi(t))}else Ko(t,n,r,hi(t))}catch(gt){Ko(t,n,{then:function(){},status:"rejected",reason:gt},hi())}finally{kt.p=f,_!==null&&E.types!==null&&(_.types=E.types),At.T=_}}function fb(){}function uh(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=dx(t).queue;hx(t,c,n,ce,a===null?fb:function(){return px(t),a(r)})}function dx(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:ce},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function px(t){var n=dx(t);n.next===null&&(n=t.alternate.memoizedState),Ko(t,n.next.queue,{},hi())}function fh(){return Rn(qr)}function mx(){return cn().memoizedState}function xx(){return cn().memoizedState}function hb(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=hi();t=Qa(a);var r=Ja(n,t,a);r!==null&&(ti(r,n,a),Xo(r,n,a)),n={cache:Bf()},t.payload=n;return}n=n.return}}function db(t,n,a){var r=hi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nc(t)?_x(n,a):(a=Df(t,n,a,r),a!==null&&(ti(a,t,r),vx(a,n,r)))}function gx(t,n,a){var r=hi();Ko(t,n,a,r)}function Ko(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nc(t))_x(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,a);if(c.hasEagerState=!0,c.eagerState=E,oi(E,_))return lc(t,n,c,0),Qe===null&&oc(),!1}catch{}if(a=Df(t,n,c,r),a!==null)return ti(a,t,r),vx(a,n,r),!0}return!1}function hh(t,n,a,r){if(r={lane:2,revertLane:nd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Nc(t)){if(n)throw Error(s(479))}else n=Df(t,a,r,2),n!==null&&ti(n,t,2)}function Nc(t){var n=t.alternate;return t===me||n!==null&&n===me}function _x(t,n){Tr=Ec=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function vx(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Kl(t,a)}}var Uc={readContext:Rn,use:Cc,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},yx={readContext:Rn,use:Cc,useCallback:function(t,n){return Xn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:ix,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,wc(4194308,4,ox.bind(null,n,t),a)},useLayoutEffect:function(t,n){return wc(4194308,4,t,n)},useInsertionEffect:function(t,n){wc(4,2,t,n)},useMemo:function(t,n){var a=Xn();n=n===void 0?null:n;var r=t();if(Xs){fn(!0);try{t()}finally{fn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Xn();if(a!==void 0){var c=a(n);if(Xs){fn(!0);try{a(n)}finally{fn(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=db.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var n=Xn();return t={current:t},n.memoizedState=t},useState:function(t){t=sh(t);var n=t.queue,a=gx.bind(null,me,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:lh,useDeferredValue:function(t,n){var a=Xn();return ch(a,t,n)},useTransition:function(){var t=sh(!1);return t=hx.bind(null,me,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=me,c=Xn();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qe===null)throw Error(s(349));(Re&127)!==0||V0(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,ix(k0.bind(null,r,f,t),[t]),r.flags|=2048,Cr(9,{destroy:void 0},G0.bind(null,r,f,a,n),null),a},useId:function(){var t=Xn(),n=Qe.identifierPrefix;if(Me){var a=Wi,r=Yi;a=(r&~(1<<32-Gn(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=rb++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:fh,useFormState:J0,useActionState:J0,useOptimistic:function(t){var n=Xn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=hh.bind(null,me,!0,a),a.dispatch=n,[t,n]},useMemoCache:nh,useCacheRefresh:function(){return Xn().memoizedState=hb.bind(null,me)},useEffectEvent:function(t){var n=Xn(),a={impl:t};return n.memoizedState=a,function(){if((Be&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Sx={readContext:Rn,use:Cc,useCallback:cx,useContext:Rn,useEffect:oh,useImperativeHandle:lx,useInsertionEffect:sx,useLayoutEffect:rx,useMemo:ux,useReducer:Rc,useRef:nx,useState:function(){return Rc(ya)},useDebugValue:lh,useDeferredValue:function(t,n){var a=cn();return fx(a,je.memoizedState,t,n)},useTransition:function(){var t=Rc(ya)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Zo(t),n]},useSyncExternalStore:H0,useId:mx,useHostTransitionStatus:fh,useFormState:$0,useActionState:$0,useOptimistic:function(t,n){var a=cn();return q0(a,je,t,n)},useMemoCache:nh,useCacheRefresh:xx,useEffectEvent:ax},pb={readContext:Rn,use:Cc,useCallback:cx,useContext:Rn,useEffect:oh,useImperativeHandle:lx,useInsertionEffect:sx,useLayoutEffect:rx,useMemo:ux,useReducer:ah,useRef:nx,useState:function(){return ah(ya)},useDebugValue:lh,useDeferredValue:function(t,n){var a=cn();return je===null?ch(a,t,n):fx(a,je.memoizedState,t,n)},useTransition:function(){var t=ah(ya)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Zo(t),n]},useSyncExternalStore:H0,useId:mx,useHostTransitionStatus:fh,useFormState:ex,useActionState:ex,useOptimistic:function(t,n){var a=cn();return je!==null?q0(a,je,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:nh,useCacheRefresh:xx,useEffectEvent:ax};function dh(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ph={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=hi(),c=Qa(r);c.payload=n,a!=null&&(c.callback=a),n=Ja(t,c,r),n!==null&&(ti(n,t,r),Xo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=hi(),c=Qa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ja(t,c,r),n!==null&&(ti(n,t,r),Xo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=hi(),r=Qa(a);r.tag=2,n!=null&&(r.callback=n),n=Ja(t,r,a),n!==null&&(ti(n,t,a),Xo(n,t,a))}};function bx(t,n,a,r,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!zo(a,r)||!zo(c,f):!0}function Mx(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&ph.enqueueReplaceState(n,n.state,null)}function js(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Ex(t){rc(t)}function Tx(t){console.error(t)}function Ax(t){rc(t)}function Lc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Cx(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function mh(t,n,a){return a=Qa(a),a.tag=3,a.payload={element:null},a.callback=function(){Lc(t,n)},a}function Rx(t){return t=Qa(t),t.tag=3,t}function wx(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Cx(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Cx(n,a,r),typeof c!="function"&&(rs===null?rs=new Set([this]):rs.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function mb(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Is(n,a,c,!0),a=wn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Pn===null?tu():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===vc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),$h(t,r,c)),!1;case 22:return a.flags|=65536,r===vc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),$h(t,r,c)),!1}throw Error(s(435,a.tag))}return $h(t,r,c),tu(),!1}if(Me)return n=wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Pf&&(t=Error(s(422),{cause:r}),Bo(Mi(t,a)))):(r!==Pf&&(n=Error(s(423),{cause:r}),Bo(Mi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=Mi(r,a),c=mh(t.stateNode,r,c),jf(t,c),sn!==4&&(sn=2)),!1;var f=Error(s(520),{cause:r});if(f=Mi(f,a),al===null?al=[f]:al.push(f),sn!==4&&(sn=2),n===null)return!0;r=Mi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=mh(a.stateNode,r,t),jf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(rs===null||!rs.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Rx(c),wx(c,t,a,r),jf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var xh=Error(s(461)),pn=!1;function gn(t,n,a,r){n.child=t===null?L0(n,null,a,r):ks(n,t.child,a,r)}function Dx(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var E in r)E!=="ref"&&(_[E]=r[E])}else _=r;return Fs(n),r=Jf(t,n,a,_,f,c),E=$f(),t!==null&&!pn?(th(t,n,c),Sa(t,n,c)):(Me&&E&&hc(n),n.flags|=1,gn(t,n,r,c),n.child)}function Nx(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!Nf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ux(t,n,f,r,c)):(t=uc(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Eh(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:zo,a(_,r)&&t.ref===n.ref)return Sa(t,n,c)}return n.flags|=1,t=ma(f,r),t.ref=n.ref,t.return=n,n.child=t}function Ux(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(zo(f,r)&&t.ref===n.ref)if(pn=!1,n.pendingProps=r=f,Eh(t,c))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,Sa(t,n,c)}return gh(t,n,a,r,c)}function Lx(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Ox(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&gc(n,f!==null?f.cachePool:null),f!==null?z0(n,f):Yf(),I0(n);else return r=n.lanes=536870912,Ox(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(gc(n,f.cachePool),z0(n,f),es(),n.memoizedState=null):(t!==null&&gc(n,null),Yf(),es());return gn(t,n,c,a),n.child}function Qo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ox(t,n,a,r,c){var f=Vf();return f=f===null?null:{parent:hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&gc(n,null),Yf(),I0(n),t!==null&&Is(t,n,r,!0),n.childLanes=c,null}function Oc(t,n){return n=Pc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Px(t,n,a){return ks(n,t.child,null,a),t=Oc(n,n.pendingProps),t.flags|=2,li(n),n.memoizedState=null,t}function xb(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(r.mode==="hidden")return t=Oc(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Qo(null,t);if(Zf(n),(t=Je)?(t=o_(t,Ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ja!==null?{id:Yi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=_0(t),a.return=n,n.child=a,Mn=n,Je=null)):t=null,t===null)throw Ya(n);return n.lanes=536870912,null}return Oc(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Zf(n),c)if(n.flags&256)n.flags&=-257,n=Px(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||Is(t,n,a,!1),c=(a&t.childLanes)!==0,pn||c){if($a.current===null){if(r=Qe,r!==null&&(_=R(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ls(t,_),ti(r,t,_),xh;tu()}n=Px(t,n,a)}else t=f.treeContext,Je=Ri(_.nextSibling),Mn=n,Me=!0,qa=null,Ai=!1,t!==null&&S0(n,t),n=Oc(n,r),n.flags|=134221824;return n}return t=ma(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Rr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function gh(t,n,a,r,c){return Fs(n),a=Jf(t,n,a,r,void 0,c),r=$f(),t!==null&&!pn?(th(t,n,c),Sa(t,n,c)):(Me&&r&&hc(n),n.flags|=1,gn(t,n,a,c),n.child)}function zx(t,n,a,r,c,f){return Fs(n),n.updateQueue=null,a=B0(n,r,a,c),F0(t),r=$f(),t!==null&&!pn?(th(t,n,f),Sa(t,n,f)):(Me&&r&&hc(n),n.flags|=1,gn(t,n,a,f),n.child)}function Ix(t,n,a,r,c){if(Fs(n),n.stateNode===null){var f=_r,_=a.contextType;typeof _=="object"&&_!==null&&(f=Rn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ph,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},kf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Rn(_):_r,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(dh(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&ph.enqueueReplaceState(f,f.state,null),qo(n,r,f,c),jo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,I=js(a,E);f.props=I;var Z=f.context,st=a.contextType;_=_r,typeof st=="object"&&st!==null&&(_=Rn(st));var gt=a.getDerivedStateFromProps;st=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,st||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||Z!==_)&&Mx(n,f,r,_),Ka=!1;var X=n.memoizedState;f.state=X,qo(n,r,f,c),jo(),Z=n.memoizedState,E||X!==Z||Ka?(typeof gt=="function"&&(dh(n,a,gt,r),Z=n.memoizedState),(I=Ka||bx(n,a,I,r,X,Z,_))?(st||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Z),f.props=r,f.state=Z,f.context=_,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Xf(t,n),_=n.memoizedProps,st=js(a,_),f.props=st,gt=n.pendingProps,X=f.context,Z=a.contextType,I=_r,typeof Z=="object"&&Z!==null&&(I=Rn(Z)),E=a.getDerivedStateFromProps,(Z=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==gt||X!==I)&&Mx(n,f,r,I),Ka=!1,X=n.memoizedState,f.state=X,qo(n,r,f,c),jo();var it=n.memoizedState;_!==gt||X!==it||Ka||t!==null&&t.dependencies!==null&&mc(t.dependencies)?(typeof E=="function"&&(dh(n,a,E,r),it=n.memoizedState),(st=Ka||bx(n,a,st,r,X,it,I)||t!==null&&t.dependencies!==null&&mc(t.dependencies))?(Z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,it,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,it,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=it),f.props=r,f.state=it,f.context=I,r=st):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Rr(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ks(n,t.child,null,c),n.child=ks(n,null,a,c)):gn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Sa(t,n,c),t}function Fx(t,n,a,r){return Ps(),n.flags|=256,gn(t,n,a,r),n.child}var _h={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vh(t){return{baseLanes:t,cachePool:C0()}}function yh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=fi),t}function Bx(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(Dn.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(c?ts(n):es(),(t=Je)?(t=o_(t,Ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ja!==null?{id:Yi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=_0(t),a.return=n,n.child=a,Mn=n,Je=null)):t=null,t===null)throw Ya(n);return vd(t)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,c?(es(),c=n.mode,f=Pc({mode:"hidden",children:f},c),r=Os(r,c,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=vh(a),r.childLanes=yh(t,_,a),n.memoizedState=_h,Qo(null,r)):(ts(n),Sh(n,f))}var E=t.memoizedState;if(E!==null){var I=E.dehydrated;if(I!==null)return gb(t,n,f,_,r,I,E,a)}return c?(es(),c=r.fallback,f=n.mode,E=t.child,I=E.sibling,r=ma(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,I!==null?c=ma(I,c):(c=Os(c,f,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,Qo(null,r),r=n.child,c=t.child.memoizedState,c===null?c=vh(a):(f=c.cachePool,f!==null?(E=hn._currentValue,f=f.parent!==E?{parent:E,pool:E}:f):f=C0(),c={baseLanes:c.baseLanes|a,cachePool:f}),r.memoizedState=c,r.childLanes=yh(t,_,a),n.memoizedState=_h,Qo(t.child,r)):(ts(n),a=t.child,t=a.sibling,a=ma(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Sh(t,n){return n=Pc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Pc(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function zc(t,n,a){return ks(n,t.child,null,a),t=Sh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function gb(t,n,a,r,c,f,_,E){if(a)return n.flags&256?(ts(n),n.flags&=-257,zc(t,n,E)):n.memoizedState!==null?(es(),n.child=t.child,n.flags|=128,null):(es(),f=c.fallback,_=n.mode,c=Pc({mode:"visible",children:c.children},_),f=Os(f,_,E,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,ks(n,t.child,null,E),c=n.child,c.memoizedState=vh(E),c.childLanes=yh(t,r,E),n.memoizedState=_h,Qo(null,c));if(ts(n),vd(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var I=r.dgst;return r=I,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,Bo({value:c,source:null,stack:null})),zc(t,n,E)}if(pn||Is(t,n,E,!1),r=(E&t.childLanes)!==0,pn||r){if($a.current!==null)return zc(t,n,E);if(r=Qe,r!==null&&(c=R(r,E),c!==0&&c!==_.retryLane))throw _.retryLane=c,Ls(t,c),ti(r,t,c),xh;return _d(f)||tu(),zc(t,n,E)}return _d(f)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,Je=Ri(f.nextSibling),Mn=n,Me=!0,qa=null,Ai=!1,t!==null&&S0(n,t),n=Sh(n,c.children),n.flags|=134221824,n)}function Hx(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),pc(t.return,n,a)}function Vx(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&Mc(a)===null&&(n=t),t=t.sibling}return n}function Ic(t,n,a,r,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function bh(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function Mh(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=Dn.current;if(n.flags&128)return Yo(n,_),null;var E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,Yo(n,_),c==="backwards"&&t!==null?(bh(t),gn(t,n,r,a),bh(t)):gn(t,n,r,a),r=Me?Fo:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hx(t,a,n);else if(t.tag===19)Hx(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=Vx(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,bh(n)),Ic(n,!0,c,null,f,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Mc(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Ic(n,!0,a,null,f,r);break;case"together":Ic(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Vx(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ic(n,!1,c,a,f,r)}return n.child}function Gx(t,n,a){var r=n.pendingProps;return Wa(n,n.type,r.value),gn(t,n,r.children,a),n.child}function Sa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ss|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Is(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ma(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ma(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Eh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&mc(t)))}function _b(t,n,a){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),Wa(n,hn,t.memoizedState.cache),Ps();break;case 27:case 5:nt(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Zf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return ts(n),n.flags|=128,null;r=Is(t,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?Bx(t,n,a):(ts(n),t=Sa(t,n,a),t!==null?t.sibling:null)}ts(n);break;case 19:if(n.flags&128)return Mh(t,n,a);if(c=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Is(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Mh(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Yo(n,Dn.current),r)break;return null;case 22:return n.lanes=0,Lx(t,n,a,n.pendingProps);case 24:Wa(n,hn,t.memoizedState.cache)}return Sa(t,n,a)}function kx(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!Eh(t,a)&&(n.flags&128)===0)return pn=!1,_b(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,Me&&(n.flags&1048576)!==0&&y0(n,Fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Vs(n.elementType),n.type=t,typeof t=="function")Nf(t)?(r=js(t,r),n.tag=1,n=Ix(null,n,t,r,a)):(n.tag=0,n=gh(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===j){n.tag=11,n=Dx(null,n,t,r,a);break t}else if(c===vt){n.tag=14,n=Nx(null,n,t,r,a);break t}else if(c===ft){n.tag=10,n.type=t,n=Gx(null,n,a);break t}}throw n=Lt(t)||t,Error(s(306,n,""))}}return n;case 0:return gh(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=js(r,n.pendingProps),Ix(t,n,r,c,a);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Xf(t,n),qo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Wa(n,hn,r),r!==f.cache&&Ff(n,[hn],a,!0),jo(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Fx(t,n,r,a);break t}else if(r!==c){c=Mi(Error(s(424)),n),Bo(c),n=Fx(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Je=Ri(t.firstChild),Mn=n,Me=!0,qa=null,Ai=!0,a=L0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Ps(),r===c){n=Sa(t,n,a);break t}gn(t,n,r,a)}n=n.child}return n;case 26:return Rr(t,n),t===null?(a=p_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(n.stateNode=Yg(n.type,n.pendingProps,Yt.current,n)):n.memoizedState=p_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&Me&&(r=n.stateNode=u_(n.type,n.pendingProps,Yt.current),Mn=n,Ai=!0,c=Je,cs(n.type)?(yd=c,Je=Ri(r.firstChild)):Je=c),gn(t,n,n.pendingProps.children,a),Rr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((c=r=Je)&&(r=hM(r,n.type,n.pendingProps,Ai),r!==null?(n.stateNode=r,Mn=n,Je=Ri(r.firstChild),Ai=!1,c=!0):c=!1),c||Ya(n)),nt(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,fd(c,f)?r=null:_!==null&&fd(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Jf(t,n,ob,null,null,a),qr._currentValue=c),Rr(t,n),gn(t,n,r,a),n.child;case 6:return t===null&&Me&&((t=a=Je)&&(a=dM(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,Mn=n,Je=null,t=!0):t=!1),t||Ya(n)),null;case 13:return Bx(t,n,a);case 4:return U(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ks(n,null,r,a):gn(t,n,r,a),n.child;case 11:return Dx(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Rr(t,n),gn(t,n,r,a),n.child;case 8:return gn(t,n,n.pendingProps.children,a),n.child;case 12:return gn(t,n,n.pendingProps.children,a),n.child;case 10:return Gx(t,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Fs(n),c=Rn(c),r=r(c),n.flags|=1,gn(t,n,r,a),n.child;case 14:return Nx(t,n,n.type,n.pendingProps,a);case 15:return Ux(t,n,n.type,n.pendingProps,a);case 19:return Mh(t,n,a);case 31:return xb(t,n,a);case 22:return Lx(t,n,a,n.pendingProps);case 24:return Fs(n),r=Rn(hn),t===null?(c=Vf(),c===null&&(c=Qe,f=Bf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},kf(n),Wa(n,hn,c)):((t.lanes&a)!==0&&(Xf(t,n),qo(n,null,null,a),jo()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Wa(n,hn,r)):(r=f.cache,Wa(n,hn,r),r!==c.cache&&Ff(n,[hn],a,!0))),gn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:Me&&hc(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Rr(t,n),gn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ba(t){t.flags|=4}function Th(t,n,a,r,c){var f;if((f=(t.mode&32)!==0)&&(f=a===null?__(n,r):__(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Eg())t.flags|=8192;else throw Gs=vc,Gf}else t.flags&=-16777217}function Xx(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!v_(n))if(Eg())t.flags|=8192;else throw Gs=vc,Gf}function Fc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Wl():536870912,t.lanes|=n,Lr|=n)}function Jo(t,n){if(!Me)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function $e(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function vb(t,n,a){var r=n.pendingProps;switch(Of(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),_a(hn),T(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Sr(n)?ba(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zf())),$e(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ba(n),f!==null?($e(n),Xx(n,f)):($e(n),Th(n,c,null,r,a))):f?f!==t.memoizedState?(ba(n),$e(n),Xx(n,f)):($e(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ba(n),$e(n),Th(n,c,t,r,a)),null;case 27:if(yt(n),a=Yt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ba(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}t=It.current,Sr(n)?b0(n):(t=u_(c,r,a),n.stateNode=t,ba(n))}return $e(n),n.subtreeFlags&=-33554433,null;case 5:if(yt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ba(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}if(f=It.current,Sr(n))b0(n);else{var _=cl(Yt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[Ut]=n,f[zt]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Un(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ba(n)}}return $e(n),n.subtreeFlags&=-33554433,Th(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ba(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Yt.current,Sr(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=Mn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Ut]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||kg(t.nodeValue,a)),t||Ya(n,!0)}else t=cl(t).createTextNode(r),t[Ut]=n,n.stateNode=t}return $e(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Sr(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ut]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),t=!1}else a=zf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Sr(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Ut]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),c=!1}else c=zf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Fc(n,n.updateQueue),$e(n),null);case 4:return T(),t===null&&rd(n.stateNode.containerInfo),n.flags|=67108864,$e(n),null;case 10:return _a(n.type),$e(n),null;case 19:if(Kf(n),r=n.memoizedState,r===null)return $e(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)Jo(r,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Mc(t),f!==null){for(n.flags|=128,Jo(r,!1),t=f.updateQueue,n.updateQueue=t,Fc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)g0(a,t),a=a.sibling;return Yo(n,Dn.current&1|2),Me&&xa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&z()>Kc&&(n.flags|=128,c=!0,Jo(r,!1),n.lanes=4194304)}else{if(!c)if(t=Mc(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Fc(n,t),Jo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!Me)return $e(n),null}else 2*z()-r.renderingStartTime>Kc&&a!==536870912&&(n.flags|=128,c=!0,Jo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=z(),t.sibling=null,f=Dn.current,f=c?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Me?Yo(n,f):(a=f,$t(wn,n),$t(Dn,a),Pn===null&&(Pn=n)),Me&&xa(n,r.treeForkCount),t}return $e(n),null;case 22:case 23:return li(n),Wf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&Fc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Vt(Hs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),_a(hn),$e(n),null;case 25:return null;case 30:return n.flags|=33554432,$e(n),null}throw Error(s(156,n.tag))}function yb(t,n){switch(Of(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return _a(hn),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return yt(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(s(340));Ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Kf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return _a(n.type),null;case 22:case 23:return li(n),Wf(),t!==null&&Vt(Hs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return _a(hn),null;case 25:return null;default:return null}}function jx(t,n){switch(Of(n),n.tag){case 3:_a(hn),T();break;case 26:case 27:case 5:yt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:Kf(n);break;case 10:_a(n.type);break;case 22:case 23:li(n),Wf(),t!==null&&Vt(Hs);break;case 24:_a(hn)}}function $o(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(E){ke(n,n.return,E)}}function ns(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var _=r.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,c=n;var I=a,Z=E;try{Z()}catch(st){ke(c,I,st)}}}r=r.next}while(r!==f)}}catch(st){ke(n,n.return,st)}}function qx(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{P0(n,a)}catch(r){ke(t,t.return,r)}}}function Yx(t,n,a){a.props=js(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ke(t,n,r)}}function Zi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var c=t.stateNode,f=da(t.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=t_(f)),r=c.ref;break;case 7:if(t.stateNode===null){var _=new di(t);x(t.child,!1,uM,_,void 0,void 0),t.stateNode=_}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(E){ke(t,n,E)}}function Nn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){ke(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ke(t,n,c)}else a.current=null}function Bc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)r_(t.stateNode,n[a])}function Wx(t){for(var n=t.return;n!==null&&(Ch(n)&&r_(t.stateNode,n.stateNode),!Ah(n));)n=n.return}function tl(t){for(var n=t.return;n!==null&&(Ch(n)&&fM(t.stateNode,n.stateNode),!Ah(n));)n=n.return}function Ah(t){return t.tag===5||t.tag===3||t.tag===27}function Ch(t){return t&&t.tag===7&&t.stateNode!==null}function Rh(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){ke(t,t.return,c)}}function wh(t,n,a){try{var r=t.stateNode;qb(r,t.type,a,n),r[zt]=n}catch(c){ke(t,t.return,c)}}function Zx(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&cs(t.type)||t.tag===4}function Dh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Zx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&cs(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nh(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi)),Bc(t,r),_e=!0;else if(c!==4&&(c===27&&(Bc(t,r),r=null,cs(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Nh(t,n,a,r),t=t.sibling;t!==null;)Nh(t,n,a,r),t=t.sibling}function Hc(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Bc(t,r),_e=!0;else if(c!==4&&(c===27&&(Bc(t,r),r=null,cs(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Hc(t,n,a,r),t=t.sibling;t!==null;)Hc(t,n,a,r),t=t.sibling}function Kx(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Un(n,r,a),n[Ut]=t,n[zt]=a}catch(f){ke(t,t.return,f)}}var Vc=!1,ci=null;function Qx(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Vc=!0)}var Ki=null;function Jx(){var t=Ki;return Ki=null,t}var Qn=0;function wr(t,n,a,r,c){return Qn=0,$x(t.child,n,a,r,c)}function $x(t,n,a,r,c){for(var f=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(r!==null){var E=pd(_);r.push(E),E.view&&(f=!0)}else f||pd(_).view&&(f=!0);Vc=!0,Jg(_,Qn===0?n:n+"_"+Qn,a),Qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||$x(t.child,n,a,r,c)&&(f=!0));t=t.sibling}return f}function Qi(t,n){for(;t!==null;)t.tag===5?$g(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Qi(t.child,n)),t=t.sibling}function Gc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Gc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=pa(n.default,n.share),n!=="none"&&(wr(t,a,n,null,!1)||Qi(t.child,!1))}t=t.sibling}}function Uh(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,c=da(r,a),f=pa(r.default,a.paired?r.share:r.enter);f!=="none"?wr(t,c,f,null,!1)?(Gc(t),a.paired||n||Ir(t,r.onEnter)):Qi(t.child,!1):Gc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Uh(t,n),t=t.sibling;else Gc(t)}function Lh(t){if(ci!==null&&ci.size!==0){var n=ci;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var f=pa(a.default,a.share);if(f!=="none"&&(wr(t,r,f,null,!1)?(f=t.stateNode,c.paired=f,f.paired=c,Ir(t,a.onShare)):Qi(t.child,!1)),n.delete(r),n.size===0)break}}}Lh(t)}t=t.sibling}}}function Oh(t){if(t.tag===30){var n=t.memoizedProps,a=da(n,t.stateNode),r=ci!==null?ci.get(a):void 0,c=pa(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(wr(t,a,c,null,!1)?r!==void 0?(c=t.stateNode,r.paired=c,c.paired=r,ci.delete(a),Ir(t,n.onShare)):Ir(t,n.onExit):Qi(t.child,!1)),ci!==null&&Lh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Oh(t),t=t.sibling;else ci!==null&&Lh(t)}function tg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=da(n,t.stateNode);n=pa(n.default,n.update),t.flags&=-5,n!=="none"&&wr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&tg(t);t=t.sibling}}function Ph(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Qi(t.child,!1))}Ph(t)}t=t.sibling}}function kc(t){if(t.tag===30)t.stateNode.paired=null,Qi(t.child,!1),Ph(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)kc(t),t=t.sibling;else Ph(t)}function eg(t){for(t=t.child;t!==null;)t.tag===30?Qi(t.child,!1):(t.subtreeFlags&33554432)!==0&&eg(t),t=t.sibling}function zh(t,n,a,r,c,f,_){for(var E=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(f!==null&&Qn<f.length){var Z=f[Qn],st=pd(I);(Z.view||st.view)&&(E=!0);var gt;if(gt=(t.flags&4)===0)if(st.clip)gt=!0;else{gt=Z.rect;var X=st.rect;gt=gt.y!==X.y||gt.x!==X.x||gt.height!==X.height||gt.width!==X.width}gt&&(t.flags|=4),st.abs?st=!Z.abs:(Z=Z.rect,st=st.rect,st=Z.height!==st.height||Z.width!==st.width),st&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Jg(I,Qn===0?a:a+"_"+Qn,c),E&&(t.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(I,Qn===0?r:r+"_"+Qn,n.memoizedProps)),Qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:zh(t,n.child,a,r,c,f,_)&&(E=!0));n=n.sibling}return E}function ng(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,c=da(a,r),f=pa(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;Qn=0,c=zh(r,E,c,c,f,_,!1),(t.flags&4)!==0&&c&&Ir(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&ng(t);t=t.sibling}}var En=!1,He=!1,Ji=!1,Ih=!1,ig=typeof WeakSet=="function"?WeakSet:Set,Tn=null,$i=!1,el=!1,Xc=!1,Fh=!1;function Sb(t,n,a){if(t=t.containerInfo,cd=Yr,t=o0(t),Ef(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var f=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break t}var E=0,I=-1,Z=-1,st=0,gt=0,X=t,it=null;e:for(;;){for(var Pt;X!==r||f!==0&&X.nodeType!==3||(I=E+f),X!==_||c!==0&&X.nodeType!==3||(Z=E+c),X.nodeType===3&&(E+=X.nodeValue.length),(Pt=X.firstChild)!==null;)it=X,X=Pt;for(;;){if(X===t)break e;if(it===r&&++st===f&&(I=E),it===_&&++gt===c&&(Z=E),(Pt=X.nextSibling)!==null)break;X=it,it=X.parentNode}X=Pt}r=I===-1||Z===-1?null:{start:I,end:Z}}else r=null}r=r||{start:0,end:0}}else r=null;for(ud={focusedElem:t,selectionRange:r},Yr=!1,a=(a&335544064)===a,Tn=n,n=a?9270:1024;Tn!==null;){if(t=Tn,a&&(r=t.deletions,r!==null))for(f=0;f<r.length;f++)a&&Oh(r[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&Qx(t),jc(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Oh(r),jc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Qx(t),jc(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Tn=r):(a&&tg(t),jc(a))}}ci=null}function jc(t){for(;Tn!==null;){var n=Tn,a=t,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var _=js(n.type,c);a=f.getSnapshotBeforeUpdate(_,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(E){ke(n,n.return,E)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)gd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":gd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=da(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=pa(c.default,c.update),c!=="none"&&wr(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Tn=r;break}Tn=n.return}}function ag(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ta(t,a),r&4&&$o(5,a);break;case 1:if(ta(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){ke(a,a.return,_)}else{var c=js(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){ke(a,a.return,_)}}r&64&&qx(a),r&512&&Zi(a,a.return);break;case 3:if(ta(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{P0(t,n)}catch(_){ke(a,a.return,_)}}break;case 27:n===null&&r&4&&Kx(a);case 26:case 5:ta(t,a),n===null&&r&4&&Rh(a),r&512&&Zi(a,a.return);break;case 12:ta(t,a);break;case 31:ta(t,a),r&4&&lg(t,a);break;case 13:ta(t,a),r&4&&cg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Lb.bind(null,a),pM(t,a))));break;case 22:if(r=a.memoizedState!==null||En,!r){var f=n!==null&&n.memoizedState!==null||He;n=En,c=He,En=r,(He=f)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Fi(t,a,r)):ta(t,a),En=n,He=c}break;case 30:ta(t,a),r&512&&Zi(a,a.return);break;case 7:r&512&&Zi(a,a.return);default:ta(t,a)}}function Bh(t,n){for(t=t.child;t!==null;)sg(t,n),t=t.sibling}function sg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=t.stateNode,f=t.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(I){ke(t,t.return,I)}Hh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,_e=!0}catch(I){ke(t,t.return,I)}break;case 18:try{var E=t.stateNode;n?Qg(E,!0):Qg(t.stateNode,!1)}catch(I){ke(t,t.return,I)}break;case 22:case 23:t.memoizedState===null&&Bh(t,n);break;default:Bh(t,n)}}function Hh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:sg(a,r);break t;case 22:a.memoizedState===null&&Hh(a,r);break t;default:Hh(a,r)}}t=t.sibling}}function rg(t){var n=t.alternate;n!==null&&(t.alternate=null,rg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ke(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Jn=!1;function zi(t,n,a){for(a=a.child;a!==null;)og(t,n,a),a=a.sibling}function og(t,n,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Ue,a)}catch{}switch(a.tag){case 26:He||Nn(a,n),zi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!He&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||Nn(a,n),tl(a);var r=en,c=Jn;cs(a.type)&&(en=a.stateNode,Jn=!1),zi(t,n,a),f_(a.stateNode,a.type,a.memoizedProps),en=r,Jn=c;break;case 5:He||Nn(a,n),tl(a);case 6:if(a.tag===6&&tl(a),r=en,c=Jn,en=null,zi(t,n,a),en=r,Jn=c,en!==null)if(Jn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode),_e=!0}catch(f){ke(a,n,f)}else try{en.removeChild(a.stateNode),_e=!0}catch(f){ke(a,n,f)}break;case 18:en!==null&&(Jn?(t=en,Kg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Wr(t)):Kg(en,a.stateNode));break;case 4:r=en,c=Jn,en=a.stateNode.containerInfo,Jn=!0,zi(t,n,a),en=r,Jn=c;break;case 0:case 11:case 14:case 15:ns(2,a,n),He||ns(4,a,n),zi(t,n,a);break;case 1:He||(Nn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Yx(a,n,r)),zi(t,n,a);break;case 21:zi(t,n,a);break;case 22:He=(r=He)||a.memoizedState!==null,zi(t,n,a),He=r;break;case 30:Nn(a,n),zi(t,n,a);break;case 7:He||Nn(a,n),zi(t,n,a);break;default:zi(t,n,a)}}function lg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Wr(t)}catch(a){ke(n,n.return,a)}}}function cg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Wr(t)}catch(a){ke(n,n.return,a)}}function bb(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ig),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ig),n;default:throw Error(s(435,t.tag))}}function qc(t,n){var a=bb(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Ob.bind(null,t,r);r.then(c,c)}})}function jn(t,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var f=r[c],_=t,E=n,I=E;t:for(;I!==null;){switch(I.tag){case 27:if(cs(I.type)){en=I.stateNode,Jn=!1;break t}break;case 5:en=I.stateNode,Jn=!1;break t;case 3:case 4:en=I.stateNode.containerInfo,Jn=!0;break t}I=I.return}if(en===null)throw Error(s(160));og(_,E,f),en=null,Jn=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ug(n,t,a),n=n.sibling}var Ii=null;function ug(t,n,a){var r=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var _=r[f];_.ref.impl=_.nextImpl}jn(n,t,a),qn(t),c&4&&(ns(3,t,t.return),$o(3,t),ns(5,t,t.return));break;case 1:jn(n,t,a),qn(t),c&512&&(He||r===null||Nn(r,r.return)),c&64&&En&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ii,jn(n,t,a),qn(t),c&512&&(He||r===null||Nn(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(En)t.stateNode=Yg(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[Le]||r[Ut]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),Un(r,n,a),r[Ut]=t,Pe(r),n=r;break t;case"link":if(f=g_("link","href",c).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break e}}r=c.createElement(n),Un(r,n,a),c.head.appendChild(r);break;case"meta":if(f=g_("meta","content",c).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break e}}r=c.createElement(n),Un(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[Ut]=t,Pe(r),n=r}t.stateNode=n}else En||Ed(f,t.type,t.stateNode);else t.stateNode=x_(f,a,t.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||He||n.parentNode.removeChild(n)):c.count--,a===null?En||Ed(f,t.type,t.stateNode):x_(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&wh(t,t.memoizedProps,r.memoizedProps);break;case 27:jn(n,t,a),qn(t),c&512&&(He||r===null||Nn(r,r.return)),r!==null&&c&4&&wh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(f=Ji,Ji=!1,jn(n,t,a),Ji=f,qn(t),c&512&&(He||r===null||Nn(r,r.return)),t.flags&32){n=t.stateNode;try{fr(n,""),_e=!0}catch(st){ke(t,t.return,st)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,wh(t,n,r!==null?r.memoizedProps:n)),c&1024&&(Ih=!0);break;case 6:if(jn(n,t,a),qn(t),c&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,_e=!0}catch(st){ke(t,t.return,st)}}break;case 3:if(_e=!1,ou=null,f=Ii,Ii=ul(n.containerInfo),jn(n,t,a),Ii=f,qn(t),c&4&&r!==null&&r.memoizedState.isDehydrated)try{Wr(n.containerInfo)}catch(st){ke(t,t.return,st)}Ih&&(Ih=!1,fg(t)),_e=!1;break;case 4:c=Ji,Ji=En,r=Nm(),f=Ii,Ii=ul(t.stateNode.containerInfo),jn(n,t,a),qn(t),Ii=f,_e&&el&&(Xc=!0),_e=r,Ji=c;break;case 12:jn(n,t,a),qn(t);break;case 31:jn(n,t,a),qn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,qc(t,n)));break;case 13:jn(n,t,a),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Zc=z()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,qc(t,n)));break;case 22:f=t.memoizedState!==null,_=r!==null&&r.memoizedState!==null;var E=En,I=He,Z=Ji;En=E||f,Ji=Z||f,He=I||_,jn(n,t,a),He=I,Ji=Z,En=E,qn(t),c&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||_||En||He||(n=_||He,a=En,r=He,En=f||En,He=n,is(t,2),En=a,He=r),!f&&Ji||Bh(t,f)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,qc(t,a))));break;case 19:jn(n,t,a),qn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,qc(t,n)));break;case 30:c&512&&(He||r===null||Nn(r,r.return)),c=Nm(),f=el,_=(a&335544064)===a,E=t.memoizedProps,el=_&&pa(E.default,E.update)!=="none",jn(n,t,a),qn(t),_&&r!==null&&_e&&(t.flags|=4),el=f,_e=c;break;case 21:break;case 7:c&512&&(He||r===null||Nn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:jn(n,t,a),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Zx(r)){a=r;break}r=r.return}r=null;for(var c=t.return;c!==null;){if(Ch(c)){var f=c.stateNode;r===null?r=[f]:r.push(f)}if(Ah(c))break;c=c.return}var _=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var E=a.stateNode,I=Dh(t);Hc(t,I,E,_);break;case 5:var Z=a.stateNode;a.flags&32&&(fr(Z,""),a.flags&=-33);var st=Dh(t);Hc(t,st,Z,_);break;case 3:case 4:var gt=a.stateNode.containerInfo,X=Dh(t);Nh(t,X,gt,_);break;default:throw Error(s(161))}}catch(it){ke(t,t.return,it)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function fg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;fg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Yr=!0,n.reset(),Yr=!1),t=t.sibling}}function Dr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)hg(n,t),n=n.sibling;else ng(n)}function hg(t,n){var a=t.alternate;if(a===null)Uh(t,!1);else switch(t.tag){case 3:if(Fh=$i=!1,Jx(),Dr(n,t),!$i&&!Xc){if(t=Ki,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var c=t[r+1];$g(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Fh=!0}Ki=null;break;case 5:Dr(n,t);break;case 4:r=$i,$i=!1,Dr(n,t),$i&&(Xc=!0),$i=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Uh(t,!1):Dr(n,t));break;case 30:r=$i,c=Jx(),$i=!1,Dr(n,t),$i&&(t.flags|=4);var f=t.memoizedProps,_=t.stateNode;n=da(f,_),_=da(a.memoizedProps,_);var E=pa(f.default,f.update);E==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,Qn=0,n=zh(t,a,n,_,E,f,!0),Qn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Ir(t,t.memoizedProps.onUpdate),Ki=c):c!==null&&(c.push.apply(c,Ki),Ki=c),$i=(t.flags&32)!==0?!0:r;break;default:Dr(n,t)}}function ta(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ag(t,n.alternate,n),n=n.sibling}function is(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:ns(4,a,a.return),is(a,r);break;case 1:Nn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&Yx(a,a.return,c),is(a,r);break;case 27:(r&2)!==0&&f_(a.stateNode,a.type,a.memoizedProps);case 5:Nn(a,a.return),a.tag!==5&&a.tag!==27||tl(a),is(a,r);break;case 6:tl(a);break;case 26:Nn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||He||c.parentNode.removeChild(c),is(a,r);break;case 22:a.memoizedState===null&&is(a,r);break;case 30:Nn(a,a.return),is(a,r);break;case 7:Nn(a,a.return);default:is(a,r)}t=t.sibling}}function Fi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,_=f.flags,E=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Fi(c,f,a),$o(4,f);break;case 1:if(Fi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(st){ke(r,r.return,st)}if(r=f,c=r.updateQueue,c!==null){var I=r.stateNode;try{var Z=c.shared.hiddenCallbacks;if(Z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<Z.length;c++)O0(Z[c],I)}catch(st){ke(r,r.return,st)}}E&&_&64&&qx(f),Zi(f,f.return);break;case 27:(a&2)!==0&&Kx(f);case 5:f.tag!==5&&f.tag!==27||Wx(f),Fi(c,f,a),E&&r===null&&_&4&&Rh(f),Zi(f,f.return);break;case 6:Wx(f);break;case 26:I=f.stateNode,f.memoizedState!==null||I===null||En||Ed(ul(I.ownerDocument),f.type,I),Fi(c,f,a),E&&r===null&&_&4&&Rh(f),Zi(f,f.return);break;case 12:Fi(c,f,a);break;case 31:Fi(c,f,a),E&&_&4&&lg(c,f);break;case 13:Fi(c,f,a),E&&_&4&&cg(c,f);break;case 22:f.memoizedState===null&&Fi(c,f,a),Zi(f,f.return);break;case 30:Fi(c,f,a),Zi(f,f.return);break;case 7:Zi(f,f.return);default:Fi(c,f,a)}n=n.sibling}}function Vh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ho(a))}function Gh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ho(t))}function Ci(t,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)dg(t,n,a,r),n=n.sibling;else c&&eg(n)}function dg(t,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&kc(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,r),f&2048&&$o(9,n);break;case 1:Ci(t,n,a,r);break;case 3:Ci(t,n,a,r),c&&Fh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Ho(f)));break;case 12:if(f&2048){Ci(t,n,a,r),f=n.stateNode;try{var _=n.memoizedProps,E=_.id,I=_.onPostCommit;typeof I=="function"&&I(E,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(Z){ke(n,n.return,Z)}}else Ci(t,n,a,r);break;case 31:Ci(t,n,a,r);break;case 13:Ci(t,n,a,r);break;case 23:break;case 22:_=n.stateNode,E=n.alternate,n.memoizedState!==null?(c&&E!==null&&E.memoizedState===null&&kc(E),_._visibility&2?Ci(t,n,a,r):nl(t,n)):(c&&E!==null&&E.memoizedState!==null&&kc(n),_._visibility&2?Ci(t,n,a,r):(_._visibility|=2,Nr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Vh(E,n);break;case 24:Ci(t,n,a,r),f&2048&&Gh(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(Qi(f.child,!0),Qi(n.child,!0))),Ci(t,n,a,r);break;default:Ci(t,n,a,r)}}function Nr(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,E=a,I=r,Z=_.flags;switch(_.tag){case 0:case 11:case 15:Nr(f,_,E,I,c),$o(8,_);break;case 23:break;case 22:var st=_.stateNode;_.memoizedState!==null?st._visibility&2?Nr(f,_,E,I,c):nl(f,_):(st._visibility|=2,Nr(f,_,E,I,c)),c&&Z&2048&&Vh(_.alternate,_);break;case 24:Nr(f,_,E,I,c),c&&Z&2048&&Gh(_.alternate,_);break;default:Nr(f,_,E,I,c)}n=n.sibling}}function nl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:nl(a,r),c&2048&&Vh(r.alternate,r);break;case 24:nl(a,r),c&2048&&Gh(r.alternate,r);break;default:nl(a,r)}n=n.sibling}}var qs=8192;function Ys(t,n,a){if(t.subtreeFlags&qs)for(t=t.child;t!==null;)pg(t,n,a),t=t.sibling}function pg(t,n,a){switch(t.tag){case 26:Ys(t,n,a),t.flags&qs&&(t.memoizedState!==null?RM(a,Ii,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&S_(a,t)));break;case 5:Ys(t,n,a),t.flags&qs&&(t=t.stateNode,(n&335544128)===n&&S_(a,t));break;case 3:case 4:var r=Ii;Ii=ul(t.stateNode.containerInfo),Ys(t,n,a),Ii=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=qs,qs=16777216,Ys(t,n,a),qs=r):Ys(t,n,a));break;case 30:if((t.flags&qs)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var c=t.stateNode;c.paired=null,ci===null&&(ci=new Map),ci.set(r,c)}Ys(t,n,a);break;default:Ys(t,n,a)}}function mg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function il(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,gg(r,t)}mg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xg(t),t=t.sibling}function xg(t){switch(t.tag){case 0:case 11:case 15:il(t),t.flags&2048&&ns(9,t,t.return);break;case 3:il(t);break;case 12:il(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Yc(t)):il(t);break;default:il(t)}}function Yc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,gg(r,t)}mg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ns(8,n,n.return),Yc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yc(n));break;default:Yc(n)}t=t.sibling}}function gg(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:ns(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ho(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Tn=r;else t:for(a=t;Tn!==null;){r=Tn;var c=r.sibling,f=r.return;if(rg(r),r===a){Tn=null;break t}if(c!==null){c.return=f,Tn=c;break t}Tn=f}}}var Mb={getCacheForType:function(t){var n=Rn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(hn).controller.signal}},Eb=typeof WeakMap=="function"?WeakMap:Map,Be=0,Qe=null,Te=null,Re=0,Ge=0,ui=null,as=!1,Ur=!1,kh=!1,Ma=0,sn=0,ss=0,Ws=0,Wc=0,fi=0,Lr=0,al=null,$n=null,Xh=!1,Zc=0,_g=0,Kc=1/0,Qc=null,rs=null,nn=0,Bi=null,Zs=null,ea=0,jh=0,qh=null,vg=null,Or=null,Pr=null,zr=null,sl=0,Jc=null;function hi(){return(Be&2)!==0&&Re!==0?Re&-Re:At.T!==null?nd():ut()}function yg(){if(fi===0)if((Re&536870912)===0||Me){var t=Cs;Cs<<=1,(Cs&3932160)===0&&(Cs=262144),fi=t}else fi=536870912;return t=wn.current,t!==null&&(t.flags|=32),fi}function Ir(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=t_(da(t.memoizedProps,a))),Pr===null&&(Pr=[]),Pr.push(n.bind(null,r))}}function ti(t,n,a){(t===Qe&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)&&(Fr(t,0),os(t,Re,fi,!1)),Ds(t,a),((Be&2)===0||t!==Qe)&&(t===Qe&&((Be&2)===0&&(Ws|=a),sn===4&&os(t,Re,fi,!1)),na(t))}function Sg(t,n,a){if((Be&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||ji(t,n),c=r?Cb(t,n):Wh(t,n,!0),f=r;do{if(c===0){Ur&&!r&&os(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Tb(a)){c=Wh(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;c=al;var I=E.current.memoizedState.isDehydrated;if(I&&(Fr(E,_).flags|=256),_=Wh(E,_,!1),_!==2&&_!==6){if(kh&&!I){E.errorRecoveryDisabledLanes|=f,Ws|=f,c=4;break t}f=$n,$n=c,f!==null&&($n===null?$n=f:$n.push.apply($n,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){Fr(t,0),os(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:os(r,n,fi,!as);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Zc+300-z(),10<c)){if(os(r,n,fi,!as),ws(r,0,!0)!==0)break t;ea=n,r.timeoutHandle=dd(bg.bind(null,r,a,$n,Qc,Xh,n,fi,Ws,Lr,as,f,"Throttled",-0,0),c);break t}bg(r,a,$n,Qc,Xh,n,fi,Ws,Lr,as,f,null,-0,0)}}break}while(!0);na(t)}function bg(t,n,a,r,c,f,_,E,I,Z,st,gt,X,it){t.timeoutHandle=-1;var Pt=n.subtreeFlags,Wt=(f&335544064)===f;if(gt=null,(Wt||Pt&8192||(Pt&16785408)===16785408)&&(gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},ci=null,pg(n,f,gt),Wt&&(Pt=gt,Wt=t.containerInfo,Wt=(Wt.nodeType===9?Wt:Wt.ownerDocument).__reactViewTransition,Wt!=null&&(Pt.count++,Pt.waitingForViewTransition=!0,Pt=dl.bind(Pt),Wt.finished.then(Pt,Pt))),Pt=(f&62914560)===f?Zc-z():(f&4194048)===f?_g-z():0,Pt=wM(gt,Pt),Pt!==null)){ea=f,t.cancelPendingCommit=Pt(Dg.bind(null,t,n,f,a,r,c,_,E,I,Z,st,gt,null,X,it)),os(t,f,_,!Z);return}Dg(t,n,f,a,r,c,_,E,I,Z,st,gt)}function Tb(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!oi(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function os(t,n,a,r){n=Ao(t,n),n&=~Wc,n&=~Ws,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Gn(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&Zl(t,a,n)}function $c(){return(Be&6)===0?(rl(0),!1):!0}function Yh(){if(Te!==null){if(Ge===0)var t=Te.return;else t=Te,ga=zs=null,eh(t),Er=null,ko=0,t=Te;for(;t!==null;)jx(t.alternate,t),t=t.return;Te=null}}function Fr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Zb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ea=0,Yh(),Qe=t,Te=a=ma(t.current,null),Re=n,Ge=0,ui=null,as=!1,Ur=ji(t,n),kh=!1,Lr=fi=Wc=Ws=ss=sn=0,$n=al=null,Xh=!1,Ma=Ao(t,n),oc(),a}function Mg(t,n){me=null,At.H=Uc,n===Mr||n===_c?(n=D0(),Ge=3):n===Gf?(n=D0(),Ge=4):Ge=n===xh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,Te===null&&(sn=1,Lc(t,Mi(n,t.current)))}function Eg(){var t=wn.current;return t===null?!0:(Re&4194048)===Re?Pn===null:(Re&62914560)===Re||(Re&536870912)!==0?t===Pn:!1}function Tg(){var t=At.H;return At.H=Uc,t===null?Uc:t}function Ag(){var t=At.A;return At.A=Mb,t}function tu(){sn=4,as||(Re&4194048)!==Re&&wn.current!==null||(Ur=!0),(ss&134217727)===0&&(Ws&134217727)===0||Qe===null||os(Qe,Re,fi,!1)}function Wh(t,n,a){var r=Be;Be|=2;var c=Tg(),f=Ag();(Qe!==t||Re!==n)&&(Qc=null,Fr(t,n)),n=!1;var _=sn;t:do try{if(Ge!==0&&Te!==null){var E=Te,I=ui;switch(Ge){case 8:Yh(),_=6;break t;case 3:case 2:case 9:case 6:wn.current===null&&(n=!0);var Z=Ge;if(Ge=0,ui=null,Br(t,E,I,Z),a&&Ur){_=0;break t}break;default:Z=Ge,Ge=0,ui=null,Br(t,E,I,Z)}}Ab(),_=sn;break}catch(st){Mg(t,st)}while(!0);return n&&t.shellSuspendCounter++,ga=zs=null,Be=r,At.H=c,At.A=f,Te===null&&(Qe=null,Re=0,oc()),_}function Ab(){for(;Te!==null;)Cg(Te)}function Cb(t,n){var a=Be;Be|=2;var r=Tg(),c=Ag();Qe!==t||Re!==n?(Qc=null,Kc=z()+500,Fr(t,n)):Ur=ji(t,n);t:do try{if(Ge!==0&&Te!==null){n=Te;var f=ui;e:switch(Ge){case 1:Ge=0,ui=null,Br(t,n,f,1);break;case 2:case 9:if(R0(f)){Ge=0,ui=null,Rg(n);break}n=function(){Ge!==2&&Ge!==9||Qe!==t||(Ge=7),na(t)},f.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:R0(f)?(Ge=0,ui=null,Rg(n)):(Ge=0,ui=null,Br(t,n,f,7));break;case 5:var _=null;switch(Te.tag){case 26:_=Te.memoizedState;case 5:case 27:var E=Te;if(_?v_(_):E.stateNode.complete){Ge=0,ui=null;var I=E.sibling;if(I!==null)Te=I;else{var Z=E.return;Z!==null?(Te=Z,eu(Z)):Te=null}break e}}Ge=0,ui=null,Br(t,n,f,5);break;case 6:Ge=0,ui=null,Br(t,n,f,6);break;case 8:Yh(),sn=6;break t;default:throw Error(s(462))}}Rb();break}catch(st){Mg(t,st)}while(!0);return ga=zs=null,At.H=r,At.A=c,Be=a,Te!==null?0:(Qe=null,Re=0,oc(),sn)}function Rb(){for(;Te!==null&&!Bt();)Cg(Te)}function Cg(t){var n=kx(t.alternate,t,Ma);t.memoizedProps=t.pendingProps,n===null?eu(t):Te=n}function Rg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=zx(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=zx(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:eh(n);var r=n;r===Mn&&(Me?(dc(r),r.tag===5&&r.stateNode!=null&&(Je=r.stateNode)):(dc(r),Me=!0));default:jx(a,n),n=Te=g0(n,Ma),n=kx(a,n,Ma)}t.memoizedProps=t.pendingProps,n===null?eu(t):Te=n}function Br(t,n,a,r){ga=zs=null,eh(n),Er=null,ko=0;var c=n.return;try{if(mb(t,c,n,a,Re)){sn=1,Lc(t,Mi(a,t.current)),Te=null;return}}catch(f){if(c!==null)throw Te=c,f;sn=1,Lc(t,Mi(a,t.current)),Te=null;return}n.flags&32768?(Me||r===1?t=!0:Ur||(Re&536870912)!==0?t=!1:(as=t=!0,(r===2||r===9||r===3||r===6)&&(r=wn.current,r!==null&&r.tag===13&&(r.flags|=16384))),wg(n,t)):eu(n)}function eu(t){var n=t;do{if((n.flags&32768)!==0){wg(n,as);return}t=n.return;var a=vb(n.alternate,n,Ma);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=t}while(n!==null);sn===0&&(sn=5)}function wg(t,n){do{var a=yb(t.alternate,t);if(a!==null){a.flags&=32767,Te=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Te=t;return}Te=t=a}while(t!==null);sn=6,Te=null}function Dg(t,n,a,r,c,f,_,E,I,Z,st,gt){t.cancelPendingCommit=null;do nu();while(nn!==0);if((Be&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Qe&&(Te=Qe=null,Re=0),Zs=n,Bi=t,ea=a,qh=c,vg=r,wb(t,n,a,_,E,I,gt)}}function wb(t,n,a,r,c,f,_){var E=n.lanes|n.childLanes;if(jh=E,E|=wf,rf(t,a,E,r,c,f),Pr=null,(a&335544064)===a?(zr=ib(t),r=10262):(zr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,Pb(bt,function(){return Jh(),null})):(t.callbackNode=null,t.callbackPriority=0),Vc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=At.T,At.T=null,c=kt.p,kt.p=2,f=Be,Be|=4;try{Sb(t,n,a)}finally{Be=f,kt.p=c,At.T=r}}nn=1,Vc?Or=eM(_,t.containerInfo,zr,Zh,Kh,Nb,Qh,Jh,Db):(Zh(),Kh(),Qh())}function Db(t){if(nn!==0){var n=Bi.onRecoverableError;n(t,{componentStack:null})}}function Nb(){nn===3&&(nn=0,hg(Zs,Bi),nn=4)}function Zh(){if(nn===1){nn=0;var t=Bi,n=Zs,a=ea,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=At.T,At.T=null;var c=kt.p;kt.p=2;var f=Be;Be|=4;try{el=Xc=!1,ug(n,t,a),a=ud;var _=o0(t.containerInfo),E=a.focusedElem,I=a.selectionRange;if(_!==E&&E&&E.ownerDocument&&r0(E.ownerDocument.documentElement,E)){if(I!==null&&Ef(E)){var Z=I.start,st=I.end;if(st===void 0&&(st=Z),"selectionStart"in E)E.selectionStart=Z,E.selectionEnd=Math.min(st,E.value.length);else{var gt=E.ownerDocument||document,X=gt&&gt.defaultView||window;if(X.getSelection){var it=X.getSelection(),Pt=E.textContent.length,Wt=Math.min(I.start,Pt),xe=I.end===void 0?Wt:Math.min(I.end,Pt);!it.extend&&Wt>xe&&(_=xe,xe=Wt,Wt=_);var W=s0(E,Wt),G=s0(E,xe);if(W&&G&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==G.node||it.focusOffset!==G.offset)){var $=gt.createRange();$.setStart(W.node,W.offset),it.removeAllRanges(),Wt>xe?(it.addRange($),it.extend(G.node,G.offset)):($.setEnd(G.node,G.offset),it.addRange($))}}}}for(gt=[],it=E;it=it.parentNode;)it.nodeType===1&&gt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var xt=gt[E];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}Yr=!!cd,ud=cd=null}finally{Be=f,kt.p=c,At.T=r}}t.current=n,nn=2}}function Kh(){if(nn===2){nn=0;var t=Bi,n=Zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=At.T,At.T=null;var r=kt.p;kt.p=2;var c=Be;Be|=4;try{ag(t,n.alternate,n)}finally{Be=c,kt.p=r,At.T=a}}nn=3}}function Qh(){if(nn===4||nn===3){nn=0;var t=Or;Or=null,ct();var n=Bi,a=Zs,r=ea,c=vg,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?nn=5:(nn=0,Zs=Bi=null,Ng(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(rs=null),lt(r),a=a.stateNode,tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Ue,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=At.T,f=kt.p,kt.p=2,At.T=null;try{for(var _=n.onRecoverableError,E=0;E<c.length;E++){var I=c[E];_(I.value,{componentStack:I.stack})}}finally{At.T=a,kt.p=f}}if(c=Pr,_=zr,zr=null,c!==null&&(Pr=null,_===null&&(_=[]),t!==null))for(I=0;I<c.length;I++)a=(0,c[I])(_),a!==void 0&&t.finished.finally(a);(ea&3)!==0&&nu(),na(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===Jc?sl++:(sl=0,Jc=n):(sl=0,Jc=null),rl(0)}}function Ng(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ho(n)))}function nu(){return Or!==null&&(Or.skipTransition(),Or=null),Zh(),Kh(),Qh(),Jh()}function Jh(){if(nn!==5)return!1;var t=Bi,n=jh;jh=0;var a=lt(ea),r=At.T,c=kt.p;try{kt.p=32>a?32:a,At.T=null,a=qh,qh=null;var f=Bi,_=ea;if(nn=0,Zs=Bi=null,ea=0,(Be&6)!==0)throw Error(s(331));var E=Be;if(Be|=4,xg(f.current),dg(f,f.current,_,a),Be=E,rl(0,!1),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Ue,f)}catch{}return!0}finally{kt.p=c,At.T=r,Ng(t,n)}}function Ug(t,n,a){n=Mi(a,n),n=mh(t.stateNode,n,2),t=Ja(t,n,2),t!==null&&(Ds(t,2),na(t))}function ke(t,n,a){if(t.tag===3)Ug(t,t,a);else for(;n!==null;){if(n.tag===3){Ug(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rs===null||!rs.has(r))){t=Mi(a,t),a=Rx(2),r=Ja(n,a,2),r!==null&&(wx(a,r,n,t),Ds(r,2),na(r));break}}n=n.return}}function $h(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Eb;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(kh=!0,c.add(a),t=Ub.bind(null,t,n,a),n.then(t,t))}function Ub(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qe===t&&(Re&a)===a&&((sn===4||sn===3&&(Re&62914560)===Re&&300>z()-Zc)&&(Be&2)===0?Fr(t,0):Wc|=a,Lr===Re&&(Lr=0)),na(t)}function Lg(t,n){n===0&&(n=Wl()),t=Ls(t,n),t!==null&&(Ds(t,n),na(t))}function Lb(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Lg(t,a)}function Ob(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Lg(t,a)}function Pb(t,n){return te(t,n)}var Hr=null,Vr=null,td=!1,iu=!1,ed=!1,ls=0;function na(t){t!==Vr&&t.next===null&&(Vr===null?Hr=Vr=t:Vr=Vr.next=t),iu=!0,td||(td=!0,Ib())}function rl(t,n){if(!ed&&iu){ed=!0;do for(var a=!1,r=Hr;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Gn(42|t)+1)-1,f&=c&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ig(r,f))}else f=Re,f=ws(r,r===Qe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||ji(r,f)||(a=!0,Ig(r,f));r=r.next}while(a);ed=!1}}function zb(){Og()}function Og(){iu=td=!1;var t=0;ls!==0&&Wb()&&(t=ls);for(var n=z(),a=null,r=Hr;r!==null;){var c=r.next,f=Pg(r,n);f===0?(r.next=null,a===null?Hr=c:a.next=c,c===null&&(Vr=a)):(a=r,(t!==0||(f&3)!==0)&&(iu=!0)),r=c}nn!==0&&nn!==5||rl(t),ls!==0&&(ls=0)}function Pg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Gn(f),E=1<<_,I=c[_];I===-1?((E&a)===0||(E&r)!==0)&&(c[_]=Yl(E,n)):I<=n&&(t.expiredLanes|=E),f&=~E}if(n=Qe,a=Re,a=ws(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&ee(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ji(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&ee(r),lt(a)){case 2:case 8:a=Rt;break;case 32:a=bt;break;case 268435456:a=jt;break;default:a=bt}return r=zg.bind(null,t),a=te(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&ee(r),t.callbackPriority=2,t.callbackNode=null,2}function zg(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(nu()&&t.callbackNode!==a)return null;var r=Re;return r=ws(t,t===Qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Sg(t,r,n),Pg(t,z()),t.callbackNode!=null&&t.callbackNode===a?zg.bind(null,t):null)}function Ig(t,n){if(nu())return null;Sg(t,n,!0)}function Ib(){Kb(function(){(Be&6)!==0?te(Ct,zb):Og()})}function nd(){if(ls===0){var t=Bs;t===0&&(t=Va,Va<<=1,(Va&261888)===0&&(Va=256)),ls=t}return ls}function Fg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$l(t)}function Fb(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Fg((c[zt]||null).action),_=r.submitter;_&&(n=(n=_[zt]||null)?Fg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new ic("action","action",null,r,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ls!==0){var I=new FormData(c,_);uh(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(E.preventDefault(),I=new FormData(c,_),uh(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var id=0;id<Rf.length;id++){var ad=Rf[id],Bb=ad.toLowerCase(),Hb=ad[0].toUpperCase()+ad.slice(1);Pi(Bb,"on"+Hb)}Pi(u0,"onAnimationEnd"),Pi(f0,"onAnimationIteration"),Pi(h0,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(ZS,"onTransitionRun"),Pi(KS,"onTransitionStart"),Pi(QS,"onTransitionCancel"),Pi(d0,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),Fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function Bg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var E=r[_],I=E.instance,Z=E.currentTarget;if(E=E.listener,I!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Z;try{f(c)}catch(st){rc(st)}c.currentTarget=null,f=I}else for(_=0;_<r.length;_++){if(E=r[_],I=E.instance,Z=E.currentTarget,E=E.listener,I!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Z;try{f(c)}catch(st){rc(st)}c.currentTarget=null,f=I}}}}function Ae(t,n){var a=n[re];a===void 0&&(a=n[re]=new Set);var r=t+"__bubble";a.has(r)||(Hg(n,t,2,!1),a.add(r))}function sd(t,n,a){var r=0;n&&(r|=4),Hg(a,t,r,n)}var au="_reactListening"+Math.random().toString(36).slice(2);function rd(t){if(!t[au]){t[au]=!0,On.forEach(function(a){a!=="selectionchange"&&(Vb.has(a)||sd(a,!1,t),sd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[au]||(n[au]=!0,sd("selectionchange",!1,n))}}function Hg(t,n,a,r){switch(w_(n)){case 2:var c=LM;break;case 8:c=OM;break;default:c=Ad}a=c.bind(null,n,a,t),c=void 0,!pf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function od(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var E=r.stateNode.containerInfo;if(E===c)break;if(_===4)for(_=r.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;E!==null;){if(_=Ne(E),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){r=f=_;continue t}E=E.parentNode}}r=r.return}Hm(function(){var Z=f,st=hf(a),gt=[];t:{var X=p0.get(t);if(X!==void 0){var it=ic,Pt=t;switch(t){case"keypress":if(ec(a)===0)break t;case"keydown":case"keyup":it=TS;break;case"focusin":Pt="focus",it=_f;break;case"focusout":Pt="blur",it=_f;break;case"beforeblur":case"afterblur":it=_f;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=dS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=DS;break;case u0:case f0:case h0:it=xS;break;case d0:it=US;break;case"scroll":case"scrollend":it=fS;break;case"wheel":it=OS;break;case"copy":case"cut":case"paste":it=_S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=jm;break;case"submit":it=RS;break;case"toggle":case"beforetoggle":it=zS}var Wt=(n&4)!==0,xe=!Wt&&(t==="scroll"||t==="scrollend"),W=Wt?X!==null?X+"Capture":null:X;Wt=[];for(var G=Z,$;G!==null;){var xt=G;if($=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||$===null||W===null||(xt=wo(G,W),xt!=null&&Wt.push(ll(G,xt,$))),xe)break;G=G.return}0<Wt.length&&(X=new it(X,Pt,null,a,st),gt.push({event:X,listeners:Wt}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",X=t==="mouseout"||t==="pointerout",it&&a!==ff&&(Pt=a.relatedTarget||a.fromElement)&&(Ne(Pt)||Pt[Ht]))break t;(X||it)&&(Pt=st.window===st?st:(it=st.ownerDocument)?it.defaultView||it.parentWindow:window,X?(it=a.relatedTarget||a.toElement,X=Z,it=it?Ne(it):null,it!==null&&(xe=u(it),Wt=it.tag,it!==xe||Wt!==5&&Wt!==27&&Wt!==6)&&(it=null)):(X=null,it=Z),X!==it&&(Wt=km,xt="onMouseLeave",W="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Wt=jm,xt="onPointerLeave",W="onPointerEnter",G="pointer"),xe=X==null?Pt:Ve(X),$=it==null?Pt:Ve(it),Pt=new Wt(xt,G+"leave",X,a,st),Pt.target=xe,Pt.relatedTarget=$,xt=null,Ne(st)===Z&&(Wt=new Wt(W,G+"enter",it,a,st),Wt.target=$,Wt.relatedTarget=xe,xt=Wt),xe=xt,Wt=X&&it?O(X,it,Gb):null,X!==null&&Vg(gt,Pt,X,Wt,!1),it!==null&&xe!==null&&Vg(gt,xe,it,Wt,!0)))}t:{if(X=Z?Ve(Z):window,it=X.nodeName&&X.nodeName.toLowerCase(),it==="select"||it==="input"&&X.type==="file")var Gt=$m;else if(Qm(X))if(t0)Gt=qS;else{Gt=XS;var we=kS}else it=X.nodeName,!it||it.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?Z&&uf(Z.elementType)&&(Gt=$m):Gt=jS;if(Gt&&(Gt=Gt(t,Z))){Jm(gt,Gt,a,st);break t}we&&we(t,X,Z)}switch(we=Z?Ve(Z):window,t){case"focusin":(Qm(we)||we.contentEditable==="true")&&(mr=we,Tf=Z,Io=null);break;case"focusout":Io=Tf=mr=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,l0(gt,a,st);break;case"selectionchange":if(WS)break;case"keydown":case"keyup":l0(gt,a,st)}var Jt;if(yf)t:{switch(t){case"compositionstart":var le="onCompositionStart";break t;case"compositionend":le="onCompositionEnd";break t;case"compositionupdate":le="onCompositionUpdate";break t}le=void 0}else pr?Zm(t,a)&&(le="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(qm&&a.locale!=="ko"&&(pr||le!=="onCompositionStart"?le==="onCompositionEnd"&&pr&&(Jt=Vm()):(ka=st,mf="value"in ka?ka.value:ka.textContent,pr=!0)),we=su(Z,le),0<we.length&&(le=new Xm(le,t,null,a,st),gt.push({event:le,listeners:we}),Jt?le.data=Jt:(Jt=Km(a),Jt!==null&&(le.data=Jt)))),(Jt=FS?BS(t,a):HS(t,a))&&(le=su(Z,"onBeforeInput"),0<le.length&&(we=new Xm("onBeforeInput","beforeinput",null,a,st),gt.push({event:we,listeners:le}),we.data=Jt)),Fb(gt,t,Z,a,st)}Bg(gt,n)})}function ll(t,n,a){return{instance:t,listener:n,currentTarget:a}}function su(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=wo(t,a),c!=null&&r.unshift(ll(t,c,f)),c=wo(t,n),c!=null&&r.push(ll(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Gb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Vg(t,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var E=a,I=E.alternate,Z=E.stateNode;if(E=E.tag,I!==null&&I===r)break;E!==5&&E!==26&&E!==27||Z===null||(I=Z,c?(Z=wo(a,f),Z!=null&&_.unshift(ll(a,Z,I))):c||(Z=wo(a,f),Z!=null&&_.push(ll(a,Z,I)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var kb=/\r\n?/g,Xb=/\u0000|\uFFFD/g;function Gg(t){return(typeof t=="string"?t:""+t).replace(kb,`
`).replace(Xb,"")}function kg(t,n){return n=Gg(n),Gg(t)===n}function Xe(t,n,a,r,c,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||fr(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&fr(t,""+r);else return;break;case"className":Jl(t,"class",r);break;case"tabIndex":Jl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Jl(t,a,r);break;case"style":Fm(t,r,f);return;case"data":if(n!=="object"){Jl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=$l(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(t,n,"name",c.name,c,null),Xe(t,n,"formEncType",c.formEncType,c,null),Xe(t,n,"formMethod",c.formMethod,c,null),Xe(t,n,"formTarget",c.formTarget,c,null)):(Xe(t,n,"encType",c.encType,c,null),Xe(t,n,"method",c.method,c,null),Xe(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=$l(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=qi);return;case"onScroll":r!=null&&Ae("scroll",t);return;case"onScrollEnd":r!=null&&Ae("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=$l(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Ae("beforetoggle",t),Ae("toggle",t),Ql(t,"popover",r);break;case"xlinkActuate":fa(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":fa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":fa(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":fa(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":fa(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":fa(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":fa(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":fa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":fa(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ql(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=cS.get(a)||a,Ql(t,a,r);else return}_e=!0}function ld(t,n,a,r,c,f){switch(a){case"style":Fm(t,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")fr(t,r);else if(typeof r=="number"||typeof r=="bigint")fr(t,""+r);else return;break;case"onScroll":r!=null&&Ae("scroll",t);return;case"onScrollEnd":r!=null&&Ae("scrollend",t);return;case"onClick":r!=null&&(t.onclick=qi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ga.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=t[zt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,r,c);break t}_e=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ql(t,a,r)}return}_e=!0}function Un(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",t),Ae("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(t,n,f,_,a,null)}}c&&Xe(t,n,"srcSet",a.srcSet,a,null),r&&Xe(t,n,"src",a.src,a,null);return;case"input":Ae("invalid",t);var E=f=_=c=null,I=null,Z=null;for(r in a)if(a.hasOwnProperty(r)){var st=a[r];if(st!=null)switch(r){case"name":c=st;break;case"type":_=st;break;case"checked":I=st;break;case"defaultChecked":Z=st;break;case"value":f=st;break;case"defaultValue":E=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Xe(t,n,r,st,a,null)}}Om(t,f,E,I,Z,_,c,!1);return;case"select":Ae("invalid",t),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":r=E;default:Xe(t,n,c,E,a,null)}n=f,a=_,t.multiple=!!r,n!=null?ur(t,!!r,n,!1):a!=null&&ur(t,!!r,a,!0);return;case"textarea":Ae("invalid",t),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Xe(t,n,_,E,a,null)}zm(t,r,c,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(r=a[I],r!=null)&&(I==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Xe(t,n,I,r,a,null));return;case"dialog":Ae("beforetoggle",t),Ae("toggle",t),Ae("cancel",t),Ae("close",t);break;case"iframe":case"object":Ae("load",t);break;case"video":case"audio":for(r=0;r<ol.length;r++)Ae(ol[r],t);break;case"image":Ae("error",t),Ae("load",t);break;case"details":Ae("toggle",t);break;case"embed":case"source":case"link":Ae("error",t),Ae("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(r=a[Z],r!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(t,n,Z,r,a,null)}return;default:if(uf(n)){for(st in a)a.hasOwnProperty(st)&&(r=a[st],r!==void 0&&ld(t,n,st,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Xe(t,n,E,r,a,null))}var jb={};function qb(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,E=null,I=null,Z=null,st=null;for(it in a){var gt=a[it];if(a.hasOwnProperty(it)&&gt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":I=gt;default:r.hasOwnProperty(it)||Xe(t,n,it,null,r,gt)}}for(var X in r){var it=r[X];if(gt=a[X],r.hasOwnProperty(X)&&(it!=null||gt!=null))switch(X){case"type":it!==gt&&(_e=!0),f=it;break;case"name":it!==gt&&(_e=!0),c=it;break;case"checked":it!==gt&&(_e=!0),Z=it;break;case"defaultChecked":it!==gt&&(_e=!0),st=it;break;case"value":it!==gt&&(_e=!0),_=it;break;case"defaultValue":it!==gt&&(_e=!0),E=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:it!==gt&&Xe(t,n,X,it,r,gt)}}lf(t,_,E,I,Z,st,f,c);return;case"select":it=_=E=X=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":it=I;default:r.hasOwnProperty(f)||Xe(t,n,f,null,r,I)}for(c in r)if(f=r[c],I=a[c],r.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":f!==I&&(_e=!0),X=f;break;case"defaultValue":f!==I&&(_e=!0),E=f;break;case"multiple":f!==I&&(_e=!0),_=f;default:f!==I&&Xe(t,n,c,f,r,I)}n=E,a=_,r=it,X!=null?ur(t,!!a,X,!1):!!r!=!!a&&(n!=null?ur(t,!!a,n,!0):ur(t,!!a,a?[]:"",!1));return;case"textarea":it=X=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Xe(t,n,E,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":c!==f&&(_e=!0),X=c;break;case"defaultValue":c!==f&&(_e=!0),it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Xe(t,n,_,c,r,f)}Pm(t,X,it);return;case"option":for(var Pt in a)X=a[Pt],a.hasOwnProperty(Pt)&&X!=null&&!r.hasOwnProperty(Pt)&&(Pt==="selected"?t.selected=!1:Xe(t,n,Pt,null,r,X));for(I in r)X=r[I],it=a[I],r.hasOwnProperty(I)&&X!==it&&(X!=null||it!=null)&&(I==="selected"?(X!==it&&(_e=!0),t.selected=X&&typeof X!="function"&&typeof X!="symbol"):Xe(t,n,I,X,r,it));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in a)X=a[Wt],a.hasOwnProperty(Wt)&&X!=null&&!r.hasOwnProperty(Wt)&&Xe(t,n,Wt,null,r,X);for(Z in r)if(X=r[Z],it=a[Z],r.hasOwnProperty(Z)&&X!==it&&(X!=null||it!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,n));break;default:Xe(t,n,Z,X,r,it)}return;default:if(uf(n)){for(var xe in a)X=a[xe],a.hasOwnProperty(xe)&&X!==void 0&&!r.hasOwnProperty(xe)&&ld(t,n,xe,void 0,r,X);for(st in r)X=r[st],it=a[st],!r.hasOwnProperty(st)||X===it||X===void 0&&it===void 0||ld(t,n,st,X,r,it);return}}for(var W in a)X=a[W],a.hasOwnProperty(W)&&X!=null&&!r.hasOwnProperty(W)&&Xe(t,n,W,null,r,X);for(gt in r)X=r[gt],it=a[gt],!r.hasOwnProperty(gt)||X===it||X==null&&it==null||Xe(t,n,gt,X,r,it)}function Xg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,E=c.duration;if(f&&E&&Xg(_)){for(_=0,E=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],Z=I.startTime;if(Z>E)break;var st=I.transferSize,gt=I.initiatorType;st&&Xg(gt)&&(I=I.responseEnd,_+=st*(I<E?1:(E-Z)/(I-Z)))}if(--r,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var cd=null,ud=null;function cl(t){return t.nodeType===9?t:t.ownerDocument}function jg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Yg(t,n,a,r){return a=cl(a).createElement(t),a[Ut]=r,a[zt]=n,Un(a,t,n),Pe(a),a}function fd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hd=null;function Wb(){var t=window.event;return t&&t.type==="popstate"?t===hd?!1:(hd=t,!0):(hd=null,!1)}var dd=typeof setTimeout=="function"?setTimeout:void 0,Zb=typeof clearTimeout=="function"?clearTimeout:void 0,Wg=typeof Promise=="function"?Promise:void 0,Zg=typeof requestAnimationFrame=="function"?requestAnimationFrame:dd,Kb=typeof queueMicrotask=="function"?queueMicrotask:typeof Wg<"u"?function(t){return Wg.resolve(null).then(t).catch(Qb)}:dd;function Qb(t){setTimeout(function(){throw t})}function cs(t){return t==="head"}function Kg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),Wr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Sd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Sd(a);for(var f=a.firstChild;f;){var _=f.nextSibling,E=f.nodeName;f[Le]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Sd(t.ownerDocument.body);a=c}while(a);Wr(n)}function Qg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Jg(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function $g(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Jb(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function pd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Jb(n,a,t)}function $b(t){return t.documentElement.clientHeight}function tM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function eM(t,n,a,r,c,f,_,E,I){var Z=n.nodeType===9?n:n.ownerDocument;try{var st=Z.startViewTransition({update:function(){var X=Z.defaultView,it=X.navigation&&X.navigation.transition,Pt=Z.fonts.status;r();var Wt=[];if(Pt==="loaded"&&($b(Z),Z.fonts.status==="loading"&&Wt.push(Z.fonts.ready)),Pt=Wt.length,t!==null)for(var xe=t.suspenseyImages,W=0,G=0;G<xe.length;G++){var $=xe[G];if(!$.complete){var xt=$.getBoundingClientRect();if(0<xt.bottom&&0<xt.right&&xt.top<X.innerHeight&&xt.left<X.innerWidth){if(W+=y_($),W>lu){Wt.length=Pt;break}$=new Promise(tM.bind($)),Wt.push($)}}}if(0<Wt.length)return X=Promise.race([Promise.all(Wt),new Promise(function(Gt){return setTimeout(Gt,500)})]).then(c,c),(it?Promise.allSettled([it.finished,X]):X).then(f,f);if(c(),it)return it.finished.then(f,f);f()},types:a});Z.__reactViewTransition=st;var gt=[];return st.ready.then(function(){for(var X=Z.documentElement.getAnimations({subtree:!0}),it=0;it<X.length;it++){var Pt=X[it],Wt=Pt.effect,xe=Wt.pseudoElement;if(xe!=null&&xe.startsWith("::view-transition")){gt.push(Pt),Pt=Wt.getKeyframes();for(var W=xe=void 0,G=!0,$=0;$<Pt.length;$++){var xt=Pt[$],Gt=xt.width;if(xe===void 0)xe=Gt;else if(xe!==Gt){G=!1;break}if(Gt=xt.height,W===void 0)W=Gt;else if(W!==Gt){G=!1;break}delete xt.width,delete xt.height,xt.transform==="none"&&delete xt.transform}G&&xe!==void 0&&W!==void 0&&(Wt.setKeyframes(Pt),G=getComputedStyle(Wt.target,Wt.pseudoElement),G.width!==xe||G.height!==W)&&(G=Pt[0],G.width=xe,G.height=W,G=Pt[Pt.length-1],G.width=xe,G.height=W,Wt.setKeyframes(Pt))}}_()},function(X){Z.__reactViewTransition===st&&(Z.__reactViewTransition=null);try{typeof X=="object"&&X!==null&&X.name==="InvalidStateError"&&(X.message==="View transition was skipped because document visibility state is hidden."||X.message==="Skipping view transition because document visibility state has become hidden."||X.message==="Skipping view transition because viewport size changed."||X.message==="Transition was aborted because of invalid state")&&(X=null),X!==null&&I(X)}finally{r(),c(),_()}}),st.finished.finally(function(){for(var X=0;X<gt.length;X++)gt[X].cancel();Z.__reactViewTransition===st&&(Z.__reactViewTransition=null),E()}),st}catch{return r(),c(),_(),null}}function Ks(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Ks.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Ks.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===t&&f.pseudoElement===n&&r.push(a[c])}return r},Ks.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function t_(t){return{name:t,group:new Ks("group",t),imagePair:new Ks("image-pair",t),old:new Ks("old",t),new:new Ks("new",t)}}function di(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}di.prototype.addEventListener=function(t,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(n_(f,t,n,a)===-1){var _=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(I){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),r!==null&&(c=_.removeEventListener.bind(_,t,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=Gr(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:c}),x(this._fragmentFiber.child,!1,nM,t,E,r)}this._eventListeners=f}};function nM(t,n,a,r){return S(t).addEventListener(n,a,r),!1}di.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=n_(r,t,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var f=c.cleanup;c=Gr(c.optionsOrUseCapture),x(this._fragmentFiber.child,!1,iM,t,a,c),r.splice(n,1),f!==null&&f()}};function iM(t,n,a,r){return S(t).removeEventListener(n,a,r),!1}function Gr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function e_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function n_(t,n,a,r){if(t.length===0)return-1;r=e_(r);for(var c=0;c<t.length;c++){var f=t[c];if(f.type===n&&f.listener===a&&e_(f.optionsOrUseCapture)===r)return c}return-1}di.prototype.dispatchEvent=function(t){var n=y(this._fragmentFiber);if(n===null)return!0;n=S(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];r.addEventListener(f.type,f.attachedListener,Gr(f.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(c=0;c<a.length;c++)f=a[c],r.removeEventListener(f.type,f.attachedListener,Gr(f.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},di.prototype.focus=function(t){x(this._fragmentFiber.child,!0,i_,t,void 0,void 0)};function i_(t,n){return t.tag===6?!1:(t=S(t),mM(t,n))}di.prototype.focusLast=function(t){var n=[];x(this._fragmentFiber.child,!0,md,n,void 0,void 0);for(var a=n.length-1;0<=a&&!i_(n[a],t);a--);};function md(t,n){return n.push(t),!1}di.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=S(t),t=cl(t).activeElement,t!==null&&x(this._fragmentFiber.child,!1,aM,t,void 0,void 0))};function aM(t,n){return t.tag===6?!1:(t=S(t),t===n||t.contains(n)?(n.blur(),!0):!1)}di.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),x(this._fragmentFiber.child,!1,sM,t,void 0,void 0)};function sM(t,n){return t.tag===6||(t=S(t),n.observe(t)),!1}di.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),x(this._fragmentFiber.child,!1,rM,t,void 0,void 0);for(var a=n=0;a<Hi.length;a++){var r=Hi[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Hi[n++]=r}Hi.length=n}};function rM(t,n){return t.tag===6||(t=S(t),n.unobserve(t)),!1}var Hi=[],xd=!1;function oM(t,n,a){Hi.push({fragmentInstance:t,observer:n,instance:a}),xd||(xd=!0,xM(function(){xd=!1;var r=Hi;Hi=[];for(var c=0;c<r.length;c++){var f=r[c];f.observer.unobserve(f.instance)}}))}di.prototype.getClientRects=function(){var t=[];return x(this._fragmentFiber.child,!1,lM,t,void 0,void 0),t};function lM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=S(t),n.push.apply(n,t.getClientRects());return!1}di.prototype.getRootNode=function(t){var n=y(this._fragmentFiber);return n===null?this:S(n).getRootNode(t)},di.prototype.compareDocumentPosition=function(t){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];x(this._fragmentFiber.child,!1,md,a,void 0,void 0);var r=S(n);if(a.length===0){if(a=r,b(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=M(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=S(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=S(a[0]),c=S(a[a.length-1]);var f=b(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),E=c.compareDocumentPosition(t),I=_&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||f&&c===t||I||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!f&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||cM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function cM(t,n,a,r,c){var f=Ne(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=y(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=O(a,f,V),n===null?n=!1:(x(n,!0,L,f,a),f=v,v=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=O(r,f,V),n===null?n=!1:(x(n,!0,F,f,r),f=v,N=v=null,n=f!==null)),n):!1}function a_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}di.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];x(this._fragmentFiber.child,!1,md,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=M(this._fragmentFiber);if(r=a?r[1]||r[0]||y(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=S(r),a_(t,a);return}if(r=S(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=S(c),a_(c,a)):S(c).scrollIntoView(t),r+=a?-1:1}};function uM(t,n){return t=S(t),s_(t,n),!1}function s_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function r_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.addEventListener(c.type,c.attachedListener,Gr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,E=0;E<Hi.length;E++){var I=Hi[E];(I.fragmentInstance!==n||I.observer!==f||I.instance!==t)&&(Hi[_++]=I)}Hi.length=_,f.observe(t)}),s_(t,n))}function fM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.removeEventListener(c.type,c.attachedListener,Gr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?oM(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function gd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":gd(a),Ke(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function hM(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Le])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ri(t.nextSibling),t===null)break}return null}function dM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ri(t.nextSibling),t===null))return null;return t}function o_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ri(t.nextSibling),t===null))return null;return t}function _d(t){return t.data==="$?"||t.data==="$~"}function vd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function pM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ri(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var yd=null;function l_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function c_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function mM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function xM(t){Zg(function(){Zg(function(n){return t(n)})})}function u_(t,n,a){switch(n=cl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function f_(t,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&Xe(t,n,r,null,jb,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===qi&&(t.onclick=null),Ke(t)}function Sd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ke(t)}var wi=new Map,h_=new Set;function ul(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ea=kt.d;kt.d={f:gM,r:_M,D:vM,C:yM,L:SM,m:bM,X:EM,S:MM,M:TM};function gM(){var t=Ea.f(),n=$c();return t||n}function _M(t){var n=Kt(t);n!==null&&n.tag===5&&n.type==="form"?px(n):Ea.r(t)}var kr=typeof document>"u"?null:document;function d_(t,n,a){var r=kr;if(r&&typeof n=="string"&&n){var c=Si(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),h_.has(c)||(h_.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Un(n,"link",t),Pe(n),r.head.appendChild(n)))}}function vM(t){Ea.D(t),d_("dns-prefetch",t,null)}function yM(t,n){Ea.C(t,n),d_("preconnect",t,n)}function SM(t,n,a){Ea.L(t,n,a);var r=kr;if(r&&t&&n){var c='link[rel="preload"][as="'+Si(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Si(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Si(a.imageSizes)+'"]')):c+='[href="'+Si(t)+'"]';var f=c;switch(n){case"style":f=Xr(t);break;case"script":f=jr(t)}if(!(wi.has(f)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),wi.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(fl(f))||n==="script"&&r.querySelector(hl(f))))){var _=r.createElement("link");Un(_,"link",t),n==="style"&&(_[Ze]=!0,_.onload=_.onerror=function(){ua(_)}),Pe(_),r.head.appendChild(_)}}}function bM(t,n){Ea.m(t,n);var a=kr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Si(r)+'"][href="'+Si(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=jr(t)}if(!wi.has(f)&&(t=P({rel:"modulepreload",href:t},n),wi.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hl(f)))return}r=a.createElement("link"),Un(r,"link",t),Pe(r),a.head.appendChild(r)}}}function MM(t,n,a){Ea.S(t,n,a);var r=kr;if(r&&t){var c=be(r).hoistableStyles,f=Xr(t);n=n||"default";var _=c.get(f);if(!_){var E={loading:0,preload:null};if(_=r.querySelector(fl(f)))E.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=wi.get(f))&&bd(t,a);var I=_=r.createElement("link");Pe(I),Un(I,"link",t),I._p=new Promise(function(Z,st){I.onload=Z,I.onerror=st}),I.addEventListener("load",function(){E.loading|=1}),I.addEventListener("error",function(){E.loading|=2}),E.loading|=4,ru(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:E},c.set(f,_)}}}function EM(t,n){Ea.X(t,n);var a=kr;if(a&&t){var r=be(a).hoistableScripts,c=jr(t),f=r.get(c);f||(f=a.querySelector(hl(c)),f||(t=P({src:t,async:!0},n),(n=wi.get(c))&&Md(t,n),f=a.createElement("script"),Pe(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function TM(t,n){Ea.M(t,n);var a=kr;if(a&&t){var r=be(a).hoistableScripts,c=jr(t),f=r.get(c);f||(f=a.querySelector(hl(c)),f||(t=P({src:t,async:!0,type:"module"},n),(n=wi.get(c))&&Md(t,n),f=a.createElement("script"),Pe(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function p_(t,n,a,r){var c=(c=Yt.current)?ul(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Xr(a.href),n=be(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Xr(a.href);var f=be(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(fl(t)))?f._p||(_.instance=f,_.state.loading=5):(f=wi.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wi.set(t,f)),AM(c,t,f,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=jr(a),n=be(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Xr(t){return'href="'+Si(t)+'"'}function fl(t){return'link[rel="stylesheet"]['+t+"]"}function m_(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function AM(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ze]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Ze]=!0,n.onload=n.onerror=ua.bind(null,n),Un(n,"link",a),Pe(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function jr(t){return'[src="'+Si(t)+'"]'}function hl(t){return"script[async]"+t}function x_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Si(a.href)+'"]');if(r)return n.instance=r,Pe(r),r;var c=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Pe(r),Un(r,"style",c),ru(r,a.precedence,t),n.instance=r;case"stylesheet":c=Xr(a.href);var f=t.querySelector(fl(c));if(f)return n.state.loading|=4,n.instance=f,Pe(f),f;r=m_(a),(c=wi.get(c))&&bd(r,c),f=(t.ownerDocument||t).createElement("link"),Pe(f);var _=f;return _._p=new Promise(function(E,I){_.onload=E,_.onerror=I}),Un(f,"link",r),n.state.loading|=4,ru(f,a.precedence,t),n.instance=f;case"script":return f=jr(a.src),(c=t.querySelector(hl(f)))?(n.instance=c,Pe(c),c):(r=a,(c=wi.get(f))&&(r=P({},a),Md(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),Pe(c),Un(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ru(r,a.precedence,t));return n.instance}function ru(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var E=r[_];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function bd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ou=null;function g_(t,n,a){if(ou===null){var r=new Map,c=ou=new Map;c.set(a,r)}else c=ou,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Le]||f[Ut]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var E=r.get(_);E?E.push(f):r.set(_,[f])}}return r}function Ed(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function CM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function __(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function v_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function y_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function S_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=y_(n),t.suspenseyImages.push(n)),t=DM.bind(t),n.decode().then(t,t))}function RM(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Xr(r.href),f=n.querySelector(fl(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=dl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Pe(f);return}f=n.ownerDocument||n,r=m_(r),(c=wi.get(c))&&bd(r,c),f=f.createElement("link"),Pe(f);var _=f;_._p=new Promise(function(E,I){_.onload=E,_.onerror=I}),Un(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=dl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var lu=0;function wM(t,n){return t.stylesheets&&t.count===0&&uu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&uu(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&lu===0&&(lu=62500*Yb());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&uu(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>lu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function b_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)uu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function dl(){this.count--,b_(this)}function DM(){this.imgCount--,b_(this)}var cu=null;function uu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cu=new Map,n.forEach(NM,t),cu=null,dl.call(t))}function NM(t,n){if(!(n.state.loading&4)){var a=cu.get(t);if(a)var r=a.get(null);else{a=new Map,cu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=dl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var qr={$$typeof:ft,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function UM(t,n,a,r,c,f,_,E,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Co(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.hiddenUpdates=Co(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function M_(t,n,a,r,c,f,_,E,I,Z,st,gt){return t=new UM(t,n,a,_,I,Z,st,gt,E),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),t.current=f,f.stateNode=t,n=Bf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},kf(f),t}function E_(t){return t?(t=_r,t):_r}function T_(t,n,a,r,c,f){c=E_(c),r.context===null?r.context=c:r.pendingContext=c,r=Qa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ja(t,r,n),a!==null&&(ti(a,t,n),Xo(a,t,n))}function A_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Td(t,n){A_(t,n),(t=t.alternate)&&A_(t,n)}function C_(t){if(t.tag===13||t.tag===31){var n=Ls(t,67108864);n!==null&&ti(n,t,67108864),Td(t,67108864)}}function R_(t){if(t.tag===13||t.tag===31){var n=hi();n=K(n);var a=Ls(t,n);a!==null&&ti(a,t,n),Td(t,n)}}var Yr=!0;function LM(t,n,a,r){var c=At.T;At.T=null;var f=kt.p;try{kt.p=2,Ad(t,n,a,r)}finally{kt.p=f,At.T=c}}function OM(t,n,a,r){var c=At.T;At.T=null;var f=kt.p;try{kt.p=8,Ad(t,n,a,r)}finally{kt.p=f,At.T=c}}function Ad(t,n,a,r){if(Yr){var c=Cd(r);if(c===null)od(t,n,r,fu,a),D_(t,r);else if(zM(c,t,n,a,r))r.stopPropagation();else if(D_(t,r),n&4&&-1<PM.indexOf(t)){for(;c!==null;){var f=Kt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=yi(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var I=1<<31-Gn(_);E.entanglements[1]|=I,_&=~I}na(f),(Be&6)===0&&(Kc=z()+500,rl(0))}}break;case 31:case 13:E=Ls(f,2),E!==null&&ti(E,f,2),$c(),Td(f,2)}if(f=Cd(r),f===null&&od(t,n,r,fu,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else od(t,n,r,null,a)}}function Cd(t){return t=hf(t),Rd(t)}var fu=null;function Rd(t){if(fu=null,t=Ne(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return fu=t,null}function w_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(St()){case Ct:return 2;case Rt:return 8;case bt:case mt:return 32;case jt:return 268435456;default:return 32}default:return 32}}var wd=!1,us=null,fs=null,hs=null,pl=new Map,ml=new Map,ds=[],PM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function D_(t,n){switch(t){case"focusin":case"focusout":us=null;break;case"dragenter":case"dragleave":fs=null;break;case"mouseover":case"mouseout":hs=null;break;case"pointerover":case"pointerout":pl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(n.pointerId)}}function xl(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Kt(n),n!==null&&C_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function zM(t,n,a,r,c){switch(n){case"focusin":return us=xl(us,t,n,a,r,c),!0;case"dragenter":return fs=xl(fs,t,n,a,r,c),!0;case"mouseover":return hs=xl(hs,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return pl.set(f,xl(pl.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,ml.set(f,xl(ml.get(f)||null,t,n,a,r,c)),!0}return!1}function N_(t){var n=Ne(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,J(t.priority,function(){R_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,J(t.priority,function(){R_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Cd(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);ff=r,a.target.dispatchEvent(r),ff=null}else return n=Kt(a),n!==null&&C_(n),t.blockedOn=a,!1;n.shift()}return!0}function U_(t,n,a){hu(t)&&a.delete(n)}function IM(){wd=!1,us!==null&&hu(us)&&(us=null),fs!==null&&hu(fs)&&(fs=null),hs!==null&&hu(hs)&&(hs=null),pl.forEach(U_),ml.forEach(U_)}function du(t,n){t.blockedOn===n&&(t.blockedOn=null,wd||(wd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,IM)))}var pu=null;function L_(t){pu!==t&&(pu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){pu===t&&(pu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Rd(r||a)===null)continue;break}var f=Kt(a);f!==null&&(t.splice(n,3),n-=3,uh(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Wr(t){function n(I){return du(I,t)}us!==null&&du(us,t),fs!==null&&du(fs,t),hs!==null&&du(hs,t),pl.forEach(n),ml.forEach(n);for(var a=0;a<ds.length;a++){var r=ds[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ds.length&&(a=ds[0],a.blockedOn===null);)N_(a),a.blockedOn===null&&ds.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[zt]||null;if(typeof f=="function")_||L_(a);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[zt]||null)E=_.formAction;else if(Rd(c)!==null)continue}else E=_.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),L_(a)}}}function O_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Dd(t){this._internalRoot=t}mu.prototype.render=Dd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=hi();T_(a,r,t,n,null,null)},mu.prototype.unmount=Dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;T_(t.current,2,null,t,null,null),$c(),n[Ht]=null}};function mu(t){this._internalRoot=t}mu.prototype.unstable_scheduleHydration=function(t){if(t){var n=ut();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ds.length&&n!==0&&n<ds[a].priority;a++);ds.splice(a,0,t),a===0&&N_(t)}};var P_=e.version;if(P_!=="19.3.1")throw Error(s(527,P_,"19.3.1"));kt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var FM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:At,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{Ue=xu.inject(FM),tn=xu}catch{}}return _l.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=Ex,f=Tx,_=Ax;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=M_(t,1,!1,null,null,a,r,null,c,f,_,O_),t[Ht]=n.current,rd(t),new Dd(n)},_l.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=Ex,_=Tx,E=Ax,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=M_(t,1,!0,n,a??null,r,c,I,f,_,E,O_),n.context=E_(null),a=n.current,r=hi(),r=K(r),c=Qa(r),c.callback=null,Ja(a,c,r),a=r,n.current.lanes=a,Ds(n,a),na(n),t[Ht]=n.current,rd(t),new mu(n)},_l.version="19.3.1",_l}var j_;function WM(){if(j_)return Ud.exports;j_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ud.exports=YM(),Ud.exports}var ZM=WM(),se=fm();const hm="181",ho={ROTATE:0,DOLLY:1,PAN:2},uo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},KM=0,q_=1,QM=2,uy=1,JM=2,Na=3,Fa=0,ai=1,aa=2,za=0,po=1,Y_=2,W_=3,Z_=4,$M=5,ir=100,t1=101,e1=102,n1=103,i1=104,a1=200,s1=201,r1=202,o1=203,vp=204,yp=205,l1=206,c1=207,u1=208,f1=209,h1=210,d1=211,p1=212,m1=213,x1=214,Sp=0,bp=1,Mp=2,xo=3,Ep=4,Tp=5,Ap=6,Cp=7,fy=0,g1=1,_1=2,Ts=0,v1=1,y1=2,S1=3,hy=4,b1=5,M1=6,E1=7,dy=300,go=301,_o=302,Rp=303,wp=304,nf=306,Ku=1e3,La=1001,Dp=1002,_i=1003,T1=1004,gu=1005,gi=1006,Id=1007,Ms=1008,la=1009,py=1010,my=1011,Ul=1012,dm=1013,or=1014,Oa=1015,bo=1016,pm=1017,mm=1018,Ll=1020,xy=35902,gy=35899,_y=1021,vy=1022,Li=1023,Ol=1026,Pl=1027,yy=1028,xm=1029,gm=1030,_m=1031,vm=1033,ku=33776,Xu=33777,ju=33778,qu=33779,Np=35840,Up=35841,Lp=35842,Op=35843,Pp=36196,zp=37492,Ip=37496,Fp=37808,Bp=37809,Hp=37810,Vp=37811,Gp=37812,kp=37813,Xp=37814,jp=37815,qp=37816,Yp=37817,Wp=37818,Zp=37819,Kp=37820,Qp=37821,Jp=36492,$p=36494,tm=36495,em=36283,nm=36284,im=36285,am=36286,A1=3200,C1=3201,R1=0,w1=1,Ua="",ii="srgb",vo="srgb-linear",Qu="linear",qe="srgb",Zr=7680,K_=519,D1=512,N1=513,U1=514,Sy=515,L1=516,O1=517,P1=518,z1=519,Q_=35044,J_="300 es",sa=2e3,Ju=2001;function by(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function zl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function I1(){const o=zl("canvas");return o.style.display="block",o}const $_={};function tv(...o){const e="THREE."+o.shift();console.log(e,...o)}function de(...o){const e="THREE."+o.shift();console.warn(e,...o)}function rn(...o){const e="THREE."+o.shift();console.error(e,...o)}function Il(...o){const e=o.join(" ");e in $_||($_[e]=!0,de(...o))}function F1(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class cr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=Math.PI/180,sm=180/Math.PI;function Hl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function Ce(o,e,i){return Math.max(e,Math.min(i,o))}function B1(o,e){return(o%e+e)%e}function Fd(o,e,i){return(1-i)*o+i*e}function vl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ei(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const H1={DEG2RAD:Yu};class pe{constructor(e=0,i=0){pe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ce(this.x,e.x,i.x),this.y=Ce(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ce(this.x,e,i),this.y=Ce(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ce(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ba{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],x=s[l+3],y=u[h+0],b=u[h+1],M=u[h+2],A=u[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x;return}if(d>=1){e[i+0]=y,e[i+1]=b,e[i+2]=M,e[i+3]=A;return}if(x!==A||m!==y||p!==b||g!==M){let S=m*y+p*b+g*M+x*A;S<0&&(y=-y,b=-b,M=-M,A=-A,S=-S);let v=1-d;if(S<.9995){const N=Math.acos(S),L=Math.sin(N);v=Math.sin(v*N)/L,d=Math.sin(d*N)/L,m=m*v+y*d,p=p*v+b*d,g=g*v+M*d,x=x*v+A*d}else{m=m*v+y*d,p=p*v+b*d,g=g*v+M*d,x=x*v+A*d;const N=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=N,p*=N,g*=N,x*=N}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],x=u[h],y=u[h+1],b=u[h+2],M=u[h+3];return e[i]=d*M+g*x+m*b-p*y,e[i+1]=m*M+g*y+p*x-d*b,e[i+2]=p*M+g*b+d*y-m*x,e[i+3]=g*M-d*x-m*y-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),x=d(u/2),y=m(s/2),b=m(l/2),M=m(u/2);switch(h){case"XYZ":this._x=y*g*x+p*b*M,this._y=p*b*x-y*g*M,this._z=p*g*M+y*b*x,this._w=p*g*x-y*b*M;break;case"YXZ":this._x=y*g*x+p*b*M,this._y=p*b*x-y*g*M,this._z=p*g*M-y*b*x,this._w=p*g*x+y*b*M;break;case"ZXY":this._x=y*g*x-p*b*M,this._y=p*b*x+y*g*M,this._z=p*g*M+y*b*x,this._w=p*g*x-y*b*M;break;case"ZYX":this._x=y*g*x-p*b*M,this._y=p*b*x+y*g*M,this._z=p*g*M-y*b*x,this._w=p*g*x+y*b*M;break;case"YZX":this._x=y*g*x+p*b*M,this._y=p*b*x+y*g*M,this._z=p*g*M-y*b*x,this._w=p*g*x-y*b*M;break;case"XZY":this._x=y*g*x-p*b*M,this._y=p*b*x-y*g*M,this._z=p*g*M+y*b*x,this._w=p*g*x+y*b*M;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],y=s+d+x;if(y>0){const b=.5/Math.sqrt(y+1);this._w=.25/b,this._x=(g-m)*b,this._y=(u-p)*b,this._z=(h-l)*b}else if(s>d&&s>x){const b=2*Math.sqrt(1+s-d-x);this._w=(g-m)/b,this._x=.25*b,this._y=(l+h)/b,this._z=(u+p)/b}else if(d>x){const b=2*Math.sqrt(1+d-s-x);this._w=(u-p)/b,this._x=(l+h)/b,this._y=.25*b,this._z=(m+g)/b}else{const b=2*Math.sqrt(1+x-s-d);this._w=(h-l)/b,this._x=(u+p)/b,this._y=(m+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ce(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,u=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(e=0,i=0,s=0){tt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(ev.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(ev.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),g=2*(d*i-u*l),x=2*(u*s-h*i);return this.x=i+m*p+h*x-d*g,this.y=s+m*g+d*p-u*x,this.z=l+m*x+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ce(this.x,e.x,i.x),this.y=Ce(this.y,e.y,i.y),this.z=Ce(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ce(this.x,e,i),this.y=Ce(this.y,e,i),this.z=Ce(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Bd.copy(this).projectOnVector(e),this.sub(Bd)}reflect(e){return this.sub(Bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ce(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bd=new tt,ev=new Ba;class ge{constructor(e,i,s,l,u,h,d,m,p){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],x=s[7],y=s[2],b=s[5],M=s[8],A=l[0],S=l[3],v=l[6],N=l[1],L=l[4],F=l[7],V=l[2],O=l[5],P=l[8];return u[0]=h*A+d*N+m*V,u[3]=h*S+d*L+m*O,u[6]=h*v+d*F+m*P,u[1]=p*A+g*N+x*V,u[4]=p*S+g*L+x*O,u[7]=p*v+g*F+x*P,u[2]=y*A+b*N+M*V,u[5]=y*S+b*L+M*O,u[8]=y*v+b*F+M*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=g*h-d*p,y=d*m-g*u,b=p*u-h*m,M=i*x+s*y+l*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=x*A,e[1]=(l*p-g*s)*A,e[2]=(d*s-l*h)*A,e[3]=y*A,e[4]=(g*i-l*m)*A,e[5]=(l*u-d*i)*A,e[6]=b*A,e[7]=(s*m-p*i)*A,e[8]=(h*i-s*u)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Hd.makeScale(e,i)),this}rotate(e){return this.premultiply(Hd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Hd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hd=new ge,nv=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iv=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function V1(){const o={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===qe&&(l.r=Ia(l.r),l.g=Ia(l.g),l.b=Ia(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===qe&&(l.r=mo(l.r),l.g=mo(l.g),l.b=mo(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ua?Qu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Il("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Il("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[vo]:{primaries:e,whitePoint:s,transfer:Qu,toXYZ:nv,fromXYZ:iv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:s,transfer:qe,toXYZ:nv,fromXYZ:iv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),o}const ze=V1();function Ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function mo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Kr;class G1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Kr===void 0&&(Kr=zl("canvas")),Kr.width=e.width,Kr.height=e.height;const l=Kr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Kr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=zl("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ia(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ia(i[s]/255)*255):i[s]=Ia(i[s]);return{data:i,width:e.width,height:e.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let k1=0;class ym{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=Hl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Vd(l[h].image)):u.push(Vd(l[h]))}else u=Vd(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function Vd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?G1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}let X1=0;const Gd=new tt;class Hn extends cr{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=La,l=La,u=gi,h=Ms,d=Li,m=la,p=Hn.DEFAULT_ANISOTROPY,g=Ua){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=Hl(),this.name="",this.source=new ym(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gd).x}get height(){return this.source.getSize(Gd).y}get depth(){return this.source.getSize(Gd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){de(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){de(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ku:e.x=e.x-Math.floor(e.x);break;case La:e.x=e.x<0?0:1;break;case Dp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ku:e.y=e.y-Math.floor(e.y);break;case La:e.y=e.y<0?0:1;break;case Dp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=dy;Hn.DEFAULT_ANISOTROPY=1;class un{constructor(e=0,i=0,s=0,l=1){un.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],g=m[4],x=m[8],y=m[1],b=m[5],M=m[9],A=m[2],S=m[6],v=m[10];if(Math.abs(g-y)<.01&&Math.abs(x-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(x+A)<.1&&Math.abs(M+S)<.1&&Math.abs(p+b+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,F=(b+1)/2,V=(v+1)/2,O=(g+y)/4,P=(x+A)/4,Y=(M+S)/4;return L>F&&L>V?L<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(L),l=O/s,u=P/s):F>V?F<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(F),s=O/l,u=Y/l):V<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(V),s=P/u,l=Y/u),this.set(s,l,u,i),this}let N=Math.sqrt((S-M)*(S-M)+(x-A)*(x-A)+(y-g)*(y-g));return Math.abs(N)<.001&&(N=1),this.x=(S-M)/N,this.y=(x-A)/N,this.z=(y-g)/N,this.w=Math.acos((p+b+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ce(this.x,e.x,i.x),this.y=Ce(this.y,e.y,i.y),this.z=Ce(this.z,e.z,i.z),this.w=Ce(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ce(this.x,e,i),this.y=Ce(this.y,e,i),this.z=Ce(this.z,e,i),this.w=Ce(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class j1 extends cr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i);const l={width:e,height:i,depth:s.depth},u=new Hn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:gi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new ym(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends j1{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class My extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class q1 extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vl{constructor(e=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Vi):Vi.fromBufferAttribute(u,h),Vi.applyMatrix4(e.matrixWorld),this.expandByPoint(Vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_u.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),_u.copy(s.boundingBox)),_u.applyMatrix4(e.matrixWorld),this.union(_u)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yl),vu.subVectors(this.max,yl),Qr.subVectors(e.a,yl),Jr.subVectors(e.b,yl),$r.subVectors(e.c,yl),ms.subVectors(Jr,Qr),xs.subVectors($r,Jr),Qs.subVectors(Qr,$r);let i=[0,-ms.z,ms.y,0,-xs.z,xs.y,0,-Qs.z,Qs.y,ms.z,0,-ms.x,xs.z,0,-xs.x,Qs.z,0,-Qs.x,-ms.y,ms.x,0,-xs.y,xs.x,0,-Qs.y,Qs.x,0];return!kd(i,Qr,Jr,$r,vu)||(i=[1,0,0,0,1,0,0,0,1],!kd(i,Qr,Jr,$r,vu))?!1:(yu.crossVectors(ms,xs),i=[yu.x,yu.y,yu.z],kd(i,Qr,Jr,$r,vu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ta=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Vi=new tt,_u=new Vl,Qr=new tt,Jr=new tt,$r=new tt,ms=new tt,xs=new tt,Qs=new tt,yl=new tt,vu=new tt,yu=new tt,Js=new tt;function kd(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){Js.fromArray(o,u);const d=l.x*Math.abs(Js.x)+l.y*Math.abs(Js.y)+l.z*Math.abs(Js.z),m=e.dot(Js),p=i.dot(Js),g=s.dot(Js);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Y1=new Vl,Sl=new tt,Xd=new tt;class Gl{constructor(e=new tt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Y1.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sl.subVectors(e,this.center);const i=Sl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Sl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sl.copy(e.center).add(Xd)),this.expandByPoint(Sl.copy(e.center).sub(Xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Aa=new tt,jd=new tt,Su=new tt,gs=new tt,qd=new tt,bu=new tt,Yd=new tt;class kl{constructor(e=new tt,i=new tt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Aa.copy(this.origin).addScaledVector(this.direction,i),Aa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){jd.copy(e).add(i).multiplyScalar(.5),Su.copy(i).sub(e).normalize(),gs.copy(this.origin).sub(jd);const u=e.distanceTo(i)*.5,h=-this.direction.dot(Su),d=gs.dot(this.direction),m=-gs.dot(Su),p=gs.lengthSq(),g=Math.abs(1-h*h);let x,y,b,M;if(g>0)if(x=h*m-d,y=h*d-m,M=u*g,x>=0)if(y>=-M)if(y<=M){const A=1/g;x*=A,y*=A,b=x*(x+h*y+2*d)+y*(h*x+y+2*m)+p}else y=u,x=Math.max(0,-(h*y+d)),b=-x*x+y*(y+2*m)+p;else y=-u,x=Math.max(0,-(h*y+d)),b=-x*x+y*(y+2*m)+p;else y<=-M?(x=Math.max(0,-(-h*u+d)),y=x>0?-u:Math.min(Math.max(-u,-m),u),b=-x*x+y*(y+2*m)+p):y<=M?(x=0,y=Math.min(Math.max(-u,-m),u),b=y*(y+2*m)+p):(x=Math.max(0,-(h*u+d)),y=x>0?u:Math.min(Math.max(-u,-m),u),b=-x*x+y*(y+2*m)+p);else y=h>0?-u:u,x=Math.max(0,-(h*y+d)),b=-x*x+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(jd).addScaledVector(Su,y),b}intersectSphere(e,i){Aa.subVectors(e.center,this.origin);const s=Aa.dot(this.direction),l=Aa.dot(Aa)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),g>=0?(u=(e.min.y-y.y)*g,h=(e.max.y-y.y)*g):(u=(e.max.y-y.y)*g,h=(e.min.y-y.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-y.z)*x,m=(e.max.z-y.z)*x):(d=(e.max.z-y.z)*x,m=(e.min.z-y.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Aa)!==null}intersectTriangle(e,i,s,l,u){qd.subVectors(i,e),bu.subVectors(s,e),Yd.crossVectors(qd,bu);let h=this.direction.dot(Yd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;gs.subVectors(this.origin,e);const m=d*this.direction.dot(bu.crossVectors(gs,bu));if(m<0)return null;const p=d*this.direction.dot(qd.cross(gs));if(p<0||m+p>h)return null;const g=-d*gs.dot(Yd);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,i,s,l,u,h,d,m,p,g,x,y,b,M,A,S){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,g,x,y,b,M,A,S)}set(e,i,s,l,u,h,d,m,p,g,x,y,b,M,A,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=x,v[14]=y,v[3]=b,v[7]=M,v[11]=A,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/to.setFromMatrixColumn(e,0).length(),u=1/to.setFromMatrixColumn(e,1).length(),h=1/to.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const y=h*g,b=h*x,M=d*g,A=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=b+M*p,i[5]=y-A*p,i[9]=-d*m,i[2]=A-y*p,i[6]=M+b*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*g,b=m*x,M=p*g,A=p*x;i[0]=y+A*d,i[4]=M*d-b,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=b*d-M,i[6]=A+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*g,b=m*x,M=p*g,A=p*x;i[0]=y-A*d,i[4]=-h*x,i[8]=M+b*d,i[1]=b+M*d,i[5]=h*g,i[9]=A-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*g,b=h*x,M=d*g,A=d*x;i[0]=m*g,i[4]=M*p-b,i[8]=y*p+A,i[1]=m*x,i[5]=A*p+y,i[9]=b*p-M,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,b=h*p,M=d*m,A=d*p;i[0]=m*g,i[4]=A-y*x,i[8]=M*x+b,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=b*x+M,i[10]=y-A*x}else if(e.order==="XZY"){const y=h*m,b=h*p,M=d*m,A=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=y*x+A,i[5]=h*g,i[9]=b*x-M,i[2]=M*x-b,i[6]=d*g,i[10]=A*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W1,e,Z1)}lookAt(e,i,s){const l=this.elements;return pi.subVectors(e,i),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),_s.crossVectors(s,pi),_s.lengthSq()===0&&(Math.abs(s.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),_s.crossVectors(s,pi)),_s.normalize(),Mu.crossVectors(pi,_s),l[0]=_s.x,l[4]=Mu.x,l[8]=pi.x,l[1]=_s.y,l[5]=Mu.y,l[9]=pi.y,l[2]=_s.z,l[6]=Mu.z,l[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],x=s[5],y=s[9],b=s[13],M=s[2],A=s[6],S=s[10],v=s[14],N=s[3],L=s[7],F=s[11],V=s[15],O=l[0],P=l[4],Y=l[8],D=l[12],w=l[1],k=l[5],at=l[9],ot=l[13],_t=l[2],ft=l[6],j=l[10],rt=l[14],q=l[3],vt=l[7],dt=l[11],qt=l[15];return u[0]=h*O+d*w+m*_t+p*q,u[4]=h*P+d*k+m*ft+p*vt,u[8]=h*Y+d*at+m*j+p*dt,u[12]=h*D+d*ot+m*rt+p*qt,u[1]=g*O+x*w+y*_t+b*q,u[5]=g*P+x*k+y*ft+b*vt,u[9]=g*Y+x*at+y*j+b*dt,u[13]=g*D+x*ot+y*rt+b*qt,u[2]=M*O+A*w+S*_t+v*q,u[6]=M*P+A*k+S*ft+v*vt,u[10]=M*Y+A*at+S*j+v*dt,u[14]=M*D+A*ot+S*rt+v*qt,u[3]=N*O+L*w+F*_t+V*q,u[7]=N*P+L*k+F*ft+V*vt,u[11]=N*Y+L*at+F*j+V*dt,u[15]=N*D+L*ot+F*rt+V*qt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],x=e[6],y=e[10],b=e[14],M=e[3],A=e[7],S=e[11],v=e[15];return M*(+u*m*x-l*p*x-u*d*y+s*p*y+l*d*b-s*m*b)+A*(+i*m*b-i*p*y+u*h*y-l*h*b+l*p*g-u*m*g)+S*(+i*p*x-i*d*b-u*h*x+s*h*b+u*d*g-s*p*g)+v*(-l*d*g-i*m*x+i*d*y+l*h*x-s*h*y+s*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=e[9],y=e[10],b=e[11],M=e[12],A=e[13],S=e[14],v=e[15],N=x*S*p-A*y*p+A*m*b-d*S*b-x*m*v+d*y*v,L=M*y*p-g*S*p-M*m*b+h*S*b+g*m*v-h*y*v,F=g*A*p-M*x*p+M*d*b-h*A*b-g*d*v+h*x*v,V=M*x*m-g*A*m-M*d*y+h*A*y+g*d*S-h*x*S,O=i*N+s*L+l*F+u*V;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/O;return e[0]=N*P,e[1]=(A*y*u-x*S*u-A*l*b+s*S*b+x*l*v-s*y*v)*P,e[2]=(d*S*u-A*m*u+A*l*p-s*S*p-d*l*v+s*m*v)*P,e[3]=(x*m*u-d*y*u-x*l*p+s*y*p+d*l*b-s*m*b)*P,e[4]=L*P,e[5]=(g*S*u-M*y*u+M*l*b-i*S*b-g*l*v+i*y*v)*P,e[6]=(M*m*u-h*S*u-M*l*p+i*S*p+h*l*v-i*m*v)*P,e[7]=(h*y*u-g*m*u+g*l*p-i*y*p-h*l*b+i*m*b)*P,e[8]=F*P,e[9]=(M*x*u-g*A*u-M*s*b+i*A*b+g*s*v-i*x*v)*P,e[10]=(h*A*u-M*d*u+M*s*p-i*A*p-h*s*v+i*d*v)*P,e[11]=(g*d*u-h*x*u-g*s*p+i*x*p+h*s*b-i*d*b)*P,e[12]=V*P,e[13]=(g*A*l-M*x*l+M*s*y-i*A*y-g*s*S+i*x*S)*P,e[14]=(M*d*l-h*A*l-M*s*m+i*A*m+h*s*S-i*d*S)*P,e[15]=(h*x*l-g*d*l+g*s*m-i*x*m-h*s*y+i*d*y)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,x=d+d,y=u*p,b=u*g,M=u*x,A=h*g,S=h*x,v=d*x,N=m*p,L=m*g,F=m*x,V=s.x,O=s.y,P=s.z;return l[0]=(1-(A+v))*V,l[1]=(b+F)*V,l[2]=(M-L)*V,l[3]=0,l[4]=(b-F)*O,l[5]=(1-(y+v))*O,l[6]=(S+N)*O,l[7]=0,l[8]=(M+L)*P,l[9]=(S-N)*P,l[10]=(1-(y+A))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=to.set(l[0],l[1],l[2]).length();const h=to.set(l[4],l[5],l[6]).length(),d=to.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Gi.copy(this);const p=1/u,g=1/h,x=1/d;return Gi.elements[0]*=p,Gi.elements[1]*=p,Gi.elements[2]*=p,Gi.elements[4]*=g,Gi.elements[5]*=g,Gi.elements[6]*=g,Gi.elements[8]*=x,Gi.elements[9]*=x,Gi.elements[10]*=x,i.setFromRotationMatrix(Gi),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=sa,m=!1){const p=this.elements,g=2*u/(i-e),x=2*u/(s-l),y=(i+e)/(i-e),b=(s+l)/(s-l);let M,A;if(m)M=u/(h-u),A=h*u/(h-u);else if(d===sa)M=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===Ju)M=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=x,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=sa,m=!1){const p=this.elements,g=2/(i-e),x=2/(s-l),y=-(i+e)/(i-e),b=-(s+l)/(s-l);let M,A;if(m)M=1/(h-u),A=h/(h-u);else if(d===sa)M=-2/(h-u),A=-(h+u)/(h-u);else if(d===Ju)M=-1/(h-u),A=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=x,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const to=new tt,Gi=new on,W1=new tt(0,0,0),Z1=new tt(1,1,1),_s=new tt,Mu=new tt,pi=new tt,av=new on,sv=new Ba;class Ha{constructor(e=0,i=0,s=0,l=Ha.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],y=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ce(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,b),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ce(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,b),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return av.makeRotationFromQuaternion(e),this.setFromRotationMatrix(av,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return sv.setFromEuler(this),this.setFromQuaternion(sv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ha.DEFAULT_ORDER="XYZ";class Sm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let K1=0;const rv=new tt,eo=new Ba,Ca=new on,Eu=new tt,bl=new tt,Q1=new tt,J1=new Ba,ov=new tt(1,0,0),lv=new tt(0,1,0),cv=new tt(0,0,1),uv={type:"added"},$1={type:"removed"},no={type:"childadded",child:null},Wd={type:"childremoved",child:null};class Wn extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=Hl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new tt,i=new Ha,s=new Ba,l=new tt(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new ge}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return eo.setFromAxisAngle(e,i),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,i){return eo.setFromAxisAngle(e,i),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(ov,e)}rotateY(e){return this.rotateOnAxis(lv,e)}rotateZ(e){return this.rotateOnAxis(cv,e)}translateOnAxis(e,i){return rv.copy(e).applyQuaternion(this.quaternion),this.position.add(rv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(ov,e)}translateY(e){return this.translateOnAxis(lv,e)}translateZ(e){return this.translateOnAxis(cv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ca.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Eu.copy(e):Eu.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ca.lookAt(bl,Eu,this.up):Ca.lookAt(Eu,bl,this.up),this.quaternion.setFromRotationMatrix(Ca),l&&(Ca.extractRotation(l.matrixWorld),eo.setFromRotationMatrix(Ca),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(rn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uv),no.child=e,this.dispatchEvent(no),no.child=null):rn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent($1),Wd.child=e,this.dispatchEvent(Wd),Wd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uv),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,e,Q1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,J1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),x=h(e.shapes),y=h(e.skeletons),b=h(e.animations),M=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),y.length>0&&(s.skeletons=y),b.length>0&&(s.animations=b),M.length>0&&(s.nodes=M)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new tt(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ki=new tt,Ra=new tt,Zd=new tt,wa=new tt,io=new tt,ao=new tt,fv=new tt,Kd=new tt,Qd=new tt,Jd=new tt,$d=new un,tp=new un,ep=new un;class Xi{constructor(e=new tt,i=new tt,s=new tt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),ki.subVectors(e,i),l.cross(ki);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){ki.subVectors(l,i),Ra.subVectors(s,i),Zd.subVectors(e,i);const h=ki.dot(ki),d=ki.dot(Ra),m=ki.dot(Zd),p=Ra.dot(Ra),g=Ra.dot(Zd),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const y=1/x,b=(p*m-d*g)*y,M=(h*g-d*m)*y;return u.set(1-b-M,M,b)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,wa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,wa.x),m.addScaledVector(h,wa.y),m.addScaledVector(d,wa.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return $d.setScalar(0),tp.setScalar(0),ep.setScalar(0),$d.fromBufferAttribute(e,i),tp.fromBufferAttribute(e,s),ep.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector($d,u.x),h.addScaledVector(tp,u.y),h.addScaledVector(ep,u.z),h}static isFrontFacing(e,i,s,l){return ki.subVectors(s,i),Ra.subVectors(e,i),ki.cross(Ra).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),ki.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Xi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Xi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;io.subVectors(l,s),ao.subVectors(u,s),Kd.subVectors(e,s);const m=io.dot(Kd),p=ao.dot(Kd);if(m<=0&&p<=0)return i.copy(s);Qd.subVectors(e,l);const g=io.dot(Qd),x=ao.dot(Qd);if(g>=0&&x<=g)return i.copy(l);const y=m*x-g*p;if(y<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(io,h);Jd.subVectors(e,u);const b=io.dot(Jd),M=ao.dot(Jd);if(M>=0&&b<=M)return i.copy(u);const A=b*p-m*M;if(A<=0&&p>=0&&M<=0)return d=p/(p-M),i.copy(s).addScaledVector(ao,d);const S=g*M-b*x;if(S<=0&&x-g>=0&&b-M>=0)return fv.subVectors(u,l),d=(x-g)/(x-g+(b-M)),i.copy(l).addScaledVector(fv,d);const v=1/(S+A+y);return h=A*v,d=y*v,i.copy(s).addScaledVector(io,h).addScaledVector(ao,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ey={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},Tu={h:0,s:0,l:0};function np(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ie{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=ze.workingColorSpace){return this.r=e,this.g=i,this.b=s,ze.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=ze.workingColorSpace){if(e=B1(e,1),i=Ce(i,0,1),s=Ce(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=np(h,u,e+1/3),this.g=np(h,u,e),this.b=np(h,u,e-1/3)}return ze.colorSpaceToWorking(this,l),this}setStyle(e,i=ii){function s(u){u!==void 0&&parseFloat(u)<1&&de("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:de("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);de("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ii){const s=Ey[e.toLowerCase()];return s!==void 0?this.setHex(s,i):de("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return ze.workingToColorSpace(In.copy(this),e),Math.round(Ce(In.r*255,0,255))*65536+Math.round(Ce(In.g*255,0,255))*256+Math.round(Ce(In.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=ze.workingColorSpace){ze.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,u=In.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=ze.workingColorSpace){return ze.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=ii){ze.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==ii?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+i,vs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(vs),e.getHSL(Tu);const s=Fd(vs.h,Tu.h,i),l=Fd(vs.s,Tu.s,i),u=Fd(vs.l,Tu.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Ie;Ie.NAMES=Ey;let tE=0;class Mo extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=Hl(),this.name="",this.type="Material",this.blending=po,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vp,this.blendDst=yp,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=K_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){de(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){de(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(s.blending=this.blending),this.side!==Fa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==vp&&(s.blendSrc=this.blendSrc),this.blendDst!==yp&&(s.blendDst=this.blendDst),this.blendEquation!==ir&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==xo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==K_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ty extends Mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ha,this.combine=fy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xn=new tt,Au=new pe;let eE=0;class ra{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Q_,this.updateRanges=[],this.gpuType=Oa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Au.fromBufferAttribute(this,i),Au.applyMatrix3(e),this.setXY(i,Au.x,Au.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=vl(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ei(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=vl(i,this.array)),i}setX(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=vl(i,this.array)),i}setY(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=vl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=vl(i,this.array)),i}setW(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),s=ei(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),s=ei(s,this.array),l=ei(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),s=ei(s,this.array),l=ei(l,this.array),u=ei(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Q_&&(e.usage=this.usage),e}}class Ay extends ra{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Cy extends ra{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class vn extends ra{constructor(e,i,s){super(new Float32Array(e),i,s)}}let nE=0;const Di=new on,ip=new Wn,so=new tt,mi=new Vl,Ml=new Vl,An=new tt;class si extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=Hl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(by(e)?Cy:Ay)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ge().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,i,s){return Di.makeTranslation(e,i,s),this.applyMatrix4(Di),this}scale(e,i,s){return Di.makeScale(e,i,s),this.applyMatrix4(Di),this}lookAt(e){return ip.lookAt(e),ip.updateMatrix(),this.applyMatrix4(ip.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new vn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];mi.setFromBufferAttribute(u),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(e){const s=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Ml.setFromBufferAttribute(d),this.morphTargetsRelative?(An.addVectors(mi.min,Ml.min),mi.expandByPoint(An),An.addVectors(mi.max,Ml.max),mi.expandByPoint(An)):(mi.expandByPoint(Ml.min),mi.expandByPoint(Ml.max))}mi.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)An.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(An));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)An.fromBufferAttribute(d,p),m&&(so.fromBufferAttribute(e,p),An.add(so)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&rn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){rn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ra(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<s.count;Y++)d[Y]=new tt,m[Y]=new tt;const p=new tt,g=new tt,x=new tt,y=new pe,b=new pe,M=new pe,A=new tt,S=new tt;function v(Y,D,w){p.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,D),x.fromBufferAttribute(s,w),y.fromBufferAttribute(u,Y),b.fromBufferAttribute(u,D),M.fromBufferAttribute(u,w),g.sub(p),x.sub(p),b.sub(y),M.sub(y);const k=1/(b.x*M.y-M.x*b.y);isFinite(k)&&(A.copy(g).multiplyScalar(M.y).addScaledVector(x,-b.y).multiplyScalar(k),S.copy(x).multiplyScalar(b.x).addScaledVector(g,-M.x).multiplyScalar(k),d[Y].add(A),d[D].add(A),d[w].add(A),m[Y].add(S),m[D].add(S),m[w].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let Y=0,D=N.length;Y<D;++Y){const w=N[Y],k=w.start,at=w.count;for(let ot=k,_t=k+at;ot<_t;ot+=3)v(e.getX(ot+0),e.getX(ot+1),e.getX(ot+2))}const L=new tt,F=new tt,V=new tt,O=new tt;function P(Y){V.fromBufferAttribute(l,Y),O.copy(V);const D=d[Y];L.copy(D),L.sub(V.multiplyScalar(V.dot(D))).normalize(),F.crossVectors(O,D);const k=F.dot(m[Y])<0?-1:1;h.setXYZW(Y,L.x,L.y,L.z,k)}for(let Y=0,D=N.length;Y<D;++Y){const w=N[Y],k=w.start,at=w.count;for(let ot=k,_t=k+at;ot<_t;ot+=3)P(e.getX(ot+0)),P(e.getX(ot+1)),P(e.getX(ot+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ra(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,b=s.count;y<b;y++)s.setXYZ(y,0,0,0);const l=new tt,u=new tt,h=new tt,d=new tt,m=new tt,p=new tt,g=new tt,x=new tt;if(e)for(let y=0,b=e.count;y<b;y+=3){const M=e.getX(y+0),A=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(s,M),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,S),d.add(g),m.add(g),p.add(g),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,b=i.count;y<b;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,x=d.normalized,y=new p.constructor(m.length*g);let b=0,M=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?b=m[A]*d.data.stride+d.offset:b=m[A]*g;for(let v=0;v<g;v++)y[M++]=p[b++]}return new ra(y,g,x)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new si,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,x=p.length;g<x;g++){const y=p[g],b=e(y,s);m.push(b)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,y=p.length;x<y;x++){const b=p[x];g.push(b.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],x=u[p];for(let y=0,b=x.length;y<b;y++)g.push(x[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hv=new on,$s=new kl,Cu=new Gl,dv=new tt,Ru=new tt,wu=new tt,Du=new tt,ap=new tt,Nu=new tt,pv=new tt,Uu=new tt;class vi extends Wn{constructor(e=new si,i=new Ty){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){Nu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],x=u[m];g!==0&&(ap.fromBufferAttribute(x,e),h?Nu.addScaledVector(ap,g):Nu.addScaledVector(ap.sub(i),g))}i.add(Nu)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Cu.copy(s.boundingSphere),Cu.applyMatrix4(u),$s.copy(e.ray).recast(e.near),!(Cu.containsPoint($s.origin)===!1&&($s.intersectSphere(Cu,dv)===null||$s.origin.distanceToSquared(dv)>(e.far-e.near)**2))&&(hv.copy(u).invert(),$s.copy(e.ray).applyMatrix4(hv),!(s.boundingBox!==null&&$s.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,$s)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,y=u.groups,b=u.drawRange;if(d!==null)if(Array.isArray(h))for(let M=0,A=y.length;M<A;M++){const S=y[M],v=h[S.materialIndex],N=Math.max(S.start,b.start),L=Math.min(d.count,Math.min(S.start+S.count,b.start+b.count));for(let F=N,V=L;F<V;F+=3){const O=d.getX(F),P=d.getX(F+1),Y=d.getX(F+2);l=Lu(this,v,e,s,p,g,x,O,P,Y),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,b.start),A=Math.min(d.count,b.start+b.count);for(let S=M,v=A;S<v;S+=3){const N=d.getX(S),L=d.getX(S+1),F=d.getX(S+2);l=Lu(this,h,e,s,p,g,x,N,L,F),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let M=0,A=y.length;M<A;M++){const S=y[M],v=h[S.materialIndex],N=Math.max(S.start,b.start),L=Math.min(m.count,Math.min(S.start+S.count,b.start+b.count));for(let F=N,V=L;F<V;F+=3){const O=F,P=F+1,Y=F+2;l=Lu(this,v,e,s,p,g,x,O,P,Y),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,b.start),A=Math.min(m.count,b.start+b.count);for(let S=M,v=A;S<v;S+=3){const N=S,L=S+1,F=S+2;l=Lu(this,h,e,s,p,g,x,N,L,F),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function iE(o,e,i,s,l,u,h,d){let m;if(e.side===ai?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===Fa,d),m===null)return null;Uu.copy(d),Uu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Uu);return p<i.near||p>i.far?null:{distance:p,point:Uu.clone(),object:o}}function Lu(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,Ru),o.getVertexPosition(m,wu),o.getVertexPosition(p,Du);const g=iE(o,e,i,s,Ru,wu,Du,pv);if(g){const x=new tt;Xi.getBarycoord(pv,Ru,wu,Du,x),l&&(g.uv=Xi.getInterpolatedAttribute(l,d,m,p,x,new pe)),u&&(g.uv1=Xi.getInterpolatedAttribute(u,d,m,p,x,new pe)),h&&(g.normal=Xi.getInterpolatedAttribute(h,d,m,p,x,new tt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new tt,materialIndex:0};Xi.getNormal(Ru,wu,Du,y.normal),g.face=y,g.barycoord=x}return g}class Xl extends si{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],x=[];let y=0,b=0;M("z","y","x",-1,-1,s,i,e,h,u,0),M("z","y","x",1,-1,s,i,-e,h,u,1),M("x","z","y",1,1,e,s,i,l,h,2),M("x","z","y",1,-1,e,s,-i,l,h,3),M("x","y","z",1,-1,e,i,s,l,u,4),M("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new vn(p,3)),this.setAttribute("normal",new vn(g,3)),this.setAttribute("uv",new vn(x,2));function M(A,S,v,N,L,F,V,O,P,Y,D){const w=F/P,k=V/Y,at=F/2,ot=V/2,_t=O/2,ft=P+1,j=Y+1;let rt=0,q=0;const vt=new tt;for(let dt=0;dt<j;dt++){const qt=dt*k-ot;for(let oe=0;oe<ft;oe++){const Ee=oe*w-at;vt[A]=Ee*N,vt[S]=qt*L,vt[v]=_t,p.push(vt.x,vt.y,vt.z),vt[A]=0,vt[S]=0,vt[v]=O>0?1:-1,g.push(vt.x,vt.y,vt.z),x.push(oe/P),x.push(1-dt/Y),rt+=1}}for(let dt=0;dt<Y;dt++)for(let qt=0;qt<P;qt++){const oe=y+qt+ft*dt,Ee=y+qt+ft*(dt+1),B=y+(qt+1)+ft*(dt+1),pt=y+(qt+1)+ft*dt;m.push(oe,Ee,pt),m.push(Ee,B,pt),q+=6}d.addGroup(b,q,D),b+=q,y+=rt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Yn(o){const e={};for(let i=0;i<o.length;i++){const s=yo(o[i]);for(const l in s)e[l]=s[l]}return e}function aE(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Ry(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const sE={clone:yo,merge:Yn};var rE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rE,this.fragmentShader=oE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=aE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class wy extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ys=new tt,mv=new pe,xv=new pe;class Ui extends wy{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=sm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sm*2*Math.atan(Math.tan(Yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ys.x,ys.y).multiplyScalar(-e/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ys.x,ys.y).multiplyScalar(-e/ys.z)}getViewSize(e,i){return this.getViewBounds(e,mv,xv),i.subVectors(xv,mv)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Yu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ro=-90,oo=1;class lE extends Wn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ui(ro,oo,e,i);l.layers=this.layers,this.add(l);const u=new Ui(ro,oo,e,i);u.layers=this.layers,this.add(u);const h=new Ui(ro,oo,e,i);h.layers=this.layers,this.add(h);const d=new Ui(ro,oo,e,i);d.layers=this.layers,this.add(d);const m=new Ui(ro,oo,e,i);m.layers=this.layers,this.add(m);const p=new Ui(ro,oo,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===sa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ju)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(x,y,b),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class Dy extends Hn{constructor(e=[],i=go,s,l,u,h,d,m,p,g){super(e,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cE extends lr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Dy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Xl(5,5,5),u=new Vn({name:"CubemapFromEquirect",uniforms:yo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ai,blending:za});u.uniforms.tEquirect.value=i;const h=new vi(l,u),d=i.minFilter;return i.minFilter===Ms&&(i.minFilter=gi),new lE(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}class Rl extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uE={type:"move"};class sp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const A of e.hand.values()){const S=i.getJointPose(A,s),v=this._getHandJoint(p,A);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=g.position.distanceTo(x.position),b=.02,M=.005;p.inputState.pinching&&y>b+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=b-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(uE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Rl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class fE extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ha,this.environmentIntensity=1,this.environmentRotation=new Ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Ny extends Hn{constructor(e=null,i=1,s=1,l,u,h,d,m,p=_i,g=_i,x,y){super(null,h,d,m,p,g,l,u,x,y),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rp=new tt,hE=new tt,dE=new ge;class Ss{constructor(e=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=rp.subVectors(s,i).cross(hE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(rp),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||dE.getNormalMatrix(e),l=this.coplanarPoint(rp).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Gl,pE=new pe(.5,.5),Ou=new tt;class Uy{constructor(e=new Ss,i=new Ss,s=new Ss,l=new Ss,u=new Ss,h=new Ss){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=sa,s=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],x=u[5],y=u[6],b=u[7],M=u[8],A=u[9],S=u[10],v=u[11],N=u[12],L=u[13],F=u[14],V=u[15];if(l[0].setComponents(p-h,b-g,v-M,V-N).normalize(),l[1].setComponents(p+h,b+g,v+M,V+N).normalize(),l[2].setComponents(p+d,b+x,v+A,V+L).normalize(),l[3].setComponents(p-d,b-x,v-A,V-L).normalize(),s)l[4].setComponents(m,y,S,F).normalize(),l[5].setComponents(p-m,b-y,v-S,V-F).normalize();else if(l[4].setComponents(p-m,b-y,v-S,V-F).normalize(),i===sa)l[5].setComponents(p+m,b+y,v+S,V+F).normalize();else if(i===Ju)l[5].setComponents(m,y,S,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),tr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){tr.center.set(0,0,0);const i=pE.distanceTo(e.center);return tr.radius=.7071067811865476+i,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ou.x=l.normal.x>0?e.max.x:e.min.x,Ou.y=l.normal.y>0?e.max.y:e.min.y,Ou.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ou)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ly extends Mo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $u=new tt,tf=new tt,gv=new on,El=new kl,Pu=new Gl,op=new tt,_v=new tt;class Oy extends Wn{constructor(e=new si,i=new Ly){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)$u.fromBufferAttribute(i,l-1),tf.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=$u.distanceTo(tf);e.setAttribute("lineDistance",new vn(s,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pu.copy(s.boundingSphere),Pu.applyMatrix4(l),Pu.radius+=u,e.ray.intersectsSphere(Pu)===!1)return;gv.copy(l).invert(),El.copy(e.ray).applyMatrix4(gv);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,y=s.attributes.position;if(g!==null){const b=Math.max(0,h.start),M=Math.min(g.count,h.start+h.count);for(let A=b,S=M-1;A<S;A+=p){const v=g.getX(A),N=g.getX(A+1),L=zu(this,e,El,m,v,N,A);L&&i.push(L)}if(this.isLineLoop){const A=g.getX(M-1),S=g.getX(b),v=zu(this,e,El,m,A,S,M-1);v&&i.push(v)}}else{const b=Math.max(0,h.start),M=Math.min(y.count,h.start+h.count);for(let A=b,S=M-1;A<S;A+=p){const v=zu(this,e,El,m,A,A+1,A);v&&i.push(v)}if(this.isLineLoop){const A=zu(this,e,El,m,M-1,b,M-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function zu(o,e,i,s,l,u,h){const d=o.geometry.attributes.position;if($u.fromBufferAttribute(d,l),tf.fromBufferAttribute(d,u),i.distanceSqToSegment($u,tf,op,_v)>s)return;op.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(op);if(!(p<e.near||p>e.far))return{distance:p,point:_v.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const vv=new tt,yv=new tt;class mE extends Oy{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)vv.fromBufferAttribute(i,l),yv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+vv.distanceTo(yv);e.setAttribute("lineDistance",new vn(s,1))}else de("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xE extends Oy{constructor(e,i){super(e,i),this.isLineLoop=!0,this.type="LineLoop"}}class gE extends Mo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sv=new on,rm=new kl,Iu=new Gl,Fu=new tt;class _E extends Wn{constructor(e=new si,i=new gE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Iu.copy(s.boundingSphere),Iu.applyMatrix4(l),Iu.radius+=u,e.ray.intersectsSphere(Iu)===!1)return;Sv.copy(l).invert(),rm.copy(e.ray).applyMatrix4(Sv);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,x=s.attributes.position;if(p!==null){const y=Math.max(0,h.start),b=Math.min(p.count,h.start+h.count);for(let M=y,A=b;M<A;M++){const S=p.getX(M);Fu.fromBufferAttribute(x,S),bv(Fu,S,m,l,e,i,this)}}else{const y=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let M=y,A=b;M<A;M++)Fu.fromBufferAttribute(x,M),bv(Fu,M,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function bv(o,e,i,s,l,u,h){const d=rm.distanceSqToPoint(o);if(d<i){const m=new tt;rm.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class Py extends Hn{constructor(e,i,s=or,l,u,h,d=_i,m=_i,p,g=Ol,x=1){if(g!==Ol&&g!==Pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:x};super(y,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ym(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class zy extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Eo extends si{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,x=e/d,y=i/m,b=[],M=[],A=[],S=[];for(let v=0;v<g;v++){const N=v*y-h;for(let L=0;L<p;L++){const F=L*x-u;M.push(F,-N,0),A.push(0,0,1),S.push(L/d),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let N=0;N<d;N++){const L=N+p*v,F=N+p*(v+1),V=N+1+p*(v+1),O=N+1+p*v;b.push(L,F,O),b.push(F,V,O)}this.setIndex(b),this.setAttribute("position",new vn(M,3)),this.setAttribute("normal",new vn(A,3)),this.setAttribute("uv",new vn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dl extends si{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],x=new tt,y=new tt,b=[],M=[],A=[],S=[];for(let v=0;v<=s;v++){const N=[],L=v/s;let F=0;v===0&&h===0?F=.5/i:v===s&&m===Math.PI&&(F=-.5/i);for(let V=0;V<=i;V++){const O=V/i;x.x=-e*Math.cos(l+O*u)*Math.sin(h+L*d),x.y=e*Math.cos(h+L*d),x.z=e*Math.sin(l+O*u)*Math.sin(h+L*d),M.push(x.x,x.y,x.z),y.copy(x).normalize(),A.push(y.x,y.y,y.z),S.push(O+F,1-L),N.push(p++)}g.push(N)}for(let v=0;v<s;v++)for(let N=0;N<i;N++){const L=g[v][N+1],F=g[v][N],V=g[v+1][N],O=g[v+1][N+1];(v!==0||h>0)&&b.push(L,F,O),(v!==s-1||m<Math.PI)&&b.push(F,V,O)}this.setIndex(b),this.setAttribute("position",new vn(M,3)),this.setAttribute("normal",new vn(A,3)),this.setAttribute("uv",new vn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vE extends Mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yE extends Mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lp={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class SE{constructor(e,i,s){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(g){d++,u===!1&&l.onStart!==void 0&&l.onStart(g,h,d),u=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,y=p.length;x<y;x+=2){const b=p[x],M=p[x+1];if(b.global&&(b.lastIndex=0),b.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const bE=new SE;class bm{constructor(e){this.manager=e!==void 0?e:bE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,u){s.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}bm.DEFAULT_MATERIAL_NAME="__DEFAULT";const lo=new WeakMap;class ME extends bm{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,h=lp.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)u.manager.itemStart(e),setTimeout(function(){i&&i(h),u.manager.itemEnd(e)},0);else{let x=lo.get(h);x===void 0&&(x=[],lo.set(h,x)),x.push({onLoad:i,onError:l})}return h}const d=zl("img");function m(){g(),i&&i(this);const x=lo.get(this)||[];for(let y=0;y<x.length;y++){const b=x[y];b.onLoad&&b.onLoad(this)}lo.delete(this),u.manager.itemEnd(e)}function p(x){g(),l&&l(x),lp.remove(`image:${e}`);const y=lo.get(this)||[];for(let b=0;b<y.length;b++){const M=y[b];M.onError&&M.onError(x)}lo.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),lp.add(`image:${e}`,d),u.manager.itemStart(e),d.src=e,d}}class EE extends bm{constructor(e){super(e)}load(e,i,s,l){const u=new Hn,h=new ME(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}class TE extends wy{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class AE extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Mv=new on;class CE{constructor(e,i,s=0,l=1/0){this.ray=new kl(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Sm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):rn("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Mv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mv),this}intersectObject(e,i=!0,s=[]){return om(e,this,s,i),s.sort(Ev),s}intersectObjects(e,i=!0,s=[]){for(let l=0,u=e.length;l<u;l++)om(e[l],this,s,i);return s.sort(Ev),s}}function Ev(o,e){return o.distance-e.distance}function om(o,e,i,s){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const u=o.children;for(let h=0,d=u.length;h<d;h++)om(u[h],e,i,!0)}}class Tv{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ce(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Ce(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class RE extends cr{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){de("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Av(o,e,i,s){const l=wE(s);switch(i){case _y:return o*e;case yy:return o*e/l.components*l.byteLength;case xm:return o*e/l.components*l.byteLength;case gm:return o*e*2/l.components*l.byteLength;case _m:return o*e*2/l.components*l.byteLength;case vy:return o*e*3/l.components*l.byteLength;case Li:return o*e*4/l.components*l.byteLength;case vm:return o*e*4/l.components*l.byteLength;case ku:case Xu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ju:case qu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Up:case Op:return Math.max(o,16)*Math.max(e,8)/4;case Np:case Lp:return Math.max(o,8)*Math.max(e,8)/2;case Pp:case zp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ip:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Fp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Bp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Hp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Vp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Gp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case kp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Xp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case jp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case qp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Yp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Wp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Zp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Kp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Qp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Jp:case $p:case tm:return Math.ceil(o/4)*Math.ceil(e/4)*16;case em:case nm:return Math.ceil(o/4)*Math.ceil(e/4)*8;case im:case am:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function wE(o){switch(o){case la:case py:return{byteLength:1,components:1};case Ul:case my:case bo:return{byteLength:2,components:1};case pm:case mm:return{byteLength:2,components:4};case or:case dm:case Oa:return{byteLength:4,components:1};case xy:case gy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hm}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hm);function Iy(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function DE(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,g),d.onUploadCallback();let b;if(p instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=o.SHORT;else if(p instanceof Uint32Array)b=o.UNSIGNED_INT;else if(p instanceof Int32Array)b=o.INT;else if(p instanceof Int8Array)b=o.BYTE;else if(p instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const g=m.array,x=m.updateRanges;if(o.bindBuffer(p,d),x.length===0)o.bufferSubData(p,0,g);else{x.sort((b,M)=>b.start-M.start);let y=0;for(let b=1;b<x.length;b++){const M=x[y],A=x[b];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++y,x[y]=A)}x.length=y+1;for(let b=0,M=x.length;b<M;b++){const A=x[b];o.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var NE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,HE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,t3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,e3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,i3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o3="gl_FragColor = linearToOutputTexel( gl_FragColor );",l3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,u3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,f3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,h3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,v3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,M3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,E3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,w3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,D3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,N3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,U3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,H3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Z3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,K3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_T=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ST=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ET=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$T=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,l2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ve={alphahash_fragment:NE,alphahash_pars_fragment:UE,alphamap_fragment:LE,alphamap_pars_fragment:OE,alphatest_fragment:PE,alphatest_pars_fragment:zE,aomap_fragment:IE,aomap_pars_fragment:FE,batching_pars_vertex:BE,batching_vertex:HE,begin_vertex:VE,beginnormal_vertex:GE,bsdfs:kE,iridescence_fragment:XE,bumpmap_pars_fragment:jE,clipping_planes_fragment:qE,clipping_planes_pars_fragment:YE,clipping_planes_pars_vertex:WE,clipping_planes_vertex:ZE,color_fragment:KE,color_pars_fragment:QE,color_pars_vertex:JE,color_vertex:$E,common:t3,cube_uv_reflection_fragment:e3,defaultnormal_vertex:n3,displacementmap_pars_vertex:i3,displacementmap_vertex:a3,emissivemap_fragment:s3,emissivemap_pars_fragment:r3,colorspace_fragment:o3,colorspace_pars_fragment:l3,envmap_fragment:c3,envmap_common_pars_fragment:u3,envmap_pars_fragment:f3,envmap_pars_vertex:h3,envmap_physical_pars_fragment:M3,envmap_vertex:d3,fog_vertex:p3,fog_pars_vertex:m3,fog_fragment:x3,fog_pars_fragment:g3,gradientmap_pars_fragment:_3,lightmap_pars_fragment:v3,lights_lambert_fragment:y3,lights_lambert_pars_fragment:S3,lights_pars_begin:b3,lights_toon_fragment:E3,lights_toon_pars_fragment:T3,lights_phong_fragment:A3,lights_phong_pars_fragment:C3,lights_physical_fragment:R3,lights_physical_pars_fragment:w3,lights_fragment_begin:D3,lights_fragment_maps:N3,lights_fragment_end:U3,logdepthbuf_fragment:L3,logdepthbuf_pars_fragment:O3,logdepthbuf_pars_vertex:P3,logdepthbuf_vertex:z3,map_fragment:I3,map_pars_fragment:F3,map_particle_fragment:B3,map_particle_pars_fragment:H3,metalnessmap_fragment:V3,metalnessmap_pars_fragment:G3,morphinstance_vertex:k3,morphcolor_vertex:X3,morphnormal_vertex:j3,morphtarget_pars_vertex:q3,morphtarget_vertex:Y3,normal_fragment_begin:W3,normal_fragment_maps:Z3,normal_pars_fragment:K3,normal_pars_vertex:Q3,normal_vertex:J3,normalmap_pars_fragment:$3,clearcoat_normal_fragment_begin:tT,clearcoat_normal_fragment_maps:eT,clearcoat_pars_fragment:nT,iridescence_pars_fragment:iT,opaque_fragment:aT,packing:sT,premultiplied_alpha_fragment:rT,project_vertex:oT,dithering_fragment:lT,dithering_pars_fragment:cT,roughnessmap_fragment:uT,roughnessmap_pars_fragment:fT,shadowmap_pars_fragment:hT,shadowmap_pars_vertex:dT,shadowmap_vertex:pT,shadowmask_pars_fragment:mT,skinbase_vertex:xT,skinning_pars_vertex:gT,skinning_vertex:_T,skinnormal_vertex:vT,specularmap_fragment:yT,specularmap_pars_fragment:ST,tonemapping_fragment:bT,tonemapping_pars_fragment:MT,transmission_fragment:ET,transmission_pars_fragment:TT,uv_pars_fragment:AT,uv_pars_vertex:CT,uv_vertex:RT,worldpos_vertex:wT,background_vert:DT,background_frag:NT,backgroundCube_vert:UT,backgroundCube_frag:LT,cube_vert:OT,cube_frag:PT,depth_vert:zT,depth_frag:IT,distanceRGBA_vert:FT,distanceRGBA_frag:BT,equirect_vert:HT,equirect_frag:VT,linedashed_vert:GT,linedashed_frag:kT,meshbasic_vert:XT,meshbasic_frag:jT,meshlambert_vert:qT,meshlambert_frag:YT,meshmatcap_vert:WT,meshmatcap_frag:ZT,meshnormal_vert:KT,meshnormal_frag:QT,meshphong_vert:JT,meshphong_frag:$T,meshphysical_vert:t2,meshphysical_frag:e2,meshtoon_vert:n2,meshtoon_frag:i2,points_vert:a2,points_frag:s2,shadow_vert:r2,shadow_frag:o2,sprite_vert:l2,sprite_frag:c2},Ft={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},ia={basic:{uniforms:Yn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Yn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Yn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Yn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Yn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Yn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Yn([Ft.points,Ft.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Yn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Yn([Ft.common,Ft.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Yn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Yn([Ft.sprite,Ft.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Yn([Ft.common,Ft.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Yn([Ft.lights,Ft.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};ia.physical={uniforms:Yn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Bu={r:0,b:0,g:0},er=new Ha,u2=new on;function f2(o,e,i,s,l,u,h){const d=new Ie(0);let m=u===!0?0:1,p,g,x=null,y=0,b=null;function M(L){let F=L.isScene===!0?L.background:null;return F&&F.isTexture&&(F=(L.backgroundBlurriness>0?i:e).get(F)),F}function A(L){let F=!1;const V=M(L);V===null?v(d,m):V&&V.isColor&&(v(V,1),F=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,h):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||F)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,F){const V=M(F);V&&(V.isCubeTexture||V.mapping===nf)?(g===void 0&&(g=new vi(new Xl(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:yo(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,P,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),er.copy(F.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(u2.makeRotationFromEuler(er)),g.material.toneMapped=ze.getTransfer(V.colorSpace)!==qe,(x!==V||y!==V.version||b!==o.toneMapping)&&(g.material.needsUpdate=!0,x=V,y=V.version,b=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new vi(new Eo(2,2),new Vn({name:"BackgroundMaterial",uniforms:yo(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=ze.getTransfer(V.colorSpace)!==qe,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(x!==V||y!==V.version||b!==o.toneMapping)&&(p.material.needsUpdate=!0,x=V,y=V.version,b=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,F){L.getRGB(Bu,Ry(o)),s.buffers.color.setClear(Bu.r,Bu.g,Bu.b,F,h)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,F=1){d.set(L),m=F,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(d,m)},render:A,addToRenderList:S,dispose:N}}function h2(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let u=l,h=!1;function d(w,k,at,ot,_t){let ft=!1;const j=x(ot,at,k);u!==j&&(u=j,p(u.object)),ft=b(w,ot,at,_t),ft&&M(w,ot,at,_t),_t!==null&&e.update(_t,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,F(w,k,at,ot),_t!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(_t).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function g(w){return o.deleteVertexArray(w)}function x(w,k,at){const ot=at.wireframe===!0;let _t=s[w.id];_t===void 0&&(_t={},s[w.id]=_t);let ft=_t[k.id];ft===void 0&&(ft={},_t[k.id]=ft);let j=ft[ot];return j===void 0&&(j=y(m()),ft[ot]=j),j}function y(w){const k=[],at=[],ot=[];for(let _t=0;_t<i;_t++)k[_t]=0,at[_t]=0,ot[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:at,attributeDivisors:ot,object:w,attributes:{},index:null}}function b(w,k,at,ot){const _t=u.attributes,ft=k.attributes;let j=0;const rt=at.getAttributes();for(const q in rt)if(rt[q].location>=0){const dt=_t[q];let qt=ft[q];if(qt===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(qt=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(qt=w.instanceColor)),dt===void 0||dt.attribute!==qt||qt&&dt.data!==qt.data)return!0;j++}return u.attributesNum!==j||u.index!==ot}function M(w,k,at,ot){const _t={},ft=k.attributes;let j=0;const rt=at.getAttributes();for(const q in rt)if(rt[q].location>=0){let dt=ft[q];dt===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(dt=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(dt=w.instanceColor));const qt={};qt.attribute=dt,dt&&dt.data&&(qt.data=dt.data),_t[q]=qt,j++}u.attributes=_t,u.attributesNum=j,u.index=ot}function A(){const w=u.newAttributes;for(let k=0,at=w.length;k<at;k++)w[k]=0}function S(w){v(w,0)}function v(w,k){const at=u.newAttributes,ot=u.enabledAttributes,_t=u.attributeDivisors;at[w]=1,ot[w]===0&&(o.enableVertexAttribArray(w),ot[w]=1),_t[w]!==k&&(o.vertexAttribDivisor(w,k),_t[w]=k)}function N(){const w=u.newAttributes,k=u.enabledAttributes;for(let at=0,ot=k.length;at<ot;at++)k[at]!==w[at]&&(o.disableVertexAttribArray(at),k[at]=0)}function L(w,k,at,ot,_t,ft,j){j===!0?o.vertexAttribIPointer(w,k,at,_t,ft):o.vertexAttribPointer(w,k,at,ot,_t,ft)}function F(w,k,at,ot){A();const _t=ot.attributes,ft=at.getAttributes(),j=k.defaultAttributeValues;for(const rt in ft){const q=ft[rt];if(q.location>=0){let vt=_t[rt];if(vt===void 0&&(rt==="instanceMatrix"&&w.instanceMatrix&&(vt=w.instanceMatrix),rt==="instanceColor"&&w.instanceColor&&(vt=w.instanceColor)),vt!==void 0){const dt=vt.normalized,qt=vt.itemSize,oe=e.get(vt);if(oe===void 0)continue;const Ee=oe.buffer,B=oe.type,pt=oe.bytesPerElement,Q=B===o.INT||B===o.UNSIGNED_INT||vt.gpuType===dm;if(vt.isInterleavedBufferAttribute){const et=vt.data,Tt=et.stride,Lt=vt.offset;if(et.isInstancedInterleavedBuffer){for(let Nt=0;Nt<q.locationSize;Nt++)v(q.location+Nt,et.meshPerAttribute);w.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Nt=0;Nt<q.locationSize;Nt++)S(q.location+Nt);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let Nt=0;Nt<q.locationSize;Nt++)L(q.location+Nt,qt/q.locationSize,B,dt,Tt*pt,(Lt+qt/q.locationSize*Nt)*pt,Q)}else{if(vt.isInstancedBufferAttribute){for(let et=0;et<q.locationSize;et++)v(q.location+et,vt.meshPerAttribute);w.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let et=0;et<q.locationSize;et++)S(q.location+et);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let et=0;et<q.locationSize;et++)L(q.location+et,qt/q.locationSize,B,dt,qt*pt,qt/q.locationSize*et*pt,Q)}}else if(j!==void 0){const dt=j[rt];if(dt!==void 0)switch(dt.length){case 2:o.vertexAttrib2fv(q.location,dt);break;case 3:o.vertexAttrib3fv(q.location,dt);break;case 4:o.vertexAttrib4fv(q.location,dt);break;default:o.vertexAttrib1fv(q.location,dt)}}}}N()}function V(){Y();for(const w in s){const k=s[w];for(const at in k){const ot=k[at];for(const _t in ot)g(ot[_t].object),delete ot[_t];delete k[at]}delete s[w]}}function O(w){if(s[w.id]===void 0)return;const k=s[w.id];for(const at in k){const ot=k[at];for(const _t in ot)g(ot[_t].object),delete ot[_t];delete k[at]}delete s[w.id]}function P(w){for(const k in s){const at=s[k];if(at[w.id]===void 0)continue;const ot=at[w.id];for(const _t in ot)g(ot[_t].object),delete ot[_t];delete at[w.id]}}function Y(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:D,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:S,disableUnusedAttributes:N}}function d2(o,e,i){let s;function l(p){s=p}function u(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,x){x!==0&&(o.drawArraysInstanced(s,p,g,x),i.update(g,s,x))}function d(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,x);let b=0;for(let M=0;M<x;M++)b+=g[M];i.update(b,s,1)}function m(p,g,x,y){if(x===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let M=0;M<p.length;M++)h(p[M],g[M],y[M]);else{b.multiDrawArraysInstancedWEBGL(s,p,0,g,0,y,0,x);let M=0;for(let A=0;A<x;A++)M+=g[A]*y[A];i.update(M,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function p2(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Li&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const Y=P===bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==la&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Oa&&!Y)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(de("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),F=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=M>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:y,maxTextures:b,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:F,vertexTextures:V,maxSamples:O}}function m2(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new Ss,d=new ge,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const b=x.length!==0||y||s!==0||l;return l=y,s=x.length,b},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){i=g(x,y,0)},this.setState=function(x,y,b){const M=x.clippingPlanes,A=x.clipIntersection,S=x.clipShadows,v=o.get(x);if(!l||M===null||M.length===0||u&&!S)u?g(null):p();else{const N=u?0:s,L=N*4;let F=v.clippingState||null;m.value=F,F=g(M,y,L,b);for(let V=0;V!==L;++V)F[V]=i[V];v.clippingState=F,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,y,b,M){const A=x!==null?x.length:0;let S=null;if(A!==0){if(S=m.value,M!==!0||S===null){const v=b+A*4,N=y.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,F=b;L!==A;++L,F+=4)h.copy(x[L]).applyMatrix4(N,d),h.normal.toArray(S,F),S[F+3]=h.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function x2(o){let e=new WeakMap;function i(h,d){return d===Rp?h.mapping=go:d===wp&&(h.mapping=_o),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Rp||d===wp)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new cE(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const Es=4,Cv=[.125,.215,.35,.446,.526,.582],ar=20,g2=256,Tl=new TE,Rv=new Ie;let cp=null,up=0,fp=0,hp=!1;const _2=new tt;class wv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=_2}=u;cp=this._renderer.getRenderTarget(),up=this._renderer.getActiveCubeFace(),fp=this._renderer.getActiveMipmapLevel(),hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cp,up,fp),this._renderer.xr.enabled=hp,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===go||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cp=this._renderer.getRenderTarget(),up=this._renderer.getActiveCubeFace(),fp=this._renderer.getActiveMipmapLevel(),hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:bo,format:Li,colorSpace:vo,depthBuffer:!1},l=Dv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dv(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=v2(u)),this._blurMaterial=S2(u,e,i),this._ggxMaterial=y2(u,e,i)}return l}_compileMaterial(e){const i=new vi(new si,e);this._renderer.compile(i,Tl)}_sceneToCubeUV(e,i,s,l,u){const m=new Ui(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,b=x.toneMapping;x.getClearColor(Rv),x.toneMapping=Ts,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vi(new Xl,new Ty({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let v=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,v=!0):(S.color.copy(Rv),v=!0);for(let L=0;L<6;L++){const F=L%3;F===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[L],u.y,u.z)):F===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[L]));const V=this._cubeSize;co(l,F*V,L>2?V:0,V,V),x.setRenderTarget(l),v&&x.render(A,m),x.render(e,m)}x.toneMapping=b,x.autoClear=y,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===go||e.mapping===_o;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nv());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;co(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Tl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),y=.05+p*.95,b=x*y,{_lodMax:M}=this,A=this._sizeLods[s],S=3*A*(s>M-Es?s-M+Es:0),v=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=M-i,co(u,S,v,3*A,2*A),l.setRenderTarget(u),l.render(d,Tl),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=M-s,co(e,S,v,3*A,2*A),l.setRenderTarget(e),l.render(d,Tl)}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&rn("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=p;const y=p.uniforms,b=this._sizeLods[s]-1,M=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*ar-1),A=u/M,S=isFinite(u)?1+Math.floor(g*A):ar;S>ar&&de(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ar}`);const v=[];let N=0;for(let P=0;P<ar;++P){const Y=P/A,D=Math.exp(-Y*Y/2);v.push(D),P===0?N+=D:P<S&&(N+=2*D)}for(let P=0;P<v.length;P++)v[P]=v[P]/N;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=v,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=M,y.mipInt.value=L-s;const F=this._sizeLods[l],V=3*F*(l>L-Es?l-L+Es:0),O=4*(this._cubeSize-F);co(i,V,O,3*F,2*F),m.setRenderTarget(i),m.render(x,Tl)}}function v2(o){const e=[],i=[],s=[];let l=o;const u=o-Es+1+Cv.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-Es?m=Cv[h-o+Es-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,x=1+p,y=[g,g,x,g,x,x,g,g,x,x,g,x],b=6,M=6,A=3,S=2,v=1,N=new Float32Array(A*M*b),L=new Float32Array(S*M*b),F=new Float32Array(v*M*b);for(let O=0;O<b;O++){const P=O%3*2/3-1,Y=O>2?0:-1,D=[P,Y,0,P+2/3,Y,0,P+2/3,Y+1,0,P,Y,0,P+2/3,Y+1,0,P,Y+1,0];N.set(D,A*M*O),L.set(y,S*M*O);const w=[O,O,O,O,O,O];F.set(w,v*M*O)}const V=new si;V.setAttribute("position",new ra(N,A)),V.setAttribute("uv",new ra(L,S)),V.setAttribute("faceIndex",new ra(F,v)),s.push(new vi(V,null)),l>Es&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Dv(o,e,i){const s=new lr(o,e,i);return s.texture.mapping=nf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function co(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function y2(o,e,i){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:g2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:af(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function S2(o,e,i){const s=new Float32Array(ar),l=new tt(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function Nv(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function Uv(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function af(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function b2(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Rp||m===wp,g=m===go||m===_o;if(p||g){let x=e.get(d);const y=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new wv(o)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const b=d.image;return p&&b&&b.height>0||g&&b&&l(b)?(i===null&&(i=new wv(o)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function M2(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Il("WebGLRenderer: "+s+" extension not supported."),l}}}function E2(o,e,i,s){const l={},u=new WeakMap;function h(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const M in y.attributes)e.remove(y.attributes[M]);y.removeEventListener("dispose",h),delete l[y.id];const b=u.get(y);b&&(e.remove(b),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(x,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(x){const y=x.attributes;for(const b in y)e.update(y[b],o.ARRAY_BUFFER)}function p(x){const y=[],b=x.index,M=x.attributes.position;let A=0;if(b!==null){const N=b.array;A=b.version;for(let L=0,F=N.length;L<F;L+=3){const V=N[L+0],O=N[L+1],P=N[L+2];y.push(V,O,O,P,P,V)}}else if(M!==void 0){const N=M.array;A=M.version;for(let L=0,F=N.length/3-1;L<F;L+=3){const V=L+0,O=L+1,P=L+2;y.push(V,O,O,P,P,V)}}else return;const S=new(by(y)?Cy:Ay)(y,1);S.version=A;const v=u.get(x);v&&e.remove(v),u.set(x,S)}function g(x){const y=u.get(x);if(y){const b=x.index;b!==null&&y.version<b.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function T2(o,e,i){let s;function l(y){s=y}let u,h;function d(y){u=y.type,h=y.bytesPerElement}function m(y,b){o.drawElements(s,b,u,y*h),i.update(b,s,1)}function p(y,b,M){M!==0&&(o.drawElementsInstanced(s,b,u,y*h,M),i.update(b,s,M))}function g(y,b,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,u,y,0,M);let S=0;for(let v=0;v<M;v++)S+=b[v];i.update(S,s,1)}function x(y,b,M,A){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<y.length;v++)p(y[v]/h,b[v],A[v]);else{S.multiDrawElementsInstancedWEBGL(s,b,0,u,y,0,A,0,M);let v=0;for(let N=0;N<M;N++)v+=b[N]*A[N];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function A2(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:rn("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function C2(o,e,i){const s=new WeakMap,l=new un;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let y=s.get(d);if(y===void 0||y.count!==x){let w=function(){Y.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var b=w;y!==void 0&&y.texture.dispose();const M=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let F=0;M===!0&&(F=1),A===!0&&(F=2),S===!0&&(F=3);let V=d.attributes.position.count*F,O=1;V>e.maxTextureSize&&(O=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const P=new Float32Array(V*O*4*x),Y=new My(P,V,O,x);Y.type=Oa,Y.needsUpdate=!0;const D=F*4;for(let k=0;k<x;k++){const at=v[k],ot=N[k],_t=L[k],ft=V*O*4*k;for(let j=0;j<at.count;j++){const rt=j*D;M===!0&&(l.fromBufferAttribute(at,j),P[ft+rt+0]=l.x,P[ft+rt+1]=l.y,P[ft+rt+2]=l.z,P[ft+rt+3]=0),A===!0&&(l.fromBufferAttribute(ot,j),P[ft+rt+4]=l.x,P[ft+rt+5]=l.y,P[ft+rt+6]=l.z,P[ft+rt+7]=0),S===!0&&(l.fromBufferAttribute(_t,j),P[ft+rt+8]=l.x,P[ft+rt+9]=l.y,P[ft+rt+10]=l.z,P[ft+rt+11]=_t.itemSize===4?l.w:1)}}y={count:x,texture:Y,size:new pe(V,O)},s.set(d,y),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const A=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function R2(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,x=e.get(m,g);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const Fy=new Hn,Lv=new Py(1,1),By=new My,Hy=new q1,Vy=new Dy,Ov=[],Pv=[],zv=new Float32Array(16),Iv=new Float32Array(9),Fv=new Float32Array(4);function To(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=Ov[l];if(u===void 0&&(u=new Float32Array(l),Ov[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function yn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Sn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function sf(o,e){let i=Pv[e];i===void 0&&(i=new Int32Array(e),Pv[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function w2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function D2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;o.uniform2fv(this.addr,e),Sn(i,e)}}function N2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;o.uniform3fv(this.addr,e),Sn(i,e)}}function U2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;o.uniform4fv(this.addr,e),Sn(i,e)}}function L2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(yn(i,s))return;Fv.set(s),o.uniformMatrix2fv(this.addr,!1,Fv),Sn(i,s)}}function O2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(yn(i,s))return;Iv.set(s),o.uniformMatrix3fv(this.addr,!1,Iv),Sn(i,s)}}function P2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(yn(i,s))return;zv.set(s),o.uniformMatrix4fv(this.addr,!1,zv),Sn(i,s)}}function z2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function I2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;o.uniform2iv(this.addr,e),Sn(i,e)}}function F2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;o.uniform3iv(this.addr,e),Sn(i,e)}}function B2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;o.uniform4iv(this.addr,e),Sn(i,e)}}function H2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function V2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;o.uniform2uiv(this.addr,e),Sn(i,e)}}function G2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;o.uniform3uiv(this.addr,e),Sn(i,e)}}function k2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;o.uniform4uiv(this.addr,e),Sn(i,e)}}function X2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Lv.compareFunction=Sy,u=Lv):u=Fy,i.setTexture2D(e||u,l)}function j2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Hy,l)}function q2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Vy,l)}function Y2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||By,l)}function W2(o){switch(o){case 5126:return w2;case 35664:return D2;case 35665:return N2;case 35666:return U2;case 35674:return L2;case 35675:return O2;case 35676:return P2;case 5124:case 35670:return z2;case 35667:case 35671:return I2;case 35668:case 35672:return F2;case 35669:case 35673:return B2;case 5125:return H2;case 36294:return V2;case 36295:return G2;case 36296:return k2;case 35678:case 36198:case 36298:case 36306:case 35682:return X2;case 35679:case 36299:case 36307:return j2;case 35680:case 36300:case 36308:case 36293:return q2;case 36289:case 36303:case 36311:case 36292:return Y2}}function Z2(o,e){o.uniform1fv(this.addr,e)}function K2(o,e){const i=To(e,this.size,2);o.uniform2fv(this.addr,i)}function Q2(o,e){const i=To(e,this.size,3);o.uniform3fv(this.addr,i)}function J2(o,e){const i=To(e,this.size,4);o.uniform4fv(this.addr,i)}function $2(o,e){const i=To(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function tA(o,e){const i=To(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function eA(o,e){const i=To(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function nA(o,e){o.uniform1iv(this.addr,e)}function iA(o,e){o.uniform2iv(this.addr,e)}function aA(o,e){o.uniform3iv(this.addr,e)}function sA(o,e){o.uniform4iv(this.addr,e)}function rA(o,e){o.uniform1uiv(this.addr,e)}function oA(o,e){o.uniform2uiv(this.addr,e)}function lA(o,e){o.uniform3uiv(this.addr,e)}function cA(o,e){o.uniform4uiv(this.addr,e)}function uA(o,e,i){const s=this.cache,l=e.length,u=sf(i,l);yn(s,u)||(o.uniform1iv(this.addr,u),Sn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Fy,u[h])}function fA(o,e,i){const s=this.cache,l=e.length,u=sf(i,l);yn(s,u)||(o.uniform1iv(this.addr,u),Sn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Hy,u[h])}function hA(o,e,i){const s=this.cache,l=e.length,u=sf(i,l);yn(s,u)||(o.uniform1iv(this.addr,u),Sn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Vy,u[h])}function dA(o,e,i){const s=this.cache,l=e.length,u=sf(i,l);yn(s,u)||(o.uniform1iv(this.addr,u),Sn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||By,u[h])}function pA(o){switch(o){case 5126:return Z2;case 35664:return K2;case 35665:return Q2;case 35666:return J2;case 35674:return $2;case 35675:return tA;case 35676:return eA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return aA;case 35669:case 35673:return sA;case 5125:return rA;case 36294:return oA;case 36295:return lA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return dA}}class mA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=W2(i.type)}}class xA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pA(i.type)}}class gA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const dp=/(\w+)(\])?(\[|\.)?/g;function Bv(o,e){o.seq.push(e),o.map[e.id]=e}function _A(o,e,i){const s=o.name,l=s.length;for(dp.lastIndex=0;;){const u=dp.exec(s),h=dp.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Bv(i,p===void 0?new mA(d,o,e):new xA(d,o,e));break}else{let x=i.map[d];x===void 0&&(x=new gA(d),Bv(i,x)),i=x}}}class Wu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);_A(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function Hv(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const vA=37297;let yA=0;function SA(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Vv=new ge;function bA(o){ze._getMatrix(Vv,ze.workingColorSpace,o);const e=`mat3( ${Vv.elements.map(i=>i.toFixed(4))} )`;switch(ze.getTransfer(o)){case Qu:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Gv(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+SA(o.getShaderSource(e),d)}else return u}function MA(o,e){const i=bA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function EA(o,e){let i;switch(e){case v1:i="Linear";break;case y1:i="Reinhard";break;case S1:i="Cineon";break;case hy:i="ACESFilmic";break;case M1:i="AgX";break;case E1:i="Neutral";break;case b1:i="Custom";break;default:de("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hu=new tt;function TA(){ze.getLuminanceCoefficients(Hu);const o=Hu.x.toFixed(4),e=Hu.y.toFixed(4),i=Hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wl).join(`
`)}function CA(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function RA(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function wl(o){return o!==""}function kv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function lm(o){return o.replace(wA,NA)}const DA=new Map;function NA(o,e){let i=ve[e];if(i===void 0){const s=DA.get(e);if(s!==void 0)i=ve[s],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return lm(i)}const UA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jv(o){return o.replace(UA,LA)}function LA(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function qv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===uy?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===JM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Na&&(e="SHADOWMAP_TYPE_VSM"),e}function PA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case go:case _o:e="ENVMAP_TYPE_CUBE";break;case nf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zA(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===_o&&(e="ENVMAP_MODE_REFRACTION"),e}function IA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case fy:e="ENVMAP_BLENDING_MULTIPLY";break;case g1:e="ENVMAP_BLENDING_MIX";break;case _1:e="ENVMAP_BLENDING_ADD";break}return e}function FA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function BA(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=OA(i),p=PA(i),g=zA(i),x=IA(i),y=FA(i),b=AA(i),M=CA(u),A=l.createProgram();let S,v,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(wl).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(wl).join(`
`),v.length>0&&(v+=`
`)):(S=[qv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),v=[qv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ts?"#define TONE_MAPPING":"",i.toneMapping!==Ts?ve.tonemapping_pars_fragment:"",i.toneMapping!==Ts?EA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,MA("linearToOutputTexel",i.outputColorSpace),TA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wl).join(`
`)),h=lm(h),h=kv(h,i),h=Xv(h,i),d=lm(d),d=kv(d,i),d=Xv(d,i),h=jv(h),d=jv(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===J_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===J_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=N+S+h,F=N+v+d,V=Hv(l,l.VERTEX_SHADER,L),O=Hv(l,l.FRAGMENT_SHADER,F);l.attachShader(A,V),l.attachShader(A,O),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(k){if(o.debug.checkShaderErrors){const at=l.getProgramInfoLog(A)||"",ot=l.getShaderInfoLog(V)||"",_t=l.getShaderInfoLog(O)||"",ft=at.trim(),j=ot.trim(),rt=_t.trim();let q=!0,vt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,V,O);else{const dt=Gv(l,V,"vertex"),qt=Gv(l,O,"fragment");rn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ft+`
`+dt+`
`+qt)}else ft!==""?de("WebGLProgram: Program Info Log:",ft):(j===""||rt==="")&&(vt=!1);vt&&(k.diagnostics={runnable:q,programLog:ft,vertexShader:{log:j,prefix:S},fragmentShader:{log:rt,prefix:v}})}l.deleteShader(V),l.deleteShader(O),Y=new Wu(l,A),D=RA(l,A)}let Y;this.getUniforms=function(){return Y===void 0&&P(this),Y};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,vA)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=V,this.fragmentShader=O,this}let HA=0;class VA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new GA(e),i.set(e,s)),s}}class GA{constructor(e){this.id=HA++,this.code=e,this.usedTimes=0}}function kA(o,e,i,s,l,u,h){const d=new Sm,m=new VA,p=new Set,g=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let b=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,w,k,at,ot){const _t=at.fog,ft=ot.geometry,j=D.isMeshStandardMaterial?at.environment:null,rt=(D.isMeshStandardMaterial?i:e).get(D.envMap||j),q=rt&&rt.mapping===nf?rt.image.height:null,vt=M[D.type];D.precision!==null&&(b=l.getMaxPrecision(D.precision),b!==D.precision&&de("WebGLProgram.getParameters:",D.precision,"not supported, using",b,"instead."));const dt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,qt=dt!==void 0?dt.length:0;let oe=0;ft.morphAttributes.position!==void 0&&(oe=1),ft.morphAttributes.normal!==void 0&&(oe=2),ft.morphAttributes.color!==void 0&&(oe=3);let Ee,B,pt,Q;if(vt){const Ue=ia[vt];Ee=Ue.vertexShader,B=Ue.fragmentShader}else Ee=D.vertexShader,B=D.fragmentShader,m.update(D),pt=m.getVertexShaderID(D),Q=m.getFragmentShaderID(D);const et=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Lt=ot.isInstancedMesh===!0,Nt=ot.isBatchedMesh===!0,At=!!D.map,kt=!!D.matcap,ce=!!rt,De=!!D.aoMap,H=!!D.lightMap,ne=!!D.bumpMap,Vt=!!D.normalMap,$t=!!D.displacementMap,It=!!D.emissiveMap,ye=!!D.metalnessMap,Yt=!!D.roughnessMap,ie=D.anisotropy>0,U=D.clearcoat>0,T=D.dispersion>0,nt=D.iridescence>0,yt=D.sheen>0,Mt=D.transmission>0,ht=ie&&!!D.anisotropyMap,Xt=U&&!!D.clearcoatMap,Ot=U&&!!D.clearcoatNormalMap,Qt=U&&!!D.clearcoatRoughnessMap,Zt=nt&&!!D.iridescenceMap,Et=nt&&!!D.iridescenceThicknessMap,Dt=yt&&!!D.sheenColorMap,te=yt&&!!D.sheenRoughnessMap,ee=!!D.specularMap,Bt=!!D.specularColorMap,ct=!!D.specularIntensityMap,z=Mt&&!!D.transmissionMap,St=Mt&&!!D.thicknessMap,Ct=!!D.gradientMap,Rt=!!D.alphaMap,bt=D.alphaTest>0,mt=!!D.alphaHash,jt=!!D.extensions;let fe=Ts;D.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(fe=o.toneMapping);const We={shaderID:vt,shaderType:D.type,shaderName:D.name,vertexShader:Ee,fragmentShader:B,defines:D.defines,customVertexShaderID:pt,customFragmentShaderID:Q,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:b,batching:Nt,batchingColor:Nt&&ot._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&ot.instanceColor!==null,instancingMorph:Lt&&ot.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:et===null?o.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:vo,alphaToCoverage:!!D.alphaToCoverage,map:At,matcap:kt,envMap:ce,envMapMode:ce&&rt.mapping,envMapCubeUVHeight:q,aoMap:De,lightMap:H,bumpMap:ne,normalMap:Vt,displacementMap:y&&$t,emissiveMap:It,normalMapObjectSpace:Vt&&D.normalMapType===w1,normalMapTangentSpace:Vt&&D.normalMapType===R1,metalnessMap:ye,roughnessMap:Yt,anisotropy:ie,anisotropyMap:ht,clearcoat:U,clearcoatMap:Xt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:Qt,dispersion:T,iridescence:nt,iridescenceMap:Zt,iridescenceThicknessMap:Et,sheen:yt,sheenColorMap:Dt,sheenRoughnessMap:te,specularMap:ee,specularColorMap:Bt,specularIntensityMap:ct,transmission:Mt,transmissionMap:z,thicknessMap:St,gradientMap:Ct,opaque:D.transparent===!1&&D.blending===po&&D.alphaToCoverage===!1,alphaMap:Rt,alphaTest:bt,alphaHash:mt,combine:D.combine,mapUv:At&&A(D.map.channel),aoMapUv:De&&A(D.aoMap.channel),lightMapUv:H&&A(D.lightMap.channel),bumpMapUv:ne&&A(D.bumpMap.channel),normalMapUv:Vt&&A(D.normalMap.channel),displacementMapUv:$t&&A(D.displacementMap.channel),emissiveMapUv:It&&A(D.emissiveMap.channel),metalnessMapUv:ye&&A(D.metalnessMap.channel),roughnessMapUv:Yt&&A(D.roughnessMap.channel),anisotropyMapUv:ht&&A(D.anisotropyMap.channel),clearcoatMapUv:Xt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:te&&A(D.sheenRoughnessMap.channel),specularMapUv:ee&&A(D.specularMap.channel),specularColorMapUv:Bt&&A(D.specularColorMap.channel),specularIntensityMapUv:ct&&A(D.specularIntensityMap.channel),transmissionMapUv:z&&A(D.transmissionMap.channel),thicknessMapUv:St&&A(D.thicknessMap.channel),alphaMapUv:Rt&&A(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Vt||ie),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ft.attributes.uv&&(At||Rt),fog:!!_t,useFog:D.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Tt,skinning:ot.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:fe,decodeVideoTexture:At&&D.map.isVideoTexture===!0&&ze.getTransfer(D.map.colorSpace)===qe,decodeVideoTextureEmissive:It&&D.emissiveMap.isVideoTexture===!0&&ze.getTransfer(D.emissiveMap.colorSpace)===qe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===aa,flipSided:D.side===ai,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:jt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&D.extensions.multiDraw===!0||Nt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return We.vertexUv1s=p.has(1),We.vertexUv2s=p.has(2),We.vertexUv3s=p.has(3),p.clear(),We}function v(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const k in D.defines)w.push(k),w.push(D.defines[k]);return D.isRawShaderMaterial===!1&&(N(w,D),L(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function N(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function L(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function F(D){const w=M[D.type];let k;if(w){const at=ia[w];k=sE.clone(at.uniforms)}else k=D.uniforms;return k}function V(D,w){let k;for(let at=0,ot=g.length;at<ot;at++){const _t=g[at];if(_t.cacheKey===w){k=_t,++k.usedTimes;break}}return k===void 0&&(k=new BA(o,w,D,u),g.push(k)),k}function O(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function P(D){m.remove(D)}function Y(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:F,acquireProgram:V,releaseProgram:O,releaseShaderCache:P,programs:g,dispose:Y}}function XA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function jA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Yv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Wv(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(x,y,b,M,A,S){let v=o[e];return v===void 0?(v={id:x.id,object:x,geometry:y,material:b,groupOrder:M,renderOrder:x.renderOrder,z:A,group:S},o[e]=v):(v.id=x.id,v.object=x,v.geometry=y,v.material=b,v.groupOrder=M,v.renderOrder=x.renderOrder,v.z=A,v.group=S),e++,v}function d(x,y,b,M,A,S){const v=h(x,y,b,M,A,S);b.transmission>0?s.push(v):b.transparent===!0?l.push(v):i.push(v)}function m(x,y,b,M,A,S){const v=h(x,y,b,M,A,S);b.transmission>0?s.unshift(v):b.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,y){i.length>1&&i.sort(x||jA),s.length>1&&s.sort(y||Yv),l.length>1&&l.sort(y||Yv)}function g(){for(let x=e,y=o.length;x<y;x++){const b=o[x];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function qA(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new Wv,o.set(s,[h])):l>=u.length?(h=new Wv,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function YA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new tt,color:new Ie};break;case"SpotLight":i={position:new tt,direction:new tt,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":i={color:new Ie,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[e.id]=i,i}}}function WA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let ZA=0;function KA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function QA(o){const e=new YA,i=WA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new tt);const l=new tt,u=new on,h=new on;function d(p){let g=0,x=0,y=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let b=0,M=0,A=0,S=0,v=0,N=0,L=0,F=0,V=0,O=0,P=0;p.sort(KA);for(let D=0,w=p.length;D<w;D++){const k=p[D],at=k.color,ot=k.intensity,_t=k.distance,ft=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=at.r*ot,x+=at.g*ot,y+=at.b*ot;else if(k.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(k.sh.coefficients[j],ot);P++}else if(k.isDirectionalLight){const j=e.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const rt=k.shadow,q=i.get(k);q.shadowIntensity=rt.intensity,q.shadowBias=rt.bias,q.shadowNormalBias=rt.normalBias,q.shadowRadius=rt.radius,q.shadowMapSize=rt.mapSize,s.directionalShadow[b]=q,s.directionalShadowMap[b]=ft,s.directionalShadowMatrix[b]=k.shadow.matrix,N++}s.directional[b]=j,b++}else if(k.isSpotLight){const j=e.get(k);j.position.setFromMatrixPosition(k.matrixWorld),j.color.copy(at).multiplyScalar(ot),j.distance=_t,j.coneCos=Math.cos(k.angle),j.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),j.decay=k.decay,s.spot[A]=j;const rt=k.shadow;if(k.map&&(s.spotLightMap[V]=k.map,V++,rt.updateMatrices(k),k.castShadow&&O++),s.spotLightMatrix[A]=rt.matrix,k.castShadow){const q=i.get(k);q.shadowIntensity=rt.intensity,q.shadowBias=rt.bias,q.shadowNormalBias=rt.normalBias,q.shadowRadius=rt.radius,q.shadowMapSize=rt.mapSize,s.spotShadow[A]=q,s.spotShadowMap[A]=ft,F++}A++}else if(k.isRectAreaLight){const j=e.get(k);j.color.copy(at).multiplyScalar(ot),j.halfWidth.set(k.width*.5,0,0),j.halfHeight.set(0,k.height*.5,0),s.rectArea[S]=j,S++}else if(k.isPointLight){const j=e.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity),j.distance=k.distance,j.decay=k.decay,k.castShadow){const rt=k.shadow,q=i.get(k);q.shadowIntensity=rt.intensity,q.shadowBias=rt.bias,q.shadowNormalBias=rt.normalBias,q.shadowRadius=rt.radius,q.shadowMapSize=rt.mapSize,q.shadowCameraNear=rt.camera.near,q.shadowCameraFar=rt.camera.far,s.pointShadow[M]=q,s.pointShadowMap[M]=ft,s.pointShadowMatrix[M]=k.shadow.matrix,L++}s.point[M]=j,M++}else if(k.isHemisphereLight){const j=e.get(k);j.skyColor.copy(k.color).multiplyScalar(ot),j.groundColor.copy(k.groundColor).multiplyScalar(ot),s.hemi[v]=j,v++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=y;const Y=s.hash;(Y.directionalLength!==b||Y.pointLength!==M||Y.spotLength!==A||Y.rectAreaLength!==S||Y.hemiLength!==v||Y.numDirectionalShadows!==N||Y.numPointShadows!==L||Y.numSpotShadows!==F||Y.numSpotMaps!==V||Y.numLightProbes!==P)&&(s.directional.length=b,s.spot.length=A,s.rectArea.length=S,s.point.length=M,s.hemi.length=v,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=F+V-O,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=P,Y.directionalLength=b,Y.pointLength=M,Y.spotLength=A,Y.rectAreaLength=S,Y.hemiLength=v,Y.numDirectionalShadows=N,Y.numPointShadows=L,Y.numSpotShadows=F,Y.numSpotMaps=V,Y.numLightProbes=P,s.version=ZA++)}function m(p,g){let x=0,y=0,b=0,M=0,A=0;const S=g.matrixWorldInverse;for(let v=0,N=p.length;v<N;v++){const L=p[v];if(L.isDirectionalLight){const F=s.directional[x];F.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(S),x++}else if(L.isSpotLight){const F=s.spot[b];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(S),F.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(S),b++}else if(L.isRectAreaLight){const F=s.rectArea[M];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(S),h.identity(),u.copy(L.matrixWorld),u.premultiply(S),h.extractRotation(u),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),F.halfWidth.applyMatrix4(h),F.halfHeight.applyMatrix4(h),M++}else if(L.isPointLight){const F=s.point[y];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const F=s.hemi[A];F.direction.setFromMatrixPosition(L.matrixWorld),F.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:s}}function Zv(o){const e=new QA(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function JA(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new Zv(o),e.set(l,[d])):u>=h.length?(d=new Zv(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const $A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eC(o,e,i){let s=new Uy;const l=new pe,u=new pe,h=new un,d=new vE({depthPacking:C1}),m=new yE,p={},g=i.maxTextureSize,x={[Fa]:ai,[ai]:Fa,[aa]:aa},y=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:$A,fragmentShader:tC}),b=y.clone();b.defines.HORIZONTAL_PASS=1;const M=new si;M.setAttribute("position",new ra(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new vi(M,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uy;let v=this.type;this.render=function(O,P,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),at=o.state;at.setBlending(za),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const ot=v!==Na&&this.type===Na,_t=v===Na&&this.type!==Na;for(let ft=0,j=O.length;ft<j;ft++){const rt=O[ft],q=rt.shadow;if(q===void 0){de("WebGLShadowMap:",rt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const vt=q.getFrameExtents();if(l.multiply(vt),u.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/vt.x),l.x=u.x*vt.x,q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/vt.y),l.y=u.y*vt.y,q.mapSize.y=u.y)),q.map===null||ot===!0||_t===!0){const qt=this.type!==Na?{minFilter:_i,magFilter:_i}:{};q.map!==null&&q.map.dispose(),q.map=new lr(l.x,l.y,qt),q.map.texture.name=rt.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const dt=q.getViewportCount();for(let qt=0;qt<dt;qt++){const oe=q.getViewport(qt);h.set(u.x*oe.x,u.y*oe.y,u.x*oe.z,u.y*oe.w),at.viewport(h),q.updateMatrices(rt,qt),s=q.getFrustum(),F(P,Y,q.camera,rt,this.type)}q.isPointLightShadow!==!0&&this.type===Na&&N(q,Y),q.needsUpdate=!1}v=this.type,S.needsUpdate=!1,o.setRenderTarget(D,w,k)};function N(O,P){const Y=e.update(A);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,b.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new lr(l.x,l.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(P,null,Y,y,A,null),b.uniforms.shadow_pass.value=O.mapPass.texture,b.uniforms.resolution.value=O.mapSize,b.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(P,null,Y,b,A,null)}function L(O,P,Y,D){let w=null;const k=Y.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)w=k;else if(w=Y.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const at=w.uuid,ot=P.uuid;let _t=p[at];_t===void 0&&(_t={},p[at]=_t);let ft=_t[ot];ft===void 0&&(ft=w.clone(),_t[ot]=ft,P.addEventListener("dispose",V)),w=ft}if(w.visible=P.visible,w.wireframe=P.wireframe,D===Na?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:x[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const at=o.properties.get(w);at.light=Y}return w}function F(O,P,Y,D,w){if(O.visible===!1)return;if(O.layers.test(P.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===Na)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,O.matrixWorld);const ot=e.update(O),_t=O.material;if(Array.isArray(_t)){const ft=ot.groups;for(let j=0,rt=ft.length;j<rt;j++){const q=ft[j],vt=_t[q.materialIndex];if(vt&&vt.visible){const dt=L(O,vt,D,w);O.onBeforeShadow(o,O,P,Y,ot,dt,q),o.renderBufferDirect(Y,null,ot,dt,O,q),O.onAfterShadow(o,O,P,Y,ot,dt,q)}}}else if(_t.visible){const ft=L(O,_t,D,w);O.onBeforeShadow(o,O,P,Y,ot,ft,null),o.renderBufferDirect(Y,null,ot,ft,O,null),O.onAfterShadow(o,O,P,Y,ot,ft,null)}}const at=O.children;for(let ot=0,_t=at.length;ot<_t;ot++)F(at[ot],P,Y,D,w)}function V(O){O.target.removeEventListener("dispose",V);for(const Y in p){const D=p[Y],w=O.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const nC={[Sp]:bp,[Mp]:Ap,[Ep]:Cp,[xo]:Tp,[bp]:Sp,[Ap]:Mp,[Cp]:Ep,[Tp]:xo};function iC(o,e){function i(){let z=!1;const St=new un;let Ct=null;const Rt=new un(0,0,0,0);return{setMask:function(bt){Ct!==bt&&!z&&(o.colorMask(bt,bt,bt,bt),Ct=bt)},setLocked:function(bt){z=bt},setClear:function(bt,mt,jt,fe,We){We===!0&&(bt*=fe,mt*=fe,jt*=fe),St.set(bt,mt,jt,fe),Rt.equals(St)===!1&&(o.clearColor(bt,mt,jt,fe),Rt.copy(St))},reset:function(){z=!1,Ct=null,Rt.set(-1,0,0,0)}}}function s(){let z=!1,St=!1,Ct=null,Rt=null,bt=null;return{setReversed:function(mt){if(St!==mt){const jt=e.get("EXT_clip_control");mt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),St=mt;const fe=bt;bt=null,this.setClear(fe)}},getReversed:function(){return St},setTest:function(mt){mt?et(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(mt){Ct!==mt&&!z&&(o.depthMask(mt),Ct=mt)},setFunc:function(mt){if(St&&(mt=nC[mt]),Rt!==mt){switch(mt){case Sp:o.depthFunc(o.NEVER);break;case bp:o.depthFunc(o.ALWAYS);break;case Mp:o.depthFunc(o.LESS);break;case xo:o.depthFunc(o.LEQUAL);break;case Ep:o.depthFunc(o.EQUAL);break;case Tp:o.depthFunc(o.GEQUAL);break;case Ap:o.depthFunc(o.GREATER);break;case Cp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Rt=mt}},setLocked:function(mt){z=mt},setClear:function(mt){bt!==mt&&(St&&(mt=1-mt),o.clearDepth(mt),bt=mt)},reset:function(){z=!1,Ct=null,Rt=null,bt=null,St=!1}}}function l(){let z=!1,St=null,Ct=null,Rt=null,bt=null,mt=null,jt=null,fe=null,We=null;return{setTest:function(Ue){z||(Ue?et(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(Ue){St!==Ue&&!z&&(o.stencilMask(Ue),St=Ue)},setFunc:function(Ue,tn,fn){(Ct!==Ue||Rt!==tn||bt!==fn)&&(o.stencilFunc(Ue,tn,fn),Ct=Ue,Rt=tn,bt=fn)},setOp:function(Ue,tn,fn){(mt!==Ue||jt!==tn||fe!==fn)&&(o.stencilOp(Ue,tn,fn),mt=Ue,jt=tn,fe=fn)},setLocked:function(Ue){z=Ue},setClear:function(Ue){We!==Ue&&(o.clearStencil(Ue),We=Ue)},reset:function(){z=!1,St=null,Ct=null,Rt=null,bt=null,mt=null,jt=null,fe=null,We=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},y=new WeakMap,b=[],M=null,A=!1,S=null,v=null,N=null,L=null,F=null,V=null,O=null,P=new Ie(0,0,0),Y=0,D=!1,w=null,k=null,at=null,ot=null,_t=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,rt=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=rt>=1):q.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=rt>=2);let vt=null,dt={};const qt=o.getParameter(o.SCISSOR_BOX),oe=o.getParameter(o.VIEWPORT),Ee=new un().fromArray(qt),B=new un().fromArray(oe);function pt(z,St,Ct,Rt){const bt=new Uint8Array(4),mt=o.createTexture();o.bindTexture(z,mt),o.texParameteri(z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let jt=0;jt<Ct;jt++)z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY?o.texImage3D(St,0,o.RGBA,1,1,Rt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(St+jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return mt}const Q={};Q[o.TEXTURE_2D]=pt(o.TEXTURE_2D,o.TEXTURE_2D,1),Q[o.TEXTURE_CUBE_MAP]=pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[o.TEXTURE_2D_ARRAY]=pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Q[o.TEXTURE_3D]=pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),et(o.DEPTH_TEST),h.setFunc(xo),ne(!1),Vt(q_),et(o.CULL_FACE),De(za);function et(z){g[z]!==!0&&(o.enable(z),g[z]=!0)}function Tt(z){g[z]!==!1&&(o.disable(z),g[z]=!1)}function Lt(z,St){return x[z]!==St?(o.bindFramebuffer(z,St),x[z]=St,z===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=St),z===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=St),!0):!1}function Nt(z,St){let Ct=b,Rt=!1;if(z){Ct=y.get(St),Ct===void 0&&(Ct=[],y.set(St,Ct));const bt=z.textures;if(Ct.length!==bt.length||Ct[0]!==o.COLOR_ATTACHMENT0){for(let mt=0,jt=bt.length;mt<jt;mt++)Ct[mt]=o.COLOR_ATTACHMENT0+mt;Ct.length=bt.length,Rt=!0}}else Ct[0]!==o.BACK&&(Ct[0]=o.BACK,Rt=!0);Rt&&o.drawBuffers(Ct)}function At(z){return M!==z?(o.useProgram(z),M=z,!0):!1}const kt={[ir]:o.FUNC_ADD,[t1]:o.FUNC_SUBTRACT,[e1]:o.FUNC_REVERSE_SUBTRACT};kt[n1]=o.MIN,kt[i1]=o.MAX;const ce={[a1]:o.ZERO,[s1]:o.ONE,[r1]:o.SRC_COLOR,[vp]:o.SRC_ALPHA,[h1]:o.SRC_ALPHA_SATURATE,[u1]:o.DST_COLOR,[l1]:o.DST_ALPHA,[o1]:o.ONE_MINUS_SRC_COLOR,[yp]:o.ONE_MINUS_SRC_ALPHA,[f1]:o.ONE_MINUS_DST_COLOR,[c1]:o.ONE_MINUS_DST_ALPHA,[d1]:o.CONSTANT_COLOR,[p1]:o.ONE_MINUS_CONSTANT_COLOR,[m1]:o.CONSTANT_ALPHA,[x1]:o.ONE_MINUS_CONSTANT_ALPHA};function De(z,St,Ct,Rt,bt,mt,jt,fe,We,Ue){if(z===za){A===!0&&(Tt(o.BLEND),A=!1);return}if(A===!1&&(et(o.BLEND),A=!0),z!==$M){if(z!==S||Ue!==D){if((v!==ir||F!==ir)&&(o.blendEquation(o.FUNC_ADD),v=ir,F=ir),Ue)switch(z){case po:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Y_:o.blendFunc(o.ONE,o.ONE);break;case W_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Z_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:rn("WebGLState: Invalid blending: ",z);break}else switch(z){case po:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Y_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case W_:rn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Z_:rn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rn("WebGLState: Invalid blending: ",z);break}N=null,L=null,V=null,O=null,P.set(0,0,0),Y=0,S=z,D=Ue}return}bt=bt||St,mt=mt||Ct,jt=jt||Rt,(St!==v||bt!==F)&&(o.blendEquationSeparate(kt[St],kt[bt]),v=St,F=bt),(Ct!==N||Rt!==L||mt!==V||jt!==O)&&(o.blendFuncSeparate(ce[Ct],ce[Rt],ce[mt],ce[jt]),N=Ct,L=Rt,V=mt,O=jt),(fe.equals(P)===!1||We!==Y)&&(o.blendColor(fe.r,fe.g,fe.b,We),P.copy(fe),Y=We),S=z,D=!1}function H(z,St){z.side===aa?Tt(o.CULL_FACE):et(o.CULL_FACE);let Ct=z.side===ai;St&&(Ct=!Ct),ne(Ct),z.blending===po&&z.transparent===!1?De(za):De(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),h.setFunc(z.depthFunc),h.setTest(z.depthTest),h.setMask(z.depthWrite),u.setMask(z.colorWrite);const Rt=z.stencilWrite;d.setTest(Rt),Rt&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),It(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?et(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(z){w!==z&&(z?o.frontFace(o.CW):o.frontFace(o.CCW),w=z)}function Vt(z){z!==KM?(et(o.CULL_FACE),z!==k&&(z===q_?o.cullFace(o.BACK):z===QM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),k=z}function $t(z){z!==at&&(j&&o.lineWidth(z),at=z)}function It(z,St,Ct){z?(et(o.POLYGON_OFFSET_FILL),(ot!==St||_t!==Ct)&&(o.polygonOffset(St,Ct),ot=St,_t=Ct)):Tt(o.POLYGON_OFFSET_FILL)}function ye(z){z?et(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function Yt(z){z===void 0&&(z=o.TEXTURE0+ft-1),vt!==z&&(o.activeTexture(z),vt=z)}function ie(z,St,Ct){Ct===void 0&&(vt===null?Ct=o.TEXTURE0+ft-1:Ct=vt);let Rt=dt[Ct];Rt===void 0&&(Rt={type:void 0,texture:void 0},dt[Ct]=Rt),(Rt.type!==z||Rt.texture!==St)&&(vt!==Ct&&(o.activeTexture(Ct),vt=Ct),o.bindTexture(z,St||Q[z]),Rt.type=z,Rt.texture=St)}function U(){const z=dt[vt];z!==void 0&&z.type!==void 0&&(o.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(z){z("WebGLState:",z)}}function nt(){try{o.compressedTexImage3D(...arguments)}catch(z){z("WebGLState:",z)}}function yt(){try{o.texSubImage2D(...arguments)}catch(z){z("WebGLState:",z)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(z){z("WebGLState:",z)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(z){z("WebGLState:",z)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(z){z("WebGLState:",z)}}function Ot(){try{o.texStorage2D(...arguments)}catch(z){z("WebGLState:",z)}}function Qt(){try{o.texStorage3D(...arguments)}catch(z){z("WebGLState:",z)}}function Zt(){try{o.texImage2D(...arguments)}catch(z){z("WebGLState:",z)}}function Et(){try{o.texImage3D(...arguments)}catch(z){z("WebGLState:",z)}}function Dt(z){Ee.equals(z)===!1&&(o.scissor(z.x,z.y,z.z,z.w),Ee.copy(z))}function te(z){B.equals(z)===!1&&(o.viewport(z.x,z.y,z.z,z.w),B.copy(z))}function ee(z,St){let Ct=p.get(St);Ct===void 0&&(Ct=new WeakMap,p.set(St,Ct));let Rt=Ct.get(z);Rt===void 0&&(Rt=o.getUniformBlockIndex(St,z.name),Ct.set(z,Rt))}function Bt(z,St){const Rt=p.get(St).get(z);m.get(St)!==Rt&&(o.uniformBlockBinding(St,Rt,z.__bindingPointIndex),m.set(St,Rt))}function ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},vt=null,dt={},x={},y=new WeakMap,b=[],M=null,A=!1,S=null,v=null,N=null,L=null,F=null,V=null,O=null,P=new Ie(0,0,0),Y=0,D=!1,w=null,k=null,at=null,ot=null,_t=null,Ee.set(0,0,o.canvas.width,o.canvas.height),B.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:et,disable:Tt,bindFramebuffer:Lt,drawBuffers:Nt,useProgram:At,setBlending:De,setMaterial:H,setFlipSided:ne,setCullFace:Vt,setLineWidth:$t,setPolygonOffset:It,setScissorTest:ye,activeTexture:Yt,bindTexture:ie,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:nt,texImage2D:Zt,texImage3D:Et,updateUBOMapping:ee,uniformBlockBinding:Bt,texStorage2D:Ot,texStorage3D:Qt,texSubImage2D:yt,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Xt,scissor:Dt,viewport:te,reset:ct}}function aC(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new pe,g=new WeakMap;let x;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,T){return b?new OffscreenCanvas(U,T):zl("canvas")}function A(U,T,nt){let yt=1;const Mt=ie(U);if((Mt.width>nt||Mt.height>nt)&&(yt=nt/Math.max(Mt.width,Mt.height)),yt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ht=Math.floor(yt*Mt.width),Xt=Math.floor(yt*Mt.height);x===void 0&&(x=M(ht,Xt));const Ot=T?M(ht,Xt):x;return Ot.width=ht,Ot.height=Xt,Ot.getContext("2d").drawImage(U,0,0,ht,Xt),de("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ht+"x"+Xt+")."),Ot}else return"data"in U&&de("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),U;return U}function S(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,T,nt,yt,Mt=!1){if(U!==null){if(o[U]!==void 0)return o[U];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ht=T;if(T===o.RED&&(nt===o.FLOAT&&(ht=o.R32F),nt===o.HALF_FLOAT&&(ht=o.R16F),nt===o.UNSIGNED_BYTE&&(ht=o.R8)),T===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ht=o.R8UI),nt===o.UNSIGNED_SHORT&&(ht=o.R16UI),nt===o.UNSIGNED_INT&&(ht=o.R32UI),nt===o.BYTE&&(ht=o.R8I),nt===o.SHORT&&(ht=o.R16I),nt===o.INT&&(ht=o.R32I)),T===o.RG&&(nt===o.FLOAT&&(ht=o.RG32F),nt===o.HALF_FLOAT&&(ht=o.RG16F),nt===o.UNSIGNED_BYTE&&(ht=o.RG8)),T===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ht=o.RG8UI),nt===o.UNSIGNED_SHORT&&(ht=o.RG16UI),nt===o.UNSIGNED_INT&&(ht=o.RG32UI),nt===o.BYTE&&(ht=o.RG8I),nt===o.SHORT&&(ht=o.RG16I),nt===o.INT&&(ht=o.RG32I)),T===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),nt===o.UNSIGNED_INT&&(ht=o.RGB32UI),nt===o.BYTE&&(ht=o.RGB8I),nt===o.SHORT&&(ht=o.RGB16I),nt===o.INT&&(ht=o.RGB32I)),T===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),nt===o.UNSIGNED_INT&&(ht=o.RGBA32UI),nt===o.BYTE&&(ht=o.RGBA8I),nt===o.SHORT&&(ht=o.RGBA16I),nt===o.INT&&(ht=o.RGBA32I)),T===o.RGB&&(nt===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),nt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),T===o.RGBA){const Xt=Mt?Qu:ze.getTransfer(yt);nt===o.FLOAT&&(ht=o.RGBA32F),nt===o.HALF_FLOAT&&(ht=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(ht=Xt===qe?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ht}function F(U,T){let nt;return U?T===null||T===or||T===Ll?nt=o.DEPTH24_STENCIL8:T===Oa?nt=o.DEPTH32F_STENCIL8:T===Ul&&(nt=o.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===or||T===Ll?nt=o.DEPTH_COMPONENT24:T===Oa?nt=o.DEPTH_COMPONENT32F:T===Ul&&(nt=o.DEPTH_COMPONENT16),nt}function V(U,T){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==_i&&U.minFilter!==gi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function O(U){const T=U.target;T.removeEventListener("dispose",O),Y(T),T.isVideoTexture&&g.delete(T)}function P(U){const T=U.target;T.removeEventListener("dispose",P),w(T)}function Y(U){const T=s.get(U);if(T.__webglInit===void 0)return;const nt=U.source,yt=y.get(nt);if(yt){const Mt=yt[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(U),Object.keys(yt).length===0&&y.delete(nt)}s.remove(U)}function D(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const nt=U.source,yt=y.get(nt);delete yt[T.__cacheKey],h.memory.textures--}function w(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(T.__webglFramebuffer[yt]))for(let Mt=0;Mt<T.__webglFramebuffer[yt].length;Mt++)o.deleteFramebuffer(T.__webglFramebuffer[yt][Mt]);else o.deleteFramebuffer(T.__webglFramebuffer[yt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[yt])}else{if(Array.isArray(T.__webglFramebuffer))for(let yt=0;yt<T.__webglFramebuffer.length;yt++)o.deleteFramebuffer(T.__webglFramebuffer[yt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let yt=0;yt<T.__webglColorRenderbuffer.length;yt++)T.__webglColorRenderbuffer[yt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[yt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const nt=U.textures;for(let yt=0,Mt=nt.length;yt<Mt;yt++){const ht=s.get(nt[yt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),h.memory.textures--),s.remove(nt[yt])}s.remove(U)}let k=0;function at(){k=0}function ot(){const U=k;return U>=l.maxTextures&&de("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),k+=1,U}function _t(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ft(U,T){const nt=s.get(U);if(U.isVideoTexture&&ye(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&nt.__version!==U.version){const yt=U.image;if(yt===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(nt,U,T);return}}else U.isExternalTexture&&(nt.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+T)}function j(U,T){const nt=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){Q(nt,U,T);return}else U.isExternalTexture&&(nt.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+T)}function rt(U,T){const nt=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){Q(nt,U,T);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+T)}function q(U,T){const nt=s.get(U);if(U.version>0&&nt.__version!==U.version){et(nt,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+T)}const vt={[Ku]:o.REPEAT,[La]:o.CLAMP_TO_EDGE,[Dp]:o.MIRRORED_REPEAT},dt={[_i]:o.NEAREST,[T1]:o.NEAREST_MIPMAP_NEAREST,[gu]:o.NEAREST_MIPMAP_LINEAR,[gi]:o.LINEAR,[Id]:o.LINEAR_MIPMAP_NEAREST,[Ms]:o.LINEAR_MIPMAP_LINEAR},qt={[D1]:o.NEVER,[z1]:o.ALWAYS,[N1]:o.LESS,[Sy]:o.LEQUAL,[U1]:o.EQUAL,[P1]:o.GEQUAL,[L1]:o.GREATER,[O1]:o.NOTEQUAL};function oe(U,T){if(T.type===Oa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===gi||T.magFilter===Id||T.magFilter===gu||T.magFilter===Ms||T.minFilter===gi||T.minFilter===Id||T.minFilter===gu||T.minFilter===Ms)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,vt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,vt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,vt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,dt[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,dt[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,qt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===_i||T.minFilter!==gu&&T.minFilter!==Ms||T.type===Oa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const nt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Ee(U,T){let nt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",O));const yt=T.source;let Mt=y.get(yt);Mt===void 0&&(Mt={},y.set(yt,Mt));const ht=_t(T);if(ht!==U.__cacheKey){Mt[ht]===void 0&&(Mt[ht]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),Mt[ht].usedTimes++;const Xt=Mt[U.__cacheKey];Xt!==void 0&&(Mt[U.__cacheKey].usedTimes--,Xt.usedTimes===0&&D(T)),U.__cacheKey=ht,U.__webglTexture=Mt[ht].texture}return nt}function B(U,T,nt){return Math.floor(Math.floor(U/nt)/T)}function pt(U,T,nt,yt){const ht=U.updateRanges;if(ht.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,nt,yt,T.data);else{ht.sort((Et,Dt)=>Et.start-Dt.start);let Xt=0;for(let Et=1;Et<ht.length;Et++){const Dt=ht[Xt],te=ht[Et],ee=Dt.start+Dt.count,Bt=B(te.start,T.width,4),ct=B(Dt.start,T.width,4);te.start<=ee+1&&Bt===ct&&B(te.start+te.count-1,T.width,4)===Bt?Dt.count=Math.max(Dt.count,te.start+te.count-Dt.start):(++Xt,ht[Xt]=te)}ht.length=Xt+1;const Ot=o.getParameter(o.UNPACK_ROW_LENGTH),Qt=o.getParameter(o.UNPACK_SKIP_PIXELS),Zt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Et=0,Dt=ht.length;Et<Dt;Et++){const te=ht[Et],ee=Math.floor(te.start/4),Bt=Math.ceil(te.count/4),ct=ee%T.width,z=Math.floor(ee/T.width),St=Bt,Ct=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ct),o.pixelStorei(o.UNPACK_SKIP_ROWS,z),i.texSubImage2D(o.TEXTURE_2D,0,ct,z,St,Ct,nt,yt,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ot),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Zt)}}function Q(U,T,nt){let yt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(yt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(yt=o.TEXTURE_3D);const Mt=Ee(U,T),ht=T.source;i.bindTexture(yt,U.__webglTexture,o.TEXTURE0+nt);const Xt=s.get(ht);if(ht.version!==Xt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+nt);const Ot=ze.getPrimaries(ze.workingColorSpace),Qt=T.colorSpace===Ua?null:ze.getPrimaries(T.colorSpace),Zt=T.colorSpace===Ua||Ot===Qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Et=A(T.image,!1,l.maxTextureSize);Et=Yt(T,Et);const Dt=u.convert(T.format,T.colorSpace),te=u.convert(T.type);let ee=L(T.internalFormat,Dt,te,T.colorSpace,T.isVideoTexture);oe(yt,T);let Bt;const ct=T.mipmaps,z=T.isVideoTexture!==!0,St=Xt.__version===void 0||Mt===!0,Ct=ht.dataReady,Rt=V(T,Et);if(T.isDepthTexture)ee=F(T.format===Pl,T.type),St&&(z?i.texStorage2D(o.TEXTURE_2D,1,ee,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,ee,Et.width,Et.height,0,Dt,te,null));else if(T.isDataTexture)if(ct.length>0){z&&St&&i.texStorage2D(o.TEXTURE_2D,Rt,ee,ct[0].width,ct[0].height);for(let bt=0,mt=ct.length;bt<mt;bt++)Bt=ct[bt],z?Ct&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Bt.width,Bt.height,Dt,te,Bt.data):i.texImage2D(o.TEXTURE_2D,bt,ee,Bt.width,Bt.height,0,Dt,te,Bt.data);T.generateMipmaps=!1}else z?(St&&i.texStorage2D(o.TEXTURE_2D,Rt,ee,Et.width,Et.height),Ct&&pt(T,Et,Dt,te)):i.texImage2D(o.TEXTURE_2D,0,ee,Et.width,Et.height,0,Dt,te,Et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){z&&St&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,ee,ct[0].width,ct[0].height,Et.depth);for(let bt=0,mt=ct.length;bt<mt;bt++)if(Bt=ct[bt],T.format!==Li)if(Dt!==null)if(z){if(Ct)if(T.layerUpdates.size>0){const jt=Av(Bt.width,Bt.height,T.format,T.type);for(const fe of T.layerUpdates){const We=Bt.data.subarray(fe*jt/Bt.data.BYTES_PER_ELEMENT,(fe+1)*jt/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,fe,Bt.width,Bt.height,1,Dt,We)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Bt.width,Bt.height,Et.depth,Dt,Bt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,ee,Bt.width,Bt.height,Et.depth,0,Bt.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Ct&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Bt.width,Bt.height,Et.depth,Dt,te,Bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,ee,Bt.width,Bt.height,Et.depth,0,Dt,te,Bt.data)}else{z&&St&&i.texStorage2D(o.TEXTURE_2D,Rt,ee,ct[0].width,ct[0].height);for(let bt=0,mt=ct.length;bt<mt;bt++)Bt=ct[bt],T.format!==Li?Dt!==null?z?Ct&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Bt.width,Bt.height,Dt,Bt.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,ee,Bt.width,Bt.height,0,Bt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Ct&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Bt.width,Bt.height,Dt,te,Bt.data):i.texImage2D(o.TEXTURE_2D,bt,ee,Bt.width,Bt.height,0,Dt,te,Bt.data)}else if(T.isDataArrayTexture)if(z){if(St&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,ee,Et.width,Et.height,Et.depth),Ct)if(T.layerUpdates.size>0){const bt=Av(Et.width,Et.height,T.format,T.type);for(const mt of T.layerUpdates){const jt=Et.data.subarray(mt*bt/Et.data.BYTES_PER_ELEMENT,(mt+1)*bt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,mt,Et.width,Et.height,1,Dt,te,jt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Dt,te,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ee,Et.width,Et.height,Et.depth,0,Dt,te,Et.data);else if(T.isData3DTexture)z?(St&&i.texStorage3D(o.TEXTURE_3D,Rt,ee,Et.width,Et.height,Et.depth),Ct&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Dt,te,Et.data)):i.texImage3D(o.TEXTURE_3D,0,ee,Et.width,Et.height,Et.depth,0,Dt,te,Et.data);else if(T.isFramebufferTexture){if(St)if(z)i.texStorage2D(o.TEXTURE_2D,Rt,ee,Et.width,Et.height);else{let bt=Et.width,mt=Et.height;for(let jt=0;jt<Rt;jt++)i.texImage2D(o.TEXTURE_2D,jt,ee,bt,mt,0,Dt,te,null),bt>>=1,mt>>=1}}else if(ct.length>0){if(z&&St){const bt=ie(ct[0]);i.texStorage2D(o.TEXTURE_2D,Rt,ee,bt.width,bt.height)}for(let bt=0,mt=ct.length;bt<mt;bt++)Bt=ct[bt],z?Ct&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Dt,te,Bt):i.texImage2D(o.TEXTURE_2D,bt,ee,Dt,te,Bt);T.generateMipmaps=!1}else if(z){if(St){const bt=ie(Et);i.texStorage2D(o.TEXTURE_2D,Rt,ee,bt.width,bt.height)}Ct&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Dt,te,Et)}else i.texImage2D(o.TEXTURE_2D,0,ee,Dt,te,Et);S(T)&&v(yt),Xt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function et(U,T,nt){if(T.image.length!==6)return;const yt=Ee(U,T),Mt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+nt);const ht=s.get(Mt);if(Mt.version!==ht.__version||yt===!0){i.activeTexture(o.TEXTURE0+nt);const Xt=ze.getPrimaries(ze.workingColorSpace),Ot=T.colorSpace===Ua?null:ze.getPrimaries(T.colorSpace),Qt=T.colorSpace===Ua||Xt===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const Zt=T.isCompressedTexture||T.image[0].isCompressedTexture,Et=T.image[0]&&T.image[0].isDataTexture,Dt=[];for(let mt=0;mt<6;mt++)!Zt&&!Et?Dt[mt]=A(T.image[mt],!0,l.maxCubemapSize):Dt[mt]=Et?T.image[mt].image:T.image[mt],Dt[mt]=Yt(T,Dt[mt]);const te=Dt[0],ee=u.convert(T.format,T.colorSpace),Bt=u.convert(T.type),ct=L(T.internalFormat,ee,Bt,T.colorSpace),z=T.isVideoTexture!==!0,St=ht.__version===void 0||yt===!0,Ct=Mt.dataReady;let Rt=V(T,te);oe(o.TEXTURE_CUBE_MAP,T);let bt;if(Zt){z&&St&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,ct,te.width,te.height);for(let mt=0;mt<6;mt++){bt=Dt[mt].mipmaps;for(let jt=0;jt<bt.length;jt++){const fe=bt[jt];T.format!==Li?ee!==null?z?Ct&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt,0,0,fe.width,fe.height,ee,fe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt,ct,fe.width,fe.height,0,fe.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt,0,0,fe.width,fe.height,ee,Bt,fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt,ct,fe.width,fe.height,0,ee,Bt,fe.data)}}}else{if(bt=T.mipmaps,z&&St){bt.length>0&&Rt++;const mt=ie(Dt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,ct,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Et){z?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Dt[mt].width,Dt[mt].height,ee,Bt,Dt[mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ct,Dt[mt].width,Dt[mt].height,0,ee,Bt,Dt[mt].data);for(let jt=0;jt<bt.length;jt++){const We=bt[jt].image[mt].image;z?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt+1,0,0,We.width,We.height,ee,Bt,We.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt+1,ct,We.width,We.height,0,ee,Bt,We.data)}}else{z?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ee,Bt,Dt[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ct,ee,Bt,Dt[mt]);for(let jt=0;jt<bt.length;jt++){const fe=bt[jt];z?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt+1,0,0,ee,Bt,fe.image[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt+1,ct,ee,Bt,fe.image[mt])}}}S(T)&&v(o.TEXTURE_CUBE_MAP),ht.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Tt(U,T,nt,yt,Mt,ht){const Xt=u.convert(nt.format,nt.colorSpace),Ot=u.convert(nt.type),Qt=L(nt.internalFormat,Xt,Ot,nt.colorSpace),Zt=s.get(T),Et=s.get(nt);if(Et.__renderTarget=T,!Zt.__hasExternalTextures){const Dt=Math.max(1,T.width>>ht),te=Math.max(1,T.height>>ht);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ht,Qt,Dt,te,T.depth,0,Xt,Ot,null):i.texImage2D(Mt,ht,Qt,Dt,te,0,Xt,Ot,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),It(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,Mt,Et.__webglTexture,0,$t(T)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,yt,Mt,Et.__webglTexture,ht),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Lt(U,T,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const yt=T.depthTexture,Mt=yt&&yt.isDepthTexture?yt.type:null,ht=F(T.stencilBuffer,Mt),Xt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=$t(T);It(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ot,ht,T.width,T.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,ht,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ht,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,U)}else{const yt=T.textures;for(let Mt=0;Mt<yt.length;Mt++){const ht=yt[Mt],Xt=u.convert(ht.format,ht.colorSpace),Ot=u.convert(ht.type),Qt=L(ht.internalFormat,Xt,Ot,ht.colorSpace),Zt=$t(T);nt&&It(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Qt,T.width,T.height):It(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Zt,Qt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Qt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Nt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=s.get(T.depthTexture);yt.__renderTarget=T,(!yt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ft(T.depthTexture,0);const Mt=yt.__webglTexture,ht=$t(T);if(T.depthTexture.format===Ol)It(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===Pl)It(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function At(U){const T=s.get(U),nt=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const yt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),yt){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,yt.removeEventListener("dispose",Mt)};yt.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=yt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const yt=U.texture.mipmaps;yt&&yt.length>0?Nt(T.__webglFramebuffer[0],U):Nt(T.__webglFramebuffer,U)}else if(nt){T.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[yt]),T.__webglDepthbuffer[yt]===void 0)T.__webglDepthbuffer[yt]=o.createRenderbuffer(),Lt(T.__webglDepthbuffer[yt],U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[yt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ht)}}else{const yt=U.texture.mipmaps;if(yt&&yt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Lt(T.__webglDepthbuffer,U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ht)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(U,T,nt){const yt=s.get(U);T!==void 0&&Tt(yt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&At(U)}function ce(U){const T=U.texture,nt=s.get(U),yt=s.get(T);U.addEventListener("dispose",P);const Mt=U.textures,ht=U.isWebGLCubeRenderTarget===!0,Xt=Mt.length>1;if(Xt||(yt.__webglTexture===void 0&&(yt.__webglTexture=o.createTexture()),yt.__version=T.version,h.memory.textures++),ht){nt.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[Ot]=[];for(let Qt=0;Qt<T.mipmaps.length;Qt++)nt.__webglFramebuffer[Ot][Qt]=o.createFramebuffer()}else nt.__webglFramebuffer[Ot]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Ot=0;Ot<T.mipmaps.length;Ot++)nt.__webglFramebuffer[Ot]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Ot=0,Qt=Mt.length;Ot<Qt;Ot++){const Zt=s.get(Mt[Ot]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&It(U)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Ot=0;Ot<Mt.length;Ot++){const Qt=Mt[Ot];nt.__webglColorRenderbuffer[Ot]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Ot]);const Zt=u.convert(Qt.format,Qt.colorSpace),Et=u.convert(Qt.type),Dt=L(Qt.internalFormat,Zt,Et,Qt.colorSpace,U.isXRRenderTarget===!0),te=$t(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,te,Dt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Ot])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Lt(nt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){i.bindTexture(o.TEXTURE_CUBE_MAP,yt.__webglTexture),oe(o.TEXTURE_CUBE_MAP,T);for(let Ot=0;Ot<6;Ot++)if(T.mipmaps&&T.mipmaps.length>0)for(let Qt=0;Qt<T.mipmaps.length;Qt++)Tt(nt.__webglFramebuffer[Ot][Qt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,Qt);else Tt(nt.__webglFramebuffer[Ot],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);S(T)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Ot=0,Qt=Mt.length;Ot<Qt;Ot++){const Zt=Mt[Ot],Et=s.get(Zt);let Dt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,Et.__webglTexture),oe(Dt,Zt),Tt(nt.__webglFramebuffer,U,Zt,o.COLOR_ATTACHMENT0+Ot,Dt,0),S(Zt)&&v(Dt)}i.unbindTexture()}else{let Ot=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ot,yt.__webglTexture),oe(Ot,T),T.mipmaps&&T.mipmaps.length>0)for(let Qt=0;Qt<T.mipmaps.length;Qt++)Tt(nt.__webglFramebuffer[Qt],U,T,o.COLOR_ATTACHMENT0,Ot,Qt);else Tt(nt.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Ot,0);S(T)&&v(Ot),i.unbindTexture()}U.depthBuffer&&At(U)}function De(U){const T=U.textures;for(let nt=0,yt=T.length;nt<yt;nt++){const Mt=T[nt];if(S(Mt)){const ht=N(U),Xt=s.get(Mt).__webglTexture;i.bindTexture(ht,Xt),v(ht),i.unbindTexture()}}}const H=[],ne=[];function Vt(U){if(U.samples>0){if(It(U)===!1){const T=U.textures,nt=U.width,yt=U.height;let Mt=o.COLOR_BUFFER_BIT;const ht=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=s.get(U),Ot=T.length>1;if(Ot)for(let Zt=0;Zt<T.length;Zt++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Qt=U.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Zt=0;Zt<T.length;Zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Ot){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Zt]);const Et=s.get(T[Zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,nt,yt,0,0,nt,yt,Mt,o.NEAREST),m===!0&&(H.length=0,ne.length=0,H.push(o.COLOR_ATTACHMENT0+Zt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(H.push(ht),ne.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ne)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,H))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ot)for(let Zt=0;Zt<T.length;Zt++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Zt]);const Et=s.get(T[Zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function $t(U){return Math.min(l.maxSamples,U.samples)}function It(U){const T=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ye(U){const T=h.render.frame;g.get(U)!==T&&(g.set(U,T),U.update())}function Yt(U,T){const nt=U.colorSpace,yt=U.format,Mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||nt!==vo&&nt!==Ua&&(ze.getTransfer(nt)===qe?(yt!==Li||Mt!==la)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rn("WebGLTextures: Unsupported texture color space:",nt)),T}function ie(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=at,this.setTexture2D=ft,this.setTexture2DArray=j,this.setTexture3D=rt,this.setTextureCube=q,this.rebindTextures=kt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=It}function sC(o,e){function i(s,l=Ua){let u;const h=ze.getTransfer(l);if(s===la)return o.UNSIGNED_BYTE;if(s===pm)return o.UNSIGNED_SHORT_4_4_4_4;if(s===mm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===xy)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===gy)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===py)return o.BYTE;if(s===my)return o.SHORT;if(s===Ul)return o.UNSIGNED_SHORT;if(s===dm)return o.INT;if(s===or)return o.UNSIGNED_INT;if(s===Oa)return o.FLOAT;if(s===bo)return o.HALF_FLOAT;if(s===_y)return o.ALPHA;if(s===vy)return o.RGB;if(s===Li)return o.RGBA;if(s===Ol)return o.DEPTH_COMPONENT;if(s===Pl)return o.DEPTH_STENCIL;if(s===yy)return o.RED;if(s===xm)return o.RED_INTEGER;if(s===gm)return o.RG;if(s===_m)return o.RG_INTEGER;if(s===vm)return o.RGBA_INTEGER;if(s===ku||s===Xu||s===ju||s===qu)if(h===qe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===ku)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ju)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===ku)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ju)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Np||s===Up||s===Lp||s===Op)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Np)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Up)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Lp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Op)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pp||s===zp||s===Ip)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Pp||s===zp)return h===qe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Ip)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fp||s===Bp||s===Hp||s===Vp||s===Gp||s===kp||s===Xp||s===jp||s===qp||s===Yp||s===Wp||s===Zp||s===Kp||s===Qp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Fp)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Bp)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Hp)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vp)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gp)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kp)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xp)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jp)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qp)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Yp)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wp)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zp)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Kp)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qp)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jp||s===$p||s===tm)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Jp)return h===qe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$p)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===tm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===em||s===nm||s===im||s===am)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===em)return u.COMPRESSED_RED_RGTC1_EXT;if(s===nm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===im)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===am)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ll?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const rC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new zy(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Vn({vertexShader:rC,fragmentShader:oC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new vi(new Eo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cC extends cr{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,y=null,b=null,M=null;const A=typeof XRWebGLBinding<"u",S=new lC,v={},N=i.getContextAttributes();let L=null,F=null;const V=[],O=[],P=new pe;let Y=null;const D=new Ui;D.viewport=new un;const w=new Ui;w.viewport=new un;const k=[D,w],at=new AE;let ot=null,_t=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let et=V[Q];return et===void 0&&(et=new sp,V[Q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Q){let et=V[Q];return et===void 0&&(et=new sp,V[Q]=et),et.getGripSpace()},this.getHand=function(Q){let et=V[Q];return et===void 0&&(et=new sp,V[Q]=et),et.getHandSpace()};function ft(Q){const et=O.indexOf(Q.inputSource);if(et===-1)return;const Tt=V[et];Tt!==void 0&&(Tt.update(Q.inputSource,Q.frame,p||h),Tt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",j),l.removeEventListener("inputsourceschange",rt);for(let Q=0;Q<V.length;Q++){const et=O[Q];et!==null&&(O[Q]=null,V[Q].disconnect(et))}ot=null,_t=null,S.reset();for(const Q in v)delete v[Q];e.setRenderTarget(L),b=null,y=null,x=null,l=null,F=null,pt.stop(),s.isPresenting=!1,e.setPixelRatio(Y),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,s.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return y!==null?y:b},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",j),l.addEventListener("inputsourceschange",rt),N.xrCompatible!==!0&&await i.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(P),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Lt=null,Nt=null;N.depth&&(Nt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=N.stencil?Pl:Ol,Lt=N.stencil?Ll:or);const At={colorFormat:i.RGBA8,depthFormat:Nt,scaleFactor:u};x=this.getBinding(),y=x.createProjectionLayer(At),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),F=new lr(y.textureWidth,y.textureHeight,{format:Li,type:la,depthTexture:new Py(y.textureWidth,y.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Tt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),F=new lr(b.framebufferWidth,b.framebufferHeight,{format:Li,type:la,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),pt.setContext(l),pt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function rt(Q){for(let et=0;et<Q.removed.length;et++){const Tt=Q.removed[et],Lt=O.indexOf(Tt);Lt>=0&&(O[Lt]=null,V[Lt].disconnect(Tt))}for(let et=0;et<Q.added.length;et++){const Tt=Q.added[et];let Lt=O.indexOf(Tt);if(Lt===-1){for(let At=0;At<V.length;At++)if(At>=O.length){O.push(Tt),Lt=At;break}else if(O[At]===null){O[At]=Tt,Lt=At;break}if(Lt===-1)break}const Nt=V[Lt];Nt&&Nt.connect(Tt)}}const q=new tt,vt=new tt;function dt(Q,et,Tt){q.setFromMatrixPosition(et.matrixWorld),vt.setFromMatrixPosition(Tt.matrixWorld);const Lt=q.distanceTo(vt),Nt=et.projectionMatrix.elements,At=Tt.projectionMatrix.elements,kt=Nt[14]/(Nt[10]-1),ce=Nt[14]/(Nt[10]+1),De=(Nt[9]+1)/Nt[5],H=(Nt[9]-1)/Nt[5],ne=(Nt[8]-1)/Nt[0],Vt=(At[8]+1)/At[0],$t=kt*ne,It=kt*Vt,ye=Lt/(-ne+Vt),Yt=ye*-ne;if(et.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Yt),Q.translateZ(ye),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Nt[10]===-1)Q.projectionMatrix.copy(et.projectionMatrix),Q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const ie=kt+ye,U=ce+ye,T=$t-Yt,nt=It+(Lt-Yt),yt=De*ce/U*ie,Mt=H*ce/U*ie;Q.projectionMatrix.makePerspective(T,nt,yt,Mt,ie,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function qt(Q,et){et===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(et.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let et=Q.near,Tt=Q.far;S.texture!==null&&(S.depthNear>0&&(et=S.depthNear),S.depthFar>0&&(Tt=S.depthFar)),at.near=w.near=D.near=et,at.far=w.far=D.far=Tt,(ot!==at.near||_t!==at.far)&&(l.updateRenderState({depthNear:at.near,depthFar:at.far}),ot=at.near,_t=at.far),at.layers.mask=Q.layers.mask|6,D.layers.mask=at.layers.mask&3,w.layers.mask=at.layers.mask&5;const Lt=Q.parent,Nt=at.cameras;qt(at,Lt);for(let At=0;At<Nt.length;At++)qt(Nt[At],Lt);Nt.length===2?dt(at,D,w):at.projectionMatrix.copy(D.projectionMatrix),oe(Q,at,Lt)};function oe(Q,et,Tt){Tt===null?Q.matrix.copy(et.matrixWorld):(Q.matrix.copy(Tt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(et.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(et.projectionMatrix),Q.projectionMatrixInverse.copy(et.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=sm*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(y===null&&b===null))return m},this.setFoveation=function(Q){m=Q,y!==null&&(y.fixedFoveation=Q),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=Q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(at)},this.getCameraTexture=function(Q){return v[Q]};let Ee=null;function B(Q,et){if(g=et.getViewerPose(p||h),M=et,g!==null){const Tt=g.views;b!==null&&(e.setRenderTargetFramebuffer(F,b.framebuffer),e.setRenderTarget(F));let Lt=!1;Tt.length!==at.cameras.length&&(at.cameras.length=0,Lt=!0);for(let ce=0;ce<Tt.length;ce++){const De=Tt[ce];let H=null;if(b!==null)H=b.getViewport(De);else{const Vt=x.getViewSubImage(y,De);H=Vt.viewport,ce===0&&(e.setRenderTargetTextures(F,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(F))}let ne=k[ce];ne===void 0&&(ne=new Ui,ne.layers.enable(ce),ne.viewport=new un,k[ce]=ne),ne.matrix.fromArray(De.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(De.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(H.x,H.y,H.width,H.height),ce===0&&(at.matrix.copy(ne.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Lt===!0&&at.cameras.push(ne)}const Nt=l.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){x=s.getBinding();const ce=x.getDepthInformation(Tt[0]);ce&&ce.isValid&&ce.texture&&S.init(ce,l.renderState)}if(Nt&&Nt.includes("camera-access")&&A){e.state.unbindTexture(),x=s.getBinding();for(let ce=0;ce<Tt.length;ce++){const De=Tt[ce].camera;if(De){let H=v[De];H||(H=new zy,v[De]=H);const ne=x.getCameraImage(De);H.sourceTexture=ne}}}}for(let Tt=0;Tt<V.length;Tt++){const Lt=O[Tt],Nt=V[Tt];Lt!==null&&Nt!==void 0&&Nt.update(Lt,et,p||h)}Ee&&Ee(Q,et),et.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:et}),M=null}const pt=new Iy;pt.setAnimationLoop(B),this.setAnimationLoop=function(Q){Ee=Q},this.dispose=function(){}}}const nr=new Ha,uC=new on;function fC(o,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,Ry(o)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,N,L,F){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(S,v):v.isMeshToonMaterial?(u(S,v),x(S,v)):v.isMeshPhongMaterial?(u(S,v),g(S,v)):v.isMeshStandardMaterial?(u(S,v),y(S,v),v.isMeshPhysicalMaterial&&b(S,v,F)):v.isMeshMatcapMaterial?(u(S,v),M(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),A(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(h(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?m(S,v,N,L):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===ai&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===ai&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const N=e.get(v),L=N.envMap,F=N.envMapRotation;L&&(S.envMap.value=L,nr.copy(F),nr.x*=-1,nr.y*=-1,nr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),S.envMapRotation.value.setFromMatrix4(uC.makeRotationFromEuler(nr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,N,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*N,S.scale.value=L*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function x(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function y(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function b(S,v,N){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ai&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,v){v.matcap&&(S.matcap.value=v.matcap)}function A(S,v){const N=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function hC(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const F=L.program;s.uniformBlockBinding(N,F)}function p(N,L){let F=l[N.id];F===void 0&&(M(N),F=g(N),l[N.id]=F,N.addEventListener("dispose",S));const V=L.program;s.updateUBOMapping(N,V);const O=e.render.frame;u[N.id]!==O&&(y(N),u[N.id]=O)}function g(N){const L=x();N.__bindingPointIndex=L;const F=o.createBuffer(),V=N.__size,O=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,V,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,F),F}function x(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return rn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(N){const L=l[N.id],F=N.uniforms,V=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let O=0,P=F.length;O<P;O++){const Y=Array.isArray(F[O])?F[O]:[F[O]];for(let D=0,w=Y.length;D<w;D++){const k=Y[D];if(b(k,O,D,V)===!0){const at=k.__offset,ot=Array.isArray(k.value)?k.value:[k.value];let _t=0;for(let ft=0;ft<ot.length;ft++){const j=ot[ft],rt=A(j);typeof j=="number"||typeof j=="boolean"?(k.__data[0]=j,o.bufferSubData(o.UNIFORM_BUFFER,at+_t,k.__data)):j.isMatrix3?(k.__data[0]=j.elements[0],k.__data[1]=j.elements[1],k.__data[2]=j.elements[2],k.__data[3]=0,k.__data[4]=j.elements[3],k.__data[5]=j.elements[4],k.__data[6]=j.elements[5],k.__data[7]=0,k.__data[8]=j.elements[6],k.__data[9]=j.elements[7],k.__data[10]=j.elements[8],k.__data[11]=0):(j.toArray(k.__data,_t),_t+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(N,L,F,V){const O=N.value,P=L+"_"+F;if(V[P]===void 0)return typeof O=="number"||typeof O=="boolean"?V[P]=O:V[P]=O.clone(),!0;{const Y=V[P];if(typeof O=="number"||typeof O=="boolean"){if(Y!==O)return V[P]=O,!0}else if(Y.equals(O)===!1)return Y.copy(O),!0}return!1}function M(N){const L=N.uniforms;let F=0;const V=16;for(let P=0,Y=L.length;P<Y;P++){const D=Array.isArray(L[P])?L[P]:[L[P]];for(let w=0,k=D.length;w<k;w++){const at=D[w],ot=Array.isArray(at.value)?at.value:[at.value];for(let _t=0,ft=ot.length;_t<ft;_t++){const j=ot[_t],rt=A(j),q=F%V,vt=q%rt.boundary,dt=q+vt;F+=vt,dt!==0&&V-dt<rt.storage&&(F+=V-dt),at.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=F,F+=rt.storage}}}const O=F%V;return O>0&&(F+=V-O),N.__size=F,N.__cache={},this}function A(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):de("WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const F=h.indexOf(L.__bindingPointIndex);h.splice(F,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function v(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}const dC=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Da=null;function pC(){return Da===null&&(Da=new Ny(dC,32,32,gm,bo),Da.minFilter=gi,Da.magFilter=gi,Da.wrapS=La,Da.wrapT=La,Da.generateMipmaps=!1,Da.needsUpdate=!0),Da}class mC{constructor(e={}){const{canvas:i=I1(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const M=new Set([vm,_m,xm]),A=new Set([la,or,Ul,Ll,pm,mm]),S=new Uint32Array(4),v=new Int32Array(4);let N=null,L=null;const F=[],V=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let P=!1;this._outputColorSpace=ii;let Y=0,D=0,w=null,k=-1,at=null;const ot=new un,_t=new un;let ft=null;const j=new Ie(0);let rt=0,q=i.width,vt=i.height,dt=1,qt=null,oe=null;const Ee=new un(0,0,q,vt),B=new un(0,0,q,vt);let pt=!1;const Q=new Uy;let et=!1,Tt=!1;const Lt=new on,Nt=new tt,At=new un,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function De(){return w===null?dt:1}let H=s;function ne(R,K){return i.getContext(R,K)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${hm}`),i.addEventListener("webglcontextlost",bt,!1),i.addEventListener("webglcontextrestored",mt,!1),i.addEventListener("webglcontextcreationerror",jt,!1),H===null){const K="webgl2";if(H=ne(K,R),H===null)throw ne(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let Vt,$t,It,ye,Yt,ie,U,T,nt,yt,Mt,ht,Xt,Ot,Qt,Zt,Et,Dt,te,ee,Bt,ct,z,St;function Ct(){Vt=new M2(H),Vt.init(),ct=new sC(H,Vt),$t=new p2(H,Vt,e,ct),It=new iC(H,Vt),$t.reversedDepthBuffer&&y&&It.buffers.depth.setReversed(!0),ye=new A2(H),Yt=new XA,ie=new aC(H,Vt,It,Yt,$t,ct,ye),U=new x2(O),T=new b2(O),nt=new DE(H),z=new h2(H,nt),yt=new E2(H,nt,ye,z),Mt=new R2(H,yt,nt,ye),te=new C2(H,$t,ie),Zt=new m2(Yt),ht=new kA(O,U,T,Vt,$t,z,Zt),Xt=new fC(O,Yt),Ot=new qA,Qt=new JA(Vt),Dt=new f2(O,U,T,It,Mt,b,m),Et=new eC(O,Mt,$t),St=new hC(H,ye,$t,It),ee=new d2(H,Vt,ye),Bt=new T2(H,Vt,ye),ye.programs=ht.programs,O.capabilities=$t,O.extensions=Vt,O.properties=Yt,O.renderLists=Ot,O.shadowMap=Et,O.state=It,O.info=ye}Ct();const Rt=new cC(O,H);this.xr=Rt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=Vt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Vt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(R){R!==void 0&&(dt=R,this.setSize(q,vt,!1))},this.getSize=function(R){return R.set(q,vt)},this.setSize=function(R,K,lt=!0){if(Rt.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,vt=K,i.width=Math.floor(R*dt),i.height=Math.floor(K*dt),lt===!0&&(i.style.width=R+"px",i.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(q*dt,vt*dt).floor()},this.setDrawingBufferSize=function(R,K,lt){q=R,vt=K,dt=lt,i.width=Math.floor(R*lt),i.height=Math.floor(K*lt),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(ot)},this.getViewport=function(R){return R.copy(Ee)},this.setViewport=function(R,K,lt,ut){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,K,lt,ut),It.viewport(ot.copy(Ee).multiplyScalar(dt).round())},this.getScissor=function(R){return R.copy(B)},this.setScissor=function(R,K,lt,ut){R.isVector4?B.set(R.x,R.y,R.z,R.w):B.set(R,K,lt,ut),It.scissor(_t.copy(B).multiplyScalar(dt).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(R){It.setScissorTest(pt=R)},this.setOpaqueSort=function(R){qt=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,lt=!0){let ut=0;if(R){let J=!1;if(w!==null){const wt=w.texture.format;J=M.has(wt)}if(J){const wt=w.texture.type,Ut=A.has(wt),zt=Dt.getClearColor(),Ht=Dt.getClearAlpha(),re=zt.r,ue=zt.g,ae=zt.b;Ut?(S[0]=re,S[1]=ue,S[2]=ae,S[3]=Ht,H.clearBufferuiv(H.COLOR,0,S)):(v[0]=re,v[1]=ue,v[2]=ae,v[3]=Ht,H.clearBufferiv(H.COLOR,0,v))}else ut|=H.COLOR_BUFFER_BIT}K&&(ut|=H.DEPTH_BUFFER_BIT),lt&&(ut|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",bt,!1),i.removeEventListener("webglcontextrestored",mt,!1),i.removeEventListener("webglcontextcreationerror",jt,!1),Dt.dispose(),Ot.dispose(),Qt.dispose(),Yt.dispose(),U.dispose(),T.dispose(),Mt.dispose(),z.dispose(),St.dispose(),ht.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",jl),Rt.removeEventListener("sessionend",ql),ca.stop()};function bt(R){R.preventDefault(),tv("WebGLRenderer: Context Lost."),P=!0}function mt(){tv("WebGLRenderer: Context Restored."),P=!1;const R=ye.autoReset,K=Et.enabled,lt=Et.autoUpdate,ut=Et.needsUpdate,J=Et.type;Ct(),ye.autoReset=R,Et.enabled=K,Et.autoUpdate=lt,Et.needsUpdate=ut,Et.type=J}function jt(R){rn("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function fe(R){const K=R.target;K.removeEventListener("dispose",fe),We(K)}function We(R){Ue(R),Yt.remove(R)}function Ue(R){const K=Yt.get(R).programs;K!==void 0&&(K.forEach(function(lt){ht.releaseProgram(lt)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,lt,ut,J,wt){K===null&&(K=kt);const Ut=J.isMesh&&J.matrixWorld.determinant()<0,zt=Wl(R,K,lt,ut,J);It.setMaterial(ut,Ut);let Ht=lt.index,re=1;if(ut.wireframe===!0){if(Ht=yt.getWireframeAttribute(lt),Ht===void 0)return;re=2}const ue=lt.drawRange,ae=lt.attributes.position;let Se=ue.start*re,Le=(ue.start+ue.count)*re;wt!==null&&(Se=Math.max(Se,wt.start*re),Le=Math.min(Le,(wt.start+wt.count)*re)),Ht!==null?(Se=Math.max(Se,0),Le=Math.min(Le,Ht.count)):ae!=null&&(Se=Math.max(Se,0),Le=Math.min(Le,ae.count));const Ze=Le-Se;if(Ze<0||Ze===1/0)return;z.setup(J,ut,zt,lt,Ht);let Ke,Ne=ee;if(Ht!==null&&(Ke=nt.get(Ht),Ne=Bt,Ne.setIndex(Ke)),J.isMesh)ut.wireframe===!0?(It.setLineWidth(ut.wireframeLinewidth*De()),Ne.setMode(H.LINES)):Ne.setMode(H.TRIANGLES);else if(J.isLine){let Kt=ut.linewidth;Kt===void 0&&(Kt=1),It.setLineWidth(Kt*De()),J.isLineSegments?Ne.setMode(H.LINES):J.isLineLoop?Ne.setMode(H.LINE_LOOP):Ne.setMode(H.LINE_STRIP)}else J.isPoints?Ne.setMode(H.POINTS):J.isSprite&&Ne.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Il("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Ne.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Kt=J._multiDrawStarts,Ve=J._multiDrawCounts,be=J._multiDrawCount,Pe=Ht?nt.get(Ht).bytesPerElement:1,ua=Yt.get(ut).currentProgram.getUniforms();for(let On=0;On<be;On++)ua.setValue(H,"_gl_DrawID",On),Ne.render(Kt[On]/Pe,Ve[On])}else if(J.isInstancedMesh)Ne.renderInstances(Se,Ze,J.count);else if(lt.isInstancedBufferGeometry){const Kt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ve=Math.min(lt.instanceCount,Kt);Ne.renderInstances(Se,Ze,Ve)}else Ne.render(Se,Ze)};function tn(R,K,lt){R.transparent===!0&&R.side===aa&&R.forceSinglePass===!1?(R.side=ai,R.needsUpdate=!0,ji(R,K,lt),R.side=Fa,R.needsUpdate=!0,ji(R,K,lt),R.side=aa):ji(R,K,lt)}this.compile=function(R,K,lt=null){lt===null&&(lt=R),L=Qt.get(lt),L.init(K),V.push(L),lt.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(L.pushLight(J),J.castShadow&&L.pushShadow(J))}),R!==lt&&R.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(L.pushLight(J),J.castShadow&&L.pushShadow(J))}),L.setupLights();const ut=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const wt=J.material;if(wt)if(Array.isArray(wt))for(let Ut=0;Ut<wt.length;Ut++){const zt=wt[Ut];tn(zt,lt,J),ut.add(zt)}else tn(wt,lt,J),ut.add(wt)}),L=V.pop(),ut},this.compileAsync=function(R,K,lt=null){const ut=this.compile(R,K,lt);return new Promise(J=>{function wt(){if(ut.forEach(function(Ut){Yt.get(Ut).currentProgram.isReady()&&ut.delete(Ut)}),ut.size===0){J(R);return}setTimeout(wt,10)}Vt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let fn=null;function Gn(R){fn&&fn(R)}function jl(){ca.stop()}function ql(){ca.start()}const ca=new Iy;ca.setAnimationLoop(Gn),typeof self<"u"&&ca.setContext(self),this.setAnimationLoop=function(R){fn=R,Rt.setAnimationLoop(R),R===null?ca.stop():ca.start()},Rt.addEventListener("sessionstart",jl),Rt.addEventListener("sessionend",ql),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){rn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(K),K=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(O,R,K,w),L=Qt.get(R,V.length),L.init(K),V.push(L),Lt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Q.setFromProjectionMatrix(Lt,sa,K.reversedDepth),Tt=this.localClippingEnabled,et=Zt.init(this.clippingPlanes,Tt),N=Ot.get(R,F.length),N.init(),F.push(N),Rt.enabled===!0&&Rt.isPresenting===!0){const wt=O.xr.getDepthSensingMesh();wt!==null&&Va(wt,K,-1/0,O.sortObjects)}Va(R,K,0,O.sortObjects),N.finish(),O.sortObjects===!0&&N.sort(qt,oe),ce=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,ce&&Dt.addToRenderList(N,R),this.info.render.frame++,et===!0&&Zt.beginShadows();const lt=L.state.shadowsArray;Et.render(lt,R,K),et===!0&&Zt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=N.opaque,J=N.transmissive;if(L.setupLights(),K.isArrayCamera){const wt=K.cameras;if(J.length>0)for(let Ut=0,zt=wt.length;Ut<zt;Ut++){const Ht=wt[Ut];Rs(ut,J,R,Ht)}ce&&Dt.render(R);for(let Ut=0,zt=wt.length;Ut<zt;Ut++){const Ht=wt[Ut];Cs(N,R,Ht,Ht.viewport)}}else J.length>0&&Rs(ut,J,R,K),ce&&Dt.render(R),Cs(N,R,K);w!==null&&D===0&&(ie.updateMultisampleRenderTarget(w),ie.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(O,R,K),z.resetDefaultState(),k=-1,at=null,V.pop(),V.length>0?(L=V[V.length-1],et===!0&&Zt.setGlobalState(O.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?N=F[F.length-1]:N=null};function Va(R,K,lt,ut){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){ut&&At.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Lt);const Ut=Mt.update(R),zt=R.material;zt.visible&&N.push(R,Ut,zt,lt,At.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Ut=Mt.update(R),zt=R.material;if(ut&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),At.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),At.copy(Ut.boundingSphere.center)),At.applyMatrix4(R.matrixWorld).applyMatrix4(Lt)),Array.isArray(zt)){const Ht=Ut.groups;for(let re=0,ue=Ht.length;re<ue;re++){const ae=Ht[re],Se=zt[ae.materialIndex];Se&&Se.visible&&N.push(R,Ut,Se,lt,At.z,ae)}}else zt.visible&&N.push(R,Ut,zt,lt,At.z,null)}}const wt=R.children;for(let Ut=0,zt=wt.length;Ut<zt;Ut++)Va(wt[Ut],K,lt,ut)}function Cs(R,K,lt,ut){const{opaque:J,transmissive:wt,transparent:Ut}=R;L.setupLightsView(lt),et===!0&&Zt.setGlobalState(O.clippingPlanes,lt),ut&&It.viewport(ot.copy(ut)),J.length>0&&yi(J,K,lt),wt.length>0&&yi(wt,K,lt),Ut.length>0&&yi(Ut,K,lt),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Rs(R,K,lt,ut){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;L.state.transmissionRenderTarget[ut.id]===void 0&&(L.state.transmissionRenderTarget[ut.id]=new lr(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?bo:la,minFilter:Ms,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));const wt=L.state.transmissionRenderTarget[ut.id],Ut=ut.viewport||ot;wt.setSize(Ut.z*O.transmissionResolutionScale,Ut.w*O.transmissionResolutionScale);const zt=O.getRenderTarget(),Ht=O.getActiveCubeFace(),re=O.getActiveMipmapLevel();O.setRenderTarget(wt),O.getClearColor(j),rt=O.getClearAlpha(),rt<1&&O.setClearColor(16777215,.5),O.clear(),ce&&Dt.render(lt);const ue=O.toneMapping;O.toneMapping=Ts;const ae=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),L.setupLightsView(ut),et===!0&&Zt.setGlobalState(O.clippingPlanes,ut),yi(R,lt,ut),ie.updateMultisampleRenderTarget(wt),ie.updateRenderTargetMipmap(wt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Le=0,Ze=K.length;Le<Ze;Le++){const Ke=K[Le],{object:Ne,geometry:Kt,material:Ve,group:be}=Ke;if(Ve.side===aa&&Ne.layers.test(ut.layers)){const Pe=Ve.side;Ve.side=ai,Ve.needsUpdate=!0,ws(Ne,lt,ut,Kt,Ve,be),Ve.side=Pe,Ve.needsUpdate=!0,Se=!0}}Se===!0&&(ie.updateMultisampleRenderTarget(wt),ie.updateRenderTargetMipmap(wt))}O.setRenderTarget(zt,Ht,re),O.setClearColor(j,rt),ae!==void 0&&(ut.viewport=ae),O.toneMapping=ue}function yi(R,K,lt){const ut=K.isScene===!0?K.overrideMaterial:null;for(let J=0,wt=R.length;J<wt;J++){const Ut=R[J],{object:zt,geometry:Ht,group:re}=Ut;let ue=Ut.material;ue.allowOverride===!0&&ut!==null&&(ue=ut),zt.layers.test(lt.layers)&&ws(zt,K,lt,Ht,ue,re)}}function ws(R,K,lt,ut,J,wt){R.onBeforeRender(O,K,lt,ut,J,wt),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(O,K,lt,ut,R,wt),J.transparent===!0&&J.side===aa&&J.forceSinglePass===!1?(J.side=ai,J.needsUpdate=!0,O.renderBufferDirect(lt,K,ut,J,R,wt),J.side=Fa,J.needsUpdate=!0,O.renderBufferDirect(lt,K,ut,J,R,wt),J.side=aa):O.renderBufferDirect(lt,K,ut,J,R,wt),R.onAfterRender(O,K,lt,ut,J,wt)}function ji(R,K,lt){K.isScene!==!0&&(K=kt);const ut=Yt.get(R),J=L.state.lights,wt=L.state.shadowsArray,Ut=J.state.version,zt=ht.getParameters(R,J.state,wt,K,lt),Ht=ht.getProgramCacheKey(zt);let re=ut.programs;ut.environment=R.isMeshStandardMaterial?K.environment:null,ut.fog=K.fog,ut.envMap=(R.isMeshStandardMaterial?T:U).get(R.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,re===void 0&&(R.addEventListener("dispose",fe),re=new Map,ut.programs=re);let ue=re.get(Ht);if(ue!==void 0){if(ut.currentProgram===ue&&ut.lightsStateVersion===Ut)return Yl(R,zt),ue}else zt.uniforms=ht.getUniforms(R),R.onBeforeCompile(zt,O),ue=ht.acquireProgram(zt,Ht),re.set(Ht,ue),ut.uniforms=zt.uniforms;const ae=ut.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ae.clippingPlanes=Zt.uniform),Yl(R,zt),ut.needsLights=Ds(R),ut.lightsStateVersion=Ut,ut.needsLights&&(ae.ambientLightColor.value=J.state.ambient,ae.lightProbe.value=J.state.probe,ae.directionalLights.value=J.state.directional,ae.directionalLightShadows.value=J.state.directionalShadow,ae.spotLights.value=J.state.spot,ae.spotLightShadows.value=J.state.spotShadow,ae.rectAreaLights.value=J.state.rectArea,ae.ltc_1.value=J.state.rectAreaLTC1,ae.ltc_2.value=J.state.rectAreaLTC2,ae.pointLights.value=J.state.point,ae.pointLightShadows.value=J.state.pointShadow,ae.hemisphereLights.value=J.state.hemi,ae.directionalShadowMap.value=J.state.directionalShadowMap,ae.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ae.spotShadowMap.value=J.state.spotShadowMap,ae.spotLightMatrix.value=J.state.spotLightMatrix,ae.spotLightMap.value=J.state.spotLightMap,ae.pointShadowMap.value=J.state.pointShadowMap,ae.pointShadowMatrix.value=J.state.pointShadowMatrix),ut.currentProgram=ue,ut.uniformsList=null,ue}function Ao(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Wu.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Yl(R,K){const lt=Yt.get(R);lt.outputColorSpace=K.outputColorSpace,lt.batching=K.batching,lt.batchingColor=K.batchingColor,lt.instancing=K.instancing,lt.instancingColor=K.instancingColor,lt.instancingMorph=K.instancingMorph,lt.skinning=K.skinning,lt.morphTargets=K.morphTargets,lt.morphNormals=K.morphNormals,lt.morphColors=K.morphColors,lt.morphTargetsCount=K.morphTargetsCount,lt.numClippingPlanes=K.numClippingPlanes,lt.numIntersection=K.numClipIntersection,lt.vertexAlphas=K.vertexAlphas,lt.vertexTangents=K.vertexTangents,lt.toneMapping=K.toneMapping}function Wl(R,K,lt,ut,J){K.isScene!==!0&&(K=kt),ie.resetTextureUnits();const wt=K.fog,Ut=ut.isMeshStandardMaterial?K.environment:null,zt=w===null?O.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:vo,Ht=(ut.isMeshStandardMaterial?T:U).get(ut.envMap||Ut),re=ut.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ue=!!lt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),ae=!!lt.morphAttributes.position,Se=!!lt.morphAttributes.normal,Le=!!lt.morphAttributes.color;let Ze=Ts;ut.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ze=O.toneMapping);const Ke=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ne=Ke!==void 0?Ke.length:0,Kt=Yt.get(ut),Ve=L.state.lights;if(et===!0&&(Tt===!0||R!==at)){const bn=R===at&&ut.id===k;Zt.setState(ut,R,bn)}let be=!1;ut.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ve.state.version||Kt.outputColorSpace!==zt||J.isBatchedMesh&&Kt.batching===!1||!J.isBatchedMesh&&Kt.batching===!0||J.isBatchedMesh&&Kt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Kt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Kt.instancing===!1||!J.isInstancedMesh&&Kt.instancing===!0||J.isSkinnedMesh&&Kt.skinning===!1||!J.isSkinnedMesh&&Kt.skinning===!0||J.isInstancedMesh&&Kt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Kt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Kt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Kt.instancingMorph===!1&&J.morphTexture!==null||Kt.envMap!==Ht||ut.fog===!0&&Kt.fog!==wt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Zt.numPlanes||Kt.numIntersection!==Zt.numIntersection)||Kt.vertexAlphas!==re||Kt.vertexTangents!==ue||Kt.morphTargets!==ae||Kt.morphNormals!==Se||Kt.morphColors!==Le||Kt.toneMapping!==Ze||Kt.morphTargetsCount!==Ne)&&(be=!0):(be=!0,Kt.__version=ut.version);let Pe=Kt.currentProgram;be===!0&&(Pe=ji(ut,K,J));let ua=!1,On=!1,Ga=!1;const Fe=Pe.getUniforms(),ln=Kt.uniforms;if(It.useProgram(Pe.program)&&(ua=!0,On=!0,Ga=!0),ut.id!==k&&(k=ut.id,On=!0),ua||at!==R){It.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Fe.setValue(H,"projectionMatrix",R.projectionMatrix),Fe.setValue(H,"viewMatrix",R.matrixWorldInverse);const Cn=Fe.map.cameraPosition;Cn!==void 0&&Cn.setValue(H,Nt.setFromMatrixPosition(R.matrixWorld)),$t.logarithmicDepthBuffer&&Fe.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Fe.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),at!==R&&(at=R,On=!0,Ga=!0)}if(J.isSkinnedMesh){Fe.setOptional(H,J,"bindMatrix"),Fe.setOptional(H,J,"bindMatrixInverse");const bn=J.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Fe.setValue(H,"boneTexture",bn.boneTexture,ie))}J.isBatchedMesh&&(Fe.setOptional(H,J,"batchingTexture"),Fe.setValue(H,"batchingTexture",J._matricesTexture,ie),Fe.setOptional(H,J,"batchingIdTexture"),Fe.setValue(H,"batchingIdTexture",J._indirectTexture,ie),Fe.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&Fe.setValue(H,"batchingColorTexture",J._colorsTexture,ie));const Zn=lt.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&te.update(J,lt,Pe),(On||Kt.receiveShadow!==J.receiveShadow)&&(Kt.receiveShadow=J.receiveShadow,Fe.setValue(H,"receiveShadow",J.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(ln.envMap.value=Ht,ln.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&K.environment!==null&&(ln.envMapIntensity.value=K.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=pC()),On&&(Fe.setValue(H,"toneMappingExposure",O.toneMappingExposure),Kt.needsLights&&Co(ln,Ga),wt&&ut.fog===!0&&Xt.refreshFogUniforms(ln,wt),Xt.refreshMaterialUniforms(ln,ut,dt,vt,L.state.transmissionRenderTarget[R.id]),Wu.upload(H,Ao(Kt),ln,ie)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Wu.upload(H,Ao(Kt),ln,ie),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Fe.setValue(H,"center",J.center),Fe.setValue(H,"modelViewMatrix",J.modelViewMatrix),Fe.setValue(H,"normalMatrix",J.normalMatrix),Fe.setValue(H,"modelMatrix",J.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const bn=ut.uniformsGroups;for(let Cn=0,Ro=bn.length;Cn<Ro;Cn++){const _e=bn[Cn];St.update(_e,Pe),St.bind(_e,Pe)}}return Pe}function Co(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Ds(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,K,lt){const ut=Yt.get(R);ut.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),Yt.get(R.texture).__webglTexture=K,Yt.get(R.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:lt,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const lt=Yt.get(R);lt.__webglFramebuffer=K,lt.__useDefaultFramebuffer=K===void 0};const rf=H.createFramebuffer();this.setRenderTarget=function(R,K=0,lt=0){w=R,Y=K,D=lt;let ut=!0,J=null,wt=!1,Ut=!1;if(R){const Ht=Yt.get(R);if(Ht.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(H.FRAMEBUFFER,null),ut=!1;else if(Ht.__webglFramebuffer===void 0)ie.setupRenderTarget(R);else if(Ht.__hasExternalTextures)ie.rebindTextures(R,Yt.get(R.texture).__webglTexture,Yt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ae=R.depthTexture;if(Ht.__boundDepthTexture!==ae){if(ae!==null&&Yt.has(ae)&&(R.width!==ae.image.width||R.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(R)}}const re=R.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Ut=!0);const ue=Yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ue[K])?J=ue[K][lt]:J=ue[K],wt=!0):R.samples>0&&ie.useMultisampledRTT(R)===!1?J=Yt.get(R).__webglMultisampledFramebuffer:Array.isArray(ue)?J=ue[lt]:J=ue,ot.copy(R.viewport),_t.copy(R.scissor),ft=R.scissorTest}else ot.copy(Ee).multiplyScalar(dt).floor(),_t.copy(B).multiplyScalar(dt).floor(),ft=pt;if(lt!==0&&(J=rf),It.bindFramebuffer(H.FRAMEBUFFER,J)&&ut&&It.drawBuffers(R,J),It.viewport(ot),It.scissor(_t),It.setScissorTest(ft),wt){const Ht=Yt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ht.__webglTexture,lt)}else if(Ut){const Ht=K;for(let re=0;re<R.textures.length;re++){const ue=Yt.get(R.textures[re]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+re,ue.__webglTexture,lt,Ht)}}else if(R!==null&&lt!==0){const Ht=Yt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ht.__webglTexture,lt)}k=-1},this.readRenderTargetPixels=function(R,K,lt,ut,J,wt,Ut,zt=0){if(!(R&&R.isWebGLRenderTarget)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ht=Ht[Ut]),Ht){It.bindFramebuffer(H.FRAMEBUFFER,Ht);try{const re=R.textures[zt],ue=re.format,ae=re.type;if(!$t.textureFormatReadable(ue)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(ae)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ut&&lt>=0&&lt<=R.height-J&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+zt),H.readPixels(K,lt,ut,J,ct.convert(ue),ct.convert(ae),wt))}finally{const re=w!==null?Yt.get(w).__webglFramebuffer:null;It.bindFramebuffer(H.FRAMEBUFFER,re)}}},this.readRenderTargetPixelsAsync=async function(R,K,lt,ut,J,wt,Ut,zt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ht=Ht[Ut]),Ht)if(K>=0&&K<=R.width-ut&&lt>=0&&lt<=R.height-J){It.bindFramebuffer(H.FRAMEBUFFER,Ht);const re=R.textures[zt],ue=re.format,ae=re.type;if(!$t.textureFormatReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Se),H.bufferData(H.PIXEL_PACK_BUFFER,wt.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+zt),H.readPixels(K,lt,ut,J,ct.convert(ue),ct.convert(ae),0);const Le=w!==null?Yt.get(w).__webglFramebuffer:null;It.bindFramebuffer(H.FRAMEBUFFER,Le);const Ze=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await F1(H,Ze,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Se),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,wt),H.deleteBuffer(Se),H.deleteSync(Ze),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,lt=0){const ut=Math.pow(2,-lt),J=Math.floor(R.image.width*ut),wt=Math.floor(R.image.height*ut),Ut=K!==null?K.x:0,zt=K!==null?K.y:0;ie.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,lt,0,0,Ut,zt,J,wt),It.unbindTexture()};const Zl=H.createFramebuffer(),Kl=H.createFramebuffer();this.copyTextureToTexture=function(R,K,lt=null,ut=null,J=0,wt=null){wt===null&&(J!==0?(Il("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),wt=J,J=0):wt=0);let Ut,zt,Ht,re,ue,ae,Se,Le,Ze;const Ke=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(lt!==null)Ut=lt.max.x-lt.min.x,zt=lt.max.y-lt.min.y,Ht=lt.isBox3?lt.max.z-lt.min.z:1,re=lt.min.x,ue=lt.min.y,ae=lt.isBox3?lt.min.z:0;else{const Zn=Math.pow(2,-J);Ut=Math.floor(Ke.width*Zn),zt=Math.floor(Ke.height*Zn),R.isDataArrayTexture?Ht=Ke.depth:R.isData3DTexture?Ht=Math.floor(Ke.depth*Zn):Ht=1,re=0,ue=0,ae=0}ut!==null?(Se=ut.x,Le=ut.y,Ze=ut.z):(Se=0,Le=0,Ze=0);const Ne=ct.convert(K.format),Kt=ct.convert(K.type);let Ve;K.isData3DTexture?(ie.setTexture3D(K,0),Ve=H.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ie.setTexture2DArray(K,0),Ve=H.TEXTURE_2D_ARRAY):(ie.setTexture2D(K,0),Ve=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment);const be=H.getParameter(H.UNPACK_ROW_LENGTH),Pe=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ua=H.getParameter(H.UNPACK_SKIP_PIXELS),On=H.getParameter(H.UNPACK_SKIP_ROWS),Ga=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ke.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ke.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,re),H.pixelStorei(H.UNPACK_SKIP_ROWS,ue),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ae);const Fe=R.isDataArrayTexture||R.isData3DTexture,ln=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const Zn=Yt.get(R),bn=Yt.get(K),Cn=Yt.get(Zn.__renderTarget),Ro=Yt.get(bn.__renderTarget);It.bindFramebuffer(H.READ_FRAMEBUFFER,Cn.__webglFramebuffer),It.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ro.__webglFramebuffer);for(let _e=0;_e<Ht;_e++)Fe&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.get(R).__webglTexture,J,ae+_e),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.get(K).__webglTexture,wt,Ze+_e)),H.blitFramebuffer(re,ue,Ut,zt,Se,Le,Ut,zt,H.DEPTH_BUFFER_BIT,H.NEAREST);It.bindFramebuffer(H.READ_FRAMEBUFFER,null),It.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||Yt.has(R)){const Zn=Yt.get(R),bn=Yt.get(K);It.bindFramebuffer(H.READ_FRAMEBUFFER,Zl),It.bindFramebuffer(H.DRAW_FRAMEBUFFER,Kl);for(let Cn=0;Cn<Ht;Cn++)Fe?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Zn.__webglTexture,J,ae+Cn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Zn.__webglTexture,J),ln?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bn.__webglTexture,wt,Ze+Cn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bn.__webglTexture,wt),J!==0?H.blitFramebuffer(re,ue,Ut,zt,Se,Le,Ut,zt,H.COLOR_BUFFER_BIT,H.NEAREST):ln?H.copyTexSubImage3D(Ve,wt,Se,Le,Ze+Cn,re,ue,Ut,zt):H.copyTexSubImage2D(Ve,wt,Se,Le,re,ue,Ut,zt);It.bindFramebuffer(H.READ_FRAMEBUFFER,null),It.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else ln?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Ve,wt,Se,Le,Ze,Ut,zt,Ht,Ne,Kt,Ke.data):K.isCompressedArrayTexture?H.compressedTexSubImage3D(Ve,wt,Se,Le,Ze,Ut,zt,Ht,Ne,Ke.data):H.texSubImage3D(Ve,wt,Se,Le,Ze,Ut,zt,Ht,Ne,Kt,Ke):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,wt,Se,Le,Ut,zt,Ne,Kt,Ke.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,wt,Se,Le,Ke.width,Ke.height,Ne,Ke.data):H.texSubImage2D(H.TEXTURE_2D,wt,Se,Le,Ut,zt,Ne,Kt,Ke);H.pixelStorei(H.UNPACK_ROW_LENGTH,be),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pe),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ua),H.pixelStorei(H.UNPACK_SKIP_ROWS,On),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ga),wt===0&&K.generateMipmaps&&H.generateMipmap(Ve),It.unbindTexture()},this.initRenderTarget=function(R){Yt.get(R).__webglFramebuffer===void 0&&ie.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ie.setTextureCube(R,0):R.isData3DTexture?ie.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ie.setTexture2DArray(R,0):ie.setTexture2D(R,0),It.unbindTexture()},this.resetState=function(){Y=0,D=0,w=null,It.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),i.unpackColorSpace=ze._getUnpackColorSpace()}}const Fn=Math.PI/180,Mm=o=>((o+180)%360+360)%360-180;function oa({lat:o,lon:e},i=1){const s=o*Fn,l=e*Fn;return new tt(i*Math.cos(s)*Math.cos(l),i*Math.sin(s),-i*Math.cos(s)*Math.sin(l))}function cm(o){const e=o.clone().normalize();return{lat:Math.asin(Math.max(-1,Math.min(1,e.y)))/Fn,lon:Mm(Math.atan2(-e.z,e.x)/Fn)}}function Fl({lat:o,lon:e},i=2){return`${Math.abs(o).toFixed(i)}° ${o>=0?"N":"S"}  /  ${Math.abs(e).toFixed(i)}° ${e>=0?"E":"W"}`}const xC=[{id:"LON",settlement:"伦敦",lat:51.5,lon:0,summary:"低熵聚落的交换系统持续振荡。个体将数字的位移，误认作生存的意义。",source:"模拟观测 · 欧洲频段",tag:"集体焦虑",entropy:.43},{id:"TYO",settlement:"东京",lat:35.7,lon:139.7,summary:"高密度聚落进入周期性迁徙。数千万低熵体，沿预定轨道重复移动。",source:"模拟观测 · 东亚频段",tag:"表面喧嚣",entropy:.31},{id:"NYC",settlement:"纽约",lat:40.7,lon:-74,summary:"资源定价信号跨越大洋。信号的振幅，与这颗行星的质量无关。",source:"模拟观测 · 北美频段",tag:"集体焦虑",entropy:.48},{id:"SHA",settlement:"上海",lat:31.23,lon:121.47,summary:"大陆边缘的能量交换维持高频。薄层中的灯火，尚未意识到黑暗。",source:"模拟观测 · 东亚频段",tag:"资源迁移",entropy:.36},{id:"DEL",settlement:"新德里",lat:28.61,lon:77.21,summary:"气溶胶在聚落上空累积。低熵体继续交换关于空气的意见。",source:"模拟观测 · 南亚频段",tag:"集体焦虑",entropy:.58},{id:"CAI",settlement:"开罗",lat:30.04,lon:31.24,summary:"水流两岸出现周期性信号聚集。古老的物种，依旧依附同一条河流。",source:"模拟观测 · 北非频段",tag:"表面喧嚣",entropy:.25},{id:"SAO",settlement:"圣保罗",lat:-23.55,lon:-46.63,summary:"热带边缘的物流网络短暂拥塞。表面噪音增强，未达到关注阈值。",source:"模拟观测 · 南美频段",tag:"资源迁移",entropy:.4},{id:"SYD",settlement:"悉尼",lat:-33.87,lon:151.21,summary:"南半球沿海聚落完成一次明暗交替。没有发生值得记录的变化。",source:"模拟观测 · 大洋洲频段",tag:"表面喧嚣",entropy:.19},{id:"NAI",settlement:"内罗毕",lat:-1.29,lon:36.82,summary:"赤道附近的通信密度上升。新的节点，加入了同一片低频杂波。",source:"模拟观测 · 东非频段",tag:"资源迁移",entropy:.3},{id:"IST",settlement:"伊斯坦布尔",lat:41.01,lon:28.98,summary:"大陆连接处出现边界争论。对于球面，边界只是短暂的想象。",source:"模拟观测 · 欧亚频段",tag:"局部冲突",entropy:.82},{id:"LAX",settlement:"洛杉矶",lat:34.05,lon:-118.24,summary:"影像生产聚落输出大量虚构信号。该物种正在模拟自身的命运。",source:"模拟观测 · 北美频段",tag:"表面喧嚣",entropy:.34},{id:"SIN",settlement:"新加坡",lat:1.35,lon:103.82,summary:"狭窄海峡内，物质转移维持稳定。文明的重量，仍小于一片云。",source:"模拟观测 · 东南亚频段",tag:"资源迁移",entropy:.28}],Em=xC.map(o=>({...o,source:"离线演示样本",url:null,publishedAt:null,collectedAt:"2026-11-21T00:00:00Z",demo:!0,precision:"reference"})),Gy="singer-news-v2",Kv=6*36e5;let Zu=null;function xi(o){return typeof o.lat=="number"&&Number.isFinite(o.lat)&&Math.abs(o.lat)<=90&&typeof o.lon=="number"&&Number.isFinite(o.lon)&&Math.abs(o.lon)<=180}function Bl(o){if(typeof o!="string")return null;try{const e=new URL(o);return["https:","http:"].includes(e.protocol)&&!e.username&&!e.password?e.href:null}catch{return null}}function ky(o){if(!o||typeof o!="object")throw new Error("噪音频段格式异常");const e=o;if(!["live","cached","demo"].includes(e.mode)||!Array.isArray(e.events)||!Array.isArray(e.sources)||!Number.isFinite(Date.parse(e.fetchedAt))||!Number.isFinite(Date.parse(e.checkedAt))||!Number.isFinite(Date.parse(e.nextRefreshAt)))throw new Error("噪音频段格式异常");const i=e.events.filter(l=>l&&typeof l.id=="string"&&typeof l.summary=="string"&&typeof l.source=="string"&&typeof l.settlement=="string"&&typeof l.tag=="string"&&Number.isFinite(l.entropy)&&typeof l.demo=="boolean"&&(l.kind===void 0||l.kind==="news"||l.kind==="quake")&&(!(l.kind==="quake"||l.precision==="seismic")||l.kind==="quake"&&l.precision==="seismic"&&xi(l)&&typeof l.magnitude=="number"&&Number.isFinite(l.magnitude)&&Math.abs(l.magnitude)<=10&&typeof l.depthKm=="number"&&Number.isFinite(l.depthKm)&&l.depthKm>=-100&&l.depthKm<=1e3)&&(xi(l)||l.lat===null&&l.lon===null)&&Number.isFinite(Date.parse(l.collectedAt))).slice(0,180).map(l=>({...l,url:Bl(l.url),publishedAt:l.publishedAt&&Number.isFinite(Date.parse(l.publishedAt))?l.publishedAt:null,displayCoordinates:l.kind!=="quake"&&l.displayCoordinates&&Number.isFinite(l.displayCoordinates.lat)&&Math.abs(l.displayCoordinates.lat)<=90&&Number.isFinite(l.displayCoordinates.lon)&&Math.abs(l.displayCoordinates.lon)<=180?l.displayCoordinates:void 0})),s=e.sources.filter(l=>l&&typeof l.id=="string"&&typeof l.name=="string"&&["online","error"].includes(l.state)&&Number.isFinite(l.count)&&Number.isFinite(Date.parse(l.checkedAt)));return{...e,events:i,sources:s}}function gC(){if(Zu&&Date.now()-Date.parse(Zu.fetchedAt)<Kv)return Zu;try{const o=localStorage.getItem(Gy);if(!o)return null;const e=ky(JSON.parse(o));if(e.mode!=="demo"&&Date.now()-Date.parse(e.fetchedAt)<Kv)return e}catch{return null}return null}function _C(o="./data/news.json"){const e=o.split(",").map(i=>i.trim()).filter(i=>!i||/[\u0000-\u0020\u007f<>]/.test(i)?!1:i.startsWith("/")&&!i.startsWith("//")||i.startsWith("./")||i.startsWith("../")?!0:Bl(i)!==null);return e.length>0?e:["/api/news"]}async function vC(o,e=_C()){try{let i;for(const s of e)try{const l=await fetch(s,{signal:AbortSignal.any([AbortSignal.timeout(16e3),...o?[o]:[]]),cache:"no-store"});if(!l.ok)throw new Error(`频段返回 ${l.status}`);const u=ky(await l.json());if(u.mode!=="demo"&&u.events.length>0){Zu=u;try{localStorage.setItem(Gy,JSON.stringify(u))}catch{}}return u}catch(l){if(o?.aborted)throw l;i=l}throw i??new Error("频段不可达")}catch(i){if(o?.aborted)throw i;const s=new Date().toISOString(),l=gC();return l?{...l,mode:"cached",checkedAt:s,nextRefreshAt:new Date(Date.now()+3e5).toISOString(),sources:l.sources.map(u=>({...u,state:"error",checkedAt:s,error:"聚合链路不可达，源状态未能更新"})),warning:"聚合链路不可达 · 保留上次真实噪音缓存"}:{events:Em,sources:[],mode:"demo",fetchedAt:s,checkedAt:s,nextRefreshAt:new Date(Date.now()+3e5).toISOString(),warning:"链路不可达 · 离线演示样本，非真实资讯"}}}function yC(o,e,i=4){const s=[...o].sort((m,p)=>(Date.parse(p.event.publishedAt??"")||0)-(Date.parse(m.event.publishedAt??"")||0)||m.event.id.localeCompare(p.event.id)),l=s.filter(m=>m.event.kind!=="quake"),u=s.filter(m=>m.event.kind==="quake").sort((m,p)=>(p.event.magnitude??0)-(m.event.magnitude??0)),h=[],d=m=>h.every(p=>Math.hypot(m.x-p.x,m.y-p.y)>48);if(l.length){const m=e%l.length,p=[...l.slice(m),...l.slice(0,m)];for(const g of p)h.length<Math.min(i-(u.length?1:0),3)&&d(g)&&h.push(g)}if(h.length<i){const m=u.find(d);m&&h.splice(Math.min(2,h.length),0,m)}return h}function Qv(o,e,i=8){return o.x<e.x+e.width+i&&o.x+o.width+i>e.x&&o.y<e.y+e.height+i&&o.y+o.height+i>e.y}function SC(o,e,i){const{width:s,height:l,cx:u,cy:h,radius:d,mobile:m,focused:p}=e,g=m?Math.min(200,s-40):s<1150?168:s<1350?206:232,x=p?80:56,y=m?20:28,b=m?240:150,M=m?Math.min(l-200,h+d+180):l-166,A=[],S=N=>Math.max(y,Math.min(s-y-g,N));for(let N=b;N+x<=M;N+=12)for(const L of[u-d-g-18,u+d+18,u-g*1.5-12,u+g/2+12,u-g/2]){const F={x:S(L),y:N,width:g,height:x},V=Math.max(F.x-u,0,u-F.x-F.width),O=Math.max(F.y-h,0,h-F.y-F.height);Math.hypot(V,O)<d+8||i.some(P=>Qv(F,P,6))||A.push(F)}const v=[];for(const N of o){const L=A.filter(F=>!v.some(V=>Qv(F,V.rect,12)));L.sort((F,V)=>{const O=P=>{const Y=P.x+P.width/2>u,D=Y?P.x:P.x+P.width,w=N.x>=u;return Math.hypot(D-N.x,P.y+20-N.y)+(Y===w?0:90)};return O(F)-O(V)}),L[0]&&v.push({...N,rect:L[0],side:L[0].x+g/2>u?"right":"left"})}return v}function bC({engine:o,events:e,selected:i,hovered:s,paused:l,hidden:u,newsEnabled:h,quakesEnabled:d,onSelect:m}){const p=se.useRef(null),g=se.useId(),[x,y]=se.useState([]),[b,M]=se.useState(!1),A=se.useRef({elapsed:0,rotation:0}),S=s??i;return se.useEffect(()=>{let v=0,N=performance.now(),L=0;const F=V=>{v=requestAnimationFrame(F);const O=Math.min(V-N,250);if(N=V,!l&&!i&&!s&&!u&&(A.current.elapsed+=O),A.current.elapsed>=7e3&&(A.current.elapsed=0,A.current.rotation+=3),V-L<80)return;L=V,M(!l&&!i&&!s&&A.current.elapsed>6600);const P=o.current,Y=p.current;if(!P||!Y||u)return;const D=Y.getBoundingClientRect(),w=P.renderer.domElement.getBoundingClientRect(),k=w.left-D.left,at=w.top-D.top,ot=D.width<=600,_t=P.camera.position.length();if(_t>=31){y([]);return}const ft=w.height/(2*Math.tan(P.camera.fov*Math.PI/360)*Math.sqrt(_t*_t-1)),j=(S?xi(S)?[S]:[]:e).filter(vt=>vt.kind==="quake"?d:h).flatMap(vt=>{const dt=P.project(vt,1.018);return dt.visible&&dt.x>0&&dt.x<w.width&&dt.y>0&&dt.y<w.height?[{event:vt,x:dt.x+k,y:dt.y+at}]:[]}),rt=S?j:yC(j,A.current.rotation,ot?2:D.width<1350?3:4),q=Array.from(Y.parentElement?.querySelectorAll(".target-panel,.telemetry-panel,.observation-log,.instrument-panel,.planet-caption,.narrative-dock,.field-meta,.time-footer,.cosmic-scale,.surface-layerbar,.weather-mobile,.source-details,.credits-panel,.foil-confirmation,.texture-warning,.audio-note")??[]).filter(vt=>{const dt=getComputedStyle(vt);return dt.display!=="none"&&Number(dt.opacity)>.1}).map(vt=>{const dt=vt.getBoundingClientRect();return{x:dt.left-D.left,y:dt.top-D.top,width:dt.width,height:dt.height}});y(SC(rt,{width:D.width,height:D.height,cx:k+w.width/2,cy:at+w.height/2,radius:ft,mobile:ot,focused:!!i},q))};return v=requestAnimationFrame(F),()=>cancelAnimationFrame(v)},[o,e,S,i,s,l,u,h,d]),C.jsxs("div",{ref:p,className:`surface-signals ${u||b?"signals-hidden":""}`,"aria-hidden":u,"data-cycle":A.current.rotation,children:[C.jsxs("svg",{"aria-hidden":"true",children:[C.jsx("defs",{children:C.jsxs("mask",{id:g,maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"100%",height:"100%",children:[C.jsx("rect",{width:"100%",height:"100%",fill:"white"}),x.map(v=>C.jsx("rect",{x:v.rect.x-4,y:v.rect.y-3,width:v.rect.width+8,height:v.rect.height+6,fill:"black"},v.event.id))]})}),x.map(v=>{const N=v.side==="right"?v.rect.x:v.rect.x+v.rect.width,L=v.rect.y+17,F=N+(v.side==="right"?-18:18);return C.jsxs("g",{mask:`url(#${g})`,className:v.event.kind==="quake"?"seismic-leader":v.event.entropy>.75?"anomaly-leader":"",children:[C.jsx("path",{d:`M ${v.x} ${v.y} L ${F} ${L} L ${N} ${L}`}),C.jsx("circle",{cx:v.x,cy:v.y,r:i?.id===v.event.id?4:2.5})]},v.event.id)})]}),x.map(({event:v,rect:N})=>C.jsxs("article",{"data-signal-id":v.id,className:`surface-label ${v.kind==="quake"?"seismic-label":""} ${i?.id===v.id?"is-fixed":""}`,style:{left:N.x,top:N.y,width:N.width},children:[C.jsxs("button",{onClick:()=>m(v),title:v.summary,children:[C.jsxs("span",{className:"signal-meta",title:`${v.source} · ${v.settlement} · ${Fl(v,1)}`,children:[C.jsxs("span",{children:["[",v.source.slice(0,12)," · "]}),C.jsx("span",{className:"signal-place",children:v.settlement}),C.jsxs("span",{children:[" · ",Fl(v,1).replace("  /  "," / "),"]"]})]}),C.jsx("span",{className:"signal-headline",children:v.summary})]}),i?.id===v.id&&C.jsxs("div",{className:"signal-fixed-meta",children:[C.jsxs("span",{children:["锁定 · ",v.precision==="seismic"?"USGS 震中":"地名中心近似"]}),Bl(v.url)&&C.jsx("a",{href:Bl(v.url),target:"_blank",rel:"noopener noreferrer",children:"原始信号 ↗"})]})]},v.id))]})}const Jv={type:"change"},Tm={type:"start"},Xy={type:"end"},Vu=new kl,$v=new Ss,MC=Math.cos(70*H1.DEG2RAD),_n=new tt,ni=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pp=1e-6;class EC extends RE{constructor(e,i=null){super(e,i),this.state=Ye.NONE,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ho.ROTATE,MIDDLE:ho.DOLLY,RIGHT:ho.PAN},this.touches={ONE:uo.ROTATE,TWO:uo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new tt,this._lastQuaternion=new Ba,this._lastTargetPosition=new tt,this._quat=new Ba().setFromUnitVectors(e.up,new tt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Tv,this._sphericalDelta=new Tv,this._scale=1,this._panOffset=new tt,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new tt,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=AC.bind(this),this._onPointerDown=TC.bind(this),this._onPointerUp=CC.bind(this),this._onContextMenu=OC.bind(this),this._onMouseWheel=DC.bind(this),this._onKeyDown=NC.bind(this),this._onTouchStart=UC.bind(this),this._onTouchMove=LC.bind(this),this._onMouseDown=RC.bind(this),this._onMouseMove=wC.bind(this),this._interceptControlDown=PC.bind(this),this._interceptControlUp=zC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jv),this.update(),this.state=Ye.NONE}update(e=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ni:s>Math.PI&&(s-=ni),l<-Math.PI?l+=ni:l>Math.PI&&(l-=ni),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=_n.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new tt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new tt(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Vu.origin.copy(this.object.position),Vu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vu.direction))<MC?this.object.lookAt(this.target):($v.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vu.intersectPlane($v,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>pp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pp||this._lastTargetPosition.distanceToSquared(this.target)>pp?(this.dispatchEvent(Jv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ni/60*this.autoRotateSpeed*e:ni/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-e),this._panOffset.add(_n)}_panUp(e,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(e),this._panOffset.add(_n)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let u=_n.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/i.clientHeight),this._rotateUp(ni*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),u=.5*(e.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/i.clientHeight),this._rotateUp(ni*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new pe,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function TC(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function AC(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function CC(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xy),this.state=Ye.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function RC(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ho.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ye.DOLLY;break;case ho.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ye.ROTATE}break;case ho.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Tm)}function wC(o){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function DC(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(o.preventDefault(),this.dispatchEvent(Tm),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Xy))}function NC(o){this.enabled!==!1&&this._handleKeyDown(o)}function UC(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case uo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ye.TOUCH_ROTATE;break;case uo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case uo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ye.TOUCH_DOLLY_PAN;break;case uo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Tm)}function LC(o){switch(this._trackPointer(o),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ye.NONE}}function OC(o){this.enabled!==!1&&o.preventDefault()}function PC(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zC(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bs(o){const e=o/864e5+24405875e-1,i=(e-2451545)/36525,s=(280.46646+i*(36000.76983+3032e-7*i))%360,l=(357.52911+i*(35999.05029-1537e-7*i))*Fn,u=Math.sin(l)*(1.914602-i*(.004817+14e-6*i))+Math.sin(2*l)*(.019993-101e-6*i)+Math.sin(3*l)*289e-6,h=(125.04-1934.136*i)*Fn,d=(s+u-.00569-.00478*Math.sin(h))*Fn,m=(23+(26+(21.448-i*(46.815+i*(59e-5-i*.001813)))/60)/60+.00256*Math.cos(h))*Fn,p=Math.atan2(Math.cos(m)*Math.sin(d),Math.cos(d))/Fn,g=Math.asin(Math.sin(m)*Math.sin(d))/Fn,x=280.46061837+360.98564736629*(e-2451545)+387933e-9*i*i-i*i*i/3871e4,y=-.00478*Math.sin(h)*Math.cos(m),b=Mm(p-x-y),M=.016708634-i*(42037e-9+1267e-10*i),A=l+u*Fn,S=1.000001018*(1-M*M)/(1+M*Math.cos(A));return{lat:g,lon:b,direction:oa({lat:g,lon:b}),julianDay:e,distanceAu:S,lightSeconds:S*499.004784}}const jy=[{id:"paused",label:"暂停",rate:0},{id:"live",label:"实时",rate:1},{id:"hour",label:"1秒 = 1小时",rate:3600},{id:"day",label:"1秒 = 1天",rate:86400}];class IC{mode="live";utc;monotonic;constructor(e=Date.now(),i=performance.now()){this.utc=e,this.monotonic=i}read(e=performance.now(),i=Date.now()){if(this.mode==="live")return i;const s=jy.find(l=>l.id===this.mode).rate;return this.utc+(e-this.monotonic)*s}setMode(e,i=performance.now(),s=Date.now()){this.utc=this.read(i,s),this.monotonic=i,this.mode=e}}function FC(o){const e=o.lat*Fn,i=o.lon*Fn,s=new tt(-Math.sin(i),0,-Math.cos(i)),l=new tt(-Math.sin(e)*Math.cos(i),Math.cos(e),Math.sin(e)*Math.sin(i)),u=(o.windDirectionDeg+180)*Fn;return s.multiplyScalar(Math.sin(u)).addScaledVector(l,Math.cos(u)).normalize()}function BC(o){const e=[],i=[],s=[];o.forEach((d,m)=>{if(!(d.windSpeedMs<.15))for(let p=0;p<2;p++){const g=oa({lat:d.lat+(p-.5)*1.8,lon:d.lon}),x=FC(d);x.addScaledVector(g,-x.dot(g)).normalize();const y=Math.min(7,1.8+d.windSpeedMs*.26)*Fn,b=(m*.618+p*.31)%1;for(let M=0;M<22;M++)for(const A of[M,M+1]){const S=A/22,v=g.clone().multiplyScalar(Math.cos(S*y)).addScaledVector(x,Math.sin(S*y)).multiplyScalar(1.012);e.push(v.x,v.y,v.z),i.push(S,b),s.push(Math.min(.34,.04+d.windSpeedMs*.012))}}});const l=new si;l.setAttribute("position",new vn(e,3)),l.setAttribute("aPhase",new vn(i,2)),l.setAttribute("aSpeed",new vn(s,1));const u=new Vn({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uOpacity:{value:0}},vertexShader:`attribute vec2 aPhase; attribute float aSpeed; varying vec2 vPhase; varying float vSpeed;
      void main(){ vPhase=aPhase; vSpeed=aSpeed; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`uniform float uTime; uniform float uOpacity; varying vec2 vPhase; varying float vSpeed;
      void main(){
        float head=fract(uTime*vSpeed+vPhase.y);
        float distanceBehind=mod(head-vPhase.x+1.0,1.0);
        float tail=(1.0-smoothstep(0.0,0.3,distanceBehind))*smoothstep(0.0,0.08,vPhase.x)*(1.0-smoothstep(0.9,1.0,vPhase.x));
        gl_FragColor=vec4(0.64,0.76,0.79,tail*uOpacity);
      }`}),h=new mE(l,u);return h.name="atmospheric-wind",h.renderOrder=3,h.visible=!1,h}function HC(o){const s=new Uint8Array(131072);for(let u=0;u<128;u++)for(let h=0;h<256;h++){const d=(u*256+h)*4,m=Math.abs(u/128-.5)>.42,p=o==="normal"?[128,128,255]:o==="day"?m?[115,125,131]:[16,38,56]:[0,0,0];s.set([...p,255],d)}const l=new Ny(s,256,128,Li,la);return l.needsUpdate=!0,l}async function VC(o,e){const i=[];let s=0;const l=["day","night","normal","specular","clouds"],u=new EE,h=Math.min(8,o.capabilities.getMaxAnisotropy()),d=await Promise.all(l.map(async m=>{let p;try{p=await u.loadAsync(`/singer-observatory/textures/earth/${m}.jpg`)}catch{try{p=await u.loadAsync(`/singer-observatory/textures/earth/${m}-fallback.jpg`),i.push(`${m}：高分辨率资源不可用，已使用本地低分辨率副本`)}catch{p=HC(m),i.push(`${m}：本地资源不可用，已启用简化材质（非真实地理纹理）`)}}return p.colorSpace=m==="day"||m==="night"?ii:Ua,p.wrapS=Ku,p.minFilter=Ms,p.magFilter=gi,p.generateMipmaps=!0,p.anisotropy=h,p.needsUpdate=!0,s++,e({loaded:s,total:l.length,warnings:[...i],complete:s===l.length}),[m,p]}));return Object.fromEntries(d)}const mp=`
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
uniform float uFold;
uniform vec3 uFoldRight;
uniform vec3 uFoldUp;
uniform vec3 uFoldNormal;
void main() {
  vUv = uv;
  vec3 original = (modelMatrix * vec4(position, 1.0)).xyz;
  float unfold = smoothstep(0.0, 1.0, clamp(uFold * 1.32 - uv.x * 0.32, 0.0, 1.0));
  float layer = (length(position) - 1.0) * 0.3;
  vec3 chart = uFoldRight * ((uv.x - 0.5) * 3.6) + uFoldUp * ((uv.y - 0.5) * 1.8) + uFoldNormal * layer;
  vec3 curl = uFoldNormal * sin(uv.x * 6.2831853 + uFold * 3.1415927) * sin(unfold * 3.1415927) * 0.32;
  vPosition = mix(original, chart, unfold) + curl;
  vNormal = normalize(mix(normalize(mat3(modelMatrix) * normal), uFoldNormal, min(unfold, 0.99999)));
  gl_Position = projectionMatrix * viewMatrix * vec4(vPosition, 1.0);
}
`,GC=`
precision highp float;
uniform sampler2D uDay;
uniform sampler2D uNight;
uniform sampler2D uNormal;
uniform sampler2D uSpecular;
uniform sampler2D uClouds;
uniform vec3 uSun;
uniform float uCloudOffset;
uniform float uCloudsEnabled;
uniform float uFold;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
const float PI = 3.14159265359;
vec2 sphereUv(vec3 p) {
  p = normalize(p);
  return vec2(atan(-p.z, p.x) / (2.0 * PI) + 0.5, asin(clamp(p.y, -1.0, 1.0)) / PI + 0.5);
}
void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vPosition);
  vec3 L = normalize(uSun);
  float incidence = dot(N, L);
  float daylight = smoothstep(-0.00465, 0.00465, incidence);
  vec3 tangent = normalize(vec3(N.z, 0.00001, -N.x));
  vec3 bitangent = normalize(cross(N, tangent));
  vec3 mapNormal = texture2D(uNormal, vUv).xyz * 2.0 - 1.0;
  mapNormal.xy *= 0.3;
  vec3 detailNormal = normalize(mat3(tangent, bitangent, N) * mapNormal);
  vec3 albedo = texture2D(uDay, vUv).rgb;
  float ocean = texture2D(uSpecular, vUv).r;
  albedo = mix(vec3(dot(albedo, vec3(0.2126, 0.7152, 0.0722))), albedo, 0.62);
  albedo *= mix(1.0, 0.68, ocean);
  float diffuse = max(dot(detailNormal, L), 0.0);
  float cloudHeight = 1.0018;
  float rayLength = -incidence + sqrt(incidence * incidence + cloudHeight * cloudHeight - 1.0);
  vec2 shadowUv = sphereUv(N + L * rayLength) + vec2(uCloudOffset, 0.0);
  float cloudShadow = smoothstep(0.14, 0.86, texture2D(uClouds, shadowUv).r) * uCloudsEnabled;
  float shadow = 1.0 - cloudShadow * 0.32 * smoothstep(0.0, 0.06, incidence);
  vec3 surface = albedo * (0.018 + diffuse * 1.65) * daylight * shadow;
  vec3 halfDirection = normalize(L + V);
  float fresnel = 0.025 + 0.975 * pow(1.0 - max(dot(V, detailNormal), 0.0), 5.0);
  float specular = pow(max(dot(detailNormal, halfDirection), 0.0), 90.0);
  surface += vec3(0.62, 0.69, 0.72) * specular * fresnel * ocean * daylight * shadow * 0.9;
  vec3 lights = texture2D(uNight, vUv).rgb;
  lights *= smoothstep(0.006, 0.06, dot(lights, vec3(0.2126, 0.7152, 0.0722)));
  float night = 1.0 - smoothstep(-0.13, 0.025, incidence);
  float cloudCoverage = smoothstep(0.14, 0.86, texture2D(uClouds, vUv + vec2(uCloudOffset, 0.0)).r);
  surface += lights * vec3(0.95, 0.72, 0.44) * 0.36 * night * (1.0 - cloudCoverage * uCloudsEnabled * 0.65);
  float limb = pow(1.0 - max(dot(N, V), 0.0), 5.0);
  surface += vec3(0.035, 0.095, 0.16) * limb * smoothstep(-0.08, 0.3, incidence) * 0.16;
  float elevation = dot(texture2D(uDay, vUv).rgb, vec3(0.2126, 0.7152, 0.0722));
  float relief = elevation * 38.0 + texture2D(uNormal, vUv).r * 2.0;
  float contour = 1.0 - smoothstep(0.018, 0.085, abs(fract(relief) - 0.5));
  vec2 gridCell = abs(fract(vUv * vec2(24.0, 12.0)) - 0.5);
  float grid = 1.0 - smoothstep(0.003, 0.017, min(gridCell.x, gridCell.y));
  float land = 1.0 - smoothstep(0.18, 0.65, ocean);
  float ink = 0.006 + land * (0.035 + smoothstep(0.13, 0.42, elevation) * 0.19) + contour * land * 0.36 + grid * 0.035;
  vec3 silver = vec3(0.72, 0.78, 0.82) * ink;
  surface = mix(surface, silver, smoothstep(0.05, 0.9, uFold));
  gl_FragColor = vec4(surface, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,kC=`
precision highp float;
uniform sampler2D uClouds;
uniform vec3 uSun;
uniform float uCloudOffset;
uniform float uFold;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
void main() {
  vec3 N = normalize(vNormal);
  float incidence = dot(N, normalize(uSun));
  float density = smoothstep(0.1, 0.92, texture2D(uClouds, vUv + vec2(uCloudOffset, 0.0)).r);
  float day = smoothstep(-0.008, 0.012, incidence);
  float dusk = exp(-abs(incidence) * 38.0);
  vec3 color = vec3(0.71, 0.75, 0.78) * (0.026 + max(incidence, 0.0) * 1.4) * day;
  color += vec3(0.14, 0.075, 0.035) * dusk * 0.15;
  color = mix(color, vec3(0.25, 0.29, 0.32), uFold);
  gl_FragColor = vec4(color, density * 0.83 * (1.0 - uFold * 0.97));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,XC=`
precision highp float;
uniform vec3 uSun;
uniform float uFold;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vPosition);
  float incidence = dot(N, normalize(uSun));
  float rim = pow(1.0 - max(dot(N, V), 0.0), 5.5);
  float day = smoothstep(-0.12, 0.28, incidence);
  float dusk = exp(-abs(incidence) * 20.0);
  vec3 scatter = mix(vec3(0.09, 0.23, 0.42), vec3(0.26, 0.38, 0.49), rim);
  scatter = mix(scatter, vec3(0.3, 0.19, 0.12), dusk * 0.18);
  gl_FragColor = vec4(scatter, rim * (day * 0.39 + dusk * 0.055) * (1.0 - uFold));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function jC(){let o=72941;const e=()=>(o=o*16807%2147483647,(o-1)/2147483646),i=[],s=[],l=[];for(let m=0;m<2100;m++){const p=e()*2-1,g=e()*Math.PI*2,x=Math.sqrt(1-p*p);i.push(x*Math.cos(g)*1600,p*1600,x*Math.sin(g)*1600),s.push(.55+e()*1.25),l.push(.07+Math.pow(e(),4)*.33)}const u=new si;u.setAttribute("position",new vn(i,3)),u.setAttribute("aSize",new vn(s,1)),u.setAttribute("aIntensity",new vn(l,1));const h=new Vn({transparent:!0,depthWrite:!1,uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`attribute float aSize; attribute float aIntensity; uniform float uPixelRatio; varying float vIntensity;
      void main() { vIntensity = aIntensity; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = aSize * uPixelRatio; }`,fragmentShader:"varying float vIntensity; void main() { float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.08, d) * vIntensity; gl_FragColor = vec4(0.61, 0.66, 0.72, a); }"}),d=new _E(u,h);return d.name="deep-stars",d.renderOrder=-2,d}function qC(o){const e=new Rl;if(!o.length)return{group:e,markers:[]};const i=new Eo(1,1),s=o.map(l=>{const u=l.kind==="quake",h=Number.isFinite(l.magnitude)?l.magnitude:4.5,d=l.entropy>.6||["局部摩擦","局部冲突","灾变扰动"].includes(l.tag),m=u?"#a4c2c7":l.entropy>.75?"#bf8372":d?"#c3a275":"#dedfd9",p=new Vn({transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{uViewport:{value:new pe(1,1)},uDpr:{value:1},uSize:{value:u?46+(Math.min(9,Math.max(3,h))-3)*3:34},uProgress:{value:0},uPulse:{value:0},uAlpha:{value:0},uHighlight:{value:0},uColor:{value:new Ie(m)},uSeismic:{value:u?1:0},uAlert:{value:!u&&d?1:0}},vertexShader:`
        varying vec2 vCss;
        uniform vec2 uViewport;
        uniform float uDpr;
        uniform float uSize;
        void main() {
          vCss = position.xy * uSize;
          vec4 clip = projectionMatrix * modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          clip.xy += position.xy * uSize * uDpr / max(uViewport, vec2(1.0)) * 2.0 * clip.w;
          gl_Position = clip;
        }`,fragmentShader:`
        varying vec2 vCss;
        uniform float uDpr;
        uniform float uSize;
        uniform float uProgress;
        uniform float uPulse;
        uniform float uAlpha;
        uniform float uHighlight;
        uniform vec3 uColor;
        uniform float uSeismic;
        uniform float uAlert;
        void main() {
          float d = length(vCss);
          float aa = 0.65 / max(uDpr, 1.0);
          float coreRadius = mix(2.0, 2.25, uSeismic) + 0.2 * uHighlight;
          float core = (1.0 - smoothstep(coreRadius - aa, coreRadius + aa, d)) * (0.92 + 0.08 * uHighlight);
          float halo = (1.0 - smoothstep(coreRadius, 5.0 + uHighlight, d)) * (0.12 + 0.07 * uHighlight);
          float stemDistance = length(vCss - vec2(0.0, clamp(vCss.y, 2.8, 8.6)));
          float stem = (1.0 - smoothstep(0.28, 0.28 + aa, stemDistance)) * (0.28 + 0.16 * uHighlight) * (1.0 - uSeismic);
          float progress = clamp(uProgress, 0.0, 1.0);
          float radius = mix(5.0, uSize * 0.43, progress);
          float innerRadius = mix(3.5, uSize * 0.30, progress);
          float ring = 1.0 - smoothstep(0.35, 0.35 + aa, abs(d - radius));
          float innerRing = 1.0 - smoothstep(0.28, 0.28 + aa, abs(d - innerRadius));
          float rings = (ring * mix(0.24 + 0.16 * uAlert, 0.30, uSeismic) + innerRing * 0.17 * uSeismic) * uPulse;
          // Only the rings pulse. The geographic anchor survives the quiet interval.
          float opacity = clamp(max(core, halo + stem + rings), 0.0, 1.0) * uAlpha;
          gl_FragColor = vec4(mix(uColor, vec3(0.92), uHighlight * 0.12), opacity);
          #include <colorspace_fragment>
        }`}),g=new vi(i,p);return g.position.copy(oa(l.displayCoordinates??l)).multiplyScalar(1.018),g.renderOrder=6,g.frustumCulled=!1,g.visible=!1,e.add(g),{event:l,mesh:g,alpha:0}});return{group:e,markers:s}}function YC(o,e,i,s,l,u,h=0,d={}){const m=1-Math.min(1,Math.max(0,(i-11)/20)),p=d.quakesEnabled??l,g=new tt,x=new tt;let y=0;return o.forEach((b,M)=>{const A=(e*(b.mesh.material.uniforms.uAlert.value?1.45:1)+M*1.83)%23/8,S=A<1?Math.min(1,A/.12)*Math.min(1,(1-A)/.35):0,v=u&&M<3,N=1-Math.min(1,Math.max(0,(h-M/Math.max(1,o.length)*.18)/.16)),L=b.event.kind==="quake"?p:l;g.copy(b.mesh.position).normalize();const F=g.dot(x.copy(s).sub(g).normalize()),V=Math.min(1,Math.max(0,(F-.02)/.14)),O=V*V*(3-2*V);b.alpha=L&&F>.02?(v?.9:.82)*O*m*N:0;const P=b.mesh.material.uniforms,Y=b.event.id===d.highlightedId;P.uProgress.value=v?.3:Y?e%3/3:A,P.uPulse.value=v?1:Y?.9:S,P.uAlpha.value=b.alpha,P.uHighlight.value=Y?1:0,b.mesh.visible=b.alpha>.005,b.mesh.visible&&b.event.kind!=="quake"&&y++}),y}const Gu=o=>{const e=Math.max(0,Math.min(1,o));return e*e*(3-2*e)},ty=11e3,qy=2400;class WC{started=null;restoration=null;start(e){return this.sample(e).phase!=="idle"?!1:(this.started=e,!0)}restore(e){const i=this.sample(e);return i.phase==="idle"||i.phase==="restoring"?!1:(this.restoration={started:e,from:i},!0)}sample(e){if(this.restoration){const{started:s,from:l}=this.restoration,u=Gu((e-s)/qy);if(u>=1)this.started=null,this.restoration=null;else return{phase:"restoring",progress:l.progress*(1-u),fold:l.fold*(1-u),foil:l.foil*(1-u)}}if(this.started===null)return{phase:"idle",progress:0,fold:0,foil:0};const i=Math.max(0,e-this.started);return{phase:i>=ty?"archived":i<2500?"delivery":"folding",progress:Math.min(1,i/ty),fold:Gu((i-2500)/7500),foil:Gu(i/1e3)*(1-Gu((i-2400)/1600))}}}const ZC=6371,xp=384400/ZC,KC=Date.UTC(2026,0,1),QC=83e8,JC=.0084,ey="示意估算，非人口普查或实时统计：2026-01-01 基数 83 亿，年净自然增速假设 0.84%，按连续复利外推。";function $C(o){return Math.floor(QC*Math.exp(JC*(o-KC)/(365.2425*864e5)))}function tR(){const o=[],e=23.44*Math.PI/180;for(let l=0;l<256;l++){const u=l/256*Math.PI*2;o.push(Math.cos(u)*xp,Math.sin(u)*Math.sin(e)*xp,Math.sin(u)*Math.cos(e)*xp)}const i=new si;i.setAttribute("position",new vn(o,3));const s=new xE(i,new Ly({color:"#6e7b84",transparent:!0,opacity:0,depthWrite:!1}));return s.name="lunar-orbit-reference",s.visible=!1,s}function eR(){const o=new Vn({transparent:!0,depthWrite:!1,uniforms:{uAlpha:{value:0}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`varying vec2 vUv; uniform float uAlpha;
      void main(){float edge=step(0.46,max(abs(vUv.x-.5),abs(vUv.y-.5)));gl_FragColor=vec4(vec3(.67,.71,.73),uAlpha*(.13+edge*.3));
      #include <colorspace_fragment>
      }`}),e=new vi(new Eo(.14,.085),o);return e.name="encapsulated-foil",e.visible=!1,e.renderOrder=5,e}const nR=.2,iR=.65,aR=Math.sin(70*Fn),gp=1e-12;function ny(o){return o===0?0:1+.1*Math.min(4,o-1)}function sR(o){const e=new Map;for(const i of o){if(i.precision==="unlocated"||!Number.isFinite(i.lat)||!Number.isFinite(i.lon)||Math.abs(i.lat)>90)continue;const s=Math.min(17,Math.floor((i.lat+90)/10)),l=Math.floor((Mm(i.lon)+180)/10),u=s*36+l;let h=e.get(u);h||(h={direction:oa({lat:s*10-85,lon:l*10-175}),news:0,quakes:0},e.set(u,h)),i.kind==="quake"?h.quakes++:h.news++}return[...e.entries()].sort(([i],[s])=>i-s).map(([,i])=>i)}function rR(o,e){const i=Math.max(Math.abs(e.x),Math.abs(e.y),Math.abs(e.z)),s=Number.isFinite(i)&&i>0?new tt(e.x/i,e.y/i,e.z/i).normalize():new tt(1,0,0),l=sR(o),u=[],h=y=>{y.normalize();const b=y.dot(s);b>=nR-gp&&b<=iR+gp&&Math.abs(y.y)<=aR+gp&&u.push(y)};h(oa({lat:19,lon:cm(s).lon-48}));const d=Math.abs(s.y)<.9?new tt(0,1,0):new tt(1,0,0),m=new tt().crossVectors(d,s).normalize(),p=new tt().crossVectors(s,m).normalize();for(const y of[.25,.45,.65]){const b=Math.sqrt(1-y*y);for(let M=0;M<24;M++){const A=M*Math.PI/12;h(s.clone().multiplyScalar(y).addScaledVector(m,b*Math.cos(A)).addScaledVector(p,b*Math.sin(A)))}}let g=u[0],x=-1/0;for(const y of u){let b=0;for(const M of l){const A=y.dot(M.direction),S=Math.min(1,Math.max(0,(A-.2)/.3));b+=(ny(M.news)+.35*ny(M.quakes))*S*(.8+.2*Math.max(0,A))}b>x&&(x=b,g=y)}return g}class oR{constructor(e,i){this.host=e,this.callbacks=i,this.renderer=new mC({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(new Ie("#020305"),1),this.renderer.outputColorSpace=ii,this.renderer.toneMapping=hy,this.renderer.toneMappingExposure=1.05,this.renderer.domElement.setAttribute("aria-label","第三行星三维观测视野，可拖拽旋转、滚轮缩放、点击拾取地表坐标"),this.renderer.domElement.setAttribute("role","img"),this.host.appendChild(this.renderer.domElement),this.renderer.domElement.addEventListener("webglcontextlost",this.onContextLost);const s=bs(this.clock.read());this.camera.position.copy(oa({lat:19,lon:s.lon-48},this.normalDistance)),this.returnPosition.copy(this.camera.position),this.controls=new EC(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.065,this.controls.rotateSpeed=.38,this.controls.zoomSpeed=.65,this.controls.enablePan=!1,this.controls.minDistance=2.35,this.controls.maxDistance=760,this.controls.minPolarAngle=.05,this.controls.maxPolarAngle=Math.PI-.05,this.controls.addEventListener("start",this.onNavigation),this.scene.add(jC(),this.foil,this.lunarReference),this.resizeObserver=new ResizeObserver(this.resize),this.resizeObserver.observe(e),this.resize(),this.renderer.domElement.addEventListener("pointerdown",this.onPointerDown),this.renderer.domElement.addEventListener("pointermove",this.onPointerMove),this.renderer.domElement.addEventListener("pointerup",this.onPointerUp),this.renderer.domElement.addEventListener("pointerleave",this.onPointerLeave),this.animation=requestAnimationFrame(this.frame)}host;callbacks;clock=new IC;renderer;camera=new Ui(35,1,.01,6e3);scene=new fE;controls;raycaster=new CE;resizeObserver;sunUniform={value:bs(Date.now()).direction};cloudOffset={value:0};cloudsEnabled={value:1};textures;earth;clouds;noiseGroup;markers=[];newsEvents=[];windField;windEnabled=!1;windSampleCount=0;animation=0;disposed=!1;ready=!1;noiseEnabled=!0;quakesEnabled=!0;highlightedId=null;initialViewChosen=!1;userNavigated=!1;surfaceHovered=!1;calibrating=!1;pointerStart=new pe;hoverId="";startedAt=performance.now();lastTelemetry=0;width=1;height=1;normalDistance=7.5;returnPosition=new tt;cameraTween;frozenNoiseTime=null;sequence=new WC;foldUniforms={uFold:{value:0},uFoldRight:{value:new tt(1,0,0)},uFoldUp:{value:new tt(0,1,0)},uFoldNormal:{value:new tt(0,0,1)}};foil=eR();lunarReference=tR();sequenceCamera=new tt;cruise=!1;cruiseStarted=0;cruiseAngle=0;cruiseCamera=new tt;previousActivity={news:0,quake:0};noiseTime=0;windTime=0;async initialize(){try{const e=await VC(this.renderer,u=>{this.disposed||this.callbacks.onTextures(u)});if(this.disposed){Object.values(e).forEach(u=>u.dispose());return}this.textures=e;const i=new Dl(1,160,96),s={uDay:{value:e.day},uNight:{value:e.night},uNormal:{value:e.normal},uSpecular:{value:e.specular},uClouds:{value:e.clouds},uSun:this.sunUniform,uCloudOffset:this.cloudOffset,uCloudsEnabled:this.cloudsEnabled,...this.foldUniforms};this.earth=new vi(i,new Vn({uniforms:s,vertexShader:mp,fragmentShader:GC})),this.earth.name="earth-surface",this.scene.add(this.earth),this.clouds=new vi(new Dl(1.0018,160,96),new Vn({uniforms:s,vertexShader:mp,fragmentShader:kC,transparent:!0,depthWrite:!1})),this.clouds.name="cloud-shell",this.clouds.renderOrder=1,this.clouds.visible=this.cloudsEnabled.value===1,this.scene.add(this.clouds);const l=new vi(new Dl(1+100/6371,160,96),new Vn({uniforms:{uSun:this.sunUniform,...this.foldUniforms},vertexShader:mp,fragmentShader:XC,transparent:!0,depthWrite:!1}));l.name="thin-atmosphere",l.renderOrder=2,this.scene.add(l),this.rebuildMarkers(),await this.renderer.compileAsync(this.scene,this.camera),this.disposed||(this.ready=!0)}catch(e){this.disposed||this.callbacks.onError(e instanceof Error?e.message:"观测视野初始化失败")}}setTimeMode(e){this.clock.setMode(e)}setClouds(e){this.cloudsEnabled.value=e?1:0,this.clouds&&(this.clouds.visible=e)}setNoise(e){this.noiseEnabled=e}setQuakes(e){this.quakesEnabled=e}setHighlight(e){this.highlightedId=e}setCalibration(e){this.calibrating=e,this.rebuildMarkers()}setNews(e){if(this.newsEvents=e,!this.initialViewChosen&&e.length&&!this.userNavigated&&!this.calibrating&&!this.cruise&&this.sequence.sample(performance.now()).phase==="idle"){this.initialViewChosen=!0;const i=rR(e,bs(this.clock.read()).direction).multiplyScalar(this.normalDistance);this.returnPosition.copy(i),this.ready?this.moveCamera(i,1600):this.camera.position.copy(i)}this.rebuildMarkers()}rebuildMarkers(){this.noiseGroup&&(this.scene.remove(this.noiseGroup),this.markers[0]?.mesh.geometry.dispose(),this.markers.forEach(({mesh:s})=>s.material.dispose()));const e=this.calibrating?[...Em.slice(0,3),...this.newsEvents]:this.newsEvents,i=qC(e);this.markers=i.markers,this.noiseGroup=i.group,this.scene.add(i.group),this.resizeSignals()}resizeSignals(){const e=this.renderer.getDrawingBufferSize(new pe);for(const i of this.markers)i.mesh.material.uniforms.uViewport.value.copy(e),i.mesh.material.uniforms.uDpr.value=this.renderer.getPixelRatio()}setWindSamples(e){this.windField&&(this.scene.remove(this.windField),this.windField.geometry.dispose(),this.windField.material.dispose()),this.windSampleCount=e.length,this.windField=BC(e),this.scene.add(this.windField)}setWind(e){this.windEnabled=e}setCruise(e){if(!(this.sequence.sample(performance.now()).phase!=="idle"||this.cruise===e))if(this.cruise=e,e){this.cruiseCamera.copy(this.camera.position),this.cruiseStarted=performance.now();const i=bs(this.clock.read()).direction,s=new tt(0,1,0).cross(i).normalize(),l=i.clone().cross(s).normalize();this.cruiseAngle=Math.atan2(this.camera.position.dot(l),this.camera.position.dot(s)),this.moveCamera(s.multiplyScalar(Math.cos(this.cruiseAngle)).addScaledVector(l,Math.sin(this.cruiseAngle)).setLength(this.normalDistance),3200)}else this.moveCamera(this.cruiseCamera,1800)}releaseFoil(){return!this.ready||!this.sequence.start(performance.now())?!1:(this.cruise=!1,this.sequenceCamera.copy(this.camera.position),this.camera.updateMatrixWorld(),this.foldUniforms.uFoldRight.value.setFromMatrixColumn(this.camera.matrixWorld,0).normalize(),this.foldUniforms.uFoldUp.value.setFromMatrixColumn(this.camera.matrixWorld,1).normalize(),this.foldUniforms.uFoldNormal.value.copy(this.camera.position).normalize(),this.foil.quaternion.copy(this.camera.quaternion),this.moveCamera(this.camera.position.clone().setLength(8.8),2400),!0)}restoreDimension(){return this.sequence.restore(performance.now())?(this.moveCamera(this.sequenceCamera.clone(),qy),!0):!1}setDeepSpace(e){e&&this.returnPosition.copy(this.camera.position).setLength(Math.min(this.camera.position.length(),10));const i=e?this.camera.position.clone().setLength(680):this.returnPosition.clone();this.moveCamera(i,2800)}focusCoordinates(e){this.moveCamera(oa(e,this.normalDistance),1100),this.callbacks.onPick(e)}moveCamera(e,i){this.userNavigated=!0,this.cameraTween={from:this.camera.position.clone(),to:e,started:performance.now(),duration:i},this.controls.enabled=!1}resize=()=>{this.width=Math.max(1,this.host.clientWidth),this.height=Math.max(1,this.host.clientHeight);const e=this.width/this.height;this.camera.aspect=e,this.camera.fov=e<1?2*Math.atan(Math.tan(35*Math.PI/360)/e)*180/Math.PI:35,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.width,this.height),this.resizeSignals()};frame=e=>{if(this.disposed)return;this.animation=requestAnimationFrame(this.frame);const i=this.sequence.sample(e),s=this.clock.read(e),l=bs(s);this.foldUniforms.uFold.value=i.fold;const u=i.phase!=="idle";if(this.earth&&(this.earth.material.side=i.fold>0?aa:Fa),this.foil.visible=i.foil>.001,this.foil.material.uniforms.uAlpha.value=i.foil,this.foil.position.copy(this.foldUniforms.uFoldRight.value).multiplyScalar(2.6-Math.min(1,i.progress/.23)*1.65).addScaledVector(this.foldUniforms.uFoldUp.value,.38).addScaledVector(this.foldUniforms.uFoldNormal.value,.65),this.sunUniform.value.copy(l.direction),this.cloudOffset.value=(s/864e5/45%1+1)%1,this.cameraTween){const{from:g,to:x,started:y,duration:b}=this.cameraTween,M=Math.min(1,(e-y)/b),A=M*M*(3-2*M),S=Math.exp(Math.log(g.length())*(1-A)+Math.log(x.length())*A),v=g.clone().normalize(),N=x.clone().normalize(),L=new Ba().setFromUnitVectors(v,N);this.camera.position.copy(v.applyQuaternion(new Ba().slerp(L,A)).multiplyScalar(S)),M===1&&(this.cameraTween=void 0,this.controls.enabled=!0)}if(this.cruise&&!this.cameraTween){const g=new tt(0,1,0).cross(l.direction).normalize(),x=l.direction.clone().cross(g).normalize(),y=this.cruiseAngle+Math.max(0,e-this.cruiseStarted-3200)*15e-7;this.camera.position.copy(g.multiplyScalar(Math.cos(y)).addScaledVector(x,Math.sin(y)).setLength(this.normalDistance))}this.controls.enabled=!this.cameraTween&&!this.cruise&&!u,this.controls.update();const h=this.camera.position.length(),d=this.frozenNoiseTime??(e-this.startedAt)/1e3;(i.phase==="idle"||i.phase==="delivery"||i.phase==="restoring")&&(this.noiseTime=d);const m=YC(this.markers,this.noiseTime,h,this.camera.position,this.noiseEnabled,this.calibrating,i.fold,{quakesEnabled:this.quakesEnabled,highlightedId:this.highlightedId}),p=this.markers.filter(g=>g.event.kind==="quake"&&g.alpha>.06&&this.project(g.event).visible).length;if(u||(m>this.previousActivity.news?this.callbacks.onPulse?.("news"):p>this.previousActivity.quake&&this.callbacks.onPulse?.("quake")),this.previousActivity={news:m,quake:p},this.lunarReference.material.opacity=Math.min(.15,Math.max(0,(h-100)/250)*.15),this.lunarReference.visible=h>100&&!u&&!this.cruise,this.windField){const g=this.windEnabled?Math.max(0,1-(h-10)/20)*.3*(1-i.fold):0;this.windField.visible=g>0,this.windField.material.uniforms.uOpacity.value=Math.min(.3,g),(i.phase==="idle"||i.phase==="delivery"||i.phase==="restoring")&&(this.windTime=d),this.windField.material.uniforms.uTime.value=this.windTime}this.renderer.render(this.scene,this.camera),e-this.lastTelemetry>200&&(this.lastTelemetry=e,this.callbacks.onTelemetry({utc:s,solar:{lat:l.lat,lon:l.lon},distanceKm:(h-1)*6371,activeNoise:m,activeQuakes:p,dimensional:i,silent:h>=31,ready:this.ready}))};pointerCoordinates(e){const i=this.renderer.domElement.getBoundingClientRect();return new pe((e.clientX-i.left)/i.width*2-1,-(e.clientY-i.top)/i.height*2+1)}hitEarth(e){if(this.earth)return this.raycaster.setFromCamera(e,this.camera),this.raycaster.intersectObject(this.earth)[0]}hitEvent(e){if(!this.noiseEnabled&&!this.quakesEnabled||this.camera.position.length()>=31)return;let i,s=13;for(const l of this.markers){if(l.alpha<.06||l.mesh.position.clone().normalize().dot(this.camera.position.clone().sub(l.mesh.position).normalize())<=.03)continue;const h=l.mesh.position.clone().project(this.camera),d=Math.hypot((h.x-e.x)*this.width/2,(h.y-e.y)*this.height/2);d<s&&(i=l,s=d)}return i?.event}onNavigation=()=>{this.userNavigated=!0};onPointerDown=e=>{this.pointerStart.set(e.clientX,e.clientY)};onPointerLeave=()=>{this.hoverId="",this.surfaceHovered=!1,this.callbacks.onHover?.(null),this.callbacks.onSurfaceHover?.(!1)};onPointerMove=e=>{if(!this.ready||!this.controls.enabled)return;const i=this.pointerCoordinates(e),s=!!this.hitEarth(i);if(this.surfaceHovered!==s&&this.callbacks.onSurfaceHover?.(s),this.surfaceHovered=s,e.buttons)return;const l=this.hitEvent(i);this.renderer.domElement.style.cursor=l?"pointer":s?"grab":"default",(l?.id??"")!==this.hoverId&&this.callbacks.onHover?.(l??null),this.hoverId=l?.id??""};onPointerUp=e=>{if(this.pointerStart.distanceTo(new pe(e.clientX,e.clientY))>5||!this.ready||!this.controls.enabled)return;const i=this.pointerCoordinates(e),s=this.hitEvent(i);if(s){this.callbacks.onEvent(s);return}const l=this.hitEarth(i);l&&this.callbacks.onPick(cm(l.point))};onContextLost=e=>{e.preventDefault(),this.callbacks.onError("图形上下文中断，请重新载入观测终端。")};diagnostics(){const e=bs(this.clock.read());return{ready:this.ready,utc:this.clock.read(),solar:{lat:e.lat,lon:e.lon},cameraDistance:this.camera.position.length(),far:this.camera.far,dimensional:this.sequence.sample(performance.now()),cruise:this.cruise,controlsEnabled:this.controls.enabled,lunar:{visible:this.lunarReference.visible,opacity:this.lunarReference.material.opacity,radius:this.lunarReference.geometry.attributes.position.getX(0)},foil:{visible:this.foil.visible,alpha:this.foil.material.uniforms.uAlpha.value},cloudOffset:this.cloudOffset.value,clouds:this.clouds?.visible,noise:this.markers.map(i=>({id:i.event.id,kind:i.event.kind??"news",alpha:i.alpha,drawn:i.mesh.visible,sizeCss:i.mesh.material.uniforms.uSize.value,highlighted:i.mesh.material.uniforms.uHighlight.value,...this.project(i.event.displayCoordinates??i.event,1.018)})),signalLayers:{news:this.noiseEnabled,quakes:this.quakesEnabled,initialViewChosen:this.initialViewChosen},wind:{enabled:this.windEnabled,visible:this.windField?.visible??!1,samples:this.windSampleCount},textures:this.textures&&Object.fromEntries(Object.entries(this.textures).map(([i,s])=>{const l=s.image;return[i,{width:l.width,height:l.height,source:l.currentSrc??"embedded"}]})),calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,programs:this.renderer.info.programs?.map(i=>({name:i.name,runnable:this.renderer.getContext().getProgramParameter(i.program,this.renderer.getContext().LINK_STATUS)}))}}project(e,i=1){this.camera.updateMatrixWorld();const s=oa(e),l=s.dot(this.camera.position.clone().sub(s).normalize())>.025,u=s.multiplyScalar(i).project(this.camera);return{x:(u.x+1)*this.width/2,y:(1-u.y)*this.height/2,visible:l,uv:{u:(e.lon+180)/360,v:(e.lat+90)/180}}}pickAt(e,i){const s=this.hitEarth(new pe(e/this.width*2-1,1-i/this.height*2));return s?{...cm(s.point),uv:s.uv}:null}freezeNoise(e){this.frozenNoiseTime=e}dispose(){this.disposed=!0,cancelAnimationFrame(this.animation),this.resizeObserver.disconnect(),this.controls.removeEventListener("start",this.onNavigation),this.controls.dispose(),this.renderer.domElement.removeEventListener("pointerdown",this.onPointerDown),this.renderer.domElement.removeEventListener("pointermove",this.onPointerMove),this.renderer.domElement.removeEventListener("pointerup",this.onPointerUp),this.renderer.domElement.removeEventListener("pointerleave",this.onPointerLeave),this.renderer.domElement.removeEventListener("webglcontextlost",this.onContextLost);const e=new Set;this.scene.traverse(i=>{"geometry"in i&&e.add(i.geometry),"material"in i&&(Array.isArray(i.material)?i.material:[i.material]).forEach(l=>l.dispose())}),e.forEach(i=>i.dispose()),this.textures&&Object.values(this.textures).forEach(i=>i.dispose()),this.noiseGroup?.clear(),this.renderer.dispose(),this.renderer.domElement.remove()}}const lR="https://api.open-meteo.com/v1/forecast",iy=5*6e4,ay=20*6e4,Am=120*6e4,Cm=360*6e4,Yy="singer:meteo:v1",Wy=32,Rm="Open-Meteo 当前模型条件，非站点实测或历史回放；坐标对应邻近模型网格",Zy="wind_speed_10m,wind_direction_10m",cR=`temperature_2m,${Zy},surface_pressure,cloud_cover,precipitation,weather_code`,rr=Object.freeze([-70,-35,0,35,70].flatMap(o=>Array.from({length:12},(e,i)=>Object.freeze({lat:o,lon:-180+i*30})))),uR={0:"晴朗",1:"大部晴朗",2:"局部多云",3:"阴天",45:"雾",48:"雾凇",51:"轻微毛毛雨",53:"毛毛雨",55:"较强毛毛雨",56:"轻微冻毛毛雨",57:"冻毛毛雨",61:"小雨",63:"中雨",65:"大雨",66:"轻微冻雨",67:"冻雨",71:"小雪",73:"中雪",75:"大雪",77:"雪粒",80:"小阵雨",81:"阵雨",82:"强阵雨",85:"小阵雪",86:"较强阵雪",95:"雷雨",96:"雷雨伴小冰雹",97:"强雷雨",99:"雷雨伴冰雹"};function fR(o){return uR[o]??"天气状况未分类"}function Oi(o){if(!o||typeof o!="object"||Array.isArray(o))throw new Error("无效的气象对象");return o}function Bn(o,e,i){if(typeof o!="number"||!Number.isFinite(o)||o<e||o>i)throw new Error("气象数值缺失或越界");return o}function ef(o){const e=Oi(o);return{lat:Bn(e.lat,-90,90),lon:Bn(e.lon,-180,180)}}function sr(o,e,i){if(o[e]!==i)throw new Error(`无法识别的单位：${e}`)}function Ky(o,e){if(typeof o!="string")throw new Error("模型时间缺失");const i=/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})(?::(\d{2})(\.\d{1,3})?)?(Z|[+-]\d{2}:\d{2})?$/.exec(o);if(!i)throw new Error("模型时间格式无效");const s=`${i[1]}T${i[2]}:${i[3]??"00"}${i[4]??""}`,l=Date.parse(`${s}Z`);if(!Number.isFinite(l)||new Date(l).toISOString().slice(0,19)!==s.slice(0,19))throw new Error("模型时间无效");const u=i[5]?Date.parse(o):l-e*1e3;if(!Number.isFinite(u))throw new Error("模型时区无效");return new Date(u).toISOString()}function hR(o,e,i){if(i.time==="unixtime")return new Date(Bn(e.time,0,253402300799)*1e3).toISOString();sr(i,"time","iso8601");const s=typeof e.time=="string"&&/(?:Z|[+-]\d{2}:\d{2})$/.test(e.time);return Ky(e.time,s?0:Bn(o.utc_offset_seconds,-86400,86400))}function dR(o,e){const i={"m/s":1,"km/h":.2777777777777778,mph:.44704,knots:.5144444444444445},s=typeof e.wind_speed_10m=="string"?i[e.wind_speed_10m]:void 0;if(typeof s!="number")throw new Error("无法识别的风速单位");return sr(e,"wind_direction_10m","°"),{windSpeedMs:Bn(Bn(o.wind_speed_10m,0,1e3)*s,0,150),windDirectionDeg:Bn(o.wind_direction_10m,0,360)%360}}function Qy(o,e){const i=Oi(o),s=ef(e),l=ef({lat:i.latitude,lon:i.longitude}),u=Math.abs((l.lon-s.lon+540)%360-180);if(Math.hypot(l.lat-s.lat,u*Math.cos(s.lat*Math.PI/180))>2)throw new Error("模型网格与请求坐标不匹配");const h=Oi(i.current),d=Oi(i.current_units);return{...s,...dR(h,d),observedAt:hR(i,h,d)}}function pR(o,e){if(Array.isArray(o)){if(o.length!==1)throw new Error("气象响应位置数量不匹配");o=o[0]}const i=Oi(o),s=Oi(i.current),l=Oi(i.current_units);return sr(l,"temperature_2m","°C"),sr(l,"surface_pressure","hPa"),sr(l,"cloud_cover","%"),sr(l,"precipitation","mm"),sr(l,"weather_code","wmo code"),$y({...Qy(i,e),temperatureC:s.temperature_2m,surfacePressureHpa:s.surface_pressure,cloudCoverPercent:s.cloud_cover,precipitationMm:s.precipitation,weatherCode:s.weather_code})}function mR(o,e){const i=Array.isArray(o)?o:[o];if(i.length!==e.length)throw new Error("风场响应位置数量不匹配");const s=new Array(e.length),l=new Set;return i.forEach((u,h)=>{const d=u&&typeof u=="object"&&"location_id"in u?u.location_id:h;if(typeof d!="number"||!Number.isInteger(d)||d<0||d>=e.length||l.has(d))throw new Error("风场位置索引无效");l.add(d);try{s[d]=Qy(u,e[d])}catch{}}),s.filter(u=>u!==void 0)}function Jy(o){const e=Oi(o);if(typeof e.observedAt!="string"||!e.observedAt.endsWith("Z"))throw new Error("无效的缓存时间");return{...ef(e),windSpeedMs:Bn(e.windSpeedMs,0,150),windDirectionDeg:Bn(e.windDirectionDeg,0,360)%360,observedAt:Ky(e.observedAt,0)}}function $y(o){const e=Oi(o),i=Bn(e.weatherCode,0,99);if(!Number.isInteger(i))throw new Error("天气代码无效");const s=Bn(e.surfacePressureHpa,Number.MIN_VALUE,1500);return{...Jy(e),temperatureC:Bn(e.temperatureC,-150,100),surfacePressureHpa:s,cloudCoverPercent:Bn(e.cloudCoverPercent,0,100),precipitationMm:Bn(e.precipitationMm,0,1e3),weatherCode:i}}const So=new Map,Nl=new Map;let Ni,Al,sy=!1;const fo=({lat:o,lon:e})=>`${o},${e}`,As=(o,e,i)=>!!o&&e>=o.fetchedAt&&e-o.fetchedAt<i;function um(o,e,i){for(o.delete(e),o.set(e,i);o.size>Wy;)o.delete(o.keys().next().value)}function wm(o){for(const[e,i]of So)As(i,o,Am)||So.delete(e);for(const[e,i]of Nl)i.retryAt<=o&&Nl.delete(e);As(Ni,o,Cm)||(Ni=void 0)}function tS(o){if(!sy){sy=!0;try{const e=globalThis.localStorage?.getItem(Yy);if(!e)return;const i=Oi(JSON.parse(e));if(i.version!==1)return;if(Array.isArray(i.weather))for(const s of i.weather.slice(-Wy))try{const l=Oi(s),u=Bn(l.fetchedAt,0,o),h=$y(l.data);As({fetchedAt:u},o,Am)&&um(So,fo(h),{data:h,fetchedAt:u})}catch{}if(i.wind){const s=Oi(i.wind),l=Bn(s.fetchedAt,0,o);if(!Array.isArray(s.data)||!s.data.length||s.data.length>rr.length)return;const u=s.data.map(Jy);if(new Set(u.map(fo)).size!==u.length||u.some(d=>!rr.some(m=>fo(m)===fo(d))))return;As({fetchedAt:l},o,Cm)&&(Ni={data:u,fetchedAt:l})}}catch{}}}function eS(){wm(Date.now());try{globalThis.localStorage?.setItem(Yy,JSON.stringify({version:1,weather:[...So.values()],wind:Ni}))}catch{}}function Dm(){const o=new Error("请求已取消");return o.name="AbortError",o}function Pa(o){if(o?.aborted)throw Dm()}function nS(o,e){const i=new URLSearchParams({latitude:o.map(s=>s.lat).join(","),longitude:o.map(s=>s.lon).join(","),current:e,timezone:"UTC",timeformat:"iso8601",wind_speed_unit:"ms",temperature_unit:"celsius",precipitation_unit:"mm",cell_selection:"nearest",elevation:o.map(()=>"nan").join(",")});return`${lR}?${i}`}async function iS(o,e){Pa(e);const i=new AbortController,s=()=>i.abort(Dm());e.addEventListener("abort",s,{once:!0});const l=setTimeout(()=>i.abort(new Error("Open-Meteo 请求超时（12 秒）")),12e3);let u=()=>{};try{const h=new Promise((d,m)=>{u=()=>m(i.signal.reason),i.signal.addEventListener("abort",u,{once:!0})});return await Promise.race([(async()=>{const d=await fetch(o,{signal:i.signal,mode:"cors",credentials:"omit"});if(!d.ok)throw new Error(`Open-Meteo HTTP ${d.status}`);return d.json()})(),h])}finally{clearTimeout(l),e.removeEventListener("abort",s),i.signal.removeEventListener("abort",u)}}const xR=new Map,gR=new Map;function aS(o,e,i,s){Pa(s);let l=o.get(e);if(!l){const h=new AbortController;l={controller:h,users:0,promise:Promise.resolve().then(()=>i(h.signal))},o.set(e,l);const d=l,m=()=>{o.get(e)===d&&o.delete(e)};l.promise.then(m,m)}const u=l;return u.users++,new Promise((h,d)=>{let m=!1;const p=x=>{m||(m=!0,s?.removeEventListener("abort",g),u.users--,x())},g=()=>p(()=>{u.users===0&&(o.get(e)===u&&o.delete(e),u.controller.abort()),d(Dm())});s?.addEventListener("abort",g,{once:!0}),u.promise.then(x=>p(()=>h(x)),x=>p(()=>d(x)))})}function sS(o){return o instanceof Error?o.message:"气象服务暂不可用"}function ry(o,e=!1,i=""){return{state:"cached",reading:{...o.data},message:`${e?"过期缓存（不超过 2 小时）":"缓存（5 分钟内）"}${i?`：${i}`:""}；${Rm}`}}function _p(o,e,i=""){const s=o.data.length,l=s<rr.length?`风场降级：${s}/${rr.length} 个有效采样点，缺失 ${rr.length-s}`:`稀疏风场：${s} 个采样点`;return{state:e,samples:o.data.map(u=>({...u})),fetchedAt:new Date(o.fetchedAt).toISOString(),message:`${i}${l}；${Rm}`}}async function _R(o,e){Pa(e);let i;try{i=ef(o)}catch{return{state:"unavailable",reading:null,message:"请求坐标无效"}}return aS(xR,fo(i),async s=>{Pa(s);let l=Date.now();tS(l),wm(l);const u=fo(i),h=So.get(u);if(h&&As(h,l,iy))return ry(h);const d=p=>h&&As(h,Date.now(),Am)?ry(h,!0,p):{state:"unavailable",reading:null,message:`${p}；无可用气象数据`},m=Nl.get(u);if(m&&m.retryAt>l)return d(`暂缓重试：${m.message}`);try{const p=pR(await iS(nS([i],cR),s),i);return Pa(s),l=Date.now(),um(So,u,{data:p,fetchedAt:l}),Nl.delete(u),eS(),{state:"live",reading:{...p},message:Rm}}catch(p){Pa(s);const g=sS(p);return um(Nl,u,{retryAt:Date.now()+iy,message:g}),d(g)}},e)}async function vR(o){return Pa(o),aS(gR,"global",async e=>{Pa(e);const i=Date.now();if(tS(i),wm(i),Ni&&As(Ni,i,ay))return _p(Ni,"cached","缓存（20 分钟内）；");const s=p=>Ni&&As(Ni,Date.now(),Cm)?_p(Ni,"cached",`过期缓存（不超过 6 小时）：${p}；`):{state:"unavailable",samples:[],fetchedAt:null,message:`${p}；无可用风场数据`};if(Al&&Al.retryAt>i)return s(`暂缓重试：${Al.message}`);const l=[rr.slice(0,30),rr.slice(30)],u=await Promise.allSettled(l.map(async p=>mR(await iS(nS(p,Zy),e),p)));Pa(e);const h=u.flatMap(p=>p.status==="fulfilled"?p.value:[]);if(h.length)return Ni={data:h,fetchedAt:Date.now()},Al=void 0,eS(),_p(Ni,"live");const d=u.find(p=>p.status==="rejected"),m=d?.status==="rejected"?sS(d.reason):"风场响应无有效采样点";return Al={retryAt:Date.now()+ay,message:m},s(m)},o)}function oy({picked:o,weather:e,solar:i,className:s=""}){const l=e.reading,u=o?oa(o).dot(oa(i)):null,h=u===null?"":Math.abs(u)<.06?"晨昏带":u>0?"昼面":"夜面";return C.jsxs("div",{className:`weather-slot ${s}`,"data-weather-state":e.state,children:[C.jsxs("span",{className:"eyebrow",children:["薄层大气扰动 ",C.jsx("span",{className:"weather-mode",children:e.state==="live"?"实况模型":e.state==="cached"?"缓存":e.state==="loading"?"探测中":""})]}),C.jsxs("p",{className:"weather-coordinate",children:[o?Fl(o):"点选地表，定位观测切片",h&&C.jsxs("span",{className:"weather-light",children:[" · ",h]})]}),l?C.jsxs("div",{className:"weather-values",children:[C.jsxs("p",{children:["低层流场 ",l.windSpeedMs.toFixed(1)," m/s · ",Math.round(l.windDirectionDeg),"°"]}),C.jsxs("p",{children:["热态 ",l.temperatureC.toFixed(1),"°C ",C.jsxs("span",{children:["云覆 ",Math.round(l.cloudCoverPercent),"%"]})]}),C.jsxs("p",{children:["压强 ",l.surfacePressureHpa.toFixed(0)," hPa ",C.jsxs("span",{children:["降水 ",l.precipitationMm.toFixed(1)," mm"]})]}),C.jsxs("p",{className:"weather-description",children:[fR(l.weatherCode)," · ",l.observedAt.slice(11,16)," UTC"]})]}):null,C.jsx("span",{title:e.message,className:`micro-copy ${e.state==="cached"||e.state==="unavailable"?"data-warning":""}`,children:e.state==="live"?"Open-Meteo · 当前模型，非站点实测":e.message.split("；")[0]||(o?"等待低层大气回波":"Open-Meteo · 当前模型场")})]})}function yR({engine:o,picked:e,silent:i}){const s=se.useRef(null),l=se.useRef(null),u=se.useId(),h=se.useRef(null),d=se.useRef(null);return se.useEffect(()=>{if(!e||i)return;let m=0;const p=()=>{m=requestAnimationFrame(p);const g=o.current;if(!g||!d.current||!s.current||!h.current)return;const x=g.project(e),y=d.current.getBoundingClientRect(),b=g.renderer.domElement.getBoundingClientRect(),M=window.innerWidth<=600,A=document.querySelector(M?".weather-mobile":".instrument-panel .weather-slot");if(!A)return;const S=A.getBoundingClientRect(),v=x.x+b.left-y.left,N=x.y+b.top-y.top,L=x.visible&&v>0&&v<y.width&&N>0&&N<y.height;d.current.style.opacity=L?"1":"0";const F=M?S.left+S.width/2-y.left:S.left-y.left-8,V=S.top-y.top+(M?-5:8);s.current.setAttribute("d",M?`M ${v} ${N} L ${v} ${V-9} L ${F} ${V}`:`M ${v} ${N} L ${F-18} ${N} L ${F} ${V}`),h.current.setAttribute("cx",String(v)),h.current.setAttribute("cy",String(N));const O=Array.from(document.querySelectorAll(".surface-label,.planet-caption,.surface-layerbar,.target-panel,.telemetry-panel,.observation-log,.cosmic-scale")).filter(P=>getComputedStyle(P).display!=="none").map(P=>{const Y=P.getBoundingClientRect();return`M ${Y.left-y.left-4} ${Y.top-y.top-4} h ${Y.width+8} v ${Y.height+8} h ${-Y.width-8} Z`}).join(" ");l.current?.setAttribute("d",O)};return p(),()=>cancelAnimationFrame(m)},[o,e,i]),!e||i?null:C.jsxs("svg",{ref:d,className:"selection-guide","aria-hidden":"true",children:[C.jsx("path",{ref:s,mask:`url(#${u})`}),C.jsx("circle",{ref:h,r:"2.5"}),C.jsx("defs",{children:C.jsxs("mask",{id:u,maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"100%",height:"100%",children:[C.jsx("rect",{width:"100%",height:"100%",fill:"white"}),C.jsx("path",{ref:l,style:{fill:"black",stroke:"none"}})]})})]})}function SR({event:o,silent:e,snapshot:i,onSelect:s,onLocate:l,onHover:u}){const[h,d]=se.useState(""),[m,p]=se.useState(!1),[g,x]=se.useState(!1);se.useEffect(()=>{if(d(""),!o||e)return;let S=0;const v=window.setInterval(()=>{S+=Math.max(1,Math.ceil(o.summary.length/65)),d(o.summary.slice(0,S)),S>=o.summary.length&&window.clearInterval(v)},30);return()=>window.clearInterval(v)},[o,e]);const y=i?.events.filter(S=>!xi(S))??[],b=[...g?y:i?.events??[]].sort((S,v)=>(Date.parse(v.publishedAt??"")||0)-(Date.parse(S.publishedAt??"")||0)),M=o?.demo?"演示":i?.mode==="demo"?"离线演示":i?.mode==="cached"?"缓存":i?"实源":"接通中",A=Bl(o?.url);return C.jsxs("section",{className:`observation-log live-log ${e?"is-silent":""} ${m?"log-collapsed":""}`,"aria-label":"表面噪音观测日志",onMouseLeave:()=>u(null),children:[C.jsxs("div",{className:"section-heading",children:[C.jsx("span",{className:"section-number",children:"02"}),C.jsxs("button",{className:"log-collapse","aria-expanded":!m,onClick:()=>{p(!m),u(null)},children:["表面噪音流 ",C.jsx("span",{children:m?"+":"−"})]}),C.jsx("span",{className:"micro-tag",children:M})]}),!m&&(e?C.jsxs("p",{className:"quiet-copy",children:["观测距离超出阈值，",C.jsx("br",{}),"表面噪音已低于背景噪声。"]}):o?C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"log-navigation",children:[C.jsx("button",{onClick:()=>s(null),children:"← 返回噪音流"}),xi(o)&&C.jsx("button",{onClick:()=>l(o),children:"定位地表 ↗"})]}),C.jsxs("div",{className:"event-location",children:[C.jsx("span",{children:xi(o)?`地表参照 / ${o.settlement}`:"未定位杂波"}),C.jsx("span",{className:o.entropy>.75?"event-tag anomaly":"event-tag",children:o.tag})]}),C.jsx("p",{className:"event-coordinates",children:xi(o)?Fl(o):"无可靠地名匹配 · 不投射地表"}),xi(o)&&C.jsxs("p",{className:"location-precision",children:[o.precision==="seismic"?`USGS 震中 · M ${o.magnitude?.toFixed(1)} · 深度 ${o.depthKm?.toFixed(1)} km · 可修订`:o.precision==="country"?"国家中心近似 · 非事件精确坐标":o.precision==="city"?"标题/摘要地名匹配 · 城市中心近似":o.precision==="reported"?"GDELT 提及地点 · 非事发地核证":"离线坐标参考样本",o.displayCoordinates?" · 显示点微偏移":""]}),C.jsxs("p",{className:"event-copy",children:[h,C.jsx("span",{className:"typing-cursor","aria-hidden":"true",children:"_"})]}),C.jsxs("div",{className:"event-source",children:[C.jsx("span",{children:o.source}),A&&C.jsx("a",{href:A,target:"_blank",rel:"noopener noreferrer","data-testid":"article-link",children:"原始信号 ↗"})]}),C.jsx("p",{className:"event-published",children:o.demo?"离线演示样本 · 非真实资讯":o.publishedAt?`${new Date(o.publishedAt).toISOString().slice(0,16).replace("T"," ")} UTC`:"源未提供发布时间"})]}):C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"log-navigation",children:[C.jsx("span",{children:i?`${i.events.length} 条已捕获信号`:"正在建立外部监听"}),C.jsx("button",{onClick:()=>x(!g),"aria-pressed":g,children:g?"全部信号":`未定位 ${y.length}`})]}),C.jsxs("div",{className:"news-stream","aria-label":g?"未定位噪音流":"已捕获噪音流",children:[b.map(S=>C.jsxs("button",{onClick:()=>s(S),onMouseEnter:()=>u(S),onFocus:()=>u(S),onBlur:()=>u(null),"data-news-id":S.id,children:[C.jsxs("span",{className:`stream-title ${S.kind==="quake"?"seismic-title":""}`,children:[S.kind==="quake"?"◎ ":"",S.summary]}),C.jsxs("small",{children:[C.jsx("span",{children:S.source}),C.jsx("span",{children:xi(S)?S.settlement:"未定位"})]})]},S.id)),b.length===0&&C.jsx("p",{className:"quiet-copy",children:i?"该频段暂无可辨认信号。":"各源独立响应，地球观测不受影响。"})]}),C.jsx("p",{className:"event-source stream-hint",title:i?.warning,children:i?.mode==="demo"?"离线演示样本 · 非真实资讯":i?.mode==="cached"?"链路不可达 · 当前为真实信号缓存":"微点 / 人类喧嚣 · 细环 / USGS 地壳微震"})]}))]})}function bR({utc:o,mode:e,onChange:i}){const s=new Date(o),l=(s.getUTCHours()*3600+s.getUTCMinutes()*60+s.getUTCSeconds())/86400;return C.jsxs("footer",{className:"time-footer",children:[C.jsxs("div",{className:"time-rail","aria-hidden":"true",children:[Array.from({length:49},(u,h)=>C.jsx("span",{className:h%12===0?"major-tick":"",children:h%12===0&&C.jsx("b",{children:String(h/2).padStart(2,"0")})},h)),C.jsx("div",{className:"time-needle",style:{left:`${l*100}%`}})]}),C.jsxs("div",{className:"time-controls-row",children:[C.jsxs("div",{className:"epoch",children:[C.jsx("span",{className:"eyebrow",children:"观测纪元 / UTC"}),C.jsxs("time",{dateTime:s.toISOString(),children:[s.toISOString().slice(0,10).replaceAll("-","."),C.jsx("span",{children:s.toISOString().slice(11,19)})]})]}),C.jsx("div",{className:"time-controls",role:"group","aria-label":"时间流速",children:jy.map(u=>C.jsxs("button",{className:e===u.id?"active":"","aria-pressed":e===u.id,onClick:()=>i(u.id),"data-testid":`time-${u.id}`,children:[C.jsx("span",{className:`time-symbol symbol-${u.id}`,"aria-hidden":"true",children:u.id==="paused"?"Ⅱ":u.id==="live"?"·":u.id==="hour"?"›":"»"}),u.label]},u.id))}),C.jsxs("div",{className:"time-scale-note",children:[C.jsx("span",{children:e==="paused"?"时间切片已冻结":e==="live"?"与母恒星时序同步":"加速观测 · 非当前时刻"}),C.jsx("span",{children:"光抵达这里，需要 8 分 20 秒"})]})]})]})}const MR=[{mark:"●",tone:"news",title:"表面噪音 · 实时新闻",copy:"地球上的白色/琥珀微点与引线是此刻全球真实新闻（BBC、半岛、卫报、联合国等），点击列表或引线可飞向事发地并查看原文。"},{mark:"◎",tone:"quake",title:"地壳微震 · 实时地震",copy:"蓝灰色同心扩散细环来自 USGS 全球 24 小时真实地震数据，标注真实震中、震级与深度。"},{mark:"＋",tone:"weather",title:"薄层大气扰动 · 实时天气",copy:"点击地球任意角落，即时查询该经纬度此刻的气温、风速、风向、气压与云量（Open-Meteo 实时气象模型）。"},{mark:"»",tone:"sun",title:"真实日照阴影与时间轴",copy:"昼夜分界线按此刻真实 UTC 天文太阳位置渲染；底部可暂停或加速，观看日夜阴影扫过地表。"},{mark:"↗",tone:"deep",title:"深空退远 · 暗淡蓝点",copy:"将镜头平滑退远至地月轨道之外，看地球缩成星海尘埃，所有喧嚣衰减至背景噪声以下。"},{mark:"▭",tone:"foil",title:"清理预演 · 二向箔",copy:"体验三维地球连同灯火与新闻缓慢展平为二维星图的可逆艺术演出，随时可点击「时空回溯」复原。"},{mark:"H",tone:"quiet",title:"静默巡航与深空声景",copy:"按 H 进入无文字沉浸环绕模式（移至屏幕边缘或再按 H 退出）；右上角可开启程序合成的深空环境低鸣。"}];function ER({onClose:o,onOpenCredits:e}){return C.jsx("div",{className:"guide-backdrop",role:"presentation",onClick:o,children:C.jsxs("section",{className:"guide-modal",role:"dialog","aria-modal":"true","aria-labelledby":"guide-title",onClick:i=>i.stopPropagation(),children:[C.jsxs("header",{className:"guide-header",children:[C.jsxs("div",{children:[C.jsx("span",{className:"eyebrow",children:"关于作品 / 观测导览"}),C.jsx("h2",{id:"guide-title",children:"歌者 · 第三行星观测终端"})]}),C.jsx("button",{className:"guide-close",onClick:o,"aria-label":"关闭项目说明",children:"×"})]}),C.jsxs("div",{className:"guide-body",children:[C.jsxs("div",{className:"guide-block",children:[C.jsx("h3",{children:"01 / 你现在看到的是什么？"}),C.jsxs("p",{className:"guide-lead",children:["这是一颗按此刻真实时间运转的 3D 地球。地表亮起的微点与引线是",C.jsx("strong",{children:"此刻全球正在发生的真实新闻"}),"，扩散细环是",C.jsx("strong",{children:"刚刚发生的真实地震"}),"，明暗分界是",C.jsx("strong",{children:"真实的太阳日照与黑夜"}),"；拖动旋转、滚轮缩放，点击任意位置都能读出当地此刻的真实天气。"]})]}),C.jsxs("div",{className:"guide-block",children:[C.jsx("h3",{children:"02 / 为什么要做成「歌者文明」视角？"}),C.jsxs("p",{children:[C.jsx("strong",{children:"人类的执念："}),"两百年前黑格尔相信历史将在理性中走向完满，冷战后福山宣告“历史的终结”——人类总习惯把自己眼前的制度、冲突与输赢当成宇宙的中心。"]}),C.jsxs("p",{children:[C.jsx("strong",{children:"宇宙的冷眼："}),"但换到《三体》歌者文明的视角，地球不过是星海边缘一颗普通岩球。我们每天吵翻天的新闻与悲欢，全被装在厚仅 100 公里（不到地球半径 ",C.jsx("strong",{children:"1.57%"}),"）的薄薄空气层里。在宇宙尺度下，轰轰烈烈的“历史”只是一阵微弱噪音，甚至随时可能被一片“二向箔”像归档文件一样顺手抹平。"]}),C.jsxs("p",{children:[C.jsx("strong",{children:"留给观者的余韵："}),"把人类此刻的喧嚣与冷漠的太阳、大气、地壳并置在一起，不是为了虚无——而是让人在看见自身的渺小之后，更觉黑夜里每一簇微弱灯火的脆弱与珍贵。"]})]}),C.jsxs("div",{className:"guide-block",children:[C.jsx("h3",{children:"03 / 术语对照与怎么玩"}),C.jsx("div",{className:"guide-grid",children:MR.map(i=>C.jsxs("div",{className:"guide-item",children:[C.jsx("span",{className:`guide-mark mark-${i.tone}`,"aria-hidden":"true",children:i.mark}),C.jsxs("div",{children:[C.jsx("strong",{children:i.title}),C.jsx("p",{children:i.copy})]})]},i.title))})]})]}),C.jsxs("footer",{className:"guide-footer",children:[C.jsx("button",{className:"guide-link",onClick:e,children:"查看底图与技术数据档案 →"}),C.jsx("button",{className:"guide-enter",onClick:o,children:"返回观测"})]})]})})}const TR=.025,ly=.08;function AR(){const o=globalThis.AudioContext;if(!o)throw new Error("Web Audio is unavailable");return new o}class CR{createContext;now;random;context=null;master=null;filter=null;nodes=new Set;sources=new Set;tails=new Set;ramp={from:0,to:0,start:0,end:0};damping=0;lastPulse=-1/0;active=!1;wanted=!1;disposed=!1;revision=0;enabling=null;suspending=null;disposal=null;mute=null;constructor(e={}){this.createContext=e.createContext??AR,this.now=e.now??(()=>performance.now()/1e3),this.random=e.random??Math.random}get enabled(){return this.active}get initialized(){return this.context!==null}setEnabled(e){if(this.disposed)return Promise.resolve(!1);if(!e)return this.disable();if(this.wanted&&this.enabling)return this.enabling;if(this.active&&this.context?.state==="running")return Promise.resolve(!0);this.wanted=!0;const i=++this.revision;return this.cancelMute(),this.enabling=this.enable(i),this.enabling}setDamping(e){this.disposed||Number.isNaN(e)||(this.damping=Math.max(0,Math.min(1,e)),this.damping===1?(this.fadeMaster(0,0),this.stopTails()):this.active&&this.fadeMaster(this.level(),.18))}pulse(e){const i=this.context;if(!this.active||this.damping===1||!i||!this.filter||i.state!=="running")return;const s=this.now();if(s-this.lastPulse<4)return;let l,u;try{l=this.ownSource(i.createOscillator()),u=this.own(i.createGain());const h={source:l,gain:u},d=i.currentTime,m=d+(e==="quake"?3.5:2.8);l.type="sine",l.frequency.setValueAtTime(e==="quake"?48:72,d),l.frequency.linearRampToValueAtTime(e==="quake"?39:60,m),u.gain.setValueAtTime(0,d),u.gain.linearRampToValueAtTime(e==="quake"?.09:.055,d+.35),u.gain.exponentialRampToValueAtTime(1e-4,m-.1),u.gain.linearRampToValueAtTime(0,m),l.connect(u),u.connect(this.filter),this.tails.add(h),l.onended=()=>this.releaseTail(h),l.start(),l.stop(m+.02),this.lastPulse=s}catch{l&&u?this.releaseTail({source:l,gain:u},!0):l&&this.releaseSource(l)}}dispose(){if(this.disposal)return this.disposal;this.disposed=!0,this.wanted=this.active=!1,++this.revision,this.enabling=null,this.cancelMute(),this.fadeMaster(0,0),this.releaseGraph();const e=this.context;return this.context=null,this.suspending=null,this.disposal=this.close(e),this.disposal}async enable(e){try{const i=this.context??(this.context=this.createContext()),s=this.suspending;if(await i.resume(),!this.current(e))return this.staleResume(i);if(s){if(await s,!this.current(e))return this.staleResume(i);if(await i.resume(),!this.current(e))return this.staleResume(i)}if(i.state!=="running")throw new Error("Audio did not resume");this.master||this.buildGraph(i),this.active=!0,this.fadeMaster(this.level(),this.damping===1?0:.7)}catch{if(this.current(e)){this.wanted=this.active=!1,this.releaseGraph();const i=this.context;this.context=null,this.suspending=null,await this.close(i)}}finally{this.revision===e&&(this.enabling=null)}return this.enabled}disable(){this.wanted=this.active=!1;const e=++this.revision;this.enabling=null,this.cancelMute();const i=this.context;return i?(this.fadeMaster(0,ly),new Promise(s=>{const l=()=>s(this.enabled),u=setTimeout(()=>{if(this.mute=null,!this.current(e)){l();return}this.fadeMaster(0,0),this.stopTails(),this.suspend(i).then(l)},ly*1e3);this.mute={timer:u,finish:l}})):Promise.resolve(!1)}current(e){return!this.disposed&&this.revision===e}async staleResume(e){return this.context===e&&!this.wanted&&!this.disposed&&(this.fadeMaster(0,0),this.stopTails(),await this.suspend(e)),this.enabled}suspend(e){if(this.suspending)return this.suspending;const i=(async()=>{try{e.state!=="closed"&&await e.suspend()}catch{}})();return this.suspending=i,i.then(()=>{this.suspending===i&&(this.suspending=null)}),i}async close(e){try{e&&e.state!=="closed"&&await e.close()}catch{}}cancelMute(){this.mute&&(clearTimeout(this.mute.timer),this.mute.finish(),this.mute=null)}level(){return TR*(1-this.damping)**2}fadeMaster(e,i){if(!this.master||!this.context)return;const s=this.context.currentTime,{from:l,to:u,start:h,end:d}=this.ramp,m=d>h?Math.max(0,Math.min(1,(s-h)/(d-h))):1,p=l+(u-l)*m,g=this.master.gain;i===0?(g.cancelScheduledValues(0),g.value=e,g.setValueAtTime(e,s)):(g.cancelScheduledValues(s),g.setValueAtTime(p,s),g.linearRampToValueAtTime(e,s+i)),this.ramp={from:i===0?e:p,to:e,start:s,end:s+i}}buildGraph(e){const i=this.master=this.own(e.createGain());i.gain.value=0,this.ramp={from:0,to:0,start:0,end:0};const s=this.filter=this.own(e.createBiquadFilter());s.type="lowpass",s.frequency.value=120,s.Q.value=.4,s.connect(i),i.connect(e.destination);for(const[p,g]of[[42,.12],[63,.08]]){const x=this.ownSource(e.createOscillator()),y=this.own(e.createGain());x.type="sine",x.frequency.value=p,y.gain.value=g,x.connect(y),y.connect(s),x.start()}const l=this.ownSource(e.createBufferSource()),u=this.own(e.createGain()),h=e.createBuffer(1,Math.ceil(e.sampleRate*2),e.sampleRate),d=h.getChannelData(0);let m=0;for(let p=0;p<d.length;p++)d[p]=this.random()*2-1,m+=d[p];m/=d.length;for(let p=0;p<d.length;p++)d[p]-=m;l.buffer=h,l.loop=!0,u.gain.value=.12,l.connect(u),u.connect(s),l.start()}own(e){return this.nodes.add(e),e}ownSource(e){return this.sources.add(e),this.own(e)}releaseSource(e){e.onended=null;try{e.stop()}catch{}this.sources.delete(e),this.releaseNode(e)}releaseNode(e){try{e.disconnect()}catch{}this.nodes.delete(e)}releaseTail(e,i=!1){e.source.onended=null,i?this.releaseSource(e.source):(this.sources.delete(e.source),this.releaseNode(e.source)),this.releaseNode(e.gain);for(const s of this.tails)s.source===e.source&&this.tails.delete(s)}stopTails(){for(const e of this.tails)this.releaseTail(e,!0)}releaseGraph(){this.tails.clear();for(const e of this.sources)this.releaseSource(e);for(const e of this.nodes)this.releaseNode(e);this.master=this.filter=null}}function cy({className:o=""}){return C.jsxs("svg",{className:o,viewBox:"0 0 36 36",fill:"none","aria-hidden":"true",children:[C.jsx("circle",{cx:"18",cy:"18",r:"10"}),C.jsx("path",{d:"M18 0v11m0 14v11M0 18h11m14 0h11"}),C.jsx("circle",{cx:"18",cy:"18",r:"1.5"})]})}function Cl({label:o,checked:e,onChange:i}){return C.jsxs("label",{className:"layer-toggle",children:[C.jsx("span",{children:o}),C.jsx("input",{type:"checkbox",checked:e,onChange:s=>i(s.target.checked)}),C.jsx("span",{className:"toggle-track","aria-hidden":"true",children:C.jsx("i",{})})]})}const RR=bs(Date.now()),wR={utc:Date.now(),solar:RR,distanceKm:41411,activeNoise:0,activeQuakes:0,dimensional:{phase:"idle",progress:0,fold:0,foil:0},silent:!1,ready:!1};function DR(){const o=se.useRef(null),e=se.useRef(null),[i,s]=se.useState(wR),[l,u]=se.useState({loaded:0,total:5,warnings:[],complete:!1}),[h,d]=se.useState(""),[m,p]=se.useState("live"),[g,x]=se.useState(!0),[y,b]=se.useState(!0),[M,A]=se.useState(!0),[S,v]=se.useState(!0),[N,L]=se.useState(null),[F,V]=se.useState(!1),[O,P]=se.useState(!1),[Y,D]=se.useState(!1),[w,k]=se.useState(!1),[at,ot]=se.useState(!1),[_t,ft]=se.useState(null),[j,rt]=se.useState(null),[q,vt]=se.useState(null),[dt,qt]=se.useState(!1),[oe,Ee]=se.useState(!0),[B,pt]=se.useState(!1),[Q,et]=se.useState(!1),[Tt,Lt]=se.useState(!1),[Nt,At]=se.useState(!1),[kt,ce]=se.useState(""),De=se.useRef(null),H=se.useRef(!1),ne=i.dimensional.phase,Vt=ne!=="idle",[$t,It]=se.useState({state:"idle",reading:null,message:""}),[ye,Yt]=se.useState({state:"idle",samples:[],fetchedAt:null,message:"按需接通 · 全球稀疏采样"}),ie=se.useMemo(()=>q?.events.filter(xi)??[],[q]),U=ct=>{L(null),ct&&xi(ct)&&(P(!1),e.current?.focusCoordinates(ct)),ft(ct)};se.useEffect(()=>{e.current?.setHighlight(N?.id??_t?.id??null)},[N,_t]),se.useEffect(()=>{if(j||!i.ready||!ie.length)return;const ct=window.setTimeout(()=>{const z=ie.find(St=>St.kind!=="quake"&&e.current?.project(St).visible);z&&rt({lat:z.lat,lon:z.lon})},1900);return()=>clearTimeout(ct)},[j,i.ready,ie]),se.useEffect(()=>{if(!o.current)return;const ct=new CR;De.current=ct;try{const z=new oR(o.current,{onTelemetry:St=>{s(St),ct.setDamping(St.dimensional.fold)},onEvent:U,onPick:St=>{rt(St),ft(null)},onHover:L,onSurfaceHover:V,onTextures:u,onError:d,onPulse:St=>ct.pulse(St)});return e.current=z,z.initialize(),()=>{z.dispose(),ct.dispose(),De.current=null,e.current=null,delete window.__observatory}}catch(z){ct.dispose(),d(z instanceof Error?z.message:"当前设备无法建立 WebGL 观测视野。")}},[]);const T=ct=>{Vt||(pt(ct),Lt(!1),k(!1),ot(!1),et(!1),ct&&(p("live"),e.current?.setTimeMode("live"),D(!1),e.current?.setCalibration(!1)),e.current?.setCruise(ct))};se.useEffect(()=>{const ct=St=>{const Ct=St.target,Rt=Ct instanceof HTMLElement&&(Ct.isContentEditable||/TEXTAREA|SELECT/.test(Ct.tagName)||Ct instanceof HTMLInputElement&&!["checkbox","radio"].includes(Ct.type));St.repeat||St.ctrlKey||St.metaKey||St.altKey||Rt||(St.key.toLowerCase()==="h"&&!Vt&&(St.preventDefault(),T(!B)),St.key==="?"&&!Vt&&!B&&(St.preventDefault(),ot(bt=>!bt),et(!1),k(!1)),St.key==="Escape"&&(Vt?e.current?.restoreDimension():B&&T(!1),k(!1),ot(!1),D(!1),Lt(!1),e.current?.setCalibration(!1)))},z=St=>{B&&(St.clientX<36||St.clientX>innerWidth-36||St.clientY<28||St.clientY>innerHeight-28)&&T(!1)};return window.addEventListener("keydown",ct),window.addEventListener("pointermove",z),window.addEventListener("pointerdown",z),()=>{window.removeEventListener("keydown",ct),window.removeEventListener("pointermove",z),window.removeEventListener("pointerdown",z)}},[B,Vt]);const nt=async()=>{if(!De.current)return;H.current=!H.current;const ct=H.current;await De.current.setEnabled(ct);const z=De.current?.enabled??!1;At(z),ct===H.current&&(ce(ct&&!z?"声景不可用 · 保持静音":""),H.current=z)},yt=()=>{Lt(!1),et(!1),k(!1),ot(!1),D(!1),e.current?.setCalibration(!1),e.current?.releaseFoil()&&s(ct=>({...ct,dimensional:{phase:"delivery",progress:0,fold:0,foil:0}}))};se.useEffect(()=>{let ct=new AbortController,z=0;const St=async()=>{clearTimeout(z),ct.abort(),ct=new AbortController;const bt=ct.signal;try{const mt=await vC(bt);if(bt.aborted)return;vt(mt),e.current?.setNews(mt.events.filter(xi)),mt.mode==="demo"&&(z=window.setTimeout(()=>{St()},2e4))}catch{}};St();const Ct=window.setInterval(()=>{St()},3e5),Rt=()=>{St()};return window.addEventListener("online",Rt),window.addEventListener("offline",Rt),()=>{ct.abort(),clearTimeout(z),clearInterval(Ct),window.removeEventListener("online",Rt),window.removeEventListener("offline",Rt)}},[]),se.useEffect(()=>{if(!j)return;let ct=new AbortController;It({state:"loading",reading:null,message:"正在探测当前模型场"});const z=async()=>{ct.abort(),ct=new AbortController;const mt=ct.signal;try{const jt=await _R(j,mt);mt.aborted||It(jt)}catch{}},St=window.setTimeout(()=>{z()},220),Ct=window.setInterval(()=>{z()},3e5),Rt=()=>{z()},bt=()=>{ct.abort(),It(mt=>({...mt,state:mt.reading?"cached":"unavailable",message:mt.reading?"链路中断 · 保留上次模型切片":"链路中断 · 无该坐标缓存"}))};return window.addEventListener("online",Rt),window.addEventListener("offline",bt),()=>{ct.abort(),clearTimeout(St),clearInterval(Ct),window.removeEventListener("online",Rt),window.removeEventListener("offline",bt)}},[j]),se.useEffect(()=>{if(e.current?.setWind(oe),!oe)return;let ct=new AbortController;const z=async()=>{ct.abort(),ct=new AbortController;const bt=ct.signal;Yt(mt=>({...mt,state:"loading",message:"接收全球低密度流场"}));try{const mt=await vR(bt);if(bt.aborted)return;Yt(mt),e.current?.setWindSamples(mt.samples)}catch{}};z();const St=window.setInterval(()=>{z()},12e5),Ct=()=>{z()},Rt=()=>{ct.abort(),Yt(bt=>({...bt,state:bt.samples.length?"cached":"unavailable",message:bt.samples.length?"流场链路中断 · 保留缓存":"流场不可达 · 不生成替代风向"}))};return window.addEventListener("online",Ct),window.addEventListener("offline",Rt),()=>{ct.abort(),clearInterval(St),window.removeEventListener("online",Ct),window.removeEventListener("offline",Rt)}},[oe]);const Mt=ct=>{xi(ct)&&U(ct)},ht=ct=>{p(ct),e.current?.setTimeMode(ct)},Xt=()=>{const ct=!O;P(ct),ct&&(D(!1),e.current?.setCalibration(!1)),e.current?.setDeepSpace(ct)},Ot=()=>{const ct=!Y;D(ct),e.current?.setCalibration(ct)},Qt=ct=>{P(!1),e.current?.focusCoordinates(ct)},Zt=q?.sources.filter(ct=>ct.state==="error").length??0,Et=q?.mode==="demo"?"离线演示样本 · 非真实资讯":q?.mode==="cached"?"链路不可达 · 保留上次真实缓存":Zt?`${Zt} 个来源不可达 · 其余来源照常显示`:"",Dt=new Date(i.utc),te=bs(Date.now()),ee=ne==="archived"?"二维化完成 · 表面噪音归零 · 进程归档":ne==="restoring"?"时空回溯 · 重建三维观测切片":ne==="delivery"?"封装已释放 · 等待维度接触":"空间自由度递减 · 低熵活动消隐",Bt=h?"观测中断":i.ready?m==="paused"?"时间切片冻结":m==="live"?"观测时序同步":"加速观测中":"建立观测视野";return C.jsxs("main",{className:`observatory ${O?"deep-space":""} ${B?"is-quiet":""} ${Vt?"is-dimensional":""}`,"data-phase":ne,children:[C.jsx("div",{className:"universe",ref:o}),C.jsx(yR,{engine:e,picked:j,silent:i.silent||B||Vt||at}),C.jsx(bC,{engine:e,events:ie,selected:_t,hovered:N,paused:F,hidden:!S||B||O||Vt||Y||at,newsEnabled:y,quakesEnabled:M,onSelect:U}),C.jsxs("div",{className:"hud",inert:B||Vt,children:[C.jsxs("header",{className:"masthead",children:[C.jsxs("a",{className:"brand",href:"#",onClick:ct=>ct.preventDefault(),"aria-label":"歌者观测终端",children:[C.jsx(cy,{className:"brand-mark"}),C.jsxs("span",{children:[C.jsxs("strong",{children:["歌 者",C.jsx("span",{className:"brand-divider",children:"/"}),C.jsx("b",{children:"SINGER"})]}),C.jsx("small",{children:"深空文明观测终端"})]})]}),C.jsxs("div",{className:"header-center",children:[C.jsx("span",{children:"猎户臂 · 本地恒星系"}),C.jsx("span",{className:"header-separator",children:"/"}),C.jsx("span",{children:"观测序列 0003"})]}),C.jsxs("div",{className:"header-status",children:[C.jsx("span",{className:`status-dot ${h?"error":""}`}),C.jsx("span",{children:Bt}),C.jsx("span",{className:"version",children:"V.03"})]})]}),C.jsxs("aside",{className:"target-panel",children:[C.jsxs("div",{className:"eyebrow",children:[C.jsx("span",{className:"section-number",children:"01"})," 观测对象 / SOL–III"]}),C.jsxs("h1",{children:["第三行星",C.jsx("span",{className:"title-dot",children:"."})]}),C.jsx("p",{className:"target-subtitle",children:"一颗普通的岩质行星"}),C.jsxs("div",{className:"target-facts",children:[C.jsxs("div",{children:[C.jsx("span",{children:"恒星距离"}),C.jsxs("span",{children:[te.distanceAu.toFixed(3)," ",C.jsx("em",{children:"AU"})]})]}),C.jsxs("div",{children:[C.jsx("span",{children:"平均半径"}),C.jsxs("span",{children:["6,371 ",C.jsx("em",{children:"km"})]})]}),C.jsxs("div",{children:[C.jsx("span",{children:"文明等级"}),C.jsx("span",{children:"尚未越过母星"})]})]}),C.jsxs("div",{className:"target-classification",children:[C.jsx("span",{className:"tiny-cross",children:"+"})," 存在低熵活动迹象"]})]}),C.jsxs("div",{className:"view-reference","aria-hidden":"true",children:[C.jsx("i",{}),C.jsx("i",{}),C.jsx("i",{}),C.jsx("i",{}),C.jsx("span",{className:"reference-top",children:"视野中心 / 003"})]}),C.jsxs("div",{className:"planet-caption",children:[C.jsx("span",{className:"caption-line"}),C.jsx("p",{children:i.silent?"暗淡蓝点":"薄层之下，众生喧哗。"}),C.jsx("span",{children:i.silent?"在宇宙的尺度上，未发生任何事。":"所有已知的悲欢，都被约束在这里。"})]}),C.jsxs("aside",{className:"telemetry-panel",children:[C.jsxs("div",{className:"section-heading",children:[C.jsx("span",{className:"section-number",children:"03"})," 宏观遥测"]}),C.jsxs("div",{className:"telemetry-item",title:"此刻太阳正午直射的地球经纬度，决定全球真实日照与阴影位置",children:[C.jsx("span",{className:"eyebrow",children:"恒星入射点"}),C.jsxs("strong",{"data-testid":"solar-coordinates",children:[Math.abs(i.solar.lat).toFixed(2),"° ",C.jsx("em",{children:i.solar.lat>=0?"N":"S"}),C.jsx("span",{className:"coordinate-divider",children:"/"}),Math.abs(i.solar.lon).toFixed(2),"° ",C.jsx("em",{children:i.solar.lon>=0?"E":"W"})]})]}),C.jsxs("div",{className:"telemetry-item atmosphere-item",title:"维持人类生存的大气有效厚度仅约 100 公里，不足地球半径的 1.57%",children:[C.jsx("span",{className:"eyebrow",children:"生态薄层 / 行星半径"}),C.jsxs("strong",{children:["1.57",C.jsx("span",{className:"unit",children:"%"})]}),C.jsx("div",{className:"atmosphere-scale",children:C.jsx("i",{})}),C.jsx("span",{className:"micro-copy",children:"100 km / 6,371 km"})]}),C.jsxs("div",{className:"telemetry-item noise-count",title:"当前面向镜头半球上可见的全球实时新闻数量",children:[C.jsx("span",{className:"eyebrow",children:"可见人类表面噪音"}),C.jsxs("strong",{children:[String(i.activeNoise).padStart(2,"0"),C.jsx("span",{className:"unit",children:"处"})]}),C.jsx("span",{className:"micro-copy",children:q?.mode==="demo"?"离线演示样本":q?.mode==="cached"?"真实信号缓存":q?"多源真实信号":"外部频段接通中"})]}),C.jsxs("div",{className:"news-source-state","data-testid":"news-source-state","data-mode":q?.mode??"loading",children:[C.jsxs("button",{onClick:()=>qt(!dt),"aria-expanded":dt,children:[q?`在线源 ${q.sources.filter(ct=>ct.state==="online").length}/${q.sources.length||6}`:"正在接通外部频段",C.jsx("span",{children:dt?"−":"+"})]}),Et&&C.jsx("small",{className:"data-warning",title:q?.warning,children:Et}),dt&&C.jsxs("div",{className:"source-details",children:[q?.sources.map(ct=>C.jsxs("div",{children:[C.jsx("span",{children:ct.name}),C.jsx("span",{className:ct.state==="error"?"data-warning":"",children:ct.state==="online"?`${ct.count} 条`:ct.error||"不可达"})]},ct.id)),C.jsxs("p",{children:["最近探测 ",q?.checkedAt?new Date(q.checkedAt).toISOString().slice(11,19):"—"," UTC · 5 分钟缓存"]})]})]}),C.jsxs("div",{className:"distance-readout",children:[C.jsx("span",{children:"离表距离"}),C.jsxs("span",{children:[i.distanceKm>=1e5?`${(i.distanceKm/1e6).toFixed(2)} × 10⁶`:Math.round(i.distanceKm).toLocaleString("en-US")," km"]})]})]}),C.jsx(SR,{event:_t,silent:i.silent,snapshot:q,onSelect:U,onLocate:Mt,onHover:L}),C.jsx(oy,{picked:j,weather:$t,solar:i.solar,className:"weather-mobile"}),C.jsxs("div",{className:"surface-layerbar",children:[C.jsxs("div",{className:"layer-controls",children:[C.jsx(Cl,{label:"表面噪音",checked:y,onChange:ct=>{b(ct),e.current?.setNoise(ct)}}),C.jsx(Cl,{label:"地壳微震",checked:M,onChange:ct=>{A(ct),e.current?.setQuakes(ct)}}),C.jsx(Cl,{label:"地表标注",checked:S,onChange:v}),C.jsx(Cl,{label:"薄层云系",checked:g,onChange:ct=>{x(ct),e.current?.setClouds(ct)}}),C.jsx(Cl,{label:"风场矢量",checked:oe,onChange:Ee})]}),C.jsxs("span",{className:"layer-counts",title:"当前载入的已定位信号与风场采样点；背面信号不绘制",children:["噪音 ",ie.filter(ct=>ct.kind!=="quake").length," · 地震 ",ie.filter(ct=>ct.kind==="quake").length," · 风场 ",ye.samples.length]})]}),C.jsxs("aside",{className:"instrument-panel",children:[oe&&C.jsxs("p",{title:ye.message,className:`wind-status ${ye.state==="cached"||ye.state==="unavailable"?"data-warning":""}`,"data-wind-state":ye.state,children:[ye.message.split("；")[0],ye.state!=="live"&&ye.samples.length>0?` · ${ye.samples.length} 点`:""]}),C.jsx(oy,{picked:j,weather:$t,solar:i.solar}),C.jsxs("button",{className:`deep-space-button ${O?"selected":""}`,onClick:Xt,"aria-pressed":O,"data-testid":"deep-space",children:[C.jsx("span",{className:"retreat-icon","aria-hidden":"true",children:O?"↙":"↗"}),C.jsxs("span",{children:[O?"返回近地观测":"深空退远",C.jsx("small",{children:O?"重新辨认这颗行星":"暗淡蓝点"})]}),C.jsx("span",{className:"button-index",children:O?"−":"+"})]})]}),Y&&C.jsxs("section",{className:"calibration-panel","aria-label":"经纬度参考校准",children:[C.jsx("div",{className:"eyebrow",children:"观测基准 / ECEF · WGS84 经纬度"}),C.jsx("div",{className:"reference-buttons",children:Em.slice(0,3).map(ct=>C.jsxs("button",{onClick:()=>Qt(ct),"data-testid":`reference-${ct.id}`,children:[C.jsx("span",{children:ct.settlement}),C.jsx("small",{children:Fl(ct,1)})]},ct.id))}),C.jsx("p",{children:"定位后，参考微点应与地表及点击坐标重合。"})]}),m!=="live"&&C.jsx("div",{className:"data-time-notice",children:"日照时序独立 · 新闻与气象仍为当前数据，非历史回放"}),C.jsxs("div",{className:"field-meta",children:[C.jsxs("span",{className:"interaction-hint",children:["拖曳旋转 ",C.jsx("b",{children:"·"})," 滚动接近 ",C.jsx("b",{children:"·"})," 点选地表"]}),C.jsxs("span",{className:"field-actions",children:[C.jsx("button",{onClick:Ot,"aria-pressed":Y,children:"坐标校准"}),C.jsx("span",{children:"/"}),C.jsxs("button",{onClick:()=>k(!w),"aria-expanded":w,children:["底图档案",l.warnings.length>0?" !":""]})]})]}),C.jsx(bR,{utc:i.utc,mode:m,onChange:ht}),C.jsxs("div",{className:"bottom-signature",children:[C.jsx("span",{children:"清理，只是一份普通的工作。"}),C.jsxs("span",{children:["观测日期 ",Dt.toISOString().slice(0,10)," ",C.jsx("span",{className:"signature-dot",children:"·"})," 无需回应"]})]})]}),C.jsxs("nav",{className:"narrative-dock","aria-label":"歌者观测模式",inert:B,children:[C.jsx("div",{className:"narrative-left",children:!Vt&&C.jsxs(C.Fragment,{children:[C.jsxs("button",{"data-testid":"quiet-mode",disabled:!i.ready,onClick:()=>T(!0),children:["静默巡航 ",C.jsx("kbd",{children:"H"})]}),C.jsx("span",{children:"/"}),C.jsxs("button",{onClick:()=>{et(!Q),ot(!1)},"aria-expanded":Q,"data-testid":"cosmic-scale",children:["尺度遥测 ",Q?"−":"+"]}),C.jsx("span",{children:"/"}),C.jsxs("button",{"data-testid":"about-guide","aria-expanded":at,onClick:()=>{ot(!at),et(!1),k(!1)},children:["关于作品 ",C.jsx("kbd",{children:"?"})]})]})}),C.jsxs("div",{className:"narrative-right",children:[C.jsx("button",{"data-testid":"sound-toggle","aria-pressed":Nt,"data-audio-initialized":De.current?.initialized??!1,onClick:()=>{nt()},children:Nt?"声景 / 开":"声景 / 静音"}),C.jsx("span",{children:"/"}),Vt?C.jsx("button",{"data-testid":"restore-dimension",onClick:()=>e.current?.restoreDimension(),children:"时空回溯 / 复原"}):C.jsx("button",{"data-testid":"foil-preview",disabled:!i.ready,onClick:()=>Lt(!Tt),children:"清理预演 · 二向箔"})]})]}),kt&&!B&&C.jsx("span",{className:"audio-note",role:"status",children:kt}),Q&&!B&&C.jsxs("aside",{className:"cosmic-scale","aria-label":"宇宙尺度遥测",children:[C.jsx("div",{className:"eyebrow",children:"尺度档案 / 当前 UTC"}),C.jsxs("div",{className:"population-estimate",title:ey,children:[C.jsx("span",{children:"碳基低熵体估算"}),C.jsx("strong",{children:$C(Date.now()).toLocaleString("en-US")})]}),C.jsxs("p",{children:[te.distanceAu.toFixed(5)," AU ",C.jsxs("span",{children:["≈ ",te.lightSeconds.toFixed(1)," 光秒"]})]}),C.jsx("p",{children:"大气有效层 / 半径 ≈ 1.57%"}),C.jsx("p",{className:"singer-genome",children:"隐藏基因：否 · 清理基因：是"}),C.jsx("small",{children:ey})]}),Tt&&!B&&!Vt&&C.jsxs("section",{className:"foil-confirmation","aria-label":"二向箔二次确认",children:[C.jsx("span",{className:"eyebrow",children:"清理预演 / 仅为可逆的艺术化模拟"}),C.jsxs("p",{children:["坐标已广播 · 低熵体无隐藏基因 · 清理成本极低。",C.jsx("br",{}),"是否释放封装二向箔？"]}),C.jsxs("div",{children:[C.jsx("button",{"data-testid":"release-foil",onClick:yt,children:"释放封装"}),C.jsx("button",{onClick:()=>Lt(!1),children:"暂不清理"})]})]}),Vt&&C.jsxs("div",{className:"dimensional-terminal",role:"status","data-testid":"dimensional-status",children:[C.jsx("p",{children:ee}),ne!=="archived"&&C.jsxs("small",{children:["表面噪音 ",String(i.activeNoise).padStart(2,"0")," · ",ne==="restoring"?"重新建立空间自由度":"无需回应"]})]}),i.distanceKm>100*6371&&!Vt&&!B&&C.jsxs("div",{className:"lunar-scale-note",children:["月球平均轨道 / 384,400 km · 60.34 R⊕",C.jsx("small",{children:"圆轨道尺度参照 · 非实时月球轨迹"})]}),C.jsxs("time",{className:"exhibition-stamp","aria-hidden":!B,dateTime:Dt.toISOString(),children:[Dt.toISOString().replace("T"," ").slice(0,19)," UTC"]}),(!i.ready||h)&&C.jsxs("div",{className:`loading-status ${h?"has-error":""}`,role:"status",children:[C.jsx(cy,{}),C.jsx("span",{children:h?"观测链路中断":"正在辨认这颗行星"}),C.jsx("small",{children:h||`载入本地地表档案 ${l.loaded} / ${l.total}`}),h&&C.jsx("button",{onClick:()=>window.location.reload(),children:"重新建立观测"})]}),l.warnings.length>0&&!w&&C.jsx("button",{className:"texture-warning",onClick:()=>k(!0),children:"底图发生降级 · 查看档案"}),at&&!B&&!Vt&&C.jsx(ER,{onClose:()=>ot(!1),onOpenCredits:()=>{ot(!1),k(!0)}}),w&&C.jsxs("aside",{className:"credits-panel","aria-label":"贴图来源与运行状态",children:[C.jsxs("div",{className:"section-heading",children:["地表档案 / 数据来源",C.jsx("button",{onClick:()=>k(!1),"aria-label":"关闭底图档案",children:"×"})]}),C.jsx("p",{children:"5 张 2048 × 1024 等距圆柱投影底图，均由本地载入，不依赖运行时外链。"}),C.jsxs("p",{children:[C.jsx("a",{href:"https://www.solarsystemscope.com/textures/",target:"_blank",rel:"noreferrer",children:"Solar System Scope / INOVE ↗"}),C.jsx("br",{}),"基于 NASA 影像与地理数据的艺术化整理，非实时卫星图像。",C.jsx("br",{}),C.jsx("a",{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noreferrer",children:"CC BY 4.0 ↗"})]}),C.jsx("p",{children:"法线与海洋遮罩由 TIFF 转换为 JPEG；另生成 1K 本地备用副本。云系为静态底图的独立平流演示，并非实时云场。"}),C.jsx("p",{children:"日照采用 UTC 天文位置；材质与大气为实时渲染近似。球面位置精度受 2K 底图分辨率限制。"}),C.jsx("p",{children:"新闻保留源标题；地名词典仅提供城市/国家中心近似。GDELT 上游不可达，已由 USGS 全球 24 小时 M2.5+ 地震替换；细环使用 USGS 震中与深度，非行政区中心，后续可能修订。缺失发布时间不使用采集时间冒充。"}),C.jsxs("p",{children:["气象与风向来自 ",C.jsx("a",{href:"https://open-meteo.com/",target:"_blank",rel:"noreferrer",children:"Open-Meteo ↗"})," 当前数值模型，非站点实测；模型格点可能吸附邻近坐标。降水为最近模型时间间隔累计；风向为来向。风场为稀疏局地向量示踪，粒子速度仅用于可视化，非完整大气模拟。"]}),C.jsx("p",{children:"人口为基数与增速假设的连续估算，非实时人口统计。日地距离为轨道近似；月轨仅作平均尺度参照。二向箔为可逆艺术化演出，等高纹理由底图明度生成，并非真实高程或物理降维模拟。声景为程序合成，默认严格静音。"}),C.jsx("div",{className:"source-status",children:l.warnings.length?l.warnings.map(ct=>C.jsx("p",{children:ct},ct)):C.jsx("p",{children:"资源状态 / 原始 2K 底图正常 · 未启用降级"})}),C.jsx("a",{href:"/singer-observatory/textures/earth/sources.json",target:"_blank",rel:"noreferrer",children:"查看完整来源与转换记录 ↗"})]})]})}ZM.createRoot(document.getElementById("root")).render(C.jsx(DR,{}));
