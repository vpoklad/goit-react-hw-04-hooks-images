(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{43:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(13),s=a.n(r),o=(a(43),a(3)),i=a(17),u=a(16),l=a.n(u),h=a(33),j=a(34),m=a(35),b=a(36),d=a.n(b),g=function(){function e(){Object(j.a)(this,e),this.api_key="23050146-8315646a187241c7ace27efa4",this._searchQuery="",this._page=1}return Object(m.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"page",get:function(){return this._page},set:function(e){return this._page+=e}},{key:"resetPage",value:function(){return this._page=1}},{key:"search",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(this.searchQuery,"&page=").concat(this._page,"&per_page=15&key=").concat(this.api_key,"\n"),e.prev=1,e.next=4,d.a.get(t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),p=a(1);function f(e){var t=e.item,a=e.handleImageClick,c=t.webformatURL,n=t.largeImageURL,r=t.tags;return Object(p.jsx)("li",{className:"ImageGalleryItem",children:Object(p.jsx)("img",{src:c,alt:r,onClick:function(){return a(n)},className:"ImageGalleryItem-image"})})}var O=document.querySelector("#modal-root");function x(e){var t=e.largeImageURL,a=e.onModalClose;Object(c.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}));var n=function(e){"Escape"===e.code&&a()};return Object(r.createPortal)(Object(p.jsx)("div",{className:"Overlay",onClick:function(e){e.target===e.currentTarget&&a()},children:Object(p.jsx)("div",{className:"Modal",children:Object(p.jsx)("img",{src:t,alt:""})})}),O)}var y=a(37),v=function(){return Object(p.jsx)(y.a,{viewBox:"0 0 640 390",children:Object(p.jsx)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"640",height:"390"})})},S=a(38),k=new g;function w(e){var t=e.searchQuery,a=Object(c.useState)([]),n=Object(o.a)(a,2),r=n[0],s=n[1],u=Object(c.useState)(null),l=Object(o.a)(u,2),h=l[0],j=l[1],m=Object(c.useState)("init"),b=Object(o.a)(m,2),d=b[0],g=b[1],O=Object(c.useState)(""),y=Object(o.a)(O,2),w=y[0],N=y[1],I=Object(c.useState)(""),_=Object(o.a)(I,2),C=_[0],E=_[1];Object(c.useEffect)((function(){""!==t&&(g("pending"),k.resetPage(),k.searchQuery=t,k.search().then((function(e){e.hits.length>0?(s(e.hits),j(e.total),g("success")):(E("Nothing found!"),g("error"))})))}),[t]);var Q=function(e){N(e),g("modal")};return"init"===d?Object(p.jsx)("h1",{className:"title",children:"Hello! Search something"}):"pending"===d?Object(p.jsx)("ul",{className:"ImageGallery",children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((function(e){return Object(p.jsx)(v,{},e)}))}):"success"===d?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("ul",{className:"ImageGallery",children:r.map((function(e){return Object(p.jsx)(f,{item:e,handleImageClick:Q},e.id)}))}),h>15&&Object(p.jsx)("button",{className:"Button",type:"button",id:"more",onClick:function(e){k.page=1,k.search().then((function(e){s((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.hits))})),g("success"),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){E(e),g("error")}))},children:"load more"})]}):"modal"===d?Object(p.jsx)(x,{largeImageURL:w,onModalClose:function(){g("success")}}):"error"===d?Object(p.jsx)(S.Notification,{type:"Error",title:"Error",text:C}):void 0}function N(e){var t=e.onSubmit,a=Object(c.useState)(""),n=Object(o.a)(a,2),r=n[0],s=n[1];return Object(p.jsx)("header",{className:"Searchbar",children:Object(p.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==r.trim()?(t(r),s("")):alert("Input something!")},children:[Object(p.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(p.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(p.jsx)("input",{className:"SearchForm-input",value:r,type:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){s(e.target.value)}})]})})}var I=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(N,{onSubmit:function(e){n(e)}}),Object(p.jsx)(w,{searchQuery:a})]})};a(97);s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.b07bda27.chunk.js.map