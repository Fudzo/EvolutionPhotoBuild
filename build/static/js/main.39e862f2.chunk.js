(this.webpackJsonpevolutionphoto=this.webpackJsonpevolutionphoto||[]).push([[0],{105:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(13),i=a.n(s),r=(a(105),a(5)),o=a(12),j=a.n(o),l=a(26),d=(a(29),a(30),a(32),a(17)),b=a(2);var u=function(e){var t=Object(d.useSpring)({from:{opacity:0,transform:"scale(0.5)"},to:{opacity:1,transform:"scale(1)"},config:{duration:1e3,precision:.05,clamp:!0}});return Object(b.jsxs)(d.animated.div,{className:"omeni",style:t,children:[Object(b.jsx)("h2",{className:"mt-5",children:"Nikola Furundzic"}),Object(b.jsx)("h5",{children:"Fotograf / Videograf "}),Object(b.jsx)("img",{src:"./icons/profilna.jpg",className:"profilna mt-5",alt:"profilna"}),Object(b.jsxs)("div",{className:"mt-5 omeni-text",children:[Object(b.jsx)("span",{children:"Nikola je fotograf/videograf iz Kraljeva, sa preko 10 godina iskustva na tim poljima. "}),Object(b.jsx)("span",{children:"Uza specijalnost su mu fotografisanje proizvoda kao i izrada korporativnih video snimaka. "}),Object(b.jsx)("span",{children:"Pored toga bavi se i fotografisanjem vencanja, rodjendana kao i svih vrsta proslava. "})]}),Object(b.jsx)("span",{children:"\xa0"}),Object(b.jsx)("span",{style:{fontWeight:"bold"},children:" Saradnje:   "}),Object(b.jsxs)("div",{style:{flexDirection:"column"},className:"slike",children:[Object(b.jsx)("img",{src:"./firme/pekom.png",className:"mt-5 mx-2 slike-saradnja",alt:"pekom"}),Object(b.jsx)("img",{src:"./firme/banim.png",className:"mt-5 mx-2 slike-saradnja",alt:"banim"}),Object(b.jsx)("img",{src:"./firme/interpak.png",className:"mt-5 mx-2 slike-saradnja",alt:"interpak"}),Object(b.jsx)("img",{src:"./firme/krsenkovic.jpg",className:"mt-5 mx-2 slike-saradnja",alt:"krsenkovic"}),Object(b.jsx)("img",{src:"./firme/gruzanska.jpg",className:"mt-5 mx-2 slike-saradnja gruzanska",alt:"gruzanska"}),Object(b.jsx)("img",{src:"./firme/aloba.jpg",className:"mt-5 mx-2 slike-saradnja",alt:"aloba"})]})]})},m=a(95),h=a(69);var p=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),o=i[0],j=i[1],l=Object(n.useState)(""),u=Object(r.a)(l,2),p=u[0],O=u[1],x=Object(n.useState)(""),f=Object(r.a)(x,2),v=f[0],g=f[1],k=Object(n.useState)(!1),N=Object(r.a)(k,2),y=N[0],w=N[1],S=Object(n.useState)(!0),I=Object(r.a)(S,2),C=I[0],L=I[1],z=Object(n.useState)(),P=Object(r.a)(z,2),V=P[0],F=P[1],K=Object(d.useSpring)({from:{opacity:0,transform:"scale(0.5)"},to:{opacity:1,transform:"scale(1)"},config:{duration:1e3,precision:.05,clamp:!0}});return Object(b.jsxs)(d.animated.div,{className:"kontakt mx-4",style:K,children:[Object(b.jsxs)(h.a,{show:y,variant:"danger",children:[V?null:Object(b.jsx)(h.a.Heading,{children:"Poruka poslata"}),Object(b.jsx)("p",{children:V||"Vasa poruka je uspesno poslata, ocekujte odgovor u sto kracem roku na ".concat(v)})]}),Object(b.jsx)("span",{className:"mt-2",children:"\xa0"}),Object(b.jsx)("span",{children:"Ukoliko imate bilo kakvih pitanja mozete me kontaktirati: "}),Object(b.jsx)("span",{children:"\xa0"}),Object(b.jsx)("span",{style:{color:"red"},children:"evolutionphotokv@gmail.com "}),Object(b.jsx)("span",{style:{color:"red"},children:"Telefon: 060/375-0-661"}),Object(b.jsx)("span",{children:"\xa0"}),Object(b.jsx)("span",{children:"Ili putem kontakt forme"}),Object(b.jsx)("span",{children:"\xa0"}),Object(b.jsxs)("div",{className:"kontaktForma",children:[Object(b.jsx)("input",{className:"form-control kontaktIme no-border",value:a,type:"text",id:"textIme",placeholder:"Ime",onChange:function(e){return c(e.target.value)}}),Object(b.jsx)("span",{children:"\xa0"}),Object(b.jsx)("input",{className:"form-control kontaktIme no-border",value:p,type:"email",id:"textEmail",placeholder:"Email",onChange:function(e){return O(e.target.value)}}),Object(b.jsx)("span",{children:"\xa0"}),Object(b.jsx)("textarea",{className:"form-control no-border",id:"textPoruka",rows:"5",value:o,placeholder:"Vasa poruka",onChange:function(e){return j(e.target.value)}}),Object(b.jsx)("span",{children:"\xa0"}),Object(b.jsx)("button",{type:"button",disabled:C,class:"btn btn-danger mt-3 no-border",onClick:function(e){if(""===a||""===p||""===o)return F("Sva polja moraju biti popunjena!"),void w(!0);F(),fetch("/api/sendEmail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ime:a,email:p,poruka:o})}),w(!0),g(p),c(""),j(""),O("")},children:"Posalji"})]}),Object(b.jsx)("span",{className:"mt-3"}),Object(b.jsx)(m.a,{sitekey:"6Lde484cAAAAAB0cQLFteDPLYY2wAcan1K1fJHFJ",onChange:function(e){fetch("/api/captcha",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({captcha:e})}).then((function(e){return e.json()})).then((function(e){e.success?L(!1):L(!0)}))},onExpire:function(){L(!0)}})]})};var O=function(e){console.log(e.videos);var t=Object(d.useSpring)({opacity:e.loading?1:0,transform:e.loading?"scale(1)":"scale(0.5)",config:{duration:1e3,precision:.05,clamp:!0}});return Object(b.jsxs)("div",{children:["aaaaaaaaaaaaaaa",Object(b.jsxs)(d.animated.div,{style:t,className:"mt-2 galerija",onClick:function(t){return function(t){t&&e.filterVideos(t)}(t.target.id)},children:[Object(b.jsx)("span",{className:"menu menuVideo",children:Object(b.jsx)("div",{id:"christening",children:"Krstenja\xa0\xa0"})}),Object(b.jsx)("span",{className:"menu menuVideo",children:Object(b.jsx)("div",{id:"creative",children:"Kreativni\xa0\xa0"})}),Object(b.jsx)("span",{className:"menu menuVideo",children:Object(b.jsx)("div",{id:"corporative",children:"Korporativni\xa0\xa0"})}),Object(b.jsx)("span",{className:"menu menuVideo",children:Object(b.jsx)("div",{id:"birthday",children:"Rodjendani\xa0\xa0"})})]}),Object(b.jsx)(d.animated.div,{className:"mt-5",style:t,children:Object.values(e.videos).map((function(e,t){return Object(b.jsx)("div",{className:"m-1 videos",children:Object(b.jsx)("iframe",{width:"325",height:"200",src:"https://www.youtube.com/embed/"+e.src,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})},t+=1)}))})]})},x=a(6),f=a(91),v=a(55);var g=function(e){var t=Object(n.useState)(0),a=Object(r.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(!1),o=Object(r.a)(i,2),j=o[0],l=o[1],u=Object(d.useSpring)({opacity:e.loading?1:0,transform:e.loading?"scale(1)":"scale(0.5)",config:{duration:1e3,precision:.05,clamp:!0}}),m=Object(n.useCallback)((function(e,t){t.photo;var a=t.index;s(a),l(!0)}),[]);return Object(b.jsxs)("div",{className:"mt-5",children:[!0===e.filterLoading&&Object(b.jsxs)(d.animated.div,{style:u,className:"mt-2 galerija",onClick:function(t){return function(t){t&&e.filterImages(t)}(t.target.id)},children:[Object(b.jsx)("span",{className:"menu",children:Object(b.jsx)("div",{id:"wedding",children:"Vencanja\xa0\xa0"})}),Object(b.jsx)("span",{className:"menu",children:Object(b.jsx)("div",{id:"christening",children:"Krstenja\xa0\xa0"})}),Object(b.jsx)("span",{className:"menu",children:Object(b.jsx)("div",{id:"birthday",children:"Punoletstva\xa0\xa0"})}),Object(b.jsx)("span",{className:"menu",children:Object(b.jsx)("div",{id:"products",children:"Produkti"})})]}),!0===e.loading&&Object(b.jsxs)(d.animated.div,{style:u,children:[Object(b.jsx)("span",{className:"mt-2",children:"\xa0"}),Object(b.jsx)(f.a,{photos:e.photos,onClick:m}),Object(b.jsx)(v.b,{children:j?Object(b.jsx)(v.a,{onClose:function(){s(0),l(!1)},children:Object(b.jsx)(v.c,{currentIndex:c,views:e.photos.map((function(e){return Object(x.a)(Object(x.a)({},e),{},{srcset:e.srcSet,caption:e.title})}))})}):null}),Object(b.jsx)("span",{className:"mb-2",children:"\xa0"})]})]})};var k=function(){return Object(b.jsx)("div",{className:"za-fade-out",children:Object(b.jsx)("img",{src:"./icons/loading.gif",alt:"loading",className:"loading",width:"100"})})};var N=function(e){var t=new Date;return Object(b.jsxs)("div",{className:"footer mt-5",children:[Object(b.jsxs)("span",{children:["EvolutionPhoto \xa9 ",t.getFullYear()]}),Object(b.jsxs)("span",{className:"menu menu2 socials1",children:[Object(b.jsx)("span",{children:" \xa0 \xa0\xa0 \xa0\xa0\xa0"})," ",Object(b.jsx)("a",{href:"https://instagram.com/fotofuki",target:"_blank",children:Object(b.jsx)("img",{src:"./icons/instagram.png",className:"ikonice",alt:"instagram",width:"16px"})})," ",Object(b.jsx)("span",{children:" \xa0\xa0"}),Object(b.jsx)("a",{href:"https://facebook.com/fotofuki",target:"_blank",children:Object(b.jsx)("img",{src:"./icons/facebook.png",className:"ikonice",alt:"facebook",width:"10px"})}),"  ",Object(b.jsx)("span",{children:" \xa0\xa0"}),Object(b.jsx)("a",{href:"https://youtube.com",target:"_blank",children:Object(b.jsx)("img",{src:"./icons/youtube.png",className:"ikonice",alt:"youtube",width:"20px"})})]})]})},y="https://evotest-df440-default-rtdb.europe-west1.firebasedatabase.app/";var w=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{children:"U ponudi imamo foto i video pakete, u zavisnosti od Vasih potreba."}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-6",children:"aaa"}),Object(b.jsx)("div",{className:"col-6",children:"eee"})]})]})},S=a(93),I=a(9),C=a(25);var L=function(){var e=[],t=[];Object(n.useEffect)(Object(l.a)(j.a.mark((function t(){var a,n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],z(!1),t.next=4,T();case 4:if(a=t.sent){t.next=8;break}return z(!0),t.abrupt("return");case 8:for(n=0;n<5;n++)c={src:Object.values(a)[n].src,width:Object.values(a)[n].width,height:Object.values(a)[n].height,class:"images",type:Object.values(a)[n].type},e.push(c);E(e),x(e),z(!0),K(!0);case 15:case"end":return t.stop()}}),t)}))),[]);var a=function(){var e=Object(l.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"/videos.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=Object(n.useState)([]),s=Object(r.a)(c,2),i=s[0],o=s[1],d=Object(n.useState)([]),m=Object(r.a)(d,2),h=m[0],x=m[1],f=Object(n.useState)(!1),v=Object(r.a)(f,2),L=v[0],z=v[1],P=Object(n.useState)(!1),V=Object(r.a)(P,2),F=V[0],K=V[1],T=function(){var e=Object(l.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"/images.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}},A=function(){var t=Object(l.a)(j.a.mark((function t(a){var n,c,s,i,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],z(!1),x([]),t.next=5,T();case 5:for(n=t.sent,c=0,s=Object.values(n);c<s.length;c++)(i=s[c]).type===a&&(r={src:i.src,width:i.width,height:i.height,class:"images",type:i.type},e.push(r));x(e),z(!0);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(j.a.mark((function e(n){var c,s,i,r,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!1),t=[],o([]),e.next=5,a();case 5:for(c=e.sent,s=0,i=Object.values(c);s<i.length;s++)(r=i[s]).type===n&&(l={src:r.src,type:r.type},t.push(l));o(t),z(!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("img",{src:"./mainLogo.png",alt:"logo",width:"200px",id:"mainLogo"}),Object(b.jsx)("div",{style:{width:"35%"}}),Object(b.jsxs)(S.a,{children:[Object(b.jsx)("div",{className:"zaMob",children:Object(b.jsx)("div",{className:"navigacija mt-3 ",children:Object(b.jsxs)(C.a,{className:"mt-1",activeKey:"/home",id:"navBre",children:[Object(b.jsx)(C.a.Item,{children:Object(b.jsx)(C.a.Link,{href:"/omeni",className:"`menu` menu2",children:"O Meni"})}),Object(b.jsx)(C.a.Item,{children:Object(b.jsx)(C.a.Link,{href:"/fotografije",className:"menu menu2",children:"Fotografije"})}),Object(b.jsx)(C.a.Item,{children:Object(b.jsx)(C.a.Link,{href:"/video",className:"menu menu2",children:"Video"})}),Object(b.jsx)(C.a.Item,{children:Object(b.jsx)(C.a.Link,{href:"/cenovnik",className:"menu menu2",children:"Cenovnik"})}),Object(b.jsx)(C.a.Item,{children:Object(b.jsx)(C.a.Link,{href:"/kontakt",className:"menu menu2",children:"Kontakt"})}),Object(b.jsx)(C.a.Item,{})]})})}),Object(b.jsxs)(I.c,{children:[Object(b.jsx)(I.a,{path:"/",exact:!0,children:L?Object(b.jsx)(g,{photos:h,loading:L,filterImages:A,filterLoading:F}):Object(b.jsx)(k,{})}),Object(b.jsx)(I.a,{path:"/home",children:L?Object(b.jsx)(g,{photos:h,loading:L,filterImages:A,filterLoading:F}):Object(b.jsx)(k,{})}),Object(b.jsx)(I.a,{path:"/omeni",children:Object(b.jsx)(u,{})}),Object(b.jsx)(I.a,{path:"/kontakt",children:Object(b.jsx)(p,{})}),Object(b.jsxs)(I.a,{path:"/fotografije",children:[Object(b.jsx)(g,{photos:h,loading:L,filterImages:A,filterLoading:F}),!1===L&&Object(b.jsx)(k,{})]}),Object(b.jsx)(I.a,{path:"/cenovnik",children:Object(b.jsx)(w,{})}),Object(b.jsxs)(I.a,{path:"/video",children:[Object(b.jsx)(O,{videos:i,filterVideos:J,loading:L}),!1===L&&Object(b.jsx)(k,{})]})]})]}),Object(b.jsxs)("center",{className:"mb-3 mt-1",children:[" ",Object(b.jsx)(N,{})," "]})]})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,182)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),z()},30:function(e,t,a){},32:function(e,t,a){}},[[177,1,2]]]);
//# sourceMappingURL=main.39e862f2.chunk.js.map