(this["webpackJsonprecipes-by-ingredients"]=this["webpackJsonprecipes-by-ingredients"]||[]).push([[0],{39:function(n,t,e){},63:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),c=e.n(i),o=e(8),a=e.n(o),u=(e(39),e(2)),d=e(4),s=e(3);function l(){var n=Object(u.a)(["\n  list-style: none;\n"]);return l=function(){return n},n}var b=s.a.ul(l());function f(){var n=Object(u.a)(["\n  font-family: 'Caveat', cursive;;\n  text-align: center;\n"]);return f=function(){return n},n}var j=s.a.h1(f());function p(){var n=Object(u.a)(["\n  grid-area: Inventory;\n  border: 1px solid black;\n  overflow: auto;\n  font-family: 'Caveat', cursive;;\n  background-color: rgb(29, 31, 39);\n  color: white;\n  text-align: center;\n"]);return p=function(){return n},n}var h=s.a.div(p());var v=function(){var n=Object(d.c)((function(n){return n.inventory})).map((function(n,t){return Object(r.jsxs)("li",{children:[Object(r.jsxs)("b",{children:[n.ingredient,":"]})," ",n.amount]},t)}));return Object(r.jsxs)(h,{children:[Object(r.jsx)(j,{children:"Available ingredients:"}),Object(r.jsx)(b,{children:n})]})},g="LIST_INVENTORY",x="LIST_SHOPPING_LIST",O="ADD_ITEMS",m="REMOVE_ITEMS",w="ADD_COOKED",y=function(n,t){return{type:O,items:n,name:t}},k=function(n,t){return{type:m,items:n,name:t}},S=e(6);function I(){var n=Object(u.a)(["\n  border-radius: 3px;\n  border: 2px none red;\n  padding: 10px 15px;\n  background-color: rgb(255, 122, 122);\n  color: white;\n  font-weight: bold;\n  font-size: 0.7rem;\n  display: ",";\n  width: ",";\n  outline: none;\n  &:hover {\n    background-color: rgb(255, 100, 100);\n  }\n  &:active {\n    background-color: rgb(255, 50, 50);\n  }\n  &:disabled {\n    background-color: rgb(100, 50, 50);\n    color: rgb(200, 200, 200);\n  }\n"]);return I=function(){return n},n}var C=s.a.button(I(),(function(n){return n.inline?"inline-block":"block"}),(function(n){return n.size?n.size:"100%"}));function E(){var n=Object(u.a)(["\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  outline: 0;\n  padding: 5px 5px;\n  @media (min-width: 300px) {\n    width: 100%;\n  }\n  @media (min-width: 768px) {\n    width: ",";\n  }\n"]);return E=function(){return n},n}var L=s.a.input(E(),(function(n){return n.size?n.size:"auto"}));function z(){var n=Object(u.a)(["\n  border: 1px solid #999;\n  border-top-width: 0;\n  list-style: none;\n  margin-top: 35px;\n  max-height: 130px;\n  overflow-y: auto;\n  padding-left: 0;\n  width: 300px;\n  position: absolute;\n  top: 0px;\n  background: #f3f3f3;\n"]);return z=function(){return n},n}var T=s.a.ul(z());function P(){var n=Object(u.a)(['\n  display: block;\n  font-family: "Segoe UI";\n  &:hover {\n    background-color: rgba(255, 0, 0, 50%);\n  }\n']);return P=function(){return n},n}var _=s.a.li(P()),D=e(16),M=e.n(D),R=e(31),N=e(32),A=e.n(N),G="https://mymockapi.herokuapp.com/";function B(){return(B=Object(R.a)(M.a.mark((function n(t){return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",A.a.get(G+t).then((function(n){return n.data})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var J=function(n){return B.apply(this,arguments)};var K=function(n){var t=n.entity,e=n.input,c=n.setInput,o=Object(i.useState)([]),a=Object(S.a)(o,2),u=a[0],d=a[1],s=Object(i.useState)([]),l=Object(S.a)(s,2),b=l[0],f=l[1],j=Object(i.useState)(!1),p=Object(S.a)(j,2),h=p[0],v=p[1];return Object(i.useEffect)((function(){0===u.length&&J(t).then((function(n){return d(n.map((function(n){return n.name})))})),v(!!e),f(u.filter((function(n){return n.toLowerCase().includes(e.toLowerCase())})))}),[e]),h?Object(r.jsx)(T,{children:b.map((function(n){return Object(r.jsx)(_,{onClick:function(n){return t=n.currentTarget.innerText,v(!1),void c(t);var t},children:n},n)}))}):null};function V(){var n=Object(u.a)(["\n  display: flex;\n  @media (min-width: 300px) {\n    flex-direction: column;\n  }\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"]);return V=function(){return n},n}var Y=s.a.div(V());function F(){var n=Object(u.a)(["\n  position: relative;\n"]);return F=function(){return n},n}var H=Object(s.a)(Y)(F());var U=function(n){var t=Object(i.useState)(""),e=Object(S.a)(t,2),c=e[0],o=e[1],a=Object(i.useState)(1),u=Object(S.a)(a,2),s=u[0],l=u[1],b=Object(d.b)();return Object(r.jsxs)(H,{children:[Object(r.jsx)(L,{type:"text",size:"60%",value:c,placeholder:"Search for an ingredient...",onChange:function(n){return o(n.currentTarget.value)}}),Object(r.jsx)(K,{entity:"ingredients",input:c,setInput:o}),Object(r.jsx)(L,{type:"number",min:"0",size:"20%",value:s,onChange:function(n){return l(n.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)(C,{size:"20%",onClick:function(){c&&b(y([{ingredient:c,amount:parseInt(s)}],x))},children:"+"})]})};function W(){var n=Object(u.a)(["\n  font-size: 1.6rem;\n"]);return W=function(){return n},n}var q=s.a.span(W());function Q(){var n=Object(u.a)(["\n  position: fixed;\n  height: 100%;\n  width: 5px;\n  border-left: 1px solid rgba(255, 0, 0, 50%);\n  border-right: 1px solid rgba(255, 0, 0, 50%);\n  margin-left: -20px;\n"]);return Q=function(){return n},n}function X(){var n=Object(u.a)(["\n  grid-area: ShoppingList;\n  border: 1px solid black;\n  overflow: auto;\n  background-color: #f5f5f5;\n  background: linear-gradient(to bottom, #f5f5f5 95%, rgba(0, 0, 0, 40%) 5%);\n  background-size: 100% 30px;\n  padding: 0 20px 0 40px;\n  font-family: 'Caveat', cursive;;\n  line-height: 30px;\n  position: relative;\n"]);return X=function(){return n},n}var Z=s.a.div(X()),$=s.a.div(Q());var nn=function(n){var t=Object(d.c)((function(n){return n.shoppingList})),e=Object(d.b)();return Object(r.jsxs)(Z,{children:[Object(r.jsx)($,{}),Object(r.jsx)(j,{children:"Shopping List"}),Object(r.jsx)(U,{}),Object(r.jsx)(q,{children:t.length?"We need:":"Nothing to buy!"}),Object(r.jsx)(b,{children:t.map((function(n,t){return Object(r.jsxs)("li",{children:[n.amount," ",n.ingredient]},t)}))}),Object(r.jsx)(C,{size:"100%",onClick:function(){e(y(t,g)),e(k(t,x))},children:"Buy!"})]})},tn=e(7);function en(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin: ",";\n  @media\n    (min-width: 300px) {\n    flex-direction: column;\n    align-items: strech;\n  }\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n  }\n"]);return en=function(){return n},n}var rn=s.a.div(en(),(function(n){return n.noMargins?"0px":"5px"}));function cn(){var n=Object(u.a)(["\n  text-align: center;\n  font-size: 1rem;\n  margin: .5rem;\n"]);return cn=function(){return n},n}var on=s.a.h6(cn());function an(){var n=Object(u.a)(["\n  padding: 10px 30px;\n  text-align: justify;\n"]);return an=function(){return n},n}var un=s.a.p(an());function dn(n){var t={};return n.forEach((function(n){return t[n.ingredient]=n.amount})),t}function sn(n){var t=[];for(var e in n)t.push({ingredient:e,amount:n[e]});return t}function ln(n,t){var e=dn(n),r=dn(t);for(var i in e)r[i]||(r[i]=0),r[i]-=e[i],0===r[i]&&delete r[i];return sn(r)}function bn(n,t){var e=dn(n),r=dn(t);for(var i in e)r[i]||(r[i]=0),r[i]+=Math.ceil(e[i]);return sn(r)}function fn(n,t){return ln(n,t).filter((function(n){return n.amount<0})).map((function(n){return{ingredient:n.ingredient,amount:Math.abs(n.amount)}}))}var jn="RECIPE_COOK",pn="ADD_MISSING_INGREDIENTS";var hn=function(n){var t=n.ingredients,e=n.title,i=Object(d.c)((function(n){return n.inventory})),c=Object(d.b)(),o=fn(t,i),a=o.length?pn:jn;return Object(r.jsx)(C,{onClick:function(n){n.stopPropagation(),a===jn&&(c(k(t,g)),c(function(n){return{type:w,title:n}}(e))),a===pn&&c(y(o,x))},children:a===jn?"Cook!":"Add missing ingredients to sohpping list"})};function vn(){var n=Object(u.a)(["\n  font-weight: bold;\n  font-size: 0.8rem;\n"]);return vn=function(){return n},n}var gn=s.a.span(vn());var xn=function(n){var t=Object(d.c)((function(n){return n.inventory})),e=function(n){var e=dn(t);return e[n.ingredient]?e[n.ingredient]-n.amount:-1*n.amount},i=function(n){var t=!!function(n,t){return!!dn(t)[n.ingredient]}(n,c)?Object(r.jsxs)(gn,{children:["(You are missing"," ".concat(Math.abs(e(n)).toString()," ").concat(n.ingredient),")"]}):null;return Object(r.jsxs)("li",{children:[n.amount," ",n.ingredient," ",t]},n.ingredient)},c=fn(n.ingredients,t);return Object(r.jsx)(b,{children:n.ingredients.map((function(n){return i(n)}))})};function On(){var n=Object(u.a)(["\n  max-height: 50vh;\n  overflow: auto;\n"]);return On=function(){return n},n}function mn(){var n=Object(u.a)(["\n  height: 50vh;\n  background-image: url(",");\n  background-size: cover;\n  margin-right: 25px;\n  @media (min-width: 300px) {\n    width: 100%;\n  }\n  @media (min-width: 768px) {\n    width: 50%;\n  }\n"]);return mn=function(){return n},n}function wn(){var n=Object(u.a)(["\n  visibility: ",";\n  transition: 0.2s ease;\n  width: 70%;\n  height: 70%;\n  border: 2px solid rgb(255, 122, 122);\n  margin: auto;\n  background-color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: column;\n"]);return wn=function(){return n},n}var yn=s.a.div(wn(),(function(n){return n.show?"initial":"none"})),kn=s.a.div(mn(),(function(n){return"../../pics/".concat(n.img)})),Sn=s.a.div(On());var In=function(n){return Object(r.jsxs)(yn,{children:[Object(r.jsx)(j,{children:n.title}),Object(r.jsxs)(Sn,{children:[Object(r.jsxs)(Y,{children:[Object(r.jsx)(kn,{img:n.picture}),Object(r.jsx)(on,{children:"Ingredients:"}),Object(r.jsx)(xn,Object(tn.a)({},n))]}),Object(r.jsx)(on,{children:"Instructions:"}),Object(r.jsx)(un,{children:n.desc})]}),Object(r.jsxs)(rn,{inline:!0,style:{margin:"0px"},children:[Object(r.jsx)(C,{onClick:function(t){t.stopPropagation(),n.setPreview(!1)},children:"Close"}),Object(r.jsx)(hn,Object(tn.a)({},n))]})]})};var Cn=function(n){var t=n.children,e=document.createElement("div"),r=document.getElementById("modal-root");return Object(i.useEffect)((function(){return r.appendChild(e),function(){r.removeChild(e)}})),a.a.createPortal(t,e)};function En(){var n=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgb(255, 122, 122);\n  color: white;\n  display: inline-block;\n"]);return En=function(){return n},n}var Ln=s.a.div(En());function zn(){var n=Object(u.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  opacity: 0;\n  transition: 0.5s ease;\n  &:hover {\n    opacity: 1;\n  }\n"]);return zn=function(){return n},n}function Tn(){var n=Object(u.a)(["\n  width: 150px;\n  height: 150px;\n  border: 1px solid black;\n  background-image: url(",");\n  background-size: cover;\n  cursor: pointer;\n  position: relative;\n  color: white;\n"]);return Tn=function(){return n},n}var Pn=s.a.div(Tn(),(function(n){return"../../pics/".concat(n.thumb)})),_n=s.a.div(zn());var Dn=function(n){var t=n.title,e=n.thumb,i=n.cooked,c=n.setPreview,o=i?Object(r.jsx)(Ln,{children:"Cooked!"}):null;return Object(r.jsxs)(Pn,{thumb:e,onClick:function(){return c(!0)},children:[Object(r.jsx)(_n,{children:Object(r.jsx)(on,{children:t})}),o]})};function Mn(){var n=Object(u.a)(["\n  margin: 10px;\n  width: 150px;\n"]);return Mn=function(){return n},n}function Rn(){var n=Object(u.a)(["\n  background-color: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return Rn=function(){return n},n}var Nn=s.a.div(Rn()),An=s.a.div(Mn());var Gn=function(n){var t=Object(i.useState)(!1),e=Object(S.a)(t,2),o=e[0],a=e[1],u=Object(d.c)((function(n){return n.cooked})),s=o?Object(r.jsx)(Cn,{children:Object(r.jsx)(Nn,{children:Object(r.jsx)(In,Object(tn.a)(Object(tn.a)({},n),{},{show:o,setPreview:a}))})}):null;return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsxs)(An,{children:[Object(r.jsx)(Dn,{setPreview:a,thumb:n.thumb,cooked:u.includes(n.title),title:n.title}),Object(r.jsx)(hn,Object(tn.a)({},n))]}),s]})};function Bn(){var n=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  @media (min-width: 300px) {\n    max-height: auto;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n  }\n  @media (min-width: 768px) {\n    max-height: 85vh;\n    overflow: auto;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: start;\n  }\n"]);return Bn=function(){return n},n}function Jn(){var n=Object(u.a)(['\n  grid-area: RecipeList;\n  border: 1px solid black;\n  background-image: url("../../pics/bg.jpg");\n  background-size: cover;\n  padding: 0px 50px;\n']);return Jn=function(){return n},n}var Kn=s.a.div(Jn()),Vn=s.a.div(Bn());var Yn=function(n){var t=Object(i.useState)([]),e=Object(S.a)(t,2),c=e[0],o=e[1];return Object(i.useEffect)((function(){J("recipes").then((function(n){return o(n)}))}),[]),Object(r.jsxs)(Kn,{children:[Object(r.jsx)(j,{children:"Recipe List"}),Object(r.jsx)(Vn,{children:c.length?c.map((function(n){return Object(r.jsx)(Gn,Object(tn.a)({},n))})):"Loading..."})]})};function Fn(){var n=Object(u.a)(['\n  background-color: white;\n  width: 100vw;\n  height: 100vh;\n  @media only screen and (min-width: 320px) {\n    display: block;\n  }\n  @media only screen and (min-width: 768px) {\n    display: grid;\n    grid-template-areas:\n      "Inventory RecipeList"\n      "ShoppingList RecipeList";\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr 2fr;\n  }\n']);return Fn=function(){return n},n}var Hn=s.a.div(Fn());var Un={inventory:[{ingredient:"Spaghetti",amount:3},{ingredient:"Onion",amount:2},{ingredient:"Tomato Sauce",amount:2},{ingredient:"Tomato",amount:5},{ingredient:"Garlic",amount:8},{ingredient:"Oregano",amount:1}],shoppingList:[{ingredient:"Tomato",amount:5}]},Wn=function(){var n=Object(d.b)();return Object(i.useEffect)((function(){var t=Un.inventory,e=Un.shoppingList;n(y(t,g)),n(y(e,x))}),[]),Object(r.jsxs)(Hn,{children:[Object(r.jsx)(v,{}),Object(r.jsx)(nn,{}),Object(r.jsx)(Yn,{}),Object(r.jsx)("div",{id:"modal-root"})]})},qn=e(10);function Qn(n){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,r=e.name;if(r!==n)return t;switch(e.type){case O:return bn(e.items,t);case m:return ln(e.items,t);default:return t}}}var Xn=e(33);var Zn=Object(qn.b)({inventory:Qn(g),shoppingList:Qn(x),cooked:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:if(!n.includes(t.title))return[].concat(Object(Xn.a)(n),[t.title]);default:return n}}});a.a.render(Object(r.jsx)(d.a,{store:Object(qn.c)(Zn),children:Object(r.jsx)(Wn,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.d502a183.chunk.js.map