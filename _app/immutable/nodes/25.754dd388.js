import{S as T,i as C,s as I,k as _,l as h,m as g,h as d,b,H as k,q as D,r as S,D as y,u as M,a as L,P as O,c as K,n as E,p as Q,g as p,f as G,d as N,J as R,x as V,y as F,e as P,z as W,A as q,v as H,B as A}from"../chunks/index.b21d4915.js";const X=!0,oe=Object.freeze(Object.defineProperty({__proto__:null,prerender:X},Symbol.toStringTag,{value:"Module"}));var v=(o=>(o[o.NotEditable=0]="NotEditable",o[o.Editable=1]="Editable",o[o.ToggleEditable=2]="ToggleEditable",o))(v||{});function B(o){let e,t;return{c(){e=_("div"),t=D(o[0])},l(n){e=h(n,"DIV",{});var i=g(e);t=S(i,o[0]),i.forEach(d)},m(n,i){b(n,e,i),y(e,t)},p(n,i){i&1&&M(t,n[0])},d(n){n&&d(e)}}}function Y(o){let e,t=o[1]==v.NotEditable&&B(o);return{c(){e=_("div"),t&&t.c()},l(n){e=h(n,"DIV",{});var i=g(e);t&&t.l(i),i.forEach(d)},m(n,i){b(n,e,i),t&&t.m(e,null)},p(n,[i]){n[1]==v.NotEditable?t?t.p(n,i):(t=B(n),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:k,o:k,d(n){n&&d(e),t&&t.d()}}}function Z(o,e,t){let{obj:n}=e,{field:i}=e,{value:s}=e,{editableType:r=v.NotEditable}=e;return o.$$set=l=>{"obj"in l&&t(2,n=l.obj),"field"in l&&t(3,i=l.field),"value"in l&&t(0,s=l.value),"editableType"in l&&t(1,r=l.editableType)},[s,r,n,i]}class j extends T{constructor(e){super(),C(this,e,Z,Y,I,{obj:2,field:3,value:0,editableType:1})}}function U(o){let e,t,n;return{c(){e=_("div"),t=D("Unknown Component, value: "),n=D(o[0])},l(i){e=h(i,"DIV",{});var s=g(e);t=S(s,"Unknown Component, value: "),n=S(s,o[0]),s.forEach(d)},m(i,s){b(i,e,s),y(e,t),y(e,n)},p(i,s){s&1&&M(n,i[0])},d(i){i&&d(e)}}}function x(o){let e,t=o[1]==v.NotEditable&&U(o);return{c(){e=_("div"),t&&t.c()},l(n){e=h(n,"DIV",{});var i=g(e);t&&t.l(i),i.forEach(d)},m(n,i){b(n,e,i),t&&t.m(e,null)},p(n,[i]){n[1]==v.NotEditable?t?t.p(n,i):(t=U(n),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:k,o:k,d(n){n&&d(e),t&&t.d()}}}function $(o,e,t){let{obj:n}=e,{field:i}=e,{value:s}=e,{editableType:r=v.NotEditable}=e;return o.$$set=l=>{"obj"in l&&t(2,n=l.obj),"field"in l&&t(3,i=l.field),"value"in l&&t(0,s=l.value),"editableType"in l&&t(1,r=l.editableType)},[s,r,n,i]}class ee extends T{constructor(e){super(),C(this,e,$,x,I,{obj:2,field:3,value:0,editableType:1})}}function z(o,e,t){const n=o.slice();return n[7]=e[t],n}function J(o){let e,t,n;var i=o[7].component;function s(r){return{props:{obj:r[0],field:r[7].field,value:r[7].value}}}return i&&(e=V(i,s(o))),{c(){e&&F(e.$$.fragment),t=P()},l(r){e&&W(e.$$.fragment,r),t=P()},m(r,l){e&&q(e,r,l),b(r,t,l),n=!0},p(r,l){if(i!==(i=r[7].component)){if(e){H();const u=e;N(u.$$.fragment,1,0,()=>{A(u,1)}),G()}i?(e=V(i,s(r)),F(e.$$.fragment),p(e.$$.fragment,1),q(e,t.parentNode,t)):e=null}},i(r){n||(e&&p(e.$$.fragment,r),n=!0)},o(r){e&&N(e.$$.fragment,r),n=!1},d(r){r&&d(t),e&&A(e,r)}}}function te(o){let e,t,n,i,s,r=o[1](o[0]),l=[];for(let a=0;a<r.length;a+=1)l[a]=J(z(o,r,a));const u=a=>N(l[a],1,1,()=>{l[a]=null});return{c(){e=_("meta"),t=L(),n=_("div"),i=_("div");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){const c=O("svelte-13mqotb",document.head);e=h(c,"META",{name:!0,content:!0}),c.forEach(d),t=K(a),n=h(a,"DIV",{class:!0,style:!0});var f=g(n);i=h(f,"DIV",{class:!0});var m=g(i);for(let w=0;w<l.length;w+=1)l[w].l(m);m.forEach(d),f.forEach(d),this.h()},h(){document.title="Type Drive",E(e,"name","description"),E(e,"content","About this app"),E(i,"class","p-4 m-4 outline outline-1"),E(n,"class","bg-base-100 h-full"),Q(n,"min-height","92.25vh")},m(a,c){y(document.head,e),b(a,t,c),b(a,n,c),y(n,i);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(i,null);s=!0},p(a,[c]){if(c&3){r=a[1](a[0]);let f;for(f=0;f<r.length;f+=1){const m=z(a,r,f);l[f]?(l[f].p(m,c),p(l[f],1)):(l[f]=J(m),l[f].c(),p(l[f],1),l[f].m(i,null))}for(H(),f=r.length;f<l.length;f+=1)u(f);G()}},i(a){if(!s){for(let c=0;c<r.length;c+=1)p(l[c]);s=!0}},o(a){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)N(l[c]);s=!1},d(a){d(e),a&&d(t),a&&d(n),R(l,a)}}}function ne(o){return typeof o=="string"||typeof o=="number"}function ie(o){class e{}class t{}let n={firstName:"John",lastName:"Smith",age:54,weight:178};function i(u,a){return ne(a)?r(s(u)):r(a)}function s(u){return u.includes("first")?e:u.includes("last")?t:typeof"dumb"}function r(u){return u===e||u===t||typeof u=="number"||typeof u=="string"?j:ee}function l(u){let a=[];for(const c in u){if(c==null)continue;const f=u[c];let m={field:c.toString(),value:f,component:i(c.toString(),f)};a.push(m)}return a}return[n,l]}class re extends T{constructor(e){super(),C(this,e,ie,te,I,{})}}export{re as component,oe as universal};