(self.webpackChunkproduct_website_template=self.webpackChunkproduct_website_template||[]).push([[245],{789:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var r=n(6540),o=n(255),i=n(7640),a=n(14),s=n.n(a),u=n(2877),l=n.n(u),c=n(5808),f=n.n(c),d=n(2404),p=n.n(d),v=n(2193),h=n.n(v),g="ResultsDisplaySwitch-module--button--75fc8",m=n(4164),x=n(6784),b=n(6188),_=n(3279),y=n(2389),j=n(4848);var O=e=>{let{layoutClassName:t,displayKey:n}=e;const{setDisplay:r,isActive:o}=(0,_.d)(),{t:a}=(0,y.Bd)();return(0,j.jsxs)(i.e2,{role:"region","aria-label":a("View"),className:(0,m.A)("ResultsDisplaySwitch-module--container--99044",t&&t),children:[(0,j.jsxs)(i.$n,{appearance:o(n,"cards")?"primary-action-button":"secondary-action-button",className:g,onClick:()=>r({[n]:"cards"}),"aria-label":a("Cards view"),children:[(0,j.jsx)(x.g,{icon:b.S9g})," ",a("Cards")]}),(0,j.jsxs)(i.$n,{appearance:o(n,"table")?"primary-action-button":"secondary-action-button",className:g,onClick:()=>r({[n]:"table"}),"aria-label":a("Table view"),children:[(0,j.jsx)(x.g,{icon:b.w97})," ",a("Table")]})]})},w=n(5373),S=n.n(w),N=n(9785),A=n(3306),T=n(2617),I=n(4145),L=n(123),R=n(4810),C=n(8760),z=n(5942),E=n(7453);var W=n(3516),P=n(1372);const $=e=>{let{isLoading:t}=e;const{t:n}=(0,y.Bd)(),{setPagination:a}=(0,W.b)(),{gatsbyContext:u}=(0,C.J)(),{filters:c,setFilters:d}=(0,T.Y)(),{categoryOptions:v,setCategoryOptions:g}=(0,P.h)(),[m,_]=r.useState(T.c),[w,$]=r.useState(),G=r.useRef(null),{control:H,register:k,handleSubmit:F,watch:B,setValue:M,formState:{errors:Y}}=(0,N.mN)(),q=B(),V=(new Date).getFullYear(),Q=u.location.search,[,D]=Q.split("?"),Z=S().parse(D),J=(()=>{const e=r.useContext(E.A);return{getCategories:()=>(0,z.useQuery)(["available_catagories"],(()=>null==e?void 0:e.AvailableFilters.getCategories()),{onError:e=>{console.warn(e.message)}})}})().getCategories(),K=e=>{var t,n,r;d({_search:e._search,"published[after]":null===(t=e.year)||void 0===t?void 0:t.after,"published[before]":null===(n=e.year)||void 0===n?void 0:n.before,categorie:null===(r=e.category)||void 0===r?void 0:r.value})};return r.useEffect((()=>{G.current&&clearTimeout(G.current),G.current=setTimeout((()=>K(q)),500)}),[q]),r.useEffect((()=>{h()(Z)||($(Z),(e=>{["_search","category"].forEach((t=>M(t,e[t]))),M("year",(0,I.R)(V-2021).find((t=>t.value===e.year)))})(Z))}),[]),r.useEffect((()=>{h()(v)||h()(w)||(e=>{J.isSuccess&&M("category",v.options.find((t=>{var n;return t.value===(null===(n=e.categorie)||void 0===n?void 0:n.replace(/_/g," "))})))})(w)}),[v]),r.useEffect((()=>{p()(c,m)||(_(c),(0,R.oo)(`/${(0,L.U)(c)}`),a({currentPage:1}))}),[c]),r.useEffect((()=>{if(!J.isSuccess)return;const e=J.data.facets.category.map((e=>({label:f()(e._id.toLowerCase()),value:f()(e._id.toLowerCase())}))),t=l()(s()(e,"value"),"label","asc");g({options:t})}),[J.isSuccess]),(0,j.jsxs)("div",{id:"filters",className:"FiltersTemplate-module--container--53abd",children:[(0,j.jsxs)("form",{role:"region","aria-label":n("Filters"),onSubmit:F(K),className:"FiltersTemplate-module--form--ee9e5",children:[(0,j.jsx)(A.Sm,{name:"_search",placeholder:`${n("Search")}..`,defaultValue:c._search,ariaLabel:n("Enter search query"),register:k,errors:Y}),(0,j.jsx)(A.L9,{options:(0,I.R)(V-2021),name:"year",placeholder:n("Year"),isClearable:!0,defaultValue:(0,I.R)(V-2021).find((e=>e.after===c["published[after]"]&&e.before===c["published[before]"])),register:k,errors:Y,control:H,ariaLabel:n("Select year")}),J.isLoading&&(0,j.jsx)(o.A,{height:"50px"}),J.isSuccess&&(0,j.jsx)(A.L9,{options:v.options,name:"category",placeholder:n("Category"),defaultValue:v.options&&v.options.find((e=>e.value===c.categorie)),isClearable:!0,disabled:J.isLoading,register:k,errors:Y,control:H,ariaLabel:n("Select category")}),(0,j.jsxs)(i.$n,{type:"submit",className:"FiltersTemplate-module--button--c8824",disabled:t,"aria-label":n(t?"Loading results":"Search"),children:[(0,j.jsx)(x.g,{icon:t?b.z1G:b.$UM})," ",!t&&n("Search")]})]}),(0,j.jsx)(O,{displayKey:"landing-results"})]})};var G=n(6870),H=n(2061),k=n(4791);const F=e=>{let{requests:t}=e;const{t:n,i18n:r}=(0,y.Bd)();return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("div",{className:"CardsResultsTemplate-module--componentsGrid--cfabc",role:"region","aria-label":n("Woo Request"),children:t.map((e=>{var t,o,a,s,u,l,c,f,d;return(0,j.jsxs)(A.Ox,{role:"region",className:"CardsResultsTemplate-module--cardContainer--81f65",onClick:()=>(0,R.oo)(e.id.toString()),tabIndex:0,"aria-label":`${e.published?(0,G.L)(r.language,e.published):n("N/A")}, ${(0,k.n)((0,k.n)(e.title))}, ${(0,k.n)((0,k.n)(e.summary))} ${"true"===window.sessionStorage.getItem("SHOW_ORGANIZATION")?`,${null!==(t=null===(o=e.catalog)||void 0===o||null===(a=o.organization)||void 0===a?void 0:a.title)&&void 0!==t?t:null===(s=e.organization)||void 0===s?void 0:s.title}`:""} ${"true"===window.sessionStorage.getItem("SHOW_CATEGORY")?`, ${n("Category")}, ${e.category}`:""}`,children:[(0,j.jsxs)(A.aR,{className:"CardsResultsTemplate-module--cardHeader--8e300",children:[(0,j.jsx)(A.SV,{children:e.published?(0,G.L)(r.language,e.published):n("N/A")}),(0,j.jsx)(A.es,{className:"CardsResultsTemplate-module--title--5df04",children:(0,j.jsx)(i.fV,{children:null!==(u=(0,k.n)((0,k.n)(e.title)))&&void 0!==u?u:n("No title available")})})]}),(0,j.jsx)(i.fz,{className:"CardsResultsTemplate-module--description--e3e0e",children:(0,k.n)((0,k.n)(e.summary))}),("true"===window.sessionStorage.getItem("SHOW_CATEGORY")||"true"===window.sessionStorage.getItem("SHOW_ORGANIZATION"))&&(0,j.jsxs)("div",{className:"CardsResultsTemplate-module--cardFooter--99775",children:["true"===window.sessionStorage.getItem("SHOW_ORGANIZATION")&&(0,j.jsx)(A.SV,{children:(0,j.jsx)("span",{"data-tooltip-id":H.TOOLTIP_ID,"data-tooltip-content":n("Municipality"),children:null!==(l=null===(c=e.catalog)||void 0===c||null===(f=c.organization)||void 0===f?void 0:f.title)&&void 0!==l?l:null===(d=e.organization)||void 0===d?void 0:d.title})}),"true"===window.sessionStorage.getItem("SHOW_CATEGORY")&&(0,j.jsx)(A.SV,{children:(0,j.jsx)("span",{"data-tooltip-id":H.TOOLTIP_ID,"data-tooltip-content":n("Category"),children:e.category})})]})]},e.id)}))})})};var B="TableResultsTemplate-module--categoryAndMunicipality--d3d93";const M=e=>{let{requests:t}=e;const{t:n,i18n:r}=(0,y.Bd)();return(0,j.jsx)(A.ax,{ariaLabels:{scrollLeftButton:n("Scroll table to the left"),scrollRightButton:n("Scroll table to the right")},children:(0,j.jsx)("div",{role:"region","aria-label":n("Woo Request"),children:(0,j.jsxs)(i.XI,{className:"TableResultsTemplate-module--table--2ed82",children:[(0,j.jsx)(i.A0,{className:"TableResultsTemplate-module--tableHeader--a4f80",children:(0,j.jsxs)(i.Hj,{children:[(0,j.jsx)(i.M_,{children:n("Subject")}),(0,j.jsx)(i.M_,{children:n("Publication date")}),("true"===window.sessionStorage.getItem("SHOW_CATEGORY")||"true"===window.sessionStorage.getItem("SHOW_ORGANIZATION"))&&(0,j.jsxs)(j.Fragment,{children:["true"===window.sessionStorage.getItem("SHOW_ORGANIZATION")&&(0,j.jsx)(i.M_,{children:n("Municipality")}),"true"===window.sessionStorage.getItem("SHOW_CATEGORY")&&(0,j.jsx)(i.M_,{children:n("Category")})]}),(0,j.jsx)(i.M_,{children:n("Summary")})]})}),(0,j.jsx)(i.BF,{className:"TableResultsTemplate-module--tableBody--290ef",children:t.map((e=>{var t,o,a,s,u,l,c,f,d,p,v,h,g;return(0,j.jsxs)(i.Hj,{className:"TableResultsTemplate-module--tableRow--b6c7e",onClick:()=>(0,R.oo)(e.id.toString()),tabIndex:0,"aria-label":`${(0,k.n)((0,k.n)(e.title))},  ${e.published?(0,G.L)(r.language,e.published):n("N/A")} ${"true"===window.sessionStorage.getItem("SHOW_ORGANIZATION")?`,${null!==(t=null===(o=e.catalog)||void 0===o||null===(a=o.organization)||void 0===a?void 0:a.title)&&void 0!==t?t:null===(s=e.organization)||void 0===s?void 0:s.title}`:""} ${"true"===window.sessionStorage.getItem("SHOW_CATEGORY")?`, ${e.category}`:""}, ${null!==(u=(0,k.n)((0,k.n)(e.summary)))&&void 0!==u?u:n("No summary available")}`,children:[(0,j.jsx)(i.nA,{children:null!==(l=(0,k.n)((0,k.n)(e.title)))&&void 0!==l?l:n("No subject available")}),(0,j.jsx)(i.nA,{children:e.published?(0,G.L)(r.language,e.published):n("No publication date available")}),("true"===window.sessionStorage.getItem("SHOW_CATEGORY")||"true"===window.sessionStorage.getItem("SHOW_ORGANIZATION"))&&(0,j.jsxs)(j.Fragment,{children:["true"===window.sessionStorage.getItem("SHOW_ORGANIZATION")&&(0,j.jsx)(i.nA,{className:B,children:null!==(c=null!==(f=null===(d=e.catalog)||void 0===d||null===(p=d.organization)||void 0===p?void 0:p.title)&&void 0!==f?f:null===(v=e.organization)||void 0===v?void 0:v.title)&&void 0!==c?c:n("No municipality available")}),"true"===window.sessionStorage.getItem("SHOW_CATEGORY")&&(0,j.jsx)(i.nA,{className:(0,m.A)("true"!==window.sessionStorage.getItem("SHOW_ORGANIZATION")&&B),children:null!==(h=e.category)&&void 0!==h?h:n("No category available")})]}),(0,j.jsx)(i.nA,{children:(0,j.jsx)("div",{className:"TableResultsTemplate-module--description--7ac0a",children:null!==(g=(0,k.n)((0,k.n)(e.summary)))&&void 0!==g?g:n("No summary available")})})]},e.id)}))})]})})})},Y=e=>{let{requests:t,displayKey:n}=e;const{displays:o,setDisplay:i}=(0,_.d)();return r.useEffect((()=>{o[n]||i({[n]:"cards"})}),[]),(0,j.jsxs)(j.Fragment,{children:["cards"===o[n]&&(0,j.jsx)(F,{requests:t}),"table"===o[n]&&(0,j.jsx)(M,{requests:t})]})};const q=()=>{const{t:e}=(0,y.Bd)();return(0,j.jsx)("div",{style:{backgroundImage:`url("${window.sessionStorage.getItem("JUMBOTRON_IMAGE_URL")}")`},className:"JumbotronTemplate-module--wrapper--2fbba",children:(0,j.jsx)(i.YW,{children:(0,j.jsx)(i.TK,{children:(0,j.jsxs)(A.Ox,{"aria-label":e("Jumbotron card"),role:"contentinfo",className:"JumbotronTemplate-module--card--cde1d",children:[(0,j.jsxs)(i._,{className:"JumbotronTemplate-module--title--fb795",children:[e("Woo-publications of")," ",window.sessionStorage.getItem("ORGANISATION_NAME")]}),(0,j.jsxs)(i.fz,{className:"JumbotronTemplate-module--description--19c41",children:[e("On this page you will find the Woo-publications of")," ",window.sessionStorage.getItem("ORGANISATION_NAME")]})]})})})})};var V=n(9878),Q=n(7987);const D=e=>{let{queryLimitName:t,layoutClassName:n}=e;const{watch:o,register:i,control:a,setValue:s,formState:{errors:u}}=(0,N.mN)(),{queryLimit:l,setQueryLimit:c}=(0,Q.m7)(),{t:f}=(0,y.Bd)(),d=o("limit"),p=l[t];return r.useEffect((()=>{if(!d)return;if(parseInt(d.value)===p)return;const e=Z.find((e=>e.value===d.value));e&&c({...l,[t]:parseInt(e.value)})}),[d]),r.useEffect((()=>{s("limit",Z.find((e=>e.value===(void 0!==p&&p.toString()))))}),[]),(0,j.jsxs)("div",{className:(0,m.A)("PaginationLimitSelect-module--container--4b5a5",n&&n),children:[(0,j.jsxs)("span",{children:[f("Results per page"),":"]}),(0,j.jsx)(A.L9,{ariaLabel:f("Select result limit"),register:i,errors:u,control:a,defaultValue:Q.LF,name:"limit",options:Z,menuPlacement:"auto",placeholder:f("Limit")})]})},Z=[{label:"6",value:"6"},{label:"9",value:"9"},{label:"12",value:"12"},{label:"21",value:"21"},{label:"30",value:"30"},{label:"60",value:"60"},{label:"120",value:"120"}],J=()=>{var e,t,n,a,s;const{t:u}=(0,y.Bd)(),{filters:l}=(0,T.Y)(),{pagination:c,setPagination:f}=(0,W.b)(),{queryLimit:d,setQueryLimit:p}=(0,Q.m7)(),v=new z.QueryClient,h=(0,V.N)(v).getAll(l,c.currentPage,d.openWooObjectsQueryLimit);return r.useEffect((()=>{d.openWooObjectsQueryLimit!==d.previousOpenWooObjectsQueryLimit&&(f({currentPage:1}),p({...d,previousOpenWooObjectsQueryLimit:d.openWooObjectsQueryLimit}))}),[d.openWooObjectsQueryLimit]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(q,{}),(0,j.jsx)(i.YW,{children:(0,j.jsxs)(i.TK,{className:"LandingTemplate-module--container--dc5ab",children:[(0,j.jsx)($,{isLoading:h.isLoading}),0===(null===(e=h.data)||void 0===e||null===(t=e.results)||void 0===t?void 0:t.length)&&!h.isLoading&&(0,j.jsxs)("span",{children:[u("No results found"),"."]}),(null===(n=h.data)||void 0===n?void 0:n.results)&&(null===(a=h.data)||void 0===a||null===(s=a.results)||void 0===s?void 0:s.length)>0&&(0,j.jsxs)("div",{id:"mainContent",children:[(0,j.jsx)(Y,{displayKey:"landing-results",requests:h.data.results}),(0,j.jsxs)("div",{role:"region","aria-label":u("Pagination"),className:"LandingTemplate-module--pagination--fde55",children:[(0,j.jsx)(A.dK,{ariaLabels:{pagination:u("Pagination"),previousPage:u("Previous page"),nextPage:u("Next page"),page:u("Page")},totalPages:h.data.pages,currentPage:h.data.page,setCurrentPage:e=>f({currentPage:e})}),(0,j.jsx)(D,{queryLimitName:"openWooObjectsQueryLimit"})]})]}),h.isLoading&&(0,j.jsx)(o.A,{height:"200px"})]})})]})};var K=()=>(0,j.jsx)(J,{})},1549:function(e,t,n){var r=n(2032),o=n(3862),i=n(6721),a=n(2749),s=n(5749);function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,e.exports=u},2460:function(e,t,n){var r=n(3702),o=n(80),i=n(4739),a=n(8655),s=n(1175);function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,e.exports=u},3661:function(e,t,n){var r=n(3040),o=n(7670),i=n(289),a=n(4509),s=n(2949);function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,e.exports=u},8859:function(e,t,n){var r=n(3661),o=n(1380),i=n(1459);function a(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new r;++t<n;)this.add(e[t])}a.prototype.add=a.prototype.push=o,a.prototype.has=i,e.exports=a},7217:function(e,t,n){var r=n(2460),o=n(1420),i=n(938),a=n(3605),s=n(9817),u=n(945);function l(e){var t=this.__data__=new r(e);this.size=t.size}l.prototype.clear=o,l.prototype.delete=i,l.prototype.get=a,l.prototype.has=s,l.prototype.set=u,e.exports=l},7828:function(e,t,n){var r=n(9325).Uint8Array;e.exports=r},9770:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i}},5325:function(e,t,n){var r=n(6131);e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},9905:function(e){e.exports=function(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}},695:function(e,t,n){var r=n(8096),o=n(2428),i=n(8830),a=n(3656),s=n(361),u=n(7167),l=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=i(e),c=!n&&o(e),f=!n&&!c&&a(e),d=!n&&!c&&!f&&u(e),p=n||c||f||d,v=p?r(e.length,String):[],h=v.length;for(var g in e)!t&&!l.call(e,g)||p&&("length"==g||f&&("offset"==g||"parent"==g)||d&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||s(g,h))||v.push(g);return v}},4528:function(e){e.exports=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}},4248:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}},6025:function(e,t,n){var r=n(5288);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},909:function(e,t,n){var r=n(641),o=n(8329)(r);e.exports=o},2523:function(e){e.exports=function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1}},6649:function(e,t,n){var r=n(3221)();e.exports=r},641:function(e,t,n){var r=n(6649),o=n(5950);e.exports=function(e,t){return e&&r(e,t,o)}},7422:function(e,t,n){var r=n(1769),o=n(7797);e.exports=function(e,t){for(var n=0,i=(t=r(t,e)).length;null!=e&&n<i;)e=e[o(t[n++])];return n&&n==i?e:void 0}},2199:function(e,t,n){var r=n(4528),o=n(8830);e.exports=function(e,t,n){var i=t(e);return o(e)?i:r(i,n(e))}},8077:function(e){e.exports=function(e,t){return null!=e&&t in Object(e)}},6131:function(e,t,n){var r=n(2523),o=n(5463),i=n(6959);e.exports=function(e,t,n){return t==t?i(e,t,n):r(e,o,n)}},270:function(e,t,n){var r=n(7068),o=n(346);e.exports=function e(t,n,i,a,s){return t===n||(null==t||null==n||!o(t)&&!o(n)?t!=t&&n!=n:r(t,n,i,a,e,s))}},7068:function(e,t,n){var r=n(7217),o=n(5911),i=n(1986),a=n(689),s=n(5861),u=n(8830),l=n(3656),c=n(7167),f="[object Arguments]",d="[object Array]",p="[object Object]",v=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,h,g,m){var x=u(e),b=u(t),_=x?d:s(e),y=b?d:s(t),j=(_=_==f?p:_)==p,O=(y=y==f?p:y)==p,w=_==y;if(w&&l(e)){if(!l(t))return!1;x=!0,j=!1}if(w&&!j)return m||(m=new r),x||c(e)?o(e,t,n,h,g,m):i(e,t,_,n,h,g,m);if(!(1&n)){var S=j&&v.call(e,"__wrapped__"),N=O&&v.call(t,"__wrapped__");if(S||N){var A=S?e.value():e,T=N?t.value():t;return m||(m=new r),g(A,T,n,h,m)}}return!!w&&(m||(m=new r),a(e,t,n,h,g,m))}},1799:function(e,t,n){var r=n(7217),o=n(270);e.exports=function(e,t,n,i){var a=n.length,s=a,u=!i;if(null==e)return!s;for(e=Object(e);a--;){var l=n[a];if(u&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++a<s;){var c=(l=n[a])[0],f=e[c],d=l[1];if(u&&l[2]){if(void 0===f&&!(c in e))return!1}else{var p=new r;if(i)var v=i(f,d,c,e,t,p);if(!(void 0===v?o(d,f,3,i,p):v))return!1}}return!0}},5463:function(e){e.exports=function(e){return e!=e}},5389:function(e,t,n){var r=n(3663),o=n(7978),i=n(3488),a=n(8830),s=n(583);e.exports=function(e){return"function"==typeof e?e:null==e?i:"object"==typeof e?a(e)?o(e[0],e[1]):r(e):s(e)}},5128:function(e,t,n){var r=n(909),o=n(4894);e.exports=function(e,t){var n=-1,i=o(e)?Array(e.length):[];return r(e,(function(e,r,o){i[++n]=t(e,r,o)})),i}},3663:function(e,t,n){var r=n(1799),o=n(776),i=n(7197);e.exports=function(e){var t=o(e);return 1==t.length&&t[0][2]?i(t[0][0],t[0][1]):function(n){return n===e||r(n,e,t)}}},7978:function(e,t,n){var r=n(270),o=n(8156),i=n(631),a=n(8586),s=n(756),u=n(7197),l=n(7797);e.exports=function(e,t){return a(e)&&s(t)?u(l(e),t):function(n){var a=o(n,e);return void 0===a&&a===t?i(n,e):r(t,a,3)}}},6155:function(e,t,n){var r=n(4932),o=n(7422),i=n(5389),a=n(5128),s=n(3937),u=n(7301),l=n(3714),c=n(3488),f=n(8830);e.exports=function(e,t,n){t=t.length?r(t,(function(e){return f(e)?function(t){return o(t,1===e.length?e[0]:e)}:e})):[c];var d=-1;t=r(t,u(i));var p=a(e,(function(e,n,o){return{criteria:r(t,(function(t){return t(e)})),index:++d,value:e}}));return s(p,(function(e,t){return l(e,t,n)}))}},7237:function(e){e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},7255:function(e,t,n){var r=n(7422);e.exports=function(e){return function(t){return r(t,e)}}},3937:function(e){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},8096:function(e){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},5765:function(e,t,n){var r=n(8859),o=n(5325),i=n(9905),a=n(9219),s=n(4517),u=n(4247);e.exports=function(e,t,n){var l=-1,c=o,f=e.length,d=!0,p=[],v=p;if(n)d=!1,c=i;else if(f>=200){var h=t?null:s(e);if(h)return u(h);d=!1,c=a,v=new r}else v=t?[]:p;e:for(;++l<f;){var g=e[l],m=t?t(g):g;if(g=n||0!==g?g:0,d&&m==m){for(var x=v.length;x--;)if(v[x]===m)continue e;t&&v.push(m),p.push(g)}else c(v,m,n)||(v!==p&&v.push(m),p.push(g))}return p}},9219:function(e){e.exports=function(e,t){return e.has(t)}},1769:function(e,t,n){var r=n(8830),o=n(8586),i=n(1802),a=n(3222);e.exports=function(e,t){return r(e)?e:o(e,t)?[e]:i(a(e))}},3730:function(e,t,n){var r=n(4394);e.exports=function(e,t){if(e!==t){var n=void 0!==e,o=null===e,i=e==e,a=r(e),s=void 0!==t,u=null===t,l=t==t,c=r(t);if(!u&&!c&&!a&&e>t||a&&s&&l&&!u&&!c||o&&s&&l||!n&&l||!i)return 1;if(!o&&!a&&!c&&e<t||c&&n&&i&&!o&&!a||u&&n&&i||!s&&i||!l)return-1}return 0}},3714:function(e,t,n){var r=n(3730);e.exports=function(e,t,n){for(var o=-1,i=e.criteria,a=t.criteria,s=i.length,u=n.length;++o<s;){var l=r(i[o],a[o]);if(l)return o>=u?l:l*("desc"==n[o]?-1:1)}return e.index-t.index}},8329:function(e,t,n){var r=n(4894);e.exports=function(e,t){return function(n,o){if(null==n)return n;if(!r(n))return e(n,o);for(var i=n.length,a=t?i:-1,s=Object(n);(t?a--:++a<i)&&!1!==o(s[a],a,s););return n}}},3221:function(e){e.exports=function(e){return function(t,n,r){for(var o=-1,i=Object(t),a=r(t),s=a.length;s--;){var u=a[e?s:++o];if(!1===n(i[u],u,i))break}return t}}},4517:function(e,t,n){var r=n(6545),o=n(3950),i=n(4247),a=r&&1/i(new r([,-0]))[1]==1/0?function(e){return new r(e)}:o;e.exports=a},5911:function(e,t,n){var r=n(8859),o=n(4248),i=n(9219);e.exports=function(e,t,n,a,s,u){var l=1&n,c=e.length,f=t.length;if(c!=f&&!(l&&f>c))return!1;var d=u.get(e),p=u.get(t);if(d&&p)return d==t&&p==e;var v=-1,h=!0,g=2&n?new r:void 0;for(u.set(e,t),u.set(t,e);++v<c;){var m=e[v],x=t[v];if(a)var b=l?a(x,m,v,t,e,u):a(m,x,v,e,t,u);if(void 0!==b){if(b)continue;h=!1;break}if(g){if(!o(t,(function(e,t){if(!i(g,t)&&(m===e||s(m,e,n,a,u)))return g.push(t)}))){h=!1;break}}else if(m!==x&&!s(m,x,n,a,u)){h=!1;break}}return u.delete(e),u.delete(t),h}},1986:function(e,t,n){var r=n(1873),o=n(7828),i=n(5288),a=n(5911),s=n(317),u=n(4247),l=r?r.prototype:void 0,c=l?l.valueOf:void 0;e.exports=function(e,t,n,r,l,f,d){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!f(new o(e),new o(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var p=s;case"[object Set]":var v=1&r;if(p||(p=u),e.size!=t.size&&!v)return!1;var h=d.get(e);if(h)return h==t;r|=2,d.set(e,t);var g=a(p(e),p(t),r,l,f,d);return d.delete(e),g;case"[object Symbol]":if(c)return c.call(e)==c.call(t)}return!1}},689:function(e,t,n){var r=n(2),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,i,a,s){var u=1&n,l=r(e),c=l.length;if(c!=r(t).length&&!u)return!1;for(var f=c;f--;){var d=l[f];if(!(u?d in t:o.call(t,d)))return!1}var p=s.get(e),v=s.get(t);if(p&&v)return p==t&&v==e;var h=!0;s.set(e,t),s.set(t,e);for(var g=u;++f<c;){var m=e[d=l[f]],x=t[d];if(i)var b=u?i(x,m,d,t,e,s):i(m,x,d,e,t,s);if(!(void 0===b?m===x||a(m,x,n,i,s):b)){h=!1;break}g||(g="constructor"==d)}if(h&&!g){var _=e.constructor,y=t.constructor;_==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof _&&_ instanceof _&&"function"==typeof y&&y instanceof y||(h=!1)}return s.delete(e),s.delete(t),h}},2:function(e,t,n){var r=n(2199),o=n(4664),i=n(5950);e.exports=function(e){return r(e,i,o)}},2651:function(e,t,n){var r=n(4218);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},776:function(e,t,n){var r=n(756),o=n(5950);e.exports=function(e){for(var t=o(e),n=t.length;n--;){var i=t[n],a=e[i];t[n]=[i,a,r(a)]}return t}},4664:function(e,t,n){var r=n(9770),o=n(3345),i=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,s=a?function(e){return null==e?[]:(e=Object(e),r(a(e),(function(t){return i.call(e,t)})))}:o;e.exports=s},9326:function(e,t,n){var r=n(1769),o=n(2428),i=n(8830),a=n(361),s=n(294),u=n(7797);e.exports=function(e,t,n){for(var l=-1,c=(t=r(t,e)).length,f=!1;++l<c;){var d=u(t[l]);if(!(f=null!=e&&n(e,d)))break;e=e[d]}return f||++l!=c?f:!!(c=null==e?0:e.length)&&s(c)&&a(d,c)&&(i(e)||o(e))}},2032:function(e,t,n){var r=n(1042);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},3862:function(e){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},6721:function(e,t,n){var r=n(1042),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(t,e)?t[e]:void 0}},2749:function(e,t,n){var r=n(1042),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},5749:function(e,t,n){var r=n(1042);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},361:function(e){var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,n){var r=typeof e;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&t.test(e))&&e>-1&&e%1==0&&e<n}},8586:function(e,t,n){var r=n(8830),o=n(4394),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(a.test(e)||!i.test(e)||null!=t&&e in Object(t))}},4218:function(e){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},756:function(e,t,n){var r=n(3805);e.exports=function(e){return e==e&&!r(e)}},3702:function(e){e.exports=function(){this.__data__=[],this.size=0}},80:function(e,t,n){var r=n(6025),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0)&&(n==t.length-1?t.pop():o.call(t,n,1),--this.size,!0)}},4739:function(e,t,n){var r=n(6025);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},8655:function(e,t,n){var r=n(6025);e.exports=function(e){return r(this.__data__,e)>-1}},1175:function(e,t,n){var r=n(6025);e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},3040:function(e,t,n){var r=n(1549),o=n(2460),i=n(8223);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},7670:function(e,t,n){var r=n(2651);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},289:function(e,t,n){var r=n(2651);e.exports=function(e){return r(this,e).get(e)}},4509:function(e,t,n){var r=n(2651);e.exports=function(e){return r(this,e).has(e)}},2949:function(e,t,n){var r=n(2651);e.exports=function(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},317:function(e){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}},7197:function(e){e.exports=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}}},2224:function(e,t,n){var r=n(104);e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},1042:function(e,t,n){var r=n(6110)(Object,"create");e.exports=r},1380:function(e){e.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},1459:function(e){e.exports=function(e){return this.__data__.has(e)}},4247:function(e){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}},1420:function(e,t,n){var r=n(2460);e.exports=function(){this.__data__=new r,this.size=0}},938:function(e){e.exports=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}},3605:function(e){e.exports=function(e){return this.__data__.get(e)}},9817:function(e){e.exports=function(e){return this.__data__.has(e)}},945:function(e,t,n){var r=n(2460),o=n(8223),i=n(3661);e.exports=function(e,t){var n=this.__data__;if(n instanceof r){var a=n.__data__;if(!o||a.length<199)return a.push([e,t]),this.size=++n.size,this;n=this.__data__=new i(a)}return n.set(e,t),this.size=n.size,this}},6959:function(e){e.exports=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}},1802:function(e,t,n){var r=n(2224),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,n,r,o){t.push(r?o.replace(i,"$1"):n||e)})),t}));e.exports=a},7797:function(e,t,n){var r=n(4394);e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},5288:function(e){e.exports=function(e,t){return e===t||e!=e&&t!=t}},8156:function(e,t,n){var r=n(7422);e.exports=function(e,t,n){var o=null==e?void 0:r(e,t);return void 0===o?n:o}},631:function(e,t,n){var r=n(8077),o=n(9326);e.exports=function(e,t){return null!=e&&o(e,t,r)}},3488:function(e){e.exports=function(e){return e}},2404:function(e,t,n){var r=n(270);e.exports=function(e,t){return r(e,t)}},5950:function(e,t,n){var r=n(695),o=n(8984),i=n(4894);e.exports=function(e){return i(e)?r(e):o(e)}},104:function(e,t,n){var r=n(3661);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(o.Cache||r),n}o.Cache=r,e.exports=o},3950:function(e){e.exports=function(){}},2877:function(e,t,n){var r=n(6155),o=n(8830);e.exports=function(e,t,n,i){return null==e?[]:(o(t)||(t=null==t?[]:[t]),o(n=i?void 0:n)||(n=null==n?[]:[n]),r(e,t,n))}},583:function(e,t,n){var r=n(7237),o=n(7255),i=n(8586),a=n(7797);e.exports=function(e){return i(e)?r(a(e)):o(e)}},3345:function(e){e.exports=function(){return[]}},14:function(e,t,n){var r=n(5389),o=n(5765);e.exports=function(e,t){return e&&e.length?o(e,r(t,2)):[]}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-82d98b16d25b8fb06233.js.map