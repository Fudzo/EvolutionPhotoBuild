(this.webpackJsonpevolutionphoto=this.webpackJsonpevolutionphoto||[]).push([[0],{161:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(10),r=a.n(s),i=(a(91),a(8)),o=a.n(i),j=a(17),l=a(5),u=(a(20),a(21),a(24),a(11)),d=a(2);var b=function(e){var t=Object(u.useSpring)({from:{opacity:0,transform:"scale(0.5)"},to:{opacity:1,transform:"scale(1)"},config:{duration:1e3,precision:.05,clamp:!0}});return Object(d.jsxs)(u.animated.div,{className:"omeni",style:t,children:[Object(d.jsx)("img",{src:"/icons/instagram.png",alt:"instagram",width:"16px",className:"socialIcons"}),Object(d.jsx)("img",{src:"./icons/instagram.png",alt:"instagram",width:"16px",className:"socialIcons"}),Object(d.jsx)("h2",{className:"mt-5",children:"Nikola Furundzic"}),Object(d.jsx)("h5",{children:"Fotograf / Videograf "}),Object(d.jsx)("img",{src:"./icons/profilna.jpg",className:"profilna mt-5",alt:"profilna"}),Object(d.jsxs)("div",{className:"mt-5 omeni-text",children:[Object(d.jsx)("span",{children:"Nikola je fotograf/videograf iz Kraljeva, sa preko 10 godina iskustva na tim poljima. "}),Object(d.jsx)("span",{children:"Uza specijalnost su mu fotografisanje proizvoda kao i izrada korporativnih video snimaka. "}),Object(d.jsx)("span",{children:"Pored toga bavi se i fotografisanjem vencanja, rodjendana kao i svih vrsta proslava. "})]}),Object(d.jsx)("span",{children:"\xa0"}),Object(d.jsx)("span",{style:{fontWeight:"bold"},children:" Saradnje:   "}),Object(d.jsxs)("div",{style:{flexDirection:"column"},className:"slike",children:[Object(d.jsx)("img",{src:"./firme/pekom.png",className:"mt-5 mx-2 slike-saradnja",alt:"pekom"}),Object(d.jsx)("img",{src:"./firme/banim.png",className:"mt-5 mx-2 slike-saradnja",alt:"banim"}),Object(d.jsx)("img",{src:"./firme/interpak.png",className:"mt-5 mx-2 slike-saradnja",alt:"interpak"}),Object(d.jsx)("img",{src:"./firme/krsenkovic.jpg",className:"mt-5 mx-2 slike-saradnja",alt:"krsenkovic"}),Object(d.jsx)("img",{src:"./firme/gruzanska.jpg",className:"mt-5 mx-2 slike-saradnja gruzanska",alt:"gruzanska"}),Object(d.jsx)("img",{src:"./firme/aloba.jpg",className:"mt-5 mx-2 slike-saradnja",alt:"aloba"})]})]})},m=a(6),p=a(81),h=a(55);var O=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(l.a)(s,2),i=r[0],o=r[1],j=Object(n.useState)(""),b=Object(l.a)(j,2),O=b[0],f=b[1],x=Object(n.useState)(""),g=Object(l.a)(x,2),v=g[0],k=g[1],N=Object(n.useState)(""),y=Object(l.a)(N,2),w=y[0],S=y[1],C=Object(n.useState)(!1),I=Object(l.a)(C,2),F=I[0],P=I[1],V=Object(n.useState)(),z=Object(l.a)(V,2),L=z[0],E=z[1],K=Object(u.useSpring)({from:{opacity:0,transform:"scale(0.5)"},to:{opacity:1,transform:"scale(1)"},config:{duration:1e3,precision:.05,clamp:!0}});return Object(d.jsxs)(u.animated.div,{className:"kontakt mx-4",style:K,children:[Object(d.jsxs)(h.a,{show:F,variant:"danger",children:[L?null:Object(d.jsx)(h.a.Heading,{children:"Poruka poslata"}),Object(d.jsx)("p",{children:L||"Vasa poruka je uspesno poslata, ocekujte odgovor u sto kracem roku na ".concat(v)})]}),Object(d.jsx)("span",{className:"mt-2",children:"\xa0"}),Object(d.jsx)("span",{children:"Ukoliko imate bilo kakvih pitanja mozete me kontaktirati: "}),Object(d.jsx)("span",{children:"\xa0"}),Object(d.jsx)("span",{style:{color:"red"},children:"evolutionphotokv@gmail.com "}),Object(d.jsx)("span",{style:{color:"red"},children:"Telefon: 060/375-0-661"}),Object(d.jsx)("span",{children:"\xa0"}),Object(d.jsx)("span",{children:"Ili putem kontakt forme"}),Object(d.jsx)("span",{children:"\xa0"}),Object(d.jsxs)("div",{className:"kontaktForma",children:[Object(d.jsx)("input",{className:"form-control kontaktIme no-border",value:a,type:"text",id:"textIme",placeholder:"Ime",onChange:function(e){return c(e.target.value)}}),Object(d.jsx)("span",{children:"\xa0"}),Object(d.jsx)("input",{className:"form-control kontaktIme no-border",value:O,type:"email",id:"textEmail",placeholder:"Email",onChange:function(e){return f(e.target.value)}}),Object(d.jsx)("span",{children:"\xa0"}),Object(d.jsx)("textarea",{className:"form-control no-border",id:"textPoruka",rows:"5",value:i,placeholder:"Vasa poruka",onChange:function(e){return o(e.target.value)}}),Object(d.jsx)("span",{children:"\xa0"}),Object(d.jsx)("button",{type:"button",class:"btn btn-danger mt-3 no-border",onClick:function(e){if(""===a||""===O||""===i)return E("Sva polja moraju biti popunjena!"),void P(!0);E(),fetch("/api/sendEmail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ime:a,email:O,poruka:i})}),P(!0),k(O),c(""),o(""),f("")},children:"Posalji"})]}),Object(d.jsx)(p.a,{sitekey:"6Lde484cAAAAAB0cQLFteDPLYY2wAcan1K1fJHFJ",onChange:function(e){S((function(t){return Object(m.a)(Object(m.a)({},t),{},{token:e})})),console.log(w)},onExpire:function(){S((function(e){return Object(m.a)(Object(m.a)({},e),{},{token:null})}))}})]})};var f=function(e){var t=Object(u.useSpring)({opacity:e.loading?1:0,transform:e.loading?"scale(1)":"scale(0.5)",config:{duration:1e3,precision:.05,clamp:!0}});return Object(d.jsxs)("div",{children:[Object(d.jsxs)(u.animated.div,{style:t,className:"mt-2 galerija",onClick:function(t){return function(t){t&&e.filterVideos(t)}(t.target.id)},children:[Object(d.jsx)("a",{href:"#",className:"menu menuVideo",children:Object(d.jsx)("div",{id:"christening",children:"Krstenja\xa0\xa0"})}),Object(d.jsx)("a",{href:"#",className:"menu menuVideo",children:Object(d.jsx)("div",{id:"creative",children:"Kreativni\xa0\xa0"})}),Object(d.jsx)("a",{href:"#",className:"menu menuVideo",children:Object(d.jsx)("div",{id:"corporative",children:"Korporativni\xa0\xa0"})}),Object(d.jsx)("a",{href:"#",className:"menu menuVideo",children:Object(d.jsx)("div",{id:"birthday",children:"Rodjendani\xa0\xa0"})})]}),Object(d.jsx)(u.animated.div,{className:"mt-5",style:t,children:Object.values(e.videos).map((function(e,t){return Object(d.jsx)("div",{className:"m-1 videos",children:Object(d.jsx)("iframe",{width:"325",height:"200",src:"https://www.youtube.com/embed/"+e.src,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})},t+=1)}))})]})},x=a(79),g=a(43);var v=function(e){var t=Object(n.useState)(0),a=Object(l.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(!1),i=Object(l.a)(r,2),o=i[0],j=i[1],b=Object(u.useSpring)({opacity:e.loading?1:0,transform:e.loading?"scale(1)":"scale(0.5)",config:{duration:1e3,precision:.05,clamp:!0}}),p=Object(n.useCallback)((function(e,t){t.photo;var a=t.index;s(a),j(!0)}),[]);return Object(d.jsxs)("div",{className:"mt-5",children:[!0===e.filterLoading&&Object(d.jsxs)(u.animated.div,{style:b,className:"mt-2 galerija",onClick:function(t){return function(t){t&&e.filterImages(t)}(t.target.id)},children:[Object(d.jsx)("a",{href:"#",className:"menu",children:Object(d.jsx)("div",{id:"wedding",children:"Vencanja\xa0\xa0"})}),Object(d.jsx)("a",{href:"#",className:"menu",children:Object(d.jsx)("div",{id:"christening",children:"Krstenja\xa0\xa0"})}),Object(d.jsx)("a",{href:"#",className:"menu",children:Object(d.jsx)("div",{id:"birthday",children:"Punoletstva\xa0\xa0"})}),Object(d.jsx)("a",{href:"#",className:"menu",children:Object(d.jsx)("div",{id:"products",children:"Produkti"})})]}),!0===e.loading&&Object(d.jsxs)(u.animated.div,{style:b,children:[Object(d.jsx)("span",{className:"mt-2",children:"\xa0"}),Object(d.jsx)(x.a,{photos:e.photos,onClick:p}),Object(d.jsx)(g.b,{children:o?Object(d.jsx)(g.a,{onClose:function(){s(0),j(!1)},children:Object(d.jsx)(g.c,{currentIndex:c,views:e.photos.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{srcset:e.srcSet,caption:e.title})}))})}):null}),Object(d.jsx)("span",{className:"mb-2",children:"\xa0"})]})]})};var k=function(e){return Object(d.jsxs)("div",{className:"row ",onClick:function(t){return e.promeniMeni(t.target.id)},children:[Object(d.jsx)("div",{className:"col-2",children:Object(d.jsx)("img",{src:"./mainLogo.png",alt:"logo",width:"200px"})}),Object(d.jsx)("div",{className:"col-5"}),Object(d.jsxs)("div",{className:"col-5 pt-4",children:[Object(d.jsx)("a",{className:"menu",id:"omeni",href:"#",children:"\xa0O Meni \xa0 \xa0 \xa0"}),Object(d.jsx)("a",{className:"menu",id:"vencanja",href:"#",children:"Fotografije \xa0 \xa0 \xa0"}),Object(d.jsx)("a",{className:"menu",id:"video",href:"#",children:"Video \xa0 \xa0 \xa0 \xa0"}),Object(d.jsx)("a",{className:"menu",id:"kontakt",href:"#",children:"Kontakt \xa0 \xa0 \xa0"}),Object(d.jsx)("span",{children:" \xa0 \xa0\xa0 \xa0\xa0\xa0"})," ",Object(d.jsx)("a",{href:"https://instagram.com/fotofuki",target:"_blank",children:Object(d.jsx)("img",{src:"./icons/instagram.png",alt:"instagram",width:"16px",className:"socialIcons"})})," ",Object(d.jsx)("span",{children:" \xa0\xa0"}),Object(d.jsx)("a",{href:"https://facebook.com/fotofuki",target:"_blank",children:Object(d.jsx)("img",{src:"./icons/facebook.png",alt:"facebook",width:"10px",className:"socialIcons"})}),"  ",Object(d.jsx)("span",{children:" \xa0\xa0"}),Object(d.jsx)("a",{href:"https://youtube.com",target:"_blank",children:Object(d.jsx)("img",{src:"./icons/youtube.png",alt:"youtube",width:"20px",className:"socialIcons"})})]})]})};var N=function(){return Object(d.jsx)("div",{className:"za-fade-out",children:Object(d.jsx)("img",{src:"./icons/loading.gif",alt:"loading",className:"loading",width:"100"})})};var y=function(e){var t=Object(n.useState)(new Date),a=Object(l.a)(t,2),c=a[0];return a[1],Object(d.jsx)("div",{className:"footer mt-5",children:Object(d.jsxs)("span",{children:["EvolutionPhoto \xa9 ",c.getFullYear()]})})},w="https://evotest-df440-default-rtdb.europe-west1.firebasedatabase.app/";var S=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!0),r=Object(l.a)(s,2),i=r[0],u=r[1],m=Object(n.useState)(!1),p=Object(l.a)(m,2),h=p[0],x=p[1],g=Object(n.useState)(!1),S=Object(l.a)(g,2),C=S[0],I=S[1],F=[],P=[],V=function(){var e=Object(j.a)(o.a.mark((function e(t){var a,n,s,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if("omeni"!==t){e.next=9;break}c(!0),u(!1),x(!1),I(!1),e.next=33;break;case 9:if("vencanja"!==t){e.next=16;break}c(!1),u(!0),x(!1),I(!1),e.next=33;break;case 16:if("video"!==t){e.next=32;break}return A([]),e.next=20,z();case 20:if(a=e.sent){e.next=23;break}return e.abrupt("return");case 23:for(n=0,s=Object.values(a);n<s.length;n++)r=s[n],i={src:r.src,type:r.type},P.push(i);A(P),c(!1),u(!1),x(!1),I(!0),e.next=33;break;case 32:"kontakt"===t&&(c(!1),u(!1),x(!0),I(!1));case 33:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(j.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"/videos.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=Object(n.useState)([]),E=Object(l.a)(L,2),K=E[0],A=E[1],M=Object(n.useState)([]),T=Object(l.a)(M,2),J=T[0],D=T[1],Y=Object(n.useState)(!1),B=Object(l.a)(Y,2),_=B[0],H=B[1],U=Object(n.useState)(!1),Q=Object(l.a)(U,2),R=Q[0],W=Q[1],q=function(){var e=Object(j.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"/images.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(Object(j.a)(o.a.mark((function e(){var t,a,n,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F=[],H(!1),e.next=4,q();case 4:if(t=e.sent){e.next=8;break}return H(!0),e.abrupt("return");case 8:for(a=0,n=Object.values(t);a<n.length;a++)c=n[a],s={src:c.src,width:c.width,height:c.height,class:"images",type:c.type},F.push(s);G(F),D(F),H(!0),W(!0);case 15:case"end":return e.stop()}}),e)}))),[]);var G=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}},X=function(){var e=Object(j.a)(o.a.mark((function e(t){var a,n,c,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F=[],H(!1),D([]),e.next=5,q();case 5:for(a=e.sent,n=0,c=Object.values(a);n<c.length;n++)(s=c[n]).type===t&&(r={src:s.src,width:s.width,height:s.height,class:"images",type:s.type},F.push(r));D(F),H(!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(j.a)(o.a.mark((function e(t){var a,n,c,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H(!1),P=[],A([]),e.next=5,z();case 5:for(a=e.sent,n=0,c=Object.values(a);n<c.length;n++)(s=c[n]).type===t&&(r={src:s.src,type:s.type},P.push(r));A(P),H(!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=Object(n.useState)(""),ee=Object(l.a)($,2);return ee[0],ee[1],Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(k,{promeniMeni:V}),!0===a&&Object(d.jsx)(b,{}),!0===h&&Object(d.jsx)(O,{}),!0===C&&Object(d.jsx)(f,{videos:K,filterVideos:Z,loading:_}),!0===i&&Object(d.jsx)(v,{photos:J,loading:_,filterImages:X,filterLoading:R}),!1===_&&Object(d.jsx)(N,{}),Object(d.jsxs)("center",{className:"mb-3 mt-1",children:[" ",Object(d.jsx)(y,{})," "]})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,165)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),C()},21:function(e,t,a){},24:function(e,t,a){},91:function(e,t,a){}},[[161,1,2]]]);
//# sourceMappingURL=main.2e404d51.chunk.js.map