import{S,i as q,s as x,k as _,q as f,a as k,l as d,m as g,r as h,h as u,c as y,b as m,E as v,u as E,F as $,L as C}from"../chunks/index.92c06e9c.js";import{d as F}from"../chunks/singletons.b15e68cb.js";const H=()=>{const s=F;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},L={subscribe(s){return H().page.subscribe(s)}};function P(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=_("h1"),o=f(r),n=k(),i=_("p"),l=f(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=y(e),i=d(e,"P",{});var p=g(i);l=h(p,c),p.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(l,c)},i:$,o:$,d(e){e&&u(t),e&&u(n),e&&u(i)}}}function j(s,t,r){let o;return C(s,L,n=>r(0,o=n)),[o]}let A=class extends S{constructor(t){super(),q(this,t,j,P,x,{})}};export{A as component};
