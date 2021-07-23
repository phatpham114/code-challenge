(this["webpackJsonptest-saga"]=this["webpackJsonptest-saga"]||[]).push([[0],{63:function(e,t,n){},76:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(10),r=n.n(c),a=n(17),i=(n(63),n(0)),s=n(59),o=n(15),l=n(56),j=(n(76),"/counter"),d="/employees",u=n(124),b=n(3),O=function(){var e=Object(o.f)();return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(u.a,{onClick:function(){e.push(j)},children:"Counter"}),Object(b.jsx)(u.a,{onClick:function(){e.push(d)},children:"Employees"})]})},h=n(28),x=function(){var e=Object(i.useState)(0),t=Object(h.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{className:"counter",children:[Object(b.jsxs)("div",{className:"btn-counter",children:[Object(b.jsx)(u.a,{onClick:function(){c(n+1)},children:"Increase"}),Object(b.jsx)(u.a,{onClick:function(){c(0)},children:"Reset"})]}),Object(b.jsx)("div",{className:"count",children:n})]})},f=n(64),p="GET_EMPLOYEES_START",m="GET_EMPLOYEES_SUCCESS",v="GET_EMPLOYEES_FAIL",g="CREATE_EMPLOYEE_START",E="CREATE_EMPLOYEE_SUCCESS",C="CREATE_EMPLOYEE_FAIL",y=function(e){return{type:p,payload:e}},k=function(){var e=Object(a.c)(),t=Object(i.useState)(1),n=Object(h.a)(t,2),c=n[0],r=n[1],s=Object(i.useRef)(!0);Object(i.useEffect)((function(){s.current?s.current=!1:e(y({page:c}))}),[c]);return Object(b.jsxs)("div",{className:"pagination",children:[Object(b.jsx)("span",{className:"".concat(1===c?"btn-disabled":""," btn-previous"),onClick:function(){r(Math.max(c-1,1))},children:"Previous"}),Object(b.jsx)("span",{children:c}),Object(b.jsx)("span",{className:"btn-next",onClick:function(){r(c+1)},children:"Next"})]})};var S=n(123),N=n(127),w=n(119),T=n(121),P=n(128),_=n(120),R=n(125),F=n(129),L=void 0,A=function(e){return null===e||e.length?null:"Required"},M=function(e){return null===e||e.length?null:"Required"},Y=function(e){return null===e||e.length?null:"Required"},I=function(e){var t=e.onClose,n=Object(a.c)(),c=Object(i.useState)(null),r=Object(h.a)(c,2),s=r[0],o=r[1],l=Object(i.useState)(null),j=Object(h.a)(l,2),d=j[0],O=j[1],x=Object(i.useState)(null),f=Object(h.a)(x,2),p=f[0],m=f[1],v=Object(a.d)((function(e){return e.employees}),a.b).loadingCreate,E=function(e,t){e(t.target.value)},C=function(){t&&t()},y=A(s),k=M(d),I=Y(p);return Object(b.jsxs)(S.a,{onClose:C,"aria-labelledby":"max-width-dialog-title",maxWidth:"xs",open:!0,children:[Object(b.jsx)(N.a,{children:"Set backup account"}),Object(b.jsxs)(w.a,{dividers:!0,children:[Object(b.jsxs)(P.a,{fullWidth:!0,error:!!y,children:[Object(b.jsx)(F.a,{htmlFor:"field-name",children:"Name"}),Object(b.jsx)(R.a,{id:"field-name",name:"name",value:s,onChange:E.bind(L,o),"aria-describedby":"field-name-text"}),Object(b.jsx)(_.a,{id:"field-name-text",children:y})]}),Object(b.jsxs)(P.a,{fullWidth:!0,error:!!k,children:[Object(b.jsx)(F.a,{htmlFor:"field-email",children:"Email"}),Object(b.jsx)(R.a,{id:"field-email",name:"email",value:d,onChange:E.bind(L,O),"aria-describedby":"field-email-text"}),Object(b.jsx)(_.a,{id:"field-email-text",children:k})]}),Object(b.jsxs)(P.a,{fullWidth:!0,error:!!I,children:[Object(b.jsx)(F.a,{htmlFor:"field-position",children:"Position"}),Object(b.jsx)(R.a,{id:"field-position",name:"position",value:p,onChange:E.bind(L,m),"aria-describedby":"field-position-text"}),Object(b.jsx)(_.a,{id:"field-position-text",children:I})]})]}),Object(b.jsxs)(T.a,{children:[Object(b.jsx)(u.a,{onClick:C,children:"Cancel"}),Object(b.jsx)(u.a,{onClick:function(){n({type:g,payload:{name:s,email:d,position:p}})},disabled:v||y||k||I,children:"Save changes"})]})]})},q=function(){var e=Object(l.b)().enqueueSnackbar,t=Object(i.useState)(!1),n=Object(h.a)(t,2),c=n[0],r=n[1],s=Object(a.d)((function(e){return e.employees}),a.b),o=s.loadingCreate,j=s.errorCreate,d=function(e){var t=Object(i.useRef)();return Object(i.useEffect)((function(){t.current=e}),[e]),t.current}(o);Object(i.useEffect)((function(){d&&!o&&(j?e("Something went wrong",{variant:"error"}):(e("Created a employee",{variant:"success"}),u()))}),[o]);var u=function(){r(!1)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"btn-new",onClick:function(){r(!0)},children:"+ New"}),c&&Object(b.jsx)(I,{onClose:u})]})},G=function(){var e=Object(a.c)(),t=Object(a.d)((function(e){return e.employees}),a.b),n=t.loading,c=t.employees,r=Object(i.useCallback)((function(){e(y({page:1}))}),[e]);Object(i.useEffect)((function(){r()}),[]);var s=Object(i.useMemo)((function(){return n?Object(f.a)(Array(5)).map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("div",{className:"skeleton"})}),Object(b.jsx)("td",{children:Object(b.jsx)("div",{className:"skeleton"})}),Object(b.jsx)("td",{children:Object(b.jsx)("div",{className:"skeleton"})})]},e)})):c.length?c.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.email}),Object(b.jsx)("td",{children:e.position})]},e.id)})):Object(b.jsx)("tr",{children:Object(b.jsx)("td",{className:"no-data",colSpan:3,children:"No data"})})}),[n,c]);return Object(b.jsxs)("div",{className:"employees",children:[Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"Position"})]})}),Object(b.jsx)("tbody",{children:s}),Object(b.jsx)("tfoot",{children:Object(b.jsx)("tr",{children:Object(b.jsx)("td",{colSpan:3,children:Object(b.jsx)(q,{})})})})]}),Object(b.jsx)(k,{})]})},U=function(){return Object(b.jsx)(s.a,{children:Object(b.jsx)(l.a,{maxSnack:3,children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(O,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"(".concat(j,"|/)"),children:Object(b.jsx)(x,{})}),Object(b.jsx)(o.a,{path:d,children:Object(b.jsx)(G,{})})]})]})})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},J=n(35),B=n(65),D=n(22),z={loading:!1,employees:[],error:null,loadingCreate:!1,errorCreate:null},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(D.a)(Object(D.a)({},e),{},{loading:!0});case m:return Object(D.a)(Object(D.a)({},e),{},{loading:!1,employees:t.data});case v:return Object(D.a)(Object(D.a)({},e),{},{loading:!1,error:t.error});case g:return Object(D.a)(Object(D.a)({},e),{},{loadingCreate:!0});case E:return Object(D.a)(Object(D.a)({},e),{},{loadingCreate:!1});case C:return Object(D.a)(Object(D.a)({},e),{},{loadingCreate:!1,errorCreate:t.error});default:return e}},K=Object(J.b)({employees:H}),Q=n(29),V=n.n(Q),X=n(27),Z=function(e){var t=e.url,n=e.method,c=void 0===n?"GET":n,r=e.payload,a=void 0===r?{}:r;return fetch(t,{method:c,body:JSON.stringify(a.body)}).then((function(e){if(!e.ok)throw new Error("".concat(e.status));return e.json()})).then((function(e){return{response:e}})).catch((function(e){return{error:e.message}}))},$="https://60f68a6518254c00176e02fe.mockapi.io",ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return"".concat($,"/users/getUsers?page=").concat(e,"&limit=").concat(t)},te=function(){return"".concat($,"/users/getUsers")},ne=V.a.mark(ae),ce=V.a.mark(ie),re=V.a.mark(se);function ae(e){var t,n,c;return V.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(X.b)(Z,{url:ee(e.payload.page)});case 2:if(t=r.sent,n=t.response,c=t.error,!n){r.next=10;break}return r.next=8,Object(X.c)({type:m,data:n});case 8:r.next=12;break;case 10:return r.next=12,Object(X.c)({type:v,error:+c});case 12:case"end":return r.stop()}}),ne)}function ie(e){var t,n,c;return V.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(X.b)(Z,{url:te(),method:"POST",payload:{body:e.payload}});case 2:if(t=r.sent,n=t.response,c=t.error,!n){r.next=10;break}return r.next=8,Object(X.c)({type:E,data:n});case 8:r.next=12;break;case 10:return r.next=12,Object(X.c)({type:C,error:+c});case 12:case"end":return r.stop()}}),ce)}function se(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.d)(p,ae);case 2:return e.next=4,Object(X.d)(g,ie);case 4:case"end":return e.stop()}}),re)}var oe=V.a.mark(le);function le(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.a)([se()]);case 2:case"end":return e.stop()}}),oe)}var je=Object(B.a)(),de=Object(J.d)(K,Object(J.a)(je));je.run(le);var ue=de;r.a.render(Object(b.jsx)(a.a,{store:ue,children:Object(b.jsx)(U,{})}),document.getElementById("root")),W()}},[[81,1,2]]]);
//# sourceMappingURL=main.32611237.chunk.js.map