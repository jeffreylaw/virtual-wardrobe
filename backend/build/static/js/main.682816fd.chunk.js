(this["webpackJsonpvirtual-wardrobe"]=this["webpackJsonpvirtual-wardrobe"]||[]).push([[0],{160:function(e,t,a){e.exports=a(308)},165:function(e,t,a){},304:function(e,t,a){},307:function(e,t,a){},308:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),i=(a(165),a(6)),l=a(13),u=a(19),m=null,s=function(){return m},d=function(e){m="bearer ".concat(e)},p=a(8),f=a.n(p),b=a(17),E=a(143),g=a.n(E).a.create();g.interceptors.response.use((function(e){return console.log("interceptor response",e),e}),(function(e){if(console.log("interceptor error",e),e.response){var t=e.response.status;if(401===t||400===t)return Promise.reject(e.response)}else console.log("Network is not responding")}));var h=g,v={getAll:function(){var e=Object(b.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:s()}},e.next=3,h.get("/api/items",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:s()}},e.next=3,h.post("/api/items",t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(b.a)(f.a.mark((function e(t,a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:s()}},e.next=3,h.put("".concat("/api/items","/").concat(t),a,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),deleteItem:function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:s()}},e.next=3,h.delete("".concat("/api/items","/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y={getOne:function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:s()}},e.next=3,h.get("".concat("/api/outfits","/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAll:function(){var e=Object(b.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:s()}},e.next=3,h.get("/api/outfits",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:s()}},e.next=3,h.post("/api/outfits",t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(b.a)(f.a.mark((function e(t,a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:s()}},e.next=3,h.put("".concat("/api/outfits","/").concat(t),a,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),deleteOutfit:function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:s()}},e.next=3,h.delete("".concat("/api/outfits","/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=a(341),j=a(357),I=a(343),w=a(345),N=a(360),S=a(363),k=a(356),x=a(364),C=a(348),D=Object(O.a)((function(){return{formButton:{width:"150px"}}})),q=function(e){var t=e.items,a=e.setItems,c=D(),o=Object(l.g)(),u=Object(n.useState)(""),m=Object(i.a)(u,2),s=m[0],d=m[1],p=Object(n.useState)(""),E=Object(i.a)(p,2),g=E[0],h=E[1],y=Object(n.useState)(""),O=Object(i.a)(y,2),q=O[0],B=O[1],A=Object(n.useState)(""),M=Object(i.a)(A,2),R=M[0],U=M[1],z=Object(n.useState)(null),H=Object(i.a)(z,2),P=H[0],T=H[1];Object(n.useEffect)((function(){T(window.cloudinary.createUploadWidget({cloudName:"ddm0yp9dq",uploadPreset:"je7yqthn",sources:["local","camera"],multiple:!1,maxFiles:1,thumbnails:".uploaded",singleUploadAutoClose:!1},(function(e,t){W(e,t)})))}),[]);var W=function(e,t){!e&&t&&"success"===t.event&&(console.log("Done",t.info),U(t.info.public_id))},F=function(){var e=Object(b.a)(f.a.mark((function e(n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),r={brand:s,description:g,category:q,imageID:R},v.create(r).then((function(e){a(t.concat(e)),h(""),B(""),o.push("/items")})).catch((function(e){console.log(e),401===e.status?o.push("/login"):400===e.status&&console.log(e.data.error)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(j.a,{my:3},r.a.createElement(I.a,{container:!0,direction:"column",alignItems:"center",justify:"center"},r.a.createElement(w.a,{variant:"h3"},"Add Item"),r.a.createElement("form",{onSubmit:F},r.a.createElement(N.a,{required:!0,id:"brand",label:"Brand",onChange:function(e){return d(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(N.a,{required:!0,id:"description",label:"Description",onChange:function(e){return h(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S.a,{required:!0,id:"category"},"Category"),r.a.createElement(k.a,{value:q,onChange:function(e){return B(e.target.value)},style:{minWidth:120}},r.a.createElement(x.a,{value:"headwear"},"Headwear"),r.a.createElement(x.a,{value:"outerwear"},"Outerwear"),r.a.createElement(x.a,{value:"tops"},"Top"),r.a.createElement(x.a,{value:"bottoms"},"Bottom"),r.a.createElement(x.a,{value:"socks"},"Socks"),r.a.createElement(x.a,{value:"footwear"},"Footwear")),r.a.createElement("div",{className:"uploaded"}),r.a.createElement(j.a,{my:2},r.a.createElement(C.a,{variant:"contained",color:"primary",onClick:function(){P.open()},className:c.formButton},"Upload image")),r.a.createElement(C.a,{variant:"contained",color:"primary",type:"submit",className:c.formButton},"Add"))))},B={login:function(){var e=Object(b.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=a(361),M=a(358);function R(e){return r.a.createElement(M.a,Object.assign({elevation:6,variant:"filled"},e))}var U=Object(O.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),z=function(e){var t=e.showNotification,a=e.setShowNotification,n=e.message,c=e.type,o=U(),i=function(e,t){"clickaway"!==t&&a(!1)};return"success"===c?r.a.createElement("div",{className:o.root},r.a.createElement(A.a,{open:t,autoHideDuration:6e3,onClose:function(){return a(!1)}},r.a.createElement(R,{onClose:i,severity:"success"},n))):"error"===c?r.a.createElement("div",{className:o.root},r.a.createElement(A.a,{open:t,autoHideDuration:6e3,onClose:function(){return a(!1)}},r.a.createElement(R,{onClose:i,severity:"error"},n))):void 0},H=Object(O.a)({root:{minHeight:"50vh",color:"#1e1e24"},form:{border:"1px solid #cdcdcd",padding:"40px",background:"#fefcfb"}}),P=function(e){var t=e.setUser,a=H(),c=Object(n.useState)(""),o=Object(i.a)(c,2),l=o[0],u=o[1],m=Object(n.useState)(""),s=Object(i.a)(m,2),p=s[0],f=s[1],b=Object(n.useState)(!1),E=Object(i.a)(b,2),g=E[0],h=E[1],v=Object(n.useState)(!1),y=Object(i.a)(v,2),O=y[0],S=y[1],k=Object(n.useState)(""),x=Object(i.a)(k,2),D=x[0],q=x[1];return r.a.createElement(I.a,{container:!0,justify:"center",alignItems:"center",className:a.root},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),B.login({username:l,password:p}).then((function(e){if(200===e.status){var a=e.data;d(a.token),window.localStorage.setItem("loggedInUser",JSON.stringify(a)),t(a)}})).catch((function(e){q("Incorrect credentials, please try again"),S(!0),setTimeout((function(){S(!1)}),4e3)}))},className:a.form},r.a.createElement(I.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(w.a,{variant:"h6"},"Virtual Wardrobe"),r.a.createElement(j.a,{my:1},r.a.createElement(N.a,{variant:"outlined",value:l,label:"Username",onChange:function(e){var t=e.target;return u(t.value)}})),r.a.createElement(j.a,{my:1},r.a.createElement(N.a,{variant:"outlined",type:"password",value:p,label:"Password",onChange:function(e){var t=e.target;return f(t.value)}})),r.a.createElement(j.a,{mt:2},r.a.createElement(C.a,{variant:"contained",color:"primary",type:"submit"},"login")))),r.a.createElement(z,{showNotification:g,setShowNotification:h,type:"success",message:D}),r.a.createElement(z,{showNotification:O,setShowNotification:S,type:"error",message:D}))},T={register:function(){var e=Object(b.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.post("/api/users",t);case 2:return a=e.sent,console.log("Register response",a),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},W=Object(O.a)({root:{minHeight:"50vh",minWidth:"25vw",color:"#1e1e24"},form:{border:"1px solid #cdcdcd",paddingLeft:"40px",paddingRight:"40px",paddingTop:"20px",paddingBottom:"20px",background:"#fefcfb"}}),F=function(){var e=W(),t=Object(l.g)(),a=Object(n.useState)(""),c=Object(i.a)(a,2),o=c[0],u=c[1],m=Object(n.useState)(""),s=Object(i.a)(m,2),d=s[0],p=s[1],f=Object(n.useState)(""),b=Object(i.a)(f,2),E=b[0],g=b[1],h=Object(n.useState)(""),v=Object(i.a)(h,2),y=v[0],O=v[1],S=Object(n.useState)(!1),k=Object(i.a)(S,2),x=k[0],D=k[1],q=Object(n.useState)(!1),B=Object(i.a)(q,2),A=B[0],M=B[1],R=Object(n.useState)(""),U=Object(i.a)(R,2),H=U[0],P=U[1];return r.a.createElement(I.a,{container:!0,justify:"center",alignItems:"center",className:e.root},r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),o&&d&&y)if(d!==E)P("Please make sure your passwords match"),M(!0);else{var a={username:o,password:d,name:y};T.register(a).then((function(e){console.log("Created user:",e),u(""),p(""),t.push("/login")}))}else P("Please enter a username, name, and password"),M(!0)},className:e.form},r.a.createElement(I.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(w.a,{variant:"h6"},"Sign up"),r.a.createElement(j.a,{my:1},r.a.createElement(N.a,{variant:"outlined",type:"text",value:o,label:"Username",onChange:function(e){var t=e.target;return u(t.value)}})),r.a.createElement(j.a,{my:1},r.a.createElement(N.a,{variant:"outlined",type:"text",value:y,label:"Name",onChange:function(e){var t=e.target;return O(t.value)}})),r.a.createElement(j.a,{my:1},r.a.createElement(N.a,{variant:"outlined",type:"password",value:d,label:"Password",onChange:function(e){var t=e.target;return p(t.value)}})),r.a.createElement(j.a,{my:1},r.a.createElement(N.a,{variant:"outlined",type:"password",value:E,label:"Confirm Password",onChange:function(e){var t=e.target;return g(t.value)}})),r.a.createElement(j.a,{mt:2},r.a.createElement(C.a,{variant:"contained",color:"primary",type:"submit"},"Sign up")))),r.a.createElement(z,{showNotification:x,setShowNotification:D,type:"success",message:H}),r.a.createElement(z,{showNotification:A,setShowNotification:M,type:"error",message:H}))},J=a(7),L=a(349),V=a(350),Y=a(351),G=Object(O.a)({itemCard:{fontSize:"16px",margin:"12px"}}),_=function(e){var t=e.items,a=e.setItems,c=G(),o=Object(l.g)(),u=Object(n.useState)(!1),m=Object(i.a)(u,2),s=m[0],d=m[1],p=Object(n.useState)(!1),f=Object(i.a)(p,2),b=f[0],E=f[1],g=Object(n.useState)(""),h=Object(i.a)(g,2),y=h[0],O=h[1];return r.a.createElement(j.a,{my:3},r.a.createElement(I.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(w.a,{variant:"h3"},"Wardrobe"),r.a.createElement(I.a,{container:!0},t.map((function(e){return r.a.createElement(L.a,{key:e.id,className:c.itemCard},r.a.createElement(V.a,null,r.a.createElement(I.a,{container:!0,justify:"center"},e.imageID&&r.a.createElement(J.Image,{publicId:e.imageID,cloudName:"ddm0yp9dq"})),r.a.createElement("p",null,"Brand: ",e.brand?e.brand:"unspecified",r.a.createElement("br",null),"Description: ",e.description,r.a.createElement("br",null),"Category: ",e.category)),r.a.createElement(Y.a,null,r.a.createElement(I.a,{container:!0,justify:"flex-end"},r.a.createElement(C.a,{color:"primary",onClick:function(){return o.push("/items/".concat(e.id))}},"Edit"),r.a.createElement(C.a,{color:"primary",onClick:function(){return function(e){try{v.deleteItem(e).then((function(n){204===n.status&&(a(t.filter((function(t){return t.id!==e}))),O("Successfully deleted item"),d(!0))}))}catch(n){O("Error: ".concat(n)),E(!0),console.log("Error:",n)}}(e.id)}},"Delete"))))})))),r.a.createElement(z,{showNotification:s,setShowNotification:d,type:"success",message:y}),r.a.createElement(z,{showNotification:b,setShowNotification:E,type:"error",message:y}))},K=Object(O.a)({formInput:{marginLeft:"8px",marginRight:"8px"},submitButton:{position:"relative",top:"20px"}}),Q=function(e){var t=e.item,a=e.items,c=e.setItems,o=K(),u=Object(l.g)(),m=Object(n.useState)(""),s=Object(i.a)(m,2),d=s[0],p=s[1],f=Object(n.useState)(""),b=Object(i.a)(f,2),E=b[0],g=b[1],h=Object(n.useState)(""),y=Object(i.a)(h,2),O=y[0],I=y[1];return console.log(t),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=t.id,r={brand:O,description:d,category:E};v.update(n,r).then((function(e){console.log(e),c(a.map((function(t){return t.id===n?e:t}))),u.push("/items")})).catch((function(e){console.log(e),401===e.status?u.push("/login"):400===e.status&&console.log(e.data.error)}))}},r.a.createElement(j.a,{my:1},"Brand:",r.a.createElement(N.a,{className:o.formInput,value:O,onChange:function(e){return I(e.target.value)},placeholder:t.brand})),r.a.createElement(j.a,{my:1},"Description:",r.a.createElement(N.a,{className:o.formInput,value:d,onChange:function(e){return p(e.target.value)},placeholder:t.description})),r.a.createElement(j.a,{my:1},"Category:",r.a.createElement(k.a,{className:o.formInput,value:E,onChange:function(e){return g(e.target.value)},style:{minWidth:120}},r.a.createElement(x.a,{value:"headwear"},"Headwear"),r.a.createElement(x.a,{value:"outerwear"},"Outerwear"),r.a.createElement(x.a,{value:"tops"},"Top"),r.a.createElement(x.a,{value:"bottoms"},"Bottom"),r.a.createElement(x.a,{value:"socks"},"Socks"),r.a.createElement(x.a,{value:"footwear"},"Footwear"))),r.a.createElement(C.a,{className:o.submitButton,variant:"contained",color:"primary",type:"submit"},"Update Item"))},X=Object(O.a)({itemImage:{margin:"5px"}}),Z=function(e){var t=e.item,a=e.items,n=e.setItems,c=X();return t?r.a.createElement(j.a,{my:3},r.a.createElement(w.a,{variant:"h3",align:"center"},"Edit Item"),r.a.createElement(j.a,{display:"flex",justifyContent:"center"},t.imageID&&r.a.createElement(J.Image,{className:c.itemImage,publicId:t.imageID,cloudName:"ddm0yp9dq"}),r.a.createElement(Q,{item:t,items:a,setItems:n}))):null},$=(a(304),function(e){var t=e.items,a=e.category,n=e.update;return 0===t.length?null:r.a.createElement("div",{className:"select-item-div"},r.a.createElement(w.a,{variant:"h5"},"Your ",a),r.a.createElement("div",{className:"scrolling-wrapper"},t.map((function(e){return r.a.createElement("div",{className:"card",key:e.id},r.a.createElement(J.Image,{publicId:e.imageID,cloudName:"ddm0yp9dq"}),r.a.createElement("br",null),r.a.createElement(C.a,{variant:"contained",color:"primary",onClick:function(){return n(e)}},"Choose"))}))))}),ee=a(148),te=a.n(ee),ae=function(e){var t=e.items,a=e.outfits,c=e.setOutfits,o=Object(l.g)(),u=Object(n.useState)(""),m=Object(i.a)(u,2),s=m[0],d=m[1],p=Object(n.useState)(""),E=Object(i.a)(p,2),g=E[0],h=E[1],v=Object(n.useState)(""),O=Object(i.a)(v,2),N=O[0],S=O[1],k=Object(n.useState)(""),x=Object(i.a)(k,2),D=x[0],q=x[1],B=Object(n.useState)(""),A=Object(i.a)(B,2),M=A[0],R=A[1],U=Object(n.useState)(""),H=Object(i.a)(U,2),P=H[0],T=H[1],W=Object(n.useState)(!1),F=Object(i.a)(W,2),L=F[0],V=F[1],Y=Object(n.useState)(!1),G=Object(i.a)(Y,2),_=G[0],K=G[1],Q=Object(n.useState)(""),X=Object(i.a)(Q,2),Z=X[0],ee=X[1],ae=t.filter((function(e){return"headwear"===e.category})),ne=t.filter((function(e){return"outerwear"===e.category})),re=t.filter((function(e){return"tops"===e.category})),ce=t.filter((function(e){return"bottoms"===e.category})),oe=t.filter((function(e){return"socks"===e.category})),ie=t.filter((function(e){return"footwear"===e.category})),le=function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),N&&D?(n={headwear:s?s.id:null,outerwear:g?g.id:null,top:N.id,bottom:D.id,socks:M?M.id:null,footwear:P?P.id:null},console.log(n),y.create(n).then((function(e){console.log(e),c(a.concat(e)),o.push("/outfits")}))):(ee("Your outfit must consist of at least a top and bottom item"),K(!0));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(j.a,{my:3},r.a.createElement(w.a,{variant:"h3",align:"center"},"Create outfit"),r.a.createElement(j.a,{display:"flex",justifyContent:"center"},s&&r.a.createElement(j.a,{my:1,mx:1},r.a.createElement(I.a,{container:!0,direction:"column"},r.a.createElement(J.Image,{publicId:s.imageID,cloudName:"ddm0yp9dq"}),r.a.createElement("br",null),r.a.createElement(C.a,{variant:"contained",color:"secondary",onClick:function(){return d("")}},"Remove"))),g&&r.a.createElement(j.a,{my:1,mx:1},r.a.createElement(I.a,{container:!0,direction:"column"},r.a.createElement(J.Image,{publicId:g.imageID,cloudName:"ddm0yp9dq"}),r.a.createElement("br",null),r.a.createElement(C.a,{variant:"contained",color:"secondary",onClick:function(){return h("")}},"Remove"))),N&&r.a.createElement(j.a,{my:1,mx:1},r.a.createElement(I.a,{container:!0,direction:"column"},r.a.createElement(J.Image,{publicId:N.imageID,cloudName:"ddm0yp9dq"}),r.a.createElement("br",null),r.a.createElement(C.a,{variant:"contained",color:"secondary",onClick:function(){return S("")}},"Remove"))),D&&r.a.createElement(j.a,{my:1,mx:1},r.a.createElement(I.a,{container:!0,direction:"column"},r.a.createElement(J.Image,{publicId:D.imageID,cloudName:"ddm0yp9dq"}),r.a.createElement("br",null),r.a.createElement(C.a,{variant:"contained",color:"secondary",onClick:function(){return q("")}},"Remove"))),M&&r.a.createElement(j.a,{my:1,mx:1},r.a.createElement(I.a,{container:!0,direction:"column"},r.a.createElement(J.Image,{publicId:M.imageID,cloudName:"ddm0yp9dq"}),r.a.createElement("br",null),r.a.createElement(C.a,{variant:"contained",color:"secondary",onClick:function(){return R("")}},"Remove"))),P&&r.a.createElement(j.a,{my:1,mx:1},r.a.createElement(I.a,{container:!0,direction:"column"},r.a.createElement(J.Image,{publicId:P.imageID,cloudName:"ddm0yp9dq"}),r.a.createElement("br",null),r.a.createElement(C.a,{variant:"contained",color:"secondary",onClick:function(){return T("")}},"Remove")))),r.a.createElement("form",{onSubmit:le},r.a.createElement(I.a,{container:!0,justify:"center"},r.a.createElement(j.a,{mx:1,mt:1},r.a.createElement(C.a,{type:"submit",variant:"contained",color:"primary"},r.a.createElement(te.a,null),"Save outfit")),r.a.createElement(j.a,{mx:1,mt:1},r.a.createElement(C.a,{variant:"contained",color:"primary",onClick:function(){ae&&d(ae[Math.floor(Math.random()*ae.length)]),ne&&h(ne[Math.floor(Math.random()*ne.length)]),re&&S(re[Math.floor(Math.random()*re.length)]),ce&&q(ce[Math.floor(Math.random()*ce.length)]),oe&&R(oe[Math.floor(Math.random()*oe.length)]),ie&&T(ie[Math.floor(Math.random()*ie.length)])}},"Generate random outfit"))),r.a.createElement($,{items:ae,category:"headwear",update:d}),r.a.createElement($,{items:ne,category:"outerwear",update:h}),r.a.createElement($,{items:re,category:"tops",update:S}),r.a.createElement($,{items:ce,category:"bottoms",update:q}),r.a.createElement($,{items:oe,category:"socks",update:R}),r.a.createElement($,{items:ie,category:"footwear",update:T})),r.a.createElement(z,{showNotification:L,setShowNotification:V,type:"success",message:Z}),r.a.createElement(z,{showNotification:_,setShowNotification:K,type:"error",message:Z}))},ne=a(98),re=a(352),ce=a(353),oe=a(354),ie=a(355),le=Object(O.a)((function(e){return{root:{marginTop:"10px",marginBottom:"10px"},popover:{padding:"16px"},cardButton:{marginLeft:"5px",marginRight:"5px"}}})),ue=function(e){var t=e.outfit,a=e.outfits,n=e.setOutfits,c=e.setShowNotification,o=e.setShowErrorNotification,i=e.setMessage,u=le(),m=Object(l.g)(),s=function(e){var r=Object(ne.a)(Object(ne.a)({},t),{},{private:!t.private});y.update(e,r).then((function(t){n(a.map((function(a){return a.id===e?t:a}))),i("Successfully updated outfit"),c(!0)})).catch((function(e){console.log(e),401===e.status?m.push("/login"):400===e.status&&(console.log(e.data.error),i("Error: ".concat(e.data.error)),o(!0))}))};return t?r.a.createElement(L.a,{className:u.root},r.a.createElement(V.a,null,r.a.createElement("div",null,t.headwear&&r.a.createElement(J.Image,{publicId:t.headwear.imageID,cloudName:"ddm0yp9dq"}),t.outerwear&&r.a.createElement(J.Image,{publicId:t.outerwear.imageID,cloudName:"ddm0yp9dq"}),t.top&&r.a.createElement(J.Image,{publicId:t.top.imageID,cloudName:"ddm0yp9dq"}),t.bottom&&r.a.createElement(J.Image,{publicId:t.bottom.imageID,cloudName:"ddm0yp9dq"}),t.socks&&r.a.createElement(J.Image,{publicId:t.socks.imageID,cloudName:"ddm0yp9dq"}),t.footwear&&r.a.createElement(J.Image,{publicId:t.footwear.imageID,cloudName:"ddm0yp9dq"}))),r.a.createElement(V.a,null,r.a.createElement(I.a,{container:!0,justify:"center"},r.a.createElement(C.a,{className:u.cardButton,startIcon:r.a.createElement(re.a,null),variant:"contained",color:"primary",onClick:function(){navigator.clipboard.writeText("https://virtual-wardrobe-app.herokuapp.com/outfits/".concat(t.id)),i("Copied link to clipboard!"),c(!0)}},"Share"),t.private?r.a.createElement(C.a,{className:u.cardButton,startIcon:r.a.createElement(ce.a,null),variant:"contained",color:"primary",onClick:function(){return s(t.id)}},"Mark as public"):r.a.createElement(C.a,{className:u.cardButton,startIcon:r.a.createElement(oe.a,null),variant:"contained",color:"primary",onClick:function(){return s(t.id)}},"Mark as private"),r.a.createElement(C.a,{className:u.cardButton,startIcon:r.a.createElement(ie.a,null),variant:"contained",color:"secondary",onClick:function(){return function(e){try{y.deleteOutfit(e).then((function(t){204===t.status&&(n(a.filter((function(t){return t.id!==e}))),i("Successfully deleted outfit"),c(!0))}))}catch(t){i("Error: ".concat(t)),o(!0),console.log("Error:",t)}}(t.id)}},"Delete outfit")))):null},me=function(e){var t=e.outfits,a=e.setOutfits,c=Object(n.useState)(!1),o=Object(i.a)(c,2),l=o[0],u=o[1],m=Object(n.useState)(!1),s=Object(i.a)(m,2),d=s[0],p=s[1],f=Object(n.useState)(""),b=Object(i.a)(f,2),E=b[0],g=b[1];return r.a.createElement(j.a,{my:3},r.a.createElement(w.a,{variant:"h3",align:"center"},"My Outfits"),t.map((function(e){return r.a.createElement(ue,{key:e.id,outfit:e,outfits:t,setOutfits:a,setShowNotification:u,setShowErrorNotification:p,setMessage:g})})),r.a.createElement(z,{showNotification:l,setShowNotification:u,type:"success",message:E}),r.a.createElement(z,{showNotification:d,setShowNotification:p,type:"error",message:E}))},se=function(e){var t=e.match,a=e.outfit,c=Object(n.useState)({}),o=Object(i.a)(c,2),u=o[0],m=o[1],s=Object(l.g)();return Object(n.useEffect)((function(){a||y.getOne(t.params.id).then((function(e){m(e)})).catch((function(e){console.log(e),s.push("/")}))}),[s,t.params.id,a]),a?r.a.createElement(I.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(w.a,{variant:"h6"},"Outfit ID: ",a.id),a.headwear&&r.a.createElement(J.Image,{publicId:a.headwear.imageID,cloudName:"ddm0yp9dq"}),r.a.createElement("br",null),a.outerwear&&r.a.createElement(J.Image,{publicId:a.outerwear.imageID,cloudName:"ddm0yp9dq"}),r.a.createElement("br",null),a.top&&r.a.createElement(J.Image,{publicId:a.top.imageID,cloudName:"ddm0yp9dq"}),r.a.createElement("br",null),a.bottom&&r.a.createElement(J.Image,{publicId:a.bottom.imageID,cloudName:"ddm0yp9dq"}),r.a.createElement("br",null),a.socks&&r.a.createElement(J.Image,{publicId:a.socks.imageID,cloudName:"ddm0yp9dq"}),r.a.createElement("br",null),a.footwear&&r.a.createElement(J.Image,{publicId:a.footwear.imageID,cloudName:"ddm0yp9dq"}),r.a.createElement("br",null)):r.a.createElement(I.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(w.a,{variant:"h6"},"Outfit ID: ",u.id),u.headwear&&r.a.createElement(J.Image,{publicId:u.headwear.imageID,cloudName:"ddm0yp9dq"}),u.outerwear&&r.a.createElement(J.Image,{publicId:u.outerwear.imageID,cloudName:"ddm0yp9dq"}),u.top&&r.a.createElement(J.Image,{publicId:u.top.imageID,cloudName:"ddm0yp9dq"}),u.bottom&&r.a.createElement(J.Image,{publicId:u.bottom.imageID,cloudName:"ddm0yp9dq"}),u.socks&&r.a.createElement(J.Image,{publicId:u.socks.imageID,cloudName:"ddm0yp9dq"}),u.footwear&&r.a.createElement(J.Image,{publicId:u.footwear.imageID,cloudName:"ddm0yp9dq"}))},de=(a(307),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),m=Object(i.a)(o,2),s=m[0],p=m[1],f=Object(n.useState)(null),b=Object(i.a)(f,2),E=b[0],g=b[1],h=Object(n.useRef)(null),O=Object(n.useState)(!1),j=Object(i.a)(O,2),I=j[0],w=j[1];Object(n.useEffect)((function(){E&&(v.getAll().then((function(e){c(e)})),y.getAll().then((function(e){p(e)})))}),[E]),Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedInUser");if(e){var t=JSON.parse(e);g(t),d(t.token)}}),[]);var N=Object(l.h)({path:"/items/:id",strict:!0}),S=N?a.find((function(e){return e.id===N.params.id})):null,k=Object(l.h)({path:"/outfits/:id",strict:!0}),x=k?s.find((function(e){return e.id===k.params.id})):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:I?"nav responsive":"nav",ref:h},r.a.createElement(u.b,{to:"/",className:"logo"},"Virtual Wardrobe"),E&&r.a.createElement(u.b,{to:"/"},r.a.createElement("span",null,"Home")),E&&r.a.createElement(u.b,{to:"/add-item"},r.a.createElement("span",null,"Add Item")),E&&r.a.createElement(u.b,{to:"/create-outfit"},r.a.createElement("span",null,"Create Outfit")),E&&r.a.createElement(u.b,{to:"/outfits"},r.a.createElement("span",null,"Outfits")),!E&&r.a.createElement(u.b,{to:"/register"},r.a.createElement("span",null,"Register")),E&&r.a.createElement(u.b,{onClick:function(){window.localStorage.removeItem("loggedInUser"),g(null),c([]),p([]),d(null)},to:"/logout"},r.a.createElement("span",null,"Logout (",E.username,")")),r.a.createElement("a",{href:"# ",className:"icon",onClick:function(){return w(!I)}},r.a.createElement("i",{className:"fa fa-bars"}))),r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/outfits/:id",render:function(e){return r.a.createElement(se,Object.assign({outfit:x},e))}}),r.a.createElement(l.b,{path:"/outfits"},r.a.createElement(me,{outfits:s,setOutfits:p})),r.a.createElement(l.b,{path:"/create-outfit"},r.a.createElement(ae,{items:a,outfits:s,setOutfits:p})),r.a.createElement(l.b,{path:"/items/:id"},S?r.a.createElement(Z,{item:S,items:a,setItems:c}):r.a.createElement(l.a,{to:"/"})),r.a.createElement(l.b,{path:"/add-item"},r.a.createElement(q,{items:a,setItems:c})),r.a.createElement(l.b,{path:"/register"},r.a.createElement(F,null)),r.a.createElement(l.b,{path:"/logout"},r.a.createElement(l.a,{to:"/"})),r.a.createElement(l.b,{path:"/"},E?r.a.createElement(_,{items:a,setItems:c}):r.a.createElement(P,{setUser:g}))))});o.a.render(r.a.createElement(u.a,null,r.a.createElement(de,null)),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.682816fd.chunk.js.map