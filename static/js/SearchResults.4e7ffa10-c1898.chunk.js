"use strict";(self.webpackChunkens_app=self.webpackChunkens_app||[]).push([[604],{4652:function(e,r,n){n.r(r),n.d(r,{default:function(){return k}});var a,s=n(33032),t=n(23430),i=n(17186),o=n(84322),u=n.n(o),c=n(50390),l=n(89743),d=n(68476),h=n(48114),m=n(19840),f=n(41874),p=n(3038),v=n(62559),x=function(e){var r=e.singleName,n=e.searchTerm,a=(0,l.a)(p.iG,{name:n}),s=a.data.favourites,t=a.loading;return(0,v.jsx)(f.Z,{loading:t,domain:r,isFavourite:r&&s&&s.filter((function(e){return e.name===r.name})).length>0})},g=function(e){var r=e.searchTerm,n=(0,l.a)(p.yD,{variables:{name:r}}),a=n.data,s=n.loading,t=n.error;if(s||!a)return null;if(t)return console.error(t),null;var i=a.singleName;return(0,v.jsx)(x,{singleName:i,searchTerm:r})},j=n(78855),N=n(83078),S=n(2479),T=n(34690),Z=(0,d.Ps)(a||(a=(0,i.Z)(["\n  query getResultsContainer {\n    isENSReady @client\n  }\n"]))),k=function(e){e.searchDomain;var r=e.match,n=(0,l.a)(Z).data.isENSReady,a=r.params.searchTerm,i=(0,S.k6)(),o=a.toLowerCase();i&&o!==a&&i.push("/search/".concat(o));var d=function(e,r){var n=(0,c.useState)([]),a=(0,t.Z)(n,2),i=a[0],o=a[1],l=(0,c.useState)(null),d=(0,t.Z)(l,2),h=d[0],m=d[1];return(0,c.useEffect)((function(){var n=function(){var r=(0,s.Z)(u().mark((function r(){var n,a,s;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o([]),a=1===e.split(".").length?e+".evmos":e,r.next=4,(0,j.ev)(a);case 4:s=r.sent,["unsupported","invalid","short"].includes(s)||(n=(0,j.Ol)(a),m(n)),document.title="Evmos Domains Search: ".concat(a),"unsupported"===s?o(["unsupported"]):"short"===s?o(["tooShort"]):"invalid"===s&&o(["domainMalformed"]);case 8:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r&&n()}),[e,r]),{errors:i,parsed:h}}(a,n),f=d.errors,p=d.parsed;return n?"tooShort"===f[0]?(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(N.Z,{errors:f,searchTerm:a})}):f.length>0?(0,v.jsx)(N.Z,{errors:f,searchTerm:a}):p?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(T.L,{children:(0,v.jsx)(T.Qx,{})}),(0,v.jsx)(m.H2,{children:(0,v.jsx)(h.c,{i18nKey:"singleName.search.title",children:"Names"})}),(0,v.jsx)(g,{searchTerm:p})]}):"":(0,v.jsx)("div",{children:"Loading"})}}}]);
//# sourceMappingURL=SearchResults.4e7ffa10-c1898.chunk.js.map