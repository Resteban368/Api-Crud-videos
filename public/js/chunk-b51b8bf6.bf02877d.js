(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b51b8bf6"],{"17da":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={class:"mx-xl-12"},a={class:"d-sm-flex flex-row justify-content-between mb-6"},c={class:"mb-5"},l={class:"text-darker mb-0"},s={class:"text-gray-500 fs-5 fw-bold"},i={class:"d-flex align-items-center"},u={class:"me-auto p-1"},d=["placeholder"],b={class:"row",style:{display:"none"}},m={class:"col-md-6"},p={class:"col-md-6"};function O(e,t,n,O,v,j){var f=Object(o["resolveComponent"])("el-option"),g=Object(o["resolveComponent"])("el-select"),h=Object(o["resolveComponent"])("table-basic"),E=Object(o["resolveComponent"])("UsersgroupList"),V=Object(o["resolveComponent"])("PermissionsList"),k=Object(o["resolveComponent"])("UsersGroupCU"),y=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("div",a,[Object(o["createElementVNode"])("div",c,[Object(o["createElementVNode"])("h1",l,Object(o["toDisplayString"])(e.$t("permissions")),1),Object(o["createElementVNode"])("span",s,Object(o["toDisplayString"])(e.dataObject.length)+" "+Object(o["toDisplayString"])(e.$t("ielements")),1)]),Object(o["createElementVNode"])("div",i,[Object(o["createVNode"])(g,{modelValue:e.role_selected,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.role_selected=t}),name:"port",class:"form-select-custom w-sm-300px",clearable:"",placeholder:""+e.$t("iselect"),filterable:"",style:{height:"48px"},remote:"","reserve-keyword":"",onChange:t[1]||(t[1]=function(t){return e.checkPermissions(e.role_selected)})},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.roles,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(f,{key:e.id,label:e.name,value:e.id},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.id+" "+e.name),1)]})),_:2},1032,["label","value"])})),128))]})),_:1},8,["modelValue","placeholder"]),Object(o["createElementVNode"])("div",u,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.search=t}),type:"text",class:"form-control form-control-search w-sm-300px",placeholder:""+e.$t("isearch"),onKeyup:t[3]||(t[3]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.onSearch&&e.onSearch.apply(e,t)})},null,40,d),[[o["vModelText"],e.search]])]),Object(o["createElementVNode"])("button",{class:"btn btn-custom btn-app-custom","data-bs-toggle":"modal","data-bs-target":"#kt_modal_1",onClick:t[4]||(t[4]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.createElement&&e.createElement.apply(e,t)})},Object(o["toDisplayString"])(e.$t("btnNew")),1)])]),Object(o["createVNode"])(h,{class:"mt-5",loading:e.isLoading,headers:e.header,data:e.dataObject,buttons:e.tableButtons,total:e.dataObject.length,onEventEmitButton:e.actionsButton},null,8,["loading","headers","data","buttons","total","onEventEmitButton"])]),Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("div",m,[Object(o["createVNode"])(E,{items:e.roles,onAction:e.onEvent},null,8,["items","onAction"])]),Object(o["createElementVNode"])("div",p,[Object(o["createVNode"])(V,{items:e.permissions},null,8,["items"])])]),""!==e.dialog.typeEvent&&"delete"!==e.dialog.typeEvent?(Object(o["openBlock"])(),Object(o["createBlock"])(y,{key:0,modelValue:e.dialog.visible,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.dialog.visible=t}),width:"50%",onClose:e.resetModal},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(k,{"type-event":e.dialog.typeEvent,item:e.element,onSuccess:e.successOperation},null,8,["type-event","item","onSuccess"])]})),_:1},8,["modelValue","onClose"])):Object(o["createCommentVNode"])("",!0)],64)}var v=n("9ab4"),j=n("fd34"),f=n("16d6");const g={class:"card card-xxl-stretch mb-xl-3"},h={class:"card-header border-0"},E={class:"card-title fw-bolder text-dark"},V={class:"card-toolbar"},k={class:"card-body pt-2"},y=["onClick"],N={href:"javascript:void(0)",class:"text-gray-800 text-hover-primary fw-bolder fs-6"},x=["onClick"],C=["onClick"];function w(e,t,n,r,a,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",g,[Object(o["createElementVNode"])("div",h,[Object(o["createElementVNode"])("h3",E,Object(o["toDisplayString"])(e.$t("usersgroupIndex")),1),Object(o["createElementVNode"])("div",V,[e.create_usersgroup?(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:0,type:"button",class:"btn btn-primary btn-sm","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end",onClick:t[0]||(t[0]=t=>e.$emit("action",{event:"create",ref:"usersgroup"}))},Object(o["toDisplayString"])(e.$t("btnNew")),1)):Object(o["createCommentVNode"])("",!0)])]),Object(o["createElementVNode"])("div",k,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.items,t=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:t.id,class:"mb-8 d-flex align-items-center"},[Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])("bullet bullet-vertical h-40px bg-"+e.colors[Math.floor(Math.random()*e.colors.length)])},null,2),Object(o["createElementVNode"])("div",{class:"flex-grow-1 mx-5",onClick:n=>e.$emit("action",{event:"view",ref:"usersgroup",data:t})},[Object(o["createElementVNode"])("a",N,Object(o["toDisplayString"])(t.name),1)],8,y),e.update_usersgroup?(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:0,class:"btn fs-8 fw-bolder btn-sm btn-light-success",onClick:n=>e.$emit("action",{event:"update",ref:"usersgroup",data:t})},Object(o["toDisplayString"])(e.$t("btnEdit")),9,x)):Object(o["createCommentVNode"])("",!0),e.delete_usersgroup?(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:1,class:"btn fs-8 fw-bolder btn-sm btn-light-danger",onClick:n=>e.$emit("action",{event:"delete",ref:"usersgroup",data:t})},Object(o["toDisplayString"])(e.$t("btnDelete")),9,C)):Object(o["createCommentVNode"])("",!0)]))),128))])])}var B=n("0238"),S=n("5c40"),U=n("a1e9"),D=Object(S["E"])({name:"UsersgroupList",props:{items:Array},setup(){return{colors:Object(U["s"])(["success","info","primary","warning"]),delete_usersgroup:Object(U["s"])(Object(B["a"])("roles: delete")),update_usersgroup:Object(U["s"])(Object(B["a"])("roles: update")),create_usersgroup:Object(U["s"])(Object(B["a"])("roles: create"))}}}),_=n("6b0d"),G=n.n(_);const $=G()(D,[["render",w]]);var L=$,M={class:"d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20"},A={class:"fw-bolder my-2"},I=Object(o["createElementVNode"])("span",{class:"fs-6 text-gray-400 fw-bold ms-1"},null,-1),P={class:"w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto"},T={key:0,class:"fv-row mb-10"},F={class:"form-label fs-6 fw-bolder text-dark"},R={class:"fv-plugins-message-container"},z={class:"fv-help-block"},J={class:"fv-row mb-10"},q={class:"form-label fs-6 fw-bolder text-dark"},K={class:"fv-plugins-message-container"},H={class:"fv-help-block"},Q={class:"text-center"},W={ref:"submitButton",type:"submit",class:"btn btn-lg btn-primary mb-5"},X={class:"indicator-label"},Y={class:"indicator-progress"},Z=Object(o["createElementVNode"])("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1);function ee(e,t,n,r,a,c){var l=Object(o["resolveComponent"])("el-option"),s=Object(o["resolveComponent"])("el-select"),i=Object(o["resolveComponent"])("ErrorMessage"),u=Object(o["resolveComponent"])("Field"),d=Object(o["resolveComponent"])("Form");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",M,[Object(o["createElementVNode"])("h3",A,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title)+" ",1),I]),Object(o["createElementVNode"])("div",P,[Object(o["createVNode"])(d,{id:"companiesGCU",class:"form w-100","validation-schema":e.vusersGroup,onSubmit:e.onSubmitCG},{default:Object(o["withCtx"])((function(){return["usersGroupUpdate"===e.route.name?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",T,[Object(o["createElementVNode"])("label",F,Object(o["toDisplayString"])(e.$t("iid")),1),Object(o["createVNode"])(s,{modelValue:e.form.id,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.form.id=t}),class:"form-control form-control-lg form-control-solid",filterable:"",remote:"","reserve-keyword":"",placeholder:"Please enter a keyword","remote-method":e.selectUsersGroup,loading:e.inputId.loading},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.inputId.options,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:e.id,label:e.id.toString(),value:e.id},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.id+" "+e.name),1)]})),_:2},1032,["label","value"])})),128))]})),_:1},8,["modelValue","remote-method","loading"]),Object(o["createElementVNode"])("div",R,[Object(o["createElementVNode"])("div",z,[Object(o["createVNode"])(i,{name:"id"})])])])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",J,[Object(o["createElementVNode"])("label",q,Object(o["toDisplayString"])(e.$t("iname")),1),Object(o["createVNode"])(u,{modelValue:e.form.name,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.name=t}),class:"form-control form-control-lg form-control-solid",type:"text",name:"name",autocomplete:"off"},null,8,["modelValue"]),Object(o["createElementVNode"])("div",K,[Object(o["createElementVNode"])("div",H,[Object(o["createVNode"])(i,{name:"name"})])])]),Object(o["createElementVNode"])("div",Q,[Object(o["createElementVNode"])("button",W,[Object(o["createElementVNode"])("span",X,Object(o["toDisplayString"])(e.$t("btnSave")),1),Object(o["createElementVNode"])("span",Y,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("wait"))+" ",1),Z])],512)])]})),_:1},8,["validation-schema","onSubmit"])])])}var te=n("7bb1"),ne=n("506a"),oe=n("6c02"),re=Object(o["defineComponent"])({name:"UsersgroupCU",components:{Field:te["b"],Form:te["c"],ErrorMessage:te["a"]},props:{typeEvent:String,item:Object},setup:function(e,t){var n=t.emit,r=Object(oe["c"])(),a=Object(o["ref"])(null),c=Object(o["ref"])(""),l=Object(o["ref"])({id:null,name:""}),s=Object(o["ref"])({loading:!1,options:[],list:[],value:[],data:[]}),i=function(){f["a"].get("/api/roles").then((function(e){var t=e.data;s.value.list=t}))},u=function(e){""!==e?(s.value.loading=!0,setTimeout((function(){s.value.loading=!1,s.value.options=s.value.list.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1}))}),200)):s.value.options=[]};Object(o["onMounted"])((function(){var t=r.name;if(l.value={id:null,name:""},"usersGroupCreate"===t||"create"===e.typeEvent?c.value="Crear nuevo grupo de usuarios":"usersGroupUpdate"!==t&&"update"!==e.typeEvent||(c.value="Actualizar grupo de usuarios"),e.item&&Object.keys(e.item).length>0&&(l.value.id=e.item.id,l.value.name=e.item.name),"usersGroupUpdate"===t&&i(),!e.typeEvent){var n="usersGroupCreate"==t?"usersGroupCreate":"usersGroupUpdate";Object(j["a"])(n,["user","usersGroup"],!1)}}));var d=function(e){f["a"].post("/api/roles",e).then((function(e){var t,o=e.data;n("success",o),null===(t=a.value)||void 0===t||t.removeAttribute("data-kt-indicator"),l.value={id:null,name:""}})).catch((function(){var e;null===(e=a.value)||void 0===e||e.removeAttribute("data-kt-indicator")}))},b=function(e){f["a"].put("/api/roles/"+l.value.id,e).then((function(e){var t,o=e.data;n("success",o),null===(t=a.value)||void 0===t||t.removeAttribute("data-kt-indicator")})).catch((function(){var e;null===(e=a.value)||void 0===e||e.removeAttribute("data-kt-indicator")}))},m=ne["a"]().shape({name:ne["c"]().required(Object(B["c"])("rname")).label("Name")}),p=function(e){a.value&&(a.value.setAttribute("data-kt-indicator","on"),l.value.id?b(l.value):d(e))};return{route:r,title:c,submitButton:a,vusersGroup:m,form:l,inputId:s,onSubmitCG:p,createUsersGroup:d,updateUsersGroup:b,getUsersGroup:i,selectUsersGroup:u}}});const ae=G()(re,[["render",ee]]);var ce=ae;const le={class:"card card-xxl-stretch mb-xl-3"},se={class:"card-header border-0"},ie={class:"card-title fw-bolder text-dark"},ue=Object(o["createElementVNode"])("div",{class:"card-toolbar"},null,-1),de={class:"card-body pt-2"},be={class:"flex-grow-1 mx-5"},me={href:"javascript:void(0)",class:"text-gray-800 text-hover-primary fw-bolder fs-6"};function pe(e,t,n,r,a,c){const l=Object(o["resolveComponent"])("el-switch");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",le,[Object(o["createElementVNode"])("div",se,[Object(o["createElementVNode"])("h3",ie,Object(o["toDisplayString"])(e.$t("permissionsIndex")),1),ue]),Object(o["createElementVNode"])("div",de,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.items,t=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:t.id,class:"mb-8 d-flex align-items-center"},[Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])("bullet bullet-vertical h-40px bg-"+e.colors[Math.floor(Math.random()*e.colors.length)])},null,2),Object(o["createElementVNode"])("div",be,[Object(o["createElementVNode"])("a",me,Object(o["toDisplayString"])(t.name),1)]),Object(o["createVNode"])(l,{modelValue:t.hasPermission,"onUpdate:modelValue":e=>t.hasPermission=e,"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue","onUpdate:modelValue"])]))),128))])])}var Oe=Object(S["E"])({name:"PermissionsList",props:{items:Array},setup(){return{colors:Object(U["s"])(["success","info","primary","warning","danger"])}}});const ve=G()(Oe,[["render",pe]]);var je=ve,fe=n("bce1"),ge=n("47e2"),he=Object(o["defineComponent"])({name:"ManagementUsersGroup",components:{TableBasic:fe["a"],UsersgroupList:L,UsersGroupCU:ce,PermissionsList:je},setup:function(){var e=this,t=Object(ge["a"])().t,n=Object(o["ref"])([{column:t("iname"),key:"name"}]),r=Object(o["ref"])(1),a=Object(o["ref"])(!0),c=Object(o["ref"])(""),l=Object(o["ref"])("add"),s=Object(o["ref"])([]),i=Object(o["ref"])({}),u=Object(o["ref"])([]),d=Object(o["ref"])(""),b=Object(o["ref"])([]),m=Object(o["ref"])([]),p=Object(o["ref"])({}),O=Object(o["ref"])({ref:"",typeEvent:"",visible:!1}),g=function(e,t){"EDIT"==t&&(O.value.visible=!0,c.value=e,l.value="edit")},h=function(){O.value.visible=!0,c.value="",l.value="add"},E=function(){i.value=s.value.filter((function(e){return-1!==JSON.stringify(e).toLowerCase().indexOf(d.value.toLowerCase())}))},V=function(){return f["a"].get("/api/roles").then((function(e){var t=e.data;return t.length>0&&(r.value=t[0].id,y(t[0].id)),t}))},k=function(){return f["a"].get("/api/permissions").then((function(e){var t=e.data;return t.map((function(e){return e.hasPermission=!1,e}))}))};Object(o["onMounted"])((function(){return Object(v["b"])(e,void 0,void 0,(function(){var e,t;return Object(v["e"])(this,(function(n){switch(n.label){case 0:return Object(j["a"])("usersgroupIndex",["user"],!1),e=b,[4,V()];case 1:return e.value=n.sent(),t=m,[4,k()];case 2:return t.value=n.sent(),[2]}}))}))}));var y=function(t){return Object(v["b"])(e,void 0,void 0,(function(){var e,n;return Object(v["e"])(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,f["a"].get("/api/roles/"+t)];case 1:return e=o.sent().data.permissions_list,i.value=e,a.value=!1,[3,3];case 2:return n=o.sent(),console.error(n),[3,3];case 3:return[2]}}))}))},N=function(e){void 0===e&&(e={}),"view"!==e.event?(O.value={ref:e.ref,typeEvent:e.event,visible:!0},e.data&&(p.value=e.data)):y(e.data.id)},x=function(){O.value={ref:"",typeEvent:"",visible:!1},p.value={}},C=function(e){if("usersgroup"===O.value.ref){var t=b.value.findIndex((function(t){return t.id===e.id}));t>=0?b.value[t]=e:b.value.push(e)}x()};return{dialog:O,element:p,roles:b,permissions:m,onEvent:N,successOperation:C,resetModal:x,onSearch:E,search:d,tableButtons:u,dataObject:i,dataList:s,createElement:h,modalMode:l,isLoading:a,header:n,actionsButton:g,role_selected:r,checkPermissions:y}}});const Ee=G()(he,[["render",O]]);t["default"]=Ee},fd34:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var o=n("0613"),r=n("38e0"),a=function(e,t,n){o["a"].dispatch(r["a"].SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:t,isSearch:n||!1})},c=function(e){o["a"].dispatch(r["a"].SET_BREADCRUMB_ACTION,{title:e})}}}]);
//# sourceMappingURL=chunk-b51b8bf6.bf02877d.js.map