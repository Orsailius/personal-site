var m=Object.defineProperty;var p=(r,e,n)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var i=(r,e,n)=>(p(r,typeof e!="symbol"?e+"":e,n),n);import{S as f,i as _,s as v,k as u,a as g,M as w,l as h,h as s,c as y,m as S,n as l,C as j,b as z,D as c}from"../chunks/index.6d7bdd34.js";const x=!0,D=Object.freeze(Object.defineProperty({__proto__:null,prerender:x},Symbol.toStringTag,{value:"Module"}));function E(r){let e,n,t;return{c(){e=u("meta"),n=g(),t=u("div"),this.h()},l(a){const o=w("svelte-1fn024j",document.head);e=h(o,"META",{name:!0,content:!0}),o.forEach(s),n=y(a),t=h(a,"DIV",{class:!0});var d=S(t);d.forEach(s),this.h()},h(){document.title="Antizero",l(e,"name","description"),l(e,"content","Antizero"),l(t,"class","bg-base-100")},m(a,o){j(document.head,e),z(a,n,o),z(a,t,o)},p:c,i:c,o:c,d(a){s(e),a&&s(n),a&&s(t)}}}function M(r){class e{constructor(t=0,a=0,o=0){i(this,"natural",0);i(this,"zero",0);i(this,"antizero",0);this.natural=t,this.zero=a,this.antizero=o}mult(t){var a=new e;return a.natural=(this.natural*t.natural+this.zero*t.antizero+this.antizero*t.zero)%3,a.zero=(this.natural*t.zero+this.zero*t.natural+this.zero*t.zero)%3,a.antizero=(this.natural*t.antizero+this.antizero*t.antizero+this.antizero*t.natural)%3,a}add(t){var a=new e;return a.natural=(this.natural+t.natural)%3,a.zero=(t.zero+this.zero)%3,a.antizero=(t.antizero+this.antizero)%3,a}}return console.log(new e(1,0,2).mult(new e(2,1,1)).add(new e(1,0,1))),[]}class O extends f{constructor(e){super(),_(this,e,M,E,v,{})}}export{O as component,D as universal};
