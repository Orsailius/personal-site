import{S,i as v,s as I,k as d,a as b,l as f,m as y,c as C,h as _,n as u,b as j,E as m,R as p,U as h,F as g,X as T}from"./index.92c06e9c.js";function U(a){let n,t,s,e,l,r;return{c(){n=d("div"),t=d("input"),s=b(),e=d("input"),this.h()},l(i){n=f(i,"DIV",{class:!0});var o=y(n);t=f(o,"INPUT",{class:!0}),s=C(o),e=f(o,"INPUT",{type:!0,class:!0}),o.forEach(_),this.h()},h(){u(t,"class","join-item input input-bordered input-primary w-full max-w-xs"),u(e,"type","color"),u(e,"class","join-item input p-0 pr-1 pl-1 input-bordered input-primary bg-base-200"),u(n,"class","join")},m(i,o){j(i,n,o),m(n,t),p(t,a[0]),m(n,s),m(n,e),p(e,a[0]),l||(r=[h(t,"input",a[2]),h(t,"change",a[3]),h(e,"input",a[4]),h(e,"change",a[5])],l=!0)},p(i,[o]){o&1&&t.value!==i[0]&&p(t,i[0]),o&1&&p(e,i[0])},i:g,o:g,d(i){i&&_(n),l=!1,T(r)}}}const N={name:"Color Input",description:"A input box for choosing color",inputInfo:[{name:"color",varType:"String",description:"Valid css color name or code",path:""}],testInput:{color:"#e96a02",onSelect:a=>{}}};function w(a,n,t){let{onSelect:s}=n,{color:e}=n;function l(){e=this.value,t(0,e)}const r=()=>s(e);function i(){e=this.value,t(0,e)}const o=()=>s(e);return a.$$set=c=>{"onSelect"in c&&t(1,s=c.onSelect),"color"in c&&t(0,e=c.color)},[e,s,l,r,i,o]}class P extends S{constructor(n){super(),v(this,n,w,U,I,{onSelect:1,color:0})}}export{P as C,N as i};
