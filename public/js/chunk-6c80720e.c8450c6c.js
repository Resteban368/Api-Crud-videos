(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c80720e"],{"86c4":function(e,t,a){"use strict";a.r(t);var o=a("7a23"),l={class:"d-flex flex-wrap flex-stack mb-6"},c={class:"fw-bolder my-2"},n={class:"fs-6 text-gray-400 fw-bold ms-1"},r={class:"d-flex my-2"},i={class:"row g-6 g-xl-9"},s={class:"row g-6 g-xl-9"},d={class:"col-xl-12"};function m(e,t,a,m,f,u){var b=Object(o["resolveComponent"])("CardOffice"),p=Object(o["resolveComponent"])("el-pagination"),O=Object(o["resolveComponent"])("OfficesCU"),j=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("h3",c,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("offices"))+" ",1),Object(o["createElementVNode"])("span",n,"("+Object(o["toDisplayString"])(e.offices.length)+")",1)]),Object(o["createElementVNode"])("div",r,[e.create_offices?(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:0,class:"btn btn-primary",onClick:t[0]||(t[0]=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return e.newOffice&&e.newOffice.apply(e,t)})},Object(o["toDisplayString"])(e.$t("btnNew")),1)):Object(o["createCommentVNode"])("",!0)])]),Object(o["createElementVNode"])("div",i,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.officesList,(function(t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:t.id,class:"col-xl-4"},[Object(o["createVNode"])(b,{"widget-classes":"card-xl-stretch mb-xl-8",color:"primary",item:t,onUpdate:e.editOffice,onDelete:e.deleteOffice},null,8,["item","onUpdate","onDelete"])])})),128))]),Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("div",d,[e.officesList.length>0?(Object(o["openBlock"])(),Object(o["createBlock"])(p,{key:0,currentPage:e.page,"onUpdate:currentPage":t[1]||(t[1]=function(t){return e.page=t}),"page-sizes":[Math.round(e.offices.length/6),Math.round(e.offices.length/3),Math.round(e.offices.length/2),Math.round(e.offices.length/1)],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.offices.length,"page-count":Math.round(e.offices.length/e.pageSize),onSizeChange:e.handleSizeChange,onCurrentChange:e.setPage},null,8,["currentPage","page-sizes","page-size","total","page-count","onSizeChange","onCurrentChange"])):Object(o["createCommentVNode"])("",!0)])]),""!==e.typeEvent?(Object(o["openBlock"])(),Object(o["createBlock"])(j,{key:0,modelValue:e.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.dialogVisible=t}),width:"50%",onClose:e.resetModal},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{"type-event":e.typeEvent,item:e.element,onSuccess:e.successOperation},null,8,["type-event","item","onSuccess"])]})),_:1},8,["modelValue","onClose"])):Object(o["createCommentVNode"])("",!0)],64)}var f=a("fd34"),u=a("16d6"),b={class:"card-body"},p={class:"d-flex flex-stack"},O={class:"d-flex align-items-center"},j={class:"symbol symbol-60px me-5"},v=["src"],g={class:"d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3"},V={href:"javascript:void(0)",class:"text-dark fw-bolder text-hover-primary fs-5"},N={class:"text-muted fw-bold"},E={key:0,class:"ms-1 dropdown"},y={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary dropdown-toggle",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},w={class:"svg-icon svg-icon-2"},h={class:"dropdown-menu menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px","aria-labelledby":"dropdownMenuButton1"},k={key:0,class:"menu-item px-3"},x={key:1,class:"menu-item px-3"},C={class:"card-p pt-5 bg-white flex-grow-1"},S={class:"row g-0 mt-2"},D={class:"col mr-8"},B={class:"fs-7 text-muted fw-bold"},_={class:"fs-4 fw-bolder"},I={class:"row g-0 mt-4"},U={class:"col mr-4"},$={class:"fs-7 text-muted fw-bold"},A={class:"d-flex align-items-center"},L={class:"fs-4 fw-bolder"},z={class:"col"},M={class:"fs-7 text-muted fw-bold"},F={class:"fs-4 fw-bolder"},T={class:"row g-0 mt-4"},P={class:"col mr-4"},R={class:"fs-7 text-muted fw-bold"},q={class:"fs-4 fw-bolder"},J={class:"col"},G={class:"fs-7 text-muted fw-bold"},Y={class:"d-flex align-items-center"},H={class:"fs-4 fw-bolder"};function K(e,t,a,l,c,n){var r=Object(o["resolveComponent"])("inline-svg");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])([e.widgetClasses,"card"])},[Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("div",p,[Object(o["createElementVNode"])("div",O,[Object(o["createElementVNode"])("div",j,[Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])(["bg-"+e.color+"-light","symbol-label"])},[e.item.logo?(Object(o["openBlock"])(),Object(o["createElementBlock"])("img",{key:0,src:e.item.logo,class:"h-50 align-self-center",alt:""},null,8,v)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{key:1,class:Object(o["normalizeClass"])(["bg-light-primary text-info","symbol-label fs-5 fw-bolder"])},Object(o["toDisplayString"])(e.item.name.match(/\b(\w)/g).join("")),1))],2)]),Object(o["createElementVNode"])("div",g,[Object(o["createElementVNode"])("a",V,Object(o["toDisplayString"])(e.item.name),1),Object(o["createElementVNode"])("span",N,Object(o["toDisplayString"])("A"===e.item.status?e.$t("istatusactive"):e.$t("istatuscancel")),1)])]),e.update_offices||e.delete_offices?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",E,[Object(o["createElementVNode"])("button",y,[Object(o["createElementVNode"])("span",w,[Object(o["createVNode"])(r,{src:"media/icons/duotone/Layout/Layout-4-blocks-2.svg"})])]),Object(o["createElementVNode"])("ul",h,[e.update_offices?(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",k,[Object(o["createElementVNode"])("div",{class:"dropdown-item menu-content fs-6 text-info fw-bolder px-3 py-4",onClick:t[0]||(t[0]=function(t){return e.$emit("update",e.item)})},Object(o["toDisplayString"])(e.$t("btnEdit")),1)])):Object(o["createCommentVNode"])("",!0),e.delete_offices?(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",x,[Object(o["createElementVNode"])("div",{class:"dropdown-item menu-content fs-6 text-danger fw-bolder px-3 py-4",onClick:t[1]||(t[1]=function(t){return e.$emit("delete",e.item.id)})},Object(o["toDisplayString"])(e.$t("btnDelete")),1)])):Object(o["createCommentVNode"])("",!0)])])):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",C,[Object(o["createElementVNode"])("div",S,[Object(o["createElementVNode"])("div",D,[Object(o["createElementVNode"])("div",B,Object(o["toDisplayString"])(e.$t("iaddress")),1),Object(o["createElementVNode"])("div",_,Object(o["toDisplayString"])(e.item.address),1)])]),Object(o["createElementVNode"])("div",I,[Object(o["createElementVNode"])("div",U,[Object(o["createElementVNode"])("div",$,Object(o["toDisplayString"])(e.$t("iphone")),1),Object(o["createElementVNode"])("div",A,[Object(o["createElementVNode"])("div",L,Object(o["toDisplayString"])(e.item.phone),1)])]),Object(o["createElementVNode"])("div",z,[Object(o["createElementVNode"])("div",M,Object(o["toDisplayString"])(e.$t("iemail")),1),Object(o["createElementVNode"])("div",F,Object(o["toDisplayString"])(e.item.email),1)])]),Object(o["createElementVNode"])("div",T,[Object(o["createElementVNode"])("div",P,[Object(o["createElementVNode"])("div",R,Object(o["toDisplayString"])(e.$t("iwebsite")),1),Object(o["createElementVNode"])("div",q,Object(o["toDisplayString"])(e.item.website),1)]),Object(o["createElementVNode"])("div",J,[Object(o["createElementVNode"])("div",G,Object(o["toDisplayString"])(e.$t("icompany")),1),Object(o["createElementVNode"])("div",Y,[Object(o["createElementVNode"])("div",H,Object(o["toDisplayString"])(e.item.company_id),1)])])])])])],2)}var Q=a("0238"),W=Object(o["defineComponent"])({name:"cardOffice",props:{widgetClasses:String,color:String,item:Object},setup:function(){return{update_offices:Object(o["ref"])(Object(Q["a"])("offices: update")),delete_offices:Object(o["ref"])(Object(Q["a"])("offices: delete"))}}}),X=a("6b0d"),Z=a.n(X);const ee=Z()(W,[["render",K]]);var te=ee,ae={class:"container"},oe={class:"fw-bolder my-2"},le=Object(o["createElementVNode"])("span",{class:"fs-6 text-gray-400 fw-bold ms-1"},null,-1),ce={class:"bg-white rounded shadow-sm p-10 p-lg-15 mx-auto"},ne={class:"row"},re={key:0,class:"col-md-6"},ie={class:"form-label fs-6 fw-bolder text-dark"},se={class:"fv-plugins-message-container"},de={class:"fv-help-block"},me={class:"col-md-6"},fe={class:"form-label fs-6 fw-bolder text-dark"},ue={class:"fv-plugins-message-container"},be={class:"fv-help-block"},pe={class:"row"},Oe={class:"col-md-6"},je={class:"form-label fs-6 fw-bolder text-dark"},ve={class:"fv-plugins-message-container"},ge={class:"fv-help-block"},Ve={class:"col-md-6"},Ne={class:"form-label fs-6 fw-bolder text-dark"},Ee={class:"fv-plugins-message-container"},ye={class:"fv-help-block"},we={class:"row"},he={class:"col-md-12"},ke={class:"form-label fs-6 fw-bolder text-dark"},xe={class:"fv-plugins-message-container"},Ce={class:"fv-help-block"},Se={class:"row"},De={class:"col-md-12"},Be={class:"form-label fs-6 fw-bolder text-dark"},_e={class:"fv-plugins-message-container"},Ie={class:"fv-help-block"},Ue={class:"row"},$e={class:"col-md-6"},Ae={class:"form-label fs-6 fw-bolder text-dark"},Le={class:"fv-plugins-message-container"},ze={class:"fv-help-block"},Me={class:"col-md-6"},Fe={class:"form-label fs-6 fw-bolder text-dark"},Te={class:"fv-plugins-message-container"},Pe={class:"fv-help-block"},Re={class:"row"},qe={class:"col-md-6"},Je={class:"form-label fs-6 fw-bolder text-dark"},Ge={class:"col-md-6"},Ye={class:"form-label fs-6 fw-bolder text-dark"},He={class:"row mt-5"},Ke={class:"col-md-6"},Qe={class:"form-label fs-6 fw-bolder text-dark"},We={"data-kt-flag":"flags/united-states.svg",value:"A"},Xe={"data-kt-flag":"flags/united-kingdom.svg",value:"C"},Ze={class:"col-md-6 text-center"},et={class:"image-input image-input-outline","data-kt-image-input":"true",style:{"background-image":"url(media/defaults/blank.png)"}},tt=Object(o["createElementVNode"])("label",{class:"form-label fs-6 fw-bolder text-dark"},"Logo",-1),at={class:"btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow","data-kt-image-input-action":"change","data-bs-toggle":"tooltip",title:"Change logo"},ot=Object(o["createElementVNode"])("i",{class:"bi bi-pencil-fill fs-7"},null,-1),lt=Object(o["createElementVNode"])("input",{type:"hidden",name:"logo_remove"},null,-1),ct=Object(o["createElementVNode"])("i",{class:"bi bi-x fs-2"},null,-1),nt=[ct],rt=Object(o["createElementVNode"])("div",{class:"form-text"},"Allowed file types: png, jpg, jpeg.",-1),it={class:"row"},st={class:"col-md-12"},dt={class:"text-center"},mt={ref:"submitButton",type:"submit",class:"btn btn-lg btn-primary mb-5"},ft={class:"indicator-label"},ut={class:"indicator-progress"},bt=Object(o["createElementVNode"])("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1);function pt(e,t,a,l,c,n){var r=Object(o["resolveComponent"])("el-option"),i=Object(o["resolveComponent"])("el-select"),s=Object(o["resolveComponent"])("ErrorMessage"),d=Object(o["resolveComponent"])("Field"),m=Object(o["resolveComponent"])("Form");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",ae,[Object(o["createElementVNode"])("h3",oe,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title)+" ",1),le]),Object(o["createElementVNode"])("div",ce,[Object(o["createVNode"])(m,{id:"officeCU",class:"form w-100","validation-schema":e.voffices,onSubmit:e.onSubmitOffice},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",ne,["officesUpdate"===e.route.name?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",re,[Object(o["createElementVNode"])("label",ie,Object(o["toDisplayString"])(e.$t("iid")),1),Object(o["createVNode"])(i,{modelValue:e.form.id,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.form.id=t}),class:"form-control form-control-lg form-control-solid",filterable:"",remote:"","reserve-keyword":"",placeholder:"Please enter a keyword","remote-method":e.selectOffices,loading:e.inputId.loading,onChange:e.setOffice},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.inputId.options,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:e.id,label:e.id,value:e.id},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.id+" "+e.name),1)]})),_:2},1032,["label","value"])})),128))]})),_:1},8,["modelValue","remote-method","loading","onChange"]),Object(o["createElementVNode"])("div",se,[Object(o["createElementVNode"])("div",de,[Object(o["createVNode"])(s,{name:"id"})])])])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",me,[Object(o["createElementVNode"])("label",fe,Object(o["toDisplayString"])(e.$t("icompany")),1),Object(o["createVNode"])(i,{modelValue:e.form.companyID,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.companyID=t}),class:"form-control form-control-lg form-control-solid",filterable:"",remote:"","reserve-keyword":"",placeholder:"Please enter a keyword","remote-method":e.selectCompanies,loading:e.inputCompany.loading},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.inputCompany.options,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:e.id,label:e.name,value:e.id},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.id+" "+e.name),1)]})),_:2},1032,["label","value"])})),128))]})),_:1},8,["modelValue","remote-method","loading"]),Object(o["createVNode"])(d,{modelValue:e.form.companyID,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.companyID=t}),class:"form-control form-control-lg form-control-solid",type:"hidden",name:"companyID",autocomplete:"off"},null,8,["modelValue"]),Object(o["createElementVNode"])("div",ue,[Object(o["createElementVNode"])("div",be,[Object(o["createVNode"])(s,{name:"companyID"})])])])]),Object(o["createElementVNode"])("div",pe,[Object(o["createElementVNode"])("div",Oe,[Object(o["createElementVNode"])("label",je,Object(o["toDisplayString"])(e.$t("iname")),1),Object(o["createVNode"])(d,{modelValue:e.form.name,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.form.name=t}),class:"form-control form-control-lg form-control-solid",type:"text",name:"name",autocomplete:"off"},null,8,["modelValue"]),Object(o["createElementVNode"])("div",ve,[Object(o["createElementVNode"])("div",ge,[Object(o["createVNode"])(s,{name:"name"})])])]),Object(o["createElementVNode"])("div",Ve,[Object(o["createElementVNode"])("label",Ne,Object(o["toDisplayString"])(e.$t("icif")),1),Object(o["createVNode"])(d,{modelValue:e.form.cif,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.form.cif=t}),class:"form-control form-control-lg form-control-solid",type:"text",name:"cif",autocomplete:"off"},null,8,["modelValue"]),Object(o["createElementVNode"])("div",Ee,[Object(o["createElementVNode"])("div",ye,[Object(o["createVNode"])(s,{name:"cif"})])])])]),Object(o["createElementVNode"])("div",we,[Object(o["createElementVNode"])("div",he,[Object(o["createElementVNode"])("label",ke,Object(o["toDisplayString"])(e.$t("iaddress")),1),Object(o["createVNode"])(d,{modelValue:e.form.address,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.form.address=t}),class:"form-control form-control-lg form-control-solid",type:"text",name:"address",autocomplete:"off"},null,8,["modelValue"]),Object(o["createElementVNode"])("div",xe,[Object(o["createElementVNode"])("div",Ce,[Object(o["createVNode"])(s,{name:"address"})])])])]),Object(o["createElementVNode"])("div",Se,[Object(o["createElementVNode"])("div",De,[Object(o["createElementVNode"])("label",Be,Object(o["toDisplayString"])(e.$t("ifiscaladdress")),1),Object(o["createVNode"])(d,{modelValue:e.form.fiscal_address,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.form.fiscal_address=t}),class:"form-control form-control-lg form-control-solid",type:"text",name:"fiscal_address",autocomplete:"off"},null,8,["modelValue"]),Object(o["createElementVNode"])("div",_e,[Object(o["createElementVNode"])("div",Ie,[Object(o["createVNode"])(s,{name:"fiscal_address"})])])])]),Object(o["createElementVNode"])("div",Ue,[Object(o["createElementVNode"])("div",$e,[Object(o["createElementVNode"])("label",Ae,Object(o["toDisplayString"])(e.$t("iemail")),1),Object(o["createVNode"])(d,{modelValue:e.form.email,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.form.email=t}),class:"form-control form-control-lg form-control-solid",type:"text",name:"email",autocomplete:"off"},null,8,["modelValue"]),Object(o["createElementVNode"])("div",Le,[Object(o["createElementVNode"])("div",ze,[Object(o["createVNode"])(s,{name:"email"})])])]),Object(o["createElementVNode"])("div",Me,[Object(o["createElementVNode"])("label",Fe,Object(o["toDisplayString"])(e.$t("iwebsite")),1),Object(o["createVNode"])(d,{modelValue:e.form.website,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.form.website=t}),class:"form-control form-control-lg form-control-solid",type:"text",name:"website",autocomplete:"off"},null,8,["modelValue"]),Object(o["createElementVNode"])("div",Te,[Object(o["createElementVNode"])("div",Pe,[Object(o["createVNode"])(s,{name:"website"})])])])]),Object(o["createElementVNode"])("div",Re,[Object(o["createElementVNode"])("div",qe,[Object(o["createElementVNode"])("label",Je,Object(o["toDisplayString"])(e.$t("iphone")),1),Object(o["createVNode"])(d,{modelValue:e.form.phone,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.form.phone=t}),class:"form-control form-control-lg form-control-solid",type:"text",name:"phone",autocomplete:"off"},null,8,["modelValue"])]),Object(o["createElementVNode"])("div",Ge,[Object(o["createElementVNode"])("label",Ye,Object(o["toDisplayString"])(e.$t("ifax")),1),Object(o["createVNode"])(d,{modelValue:e.form.fax,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.form.fax=t}),class:"form-control form-control-lg form-control-solid",type:"text",name:"fax",autocomplete:"off"},null,8,["modelValue"])])]),Object(o["createElementVNode"])("div",He,[Object(o["createElementVNode"])("div",Ke,[Object(o["createElementVNode"])("label",Qe,Object(o["toDisplayString"])(e.$t("istatus")),1),Object(o["createVNode"])(d,{modelValue:e.form.status,"onUpdate:modelValue":t[11]||(t[11]=function(t){return e.form.status=t}),as:"select",name:"status",class:"form-select form-select-solid form-select-lg"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("option",We,[Object(o["createElementVNode"])("b",null,Object(o["toDisplayString"])(e.$t("istatusactive")),1)]),Object(o["createElementVNode"])("option",Xe,[Object(o["createElementVNode"])("b",null,Object(o["toDisplayString"])(e.$t("istatuscancel")),1)])]})),_:1},8,["modelValue"])]),Object(o["createElementVNode"])("div",Ze,[Object(o["createElementVNode"])("div",et,[Object(o["createElementVNode"])("div",{class:"image-input-wrapper w-125px h-125px",style:Object(o["normalizeStyle"])(e.form.logo?"background-image: url("+e.form.logo+")":"background-image: url(media/defaults/blank.png)")},null,4),tt,Object(o["createElementVNode"])("label",at,[ot,Object(o["createElementVNode"])("input",{type:"file",name:"logo",accept:".png, .jpg, .jpeg",onChange:t[12]||(t[12]=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return e.previewImage&&e.previewImage.apply(e,t)})},null,32),lt]),Object(o["createElementVNode"])("span",{class:"btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow","data-kt-image-input-action":"remove","data-bs-toggle":"tooltip",title:"Remove logo",onClick:t[13]||(t[13]=function(t){return e.removeImage("logo")})},nt)]),rt])]),Object(o["createElementVNode"])("div",it,[Object(o["createElementVNode"])("div",st,[Object(o["createElementVNode"])("div",dt,[Object(o["createElementVNode"])("button",mt,[Object(o["createElementVNode"])("span",ft,Object(o["toDisplayString"])(e.$t("btnSave")),1),Object(o["createElementVNode"])("span",ut,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("wait"))+" ",1),bt])],512)])])])]})),_:1},8,["validation-schema","onSubmit"])])])}var Ot=a("7bb1"),jt=a("506a"),vt=a("6c02"),gt=a("47e2"),Vt=Object(o["defineComponent"])({name:"OfficesCU",components:{Field:Ot["b"],Form:Ot["c"],ErrorMessage:Ot["a"]},props:{typeEvent:String,item:Object},setup:function(e,t){var a,l=t.emit,c=Object(vt["c"])(),n=Object(o["ref"])(null),r=Object(o["ref"])(""),i=Object(gt["a"])({useScope:"global"}).t,s=Object(o["ref"])({name:"",cif:"",address:"",fiscalAddress:"",email:"",website:"",phone:"",fax:"",status:"",logo:""}),d=Object(o["ref"])({loading:!1,options:[],list:[]}),m=Object(o["ref"])({loading:!1,options:[],list:[]}),b=function(){u["a"].get("/api/offices").then((function(e){var t=e.data;d.value.list=t}))},p=function(e){""!==e?(d.value.loading=!0,setTimeout((function(){d.value.loading=!1,d.value.options=d.value.list.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1}))}),200)):d.value.options=[]},O=function(e){var t=d.value.list.find((function(t){return t.id===e}))||{id:"",company_id:"",name:"",CIF:"",address:"",fiscal_address:"",email:"",website:"",phone:"",fax:"",status:"",logo:""};s.value.name=t.name,s.value.companyID=Number(t.company_id),s.value.cif=t.CIF||"",s.value.address=t.address,s.value.fiscalAddress=t.fiscal_address,s.value.email=t.email,s.value.website=t.website,s.value.phone=t.phone,s.value.fax=t.fax,s.value.status=t.status,s.value.logo=t.logo},j=function(){u["a"].get("/api/companies").then((function(e){var t=e.data;m.value.list=t}))},v=function(e){""!==e?(m.value.loading=!0,setTimeout((function(){m.value.loading=!1,m.value.options=m.value.list.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1}))}),200)):m.value.options=[]},g=function(e){var t=e.target.files[0];t&&(s.value[e.target.name]=URL.createObjectURL(t),"logo"===e.target.name&&(a=e.target.files[0]))},V=function(e){s.value[e]="media/defaults/blank.png","logo"===e&&(a="")};Object(o["onMounted"])((function(){var t=c.name;if(j(),"officesCreate"===t||"create"===e.typeEvent?r.value=i("createNewOfficeGroup"):"officesUpdate"!==t&&"update"!==e.typeEvent||(r.value="Actualizar oficina"),e.item&&Object.keys(e.item).length>0&&(s.value.id=e.item.id,s.value.companyID=e.item.company_id,s.value.name=e.item.name,s.value.cif="no cif",s.value.address="no address",s.value.fiscalAddress="",s.value.email="noemail@email.es",s.value.website="http://nowesite.com",s.value.phone="",s.value.fax="",s.value.status="",s.value.logo=e.item.logo),"officesUpdate"===t&&b(),!e.typeEvent){var a="officesCreate"==t?"officesCreate":"officesUpdate";Object(f["a"])(a,["companies","offices"],!1)}}));var N=function(){var e=new FormData;e.append("company_id",s.value.companyID?s.value.companyID.toString():""),e.append("name",s.value.name),e.append("logo",a),u["a"].postAttach("/api/offices",e).then((function(e){var t,a=e.data;l("success",a),null===(t=n.value)||void 0===t||t.removeAttribute("data-kt-indicator")})).catch((function(){var e;null===(e=n.value)||void 0===e||e.removeAttribute("data-kt-indicator")}))},E=function(){var e=new FormData;e.append("company_id",s.value.companyID?s.value.companyID.toString():""),e.append("name",s.value.name),e.append("logo",a),u["a"].postAttach("/api/offices/update/"+s.value.id,e).then((function(e){var t,a=e.data;l("success",a),null===(t=n.value)||void 0===t||t.removeAttribute("data-kt-indicator")})).catch((function(){var e;null===(e=n.value)||void 0===e||e.removeAttribute("data-kt-indicator")}))},y=jt["a"]().shape({name:jt["c"]().required(Object(Q["c"])("rname")).label("Name"),companyID:jt["c"]().required().label("Companies group"),address:jt["c"]().required().label("Address"),email:jt["c"]().required().email().label("Email"),website:jt["c"]().url().nullable()}),w=function(){n.value&&(n.value.setAttribute("data-kt-indicator","on"),s.value.id?E():N())};return{route:c,title:r,submitButton:n,voffices:y,form:s,logo:a,inputId:d,inputCompany:m,onSubmitOffice:w,createOffice:N,updateOffice:E,getOffices:b,selectOffices:p,setOffice:O,getCompanies:j,selectCompanies:v,previewImage:g,removeImage:V}}});const Nt=Z()(Vt,[["render",pt]]);var Et=Nt,yt=a("0241"),wt=a.n(yt),ht=a("5502"),kt=Object(o["defineComponent"])({name:"ManagementOffices",components:{CardOffice:te,OfficesCU:Et},setup:function(){var e=Object(ht["b"])(),t=Object(o["ref"])([]),a=Object(o["ref"])(""),l=Object(o["ref"])(!1),c=Object(o["ref"])({}),n=Object(o["ref"])(1),r=Object(o["ref"])(3),i=function(){u["a"].get("/api/offices").then((function(e){var a=e.data;t.value=a}))},s=function(){a.value="create",l.value=!0},d=function(e){c.value=e,a.value="update",l.value=!0},m=function(e){wt.a.fire({text:"Esta seguro que desea eliminar esta empresa",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it",customClass:{confirmButton:"btn fw-bold btn-light-danger",cancelButton:"btn fw-bold btn-light-primary"}}).then((function(a){a.isConfirmed&&u["a"].delete("/api/offices/"+e).then((function(){var a=t.value.findIndex((function(t){return t.id===e}));t.value.splice(a,1)}))}))},b=function(e){var a=t.value.findIndex((function(t){return t.id===e.id}));a>=0?t.value[a]=e:t.value.push(e),l.value=!1},p=function(){a.value="",c.value={}},O=function(e){n.value=1,r.value=e},j=function(e){n.value=e},v=Object(o["computed"])((function(){if(""===e.getters.searchLocal)return t.value.slice(r.value*n.value-r.value,r.value*n.value)||[];var a=t.value.filter((function(t){return t.name.toLowerCase().includes(e.getters.searchLocal.toLowerCase())}));return a.slice(r.value*n.value-r.value,r.value*n.value)||[]}));return Object(o["onMounted"])((function(){Object(f["a"])("officesIndex",["companies","offices"],!0),i()})),{newOffice:s,editOffice:d,deleteOffice:m,successOperation:b,resetModal:p,handleSizeChange:O,setPage:j,offices:t,officesList:v,typeEvent:a,dialogVisible:l,element:c,page:n,pageSize:r,create_offices:Object(o["ref"])(Object(Q["a"])("offices: create"))}}});const xt=Z()(kt,[["render",m]]);t["default"]=xt},fd34:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return n}));var o=a("0613"),l=a("38e0"),c=function(e,t,a){o["a"].dispatch(l["a"].SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:t,isSearch:a||!1})},n=function(e){o["a"].dispatch(l["a"].SET_BREADCRUMB_ACTION,{title:e})}}}]);
//# sourceMappingURL=chunk-6c80720e.c8450c6c.js.map