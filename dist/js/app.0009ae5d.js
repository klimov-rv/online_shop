(function(t){function e(e){for(var n,c,o=e[0],s=e[1],u=e[2],p=0,f=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},i=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=s;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},1565:function(t,e,r){},"2dae":function(t,e,r){},"546a":function(t,e,r){t.exports=r.p+"img/5.10ed5101.jpg"},"569e":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("v-main-wrapper")],1)},i=[],c=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-main-wrapper"},[r("v-header"),r("keep-alive",[r("router-view")],1)],1)},s=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-header"},[n("router-link",{attrs:{to:{name:"mainPage"}}},[n("img",{attrs:{src:r("cf05"),alt:""}})]),n("div",{staticClass:"search-field"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{type:"text"},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),n("button",{staticClass:"search_btn"},[n("i",{staticClass:"material-icons",on:{click:function(e){return t.search(t.searchValue)}}},[t._v("search")])]),n("button",{staticClass:"search_btn"},[n("i",{staticClass:"material-icons",on:{click:t.clearSearchField}},[t._v("cancel")])])])],1)},l=[],p=r("2f62");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={name:"v-header",props:{},data:function(){return{searchValue:""}},computed:d({},Object(p["c"])(["SEARCH_VALUE"])),methods:d({},Object(p["b"])(["GET_SEARCH_VALUE_TO_VUEX"]),{search:function(t){this.GET_SEARCH_VALUE_TO_VUEX(t),"/catalog"!==this.$route.path&&this.$router.push("/catalog")},clearSearchField:function(){this.searchValue="",this.GET_SEARCH_VALUE_TO_VUEX(),"/catalog"!==this.$route.path&&this.$router.push("/catalog")}})},m=_,v=(r("e6ad"),r("2877")),h=Object(v["a"])(m,u,l,!1,null,null,null),O=h.exports,b={name:"v-main-wrapper",components:{vHeader:O},props:{},data:function(){return{title:"Main wrapper"}},computed:{},methods:{},watch:{}},g=b,C=(r("669a"),Object(v["a"])(g,o,s,!1,null,null,null)),P=C.exports;function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var T={name:"app",components:{vMainWrapper:P},computed:y({},Object(p["c"])(["IS_MOBILE","IS_DESKTOP"])),methods:y({},Object(p["b"])(["SET_MOBILE","SET_DESKTOP"])),mounted:function(){var t=this;window.addEventListener("resize",(function(){window.innerWidth>767?(t.SET_DESKTOP(),console.log("Desktop",t.IS_DESKTOP)):(t.SET_MOBILE(),console.log("Mobile",t.IS_MOBILE))}))}},j=T,S=(r("034f"),Object(v["a"])(j,a,i,!1,null,null,null)),w=S.exports,D={GET_SEARCH_VALUE_TO_VUEX:function(t,e){var r=t.commit;r("SET_SEARCH_VALUE_TO_VUEX",e)},SET_MOBILE:function(t){var e=t.commit;e("SWITCH_MOBILE")},SET_DESKTOP:function(t){var e=t.commit;e("SWITCH_DESKTOP")},ADD_TO_CART:function(t,e){var r=t.commit;r("SET_CART",e)},INCREMENT_CART_ITEM:function(t,e){var r=t.commit;r("INCREMENT",e)},DECREMENT_CART_ITEM:function(t,e){var r=t.commit;r("DECREMENT",e)},DELETE_FROM_CART:function(t,e){var r=t.commit;r("REMOVE_FROM_CART",e)}},R=r("bc3a"),A=r.n(R),x={GET_PRODUCTS_FROM_API:function(t){var e=t.commit;return A()("http://localhost:3000/products",{method:"GET"}).then((function(t){return e("SET_PRODUCTS_TO_STATE",t.data),t})).catch((function(t){return console.log(t),t}))}},k=(r("d81d"),r("a434"),{SET_SEARCH_VALUE_TO_VUEX:function(t,e){t.searchValue=e},SWITCH_MOBILE:function(t){t.isMobile=!0,t.isDesktop=!1},SWITCH_DESKTOP:function(t){t.isMobile=!1,t.isDesktop=!0},SET_PRODUCTS_TO_STATE:function(t,e){t.products=e},SET_CART:function(t,e){var r=!1;t.cart.length?(t.cart.map((function(t){t.article===e.article&&(r=!0,t.quantity++)})),r||t.cart.push(e)):t.cart.push(e)},REMOVE_FROM_CART:function(t,e){t.cart.splice(e,1)},INCREMENT:function(t,e){t.cart[e].quantity++},DECREMENT:function(t,e){t.cart[e].quantity>1&&t.cart[e].quantity--}}),I={SEARCH_VALUE:function(t){return t.searchValue},IS_MOBILE:function(t){return t.isMobile},IS_DESKTOP:function(t){return t.isDesktop},PRODUCTS:function(t){return t.products},CART:function(t){return t.cart}};function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function V(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var U=V({},D,{},x);n["a"].use(p["a"]);var L=new p["a"].Store({state:{searchValue:"",isMobile:!1,isDesktop:!0,products:[],cart:[]},mutations:k,actions:U,getters:I}),B=L,$=r("8c4f"),F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-catalog"},[r("v-notification",{attrs:{messages:t.messages}}),r("router-link",{attrs:{to:{name:"cart",params:{cart_data:t.CART}}}},[r("div",{staticClass:"v-catalog__link_to_cart"},[t._v("Cart: "+t._s(t.CART.length))])]),r("h1",[t._v("Catalog")]),r("div",{staticClass:"filters"},[r("v-select",{attrs:{selected:t.selected,options:t.categories},on:{select:t.sortByCategories}}),r("div",{staticClass:"range-slider"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.minPrice,expression:"minPrice",modifiers:{number:!0}}],attrs:{type:"range",min:"0",max:"1000",step:"10"},domProps:{value:t.minPrice},on:{change:t.setRangeSlider,__r:function(e){t.minPrice=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.maxPrice,expression:"maxPrice",modifiers:{number:!0}}],attrs:{type:"range",min:"0",max:"10000",step:"10"},domProps:{value:t.maxPrice},on:{change:t.setRangeSlider,__r:function(e){t.maxPrice=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"range-values"},[r("p",[t._v("Min: "+t._s(t.minPrice))]),r("p",[t._v("Max: "+t._s(t.maxPrice))])])],1),r("div",{staticClass:"v-catalog__list"},t._l(t.filteredProducts,(function(e){return r("v-catalog-item",{key:e.article,attrs:{product_data:e},on:{addToCart:t.addToCart,productClick:t.productClick}})})),1)],1)},N=[],H=(r("caad"),r("b0c0"),r("2532"),r("2909")),q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-catalog-item"},[t.isInfoPopupVisible?n("v-popup",{attrs:{rightBtnTitle:"Add to cart",popupTitle:t.product_data.name},on:{closePopup:t.closeInfoPopup,rightBtnAction:t.addToCart}},[n("img",{staticClass:"v-catalog-item__image",attrs:{src:r("7584")("./"+t.product_data.image),alt:"img"}}),n("div",[n("p",{staticClass:"v-catalog-item__name"},[t._v(t._s(t.product_data.name))]),n("p",{staticClass:"v-catalog-item__price"},[t._v("Price: "+t._s(t._f("formattedPrice")(t._f("toFix")(t.product_data.price)))+" Р.")]),n("p",{staticClass:"v-catalog-item__price"},[t._v(t._s(t.product_data.category))])])]):t._e(),n("img",{staticClass:"v-catalog-item__image",attrs:{src:r("7584")("./"+t.product_data.image),alt:"img"},on:{click:t.productClick}}),n("p",{staticClass:"v-catalog-item__name"},[t._v(t._s(t.product_data.name))]),n("p",{staticClass:"v-catalog-item__price"},[t._v("Price: "+t._s(t._f("formattedPrice")(t._f("toFix")(t.product_data.price))))]),n("button",{staticClass:"v-catalog-item__show-info",on:{click:t.showPopupInfo}},[t._v(" Show info ")]),n("br"),n("button",{staticClass:"v-catalog-item__add_to_cart_btn btn",on:{click:t.addToCart}},[t._v("Add to cart ")])],1)},G=[],K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"popup_wrapper",staticClass:"popup_wrapper"},[r("div",{staticClass:"v-popup"},[r("div",{staticClass:"v-popup__header"},[r("span",[t._v(t._s(t.popupTitle))]),r("span",[r("i",{staticClass:"material-icons",on:{click:t.closePopup}},[t._v(" close ")])])]),r("div",{staticClass:"v-popup__content"},[t._t("default")],2),r("div",{staticClass:"v-popup__footer"},[r("button",{staticClass:"close_modal",on:{click:t.closePopup}},[t._v("Close")]),r("button",{staticClass:"submit_btn",on:{click:t.rightBtnAction}},[t._v(" "+t._s(t.rightBtnTitle)+" ")])])])])},W=[],X={name:"v-popup",props:{popupTitle:{type:String,default:"Popup name"},rightBtnTitle:{type:String,default:"Ok"}},data:function(){return{}},methods:{rightBtnAction:function(){this.$emit("rightBtnAction")},closePopup:function(){this.$emit("closePopup")}},mounted:function(){var t=this;document.addEventListener("click",(function(e){e.target===t.$refs["popup_wrapper"]&&t.closePopup()}))}},J=X,z=(r("7823"),Object(v["a"])(J,K,W,!1,null,null,null)),Q=z.exports;r("b680"),r("acd8");function Y(t){return t=parseFloat(t),t.toFixed(2)+" ₽"}r("a15b"),r("d3b7"),r("ac1f"),r("25f0"),r("5319"),r("1276");function Z(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),e.join(".")}var tt={name:"v-catalog-item",components:{vPopup:Q},props:{product_data:{type:Object,default:function(){return{}}}},data:function(){return{isInfoPopupVisible:!1}},filters:{toFix:Y,formattedPrice:Z},computed:{},methods:{productClick:function(){this.$emit("productClick",this.product_data.article)},showPopupInfo:function(){this.isInfoPopupVisible=!0},closeInfoPopup:function(){this.isInfoPopupVisible=!1},addToCart:function(){this.$emit("addToCart",this.product_data)}},mounted:function(){this.$set(this.product_data,"quantity",1)}},et=tt,rt=(r("76ac"),Object(v["a"])(et,q,G,!1,null,null,null)),nt=rt.exports,at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-select"},[r("p",{staticClass:"title",on:{click:function(e){t.areOptionsVisible=!t.areOptionsVisible}}},[t._v(t._s(t.selected))]),t.areOptionsVisible||t.isExpanded?r("div",{staticClass:"options"},t._l(t.options,(function(e){return r("p",{key:e.value,on:{click:function(r){return t.selectOption(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0):t._e()])},it=[],ct={name:"v-select",props:{options:{type:Array,default:function(){return[]}},selected:{type:String,default:""},isExpanded:{type:Boolean,default:!1}},data:function(){return{areOptionsVisible:!1}},methods:{selectOption:function(t){this.$emit("select",t),this.areOptionsVisible=!1},hideSelect:function(){this.areOptionsVisible=!1}},mounted:function(){document.addEventListener("click",this.hideSelect.bind(this),!0)},beforeDestroy:function(){document.removeEventListener("click",this.hideSelect)}},ot=ct,st=(r("6303"),Object(v["a"])(ot,at,it,!1,null,null,null)),ut=st.exports,lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-notification"},[r("transition-group",{staticClass:"messages_list",attrs:{name:"v-transition-animate"}},t._l(t.messages,(function(e){return r("div",{key:e.id,staticClass:"v-notification__content",class:e.icon},[r("div",{staticClass:"content__text"},[r("span",[t._v(t._s(e.name))]),r("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))])]),r("div",{staticClass:"content_buttons"},[t.rightButton.length?r("button",[t._v(t._s(t.rightButton))]):t._e(),t.leftButton.length?r("button",[t._v(t._s(t.leftButton))]):t._e()])])})),0)],1)},pt=[],ft=(r("a9e3"),{name:"v-notification",props:{messages:{type:Array,default:function(){return[]}},rightButton:{type:String,default:""},leftButton:{type:String,default:""},timeout:{type:Number,default:3e3}},data:function(){return{}},methods:{hideNotification:function(){var t=this;this.messages.length&&setTimeout((function(){t.messages.splice(t.messages.length-1,1)}),t.timeout)}},watch:{messages:function(){this.hideNotification()}},mounted:function(){this.hideNotification()}}),dt=ft,_t=(r("5788"),Object(v["a"])(dt,lt,pt,!1,null,null,null)),mt=_t.exports;function vt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ht(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?vt(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):vt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Ot={name:"v-catalog",components:{vCatalogItem:nt,vSelect:ut,vNotification:mt},props:{},data:function(){return{categories:[{name:"Все",value:"ALL"},{name:"Мужские",value:"м"},{name:"Женские",value:"ж"}],selected:"Все",sortedProducts:[],minPrice:0,maxPrice:1e4,messages:[]}},computed:ht({},Object(p["c"])(["PRODUCTS","CART","IS_MOBILE","IS_DESKTOP","SEARCH_VALUE"]),{filteredProducts:function(){return this.sortedProducts.length?this.sortedProducts:this.PRODUCTS}}),methods:ht({},Object(p["b"])(["GET_PRODUCTS_FROM_API","ADD_TO_CART"]),{productClick:function(t){this.$router.push({name:"product",query:{product:t}})},setRangeSlider:function(){if(this.minPrice>this.maxPrice){var t=this.maxPrice;this.maxPrice=this.minPrice,this.minPrice=t}this.sortByCategories()},sortByCategories:function(t){var e=this;this.sortedProducts=Object(H["a"])(this.PRODUCTS),this.sortedProducts=this.sortedProducts.filter((function(t){return t.price>=e.minPrice&&t.price<=e.maxPrice})),t&&(this.sortedProducts=this.sortedProducts.filter((function(r){return e.selected,t.name,r.category===t.name})))},addToCart:function(t){var e=this;this.ADD_TO_CART(t).then((function(){var t=Date.now().toLocaleString();e.messages.unshift({name:"Товар добавлен в корзину",icon:"check_circle",id:t})}))},sortProductsBySearchValue:function(t){this.sortedProducts=Object(H["a"])(this.PRODUCTS),this.sortedProducts=t?this.sortedProducts.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):this.PRODUCTS}}),watch:{SEARCH_VALUE:function(){this.sortProductsBySearchValue(this.SEARCH_VALUE)}},mounted:function(){var t=this;this.GET_PRODUCTS_FROM_API().then((function(e){e.data&&(t.sortByCategories(),t.sortProductsBySearchValue(t.SEARCH_VALUE))}))}},bt=Ot,gt=(r("9802"),Object(v["a"])(bt,F,N,!1,null,null,null)),Ct=gt.exports,Pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-cart"},[r("router-link",{attrs:{to:{name:"catalog"}}},[r("div",{staticClass:"v-catalog__link_to_cart"},[t._v("Back to Catalog")])]),r("h1",[t._v("Cart")]),t.cart_data.length?t._e():r("p",[t._v("There are no products in cart...")]),t._l(t.cart_data,(function(e,n){return r("v-cart-item",{key:e.article,attrs:{cart_item_data:e},on:{deleteFromCart:function(e){return t.deleteFromCart(n)},increment:function(e){return t.increment(n)},decrement:function(e){return t.decrement(n)}}})})),r("div",{staticClass:"v-cart__total"},[r("p",{staticClass:"total__name"},[t._v("Total:")]),r("p",[t._v(t._s(t._f("formattedPrice")(t._f("toFix")(t.cartTotalCost))))])])],2)},Et=[],yt=(r("e01a"),r("d28b"),r("3ca3"),r("ddb0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-cart-item"},[n("img",{staticClass:"v-cart-item__image",attrs:{src:r("7584")("./"+t.cart_item_data.image),alt:""}}),n("div",{staticClass:"v-cart-item__info"},[n("p",[t._v(t._s(t.cart_item_data.name))]),n("p",[t._v(t._s(t._f("formattedPrice")(t._f("toFix")(t.cart_item_data.price))))]),n("p",[t._v(t._s(t.cart_item_data.article))])]),n("div",{staticClass:"v-cart-item__quantity"},[n("p",[t._v("Qty:")]),n("span",{staticClass:"quantity__tools"},[n("span",{staticClass:"quantity__btn",on:{click:t.decrementItem}},[t._v("-")]),t._v(" "+t._s(t.cart_item_data.quantity)+" "),n("span",{staticClass:"quantity__btn",on:{click:t.incrementItem}},[t._v("+")])])]),n("button",{on:{click:t.deleteFromCart}},[t._v("Delete")])])}),Tt=[],jt={name:"v-cart-item",props:{cart_item_data:{type:Object,default:function(){return{}}}},data:function(){return{}},filters:{toFix:Y,formattedPrice:Z},computed:{},methods:{decrementItem:function(){this.$emit("decrement")},incrementItem:function(){this.$emit("increment")},deleteFromCart:function(){this.$emit("deleteFromCart")}}},St=jt,wt=(r("6c9b"),Object(v["a"])(St,yt,Tt,!1,null,null,null)),Dt=wt.exports;function Rt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function At(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Rt(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Rt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var xt={name:"v-cart",components:{vCartItem:Dt},props:{cart_data:{type:Array,default:function(){return[]}}},data:function(){return{}},filters:{formattedPrice:Z,toFix:Y},computed:{cartTotalCost:function(){var t=[];if(this.cart_data.length){var e=!0,r=!1,n=void 0;try{for(var a,i=this.cart_data[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){var c=a.value;t.push(c.price*c.quantity)}}catch(o){r=!0,n=o}finally{try{e||null==i.return||i.return()}finally{if(r)throw n}}return t=t.reduce((function(t,e){return t+e})),t}return 0}},methods:At({},Object(p["b"])(["DELETE_FROM_CART","INCREMENT_CART_ITEM","DECREMENT_CART_ITEM"]),{increment:function(t){this.INCREMENT_CART_ITEM(t)},decrement:function(t){this.DECREMENT_CART_ITEM(t)},deleteFromCart:function(t){this.DELETE_FROM_CART(t)}})},kt=xt,It=(r("dbe8"),Object(v["a"])(kt,Pt,Et,!1,null,null,null)),Mt=It.exports,Vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-main-page"},[r("h1",[t._v("Online-shop")]),r("p",[r("router-link",{attrs:{to:{name:"catalog"}}},[t._v(" to Catalog ")])],1)])},Ut=[],Lt={name:"v-main-page",props:{},data:function(){return{}},computed:{}},Bt=Lt,$t=Object(v["a"])(Bt,Vt,Ut,!1,null,"28c06802",null),Ft=$t.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-product-page"},[t.product.image?n("img",{staticClass:"v-catalog-item__image",attrs:{src:r("7584")("./"+t.product.image),alt:"img"}}):t._e(),n("p",[t._v("Product name: "+t._s(t.product.name))]),n("p",[t._v("Article: "+t._s(t.product.article))]),n("p",[t._v("Price: "+t._s(t._f("formattedPrice")(t._f("toFix")(t.product.price))))]),n("button",{staticClass:"v-catalog-item__add_to_cart_btn btn",on:{click:t.addToCart}},[t._v("Add to cart ")])])},Ht=[];r("7db0");function qt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Gt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?qt(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):qt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Kt={name:"v-product-page",props:{},data:function(){return{}},filters:{formattedPrice:Z,toFix:Y},computed:Gt({},Object(p["c"])(["PRODUCTS"]),{product:function(){var t={},e=this;return this.PRODUCTS.find((function(r){r.article===e.$route.query.product&&(t=r)})),t}}),methods:Gt({},Object(p["b"])(["GET_PRODUCTS_FROM_API","ADD_TO_CART"]),{addToCart:function(){this.ADD_TO_CART(this.product)}}),mounted:function(){this.PRODUCTS.length||this.GET_PRODUCTS_FROM_API()}},Wt=Kt,Xt=Object(v["a"])(Wt,Nt,Ht,!1,null,"63e249dc",null),Jt=Xt.exports;n["a"].use($["a"]);var zt=new $["a"]({routes:[{path:"/",name:"mainPage",component:Ft},{path:"/catalog",name:"catalog",component:Ct},{path:"/product",name:"product",component:Jt},{path:"/cart",name:"cart",component:Mt,props:!0}]}),Qt=zt;r("569e"),r("d1e78");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(w)},store:B,router:Qt}).$mount("#app")},5788:function(t,e,r){"use strict";var n=r("727c"),a=r.n(n);a.a},"593c":function(t,e,r){t.exports=r.p+"img/2.c0e693f1.jpg"},6303:function(t,e,r){"use strict";var n=r("63af"),a=r.n(n);a.a},"63af":function(t,e,r){},"669a":function(t,e,r){"use strict";var n=r("eeeb"),a=r.n(n);a.a},6800:function(t,e,r){t.exports=r.p+"img/3.50e4c188.jpg"},"6b20":function(t,e,r){},"6c9b":function(t,e,r){"use strict";var n=r("6b20"),a=r.n(n);a.a},"727c":function(t,e,r){},7584:function(t,e,r){var n={"./1.jpg":"98a8","./2.jpg":"593c","./3.jpg":"6800","./4.jpg":"ffd7","./5.jpg":"546a","./6.jpeg":"f5db"};function a(t){var e=i(t);return r(e)}function i(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="7584"},"76ac":function(t,e,r){"use strict";var n=r("c41f"),a=r.n(n);a.a},7782:function(t,e,r){},7823:function(t,e,r){"use strict";var n=r("1565"),a=r.n(n);a.a},"7c3d":function(t,e,r){},"85ec":function(t,e,r){},9802:function(t,e,r){"use strict";var n=r("2dae"),a=r.n(n);a.a},"98a8":function(t,e,r){t.exports=r.p+"img/1.dc055ef9.jpg"},c41f:function(t,e,r){},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},dbe8:function(t,e,r){"use strict";var n=r("7c3d"),a=r.n(n);a.a},e6ad:function(t,e,r){"use strict";var n=r("7782"),a=r.n(n);a.a},eeeb:function(t,e,r){},f5db:function(t,e,r){t.exports=r.p+"img/6.da5781a0.jpeg"},ffd7:function(t,e,r){t.exports=r.p+"img/4.51942487.jpg"}});
//# sourceMappingURL=app.0009ae5d.js.map