(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a5531"],{"09e7":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a={class:"d-flex flex-wrap flex-stack mb-6"},o={class:"fw-bolder my-2"},l={class:"fs-6 text-gray-400 fw-bold ms-1"},i={class:"d-flex my-2"},s={class:"row g-6 g-xl-9"},r={class:"row g-6 g-xl-9"},d={class:"col-xl-12"};function m(e,t,n,m,b,p){var u=Object(c["resolveComponent"])("CardCompany"),j=Object(c["resolveComponent"])("el-pagination"),O=Object(c["resolveComponent"])("CompaniesCU"),g=Object(c["resolveComponent"])("el-dialog");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("div",a,[Object(c["createElementVNode"])("h3",o,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$t("companies"))+" ",1),Object(c["createElementVNode"])("span",l,"("+Object(c["toDisplayString"])(e.companies.length)+")",1)]),Object(c["createElementVNode"])("div",i,[e.create_company?(Object(c["openBlock"])(),Object(c["createElementBlock"])("button",{key:0,class:"btn btn-primary",onClick:t[0]||(t[0]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.newCompany&&e.newCompany.apply(e,t)})},Object(c["toDisplayString"])(e.$t("btnNew")),1)):Object(c["createCommentVNode"])("",!0)])]),Object(c["createElementVNode"])("div",s,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.companiesList,(function(t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:t.id,class:"col-xl-4"},[Object(c["createVNode"])(u,{"widget-classes":"card-xl-stretch mb-xl-8",color:"primary",item:t,onUpdate:e.editCompany,onDelete:e.deleteCompany},null,8,["item","onUpdate","onDelete"])])})),128))]),Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",d,[e.companiesList.length>0?(Object(c["openBlock"])(),Object(c["createBlock"])(j,{key:0,currentPage:e.page,"onUpdate:currentPage":t[1]||(t[1]=function(t){return e.page=t}),"page-sizes":[Math.round(e.companies.length/6),Math.round(e.companies.length/3),Math.round(e.companies.length/2),Math.round(e.companies.length/1)],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.companies.length,"page-count":Math.round(e.companies.length/e.pageSize),onSizeChange:e.handleSizeChange,onCurrentChange:e.setPage},null,8,["currentPage","page-sizes","page-size","total","page-count","onSizeChange","onCurrentChange"])):Object(c["createCommentVNode"])("",!0)])]),""!==e.typeEvent?(Object(c["openBlock"])(),Object(c["createBlock"])(g,{key:0,modelValue:e.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.dialogVisible=t}),width:"50%",onClose:e.resetModal},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(O,{"type-event":e.typeEvent,item:e.element,onSuccess:e.successOperation},null,8,["type-event","item","onSuccess"])]})),_:1},8,["modelValue","onClose"])):Object(c["createCommentVNode"])("",!0)],64)}var b=n("fd34"),p=n("16d6"),u={class:"card-body"},j={class:"d-flex flex-stack"},O={class:"d-flex align-items-center"},g={class:"symbol symbol-60px me-5"},f=["src"],v={class:"d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3"},y={href:"javascript:void(0)",class:"text-dark fw-bolder text-hover-primary fs-5"},w={class:"text-muted fw-bold"},V={key:0,class:"ms-1 dropdown"},E={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary dropdown-toggle",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},C={class:"svg-icon svg-icon-2"},N={class:"dropdown-menu menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px","aria-labelledby":"dropdownMenuButton1"},x={key:0,class:"menu-item px-3"},h={key:1,class:"menu-item px-3"},k={class:"card-p pt-5 bg-white flex-grow-1"},B={class:"row g-0 mt-2"},S={class:"col mr-8"},D={class:"fs-7 text-muted fw-bold"},z={class:"fs-4 fw-bolder"},_={class:"row g-0 mt-4"},M={class:"col mr-4"},$={class:"fs-7 text-muted fw-bold"},L={class:"d-flex align-items-center"},U={class:"fs-4 fw-bolder"},P={class:"col"},I={class:"fs-7 text-muted fw-bold"},F={class:"fs-4 fw-bolder"},T={class:"row g-0 mt-4"},J={class:"col mr-4"},q={class:"fs-7 text-muted fw-bold"},Y={class:"fs-4 fw-bolder"},A={class:"col"},G={class:"fs-7 text-muted fw-bold"},H={class:"d-flex align-items-center"},K={class:"fs-4 fw-bolder"};function Q(e,t,n,a,o,l){var i=Object(c["resolveComponent"])("inline-svg");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])([e.widgetClasses,"card"])},[Object(c["createElementVNode"])("div",u,[Object(c["createElementVNode"])("div",j,[Object(c["createElementVNode"])("div",O,[Object(c["createElementVNode"])("div",g,[Object(c["createElementVNode"])("span",{class:Object(c["normalizeClass"])(["bg-"+e.color+"-light","symbol-label"])},[e.item.logo?(Object(c["openBlock"])(),Object(c["createElementBlock"])("img",{key:0,src:e.item.logo,class:"h-50 align-self-center",alt:""},null,8,f)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{key:1,class:Object(c["normalizeClass"])(["bg-light-primary text-info","symbol-label fs-5 fw-bolder"])},Object(c["toDisplayString"])(e.item.name.match(/\b(\w)/g).join("")),1))],2)]),Object(c["createElementVNode"])("div",v,[Object(c["createElementVNode"])("a",y,Object(c["toDisplayString"])(e.item.name),1),Object(c["createElementVNode"])("span",w,Object(c["toDisplayString"])(e.item.created_at),1)])]),e.update_companies||e.delete_companies?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",V,[Object(c["createElementVNode"])("button",E,[Object(c["createElementVNode"])("span",C,[Object(c["createVNode"])(i,{src:"media/icons/duotone/Layout/Layout-4-blocks-2.svg"})])]),Object(c["createElementVNode"])("ul",N,[e.update_companies?(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",x,[Object(c["createElementVNode"])("div",{class:"dropdown-item menu-content fs-6 text-info fw-bolder px-3 py-4",onClick:t[0]||(t[0]=function(t){return e.$emit("update",e.item)})},Object(c["toDisplayString"])(e.$t("btnEdit")),1)])):Object(c["createCommentVNode"])("",!0),e.delete_companies?(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",h,[Object(c["createElementVNode"])("div",{class:"dropdown-item menu-content fs-6 text-danger fw-bolder px-3 py-4",onClick:t[1]||(t[1]=function(t){return e.$emit("delete",e.item.id)})},Object(c["toDisplayString"])(e.$t("btnDelete")),1)])):Object(c["createCommentVNode"])("",!0)])])):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("div",k,[Object(c["createElementVNode"])("div",B,[Object(c["createElementVNode"])("div",S,[Object(c["createElementVNode"])("div",D,Object(c["toDisplayString"])(e.$t("iaddress")),1),Object(c["createElementVNode"])("div",z,Object(c["toDisplayString"])(e.item.address),1)])]),Object(c["createElementVNode"])("div",_,[Object(c["createElementVNode"])("div",M,[Object(c["createElementVNode"])("div",$,Object(c["toDisplayString"])(e.$t("icif")),1),Object(c["createElementVNode"])("div",L,[Object(c["createElementVNode"])("div",U,Object(c["toDisplayString"])(e.item.CIF),1)])]),Object(c["createElementVNode"])("div",P,[Object(c["createElementVNode"])("div",I,Object(c["toDisplayString"])(e.$t("iemail")),1),Object(c["createElementVNode"])("div",F,Object(c["toDisplayString"])(e.item.email),1)])]),Object(c["createElementVNode"])("div",T,[Object(c["createElementVNode"])("div",J,[Object(c["createElementVNode"])("div",q,Object(c["toDisplayString"])(e.$t("icompaniesgroup")),1),Object(c["createElementVNode"])("div",Y,Object(c["toDisplayString"])(e.item.company_group_id),1)]),Object(c["createElementVNode"])("div",A,[Object(c["createElementVNode"])("div",G,Object(c["toDisplayString"])(e.$t("ientityreference")),1),Object(c["createElementVNode"])("div",H,[Object(c["createElementVNode"])("div",K,Object(c["toDisplayString"])(e.item.entity_id),1)])])])])])],2)}var R=n("0238"),W=Object(c["defineComponent"])({name:"cardCompany",props:{widgetClasses:String,color:String,item:Object},setup:function(){return{update_companies:Object(c["ref"])(Object(R["a"])("companies: update")),delete_companies:Object(c["ref"])(Object(R["a"])("companies: delete"))}}}),X=n("6b0d"),Z=n.n(X);const ee=Z()(W,[["render",Q]]);var te=ee,ne=n("2d08"),ce=n("0241"),ae=n.n(ce),oe=n("5502"),le=Object(c["defineComponent"])({name:"ManagementCompanies",components:{CardCompany:te,CompaniesCU:ne["default"]},setup:function(){var e=Object(oe["b"])(),t=Object(c["ref"])([]),n=Object(c["ref"])(""),a=Object(c["ref"])(!1),o=Object(c["ref"])({}),l=Object(c["ref"])(1),i=Object(c["ref"])(3),s=function(){p["a"].get("/api/companies").then((function(e){var n=e.data;t.value=n}))},r=function(){n.value="create",a.value=!0},d=function(e){o.value=e,n.value="update",a.value=!0},m=function(e){ae.a.fire({text:"Esta seguro que desea eliminar esta empresa",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it",customClass:{confirmButton:"btn fw-bold btn-light-danger",cancelButton:"btn fw-bold btn-light-primary"}}).then((function(n){n.isConfirmed&&p["a"].delete("/api/companies/"+e).then((function(){var n=t.value.findIndex((function(t){return t.id===e}));t.value.splice(n,1)}))}))},u=function(e){var n=t.value.findIndex((function(t){return t.id===e.id}));n>=0?t.value[n]=e:t.value.push(e),a.value=!1},j=function(){n.value="",o.value={}},O=function(e){l.value=1,i.value=e},g=function(e){l.value=e},f=Object(c["computed"])((function(){if(""===e.getters.searchLocal)return t.value.slice(i.value*l.value-i.value,i.value*l.value)||[];var n=t.value.filter((function(t){return t.name.toLowerCase().includes(e.getters.searchLocal.toLowerCase())}));return n.slice(i.value*l.value-i.value,i.value*l.value)||[]}));return Object(c["onMounted"])((function(){Object(b["a"])("companiesIndex",["companies","companies"],!0),s()})),{newCompany:r,editCompany:d,deleteCompany:m,successOperation:u,resetModal:j,handleSizeChange:O,setPage:g,companies:t,companiesList:f,typeEvent:n,dialogVisible:a,element:o,page:l,pageSize:i,create_company:Object(c["ref"])(Object(R["a"])("companies: create"))}}});const ie=Z()(le,[["render",m]]);t["default"]=ie}}]);
//# sourceMappingURL=chunk-2d0a5531.d195500b.js.map