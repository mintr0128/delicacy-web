(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59078557"],{1180:function(e,t,c){},"189c":function(e,t,c){"use strict";c("c6c3")},3191:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c.d(t,"b",(function(){return o})),c.d(t,"c",(function(){return r}));var n=c("b775");function a(){return Object(n["a"])("/home/banner","get")}function o(){return Object(n["a"])("/home/goods","get")}function r(){return Object(n["a"])("/home/special","get")}},"3d36":function(e,t,c){"use strict";var n=c("7a23");const a=e=>(Object(n["pushScopeId"])("data-v-023f341d"),e=e(),Object(n["popScopeId"])(),e),o={class:"product-img"},r={alt:""},l={class:"product-title"},i={class:"ellipsis"},s={class:"product-desc"},d={class:"ellipsis-2"},p={class:"product-price"},u=a(()=>Object(n["createElementVNode"])("div",{class:"findsame"},[Object(n["createElementVNode"])("p",null,"找相似"),Object(n["createElementVNode"])("p",null,"发现更多宝贝")],-1));function b(e,t,c,a,b,m){const j=Object(n["resolveComponent"])("rprice"),O=Object(n["resolveDirective"])("lazy");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"r-mainproduct-components",onClick:t[0]||(t[0]=(...e)=>a.goUrl&&a.goUrl(...e))},[Object(n["createElementVNode"])("div",o,[Object(n["withDirectives"])(Object(n["createElementVNode"])("img",r,null,512),[[O,c.productData.picture]])]),Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("p",i,Object(n["toDisplayString"])(c.productData.name),1)]),Object(n["createElementVNode"])("div",s,[Object(n["createElementVNode"])("p",d,Object(n["toDisplayString"])(c.productData.desc),1)]),Object(n["createElementVNode"])("div",p,[Object(n["createVNode"])(j,{price:c.productData.price,bold:"700"},null,8,["price"])]),u])}c("14d9");var m=c("6605"),j={name:"rmainproduct",props:{productData:{type:Object,default:()=>({})}},setup(e){const t=Object(m["d"])(),c=()=>{t.push({path:"/goodsDetail/"+e.productData.id})};return{goUrl:c}}},O=(c("bf2a"),c("d959")),v=c.n(O);const g=v()(j,[["render",b],["__scopeId","data-v-023f341d"]]);t["a"]=g},"5f3f":function(e,t,c){"use strict";var n=c("7a23");const a=e=>(Object(n["pushScopeId"])("data-v-25882cd8"),e=e(),Object(n["popScopeId"])(),e),o=["src"],r={key:1,class:"recommend-product-list"},l={key:0,class:"r-swiper-item"},i=["src"],s={key:0,class:"next-previous"},d=a(()=>Object(n["createElementVNode"])("i",{class:"iconfont icon-previous-icon"},null,-1)),p=[d],u=a(()=>Object(n["createElementVNode"])("i",{class:"iconfont icon-next-icon"},null,-1)),b=[u],m={class:"r-circle-dot"},j=["onClick"];function O(e,t,c,a,d,u){const O=Object(n["resolveComponent"])("rmainproduct");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"r-swiper-components",style:Object(n["normalizeStyle"])(a.swiperStyle),onMouseenter:t[3]||(t[3]=(...e)=>a.stopSwiper&&a.stopSwiper(...e)),onMouseleave:t[4]||(t[4]=(...e)=>a.startSwiper&&a.startSwiper(...e))},[Object(n["createElementVNode"])("div",{class:"swiper-content",style:Object(n["normalizeStyle"])(a.swiperAnimatedStyle),onTransitionend:t[0]||(t[0]=(...e)=>a.endtransEnd&&a.endtransEnd(...e))},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.swiperData,(e,t)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"r-swiper-item",key:t},[e.imgUrl?(Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{key:0,src:e.imgUrl,alt:""},null,8,o)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e,(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:t,productData:e},null,8,["productData"]))),128))]))]))),128)),c.swiperData.length>1&&c.swiperData[0].imgUrl?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,[Object(n["createElementVNode"])("img",{src:c.swiperData[0].imgUrl,alt:""},null,8,i)])):Object(n["createCommentVNode"])("",!0)],36),c.showPageicon?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",s,[0!=a.swiperCurrent?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:0,class:"previous-icon icon",onClick:t[1]||(t[1]=e=>a.changeSwiper("previous"))},p)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",{class:"next-icon icon",onClick:t[2]||(t[2]=e=>a.changeSwiper("next"))},b)])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",m,[Object(n["createElementVNode"])("ul",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.swiperData,(e,t)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e.id,class:Object(n["normalizeClass"])(a.swiperCurrent===t?"active":""),onClick:e=>a.changeDot(t)},null,10,j))),128))])])],36)}var v=c("3d36"),g={name:"rswiper",props:{width:{type:Number,default:1052},height:{type:[Number,String],default:"426px"},swiperData:{type:Array,default(){return[]}},durationTime:{type:Number,default:2e3},isAnimated:{type:Boolean,default:!0},showPageicon:{type:Boolean,default:!0}},setup(e){const t=Object(n["ref"])(!1),c=Object(n["ref"])(0),a=Object(n["ref"])(null),o=Object(n["ref"])(!0),r=Object(n["computed"])(()=>({width:e.width+"px",height:e.height+"px"})),l=e=>{c.value=e},i=()=>{t.value=!1,s()},s=()=>{clearInterval(a.value),a.value=setInterval(()=>{const t=e.isAnimated?e.swiperData.length:e.swiperData.length-1;c.value===t?(c.value=0,o.value=!1):(c.value++,o.value=!0)},e.durationTime)},d=()=>{c.value===e.swiperData.length&&(c.value=0,o.value=!1)},p=()=>{t.value=!0,clearInterval(a.value)},u=Object(n["computed"])(()=>({transform:`translateX(-${c.value*e.width}px)`,width:(e.swiperData.length+(e.isAnimated?1:0))*e.width+"px","transition-duration":o.value&&e.isAnimated?".3s":""})),b=t=>{o.value=!0;const n=e.isAnimated?e.swiperData.length:e.swiperData.length-1;"next"===t?c.value<n&&c.value++:c.value>0&&c.value--};return Object(n["onMounted"])(()=>{s(),o.value=!1}),Object(n["onUnmounted"])(()=>{clearInterval(a.value)}),{swiperStyle:r,showNextPrevious:t,changeSwiper:b,swiperCurrent:c,swiperAnimatedStyle:u,changeDot:l,endtransEnd:d,stopSwiper:p,startSwiper:i}},components:{rmainproduct:v["a"]}},k=(c("189c"),c("d959")),w=c.n(k);const h=w()(g,[["render",O],["__scopeId","data-v-25882cd8"]]);t["a"]=h},6324:function(e,t,c){"use strict";c("1180")},8169:function(e,t,c){},a192:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a=c("f3f6"),o=c.n(a);const r=e=>(Object(n["pushScopeId"])("data-v-01030794"),e=e(),Object(n["popScopeId"])(),e),l={class:"category-page"},i={class:"container"},s={class:"category-swiper"},d={class:"category-product"},p={class:"all-category"},u=r(()=>Object(n["createElementVNode"])("div",{class:"category-all-title"},"全部分类",-1)),b={class:"category-all-product"},m=["onClick"],j=["src"],O={class:"catelist"},v={class:"catelist-title"},g=r(()=>Object(n["createElementVNode"])("p",null,"象米商城，您的贴心生活助手",-1)),k={class:"cate-list"},w={key:1,class:"empty"},h=r(()=>Object(n["createElementVNode"])("img",{src:o.a,alt:""},null,-1)),E=r(()=>Object(n["createElementVNode"])("p",null,"暂无数据",-1)),y=[h,E];function f(e,t,c,a,o,r){const h=Object(n["resolveComponent"])("rswiper"),E=Object(n["resolveComponent"])("rskeleton"),f=Object(n["resolveComponent"])("rmainproduct");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,[Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("div",s,[a.bannerList.length>0?(Object(n["openBlock"])(),Object(n["createBlock"])(h,{key:0,swiperData:a.bannerList,width:1240,height:"100%"},null,8,["swiperData"])):(Object(n["openBlock"])(),Object(n["createBlock"])(E,{key:1,bg:"#e4e4e4",width:"1240px",height:"400px"}))]),Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("div",p,[u,Object(n["createElementVNode"])("div",b,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(a.categoryData.children,(e,t)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"all-product-item",key:t,onClick:t=>a.gosubCategory(e)},[Object(n["createElementVNode"])("img",{src:e.picture,alt:""},null,8,j),Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(e.name),1)],8,m))),128))])]),Object(n["createElementVNode"])("div",O,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(a.catelist.children,(e,t)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:t,class:"catelist-item"},[Object(n["createElementVNode"])("div",v,[Object(n["createElementVNode"])("h4",null,Object(n["toDisplayString"])(e.name),1),g]),Object(n["createElementVNode"])("div",k,[e.goods.length>0?(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],{key:0},Object(n["renderList"])(e.goods,(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(f,{productData:e,key:t},null,8,["productData"]))),128)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",w,y))])]))),128))])])])])}c("14d9");var B=c("6605"),N=c("5502"),V=c("5f3f"),D=c("3d36"),S=c("3191"),C=c("c405"),x={name:"category",setup(){const e=Object(n["reactive"])([]),t=Object(B["c"])(),c=Object(B["d"])(),a=Object(N["b"])();Object(S["a"])().then(t=>{const{result:c}=t;e.push(...c)});const o=Object(n["computed"])(()=>{let e={};const c=a.state.category.cateList.find(e=>e.id===t.params.id);return c&&(e=c),e}),r=Object(n["ref"])([]),l=async()=>{const{result:e}=await Object(C["a"])(t.params.id);document.title=e.name,r.value=e};Object(n["watch"])(()=>t.params.id,e=>{e&&"/category/"+e===t.path&&l()},{immediate:!0});const i=function(e){const{id:t}=e;c.push({path:"/category/sub/"+t})};return{bannerList:e,categoryData:o,catelist:r,gosubCategory:i}},components:{rswiper:V["a"],rmainproduct:D["a"]}},I=(c("6324"),c("d959")),L=c.n(I);const A=L()(x,[["render",f],["__scopeId","data-v-01030794"]]);t["default"]=A},bf2a:function(e,t,c){"use strict";c("8169")},c6c3:function(e,t,c){},f3f6:function(e,t,c){e.exports=c.p+"img/empty.6eb3f647.png"}}]);
//# sourceMappingURL=chunk-59078557.ed8c6a6f.js.map