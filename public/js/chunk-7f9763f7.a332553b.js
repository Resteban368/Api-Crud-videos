(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f9763f7"],{"385a":function(e,t,c){"use strict";c.r(t);var a=c("7a23");function r(e,t,c,r,s,o){const n=Object(a["resolveComponent"])("Account"),l=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[e.user.id?(Object(a["openBlock"])(),Object(a["createBlock"])(n,{key:0,profile:e.user},null,8,["profile"])):Object(a["createCommentVNode"])("",!0),e.user?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{profile:e.user,key:e.$route.path},null,8,["profile"])):Object(a["createCommentVNode"])("",!0)])}var s={class:"card mb-5 mb-xl-10"},o={class:"card-body pt-9 pb-0"},n={class:"d-flex flex-wrap flex-sm-nowrap mb-3"},l={class:"me-7 mb-4"},i={class:"symbol symbol-100px symbol-lg-160px symbol-fixed position-relative"},d=["src"],b=Object(a["createElementVNode"])("div",{class:"position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"},null,-1),m={class:"flex-grow-1"},p={class:"d-flex justify-content-between align-items-start flex-wrap mb-2"},f={class:"d-flex flex-column"},j={class:"d-flex align-items-center mb-2"},u={href:"javascript:void(0)",class:"text-gray-800 text-hover-primary fs-2 fw-bolder me-1"},v={href:"javascript:void(0)"},O={class:"svg-icon svg-icon-1 svg-icon-primary"},g={class:"d-flex flex-wrap fw-bold fs-6 mb-4 pe-2"},x={href:"javascript:void(0)",class:"d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"},N={class:"svg-icon svg-icon-4 me-1"},V={href:"javascript:void(0)",class:"d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"},y={class:"svg-icon svg-icon-4 me-1"},E={href:"javascript:void(0)",class:"d-flex align-items-center text-gray-400 text-hover-primary mb-2"},w={class:"svg-icon svg-icon-4 me-1"},h={class:"d-flex my-4"},k={class:"d-flex flex-wrap flex-stack"},D={class:"d-flex flex-column flex-grow-1 pe-8"},S={class:"d-flex flex-wrap"},C={class:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"},_={class:"d-flex align-items-center"},B=Object(a["createElementVNode"])("span",{class:"svg-icon svg-icon-success me-2"},null,-1),A={class:"fs-2 fw-bolder","data-kt-countup":"true"},T={class:"fw-bold fs-6 text-gray-400"},$={class:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"},M={class:"d-flex align-items-center"},R=Object(a["createElementVNode"])("span",{class:"svg-icon svg-icon-3 svg-icon-danger me-2"},null,-1),U={class:"fs-2 fw-bolder","data-kt-countup":"true"},P={class:"fw-bold fs-6 text-gray-400"},G={class:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"},I={class:"d-flex align-items-center"},J=Object(a["createElementVNode"])("span",{class:"svg-icon svg-icon-3 svg-icon-success me-2"},null,-1),q={class:"fs-2 fw-bolder","data-kt-countup":"true"},z={class:"fw-bold fs-6 text-gray-400"},K={class:"d-flex align-items-center w-200px w-sm-300px flex-column mt-3"},X={class:"d-flex justify-content-between w-100 mt-auto mb-2"},F={class:"fw-bold fs-6 text-gray-400"},H={class:"fw-bolder fs-6"},L={class:"h-5px mx-3 w-100 bg-light mb-3"},Q=["aria-valuenow"],W={class:"d-flex overflow-auto h-55px"},Y={class:"nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap"},Z={class:"nav-item"},ee={class:"nav-item"},te={key:0,class:"nav-item"};function ce(e,t,c,r,ce,ae){var re=Object(a["resolveComponent"])("inline-svg"),se=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("img",{src:e.profile.avatar||e.sita_path+"/media/avatars/300-1.jpg",alt:"image"},null,8,d),b])]),Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("div",f,[Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("a",u,Object(a["toDisplayString"])(e.profile.name),1),Object(a["createElementVNode"])("a",v,[Object(a["createElementVNode"])("span",O,[Object(a["createVNode"])(re,{src:"media/icons/duotone/Design/Verified.svg"})])])]),Object(a["createElementVNode"])("div",g,[Object(a["createElementVNode"])("a",x,[Object(a["createElementVNode"])("span",N,[Object(a["createVNode"])(re,{src:"media/icons/duotone/General/User.svg"})]),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(e.profile.born_date),1)]),Object(a["createElementVNode"])("a",V,[Object(a["createElementVNode"])("span",y,[Object(a["createVNode"])(re,{src:"media/icons/duotone/Devices/iPhone-X.svg"})]),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(e.profile.phone_number),1)]),Object(a["createElementVNode"])("a",E,[Object(a["createElementVNode"])("span",w,[Object(a["createVNode"])(re,{src:"media/icons/duotone/Communication/Mail-at.svg"})]),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(e.profile.email),1)])])]),Object(a["createElementVNode"])("div",h,[Object(a["createVNode"])(se,{to:{name:"profile-settings"},class:"btn btn-sm btn-primary me-3"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("settings")),1)]})),_:1})])]),Object(a["createElementVNode"])("div",k,[Object(a["createElementVNode"])("div",D,[Object(a["createElementVNode"])("div",S,[Object(a["createElementVNode"])("div",C,[Object(a["createElementVNode"])("div",_,[B,Object(a["createElementVNode"])("div",A,Object(a["toDisplayString"])(e.profile.offices?e.profile.offices.length:0),1)]),Object(a["createElementVNode"])("div",T,Object(a["toDisplayString"])(e.$t("offices")),1)]),Object(a["createElementVNode"])("div",$,[Object(a["createElementVNode"])("div",M,[R,Object(a["createElementVNode"])("div",U,Object(a["toDisplayString"])(e.profile.companies?e.profile.companies.length:0),1)]),Object(a["createElementVNode"])("div",P,Object(a["toDisplayString"])(e.$t("companies")),1)]),Object(a["createElementVNode"])("div",G,[Object(a["createElementVNode"])("div",I,[J,Object(a["createElementVNode"])("div",q,Object(a["toDisplayString"])(e.profile.companies_group?e.profile.companies_group.length:0),1)]),Object(a["createElementVNode"])("div",z,Object(a["toDisplayString"])(e.$t("companiesGroup")),1)])])]),Object(a["createElementVNode"])("div",K,[Object(a["createElementVNode"])("div",X,[Object(a["createElementVNode"])("span",F,Object(a["toDisplayString"])(e.$t("lpermisionsassigned")),1),Object(a["createElementVNode"])("span",H,Object(a["toDisplayString"])(e.permisionsAssigned)+"% ",1)]),Object(a["createElementVNode"])("div",L,[Object(a["createElementVNode"])("div",{class:"bg-success rounded h-5px",role:"progressbar",style:Object(a["normalizeStyle"])("width: "+e.permisionsAssigned+"%;"),"aria-valuenow":e.permisionsAssigned,"aria-valuemin":"0","aria-valuemax":"100"},null,12,Q)])])])])]),Object(a["createElementVNode"])("div",W,[Object(a["createElementVNode"])("ul",Y,[Object(a["createElementVNode"])("li",Z,[Object(a["createVNode"])(se,{to:e.profile.myself?"/profile/overview":"/user/"+e.profile.id+"/overview",class:"nav-link text-active-primary me-6","active-class":"active"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("accountOverview")),1)]})),_:1},8,["to"])]),Object(a["createElementVNode"])("li",ee,[Object(a["createVNode"])(se,{to:e.profile.myself?"/profile/settings":"/user/"+e.profile.id+"/settings",class:"nav-link text-active-primary me-6","active-class":"active"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("settings")),1)]})),_:1},8,["to"])]),e.profile.myself?(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",te,[Object(a["createVNode"])(se,{to:"/profile/builder",class:"nav-link text-active-primary me-6","active-class":"active"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("layoutBuilder")),1)]})),_:1})])):Object(a["createCommentVNode"])("",!0)])])])])}var ae=c("16d6"),re=Object(a["defineComponent"])({name:"KtAccount",props:{profile:{type:Object,required:!0}},setup:function(e){var t=Object(a["ref"])(0),c=Object(a["toRef"])(e.profile,"permissions_list"),r=function(){try{ae["a"].get("/api/permissions").then((function(e){var a=e.data,r=Math.round(c.value.length/a.length*100);t.value=r}))}catch(e){console.error(e)}};return Object(a["onMounted"])((function(){r()})),{permisionsAssigned:t,sita_path:document.location.origin}}}),se=c("6b0d"),oe=c.n(se);const ne=oe()(re,[["render",ce]]);var le=ne,ie=c("fd34"),de=c("5502"),be=c("6c02"),me=Object(a["defineComponent"])({name:"PageUser",components:{Account:le},setup(){const e=Object(de["b"])(),t=Object(be["c"])(),c=Object(a["ref"])({}),r=async()=>{try{t.params.user_id?(Object(ie["a"])("iprofile",["user"]),c.value=await ae["a"].get("/api/users/"+t.params.user_id).then(({data:e})=>e),c.value.myself=!1):(Object(ie["b"])("profile"),c.value=await ae["a"].get("/api/auth/me").then(({data:e})=>e),c.value.myself=!0)}catch(e){console.error(e)}};return Object(a["watch"])(()=>[t.params.user_id,e.getters.currentUser],async([e,t],[c,a])=>{e===c&&t===a||await r()}),Object(a["onMounted"])(()=>{r()}),{user:c}}});const pe=oe()(me,[["render",r]]);t["default"]=pe},fd34:function(e,t,c){"use strict";c.d(t,"a",(function(){return s})),c.d(t,"b",(function(){return o}));var a=c("0613"),r=c("38e0"),s=function(e,t,c){a["a"].dispatch(r["a"].SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:t,isSearch:c||!1})},o=function(e){a["a"].dispatch(r["a"].SET_BREADCRUMB_ACTION,{title:e})}}}]);
//# sourceMappingURL=chunk-7f9763f7.a332553b.js.map