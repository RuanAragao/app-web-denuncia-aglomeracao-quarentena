(this.webpackJsonpcovid_alerts=this.webpackJsonpcovid_alerts||[]).push([[0],{117:function(e,n,t){e.exports=t(133)},122:function(e,n,t){},133:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(10),l=t.n(o),i=(t(122),t(57)),c=t(37),u=t(8),m=t(9),d=t(168),s=t(62),p=t.n(s);function f(){var e=Object(u.a)(['\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-image: url("./images/houses.png");\n  background-repeat: no-repeat;\n  background-size: cover;\n']);return f=function(){return e},e}function b(){var e=Object(u.a)(["\n  width: 80%;\n\n  @media (max-width: 425px) {\n    width: 90%;\n  }\n\n  font-family: Maven Pro;\n  font-weight: 300;\n  font-size: 18px;\n\n  text-align: center;\n  letter-spacing: 2.25px;\n\n  color: #000000;\n"]);return b=function(){return e},e}function g(){var e=Object(u.a)(['\n  font-family: "Maven Pro";\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: 40px;\n\n  color: #ff0000;\n\n  &::before {\n    content: "#FIQUEEMCASA";\n    position: absolute;\n\n    font-size: 40px;\n    color: rgba(255, 0, 0, 0.06);\n    filter: blur(2px);\n\n    top: 15px;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n  }\n']);return g=function(){return e},e}function E(){var e=Object(u.a)(["\n  height: 100vh;\n  width: 100%;\n\n  background: #fff5f5;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n\n  max-width: 500px;\n\n  button {\n    margin-bottom: 50px;\n    background-color: #ef3535;\n\n    &:hover {\n      background-color: #ca3333;\n    }\n  }\n"]);return E=function(){return e},e}function h(){return r.a.createElement(v,null,r.a.createElement(x,null,"#FIQUEEMCASA"),r.a.createElement(w,null,"A OMS (Organiza\xe7\xe3o Mundial de Sa\xfade) declarou que o surto do novo coronav\xedrus constitui uma Emerg\xeancia de Sa\xfade P\xfablica de Import\xe2ncia Internacional."),r.a.createElement(j,null,r.a.createElement("img",{src:"./images/house.png",alt:"Casa"})),r.a.createElement(w,null,"Ajude e denuncie aglomera\xe7\xf5es durante a quarentena devido ao COVID-19."),r.a.createElement(d.a,{onClick:function(){localStorage.setItem("splash_screen",!0),window.location.reload()},color:"primary","aria-label":"add"},r.a.createElement(p.a,null)))}var v=m.b.div(E()),x=m.b.h1(g()),w=m.b.p(b()),j=m.b.div(f()),y=t(39);function O(){var e=Object(u.a)(["\n  color: #ef3535;\n"]);return O=function(){return e},e}function k(){var e=Object(u.a)(['\n  height: 100vh;\n  width: 100vw;\n\n  font-family: "Roboto";\n\n  background: #f8f8f8;\n  background-image: url("./images/nuvem.png");\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: center bottom;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  #fab {\n    position: absolute;\n    right: 30px;\n    bottom: 30px;\n    background-color: #ef3535;\n\n    &:hover {\n      background-color: #ca3333;\n    }\n  }\n']);return k=function(){return e},e}var M=m.b.div(k()),C=m.b.b(O());function S(){var e=Object(u.a)(["\n  display: flex;\n\n  align-items: center;\n  width: 90%;\n"]);return S=function(){return e},e}function F(){var e=Object(u.a)(["\n  background: #ef3535;\n\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n\n  margin-right: 10px;\n  margin-left: -6px;\n"]);return F=function(){return e},e}function z(){var e=Object(u.a)(['\n  width: 85%;\n  color: black;\n\n  font-family: "Roboto";\n  font-weight: 500;\n  font-size: 19px;\n\n  margin-bottom: 0;\n  margin-top: 0;\n\n  letter-spacing: 1.25px;\n']);return z=function(){return e},e}var L=m.b.h2(z()),I=m.b.div(F()),P=m.b.div(S());function A(e){var n=e.children;return r.a.createElement(P,null,r.a.createElement(I,null),r.a.createElement(L,null,n))}function B(){var e=Object(u.a)(["\n  background: #ffffff;\n  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  width: 78%;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  p {\n    margin: 5px;\n    font-size: 15px;\n    font-weight: bold;\n  }\n\n  span {\n    font-weight: normal;\n  }\n"]);return B=function(){return e},e}function R(){var e=Object(u.a)(["\n  color: #c63737;\n  font-size: 12px;\n  margin-right: 7px;\n"]);return R=function(){return e},e}function D(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  margin: 15px 0;\n"]);return D=function(){return e},e}function q(e){var n=e.hora,t=e.endereco,a=e.categoria,o=e.onClick;return r.a.createElement(T,{onClick:o},r.a.createElement(J,null,n),r.a.createElement(H,null,r.a.createElement("div",null,r.a.createElement("p",null,"Endere\xe7o: ",r.a.createElement("span",null,t)),r.a.createElement("p",null,"Categoria: ",r.a.createElement(C,null,a))),r.a.createElement(p.a,null)))}var T=m.b.div(D()),J=m.b.p(R()),H=m.b.div(B()),Q=t(97),U=t.n(Q);function G(){var e=Object(u.a)(["\n  width: 99%;\n"]);return G=function(){return e},e}function _(){var e=Object(u.a)(["\n  width: 90%;\n  display: flex;\n"]);return _=function(){return e},e}function W(){var e=Object(c.f)();return r.a.createElement(M,null,r.a.createElement(y.a,{title:"Den\xfancias"}),r.a.createElement(A,null,"HOJE"),r.a.createElement(N,null,r.a.createElement("hr",null),r.a.createElement(V,null,r.a.createElement(q,{hora:"12:43 PM",endereco:"Rua dos Bobos - 789",categoria:"Festa",onClick:function(){return n="/denuncia/1478",void e.push(n);var n}}),r.a.createElement(q,{hora:"12:43 PM",endereco:"Rua dos Bobos - 789",categoria:"Festa"}))),r.a.createElement(A,null,"ONTEM"),r.a.createElement(N,null,r.a.createElement("hr",null),r.a.createElement(V,null,r.a.createElement(q,{hora:"12:43 PM",endereco:"Rua dos Bobos - 789",categoria:"Festa"}),r.a.createElement(q,{hora:"12:43 PM",endereco:"Rua dos Bobos - 789",categoria:"Festa"}))),r.a.createElement(d.a,{onClick:function(){setTimeout((function(){e.push("/denunciar")}),500)},id:"fab",color:"primary","aria-label":"add"},r.a.createElement(U.a,null)))}var N=m.b.div(_()),V=m.b.div(G()),Y=t(47),Z=t(177),K=t(174),$=t(134),X=t(175),ee=t(15),ne=t(176),te=t(99),ae=t(101),re=t(98),oe=t.n(re);function le(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 40px;\n\n  .MuiIconButton-colorPrimary {\n    color: #ef3535 !important;\n  }\n"]);return le=function(){return e},e}function ie(){var e=Object(u.a)(["\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .MuiFormControl-root.MuiTextField-root {\n    width: 300px;\n    margin-bottom: 20px;\n  }\n\n  button {\n    background-color: #ef3535 !important;\n    color: white;\n  }\n"]);return ie=function(){return e},e}function ce(){var e=Object(a.useState)(""),n=Object(Y.a)(e,2),t=n[0],o=n[1],l=Object(a.useState)(Date.now()),i=Object(Y.a)(l,2),c=i[0],u=i[1];return r.a.createElement(M,null,r.a.createElement(y.a,{title:"Fazer den\xfancia"}),r.a.createElement(ue,null,r.a.createElement(Z.a,{label:"T\xedtulo (opcional)",variant:"outlined"}),r.a.createElement(Z.a,{label:"Descri\xe7\xe3o (opcional)",variant:"outlined"}),r.a.createElement(Z.a,{id:"outlined-basic",label:"Endere\xe7o",variant:"outlined"}),r.a.createElement(Z.a,{select:!0,label:"Categoria",value:t,onChange:function(e){o(e.target.value)},variant:"outlined"},[{value:"Fe",label:"Festa"},{value:"Fi",label:"Fila"}].map((function(e){return r.a.createElement(K.a,{key:e.value,value:e.value},e.label)}))),r.a.createElement(ee.a,{utils:te.a,locale:ae.a},r.a.createElement(ne.a,{inputVariant:"outlined",label:"Data e hora",value:c,onChange:function(e){u(e)},format:"dd/MM/yyyy HH:mm"})),r.a.createElement(me,null,r.a.createElement($.a,{color:"primary","aria-label":"upload picture",component:"span"},r.a.createElement(oe.a,{fontSize:"large"}))),r.a.createElement(X.a,{variant:"contained"},"Adicionar den\xfancia")))}var ue=m.b.div(ie()),me=m.b.div(le()),de=t(100);function se(){var e=Object(de.a)({accessToken:"pk.eyJ1Ijoic2FtcGFpb2xlYWwiLCJhIjoiY2s5MHd1OGExMDZmczNvbzA2M21hd29rdCJ9.jZSRPriLbSGoyF5kP7UG4Q"});return r.a.createElement(e,{style:"mapbox://styles/sampaioleal/ck3to6z8w006c1cpgtxme2z23",containerStyle:{height:250,width:"90%",borderRadius:15,marginTop:10,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}})}function pe(){var e=Object(u.a)(["\n  width: 95%;\n  margin-top: 20px;\n\n  p {\n    font-weight: bold;\n    margin: 5px 0;\n  }\n\n  span {\n    font-weight: normal;\n  }\n"]);return pe=function(){return e},e}function fe(){var e=Object(u.a)(["\n      background-image: url(",");\n    "]);return fe=function(){return e},e}function be(){var e=Object(u.a)(["\n  height: 78px;\n  width: 78px;\n  border-radius: 50%;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  ","\n"]);return be=function(){return e},e}function ge(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 40px;\n"]);return ge=function(){return e},e}function Ee(){var e=Object(u.a)(["\n  width: 90%;\n  font-size: 20px;\n  color: #3e3e3e;\n"]);return Ee=function(){return e},e}function he(){var e=Object(c.g)().id;return r.a.createElement(M,null,r.a.createElement(y.a,{title:"Den\xfancia #"+e}),r.a.createElement("h1",null,"T\xedtulo | Sem t\xedtulo"),r.a.createElement(ve,null,"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"),r.a.createElement(xe,null,r.a.createElement(we,{src:"/app-web-denuncia-aglomeracao-quarentena/favicon.ico"}),r.a.createElement(we,{src:"/app-web-denuncia-aglomeracao-quarentena/logo192.png"}),r.a.createElement(we,{src:"/app-web-denuncia-aglomeracao-quarentena/logo192.png"})),r.a.createElement(je,null,r.a.createElement("p",null,"Endere\xe7o: ",r.a.createElement("span",null,"Rua do Bobo - 789")),r.a.createElement("p",null,"Categoria: ",r.a.createElement(C,null,"Festa")),r.a.createElement("p",null,"Hor\xe1rio: ",r.a.createElement("span",null,"12:43 - 15/04/2020"))),r.a.createElement(se,null))}var ve=m.b.p(Ee()),xe=m.b.div(ge()),we=m.b.div(be(),(function(e){return e.src&&Object(m.a)(fe(),e.src)})),je=m.b.div(pe());function ye(){var e=Object(u.a)(["\n  width: 90%;\n"]);return ye=function(){return e},e}function Oe(){return r.a.createElement(M,null,r.a.createElement(y.a,{title:"Sobre"}),r.a.createElement(A,null,"Sobre o app"),r.a.createElement(ke,null,"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"),r.a.createElement(A,null,"Quem somos"),r.a.createElement(ke,null,"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"),r.a.createElement(A,null,"Contribuidores"),r.a.createElement(ke,null,"Ana Paula Mendes - Idealizadora",r.a.createElement("br",null),"Sampaio Leal - Front/UI",r.a.createElement("br",null),"Max Lima - Mobile/Back"))}var ke=m.b.p(ye());var Me=function(){var e=localStorage.getItem("splash_screen");return r.a.createElement(i.a,{basename:"/app-web-denuncia-aglomeracao-quarentena"},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/"},e?r.a.createElement(W,null):r.a.createElement(h,null)),r.a.createElement(c.a,{exact:!0,path:"/denunciar"},r.a.createElement(ce,null)),r.a.createElement(c.a,{exact:!0,path:"/denuncia/:id"},r.a.createElement(he,null)),r.a.createElement(c.a,{exact:!0,path:"/sobre"},r.a.createElement(Oe,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return O}));var a=t(8),r=t(47),o=t(0),l=t.n(o),i=t(134),c=t(137),u=t(136),m=t(78),d=t(102),s=t(103),p=t(94),f=t.n(p),b=t(9),g=t(95),E=t.n(g),h=t(96),v=t.n(h),x=t(37);function w(){var e=Object(a.a)(['\n  font-family: "Maven Pro";\n  position: absolute;\n\n  font-size: 40px;\n  color: rgba(255, 0, 0, 0.06);\n  filter: blur(2px);\n\n  top: 0;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n']);return w=function(){return e},e}function j(){var e=Object(a.a)(["\n  margin: 0 18%;\n  align-self: center;\n  justify-self: center;\n"]);return j=function(){return e},e}function y(){var e=Object(a.a)(['\n  width: 100%;\n  background-color: #ef3535;\n  display: flex;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  margin-bottom: 20px;\n\n  h3 {\n    color: white;\n    font-family: "Roboto";\n    font-weight: normal;\n  }\n\n  button {\n    margin-left: 5px;\n    color: white;\n  }\n']);return y=function(){return e},e}function O(n){var t=n.title,a=Object(o.useState)(!1),p=Object(r.a)(a,2),b=p[0],g=p[1],h=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),w=Object(x.f)();function j(){g(!b)}function y(e){w.push(e)}return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null,l.a.createElement(i.a,{onClick:j,edge:"start",color:"primary","aria-label":"menu"},l.a.createElement(f.a,null)),l.a.createElement("h3",null,t)),l.a.createElement(c.a,{disableBackdropTransition:!h,disableDiscovery:h,anchor:"left",open:b,onClose:j,onOpen:j},l.a.createElement("div",{style:{width:300},role:"presentation",onClick:j,onKeyDown:j},l.a.createElement(u.a,null,l.a.createElement(M,{src:"/app-web-denuncia-aglomeracao-quarentena/logo192.png",alt:"Fique em casa"}),l.a.createElement(C,null,"#FIQUEEMCASA"),l.a.createElement(m.a,{button:!0,onClick:function(){return y("/")}},l.a.createElement(d.a,null,l.a.createElement(E.a,null)),l.a.createElement(s.a,{primary:"In\xedcio"})),l.a.createElement(m.a,{button:!0,onClick:function(){return y("/sobre")}},l.a.createElement(d.a,null,l.a.createElement(v.a,null)),l.a.createElement(s.a,{primary:"Sobre"}))))))}var k=b.b.div(y()),M=b.b.img(j()),C=b.b.h1(w())}).call(this,t(86))}},[[117,1,2]]]);
//# sourceMappingURL=main.e17572f7.chunk.js.map