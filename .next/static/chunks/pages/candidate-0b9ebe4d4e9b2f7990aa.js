(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[242],{9917:function(e,t,n){"use strict";var r=n(3848),i=n(3115);t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,l=void 0!==i&&i,u=e.priority,d=void 0!==u&&u,m=e.loading,v=e.lazyBoundary,h=void 0===v?"200px":v,b=e.className,y=e.quality,x=e.width,w=e.height,S=e.objectFit,I=e.objectPosition,E=e.onLoadingComplete,_=e.loader,z=void 0===_?A:_,N=e.placeholder,P=void 0===N?"empty":N,O=e.blurDataURL,L=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),D=n?"responsive":"intrinsic";"layout"in L&&(L.layout&&(D=L.layout),delete L.layout);var C="";if(function(e){return"object"===typeof e&&(g(e)||function(e){return void 0!==e.src}(e))}(t)){var M=g(t)?t.default:t;if(!M.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(M)));if(O=O||M.blurDataURL,C=M.src,(!D||"fill"!==D)&&(w=w||M.height,x=x||M.width,!M.height||!M.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(M)))}t="string"===typeof t?t:C;var R=k(x),q=k(w),Z=k(y),B=!d&&("lazy"===m||"undefined"===typeof m);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,B=!1);p.has(t)&&(B=!1);0;var T,J,U,W=c.useIntersection({rootMargin:h,disabled:!B}),F=r(W,2),H=F[0],Q=F[1],V=!B||Q,X={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:S,objectPosition:I},$="blur"===P?{filter:"blur(20px)",backgroundSize:S||"cover",backgroundImage:'url("'.concat(O,'")'),backgroundPosition:I||"0% 0%"}:{};if("fill"===D)T={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof R&&"undefined"!==typeof q){var G=q/R,K=isNaN(G)?"100%":"".concat(100*G,"%");"responsive"===D?(T={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},J={display:"block",boxSizing:"border-box",paddingTop:K}):"intrinsic"===D?(T={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},J={boxSizing:"border-box",display:"block",maxWidth:"100%"},U='<svg width="'.concat(R,'" height="').concat(q,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===D&&(T={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:R,height:q})}else 0;var Y={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};V&&(Y=j({src:t,unoptimized:l,layout:D,width:R,quality:Z,sizes:n,loader:z}));var ee=t;return a.default.createElement("div",{style:T},J?a.default.createElement("div",{style:J},U?a.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(s.toBase64(U))}):null):null,a.default.createElement("img",Object.assign({},L,Y,{decoding:"async","data-nimg":D,className:b,ref:function(e){H(e),function(e,t,n,r,i){if(!e)return;var a=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),p.add(t),i){var n=e.naturalWidth,a=e.naturalHeight;i({naturalWidth:n,naturalHeight:a})}}))};e.complete?a():e.onload=a}(e,ee,0,P,E)},style:f({},X,$)})),a.default.createElement("noscript",null,a.default.createElement("img",Object.assign({},L,j({src:t,unoptimized:l,layout:D,width:R,quality:Z,sizes:n,loader:z}),{decoding:"async","data-nimg":D,style:X,className:b,loading:m||"lazy"}))),d?a.default.createElement(o.default,null,a.default.createElement("link",{key:"__nimg-"+Y.src+Y.srcSet+Y.sizes,rel:"preload",as:"image",href:Y.srcSet?void 0:Y.src,imagesrcset:Y.srcSet,imagesizes:Y.sizes})):null)};var a=d(n(7294)),o=d(n(639)),s=n(8997),l=n(5809),c=n(7426);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}var p=new Set;var m=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,a=new URL("".concat(t).concat(S(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),i&&o.set("q",i.toString());return a.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(S(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(S(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(e){return void 0!==e.default}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||l.imageConfigDefault,h=v.deviceSizes,b=v.imageSizes,y=v.loader,x=v.path,w=(v.domains,[].concat(i(h),i(b)));function j(e){var t=e.src,n=e.unoptimized,r=e.layout,a=e.width,o=e.quality,s=e.sizes,l=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var c=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,a=/(^|\s)(1?\d?\d)vw/g,o=[];r=a.exec(n);r)o.push(parseInt(r[2]));if(o.length){var s=.01*Math.min.apply(Math,o);return{widths:w.filter((function(e){return e>=h[0]*s})),kind:"w"}}return{widths:w,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:h,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return w.find((function(t){return t>=e}))||w[w.length-1]})))),kind:"x"}}(a,r,s),u=c.widths,d=c.kind,f=u.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:u.map((function(e,n){return"".concat(l({src:t,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:l({src:t,quality:o,width:u[f]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t=m.get(y);if(t)return t(f({root:x},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(y))}function S(e){return"/"===e[0]?e.slice(1):e}h.sort((function(e,t){return e-t})),w.sort((function(e,t){return e-t}))},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,l=i.useRef(),c=i.useState(!1),u=r(c,2),d=u[0],f=u[1],p=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),s.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return i.useEffect((function(){if(!o&&!d){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[p,d]};var i=n(7294),a=n(3447),o="undefined"!==typeof IntersectionObserver;var s=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},9957:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(266);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(l){s=!0,i=l}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n(809),s=n.n(o),l=n(1163),c=n(7294),u=n(5379),d=n(4552),f=n(5893),p=function(e){var t,n=e.isLoading,r=e.isError,i=e.error,a=e.data,o=e.isPreviousData,s=e.freeLancerId,l=e.onPagination,p=e.filterApplied,m=e.onJobApply,g=(0,c.useState)(1),v=g[0],h=g[1];return(0,c.useEffect)((function(){l(v)}),[v,l]),(0,c.useEffect)((function(){h(1)}),[p]),(0,f.jsxs)("div",{className:"flex flex-column items-center mw7-l",children:[n?(0,f.jsx)("div",{children:"Loading..."}):r?(0,f.jsxs)("div",{children:["Error: ",i.message]}):(0,f.jsx)("div",{children:a.results.map((function(e){return(0,f.jsx)(d.Z,{result:e,freeLancerId:s,onJobApply:m,onJobEdit:null},e.ID)}))}),(null===a||void 0===a||null===(t=a.results)||void 0===t?void 0:t.length)>0?(0,f.jsxs)("div",{className:"flex items-center",children:[(0,f.jsx)(u.Z,{onClick:function(){return h((function(e){return Math.max(e-1,1)}))},disabled:1===v,children:"Previous"}),(0,f.jsx)("span",{className:"mh3",children:v}),(0,f.jsx)(u.Z,{onClick:function(){!o&&a.next&&h((function(e){return e+1}))},disabled:o||!(null!==a&&void 0!==a&&a.next),children:"Next"})]}):"No results found"]})},m=n(8737),g=n(7547),v=n(5368),h=n.n(v),b=function(e){var t=e.children,n=e.className;return(0,f.jsx)("div",{className:"".concat(h().panel," ").concat(n||""),children:t})},y=n(9583),x=function(e){var t=e.onApplyFilter,n=(0,c.useState)(""),r=n[0],i=n[1],a=(0,c.useState)(0),o=a[0],s=a[1];return(0,f.jsxs)(b,{children:[(0,f.jsxs)("div",{className:"pb2 bb b--light-gray",children:[(0,f.jsx)(y.ulB,{})," All filters"]}),(0,f.jsx)("div",{className:"mv2 f6",children:"Skills"}),(0,f.jsx)(m.ZP,{isMulti:!0,options:g.p,onChange:function(e){return i(e.map((function(e){return e.value})).join(","))}}),(0,f.jsx)("div",{className:"mb4"}),(0,f.jsxs)("div",{className:"flex justify-between mb3",children:[(0,f.jsx)("label",{htmlFor:"salary",className:"f6",children:"Min Salary"}),(0,f.jsx)("input",{type:"range",id:"salary",name:"vol",min:"0",max:"30",onChange:function(e){return s(parseInt(e.target.value))},value:o}),(0,f.jsxs)("div",{className:"f7",children:["$ ",o," / hr"]})]}),(0,f.jsx)(u.Z,{onClick:function(){return function(e,n){t({salary:e,skills:n})}(o,r)},children:"Apply"})]})},w=n(8877),j=n(5675),k=function(e){var t=e.isLoading,n=e.isError,r=e.error,i=e.data,a=e.onUpdateProfile;return(0,f.jsx)(b,{children:t?(0,f.jsx)("div",{children:"Loading..."}):n?(0,f.jsxs)("div",{children:["Error: ",r.message]}):i&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"flex center absolute right-50",style:{height:"50px",width:"50px",top:"-22px",marginRight:"-22px",right:"50%"},children:(0,f.jsx)(j.default,{src:i.avtarLink,alt:"Vercel Logo",width:72,height:16})}),(0,f.jsx)("div",{className:"tc f4 pb2 mt4",children:i.name}),(0,f.jsxs)("div",{className:"tc f6",children:[i.designation," at ",i.companyName]}),(0,f.jsx)(w.Z,{skills:i.skills}),(0,f.jsx)(u.Z,{onClick:function(){return a()},children:"Update Profile"})]})})},A=n(8767),S=n(5665),I=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,i,a,o,l,c,u,d,f;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.page,r=void 0===n?1:n,i=t.perPageCount,a=void 0===i?10:i,o=t.skills,l=void 0===o?"":o,c=t.salary,u=void 0===c?0:c,d=" {\n    getAllPostedJobsPaginated(param: {page: ".concat(r,", perPageCount: ").concat(a,', skills: "').concat(l,'", salary: ').concat(u,"}) {\n      count\n      next\n      prev\n      results {\n        ID,\n        jobTitle,\n        jobDescription,\n        jobRequirements,\n        skills,\n        companyName,\n        contactInfo,\n        salary,\n        appliedBy\n        postedAt\n      }\n    }\n  }"),e.next=4,(0,S.Z)("getAllPostedJobsPaginated",d);case 4:return f=e.sent,e.abrupt("return",f);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var E=n(1869),_=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,i,a,o,l,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return n=t.jobId,r=t.flId,i=t.page,a=t.skills,o=t.salary,l='mutation {\n      applyJob(param: {jobId: "'.concat(n,'", flId: "').concat(r,'", page: ').concat(i,', skills: "').concat(a,'", salary: ').concat(o,"}) {\n        count\n        next\n        prev\n        results {\n          ID,\n          jobTitle,\n          jobDescription,\n          jobRequirements,\n          skills,\n          companyName,\n          contactInfo,\n          salary,\n          appliedBy\n          postedAt\n        }\n      }\n  }"),e.next=6,(0,S.Z)("applyJob",l);case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var z=n(4029),N=n.n(z),P=function(e){var t=e.alertMessage;return(0,f.jsx)(f.Fragment,{children:t&&(0,f.jsx)("div",{className:"".concat(t&&"bg-green pv2 ph2 white b fixed f6"," ").concat(N().alert),children:t})})};var O=n(2525),L=n(5080),D=function(){var e,t=(0,l.useRouter)(),n=null===t||void 0===t||null===(e=t.query)||void 0===e?void 0:e.freeLancerId,i=(0,c.useState)(!1),o=i[0],u=i[1],d=a(function(){var e=(0,c.useState)(),t=e[0],n=e[1];return[t,function(e){n(e),setTimeout((function(){n("")}),3e3)},function(){n("")}]}(),2),m=d[0],g=d[1],v=(0,c.useState)(1),h=v[0],b=v[1],y=(0,c.useState)(0),w=y[0],j=y[1],S=(0,c.useState)(""),z=S[0],N=S[1],D=(0,c.useState)({salary:w,skills:z}),C=D[0],M=D[1],R=(0,c.useState)(!1),q=R[0],Z=R[1],B=function(e,t,n){return(0,A.useQuery)(["jobs",{page:e,skills:t,salary:n}],(function(){return I({page:e,skills:t,salary:n})}),{keepPreviousData:!0,staleTime:3e4,cacheTime:3e4})}(h,C.skills,C.salary),T=B.isLoading,J=B.isError,U=B.error,W=B.data,F=B.isPreviousData,H=(0,E.Z)(n),Q=H.isLoading,V=H.isError,X=H.error,$=H.data,G=function(e,t,n){var r=(0,A.useQueryClient)();return(0,A.useMutation)(_,{onSuccess:function(i){return r.setQueryData(["jobs",{page:e,skills:t,salary:n}],i)}})}(h,z,w),K=function(){var e=(0,r.Z)(s().mark((function e(t,n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.mutate({jobId:t,flId:n,page:h,skills:z,salary:w});case 2:g("You have successfully applied.");case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(P,{alertMessage:m}),$&&(0,f.jsx)(O.Z,{openModal:o,onClose:function(){return u(!1)},children:(0,f.jsx)(L.Z,{userData:$[0],onSubmitCB:function(){return u(!1)}})}),(0,f.jsxs)("div",{className:"flex flex-wrap items-start justify-around mh6-l pt6",children:[(0,f.jsx)(x,{onApplyFilter:function(e){var t=e.skills,n=e.salary;Z(!0),j(n),N(t),M({salary:n,skills:t})}}),(0,f.jsx)(p,{isLoading:T,isError:J,error:U,data:W,isPreviousData:F,freeLancerId:n,filterApplied:q,onPagination:function(e){Z(!1),b(e)},onJobApply:K}),(0,f.jsx)(k,{isLoading:Q,isError:V,error:X,data:null===$||void 0===$?void 0:$[0],onUpdateProfile:function(){u(!0)}})]})]})}},8803:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/candidate",function(){return n(9957)}])},4029:function(e){e.exports={alert:"alert_alert__2fIdr"}},5368:function(e){e.exports={panel:"panel_panel__2BKHE"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},5675:function(e,t,n){e.exports=n(9917)}},function(e){e.O(0,[774,445,526,552,888,179],(function(){return t=8803,e(e.s=t);var t}));var t=e.O();_N_E=t}]);