(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var xd={exports:{}},qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function by(){if(w_)return qo;w_=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:a,type:r,key:f,ref:l!==void 0?l:null,props:c}}return qo.Fragment=t,qo.jsx=i,qo.jsxs=i,qo}var C_;function Ty(){return C_||(C_=1,xd.exports=by()),xd.exports}var jt=Ty(),Sd={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function Ay(){if(D_)return le;D_=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function v(U,J,Et){this.props=U,this.context=J,this.refs=b,this.updater=Et||M}v.prototype.isReactComponent={},v.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},v.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=v.prototype;function L(U,J,Et){this.props=U,this.context=J,this.refs=b,this.updater=Et||M}var D=L.prototype=new x;D.constructor=L,E(D,v.prototype),D.isPureReactComponent=!0;var O=Array.isArray,k={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function B(U,J,Et,wt,X,ct){return Et=ct.ref,{$$typeof:a,type:U,key:J,ref:Et!==void 0?Et:null,props:ct}}function K(U,J){return B(U.type,J,void 0,void 0,void 0,U.props)}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===a}function T(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Et){return J[Et]})}var H=/\/+/g;function st(U,J){return typeof U=="object"&&U!==null&&U.key!=null?T(""+U.key):J.toString(36)}function $(){}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then($,$):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function lt(U,J,Et,wt,X){var ct=typeof U;(ct==="undefined"||ct==="boolean")&&(U=null);var _t=!1;if(U===null)_t=!0;else switch(ct){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(U.$$typeof){case a:case t:_t=!0;break;case g:return _t=U._init,lt(_t(U._payload),J,Et,wt,X)}}if(_t)return X=X(U),_t=wt===""?"."+st(U,0):wt,O(X)?(Et="",_t!=null&&(Et=_t.replace(H,"$&/")+"/"),lt(X,J,Et,"",function(kt){return kt})):X!=null&&(w(X)&&(X=K(X,Et+(X.key==null||U&&U.key===X.key?"":(""+X.key).replace(H,"$&/")+"/")+_t)),J.push(X)),1;_t=0;var At=wt===""?".":wt+":";if(O(U))for(var Ot=0;Ot<U.length;Ot++)wt=U[Ot],ct=At+st(wt,Ot),_t+=lt(wt,J,Et,ct,X);else if(Ot=S(U),typeof Ot=="function")for(U=Ot.call(U),Ot=0;!(wt=U.next()).done;)wt=wt.value,ct=At+st(wt,Ot++),_t+=lt(wt,J,Et,ct,X);else if(ct==="object"){if(typeof U.then=="function")return lt(ft(U),J,Et,wt,X);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return _t}function F(U,J,Et){if(U==null)return U;var wt=[],X=0;return lt(U,wt,"","",function(ct){return J.call(Et,ct,X++)}),wt}function nt(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(Et){(U._status===0||U._status===-1)&&(U._status=1,U._result=Et)},function(Et){(U._status===0||U._status===-1)&&(U._status=2,U._result=Et)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var W=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function gt(){}return le.Children={map:F,forEach:function(U,J,Et){F(U,function(){J.apply(this,arguments)},Et)},count:function(U){var J=0;return F(U,function(){J++}),J},toArray:function(U){return F(U,function(J){return J})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},le.Component=v,le.Fragment=i,le.Profiler=l,le.PureComponent=L,le.StrictMode=r,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,le.act=function(){throw Error("act(...) is not supported in production builds of React.")},le.cache=function(U){return function(){return U.apply(null,arguments)}},le.cloneElement=function(U,J,Et){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var wt=E({},U.props),X=U.key,ct=void 0;if(J!=null)for(_t in J.ref!==void 0&&(ct=void 0),J.key!==void 0&&(X=""+J.key),J)!N.call(J,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&J.ref===void 0||(wt[_t]=J[_t]);var _t=arguments.length-2;if(_t===1)wt.children=Et;else if(1<_t){for(var At=Array(_t),Ot=0;Ot<_t;Ot++)At[Ot]=arguments[Ot+2];wt.children=At}return B(U.type,X,void 0,void 0,ct,wt)},le.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},le.createElement=function(U,J,Et){var wt,X={},ct=null;if(J!=null)for(wt in J.key!==void 0&&(ct=""+J.key),J)N.call(J,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(X[wt]=J[wt]);var _t=arguments.length-2;if(_t===1)X.children=Et;else if(1<_t){for(var At=Array(_t),Ot=0;Ot<_t;Ot++)At[Ot]=arguments[Ot+2];X.children=At}if(U&&U.defaultProps)for(wt in _t=U.defaultProps,_t)X[wt]===void 0&&(X[wt]=_t[wt]);return B(U,ct,void 0,void 0,null,X)},le.createRef=function(){return{current:null}},le.forwardRef=function(U){return{$$typeof:d,render:U}},le.isValidElement=w,le.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:nt}},le.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},le.startTransition=function(U){var J=k.T,Et={};k.T=Et;try{var wt=U(),X=k.S;X!==null&&X(Et,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(gt,W)}catch(ct){W(ct)}finally{k.T=J}},le.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},le.use=function(U){return k.H.use(U)},le.useActionState=function(U,J,Et){return k.H.useActionState(U,J,Et)},le.useCallback=function(U,J){return k.H.useCallback(U,J)},le.useContext=function(U){return k.H.useContext(U)},le.useDebugValue=function(){},le.useDeferredValue=function(U,J){return k.H.useDeferredValue(U,J)},le.useEffect=function(U,J){return k.H.useEffect(U,J)},le.useId=function(){return k.H.useId()},le.useImperativeHandle=function(U,J,Et){return k.H.useImperativeHandle(U,J,Et)},le.useInsertionEffect=function(U,J){return k.H.useInsertionEffect(U,J)},le.useLayoutEffect=function(U,J){return k.H.useLayoutEffect(U,J)},le.useMemo=function(U,J){return k.H.useMemo(U,J)},le.useOptimistic=function(U,J){return k.H.useOptimistic(U,J)},le.useReducer=function(U,J,Et){return k.H.useReducer(U,J,Et)},le.useRef=function(U){return k.H.useRef(U)},le.useState=function(U){return k.H.useState(U)},le.useSyncExternalStore=function(U,J,Et){return k.H.useSyncExternalStore(U,J,Et)},le.useTransition=function(){return k.H.useTransition()},le.version="19.0.0",le}var U_;function Wh(){return U_||(U_=1,Sd.exports=Ay()),Sd.exports}var Ne=Wh(),yd={exports:{}},Yo={},Md={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function Ry(){return L_||(L_=1,function(a){function t(F,nt){var W=F.length;F.push(nt);t:for(;0<W;){var gt=W-1>>>1,U=F[gt];if(0<l(U,nt))F[gt]=nt,F[W]=U,W=gt;else break t}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var nt=F[0],W=F.pop();if(W!==nt){F[0]=W;t:for(var gt=0,U=F.length,J=U>>>1;gt<J;){var Et=2*(gt+1)-1,wt=F[Et],X=Et+1,ct=F[X];if(0>l(wt,W))X<U&&0>l(ct,wt)?(F[gt]=ct,F[X]=W,gt=X):(F[gt]=wt,F[Et]=W,gt=Et);else if(X<U&&0>l(ct,W))F[gt]=ct,F[X]=W,gt=X;else break t}}return nt}function l(F,nt){var W=F.sortIndex-nt.sortIndex;return W!==0?W:F.id-nt.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();a.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,S=3,M=!1,E=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(F){for(var nt=i(p);nt!==null;){if(nt.callback===null)r(p);else if(nt.startTime<=F)r(p),nt.sortIndex=nt.expirationTime,t(m,nt);else break;nt=i(p)}}function O(F){if(b=!1,D(F),!E)if(i(m)!==null)E=!0,ft();else{var nt=i(p);nt!==null&&lt(O,nt.startTime-F)}}var k=!1,N=-1,B=5,K=-1;function w(){return!(a.unstable_now()-K<B)}function T(){if(k){var F=a.unstable_now();K=F;var nt=!0;try{t:{E=!1,b&&(b=!1,x(N),N=-1),M=!0;var W=S;try{e:{for(D(F),_=i(m);_!==null&&!(_.expirationTime>F&&w());){var gt=_.callback;if(typeof gt=="function"){_.callback=null,S=_.priorityLevel;var U=gt(_.expirationTime<=F);if(F=a.unstable_now(),typeof U=="function"){_.callback=U,D(F),nt=!0;break e}_===i(m)&&r(m),D(F)}else r(m);_=i(m)}if(_!==null)nt=!0;else{var J=i(p);J!==null&&lt(O,J.startTime-F),nt=!1}}break t}finally{_=null,S=W,M=!1}nt=void 0}}finally{nt?H():k=!1}}}var H;if(typeof L=="function")H=function(){L(T)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,$=st.port2;st.port1.onmessage=T,H=function(){$.postMessage(null)}}else H=function(){v(T,0)};function ft(){k||(k=!0,H())}function lt(F,nt){N=v(function(){F(a.unstable_now())},nt)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_continueExecution=function(){E||M||(E=!0,ft())},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_getFirstCallbackNode=function(){return i(m)},a.unstable_next=function(F){switch(S){case 1:case 2:case 3:var nt=3;break;default:nt=S}var W=S;S=nt;try{return F()}finally{S=W}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(F,nt){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=S;S=F;try{return nt()}finally{S=W}},a.unstable_scheduleCallback=function(F,nt,W){var gt=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?gt+W:gt):W=gt,F){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=W+U,F={id:g++,callback:nt,priorityLevel:F,startTime:W,expirationTime:U,sortIndex:-1},W>gt?(F.sortIndex=W,t(p,F),i(m)===null&&F===i(p)&&(b?(x(N),N=-1):b=!0,lt(O,W-gt))):(F.sortIndex=U,t(m,F),E||M||(E=!0,ft())),F},a.unstable_shouldYield=w,a.unstable_wrapCallback=function(F){var nt=S;return function(){var W=S;S=nt;try{return F.apply(this,arguments)}finally{S=W}}}}(Ed)),Ed}var N_;function wy(){return N_||(N_=1,Md.exports=Ry()),Md.exports}var bd={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function Cy(){if(O_)return Rn;O_=1;var a=Wh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Rn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.0.0",Rn}var P_;function Dy(){if(P_)return bd.exports;P_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),bd.exports=Cy(),bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function Uy(){if(z_)return Yo;z_=1;var a=wy(),t=Wh(),i=Dy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),M=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),O=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function N(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var B=Symbol.for("react.client.reference");function K(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===B?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case d:return"Portal";case g:return"Profiler";case p:return"StrictMode";case b:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M:return(e.displayName||"Context")+".Provider";case S:return(e._context.displayName||"Context")+".Consumer";case E:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case x:return n=e.displayName||null,n!==null?n:K(e.type)||"Memo";case L:n=e._payload,e=e._init;try{return K(e(n))}catch{}}return null}var w=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=Object.assign,H,st;function $(e){if(H===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);H=n&&n[1]||"",st=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+H+e+st}var ft=!1;function lt(e,n){if(!e||ft)return"";ft=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ut){var et=ut}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ut){et=ut}e.call(vt.prototype)}}else{try{throw Error()}catch(ut){et=ut}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ut){if(ut&&et&&typeof ut.stack=="string")return[ut.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],R=h[1];if(y&&R){var P=y.split(`
`),V=R.split(`
`);for(u=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;if(o===P.length||u===V.length)for(o=P.length-1,u=V.length-1;1<=o&&0<=u&&P[o]!==V[u];)u--;for(;1<=o&&0<=u;o--,u--)if(P[o]!==V[u]){if(o!==1||u!==1)do if(o--,u--,0>u||P[o]!==V[u]){var dt=`
`+P[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{ft=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?$(s):""}function F(e){switch(e.tag){case 26:case 27:case 5:return $(e.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 15:return e=lt(e.type,!1),e;case 11:return e=lt(e.type.render,!1),e;case 1:return e=lt(e.type,!0),e;default:return""}}function nt(e){try{var n="";do n+=F(e),e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function W(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function gt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function U(e){if(W(e)!==e)throw Error(r(188))}function J(e){var n=e.alternate;if(!n){if(n=W(e),n===null)throw Error(r(188));return n!==e?null:e}for(var s=e,o=n;;){var u=s.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===s)return U(u),e;if(h===o)return U(u),n;h=h.sibling}throw Error(r(188))}if(s.return!==o.return)s=u,o=h;else{for(var y=!1,R=u.child;R;){if(R===s){y=!0,s=u,o=h;break}if(R===o){y=!0,o=u,s=h;break}R=R.sibling}if(!y){for(R=h.child;R;){if(R===s){y=!0,s=h,o=u;break}if(R===o){y=!0,o=h,s=u;break}R=R.sibling}if(!y)throw Error(r(189))}}if(s.alternate!==o)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:n}function Et(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Et(e),n!==null)return n;e=e.sibling}return null}var wt=Array.isArray,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},_t=[],At=-1;function Ot(e){return{current:e}}function kt(e){0>At||(e.current=_t[At],_t[At]=null,At--)}function Gt(e,n){At++,_t[At]=e.current,e.current=n}var Ee=Ot(null),I=Ot(null),Le=Ot(null),ye=Ot(null);function be(e,n){switch(Gt(Le,n),Gt(I,e),Gt(Ee,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?i_(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=i_(e),n=a_(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}kt(Ee),Gt(Ee,n)}function Vt(){kt(Ee),kt(I),kt(Le)}function ke(e){e.memoizedState!==null&&Gt(ye,e);var n=Ee.current,s=a_(n,e.type);n!==s&&(Gt(I,e),Gt(Ee,s))}function ee(e){I.current===e&&(kt(Ee),kt(I)),ye.current===e&&(kt(ye),Go._currentValue=ct)}var ie=Object.prototype.hasOwnProperty,z=a.unstable_scheduleCallback,A=a.unstable_cancelCallback,at=a.unstable_shouldYield,yt=a.unstable_requestPaint,xt=a.unstable_now,St=a.unstable_getCurrentPriorityLevel,Kt=a.unstable_ImmediatePriority,Ut=a.unstable_UserBlockingPriority,Pt=a.unstable_NormalPriority,se=a.unstable_LowPriority,bt=a.unstable_IdlePriority,Bt=a.log,_e=a.unstable_setDisableYieldValue,Qt=null,Dt=null;function ae(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Qt,e,void 0,(e.current.flags&128)===128)}catch{}}function ne(e){if(typeof Bt=="function"&&_e(e),Dt&&typeof Dt.setStrictMode=="function")try{Dt.setStrictMode(Qt,e)}catch{}}var pe=Math.clz32?Math.clz32:ht,q=Math.log,Tt=Math.LN2;function ht(e){return e>>>=0,e===0?32:31-(q(e)/Tt|0)|0}var mt=128,Rt=4194304;function Zt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function de(e,n){var s=e.pendingLanes;if(s===0)return 0;var o=0,u=e.suspendedLanes,h=e.pingedLanes,y=e.warmLanes;e=e.finishedLanes!==0;var R=s&134217727;return R!==0?(s=R&~u,s!==0?o=Zt(s):(h&=R,h!==0?o=Zt(h):e||(y=R&~y,y!==0&&(o=Zt(y))))):(R=s&~u,R!==0?o=Zt(R):h!==0?o=Zt(h):e||(y=s&~y,y!==0&&(o=Zt(y)))),o===0?0:n!==0&&n!==o&&(n&u)===0&&(u=o&-o,y=n&-n,u>=y||u===32&&(y&4194176)!==0)?n:o}function Ie(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function rn(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var e=mt;return mt<<=1,(mt&4194176)===0&&(mt=128),e}function $n(){var e=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),e}function zn(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function ca(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pi(e,n,s,o,u,h){var y=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var R=e.entanglements,P=e.expirationTimes,V=e.hiddenUpdates;for(s=y&~s;0<s;){var dt=31-pe(s),vt=1<<dt;R[dt]=0,P[dt]=-1;var et=V[dt];if(et!==null)for(V[dt]=null,dt=0;dt<et.length;dt++){var ut=et[dt];ut!==null&&(ut.lane&=-536870913)}s&=~vt}o!==0&&Or(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~n))}function Or(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-pe(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194218}function js(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var o=31-pe(s),u=1<<o;u&n|e[o]&n&&(e[o]|=n),s&=~u}}function Zs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Wa(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:M_(e.type))}function pl(e,n){var s=X.p;try{return X.p=e,n()}finally{X.p=s}}var kn=Math.random().toString(36).slice(2),sn="__reactFiber$"+kn,xn="__reactProps$"+kn,ua="__reactContainer$"+kn,Ks="__reactEvents$"+kn,gu="__reactListeners$"+kn,C="__reactHandles$"+kn,Y="__reactResources$"+kn,tt="__reactMarker$"+kn;function it(e){delete e[sn],delete e[xn],delete e[Ks],delete e[gu],delete e[C]}function j(e){var n=e[sn];if(n)return n;for(var s=e.parentNode;s;){if(n=s[ua]||s[sn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=o_(e);e!==null;){if(s=e[sn])return s;e=o_(e)}return n}e=s,s=e.parentNode}return null}function Mt(e){if(e=e[sn]||e[ua]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Lt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function zt(e){var n=e[Y];return n||(n=e[Y]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ct(e){e[tt]=!0}var Jt=new Set,te={};function Wt(e,n){me(e,n),me(e+"Capture",n)}function me(e,n){for(te[e]=n,e=0;e<n.length;e++)Jt.add(n[e])}var we=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),En={},Ae={};function qt(e){return ie.call(Ae,e)?!0:ie.call(En,e)?!1:Xe.test(e)?Ae[e]=!0:(En[e]=!0,!1)}function Ye(e,n,s){if(qt(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function xe(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function Qe(e,n,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+o)}}function on(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qs(e){var n=bn(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,h=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){o=""+y,h.call(this,y)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ge(e){e._valueTracker||(e._valueTracker=Qs(e))}function di(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),o="";return e&&(o=bn(e)?e.checked?"true":"false":e.value),e=o,e!==s?(n.setValue(e),!0):!1}function fa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bn=/[\n"\\]/g;function Tn(e){return e.replace(Bn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Js(e,n,s,o,u,h,y,R){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+on(n)):e.value!==""+on(n)&&(e.value=""+on(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?_u(e,y,on(n)):s!=null?_u(e,y,on(s)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+on(R):e.removeAttribute("name")}function $s(e,n,s,o,u,h,y,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;s=s!=null?""+on(s):"",n=n!=null?""+on(n):s,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function _u(e,n,s){n==="number"&&fa(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Pr(e,n,s,o){if(e=e.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=n.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&o&&(e[s].defaultSelected=!0)}else{for(s=""+on(s),n=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function cp(e,n,s){if(n!=null&&(n=""+on(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+on(s):""}function up(e,n,s,o){if(n==null){if(o!=null){if(s!=null)throw Error(r(92));if(wt(o)){if(1<o.length)throw Error(r(93));o=o[0]}s=o}s==null&&(s=""),n=s}s=on(n),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function zr(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var yx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fp(e,n,s){var o=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,s):typeof s!="number"||s===0||yx.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function dp(e,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&s[u]!==o&&fp(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&fp(e,h,n[h])}function vu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ex=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(e){return Ex.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var xu=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Br=null,Ir=null;function hp(e){var n=Mt(e);if(n&&(e=n.stateNode)){var s=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Js(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Tn(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var o=s[n];if(o!==e&&o.form===e.form){var u=o[xn]||null;if(!u)throw Error(r(90));Js(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<s.length;n++)o=s[n],o.form===e.form&&di(o)}break t;case"textarea":cp(e,s.value,s.defaultValue);break t;case"select":n=s.value,n!=null&&Pr(e,!!s.multiple,n,!1)}}}var yu=!1;function pp(e,n,s){if(yu)return e(n,s);yu=!0;try{var o=e(n);return o}finally{if(yu=!1,(Br!==null||Ir!==null)&&(Jl(),Br&&(n=Br,e=Ir,Ir=Br=null,hp(n),e)))for(n=0;n<e.length;n++)hp(e[n])}}function to(e,n){var s=e.stateNode;if(s===null)return null;var o=s[xn]||null;if(o===null)return null;s=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var Mu=!1;if(we)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Mu=!1}var da=null,Eu=null,gl=null;function mp(){if(gl)return gl;var e,n=Eu,s=n.length,o,u="value"in da?da.value:da.textContent,h=u.length;for(e=0;e<s&&n[e]===u[e];e++);var y=s-e;for(o=1;o<=y&&n[s-o]===u[h-o];o++);return gl=u.slice(e,1<o?1-o:void 0)}function _l(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function gp(){return!1}function In(e){function n(s,o,u,h,y){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(s=e[R],this[R]=s?s(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?vl:gp,this.isPropagationStopped=gp,this}return T(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=In(qa),no=T({},qa,{view:0,detail:0}),bx=In(no),bu,Tu,io,Sl=T({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(bu=e.screenX-io.screenX,Tu=e.screenY-io.screenY):Tu=bu=0,io=e),bu)},movementY:function(e){return"movementY"in e?e.movementY:Tu}}),_p=In(Sl),Tx=T({},Sl,{dataTransfer:0}),Ax=In(Tx),Rx=T({},no,{relatedTarget:0}),Au=In(Rx),wx=T({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Cx=In(wx),Dx=T({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ux=In(Dx),Lx=T({},qa,{data:0}),vp=In(Lx),Nx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Px[e])?!!n[e]:!1}function Ru(){return zx}var Bx=T({},no,{key:function(e){if(e.key){var n=Nx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ox[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ix=In(Bx),Fx=T({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xp=In(Fx),Hx=T({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),Gx=In(Hx),Vx=T({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),kx=In(Vx),Xx=T({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wx=In(Xx),qx=T({},qa,{newState:0,oldState:0}),Yx=In(qx),jx=[9,13,27,32],wu=we&&"CompositionEvent"in window,ao=null;we&&"documentMode"in document&&(ao=document.documentMode);var Zx=we&&"TextEvent"in window&&!ao,Sp=we&&(!wu||ao&&8<ao&&11>=ao),yp=" ",Mp=!1;function Ep(e,n){switch(e){case"keyup":return jx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function Kx(e,n){switch(e){case"compositionend":return bp(n);case"keypress":return n.which!==32?null:(Mp=!0,yp);case"textInput":return e=n.data,e===yp&&Mp?null:e;default:return null}}function Qx(e,n){if(Fr)return e==="compositionend"||!wu&&Ep(e,n)?(e=mp(),gl=Eu=da=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sp&&n.locale!=="ko"?null:n.data;default:return null}}var Jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Jx[e.type]:n==="textarea"}function Ap(e,n,s,o){Br?Ir?Ir.push(o):Ir=[o]:Br=o,n=ic(n,"onChange"),0<n.length&&(s=new xl("onChange","change",null,s,o),e.push({event:s,listeners:n}))}var ro=null,so=null;function $x(e){Jg(e,0)}function yl(e){var n=Lt(e);if(di(n))return e}function Rp(e,n){if(e==="change")return n}var wp=!1;if(we){var Cu;if(we){var Du="oninput"in document;if(!Du){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Du=typeof Cp.oninput=="function"}Cu=Du}else Cu=!1;wp=Cu&&(!document.documentMode||9<document.documentMode)}function Dp(){ro&&(ro.detachEvent("onpropertychange",Up),so=ro=null)}function Up(e){if(e.propertyName==="value"&&yl(so)){var n=[];Ap(n,so,e,Su(e)),pp($x,n)}}function tS(e,n,s){e==="focusin"?(Dp(),ro=n,so=s,ro.attachEvent("onpropertychange",Up)):e==="focusout"&&Dp()}function eS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(so)}function nS(e,n){if(e==="click")return yl(n)}function iS(e,n){if(e==="input"||e==="change")return yl(n)}function aS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xn=typeof Object.is=="function"?Object.is:aS;function oo(e,n){if(Xn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),o=Object.keys(n);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!ie.call(n,u)||!Xn(e[u],n[u]))return!1}return!0}function Lp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Np(e,n){var s=Lp(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=n&&o>=n)return{node:s,offset:n-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Lp(s)}}function Op(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Op(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Pp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=fa(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=fa(e.document)}return n}function Uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function rS(e,n){var s=Pp(n);n=e.focusedElem;var o=e.selectionRange;if(s!==n&&n&&n.ownerDocument&&Op(n.ownerDocument.documentElement,n)){if(o!==null&&Uu(n)){if(e=o.start,s=o.end,s===void 0&&(s=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(s,n.value.length);else if(s=(e=n.ownerDocument||document)&&e.defaultView||window,s.getSelection){s=s.getSelection();var u=n.textContent.length,h=Math.min(o.start,u);o=o.end===void 0?h:Math.min(o.end,u),!s.extend&&h>o&&(u=o,o=h,h=u),u=Np(n,h);var y=Np(n,o);u&&y&&(s.rangeCount!==1||s.anchorNode!==u.node||s.anchorOffset!==u.offset||s.focusNode!==y.node||s.focusOffset!==y.offset)&&(e=e.createRange(),e.setStart(u.node,u.offset),s.removeAllRanges(),h>o?(s.addRange(e),s.extend(y.node,y.offset)):(e.setEnd(y.node,y.offset),s.addRange(e)))}}for(e=[],s=n;s=s.parentNode;)s.nodeType===1&&e.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)s=e[n],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var sS=we&&"documentMode"in document&&11>=document.documentMode,Hr=null,Lu=null,lo=null,Nu=!1;function zp(e,n,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Nu||Hr==null||Hr!==fa(o)||(o=Hr,"selectionStart"in o&&Uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=ic(Lu,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,s),e.push({event:n,listeners:o}),n.target=Hr)))}function Ya(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var Gr={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},Ou={},Bp={};we&&(Bp=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function ja(e){if(Ou[e])return Ou[e];if(!Gr[e])return e;var n=Gr[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Bp)return Ou[e]=n[s];return e}var Ip=ja("animationend"),Fp=ja("animationiteration"),Hp=ja("animationstart"),oS=ja("transitionrun"),lS=ja("transitionstart"),cS=ja("transitioncancel"),Gp=ja("transitionend"),Vp=new Map,kp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function hi(e,n){Vp.set(e,n),Wt(n,[e])}var ti=[],Vr=0,Pu=0;function Ml(){for(var e=Vr,n=Pu=Vr=0;n<e;){var s=ti[n];ti[n++]=null;var o=ti[n];ti[n++]=null;var u=ti[n];ti[n++]=null;var h=ti[n];if(ti[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&Xp(s,u,h)}}function El(e,n,s,o){ti[Vr++]=e,ti[Vr++]=n,ti[Vr++]=s,ti[Vr++]=o,Pu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function zu(e,n,s,o){return El(e,n,s,o),bl(e)}function ha(e,n){return El(e,null,null,n),bl(e)}function Xp(e,n,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var u=!1,h=e.return;h!==null;)h.childLanes|=s,o=h.alternate,o!==null&&(o.childLanes|=s),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;u&&n!==null&&e.tag===3&&(h=e.stateNode,u=31-pe(s),h=h.hiddenUpdates,e=h[u],e===null?h[u]=[n]:e.push(n),n.lane=s|536870912)}function bl(e){if(50<Oo)throw Oo=0,kf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var kr={},Wp=new WeakMap;function ei(e,n){if(typeof e=="object"&&e!==null){var s=Wp.get(e);return s!==void 0?s:(n={value:e,source:n,stack:nt(n)},Wp.set(e,n),n)}return{value:e,source:n,stack:nt(n)}}var Xr=[],Wr=0,Tl=null,Al=0,ni=[],ii=0,Za=null,zi=1,Bi="";function Ka(e,n){Xr[Wr++]=Al,Xr[Wr++]=Tl,Tl=e,Al=n}function qp(e,n,s){ni[ii++]=zi,ni[ii++]=Bi,ni[ii++]=Za,Za=e;var o=zi;e=Bi;var u=32-pe(o)-1;o&=~(1<<u),s+=1;var h=32-pe(n)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,zi=1<<32-pe(n)+u|s<<u|o,Bi=h+e}else zi=1<<h|s<<u|o,Bi=e}function Bu(e){e.return!==null&&(Ka(e,1),qp(e,1,0))}function Iu(e){for(;e===Tl;)Tl=Xr[--Wr],Xr[Wr]=null,Al=Xr[--Wr],Xr[Wr]=null;for(;e===Za;)Za=ni[--ii],ni[ii]=null,Bi=ni[--ii],ni[ii]=null,zi=ni[--ii],ni[ii]=null}var Un=null,Sn=null,Ce=!1,pi=null,bi=!1,Fu=Error(r(519));function Qa(e){var n=Error(r(418,""));throw fo(ei(n,e)),Fu}function Yp(e){var n=e.stateNode,s=e.type,o=e.memoizedProps;switch(n[sn]=e,n[xn]=o,s){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(s=0;s<zo.length;s++)Se(zo[s],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),$s(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ge(n);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),up(n,o.value,o.defaultValue,o.children),Ge(n)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||o.suppressHydrationWarning===!0||n_(n.textContent,s)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=ac),n=!0):n=!1,n||Qa(e)}function jp(e){for(Un=e.return;Un;)switch(Un.tag){case 3:case 27:bi=!0;return;case 5:case 13:bi=!1;return;default:Un=Un.return}}function co(e){if(e!==Un)return!1;if(!Ce)return jp(e),Ce=!0,!1;var n=!1,s;if((s=e.tag!==3&&e.tag!==27)&&((s=e.tag===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||sd(e.type,e.memoizedProps)),s=!s),s&&(n=!0),n&&Sn&&Qa(e),jp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(n===0){Sn=gi(e.nextSibling);break t}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++;e=e.nextSibling}Sn=null}}else Sn=Un?gi(e.stateNode.nextSibling):null;return!0}function uo(){Sn=Un=null,Ce=!1}function fo(e){pi===null?pi=[e]:pi.push(e)}var ho=Error(r(460)),Zp=Error(r(474)),Hu={then:function(){}};function Kp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rl(){}function Qp(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(Rl,Rl),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===ho?Error(r(483)):e;default:if(typeof n.status=="string")n.then(Rl,Rl);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===ho?Error(r(483)):e}throw po=n,ho}}var po=null;function Jp(){if(po===null)throw Error(r(459));var e=po;return po=null,e}var qr=null,mo=0;function wl(e){var n=mo;return mo+=1,qr===null&&(qr=[]),Qp(qr,e,n)}function go(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Cl(e,n){throw n.$$typeof===c?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function $p(e){var n=e._init;return n(e._payload)}function tm(e){function n(Z,G){if(e){var Q=Z.deletions;Q===null?(Z.deletions=[G],Z.flags|=16):Q.push(G)}}function s(Z,G){if(!e)return null;for(;G!==null;)n(Z,G),G=G.sibling;return null}function o(Z){for(var G=new Map;Z!==null;)Z.key!==null?G.set(Z.key,Z):G.set(Z.index,Z),Z=Z.sibling;return G}function u(Z,G){return Z=Ta(Z,G),Z.index=0,Z.sibling=null,Z}function h(Z,G,Q){return Z.index=Q,e?(Q=Z.alternate,Q!==null?(Q=Q.index,Q<G?(Z.flags|=33554434,G):Q):(Z.flags|=33554434,G)):(Z.flags|=1048576,G)}function y(Z){return e&&Z.alternate===null&&(Z.flags|=33554434),Z}function R(Z,G,Q,pt){return G===null||G.tag!==6?(G=Pf(Q,Z.mode,pt),G.return=Z,G):(G=u(G,Q),G.return=Z,G)}function P(Z,G,Q,pt){var It=Q.type;return It===m?dt(Z,G,Q.props.children,pt,Q.key):G!==null&&(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===L&&$p(It)===G.type)?(G=u(G,Q.props),go(G,Q),G.return=Z,G):(G=Yl(Q.type,Q.key,Q.props,null,Z.mode,pt),go(G,Q),G.return=Z,G)}function V(Z,G,Q,pt){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=zf(Q,Z.mode,pt),G.return=Z,G):(G=u(G,Q.children||[]),G.return=Z,G)}function dt(Z,G,Q,pt,It){return G===null||G.tag!==7?(G=or(Q,Z.mode,pt,It),G.return=Z,G):(G=u(G,Q),G.return=Z,G)}function vt(Z,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Pf(""+G,Z.mode,Q),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case f:return Q=Yl(G.type,G.key,G.props,null,Z.mode,Q),go(Q,G),Q.return=Z,Q;case d:return G=zf(G,Z.mode,Q),G.return=Z,G;case L:var pt=G._init;return G=pt(G._payload),vt(Z,G,Q)}if(wt(G)||N(G))return G=or(G,Z.mode,Q,null),G.return=Z,G;if(typeof G.then=="function")return vt(Z,wl(G),Q);if(G.$$typeof===M)return vt(Z,Xl(Z,G),Q);Cl(Z,G)}return null}function et(Z,G,Q,pt){var It=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return It!==null?null:R(Z,G,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case f:return Q.key===It?P(Z,G,Q,pt):null;case d:return Q.key===It?V(Z,G,Q,pt):null;case L:return It=Q._init,Q=It(Q._payload),et(Z,G,Q,pt)}if(wt(Q)||N(Q))return It!==null?null:dt(Z,G,Q,pt,null);if(typeof Q.then=="function")return et(Z,G,wl(Q),pt);if(Q.$$typeof===M)return et(Z,G,Xl(Z,Q),pt);Cl(Z,Q)}return null}function ut(Z,G,Q,pt,It){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Z=Z.get(Q)||null,R(G,Z,""+pt,It);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case f:return Z=Z.get(pt.key===null?Q:pt.key)||null,P(G,Z,pt,It);case d:return Z=Z.get(pt.key===null?Q:pt.key)||null,V(G,Z,pt,It);case L:var he=pt._init;return pt=he(pt._payload),ut(Z,G,Q,pt,It)}if(wt(pt)||N(pt))return Z=Z.get(Q)||null,dt(G,Z,pt,It,null);if(typeof pt.then=="function")return ut(Z,G,Q,wl(pt),It);if(pt.$$typeof===M)return ut(Z,G,Q,Xl(G,pt),It);Cl(G,pt)}return null}function Xt(Z,G,Q,pt){for(var It=null,he=null,Yt=G,$t=G=0,mn=null;Yt!==null&&$t<Q.length;$t++){Yt.index>$t?(mn=Yt,Yt=null):mn=Yt.sibling;var De=et(Z,Yt,Q[$t],pt);if(De===null){Yt===null&&(Yt=mn);break}e&&Yt&&De.alternate===null&&n(Z,Yt),G=h(De,G,$t),he===null?It=De:he.sibling=De,he=De,Yt=mn}if($t===Q.length)return s(Z,Yt),Ce&&Ka(Z,$t),It;if(Yt===null){for(;$t<Q.length;$t++)Yt=vt(Z,Q[$t],pt),Yt!==null&&(G=h(Yt,G,$t),he===null?It=Yt:he.sibling=Yt,he=Yt);return Ce&&Ka(Z,$t),It}for(Yt=o(Yt);$t<Q.length;$t++)mn=ut(Yt,Z,$t,Q[$t],pt),mn!==null&&(e&&mn.alternate!==null&&Yt.delete(mn.key===null?$t:mn.key),G=h(mn,G,$t),he===null?It=mn:he.sibling=mn,he=mn);return e&&Yt.forEach(function(La){return n(Z,La)}),Ce&&Ka(Z,$t),It}function re(Z,G,Q,pt){if(Q==null)throw Error(r(151));for(var It=null,he=null,Yt=G,$t=G=0,mn=null,De=Q.next();Yt!==null&&!De.done;$t++,De=Q.next()){Yt.index>$t?(mn=Yt,Yt=null):mn=Yt.sibling;var La=et(Z,Yt,De.value,pt);if(La===null){Yt===null&&(Yt=mn);break}e&&Yt&&La.alternate===null&&n(Z,Yt),G=h(La,G,$t),he===null?It=La:he.sibling=La,he=La,Yt=mn}if(De.done)return s(Z,Yt),Ce&&Ka(Z,$t),It;if(Yt===null){for(;!De.done;$t++,De=Q.next())De=vt(Z,De.value,pt),De!==null&&(G=h(De,G,$t),he===null?It=De:he.sibling=De,he=De);return Ce&&Ka(Z,$t),It}for(Yt=o(Yt);!De.done;$t++,De=Q.next())De=ut(Yt,Z,$t,De.value,pt),De!==null&&(e&&De.alternate!==null&&Yt.delete(De.key===null?$t:De.key),G=h(De,G,$t),he===null?It=De:he.sibling=De,he=De);return e&&Yt.forEach(function(Ey){return n(Z,Ey)}),Ce&&Ka(Z,$t),It}function Ke(Z,G,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===m&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case f:t:{for(var It=Q.key;G!==null;){if(G.key===It){if(It=Q.type,It===m){if(G.tag===7){s(Z,G.sibling),pt=u(G,Q.props.children),pt.return=Z,Z=pt;break t}}else if(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===L&&$p(It)===G.type){s(Z,G.sibling),pt=u(G,Q.props),go(pt,Q),pt.return=Z,Z=pt;break t}s(Z,G);break}else n(Z,G);G=G.sibling}Q.type===m?(pt=or(Q.props.children,Z.mode,pt,Q.key),pt.return=Z,Z=pt):(pt=Yl(Q.type,Q.key,Q.props,null,Z.mode,pt),go(pt,Q),pt.return=Z,Z=pt)}return y(Z);case d:t:{for(It=Q.key;G!==null;){if(G.key===It)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){s(Z,G.sibling),pt=u(G,Q.children||[]),pt.return=Z,Z=pt;break t}else{s(Z,G);break}else n(Z,G);G=G.sibling}pt=zf(Q,Z.mode,pt),pt.return=Z,Z=pt}return y(Z);case L:return It=Q._init,Q=It(Q._payload),Ke(Z,G,Q,pt)}if(wt(Q))return Xt(Z,G,Q,pt);if(N(Q)){if(It=N(Q),typeof It!="function")throw Error(r(150));return Q=It.call(Q),re(Z,G,Q,pt)}if(typeof Q.then=="function")return Ke(Z,G,wl(Q),pt);if(Q.$$typeof===M)return Ke(Z,G,Xl(Z,Q),pt);Cl(Z,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,G!==null&&G.tag===6?(s(Z,G.sibling),pt=u(G,Q),pt.return=Z,Z=pt):(s(Z,G),pt=Pf(Q,Z.mode,pt),pt.return=Z,Z=pt),y(Z)):s(Z,G)}return function(Z,G,Q,pt){try{mo=0;var It=Ke(Z,G,Q,pt);return qr=null,It}catch(Yt){if(Yt===ho)throw Yt;var he=oi(29,Yt,null,Z.mode);return he.lanes=pt,he.return=Z,he}finally{}}}var Ja=tm(!0),em=tm(!1),Yr=Ot(null),Dl=Ot(0);function nm(e,n){e=ji,Gt(Dl,e),Gt(Yr,n),ji=e|n.baseLanes}function Gu(){Gt(Dl,ji),Gt(Yr,Yr.current)}function Vu(){ji=Dl.current,kt(Yr),kt(Dl)}var ai=Ot(null),Ti=null;function pa(e){var n=e.alternate;Gt(ln,ln.current&1),Gt(ai,e),Ti===null&&(n===null||Yr.current!==null||n.memoizedState!==null)&&(Ti=e)}function im(e){if(e.tag===22){if(Gt(ln,ln.current),Gt(ai,e),Ti===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ti=e)}}else ma()}function ma(){Gt(ln,ln.current),Gt(ai,ai.current)}function Ii(e){kt(ai),Ti===e&&(Ti=null),kt(ln)}var ln=Ot(0);function Ul(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var uS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},fS=a.unstable_scheduleCallback,dS=a.unstable_NormalPriority,cn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new uS,data:new Map,refCount:0}}function _o(e){e.refCount--,e.refCount===0&&fS(dS,function(){e.controller.abort()})}var vo=null,Xu=0,jr=0,Zr=null;function hS(e,n){if(vo===null){var s=vo=[];Xu=0,jr=Qf(),Zr={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Xu++,n.then(am,am),n}function am(){if(--Xu===0&&vo!==null){Zr!==null&&(Zr.status="fulfilled");var e=vo;vo=null,jr=0,Zr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function pS(e,n){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<s.length;u++)(0,s[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var rm=w.S;w.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&hS(e,n),rm!==null&&rm(e,n)};var $a=Ot(null);function Wu(){var e=$a.current;return e!==null?e:Fe.pooledCache}function Ll(e,n){n===null?Gt($a,$a.current):Gt($a,n.pool)}function sm(){var e=Wu();return e===null?null:{parent:cn._currentValue,pool:e}}var ga=0,fe=null,Oe=null,tn=null,Nl=!1,Kr=!1,tr=!1,Ol=0,xo=0,Qr=null,mS=0;function Je(){throw Error(r(321))}function qu(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!Xn(e[s],n[s]))return!1;return!0}function Yu(e,n,s,o,u,h){return ga=h,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,w.H=e===null||e.memoizedState===null?er:_a,tr=!1,h=s(o,u),tr=!1,Kr&&(h=lm(n,s,o,u)),om(e),h}function om(e){w.H=Ai;var n=Oe!==null&&Oe.next!==null;if(ga=0,tn=Oe=fe=null,Nl=!1,xo=0,Qr=null,n)throw Error(r(300));e===null||hn||(e=e.dependencies,e!==null&&kl(e)&&(hn=!0))}function lm(e,n,s,o){fe=e;var u=0;do{if(Kr&&(Qr=null),xo=0,Kr=!1,25<=u)throw Error(r(301));if(u+=1,tn=Oe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}w.H=nr,h=n(s,o)}while(Kr);return h}function gS(){var e=w.H,n=e.useState()[0];return n=typeof n.then=="function"?So(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(fe.flags|=1024),n}function ju(){var e=Ol!==0;return Ol=0,e}function Zu(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function Ku(e){if(Nl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Nl=!1}ga=0,tn=Oe=fe=null,Kr=!1,xo=Ol=0,Qr=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?fe.memoizedState=tn=e:tn=tn.next=e,tn}function en(){if(Oe===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=tn===null?fe.memoizedState:tn.next;if(n!==null)tn=n,Oe=e;else{if(e===null)throw fe.alternate===null?Error(r(467)):Error(r(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},tn===null?fe.memoizedState=tn=e:tn=tn.next=e}return tn}var Pl;Pl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function So(e){var n=xo;return xo+=1,Qr===null&&(Qr=[]),e=Qp(Qr,e,n),n=fe,(tn===null?n.memoizedState:tn.next)===null&&(n=n.alternate,w.H=n===null||n.memoizedState===null?er:_a),e}function zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return So(e);if(e.$$typeof===M)return An(e)}throw Error(r(438,String(e)))}function Qu(e){var n=null,s=fe.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Pl(),fe.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),o=0;o<e;o++)s[o]=O;return n.index++,s}function Fi(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=en();return Ju(n,Oe,e)}function Ju(e,n,s){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=s;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var R=y=null,P=null,V=n,dt=!1;do{var vt=V.lane&-536870913;if(vt!==V.lane?(Me&vt)===vt:(ga&vt)===vt){var et=V.revertLane;if(et===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),vt===jr&&(dt=!0);else if((ga&et)===et){V=V.next,et===jr&&(dt=!0);continue}else vt={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},P===null?(R=P=vt,y=h):P=P.next=vt,fe.lanes|=et,Aa|=et;vt=V.action,tr&&s(h,vt),h=V.hasEagerState?V.eagerState:s(h,vt)}else et={lane:vt,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},P===null?(R=P=et,y=h):P=P.next=et,fe.lanes|=vt,Aa|=vt;V=V.next}while(V!==null&&V!==n);if(P===null?y=h:P.next=R,!Xn(h,e.memoizedState)&&(hn=!0,dt&&(s=Zr,s!==null)))throw s;e.memoizedState=h,e.baseState=y,e.baseQueue=P,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function $u(e){var n=en(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var o=s.dispatch,u=s.pending,h=n.memoizedState;if(u!==null){s.pending=null;var y=u=u.next;do h=e(h,y.action),y=y.next;while(y!==u);Xn(h,n.memoizedState)||(hn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),s.lastRenderedState=h}return[h,o]}function cm(e,n,s){var o=fe,u=en(),h=Ce;if(h){if(s===void 0)throw Error(r(407));s=s()}else s=n();var y=!Xn((Oe||u).memoizedState,s);if(y&&(u.memoizedState=s,hn=!0),u=u.queue,nf(dm.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,Jr(9,fm.bind(null,o,u,s,n),{destroy:void 0},null),Fe===null)throw Error(r(349));h||(ga&60)!==0||um(o,n,s)}return s}function um(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=fe.updateQueue,n===null?(n=Pl(),fe.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function fm(e,n,s,o){n.value=s,n.getSnapshot=o,hm(n)&&pm(e)}function dm(e,n,s){return s(function(){hm(n)&&pm(e)})}function hm(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!Xn(e,s)}catch{return!0}}function pm(e){var n=ha(e,2);n!==null&&Ln(n,e,2)}function tf(e){var n=Fn();if(typeof e=="function"){var s=e;if(e=s(),tr){ne(!0);try{s()}finally{ne(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},n}function mm(e,n,s,o){return e.baseState=s,Ju(e,Oe,typeof o=="function"?o:Fi)}function _S(e,n,s,o,u){if(Hl(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};w.T!==null?s(!0):h.isTransition=!1,o(h),s=n.pending,s===null?(h.next=n.pending=h,gm(n,h)):(h.next=s.next,n.pending=s.next=h)}}function gm(e,n){var s=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=w.T,y={};w.T=y;try{var R=s(u,o),P=w.S;P!==null&&P(y,R),_m(e,n,R)}catch(V){ef(e,n,V)}finally{w.T=h}}else try{h=s(u,o),_m(e,n,h)}catch(V){ef(e,n,V)}}function _m(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){vm(e,n,o)},function(o){return ef(e,n,o)}):vm(e,n,s)}function vm(e,n,s){n.status="fulfilled",n.value=s,xm(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,gm(e,s)))}function ef(e,n,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=s,xm(n),n=n.next;while(n!==o)}e.action=null}function xm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Sm(e,n){return n}function ym(e,n){if(Ce){var s=Fe.formState;if(s!==null){t:{var o=fe;if(Ce){if(Sn){e:{for(var u=Sn,h=bi;u.nodeType!==8;){if(!h){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Sn=gi(u.nextSibling),o=u.data==="F!";break t}}Qa(o)}o=!1}o&&(n=s[0])}}return s=Fn(),s.memoizedState=s.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sm,lastRenderedState:n},s.queue=o,s=Fm.bind(null,fe,o),o.dispatch=s,o=tf(!1),h=lf.bind(null,fe,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,s=_S.bind(null,fe,u,h,s),u.dispatch=s,o.memoizedState=e,[n,s,!1]}function Mm(e){var n=en();return Em(n,Oe,e)}function Em(e,n,s){n=Ju(e,n,Sm)[0],e=Bl(Fi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?So(n):n;var o=en(),u=o.queue,h=u.dispatch;return s!==o.memoizedState&&(fe.flags|=2048,Jr(9,vS.bind(null,u,s),{destroy:void 0},null)),[n,h,e]}function vS(e,n){e.action=n}function bm(e){var n=en(),s=Oe;if(s!==null)return Em(n,s,e);en(),n=n.memoizedState,s=en();var o=s.queue.dispatch;return s.memoizedState=e,[n,o,!1]}function Jr(e,n,s,o){return e={tag:e,create:n,inst:s,deps:o,next:null},n=fe.updateQueue,n===null&&(n=Pl(),fe.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,n.lastEffect=e),e}function Tm(){return en().memoizedState}function Il(e,n,s,o){var u=Fn();fe.flags|=e,u.memoizedState=Jr(1|n,s,{destroy:void 0},o===void 0?null:o)}function Fl(e,n,s,o){var u=en();o=o===void 0?null:o;var h=u.memoizedState.inst;Oe!==null&&o!==null&&qu(o,Oe.memoizedState.deps)?u.memoizedState=Jr(n,s,h,o):(fe.flags|=e,u.memoizedState=Jr(1|n,s,h,o))}function Am(e,n){Il(8390656,8,e,n)}function nf(e,n){Fl(2048,8,e,n)}function Rm(e,n){return Fl(4,2,e,n)}function wm(e,n){return Fl(4,4,e,n)}function Cm(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Dm(e,n,s){s=s!=null?s.concat([e]):null,Fl(4,4,Cm.bind(null,n,e),s)}function af(){}function Um(e,n){var s=en();n=n===void 0?null:n;var o=s.memoizedState;return n!==null&&qu(n,o[1])?o[0]:(s.memoizedState=[e,n],e)}function Lm(e,n){var s=en();n=n===void 0?null:n;var o=s.memoizedState;if(n!==null&&qu(n,o[1]))return o[0];if(o=e(),tr){ne(!0);try{e()}finally{ne(!1)}}return s.memoizedState=[o,n],o}function rf(e,n,s){return s===void 0||(ga&1073741824)!==0?e.memoizedState=n:(e.memoizedState=s,e=Og(),fe.lanes|=e,Aa|=e,s)}function Nm(e,n,s,o){return Xn(s,n)?s:Yr.current!==null?(e=rf(e,s,o),Xn(e,n)||(hn=!0),e):(ga&42)===0?(hn=!0,e.memoizedState=s):(e=Og(),fe.lanes|=e,Aa|=e,n)}function Om(e,n,s,o,u){var h=X.p;X.p=h!==0&&8>h?h:8;var y=w.T,R={};w.T=R,lf(e,!1,n,s);try{var P=u(),V=w.S;if(V!==null&&V(R,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var dt=pS(P,o);yo(e,n,dt,jn(e))}else yo(e,n,o,jn(e))}catch(vt){yo(e,n,{then:function(){},status:"rejected",reason:vt},jn())}finally{X.p=h,w.T=y}}function xS(){}function sf(e,n,s,o){if(e.tag!==5)throw Error(r(476));var u=Pm(e).queue;Om(e,u,n,ct,s===null?xS:function(){return zm(e),s(o)})}function Pm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:ct},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function zm(e){var n=Pm(e).next.queue;yo(e,n,{},jn())}function of(){return An(Go)}function Bm(){return en().memoizedState}function Im(){return en().memoizedState}function SS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=jn();e=Sa(s);var o=ya(n,e,s);o!==null&&(Ln(o,n,s),bo(o,n,s)),n={cache:ku()},e.payload=n;return}n=n.return}}function yS(e,n,s){var o=jn();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Hl(e)?Hm(n,s):(s=zu(e,n,s,o),s!==null&&(Ln(s,e,o),Gm(s,n,o)))}function Fm(e,n,s){var o=jn();yo(e,n,s,o)}function yo(e,n,s,o){var u={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))Hm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,R=h(y,s);if(u.hasEagerState=!0,u.eagerState=R,Xn(R,y))return El(e,n,u,0),Fe===null&&Ml(),!1}catch{}finally{}if(s=zu(e,n,u,o),s!==null)return Ln(s,e,o),Gm(s,n,o),!0}return!1}function lf(e,n,s,o){if(o={lane:2,revertLane:Qf(),action:o,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(n)throw Error(r(479))}else n=zu(e,s,o,2),n!==null&&Ln(n,e,2)}function Hl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function Hm(e,n){Kr=Nl=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function Gm(e,n,s){if((s&4194176)!==0){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,js(e,s)}}var Ai={readContext:An,use:zl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je};Ai.useCacheRefresh=Je,Ai.useMemoCache=Je,Ai.useHostTransitionStatus=Je,Ai.useFormState=Je,Ai.useActionState=Je,Ai.useOptimistic=Je;var er={readContext:An,use:zl,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:Am,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,Il(4194308,4,Cm.bind(null,n,e),s)},useLayoutEffect:function(e,n){return Il(4194308,4,e,n)},useInsertionEffect:function(e,n){Il(4,2,e,n)},useMemo:function(e,n){var s=Fn();n=n===void 0?null:n;var o=e();if(tr){ne(!0);try{e()}finally{ne(!1)}}return s.memoizedState=[o,n],o},useReducer:function(e,n,s){var o=Fn();if(s!==void 0){var u=s(n);if(tr){ne(!0);try{s(n)}finally{ne(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=yS.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=tf(e);var n=e.queue,s=Fm.bind(null,fe,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:af,useDeferredValue:function(e,n){var s=Fn();return rf(s,e,n)},useTransition:function(){var e=tf(!1);return e=Om.bind(null,fe,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var o=fe,u=Fn();if(Ce){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),Fe===null)throw Error(r(349));(Me&60)!==0||um(o,n,s)}u.memoizedState=s;var h={value:s,getSnapshot:n};return u.queue=h,Am(dm.bind(null,o,h,e),[e]),o.flags|=2048,Jr(9,fm.bind(null,o,h,s,n),{destroy:void 0},null),s},useId:function(){var e=Fn(),n=Fe.identifierPrefix;if(Ce){var s=Bi,o=zi;s=(o&~(1<<32-pe(o)-1)).toString(32)+s,n=":"+n+"R"+s,s=Ol++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=mS++,n=":"+n+"r"+s.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Fn().memoizedState=SS.bind(null,fe)}};er.useMemoCache=Qu,er.useHostTransitionStatus=of,er.useFormState=ym,er.useActionState=ym,er.useOptimistic=function(e){var n=Fn();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=lf.bind(null,fe,!0,s),s.dispatch=n,[e,n]};var _a={readContext:An,use:zl,useCallback:Um,useContext:An,useEffect:nf,useImperativeHandle:Dm,useInsertionEffect:Rm,useLayoutEffect:wm,useMemo:Lm,useReducer:Bl,useRef:Tm,useState:function(){return Bl(Fi)},useDebugValue:af,useDeferredValue:function(e,n){var s=en();return Nm(s,Oe.memoizedState,e,n)},useTransition:function(){var e=Bl(Fi)[0],n=en().memoizedState;return[typeof e=="boolean"?e:So(e),n]},useSyncExternalStore:cm,useId:Bm};_a.useCacheRefresh=Im,_a.useMemoCache=Qu,_a.useHostTransitionStatus=of,_a.useFormState=Mm,_a.useActionState=Mm,_a.useOptimistic=function(e,n){var s=en();return mm(s,Oe,e,n)};var nr={readContext:An,use:zl,useCallback:Um,useContext:An,useEffect:nf,useImperativeHandle:Dm,useInsertionEffect:Rm,useLayoutEffect:wm,useMemo:Lm,useReducer:$u,useRef:Tm,useState:function(){return $u(Fi)},useDebugValue:af,useDeferredValue:function(e,n){var s=en();return Oe===null?rf(s,e,n):Nm(s,Oe.memoizedState,e,n)},useTransition:function(){var e=$u(Fi)[0],n=en().memoizedState;return[typeof e=="boolean"?e:So(e),n]},useSyncExternalStore:cm,useId:Bm};nr.useCacheRefresh=Im,nr.useMemoCache=Qu,nr.useHostTransitionStatus=of,nr.useFormState=bm,nr.useActionState=bm,nr.useOptimistic=function(e,n){var s=en();return Oe!==null?mm(s,Oe,e,n):(s.baseState=e,[e,s.queue.dispatch])};function cf(e,n,s,o){n=e.memoizedState,s=s(o,n),s=s==null?n:T({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var uf={isMounted:function(e){return(e=e._reactInternals)?W(e)===e:!1},enqueueSetState:function(e,n,s){e=e._reactInternals;var o=jn(),u=Sa(o);u.payload=n,s!=null&&(u.callback=s),n=ya(e,u,o),n!==null&&(Ln(n,e,o),bo(n,e,o))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var o=jn(),u=Sa(o);u.tag=1,u.payload=n,s!=null&&(u.callback=s),n=ya(e,u,o),n!==null&&(Ln(n,e,o),bo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=jn(),o=Sa(s);o.tag=2,n!=null&&(o.callback=n),n=ya(e,o,s),n!==null&&(Ln(n,e,s),bo(n,e,s))}};function Vm(e,n,s,o,u,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!oo(s,o)||!oo(u,h):!0}function km(e,n,s,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,o),n.state!==e&&uf.enqueueReplaceState(n,n.state,null)}function ir(e,n){var s=n;if("ref"in n){s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}if(e=e.defaultProps){s===n&&(s=T({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}var Gl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Xm(e){Gl(e)}function Wm(e){console.error(e)}function qm(e){Gl(e)}function Vl(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ym(e,n,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ff(e,n,s){return s=Sa(s),s.tag=3,s.payload={element:null},s.callback=function(){Vl(e,n)},s}function jm(e){return e=Sa(e),e.tag=3,e}function Zm(e,n,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Ym(n,s,o)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Ym(n,s,o),typeof u!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function MS(e,n,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=s.alternate,n!==null&&Eo(n,s,u,!0),s=ai.current,s!==null){switch(s.tag){case 13:return Ti===null?qf():s.alternate===null&&Ze===0&&(Ze=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===Hu?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([o]):n.add(o),jf(e,o,u)),!1;case 22:return s.flags|=65536,o===Hu?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([o]):s.add(o)),jf(e,o,u)),!1}throw Error(r(435,s.tag))}return jf(e,o,u),qf(),!1}if(Ce)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Fu&&(e=Error(r(422),{cause:o}),fo(ei(e,s)))):(o!==Fu&&(n=Error(r(423),{cause:o}),fo(ei(n,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ei(o,s),u=ff(e.stateNode,o,u),Af(e,u),Ze!==4&&(Ze=2)),!1;var h=Error(r(520),{cause:o});if(h=ei(h,s),Lo===null?Lo=[h]:Lo.push(h),Ze!==4&&(Ze=2),n===null)return!0;o=ei(o,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=ff(s.stateNode,o,e),Af(s,e),!1;case 1:if(n=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ra===null||!Ra.has(h))))return s.flags|=65536,u&=-u,s.lanes|=u,u=jm(u),Zm(u,e,s,o),Af(s,u),!1}s=s.return}while(s!==null);return!1}var Km=Error(r(461)),hn=!1;function yn(e,n,s,o){n.child=e===null?em(n,null,s,o):Ja(n,e.child,s,o)}function Qm(e,n,s,o,u){s=s.render;var h=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return rr(n),o=Yu(e,n,s,y,h,u),R=ju(),e!==null&&!hn?(Zu(e,n,u),Hi(e,n,u)):(Ce&&R&&Bu(n),n.flags|=1,yn(e,n,o,u),n.child)}function Jm(e,n,s,o,u){if(e===null){var h=s.type;return typeof h=="function"&&!Of(h)&&h.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=h,$m(e,n,h,o,u)):(e=Yl(s.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Sf(e,u)){var y=h.memoizedProps;if(s=s.compare,s=s!==null?s:oo,s(y,o)&&e.ref===n.ref)return Hi(e,n,u)}return n.flags|=1,e=Ta(h,o),e.ref=n.ref,e.return=n,n.child=e}function $m(e,n,s,o,u){if(e!==null){var h=e.memoizedProps;if(oo(h,o)&&e.ref===n.ref)if(hn=!1,n.pendingProps=o=h,Sf(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,Hi(e,n,u)}return df(e,n,s,o,u)}function tg(e,n,s){var o=n.pendingProps,u=o.children,h=(n.stateNode._pendingVisibility&2)!==0,y=e!==null?e.memoizedState:null;if(Mo(e,n),o.mode==="hidden"||h){if((n.flags&128)!==0){if(o=y!==null?y.baseLanes|s:s,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return eg(e,n,o,s)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ll(n,y!==null?y.cachePool:null),y!==null?nm(n,y):Gu(),im(n);else return n.lanes=n.childLanes=536870912,eg(e,n,y!==null?y.baseLanes|s:s,s)}else y!==null?(Ll(n,y.cachePool),nm(n,y),ma(),n.memoizedState=null):(e!==null&&Ll(n,null),Gu(),ma());return yn(e,n,u,s),n.child}function eg(e,n,s,o){var u=Wu();return u=u===null?null:{parent:cn._currentValue,pool:u},n.memoizedState={baseLanes:s,cachePool:u},e!==null&&Ll(n,null),Gu(),im(n),e!==null&&Eo(e,n,o,!0),null}function Mo(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(n.flags|=2097664)}}function df(e,n,s,o,u){return rr(n),s=Yu(e,n,s,o,void 0,u),o=ju(),e!==null&&!hn?(Zu(e,n,u),Hi(e,n,u)):(Ce&&o&&Bu(n),n.flags|=1,yn(e,n,s,u),n.child)}function ng(e,n,s,o,u,h){return rr(n),n.updateQueue=null,s=lm(n,o,s,u),om(e),o=ju(),e!==null&&!hn?(Zu(e,n,h),Hi(e,n,h)):(Ce&&o&&Bu(n),n.flags|=1,yn(e,n,s,h),n.child)}function ig(e,n,s,o,u){if(rr(n),n.stateNode===null){var h=kr,y=s.contextType;typeof y=="object"&&y!==null&&(h=An(y)),h=new s(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=uf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},bf(n),y=s.contextType,h.context=typeof y=="object"&&y!==null?An(y):kr,h.state=n.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(cf(n,s,y,o),h.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&uf.enqueueReplaceState(h,h.state,null),Ao(n,o,h,u),To(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var R=n.memoizedProps,P=ir(s,R);h.props=P;var V=h.context,dt=s.contextType;y=kr,typeof dt=="object"&&dt!==null&&(y=An(dt));var vt=s.getDerivedStateFromProps;dt=typeof vt=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||V!==y)&&km(n,h,o,y),xa=!1;var et=n.memoizedState;h.state=et,Ao(n,o,h,u),To(),V=n.memoizedState,R||et!==V||xa?(typeof vt=="function"&&(cf(n,s,vt,o),V=n.memoizedState),(P=xa||Vm(n,s,P,o,et,V,y))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=V),h.props=o,h.state=V,h.context=y,o=P):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Tf(e,n),y=n.memoizedProps,dt=ir(s,y),h.props=dt,vt=n.pendingProps,et=h.context,V=s.contextType,P=kr,typeof V=="object"&&V!==null&&(P=An(V)),R=s.getDerivedStateFromProps,(V=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==vt||et!==P)&&km(n,h,o,P),xa=!1,et=n.memoizedState,h.state=et,Ao(n,o,h,u),To();var ut=n.memoizedState;y!==vt||et!==ut||xa||e!==null&&e.dependencies!==null&&kl(e.dependencies)?(typeof R=="function"&&(cf(n,s,R,o),ut=n.memoizedState),(dt=xa||Vm(n,s,dt,o,et,ut,P)||e!==null&&e.dependencies!==null&&kl(e.dependencies))?(V||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ut,P),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ut,P)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),h.props=o,h.state=ut,h.context=P,o=dt):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Mo(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Ja(n,e.child,null,u),n.child=Ja(n,null,s,u)):yn(e,n,s,u),n.memoizedState=h.state,e=n.child):e=Hi(e,n,u),e}function ag(e,n,s,o){return uo(),n.flags|=256,yn(e,n,s,o),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0};function pf(e){return{baseLanes:e,cachePool:sm()}}function mf(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=li),e}function rg(e,n,s){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?pa(n):ma(),Ce){var R=Sn,P;if(P=R){t:{for(P=R,R=bi;P.nodeType!==8;){if(!R){R=null;break t}if(P=gi(P.nextSibling),P===null){R=null;break t}}R=P}R!==null?(n.memoizedState={dehydrated:R,treeContext:Za!==null?{id:zi,overflow:Bi}:null,retryLane:536870912},P=oi(18,null,null,0),P.stateNode=R,P.return=n,n.child=P,Un=n,Sn=null,P=!0):P=!1}P||Qa(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return R.data==="$!"?n.lanes=16:n.lanes=536870912,null;Ii(n)}return R=o.children,o=o.fallback,u?(ma(),u=n.mode,R=_f({mode:"hidden",children:R},u),o=or(o,u,s,null),R.return=n,o.return=n,R.sibling=o,n.child=R,u=n.child,u.memoizedState=pf(s),u.childLanes=mf(e,y,s),n.memoizedState=hf,o):(pa(n),gf(n,R))}if(P=e.memoizedState,P!==null&&(R=P.dehydrated,R!==null)){if(h)n.flags&256?(pa(n),n.flags&=-257,n=vf(e,n,s)):n.memoizedState!==null?(ma(),n.child=e.child,n.flags|=128,n=null):(ma(),u=o.fallback,R=n.mode,o=_f({mode:"visible",children:o.children},R),u=or(u,R,s,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Ja(n,e.child,null,s),o=n.child,o.memoizedState=pf(s),o.childLanes=mf(e,y,s),n.memoizedState=hf,n=u);else if(pa(n),R.data==="$!"){if(y=R.nextSibling&&R.nextSibling.dataset,y)var V=y.dgst;y=V,o=Error(r(419)),o.stack="",o.digest=y,fo({value:o,source:null,stack:null}),n=vf(e,n,s)}else if(hn||Eo(e,n,s,!1),y=(s&e.childLanes)!==0,hn||y){if(y=Fe,y!==null){if(o=s&-s,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(y.suspendedLanes|s))!==0?0:o,o!==0&&o!==P.retryLane)throw P.retryLane=o,ha(e,o),Ln(y,e,o),Km}R.data==="$?"||qf(),n=vf(e,n,s)}else R.data==="$?"?(n.flags|=128,n.child=e.child,n=BS.bind(null,e),R._reactRetry=n,n=null):(e=P.treeContext,Sn=gi(R.nextSibling),Un=n,Ce=!0,pi=null,bi=!1,e!==null&&(ni[ii++]=zi,ni[ii++]=Bi,ni[ii++]=Za,zi=e.id,Bi=e.overflow,Za=n),n=gf(n,o.children),n.flags|=4096);return n}return u?(ma(),u=o.fallback,R=n.mode,P=e.child,V=P.sibling,o=Ta(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&31457280,V!==null?u=Ta(V,u):(u=or(u,R,s,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,R=e.child.memoizedState,R===null?R=pf(s):(P=R.cachePool,P!==null?(V=cn._currentValue,P=P.parent!==V?{parent:V,pool:V}:P):P=sm(),R={baseLanes:R.baseLanes|s,cachePool:P}),u.memoizedState=R,u.childLanes=mf(e,y,s),n.memoizedState=hf,o):(pa(n),s=e.child,e=s.sibling,s=Ta(s,{mode:"visible",children:o.children}),s.return=n,s.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=s,n.memoizedState=null,s)}function gf(e,n){return n=_f({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function _f(e,n){return Ug(e,n,0,null)}function vf(e,n,s){return Ja(n,e.child,null,s),e=gf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sg(e,n,s){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Mf(e.return,n,s)}function xf(e,n,s,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=s,h.tailMode=u)}function og(e,n,s){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(yn(e,n,o.children,s),o=ln.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sg(e,s,n);else if(e.tag===19)sg(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Gt(ln,o),u){case"forwards":for(s=n.child,u=null;s!==null;)e=s.alternate,e!==null&&Ul(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),xf(n,!1,u,s,h);break;case"backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ul(e)===null){n.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}xf(n,!0,s,null,h);break;case"together":xf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Hi(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),Aa|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(Eo(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,s=Ta(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=Ta(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function Sf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&kl(e)))}function ES(e,n,s){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),va(n,cn,e.memoizedState.cache),uo();break;case 27:case 5:ke(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(pa(n),n.flags|=128,null):(s&n.child.childLanes)!==0?rg(e,n,s):(pa(n),e=Hi(e,n,s),e!==null?e.sibling:null);pa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(s&n.childLanes)!==0,o||(Eo(e,n,s,!1),o=(s&n.childLanes)!==0),u){if(o)return og(e,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Gt(ln,ln.current),o)break;return null;case 22:case 23:return n.lanes=0,tg(e,n,s);case 24:va(n,cn,e.memoizedState.cache)}return Hi(e,n,s)}function lg(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!Sf(e,s)&&(n.flags&128)===0)return hn=!1,ES(e,n,s);hn=(e.flags&131072)!==0}else hn=!1,Ce&&(n.flags&1048576)!==0&&qp(n,Al,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Of(o)?(e=ir(o,e),n.tag=1,n=ig(null,n,o,e,s)):(n.tag=0,n=df(null,n,o,e,s));else{if(o!=null){if(u=o.$$typeof,u===E){n.tag=11,n=Qm(null,n,o,e,s);break t}else if(u===x){n.tag=14,n=Jm(null,n,o,e,s);break t}}throw n=K(o)||o,Error(r(306,n,""))}}return n;case 0:return df(e,n,n.type,n.pendingProps,s);case 1:return o=n.type,u=ir(o,n.pendingProps),ig(e,n,o,u,s);case 3:t:{if(be(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var h=n.pendingProps;u=n.memoizedState,o=u.element,Tf(e,n),Ao(n,h,null,s);var y=n.memoizedState;if(h=y.cache,va(n,cn,h),h!==u.cache&&Ef(n,[cn],s,!0),To(),h=y.element,u.isDehydrated)if(u={element:h,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=ag(e,n,h,s);break t}else if(h!==o){o=ei(Error(r(424)),n),fo(o),n=ag(e,n,h,s);break t}else for(Sn=gi(n.stateNode.containerInfo.firstChild),Un=n,Ce=!0,pi=null,bi=!0,s=em(n,null,h,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(uo(),h===o){n=Hi(e,n,s);break t}yn(e,n,h,s)}n=n.child}return n;case 26:return Mo(e,n),e===null?(s=f_(n.type,null,n.pendingProps,null))?n.memoizedState=s:Ce||(s=n.type,e=n.pendingProps,o=rc(Le.current).createElement(s),o[sn]=n,o[xn]=e,Mn(o,s,e),Ct(o),n.stateNode=o):n.memoizedState=f_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ke(n),e===null&&Ce&&(o=n.stateNode=l_(n.type,n.pendingProps,Le.current),Un=n,bi=!0,Sn=gi(o.firstChild)),o=n.pendingProps.children,e!==null||Ce?yn(e,n,o,s):n.child=Ja(n,null,o,s),Mo(e,n),n.child;case 5:return e===null&&Ce&&((u=o=Sn)&&(o=$S(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,Un=n,Sn=gi(o.firstChild),bi=!1,u=!0):u=!1),u||Qa(n)),ke(n),u=n.type,h=n.pendingProps,y=e!==null?e.memoizedProps:null,o=h.children,sd(u,h)?o=null:y!==null&&sd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Yu(e,n,gS,null,null,s),Go._currentValue=u),Mo(e,n),yn(e,n,o,s),n.child;case 6:return e===null&&Ce&&((e=s=Sn)&&(s=ty(s,n.pendingProps,bi),s!==null?(n.stateNode=s,Un=n,Sn=null,e=!0):e=!1),e||Qa(n)),null;case 13:return rg(e,n,s);case 4:return be(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ja(n,null,o,s):yn(e,n,o,s),n.child;case 11:return Qm(e,n,n.type,n.pendingProps,s);case 7:return yn(e,n,n.pendingProps,s),n.child;case 8:return yn(e,n,n.pendingProps.children,s),n.child;case 12:return yn(e,n,n.pendingProps.children,s),n.child;case 10:return o=n.pendingProps,va(n,n.type,o.value),yn(e,n,o.children,s),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,rr(n),u=An(u),o=o(u),n.flags|=1,yn(e,n,o,s),n.child;case 14:return Jm(e,n,n.type,n.pendingProps,s);case 15:return $m(e,n,n.type,n.pendingProps,s);case 19:return og(e,n,s);case 22:return tg(e,n,s);case 24:return rr(n),o=An(cn),e===null?(u=Wu(),u===null&&(u=Fe,h=ku(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=s),u=h),n.memoizedState={parent:o,cache:u},bf(n),va(n,cn,u)):((e.lanes&s)!==0&&(Tf(e,n),Ao(n,null,null,s),To()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),va(n,cn,o)):(o=h.cache,va(n,cn,o),o!==u.cache&&Ef(n,[cn],s,!0))),yn(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var yf=Ot(null),ar=null,Gi=null;function va(e,n,s){Gt(yf,n._currentValue),n._currentValue=s}function Vi(e){e._currentValue=yf.current,kt(yf)}function Mf(e,n,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===s)break;e=e.return}}function Ef(e,n,s,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;t:for(;h!==null;){var R=h;h=u;for(var P=0;P<n.length;P++)if(R.context===n[P]){h.lanes|=s,R=h.alternate,R!==null&&(R.lanes|=s),Mf(h.return,s,e),o||(y=null);break t}h=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=s,h=y.alternate,h!==null&&(h.lanes|=s),Mf(y,s,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Eo(e,n,s,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var R=u.type;Xn(u.pendingProps.value,y.value)||(e!==null?e.push(R):e=[R])}}else if(u===ye.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Go):e=[Go])}u=u.return}e!==null&&Ef(n,e,s,o),n.flags|=262144}function kl(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rr(e){ar=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return cg(ar,e)}function Xl(e,n){return ar===null&&rr(e),cg(e,n)}function cg(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Gi===null){if(e===null)throw Error(r(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return s}var xa=!1;function bf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(qe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=bl(e),Xp(e,null,s),n}return El(e,o,n,s),bl(e)}function bo(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,js(e,s)}}function Af(e,n){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,s=s.next}while(s!==null);h===null?u=h=n:h=h.next=n}else u=h=n;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var Rf=!1;function To(){if(Rf){var e=Zr;if(e!==null)throw e}}function Ao(e,n,s,o){Rf=!1;var u=e.updateQueue;xa=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var P=R,V=P.next;P.next=null,y===null?h=V:y.next=V,y=P;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==y&&(R===null?dt.firstBaseUpdate=V:R.next=V,dt.lastBaseUpdate=P))}if(h!==null){var vt=u.baseState;y=0,dt=V=P=null,R=h;do{var et=R.lane&-536870913,ut=et!==R.lane;if(ut?(Me&et)===et:(o&et)===et){et!==0&&et===jr&&(Rf=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Xt=e,re=R;et=n;var Ke=s;switch(re.tag){case 1:if(Xt=re.payload,typeof Xt=="function"){vt=Xt.call(Ke,vt,et);break t}vt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=re.payload,et=typeof Xt=="function"?Xt.call(Ke,vt,et):Xt,et==null)break t;vt=T({},vt,et);break t;case 2:xa=!0}}et=R.callback,et!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[et]:ut.push(et))}else ut={lane:et,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(V=dt=ut,P=vt):dt=dt.next=ut,y|=et;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ut=R,R=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);dt===null&&(P=vt),u.baseState=P,u.firstBaseUpdate=V,u.lastBaseUpdate=dt,h===null&&(u.shared.lanes=0),Aa|=y,e.lanes=y,e.memoizedState=vt}}function ug(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function fg(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)ug(s[e],n)}function Ro(e,n){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&e)===e){o=void 0;var h=s.create,y=s.inst;o=h(),y.destroy=o}s=s.next}while(s!==u)}}catch(R){Be(n,n.return,R)}}function Ma(e,n,s){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var P=s;try{R()}catch(V){Be(u,P,V)}}}o=o.next}while(o!==h)}}catch(V){Be(n,n.return,V)}}function dg(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{fg(n,s)}catch(o){Be(e,e.return,o)}}}function hg(e,n,s){s.props=ir(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){Be(e,n,o)}}function sr(e,n){try{var s=e.ref;if(s!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var u=o;break;default:u=o}typeof s=="function"?e.refCleanup=s(u):s.current=u}}catch(h){Be(e,n,h)}}function Wn(e,n){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Be(e,n,u)}else s.current=null}function pg(e){var n=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){Be(e,e.return,u)}}function mg(e,n,s){try{var o=e.stateNode;jS(o,e.type,s,n),o[xn]=n}catch(u){Be(e,e.return,u)}}function gg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function wf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||gg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cf(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(e,n):s.insertBefore(e,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(e,s)):(n=s,n.appendChild(e)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=ac));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Cf(e,n,s),e=e.sibling;e!==null;)Cf(e,n,s),e=e.sibling}function Wl(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Wl(e,n,s),e=e.sibling;e!==null;)Wl(e,n,s),e=e.sibling}var ki=!1,je=!1,Df=!1,_g=typeof WeakSet=="function"?WeakSet:Set,pn=null,vg=!1;function bS(e,n){if(e=e.containerInfo,ad=fc,e=Pp(e),Uu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break t}var y=0,R=-1,P=-1,V=0,dt=0,vt=e,et=null;e:for(;;){for(var ut;vt!==s||u!==0&&vt.nodeType!==3||(R=y+u),vt!==h||o!==0&&vt.nodeType!==3||(P=y+o),vt.nodeType===3&&(y+=vt.nodeValue.length),(ut=vt.firstChild)!==null;)et=vt,vt=ut;for(;;){if(vt===e)break e;if(et===s&&++V===u&&(R=y),et===h&&++dt===o&&(P=y),(ut=vt.nextSibling)!==null)break;vt=et,et=vt.parentNode}vt=ut}s=R===-1||P===-1?null:{start:R,end:P}}else s=null}s=s||{start:0,end:0}}else s=null;for(rd={focusedElem:e,selectionRange:s},fc=!1,pn=n;pn!==null;)if(n=pn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,pn=e;else for(;pn!==null;){switch(n=pn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,s=n,u=h.memoizedProps,h=h.memoizedState,o=s.stateNode;try{var Xt=ir(s.type,u,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(Xt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(re){Be(s,s.return,re)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)cd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,pn=e;break}pn=n.return}return Xt=vg,vg=!1,Xt}function xg(e,n,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Wi(e,s),o&4&&Ro(5,s);break;case 1:if(Wi(e,s),o&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(R){Be(s,s.return,R)}else{var u=ir(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(R){Be(s,s.return,R)}}o&64&&dg(s),o&512&&sr(s,s.return);break;case 3:if(Wi(e,s),o&64&&(o=s.updateQueue,o!==null)){if(e=null,s.child!==null)switch(s.child.tag){case 27:case 5:e=s.child.stateNode;break;case 1:e=s.child.stateNode}try{fg(o,e)}catch(R){Be(s,s.return,R)}}break;case 26:Wi(e,s),o&512&&sr(s,s.return);break;case 27:case 5:Wi(e,s),n===null&&o&4&&pg(s),o&512&&sr(s,s.return);break;case 12:Wi(e,s);break;case 13:Wi(e,s),o&4&&Mg(e,s);break;case 22:if(u=s.memoizedState!==null||ki,!u){n=n!==null&&n.memoizedState!==null||je;var h=ki,y=je;ki=u,(je=n)&&!y?Ea(e,s,(s.subtreeFlags&8772)!==0):Wi(e,s),ki=h,je=y}o&512&&(s.memoizedProps.mode==="manual"?sr(s,s.return):Wn(s,s.return));break;default:Wi(e,s)}}function Sg(e){var n=e.alternate;n!==null&&(e.alternate=null,Sg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&it(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,qn=!1;function Xi(e,n,s){for(s=s.child;s!==null;)yg(e,n,s),s=s.sibling}function yg(e,n,s){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Qt,s)}catch{}switch(s.tag){case 26:je||Wn(s,n),Xi(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:je||Wn(s,n);var o=nn,u=qn;for(nn=s.stateNode,Xi(e,n,s),s=s.stateNode,n=s.attributes;n.length;)s.removeAttributeNode(n[0]);it(s),nn=o,qn=u;break;case 5:je||Wn(s,n);case 6:u=nn;var h=qn;if(nn=null,Xi(e,n,s),nn=u,qn=h,nn!==null)if(qn)try{e=nn,o=s.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(y){Be(s,n,y)}else try{nn.removeChild(s.stateNode)}catch(y){Be(s,n,y)}break;case 18:nn!==null&&(qn?(n=nn,s=s.stateNode,n.nodeType===8?ld(n.parentNode,s):n.nodeType===1&&ld(n,s),Wo(n)):ld(nn,s.stateNode));break;case 4:o=nn,u=qn,nn=s.stateNode.containerInfo,qn=!0,Xi(e,n,s),nn=o,qn=u;break;case 0:case 11:case 14:case 15:je||Ma(2,s,n),je||Ma(4,s,n),Xi(e,n,s);break;case 1:je||(Wn(s,n),o=s.stateNode,typeof o.componentWillUnmount=="function"&&hg(s,n,o)),Xi(e,n,s);break;case 21:Xi(e,n,s);break;case 22:je||Wn(s,n),je=(o=je)||s.memoizedState!==null,Xi(e,n,s),je=o;break;default:Xi(e,n,s)}}function Mg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wo(e)}catch(s){Be(n,n.return,s)}}function TS(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new _g),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new _g),n;default:throw Error(r(435,e.tag))}}function Uf(e,n){var s=TS(e);n.forEach(function(o){var u=IS.bind(null,e,o);s.has(o)||(s.add(o),o.then(u,u))})}function ri(e,n){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],h=e,y=n,R=y;t:for(;R!==null;){switch(R.tag){case 27:case 5:nn=R.stateNode,qn=!1;break t;case 3:nn=R.stateNode.containerInfo,qn=!0;break t;case 4:nn=R.stateNode.containerInfo,qn=!0;break t}R=R.return}if(nn===null)throw Error(r(160));yg(h,y,u),nn=null,qn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Eg(n,e),n=n.sibling}var mi=null;function Eg(e,n){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ri(n,e),si(e),o&4&&(Ma(3,e,e.return),Ro(3,e),Ma(5,e,e.return));break;case 1:ri(n,e),si(e),o&512&&(je||s===null||Wn(s,s.return)),o&64&&ki&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=mi;if(ri(n,e),si(e),o&512&&(je||s===null||Wn(s,s.return)),o&4){var h=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[tt]||h[sn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Mn(h,o,s),h[sn]=e,Ct(h),o=h;break t;case"link":var y=p_("link","href",u).get(o+(s.href||""));if(y){for(var R=0;R<y.length;R++)if(h=y[R],h.getAttribute("href")===(s.href==null?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(R,1);break e}}h=u.createElement(o),Mn(h,o,s),u.head.appendChild(h);break;case"meta":if(y=p_("meta","content",u).get(o+(s.content||""))){for(R=0;R<y.length;R++)if(h=y[R],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(R,1);break e}}h=u.createElement(o),Mn(h,o,s),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[sn]=e,Ct(h),o=h}e.stateNode=o}else m_(u,e.type,e.stateNode);else e.stateNode=h_(u,o,e.memoizedProps);else h!==o?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,o===null?m_(u,e.type,e.stateNode):h_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&mg(e,e.memoizedProps,s.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){u=e.stateNode,h=e.memoizedProps;try{for(var P=u.firstChild;P;){var V=P.nextSibling,dt=P.nodeName;P[tt]||dt==="HEAD"||dt==="BODY"||dt==="SCRIPT"||dt==="STYLE"||dt==="LINK"&&P.rel.toLowerCase()==="stylesheet"||u.removeChild(P),P=V}for(var vt=e.type,et=u.attributes;et.length;)u.removeAttributeNode(et[0]);Mn(u,vt,h),u[sn]=e,u[xn]=h}catch(Xt){Be(e,e.return,Xt)}}case 5:if(ri(n,e),si(e),o&512&&(je||s===null||Wn(s,s.return)),e.flags&32){u=e.stateNode;try{zr(u,"")}catch(Xt){Be(e,e.return,Xt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,mg(e,u,s!==null?s.memoizedProps:u)),o&1024&&(Df=!0);break;case 6:if(ri(n,e),si(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(Xt){Be(e,e.return,Xt)}}break;case 3:if(lc=null,u=mi,mi=sc(n.containerInfo),ri(n,e),mi=u,si(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Wo(n.containerInfo)}catch(Xt){Be(e,e.return,Xt)}Df&&(Df=!1,bg(e));break;case 4:o=mi,mi=sc(e.stateNode.containerInfo),ri(n,e),si(e),mi=o;break;case 12:ri(n,e),si(e);break;case 13:ri(n,e),si(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Hf=xt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Uf(e,o)));break;case 22:if(o&512&&(je||s===null||Wn(s,s.return)),P=e.memoizedState!==null,V=s!==null&&s.memoizedState!==null,dt=ki,vt=je,ki=dt||P,je=vt||V,ri(n,e),je=vt,ki=dt,si(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=P?n._visibility&-2:n._visibility|1,P&&(n=ki||je,s===null||V||n||$r(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(s=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(s===null){V=s=n;try{if(u=V.stateNode,P)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{y=V.stateNode,R=V.memoizedProps.style;var ut=R!=null&&R.hasOwnProperty("display")?R.display:null;y.style.display=ut==null||typeof ut=="boolean"?"":(""+ut).trim()}}catch(Xt){Be(V,V.return,Xt)}}}else if(n.tag===6){if(s===null){V=n;try{V.stateNode.nodeValue=P?"":V.memoizedProps}catch(Xt){Be(V,V.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Uf(e,s))));break;case 19:ri(n,e),si(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Uf(e,o)));break;case 21:break;default:ri(n,e),si(e)}}function si(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var s=e.return;s!==null;){if(gg(s)){var o=s;break t}s=s.return}throw Error(r(160))}switch(o.tag){case 27:var u=o.stateNode,h=wf(e);Wl(e,h,u);break;case 5:var y=o.stateNode;o.flags&32&&(zr(y,""),o.flags&=-33);var R=wf(e);Wl(e,R,y);break;case 3:case 4:var P=o.stateNode.containerInfo,V=wf(e);Cf(e,V,P);break;default:throw Error(r(161))}}}catch(dt){Be(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function bg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;bg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Wi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)xg(e,n.alternate,n),n=n.sibling}function $r(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),$r(n);break;case 1:Wn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&hg(n,n.return,s),$r(n);break;case 26:case 27:case 5:Wn(n,n.return),$r(n);break;case 22:Wn(n,n.return),n.memoizedState===null&&$r(n);break;default:$r(n)}e=e.sibling}}function Ea(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:Ea(u,h,s),Ro(4,h);break;case 1:if(Ea(u,h,s),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(V){Be(o,o.return,V)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)ug(P[u],R)}catch(V){Be(o,o.return,V)}}s&&y&64&&dg(h),sr(h,h.return);break;case 26:case 27:case 5:Ea(u,h,s),s&&o===null&&y&4&&pg(h),sr(h,h.return);break;case 12:Ea(u,h,s);break;case 13:Ea(u,h,s),s&&y&4&&Mg(u,h);break;case 22:h.memoizedState===null&&Ea(u,h,s),sr(h,h.return);break;default:Ea(u,h,s)}n=n.sibling}}function Lf(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&_o(s))}function Nf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&_o(e))}function ba(e,n,s,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Tg(e,n,s,o),n=n.sibling}function Tg(e,n,s,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ba(e,n,s,o),u&2048&&Ro(9,n);break;case 3:ba(e,n,s,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&_o(e)));break;case 12:if(u&2048){ba(e,n,s,o),e=n.stateNode;try{var h=n.memoizedProps,y=h.id,R=h.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Be(n,n.return,P)}}else ba(e,n,s,o);break;case 23:break;case 22:h=n.stateNode,n.memoizedState!==null?h._visibility&4?ba(e,n,s,o):wo(e,n):h._visibility&4?ba(e,n,s,o):(h._visibility|=4,ts(e,n,s,o,(n.subtreeFlags&10256)!==0)),u&2048&&Lf(n.alternate,n);break;case 24:ba(e,n,s,o),u&2048&&Nf(n.alternate,n);break;default:ba(e,n,s,o)}}function ts(e,n,s,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,y=n,R=s,P=o,V=y.flags;switch(y.tag){case 0:case 11:case 15:ts(h,y,R,P,u),Ro(8,y);break;case 23:break;case 22:var dt=y.stateNode;y.memoizedState!==null?dt._visibility&4?ts(h,y,R,P,u):wo(h,y):(dt._visibility|=4,ts(h,y,R,P,u)),u&&V&2048&&Lf(y.alternate,y);break;case 24:ts(h,y,R,P,u),u&&V&2048&&Nf(y.alternate,y);break;default:ts(h,y,R,P,u)}n=n.sibling}}function wo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,o=n,u=o.flags;switch(o.tag){case 22:wo(s,o),u&2048&&Lf(o.alternate,o);break;case 24:wo(s,o),u&2048&&Nf(o.alternate,o);break;default:wo(s,o)}n=n.sibling}}var Co=8192;function es(e){if(e.subtreeFlags&Co)for(e=e.child;e!==null;)Ag(e),e=e.sibling}function Ag(e){switch(e.tag){case 26:es(e),e.flags&Co&&e.memoizedState!==null&&hy(mi,e.memoizedState,e.memoizedProps);break;case 5:es(e);break;case 3:case 4:var n=mi;mi=sc(e.stateNode.containerInfo),es(e),mi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Co,Co=16777216,es(e),Co=n):es(e));break;default:es(e)}}function Rg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Do(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];pn=o,Cg(o,e)}Rg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wg(e),e=e.sibling}function wg(e){switch(e.tag){case 0:case 11:case 15:Do(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:Do(e);break;case 12:Do(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,ql(e)):Do(e);break;default:Do(e)}}function ql(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];pn=o,Cg(o,e)}Rg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),ql(n);break;case 22:s=n.stateNode,s._visibility&4&&(s._visibility&=-5,ql(n));break;default:ql(n)}e=e.sibling}}function Cg(e,n){for(;pn!==null;){var s=pn;switch(s.tag){case 0:case 11:case 15:Ma(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:_o(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,pn=o;else t:for(s=e;pn!==null;){o=pn;var u=o.sibling,h=o.return;if(Sg(o),o===s){pn=null;break t}if(u!==null){u.return=h,pn=u;break t}pn=h}}}function AS(e,n,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(e,n,s,o){return new AS(e,n,s,o)}function Of(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ta(e,n){var s=e.alternate;return s===null?(s=oi(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&31457280,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Dg(e,n){e.flags&=31457282;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Yl(e,n,s,o,u,h){var y=0;if(o=e,typeof e=="function")Of(e)&&(y=1);else if(typeof e=="string")y=fy(e,s,Ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case m:return or(s.children,u,h,n);case p:y=8,u|=24;break;case g:return e=oi(12,s,n,u|2),e.elementType=g,e.lanes=h,e;case b:return e=oi(13,s,n,u),e.elementType=b,e.lanes=h,e;case v:return e=oi(19,s,n,u),e.elementType=v,e.lanes=h,e;case D:return Ug(s,u,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case M:y=10;break t;case S:y=9;break t;case E:y=11;break t;case x:y=14;break t;case L:y=16,o=null;break t}y=29,s=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=oi(y,s,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function or(e,n,s,o){return e=oi(7,e,o,n),e.lanes=s,e}function Ug(e,n,s,o){e=oi(22,e,o,n),e.elementType=D,e.lanes=s;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var h=u._current;if(h===null)throw Error(r(456));if((u._pendingVisibility&2)===0){var y=ha(h,2);y!==null&&(u._pendingVisibility|=2,Ln(y,h,2))}},attach:function(){var h=u._current;if(h===null)throw Error(r(456));if((u._pendingVisibility&2)!==0){var y=ha(h,2);y!==null&&(u._pendingVisibility&=-3,Ln(y,h,2))}}};return e.stateNode=u,e}function Pf(e,n,s){return e=oi(6,e,null,n),e.lanes=s,e}function zf(e,n,s){return n=oi(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function qi(e){e.flags|=4}function Lg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!g_(n)){if(n=ai.current,n!==null&&((Me&4194176)===Me?Ti!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==Ti))throw po=Hu,Zp;e.flags|=8192}}function jl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?$n():536870912,e.lanes|=n,is|=n)}function Uo(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(n)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&31457280,o|=u.flags&31457280,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=s,n}function RS(e,n,s){var o=n.pendingProps;switch(Iu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return s=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(cn),Vt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(co(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pi!==null&&(Xf(pi),pi=null))),We(n),null;case 26:return s=n.memoizedState,e===null?(qi(n),s!==null?(We(n),Lg(n,s)):(We(n),n.flags&=-16777217)):s?s!==e.memoizedState?(qi(n),We(n),Lg(n,s)):(We(n),n.flags&=-16777217):(e.memoizedProps!==o&&qi(n),We(n),n.flags&=-16777217),null;case 27:ee(n),s=Le.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),null}e=Ee.current,co(n)?Yp(n):(e=l_(u,o,s),n.stateNode=e,qi(n))}return We(n),null;case 5:if(ee(n),s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(e=Ee.current,co(n))Yp(n);else{switch(u=rc(Le.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(s,{is:o.is}):u.createElement(s)}}e[sn]=n,e[xn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Mn(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&qi(n)}}return We(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Le.current,co(n)){if(e=n.stateNode,s=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[sn]=n,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||n_(e.nodeValue,s)),e||Qa(n)}else e=rc(e).createTextNode(o),e[sn]=n,n.stateNode=e}return We(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=co(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[sn]=n}else uo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else pi!==null&&(Xf(pi),pi=null),u=!0;if(!u)return n.flags&256?(Ii(n),n):(Ii(n),null)}if(Ii(n),(n.flags&128)!==0)return n.lanes=s,n;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return s!==e&&s&&(n.child.flags|=8192),jl(n,n.updateQueue),We(n),null;case 4:return Vt(),e===null&&ed(n.stateNode.containerInfo),We(n),null;case 10:return Vi(n.type),We(n),null;case 19:if(kt(ln),u=n.memoizedState,u===null)return We(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)Uo(u,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Ul(e),h!==null){for(n.flags|=128,Uo(u,!1),e=h.updateQueue,n.updateQueue=e,jl(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)Dg(s,e),s=s.sibling;return Gt(ln,ln.current&1|2),n.child}e=e.sibling}u.tail!==null&&xt()>Zl&&(n.flags|=128,o=!0,Uo(u,!1),n.lanes=4194304)}else{if(!o)if(e=Ul(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,jl(n,e),Uo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Ce)return We(n),null}else 2*xt()-u.renderingStartTime>Zl&&s!==536870912&&(n.flags|=128,o=!0,Uo(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=xt(),n.sibling=null,e=ln.current,Gt(ln,o?e&1|2:e&1),n):(We(n),null);case 22:case 23:return Ii(n),Vu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(s&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),s=n.updateQueue,s!==null&&jl(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048),e!==null&&kt($a),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Vi(cn),We(n),null;case 25:return null}throw Error(r(156,n.tag))}function wS(e,n){switch(Iu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(cn),Vt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ee(n),null;case 13:if(Ii(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));uo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return kt(ln),null;case 4:return Vt(),null;case 10:return Vi(n.type),null;case 22:case 23:return Ii(n),Vu(),e!==null&&kt($a),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(cn),null;case 25:return null;default:return null}}function Ng(e,n){switch(Iu(n),n.tag){case 3:Vi(cn),Vt();break;case 26:case 27:case 5:ee(n);break;case 4:Vt();break;case 13:Ii(n);break;case 19:kt(ln);break;case 10:Vi(n.type);break;case 22:case 23:Ii(n),Vu(),e!==null&&kt($a);break;case 24:Vi(cn)}}var CS={getCacheForType:function(e){var n=An(cn),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s}},DS=typeof WeakMap=="function"?WeakMap:Map,qe=0,Fe=null,ge=null,Me=0,He=0,Yn=null,Yi=!1,ns=!1,Bf=!1,ji=0,Ze=0,Aa=0,lr=0,If=0,li=0,is=0,Lo=null,Ri=null,Ff=!1,Hf=0,Zl=1/0,Kl=null,Ra=null,Ql=!1,cr=null,No=0,Gf=0,Vf=null,Oo=0,kf=null;function jn(){if((qe&2)!==0&&Me!==0)return Me&-Me;if(w.T!==null){var e=jr;return e!==0?e:Qf()}return Wa()}function Og(){li===0&&(li=(Me&536870912)===0||Ce?Te():536870912);var e=ai.current;return e!==null&&(e.flags|=32),li}function Ln(e,n,s){(e===Fe&&He===2||e.cancelPendingCommit!==null)&&(as(e,0),Zi(e,Me,li,!1)),ca(e,s),((qe&2)===0||e!==Fe)&&(e===Fe&&((qe&2)===0&&(lr|=s),Ze===4&&Zi(e,Me,li,!1)),wi(e))}function Pg(e,n,s){if((qe&6)!==0)throw Error(r(327));var o=!s&&(n&60)===0&&(n&e.expiredLanes)===0||Ie(e,n),u=o?NS(e,n):Yf(e,n,!0),h=o;do{if(u===0){ns&&!o&&Zi(e,n,0,!1);break}else if(u===6)Zi(e,n,0,!Yi);else{if(s=e.current.alternate,h&&!US(s)){u=Yf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var R=e;u=Lo;var P=R.current.memoizedState.isDehydrated;if(P&&(as(R,y).flags|=256),y=Yf(R,y,!1),y!==2){if(Bf&&!P){R.errorRecoveryDisabledLanes|=h,lr|=h,u=4;break t}h=Ri,Ri=u,h!==null&&Xf(h)}u=y}if(h=!1,u!==2)continue}}if(u===1){as(e,0),Zi(e,n,0,!0);break}t:{switch(o=e,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Zi(o,n,li,!Yi);break t}break;case 2:Ri=null;break;case 3:case 5:break;default:throw Error(r(329))}if(o.finishedWork=s,o.finishedLanes=n,(n&62914560)===n&&(h=Hf+300-xt(),10<h)){if(Zi(o,n,li,!Yi),de(o,0)!==0)break t;o.timeoutHandle=r_(zg.bind(null,o,s,Ri,Kl,Ff,n,li,lr,is,Yi,2,-0,0),h);break t}zg(o,s,Ri,Kl,Ff,n,li,lr,is,Yi,0,-0,0)}}break}while(!0);wi(e)}function Xf(e){Ri===null?Ri=e:Ri.push.apply(Ri,e)}function zg(e,n,s,o,u,h,y,R,P,V,dt,vt,et){var ut=n.subtreeFlags;if((ut&8192||(ut&16785408)===16785408)&&(Ho={stylesheets:null,count:0,unsuspend:dy},Ag(n),n=py(),n!==null)){e.cancelPendingCommit=n(kg.bind(null,e,s,o,u,y,R,P,1,vt,et)),Zi(e,h,y,!V);return}kg(e,s,o,u,y,R,P,dt,vt,et)}function US(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],h=u.getSnapshot;u=u.value;try{if(!Xn(h(),u))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zi(e,n,s,o){n&=~If,n&=~lr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-pe(u),y=1<<h;o[h]=-1,u&=~y}s!==0&&Or(e,s,n)}function Jl(){return(qe&6)===0?(Po(0),!1):!0}function Wf(){if(ge!==null){if(He===0)var e=ge.return;else e=ge,Gi=ar=null,Ku(e),qr=null,mo=0,e=ge;for(;e!==null;)Ng(e.alternate,e),e=e.return;ge=null}}function as(e,n){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,KS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Wf(),Fe=e,ge=s=Ta(e.current,null),Me=n,He=0,Yn=null,Yi=!1,ns=Ie(e,n),Bf=!1,is=li=If=lr=Aa=Ze=0,Ri=Lo=null,Ff=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-pe(o),h=1<<u;n|=e[u],o&=~h}return ji=n,Ml(),s}function Bg(e,n){fe=null,w.H=Ai,n===ho?(n=Jp(),He=3):n===Zp?(n=Jp(),He=4):He=n===Km?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,ge===null&&(Ze=1,Vl(e,ei(n,e.current)))}function Ig(){var e=w.H;return w.H=Ai,e===null?Ai:e}function Fg(){var e=w.A;return w.A=CS,e}function qf(){Ze=4,Yi||(Me&4194176)!==Me&&ai.current!==null||(ns=!0),(Aa&134217727)===0&&(lr&134217727)===0||Fe===null||Zi(Fe,Me,li,!1)}function Yf(e,n,s){var o=qe;qe|=2;var u=Ig(),h=Fg();(Fe!==e||Me!==n)&&(Kl=null,as(e,n)),n=!1;var y=Ze;t:do try{if(He!==0&&ge!==null){var R=ge,P=Yn;switch(He){case 8:Wf(),y=6;break t;case 3:case 2:case 6:ai.current===null&&(n=!0);var V=He;if(He=0,Yn=null,rs(e,R,P,V),s&&ns){y=0;break t}break;default:V=He,He=0,Yn=null,rs(e,R,P,V)}}LS(),y=Ze;break}catch(dt){Bg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Gi=ar=null,qe=o,w.H=u,w.A=h,ge===null&&(Fe=null,Me=0,Ml()),y}function LS(){for(;ge!==null;)Hg(ge)}function NS(e,n){var s=qe;qe|=2;var o=Ig(),u=Fg();Fe!==e||Me!==n?(Kl=null,Zl=xt()+500,as(e,n)):ns=Ie(e,n);t:do try{if(He!==0&&ge!==null){n=ge;var h=Yn;e:switch(He){case 1:He=0,Yn=null,rs(e,n,h,1);break;case 2:if(Kp(h)){He=0,Yn=null,Gg(n);break}n=function(){He===2&&Fe===e&&(He=7),wi(e)},h.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Kp(h)?(He=0,Yn=null,Gg(n)):(He=0,Yn=null,rs(e,n,h,7));break;case 5:var y=null;switch(ge.tag){case 26:y=ge.memoizedState;case 5:case 27:var R=ge;if(!y||g_(y)){He=0,Yn=null;var P=R.sibling;if(P!==null)ge=P;else{var V=R.return;V!==null?(ge=V,$l(V)):ge=null}break e}}He=0,Yn=null,rs(e,n,h,5);break;case 6:He=0,Yn=null,rs(e,n,h,6);break;case 8:Wf(),Ze=6;break t;default:throw Error(r(462))}}OS();break}catch(dt){Bg(e,dt)}while(!0);return Gi=ar=null,w.H=o,w.A=u,qe=s,ge!==null?0:(Fe=null,Me=0,Ml(),Ze)}function OS(){for(;ge!==null&&!at();)Hg(ge)}function Hg(e){var n=lg(e.alternate,e,ji);e.memoizedProps=e.pendingProps,n===null?$l(e):ge=n}function Gg(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=ng(s,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=ng(s,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Ku(n);default:Ng(s,n),n=ge=Dg(n,ji),n=lg(s,n,ji)}e.memoizedProps=e.pendingProps,n===null?$l(e):ge=n}function rs(e,n,s,o){Gi=ar=null,Ku(n),qr=null,mo=0;var u=n.return;try{if(MS(e,u,n,s,Me)){Ze=1,Vl(e,ei(s,e.current)),ge=null;return}}catch(h){if(u!==null)throw ge=u,h;Ze=1,Vl(e,ei(s,e.current)),ge=null;return}n.flags&32768?(Ce||o===1?e=!0:ns||(Me&536870912)!==0?e=!1:(Yi=e=!0,(o===2||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),Vg(n,e)):$l(n)}function $l(e){var n=e;do{if((n.flags&32768)!==0){Vg(n,Yi);return}e=n.return;var s=RS(n.alternate,n,ji);if(s!==null){ge=s;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);Ze===0&&(Ze=5)}function Vg(e,n){do{var s=wS(e.alternate,e);if(s!==null){s.flags&=32767,ge=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=s}while(e!==null);Ze=6,ge=null}function kg(e,n,s,o,u,h,y,R,P,V){var dt=w.T,vt=X.p;try{X.p=2,w.T=null,PS(e,n,s,o,vt,u,h,y,R,P,V)}finally{w.T=dt,X.p=vt}}function PS(e,n,s,o,u,h,y,R){do ss();while(cr!==null);if((qe&6)!==0)throw Error(r(327));var P=e.finishedWork;if(o=e.finishedLanes,P===null)return null;if(e.finishedWork=null,e.finishedLanes=0,P===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var V=P.lanes|P.childLanes;if(V|=Pu,Pi(e,o,V,h,y,R),e===Fe&&(ge=Fe=null,Me=0),(P.subtreeFlags&10256)===0&&(P.flags&10256)===0||Ql||(Ql=!0,Gf=V,Vf=s,FS(Pt,function(){return ss(),null})),s=(P.flags&15990)!==0,(P.subtreeFlags&15990)!==0||s?(s=w.T,w.T=null,h=X.p,X.p=2,y=qe,qe|=4,bS(e,P),Eg(P,e),rS(rd,e.containerInfo),fc=!!ad,rd=ad=null,e.current=P,xg(e,P.alternate,P),yt(),qe=y,X.p=h,w.T=s):e.current=P,Ql?(Ql=!1,cr=e,No=o):Xg(e,V),V=e.pendingLanes,V===0&&(Ra=null),ae(P.stateNode),wi(e),n!==null)for(u=e.onRecoverableError,P=0;P<n.length;P++)V=n[P],u(V.value,{componentStack:V.stack});return(No&3)!==0&&ss(),V=e.pendingLanes,(o&4194218)!==0&&(V&42)!==0?e===kf?Oo++:(Oo=0,kf=e):Oo=0,Po(0),null}function Xg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,_o(n)))}function ss(){if(cr!==null){var e=cr,n=Gf;Gf=0;var s=Zs(No),o=w.T,u=X.p;try{if(X.p=32>s?32:s,w.T=null,cr===null)var h=!1;else{s=Vf,Vf=null;var y=cr,R=No;if(cr=null,No=0,(qe&6)!==0)throw Error(r(331));var P=qe;if(qe|=4,wg(y.current),Tg(y,y.current,R,s),qe=P,Po(0,!1),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Qt,y)}catch{}h=!0}return h}finally{X.p=u,w.T=o,Xg(e,n)}}return!1}function Wg(e,n,s){n=ei(s,n),n=ff(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(ca(e,2),wi(e))}function Be(e,n,s){if(e.tag===3)Wg(e,e,s);else for(;n!==null;){if(n.tag===3){Wg(n,e,s);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ra===null||!Ra.has(o))){e=ei(s,e),s=jm(2),o=ya(n,s,2),o!==null&&(Zm(s,o,n,e),ca(o,2),wi(o));break}}n=n.return}}function jf(e,n,s){var o=e.pingCache;if(o===null){o=e.pingCache=new DS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(s)||(Bf=!0,u.add(s),e=zS.bind(null,e,n,s),n.then(e,e))}function zS(e,n,s){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Fe===e&&(Me&s)===s&&(Ze===4||Ze===3&&(Me&62914560)===Me&&300>xt()-Hf?(qe&2)===0&&as(e,0):If|=s,is===Me&&(is=0)),wi(e)}function qg(e,n){n===0&&(n=$n()),e=ha(e,n),e!==null&&(ca(e,n),wi(e))}function BS(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),qg(e,s)}function IS(e,n){var s=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),qg(e,s)}function FS(e,n){return z(e,n)}var tc=null,os=null,Zf=!1,ec=!1,Kf=!1,ur=0;function wi(e){e!==os&&e.next===null&&(os===null?tc=os=e:os=os.next=e),ec=!0,Zf||(Zf=!0,GS(HS))}function Po(e,n){if(!Kf&&ec){Kf=!0;do for(var s=!1,o=tc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-pe(42|e)+1)-1,h&=u&~(y&~R),h=h&201326677?h&201326677|1:h?h|2:0}h!==0&&(s=!0,Zg(o,h))}else h=Me,h=de(o,o===Fe?h:0),(h&3)===0||Ie(o,h)||(s=!0,Zg(o,h));o=o.next}while(s);Kf=!1}}function HS(){ec=Zf=!1;var e=0;ur!==0&&(ZS()&&(e=ur),ur=0);for(var n=xt(),s=null,o=tc;o!==null;){var u=o.next,h=Yg(o,n);h===0?(o.next=null,s===null?tc=u:s.next=u,u===null&&(os=s)):(s=o,(e!==0||(h&3)!==0)&&(ec=!0)),o=u}Po(e)}function Yg(e,n){for(var s=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-pe(h),R=1<<y,P=u[y];P===-1?((R&s)===0||(R&o)!==0)&&(u[y]=rn(R,n)):P<=n&&(e.expiredLanes|=R),h&=~R}if(n=Fe,s=Me,s=de(e,e===n?s:0),o=e.callbackNode,s===0||e===n&&He===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&A(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ie(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(o!==null&&A(o),Zs(s)){case 2:case 8:s=Ut;break;case 32:s=Pt;break;case 268435456:s=bt;break;default:s=Pt}return o=jg.bind(null,e),s=z(s,o),e.callbackPriority=n,e.callbackNode=s,n}return o!==null&&o!==null&&A(o),e.callbackPriority=2,e.callbackNode=null,2}function jg(e,n){var s=e.callbackNode;if(ss()&&e.callbackNode!==s)return null;var o=Me;return o=de(e,e===Fe?o:0),o===0?null:(Pg(e,o,n),Yg(e,xt()),e.callbackNode!=null&&e.callbackNode===s?jg.bind(null,e):null)}function Zg(e,n){if(ss())return null;Pg(e,n,!0)}function GS(e){QS(function(){(qe&6)!==0?z(Kt,e):e()})}function Qf(){return ur===0&&(ur=Te()),ur}function Kg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ml(""+e)}function Qg(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function VS(e,n,s,o,u){if(n==="submit"&&s&&s.stateNode===u){var h=Kg((u[xn]||null).action),y=o.submitter;y&&(n=(n=y[xn]||null)?Kg(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var R=new xl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ur!==0){var P=y?Qg(u,y):new FormData(u);sf(s,{pending:!0,data:P,method:u.method,action:h},null,P)}}else typeof h=="function"&&(R.preventDefault(),P=y?Qg(u,y):new FormData(u),sf(s,{pending:!0,data:P,method:u.method,action:h},h,P))},currentTarget:u}]})}}for(var Jf=0;Jf<kp.length;Jf++){var $f=kp[Jf],kS=$f.toLowerCase(),XS=$f[0].toUpperCase()+$f.slice(1);hi(kS,"on"+XS)}hi(Ip,"onAnimationEnd"),hi(Fp,"onAnimationIteration"),hi(Hp,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(oS,"onTransitionRun"),hi(lS,"onTransitionStart"),hi(cS,"onTransitionCancel"),hi(Gp,"onTransitionEnd"),me("onMouseEnter",["mouseout","mouseover"]),me("onMouseLeave",["mouseout","mouseover"]),me("onPointerEnter",["pointerout","pointerover"]),me("onPointerLeave",["pointerout","pointerover"]),Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function Jg(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],P=R.instance,V=R.currentTarget;if(R=R.listener,P!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=V;try{h(u)}catch(dt){Gl(dt)}u.currentTarget=null,h=P}else for(y=0;y<o.length;y++){if(R=o[y],P=R.instance,V=R.currentTarget,R=R.listener,P!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=V;try{h(u)}catch(dt){Gl(dt)}u.currentTarget=null,h=P}}}}function Se(e,n){var s=n[Ks];s===void 0&&(s=n[Ks]=new Set);var o=e+"__bubble";s.has(o)||($g(n,e,2,!1),s.add(o))}function td(e,n,s){var o=0;n&&(o|=4),$g(s,e,o,n)}var nc="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[nc]){e[nc]=!0,Jt.forEach(function(s){s!=="selectionchange"&&(WS.has(s)||td(s,!1,e),td(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[nc]||(n[nc]=!0,td("selectionchange",!1,n))}}function $g(e,n,s,o){switch(M_(n)){case 2:var u=_y;break;case 8:u=vy;break;default:u=pd}s=u.bind(null,n,s,e),u=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,s,{capture:!0,passive:u}):e.addEventListener(n,s,!0):u!==void 0?e.addEventListener(n,s,{passive:u}):e.addEventListener(n,s,!1)}function nd(e,n,s,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u||R.nodeType===8&&R.parentNode===u)break;if(y===4)for(y=o.return;y!==null;){var P=y.tag;if((P===3||P===4)&&(P=y.stateNode.containerInfo,P===u||P.nodeType===8&&P.parentNode===u))return;y=y.return}for(;R!==null;){if(y=j(R),y===null)return;if(P=y.tag,P===5||P===6||P===26||P===27){o=h=y;continue t}R=R.parentNode}}o=o.return}pp(function(){var V=h,dt=Su(s),vt=[];t:{var et=Vp.get(e);if(et!==void 0){var ut=xl,Xt=e;switch(e){case"keypress":if(_l(s)===0)break t;case"keydown":case"keyup":ut=Ix;break;case"focusin":Xt="focus",ut=Au;break;case"focusout":Xt="blur",ut=Au;break;case"beforeblur":case"afterblur":ut=Au;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Gx;break;case Ip:case Fp:case Hp:ut=Cx;break;case Gp:ut=kx;break;case"scroll":case"scrollend":ut=bx;break;case"wheel":ut=Wx;break;case"copy":case"cut":case"paste":ut=Ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=xp;break;case"toggle":case"beforetoggle":ut=Yx}var re=(n&4)!==0,Ke=!re&&(e==="scroll"||e==="scrollend"),Z=re?et!==null?et+"Capture":null:et;re=[];for(var G=V,Q;G!==null;){var pt=G;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||Z===null||(pt=to(G,Z),pt!=null&&re.push(Bo(G,pt,Q))),Ke)break;G=G.return}0<re.length&&(et=new ut(et,Xt,null,s,dt),vt.push({event:et,listeners:re}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",et&&s!==xu&&(Xt=s.relatedTarget||s.fromElement)&&(j(Xt)||Xt[ua]))break t;if((ut||et)&&(et=dt.window===dt?dt:(et=dt.ownerDocument)?et.defaultView||et.parentWindow:window,ut?(Xt=s.relatedTarget||s.toElement,ut=V,Xt=Xt?j(Xt):null,Xt!==null&&(Ke=W(Xt),re=Xt.tag,Xt!==Ke||re!==5&&re!==27&&re!==6)&&(Xt=null)):(ut=null,Xt=V),ut!==Xt)){if(re=_p,pt="onMouseLeave",Z="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(re=xp,pt="onPointerLeave",Z="onPointerEnter",G="pointer"),Ke=ut==null?et:Lt(ut),Q=Xt==null?et:Lt(Xt),et=new re(pt,G+"leave",ut,s,dt),et.target=Ke,et.relatedTarget=Q,pt=null,j(dt)===V&&(re=new re(Z,G+"enter",Xt,s,dt),re.target=Q,re.relatedTarget=Ke,pt=re),Ke=pt,ut&&Xt)e:{for(re=ut,Z=Xt,G=0,Q=re;Q;Q=ls(Q))G++;for(Q=0,pt=Z;pt;pt=ls(pt))Q++;for(;0<G-Q;)re=ls(re),G--;for(;0<Q-G;)Z=ls(Z),Q--;for(;G--;){if(re===Z||Z!==null&&re===Z.alternate)break e;re=ls(re),Z=ls(Z)}re=null}else re=null;ut!==null&&t_(vt,et,ut,re,!1),Xt!==null&&Ke!==null&&t_(vt,Ke,Xt,re,!0)}}t:{if(et=V?Lt(V):window,ut=et.nodeName&&et.nodeName.toLowerCase(),ut==="select"||ut==="input"&&et.type==="file")var It=Rp;else if(Tp(et))if(wp)It=iS;else{It=eS;var he=tS}else ut=et.nodeName,!ut||ut.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?V&&vu(V.elementType)&&(It=Rp):It=nS;if(It&&(It=It(e,V))){Ap(vt,It,s,dt);break t}he&&he(e,et,V),e==="focusout"&&V&&et.type==="number"&&V.memoizedProps.value!=null&&_u(et,"number",et.value)}switch(he=V?Lt(V):window,e){case"focusin":(Tp(he)||he.contentEditable==="true")&&(Hr=he,Lu=V,lo=null);break;case"focusout":lo=Lu=Hr=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,zp(vt,s,dt);break;case"selectionchange":if(sS)break;case"keydown":case"keyup":zp(vt,s,dt)}var Yt;if(wu)t:{switch(e){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Fr?Ep(e,s)&&($t="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&($t="onCompositionStart");$t&&(Sp&&s.locale!=="ko"&&(Fr||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Fr&&(Yt=mp()):(da=dt,Eu="value"in da?da.value:da.textContent,Fr=!0)),he=ic(V,$t),0<he.length&&($t=new vp($t,e,null,s,dt),vt.push({event:$t,listeners:he}),Yt?$t.data=Yt:(Yt=bp(s),Yt!==null&&($t.data=Yt)))),(Yt=Zx?Kx(e,s):Qx(e,s))&&($t=ic(V,"onBeforeInput"),0<$t.length&&(he=new vp("onBeforeInput","beforeinput",null,s,dt),vt.push({event:he,listeners:$t}),he.data=Yt)),VS(vt,e,V,s,dt)}Jg(vt,n)})}function Bo(e,n,s){return{instance:e,listener:n,currentTarget:s}}function ic(e,n){for(var s=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=to(e,s),u!=null&&o.unshift(Bo(e,u,h)),u=to(e,n),u!=null&&o.push(Bo(e,u,h))),e=e.return}return o}function ls(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function t_(e,n,s,o,u){for(var h=n._reactName,y=[];s!==null&&s!==o;){var R=s,P=R.alternate,V=R.stateNode;if(R=R.tag,P!==null&&P===o)break;R!==5&&R!==26&&R!==27||V===null||(P=V,u?(V=to(s,h),V!=null&&y.unshift(Bo(s,V,P))):u||(V=to(s,h),V!=null&&y.push(Bo(s,V,P)))),s=s.return}y.length!==0&&e.push({event:n,listeners:y})}var qS=/\r\n?/g,YS=/\u0000|\uFFFD/g;function e_(e){return(typeof e=="string"?e:""+e).replace(qS,`
`).replace(YS,"")}function n_(e,n){return n=e_(n),e_(e)===n}function ac(){}function Pe(e,n,s,o,u,h){switch(s){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zr(e,""+o);break;case"className":xe(e,"class",o);break;case"tabIndex":xe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":xe(e,s,o);break;case"style":dp(e,o,h);break;case"data":if(n!=="object"){xe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=ml(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(n!=="input"&&Pe(e,n,"name",u.name,u,null),Pe(e,n,"formEncType",u.formEncType,u,null),Pe(e,n,"formMethod",u.formMethod,u,null),Pe(e,n,"formTarget",u.formTarget,u,null)):(Pe(e,n,"encType",u.encType,u,null),Pe(e,n,"method",u.method,u,null),Pe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=ml(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=ac);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=ml(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Ye(e,"popover",o);break;case"xlinkActuate":Qe(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Qe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Qe(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Qe(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Qe(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Qe(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Qe(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Qe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Qe(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ye(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Mx.get(s)||s,Ye(e,s,o))}}function id(e,n,s,o,u,h){switch(s){case"style":dp(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof o=="string"?zr(e,o):(typeof o=="number"||typeof o=="bigint")&&zr(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ac);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!te.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),n=s.slice(2,u?s.length-7:void 0),h=e[xn]||null,h=h!=null?h[s]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,o,u);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):Ye(e,s,o)}}}function Mn(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,u=!1,h;for(h in s)if(s.hasOwnProperty(h)){var y=s[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,h,y,s,null)}}u&&Pe(e,n,"srcSet",s.srcSet,s,null),o&&Pe(e,n,"src",s.src,s,null);return;case"input":Se("invalid",e);var R=h=y=u=null,P=null,V=null;for(o in s)if(s.hasOwnProperty(o)){var dt=s[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":y=dt;break;case"checked":P=dt;break;case"defaultChecked":V=dt;break;case"value":h=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Pe(e,n,o,dt,s,null)}}$s(e,h,R,P,V,y,u,!1),Ge(e);return;case"select":Se("invalid",e),o=y=h=null;for(u in s)if(s.hasOwnProperty(u)&&(R=s[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:Pe(e,n,u,R,s,null)}n=h,s=y,e.multiple=!!o,n!=null?Pr(e,!!o,n,!1):s!=null&&Pr(e,!!o,s,!0);return;case"textarea":Se("invalid",e),h=u=o=null;for(y in s)if(s.hasOwnProperty(y)&&(R=s[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Pe(e,n,y,R,s,null)}up(e,o,u,h),Ge(e);return;case"option":for(P in s)if(s.hasOwnProperty(P)&&(o=s[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Pe(e,n,P,o,s,null)}return;case"dialog":Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<zo.length;o++)Se(zo[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in s)if(s.hasOwnProperty(V)&&(o=s[V],o!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,V,o,s,null)}return;default:if(vu(n)){for(dt in s)s.hasOwnProperty(dt)&&(o=s[dt],o!==void 0&&id(e,n,dt,o,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(o=s[R],o!=null&&Pe(e,n,R,o,s,null))}function jS(e,n,s,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,R=null,P=null,V=null,dt=null;for(ut in s){var vt=s[ut];if(s.hasOwnProperty(ut)&&vt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":P=vt;default:o.hasOwnProperty(ut)||Pe(e,n,ut,null,o,vt)}}for(var et in o){var ut=o[et];if(vt=s[et],o.hasOwnProperty(et)&&(ut!=null||vt!=null))switch(et){case"type":h=ut;break;case"name":u=ut;break;case"checked":V=ut;break;case"defaultChecked":dt=ut;break;case"value":y=ut;break;case"defaultValue":R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ut!==vt&&Pe(e,n,et,ut,o,vt)}}Js(e,y,R,P,V,dt,h,u);return;case"select":ut=y=R=et=null;for(h in s)if(P=s[h],s.hasOwnProperty(h)&&P!=null)switch(h){case"value":break;case"multiple":ut=P;default:o.hasOwnProperty(h)||Pe(e,n,h,null,o,P)}for(u in o)if(h=o[u],P=s[u],o.hasOwnProperty(u)&&(h!=null||P!=null))switch(u){case"value":et=h;break;case"defaultValue":R=h;break;case"multiple":y=h;default:h!==P&&Pe(e,n,u,h,o,P)}n=R,s=y,o=ut,et!=null?Pr(e,!!s,et,!1):!!o!=!!s&&(n!=null?Pr(e,!!s,n,!0):Pr(e,!!s,s?[]:"",!1));return;case"textarea":ut=et=null;for(R in s)if(u=s[R],s.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Pe(e,n,R,null,o,u)}for(y in o)if(u=o[y],h=s[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":et=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Pe(e,n,y,u,o,h)}cp(e,et,ut);return;case"option":for(var Xt in s)if(et=s[Xt],s.hasOwnProperty(Xt)&&et!=null&&!o.hasOwnProperty(Xt))switch(Xt){case"selected":e.selected=!1;break;default:Pe(e,n,Xt,null,o,et)}for(P in o)if(et=o[P],ut=s[P],o.hasOwnProperty(P)&&et!==ut&&(et!=null||ut!=null))switch(P){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Pe(e,n,P,et,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in s)et=s[re],s.hasOwnProperty(re)&&et!=null&&!o.hasOwnProperty(re)&&Pe(e,n,re,null,o,et);for(V in o)if(et=o[V],ut=s[V],o.hasOwnProperty(V)&&et!==ut&&(et!=null||ut!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Pe(e,n,V,et,o,ut)}return;default:if(vu(n)){for(var Ke in s)et=s[Ke],s.hasOwnProperty(Ke)&&et!==void 0&&!o.hasOwnProperty(Ke)&&id(e,n,Ke,void 0,o,et);for(dt in o)et=o[dt],ut=s[dt],!o.hasOwnProperty(dt)||et===ut||et===void 0&&ut===void 0||id(e,n,dt,et,o,ut);return}}for(var Z in s)et=s[Z],s.hasOwnProperty(Z)&&et!=null&&!o.hasOwnProperty(Z)&&Pe(e,n,Z,null,o,et);for(vt in o)et=o[vt],ut=s[vt],!o.hasOwnProperty(vt)||et===ut||et==null&&ut==null||Pe(e,n,vt,et,o,ut)}var ad=null,rd=null;function rc(e){return e.nodeType===9?e:e.ownerDocument}function i_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function a_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function sd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var od=null;function ZS(){var e=window.event;return e&&e.type==="popstate"?e===od?!1:(od=e,!0):(od=null,!1)}var r_=typeof setTimeout=="function"?setTimeout:void 0,KS=typeof clearTimeout=="function"?clearTimeout:void 0,s_=typeof Promise=="function"?Promise:void 0,QS=typeof queueMicrotask=="function"?queueMicrotask:typeof s_<"u"?function(e){return s_.resolve(null).then(e).catch(JS)}:r_;function JS(e){setTimeout(function(){throw e})}function ld(e,n){var s=n,o=0;do{var u=s.nextSibling;if(e.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(o===0){e.removeChild(u),Wo(n);return}o--}else s!=="$"&&s!=="$?"&&s!=="$!"||o++;s=u}while(s);Wo(n)}function cd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":cd(s),it(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function $S(e,n,s,o){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[tt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function ty(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=gi(e.nextSibling),e===null))return null;return e}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function o_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}function l_(e,n,s){switch(n=rc(s),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var ci=new Map,c_=new Set;function sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Ki=X.d;X.d={f:ey,r:ny,D:iy,C:ay,L:ry,m:sy,X:ly,S:oy,M:cy};function ey(){var e=Ki.f(),n=Jl();return e||n}function ny(e){var n=Mt(e);n!==null&&n.tag===5&&n.type==="form"?zm(n):Ki.r(e)}var cs=typeof document>"u"?null:document;function u_(e,n,s){var o=cs;if(o&&typeof n=="string"&&n){var u=Tn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),c_.has(u)||(c_.add(u),e={rel:e,crossOrigin:s,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Mn(n,"link",e),Ct(n),o.head.appendChild(n)))}}function iy(e){Ki.D(e),u_("dns-prefetch",e,null)}function ay(e,n){Ki.C(e,n),u_("preconnect",e,n)}function ry(e,n,s){Ki.L(e,n,s);var o=cs;if(o&&e&&n){var u='link[rel="preload"][as="'+Tn(n)+'"]';n==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Tn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Tn(s.imageSizes)+'"]')):u+='[href="'+Tn(e)+'"]';var h=u;switch(n){case"style":h=us(e);break;case"script":h=fs(e)}ci.has(h)||(e=T({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),ci.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Io(h))||n==="script"&&o.querySelector(Fo(h))||(n=o.createElement("link"),Mn(n,"link",e),Ct(n),o.head.appendChild(n)))}}function sy(e,n){Ki.m(e,n);var s=cs;if(s&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Tn(o)+'"][href="'+Tn(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=fs(e)}if(!ci.has(h)&&(e=T({rel:"modulepreload",href:e},n),ci.set(h,e),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Fo(h)))return}o=s.createElement("link"),Mn(o,"link",e),Ct(o),s.head.appendChild(o)}}}function oy(e,n,s){Ki.S(e,n,s);var o=cs;if(o&&e){var u=zt(o).hoistableStyles,h=us(e);n=n||"default";var y=u.get(h);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(Io(h)))R.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":n},s),(s=ci.get(h))&&ud(e,s);var P=y=o.createElement("link");Ct(P),Mn(P,"link",e),P._p=new Promise(function(V,dt){P.onload=V,P.onerror=dt}),P.addEventListener("load",function(){R.loading|=1}),P.addEventListener("error",function(){R.loading|=2}),R.loading|=4,oc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(h,y)}}}function ly(e,n){Ki.X(e,n);var s=cs;if(s&&e){var o=zt(s).hoistableScripts,u=fs(e),h=o.get(u);h||(h=s.querySelector(Fo(u)),h||(e=T({src:e,async:!0},n),(n=ci.get(u))&&fd(e,n),h=s.createElement("script"),Ct(h),Mn(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function cy(e,n){Ki.M(e,n);var s=cs;if(s&&e){var o=zt(s).hoistableScripts,u=fs(e),h=o.get(u);h||(h=s.querySelector(Fo(u)),h||(e=T({src:e,async:!0,type:"module"},n),(n=ci.get(u))&&fd(e,n),h=s.createElement("script"),Ct(h),Mn(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function f_(e,n,s,o){var u=(u=Le.current)?sc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=us(s.href),s=zt(u).hoistableStyles,o=s.get(n),o||(o={type:"style",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=us(s.href);var h=zt(u).hoistableStyles,y=h.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=u.querySelector(Io(e)))&&!h._p&&(y.instance=h,y.state.loading=5),ci.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ci.set(e,s),h||uy(u,e,s,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(s),s=zt(u).hoistableScripts,o=s.get(n),o||(o={type:"script",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function us(e){return'href="'+Tn(e)+'"'}function Io(e){return'link[rel="stylesheet"]['+e+"]"}function d_(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function uy(e,n,s,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",s),Ct(n),e.head.appendChild(n))}function fs(e){return'[src="'+Tn(e)+'"]'}function Fo(e){return"script[async]"+e}function h_(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Tn(s.href)+'"]');if(o)return n.instance=o,Ct(o),o;var u=T({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ct(o),Mn(o,"style",u),oc(o,s.precedence,e),n.instance=o;case"stylesheet":u=us(s.href);var h=e.querySelector(Io(u));if(h)return n.state.loading|=4,n.instance=h,Ct(h),h;o=d_(s),(u=ci.get(u))&&ud(o,u),h=(e.ownerDocument||e).createElement("link"),Ct(h);var y=h;return y._p=new Promise(function(R,P){y.onload=R,y.onerror=P}),Mn(h,"link",o),n.state.loading|=4,oc(h,s.precedence,e),n.instance=h;case"script":return h=fs(s.src),(u=e.querySelector(Fo(h)))?(n.instance=u,Ct(u),u):(o=s,(u=ci.get(h))&&(o=T({},s),fd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ct(u),Mn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,oc(o,s.precedence,e));return n.instance}function oc(e,n,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function ud(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function fd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var lc=null;function p_(e,n,s){if(lc===null){var o=new Map,u=lc=new Map;u.set(s,o)}else u=lc,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var h=s[u];if(!(h[tt]||h[sn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=e+y;var R=o.get(y);R?R.push(h):o.set(y,[h])}}return o}function m_(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function fy(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function g_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ho=null;function dy(){}function hy(e,n,s){if(Ho===null)throw Error(r(475));var o=Ho;if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=us(s.href),h=e.querySelector(Io(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=cc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,Ct(h);return}h=e.ownerDocument||e,s=d_(s),(u=ci.get(u))&&ud(s,u),h=h.createElement("link"),Ct(h);var y=h;y._p=new Promise(function(R,P){y.onload=R,y.onerror=P}),Mn(h,"link",s),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=cc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function py(){if(Ho===null)throw Error(r(475));var e=Ho;return e.stylesheets&&e.count===0&&dd(e,e.stylesheets),0<e.count?function(n){var s=setTimeout(function(){if(e.stylesheets&&dd(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s)}}:null}function cc(){if(this.count--,this.count===0){if(this.stylesheets)dd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uc=null;function dd(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uc=new Map,n.forEach(my,e),uc=null,cc.call(e))}function my(e,n){if(!(n.state.loading&4)){var s=uc.get(e);if(s)var o=s.get(null);else{s=new Map,uc.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),o=y)}o&&s.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),h=s.get(y)||o,h===o&&s.set(null,u),s.set(y,u),this.count++,o=cc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Go={$$typeof:M,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function gy(e,n,s,o,u,h,y,R){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zn(0),this.hiddenUpdates=zn(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function __(e,n,s,o,u,h,y,R,P,V,dt,vt){return e=new gy(e,n,s,y,R,P,V,vt),n=1,h===!0&&(n|=24),h=oi(3,null,null,n),e.current=h,h.stateNode=e,n=ku(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:s,cache:n},bf(h),e}function v_(e){return e?(e=kr,e):kr}function x_(e,n,s,o,u,h){u=v_(u),o.context===null?o.context=u:o.pendingContext=u,o=Sa(n),o.payload={element:s},h=h===void 0?null:h,h!==null&&(o.callback=h),s=ya(e,o,n),s!==null&&(Ln(s,e,n),bo(s,e,n))}function S_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function hd(e,n){S_(e,n),(e=e.alternate)&&S_(e,n)}function y_(e){if(e.tag===13){var n=ha(e,67108864);n!==null&&Ln(n,e,67108864),hd(e,67108864)}}var fc=!0;function _y(e,n,s,o){var u=w.T;w.T=null;var h=X.p;try{X.p=2,pd(e,n,s,o)}finally{X.p=h,w.T=u}}function vy(e,n,s,o){var u=w.T;w.T=null;var h=X.p;try{X.p=8,pd(e,n,s,o)}finally{X.p=h,w.T=u}}function pd(e,n,s,o){if(fc){var u=md(o);if(u===null)nd(e,n,o,dc,s),E_(e,o);else if(Sy(u,e,n,s,o))o.stopPropagation();else if(E_(e,o),n&4&&-1<xy.indexOf(e)){for(;u!==null;){var h=Mt(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Zt(h.pendingLanes);if(y!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var P=1<<31-pe(y);R.entanglements[1]|=P,y&=~P}wi(h),(qe&6)===0&&(Zl=xt()+500,Po(0))}}break;case 13:R=ha(h,2),R!==null&&Ln(R,h,2),Jl(),hd(h,2)}if(h=md(o),h===null&&nd(e,n,o,dc,s),h===u)break;u=h}u!==null&&o.stopPropagation()}else nd(e,n,o,null,s)}}function md(e){return e=Su(e),gd(e)}var dc=null;function gd(e){if(dc=null,e=j(e),e!==null){var n=W(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=gt(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return dc=e,null}function M_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(St()){case Kt:return 2;case Ut:return 8;case Pt:case se:return 32;case bt:return 268435456;default:return 32}default:return 32}}var _d=!1,wa=null,Ca=null,Da=null,Vo=new Map,ko=new Map,Ua=[],xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function E_(e,n){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":Vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(n.pointerId)}}function Xo(e,n,s,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:s,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Mt(n),n!==null&&y_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Sy(e,n,s,o,u){switch(n){case"focusin":return wa=Xo(wa,e,n,s,o,u),!0;case"dragenter":return Ca=Xo(Ca,e,n,s,o,u),!0;case"mouseover":return Da=Xo(Da,e,n,s,o,u),!0;case"pointerover":var h=u.pointerId;return Vo.set(h,Xo(Vo.get(h)||null,e,n,s,o,u)),!0;case"gotpointercapture":return h=u.pointerId,ko.set(h,Xo(ko.get(h)||null,e,n,s,o,u)),!0}return!1}function b_(e){var n=j(e.target);if(n!==null){var s=W(n);if(s!==null){if(n=s.tag,n===13){if(n=gt(s),n!==null){e.blockedOn=n,pl(e.priority,function(){if(s.tag===13){var o=jn(),u=ha(s,o);u!==null&&Ln(u,s,o),hd(s,o)}});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=md(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);xu=o,s.target.dispatchEvent(o),xu=null}else return n=Mt(s),n!==null&&y_(n),e.blockedOn=s,!1;n.shift()}return!0}function T_(e,n,s){hc(e)&&s.delete(n)}function yy(){_d=!1,wa!==null&&hc(wa)&&(wa=null),Ca!==null&&hc(Ca)&&(Ca=null),Da!==null&&hc(Da)&&(Da=null),Vo.forEach(T_),ko.forEach(T_)}function pc(e,n){e.blockedOn===n&&(e.blockedOn=null,_d||(_d=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,yy)))}var mc=null;function A_(e){mc!==e&&(mc=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){mc===e&&(mc=null);for(var n=0;n<e.length;n+=3){var s=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(gd(o||s)===null)continue;break}var h=Mt(s);h!==null&&(e.splice(n,3),n-=3,sf(h,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Wo(e){function n(P){return pc(P,e)}wa!==null&&pc(wa,e),Ca!==null&&pc(Ca,e),Da!==null&&pc(Da,e),Vo.forEach(n),ko.forEach(n);for(var s=0;s<Ua.length;s++){var o=Ua[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ua.length&&(s=Ua[0],s.blockedOn===null);)b_(s),s.blockedOn===null&&Ua.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],h=s[o+1],y=u[xn]||null;if(typeof h=="function")y||A_(s);else if(y){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[xn]||null)R=y.formAction;else if(gd(u)!==null)continue}else R=y.action;typeof R=="function"?s[o+1]=R:(s.splice(o,3),o-=3),A_(s)}}}function vd(e){this._internalRoot=e}gc.prototype.render=vd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,o=jn();x_(s,o,e,n,null,null)},gc.prototype.unmount=vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&ss(),x_(e.current,2,null,e,null,null),Jl(),n[ua]=null}};function gc(e){this._internalRoot=e}gc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Wa();e={blockedOn:null,target:e,priority:n};for(var s=0;s<Ua.length&&n!==0&&n<Ua[s].priority;s++);Ua.splice(s,0,e),s===0&&b_(e)}};var R_=t.version;if(R_!=="19.0.0")throw Error(r(527,R_,"19.0.0"));X.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=J(n),e=e!==null?Et(e):null,e=e===null?null:e.stateNode,e};var My={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:w,findFiberByHostInstance:j,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{Qt=_c.inject(My),Dt=_c}catch{}}return Yo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var s=!1,o="",u=Xm,h=Wm,y=qm,R=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=__(e,1,!1,null,null,s,o,u,h,y,R,null),e[ua]=n.current,ed(e.nodeType===8?e.parentNode:e),new vd(n)},Yo.hydrateRoot=function(e,n,s){if(!l(e))throw Error(r(299));var o=!1,u="",h=Xm,y=Wm,R=qm,P=null,V=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(P=s.unstable_transitionCallbacks),s.formState!==void 0&&(V=s.formState)),n=__(e,1,!0,n,s??null,o,u,h,y,R,P,V),n.context=v_(null),s=n.current,o=jn(),u=Sa(o),u.callback=null,ya(s,u,o),n.current.lanes=o,ca(n,o),wi(n),e[ua]=n.current,ed(e),new gc(n)},Yo.version="19.0.0",Yo}var B_;function Ly(){if(B_)return yd.exports;B_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),yd.exports=Uy(),yd.exports}var Ny=Ly();function n0(a){var t,i,r="";if(typeof a=="string"||typeof a=="number")r+=a;else if(typeof a=="object")if(Array.isArray(a)){var l=a.length;for(t=0;t<l;t++)a[t]&&(i=n0(a[t]))&&(r&&(r+=" "),r+=i)}else for(i in a)a[i]&&(r&&(r+=" "),r+=i);return r}function i0(){for(var a,t,i=0,r="",l=arguments.length;i<l;i++)(a=arguments[i])&&(t=n0(a))&&(r&&(r+=" "),r+=t);return r}const qh="-",Oy=a=>{const t=zy(a),{conflictingClassGroups:i,conflictingClassGroupModifiers:r}=a;return{getClassGroupId:f=>{const d=f.split(qh);return d[0]===""&&d.length!==1&&d.shift(),a0(d,t)||Py(f)},getConflictingClassGroupIds:(f,d)=>{const m=i[f]||[];return d&&r[f]?[...m,...r[f]]:m}}},a0=(a,t)=>{var f;if(a.length===0)return t.classGroupId;const i=a[0],r=t.nextPart.get(i),l=r?a0(a.slice(1),r):void 0;if(l)return l;if(t.validators.length===0)return;const c=a.join(qh);return(f=t.validators.find(({validator:d})=>d(c)))==null?void 0:f.classGroupId},I_=/^\[(.+)\]$/,Py=a=>{if(I_.test(a)){const t=I_.exec(a)[1],i=t==null?void 0:t.substring(0,t.indexOf(":"));if(i)return"arbitrary.."+i}},zy=a=>{const{theme:t,classGroups:i}=a,r={nextPart:new Map,validators:[]};for(const l in i)nh(i[l],r,l,t);return r},nh=(a,t,i,r)=>{a.forEach(l=>{if(typeof l=="string"){const c=l===""?t:F_(t,l);c.classGroupId=i;return}if(typeof l=="function"){if(By(l)){nh(l(r),t,i,r);return}t.validators.push({validator:l,classGroupId:i});return}Object.entries(l).forEach(([c,f])=>{nh(f,F_(t,c),i,r)})})},F_=(a,t)=>{let i=a;return t.split(qh).forEach(r=>{i.nextPart.has(r)||i.nextPart.set(r,{nextPart:new Map,validators:[]}),i=i.nextPart.get(r)}),i},By=a=>a.isThemeGetter,Iy=a=>{if(a<1)return{get:()=>{},set:()=>{}};let t=0,i=new Map,r=new Map;const l=(c,f)=>{i.set(c,f),t++,t>a&&(t=0,r=i,i=new Map)};return{get(c){let f=i.get(c);if(f!==void 0)return f;if((f=r.get(c))!==void 0)return l(c,f),f},set(c,f){i.has(c)?i.set(c,f):l(c,f)}}},ih="!",ah=":",Fy=ah.length,Hy=a=>{const{prefix:t,experimentalParseClassName:i}=a;let r=l=>{const c=[];let f=0,d=0,m=0,p;for(let E=0;E<l.length;E++){let b=l[E];if(f===0&&d===0){if(b===ah){c.push(l.slice(m,E)),m=E+Fy;continue}if(b==="/"){p=E;continue}}b==="["?f++:b==="]"?f--:b==="("?d++:b===")"&&d--}const g=c.length===0?l:l.substring(m),_=Gy(g),S=_!==g,M=p&&p>m?p-m:void 0;return{modifiers:c,hasImportantModifier:S,baseClassName:_,maybePostfixModifierPosition:M}};if(t){const l=t+ah,c=r;r=f=>f.startsWith(l)?c(f.substring(l.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:f,maybePostfixModifierPosition:void 0}}if(i){const l=r;r=c=>i({className:c,parseClassName:l})}return r},Gy=a=>a.endsWith(ih)?a.substring(0,a.length-1):a.startsWith(ih)?a.substring(1):a,Vy=a=>{const t=Object.fromEntries(a.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const l=[];let c=[];return r.forEach(f=>{f[0]==="["||t[f]?(l.push(...c.sort(),f),c=[]):c.push(f)}),l.push(...c.sort()),l}},ky=a=>({cache:Iy(a.cacheSize),parseClassName:Hy(a),sortModifiers:Vy(a),...Oy(a)}),Xy=/\s+/,Wy=(a,t)=>{const{parseClassName:i,getClassGroupId:r,getConflictingClassGroupIds:l,sortModifiers:c}=t,f=[],d=a.trim().split(Xy);let m="";for(let p=d.length-1;p>=0;p-=1){const g=d[p],{isExternal:_,modifiers:S,hasImportantModifier:M,baseClassName:E,maybePostfixModifierPosition:b}=i(g);if(_){m=g+(m.length>0?" "+m:m);continue}let v=!!b,x=r(v?E.substring(0,b):E);if(!x){if(!v){m=g+(m.length>0?" "+m:m);continue}if(x=r(E),!x){m=g+(m.length>0?" "+m:m);continue}v=!1}const L=c(S).join(":"),D=M?L+ih:L,O=D+x;if(f.includes(O))continue;f.push(O);const k=l(x,v);for(let N=0;N<k.length;++N){const B=k[N];f.push(D+B)}m=g+(m.length>0?" "+m:m)}return m};function qy(){let a=0,t,i,r="";for(;a<arguments.length;)(t=arguments[a++])&&(i=r0(t))&&(r&&(r+=" "),r+=i);return r}const r0=a=>{if(typeof a=="string")return a;let t,i="";for(let r=0;r<a.length;r++)a[r]&&(t=r0(a[r]))&&(i&&(i+=" "),i+=t);return i};function Yy(a,...t){let i,r,l,c=f;function f(m){const p=t.reduce((g,_)=>_(g),a());return i=ky(p),r=i.cache.get,l=i.cache.set,c=d,d(m)}function d(m){const p=r(m);if(p)return p;const g=Wy(m,i);return l(m,g),g}return function(){return c(qy.apply(null,arguments))}}const gn=a=>{const t=i=>i[a]||[];return t.isThemeGetter=!0,t},s0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,o0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,jy=/^\d+\/\d+$/,Zy=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ky=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Qy=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Jy=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$y=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ds=a=>jy.test(a),ve=a=>!!a&&!Number.isNaN(Number(a)),fr=a=>!!a&&Number.isInteger(Number(a)),H_=a=>a.endsWith("%")&&ve(a.slice(0,-1)),Na=a=>Zy.test(a),tM=()=>!0,eM=a=>Ky.test(a)&&!Qy.test(a),Yh=()=>!1,nM=a=>Jy.test(a),iM=a=>$y.test(a),aM=a=>!Ft(a)&&!Ht(a),rM=a=>Hs(a,u0,Yh),Ft=a=>s0.test(a),dr=a=>Hs(a,f0,eM),Td=a=>Hs(a,gM,ve),sM=a=>Hs(a,l0,Yh),oM=a=>Hs(a,c0,iM),lM=a=>Hs(a,Yh,nM),Ht=a=>o0.test(a),vc=a=>Gs(a,f0),cM=a=>Gs(a,_M),uM=a=>Gs(a,l0),fM=a=>Gs(a,u0),dM=a=>Gs(a,c0),hM=a=>Gs(a,vM,!0),Hs=(a,t,i)=>{const r=s0.exec(a);return r?r[1]?t(r[1]):i(r[2]):!1},Gs=(a,t,i=!1)=>{const r=o0.exec(a);return r?r[1]?t(r[1]):i:!1},l0=a=>a==="position",pM=new Set(["image","url"]),c0=a=>pM.has(a),mM=new Set(["length","size","percentage"]),u0=a=>mM.has(a),f0=a=>a==="length",gM=a=>a==="number",_M=a=>a==="family-name",vM=a=>a==="shadow",xM=()=>{const a=gn("color"),t=gn("font"),i=gn("text"),r=gn("font-weight"),l=gn("tracking"),c=gn("leading"),f=gn("breakpoint"),d=gn("container"),m=gn("spacing"),p=gn("radius"),g=gn("shadow"),_=gn("inset-shadow"),S=gn("drop-shadow"),M=gn("blur"),E=gn("perspective"),b=gn("aspect"),v=gn("ease"),x=gn("animate"),L=()=>["auto","avoid","all","avoid-page","page","left","right","column"],D=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],O=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],N=()=>[Ht,Ft,m],B=()=>[ds,"full","auto",...N()],K=()=>[fr,"none","subgrid",Ht,Ft],w=()=>["auto",{span:["full",fr,Ht,Ft]},Ht,Ft],T=()=>[fr,"auto",Ht,Ft],H=()=>["auto","min","max","fr",Ht,Ft],st=()=>["start","end","center","between","around","evenly","stretch","baseline"],$=()=>["start","end","center","stretch"],ft=()=>["auto",...N()],lt=()=>[ds,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...N()],F=()=>[a,Ht,Ft],nt=()=>[H_,dr],W=()=>["","none","full",p,Ht,Ft],gt=()=>["",ve,vc,dr],U=()=>["solid","dashed","dotted","double"],J=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Et=()=>["","none",M,Ht,Ft],wt=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ht,Ft],X=()=>["none",ve,Ht,Ft],ct=()=>["none",ve,Ht,Ft],_t=()=>[ve,Ht,Ft],At=()=>[ds,"full",...N()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Na],breakpoint:[Na],color:[tM],container:[Na],"drop-shadow":[Na],ease:["in","out","in-out"],font:[aM],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Na],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Na],shadow:[Na],spacing:["px",ve],text:[Na],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ds,Ft,Ht,b]}],container:["container"],columns:[{columns:[ve,Ft,Ht,d]}],"break-after":[{"break-after":L()}],"break-before":[{"break-before":L()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...D(),Ft,Ht]}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:B()}],"inset-x":[{"inset-x":B()}],"inset-y":[{"inset-y":B()}],start:[{start:B()}],end:[{end:B()}],top:[{top:B()}],right:[{right:B()}],bottom:[{bottom:B()}],left:[{left:B()}],visibility:["visible","invisible","collapse"],z:[{z:[fr,"auto",Ht,Ft]}],basis:[{basis:[ds,"full","auto",d,...N()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ve,ds,"auto","initial","none",Ft]}],grow:[{grow:["",ve,Ht,Ft]}],shrink:[{shrink:["",ve,Ht,Ft]}],order:[{order:[fr,"first","last","none",Ht,Ft]}],"grid-cols":[{"grid-cols":K()}],"col-start-end":[{col:w()}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":K()}],"row-start-end":[{row:w()}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":H()}],"auto-rows":[{"auto-rows":H()}],gap:[{gap:N()}],"gap-x":[{"gap-x":N()}],"gap-y":[{"gap-y":N()}],"justify-content":[{justify:[...st(),"normal"]}],"justify-items":[{"justify-items":[...$(),"normal"]}],"justify-self":[{"justify-self":["auto",...$()]}],"align-content":[{content:["normal",...st()]}],"align-items":[{items:[...$(),"baseline"]}],"align-self":[{self:["auto",...$(),"baseline"]}],"place-content":[{"place-content":st()}],"place-items":[{"place-items":[...$(),"baseline"]}],"place-self":[{"place-self":["auto",...$()]}],p:[{p:N()}],px:[{px:N()}],py:[{py:N()}],ps:[{ps:N()}],pe:[{pe:N()}],pt:[{pt:N()}],pr:[{pr:N()}],pb:[{pb:N()}],pl:[{pl:N()}],m:[{m:ft()}],mx:[{mx:ft()}],my:[{my:ft()}],ms:[{ms:ft()}],me:[{me:ft()}],mt:[{mt:ft()}],mr:[{mr:ft()}],mb:[{mb:ft()}],ml:[{ml:ft()}],"space-x":[{"space-x":N()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":N()}],"space-y-reverse":["space-y-reverse"],size:[{size:lt()}],w:[{w:[d,"screen",...lt()]}],"min-w":[{"min-w":[d,"screen","none",...lt()]}],"max-w":[{"max-w":[d,"screen","none","prose",{screen:[f]},...lt()]}],h:[{h:["screen",...lt()]}],"min-h":[{"min-h":["screen","none",...lt()]}],"max-h":[{"max-h":["screen",...lt()]}],"font-size":[{text:["base",i,vc,dr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Ht,Td]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",H_,Ft]}],"font-family":[{font:[cM,Ft,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,Ht,Ft]}],"line-clamp":[{"line-clamp":[ve,"none",Ht,Td]}],leading:[{leading:[c,...N()]}],"list-image":[{"list-image":["none",Ht,Ft]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Ht,Ft]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:F()}],"text-color":[{text:F()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...U(),"wavy"]}],"text-decoration-thickness":[{decoration:[ve,"from-font","auto",Ht,dr]}],"text-decoration-color":[{decoration:F()}],"underline-offset":[{"underline-offset":[ve,"auto",Ht,Ft]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ht,Ft]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ht,Ft]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...D(),uM,sM]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",fM,rM]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},fr,Ht,Ft],radial:["",Ht,Ft],conic:[fr,Ht,Ft]},dM,oM]}],"bg-color":[{bg:F()}],"gradient-from-pos":[{from:nt()}],"gradient-via-pos":[{via:nt()}],"gradient-to-pos":[{to:nt()}],"gradient-from":[{from:F()}],"gradient-via":[{via:F()}],"gradient-to":[{to:F()}],rounded:[{rounded:W()}],"rounded-s":[{"rounded-s":W()}],"rounded-e":[{"rounded-e":W()}],"rounded-t":[{"rounded-t":W()}],"rounded-r":[{"rounded-r":W()}],"rounded-b":[{"rounded-b":W()}],"rounded-l":[{"rounded-l":W()}],"rounded-ss":[{"rounded-ss":W()}],"rounded-se":[{"rounded-se":W()}],"rounded-ee":[{"rounded-ee":W()}],"rounded-es":[{"rounded-es":W()}],"rounded-tl":[{"rounded-tl":W()}],"rounded-tr":[{"rounded-tr":W()}],"rounded-br":[{"rounded-br":W()}],"rounded-bl":[{"rounded-bl":W()}],"border-w":[{border:gt()}],"border-w-x":[{"border-x":gt()}],"border-w-y":[{"border-y":gt()}],"border-w-s":[{"border-s":gt()}],"border-w-e":[{"border-e":gt()}],"border-w-t":[{"border-t":gt()}],"border-w-r":[{"border-r":gt()}],"border-w-b":[{"border-b":gt()}],"border-w-l":[{"border-l":gt()}],"divide-x":[{"divide-x":gt()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":gt()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...U(),"hidden","none"]}],"divide-style":[{divide:[...U(),"hidden","none"]}],"border-color":[{border:F()}],"border-color-x":[{"border-x":F()}],"border-color-y":[{"border-y":F()}],"border-color-s":[{"border-s":F()}],"border-color-e":[{"border-e":F()}],"border-color-t":[{"border-t":F()}],"border-color-r":[{"border-r":F()}],"border-color-b":[{"border-b":F()}],"border-color-l":[{"border-l":F()}],"divide-color":[{divide:F()}],"outline-style":[{outline:[...U(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ve,Ht,Ft]}],"outline-w":[{outline:["",ve,vc,dr]}],"outline-color":[{outline:[a]}],shadow:[{shadow:["","none",g,hM,lM]}],"shadow-color":[{shadow:F()}],"inset-shadow":[{"inset-shadow":["none",Ht,Ft,_]}],"inset-shadow-color":[{"inset-shadow":F()}],"ring-w":[{ring:gt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:F()}],"ring-offset-w":[{"ring-offset":[ve,dr]}],"ring-offset-color":[{"ring-offset":F()}],"inset-ring-w":[{"inset-ring":gt()}],"inset-ring-color":[{"inset-ring":F()}],opacity:[{opacity:[ve,Ht,Ft]}],"mix-blend":[{"mix-blend":[...J(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":J()}],filter:[{filter:["","none",Ht,Ft]}],blur:[{blur:Et()}],brightness:[{brightness:[ve,Ht,Ft]}],contrast:[{contrast:[ve,Ht,Ft]}],"drop-shadow":[{"drop-shadow":["","none",S,Ht,Ft]}],grayscale:[{grayscale:["",ve,Ht,Ft]}],"hue-rotate":[{"hue-rotate":[ve,Ht,Ft]}],invert:[{invert:["",ve,Ht,Ft]}],saturate:[{saturate:[ve,Ht,Ft]}],sepia:[{sepia:["",ve,Ht,Ft]}],"backdrop-filter":[{"backdrop-filter":["","none",Ht,Ft]}],"backdrop-blur":[{"backdrop-blur":Et()}],"backdrop-brightness":[{"backdrop-brightness":[ve,Ht,Ft]}],"backdrop-contrast":[{"backdrop-contrast":[ve,Ht,Ft]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ve,Ht,Ft]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ve,Ht,Ft]}],"backdrop-invert":[{"backdrop-invert":["",ve,Ht,Ft]}],"backdrop-opacity":[{"backdrop-opacity":[ve,Ht,Ft]}],"backdrop-saturate":[{"backdrop-saturate":[ve,Ht,Ft]}],"backdrop-sepia":[{"backdrop-sepia":["",ve,Ht,Ft]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":N()}],"border-spacing-x":[{"border-spacing-x":N()}],"border-spacing-y":[{"border-spacing-y":N()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Ht,Ft]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ve,"initial",Ht,Ft]}],ease:[{ease:["linear","initial",v,Ht,Ft]}],delay:[{delay:[ve,Ht,Ft]}],animate:[{animate:["none",x,Ht,Ft]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[E,Ht,Ft]}],"perspective-origin":[{"perspective-origin":wt()}],rotate:[{rotate:X()}],"rotate-x":[{"rotate-x":X()}],"rotate-y":[{"rotate-y":X()}],"rotate-z":[{"rotate-z":X()}],scale:[{scale:ct()}],"scale-x":[{"scale-x":ct()}],"scale-y":[{"scale-y":ct()}],"scale-z":[{"scale-z":ct()}],"scale-3d":["scale-3d"],skew:[{skew:_t()}],"skew-x":[{"skew-x":_t()}],"skew-y":[{"skew-y":_t()}],transform:[{transform:[Ht,Ft,"","none","gpu","cpu"]}],"transform-origin":[{origin:wt()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:At()}],"translate-x":[{"translate-x":At()}],"translate-y":[{"translate-y":At()}],"translate-z":[{"translate-z":At()}],"translate-none":["translate-none"],accent:[{accent:F()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:F()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ht,Ft]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ht,Ft]}],fill:[{fill:["none",...F()]}],"stroke-w":[{stroke:[ve,vc,dr,Td]}],stroke:[{stroke:["none",...F()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}},SM=Yy(xM);function Vs(...a){return SM(i0(a))}const d0=a=>{try{if(new URL(a))return!0}catch{return!1}return!1};/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h0=(...a)=>a.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var MM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=Ne.forwardRef(({color:a="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...d},m)=>Ne.createElement("svg",{ref:m,...MM,width:t,height:t,stroke:a,strokeWidth:r?Number(i)*24/Number(t):i,className:h0("lucide",l),...d},[...f.map(([p,g])=>Ne.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=(a,t)=>{const i=Ne.forwardRef(({className:r,...l},c)=>Ne.createElement(EM,{ref:c,iconNode:t,className:h0(`lucide-${yM(a)}`,r),...l}));return i.displayName=`${a}`,i};/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],TM=p0("Clipboard",bM);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],RM=p0("LoaderCircle",AM),hr={url:"",isLoading:!1,error:"",result:null},m0=Ne.createContext(void 0),wM=({children:a})=>{const[t,i]=Ne.useState(hr.url),[r,l]=Ne.useState(hr.isLoading),[c,f]=Ne.useState(hr.error),[d,m]=Ne.useState(hr.result),g={url:t,setUrl:i,isLoading:r,setIsLoading:l,error:c,setError:f,result:d,setResult:m,resetContext:()=>{l(hr.isLoading),f(hr.error),m(hr.result)}};return jt.jsx(m0.Provider,{value:g,children:a})},ru=()=>{const a=Ne.useContext(m0);if(!a)throw new Error("useAppContext must be used within an App-context-provider");return a};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jh="167",CM=0,G_=1,DM=2,g0=1,UM=2,na=3,ka=0,Hn=1,ia=2,Ga=0,Ls=1,V_=2,k_=3,X_=4,LM=5,Er=100,NM=101,OM=102,PM=103,zM=104,BM=200,IM=201,FM=202,HM=203,rh=204,sh=205,GM=206,VM=207,kM=208,XM=209,WM=210,qM=211,YM=212,jM=213,ZM=214,KM=0,QM=1,JM=2,Qc=3,$M=4,tE=5,eE=6,nE=7,_0=0,iE=1,aE=2,Va=0,rE=1,sE=2,oE=3,lE=4,cE=5,uE=6,fE=7,v0=300,Ps=301,zs=302,oh=303,lh=304,su=306,ch=1e3,Tr=1001,uh=1002,fi=1003,dE=1004,xc=1005,yi=1006,Ad=1007,Ar=1008,sa=1009,x0=1010,S0=1011,al=1012,Zh=1013,Dr=1014,aa=1015,ol=1016,Kh=1017,Qh=1018,Bs=1020,y0=35902,M0=1021,E0=1022,Mi=1023,b0=1024,T0=1025,Ns=1026,Is=1027,A0=1028,Jh=1029,R0=1030,$h=1031,tp=1033,Vc=33776,kc=33777,Xc=33778,Wc=33779,fh=35840,dh=35841,hh=35842,ph=35843,mh=36196,gh=37492,_h=37496,vh=37808,xh=37809,Sh=37810,yh=37811,Mh=37812,Eh=37813,bh=37814,Th=37815,Ah=37816,Rh=37817,wh=37818,Ch=37819,Dh=37820,Uh=37821,qc=36492,Lh=36494,Nh=36495,w0=36283,Oh=36284,Ph=36285,zh=36286,hE=3200,pE=3201,mE=0,gE=1,Ha="",Di="srgb",Xa="srgb-linear",ep="display-p3",ou="display-p3-linear",Jc="linear",Ve="srgb",$c="rec709",tu="p3",hs=7680,W_=519,_E=512,vE=513,xE=514,C0=515,SE=516,yE=517,ME=518,EE=519,q_=35044,Y_="300 es",ra=2e3,eu=2001;class ks{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let j_=1234567;const el=Math.PI/180,rl=180/Math.PI;function Xs(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[a&255]+wn[a>>8&255]+wn[a>>16&255]+wn[a>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function Pn(a,t,i){return Math.max(t,Math.min(i,a))}function np(a,t){return(a%t+t)%t}function bE(a,t,i,r,l){return r+(a-t)*(l-r)/(i-t)}function TE(a,t,i){return a!==t?(i-a)/(t-a):0}function nl(a,t,i){return(1-i)*a+i*t}function AE(a,t,i,r){return nl(a,t,1-Math.exp(-i*r))}function RE(a,t=1){return t-Math.abs(np(a,t*2)-t)}function wE(a,t,i){return a<=t?0:a>=i?1:(a=(a-t)/(i-t),a*a*(3-2*a))}function CE(a,t,i){return a<=t?0:a>=i?1:(a=(a-t)/(i-t),a*a*a*(a*(a*6-15)+10))}function DE(a,t){return a+Math.floor(Math.random()*(t-a+1))}function UE(a,t){return a+Math.random()*(t-a)}function LE(a){return a*(.5-Math.random())}function NE(a){a!==void 0&&(j_=a);let t=j_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function OE(a){return a*el}function PE(a){return a*rl}function zE(a){return(a&a-1)===0&&a!==0}function BE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function IE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function FE(a,t,i,r,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((t+r)/2),g=f((t+r)/2),_=c((t-r)/2),S=f((t-r)/2),M=c((r-t)/2),E=f((r-t)/2);switch(l){case"XYX":a.set(d*g,m*_,m*S,d*p);break;case"YZY":a.set(m*S,d*g,m*_,d*p);break;case"ZXZ":a.set(m*_,m*S,d*g,d*p);break;case"XZX":a.set(d*g,m*E,m*M,d*p);break;case"YXY":a.set(m*M,d*g,m*E,d*p);break;case"ZYZ":a.set(m*E,m*M,d*g,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ds(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Nn(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Z_={DEG2RAD:el,RAD2DEG:rl,generateUUID:Xs,clamp:Pn,euclideanModulo:np,mapLinear:bE,inverseLerp:TE,lerp:nl,damp:AE,pingpong:RE,smoothstep:wE,smootherstep:CE,randInt:DE,randFloat:UE,randFloatSpread:LE,seededRandom:NE,degToRad:OE,radToDeg:PE,isPowerOfTwo:zE,ceilPowerOfTwo:BE,floorPowerOfTwo:IE,setQuaternionFromProperEuler:FE,normalize:Nn,denormalize:Ds};class Re{constructor(t=0,i=0){Re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Pn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,i,r,l,c,f,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,m,p)}set(t,i,r,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],g=r[4],_=r[7],S=r[2],M=r[5],E=r[8],b=l[0],v=l[3],x=l[6],L=l[1],D=l[4],O=l[7],k=l[2],N=l[5],B=l[8];return c[0]=f*b+d*L+m*k,c[3]=f*v+d*D+m*N,c[6]=f*x+d*O+m*B,c[1]=p*b+g*L+_*k,c[4]=p*v+g*D+_*N,c[7]=p*x+g*O+_*B,c[2]=S*b+M*L+E*k,c[5]=S*v+M*D+E*N,c[8]=S*x+M*O+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-r*c*g+r*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*f-d*p,S=d*m-g*c,M=p*c-f*m,E=i*_+r*S+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(l*p-g*r)*b,t[2]=(d*r-l*f)*b,t[3]=S*b,t[4]=(g*i-l*m)*b,t[5]=(l*c-d*i)*b,t[6]=M*b,t[7]=(r*m-p*i)*b,t[8]=(f*i-r*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Rd.makeScale(t,i)),this}rotate(t){return this.premultiply(Rd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Rd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rd=new ue;function D0(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function nu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function HE(){const a=nu("canvas");return a.style.display="block",a}const K_={};function il(a){a in K_||(K_[a]=!0,console.warn(a))}function GE(a,t,i){return new Promise(function(r,l){function c(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Q_=new ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),J_=new ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jo={[Xa]:{transfer:Jc,primaries:$c,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a,fromReference:a=>a},[Di]:{transfer:Ve,primaries:$c,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[ou]:{transfer:Jc,primaries:tu,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.applyMatrix3(J_),fromReference:a=>a.applyMatrix3(Q_)},[ep]:{transfer:Ve,primaries:tu,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.convertSRGBToLinear().applyMatrix3(J_),fromReference:a=>a.applyMatrix3(Q_).convertLinearToSRGB()}},VE=new Set([Xa,ou]),Ue={enabled:!0,_workingColorSpace:Xa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!VE.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,t,i){if(this.enabled===!1||t===i||!t||!i)return a;const r=jo[t].toReference,l=jo[i].fromReference;return l(r(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this._workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this._workingColorSpace)},getPrimaries:function(a){return jo[a].primaries},getTransfer:function(a){return a===Ha?Jc:jo[a].transfer},getLuminanceCoefficients:function(a,t=this._workingColorSpace){return a.fromArray(jo[t].luminanceCoefficients)}};function Os(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function wd(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ps;class kE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ps===void 0&&(ps=nu("canvas")),ps.width=t.width,ps.height=t.height;const r=ps.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=ps}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=nu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Os(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Os(i[r]/255)*255):i[r]=Os(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let XE=0;class U0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=Xs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Cd(l[f].image)):c.push(Cd(l[f]))}else c=Cd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Cd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?kE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WE=0;class Gn extends ks{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=Tr,l=Tr,c=yi,f=Ar,d=Mi,m=sa,p=Gn.DEFAULT_ANISOTROPY,g=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Xs(),this.name="",this.source=new U0(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==v0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ch:t.x=t.x-Math.floor(t.x);break;case Tr:t.x=t.x<0?0:1;break;case uh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ch:t.y=t.y-Math.floor(t.y);break;case Tr:t.y=t.y<0?0:1;break;case uh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=v0;Gn.DEFAULT_ANISOTROPY=1;class vn{constructor(t=0,i=0,r=0,l=1){vn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],S=m[1],M=m[5],E=m[9],b=m[2],v=m[6],x=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-b)<.01&&Math.abs(E-v)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+b)<.1&&Math.abs(E+v)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,O=(M+1)/2,k=(x+1)/2,N=(g+S)/4,B=(_+b)/4,K=(E+v)/4;return D>O&&D>k?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=N/r,c=B/r):O>k?O<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),r=N/l,c=K/l):k<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),r=B/c,l=K/c),this.set(r,l,c,i),this}let L=Math.sqrt((v-E)*(v-E)+(_-b)*(_-b)+(S-g)*(S-g));return Math.abs(L)<.001&&(L=1),this.x=(v-E)/L,this.y=(_-b)/L,this.z=(S-g)/L,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qE extends ks{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new vn(0,0,t,i),this.scissorTest=!1,this.viewport=new vn(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Gn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new U0(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends qE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class L0 extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=fi,this.minFilter=fi,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class YE extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=fi,this.minFilter=fi,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,d){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3];const S=c[f+0],M=c[f+1],E=c[f+2],b=c[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=S,t[i+1]=M,t[i+2]=E,t[i+3]=b;return}if(_!==b||m!==S||p!==M||g!==E){let v=1-d;const x=m*S+p*M+g*E+_*b,L=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const k=Math.sqrt(D),N=Math.atan2(k,x*L);v=Math.sin(v*N)/k,d=Math.sin(d*N)/k}const O=d*L;if(m=m*v+S*O,p=p*v+M*O,g=g*v+E*O,_=_*v+b*O,v===1-d){const k=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=k,p*=k,g*=k,_*=k}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,f){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=c[f],S=c[f+1],M=c[f+2],E=c[f+3];return t[i]=d*E+g*_+m*M-p*S,t[i+1]=m*E+g*S+p*_-d*M,t[i+2]=p*E+g*M+d*S-m*_,t[i+3]=g*E-d*_-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),_=d(c/2),S=m(r/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=S*g*_+p*M*E,this._y=p*M*_-S*g*E,this._z=p*g*E+S*M*_,this._w=p*g*_-S*M*E;break;case"YXZ":this._x=S*g*_+p*M*E,this._y=p*M*_-S*g*E,this._z=p*g*E-S*M*_,this._w=p*g*_+S*M*E;break;case"ZXY":this._x=S*g*_-p*M*E,this._y=p*M*_+S*g*E,this._z=p*g*E+S*M*_,this._w=p*g*_-S*M*E;break;case"ZYX":this._x=S*g*_-p*M*E,this._y=p*M*_+S*g*E,this._z=p*g*E-S*M*_,this._w=p*g*_+S*M*E;break;case"YZX":this._x=S*g*_+p*M*E,this._y=p*M*_+S*g*E,this._z=p*g*E-S*M*_,this._w=p*g*_-S*M*E;break;case"XZY":this._x=S*g*_-p*M*E,this._y=p*M*_-S*g*E,this._z=p*g*E+S*M*_,this._w=p*g*_+S*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],S=r+d+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pn(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-r*p,this._z=c*g+f*p+r*m-l*d,this._w=f*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=f*_+this._w*S,this._x=r*_+this._x*S,this._y=l*_+this._y*S,this._z=c*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion($_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion($_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*r),g=2*(d*i-c*l),_=2*(c*r-f*i);return this.x=i+m*p+f*_-d*g,this.y=r+m*g+d*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-r*m,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Dd.copy(this).projectOnVector(t),this.sub(Dd)}reflect(t){return this.sub(Dd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Pn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dd=new rt,$_=new ll;class cl{constructor(t=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(_i.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(_i.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=_i.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,_i):_i.fromBufferAttribute(c,f),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sc.copy(r.boundingBox)),Sc.applyMatrix4(t.matrixWorld),this.union(Sc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zo),yc.subVectors(this.max,Zo),ms.subVectors(t.a,Zo),gs.subVectors(t.b,Zo),_s.subVectors(t.c,Zo),Oa.subVectors(gs,ms),Pa.subVectors(_s,gs),pr.subVectors(ms,_s);let i=[0,-Oa.z,Oa.y,0,-Pa.z,Pa.y,0,-pr.z,pr.y,Oa.z,0,-Oa.x,Pa.z,0,-Pa.x,pr.z,0,-pr.x,-Oa.y,Oa.x,0,-Pa.y,Pa.x,0,-pr.y,pr.x,0];return!Ud(i,ms,gs,_s,yc)||(i=[1,0,0,0,1,0,0,0,1],!Ud(i,ms,gs,_s,yc))?!1:(Mc.crossVectors(Oa,Pa),i=[Mc.x,Mc.y,Mc.z],Ud(i,ms,gs,_s,yc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qi=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],_i=new rt,Sc=new cl,ms=new rt,gs=new rt,_s=new rt,Oa=new rt,Pa=new rt,pr=new rt,Zo=new rt,yc=new rt,Mc=new rt,mr=new rt;function Ud(a,t,i,r,l){for(let c=0,f=a.length-3;c<=f;c+=3){mr.fromArray(a,c);const d=l.x*Math.abs(mr.x)+l.y*Math.abs(mr.y)+l.z*Math.abs(mr.z),m=t.dot(mr),p=i.dot(mr),g=r.dot(mr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const jE=new cl,Ko=new rt,Ld=new rt;class ip{constructor(t=new rt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):jE.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ko.subVectors(t,this.center);const i=Ko.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ko,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ld.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ko.copy(t.center).add(Ld)),this.expandByPoint(Ko.copy(t.center).sub(Ld))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new rt,Nd=new rt,Ec=new rt,za=new rt,Od=new rt,bc=new rt,Pd=new rt;class ZE{constructor(t=new rt,i=new rt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ji.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Nd.copy(t).add(i).multiplyScalar(.5),Ec.copy(i).sub(t).normalize(),za.copy(this.origin).sub(Nd);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Ec),d=za.dot(this.direction),m=-za.dot(Ec),p=za.lengthSq(),g=Math.abs(1-f*f);let _,S,M,E;if(g>0)if(_=f*m-d,S=f*d-m,E=c*g,_>=0)if(S>=-E)if(S<=E){const b=1/g;_*=b,S*=b,M=_*(_+f*S+2*d)+S*(f*_+S+2*m)+p}else S=c,_=Math.max(0,-(f*S+d)),M=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(f*S+d)),M=-_*_+S*(S+2*m)+p;else S<=-E?(_=Math.max(0,-(-f*c+d)),S=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p):S<=E?(_=0,S=Math.min(Math.max(-c,-m),c),M=S*(S+2*m)+p):(_=Math.max(0,-(f*c+d)),S=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p);else S=f>0?-c:c,_=Math.max(0,-(f*S+d)),M=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Nd).addScaledVector(Ec,S),M}intersectSphere(t,i){Ji.subVectors(t.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(c=(t.min.y-S.y)*g,f=(t.max.y-S.y)*g):(c=(t.max.y-S.y)*g,f=(t.min.y-S.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,i,r,l,c){Od.subVectors(i,t),bc.subVectors(r,t),Pd.crossVectors(Od,bc);let f=this.direction.dot(Pd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;za.subVectors(this.origin,t);const m=d*this.direction.dot(bc.crossVectors(za,bc));if(m<0)return null;const p=d*this.direction.dot(Od.cross(za));if(p<0||m+p>f)return null;const g=-d*za.dot(Pd);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(t,i,r,l,c,f,d,m,p,g,_,S,M,E,b,v){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,m,p,g,_,S,M,E,b,v)}set(t,i,r,l,c,f,d,m,p,g,_,S,M,E,b,v){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=f,x[9]=d,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=S,x[3]=M,x[7]=E,x[11]=b,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/vs.setFromMatrixColumn(t,0).length(),c=1/vs.setFromMatrixColumn(t,1).length(),f=1/vs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const S=f*g,M=f*_,E=d*g,b=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+E*p,i[5]=S-b*p,i[9]=-d*m,i[2]=b-S*p,i[6]=E+M*p,i[10]=f*m}else if(t.order==="YXZ"){const S=m*g,M=m*_,E=p*g,b=p*_;i[0]=S+b*d,i[4]=E*d-M,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=M*d-E,i[6]=b+S*d,i[10]=f*m}else if(t.order==="ZXY"){const S=m*g,M=m*_,E=p*g,b=p*_;i[0]=S-b*d,i[4]=-f*_,i[8]=E+M*d,i[1]=M+E*d,i[5]=f*g,i[9]=b-S*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const S=f*g,M=f*_,E=d*g,b=d*_;i[0]=m*g,i[4]=E*p-M,i[8]=S*p+b,i[1]=m*_,i[5]=b*p+S,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const S=f*m,M=f*p,E=d*m,b=d*p;i[0]=m*g,i[4]=b-S*_,i[8]=E*_+M,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+E,i[10]=S-b*_}else if(t.order==="XZY"){const S=f*m,M=f*p,E=d*m,b=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=S*_+b,i[5]=f*g,i[9]=M*_-E,i[2]=E*_-M,i[6]=d*g,i[10]=b*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(KE,t,QE)}lookAt(t,i,r){const l=this.elements;return Zn.subVectors(t,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Ba.crossVectors(r,Zn),Ba.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Ba.crossVectors(r,Zn)),Ba.normalize(),Tc.crossVectors(Zn,Ba),l[0]=Ba.x,l[4]=Tc.x,l[8]=Zn.x,l[1]=Ba.y,l[5]=Tc.y,l[9]=Zn.y,l[2]=Ba.z,l[6]=Tc.z,l[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],g=r[1],_=r[5],S=r[9],M=r[13],E=r[2],b=r[6],v=r[10],x=r[14],L=r[3],D=r[7],O=r[11],k=r[15],N=l[0],B=l[4],K=l[8],w=l[12],T=l[1],H=l[5],st=l[9],$=l[13],ft=l[2],lt=l[6],F=l[10],nt=l[14],W=l[3],gt=l[7],U=l[11],J=l[15];return c[0]=f*N+d*T+m*ft+p*W,c[4]=f*B+d*H+m*lt+p*gt,c[8]=f*K+d*st+m*F+p*U,c[12]=f*w+d*$+m*nt+p*J,c[1]=g*N+_*T+S*ft+M*W,c[5]=g*B+_*H+S*lt+M*gt,c[9]=g*K+_*st+S*F+M*U,c[13]=g*w+_*$+S*nt+M*J,c[2]=E*N+b*T+v*ft+x*W,c[6]=E*B+b*H+v*lt+x*gt,c[10]=E*K+b*st+v*F+x*U,c[14]=E*w+b*$+v*nt+x*J,c[3]=L*N+D*T+O*ft+k*W,c[7]=L*B+D*H+O*lt+k*gt,c[11]=L*K+D*st+O*F+k*U,c[15]=L*w+D*$+O*nt+k*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],S=t[10],M=t[14],E=t[3],b=t[7],v=t[11],x=t[15];return E*(+c*m*_-l*p*_-c*d*S+r*p*S+l*d*M-r*m*M)+b*(+i*m*M-i*p*S+c*f*S-l*f*M+l*p*g-c*m*g)+v*(+i*p*_-i*d*M-c*f*_+r*f*M+c*d*g-r*p*g)+x*(-l*d*g-i*m*_+i*d*S+l*f*_-r*f*S+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],S=t[10],M=t[11],E=t[12],b=t[13],v=t[14],x=t[15],L=_*v*p-b*S*p+b*m*M-d*v*M-_*m*x+d*S*x,D=E*S*p-g*v*p-E*m*M+f*v*M+g*m*x-f*S*x,O=g*b*p-E*_*p+E*d*M-f*b*M-g*d*x+f*_*x,k=E*_*m-g*b*m-E*d*S+f*b*S+g*d*v-f*_*v,N=i*L+r*D+l*O+c*k;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return t[0]=L*B,t[1]=(b*S*c-_*v*c-b*l*M+r*v*M+_*l*x-r*S*x)*B,t[2]=(d*v*c-b*m*c+b*l*p-r*v*p-d*l*x+r*m*x)*B,t[3]=(_*m*c-d*S*c-_*l*p+r*S*p+d*l*M-r*m*M)*B,t[4]=D*B,t[5]=(g*v*c-E*S*c+E*l*M-i*v*M-g*l*x+i*S*x)*B,t[6]=(E*m*c-f*v*c-E*l*p+i*v*p+f*l*x-i*m*x)*B,t[7]=(f*S*c-g*m*c+g*l*p-i*S*p-f*l*M+i*m*M)*B,t[8]=O*B,t[9]=(E*_*c-g*b*c-E*r*M+i*b*M+g*r*x-i*_*x)*B,t[10]=(f*b*c-E*d*c+E*r*p-i*b*p-f*r*x+i*d*x)*B,t[11]=(g*d*c-f*_*c-g*r*p+i*_*p+f*r*M-i*d*M)*B,t[12]=k*B,t[13]=(g*b*l-E*_*l+E*r*S-i*b*S-g*r*v+i*_*v)*B,t[14]=(E*d*l-f*b*l-E*r*m+i*b*m+f*r*v-i*d*v)*B,t[15]=(f*_*l-g*d*l+g*r*m-i*_*m-f*r*S+i*d*S)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,_=d+d,S=c*p,M=c*g,E=c*_,b=f*g,v=f*_,x=d*_,L=m*p,D=m*g,O=m*_,k=r.x,N=r.y,B=r.z;return l[0]=(1-(b+x))*k,l[1]=(M+O)*k,l[2]=(E-D)*k,l[3]=0,l[4]=(M-O)*N,l[5]=(1-(S+x))*N,l[6]=(v+L)*N,l[7]=0,l[8]=(E+D)*B,l[9]=(v-L)*B,l[10]=(1-(S+b))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=vs.set(l[0],l[1],l[2]).length();const f=vs.set(l[4],l[5],l[6]).length(),d=vs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],vi.copy(this);const p=1/c,g=1/f,_=1/d;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=g,vi.elements[5]*=g,vi.elements[6]*=g,vi.elements[8]*=_,vi.elements[9]*=_,vi.elements[10]*=_,i.setFromRotationMatrix(vi),r.x=c,r.y=f,r.z=d,this}makePerspective(t,i,r,l,c,f,d=ra){const m=this.elements,p=2*c/(i-t),g=2*c/(r-l),_=(i+t)/(i-t),S=(r+l)/(r-l);let M,E;if(d===ra)M=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===eu)M=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,c,f,d=ra){const m=this.elements,p=1/(i-t),g=1/(r-l),_=1/(f-c),S=(i+t)*p,M=(r+l)*g;let E,b;if(d===ra)E=(f+c)*_,b=-2*_;else if(d===eu)E=c*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=b,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const vs=new rt,vi=new un,KE=new rt(0,0,0),QE=new rt(1,1,1),Ba=new rt,Tc=new rt,Zn=new rt,tv=new un,ev=new ll;class oa{constructor(t=0,i=0,r=0,l=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Pn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Pn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return tv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ev.setFromEuler(this),this.setFromQuaternion(ev,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class N0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let JE=0;const nv=new rt,xs=new ll,$i=new un,Ac=new rt,Qo=new rt,$E=new rt,tb=new ll,iv=new rt(1,0,0),av=new rt(0,1,0),rv=new rt(0,0,1),sv={type:"added"},eb={type:"removed"},Ss={type:"childadded",child:null},zd={type:"childremoved",child:null};class Qn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const t=new rt,i=new oa,r=new ll,l=new rt(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new ue}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return xs.setFromAxisAngle(t,i),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,i){return xs.setFromAxisAngle(t,i),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(iv,t)}rotateY(t){return this.rotateOnAxis(av,t)}rotateZ(t){return this.rotateOnAxis(rv,t)}translateOnAxis(t,i){return nv.copy(t).applyQuaternion(this.quaternion),this.position.add(nv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(iv,t)}translateY(t){return this.translateOnAxis(av,t)}translateZ(t){return this.translateOnAxis(rv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ac.copy(t):Ac.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Qo,Ac,this.up):$i.lookAt(Ac,Qo,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),xs.setFromRotationMatrix($i),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sv),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(eb),zd.child=t,this.dispatchEvent(zd),zd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sv),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,t,$E),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,tb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),S=f(t.skeletons),M=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Qn.DEFAULT_UP=new rt(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new rt,ta=new rt,Bd=new rt,ea=new rt,ys=new rt,Ms=new rt,ov=new rt,Id=new rt,Fd=new rt,Hd=new rt;class Li{constructor(t=new rt,i=new rt,r=new rt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),xi.subVectors(t,i),l.cross(xi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){xi.subVectors(l,i),ta.subVectors(r,i),Bd.subVectors(t,i);const f=xi.dot(xi),d=xi.dot(ta),m=xi.dot(Bd),p=ta.dot(ta),g=ta.dot(Bd),_=f*p-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,M=(p*m-d*g)*S,E=(f*g-d*m)*S;return c.set(1-M-E,E,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(t,i,r,l,c,f,d,m){return this.getBarycoord(t,i,r,l,ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ea.x),m.addScaledVector(f,ea.y),m.addScaledVector(d,ea.z),m)}static isFrontFacing(t,i,r,l){return xi.subVectors(r,i),ta.subVectors(t,i),xi.cross(ta).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),xi.cross(ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Li.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Li.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,d;ys.subVectors(l,r),Ms.subVectors(c,r),Id.subVectors(t,r);const m=ys.dot(Id),p=Ms.dot(Id);if(m<=0&&p<=0)return i.copy(r);Fd.subVectors(t,l);const g=ys.dot(Fd),_=Ms.dot(Fd);if(g>=0&&_<=g)return i.copy(l);const S=m*_-g*p;if(S<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(ys,f);Hd.subVectors(t,c);const M=ys.dot(Hd),E=Ms.dot(Hd);if(E>=0&&M<=E)return i.copy(c);const b=M*p-m*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Ms,d);const v=g*E-M*_;if(v<=0&&_-g>=0&&M-E>=0)return ov.subVectors(c,l),d=(_-g)/(_-g+(M-E)),i.copy(l).addScaledVector(ov,d);const x=1/(v+b+S);return f=b*x,d=S*x,i.copy(r).addScaledVector(ys,f).addScaledVector(Ms,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const O0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function Gd(a,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(t-a)*6*i:i<1/2?t:i<2/3?a+(t-a)*6*(2/3-i):a}class ze{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ue.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ue.workingColorSpace){if(t=np(t,1),i=Pn(i,0,1),r=Pn(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Gd(f,c,t+1/3),this.g=Gd(f,c,t),this.b=Gd(f,c,t-1/3)}return Ue.toWorkingColorSpace(this,l),this}setStyle(t,i=Di){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Di){const r=O0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}copyLinearToSRGB(t){return this.r=wd(t.r),this.g=wd(t.g),this.b=wd(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Di){return Ue.fromWorkingColorSpace(Cn.copy(this),t),Math.round(Pn(Cn.r*255,0,255))*65536+Math.round(Pn(Cn.g*255,0,255))*256+Math.round(Pn(Cn.b*255,0,255))}getHexString(t=Di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,c=Cn.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=Di){Ue.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==Di?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+i,Ia.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ia),t.getHSL(Rc);const r=nl(Ia.h,Rc.h,i),l=nl(Ia.s,Rc.s,i),c=nl(Ia.l,Rc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new ze;ze.NAMES=O0;let nb=0;class lu extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Ls,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=sh,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Qc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=W_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(r.blending=this.blending),this.side!==ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rh&&(r.blendSrc=this.blendSrc),this.blendDst!==sh&&(r.blendDst=this.blendDst),this.blendEquation!==Er&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Qc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==W_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class P0 extends lu{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=_0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new rt,wc=new Re;class Oi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=q_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return il("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(t),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(t),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(t),this.setXYZ(i,an.x,an.y,an.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ds(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Nn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ds(i,this.array)),i}setX(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ds(i,this.array)),i}setY(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ds(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ds(i,this.array)),i}setW(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array),l=Nn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array),l=Nn(l,this.array),c=Nn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==q_&&(t.usage=this.usage),t}}class z0 extends Oi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class B0 extends Oi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class wr extends Oi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let ib=0;const ui=new un,Vd=new Qn,Es=new rt,Kn=new cl,Jo=new cl,_n=new rt;class Nr extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(D0(t)?B0:z0)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ue().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,r){return ui.makeTranslation(t,i,r),this.applyMatrix4(ui),this}scale(t,i,r){return ui.makeScale(t,i,r),this.applyMatrix4(ui),this}lookAt(t){return Vd.lookAt(t),Vd.updateMatrix(),this.applyMatrix4(Vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const i=[];for(let r=0,l=t.length;r<l;r++){const c=t[r];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new wr(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Kn.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ip);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Jo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Kn.min,Jo.min),Kn.expandByPoint(_n),_n.addVectors(Kn.max,Jo.max),Kn.expandByPoint(_n)):(Kn.expandByPoint(Jo.min),Kn.expandByPoint(Jo.max))}Kn.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)_n.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)_n.fromBufferAttribute(d,p),m&&(Es.fromBufferAttribute(t,p),_n.add(Es)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<r.count;K++)d[K]=new rt,m[K]=new rt;const p=new rt,g=new rt,_=new rt,S=new Re,M=new Re,E=new Re,b=new rt,v=new rt;function x(K,w,T){p.fromBufferAttribute(r,K),g.fromBufferAttribute(r,w),_.fromBufferAttribute(r,T),S.fromBufferAttribute(c,K),M.fromBufferAttribute(c,w),E.fromBufferAttribute(c,T),g.sub(p),_.sub(p),M.sub(S),E.sub(S);const H=1/(M.x*E.y-E.x*M.y);isFinite(H)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(H),v.copy(_).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(H),d[K].add(b),d[w].add(b),d[T].add(b),m[K].add(v),m[w].add(v),m[T].add(v))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let K=0,w=L.length;K<w;++K){const T=L[K],H=T.start,st=T.count;for(let $=H,ft=H+st;$<ft;$+=3)x(t.getX($+0),t.getX($+1),t.getX($+2))}const D=new rt,O=new rt,k=new rt,N=new rt;function B(K){k.fromBufferAttribute(l,K),N.copy(k);const w=d[K];D.copy(w),D.sub(k.multiplyScalar(k.dot(w))).normalize(),O.crossVectors(N,w);const H=O.dot(m[K])<0?-1:1;f.setXYZW(K,D.x,D.y,D.z,H)}for(let K=0,w=L.length;K<w;++K){const T=L[K],H=T.start,st=T.count;for(let $=H,ft=H+st;$<ft;$+=3)B(t.getX($+0)),B(t.getX($+1)),B(t.getX($+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new rt,c=new rt,f=new rt,d=new rt,m=new rt,p=new rt,g=new rt,_=new rt;if(t)for(let S=0,M=t.count;S<M;S+=3){const E=t.getX(S+0),b=t.getX(S+1),v=t.getX(S+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,v),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,v),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),f.fromBufferAttribute(i,S+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,S=new p.constructor(m.length*g);let M=0,E=0;for(let b=0,v=m.length;b<v;b++){d.isInterleavedBufferAttribute?M=m[b]*d.data.stride+d.offset:M=m[b]*g;for(let x=0;x<g;x++)S[E++]=p[M++]}return new Oi(S,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Nr,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const S=p[g],M=t(S,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,S=p.length;_<S;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let S=0,M=_.length;S<M;S++)g.push(_[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lv=new un,gr=new ZE,Cc=new ip,cv=new rt,bs=new rt,Ts=new rt,As=new rt,kd=new rt,Dc=new rt,Uc=new Re,Lc=new Re,Nc=new Re,uv=new rt,fv=new rt,dv=new rt,Oc=new rt,Pc=new rt;class Ni extends Qn{constructor(t=new Nr,i=new P0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Dc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(kd.fromBufferAttribute(_,t),f?Dc.addScaledVector(kd,g):Dc.addScaledVector(kd.sub(i),g))}i.add(Dc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cc.copy(r.boundingSphere),Cc.applyMatrix4(c),gr.copy(t.ray).recast(t.near),!(Cc.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Cc,cv)===null||gr.origin.distanceToSquared(cv)>(t.far-t.near)**2))&&(lv.copy(c).invert(),gr.copy(t.ray).applyMatrix4(lv),!(r.boundingBox!==null&&gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,gr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,S=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,b=S.length;E<b;E++){const v=S[E],x=f[v.materialIndex],L=Math.max(v.start,M.start),D=Math.min(d.count,Math.min(v.start+v.count,M.start+M.count));for(let O=L,k=D;O<k;O+=3){const N=d.getX(O),B=d.getX(O+1),K=d.getX(O+2);l=zc(this,x,t,r,p,g,_,N,B,K),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let v=E,x=b;v<x;v+=3){const L=d.getX(v),D=d.getX(v+1),O=d.getX(v+2);l=zc(this,f,t,r,p,g,_,L,D,O),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,b=S.length;E<b;E++){const v=S[E],x=f[v.materialIndex],L=Math.max(v.start,M.start),D=Math.min(m.count,Math.min(v.start+v.count,M.start+M.count));for(let O=L,k=D;O<k;O+=3){const N=O,B=O+1,K=O+2;l=zc(this,x,t,r,p,g,_,N,B,K),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let v=E,x=b;v<x;v+=3){const L=v,D=v+1,O=v+2;l=zc(this,f,t,r,p,g,_,L,D,O),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function ab(a,t,i,r,l,c,f,d){let m;if(t.side===Hn?m=r.intersectTriangle(f,c,l,!0,d):m=r.intersectTriangle(l,c,f,t.side===ka,d),m===null)return null;Pc.copy(d),Pc.applyMatrix4(a.matrixWorld);const p=i.ray.origin.distanceTo(Pc);return p<i.near||p>i.far?null:{distance:p,point:Pc.clone(),object:a}}function zc(a,t,i,r,l,c,f,d,m,p){a.getVertexPosition(d,bs),a.getVertexPosition(m,Ts),a.getVertexPosition(p,As);const g=ab(a,t,i,r,bs,Ts,As,Oc);if(g){l&&(Uc.fromBufferAttribute(l,d),Lc.fromBufferAttribute(l,m),Nc.fromBufferAttribute(l,p),g.uv=Li.getInterpolation(Oc,bs,Ts,As,Uc,Lc,Nc,new Re)),c&&(Uc.fromBufferAttribute(c,d),Lc.fromBufferAttribute(c,m),Nc.fromBufferAttribute(c,p),g.uv1=Li.getInterpolation(Oc,bs,Ts,As,Uc,Lc,Nc,new Re)),f&&(uv.fromBufferAttribute(f,d),fv.fromBufferAttribute(f,m),dv.fromBufferAttribute(f,p),g.normal=Li.getInterpolation(Oc,bs,Ts,As,uv,fv,dv,new rt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new rt,materialIndex:0};Li.getNormal(bs,Ts,As,_.normal),g.face=_}return g}class ul extends Nr{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let S=0,M=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new wr(p,3)),this.setAttribute("normal",new wr(g,3)),this.setAttribute("uv",new wr(_,2));function E(b,v,x,L,D,O,k,N,B,K,w){const T=O/B,H=k/K,st=O/2,$=k/2,ft=N/2,lt=B+1,F=K+1;let nt=0,W=0;const gt=new rt;for(let U=0;U<F;U++){const J=U*H-$;for(let Et=0;Et<lt;Et++){const wt=Et*T-st;gt[b]=wt*L,gt[v]=J*D,gt[x]=ft,p.push(gt.x,gt.y,gt.z),gt[b]=0,gt[v]=0,gt[x]=N>0?1:-1,g.push(gt.x,gt.y,gt.z),_.push(Et/B),_.push(1-U/K),nt+=1}}for(let U=0;U<K;U++)for(let J=0;J<B;J++){const Et=S+J+lt*U,wt=S+J+lt*(U+1),X=S+(J+1)+lt*(U+1),ct=S+(J+1)+lt*U;m.push(Et,wt,ct),m.push(wt,X,ct),W+=6}d.addGroup(M,W,w),M+=W,S+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fs(a){const t={};for(const i in a){t[i]={};for(const r in a[i]){const l=a[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function On(a){const t={};for(let i=0;i<a.length;i++){const r=Fs(a[i]);for(const l in r)t[l]=r[l]}return t}function rb(a){const t=[];for(let i=0;i<a.length;i++)t.push(a[i].clone());return t}function I0(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const sb={clone:Fs,merge:On};var ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends lu{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ob,this.fragmentShader=lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=rb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class F0 extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=ra}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new rt,hv=new Re,pv=new Re;class Si extends F0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=rl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z)}getViewSize(t,i){return this.getViewBounds(t,hv,pv),i.subVectors(pv,hv)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(el*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Rs=-90,ws=1;class cb extends Qn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Rs,ws,t,i);l.layers=this.layers,this.add(l);const c=new Si(Rs,ws,t,i);c.layers=this.layers,this.add(c);const f=new Si(Rs,ws,t,i);f.layers=this.layers,this.add(f);const d=new Si(Rs,ws,t,i);d.layers=this.layers,this.add(d);const m=new Si(Rs,ws,t,i);m.layers=this.layers,this.add(m);const p=new Si(Rs,ws,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===ra)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===eu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,S,M),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class H0 extends Gn{constructor(t,i,r,l,c,f,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:Ps,super(t,i,r,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ub extends Ur{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new H0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:yi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ul(5,5,5),c=new la({name:"CubemapFromEquirect",uniforms:Fs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Ga});c.uniforms.tEquirect.value=i;const f=new Ni(l,c),d=i.minFilter;return i.minFilter===Ar&&(i.minFilter=yi),new cb(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i,r,l){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}const Xd=new rt,fb=new rt,db=new ue;class yr{constructor(t=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Xd.subVectors(r,i).cross(fb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Xd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||db.getNormalMatrix(t),l=this.coplanarPoint(Xd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new ip,Bc=new rt;class G0{constructor(t=new yr,i=new yr,r=new yr,l=new yr,c=new yr,f=new yr){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ra){const r=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],m=l[3],p=l[4],g=l[5],_=l[6],S=l[7],M=l[8],E=l[9],b=l[10],v=l[11],x=l[12],L=l[13],D=l[14],O=l[15];if(r[0].setComponents(m-c,S-p,v-M,O-x).normalize(),r[1].setComponents(m+c,S+p,v+M,O+x).normalize(),r[2].setComponents(m+f,S+g,v+E,O+L).normalize(),r[3].setComponents(m-f,S-g,v-E,O-L).normalize(),r[4].setComponents(m-d,S-_,v-b,O-D).normalize(),i===ra)r[5].setComponents(m+d,S+_,v+b,O+D).normalize();else if(i===eu)r[5].setComponents(d,_,b,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Bc.x=l.normal.x>0?t.max.x:t.min.x,Bc.y=l.normal.y>0?t.max.y:t.min.y,Bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function V0(){let a=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=a.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=a.requestAnimationFrame(l),t=!0)},stop:function(){a.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function hb(a){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,S=a.createBuffer();a.bindBuffer(m,S),a.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=a.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=a.HALF_FLOAT:M=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=a.SHORT;else if(p instanceof Uint32Array)M=a.UNSIGNED_INT;else if(p instanceof Int32Array)M=a.INT;else if(p instanceof Int8Array)M=a.BYTE;else if(p instanceof Uint8Array)M=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const g=m.array,_=m._updateRange,S=m.updateRanges;if(a.bindBuffer(p,d),_.count===-1&&S.length===0&&a.bufferSubData(p,0,g),S.length!==0){for(let M=0,E=S.length;M<E;M++){const b=S[M];a.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}_.count!==-1&&(a.bufferSubData(p,_.offset*g.BYTES_PER_ELEMENT,g,_.offset,_.count),_.count=-1),m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(a.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}class fl extends Nr{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,_=t/d,S=i/m,M=[],E=[],b=[],v=[];for(let x=0;x<g;x++){const L=x*S-f;for(let D=0;D<p;D++){const O=D*_-c;E.push(O,-L,0),b.push(0,0,1),v.push(D/d),v.push(1-x/m)}}for(let x=0;x<m;x++)for(let L=0;L<d;L++){const D=L+p*x,O=L+p*(x+1),k=L+1+p*(x+1),N=L+1+p*x;M.push(D,O,N),M.push(O,k,N)}this.setIndex(M),this.setAttribute("position",new wr(E,3)),this.setAttribute("normal",new wr(b,3)),this.setAttribute("uv",new wr(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.width,t.height,t.widthSegments,t.heightSegments)}}var pb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mb=`#ifdef USE_ALPHAHASH
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
#endif`,gb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sb=`#ifdef USE_AOMAP
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
#endif`,yb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mb=`#ifdef USE_BATCHING
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
#endif`,Eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ab=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rb=`#ifdef USE_IRIDESCENCE
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
#endif`,wb=`#ifdef USE_BUMPMAP
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
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bb=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Ib=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fb=`vec3 transformedNormal = objectNormal;
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
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qb=`#ifdef USE_ENVMAP
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
#endif`,Yb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$b=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eT=`#ifdef USE_GRADIENTMAP
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
}`,nT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rT=`uniform bool receiveShadow;
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
#endif`,sT=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,oT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fT=`PhysicalMaterial material;
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
#endif`,dT=`struct PhysicalMaterial {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,hT=`
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
#endif`,pT=`#if defined( RE_IndirectDiffuse )
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
#endif`,mT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_T=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ST=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ET=`#if defined( USE_POINTS_UV )
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
#endif`,bT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CT=`#ifdef USE_MORPHTARGETS
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
#endif`,DT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,NT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zT=`#ifdef USE_NORMALMAP
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
#endif`,BT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,KT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JT=`float getShadowMask() {
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
}`,$T=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tA=`#ifdef USE_SKINNING
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
#endif`,eA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nA=`#ifdef USE_SKINNING
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
#endif`,iA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sA=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oA=`#ifdef USE_TRANSMISSION
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
#endif`,lA=`#ifdef USE_TRANSMISSION
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
#endif`,cA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pA=`uniform sampler2D t2D;
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
}`,mA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xA=`#include <common>
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
}`,SA=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yA=`#define DISTANCE
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
}`,MA=`#define DISTANCE
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
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`uniform float scale;
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
}`,AA=`uniform vec3 diffuse;
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
}`,RA=`#include <common>
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
}`,wA=`uniform vec3 diffuse;
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
}`,CA=`#define LAMBERT
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
}`,DA=`#define LAMBERT
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
}`,UA=`#define MATCAP
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
}`,LA=`#define MATCAP
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
}`,NA=`#define NORMAL
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
}`,OA=`#define NORMAL
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
}`,PA=`#define PHONG
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
}`,zA=`#define PHONG
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
}`,BA=`#define STANDARD
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
}`,IA=`#define STANDARD
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
}`,FA=`#define TOON
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
}`,HA=`#define TOON
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
}`,GA=`uniform float size;
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
}`,VA=`uniform vec3 diffuse;
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
}`,kA=`#include <common>
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
}`,XA=`uniform vec3 color;
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
}`,WA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,qA=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:pb,alphahash_pars_fragment:mb,alphamap_fragment:gb,alphamap_pars_fragment:_b,alphatest_fragment:vb,alphatest_pars_fragment:xb,aomap_fragment:Sb,aomap_pars_fragment:yb,batching_pars_vertex:Mb,batching_vertex:Eb,begin_vertex:bb,beginnormal_vertex:Tb,bsdfs:Ab,iridescence_fragment:Rb,bumpmap_pars_fragment:wb,clipping_planes_fragment:Cb,clipping_planes_pars_fragment:Db,clipping_planes_pars_vertex:Ub,clipping_planes_vertex:Lb,color_fragment:Nb,color_pars_fragment:Ob,color_pars_vertex:Pb,color_vertex:zb,common:Bb,cube_uv_reflection_fragment:Ib,defaultnormal_vertex:Fb,displacementmap_pars_vertex:Hb,displacementmap_vertex:Gb,emissivemap_fragment:Vb,emissivemap_pars_fragment:kb,colorspace_fragment:Xb,colorspace_pars_fragment:Wb,envmap_fragment:qb,envmap_common_pars_fragment:Yb,envmap_pars_fragment:jb,envmap_pars_vertex:Zb,envmap_physical_pars_fragment:sT,envmap_vertex:Kb,fog_vertex:Qb,fog_pars_vertex:Jb,fog_fragment:$b,fog_pars_fragment:tT,gradientmap_pars_fragment:eT,lightmap_pars_fragment:nT,lights_lambert_fragment:iT,lights_lambert_pars_fragment:aT,lights_pars_begin:rT,lights_toon_fragment:oT,lights_toon_pars_fragment:lT,lights_phong_fragment:cT,lights_phong_pars_fragment:uT,lights_physical_fragment:fT,lights_physical_pars_fragment:dT,lights_fragment_begin:hT,lights_fragment_maps:pT,lights_fragment_end:mT,logdepthbuf_fragment:gT,logdepthbuf_pars_fragment:_T,logdepthbuf_pars_vertex:vT,logdepthbuf_vertex:xT,map_fragment:ST,map_pars_fragment:yT,map_particle_fragment:MT,map_particle_pars_fragment:ET,metalnessmap_fragment:bT,metalnessmap_pars_fragment:TT,morphinstance_vertex:AT,morphcolor_vertex:RT,morphnormal_vertex:wT,morphtarget_pars_vertex:CT,morphtarget_vertex:DT,normal_fragment_begin:UT,normal_fragment_maps:LT,normal_pars_fragment:NT,normal_pars_vertex:OT,normal_vertex:PT,normalmap_pars_fragment:zT,clearcoat_normal_fragment_begin:BT,clearcoat_normal_fragment_maps:IT,clearcoat_pars_fragment:FT,iridescence_pars_fragment:HT,opaque_fragment:GT,packing:VT,premultiplied_alpha_fragment:kT,project_vertex:XT,dithering_fragment:WT,dithering_pars_fragment:qT,roughnessmap_fragment:YT,roughnessmap_pars_fragment:jT,shadowmap_pars_fragment:ZT,shadowmap_pars_vertex:KT,shadowmap_vertex:QT,shadowmask_pars_fragment:JT,skinbase_vertex:$T,skinning_pars_vertex:tA,skinning_vertex:eA,skinnormal_vertex:nA,specularmap_fragment:iA,specularmap_pars_fragment:aA,tonemapping_fragment:rA,tonemapping_pars_fragment:sA,transmission_fragment:oA,transmission_pars_fragment:lA,uv_pars_fragment:cA,uv_pars_vertex:uA,uv_vertex:fA,worldpos_vertex:dA,background_vert:hA,background_frag:pA,backgroundCube_vert:mA,backgroundCube_frag:gA,cube_vert:_A,cube_frag:vA,depth_vert:xA,depth_frag:SA,distanceRGBA_vert:yA,distanceRGBA_frag:MA,equirect_vert:EA,equirect_frag:bA,linedashed_vert:TA,linedashed_frag:AA,meshbasic_vert:RA,meshbasic_frag:wA,meshlambert_vert:CA,meshlambert_frag:DA,meshmatcap_vert:UA,meshmatcap_frag:LA,meshnormal_vert:NA,meshnormal_frag:OA,meshphong_vert:PA,meshphong_frag:zA,meshphysical_vert:BA,meshphysical_frag:IA,meshtoon_vert:FA,meshtoon_frag:HA,points_vert:GA,points_frag:VA,shadow_vert:kA,shadow_frag:XA,sprite_vert:WA,sprite_frag:qA},Nt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ui={basic:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ze(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:On([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:On([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ze(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:On([Nt.points,Nt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:On([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:On([Nt.common,Nt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:On([Nt.sprite,Nt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:On([Nt.common,Nt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:On([Nt.lights,Nt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ui.physical={uniforms:On([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Ic={r:0,b:0,g:0},vr=new oa,YA=new un;function jA(a,t,i,r,l,c,f){const d=new ze(0);let m=c===!0?0:1,p,g,_=null,S=0,M=null;function E(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:t).get(D)),D}function b(L){let D=!1;const O=E(L);O===null?x(d,m):O&&O.isColor&&(x(O,1),D=!0);const k=a.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,f):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(a.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function v(L,D){const O=E(D);O&&(O.isCubeTexture||O.mapping===su)?(g===void 0&&(g=new Ni(new ul(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:Fs(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),vr.copy(D.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),g.material.uniforms.envMap.value=O,g.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(YA.makeRotationFromEuler(vr)),g.material.toneMapped=Ue.getTransfer(O.colorSpace)!==Ve,(_!==O||S!==O.version||M!==a.toneMapping)&&(g.material.needsUpdate=!0,_=O,S=O.version,M=a.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Ni(new fl(2,2),new la({name:"BackgroundMaterial",uniforms:Fs(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(O.colorSpace)!==Ve,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||S!==O.version||M!==a.toneMapping)&&(p.material.needsUpdate=!0,_=O,S=O.version,M=a.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,D){L.getRGB(Ic,I0(a)),r.buffers.color.setClear(Ic.r,Ic.g,Ic.b,D,f)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(d,m)},render:b,addToRenderList:v}}function ZA(a,t){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,f=!1;function d(T,H,st,$,ft){let lt=!1;const F=_($,st,H);c!==F&&(c=F,p(c.object)),lt=M(T,$,st,ft),lt&&E(T,$,st,ft),ft!==null&&t.update(ft,a.ELEMENT_ARRAY_BUFFER),(lt||f)&&(f=!1,O(T,H,st,$),ft!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return a.createVertexArray()}function p(T){return a.bindVertexArray(T)}function g(T){return a.deleteVertexArray(T)}function _(T,H,st){const $=st.wireframe===!0;let ft=r[T.id];ft===void 0&&(ft={},r[T.id]=ft);let lt=ft[H.id];lt===void 0&&(lt={},ft[H.id]=lt);let F=lt[$];return F===void 0&&(F=S(m()),lt[$]=F),F}function S(T){const H=[],st=[],$=[];for(let ft=0;ft<i;ft++)H[ft]=0,st[ft]=0,$[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:st,attributeDivisors:$,object:T,attributes:{},index:null}}function M(T,H,st,$){const ft=c.attributes,lt=H.attributes;let F=0;const nt=st.getAttributes();for(const W in nt)if(nt[W].location>=0){const U=ft[W];let J=lt[W];if(J===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(J=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(J=T.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;F++}return c.attributesNum!==F||c.index!==$}function E(T,H,st,$){const ft={},lt=H.attributes;let F=0;const nt=st.getAttributes();for(const W in nt)if(nt[W].location>=0){let U=lt[W];U===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(U=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(U=T.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),ft[W]=J,F++}c.attributes=ft,c.attributesNum=F,c.index=$}function b(){const T=c.newAttributes;for(let H=0,st=T.length;H<st;H++)T[H]=0}function v(T){x(T,0)}function x(T,H){const st=c.newAttributes,$=c.enabledAttributes,ft=c.attributeDivisors;st[T]=1,$[T]===0&&(a.enableVertexAttribArray(T),$[T]=1),ft[T]!==H&&(a.vertexAttribDivisor(T,H),ft[T]=H)}function L(){const T=c.newAttributes,H=c.enabledAttributes;for(let st=0,$=H.length;st<$;st++)H[st]!==T[st]&&(a.disableVertexAttribArray(st),H[st]=0)}function D(T,H,st,$,ft,lt,F){F===!0?a.vertexAttribIPointer(T,H,st,ft,lt):a.vertexAttribPointer(T,H,st,$,ft,lt)}function O(T,H,st,$){b();const ft=$.attributes,lt=st.getAttributes(),F=H.defaultAttributeValues;for(const nt in lt){const W=lt[nt];if(W.location>=0){let gt=ft[nt];if(gt===void 0&&(nt==="instanceMatrix"&&T.instanceMatrix&&(gt=T.instanceMatrix),nt==="instanceColor"&&T.instanceColor&&(gt=T.instanceColor)),gt!==void 0){const U=gt.normalized,J=gt.itemSize,Et=t.get(gt);if(Et===void 0)continue;const wt=Et.buffer,X=Et.type,ct=Et.bytesPerElement,_t=X===a.INT||X===a.UNSIGNED_INT||gt.gpuType===Zh;if(gt.isInterleavedBufferAttribute){const At=gt.data,Ot=At.stride,kt=gt.offset;if(At.isInstancedInterleavedBuffer){for(let Gt=0;Gt<W.locationSize;Gt++)x(W.location+Gt,At.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Gt=0;Gt<W.locationSize;Gt++)v(W.location+Gt);a.bindBuffer(a.ARRAY_BUFFER,wt);for(let Gt=0;Gt<W.locationSize;Gt++)D(W.location+Gt,J/W.locationSize,X,U,Ot*ct,(kt+J/W.locationSize*Gt)*ct,_t)}else{if(gt.isInstancedBufferAttribute){for(let At=0;At<W.locationSize;At++)x(W.location+At,gt.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let At=0;At<W.locationSize;At++)v(W.location+At);a.bindBuffer(a.ARRAY_BUFFER,wt);for(let At=0;At<W.locationSize;At++)D(W.location+At,J/W.locationSize,X,U,J*ct,J/W.locationSize*At*ct,_t)}}else if(F!==void 0){const U=F[nt];if(U!==void 0)switch(U.length){case 2:a.vertexAttrib2fv(W.location,U);break;case 3:a.vertexAttrib3fv(W.location,U);break;case 4:a.vertexAttrib4fv(W.location,U);break;default:a.vertexAttrib1fv(W.location,U)}}}}L()}function k(){K();for(const T in r){const H=r[T];for(const st in H){const $=H[st];for(const ft in $)g($[ft].object),delete $[ft];delete H[st]}delete r[T]}}function N(T){if(r[T.id]===void 0)return;const H=r[T.id];for(const st in H){const $=H[st];for(const ft in $)g($[ft].object),delete $[ft];delete H[st]}delete r[T.id]}function B(T){for(const H in r){const st=r[H];if(st[T.id]===void 0)continue;const $=st[T.id];for(const ft in $)g($[ft].object),delete $[ft];delete st[T.id]}}function K(){w(),f=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:v,disableUnusedAttributes:L}}function KA(a,t,i){let r;function l(p){r=p}function c(p,g){a.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,_){_!==0&&(a.drawArraysInstanced(r,p,g,_),i.update(g,r,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];i.update(M,r,1)}function m(p,g,_,S){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],g[E],S[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b];for(let b=0;b<S.length;b++)i.update(E,r,S[b])}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function QA(a,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");l=a.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(N){return!(N!==Mi&&r.convert(N)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const B=N===ol&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==sa&&r.convert(N)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==aa&&!B)}function m(N){if(N==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_TEXTURE_SIZE),b=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),x=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),L=a.getParameter(a.MAX_VARYING_VECTORS),D=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),O=M>0,k=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,maxTextures:S,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:b,maxAttributes:v,maxVertexUniforms:x,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:O,maxSamples:k}}function JA(a){const t=this;let i=null,r=0,l=!1,c=!1;const f=new yr,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||r!==0||l;return l=S,r=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,M){const E=_.clippingPlanes,b=_.clipIntersection,v=_.clipShadows,x=a.get(_);if(!l||E===null||E.length===0||c&&!v)c?g(null):p();else{const L=c?0:r,D=L*4;let O=x.clippingState||null;m.value=O,O=g(E,S,D,M);for(let k=0;k!==D;++k)O[k]=i[k];x.clippingState=O,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,S,M,E){const b=_!==null?_.length:0;let v=null;if(b!==0){if(v=m.value,E!==!0||v===null){const x=M+b*4,L=S.matrixWorldInverse;d.getNormalMatrix(L),(v===null||v.length<x)&&(v=new Float32Array(x));for(let D=0,O=M;D!==b;++D,O+=4)f.copy(_[D]).applyMatrix4(L,d),f.normal.toArray(v,O),v[O+3]=f.constant}m.value=v,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,v}}function $A(a){let t=new WeakMap;function i(f,d){return d===oh?f.mapping=Ps:d===lh&&(f.mapping=zs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===oh||d===lh)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new ub(m.height);return p.fromEquirectangularTexture(a,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}class k0 extends F0{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Us=4,mv=[.125,.215,.35,.446,.526,.582],br=20,Wd=new k0,gv=new ze;let qd=null,Yd=0,jd=0,Zd=!1;const Mr=(1+Math.sqrt(5))/2,Cs=1/Mr,_v=[new rt(-Mr,Cs,0),new rt(Mr,Cs,0),new rt(-Cs,0,Mr),new rt(Cs,0,Mr),new rt(0,Mr,-Cs),new rt(0,Mr,Cs),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)];class vv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){qd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qd,Yd,jd),this._renderer.xr.enabled=Zd,t.scissorTest=!1,Fc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ps||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:ol,format:Mi,colorSpace:Xa,depthBuffer:!1},l=xv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t1(c)),this._blurMaterial=e1(c,t,i)}return l}_compileMaterial(t){const i=new Ni(this._lodPlanes[0],t);this._renderer.compile(i,Wd)}_sceneToCubeUV(t,i,r,l){const d=new Si(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,S=g.toneMapping;g.getClearColor(gv),g.toneMapping=Va,g.autoClear=!1;const M=new P0({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),E=new Ni(new ul,M);let b=!1;const v=t.background;v?v.isColor&&(M.color.copy(v),t.background=null,b=!0):(M.color.copy(gv),b=!0);for(let x=0;x<6;x++){const L=x%3;L===0?(d.up.set(0,m[x],0),d.lookAt(p[x],0,0)):L===1?(d.up.set(0,0,m[x]),d.lookAt(0,p[x],0)):(d.up.set(0,m[x],0),d.lookAt(0,0,p[x]));const D=this._cubeSize;Fc(l,L*D,x>2?D:0,D,D),g.setRenderTarget(l),b&&g.render(E,d),g.render(t,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=S,g.autoClear=_,t.background=v}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ps||t.mapping===zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=yv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Ni(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Fc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Wd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=_v[(l-c-1)%_v.length];this._blur(t,c-1,c,f,d)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Ni(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*br-1),b=c/E,v=isFinite(c)?1+Math.floor(g*b):br;v>br&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${br}`);const x=[];let L=0;for(let B=0;B<br;++B){const K=B/b,w=Math.exp(-K*K/2);x.push(w),B===0?L+=w:B<v&&(L+=2*w)}for(let B=0;B<x.length;B++)x[B]=x[B]/L;S.envMap.value=t.texture,S.samples.value=v,S.weights.value=x,S.latitudinal.value=f==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:D}=this;S.dTheta.value=E,S.mipInt.value=D-r;const O=this._sizeLods[l],k=3*O*(l>D-Us?l-D+Us:0),N=4*(this._cubeSize-O);Fc(i,k,N,3*O,2*O),m.setRenderTarget(i),m.render(_,Wd)}}function t1(a){const t=[],i=[],r=[];let l=a;const c=a-Us+1+mv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>a-Us?m=mv[f-a+Us-1]:f===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,_=1+p,S=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,b=3,v=2,x=1,L=new Float32Array(b*E*M),D=new Float32Array(v*E*M),O=new Float32Array(x*E*M);for(let N=0;N<M;N++){const B=N%3*2/3-1,K=N>2?0:-1,w=[B,K,0,B+2/3,K,0,B+2/3,K+1,0,B,K,0,B+2/3,K+1,0,B,K+1,0];L.set(w,b*E*N),D.set(S,v*E*N);const T=[N,N,N,N,N,N];O.set(T,x*E*N)}const k=new Nr;k.setAttribute("position",new Oi(L,b)),k.setAttribute("uv",new Oi(D,v)),k.setAttribute("faceIndex",new Oi(O,x)),t.push(k),l>Us&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function xv(a,t,i){const r=new Ur(a,t,i);return r.texture.mapping=su,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Fc(a,t,i,r,l){a.viewport.set(t,i,r,l),a.scissor.set(t,i,r,l)}function e1(a,t,i){const r=new Float32Array(br),l=new rt(0,1,0);return new la({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ap(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Sv(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ap(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function yv(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function ap(){return`

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
	`}function n1(a){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===oh||m===lh,g=m===Ps||m===zs;if(p||g){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new vv(a)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new vv(a)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function i1(a){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&il("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function a1(a,t,i,r){const l={},c=new WeakMap;function f(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const E in S.attributes)t.remove(S.attributes[E]);for(const E in S.morphAttributes){const b=S.morphAttributes[E];for(let v=0,x=b.length;v<x;v++)t.remove(b[v])}S.removeEventListener("dispose",f),delete l[S.id];const M=c.get(S);M&&(t.remove(M),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",f),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const E in S)t.update(S[E],a.ARRAY_BUFFER);const M=_.morphAttributes;for(const E in M){const b=M[E];for(let v=0,x=b.length;v<x;v++)t.update(b[v],a.ARRAY_BUFFER)}}function p(_){const S=[],M=_.index,E=_.attributes.position;let b=0;if(M!==null){const L=M.array;b=M.version;for(let D=0,O=L.length;D<O;D+=3){const k=L[D+0],N=L[D+1],B=L[D+2];S.push(k,N,N,B,B,k)}}else if(E!==void 0){const L=E.array;b=E.version;for(let D=0,O=L.length/3-1;D<O;D+=3){const k=D+0,N=D+1,B=D+2;S.push(k,N,N,B,B,k)}}else return;const v=new(D0(S)?B0:z0)(S,1);v.version=b;const x=c.get(_);x&&t.remove(x),c.set(_,v)}function g(_){const S=c.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function r1(a,t,i){let r;function l(S){r=S}let c,f;function d(S){c=S.type,f=S.bytesPerElement}function m(S,M){a.drawElements(r,M,c,S*f),i.update(M,r,1)}function p(S,M,E){E!==0&&(a.drawElementsInstanced(r,M,c,S*f,E),i.update(M,r,E))}function g(S,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,S,0,E);let v=0;for(let x=0;x<E;x++)v+=M[x];i.update(v,r,1)}function _(S,M,E,b){if(E===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<S.length;x++)p(S[x]/f,M[x],b[x]);else{v.multiDrawElementsInstancedWEBGL(r,M,0,c,S,0,b,0,E);let x=0;for(let L=0;L<E;L++)x+=M[L];for(let L=0;L<b.length;L++)i.update(x,r,b[L])}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function s1(a){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case a.TRIANGLES:i.triangles+=d*(c/3);break;case a.LINES:i.lines+=d*(c/2);break;case a.LINE_STRIP:i.lines+=d*(c-1);break;case a.LINE_LOOP:i.lines+=d*c;break;case a.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function o1(a,t,i){const r=new WeakMap,l=new vn;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==_){let T=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",T)};var M=T;S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let O=0;E===!0&&(O=1),b===!0&&(O=2),v===!0&&(O=3);let k=d.attributes.position.count*O,N=1;k>t.maxTextureSize&&(N=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const B=new Float32Array(k*N*4*_),K=new L0(B,k,N,_);K.type=aa,K.needsUpdate=!0;const w=O*4;for(let H=0;H<_;H++){const st=x[H],$=L[H],ft=D[H],lt=k*N*4*H;for(let F=0;F<st.count;F++){const nt=F*w;E===!0&&(l.fromBufferAttribute(st,F),B[lt+nt+0]=l.x,B[lt+nt+1]=l.y,B[lt+nt+2]=l.z,B[lt+nt+3]=0),b===!0&&(l.fromBufferAttribute($,F),B[lt+nt+4]=l.x,B[lt+nt+5]=l.y,B[lt+nt+6]=l.z,B[lt+nt+7]=0),v===!0&&(l.fromBufferAttribute(ft,F),B[lt+nt+8]=l.x,B[lt+nt+9]=l.y,B[lt+nt+10]=l.z,B[lt+nt+11]=ft.itemSize===4?l.w:1)}}S={count:_,texture:K,size:new Re(k,N)},r.set(d,S),d.addEventListener("dispose",T)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,i);else{let E=0;for(let v=0;v<p.length;v++)E+=p[v];const b=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",b),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",S.size)}return{update:c}}function l1(a,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,a.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}class X0 extends Gn{constructor(t,i,r,l,c,f,d,m,p,g=Ns){if(g!==Ns&&g!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Ns&&(r=Dr),r===void 0&&g===Is&&(r=Bs),super(null,l,c,f,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:fi,this.minFilter=m!==void 0?m:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const W0=new Gn,Mv=new X0(1,1),q0=new L0,Y0=new YE,j0=new H0,Ev=[],bv=[],Tv=new Float32Array(16),Av=new Float32Array(9),Rv=new Float32Array(4);function Ws(a,t,i){const r=a[0];if(r<=0||r>0)return a;const l=t*i;let c=Ev[l];if(c===void 0&&(c=new Float32Array(l),Ev[l]=c),t!==0){r.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,a[f].toArray(c,d)}return c}function fn(a,t){if(a.length!==t.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==t[i])return!1;return!0}function dn(a,t){for(let i=0,r=t.length;i<r;i++)a[i]=t[i]}function cu(a,t){let i=bv[t];i===void 0&&(i=new Int32Array(t),bv[t]=i);for(let r=0;r!==t;++r)i[r]=a.allocateTextureUnit();return i}function c1(a,t){const i=this.cache;i[0]!==t&&(a.uniform1f(this.addr,t),i[0]=t)}function u1(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;a.uniform2fv(this.addr,t),dn(i,t)}}function f1(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;a.uniform3fv(this.addr,t),dn(i,t)}}function d1(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;a.uniform4fv(this.addr,t),dn(i,t)}}function h1(a,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;a.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(fn(i,r))return;Rv.set(r),a.uniformMatrix2fv(this.addr,!1,Rv),dn(i,r)}}function p1(a,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;a.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(fn(i,r))return;Av.set(r),a.uniformMatrix3fv(this.addr,!1,Av),dn(i,r)}}function m1(a,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;a.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(fn(i,r))return;Tv.set(r),a.uniformMatrix4fv(this.addr,!1,Tv),dn(i,r)}}function g1(a,t){const i=this.cache;i[0]!==t&&(a.uniform1i(this.addr,t),i[0]=t)}function _1(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;a.uniform2iv(this.addr,t),dn(i,t)}}function v1(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;a.uniform3iv(this.addr,t),dn(i,t)}}function x1(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;a.uniform4iv(this.addr,t),dn(i,t)}}function S1(a,t){const i=this.cache;i[0]!==t&&(a.uniform1ui(this.addr,t),i[0]=t)}function y1(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;a.uniform2uiv(this.addr,t),dn(i,t)}}function M1(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;a.uniform3uiv(this.addr,t),dn(i,t)}}function E1(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;a.uniform4uiv(this.addr,t),dn(i,t)}}function b1(a,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(Mv.compareFunction=C0,c=Mv):c=W0,i.setTexture2D(t||c,l)}function T1(a,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Y0,l)}function A1(a,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||j0,l)}function R1(a,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||q0,l)}function w1(a){switch(a){case 5126:return c1;case 35664:return u1;case 35665:return f1;case 35666:return d1;case 35674:return h1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return _1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return S1;case 36294:return y1;case 36295:return M1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return R1}}function C1(a,t){a.uniform1fv(this.addr,t)}function D1(a,t){const i=Ws(t,this.size,2);a.uniform2fv(this.addr,i)}function U1(a,t){const i=Ws(t,this.size,3);a.uniform3fv(this.addr,i)}function L1(a,t){const i=Ws(t,this.size,4);a.uniform4fv(this.addr,i)}function N1(a,t){const i=Ws(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function O1(a,t){const i=Ws(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function P1(a,t){const i=Ws(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function z1(a,t){a.uniform1iv(this.addr,t)}function B1(a,t){a.uniform2iv(this.addr,t)}function I1(a,t){a.uniform3iv(this.addr,t)}function F1(a,t){a.uniform4iv(this.addr,t)}function H1(a,t){a.uniform1uiv(this.addr,t)}function G1(a,t){a.uniform2uiv(this.addr,t)}function V1(a,t){a.uniform3uiv(this.addr,t)}function k1(a,t){a.uniform4uiv(this.addr,t)}function X1(a,t,i){const r=this.cache,l=t.length,c=cu(i,l);fn(r,c)||(a.uniform1iv(this.addr,c),dn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||W0,c[f])}function W1(a,t,i){const r=this.cache,l=t.length,c=cu(i,l);fn(r,c)||(a.uniform1iv(this.addr,c),dn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Y0,c[f])}function q1(a,t,i){const r=this.cache,l=t.length,c=cu(i,l);fn(r,c)||(a.uniform1iv(this.addr,c),dn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||j0,c[f])}function Y1(a,t,i){const r=this.cache,l=t.length,c=cu(i,l);fn(r,c)||(a.uniform1iv(this.addr,c),dn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||q0,c[f])}function j1(a){switch(a){case 5126:return C1;case 35664:return D1;case 35665:return U1;case 35666:return L1;case 35674:return N1;case 35675:return O1;case 35676:return P1;case 5124:case 35670:return z1;case 35667:case 35671:return B1;case 35668:case 35672:return I1;case 35669:case 35673:return F1;case 5125:return H1;case 36294:return G1;case 36295:return V1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Y1}}class Z1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=w1(i.type)}}class K1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=j1(i.type)}}class Q1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Kd=/(\w+)(\])?(\[|\.)?/g;function wv(a,t){a.seq.push(t),a.map[t.id]=t}function J1(a,t,i){const r=a.name,l=r.length;for(Kd.lastIndex=0;;){const c=Kd.exec(r),f=Kd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){wv(i,p===void 0?new Z1(d,a,t):new K1(d,a,t));break}else{let _=i.map[d];_===void 0&&(_=new Q1(d),wv(i,_)),i=_}}}class Yc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);J1(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function Cv(a,t,i){const r=a.createShader(t);return a.shaderSource(r,i),a.compileShader(r),r}const $1=37297;let tR=0;function eR(a,t){const i=a.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}function nR(a){const t=Ue.getPrimaries(Ue.workingColorSpace),i=Ue.getPrimaries(a);let r;switch(t===i?r="":t===tu&&i===$c?r="LinearDisplayP3ToLinearSRGB":t===$c&&i===tu&&(r="LinearSRGBToLinearDisplayP3"),a){case Xa:case ou:return[r,"LinearTransferOETF"];case Di:case ep:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[r,"LinearTransferOETF"]}}function Dv(a,t,i){const r=a.getShaderParameter(t,a.COMPILE_STATUS),l=a.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+eR(a.getShaderSource(t),f)}else return l}function iR(a,t){const i=nR(t);return`vec4 ${a}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function aR(a,t){let i;switch(t){case rE:i="Linear";break;case sE:i="Reinhard";break;case oE:i="OptimizedCineon";break;case lE:i="ACESFilmic";break;case uE:i="AgX";break;case fE:i="Neutral";break;case cE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new rt;function rR(){Ue.getLuminanceCoefficients(Hc);const a=Hc.x.toFixed(4),t=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sR(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function oR(a){const t=[];for(const i in a){const r=a[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function lR(a,t){const i={},r=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=a.getActiveAttrib(t,l),f=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:a.getAttribLocation(t,f),locationSize:d}}return i}function tl(a){return a!==""}function Uv(a,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lv(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(a){return a.replace(cR,fR)}const uR=new Map;function fR(a,t){let i=ce[t];if(i===void 0){const r=uR.get(t);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Bh(i)}const dR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nv(a){return a.replace(dR,hR)}function hR(a,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Ov(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pR(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===g0?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===UM?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===na&&(t="SHADOWMAP_TYPE_VSM"),t}function mR(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ps:case zs:t="ENVMAP_TYPE_CUBE";break;case su:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gR(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case zs:t="ENVMAP_MODE_REFRACTION";break}return t}function _R(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case _0:t="ENVMAP_BLENDING_MULTIPLY";break;case iE:t="ENVMAP_BLENDING_MIX";break;case aE:t="ENVMAP_BLENDING_ADD";break}return t}function vR(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function xR(a,t,i,r){const l=a.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=pR(i),p=mR(i),g=gR(i),_=_R(i),S=vR(i),M=sR(i),E=oR(c),b=l.createProgram();let v,x,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(tl).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(tl).join(`
`),x.length>0&&(x+=`
`)):(v=[Ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),x=[Ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?ce.tonemapping_pars_fragment:"",i.toneMapping!==Va?aR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,iR("linearToOutputTexel",i.outputColorSpace),rR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(tl).join(`
`)),f=Bh(f),f=Uv(f,i),f=Lv(f,i),d=Bh(d),d=Uv(d,i),d=Lv(d,i),f=Nv(f),d=Nv(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",i.glslVersion===Y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=L+v+f,O=L+x+d,k=Cv(l,l.VERTEX_SHADER,D),N=Cv(l,l.FRAGMENT_SHADER,O);l.attachShader(b,k),l.attachShader(b,N),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function B(H){if(a.debug.checkShaderErrors){const st=l.getProgramInfoLog(b).trim(),$=l.getShaderInfoLog(k).trim(),ft=l.getShaderInfoLog(N).trim();let lt=!0,F=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(lt=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,b,k,N);else{const nt=Dv(l,k,"vertex"),W=Dv(l,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+nt+`
`+W)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):($===""||ft==="")&&(F=!1);F&&(H.diagnostics={runnable:lt,programLog:st,vertexShader:{log:$,prefix:v},fragmentShader:{log:ft,prefix:x}})}l.deleteShader(k),l.deleteShader(N),K=new Yc(l,b),w=lR(l,b)}let K;this.getUniforms=function(){return K===void 0&&B(this),K};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(b,$1)),T},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tR++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=k,this.fragmentShader=N,this}let SR=0;class yR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new MR(t),i.set(t,r)),r}}class MR{constructor(t){this.id=SR++,this.code=t,this.usedTimes=0}}function ER(a,t,i,r,l,c,f){const d=new N0,m=new yR,p=new Set,g=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return p.add(w),w===0?"uv":`uv${w}`}function v(w,T,H,st,$){const ft=st.fog,lt=$.geometry,F=w.isMeshStandardMaterial?st.environment:null,nt=(w.isMeshStandardMaterial?i:t).get(w.envMap||F),W=nt&&nt.mapping===su?nt.image.height:null,gt=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const U=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,J=U!==void 0?U.length:0;let Et=0;lt.morphAttributes.position!==void 0&&(Et=1),lt.morphAttributes.normal!==void 0&&(Et=2),lt.morphAttributes.color!==void 0&&(Et=3);let wt,X,ct,_t;if(gt){const Te=Ui[gt];wt=Te.vertexShader,X=Te.fragmentShader}else wt=w.vertexShader,X=w.fragmentShader,m.update(w),ct=m.getVertexShaderID(w),_t=m.getFragmentShaderID(w);const At=a.getRenderTarget(),Ot=$.isInstancedMesh===!0,kt=$.isBatchedMesh===!0,Gt=!!w.map,Ee=!!w.matcap,I=!!nt,Le=!!w.aoMap,ye=!!w.lightMap,be=!!w.bumpMap,Vt=!!w.normalMap,ke=!!w.displacementMap,ee=!!w.emissiveMap,ie=!!w.metalnessMap,z=!!w.roughnessMap,A=w.anisotropy>0,at=w.clearcoat>0,yt=w.dispersion>0,xt=w.iridescence>0,St=w.sheen>0,Kt=w.transmission>0,Ut=A&&!!w.anisotropyMap,Pt=at&&!!w.clearcoatMap,se=at&&!!w.clearcoatNormalMap,bt=at&&!!w.clearcoatRoughnessMap,Bt=xt&&!!w.iridescenceMap,_e=xt&&!!w.iridescenceThicknessMap,Qt=St&&!!w.sheenColorMap,Dt=St&&!!w.sheenRoughnessMap,ae=!!w.specularMap,ne=!!w.specularColorMap,pe=!!w.specularIntensityMap,q=Kt&&!!w.transmissionMap,Tt=Kt&&!!w.thicknessMap,ht=!!w.gradientMap,mt=!!w.alphaMap,Rt=w.alphaTest>0,Zt=!!w.alphaHash,de=!!w.extensions;let Ie=Va;w.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Ie=a.toneMapping);const rn={shaderID:gt,shaderType:w.type,shaderName:w.name,vertexShader:wt,fragmentShader:X,defines:w.defines,customVertexShaderID:ct,customFragmentShaderID:_t,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:kt,batchingColor:kt&&$._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&$.instanceColor!==null,instancingMorph:Ot&&$.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:At===null?a.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Xa,alphaToCoverage:!!w.alphaToCoverage,map:Gt,matcap:Ee,envMap:I,envMapMode:I&&nt.mapping,envMapCubeUVHeight:W,aoMap:Le,lightMap:ye,bumpMap:be,normalMap:Vt,displacementMap:S&&ke,emissiveMap:ee,normalMapObjectSpace:Vt&&w.normalMapType===gE,normalMapTangentSpace:Vt&&w.normalMapType===mE,metalnessMap:ie,roughnessMap:z,anisotropy:A,anisotropyMap:Ut,clearcoat:at,clearcoatMap:Pt,clearcoatNormalMap:se,clearcoatRoughnessMap:bt,dispersion:yt,iridescence:xt,iridescenceMap:Bt,iridescenceThicknessMap:_e,sheen:St,sheenColorMap:Qt,sheenRoughnessMap:Dt,specularMap:ae,specularColorMap:ne,specularIntensityMap:pe,transmission:Kt,transmissionMap:q,thicknessMap:Tt,gradientMap:ht,opaque:w.transparent===!1&&w.blending===Ls&&w.alphaToCoverage===!1,alphaMap:mt,alphaTest:Rt,alphaHash:Zt,combine:w.combine,mapUv:Gt&&b(w.map.channel),aoMapUv:Le&&b(w.aoMap.channel),lightMapUv:ye&&b(w.lightMap.channel),bumpMapUv:be&&b(w.bumpMap.channel),normalMapUv:Vt&&b(w.normalMap.channel),displacementMapUv:ke&&b(w.displacementMap.channel),emissiveMapUv:ee&&b(w.emissiveMap.channel),metalnessMapUv:ie&&b(w.metalnessMap.channel),roughnessMapUv:z&&b(w.roughnessMap.channel),anisotropyMapUv:Ut&&b(w.anisotropyMap.channel),clearcoatMapUv:Pt&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:se&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&b(w.sheenRoughnessMap.channel),specularMapUv:ae&&b(w.specularMap.channel),specularColorMapUv:ne&&b(w.specularColorMap.channel),specularIntensityMapUv:pe&&b(w.specularIntensityMap.channel),transmissionMapUv:q&&b(w.transmissionMap.channel),thicknessMapUv:Tt&&b(w.thicknessMap.channel),alphaMapUv:mt&&b(w.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Vt||A),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!lt.attributes.uv&&(Gt||mt),fog:!!ft,useFog:w.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:$.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Et,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&H.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Gt&&w.map.isVideoTexture===!0&&Ue.getTransfer(w.map.colorSpace)===Ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ia,flipSided:w.side===Hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:de&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&w.extensions.multiDraw===!0||kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return rn.vertexUv1s=p.has(1),rn.vertexUv2s=p.has(2),rn.vertexUv3s=p.has(3),p.clear(),rn}function x(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)T.push(H),T.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(L(T,w),D(T,w),T.push(a.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function L(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function D(w,T){d.disableAll(),T.supportsVertexTextures&&d.enable(0),T.instancing&&d.enable(1),T.instancingColor&&d.enable(2),T.instancingMorph&&d.enable(3),T.matcap&&d.enable(4),T.envMap&&d.enable(5),T.normalMapObjectSpace&&d.enable(6),T.normalMapTangentSpace&&d.enable(7),T.clearcoat&&d.enable(8),T.iridescence&&d.enable(9),T.alphaTest&&d.enable(10),T.vertexColors&&d.enable(11),T.vertexAlphas&&d.enable(12),T.vertexUv1s&&d.enable(13),T.vertexUv2s&&d.enable(14),T.vertexUv3s&&d.enable(15),T.vertexTangents&&d.enable(16),T.anisotropy&&d.enable(17),T.alphaHash&&d.enable(18),T.batching&&d.enable(19),T.dispersion&&d.enable(20),T.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),T.fog&&d.enable(0),T.useFog&&d.enable(1),T.flatShading&&d.enable(2),T.logarithmicDepthBuffer&&d.enable(3),T.skinning&&d.enable(4),T.morphTargets&&d.enable(5),T.morphNormals&&d.enable(6),T.morphColors&&d.enable(7),T.premultipliedAlpha&&d.enable(8),T.shadowMapEnabled&&d.enable(9),T.doubleSided&&d.enable(10),T.flipSided&&d.enable(11),T.useDepthPacking&&d.enable(12),T.dithering&&d.enable(13),T.transmission&&d.enable(14),T.sheen&&d.enable(15),T.opaque&&d.enable(16),T.pointsUvs&&d.enable(17),T.decodeVideoTexture&&d.enable(18),T.alphaToCoverage&&d.enable(19),w.push(d.mask)}function O(w){const T=E[w.type];let H;if(T){const st=Ui[T];H=sb.clone(st.uniforms)}else H=w.uniforms;return H}function k(w,T){let H;for(let st=0,$=g.length;st<$;st++){const ft=g[st];if(ft.cacheKey===T){H=ft,++H.usedTimes;break}}return H===void 0&&(H=new xR(a,T,w,c),g.push(H)),H}function N(w){if(--w.usedTimes===0){const T=g.indexOf(w);g[T]=g[g.length-1],g.pop(),w.destroy()}}function B(w){m.remove(w)}function K(){m.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:O,acquireProgram:k,releaseProgram:N,releaseShaderCache:B,programs:g,dispose:K}}function bR(){let a=new WeakMap;function t(c){let f=a.get(c);return f===void 0&&(f={},a.set(c,f)),f}function i(c){a.delete(c)}function r(c,f,d){a.get(c)[f]=d}function l(){a=new WeakMap}return{get:t,remove:i,update:r,dispose:l}}function TR(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function Pv(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function zv(){const a=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(_,S,M,E,b,v){let x=a[t];return x===void 0?(x={id:_.id,object:_,geometry:S,material:M,groupOrder:E,renderOrder:_.renderOrder,z:b,group:v},a[t]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=M,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=b,x.group=v),t++,x}function d(_,S,M,E,b,v){const x=f(_,S,M,E,b,v);M.transmission>0?r.push(x):M.transparent===!0?l.push(x):i.push(x)}function m(_,S,M,E,b,v){const x=f(_,S,M,E,b,v);M.transmission>0?r.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||TR),r.length>1&&r.sort(S||Pv),l.length>1&&l.sort(S||Pv)}function g(){for(let _=t,S=a.length;_<S;_++){const M=a[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function AR(){let a=new WeakMap;function t(r,l){const c=a.get(r);let f;return c===void 0?(f=new zv,a.set(r,[f])):l>=c.length?(f=new zv,c.push(f)):f=c[l],f}function i(){a=new WeakMap}return{get:t,dispose:i}}function RR(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new rt,color:new ze};break;case"SpotLight":i={position:new rt,direction:new rt,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":i={color:new ze,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return a[t.id]=i,i}}}function wR(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=i,i}}}let CR=0;function DR(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function UR(a){const t=new RR,i=wR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,c=new un,f=new un;function d(p){let g=0,_=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,E=0,b=0,v=0,x=0,L=0,D=0,O=0,k=0,N=0,B=0;p.sort(DR);for(let w=0,T=p.length;w<T;w++){const H=p[w],st=H.color,$=H.intensity,ft=H.distance,lt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=st.r*$,_+=st.g*$,S+=st.b*$;else if(H.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(H.sh.coefficients[F],$);B++}else if(H.isDirectionalLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const nt=H.shadow,W=i.get(H);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,r.directionalShadow[M]=W,r.directionalShadowMap[M]=lt,r.directionalShadowMatrix[M]=H.shadow.matrix,L++}r.directional[M]=F,M++}else if(H.isSpotLight){const F=t.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(st).multiplyScalar($),F.distance=ft,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,r.spot[b]=F;const nt=H.shadow;if(H.map&&(r.spotLightMap[k]=H.map,k++,nt.updateMatrices(H),H.castShadow&&N++),r.spotLightMatrix[b]=nt.matrix,H.castShadow){const W=i.get(H);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,r.spotShadow[b]=W,r.spotShadowMap[b]=lt,O++}b++}else if(H.isRectAreaLight){const F=t.get(H);F.color.copy(st).multiplyScalar($),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),r.rectArea[v]=F,v++}else if(H.isPointLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const nt=H.shadow,W=i.get(H);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,W.shadowCameraNear=nt.camera.near,W.shadowCameraFar=nt.camera.far,r.pointShadow[E]=W,r.pointShadowMap[E]=lt,r.pointShadowMatrix[E]=H.shadow.matrix,D++}r.point[E]=F,E++}else if(H.isHemisphereLight){const F=t.get(H);F.skyColor.copy(H.color).multiplyScalar($),F.groundColor.copy(H.groundColor).multiplyScalar($),r.hemi[x]=F,x++}}v>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=S;const K=r.hash;(K.directionalLength!==M||K.pointLength!==E||K.spotLength!==b||K.rectAreaLength!==v||K.hemiLength!==x||K.numDirectionalShadows!==L||K.numPointShadows!==D||K.numSpotShadows!==O||K.numSpotMaps!==k||K.numLightProbes!==B)&&(r.directional.length=M,r.spot.length=b,r.rectArea.length=v,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=O+k-N,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=B,K.directionalLength=M,K.pointLength=E,K.spotLength=b,K.rectAreaLength=v,K.hemiLength=x,K.numDirectionalShadows=L,K.numPointShadows=D,K.numSpotShadows=O,K.numSpotMaps=k,K.numLightProbes=B,r.version=CR++)}function m(p,g){let _=0,S=0,M=0,E=0,b=0;const v=g.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const D=p[x];if(D.isDirectionalLight){const O=r.directional[_];O.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(v),_++}else if(D.isSpotLight){const O=r.spot[M];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(v),O.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(v),M++}else if(D.isRectAreaLight){const O=r.rectArea[E];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(v),f.identity(),c.copy(D.matrixWorld),c.premultiply(v),f.extractRotation(c),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),O.halfWidth.applyMatrix4(f),O.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const O=r.point[S];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(v),S++}else if(D.isHemisphereLight){const O=r.hemi[b];O.direction.setFromMatrixPosition(D.matrixWorld),O.direction.transformDirection(v),b++}}}return{setup:d,setupView:m,state:r}}function Bv(a){const t=new UR(a),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function LR(a){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Bv(a),t.set(l,[d])):c>=f.length?(d=new Bv(a),f.push(d)):d=f[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}class NR extends lu{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class OR extends lu{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const PR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zR=`uniform sampler2D shadow_pass;
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
}`;function BR(a,t,i){let r=new G0;const l=new Re,c=new Re,f=new vn,d=new NR({depthPacking:pE}),m=new OR,p={},g=i.maxTextureSize,_={[ka]:Hn,[Hn]:ka,[ia]:ia},S=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:PR,fragmentShader:zR}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const E=new Nr;E.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ni(E,S),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g0;let x=this.type;this.render=function(N,B,K){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||N.length===0)return;const w=a.getRenderTarget(),T=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),st=a.state;st.setBlending(Ga),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const $=x!==na&&this.type===na,ft=x===na&&this.type!==na;for(let lt=0,F=N.length;lt<F;lt++){const nt=N[lt],W=nt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const gt=W.getFrameExtents();if(l.multiply(gt),c.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/gt.x),l.x=c.x*gt.x,W.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/gt.y),l.y=c.y*gt.y,W.mapSize.y=c.y)),W.map===null||$===!0||ft===!0){const J=this.type!==na?{minFilter:fi,magFilter:fi}:{};W.map!==null&&W.map.dispose(),W.map=new Ur(l.x,l.y,J),W.map.texture.name=nt.name+".shadowMap",W.camera.updateProjectionMatrix()}a.setRenderTarget(W.map),a.clear();const U=W.getViewportCount();for(let J=0;J<U;J++){const Et=W.getViewport(J);f.set(c.x*Et.x,c.y*Et.y,c.x*Et.z,c.y*Et.w),st.viewport(f),W.updateMatrices(nt,J),r=W.getFrustum(),O(B,K,W.camera,nt,this.type)}W.isPointLightShadow!==!0&&this.type===na&&L(W,K),W.needsUpdate=!1}x=this.type,v.needsUpdate=!1,a.setRenderTarget(w,T,H)};function L(N,B){const K=t.update(b);S.defines.VSM_SAMPLES!==N.blurSamples&&(S.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ur(l.x,l.y)),S.uniforms.shadow_pass.value=N.map.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,a.setRenderTarget(N.mapPass),a.clear(),a.renderBufferDirect(B,null,K,S,b,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,a.setRenderTarget(N.map),a.clear(),a.renderBufferDirect(B,null,K,M,b,null)}function D(N,B,K,w){let T=null;const H=K.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)T=H;else if(T=K.isPointLight===!0?m:d,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const st=T.uuid,$=B.uuid;let ft=p[st];ft===void 0&&(ft={},p[st]=ft);let lt=ft[$];lt===void 0&&(lt=T.clone(),ft[$]=lt,B.addEventListener("dispose",k)),T=lt}if(T.visible=B.visible,T.wireframe=B.wireframe,w===na?T.side=B.shadowSide!==null?B.shadowSide:B.side:T.side=B.shadowSide!==null?B.shadowSide:_[B.side],T.alphaMap=B.alphaMap,T.alphaTest=B.alphaTest,T.map=B.map,T.clipShadows=B.clipShadows,T.clippingPlanes=B.clippingPlanes,T.clipIntersection=B.clipIntersection,T.displacementMap=B.displacementMap,T.displacementScale=B.displacementScale,T.displacementBias=B.displacementBias,T.wireframeLinewidth=B.wireframeLinewidth,T.linewidth=B.linewidth,K.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const st=a.properties.get(T);st.light=K}return T}function O(N,B,K,w,T){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===na)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,N.matrixWorld);const $=t.update(N),ft=N.material;if(Array.isArray(ft)){const lt=$.groups;for(let F=0,nt=lt.length;F<nt;F++){const W=lt[F],gt=ft[W.materialIndex];if(gt&&gt.visible){const U=D(N,gt,w,T);N.onBeforeShadow(a,N,B,K,$,U,W),a.renderBufferDirect(K,null,$,U,N,W),N.onAfterShadow(a,N,B,K,$,U,W)}}}else if(ft.visible){const lt=D(N,ft,w,T);N.onBeforeShadow(a,N,B,K,$,lt,null),a.renderBufferDirect(K,null,$,lt,N,null),N.onAfterShadow(a,N,B,K,$,lt,null)}}const st=N.children;for(let $=0,ft=st.length;$<ft;$++)O(st[$],B,K,w,T)}function k(N){N.target.removeEventListener("dispose",k);for(const K in p){const w=p[K],T=N.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}function IR(a){function t(){let q=!1;const Tt=new vn;let ht=null;const mt=new vn(0,0,0,0);return{setMask:function(Rt){ht!==Rt&&!q&&(a.colorMask(Rt,Rt,Rt,Rt),ht=Rt)},setLocked:function(Rt){q=Rt},setClear:function(Rt,Zt,de,Ie,rn){rn===!0&&(Rt*=Ie,Zt*=Ie,de*=Ie),Tt.set(Rt,Zt,de,Ie),mt.equals(Tt)===!1&&(a.clearColor(Rt,Zt,de,Ie),mt.copy(Tt))},reset:function(){q=!1,ht=null,mt.set(-1,0,0,0)}}}function i(){let q=!1,Tt=null,ht=null,mt=null;return{setTest:function(Rt){Rt?_t(a.DEPTH_TEST):At(a.DEPTH_TEST)},setMask:function(Rt){Tt!==Rt&&!q&&(a.depthMask(Rt),Tt=Rt)},setFunc:function(Rt){if(ht!==Rt){switch(Rt){case KM:a.depthFunc(a.NEVER);break;case QM:a.depthFunc(a.ALWAYS);break;case JM:a.depthFunc(a.LESS);break;case Qc:a.depthFunc(a.LEQUAL);break;case $M:a.depthFunc(a.EQUAL);break;case tE:a.depthFunc(a.GEQUAL);break;case eE:a.depthFunc(a.GREATER);break;case nE:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ht=Rt}},setLocked:function(Rt){q=Rt},setClear:function(Rt){mt!==Rt&&(a.clearDepth(Rt),mt=Rt)},reset:function(){q=!1,Tt=null,ht=null,mt=null}}}function r(){let q=!1,Tt=null,ht=null,mt=null,Rt=null,Zt=null,de=null,Ie=null,rn=null;return{setTest:function(Te){q||(Te?_t(a.STENCIL_TEST):At(a.STENCIL_TEST))},setMask:function(Te){Tt!==Te&&!q&&(a.stencilMask(Te),Tt=Te)},setFunc:function(Te,$n,zn){(ht!==Te||mt!==$n||Rt!==zn)&&(a.stencilFunc(Te,$n,zn),ht=Te,mt=$n,Rt=zn)},setOp:function(Te,$n,zn){(Zt!==Te||de!==$n||Ie!==zn)&&(a.stencilOp(Te,$n,zn),Zt=Te,de=$n,Ie=zn)},setLocked:function(Te){q=Te},setClear:function(Te){rn!==Te&&(a.clearStencil(Te),rn=Te)},reset:function(){q=!1,Tt=null,ht=null,mt=null,Rt=null,Zt=null,de=null,Ie=null,rn=null}}}const l=new t,c=new i,f=new r,d=new WeakMap,m=new WeakMap;let p={},g={},_=new WeakMap,S=[],M=null,E=!1,b=null,v=null,x=null,L=null,D=null,O=null,k=null,N=new ze(0,0,0),B=0,K=!1,w=null,T=null,H=null,st=null,$=null;const ft=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,F=0;const nt=a.getParameter(a.VERSION);nt.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(nt)[1]),lt=F>=1):nt.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),lt=F>=2);let W=null,gt={};const U=a.getParameter(a.SCISSOR_BOX),J=a.getParameter(a.VIEWPORT),Et=new vn().fromArray(U),wt=new vn().fromArray(J);function X(q,Tt,ht,mt){const Rt=new Uint8Array(4),Zt=a.createTexture();a.bindTexture(q,Zt),a.texParameteri(q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let de=0;de<ht;de++)q===a.TEXTURE_3D||q===a.TEXTURE_2D_ARRAY?a.texImage3D(Tt,0,a.RGBA,1,1,mt,0,a.RGBA,a.UNSIGNED_BYTE,Rt):a.texImage2D(Tt+de,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Rt);return Zt}const ct={};ct[a.TEXTURE_2D]=X(a.TEXTURE_2D,a.TEXTURE_2D,1),ct[a.TEXTURE_CUBE_MAP]=X(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[a.TEXTURE_2D_ARRAY]=X(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ct[a.TEXTURE_3D]=X(a.TEXTURE_3D,a.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),_t(a.DEPTH_TEST),c.setFunc(Qc),be(!1),Vt(G_),_t(a.CULL_FACE),Le(Ga);function _t(q){p[q]!==!0&&(a.enable(q),p[q]=!0)}function At(q){p[q]!==!1&&(a.disable(q),p[q]=!1)}function Ot(q,Tt){return g[q]!==Tt?(a.bindFramebuffer(q,Tt),g[q]=Tt,q===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Tt),q===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Tt),!0):!1}function kt(q,Tt){let ht=S,mt=!1;if(q){ht=_.get(Tt),ht===void 0&&(ht=[],_.set(Tt,ht));const Rt=q.textures;if(ht.length!==Rt.length||ht[0]!==a.COLOR_ATTACHMENT0){for(let Zt=0,de=Rt.length;Zt<de;Zt++)ht[Zt]=a.COLOR_ATTACHMENT0+Zt;ht.length=Rt.length,mt=!0}}else ht[0]!==a.BACK&&(ht[0]=a.BACK,mt=!0);mt&&a.drawBuffers(ht)}function Gt(q){return M!==q?(a.useProgram(q),M=q,!0):!1}const Ee={[Er]:a.FUNC_ADD,[NM]:a.FUNC_SUBTRACT,[OM]:a.FUNC_REVERSE_SUBTRACT};Ee[PM]=a.MIN,Ee[zM]=a.MAX;const I={[BM]:a.ZERO,[IM]:a.ONE,[FM]:a.SRC_COLOR,[rh]:a.SRC_ALPHA,[WM]:a.SRC_ALPHA_SATURATE,[kM]:a.DST_COLOR,[GM]:a.DST_ALPHA,[HM]:a.ONE_MINUS_SRC_COLOR,[sh]:a.ONE_MINUS_SRC_ALPHA,[XM]:a.ONE_MINUS_DST_COLOR,[VM]:a.ONE_MINUS_DST_ALPHA,[qM]:a.CONSTANT_COLOR,[YM]:a.ONE_MINUS_CONSTANT_COLOR,[jM]:a.CONSTANT_ALPHA,[ZM]:a.ONE_MINUS_CONSTANT_ALPHA};function Le(q,Tt,ht,mt,Rt,Zt,de,Ie,rn,Te){if(q===Ga){E===!0&&(At(a.BLEND),E=!1);return}if(E===!1&&(_t(a.BLEND),E=!0),q!==LM){if(q!==b||Te!==K){if((v!==Er||D!==Er)&&(a.blendEquation(a.FUNC_ADD),v=Er,D=Er),Te)switch(q){case Ls:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case V_:a.blendFunc(a.ONE,a.ONE);break;case k_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case X_:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Ls:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case V_:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case k_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case X_:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}x=null,L=null,O=null,k=null,N.set(0,0,0),B=0,b=q,K=Te}return}Rt=Rt||Tt,Zt=Zt||ht,de=de||mt,(Tt!==v||Rt!==D)&&(a.blendEquationSeparate(Ee[Tt],Ee[Rt]),v=Tt,D=Rt),(ht!==x||mt!==L||Zt!==O||de!==k)&&(a.blendFuncSeparate(I[ht],I[mt],I[Zt],I[de]),x=ht,L=mt,O=Zt,k=de),(Ie.equals(N)===!1||rn!==B)&&(a.blendColor(Ie.r,Ie.g,Ie.b,rn),N.copy(Ie),B=rn),b=q,K=!1}function ye(q,Tt){q.side===ia?At(a.CULL_FACE):_t(a.CULL_FACE);let ht=q.side===Hn;Tt&&(ht=!ht),be(ht),q.blending===Ls&&q.transparent===!1?Le(Ga):Le(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),l.setMask(q.colorWrite);const mt=q.stencilWrite;f.setTest(mt),mt&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ee(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?_t(a.SAMPLE_ALPHA_TO_COVERAGE):At(a.SAMPLE_ALPHA_TO_COVERAGE)}function be(q){w!==q&&(q?a.frontFace(a.CW):a.frontFace(a.CCW),w=q)}function Vt(q){q!==CM?(_t(a.CULL_FACE),q!==T&&(q===G_?a.cullFace(a.BACK):q===DM?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):At(a.CULL_FACE),T=q}function ke(q){q!==H&&(lt&&a.lineWidth(q),H=q)}function ee(q,Tt,ht){q?(_t(a.POLYGON_OFFSET_FILL),(st!==Tt||$!==ht)&&(a.polygonOffset(Tt,ht),st=Tt,$=ht)):At(a.POLYGON_OFFSET_FILL)}function ie(q){q?_t(a.SCISSOR_TEST):At(a.SCISSOR_TEST)}function z(q){q===void 0&&(q=a.TEXTURE0+ft-1),W!==q&&(a.activeTexture(q),W=q)}function A(q,Tt,ht){ht===void 0&&(W===null?ht=a.TEXTURE0+ft-1:ht=W);let mt=gt[ht];mt===void 0&&(mt={type:void 0,texture:void 0},gt[ht]=mt),(mt.type!==q||mt.texture!==Tt)&&(W!==ht&&(a.activeTexture(ht),W=ht),a.bindTexture(q,Tt||ct[q]),mt.type=q,mt.texture=Tt)}function at(){const q=gt[W];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function yt(){try{a.compressedTexImage2D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xt(){try{a.compressedTexImage3D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function St(){try{a.texSubImage2D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Kt(){try{a.texSubImage3D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ut(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Pt(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function se(){try{a.texStorage2D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function bt(){try{a.texStorage3D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Bt(){try{a.texImage2D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _e(){try{a.texImage3D.apply(a,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qt(q){Et.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),Et.copy(q))}function Dt(q){wt.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),wt.copy(q))}function ae(q,Tt){let ht=m.get(Tt);ht===void 0&&(ht=new WeakMap,m.set(Tt,ht));let mt=ht.get(q);mt===void 0&&(mt=a.getUniformBlockIndex(Tt,q.name),ht.set(q,mt))}function ne(q,Tt){const mt=m.get(Tt).get(q);d.get(Tt)!==mt&&(a.uniformBlockBinding(Tt,mt,q.__bindingPointIndex),d.set(Tt,mt))}function pe(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),p={},W=null,gt={},g={},_=new WeakMap,S=[],M=null,E=!1,b=null,v=null,x=null,L=null,D=null,O=null,k=null,N=new ze(0,0,0),B=0,K=!1,w=null,T=null,H=null,st=null,$=null,Et.set(0,0,a.canvas.width,a.canvas.height),wt.set(0,0,a.canvas.width,a.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:_t,disable:At,bindFramebuffer:Ot,drawBuffers:kt,useProgram:Gt,setBlending:Le,setMaterial:ye,setFlipSided:be,setCullFace:Vt,setLineWidth:ke,setPolygonOffset:ee,setScissorTest:ie,activeTexture:z,bindTexture:A,unbindTexture:at,compressedTexImage2D:yt,compressedTexImage3D:xt,texImage2D:Bt,texImage3D:_e,updateUBOMapping:ae,uniformBlockBinding:ne,texStorage2D:se,texStorage3D:bt,texSubImage2D:St,texSubImage3D:Kt,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Pt,scissor:Qt,viewport:Dt,reset:pe}}function Iv(a,t,i,r){const l=FR(r);switch(i){case M0:return a*t;case b0:return a*t;case T0:return a*t*2;case A0:return a*t/l.components*l.byteLength;case Jh:return a*t/l.components*l.byteLength;case R0:return a*t*2/l.components*l.byteLength;case $h:return a*t*2/l.components*l.byteLength;case E0:return a*t*3/l.components*l.byteLength;case Mi:return a*t*4/l.components*l.byteLength;case tp:return a*t*4/l.components*l.byteLength;case Vc:case kc:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Xc:case Wc:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case dh:case ph:return Math.max(a,16)*Math.max(t,8)/4;case fh:case hh:return Math.max(a,8)*Math.max(t,8)/2;case mh:case gh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case _h:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case vh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case xh:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case Sh:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case yh:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case bh:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case Th:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case Ah:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case wh:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case Ch:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case Dh:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case Uh:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case qc:case Lh:case Nh:return Math.ceil(a/4)*Math.ceil(t/4)*16;case w0:case Oh:return Math.ceil(a/4)*Math.ceil(t/4)*8;case Ph:case zh:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function FR(a){switch(a){case sa:case x0:return{byteLength:1,components:1};case al:case S0:case ol:return{byteLength:2,components:1};case Kh:case Qh:return{byteLength:2,components:4};case Dr:case Zh:case aa:return{byteLength:4,components:1};case y0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}function HR(a,t,i,r,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Re,g=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(z,A){return M?new OffscreenCanvas(z,A):nu("canvas")}function b(z,A,at){let yt=1;const xt=ie(z);if((xt.width>at||xt.height>at)&&(yt=at/Math.max(xt.width,xt.height)),yt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const St=Math.floor(yt*xt.width),Kt=Math.floor(yt*xt.height);_===void 0&&(_=E(St,Kt));const Ut=A?E(St,Kt):_;return Ut.width=St,Ut.height=Kt,Ut.getContext("2d").drawImage(z,0,0,St,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+St+"x"+Kt+")."),Ut}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),z;return z}function v(z){return z.generateMipmaps&&z.minFilter!==fi&&z.minFilter!==yi}function x(z){a.generateMipmap(z)}function L(z,A,at,yt,xt=!1){if(z!==null){if(a[z]!==void 0)return a[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let St=A;if(A===a.RED&&(at===a.FLOAT&&(St=a.R32F),at===a.HALF_FLOAT&&(St=a.R16F),at===a.UNSIGNED_BYTE&&(St=a.R8)),A===a.RED_INTEGER&&(at===a.UNSIGNED_BYTE&&(St=a.R8UI),at===a.UNSIGNED_SHORT&&(St=a.R16UI),at===a.UNSIGNED_INT&&(St=a.R32UI),at===a.BYTE&&(St=a.R8I),at===a.SHORT&&(St=a.R16I),at===a.INT&&(St=a.R32I)),A===a.RG&&(at===a.FLOAT&&(St=a.RG32F),at===a.HALF_FLOAT&&(St=a.RG16F),at===a.UNSIGNED_BYTE&&(St=a.RG8)),A===a.RG_INTEGER&&(at===a.UNSIGNED_BYTE&&(St=a.RG8UI),at===a.UNSIGNED_SHORT&&(St=a.RG16UI),at===a.UNSIGNED_INT&&(St=a.RG32UI),at===a.BYTE&&(St=a.RG8I),at===a.SHORT&&(St=a.RG16I),at===a.INT&&(St=a.RG32I)),A===a.RGB&&at===a.UNSIGNED_INT_5_9_9_9_REV&&(St=a.RGB9_E5),A===a.RGBA){const Kt=xt?Jc:Ue.getTransfer(yt);at===a.FLOAT&&(St=a.RGBA32F),at===a.HALF_FLOAT&&(St=a.RGBA16F),at===a.UNSIGNED_BYTE&&(St=Kt===Ve?a.SRGB8_ALPHA8:a.RGBA8),at===a.UNSIGNED_SHORT_4_4_4_4&&(St=a.RGBA4),at===a.UNSIGNED_SHORT_5_5_5_1&&(St=a.RGB5_A1)}return(St===a.R16F||St===a.R32F||St===a.RG16F||St===a.RG32F||St===a.RGBA16F||St===a.RGBA32F)&&t.get("EXT_color_buffer_float"),St}function D(z,A){let at;return z?A===null||A===Dr||A===Bs?at=a.DEPTH24_STENCIL8:A===aa?at=a.DEPTH32F_STENCIL8:A===al&&(at=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Dr||A===Bs?at=a.DEPTH_COMPONENT24:A===aa?at=a.DEPTH_COMPONENT32F:A===al&&(at=a.DEPTH_COMPONENT16),at}function O(z,A){return v(z)===!0||z.isFramebufferTexture&&z.minFilter!==fi&&z.minFilter!==yi?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function k(z){const A=z.target;A.removeEventListener("dispose",k),B(A),A.isVideoTexture&&g.delete(A)}function N(z){const A=z.target;A.removeEventListener("dispose",N),w(A)}function B(z){const A=r.get(z);if(A.__webglInit===void 0)return;const at=z.source,yt=S.get(at);if(yt){const xt=yt[A.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&K(z),Object.keys(yt).length===0&&S.delete(at)}r.remove(z)}function K(z){const A=r.get(z);a.deleteTexture(A.__webglTexture);const at=z.source,yt=S.get(at);delete yt[A.__cacheKey],f.memory.textures--}function w(z){const A=r.get(z);if(z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(A.__webglFramebuffer[yt]))for(let xt=0;xt<A.__webglFramebuffer[yt].length;xt++)a.deleteFramebuffer(A.__webglFramebuffer[yt][xt]);else a.deleteFramebuffer(A.__webglFramebuffer[yt]);A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer[yt])}else{if(Array.isArray(A.__webglFramebuffer))for(let yt=0;yt<A.__webglFramebuffer.length;yt++)a.deleteFramebuffer(A.__webglFramebuffer[yt]);else a.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&a.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let yt=0;yt<A.__webglColorRenderbuffer.length;yt++)A.__webglColorRenderbuffer[yt]&&a.deleteRenderbuffer(A.__webglColorRenderbuffer[yt]);A.__webglDepthRenderbuffer&&a.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const at=z.textures;for(let yt=0,xt=at.length;yt<xt;yt++){const St=r.get(at[yt]);St.__webglTexture&&(a.deleteTexture(St.__webglTexture),f.memory.textures--),r.remove(at[yt])}r.remove(z)}let T=0;function H(){T=0}function st(){const z=T;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),T+=1,z}function $(z){const A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function ft(z,A){const at=r.get(z);if(z.isVideoTexture&&ke(z),z.isRenderTargetTexture===!1&&z.version>0&&at.__version!==z.version){const yt=z.image;if(yt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(at,z,A);return}}i.bindTexture(a.TEXTURE_2D,at.__webglTexture,a.TEXTURE0+A)}function lt(z,A){const at=r.get(z);if(z.version>0&&at.__version!==z.version){wt(at,z,A);return}i.bindTexture(a.TEXTURE_2D_ARRAY,at.__webglTexture,a.TEXTURE0+A)}function F(z,A){const at=r.get(z);if(z.version>0&&at.__version!==z.version){wt(at,z,A);return}i.bindTexture(a.TEXTURE_3D,at.__webglTexture,a.TEXTURE0+A)}function nt(z,A){const at=r.get(z);if(z.version>0&&at.__version!==z.version){X(at,z,A);return}i.bindTexture(a.TEXTURE_CUBE_MAP,at.__webglTexture,a.TEXTURE0+A)}const W={[ch]:a.REPEAT,[Tr]:a.CLAMP_TO_EDGE,[uh]:a.MIRRORED_REPEAT},gt={[fi]:a.NEAREST,[dE]:a.NEAREST_MIPMAP_NEAREST,[xc]:a.NEAREST_MIPMAP_LINEAR,[yi]:a.LINEAR,[Ad]:a.LINEAR_MIPMAP_NEAREST,[Ar]:a.LINEAR_MIPMAP_LINEAR},U={[_E]:a.NEVER,[EE]:a.ALWAYS,[vE]:a.LESS,[C0]:a.LEQUAL,[xE]:a.EQUAL,[ME]:a.GEQUAL,[SE]:a.GREATER,[yE]:a.NOTEQUAL};function J(z,A){if(A.type===aa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===yi||A.magFilter===Ad||A.magFilter===xc||A.magFilter===Ar||A.minFilter===yi||A.minFilter===Ad||A.minFilter===xc||A.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(z,a.TEXTURE_WRAP_S,W[A.wrapS]),a.texParameteri(z,a.TEXTURE_WRAP_T,W[A.wrapT]),(z===a.TEXTURE_3D||z===a.TEXTURE_2D_ARRAY)&&a.texParameteri(z,a.TEXTURE_WRAP_R,W[A.wrapR]),a.texParameteri(z,a.TEXTURE_MAG_FILTER,gt[A.magFilter]),a.texParameteri(z,a.TEXTURE_MIN_FILTER,gt[A.minFilter]),A.compareFunction&&(a.texParameteri(z,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(z,a.TEXTURE_COMPARE_FUNC,U[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===fi||A.minFilter!==xc&&A.minFilter!==Ar||A.type===aa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");a.texParameterf(z,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Et(z,A){let at=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",k));const yt=A.source;let xt=S.get(yt);xt===void 0&&(xt={},S.set(yt,xt));const St=$(A);if(St!==z.__cacheKey){xt[St]===void 0&&(xt[St]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,at=!0),xt[St].usedTimes++;const Kt=xt[z.__cacheKey];Kt!==void 0&&(xt[z.__cacheKey].usedTimes--,Kt.usedTimes===0&&K(A)),z.__cacheKey=St,z.__webglTexture=xt[St].texture}return at}function wt(z,A,at){let yt=a.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(yt=a.TEXTURE_2D_ARRAY),A.isData3DTexture&&(yt=a.TEXTURE_3D);const xt=Et(z,A),St=A.source;i.bindTexture(yt,z.__webglTexture,a.TEXTURE0+at);const Kt=r.get(St);if(St.version!==Kt.__version||xt===!0){i.activeTexture(a.TEXTURE0+at);const Ut=Ue.getPrimaries(Ue.workingColorSpace),Pt=A.colorSpace===Ha?null:Ue.getPrimaries(A.colorSpace),se=A.colorSpace===Ha||Ut===Pt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let bt=b(A.image,!1,l.maxTextureSize);bt=ee(A,bt);const Bt=c.convert(A.format,A.colorSpace),_e=c.convert(A.type);let Qt=L(A.internalFormat,Bt,_e,A.colorSpace,A.isVideoTexture);J(yt,A);let Dt;const ae=A.mipmaps,ne=A.isVideoTexture!==!0,pe=Kt.__version===void 0||xt===!0,q=St.dataReady,Tt=O(A,bt);if(A.isDepthTexture)Qt=D(A.format===Is,A.type),pe&&(ne?i.texStorage2D(a.TEXTURE_2D,1,Qt,bt.width,bt.height):i.texImage2D(a.TEXTURE_2D,0,Qt,bt.width,bt.height,0,Bt,_e,null));else if(A.isDataTexture)if(ae.length>0){ne&&pe&&i.texStorage2D(a.TEXTURE_2D,Tt,Qt,ae[0].width,ae[0].height);for(let ht=0,mt=ae.length;ht<mt;ht++)Dt=ae[ht],ne?q&&i.texSubImage2D(a.TEXTURE_2D,ht,0,0,Dt.width,Dt.height,Bt,_e,Dt.data):i.texImage2D(a.TEXTURE_2D,ht,Qt,Dt.width,Dt.height,0,Bt,_e,Dt.data);A.generateMipmaps=!1}else ne?(pe&&i.texStorage2D(a.TEXTURE_2D,Tt,Qt,bt.width,bt.height),q&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,bt.width,bt.height,Bt,_e,bt.data)):i.texImage2D(a.TEXTURE_2D,0,Qt,bt.width,bt.height,0,Bt,_e,bt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ne&&pe&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Tt,Qt,ae[0].width,ae[0].height,bt.depth);for(let ht=0,mt=ae.length;ht<mt;ht++)if(Dt=ae[ht],A.format!==Mi)if(Bt!==null)if(ne){if(q)if(A.layerUpdates.size>0){const Rt=Iv(Dt.width,Dt.height,A.format,A.type);for(const Zt of A.layerUpdates){const de=Dt.data.subarray(Zt*Rt/Dt.data.BYTES_PER_ELEMENT,(Zt+1)*Rt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ht,0,0,Zt,Dt.width,Dt.height,1,Bt,de,0,0)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ht,0,0,0,Dt.width,Dt.height,bt.depth,Bt,Dt.data,0,0)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ht,Qt,Dt.width,Dt.height,bt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?q&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,ht,0,0,0,Dt.width,Dt.height,bt.depth,Bt,_e,Dt.data):i.texImage3D(a.TEXTURE_2D_ARRAY,ht,Qt,Dt.width,Dt.height,bt.depth,0,Bt,_e,Dt.data)}else{ne&&pe&&i.texStorage2D(a.TEXTURE_2D,Tt,Qt,ae[0].width,ae[0].height);for(let ht=0,mt=ae.length;ht<mt;ht++)Dt=ae[ht],A.format!==Mi?Bt!==null?ne?q&&i.compressedTexSubImage2D(a.TEXTURE_2D,ht,0,0,Dt.width,Dt.height,Bt,Dt.data):i.compressedTexImage2D(a.TEXTURE_2D,ht,Qt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?q&&i.texSubImage2D(a.TEXTURE_2D,ht,0,0,Dt.width,Dt.height,Bt,_e,Dt.data):i.texImage2D(a.TEXTURE_2D,ht,Qt,Dt.width,Dt.height,0,Bt,_e,Dt.data)}else if(A.isDataArrayTexture)if(ne){if(pe&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Tt,Qt,bt.width,bt.height,bt.depth),q)if(A.layerUpdates.size>0){const ht=Iv(bt.width,bt.height,A.format,A.type);for(const mt of A.layerUpdates){const Rt=bt.data.subarray(mt*ht/bt.data.BYTES_PER_ELEMENT,(mt+1)*ht/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,mt,bt.width,bt.height,1,Bt,_e,Rt)}A.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Bt,_e,bt.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Qt,bt.width,bt.height,bt.depth,0,Bt,_e,bt.data);else if(A.isData3DTexture)ne?(pe&&i.texStorage3D(a.TEXTURE_3D,Tt,Qt,bt.width,bt.height,bt.depth),q&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Bt,_e,bt.data)):i.texImage3D(a.TEXTURE_3D,0,Qt,bt.width,bt.height,bt.depth,0,Bt,_e,bt.data);else if(A.isFramebufferTexture){if(pe)if(ne)i.texStorage2D(a.TEXTURE_2D,Tt,Qt,bt.width,bt.height);else{let ht=bt.width,mt=bt.height;for(let Rt=0;Rt<Tt;Rt++)i.texImage2D(a.TEXTURE_2D,Rt,Qt,ht,mt,0,Bt,_e,null),ht>>=1,mt>>=1}}else if(ae.length>0){if(ne&&pe){const ht=ie(ae[0]);i.texStorage2D(a.TEXTURE_2D,Tt,Qt,ht.width,ht.height)}for(let ht=0,mt=ae.length;ht<mt;ht++)Dt=ae[ht],ne?q&&i.texSubImage2D(a.TEXTURE_2D,ht,0,0,Bt,_e,Dt):i.texImage2D(a.TEXTURE_2D,ht,Qt,Bt,_e,Dt);A.generateMipmaps=!1}else if(ne){if(pe){const ht=ie(bt);i.texStorage2D(a.TEXTURE_2D,Tt,Qt,ht.width,ht.height)}q&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Bt,_e,bt)}else i.texImage2D(a.TEXTURE_2D,0,Qt,Bt,_e,bt);v(A)&&x(yt),Kt.__version=St.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function X(z,A,at){if(A.image.length!==6)return;const yt=Et(z,A),xt=A.source;i.bindTexture(a.TEXTURE_CUBE_MAP,z.__webglTexture,a.TEXTURE0+at);const St=r.get(xt);if(xt.version!==St.__version||yt===!0){i.activeTexture(a.TEXTURE0+at);const Kt=Ue.getPrimaries(Ue.workingColorSpace),Ut=A.colorSpace===Ha?null:Ue.getPrimaries(A.colorSpace),Pt=A.colorSpace===Ha||Kt===Ut?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const se=A.isCompressedTexture||A.image[0].isCompressedTexture,bt=A.image[0]&&A.image[0].isDataTexture,Bt=[];for(let mt=0;mt<6;mt++)!se&&!bt?Bt[mt]=b(A.image[mt],!0,l.maxCubemapSize):Bt[mt]=bt?A.image[mt].image:A.image[mt],Bt[mt]=ee(A,Bt[mt]);const _e=Bt[0],Qt=c.convert(A.format,A.colorSpace),Dt=c.convert(A.type),ae=L(A.internalFormat,Qt,Dt,A.colorSpace),ne=A.isVideoTexture!==!0,pe=St.__version===void 0||yt===!0,q=xt.dataReady;let Tt=O(A,_e);J(a.TEXTURE_CUBE_MAP,A);let ht;if(se){ne&&pe&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Tt,ae,_e.width,_e.height);for(let mt=0;mt<6;mt++){ht=Bt[mt].mipmaps;for(let Rt=0;Rt<ht.length;Rt++){const Zt=ht[Rt];A.format!==Mi?Qt!==null?ne?q&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Rt,0,0,Zt.width,Zt.height,Qt,Zt.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Rt,ae,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?q&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Rt,0,0,Zt.width,Zt.height,Qt,Dt,Zt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Rt,ae,Zt.width,Zt.height,0,Qt,Dt,Zt.data)}}}else{if(ht=A.mipmaps,ne&&pe){ht.length>0&&Tt++;const mt=ie(Bt[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Tt,ae,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(bt){ne?q&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Bt[mt].width,Bt[mt].height,Qt,Dt,Bt[mt].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ae,Bt[mt].width,Bt[mt].height,0,Qt,Dt,Bt[mt].data);for(let Rt=0;Rt<ht.length;Rt++){const de=ht[Rt].image[mt].image;ne?q&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Rt+1,0,0,de.width,de.height,Qt,Dt,de.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Rt+1,ae,de.width,de.height,0,Qt,Dt,de.data)}}else{ne?q&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Qt,Dt,Bt[mt]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ae,Qt,Dt,Bt[mt]);for(let Rt=0;Rt<ht.length;Rt++){const Zt=ht[Rt];ne?q&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Rt+1,0,0,Qt,Dt,Zt.image[mt]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Rt+1,ae,Qt,Dt,Zt.image[mt])}}}v(A)&&x(a.TEXTURE_CUBE_MAP),St.__version=xt.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function ct(z,A,at,yt,xt,St){const Kt=c.convert(at.format,at.colorSpace),Ut=c.convert(at.type),Pt=L(at.internalFormat,Kt,Ut,at.colorSpace);if(!r.get(A).__hasExternalTextures){const bt=Math.max(1,A.width>>St),Bt=Math.max(1,A.height>>St);xt===a.TEXTURE_3D||xt===a.TEXTURE_2D_ARRAY?i.texImage3D(xt,St,Pt,bt,Bt,A.depth,0,Kt,Ut,null):i.texImage2D(xt,St,Pt,bt,Bt,0,Kt,Ut,null)}i.bindFramebuffer(a.FRAMEBUFFER,z),Vt(A)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,yt,xt,r.get(at).__webglTexture,0,be(A)):(xt===a.TEXTURE_2D||xt>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,yt,xt,r.get(at).__webglTexture,St),i.bindFramebuffer(a.FRAMEBUFFER,null)}function _t(z,A,at){if(a.bindRenderbuffer(a.RENDERBUFFER,z),A.depthBuffer){const yt=A.depthTexture,xt=yt&&yt.isDepthTexture?yt.type:null,St=D(A.stencilBuffer,xt),Kt=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ut=be(A);Vt(A)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ut,St,A.width,A.height):at?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ut,St,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,St,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Kt,a.RENDERBUFFER,z)}else{const yt=A.textures;for(let xt=0;xt<yt.length;xt++){const St=yt[xt],Kt=c.convert(St.format,St.colorSpace),Ut=c.convert(St.type),Pt=L(St.internalFormat,Kt,Ut,St.colorSpace),se=be(A);at&&Vt(A)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,se,Pt,A.width,A.height):Vt(A)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,se,Pt,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,Pt,A.width,A.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function At(z,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(a.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ft(A.depthTexture,0);const yt=r.get(A.depthTexture).__webglTexture,xt=be(A);if(A.depthTexture.format===Ns)Vt(A)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,yt,0,xt):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,yt,0);else if(A.depthTexture.format===Is)Vt(A)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,yt,0,xt):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Ot(z){const A=r.get(z),at=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!A.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");At(A.__webglFramebuffer,z)}else if(at){A.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)i.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[yt]),A.__webglDepthbuffer[yt]=a.createRenderbuffer(),_t(A.__webglDepthbuffer[yt],z,!1)}else i.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=a.createRenderbuffer(),_t(A.__webglDepthbuffer,z,!1);i.bindFramebuffer(a.FRAMEBUFFER,null)}function kt(z,A,at){const yt=r.get(z);A!==void 0&&ct(yt.__webglFramebuffer,z,z.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),at!==void 0&&Ot(z)}function Gt(z){const A=z.texture,at=r.get(z),yt=r.get(A);z.addEventListener("dispose",N);const xt=z.textures,St=z.isWebGLCubeRenderTarget===!0,Kt=xt.length>1;if(Kt||(yt.__webglTexture===void 0&&(yt.__webglTexture=a.createTexture()),yt.__version=A.version,f.memory.textures++),St){at.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer[Ut]=[];for(let Pt=0;Pt<A.mipmaps.length;Pt++)at.__webglFramebuffer[Ut][Pt]=a.createFramebuffer()}else at.__webglFramebuffer[Ut]=a.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer=[];for(let Ut=0;Ut<A.mipmaps.length;Ut++)at.__webglFramebuffer[Ut]=a.createFramebuffer()}else at.__webglFramebuffer=a.createFramebuffer();if(Kt)for(let Ut=0,Pt=xt.length;Ut<Pt;Ut++){const se=r.get(xt[Ut]);se.__webglTexture===void 0&&(se.__webglTexture=a.createTexture(),f.memory.textures++)}if(z.samples>0&&Vt(z)===!1){at.__webglMultisampledFramebuffer=a.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Ut=0;Ut<xt.length;Ut++){const Pt=xt[Ut];at.__webglColorRenderbuffer[Ut]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,at.__webglColorRenderbuffer[Ut]);const se=c.convert(Pt.format,Pt.colorSpace),bt=c.convert(Pt.type),Bt=L(Pt.internalFormat,se,bt,Pt.colorSpace,z.isXRRenderTarget===!0),_e=be(z);a.renderbufferStorageMultisample(a.RENDERBUFFER,_e,Bt,z.width,z.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ut,a.RENDERBUFFER,at.__webglColorRenderbuffer[Ut])}a.bindRenderbuffer(a.RENDERBUFFER,null),z.depthBuffer&&(at.__webglDepthRenderbuffer=a.createRenderbuffer(),_t(at.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(St){i.bindTexture(a.TEXTURE_CUBE_MAP,yt.__webglTexture),J(a.TEXTURE_CUBE_MAP,A);for(let Ut=0;Ut<6;Ut++)if(A.mipmaps&&A.mipmaps.length>0)for(let Pt=0;Pt<A.mipmaps.length;Pt++)ct(at.__webglFramebuffer[Ut][Pt],z,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Pt);else ct(at.__webglFramebuffer[Ut],z,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);v(A)&&x(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let Ut=0,Pt=xt.length;Ut<Pt;Ut++){const se=xt[Ut],bt=r.get(se);i.bindTexture(a.TEXTURE_2D,bt.__webglTexture),J(a.TEXTURE_2D,se),ct(at.__webglFramebuffer,z,se,a.COLOR_ATTACHMENT0+Ut,a.TEXTURE_2D,0),v(se)&&x(a.TEXTURE_2D)}i.unbindTexture()}else{let Ut=a.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ut=z.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ut,yt.__webglTexture),J(Ut,A),A.mipmaps&&A.mipmaps.length>0)for(let Pt=0;Pt<A.mipmaps.length;Pt++)ct(at.__webglFramebuffer[Pt],z,A,a.COLOR_ATTACHMENT0,Ut,Pt);else ct(at.__webglFramebuffer,z,A,a.COLOR_ATTACHMENT0,Ut,0);v(A)&&x(Ut),i.unbindTexture()}z.depthBuffer&&Ot(z)}function Ee(z){const A=z.textures;for(let at=0,yt=A.length;at<yt;at++){const xt=A[at];if(v(xt)){const St=z.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,Kt=r.get(xt).__webglTexture;i.bindTexture(St,Kt),x(St),i.unbindTexture()}}}const I=[],Le=[];function ye(z){if(z.samples>0){if(Vt(z)===!1){const A=z.textures,at=z.width,yt=z.height;let xt=a.COLOR_BUFFER_BIT;const St=z.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Kt=r.get(z),Ut=A.length>1;if(Ut)for(let Pt=0;Pt<A.length;Pt++)i.bindFramebuffer(a.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pt,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Kt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pt,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Pt=0;Pt<A.length;Pt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(xt|=a.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(xt|=a.STENCIL_BUFFER_BIT)),Ut){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Kt.__webglColorRenderbuffer[Pt]);const se=r.get(A[Pt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,se,0)}a.blitFramebuffer(0,0,at,yt,0,0,at,yt,xt,a.NEAREST),m===!0&&(I.length=0,Le.length=0,I.push(a.COLOR_ATTACHMENT0+Pt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(I.push(St),Le.push(St),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Le)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ut)for(let Pt=0;Pt<A.length;Pt++){i.bindFramebuffer(a.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pt,a.RENDERBUFFER,Kt.__webglColorRenderbuffer[Pt]);const se=r.get(A[Pt]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Kt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pt,a.TEXTURE_2D,se,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const A=z.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[A])}}}function be(z){return Math.min(l.maxSamples,z.samples)}function Vt(z){const A=r.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ke(z){const A=f.render.frame;g.get(z)!==A&&(g.set(z,A),z.update())}function ee(z,A){const at=z.colorSpace,yt=z.format,xt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||at!==Xa&&at!==Ha&&(Ue.getTransfer(at)===Ve?(yt!==Mi||xt!==sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),A}function ie(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=H,this.setTexture2D=ft,this.setTexture2DArray=lt,this.setTexture3D=F,this.setTextureCube=nt,this.rebindTextures=kt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Vt}function GR(a,t){function i(r,l=Ha){let c;const f=Ue.getTransfer(l);if(r===sa)return a.UNSIGNED_BYTE;if(r===Kh)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Qh)return a.UNSIGNED_SHORT_5_5_5_1;if(r===y0)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===x0)return a.BYTE;if(r===S0)return a.SHORT;if(r===al)return a.UNSIGNED_SHORT;if(r===Zh)return a.INT;if(r===Dr)return a.UNSIGNED_INT;if(r===aa)return a.FLOAT;if(r===ol)return a.HALF_FLOAT;if(r===M0)return a.ALPHA;if(r===E0)return a.RGB;if(r===Mi)return a.RGBA;if(r===b0)return a.LUMINANCE;if(r===T0)return a.LUMINANCE_ALPHA;if(r===Ns)return a.DEPTH_COMPONENT;if(r===Is)return a.DEPTH_STENCIL;if(r===A0)return a.RED;if(r===Jh)return a.RED_INTEGER;if(r===R0)return a.RG;if(r===$h)return a.RG_INTEGER;if(r===tp)return a.RGBA_INTEGER;if(r===Vc||r===kc||r===Xc||r===Wc)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fh||r===dh||r===hh||r===ph)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===fh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ph)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mh||r===gh||r===_h)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===mh||r===gh)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===_h)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===vh||r===xh||r===Sh||r===yh||r===Mh||r===Eh||r===bh||r===Th||r===Ah||r===Rh||r===wh||r===Ch||r===Dh||r===Uh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===vh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Eh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Th)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ah)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ch)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Uh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qc||r===Lh||r===Nh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===qc)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Lh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===w0||r===Oh||r===Ph||r===zh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===qc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Oh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ph)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bs?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}class VR extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Gc extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kR={type:"move"};class Qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const b of t.hand.values()){const v=i.getJointPose(b,r),x=this._getHandJoint(p,b);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=g.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&S>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(kR)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Gc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const XR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WR=`
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

}`;class qR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Gn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new la({vertexShader:XR,fragmentShader:WR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new fl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YR extends ks{constructor(t,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,S=null,M=null,E=null;const b=new qR,v=i.getContextAttributes();let x=null,L=null;const D=[],O=[],k=new Re;let N=null;const B=new Si;B.layers.enable(1),B.viewport=new vn;const K=new Si;K.layers.enable(2),K.viewport=new vn;const w=[B,K],T=new VR;T.layers.enable(1),T.layers.enable(2);let H=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ct=D[X];return ct===void 0&&(ct=new Qd,D[X]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(X){let ct=D[X];return ct===void 0&&(ct=new Qd,D[X]=ct),ct.getGripSpace()},this.getHand=function(X){let ct=D[X];return ct===void 0&&(ct=new Qd,D[X]=ct),ct.getHandSpace()};function $(X){const ct=O.indexOf(X.inputSource);if(ct===-1)return;const _t=D[ct];_t!==void 0&&(_t.update(X.inputSource,X.frame,p||f),_t.dispatchEvent({type:X.type,data:X.inputSource}))}function ft(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",lt);for(let X=0;X<D.length;X++){const ct=O[X];ct!==null&&(O[X]=null,D[X].disconnect(ct))}H=null,st=null,b.reset(),t.setRenderTarget(x),M=null,S=null,_=null,l=null,L=null,wt.stop(),r.isPresenting=!1,t.setPixelRatio(N),t.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){d=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(X){p=X},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",lt),v.xrCompatible!==!0&&await i.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(k),l.renderState.layers===void 0){const ct={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ct),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Ur(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:sa,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let ct=null,_t=null,At=null;v.depth&&(At=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ct=v.stencil?Is:Ns,_t=v.stencil?Bs:Dr);const Ot={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:c};_=new XRWebGLBinding(l,i),S=_.createProjectionLayer(Ot),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),L=new Ur(S.textureWidth,S.textureHeight,{format:Mi,type:sa,depthTexture:new X0(S.textureWidth,S.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),wt.setContext(l),wt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function lt(X){for(let ct=0;ct<X.removed.length;ct++){const _t=X.removed[ct],At=O.indexOf(_t);At>=0&&(O[At]=null,D[At].disconnect(_t))}for(let ct=0;ct<X.added.length;ct++){const _t=X.added[ct];let At=O.indexOf(_t);if(At===-1){for(let kt=0;kt<D.length;kt++)if(kt>=O.length){O.push(_t),At=kt;break}else if(O[kt]===null){O[kt]=_t,At=kt;break}if(At===-1)break}const Ot=D[At];Ot&&Ot.connect(_t)}}const F=new rt,nt=new rt;function W(X,ct,_t){F.setFromMatrixPosition(ct.matrixWorld),nt.setFromMatrixPosition(_t.matrixWorld);const At=F.distanceTo(nt),Ot=ct.projectionMatrix.elements,kt=_t.projectionMatrix.elements,Gt=Ot[14]/(Ot[10]-1),Ee=Ot[14]/(Ot[10]+1),I=(Ot[9]+1)/Ot[5],Le=(Ot[9]-1)/Ot[5],ye=(Ot[8]-1)/Ot[0],be=(kt[8]+1)/kt[0],Vt=Gt*ye,ke=Gt*be,ee=At/(-ye+be),ie=ee*-ye;ct.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ie),X.translateZ(ee),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const z=Gt+ee,A=Ee+ee,at=Vt-ie,yt=ke+(At-ie),xt=I*Ee/A*z,St=Le*Ee/A*z;X.projectionMatrix.makePerspective(at,yt,xt,St,z,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function gt(X,ct){ct===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ct.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;b.texture!==null&&(X.near=b.depthNear,X.far=b.depthFar),T.near=K.near=B.near=X.near,T.far=K.far=B.far=X.far,(H!==T.near||st!==T.far)&&(l.updateRenderState({depthNear:T.near,depthFar:T.far}),H=T.near,st=T.far,B.near=H,B.far=st,K.near=H,K.far=st,B.updateProjectionMatrix(),K.updateProjectionMatrix(),X.updateProjectionMatrix());const ct=X.parent,_t=T.cameras;gt(T,ct);for(let At=0;At<_t.length;At++)gt(_t[At],ct);_t.length===2?W(T,B,K):T.projectionMatrix.copy(B.projectionMatrix),U(X,T,ct)};function U(X,ct,_t){_t===null?X.matrix.copy(ct.matrixWorld):(X.matrix.copy(_t.matrixWorld),X.matrix.invert(),X.matrix.multiply(ct.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ct.projectionMatrix),X.projectionMatrixInverse.copy(ct.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=rl*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(X){m=X,S!==null&&(S.fixedFoveation=X),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=X)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(T)};let J=null;function Et(X,ct){if(g=ct.getViewerPose(p||f),E=ct,g!==null){const _t=g.views;M!==null&&(t.setRenderTargetFramebuffer(L,M.framebuffer),t.setRenderTarget(L));let At=!1;_t.length!==T.cameras.length&&(T.cameras.length=0,At=!0);for(let kt=0;kt<_t.length;kt++){const Gt=_t[kt];let Ee=null;if(M!==null)Ee=M.getViewport(Gt);else{const Le=_.getViewSubImage(S,Gt);Ee=Le.viewport,kt===0&&(t.setRenderTargetTextures(L,Le.colorTexture,S.ignoreDepthValues?void 0:Le.depthStencilTexture),t.setRenderTarget(L))}let I=w[kt];I===void 0&&(I=new Si,I.layers.enable(kt),I.viewport=new vn,w[kt]=I),I.matrix.fromArray(Gt.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(Gt.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),kt===0&&(T.matrix.copy(I.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),At===!0&&T.cameras.push(I)}const Ot=l.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const kt=_.getDepthInformation(_t[0]);kt&&kt.isValid&&kt.texture&&b.init(t,kt,l.renderState)}}for(let _t=0;_t<D.length;_t++){const At=O[_t],Ot=D[_t];At!==null&&Ot!==void 0&&Ot.update(At,ct,p||f)}J&&J(X,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),E=null}const wt=new V0;wt.setAnimationLoop(Et),this.setAnimationLoop=function(X){J=X},this.dispose=function(){}}}const xr=new oa,jR=new un;function ZR(a,t){function i(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function r(v,x){x.color.getRGB(v.fogColor.value,I0(a)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function l(v,x,L,D,O){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(v,x):x.isMeshToonMaterial?(c(v,x),_(v,x)):x.isMeshPhongMaterial?(c(v,x),g(v,x)):x.isMeshStandardMaterial?(c(v,x),S(v,x),x.isMeshPhysicalMaterial&&M(v,x,O)):x.isMeshMatcapMaterial?(c(v,x),E(v,x)):x.isMeshDepthMaterial?c(v,x):x.isMeshDistanceMaterial?(c(v,x),b(v,x)):x.isMeshNormalMaterial?c(v,x):x.isLineBasicMaterial?(f(v,x),x.isLineDashedMaterial&&d(v,x)):x.isPointsMaterial?m(v,x,L,D):x.isSpriteMaterial?p(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,i(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,i(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,i(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===Hn&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,i(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===Hn&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,i(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,i(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const L=t.get(x),D=L.envMap,O=L.envMapRotation;D&&(v.envMap.value=D,xr.copy(O),xr.x*=-1,xr.y*=-1,xr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),v.envMapRotation.value.setFromMatrix4(jR.makeRotationFromEuler(xr)),v.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap&&(v.lightMap.value=x.lightMap,v.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,v.lightMapTransform)),x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,v.aoMapTransform))}function f(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,i(x.map,v.mapTransform))}function d(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function m(v,x,L,D){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*L,v.scale.value=D*.5,x.map&&(v.map.value=x.map,i(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,i(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function p(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,i(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,i(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function g(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function _(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function S(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,v.roughnessMapTransform)),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function M(v,x,L){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Hn&&v.clearcoatNormalScale.value.negate())),x.dispersion>0&&(v.dispersion.value=x.dispersion),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=L.texture,v.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,x){x.matcap&&(v.matcap.value=x.matcap)}function b(v,x){const L=t.get(x).light;v.referencePosition.value.setFromMatrixPosition(L.matrixWorld),v.nearDistance.value=L.shadow.camera.near,v.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function KR(a,t,i,r){let l={},c={},f=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,D){const O=D.program;r.uniformBlockBinding(L,O)}function p(L,D){let O=l[L.id];O===void 0&&(E(L),O=g(L),l[L.id]=O,L.addEventListener("dispose",v));const k=D.program;r.updateUBOMapping(L,k);const N=t.render.frame;c[L.id]!==N&&(S(L),c[L.id]=N)}function g(L){const D=_();L.__bindingPointIndex=D;const O=a.createBuffer(),k=L.__size,N=L.usage;return a.bindBuffer(a.UNIFORM_BUFFER,O),a.bufferData(a.UNIFORM_BUFFER,k,N),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,D,O),O}function _(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const D=l[L.id],O=L.uniforms,k=L.__cache;a.bindBuffer(a.UNIFORM_BUFFER,D);for(let N=0,B=O.length;N<B;N++){const K=Array.isArray(O[N])?O[N]:[O[N]];for(let w=0,T=K.length;w<T;w++){const H=K[w];if(M(H,N,w,k)===!0){const st=H.__offset,$=Array.isArray(H.value)?H.value:[H.value];let ft=0;for(let lt=0;lt<$.length;lt++){const F=$[lt],nt=b(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,a.bufferSubData(a.UNIFORM_BUFFER,st+ft,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,ft),ft+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,st,H.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function M(L,D,O,k){const N=L.value,B=D+"_"+O;if(k[B]===void 0)return typeof N=="number"||typeof N=="boolean"?k[B]=N:k[B]=N.clone(),!0;{const K=k[B];if(typeof N=="number"||typeof N=="boolean"){if(K!==N)return k[B]=N,!0}else if(K.equals(N)===!1)return K.copy(N),!0}return!1}function E(L){const D=L.uniforms;let O=0;const k=16;for(let B=0,K=D.length;B<K;B++){const w=Array.isArray(D[B])?D[B]:[D[B]];for(let T=0,H=w.length;T<H;T++){const st=w[T],$=Array.isArray(st.value)?st.value:[st.value];for(let ft=0,lt=$.length;ft<lt;ft++){const F=$[ft],nt=b(F),W=O%k,gt=W%nt.boundary,U=W+gt;O+=gt,U!==0&&k-U<nt.storage&&(O+=k-U),st.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=O,O+=nt.storage}}}const N=O%k;return N>0&&(O+=k-N),L.__size=O,L.__cache={},this}function b(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),D}function v(L){const D=L.target;D.removeEventListener("dispose",v);const O=f.indexOf(D.__bindingPointIndex);f.splice(O,1),a.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function x(){for(const L in l)a.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:m,update:p,dispose:x}}class QR{constructor(t={}){const{canvas:i=HE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const M=new Uint32Array(4),E=new Int32Array(4);let b=null,v=null;const x=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Di,this.toneMapping=Va,this.toneMappingExposure=1;const D=this;let O=!1,k=0,N=0,B=null,K=-1,w=null;const T=new vn,H=new vn;let st=null;const $=new ze(0);let ft=0,lt=i.width,F=i.height,nt=1,W=null,gt=null;const U=new vn(0,0,lt,F),J=new vn(0,0,lt,F);let Et=!1;const wt=new G0;let X=!1,ct=!1;const _t=new un,At=new rt,Ot=new vn,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Ee(){return B===null?nt:1}let I=r;function Le(C,Y){return i.getContext(C,Y)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${jh}`),i.addEventListener("webglcontextlost",ht,!1),i.addEventListener("webglcontextrestored",mt,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),I===null){const Y="webgl2";if(I=Le(Y,C),I===null)throw Le(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ye,be,Vt,ke,ee,ie,z,A,at,yt,xt,St,Kt,Ut,Pt,se,bt,Bt,_e,Qt,Dt,ae,ne,pe;function q(){ye=new i1(I),ye.init(),ae=new GR(I,ye),be=new QA(I,ye,t,ae),Vt=new IR(I),ke=new s1(I),ee=new bR,ie=new HR(I,ye,Vt,ee,be,ae,ke),z=new $A(D),A=new n1(D),at=new hb(I),ne=new ZA(I,at),yt=new a1(I,at,ke,ne),xt=new l1(I,yt,at,ke),_e=new o1(I,be,ie),se=new JA(ee),St=new ER(D,z,A,ye,be,ne,se),Kt=new ZR(D,ee),Ut=new AR,Pt=new LR(ye),Bt=new jA(D,z,A,Vt,xt,S,m),bt=new BR(D,xt,be),pe=new KR(I,ke,be,Vt),Qt=new KA(I,ye,ke),Dt=new r1(I,ye,ke),ke.programs=St.programs,D.capabilities=be,D.extensions=ye,D.properties=ee,D.renderLists=Ut,D.shadowMap=bt,D.state=Vt,D.info=ke}q();const Tt=new YR(D,I);this.xr=Tt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=ye.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ye.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(C){C!==void 0&&(nt=C,this.setSize(lt,F,!1))},this.getSize=function(C){return C.set(lt,F)},this.setSize=function(C,Y,tt=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}lt=C,F=Y,i.width=Math.floor(C*nt),i.height=Math.floor(Y*nt),tt===!0&&(i.style.width=C+"px",i.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(lt*nt,F*nt).floor()},this.setDrawingBufferSize=function(C,Y,tt){lt=C,F=Y,nt=tt,i.width=Math.floor(C*tt),i.height=Math.floor(Y*tt),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,Y,tt,it){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,Y,tt,it),Vt.viewport(T.copy(U).multiplyScalar(nt).round())},this.getScissor=function(C){return C.copy(J)},this.setScissor=function(C,Y,tt,it){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,Y,tt,it),Vt.scissor(H.copy(J).multiplyScalar(nt).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(C){Vt.setScissorTest(Et=C)},this.setOpaqueSort=function(C){W=C},this.setTransparentSort=function(C){gt=C},this.getClearColor=function(C){return C.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(C=!0,Y=!0,tt=!0){let it=0;if(C){let j=!1;if(B!==null){const Mt=B.texture.format;j=Mt===tp||Mt===$h||Mt===Jh}if(j){const Mt=B.texture.type,Lt=Mt===sa||Mt===Dr||Mt===al||Mt===Bs||Mt===Kh||Mt===Qh,zt=Bt.getClearColor(),Ct=Bt.getClearAlpha(),Jt=zt.r,te=zt.g,Wt=zt.b;Lt?(M[0]=Jt,M[1]=te,M[2]=Wt,M[3]=Ct,I.clearBufferuiv(I.COLOR,0,M)):(E[0]=Jt,E[1]=te,E[2]=Wt,E[3]=Ct,I.clearBufferiv(I.COLOR,0,E))}else it|=I.COLOR_BUFFER_BIT}Y&&(it|=I.DEPTH_BUFFER_BIT),tt&&(it|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ht,!1),i.removeEventListener("webglcontextrestored",mt,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),Ut.dispose(),Pt.dispose(),ee.dispose(),z.dispose(),A.dispose(),xt.dispose(),ne.dispose(),pe.dispose(),St.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",zn),Tt.removeEventListener("sessionend",ca),Pi.stop()};function ht(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const C=ke.autoReset,Y=bt.enabled,tt=bt.autoUpdate,it=bt.needsUpdate,j=bt.type;q(),ke.autoReset=C,bt.enabled=Y,bt.autoUpdate=tt,bt.needsUpdate=it,bt.type=j}function Rt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Zt(C){const Y=C.target;Y.removeEventListener("dispose",Zt),de(Y)}function de(C){Ie(C),ee.remove(C)}function Ie(C){const Y=ee.get(C).programs;Y!==void 0&&(Y.forEach(function(tt){St.releaseProgram(tt)}),C.isShaderMaterial&&St.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,tt,it,j,Mt){Y===null&&(Y=kt);const Lt=j.isMesh&&j.matrixWorld.determinant()<0,zt=ua(C,Y,tt,it,j);Vt.setMaterial(it,Lt);let Ct=tt.index,Jt=1;if(it.wireframe===!0){if(Ct=yt.getWireframeAttribute(tt),Ct===void 0)return;Jt=2}const te=tt.drawRange,Wt=tt.attributes.position;let me=te.start*Jt,we=(te.start+te.count)*Jt;Mt!==null&&(me=Math.max(me,Mt.start*Jt),we=Math.min(we,(Mt.start+Mt.count)*Jt)),Ct!==null?(me=Math.max(me,0),we=Math.min(we,Ct.count)):Wt!=null&&(me=Math.max(me,0),we=Math.min(we,Wt.count));const Xe=we-me;if(Xe<0||Xe===1/0)return;ne.setup(j,it,zt,tt,Ct);let En,Ae=Qt;if(Ct!==null&&(En=at.get(Ct),Ae=Dt,Ae.setIndex(En)),j.isMesh)it.wireframe===!0?(Vt.setLineWidth(it.wireframeLinewidth*Ee()),Ae.setMode(I.LINES)):Ae.setMode(I.TRIANGLES);else if(j.isLine){let qt=it.linewidth;qt===void 0&&(qt=1),Vt.setLineWidth(qt*Ee()),j.isLineSegments?Ae.setMode(I.LINES):j.isLineLoop?Ae.setMode(I.LINE_LOOP):Ae.setMode(I.LINE_STRIP)}else j.isPoints?Ae.setMode(I.POINTS):j.isSprite&&Ae.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Ae.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Ae.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qt=j._multiDrawStarts,Ye=j._multiDrawCounts,xe=j._multiDrawCount,Qe=Ct?at.get(Ct).bytesPerElement:1,on=ee.get(it).currentProgram.getUniforms();for(let bn=0;bn<xe;bn++)on.setValue(I,"_gl_DrawID",bn),Ae.render(qt[bn]/Qe,Ye[bn])}else if(j.isInstancedMesh)Ae.renderInstances(me,Xe,j.count);else if(tt.isInstancedBufferGeometry){const qt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Ye=Math.min(tt.instanceCount,qt);Ae.renderInstances(me,Xe,Ye)}else Ae.render(me,Xe)};function rn(C,Y,tt){C.transparent===!0&&C.side===ia&&C.forceSinglePass===!1?(C.side=Hn,C.needsUpdate=!0,kn(C,Y,tt),C.side=ka,C.needsUpdate=!0,kn(C,Y,tt),C.side=ia):kn(C,Y,tt)}this.compile=function(C,Y,tt=null){tt===null&&(tt=C),v=Pt.get(tt),v.init(Y),L.push(v),tt.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),C!==tt&&C.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const it=new Set;return C.traverse(function(j){const Mt=j.material;if(Mt)if(Array.isArray(Mt))for(let Lt=0;Lt<Mt.length;Lt++){const zt=Mt[Lt];rn(zt,tt,j),it.add(zt)}else rn(Mt,tt,j),it.add(Mt)}),L.pop(),v=null,it},this.compileAsync=function(C,Y,tt=null){const it=this.compile(C,Y,tt);return new Promise(j=>{function Mt(){if(it.forEach(function(Lt){ee.get(Lt).currentProgram.isReady()&&it.delete(Lt)}),it.size===0){j(C);return}setTimeout(Mt,10)}ye.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Te=null;function $n(C){Te&&Te(C)}function zn(){Pi.stop()}function ca(){Pi.start()}const Pi=new V0;Pi.setAnimationLoop($n),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(C){Te=C,Tt.setAnimationLoop(C),C===null?Pi.stop():Pi.start()},Tt.addEventListener("sessionstart",zn),Tt.addEventListener("sessionend",ca),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(Y),Y=Tt.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,Y,B),v=Pt.get(C,L.length),v.init(Y),L.push(v),_t.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),wt.setFromProjectionMatrix(_t),ct=this.localClippingEnabled,X=se.init(this.clippingPlanes,ct),b=Ut.get(C,x.length),b.init(),x.push(b),Tt.enabled===!0&&Tt.isPresenting===!0){const Mt=D.xr.getDepthSensingMesh();Mt!==null&&Or(Mt,Y,-1/0,D.sortObjects)}Or(C,Y,0,D.sortObjects),b.finish(),D.sortObjects===!0&&b.sort(W,gt),Gt=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Gt&&Bt.addToRenderList(b,C),this.info.render.frame++,X===!0&&se.beginShadows();const tt=v.state.shadowsArray;bt.render(tt,C,Y),X===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=b.opaque,j=b.transmissive;if(v.setupLights(),Y.isArrayCamera){const Mt=Y.cameras;if(j.length>0)for(let Lt=0,zt=Mt.length;Lt<zt;Lt++){const Ct=Mt[Lt];Zs(it,j,C,Ct)}Gt&&Bt.render(C);for(let Lt=0,zt=Mt.length;Lt<zt;Lt++){const Ct=Mt[Lt];js(b,C,Ct,Ct.viewport)}}else j.length>0&&Zs(it,j,C,Y),Gt&&Bt.render(C),js(b,C,Y);B!==null&&(ie.updateMultisampleRenderTarget(B),ie.updateRenderTargetMipmap(B)),C.isScene===!0&&C.onAfterRender(D,C,Y),ne.resetDefaultState(),K=-1,w=null,L.pop(),L.length>0?(v=L[L.length-1],X===!0&&se.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,x.pop(),x.length>0?b=x[x.length-1]:b=null};function Or(C,Y,tt,it){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)tt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||wt.intersectsSprite(C)){it&&Ot.setFromMatrixPosition(C.matrixWorld).applyMatrix4(_t);const Lt=xt.update(C),zt=C.material;zt.visible&&b.push(C,Lt,zt,tt,Ot.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||wt.intersectsObject(C))){const Lt=xt.update(C),zt=C.material;if(it&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ot.copy(C.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Ot.copy(Lt.boundingSphere.center)),Ot.applyMatrix4(C.matrixWorld).applyMatrix4(_t)),Array.isArray(zt)){const Ct=Lt.groups;for(let Jt=0,te=Ct.length;Jt<te;Jt++){const Wt=Ct[Jt],me=zt[Wt.materialIndex];me&&me.visible&&b.push(C,Lt,me,tt,Ot.z,Wt)}}else zt.visible&&b.push(C,Lt,zt,tt,Ot.z,null)}}const Mt=C.children;for(let Lt=0,zt=Mt.length;Lt<zt;Lt++)Or(Mt[Lt],Y,tt,it)}function js(C,Y,tt,it){const j=C.opaque,Mt=C.transmissive,Lt=C.transparent;v.setupLightsView(tt),X===!0&&se.setGlobalState(D.clippingPlanes,tt),it&&Vt.viewport(T.copy(it)),j.length>0&&Wa(j,Y,tt),Mt.length>0&&Wa(Mt,Y,tt),Lt.length>0&&Wa(Lt,Y,tt),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Zs(C,Y,tt,it){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[it.id]===void 0&&(v.state.transmissionRenderTarget[it.id]=new Ur(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?ol:sa,minFilter:Ar,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Mt=v.state.transmissionRenderTarget[it.id],Lt=it.viewport||T;Mt.setSize(Lt.z,Lt.w);const zt=D.getRenderTarget();D.setRenderTarget(Mt),D.getClearColor($),ft=D.getClearAlpha(),ft<1&&D.setClearColor(16777215,.5),D.clear(),Gt&&Bt.render(tt);const Ct=D.toneMapping;D.toneMapping=Va;const Jt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),v.setupLightsView(it),X===!0&&se.setGlobalState(D.clippingPlanes,it),Wa(C,tt,it),ie.updateMultisampleRenderTarget(Mt),ie.updateRenderTargetMipmap(Mt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Wt=0,me=Y.length;Wt<me;Wt++){const we=Y[Wt],Xe=we.object,En=we.geometry,Ae=we.material,qt=we.group;if(Ae.side===ia&&Xe.layers.test(it.layers)){const Ye=Ae.side;Ae.side=Hn,Ae.needsUpdate=!0,pl(Xe,tt,it,En,Ae,qt),Ae.side=Ye,Ae.needsUpdate=!0,te=!0}}te===!0&&(ie.updateMultisampleRenderTarget(Mt),ie.updateRenderTargetMipmap(Mt))}D.setRenderTarget(zt),D.setClearColor($,ft),Jt!==void 0&&(it.viewport=Jt),D.toneMapping=Ct}function Wa(C,Y,tt){const it=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Mt=C.length;j<Mt;j++){const Lt=C[j],zt=Lt.object,Ct=Lt.geometry,Jt=it===null?Lt.material:it,te=Lt.group;zt.layers.test(tt.layers)&&pl(zt,Y,tt,Ct,Jt,te)}}function pl(C,Y,tt,it,j,Mt){C.onBeforeRender(D,Y,tt,it,j,Mt),C.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.transparent===!0&&j.side===ia&&j.forceSinglePass===!1?(j.side=Hn,j.needsUpdate=!0,D.renderBufferDirect(tt,Y,it,j,C,Mt),j.side=ka,j.needsUpdate=!0,D.renderBufferDirect(tt,Y,it,j,C,Mt),j.side=ia):D.renderBufferDirect(tt,Y,it,j,C,Mt),C.onAfterRender(D,Y,tt,it,j,Mt)}function kn(C,Y,tt){Y.isScene!==!0&&(Y=kt);const it=ee.get(C),j=v.state.lights,Mt=v.state.shadowsArray,Lt=j.state.version,zt=St.getParameters(C,j.state,Mt,Y,tt),Ct=St.getProgramCacheKey(zt);let Jt=it.programs;it.environment=C.isMeshStandardMaterial?Y.environment:null,it.fog=Y.fog,it.envMap=(C.isMeshStandardMaterial?A:z).get(C.envMap||it.environment),it.envMapRotation=it.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,Jt===void 0&&(C.addEventListener("dispose",Zt),Jt=new Map,it.programs=Jt);let te=Jt.get(Ct);if(te!==void 0){if(it.currentProgram===te&&it.lightsStateVersion===Lt)return xn(C,zt),te}else zt.uniforms=St.getUniforms(C),C.onBeforeCompile(zt,D),te=St.acquireProgram(zt,Ct),Jt.set(Ct,te),it.uniforms=zt.uniforms;const Wt=it.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=se.uniform),xn(C,zt),it.needsLights=gu(C),it.lightsStateVersion=Lt,it.needsLights&&(Wt.ambientLightColor.value=j.state.ambient,Wt.lightProbe.value=j.state.probe,Wt.directionalLights.value=j.state.directional,Wt.directionalLightShadows.value=j.state.directionalShadow,Wt.spotLights.value=j.state.spot,Wt.spotLightShadows.value=j.state.spotShadow,Wt.rectAreaLights.value=j.state.rectArea,Wt.ltc_1.value=j.state.rectAreaLTC1,Wt.ltc_2.value=j.state.rectAreaLTC2,Wt.pointLights.value=j.state.point,Wt.pointLightShadows.value=j.state.pointShadow,Wt.hemisphereLights.value=j.state.hemi,Wt.directionalShadowMap.value=j.state.directionalShadowMap,Wt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Wt.spotShadowMap.value=j.state.spotShadowMap,Wt.spotLightMatrix.value=j.state.spotLightMatrix,Wt.spotLightMap.value=j.state.spotLightMap,Wt.pointShadowMap.value=j.state.pointShadowMap,Wt.pointShadowMatrix.value=j.state.pointShadowMatrix),it.currentProgram=te,it.uniformsList=null,te}function sn(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Yc.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function xn(C,Y){const tt=ee.get(C);tt.outputColorSpace=Y.outputColorSpace,tt.batching=Y.batching,tt.batchingColor=Y.batchingColor,tt.instancing=Y.instancing,tt.instancingColor=Y.instancingColor,tt.instancingMorph=Y.instancingMorph,tt.skinning=Y.skinning,tt.morphTargets=Y.morphTargets,tt.morphNormals=Y.morphNormals,tt.morphColors=Y.morphColors,tt.morphTargetsCount=Y.morphTargetsCount,tt.numClippingPlanes=Y.numClippingPlanes,tt.numIntersection=Y.numClipIntersection,tt.vertexAlphas=Y.vertexAlphas,tt.vertexTangents=Y.vertexTangents,tt.toneMapping=Y.toneMapping}function ua(C,Y,tt,it,j){Y.isScene!==!0&&(Y=kt),ie.resetTextureUnits();const Mt=Y.fog,Lt=it.isMeshStandardMaterial?Y.environment:null,zt=B===null?D.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Xa,Ct=(it.isMeshStandardMaterial?A:z).get(it.envMap||Lt),Jt=it.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,te=!!tt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Wt=!!tt.morphAttributes.position,me=!!tt.morphAttributes.normal,we=!!tt.morphAttributes.color;let Xe=Va;it.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Xe=D.toneMapping);const En=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Ae=En!==void 0?En.length:0,qt=ee.get(it),Ye=v.state.lights;if(X===!0&&(ct===!0||C!==w)){const Bn=C===w&&it.id===K;se.setState(it,C,Bn)}let xe=!1;it.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ye.state.version||qt.outputColorSpace!==zt||j.isBatchedMesh&&qt.batching===!1||!j.isBatchedMesh&&qt.batching===!0||j.isBatchedMesh&&qt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qt.instancing===!1||!j.isInstancedMesh&&qt.instancing===!0||j.isSkinnedMesh&&qt.skinning===!1||!j.isSkinnedMesh&&qt.skinning===!0||j.isInstancedMesh&&qt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qt.instancingMorph===!1&&j.morphTexture!==null||qt.envMap!==Ct||it.fog===!0&&qt.fog!==Mt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==se.numPlanes||qt.numIntersection!==se.numIntersection)||qt.vertexAlphas!==Jt||qt.vertexTangents!==te||qt.morphTargets!==Wt||qt.morphNormals!==me||qt.morphColors!==we||qt.toneMapping!==Xe||qt.morphTargetsCount!==Ae)&&(xe=!0):(xe=!0,qt.__version=it.version);let Qe=qt.currentProgram;xe===!0&&(Qe=kn(it,Y,j));let on=!1,bn=!1,Qs=!1;const Ge=Qe.getUniforms(),di=qt.uniforms;if(Vt.useProgram(Qe.program)&&(on=!0,bn=!0,Qs=!0),it.id!==K&&(K=it.id,bn=!0),on||w!==C){Ge.setValue(I,"projectionMatrix",C.projectionMatrix),Ge.setValue(I,"viewMatrix",C.matrixWorldInverse);const Bn=Ge.map.cameraPosition;Bn!==void 0&&Bn.setValue(I,At.setFromMatrixPosition(C.matrixWorld)),be.logarithmicDepthBuffer&&Ge.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ge.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,bn=!0,Qs=!0)}if(j.isSkinnedMesh){Ge.setOptional(I,j,"bindMatrix"),Ge.setOptional(I,j,"bindMatrixInverse");const Bn=j.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Ge.setValue(I,"boneTexture",Bn.boneTexture,ie))}j.isBatchedMesh&&(Ge.setOptional(I,j,"batchingTexture"),Ge.setValue(I,"batchingTexture",j._matricesTexture,ie),Ge.setOptional(I,j,"batchingIdTexture"),Ge.setValue(I,"batchingIdTexture",j._indirectTexture,ie),Ge.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&Ge.setValue(I,"batchingColorTexture",j._colorsTexture,ie));const fa=tt.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0)&&_e.update(j,tt,Qe),(bn||qt.receiveShadow!==j.receiveShadow)&&(qt.receiveShadow=j.receiveShadow,Ge.setValue(I,"receiveShadow",j.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(di.envMap.value=Ct,di.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&Y.environment!==null&&(di.envMapIntensity.value=Y.environmentIntensity),bn&&(Ge.setValue(I,"toneMappingExposure",D.toneMappingExposure),qt.needsLights&&Ks(di,Qs),Mt&&it.fog===!0&&Kt.refreshFogUniforms(di,Mt),Kt.refreshMaterialUniforms(di,it,nt,F,v.state.transmissionRenderTarget[C.id]),Yc.upload(I,sn(qt),di,ie)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Yc.upload(I,sn(qt),di,ie),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ge.setValue(I,"center",j.center),Ge.setValue(I,"modelViewMatrix",j.modelViewMatrix),Ge.setValue(I,"normalMatrix",j.normalMatrix),Ge.setValue(I,"modelMatrix",j.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Bn=it.uniformsGroups;for(let Tn=0,Js=Bn.length;Tn<Js;Tn++){const $s=Bn[Tn];pe.update($s,Qe),pe.bind($s,Qe)}}return Qe}function Ks(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function gu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,Y,tt){ee.get(C.texture).__webglTexture=Y,ee.get(C.depthTexture).__webglTexture=tt;const it=ee.get(C);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=tt===void 0,it.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,Y){const tt=ee.get(C);tt.__webglFramebuffer=Y,tt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,tt=0){B=C,k=Y,N=tt;let it=!0,j=null,Mt=!1,Lt=!1;if(C){const Ct=ee.get(C);Ct.__useDefaultFramebuffer!==void 0?(Vt.bindFramebuffer(I.FRAMEBUFFER,null),it=!1):Ct.__webglFramebuffer===void 0?ie.setupRenderTarget(C):Ct.__hasExternalTextures&&ie.rebindTextures(C,ee.get(C.texture).__webglTexture,ee.get(C.depthTexture).__webglTexture);const Jt=C.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Lt=!0);const te=ee.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(te[Y])?j=te[Y][tt]:j=te[Y],Mt=!0):C.samples>0&&ie.useMultisampledRTT(C)===!1?j=ee.get(C).__webglMultisampledFramebuffer:Array.isArray(te)?j=te[tt]:j=te,T.copy(C.viewport),H.copy(C.scissor),st=C.scissorTest}else T.copy(U).multiplyScalar(nt).floor(),H.copy(J).multiplyScalar(nt).floor(),st=Et;if(Vt.bindFramebuffer(I.FRAMEBUFFER,j)&&it&&Vt.drawBuffers(C,j),Vt.viewport(T),Vt.scissor(H),Vt.setScissorTest(st),Mt){const Ct=ee.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ct.__webglTexture,tt)}else if(Lt){const Ct=ee.get(C.texture),Jt=Y||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ct.__webglTexture,tt||0,Jt)}K=-1},this.readRenderTargetPixels=function(C,Y,tt,it,j,Mt,Lt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=ee.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(zt=zt[Lt]),zt){Vt.bindFramebuffer(I.FRAMEBUFFER,zt);try{const Ct=C.texture,Jt=Ct.format,te=Ct.type;if(!be.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-it&&tt>=0&&tt<=C.height-j&&I.readPixels(Y,tt,it,j,ae.convert(Jt),ae.convert(te),Mt)}finally{const Ct=B!==null?ee.get(B).__webglFramebuffer:null;Vt.bindFramebuffer(I.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(C,Y,tt,it,j,Mt,Lt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=ee.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(zt=zt[Lt]),zt){Vt.bindFramebuffer(I.FRAMEBUFFER,zt);try{const Ct=C.texture,Jt=Ct.format,te=Ct.type;if(!be.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=C.width-it&&tt>=0&&tt<=C.height-j){const Wt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Wt),I.bufferData(I.PIXEL_PACK_BUFFER,Mt.byteLength,I.STREAM_READ),I.readPixels(Y,tt,it,j,ae.convert(Jt),ae.convert(te),0),I.flush();const me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await GE(I,me,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Wt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Mt)}finally{I.deleteBuffer(Wt),I.deleteSync(me)}return Mt}}finally{const Ct=B!==null?ee.get(B).__webglFramebuffer:null;Vt.bindFramebuffer(I.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(C,Y=null,tt=0){C.isTexture!==!0&&(il("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,C=arguments[1]);const it=Math.pow(2,-tt),j=Math.floor(C.image.width*it),Mt=Math.floor(C.image.height*it),Lt=Y!==null?Y.x:0,zt=Y!==null?Y.y:0;ie.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,tt,0,0,Lt,zt,j,Mt),Vt.unbindTexture()},this.copyTextureToTexture=function(C,Y,tt=null,it=null,j=0){C.isTexture!==!0&&(il("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,C=arguments[1],Y=arguments[2],j=arguments[3]||0,tt=null);let Mt,Lt,zt,Ct,Jt,te;tt!==null?(Mt=tt.max.x-tt.min.x,Lt=tt.max.y-tt.min.y,zt=tt.min.x,Ct=tt.min.y):(Mt=C.image.width,Lt=C.image.height,zt=0,Ct=0),it!==null?(Jt=it.x,te=it.y):(Jt=0,te=0);const Wt=ae.convert(Y.format),me=ae.convert(Y.type);ie.setTexture2D(Y,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Y.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Y.unpackAlignment);const we=I.getParameter(I.UNPACK_ROW_LENGTH),Xe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),En=I.getParameter(I.UNPACK_SKIP_PIXELS),Ae=I.getParameter(I.UNPACK_SKIP_ROWS),qt=I.getParameter(I.UNPACK_SKIP_IMAGES),Ye=C.isCompressedTexture?C.mipmaps[j]:C.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ye.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ye.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,zt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ct),C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,j,Jt,te,Mt,Lt,Wt,me,Ye.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,j,Jt,te,Ye.width,Ye.height,Wt,Ye.data):I.texSubImage2D(I.TEXTURE_2D,j,Jt,te,Mt,Lt,Wt,me,Ye),I.pixelStorei(I.UNPACK_ROW_LENGTH,we),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,En),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ae),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qt),j===0&&Y.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Vt.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,tt=null,it=null,j=0){C.isTexture!==!0&&(il("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,it=arguments[1]||null,C=arguments[2],Y=arguments[3],j=arguments[4]||0);let Mt,Lt,zt,Ct,Jt,te,Wt,me,we;const Xe=C.isCompressedTexture?C.mipmaps[j]:C.image;tt!==null?(Mt=tt.max.x-tt.min.x,Lt=tt.max.y-tt.min.y,zt=tt.max.z-tt.min.z,Ct=tt.min.x,Jt=tt.min.y,te=tt.min.z):(Mt=Xe.width,Lt=Xe.height,zt=Xe.depth,Ct=0,Jt=0,te=0),it!==null?(Wt=it.x,me=it.y,we=it.z):(Wt=0,me=0,we=0);const En=ae.convert(Y.format),Ae=ae.convert(Y.type);let qt;if(Y.isData3DTexture)ie.setTexture3D(Y,0),qt=I.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)ie.setTexture2DArray(Y,0),qt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Y.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ye=I.getParameter(I.UNPACK_ROW_LENGTH),xe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Qe=I.getParameter(I.UNPACK_SKIP_PIXELS),on=I.getParameter(I.UNPACK_SKIP_ROWS),bn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Xe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ct),I.pixelStorei(I.UNPACK_SKIP_ROWS,Jt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,te),C.isDataTexture||C.isData3DTexture?I.texSubImage3D(qt,j,Wt,me,we,Mt,Lt,zt,En,Ae,Xe.data):Y.isCompressedArrayTexture?I.compressedTexSubImage3D(qt,j,Wt,me,we,Mt,Lt,zt,En,Xe.data):I.texSubImage3D(qt,j,Wt,me,we,Mt,Lt,zt,En,Ae,Xe),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ye),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qe),I.pixelStorei(I.UNPACK_SKIP_ROWS,on),I.pixelStorei(I.UNPACK_SKIP_IMAGES,bn),j===0&&Y.generateMipmaps&&I.generateMipmap(qt),Vt.unbindTexture()},this.initRenderTarget=function(C){ee.get(C).__webglFramebuffer===void 0&&ie.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ie.setTextureCube(C,0):C.isData3DTexture?ie.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ie.setTexture2DArray(C,0):ie.setTexture2D(C,0),Vt.unbindTexture()},this.resetState=function(){k=0,N=0,B=null,Vt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===ep?"display-p3":"srgb",i.unpackColorSpace=Ue.workingColorSpace===ou?"display-p3":"srgb"}}class JR extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jh);const $R=`
varying vec2 v_texcoord;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    v_texcoord = uv;
}
`,tw=`
varying vec2 v_texcoord;

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_pixelRatio;

uniform float u_shapeSize;
uniform float u_roundness;
uniform float u_borderSize;
uniform float u_circleSize;
uniform float u_circleEdge;

#ifndef PI
#define PI 3.1415926535897932384626433832795
#endif
#ifndef TWO_PI
#define TWO_PI 6.2831853071795864769252867665590
#endif

#ifndef VAR
#define VAR 0
#endif

#ifndef FNC_COORD
#define FNC_COORD
vec2 coord(in vec2 p) {
    p = p / u_resolution.xy;
    if (u_resolution.x > u_resolution.y) {
        p.x *= u_resolution.x / u_resolution.y;
        p.x += (u_resolution.y - u_resolution.x) / u_resolution.y / 2.0;
    } else {
        p.y *= u_resolution.y / u_resolution.x;
        p.y += (u_resolution.x - u_resolution.y) / u_resolution.x / 2.0;
    }
    p -= 0.5;
    p *= vec2(-1.0, 1.0);
    return p;
}
#endif

#define st0 coord(gl_FragCoord.xy)
#define mx coord(u_mouse * u_pixelRatio)

float sdRoundRect(vec2 p, vec2 b, float r) {
    vec2 d = abs(p - 0.5) * 4.2 - b + vec2(r);
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
}
float sdCircle(in vec2 st, in vec2 center) {
    return length(st - center) * 2.0;
}
float sdPoly(in vec2 p, in float w, in int sides) {
    float a = atan(p.x, p.y) + PI;
    float r = TWO_PI / float(sides);
    float d = cos(floor(0.5 + a / r) * r - a) * length(max(abs(p) * 1.0, 0.0));
    return d * 2.0 - w;
}

float aastep(float threshold, float value) {
    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
    return smoothstep(threshold - afwidth, threshold + afwidth, value);
}
float fill(in float x) { return 1.0 - aastep(0.0, x); }
float fill(float x, float size, float edge) {
    return 1.0 - smoothstep(size - edge, size + edge, x);
}
float stroke(in float d, in float t) { return (1.0 - aastep(t, abs(d))); }
float stroke(float x, float size, float w, float edge) {
    float d = smoothstep(size - edge, size + edge, x + w * 0.5) - smoothstep(size - edge, size + edge, x - w * 0.5);
    return clamp(d, 0.0, 1.0);
}

float strokeAA(float x, float size, float w, float edge) {
    float afwidth = length(vec2(dFdx(x), dFdy(x))) * 0.70710678;
    float d = smoothstep(size - edge - afwidth, size + edge + afwidth, x + w * 0.5)
            - smoothstep(size - edge - afwidth, size + edge + afwidth, x - w * 0.5);
    return clamp(d, 0.0, 1.0);
}

void main() {
    vec2 st = st0 + 0.5;
    vec2 posMouse = mx * vec2(1., -1.) + 0.5;

    float size = u_shapeSize;
    float roundness = u_roundness;
    float borderSize = u_borderSize;
    float circleSize = u_circleSize;
    float circleEdge = u_circleEdge;

    float sdfCircle = fill(
        sdCircle(st, posMouse),
        circleSize,
        circleEdge
    );

    float sdf;
    if (VAR == 0) {
        sdf = sdRoundRect(st, vec2(size), roundness);
        sdf = strokeAA(sdf, 0.0, borderSize, sdfCircle) * 4.0;
    } else if (VAR == 1) {
        sdf = sdCircle(st, vec2(0.5));
        sdf = fill(sdf, 0.6, sdfCircle) * 1.2;
    } else if (VAR == 2) {
        sdf = sdCircle(st, vec2(0.5));
        sdf = strokeAA(sdf, 0.58, 0.02, sdfCircle) * 4.0;
    } else if (VAR == 3) {
        sdf = sdPoly(st - vec2(0.5, 0.45), 0.3, 3);
        sdf = fill(sdf, 0.05, sdfCircle) * 1.4;
    }

    vec3 color = vec3(sdf);
    float alpha = step(0.01, sdf);
    gl_FragColor = vec4(color.rgb, alpha);
}
`,ew=({className:a="",variation:t=0,pixelRatioProp:i=2,shapeSize:r=1.2,roundness:l=.4,borderSize:c=.05,circleSize:f=.3,circleEdge:d=.5})=>{const m=Ne.useRef(null);return Ne.useEffect(()=>{const p=m.current;if(!p)return;let g,_=0,S=0;const M=new Re,E=new Re,b=new Re;let v=1,x=1;const L=new JR,D=new k0;D.position.z=1;const O=new QR({alpha:!0});O.setClearColor(0,0),p.appendChild(O.domElement);const k=new fl(1,1),N=new la({vertexShader:$R,fragmentShader:tw,uniforms:{u_mouse:{value:E},u_resolution:{value:b},u_pixelRatio:{value:i},u_shapeSize:{value:r},u_roundness:{value:l},u_borderSize:{value:c},u_circleSize:{value:f},u_circleEdge:{value:d}},defines:{VAR:t},transparent:!0}),B=new Ni(k,N);L.add(B);const K=st=>{if(!p)return;const $=p.getBoundingClientRect();M.set(st.clientX-$.left,st.clientY-$.top)};document.addEventListener("mousemove",K),document.addEventListener("pointermove",K);const w=()=>{if(!m.current)return;const st=m.current;v=st.clientWidth,x=st.clientHeight;const $=Math.min(window.devicePixelRatio||1,2);O.setSize(v,x),O.setPixelRatio($),D.left=-v/2,D.right=v/2,D.top=x/2,D.bottom=-x/2,D.updateProjectionMatrix(),B.scale.set(v,x,1),b.set(v,x).multiplyScalar($),N.uniforms.u_pixelRatio.value=$};w(),window.addEventListener("resize",w);const T=new ResizeObserver(()=>w());T.observe(m.current);const H=()=>{_=performance.now()*.001;const st=_-S;S=_,E.x=Z_.damp(E.x,M.x,8,st),E.y=Z_.damp(E.y,M.y,8,st),O.render(L,D),g=requestAnimationFrame(H)};return H(),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",w),T.disconnect(),document.removeEventListener("mousemove",K),document.removeEventListener("pointermove",K),p.removeChild(O.domElement),O.dispose()}},[t,i,r,l,c,f,d]),jt.jsx("div",{ref:m,className:`w-full h-full ${a}`})};function nw(){const{result:a}=ru();return jt.jsx("div",{className:"fixed w-[100vw] h-[100vh] overflow-hidden bg-black -z-10 brightness-40",children:!a&&jt.jsx(ew,{variation:0,shapeSize:1,roundness:.5,borderSize:.05,circleSize:.01,circleEdge:1})})}function Z0(a,t){return function(){return a.apply(t,arguments)}}const{toString:iw}=Object.prototype,{getPrototypeOf:rp}=Object,uu=(a=>t=>{const i=iw.call(t);return a[i]||(a[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),Ei=a=>(a=a.toLowerCase(),t=>uu(t)===a),fu=a=>t=>typeof t===a,{isArray:qs}=Array,sl=fu("undefined");function aw(a){return a!==null&&!sl(a)&&a.constructor!==null&&!sl(a.constructor)&&Jn(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const K0=Ei("ArrayBuffer");function rw(a){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(a):t=a&&a.buffer&&K0(a.buffer),t}const sw=fu("string"),Jn=fu("function"),Q0=fu("number"),du=a=>a!==null&&typeof a=="object",ow=a=>a===!0||a===!1,jc=a=>{if(uu(a)!=="object")return!1;const t=rp(a);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)},lw=Ei("Date"),cw=Ei("File"),uw=Ei("Blob"),fw=Ei("FileList"),dw=a=>du(a)&&Jn(a.pipe),hw=a=>{let t;return a&&(typeof FormData=="function"&&a instanceof FormData||Jn(a.append)&&((t=uu(a))==="formdata"||t==="object"&&Jn(a.toString)&&a.toString()==="[object FormData]"))},pw=Ei("URLSearchParams"),[mw,gw,_w,vw]=["ReadableStream","Request","Response","Headers"].map(Ei),xw=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function dl(a,t,{allOwnKeys:i=!1}={}){if(a===null||typeof a>"u")return;let r,l;if(typeof a!="object"&&(a=[a]),qs(a))for(r=0,l=a.length;r<l;r++)t.call(null,a[r],r,a);else{const c=i?Object.getOwnPropertyNames(a):Object.keys(a),f=c.length;let d;for(r=0;r<f;r++)d=c[r],t.call(null,a[d],d,a)}}function J0(a,t){t=t.toLowerCase();const i=Object.keys(a);let r=i.length,l;for(;r-- >0;)if(l=i[r],t===l.toLowerCase())return l;return null}const Rr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,$0=a=>!sl(a)&&a!==Rr;function Ih(){const{caseless:a}=$0(this)&&this||{},t={},i=(r,l)=>{const c=a&&J0(t,l)||l;jc(t[c])&&jc(r)?t[c]=Ih(t[c],r):jc(r)?t[c]=Ih({},r):qs(r)?t[c]=r.slice():t[c]=r};for(let r=0,l=arguments.length;r<l;r++)arguments[r]&&dl(arguments[r],i);return t}const Sw=(a,t,i,{allOwnKeys:r}={})=>(dl(t,(l,c)=>{i&&Jn(l)?a[c]=Z0(l,i):a[c]=l},{allOwnKeys:r}),a),yw=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),Mw=(a,t,i,r)=>{a.prototype=Object.create(t.prototype,r),a.prototype.constructor=a,Object.defineProperty(a,"super",{value:t.prototype}),i&&Object.assign(a.prototype,i)},Ew=(a,t,i,r)=>{let l,c,f;const d={};if(t=t||{},a==null)return t;do{for(l=Object.getOwnPropertyNames(a),c=l.length;c-- >0;)f=l[c],(!r||r(f,a,t))&&!d[f]&&(t[f]=a[f],d[f]=!0);a=i!==!1&&rp(a)}while(a&&(!i||i(a,t))&&a!==Object.prototype);return t},bw=(a,t,i)=>{a=String(a),(i===void 0||i>a.length)&&(i=a.length),i-=t.length;const r=a.indexOf(t,i);return r!==-1&&r===i},Tw=a=>{if(!a)return null;if(qs(a))return a;let t=a.length;if(!Q0(t))return null;const i=new Array(t);for(;t-- >0;)i[t]=a[t];return i},Aw=(a=>t=>a&&t instanceof a)(typeof Uint8Array<"u"&&rp(Uint8Array)),Rw=(a,t)=>{const r=(a&&a[Symbol.iterator]).call(a);let l;for(;(l=r.next())&&!l.done;){const c=l.value;t.call(a,c[0],c[1])}},ww=(a,t)=>{let i;const r=[];for(;(i=a.exec(t))!==null;)r.push(i);return r},Cw=Ei("HTMLFormElement"),Dw=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,r,l){return r.toUpperCase()+l}),Fv=(({hasOwnProperty:a})=>(t,i)=>a.call(t,i))(Object.prototype),Uw=Ei("RegExp"),tx=(a,t)=>{const i=Object.getOwnPropertyDescriptors(a),r={};dl(i,(l,c)=>{let f;(f=t(l,c,a))!==!1&&(r[c]=f||l)}),Object.defineProperties(a,r)},Lw=a=>{tx(a,(t,i)=>{if(Jn(a)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const r=a[i];if(Jn(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},Nw=(a,t)=>{const i={},r=l=>{l.forEach(c=>{i[c]=!0})};return qs(a)?r(a):r(String(a).split(t)),i},Ow=()=>{},Pw=(a,t)=>a!=null&&Number.isFinite(a=+a)?a:t;function zw(a){return!!(a&&Jn(a.append)&&a[Symbol.toStringTag]==="FormData"&&a[Symbol.iterator])}const Bw=a=>{const t=new Array(10),i=(r,l)=>{if(du(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[l]=r;const c=qs(r)?[]:{};return dl(r,(f,d)=>{const m=i(f,l+1);!sl(m)&&(c[d]=m)}),t[l]=void 0,c}}return r};return i(a,0)},Iw=Ei("AsyncFunction"),Fw=a=>a&&(du(a)||Jn(a))&&Jn(a.then)&&Jn(a.catch),ex=((a,t)=>a?setImmediate:t?((i,r)=>(Rr.addEventListener("message",({source:l,data:c})=>{l===Rr&&c===i&&r.length&&r.shift()()},!1),l=>{r.push(l),Rr.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",Jn(Rr.postMessage)),Hw=typeof queueMicrotask<"u"?queueMicrotask.bind(Rr):typeof process<"u"&&process.nextTick||ex,ot={isArray:qs,isArrayBuffer:K0,isBuffer:aw,isFormData:hw,isArrayBufferView:rw,isString:sw,isNumber:Q0,isBoolean:ow,isObject:du,isPlainObject:jc,isReadableStream:mw,isRequest:gw,isResponse:_w,isHeaders:vw,isUndefined:sl,isDate:lw,isFile:cw,isBlob:uw,isRegExp:Uw,isFunction:Jn,isStream:dw,isURLSearchParams:pw,isTypedArray:Aw,isFileList:fw,forEach:dl,merge:Ih,extend:Sw,trim:xw,stripBOM:yw,inherits:Mw,toFlatObject:Ew,kindOf:uu,kindOfTest:Ei,endsWith:bw,toArray:Tw,forEachEntry:Rw,matchAll:ww,isHTMLForm:Cw,hasOwnProperty:Fv,hasOwnProp:Fv,reduceDescriptors:tx,freezeMethods:Lw,toObjectSet:Nw,toCamelCase:Dw,noop:Ow,toFiniteNumber:Pw,findKey:J0,global:Rr,isContextDefined:$0,isSpecCompliantForm:zw,toJSONObject:Bw,isAsyncFn:Iw,isThenable:Fw,setImmediate:ex,asap:Hw};function oe(a,t,i,r,l){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=a,this.name="AxiosError",t&&(this.code=t),i&&(this.config=i),r&&(this.request=r),l&&(this.response=l,this.status=l.status?l.status:null)}ot.inherits(oe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ot.toJSONObject(this.config),code:this.code,status:this.status}}});const nx=oe.prototype,ix={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(a=>{ix[a]={value:a}});Object.defineProperties(oe,ix);Object.defineProperty(nx,"isAxiosError",{value:!0});oe.from=(a,t,i,r,l,c)=>{const f=Object.create(nx);return ot.toFlatObject(a,f,function(m){return m!==Error.prototype},d=>d!=="isAxiosError"),oe.call(f,a.message,t,i,r,l),f.cause=a,f.name=a.name,c&&Object.assign(f,c),f};const Gw=null;function Fh(a){return ot.isPlainObject(a)||ot.isArray(a)}function ax(a){return ot.endsWith(a,"[]")?a.slice(0,-2):a}function Hv(a,t,i){return a?a.concat(t).map(function(l,c){return l=ax(l),!i&&c?"["+l+"]":l}).join(i?".":""):t}function Vw(a){return ot.isArray(a)&&!a.some(Fh)}const kw=ot.toFlatObject(ot,{},null,function(t){return/^is[A-Z]/.test(t)});function hu(a,t,i){if(!ot.isObject(a))throw new TypeError("target must be an object");t=t||new FormData,i=ot.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,v){return!ot.isUndefined(v[b])});const r=i.metaTokens,l=i.visitor||g,c=i.dots,f=i.indexes,m=(i.Blob||typeof Blob<"u"&&Blob)&&ot.isSpecCompliantForm(t);if(!ot.isFunction(l))throw new TypeError("visitor must be a function");function p(E){if(E===null)return"";if(ot.isDate(E))return E.toISOString();if(!m&&ot.isBlob(E))throw new oe("Blob is not supported. Use a Buffer instead.");return ot.isArrayBuffer(E)||ot.isTypedArray(E)?m&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function g(E,b,v){let x=E;if(E&&!v&&typeof E=="object"){if(ot.endsWith(b,"{}"))b=r?b:b.slice(0,-2),E=JSON.stringify(E);else if(ot.isArray(E)&&Vw(E)||(ot.isFileList(E)||ot.endsWith(b,"[]"))&&(x=ot.toArray(E)))return b=ax(b),x.forEach(function(D,O){!(ot.isUndefined(D)||D===null)&&t.append(f===!0?Hv([b],O,c):f===null?b:b+"[]",p(D))}),!1}return Fh(E)?!0:(t.append(Hv(v,b,c),p(E)),!1)}const _=[],S=Object.assign(kw,{defaultVisitor:g,convertValue:p,isVisitable:Fh});function M(E,b){if(!ot.isUndefined(E)){if(_.indexOf(E)!==-1)throw Error("Circular reference detected in "+b.join("."));_.push(E),ot.forEach(E,function(x,L){(!(ot.isUndefined(x)||x===null)&&l.call(t,x,ot.isString(L)?L.trim():L,b,S))===!0&&M(x,b?b.concat(L):[L])}),_.pop()}}if(!ot.isObject(a))throw new TypeError("data must be an object");return M(a),t}function Gv(a){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function sp(a,t){this._pairs=[],a&&hu(a,this,t)}const rx=sp.prototype;rx.append=function(t,i){this._pairs.push([t,i])};rx.toString=function(t){const i=t?function(r){return t.call(this,r,Gv)}:Gv;return this._pairs.map(function(l){return i(l[0])+"="+i(l[1])},"").join("&")};function Xw(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function sx(a,t,i){if(!t)return a;const r=i&&i.encode||Xw;ot.isFunction(i)&&(i={serialize:i});const l=i&&i.serialize;let c;if(l?c=l(t,i):c=ot.isURLSearchParams(t)?t.toString():new sp(t,i).toString(r),c){const f=a.indexOf("#");f!==-1&&(a=a.slice(0,f)),a+=(a.indexOf("?")===-1?"?":"&")+c}return a}class Vv{constructor(){this.handlers=[]}use(t,i,r){return this.handlers.push({fulfilled:t,rejected:i,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){ot.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ox={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ww=typeof URLSearchParams<"u"?URLSearchParams:sp,qw=typeof FormData<"u"?FormData:null,Yw=typeof Blob<"u"?Blob:null,jw={isBrowser:!0,classes:{URLSearchParams:Ww,FormData:qw,Blob:Yw},protocols:["http","https","file","blob","url","data"]},op=typeof window<"u"&&typeof document<"u",Hh=typeof navigator=="object"&&navigator||void 0,Zw=op&&(!Hh||["ReactNative","NativeScript","NS"].indexOf(Hh.product)<0),Kw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Qw=op&&window.location.href||"http://localhost",Jw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:op,hasStandardBrowserEnv:Zw,hasStandardBrowserWebWorkerEnv:Kw,navigator:Hh,origin:Qw},Symbol.toStringTag,{value:"Module"})),Dn={...Jw,...jw};function $w(a,t){return hu(a,new Dn.classes.URLSearchParams,Object.assign({visitor:function(i,r,l,c){return Dn.isNode&&ot.isBuffer(i)?(this.append(r,i.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)}},t))}function tC(a){return ot.matchAll(/\w+|\[(\w*)]/g,a).map(t=>t[0]==="[]"?"":t[1]||t[0])}function eC(a){const t={},i=Object.keys(a);let r;const l=i.length;let c;for(r=0;r<l;r++)c=i[r],t[c]=a[c];return t}function lx(a){function t(i,r,l,c){let f=i[c++];if(f==="__proto__")return!0;const d=Number.isFinite(+f),m=c>=i.length;return f=!f&&ot.isArray(l)?l.length:f,m?(ot.hasOwnProp(l,f)?l[f]=[l[f],r]:l[f]=r,!d):((!l[f]||!ot.isObject(l[f]))&&(l[f]=[]),t(i,r,l[f],c)&&ot.isArray(l[f])&&(l[f]=eC(l[f])),!d)}if(ot.isFormData(a)&&ot.isFunction(a.entries)){const i={};return ot.forEachEntry(a,(r,l)=>{t(tC(r),l,i,0)}),i}return null}function nC(a,t,i){if(ot.isString(a))try{return(t||JSON.parse)(a),ot.trim(a)}catch(r){if(r.name!=="SyntaxError")throw r}return(i||JSON.stringify)(a)}const hl={transitional:ox,adapter:["xhr","http","fetch"],transformRequest:[function(t,i){const r=i.getContentType()||"",l=r.indexOf("application/json")>-1,c=ot.isObject(t);if(c&&ot.isHTMLForm(t)&&(t=new FormData(t)),ot.isFormData(t))return l?JSON.stringify(lx(t)):t;if(ot.isArrayBuffer(t)||ot.isBuffer(t)||ot.isStream(t)||ot.isFile(t)||ot.isBlob(t)||ot.isReadableStream(t))return t;if(ot.isArrayBufferView(t))return t.buffer;if(ot.isURLSearchParams(t))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let d;if(c){if(r.indexOf("application/x-www-form-urlencoded")>-1)return $w(t,this.formSerializer).toString();if((d=ot.isFileList(t))||r.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return hu(d?{"files[]":t}:t,m&&new m,this.formSerializer)}}return c||l?(i.setContentType("application/json",!1),nC(t)):t}],transformResponse:[function(t){const i=this.transitional||hl.transitional,r=i&&i.forcedJSONParsing,l=this.responseType==="json";if(ot.isResponse(t)||ot.isReadableStream(t))return t;if(t&&ot.isString(t)&&(r&&!this.responseType||l)){const f=!(i&&i.silentJSONParsing)&&l;try{return JSON.parse(t)}catch(d){if(f)throw d.name==="SyntaxError"?oe.from(d,oe.ERR_BAD_RESPONSE,this,null,this.response):d}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dn.classes.FormData,Blob:Dn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ot.forEach(["delete","get","head","post","put","patch"],a=>{hl.headers[a]={}});const iC=ot.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),aC=a=>{const t={};let i,r,l;return a&&a.split(`
`).forEach(function(f){l=f.indexOf(":"),i=f.substring(0,l).trim().toLowerCase(),r=f.substring(l+1).trim(),!(!i||t[i]&&iC[i])&&(i==="set-cookie"?t[i]?t[i].push(r):t[i]=[r]:t[i]=t[i]?t[i]+", "+r:r)}),t},kv=Symbol("internals");function $o(a){return a&&String(a).trim().toLowerCase()}function Zc(a){return a===!1||a==null?a:ot.isArray(a)?a.map(Zc):String(a)}function rC(a){const t=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=i.exec(a);)t[r[1]]=r[2];return t}const sC=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function Jd(a,t,i,r,l){if(ot.isFunction(r))return r.call(this,t,i);if(l&&(t=i),!!ot.isString(t)){if(ot.isString(r))return t.indexOf(r)!==-1;if(ot.isRegExp(r))return r.test(t)}}function oC(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,i,r)=>i.toUpperCase()+r)}function lC(a,t){const i=ot.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(a,r+i,{value:function(l,c,f){return this[r].call(this,t,l,c,f)},configurable:!0})})}let Vn=class{constructor(t){t&&this.set(t)}set(t,i,r){const l=this;function c(d,m,p){const g=$o(m);if(!g)throw new Error("header name must be a non-empty string");const _=ot.findKey(l,g);(!_||l[_]===void 0||p===!0||p===void 0&&l[_]!==!1)&&(l[_||m]=Zc(d))}const f=(d,m)=>ot.forEach(d,(p,g)=>c(p,g,m));if(ot.isPlainObject(t)||t instanceof this.constructor)f(t,i);else if(ot.isString(t)&&(t=t.trim())&&!sC(t))f(aC(t),i);else if(ot.isHeaders(t))for(const[d,m]of t.entries())c(m,d,r);else t!=null&&c(i,t,r);return this}get(t,i){if(t=$o(t),t){const r=ot.findKey(this,t);if(r){const l=this[r];if(!i)return l;if(i===!0)return rC(l);if(ot.isFunction(i))return i.call(this,l,r);if(ot.isRegExp(i))return i.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,i){if(t=$o(t),t){const r=ot.findKey(this,t);return!!(r&&this[r]!==void 0&&(!i||Jd(this,this[r],r,i)))}return!1}delete(t,i){const r=this;let l=!1;function c(f){if(f=$o(f),f){const d=ot.findKey(r,f);d&&(!i||Jd(r,r[d],d,i))&&(delete r[d],l=!0)}}return ot.isArray(t)?t.forEach(c):c(t),l}clear(t){const i=Object.keys(this);let r=i.length,l=!1;for(;r--;){const c=i[r];(!t||Jd(this,this[c],c,t,!0))&&(delete this[c],l=!0)}return l}normalize(t){const i=this,r={};return ot.forEach(this,(l,c)=>{const f=ot.findKey(r,c);if(f){i[f]=Zc(l),delete i[c];return}const d=t?oC(c):String(c).trim();d!==c&&delete i[c],i[d]=Zc(l),r[d]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const i=Object.create(null);return ot.forEach(this,(r,l)=>{r!=null&&r!==!1&&(i[l]=t&&ot.isArray(r)?r.join(", "):r)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,i])=>t+": "+i).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...i){const r=new this(t);return i.forEach(l=>r.set(l)),r}static accessor(t){const r=(this[kv]=this[kv]={accessors:{}}).accessors,l=this.prototype;function c(f){const d=$o(f);r[d]||(lC(l,f),r[d]=!0)}return ot.isArray(t)?t.forEach(c):c(t),this}};Vn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ot.reduceDescriptors(Vn.prototype,({value:a},t)=>{let i=t[0].toUpperCase()+t.slice(1);return{get:()=>a,set(r){this[i]=r}}});ot.freezeMethods(Vn);function $d(a,t){const i=this||hl,r=t||i,l=Vn.from(r.headers);let c=r.data;return ot.forEach(a,function(d){c=d.call(i,c,l.normalize(),t?t.status:void 0)}),l.normalize(),c}function cx(a){return!!(a&&a.__CANCEL__)}function Ys(a,t,i){oe.call(this,a??"canceled",oe.ERR_CANCELED,t,i),this.name="CanceledError"}ot.inherits(Ys,oe,{__CANCEL__:!0});function ux(a,t,i){const r=i.config.validateStatus;!i.status||!r||r(i.status)?a(i):t(new oe("Request failed with status code "+i.status,[oe.ERR_BAD_REQUEST,oe.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function cC(a){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return t&&t[1]||""}function uC(a,t){a=a||10;const i=new Array(a),r=new Array(a);let l=0,c=0,f;return t=t!==void 0?t:1e3,function(m){const p=Date.now(),g=r[c];f||(f=p),i[l]=m,r[l]=p;let _=c,S=0;for(;_!==l;)S+=i[_++],_=_%a;if(l=(l+1)%a,l===c&&(c=(c+1)%a),p-f<t)return;const M=g&&p-g;return M?Math.round(S*1e3/M):void 0}}function fC(a,t){let i=0,r=1e3/t,l,c;const f=(p,g=Date.now())=>{i=g,l=null,c&&(clearTimeout(c),c=null),a.apply(null,p)};return[(...p)=>{const g=Date.now(),_=g-i;_>=r?f(p,g):(l=p,c||(c=setTimeout(()=>{c=null,f(l)},r-_)))},()=>l&&f(l)]}const iu=(a,t,i=3)=>{let r=0;const l=uC(50,250);return fC(c=>{const f=c.loaded,d=c.lengthComputable?c.total:void 0,m=f-r,p=l(m),g=f<=d;r=f;const _={loaded:f,total:d,progress:d?f/d:void 0,bytes:m,rate:p||void 0,estimated:p&&d&&g?(d-f)/p:void 0,event:c,lengthComputable:d!=null,[t?"download":"upload"]:!0};a(_)},i)},Xv=(a,t)=>{const i=a!=null;return[r=>t[0]({lengthComputable:i,total:a,loaded:r}),t[1]]},Wv=a=>(...t)=>ot.asap(()=>a(...t)),dC=Dn.hasStandardBrowserEnv?((a,t)=>i=>(i=new URL(i,Dn.origin),a.protocol===i.protocol&&a.host===i.host&&(t||a.port===i.port)))(new URL(Dn.origin),Dn.navigator&&/(msie|trident)/i.test(Dn.navigator.userAgent)):()=>!0,hC=Dn.hasStandardBrowserEnv?{write(a,t,i,r,l,c){const f=[a+"="+encodeURIComponent(t)];ot.isNumber(i)&&f.push("expires="+new Date(i).toGMTString()),ot.isString(r)&&f.push("path="+r),ot.isString(l)&&f.push("domain="+l),c===!0&&f.push("secure"),document.cookie=f.join("; ")},read(a){const t=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(a){this.write(a,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function pC(a){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function mC(a,t){return t?a.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):a}function fx(a,t,i){let r=!pC(t);return a&&r||i==!1?mC(a,t):t}const qv=a=>a instanceof Vn?{...a}:a;function Lr(a,t){t=t||{};const i={};function r(p,g,_,S){return ot.isPlainObject(p)&&ot.isPlainObject(g)?ot.merge.call({caseless:S},p,g):ot.isPlainObject(g)?ot.merge({},g):ot.isArray(g)?g.slice():g}function l(p,g,_,S){if(ot.isUndefined(g)){if(!ot.isUndefined(p))return r(void 0,p,_,S)}else return r(p,g,_,S)}function c(p,g){if(!ot.isUndefined(g))return r(void 0,g)}function f(p,g){if(ot.isUndefined(g)){if(!ot.isUndefined(p))return r(void 0,p)}else return r(void 0,g)}function d(p,g,_){if(_ in t)return r(p,g);if(_ in a)return r(void 0,p)}const m={url:c,method:c,data:c,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:d,headers:(p,g,_)=>l(qv(p),qv(g),_,!0)};return ot.forEach(Object.keys(Object.assign({},a,t)),function(g){const _=m[g]||l,S=_(a[g],t[g],g);ot.isUndefined(S)&&_!==d||(i[g]=S)}),i}const dx=a=>{const t=Lr({},a);let{data:i,withXSRFToken:r,xsrfHeaderName:l,xsrfCookieName:c,headers:f,auth:d}=t;t.headers=f=Vn.from(f),t.url=sx(fx(t.baseURL,t.url),a.params,a.paramsSerializer),d&&f.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):"")));let m;if(ot.isFormData(i)){if(Dn.hasStandardBrowserEnv||Dn.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if((m=f.getContentType())!==!1){const[p,...g]=m?m.split(";").map(_=>_.trim()).filter(Boolean):[];f.setContentType([p||"multipart/form-data",...g].join("; "))}}if(Dn.hasStandardBrowserEnv&&(r&&ot.isFunction(r)&&(r=r(t)),r||r!==!1&&dC(t.url))){const p=l&&c&&hC.read(c);p&&f.set(l,p)}return t},gC=typeof XMLHttpRequest<"u",_C=gC&&function(a){return new Promise(function(i,r){const l=dx(a);let c=l.data;const f=Vn.from(l.headers).normalize();let{responseType:d,onUploadProgress:m,onDownloadProgress:p}=l,g,_,S,M,E;function b(){M&&M(),E&&E(),l.cancelToken&&l.cancelToken.unsubscribe(g),l.signal&&l.signal.removeEventListener("abort",g)}let v=new XMLHttpRequest;v.open(l.method.toUpperCase(),l.url,!0),v.timeout=l.timeout;function x(){if(!v)return;const D=Vn.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),k={data:!d||d==="text"||d==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:D,config:a,request:v};ux(function(B){i(B),b()},function(B){r(B),b()},k),v=null}"onloadend"in v?v.onloadend=x:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(x)},v.onabort=function(){v&&(r(new oe("Request aborted",oe.ECONNABORTED,a,v)),v=null)},v.onerror=function(){r(new oe("Network Error",oe.ERR_NETWORK,a,v)),v=null},v.ontimeout=function(){let O=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded";const k=l.transitional||ox;l.timeoutErrorMessage&&(O=l.timeoutErrorMessage),r(new oe(O,k.clarifyTimeoutError?oe.ETIMEDOUT:oe.ECONNABORTED,a,v)),v=null},c===void 0&&f.setContentType(null),"setRequestHeader"in v&&ot.forEach(f.toJSON(),function(O,k){v.setRequestHeader(k,O)}),ot.isUndefined(l.withCredentials)||(v.withCredentials=!!l.withCredentials),d&&d!=="json"&&(v.responseType=l.responseType),p&&([S,E]=iu(p,!0),v.addEventListener("progress",S)),m&&v.upload&&([_,M]=iu(m),v.upload.addEventListener("progress",_),v.upload.addEventListener("loadend",M)),(l.cancelToken||l.signal)&&(g=D=>{v&&(r(!D||D.type?new Ys(null,a,v):D),v.abort(),v=null)},l.cancelToken&&l.cancelToken.subscribe(g),l.signal&&(l.signal.aborted?g():l.signal.addEventListener("abort",g)));const L=cC(l.url);if(L&&Dn.protocols.indexOf(L)===-1){r(new oe("Unsupported protocol "+L+":",oe.ERR_BAD_REQUEST,a));return}v.send(c||null)})},vC=(a,t)=>{const{length:i}=a=a?a.filter(Boolean):[];if(t||i){let r=new AbortController,l;const c=function(p){if(!l){l=!0,d();const g=p instanceof Error?p:this.reason;r.abort(g instanceof oe?g:new Ys(g instanceof Error?g.message:g))}};let f=t&&setTimeout(()=>{f=null,c(new oe(`timeout ${t} of ms exceeded`,oe.ETIMEDOUT))},t);const d=()=>{a&&(f&&clearTimeout(f),f=null,a.forEach(p=>{p.unsubscribe?p.unsubscribe(c):p.removeEventListener("abort",c)}),a=null)};a.forEach(p=>p.addEventListener("abort",c));const{signal:m}=r;return m.unsubscribe=()=>ot.asap(d),m}},xC=function*(a,t){let i=a.byteLength;if(i<t){yield a;return}let r=0,l;for(;r<i;)l=r+t,yield a.slice(r,l),r=l},SC=async function*(a,t){for await(const i of yC(a))yield*xC(i,t)},yC=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const t=a.getReader();try{for(;;){const{done:i,value:r}=await t.read();if(i)break;yield r}}finally{await t.cancel()}},Yv=(a,t,i,r)=>{const l=SC(a,t);let c=0,f,d=m=>{f||(f=!0,r&&r(m))};return new ReadableStream({async pull(m){try{const{done:p,value:g}=await l.next();if(p){d(),m.close();return}let _=g.byteLength;if(i){let S=c+=_;i(S)}m.enqueue(new Uint8Array(g))}catch(p){throw d(p),p}},cancel(m){return d(m),l.return()}},{highWaterMark:2})},pu=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",hx=pu&&typeof ReadableStream=="function",MC=pu&&(typeof TextEncoder=="function"?(a=>t=>a.encode(t))(new TextEncoder):async a=>new Uint8Array(await new Response(a).arrayBuffer())),px=(a,...t)=>{try{return!!a(...t)}catch{return!1}},EC=hx&&px(()=>{let a=!1;const t=new Request(Dn.origin,{body:new ReadableStream,method:"POST",get duplex(){return a=!0,"half"}}).headers.has("Content-Type");return a&&!t}),jv=64*1024,Gh=hx&&px(()=>ot.isReadableStream(new Response("").body)),au={stream:Gh&&(a=>a.body)};pu&&(a=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!au[t]&&(au[t]=ot.isFunction(a[t])?i=>i[t]():(i,r)=>{throw new oe(`Response type '${t}' is not supported`,oe.ERR_NOT_SUPPORT,r)})})})(new Response);const bC=async a=>{if(a==null)return 0;if(ot.isBlob(a))return a.size;if(ot.isSpecCompliantForm(a))return(await new Request(Dn.origin,{method:"POST",body:a}).arrayBuffer()).byteLength;if(ot.isArrayBufferView(a)||ot.isArrayBuffer(a))return a.byteLength;if(ot.isURLSearchParams(a)&&(a=a+""),ot.isString(a))return(await MC(a)).byteLength},TC=async(a,t)=>{const i=ot.toFiniteNumber(a.getContentLength());return i??bC(t)},AC=pu&&(async a=>{let{url:t,method:i,data:r,signal:l,cancelToken:c,timeout:f,onDownloadProgress:d,onUploadProgress:m,responseType:p,headers:g,withCredentials:_="same-origin",fetchOptions:S}=dx(a);p=p?(p+"").toLowerCase():"text";let M=vC([l,c&&c.toAbortSignal()],f),E;const b=M&&M.unsubscribe&&(()=>{M.unsubscribe()});let v;try{if(m&&EC&&i!=="get"&&i!=="head"&&(v=await TC(g,r))!==0){let k=new Request(t,{method:"POST",body:r,duplex:"half"}),N;if(ot.isFormData(r)&&(N=k.headers.get("content-type"))&&g.setContentType(N),k.body){const[B,K]=Xv(v,iu(Wv(m)));r=Yv(k.body,jv,B,K)}}ot.isString(_)||(_=_?"include":"omit");const x="credentials"in Request.prototype;E=new Request(t,{...S,signal:M,method:i.toUpperCase(),headers:g.normalize().toJSON(),body:r,duplex:"half",credentials:x?_:void 0});let L=await fetch(E);const D=Gh&&(p==="stream"||p==="response");if(Gh&&(d||D&&b)){const k={};["status","statusText","headers"].forEach(w=>{k[w]=L[w]});const N=ot.toFiniteNumber(L.headers.get("content-length")),[B,K]=d&&Xv(N,iu(Wv(d),!0))||[];L=new Response(Yv(L.body,jv,B,()=>{K&&K(),b&&b()}),k)}p=p||"text";let O=await au[ot.findKey(au,p)||"text"](L,a);return!D&&b&&b(),await new Promise((k,N)=>{ux(k,N,{data:O,headers:Vn.from(L.headers),status:L.status,statusText:L.statusText,config:a,request:E})})}catch(x){throw b&&b(),x&&x.name==="TypeError"&&/fetch/i.test(x.message)?Object.assign(new oe("Network Error",oe.ERR_NETWORK,a,E),{cause:x.cause||x}):oe.from(x,x&&x.code,a,E)}}),Vh={http:Gw,xhr:_C,fetch:AC};ot.forEach(Vh,(a,t)=>{if(a){try{Object.defineProperty(a,"name",{value:t})}catch{}Object.defineProperty(a,"adapterName",{value:t})}});const Zv=a=>`- ${a}`,RC=a=>ot.isFunction(a)||a===null||a===!1,mx={getAdapter:a=>{a=ot.isArray(a)?a:[a];const{length:t}=a;let i,r;const l={};for(let c=0;c<t;c++){i=a[c];let f;if(r=i,!RC(i)&&(r=Vh[(f=String(i)).toLowerCase()],r===void 0))throw new oe(`Unknown adapter '${f}'`);if(r)break;l[f||"#"+c]=r}if(!r){const c=Object.entries(l).map(([d,m])=>`adapter ${d} `+(m===!1?"is not supported by the environment":"is not available in the build"));let f=t?c.length>1?`since :
`+c.map(Zv).join(`
`):" "+Zv(c[0]):"as no adapter specified";throw new oe("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return r},adapters:Vh};function th(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new Ys(null,a)}function Kv(a){return th(a),a.headers=Vn.from(a.headers),a.data=$d.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),mx.getAdapter(a.adapter||hl.adapter)(a).then(function(r){return th(a),r.data=$d.call(a,a.transformResponse,r),r.headers=Vn.from(r.headers),r},function(r){return cx(r)||(th(a),r&&r.response&&(r.response.data=$d.call(a,a.transformResponse,r.response),r.response.headers=Vn.from(r.response.headers))),Promise.reject(r)})}const gx="1.8.1",mu={};["object","boolean","number","function","string","symbol"].forEach((a,t)=>{mu[a]=function(r){return typeof r===a||"a"+(t<1?"n ":" ")+a}});const Qv={};mu.transitional=function(t,i,r){function l(c,f){return"[Axios v"+gx+"] Transitional option '"+c+"'"+f+(r?". "+r:"")}return(c,f,d)=>{if(t===!1)throw new oe(l(f," has been removed"+(i?" in "+i:"")),oe.ERR_DEPRECATED);return i&&!Qv[f]&&(Qv[f]=!0,console.warn(l(f," has been deprecated since v"+i+" and will be removed in the near future"))),t?t(c,f,d):!0}};mu.spelling=function(t){return(i,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function wC(a,t,i){if(typeof a!="object")throw new oe("options must be an object",oe.ERR_BAD_OPTION_VALUE);const r=Object.keys(a);let l=r.length;for(;l-- >0;){const c=r[l],f=t[c];if(f){const d=a[c],m=d===void 0||f(d,c,a);if(m!==!0)throw new oe("option "+c+" must be "+m,oe.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new oe("Unknown option "+c,oe.ERR_BAD_OPTION)}}const Kc={assertOptions:wC,validators:mu},Ci=Kc.validators;let Cr=class{constructor(t){this.defaults=t,this.interceptors={request:new Vv,response:new Vv}}async request(t,i){try{return await this._request(t,i)}catch(r){if(r instanceof Error){let l={};Error.captureStackTrace?Error.captureStackTrace(l):l=new Error;const c=l.stack?l.stack.replace(/^.+\n/,""):"";try{r.stack?c&&!String(r.stack).endsWith(c.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+c):r.stack=c}catch{}}throw r}}_request(t,i){typeof t=="string"?(i=i||{},i.url=t):i=t||{},i=Lr(this.defaults,i);const{transitional:r,paramsSerializer:l,headers:c}=i;r!==void 0&&Kc.assertOptions(r,{silentJSONParsing:Ci.transitional(Ci.boolean),forcedJSONParsing:Ci.transitional(Ci.boolean),clarifyTimeoutError:Ci.transitional(Ci.boolean)},!1),l!=null&&(ot.isFunction(l)?i.paramsSerializer={serialize:l}:Kc.assertOptions(l,{encode:Ci.function,serialize:Ci.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),Kc.assertOptions(i,{baseUrl:Ci.spelling("baseURL"),withXsrfToken:Ci.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let f=c&&ot.merge(c.common,c[i.method]);c&&ot.forEach(["delete","get","head","post","put","patch","common"],E=>{delete c[E]}),i.headers=Vn.concat(f,c);const d=[];let m=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(i)===!1||(m=m&&b.synchronous,d.unshift(b.fulfilled,b.rejected))});const p=[];this.interceptors.response.forEach(function(b){p.push(b.fulfilled,b.rejected)});let g,_=0,S;if(!m){const E=[Kv.bind(this),void 0];for(E.unshift.apply(E,d),E.push.apply(E,p),S=E.length,g=Promise.resolve(i);_<S;)g=g.then(E[_++],E[_++]);return g}S=d.length;let M=i;for(_=0;_<S;){const E=d[_++],b=d[_++];try{M=E(M)}catch(v){b.call(this,v);break}}try{g=Kv.call(this,M)}catch(E){return Promise.reject(E)}for(_=0,S=p.length;_<S;)g=g.then(p[_++],p[_++]);return g}getUri(t){t=Lr(this.defaults,t);const i=fx(t.baseURL,t.url,t.allowAbsoluteUrls);return sx(i,t.params,t.paramsSerializer)}};ot.forEach(["delete","get","head","options"],function(t){Cr.prototype[t]=function(i,r){return this.request(Lr(r||{},{method:t,url:i,data:(r||{}).data}))}});ot.forEach(["post","put","patch"],function(t){function i(r){return function(c,f,d){return this.request(Lr(d||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:c,data:f}))}}Cr.prototype[t]=i(),Cr.prototype[t+"Form"]=i(!0)});let CC=class _x{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(c){i=c});const r=this;this.promise.then(l=>{if(!r._listeners)return;let c=r._listeners.length;for(;c-- >0;)r._listeners[c](l);r._listeners=null}),this.promise.then=l=>{let c;const f=new Promise(d=>{r.subscribe(d),c=d}).then(l);return f.cancel=function(){r.unsubscribe(c)},f},t(function(c,f,d){r.reason||(r.reason=new Ys(c,f,d),i(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const i=this._listeners.indexOf(t);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const t=new AbortController,i=r=>{t.abort(r)};return this.subscribe(i),t.signal.unsubscribe=()=>this.unsubscribe(i),t.signal}static source(){let t;return{token:new _x(function(l){t=l}),cancel:t}}};function DC(a){return function(i){return a.apply(null,i)}}function UC(a){return ot.isObject(a)&&a.isAxiosError===!0}const kh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(kh).forEach(([a,t])=>{kh[t]=a});function vx(a){const t=new Cr(a),i=Z0(Cr.prototype.request,t);return ot.extend(i,Cr.prototype,t,{allOwnKeys:!0}),ot.extend(i,t,null,{allOwnKeys:!0}),i.create=function(l){return vx(Lr(a,l))},i}const $e=vx(hl);$e.Axios=Cr;$e.CanceledError=Ys;$e.CancelToken=CC;$e.isCancel=cx;$e.VERSION=gx;$e.toFormData=hu;$e.AxiosError=oe;$e.Cancel=$e.CanceledError;$e.all=function(t){return Promise.all(t)};$e.spread=DC;$e.isAxiosError=UC;$e.mergeConfig=Lr;$e.AxiosHeaders=Vn;$e.formToJSON=a=>lx(ot.isHTMLForm(a)?new FormData(a):a);$e.getAdapter=mx.getAdapter;$e.HttpStatusCode=kh;$e.default=$e;const{Axios:ZC,AxiosError:KC,CanceledError:QC,isCancel:JC,CancelToken:$C,VERSION:t2,all:e2,Cancel:n2,isAxiosError:i2,spread:a2,toFormData:r2,AxiosHeaders:s2,HttpStatusCode:o2,formToJSON:l2,getAdapter:c2,mergeConfig:u2}=$e;function Jv(a,t){if(typeof a=="function")return a(t);a!=null&&(a.current=t)}function LC(...a){return t=>{let i=!1;const r=a.map(l=>{const c=Jv(l,t);return!i&&typeof c=="function"&&(i=!0),c});if(i)return()=>{for(let l=0;l<r.length;l++){const c=r[l];typeof c=="function"?c():Jv(a[l],null)}}}}var lp=Ne.forwardRef((a,t)=>{const{children:i,...r}=a,l=Ne.Children.toArray(i),c=l.find(OC);if(c){const f=c.props.children,d=l.map(m=>m===c?Ne.Children.count(f)>1?Ne.Children.only(null):Ne.isValidElement(f)?f.props.children:null:m);return jt.jsx(Xh,{...r,ref:t,children:Ne.isValidElement(f)?Ne.cloneElement(f,void 0,d):null})}return jt.jsx(Xh,{...r,ref:t,children:i})});lp.displayName="Slot";var Xh=Ne.forwardRef((a,t)=>{const{children:i,...r}=a;if(Ne.isValidElement(i)){const l=zC(i),c=PC(r,i.props);return i.type!==Ne.Fragment&&(c.ref=t?LC(t,l):l),Ne.cloneElement(i,c)}return Ne.Children.count(i)>1?Ne.Children.only(null):null});Xh.displayName="SlotClone";var NC=({children:a})=>jt.jsx(jt.Fragment,{children:a});function OC(a){return Ne.isValidElement(a)&&a.type===NC}function PC(a,t){const i={...t};for(const r in t){const l=a[r],c=t[r];/^on[A-Z]/.test(r)?l&&c?i[r]=(...d)=>{c(...d),l(...d)}:l&&(i[r]=l):r==="style"?i[r]={...l,...c}:r==="className"&&(i[r]=[l,c].filter(Boolean).join(" "))}return{...a,...i}}function zC(a){var r,l;let t=(r=Object.getOwnPropertyDescriptor(a.props,"ref"))==null?void 0:r.get,i=t&&"isReactWarning"in t&&t.isReactWarning;return i?a.ref:(t=(l=Object.getOwnPropertyDescriptor(a,"ref"))==null?void 0:l.get,i=t&&"isReactWarning"in t&&t.isReactWarning,i?a.props.ref:a.props.ref||a.ref)}const $v=a=>typeof a=="boolean"?`${a}`:a===0?"0":a,t0=i0,xx=(a,t)=>i=>{var r;if((t==null?void 0:t.variants)==null)return t0(a,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:l,defaultVariants:c}=t,f=Object.keys(l).map(p=>{const g=i==null?void 0:i[p],_=c==null?void 0:c[p];if(g===null)return null;const S=$v(g)||$v(_);return l[p][S]}),d=i&&Object.entries(i).reduce((p,g)=>{let[_,S]=g;return S===void 0||(p[_]=S),p},{}),m=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((p,g)=>{let{class:_,className:S,...M}=g;return Object.entries(M).every(E=>{let[b,v]=E;return Array.isArray(v)?v.includes({...c,...d}[b]):{...c,...d}[b]===v})?[...p,_,S]:p},[]);return t0(a,f,m,i==null?void 0:i.class,i==null?void 0:i.className)},BC=xx("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function e0({className:a,variant:t,size:i,asChild:r=!1,...l}){const c=r?lp:"button";return jt.jsx(c,{"data-slot":"button",className:Vs(BC({variant:t,size:i,className:a})),...l})}function IC({className:a,type:t,...i}){return jt.jsx("input",{type:t,"data-slot":"input",className:Vs("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",a),...i})}function FC(){const{url:a,setUrl:t,isLoading:i,setIsLoading:r,setError:l,setResult:c,resetContext:f}=ru(),d=async m=>{m.preventDefault();try{if(!a)return l("");if(!d0(a))return l("Please provide a valid url");f(),r(!0);const{data:p}=await $e({method:"GET",url:`undefined/api/scan?domain=${a}`});c(p.scan_result),r(!1)}catch(p){console.log(p),r(!1),l("Something went wrong please try again later...")}};return jt.jsxs("form",{className:"flex justify-center items-center gap-x-1",onSubmit:d,children:[jt.jsxs("div",{className:"flex justify-between items-center w-fit",children:[jt.jsx(e0,{type:"button",disabled:i,className:"absalut cursor-pointer h-12 dark bg-transparent hover:brightness-75 hover:bg-transparent translate-x-10",onClick:async()=>t(await navigator.clipboard.readText()),children:jt.jsx(TM,{color:"white",height:23})}),jt.jsx(IC,{value:a,onChange:m=>t(m.target.value),size:50,className:"text-white h-12 pl-10",disabled:i})]}),jt.jsx(e0,{type:"submit",variant:"secondary",disabled:i,className:"cursor-pointer h-12 dark",children:"Search..."})]})}function HC({className:a,...t}){return jt.jsx("div",{"data-slot":"card",className:Vs("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",a),...t})}function GC({className:a,...t}){return jt.jsx("div",{"data-slot":"card-header",className:Vs("flex flex-col gap-1.5 px-6",a),...t})}function VC({className:a,...t}){return jt.jsx("div",{"data-slot":"card-content",className:Vs("px-6",a),...t})}const kC=xx("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function Sx({className:a,variant:t,asChild:i=!1,...r}){const l=i?lp:"span";return jt.jsx(l,{"data-slot":"badge",className:Vs(kC({variant:t}),a),...r})}const XC=a=>a.split(":")[0].toLowerCase().replace(/ /g,"-");function WC(){const{result:a,setError:t}=ru();if(!a||a.failed)return a!=null&&a.failed&&t("Unable to access scan on this site."),jt.jsx(jt.Fragment,{});const{url:i,a:r,aaaa:l,cname:c,title:f,status_code:d,webserver:m,tech:p}=a;return jt.jsxs("div",{className:"flex flex-wrap justify-center mt-10 gap-3",children:[jt.jsxs(eh,{title:"General Information",children:[i&&jt.jsx(Sr,{title:"Domain",data:i}),r&&jt.jsx(Sr,{title:"IPv4 Address",data:r}),l&&jt.jsx(Sr,{title:"IPv6 Address",data:l}),c&&jt.jsx(Sr,{title:"CNAME Records",data:c})]}),jt.jsxs(eh,{title:"Webpage Details",children:[f&&jt.jsx(Sr,{title:"Title",data:f}),d&&jt.jsx(Sr,{title:"HTTP Status Code",data:d}),m&&jt.jsx(Sr,{title:"Web Server",data:m})]}),p&&jt.jsx(eh,{title:"Technology Stack",children:jt.jsx("div",{className:"flex flex-wrap justify-center gap-0.5",children:p.map(g=>jt.jsxs(Sx,{className:"bg-slate-700 text-white",children:[jt.jsx("img",{onError:_=>_.target.classList.add("hidden"),height:20,width:20,src:`https://cdn.simpleicons.org/${XC(g)}/white`}),g.replace(":"," ")]},g))})})]})}function eh({children:a,title:t}){return jt.jsxs(HC,{className:"dark w-92 bg-slate-800/90 border-slate-700",children:[jt.jsx(GC,{className:"text-center font-bold",children:t}),jt.jsx(VC,{children:jt.jsx("div",{children:a})})]})}function Sr({title:a,data:t}){return jt.jsxs("div",{children:[jt.jsxs("b",{children:[a," - "]}),Array.isArray(t)?jt.jsx("div",{className:"inline space-x-0.5",children:t.map(i=>jt.jsx(Sx,{className:"bg-slate-700 text-white",children:i},i))}):t]})}function qC(){const{setUrl:a,isLoading:t,error:i,result:r}=ru();return Ne.useEffect(()=>{(async()=>{const l=await navigator.clipboard.readText();d0(l)&&a(l)})()},[a]),jt.jsxs(jt.Fragment,{children:[jt.jsx(nw,{}),jt.jsxs("div",{className:`w-[95vw] m-auto flex flex-col justify-center items-center ${r?"pt-10":"h-[100vh]"}`,children:[jt.jsx("h1",{className:"text-4xl text-white mb-10 font-bold",children:"Scan Any Website Instantly – Get Insights Now!"}),jt.jsx(FC,{}),t&&jt.jsx(RM,{color:"white",size:60,className:"animate-spin mt-7"}),i&&jt.jsx("p",{className:"text-white mt-7",children:i}),jt.jsx(WC,{})]})]})}Ny.createRoot(document.getElementById("root")).render(jt.jsx(Ne.StrictMode,{children:jt.jsx(wM,{children:jt.jsx(qC,{})})}));
