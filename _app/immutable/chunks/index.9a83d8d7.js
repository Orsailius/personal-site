function v(){}function nt(t,e){for(const n in e)t[n]=e[n];return t}function ct(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function U(t){return t()}function K(){return Object.create(null)}function k(t){t.forEach(U)}function z(t){return typeof t=="function"}function Ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Ot(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function it(t){return Object.keys(t).length===0}function rt(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t,e,n){t.$$.on_destroy.push(rt(e,n))}function Mt(t,e,n,c){if(t){const i=V(t,e,n,c);return t[0](i)}}function V(t,e,n,c){return t[1]&&c?nt(n.ctx.slice(),t[1](c(e))):n.ctx}function Dt(t,e,n,c){if(t[2]&&c){const i=t[2](c(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],r=Math.max(e.dirty.length,i.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|i[o];return l}return e.dirty|i}return e.dirty}function Pt(t,e,n,c,i,l){if(i){const r=V(e,n,c,l);t.p(r,i)}}function qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let c=0;c<n;c++)e[c]=-1;return e}return-1}function Lt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Bt(t){return t??""}function Ht(t){return t&&z(t.destroy)?t.destroy:v}const zt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let C=!1;function st(){C=!0}function lt(){C=!1}function ut(t,e,n,c){for(;t<e;){const i=t+(e-t>>1);n(i)<=c?t=i+1:e=i}return t}function ot(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&s.push(_)}e=s}const n=new Int32Array(e.length+1),c=new Int32Array(e.length);n[0]=-1;let i=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,_=(i>0&&e[n[i]].claim_order<=u?i+1:ut(1,i,a=>e[n[a]].claim_order,u))-1;c[s]=n[_]+1;const d=_+1;n[d]=s,i=Math.max(d,i)}const l=[],r=[];let o=e.length-1;for(let s=n[i]+1;s!=0;s=c[s-1]){for(l.push(e[s-1]);o>=s;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<r.length;s++){for(;u<l.length&&r[s].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(r[s],_)}}function at(t,e){if(C){for(ot(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ft(t,e,n){C&&!n?at(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ft(t){t.parentNode&&t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _t(t){return document.createElement(t)}function dt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function Rt(){return F(" ")}function Wt(){return F("")}function Gt(t,e,n,c){return t.addEventListener(e,n,c),()=>t.removeEventListener(e,n,c)}function X(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const ht=["width","height"];function mt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const c in e)e[c]==null?t.removeAttribute(c):c==="style"?t.style.cssText=e[c]:c==="__value"?t.value=t[c]=e[c]:n[c]&&n[c].set&&ht.indexOf(c)===-1?t[c]=e[c]:X(t,c,e[c])}function pt(t,e){Object.keys(e).forEach(n=>{yt(t,n,e[n])})}function yt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:X(t,e,n)}function Jt(t){return/-/.test(t)?pt:mt}function Kt(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function Qt(t){let e;return{p(...n){e=n,e.forEach(c=>t.push(c))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Ut(t){return t===""?null:+t}function gt(t){return Array.from(t.childNodes)}function bt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Y(t,e,n,c,i=!1){bt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const s=n(o);return s===void 0?t.splice(r,1):t[r]=s,i||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const s=n(o);return s===void 0?t.splice(r,1):t[r]=s,i?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return c()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Z(t,e,n,c){return Y(t,i=>i.nodeName===e,i=>{const l=[];for(let r=0;r<i.attributes.length;r++){const o=i.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>i.removeAttribute(r))},()=>c(e))}function Vt(t,e,n){return Z(t,e,n,_t)}function Xt(t,e,n){return Z(t,e,n,dt)}function xt(t,e){return Y(t,n=>n.nodeType===3,n=>{const c=""+e;if(n.data.startsWith(c)){if(n.data.length!==c.length)return n.splitText(c.length)}else n.data=c},()=>F(e),!0)}function Yt(t){return xt(t," ")}function Zt(t,e){e=""+e,t.data!==e&&(t.data=e)}function te(t,e){t.value=e??""}function ee(t,e,n,c){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,c?"important":"")}function ne(t,e,n){for(let c=0;c<t.options.length;c+=1){const i=t.options[c];if(i.__value===e){i.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function ce(t){const e=t.querySelector(":checked");return e&&e.__value}function ie(t,e,n){t.classList[n?"add":"remove"](e)}function wt(t,e,{bubbles:n=!1,cancelable:c=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,c,e),i}function re(t,e){const n=[];let c=0;for(const i of e.childNodes)if(i.nodeType===8){const l=i.textContent.trim();l===`HEAD_${t}_END`?(c-=1,n.push(i)):l===`HEAD_${t}_START`&&(c+=1,n.push(i))}else c>0&&n.push(i);return n}function se(t,e){return new t(e)}let E;function g(t){E=t}function O(){if(!E)throw new Error("Function called outside component initialization");return E}function le(t){O().$$.on_mount.push(t)}function ue(t){O().$$.after_update.push(t)}function oe(){const t=O();return(e,n,{cancelable:c=!1}={})=>{const i=t.$$.callbacks[e];if(i){const l=wt(e,n,{cancelable:c});return i.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}const w=[],Q=[];let $=[];const L=[],tt=Promise.resolve();let B=!1;function et(){B||(B=!0,tt.then(I))}function ae(){return et(),tt}function H(t){$.push(t)}function fe(t){L.push(t)}const q=new Set;let x=0;function I(){if(x!==0)return;const t=E;do{try{for(;x<w.length;){const e=w[x];x++,g(e),$t(e.$$)}}catch(e){throw w.length=0,x=0,e}for(g(null),w.length=0,x=0;Q.length;)Q.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];q.has(n)||(q.add(n),n())}$.length=0}while(w.length);for(;L.length;)L.pop()();B=!1,q.clear(),g(t)}function $t(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}function kt(t){const e=[],n=[];$.forEach(c=>t.indexOf(c)===-1?e.push(c):n.push(c)),n.forEach(c=>c()),$=e}const j=new Set;let b;function vt(){b={r:0,c:[],p:b}}function Et(){b.r||k(b.c),b=b.p}function R(t,e){t&&t.i&&(j.delete(t),t.i(e))}function Nt(t,e,n,c){if(t&&t.o){if(j.has(t))return;j.add(t),b.c.push(()=>{j.delete(t),c&&(n&&t.d(1),c())}),t.o(e)}else c&&c()}function _e(t,e){const n=e.token={};function c(i,l,r,o){if(e.token!==n)return;e.resolved=o;let s=e.ctx;r!==void 0&&(s=s.slice(),s[r]=o);const u=i&&(e.current=i)(s);let _=!1;e.block&&(e.blocks?e.blocks.forEach((d,a)=>{a!==l&&d&&(vt(),Nt(d,1,1,()=>{e.blocks[a]===d&&(e.blocks[a]=null)}),Et())}):e.block.d(1),u.c(),R(u,1),u.m(e.mount(),e.anchor),_=!0),e.block=u,e.blocks&&(e.blocks[l]=u),_&&I()}if(ct(t)){const i=O();if(t.then(l=>{g(i),c(e.then,1,e.value,l),g(null)},l=>{if(g(i),c(e.catch,2,e.error,l),g(null),!e.hasCatch)throw l}),e.current!==e.pending)return c(e.pending,0),!0}else{if(e.current!==e.then)return c(e.then,1,e.value,t),!0;e.resolved=t}}function de(t,e,n){const c=e.slice(),{resolved:i}=t;t.current===t.then&&(c[t.value]=i),t.current===t.catch&&(c[t.error]=i),t.block.p(c,n)}function he(t,e){t.d(1),e.delete(t.key)}function me(t,e,n,c,i,l,r,o,s,u,_,d){let a=t.length,m=l.length,h=a;const T={};for(;h--;)T[t[h].key]=h;const N=[],M=new Map,D=new Map,W=[];for(h=m;h--;){const f=d(i,l,h),p=n(f);let y=r.get(p);y?c&&W.push(()=>y.p(f,e)):(y=u(p,f),y.c()),M.set(p,N[h]=y),p in T&&D.set(p,Math.abs(h-T[p]))}const G=new Set,J=new Set;function P(f){R(f,1),f.m(o,_),r.set(f.key,f),_=f.first,m--}for(;a&&m;){const f=N[m-1],p=t[a-1],y=f.key,S=p.key;f===p?(_=f.first,a--,m--):M.has(S)?!r.has(y)||G.has(y)?P(f):J.has(S)?a--:D.get(y)>D.get(S)?(J.add(y),P(f)):(G.add(S),a--):(s(p,r),a--)}for(;a--;){const f=t[a];M.has(f.key)||s(f,r)}for(;m;)P(N[m-1]);return k(W),N}function pe(t,e){const n={},c={},i={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const s in r)s in o||(c[s]=1);for(const s in o)i[s]||(n[s]=o[s],i[s]=1);t[l]=o}else for(const s in r)i[s]=1}for(const r in c)r in n||(n[r]=void 0);return n}function ye(t){return typeof t=="object"&&t!==null?t:{}}function ge(t,e,n){const c=t.$$.props[e];c!==void 0&&(t.$$.bound[c]=n,n(t.$$.ctx[c]))}function be(t){t&&t.c()}function xe(t,e){t&&t.l(e)}function St(t,e,n,c){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),c||H(()=>{const r=t.$$.on_mount.map(U).filter(z);t.$$.on_destroy?t.$$.on_destroy.push(...r):k(r),t.$$.on_mount=[]}),l.forEach(H)}function At(t,e){const n=t.$$;n.fragment!==null&&(kt(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function jt(t,e){t.$$.dirty[0]===-1&&(w.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function we(t,e,n,c,i,l,r,o=[-1]){const s=E;g(t);const u=t.$$={fragment:null,ctx:[],props:l,update:v,not_equal:i,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:K(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(d,a,...m)=>{const h=m.length?m[0]:a;return u.ctx&&i(u.ctx[d],u.ctx[d]=h)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](h),_&&jt(t,d)),a}):[],u.update(),_=!0,k(u.before_update),u.fragment=c?c(u.ctx):!1,e.target){if(e.hydrate){st();const d=gt(e.target);u.fragment&&u.fragment.l(d),d.forEach(ft)}else u.fragment&&u.fragment.c();e.intro&&R(t.$$.fragment),St(t,e.target,e.anchor,e.customElement),lt(),I()}g(s)}class $e{$destroy(){At(this,1),this.$destroy=v}$on(e,n){if(!z(n))return v;const c=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return c.push(n),()=>{const i=c.indexOf(n);i!==-1&&c.splice(i,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{zt as $,St as A,At as B,dt as C,Xt as D,at as E,v as F,It as G,Mt as H,Pt as I,qt as J,Dt as K,Tt as L,re as M,Ot as N,Bt as O,te as P,Gt as Q,k as R,$e as S,Qt as T,ge as U,Kt as V,H as W,ne as X,fe as Y,Ut as Z,ce as _,Rt as a,pe as a0,ye as a1,nt as a2,oe as a3,me as a4,he as a5,Ht as a6,z as a7,Lt as a8,_e as a9,de as aa,Jt as ab,ie as ac,Ft as b,Yt as c,Nt as d,Wt as e,Et as f,R as g,ft as h,we as i,ue as j,_t as k,Vt as l,gt as m,X as n,le as o,ee as p,F as q,xt as r,Ct as s,ae as t,Zt as u,vt as v,Q as w,se as x,be as y,xe as z};
