import{S as z,i as H,s as Y,k as g,a as q,q as V,N as F,l as y,h as c,c as T,m as w,r as A,n as m,p as N,D as d,b as k,H as S,e as x,J as U,L as O,u as W}from"../chunks/index.b1f4a11b.js";const J=!0,oe=Object.freeze(Object.defineProperty({__proto__:null,prerender:J},Symbol.toStringTag,{value:"Module"}));function P(u,l,r){const s=u.slice();return s[14]=l[r],s}function B(u,l,r){const s=u.slice();return s[17]=l[r],s}function j(u){let l,r,s,n=u[4],e=[];for(let o=0;o<n.length;o+=1)e[o]=L(P(u,n,o));let t=u[3]&&R(u);return{c(){l=g("div");for(let o=0;o<e.length;o+=1)e[o].c();r=q(),t&&t.c(),s=x(),this.h()},l(o){l=y(o,"DIV",{class:!0});var a=w(l);for(let i=0;i<e.length;i+=1)e[i].l(a);a.forEach(c),r=T(o),t&&t.l(o),s=x(),this.h()},h(){m(l,"class","flex flex-row flex-wrap place-content-center gap-1 m-1")},m(o,a){k(o,l,a);for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(l,null);k(o,r,a),t&&t.m(o,a),k(o,s,a)},p(o,a){if(a&83){n=o[4];let i;for(i=0;i<n.length;i+=1){const f=P(o,n,i);e[i]?e[i].p(f,a):(e[i]=L(f),e[i].c(),e[i].m(l,null))}for(;i<e.length;i+=1)e[i].d(1);e.length=n.length}o[3]?t?t.p(o,a):(t=R(o),t.c(),t.m(s.parentNode,s)):t&&(t.d(1),t=null)},d(o){o&&c(l),U(e,o),o&&c(r),t&&t.d(o),o&&c(s)}}}function K(u){let l,r,s,n;return{c(){l=g("button"),r=V("Generate Cryptogram!"),this.h()},l(e){l=y(e,"BUTTON",{class:!0});var t=w(l);r=A(t,"Generate Cryptogram!"),t.forEach(c),this.h()},h(){m(l,"class","btn btn-primary btn-lg")},m(e,t){k(e,l,t),d(l,r),s||(n=O(l,"click",u[5]),s=!0)},p:S,d(e){e&&c(l),s=!1,n()}}}function Q(u){let l,r=u[17]+"",s,n;return{c(){l=g("div"),s=V(r),n=q(),this.h()},l(e){l=y(e,"DIV",{class:!0});var t=w(l);s=A(t,r),n=T(t),t.forEach(c),this.h()},h(){m(l,"class","flex flex-col")},m(e,t){k(e,l,t),d(l,s),d(l,n)},p(e,t){t&16&&r!==(r=e[17]+"")&&W(s,r)},d(e){e&&c(l)}}}function X(u){let l,r,s,n;return{c(){l=g("div"),r=q(),s=g("div"),n=V(`-----------------------------------------\r
                                `),this.h()},l(e){l=y(e,"DIV",{class:!0});var t=w(l);t.forEach(c),r=T(e),s=y(e,"DIV",{class:!0});var o=w(s);n=A(o,`-----------------------------------------\r
                                `),o.forEach(c),this.h()},h(){m(l,"class","flex flex-grow basis-full"),m(s,"class","flex flex-grow basis-full text-center justify-center align-baseline")},m(e,t){k(e,l,t),k(e,r,t),k(e,s,t),d(s,n)},p:S,d(e){e&&c(l),e&&c(r),e&&c(s)}}}function Z(u){let l,r,s,n,e,t="_",o,a,i,f=u[17]+"",D,E,C,p;function I(..._){return u[8](u[17],..._)}return{c(){l=g("div"),r=g("input"),n=q(),e=g("div"),o=V(t),a=q(),i=g("div"),D=V(f),E=q(),this.h()},l(_){l=y(_,"DIV",{class:!0});var h=w(l);r=y(h,"INPUT",{type:!0,pattern:!0,class:!0,style:!0}),n=T(h),e=y(h,"DIV",{});var v=w(e);o=A(v,t),v.forEach(c),a=T(h),i=y(h,"DIV",{});var b=w(i);D=A(b,f),b.forEach(c),E=T(h),h.forEach(c),this.h()},h(){m(r,"type","text"),m(r,"pattern","[A-Za-z]1"),m(r,"class","text-white text-center bg-primary"),N(r,"max-width","20px"),r.value=s=u[1][u[17]]??"",m(l,"class","flex flex-col place-content-evenly")},m(_,h){k(_,l,h),d(l,r),d(l,n),d(l,e),d(e,o),d(l,a),d(l,i),d(i,D),d(l,E),C||(p=O(r,"input",I),C=!0)},p(_,h){u=_,h&18&&s!==(s=u[1][u[17]]??"")&&r.value!==s&&(r.value=s),h&16&&f!==(f=u[17]+"")&&W(D,f)},d(_){_&&c(l),C=!1,p()}}}function G(u){let l,r;function s(t,o){return o&17&&(l=null),l==null&&(l=t[0].indexOf(t[17])>=0),l?Z:t[17]==`
`?X:Q}let n=s(u,-1),e=n(u);return{c(){e.c(),r=x()},l(t){e.l(t),r=x()},m(t,o){e.m(t,o),k(t,r,o)},p(t,o){n===(n=s(t,o))&&e?e.p(t,o):(e.d(1),e=n(t),e&&(e.c(),e.m(r.parentNode,r)))},d(t){e.d(t),t&&c(r)}}}function L(u){let l,r,s,n=u[14],e=[];for(let t=0;t<n.length;t+=1)e[t]=G(B(u,n,t));return{c(){l=g("div");for(let t=0;t<e.length;t+=1)e[t].c();r=q(),s=g("div"),this.h()},l(t){l=y(t,"DIV",{class:!0});var o=w(l);for(let i=0;i<e.length;i+=1)e[i].l(o);o.forEach(c),r=T(t),s=y(t,"DIV",{class:!0});var a=w(s);a.forEach(c),this.h()},h(){m(l,"class","flex place-content-evenly gap-2"),m(s,"class","flex basis-4")},m(t,o){k(t,l,o);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(l,null);k(t,r,o),k(t,s,o)},p(t,o){if(o&83){n=t[14];let a;for(a=0;a<n.length;a+=1){const i=B(t,n,a);e[a]?e[a].p(i,o):(e[a]=G(i),e[a].c(),e[a].m(l,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=n.length}},d(t){t&&c(l),U(e,t),t&&c(r),t&&c(s)}}}function R(u){let l,r,s,n,e,t,o;return{c(){l=g("div"),r=V("Victory!"),s=q(),n=g("button"),e=V("Generate Cryptogram!"),this.h()},l(a){l=y(a,"DIV",{class:!0});var i=w(l);r=A(i,"Victory!"),i.forEach(c),s=T(a),n=y(a,"BUTTON",{class:!0});var f=w(n);e=A(f,"Generate Cryptogram!"),f.forEach(c),this.h()},h(){m(l,"class","text-3xl m-8"),m(n,"class","btn btn-primary btn-lg")},m(a,i){k(a,l,i),d(l,r),k(a,s,i),k(a,n,i),d(n,e),t||(o=O(n,"click",u[5]),t=!0)},p:S,d(a){a&&c(l),a&&c(s),a&&c(n),t=!1,o()}}}function $(u){let l,r,s,n,e,t,o,a,i,f;function D(p,I){return p[2]==null?K:j}let E=D(u),C=E(u);return{c(){l=g("meta"),r=q(),s=g("div"),n=g("h1"),e=V("Movie Quote Cryptogram!"),t=q(),o=g("div"),a=V("Each cryptogram is a quote from a movie, followed by the movie's name"),i=q(),f=g("div"),C.c(),this.h()},l(p){const I=F("svelte-1ps0ao9",document.head);l=y(I,"META",{name:!0,content:!0}),I.forEach(c),r=T(p),s=y(p,"DIV",{class:!0,style:!0});var _=w(s);n=y(_,"H1",{class:!0});var h=w(n);e=A(h,"Movie Quote Cryptogram!"),h.forEach(c),t=T(_),o=y(_,"DIV",{class:!0});var v=w(o);a=A(v,"Each cryptogram is a quote from a movie, followed by the movie's name"),v.forEach(c),i=T(_),f=y(_,"DIV",{class:!0,style:!0});var b=w(f);C.l(b),b.forEach(c),_.forEach(c),this.h()},h(){document.title="Cryptogram",m(l,"name","description"),m(l,"content","Guess the Cryptogram"),m(n,"class","text-4xl pt-8 font-semibold text-center"),m(o,"class","text-lg pt-1 text-center mb-8 mt-1 mr-2 ml-2"),m(f,"class","text-center"),N(f,"white-space","pre-line"),m(s,"class","bg-base-100 h-full"),N(s,"min-height","92.25vh")},m(p,I){d(document.head,l),k(p,r,I),k(p,s,I),d(s,n),d(n,e),d(s,t),d(s,o),d(o,a),d(s,i),d(s,f),C.m(f,null)},p(p,[I]){E===(E=D(p))&&C?C.p(p,I):(C.d(1),C=E(p),C&&(C.c(),C.m(f,null)))},i:S,o:S,d(p){c(l),p&&c(r),p&&c(s),C.d()}}}function ee(u){let l=u.length,r;for(;l>0;)r=Math.floor(Math.random()*l),l--,[u[l],u[r]]=[u[r],u[l]];return u}function te(u,l,r){let s=[{quote:"Release the Kraken!",source:"Clash of the Titans"},{quote:"That's my secret, Captain: I'm always angry.",source:"Marvel's The Avengers"},{quote:"Nobody makes me bleed my own blood. Nobody!",source:"Dodgeball: A True Underdog Story"},{quote:"This is the day you will always remember as the day you almost caught Captain Jack Sparrow!",source:"Pirates of the Caribbean: The Curse of the Black Pearl"},{quote:"We're goin' streaking!",source:"Old School"},{quote:"I have had it with these motherfucking snakes on this motherfucking plane!",source:"Snakes on a Plane"},{quote:"You motorboatin' son of a bitch!",source:"Wedding Crashers"},{quote:"What is this? A center for ants? How can we be expected to teach children to learn how to read...if they can't even fit inside the building?",source:"Zoolander"},{quote:"I have nipples Greg. Could you milk me?",source:"Meet the Parents"},{quote:"With great power comes great responsibility.",source:"Spider-Man"},{quote:"You shall not pass!",source:"Lord of the Rings: The Fellowship of the Ring"},{quote:"I love lamp.",source:"Anchorman: The Legend of Ron Burgundy"},{quote:"Why so serious?",source:"The Dark Knight"},{quote:"You're a wizard, Harry.",source:"Harry Potter and the Sorcerer's Stone"},{quote:"Orges are like onions.",source:"Shrek"},{quote:"Do you know what happens to a toad when it's struck by lightning? The same thing that happens to everything else.",source:"X-Men"},{quote:"I don't like sand. It's all coarse, and rough, and irritating. And it gets everywhere.",source:"Star Wars: Episode II - Attack of the Clones"},{quote:"Dear 8-pound, 6-ounce newborn infant Jesus...",source:"Talladega Nights: The Ballad of Ricky Bobby"},{quote:"You're tearing me apart, Lisa!",source:"The Room"},{quote:"I'm the Juggernaut, bitch!",source:"X-Men: The Last Stand"},{quote:"I see dead people.",source:"The Sixth Sense"},{quote:"The first rule of Fight Club is: You do not talk about Fight Club.",source:"Fight Club"}],n="ABCDEFGHIJKLMNOPQRSTUVWXYZ",e={},t=null,o,a,i=!1,f;function D(){r(0,n=ee("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")).join("")),console.log("New Cipher: "+n)}function E(){r(3,i=!1),r(1,e={}),D(),r(2,t=s[~~(Math.random()*s.length)]),a=t.quote+`
 `+t.source,r(7,o=C(a))}function C(h){h=h.toUpperCase();let v="";for(var b=0;b<h.length;b++){let M=h.charCodeAt(b)-"A".charCodeAt(0);M<0||M>=n.length?v+=h.charAt(b):v+=n.charAt(M)}return v}function p(h,v){let b=h.data;if(b==null){r(1,e[v]=" ",e);return}if(b.length==0){r(1,e[v]=" ",e);return}b.length>1&&(b=b[b.length-1]),r(1,e[v]=b.toUpperCase(),e),I()}function I(){for(var h=0;h<o.length;h++){if(n.indexOf(o[h])<0)continue;let v=e[o[h]];if(v==null)return;if(n[v.charCodeAt(0)-"A".charCodeAt(0)]!=o[h])return}r(3,i=!0)}const _=(h,v)=>p(v,h);return u.$$.update=()=>{u.$$.dirty&128&&o!=null&&r(4,f=o.split(/[\s\n]+/))},[n,e,t,i,f,E,p,o,_]}class re extends z{constructor(l){super(),H(this,l,te,$,Y,{})}}export{re as component,oe as universal};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuYTU3ZmQ0ZTYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvY3J5cHRvZ3JhbS8rcGFnZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvY3J5cHRvZ3JhbS8rcGFnZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGV2IH0gZnJvbSAnJGFwcC9lbnZpcm9ubWVudCc7XHJcblxyXG4vLyBzaW5jZSB0aGVyZSdzIG5vIGR5bmFtaWMgZGF0YSBoZXJlLCB3ZSBjYW4gcHJlcmVuZGVyXHJcbi8vIGl0IHNvIHRoYXQgaXQgZ2V0cyBzZXJ2ZWQgYXMgYSBzdGF0aWMgYXNzZXQgaW4gcHJvZHVjdGlvblxyXG5leHBvcnQgY29uc3QgcHJlcmVuZGVyID0gdHJ1ZTsiLCI8c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5cclxuICAgIGxldCBwdXp6bGVMaXN0ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVvdGU6XCJSZWxlYXNlIHRoZSBLcmFrZW4hXCIsXHJcbiAgICAgICAgICAgIHNvdXJjZTogXCJDbGFzaCBvZiB0aGUgVGl0YW5zXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVvdGU6XCJUaGF0J3MgbXkgc2VjcmV0LCBDYXB0YWluOiBJJ20gYWx3YXlzIGFuZ3J5LlwiLFxyXG4gICAgICAgICAgICBzb3VyY2U6IFwiTWFydmVsJ3MgVGhlIEF2ZW5nZXJzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVvdGU6XCJOb2JvZHkgbWFrZXMgbWUgYmxlZWQgbXkgb3duIGJsb29kLiBOb2JvZHkhXCIsXHJcbiAgICAgICAgICAgIHNvdXJjZTogXCJEb2RnZWJhbGw6IEEgVHJ1ZSBVbmRlcmRvZyBTdG9yeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1b3RlOlwiVGhpcyBpcyB0aGUgZGF5IHlvdSB3aWxsIGFsd2F5cyByZW1lbWJlciBhcyB0aGUgZGF5IHlvdSBhbG1vc3QgY2F1Z2h0IENhcHRhaW4gSmFjayBTcGFycm93IVwiLFxyXG4gICAgICAgICAgICBzb3VyY2U6IFwiUGlyYXRlcyBvZiB0aGUgQ2FyaWJiZWFuOiBUaGUgQ3Vyc2Ugb2YgdGhlIEJsYWNrIFBlYXJsXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVvdGU6XCJXZSdyZSBnb2luJyBzdHJlYWtpbmchXCIsXHJcbiAgICAgICAgICAgIHNvdXJjZTogXCJPbGQgU2Nob29sXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVvdGU6XCJJIGhhdmUgaGFkIGl0IHdpdGggdGhlc2UgbW90aGVyZnVja2luZyBzbmFrZXMgb24gdGhpcyBtb3RoZXJmdWNraW5nIHBsYW5lIVwiLFxyXG4gICAgICAgICAgICBzb3VyY2U6IFwiU25ha2VzIG9uIGEgUGxhbmVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdW90ZTpcIllvdSBtb3RvcmJvYXRpbicgc29uIG9mIGEgYml0Y2ghXCIsXHJcbiAgICAgICAgICAgIHNvdXJjZTogXCJXZWRkaW5nIENyYXNoZXJzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVvdGU6XCJXaGF0IGlzIHRoaXM/IEEgY2VudGVyIGZvciBhbnRzPyBIb3cgY2FuIHdlIGJlIGV4cGVjdGVkIHRvIHRlYWNoIGNoaWxkcmVuIHRvIGxlYXJuIGhvdyB0byByZWFkLi4uaWYgdGhleSBjYW4ndCBldmVuIGZpdCBpbnNpZGUgdGhlIGJ1aWxkaW5nP1wiLFxyXG4gICAgICAgICAgICBzb3VyY2U6IFwiWm9vbGFuZGVyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVvdGU6XCJJIGhhdmUgbmlwcGxlcyBHcmVnLiBDb3VsZCB5b3UgbWlsayBtZT9cIixcclxuICAgICAgICAgICAgc291cmNlOiBcIk1lZXQgdGhlIFBhcmVudHNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdW90ZTpcIldpdGggZ3JlYXQgcG93ZXIgY29tZXMgZ3JlYXQgcmVzcG9uc2liaWxpdHkuXCIsXHJcbiAgICAgICAgICAgIHNvdXJjZTogXCJTcGlkZXItTWFuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVvdGU6XCJZb3Ugc2hhbGwgbm90IHBhc3MhXCIsXHJcbiAgICAgICAgICAgIHNvdXJjZTogXCJMb3JkIG9mIHRoZSBSaW5nczogVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdW90ZTpcIkkgbG92ZSBsYW1wLlwiLFxyXG4gICAgICAgICAgICBzb3VyY2U6IFwiQW5jaG9ybWFuOiBUaGUgTGVnZW5kIG9mIFJvbiBCdXJndW5keVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1b3RlOlwiV2h5IHNvIHNlcmlvdXM/XCIsXHJcbiAgICAgICAgICAgIHNvdXJjZTogXCJUaGUgRGFyayBLbmlnaHRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdW90ZTpcIllvdSdyZSBhIHdpemFyZCwgSGFycnkuXCIsXHJcbiAgICAgICAgICAgIHNvdXJjZTogXCJIYXJyeSBQb3R0ZXIgYW5kIHRoZSBTb3JjZXJlcidzIFN0b25lXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVvdGU6XCJPcmdlcyBhcmUgbGlrZSBvbmlvbnMuXCIsXHJcbiAgICAgICAgICAgIHNvdXJjZTogXCJTaHJla1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1b3RlOlwiRG8geW91IGtub3cgd2hhdCBoYXBwZW5zIHRvIGEgdG9hZCB3aGVuIGl0J3Mgc3RydWNrIGJ5IGxpZ2h0bmluZz8gVGhlIHNhbWUgdGhpbmcgdGhhdCBoYXBwZW5zIHRvIGV2ZXJ5dGhpbmcgZWxzZS5cIixcclxuICAgICAgICAgICAgc291cmNlOiBcIlgtTWVuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVvdGU6XCJJIGRvbid0IGxpa2Ugc2FuZC4gSXQncyBhbGwgY29hcnNlLCBhbmQgcm91Z2gsIGFuZCBpcnJpdGF0aW5nLiBBbmQgaXQgZ2V0cyBldmVyeXdoZXJlLlwiLFxyXG4gICAgICAgICAgICBzb3VyY2U6IFwiU3RhciBXYXJzOiBFcGlzb2RlIElJIC0gQXR0YWNrIG9mIHRoZSBDbG9uZXNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdW90ZTpcIkRlYXIgOC1wb3VuZCwgNi1vdW5jZSBuZXdib3JuIGluZmFudCBKZXN1cy4uLlwiLFxyXG4gICAgICAgICAgICBzb3VyY2U6IFwiVGFsbGFkZWdhIE5pZ2h0czogVGhlIEJhbGxhZCBvZiBSaWNreSBCb2JieVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1b3RlOlwiWW91J3JlIHRlYXJpbmcgbWUgYXBhcnQsIExpc2EhXCIsXHJcbiAgICAgICAgICAgIHNvdXJjZTogXCJUaGUgUm9vbVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1b3RlOlwiSSdtIHRoZSBKdWdnZXJuYXV0LCBiaXRjaCFcIixcclxuICAgICAgICAgICAgc291cmNlOiBcIlgtTWVuOiBUaGUgTGFzdCBTdGFuZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1b3RlOlwiSSBzZWUgZGVhZCBwZW9wbGUuXCIsXHJcbiAgICAgICAgICAgIHNvdXJjZTogXCJUaGUgU2l4dGggU2Vuc2VcIlxyXG4gICAgICAgIH1cclxuICAgICAgICAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdW90ZTpcIlRoZSBmaXJzdCBydWxlIG9mIEZpZ2h0IENsdWIgaXM6IFlvdSBkbyBub3QgdGFsayBhYm91dCBGaWdodCBDbHViLlwiLFxyXG4gICAgICAgICAgICBzb3VyY2U6IFwiRmlnaHQgQ2x1YlwiXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcblxyXG4gICAgaW50ZXJmYWNlIFB1enpsZVxyXG4gICAge1xyXG4gICAgICAgIHF1b3RlOnN0cmluZztcclxuICAgICAgICBzb3VyY2U6c3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjaXBoZXI6c3RyaW5nID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcclxuICAgIGxldCBndWVzc0NpcGhlcjphbnkgPSB7fTtcclxuICAgIGxldCBwdXp6bGU6UHV6emxlfG51bGwgPSBudWxsO1xyXG4gICAgbGV0IGNyeXB0b2dyYW06c3RyaW5nO1xyXG4gICAgbGV0IGNvbWJpbmU6c3RyaW5nO1xyXG4gICAgbGV0IGlzVmljdG9yeTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBsZXQgd29yZHM6c3RyaW5nW107XHJcblxyXG4gICAgJDogXHJcbiAgICB7XHJcbiAgICAgICAgaWYoY3J5cHRvZ3JhbSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd29yZHMgPSAgY3J5cHRvZ3JhbS5zcGxpdCgvW1xcc1xcbl0rLyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlTmV3Q2lwaGVyKClcclxuICAgIHtcclxuICAgICAgICBjaXBoZXIgPSBzaHVmZmxlKCdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicuc3BsaXQoXCJcIikpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOZXcgQ2lwaGVyOiBcIiArIGNpcGhlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9maXNoZXIteWF0ZXMsIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheVxyXG4gICAgZnVuY3Rpb24gc2h1ZmZsZShhcnJheTpzdHJpbmdbXSkgXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCwgIHJhbmRvbUluZGV4O1xyXG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLlxyXG4gICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggPiAwKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC5cclxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXgtLTtcclxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAgICAgICBbYXJyYXlbY3VycmVudEluZGV4XSwgYXJyYXlbcmFuZG9tSW5kZXhdXSA9IFtcclxuICAgICAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdLCBhcnJheVtjdXJyZW50SW5kZXhdXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiByYW5kb21DeXB0b2dyYW0oKVxyXG4gICAge1xyXG4gICAgICAgIGlzVmljdG9yeSA9IGZhbHNlO1xyXG4gICAgICAgIGd1ZXNzQ2lwaGVyID0ge307XHJcbiAgICAgICAgLy9cclxuICAgICAgICBnZW5lcmF0ZU5ld0NpcGhlcigpO1xyXG4gICAgICAgIHB1enpsZSA9IHB1enpsZUxpc3Rbfn4oTWF0aC5yYW5kb20oKSAqIHB1enpsZUxpc3QubGVuZ3RoKV07XHJcbiAgICAgICAgY29tYmluZSA9IHB1enpsZS5xdW90ZSArIFwiXFxuIFwiICsgcHV6emxlLnNvdXJjZTtcclxuICAgICAgICBjcnlwdG9ncmFtID0gYXBwbHlDaXBoZXIoY29tYmluZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGx5Q2lwaGVyKHRleHQ6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRleHQgPSB0ZXh0LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgZm9yKHZhciBpID0wOyBpIDwgdGV4dC5sZW5ndGg7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNvbnZlcnRpbmcgXCIgKyB0ZXh0LmNoYXJBdChpKSk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRleHQuY2hhckNvZGVBdChpKSAtICdBJy5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgaW5kZXggPj0gY2lwaGVyLmxlbmd0aClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRleHQuY2hhckF0KGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGNpcGhlci5jaGFyQXQoaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb3JtYXRDaXBoZXIoZXZlbnQ6YW55LCBsZXR0ZXI6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBndWVzcyA9IGV2ZW50LmRhdGE7XHJcbiAgICAgICAgaWYoZ3Vlc3MgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGd1ZXNzQ2lwaGVyW2xldHRlcl0gPSBcIiBcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihndWVzcy5sZW5ndGggPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGd1ZXNzQ2lwaGVyW2xldHRlcl0gPSBcIiBcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihndWVzcy5sZW5ndGggPiAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ3Vlc3MgPSBndWVzc1tndWVzcy5sZW5ndGgtMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGd1ZXNzQ2lwaGVyW2xldHRlcl0gPSBndWVzcy50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGNoZWNrVmljdG9yeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrVmljdG9yeSgpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhndWVzc0NpcGhlcik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjaXBoZXIpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9MDsgaSA8IGNyeXB0b2dyYW0ubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGNpcGhlci5pbmRleE9mKGNyeXB0b2dyYW1baV0pIDwgMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGxldHRlciA9IGd1ZXNzQ2lwaGVyW2NyeXB0b2dyYW1baV1dO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwib3VyIGd1ZXNzIGlzOiBcIiArbGV0dGVyKVxyXG4gICAgICAgICAgICBpZihsZXR0ZXIgID09IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJHdWVzcyBjaXBoZXIgZG9lcyBub3QgY29udGFpbiBhIGxldHRlciBmb3IgOiBcIiArIGNyeXB0b2dyYW1baV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoY2lwaGVyW2xldHRlci5jaGFyQ29kZUF0KDApIC0gJ0EnLmNoYXJDb2RlQXQoMCldICE9IGNyeXB0b2dyYW1baV0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJHdWVzcyBjaXBoZXIgaXMgd3JvbmcgZm9yIGxldHRlciA6IFwiICsgY3J5cHRvZ3JhbVtpXSArIFwiLCBpczogXCIgKyBjaXBoZXJbbGV0dGVyLmNoYXJDb2RlQXQoMCktICdBJy5jaGFyQ29kZUF0KDApXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL29uc29sZS5sb2coXCJHdWVzcyBpcyBjb3JyZWN0IVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpc1ZpY3RvcnkgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3ZlbHRlOmhlYWQ+XHJcblx0PHRpdGxlPkNyeXB0b2dyYW08L3RpdGxlPlxyXG5cdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHdWVzcyB0aGUgQ3J5cHRvZ3JhbVwiIC8+XHJcbjwvc3ZlbHRlOmhlYWQ+XHJcblxyXG48ZGl2IGNsYXNzPVwiYmctYmFzZS0xMDAgaC1mdWxsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjkyLjI1dmhcIj4gICBcclxuXHQ8aDEgY2xhc3M9XCJ0ZXh0LTR4bCBwdC04IGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXJcIj5Nb3ZpZSBRdW90ZSBDcnlwdG9ncmFtITwvaDE+ICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1sZyBwdC0xIHRleHQtY2VudGVyIG1iLTggbXQtMSBtci0yIG1sLTJcIj5FYWNoIGNyeXB0b2dyYW0gaXMgYSBxdW90ZSBmcm9tIGEgbW92aWUsIGZvbGxvd2VkIGJ5IHRoZSBtb3ZpZSdzIG5hbWU8L2Rpdj4gXHJcbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIiBzdHlsZT1cIndoaXRlLXNwYWNlOiBwcmUtbGluZVwiPlxyXG4gICAgICAgIHsjaWYgcHV6emxlID09IG51bGx9XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgb246Y2xpY2s9e3JhbmRvbUN5cHRvZ3JhbX0+XHJcbiAgICAgICAgICAgICAgICBHZW5lcmF0ZSBDcnlwdG9ncmFtIVxyXG4gICAgICAgICAgICA8L2J1dHRvbj4gICAgICAgIFxyXG4gICAgICAgIHs6ZWxzZX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgZmxleC13cmFwIHBsYWNlLWNvbnRlbnQtY2VudGVyIGdhcC0xIG0tMVwiPlxyXG4gICAgICAgICAgICAgICAgeyNlYWNoIHdvcmRzIGFzIHdvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggcGxhY2UtY29udGVudC1ldmVubHkgZ2FwLTJcIj4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyNlYWNoIHdvcmQgYXMgbGV0dGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiBjaXBoZXIuaW5kZXhPZihsZXR0ZXIpID49IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgcGxhY2UtY29udGVudC1ldmVubHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGF0dGVybj1cIltBLVphLXpdezF9XCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGJnLXByaW1hcnlcIiBzdHlsZT1cIm1heC13aWR0aDoyMHB4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z3Vlc3NDaXBoZXJbbGV0dGVyXSA/PyBcIlwifSBvbjppbnB1dD17KGUpPT5mb3JtYXRDaXBoZXIoZSxsZXR0ZXIpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJfXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xldHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7OmVsc2UgaWYgbGV0dGVyID09ICdcXG4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtZ3JvdyBiYXNpcy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWdyb3cgYmFzaXMtZnVsbCB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBhbGlnbi1iYXNlbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7OmVsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xldHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvZWFjaH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBiYXNpcy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIHsvZWFjaH1cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICBcclxuICAgICAgICAgICAgeyNpZiBpc1ZpY3Rvcnl9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC0zeGwgbS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVmljdG9yeSFcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiBvbjpjbGljaz17cmFuZG9tQ3lwdG9ncmFtfT5cclxuICAgICAgICAgICAgICAgICAgICBHZW5lcmF0ZSBDcnlwdG9ncmFtIVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+ICAgXHJcbiAgICAgICAgICAgIHsvaWZ9XHJcbiAgICAgICAgey9pZn1cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6WyJwcmVyZW5kZXIiLCJjdHgiLCJpIiwiY3JlYXRlX2lmX2Jsb2NrXzEiLCJpbnNlcnRfaHlkcmF0aW9uIiwidGFyZ2V0IiwiZGl2IiwiYW5jaG9yIiwiYnV0dG9uIiwic2V0X2RhdGEiLCJ0MCIsInQwX3ZhbHVlIiwiZGl2MCIsImRpdjEiLCJkaXYyIiwiYXBwZW5kX2h5ZHJhdGlvbiIsImlucHV0IiwiaW5wdXRfdmFsdWVfdmFsdWUiLCJ0MyIsInQzX3ZhbHVlIiwic2hvd19pZiIsImNyZWF0ZV9pZl9ibG9ja18zIiwiY3JlYXRlX2lmX2Jsb2NrIiwibWV0YSIsImgxIiwic2h1ZmZsZSIsImFycmF5IiwiY3VycmVudEluZGV4IiwicmFuZG9tSW5kZXgiLCJwdXp6bGVMaXN0IiwiY2lwaGVyIiwiZ3Vlc3NDaXBoZXIiLCJwdXp6bGUiLCJjcnlwdG9ncmFtIiwiY29tYmluZSIsImlzVmljdG9yeSIsIndvcmRzIiwiZ2VuZXJhdGVOZXdDaXBoZXIiLCJyYW5kb21DeXB0b2dyYW0iLCIkJGludmFsaWRhdGUiLCJhcHBseUNpcGhlciIsInRleHQiLCJyZXN1bHQiLCJpbmRleCIsImZvcm1hdENpcGhlciIsImV2ZW50IiwibGV0dGVyIiwiZ3Vlc3MiLCJjaGVja1ZpY3RvcnkiLCJpbnB1dF9oYW5kbGVyIiwiZSJdLCJtYXBwaW5ncyI6IjRMQUlPLE1BQU1BLEVBQVksdVBDOE9GQyxFQUFLLENBQUEsdUJBQVYsT0FBSUMsR0FBQSx5QkErQkxELEVBQVMsQ0FBQSxHQUFBRSxFQUFBRixDQUFBLDBTQWhDZEcsRUErQk1DLEVBQUFDLEVBQUFDLENBQUEsb0dBOUJLTixFQUFLLENBQUEsb0JBQVYsT0FBSSxHQUFBLEVBQUEsaUhBQUosT0ErQkRBLEVBQVMsQ0FBQSwyS0FwQ29ELHNCQUVsRSw2REFGa0Usc0JBRWxFLDJFQUZBRyxFQUVTQyxFQUFBRyxFQUFBRCxDQUFBLDJCQUZ3Q04sRUFBZSxDQUFBLENBQUEs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