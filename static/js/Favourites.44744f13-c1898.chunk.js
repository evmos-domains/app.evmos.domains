"use strict";(self.webpackChunkens_app=self.webpackChunkens_app||[]).push([[291],{68298:function(e,t,n){n.r(t),n.d(t,{default:function(){return z},useResetState:function(){return T}});var r,a,i=n(18489),o=n(23430),s=n(17186),c=n(32765),l=n(50390),u=n(60048),d=n(92411),f=n(41874),h=n(86187),v=n(89743),m=n(68476),x=n(3038),p=n(86816),g=n(60606),y=n.n(g),j=n(19840),b=n(62559),w=(0,c.Z)("svg",{target:"elaobtv0"})(""),Z=function(){return(0,b.jsx)(w,{width:"42",height:"41",xmlns:"http://www.w3.org/2000/svg",children:(0,b.jsx)("path",{d:"M17.857 4.453C14.284.518 8.553.518 4.98 4.453l-.336.37C.452 9.44.452 16.984 4.642 21.598l16.16 17.8c.124.135.27.135.393-.001l16.16-17.799c4.194-4.617 4.193-12.156-.002-16.777l-.336-.37c-3.574-3.936-9.3-3.936-12.876 0l-1.373 1.512a2.372 2.372 0 0 1-3.538 0l-1.373-1.511z",stroke:"#E7E7E7",strokeWidth:"3",fill:"none",fillRule:"evenodd",opacity:".7"})})},k=n(24794),C=n(66995),D=n(63926),I=n(78855),E=n(34690),S=n(34242);var O=(0,c.Z)("div",{target:"eyj8ccp0"})({name:"1xknjez",styles:"grid-area:selectall;display:flex;justify-content:flex-end;padding-right:40px;margin:2em 0;"}),q=(0,c.Z)("div",{target:"eyj8ccp1"})({name:"1de598y",styles:"display:flex;padding:40px;flex-direction:column;justify-content:center;align-items:center;background:white;box-shadow:3px 4px 6px 0 rgba(229,236,241,0.3);border-radius:6px;margin-bottom:40px;h2{color:#adbbcd;font-weight:100;margin-bottom:0;padding:0;margin-top:20px;text-align:center;max-width:500px;}p{color:#2b2b2b;font-size:18px;font-weight:300;margin-top:20px;line-height:1.3em;text-align:center;max-width:400px;}"}),F=(0,c.Z)(j.H2,{target:"eyj8ccp2"})("margin-top:50px;margin-left:20px;",p.ZP.medium(r||(r=(0,s.Z)(["\n    margin-left: 0;\n  "]))),""),P=function(){var e=(0,u.$)().t;return(0,b.jsxs)(q,{children:[(0,b.jsx)(Z,{}),(0,b.jsx)("h2",{children:e("favourites.nofavouritesDomains.title")}),(0,b.jsx)("p",{children:e("favourites.nofavouritesDomains.text")})]})};function N(e){var t=y()(parseInt(1e3*e));return y()().subtract(90,"days").diff(t)>0}function R(e,t){return!e||t||0===parseInt(e,16)?"Open":"Owned"}var A=(0,m.Ps)(a||(a=(0,s.Z)(["\n  query resetStateQuery @client {\n    networkId\n  }\n"]))),T=function(e,t,n){var r=(0,v.a)(A).data.networkId;(0,l.useEffect)((function(){e(1),t({}),n(null)}),[r])};var _=(0,c.Z)("div",{target:"eyj8ccp3"})({name:"6w9fxc",styles:"padding-bottom:60px;"}),z=function(){var e,t=(0,u.$)().t;(0,l.useEffect)((function(){document.title="Evmos Domains Favourites"}),[]);var n=(0,l.useState)(1),r=(0,o.Z)(n,2),a=r[0],s=r[1],c=(0,l.useState)({}),m=(0,o.Z)(c,2),p=m[0],g=m[1],y=(0,l.useState)(!1),j=(0,o.Z)(y,2),w=j[0],q=j[1],A=(0,D.m)();T(s,g,q);var z=(0,v.a)(x.iG).data,B=(z=void 0===z?[]:z).favourites;(0,l.useEffect)((function(){document.title="Evmos Domains Favourites"}),[]);var L=(0,v.a)(x.PM).data,M=(L=void 0===L?[]:L).subDomainFavourites,Q=(0,v.a)(x.Cg).data.globalError,$=(0,I.lO)(B,"name");if(Q.invalidCharacter||!$)return(0,b.jsx)(S.cZ,{message:Q.invalidCharacter});var G=$&&(null===(e=$.map((function(e){try{return(0,h.getNamehash)(e.name)}catch(t){return console.error("Error getting favourite ids: ",t),null}})))||void 0===e?void 0:e.filter((function(e){return e}))),H=(0,v.a)(x.k_,{variables:{ids:G},fetchPolicy:"no-cache",nextFetchPolicy:"no-cache",context:{queryDeduplication:!1}}),J=H.data,W=(J=void 0===J?[]:J).registrations,Y=H.refetch;if(!$||0===$.length&&!W)return(0,b.jsx)(P,{});var K=[];if($.length>0&&(K=W&&W.length>0?$.map((function(e){try{var t=W.filter((function(t){return t.domain.id===(0,h.getNamehash)(e.name)}))[0];return{name:e.name,owner:t&&t.registrant.id,available:N(t&&t.expiryDate),expiryDate:t&&t.expiryDate,hasInvalidCharacter:e.hasInvalidCharacter}}catch(n){return{name:e.name,hasInvalidCharacter:!0,available:!1,expiryDate:!1}}})):$.map((function(e){return{name:e.name,hasInvalidCharacter:e.hasInvalidCharacter}}))),!(K&&K.length>0||M&&M.length>0))return(0,b.jsxs)(_,{"data-testid":"favourites-container",children:[(0,b.jsx)(F,{children:t("favourites.favouriteTitle")}),(0,b.jsxs)(P,{children:[(0,b.jsx)(Z,{}),(0,b.jsx)("h2",{children:t("favourites.nofavouritesDomains.title")}),(0,b.jsx)("p",{children:t("favourites.nofavouritesDomains.text")})]})]});var U=Object.entries(p).filter((function(e){var t=(0,o.Z)(e,2);t[0];return t[1]})).map((function(e){return(0,o.Z)(e,1)[0]})),V=K.map((function(e){return e.name})),X=K.filter((function(e){return e.expiryDate&&e.owner!==(null===A||void 0===A?void 0:A.toLowerCase())&&p[e.name]})).length>0,ee=K.filter((function(e){return e.expiryDate})).length>0;return(0,b.jsxs)(_,{"data-testid":"favourites-container",children:[(0,b.jsx)(E.L,{children:(0,b.jsx)(E.Qx,{})}),(0,b.jsx)(F,{children:t("favourites.favouriteTitle")}),ee&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(k.Z,{years:a,setYears:s,selectedNames:U,setCheckedBoxes:g,setSelectAll:q,allNames:V,refetch:Y,data:[],getterString:"registrations",checkedOtherOwner:X}),(0,b.jsx)(O,{children:(0,b.jsx)(C.Z,{testid:"checkbox-renewall",type:"double",checked:w,onClick:function(){w?g({}):function(){var e=K.reduce((function(e,t){return t.expiryDate&&(e[t.name]=!0),e}),{});g(e)}(),q((function(e){return!e}))}})})]}),K&&K.map((function(e){return(0,b.jsx)(f.Z,{domain:(0,i.Z)((0,i.Z)({},e),{},{state:R(e.owner,e.available),owner:e.owner}),isFavourite:!0,checkedBoxes:p,setCheckedBoxes:g,setSelectAll:q,hasInvalidCharacter:e.hasInvalidCharacter},e.name)})),M&&M.map((function(e){return(0,b.jsx)(d.A,{query:x.ik,variables:{name:e.name},children:function(t){var n=t.loading,r=t.error,a=t.data;return r?(0,b.jsx)("div",{children:(console.log(r),JSON.stringify(r))}):(0,b.jsx)(f.Z,{loading:n,domain:(0,i.Z)((0,i.Z)({},e),{},{state:R(null===a||void 0===a?void 0:a.getOwner,!1),owner:null===a||void 0===a?void 0:a.getOwner}),isSubDomain:!0,isFavourite:!0})}},e.name)}))]})}},92411:function(e,t,n){n.d(t,{A:function(){return o}});var r=n(94050),a=n(70188),i=n(89743);function o(e){var t=e.children,n=e.query,a=(0,r._T)(e,["children","query"]),o=(0,i.a)(n,a);return o?t(o):null}o.propTypes={client:a.object,children:a.func.isRequired,fetchPolicy:a.string,notifyOnNetworkStatusChange:a.bool,onCompleted:a.func,onError:a.func,pollInterval:a.number,query:a.object.isRequired,variables:a.object,ssr:a.bool,partialRefetch:a.bool,returnPartialData:a.bool}}}]);
//# sourceMappingURL=Favourites.44744f13-c1898.chunk.js.map