(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-679aa1c0"],{"19e3":function(e,t,c){"use strict";c.r(t);var n=c("7a23");const r=e=>(Object(n["pushScopeId"])("data-v-41405a30"),e=e(),Object(n["popScopeId"])(),e),o={class:"order-detail"},l={class:"order-detail-order-state"},a={class:"order-detail-top-info"},d={class:"order-detail-top-info-left"},s={class:"order-state"},b=r(()=>Object(n["createElementVNode"])("i",{class:"iconfont icon-jinbi-04"},null,-1)),i={key:0},O={key:1},j={key:2},m={key:3},u={key:4},p={key:5},E={class:"order-number-date"},N={class:"order-detail-top-info-right"},V={class:"order-progress"},f={class:"order-product"},v=r(()=>Object(n["createElementVNode"])("div",{class:"order-box-title"},"订单商品",-1)),k={class:"order-product-content"},y=r(()=>Object(n["createElementVNode"])("div",{class:"order-product-head"},[Object(n["createElementVNode"])("ul",null,[Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("p",null,"商品详情")]),Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("p",null,"单价")]),Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("p",null,"数量")]),Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("p",null,"小计")]),Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("p",null,"实付")])])],-1)),g={class:"order-product-body"},S={class:"product-info"},B={class:"product-info-img"},I=["src"],T={class:"product-info-info-text"},D={class:"product-price"},C={class:"product-count"},x={class:"product-subtotal"},w={class:"product-paytotal"},h={class:"takegoods infobox"},P=r(()=>Object(n["createElementVNode"])("div",{class:"order-title"},"收货信息",-1)),_={class:"info-content"},G=r(()=>Object(n["createElementVNode"])("span",null,[Object(n["createTextVNode"])("收"),Object(n["createElementVNode"])("i"),Object(n["createTextVNode"])("货"),Object(n["createElementVNode"])("i"),Object(n["createTextVNode"])("人: ")],-1)),z=r(()=>Object(n["createElementVNode"])("span",null,"联系方式: ",-1)),A=r(()=>Object(n["createElementVNode"])("span",null,"收货地址: ",-1)),F={class:"payType infobox"},J=r(()=>Object(n["createElementVNode"])("div",{class:"order-title"},"支付方式及送货时间",-1)),L={class:"info-content"},M=r(()=>Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("span",null,"支付方式: "),Object(n["createElementVNode"])("span",null,"支付宝")],-1)),q=r(()=>Object(n["createElementVNode"])("span",null,"送货时间: ",-1)),H={class:"orderinfo infobox"},K=r(()=>Object(n["createElementVNode"])("div",{class:"order-title"},"订单信息",-1)),Q={class:"info-content"},R=r(()=>Object(n["createElementVNode"])("span",null,"订单编号: ",-1)),U=r(()=>Object(n["createElementVNode"])("span",null,"下单时间: ",-1));function W(e,t,c,r,W,X){const Y=Object(n["resolveComponent"])("rbutton"),Z=Object(n["resolveComponent"])("rprogress");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",a,[Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("div",s,[b,1===r.orderInfo.orderState?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",i,"待付款")):Object(n["createCommentVNode"])("",!0),2===r.orderInfo.orderState?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",O,"待发货")):Object(n["createCommentVNode"])("",!0),3===r.orderInfo.orderState?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",j,"待收货")):Object(n["createCommentVNode"])("",!0),4===r.orderInfo.orderState?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",m,"待评价")):Object(n["createCommentVNode"])("",!0),5===r.orderInfo.orderState?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",u,"已完成")):Object(n["createCommentVNode"])("",!0),6===r.orderInfo.orderState?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",p,"已取消")):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("div",E,[Object(n["createElementVNode"])("p",null,"订单编号:"+Object(n["toDisplayString"])(r.orderInfo.id),1),Object(n["createElementVNode"])("p",null,"下单时间:"+Object(n["toDisplayString"])(r.orderInfo.createTime),1)])]),Object(n["createElementVNode"])("div",N,[Object(n["createVNode"])(Y,{size:"small",onClick:r.goPay},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("立即付款")]),_:1},8,["onClick"]),Object(n["createVNode"])(Y,{size:"small",type:"default"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("取消订单")]),_:1})])])]),Object(n["createElementVNode"])("div",V,[Object(n["createVNode"])(Z)]),Object(n["createElementVNode"])("div",f,[v,Object(n["createElementVNode"])("div",k,[y,Object(n["createElementVNode"])("div",g,[Object(n["createElementVNode"])("ul",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(r.orderInfo.skus,(e,t)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:t},[Object(n["createElementVNode"])("div",S,[Object(n["createElementVNode"])("div",B,[Object(n["createElementVNode"])("img",{src:e.image,alt:""},null,8,I)]),Object(n["createElementVNode"])("div",T,[Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(e.name),1),Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(e.attrsText),1)])]),Object(n["createElementVNode"])("div",D,[Object(n["createElementVNode"])("span",null,"¥"+Object(n["toDisplayString"])(e.realPay),1)]),Object(n["createElementVNode"])("div",C,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.quantity),1)]),Object(n["createElementVNode"])("div",x,[Object(n["createElementVNode"])("span",null,"¥"+Object(n["toDisplayString"])(e.realPay),1)]),Object(n["createElementVNode"])("div",w,[Object(n["createElementVNode"])("span",null,"¥"+Object(n["toDisplayString"])(e.realPay),1)])]))),128))])])])]),Object(n["createElementVNode"])("div",h,[P,Object(n["createElementVNode"])("div",_,[Object(n["createElementVNode"])("ul",null,[Object(n["createElementVNode"])("li",null,[G,Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(r.orderInfo.receiverContact),1)]),Object(n["createElementVNode"])("li",null,[z,Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(r.orderInfo.receiverMobile),1)]),Object(n["createElementVNode"])("li",null,[A,Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(r.orderInfo.receiverAddress),1)])])])]),Object(n["createElementVNode"])("div",F,[J,Object(n["createElementVNode"])("div",L,[Object(n["createElementVNode"])("ul",null,[M,Object(n["createElementVNode"])("li",null,[q,Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(r.orderInfo.createTime),1)])])])]),Object(n["createElementVNode"])("div",H,[K,Object(n["createElementVNode"])("div",Q,[Object(n["createElementVNode"])("ul",null,[Object(n["createElementVNode"])("li",null,[R,Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(r.orderInfo.id),1)]),Object(n["createElementVNode"])("li",null,[U,Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(r.orderInfo.createTime),1)])])])]),Object(n["createCommentVNode"])("",!0)])}const X=e=>(Object(n["pushScopeId"])("data-v-ad7e9d06"),e=e(),Object(n["popScopeId"])(),e),Y={class:"r-progress-component"},Z={class:"progress-num-step"},$=X(()=>Object(n["createElementVNode"])("p",{class:"progress-title"},"提交订单",-1)),ee=X(()=>Object(n["createElementVNode"])("p",{class:"progress-date"},"2023-1-18",-1));function te(e,t,c,r,o,l){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Y,[(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(5,e=>Object(n["createElementVNode"])("div",{class:"r-progress-item",key:e},[Object(n["createElementVNode"])("span",Z,Object(n["toDisplayString"])(e),1),$,ee])),64))])}var ce={name:"rprogress",props:{list:{type:Array,default:()=>[]}},setup(){}},ne=(c("dac8"),c("d959")),re=c.n(ne);const oe=re()(ce,[["render",te],["__scopeId","data-v-ad7e9d06"]]);var le=oe,ae=c("6605"),de=c("f8b7"),se={name:"orderdetail",setup(){const e=Object(n["ref"])({}),t=Object(ae["c"])(),c=(Object(ae["d"])(),async()=>{const c=t.params.id,{result:n}=await Object(de["d"])(c);e.value=n,console.log(n)});Object(n["onMounted"])(()=>{c()});const r=()=>{};return{orderInfo:e,goPay:r}},components:{rprogress:le}};c("5323");const be=re()(se,[["render",W],["__scopeId","data-v-41405a30"]]);t["default"]=be},5323:function(e,t,c){"use strict";c("943f")},"943f":function(e,t,c){},a424:function(e,t,c){},dac8:function(e,t,c){"use strict";c("a424")},f8b7:function(e,t,c){"use strict";c.d(t,"c",(function(){return r})),c.d(t,"a",(function(){return o})),c.d(t,"b",(function(){return l})),c.d(t,"d",(function(){return a})),c.d(t,"e",(function(){return d})),c.d(t,"f",(function(){return s}));var n=c("b775");function r(){return Object(n["a"])("/member/order/pre","GET")}function o(e){return Object(n["a"])("/member/address","POST",e)}function l(e){return Object(n["a"])("/member/order","POST",e)}function a(e){return Object(n["a"])("/member/order/"+e,"GET")}function d(e){return Object(n["a"])("/member/order/"+e,"GET")}function s(e){return Object(n["a"])("/member/order","GET",e)}}}]);
//# sourceMappingURL=chunk-679aa1c0.2e71818e.js.map