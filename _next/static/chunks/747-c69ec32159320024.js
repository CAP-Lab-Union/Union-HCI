"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{5565:(e,t,r)=>{r.d(t,{default:()=>i.a});var n=r(4146),i=r.n(n)},7970:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let n=r(306),i=r(9955),o=r(5155),a=i._(r(2115)),u=n._(r(7650)),l=n._(r(6107)),s=r(666),c=r(1159),d=r(3621);r(2363);let f=r(3576),p=n._(r(5514)),h=r(5353),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Union-HCI/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,n,i,o,a){let u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function y(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:u,width:l,decoding:s,className:c,style:d,fetchPriority:f,placeholder:p,loading:m,unoptimized:v,fill:b,onLoadRef:w,onLoadingCompleteRef:_,setBlurComplete:x,setShowAltText:S,sizesInput:j,onLoad:P,onError:C,...O}=e,E=(0,a.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&g(e,p,w,_,x,v,j))},[r,p,w,_,x,C,v,j]),M=(0,h.useMergedRef)(t,E);return(0,o.jsx)("img",{...O,...y(f),loading:m,width:l,height:u,decoding:s,"data-nimg":b?"fill":"1",className:c,style:d,sizes:i,srcSet:n,src:r,ref:M,onLoad:e=>{g(e.currentTarget,p,w,_,x,v,j)},onError:e=>{S(!0),"empty"!==p&&x(!0),C&&C(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&u.default.preload?(u.default.preload(r.src,n),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(d.ImageConfigContext),i=(0,a.useMemo)(()=>{var e;let t=m||n||c.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),i=t.deviceSizes.sort((e,t)=>e-t),o=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:i,qualities:o}},[n]),{onLoad:u,onLoadingComplete:l}=e,h=(0,a.useRef)(u);(0,a.useEffect)(()=>{h.current=u},[u]);let g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let[y,w]=(0,a.useState)(!1),[_,x]=(0,a.useState)(!1),{props:S,meta:j}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:y,showAltText:_});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...S,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:w,setShowAltText:x,sizesInput:e.sizes,ref:t}),j.priority?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=r(2115);function i(e,t){let r=(0,n.useRef)(()=>{}),i=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),i.current()):(r.current=o(e,n),i.current=o(t,n))}:e||t,[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3003:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(306)._(r(2115)).default.createContext({})},675:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},666:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(2363);let n=r(5859),i=r(1159);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r,u;let l,s,c,{src:d,sizes:f,unoptimized:p=!1,priority:h=!1,loading:m,className:g,quality:y,width:v,height:b,fill:w=!1,style:_,overrideSrc:x,onLoad:S,onLoadingComplete:j,placeholder:P="empty",blurDataURL:C,fetchPriority:O,decoding:E="async",layout:M,objectFit:I,objectPosition:R,lazyBoundary:k,lazyRoot:z,...A}=e,{imgConf:N,showAltText:T,blurComplete:D,defaultLoader:G}=t,F=N||i.imageConfigDefault;if("allSizes"in F)l=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t),n=null==(r=F.qualities)?void 0:r.sort((e,t)=>e-t);l={...F,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===G)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let U=A.loader||G;delete A.loader,delete A.srcSet;let L="__next_img_default"in U;if(L){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:r,...n}=t;return e(n)}}if(M){"fill"===M&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!f&&(f=t)}let q="",B=a(v),W=a(b);if((u=d)&&"object"==typeof u&&(o(u)||void 0!==u.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,c=e.blurHeight,C=C||e.blurDataURL,q=e.src,!w){if(B||W){if(B&&!W){let t=B/e.width;W=Math.round(e.height*t)}else if(!B&&W){let t=W/e.height;B=Math.round(e.width*t)}}else B=e.width,W=e.height}}let H=!h&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:q)||d.startsWith("data:")||d.startsWith("blob:"))&&(p=!0,H=!1),l.unoptimized&&(p=!0),L&&!l.dangerouslyAllowSVG&&d.split("?",1)[0].endsWith(".svg")&&(p=!0);let V=a(y),$=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:R}:{},T?{}:{color:"transparent"},_),J=D||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:B,heightInt:W,blurWidth:s,blurHeight:c,blurDataURL:C||"",objectFit:$.objectFit})+'")':'url("'+P+'")',Q=J?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},X=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),c=l.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:l.map((e,n)=>u({config:t,src:r,quality:o,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:u({config:t,src:r,quality:o,width:l[c]})}}({config:l,src:d,unoptimized:p,width:B,quality:V,sizes:f,loader:U});return{props:{...A,loading:H?"lazy":m,fetchPriority:O,width:B,height:W,decoding:E,className:g,style:{...$,...Q},sizes:X.sizes,srcSet:X.srcSet,src:x||X.src},meta:{unoptimized:p,priority:h,placeholder:P,fill:w}}}},6107:(e,t,r)=>{var n=r(2818);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return f}});let i=r(306),o=r(9955),a=r(5155),u=o._(r(2115)),l=i._(r(1172)),s=r(3003),c=r(1147),d=r(675);function f(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2363);let h=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){let t=h[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,u.default.cloneElement(e,t)}return u.default.cloneElement(e,{key:i})})}let g=function(e){let{children:t}=e,r=(0,u.useContext)(s.AmpStateContext),n=(0,u.useContext)(c.HeadManagerContext);return(0,a.jsx)(l.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5859:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,u=n?40*n:t,l=i?40*i:r,s=u&&l?"viewBox='0 0 "+u+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3621:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=r(306)._(r(2115)),i=r(1159),o=n.default.createContext(i.imageConfigDefault)},1159:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},4146:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return u}});let n=r(306),i=r(666),o=r(7970),a=n._(r(5514));function u(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Union-HCI/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=o.Image},5514:(e,t)=>{function r(e){var t;let{config:r,src:n,width:i,quality:o}=e,a=o||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+a+(n.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},3576:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(306)._(r(2115)).default.createContext(null)},1172:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(2115),i="undefined"==typeof window,o=i?()=>{}:n.useLayoutEffect,a=i?()=>{}:n.useEffect;function u(e){let{headManager:t,reduceComponentsToState:r}=e;function u(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}if(i){var l;null==t||null==(l=t.mountedInstances)||l.add(e.children),u()}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=u),()=>{t&&(t._pendingUpdate=u)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},2615:(e,t,r)=>{r.d(t,{d:()=>d});var n=r(2115);function i(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function u(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,u)}l((n=n.apply(e,t||[])).next())})}function o(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}function a(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function l(e,t,r){if(r||2==arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}function s(e,t,r,n,s){for(var d=[],f=5;f<arguments.length;f++)d[f-5]=arguments[f];return i(this,void 0,void 0,function(){var f,p,h,m,g;return o(this,function(y){switch(y.label){case 0:y.trys.push([0,12,13,14]),p=(f=a(d)).next(),y.label=1;case 1:if(p.done)return[3,11];switch(typeof(h=p.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,function(e,t,r,n,s,d){return i(this,void 0,void 0,function(){var f,p;return o(this,function(h){switch(h.label){case 0:var m,g;return m=f=e.textContent||"",g=u(r).slice(0),p=l(l([],u(m),!1),[NaN],!1).findIndex(function(e,t){return g[t]!==e}),[4,function(e,t,r,n,l){return i(this,void 0,void 0,function(){var i,s,d,f,p,h,m,g,y,v,b,w;return o(this,function(_){switch(_.label){case 0:if(i=t,l){for(s=0,d=1;d<t.length;d++)if(p=(f=u([t[d-1],t[d]],2))[0],(h=f[1]).length>p.length||""===h){s=d;break}i=t.slice(s,t.length)}_.label=1;case 1:_.trys.push([1,6,7,8]),g=(m=a(function(e){var t,r,n,i,u,l;return o(this,function(s){switch(s.label){case 0:t=function(e){return o(this,function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame(function(){return t.textContent=e})},opCode:function(t){var r=t.textContent||"";return""===e||r.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}})},s.label=1;case 1:s.trys.push([1,6,7,8]),n=(r=a(e)).next(),s.label=2;case 2:return n.done?[3,5]:(i=n.value,[5,t(i)]);case 3:s.sent(),s.label=4;case 4:return n=r.next(),[3,2];case 5:return[3,8];case 6:return u={error:s.sent()},[3,8];case 7:try{n&&!n.done&&(l=r.return)&&l.call(r)}finally{if(u)throw u.error}return[7];case 8:return[2]}})}(i))).next(),_.label=2;case 2:return g.done?[3,5]:(v="WRITING"===(y=g.value).opCode(e)?r+r*(Math.random()-.5):n+n*(Math.random()-.5),y.op(e),[4,c(v)]);case 3:_.sent(),_.label=4;case 4:return g=m.next(),[3,2];case 5:return[3,8];case 6:return b={error:_.sent()},[3,8];case 7:try{g&&!g.done&&(w=m.return)&&w.call(m)}finally{if(b)throw b.error}return[7];case 8:return[2]}})})}(e,l(l([],u(function(e,t,r){var n,i;return void 0===r&&(r=0),o(this,function(o){switch(o.label){case 0:i=(n=t(e)).length,o.label=1;case 1:return i>r?[4,n.slice(0,--i).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}(f,t,p)),!1),u(function(e,t,r){var n,i;return void 0===r&&(r=0),o(this,function(o){switch(o.label){case 0:i=(n=t(e)).length,o.label=1;case 1:return r<i?[4,n.slice(0,++r).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}(r,t,p)),!1),n,s,d)];case 1:return h.sent(),[2]}})})}(e,t,h,r,n,s)];case 3:case 5:case 7:return y.sent(),[3,10];case 4:return[4,c(h)];case 6:return[4,h.apply(void 0,l([e,t,r,n,s],u(d),!1))];case 8:return[4,h];case 9:y.sent(),y.label=10;case 10:return p=f.next(),[3,1];case 11:return[3,14];case 12:return m={error:y.sent()},[3,14];case 13:try{p&&!p.done&&(g=f.return)&&g.call(f)}finally{if(m)throw m.error}return[7];case 14:return[2]}})})}function c(e){return i(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return[4,new Promise(function(t){return setTimeout(t,e)})];case 1:return t.sent(),[2]}})})}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var d=(0,n.memo)((0,n.forwardRef)(function(e,t){var r=e.sequence,i=e.repeat,o=e.className,a=e.speed,c=void 0===a?40:a,d=e.deletionSpeed,f=e.omitDeletionAnimation,p=void 0!==f&&f,h=e.preRenderFirstString,m=e.wrapper,g=e.splitter,y=void 0===g?function(e){return l([],u(e),!1)}:g,v=e.cursor,b=void 0===v||v,w=e.style,_=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),x=_["aria-label"],S=_["aria-hidden"],j=_.role;d||(d=c);var P=[,,].fill(40);[c,d].forEach(function(e,t){switch(typeof e){case"number":P[t]=Math.abs(e-100);break;case"object":var r=e.type,n=e.value;if("number"!=typeof n)break;"keyStrokeDelayInMs"===r&&(P[t]=n)}});var C,O,E,M,I,R,k,z,A=P[0],N=P[1],T=(void 0===C&&(C=null),O=(0,n.useRef)(C),(0,n.useEffect)(function(){t&&("function"==typeof t?t(O.current):t.current=O.current)},[t]),O),D="index-module_type__E-SaG";E=o?"".concat(b?D+" ":"").concat(o):b?D:"",M=(0,n.useRef)(function(){var e,t=r;i===1/0?e=s:"number"==typeof i&&(t=Array(1+i).fill(r).flat());var n=e?l(l([],u(t),!1),[e],!1):l([],u(t),!1);return s.apply(void 0,l([T.current,y,A,N,p],u(n),!1)),function(){T.current}}),I=(0,n.useRef)(),R=(0,n.useRef)(!1),k=(0,n.useRef)(!1),z=u((0,n.useState)(0),2)[1],R.current&&(k.current=!0),(0,n.useEffect)(function(){return R.current||(I.current=M.current(),R.current=!0),z(function(e){return e+1}),function(){k.current&&I.current&&I.current()}},[]);var G=void 0!==h&&h?r.find(function(e){return"string"==typeof e})||"":null;return n.createElement(void 0===m?"span":m,{"aria-hidden":S,"aria-label":x,role:j,style:w,className:E,children:x?n.createElement("span",{"aria-hidden":"true",ref:T,children:G}):G,ref:x?void 0:T})}),function(e,t){return!0})}}]);