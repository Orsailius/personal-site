import{S as q,i as x,s as U,k as H,a as w,q as T,M as F,l as j,h as g,c as N,m as y,r as S,n as m,p as P,E as p,b as E,F as B,u as A,N as M,X as C,_ as z}from"../chunks/index.54b28828.js";import"../chunks/featureFlags.c0208e70.js";const X=!0,te=Object.freeze(Object.defineProperty({__proto__:null,prerender:X},Symbol.toStringTag,{value:"Module"}));function L(c){let e,t,s,o,f,i,a,_;return{c(){e=H("div"),t=H("div"),s=T("Lives: "),o=T(c[4]),f=w(),i=H("div"),a=T("Score: "),_=T(c[3]),this.h()},l(l){e=j(l,"DIV",{class:!0});var r=y(e);t=j(r,"DIV",{class:!0});var d=y(t);s=S(d,"Lives: "),o=S(d,c[4]),d.forEach(g),f=N(r),i=j(r,"DIV",{class:!0});var u=y(i);a=S(u,"Score: "),_=S(u,c[3]),u.forEach(g),r.forEach(g),this.h()},h(){m(t,"class","text-xl"),m(i,"class","text-xl"),m(e,"class","flex justify-evenly mb-2")},m(l,r){E(l,e,r),p(e,t),p(t,s),p(t,o),p(e,f),p(e,i),p(i,a),p(i,_)},p(l,r){r&16&&A(o,l[4]),r&8&&A(_,l[3])},d(l){l&&g(e)}}}function J(c){let e,t,s,o,f,i,a,_,l;return{c(){e=H("div"),t=H("img"),o=w(),f=H("button"),i=T("Start!"),this.h()},l(r){e=j(r,"DIV",{class:!0,style:!0});var d=y(e);t=j(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(g),o=N(r),f=j(r,"BUTTON",{class:!0});var u=y(f);i=S(u,"Start!"),u.forEach(g),this.h()},h(){M(t.src,s=c[6][0].img)||m(t,"src",s),m(t,"alt","Hotdog?"),m(t,"class","object-contain object-center flex-grow"),m(e,"class","flex content-center flex-shrink"),P(e,"height","50vh"),m(f,"class",a="btn btn-success btn-lg m-4 "+(c[5]?"btn-disabled":""))},m(r,d){E(r,e,d),p(e,t),E(r,o,d),E(r,f,d),p(f,i),_||(l=C(f,"click",c[7]),_=!0)},p(r,d){d&32&&a!==(a="btn btn-success btn-lg m-4 "+(r[5]?"btn-disabled":""))&&m(f,"class",a)},d(r){r&&g(e),r&&g(o),r&&g(f),_=!1,l()}}}function K(c){let e,t,s,o,f,i,a,_,l,r,d,u,h;function k(n,v){return n[0]==""?W:Q}let I=k(c),b=I(c);return{c(){e=H("progress"),s=w(),o=H("div"),b.c(),f=w(),i=H("div"),a=H("button"),_=T("Hotdog"),l=w(),r=H("button"),d=T("No Hotdog"),this.h()},l(n){e=j(n,"PROGRESS",{class:!0,max:!0}),y(e).forEach(g),s=N(n),o=j(n,"DIV",{class:!0,style:!0});var v=y(o);b.l(v),v.forEach(g),f=N(n),i=j(n,"DIV",{class:!0});var V=y(i);a=j(V,"BUTTON",{class:!0});var G=y(a);_=S(G,"Hotdog"),G.forEach(g),l=N(V),r=j(V,"BUTTON",{class:!0});var O=y(r);d=S(O,"No Hotdog"),O.forEach(g),V.forEach(g),this.h()},h(){m(e,"class",t="progress w-full mb-1 "+R(c[2])),e.value=c[2],m(e,"max","1"),m(o,"class","flex content-center flex-shrink"),P(o,"height","50vh"),m(a,"class","btn btn-success btn-lg"),m(r,"class","btn btn-error btn-lg"),m(i,"class","grid grid-cols-2 gap-2 m-2")},m(n,v){E(n,e,v),E(n,s,v),E(n,o,v),b.m(o,null),E(n,f,v),E(n,i,v),p(i,a),p(a,_),p(i,l),p(i,r),p(r,d),u||(h=[C(a,"click",c[11]),C(r,"click",c[12])],u=!0)},p(n,v){v&4&&t!==(t="progress w-full mb-1 "+R(n[2]))&&m(e,"class",t),v&4&&(e.value=n[2]),I===(I=k(n))&&b?b.p(n,v):(b.d(1),b=I(n),b&&(b.c(),b.m(o,null)))},d(n){n&&g(e),n&&g(s),n&&g(o),b.d(),n&&g(f),n&&g(i),u=!1,z(h)}}}function Q(c){let e,t;return{c(){e=H("img"),this.h()},l(s){e=j(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){M(e.src,t=c[0])||m(e,"src",t),m(e,"alt","Hotdog?"),m(e,"class","object-contain object-center flex-grow")},m(s,o){E(s,e,o)},p(s,o){o&1&&!M(e.src,t=s[0])&&m(e,"src",t)},d(s){s&&g(e)}}}function W(c){let e,t;return{c(){e=H("div"),t=T("Ready?!"),this.h()},l(s){e=j(s,"DIV",{class:!0,style:!0});var o=y(e);t=S(o,"Ready?!"),o.forEach(g),this.h()},h(){m(e,"class","text-4xl font-semibold text-center w-full align-middle flex-grow"),P(e,"align-self","center")},m(s,o){E(s,e,o),p(e,t)},p:B,d(s){s&&g(e)}}}function Y(c){let e,t,s,o,f,i,a,_,l=(c[1]||c[3]>0)&&L(c);function r(h,k){return h[1]?K:J}let d=r(c),u=d(c);return{c(){e=H("meta"),t=w(),s=H("div"),o=H("h1"),f=T("Hotdog, No Hotdog!"),i=w(),a=H("div"),l&&l.c(),_=w(),u.c(),this.h()},l(h){const k=F("svelte-1m3no33",document.head);e=j(k,"META",{name:!0,content:!0}),k.forEach(g),t=N(h),s=j(h,"DIV",{class:!0,style:!0});var I=y(s);o=j(I,"H1",{class:!0});var b=y(o);f=S(b,"Hotdog, No Hotdog!"),b.forEach(g),i=N(I),a=j(I,"DIV",{class:!0});var n=y(a);l&&l.l(n),_=N(n),u.l(n),n.forEach(g),I.forEach(g),this.h()},h(){document.title="",m(e,"name","description"),m(e,"content","About this app"),m(o,"class","text-4xl pt-8 font-semibold text-center"),m(a,"class","flex flex-col m-4"),m(s,"class","bg-base-100 h-full"),P(s,"min-height","92.25vh")},m(h,k){p(document.head,e),E(h,t,k),E(h,s,k),p(s,o),p(o,f),p(s,i),p(s,a),l&&l.m(a,null),p(a,_),u.m(a,null)},p(h,[k]){h[1]||h[3]>0?l?l.p(h,k):(l=L(h),l.c(),l.m(a,_)):l&&(l.d(1),l=null),d===(d=r(h))&&u?u.p(h,k):(u.d(1),u=d(h),u&&(u.c(),u.m(a,null)))},i:B,o:B,d(h){g(e),h&&g(t),h&&g(s),l&&l.d(),u.d()}}}function R(c){return c>.5?"progress-success":c>.25?"progress-warning":"progress-error"}function Z(c,e,t){let s="",o,f=!1,i=4.5,a,_,l,r,d=0,u=0,h=!1;const k=[{img:"/images/hotdogs/America.jpg",isHotdog:!0},{img:"/images/hotdogs/Balloon.jpg",isHotdog:!1},{img:"/images/hotdogs/Burger21.jpg",isHotdog:!1},{img:"/images/hotdogs/Carrot.jpg",isHotdog:!1},{img:"/images/hotdogs/ChiliPepper.jpg",isHotdog:!1},{img:"/images/hotdogs/Corn.jpg",isHotdog:!1},{img:"/images/hotdogs/DogHose.jpg",isHotdog:!1},{img:"/images/hotdogs/DogSnow.jpg",isHotdog:!1},{img:"/images/hotdogs/Grill.jpg",isHotdog:!0},{img:"/images/hotdogs/Grill2.jpg",isHotdog:!0},{img:"/images/hotdogs/Hamburger.jpg",isHotdog:!1},{img:"/images/hotdogs/Hotdog15.jpg",isHotdog:!0},{img:"/images/hotdogs/Hotdog19.jpg",isHotdog:!0},{img:"/images/hotdogs/Hotdog22.jpg",isHotdog:!0},{img:"/images/hotdogs/HotdogStuff.jpg",isHotdog:!0},{img:"/images/hotdogs/HotdogStyle.png",isHotdog:!0}];function I(){t(1,f=!0),t(4,u=3),t(3,d=0),t(9,i=4.5),t(0,s=""),setTimeout(b,1e3)}function b(){clearTimeout(a),clearInterval(_),t(10,l=i),a=setTimeout(n,l*1e3),_=setInterval(()=>{t(10,l-=.03333)},33.33);const D=k[~~(Math.random()*k.length)];t(0,s=D.img),o=D.isHotdog,i>.75&&t(9,i*=.97)}function n(){if(t(4,u--,u),u<=0){clearTimeout(a),clearInterval(_),V();return}b()}function v(D){if(D&&o||!D&&!o)t(3,d++,d);else if(t(4,u--,u),u<=0){clearTimeout(a),clearInterval(_),V();return}b()}function V(){t(1,f=!1),t(5,h=!0),setTimeout(()=>{t(5,h=!1)},2e3)}const G=()=>v(!0),O=()=>v(!1);return c.$$.update=()=>{if(c.$$.dirty&1536){const D=l/i;Number.isFinite(D)?t(2,r=D):t(2,r=0)}},[s,f,r,d,u,h,k,I,v,i,l,G,O]}class se extends q{constructor(e){super(),x(this,e,Z,Y,U,{})}}export{se as component,te as universal};
