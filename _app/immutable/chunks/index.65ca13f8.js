function v(){}function oe(e,t){for(const n in t)e[n]=t[n];return e}function Q(e){return e()}function I(){return Object.create(null)}function E(e){e.forEach(Q)}function H(e){return typeof e=="function"}function Te(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let M;function je(e,t){return M||(M=document.createElement("a")),M.href=t,e===M.href}function ce(e){return Object.keys(e).length===0}function le(e,...t){if(e==null)return v;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ce(e,t,n){e.$$.on_destroy.push(le(t,n))}function De(e,t,n,i){if(e){const s=U(e,t,n,i);return e[0](s)}}function U(e,t,n,i){return e[1]&&i?oe(n.ctx.slice(),e[1](i(t))):n.ctx}function Oe(e,t,n,i){if(e[2]&&i){const s=e[2](i(n));if(t.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(t.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=t.dirty[l]|s[l];return c}return t.dirty|s}return t.dirty}function qe(e,t,n,i,s,c){if(s){const r=U(t,n,i,c);e.p(r,s)}}function Pe(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}function Le(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function ze(e){return e??""}function Be(e,t,n){return e.set(n),t}function He(e){return e&&H(e.destroy)?e.destroy:v}const V=typeof window<"u";let We=V?()=>window.performance.now():()=>Date.now(),X=V?e=>requestAnimationFrame(e):v;const x=new Set;function Y(e){x.forEach(t=>{t.c(e)||(x.delete(t),t.f())}),x.size!==0&&X(Y)}function Fe(e){let t;return x.size===0&&X(Y),{promise:new Promise(n=>{x.add(t={c:e,f:n})}),abort(){x.delete(t)}}}const ae=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in ae;let j=!1;function ue(){j=!0}function fe(){j=!1}function de(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function _e(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const o=[];for(let a=0;a<t.length;a++){const f=t[a];f.claim_order!==void 0&&o.push(f)}t=o}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let o=0;o<t.length;o++){const a=t[o].claim_order,f=(s>0&&t[n[s]].claim_order<=a?s+1:de(1,s,d=>t[n[d]].claim_order,a))-1;i[o]=n[f]+1;const _=f+1;n[_]=o,s=Math.max(_,s)}const c=[],r=[];let l=t.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(t[o-1]);l>=o;l--)r.push(t[l]);l--}for(;l>=0;l--)r.push(t[l]);c.reverse(),r.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<r.length;o++){for(;a<c.length&&r[o].claim_order>=c[a].claim_order;)a++;const f=a<c.length?c[a]:null;e.insertBefore(r[o],f)}}function he(e,t){if(j){for(_e(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function Re(e,t,n){j&&!n?he(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function me(e){e.parentNode&&e.parentNode.removeChild(e)}function Ge(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function pe(e){return document.createElement(e)}function ye(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function W(e){return document.createTextNode(e)}function Ie(){return W(" ")}function Je(){return W("")}function Ke(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function Z(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const ge=["width","height"];function Qe(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)t[i]==null?e.removeAttribute(i):i==="style"?e.style.cssText=t[i]:i==="__value"?e.value=e[i]=t[i]:n[i]&&n[i].set&&ge.indexOf(i)===-1?e[i]=t[i]:Z(e,i,t[i])}function Ue(e,t){for(const n in t)Z(e,n,t[n])}function we(e){return Array.from(e.childNodes)}function be(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function ee(e,t,n,i,s=!1){be(e);const c=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const l=e[r];if(t(l)){const o=n(l);return o===void 0?e.splice(r,1):e[r]=o,s||(e.claim_info.last_index=r),l}}for(let r=e.claim_info.last_index-1;r>=0;r--){const l=e[r];if(t(l)){const o=n(l);return o===void 0?e.splice(r,1):e[r]=o,s?o===void 0&&e.claim_info.last_index--:e.claim_info.last_index=r,l}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function te(e,t,n,i){return ee(e,s=>s.nodeName===t,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(t))}function Ve(e,t,n){return te(e,t,n,pe)}function Xe(e,t,n){return te(e,t,n,ye)}function xe(e,t){return ee(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(t),!0)}function Ye(e){return xe(e," ")}function Ze(e,t){t=""+t,e.data!==t&&(e.data=t)}function et(e,t){e.value=t??""}function tt(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function nt(e,t,n){e.classList[n?"add":"remove"](t)}function $e(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,i,t),s}function it(e,t){const n=[];let i=0;for(const s of t.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${e}_END`?(i-=1,n.push(s)):c===`HEAD_${e}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function st(e,t){return new e(t)}let N;function k(e){N=e}function C(){if(!N)throw new Error("Function called outside component initialization");return N}function rt(e){C().$$.on_mount.push(e)}function ot(e){C().$$.after_update.push(e)}function ct(e){C().$$.on_destroy.push(e)}function lt(){const e=C();return(t,n,{cancelable:i=!1}={})=>{const s=e.$$.callbacks[t];if(s){const c=$e(t,n,{cancelable:i});return s.slice().forEach(r=>{r.call(e,c)}),!c.defaultPrevented}return!0}}function at(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(i=>i.call(this,t))}const b=[],J=[];let $=[];const K=[],ne=Promise.resolve();let z=!1;function ie(){z||(z=!0,ne.then(se))}function ut(){return ie(),ne}function B(e){$.push(e)}const L=new Set;let w=0;function se(){if(w!==0)return;const e=N;do{try{for(;w<b.length;){const t=b[w];w++,k(t),ve(t.$$)}}catch(t){throw b.length=0,w=0,t}for(k(null),b.length=0,w=0;J.length;)J.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];L.has(n)||(L.add(n),n())}$.length=0}while(b.length);for(;K.length;)K.pop()();z=!1,L.clear(),k(e)}function ve(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}function Ee(e){const t=[],n=[];$.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),$=t}const T=new Set;let g;function ft(){g={r:0,c:[],p:g}}function dt(){g.r||E(g.c),g=g.p}function re(e,t){e&&e.i&&(T.delete(e),e.i(t))}function ke(e,t,n,i){if(e&&e.o){if(T.has(e))return;T.add(e),g.c.push(()=>{T.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function _t(e,t){ke(e,1,1,()=>{t.delete(e.key)})}function ht(e,t,n,i,s,c,r,l,o,a,f,_){let d=e.length,m=c.length,h=d;const D={};for(;h--;)D[e[h].key]=h;const S=[],O=new Map,q=new Map,F=[];for(h=m;h--;){const u=_(s,c,h),p=n(u);let y=r.get(p);y?i&&F.push(()=>y.p(u,t)):(y=a(p,u),y.c()),O.set(p,S[h]=y),p in D&&q.set(p,Math.abs(h-D[p]))}const R=new Set,G=new Set;function P(u){re(u,1),u.m(l,f),r.set(u.key,u),f=u.first,m--}for(;d&&m;){const u=S[m-1],p=e[d-1],y=u.key,A=p.key;u===p?(f=u.first,d--,m--):O.has(A)?!r.has(y)||R.has(y)?P(u):G.has(A)?d--:q.get(y)>q.get(A)?(G.add(y),P(u)):(R.add(A),d--):(o(p,r),d--)}for(;d--;){const u=e[d];O.has(u.key)||o(u,r)}for(;m;)P(S[m-1]);return E(F),S}function mt(e,t){const n={},i={},s={$$scope:1};let c=e.length;for(;c--;){const r=e[c],l=t[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(n[o]=l[o],s[o]=1);e[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}const Ne=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Ne];function pt(e){e&&e.c()}function yt(e,t){e&&e.l(t)}function Se(e,t,n,i){const{fragment:s,after_update:c}=e.$$;s&&s.m(t,n),i||B(()=>{const r=e.$$.on_mount.map(Q).filter(H);e.$$.on_destroy?e.$$.on_destroy.push(...r):E(r),e.$$.on_mount=[]}),c.forEach(B)}function Ae(e,t){const n=e.$$;n.fragment!==null&&(Ee(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Me(e,t){e.$$.dirty[0]===-1&&(b.push(e),ie(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function gt(e,t,n,i,s,c,r,l=[-1]){const o=N;k(e);const a=e.$$={fragment:null,ctx:[],props:c,update:v,not_equal:s,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:I(),dirty:l,skip_bound:!1,root:t.target||o.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(e,t.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return a.ctx&&s(a.ctx[_],a.ctx[_]=h)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](h),f&&Me(e,_)),d}):[],a.update(),f=!0,E(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){ue();const _=we(t.target);a.fragment&&a.fragment.l(_),_.forEach(me)}else a.fragment&&a.fragment.c();t.intro&&re(e.$$.fragment),Se(e,t.target,t.anchor,t.customElement),fe(),se()}k(o)}class wt{$destroy(){Ae(this,1),this.$destroy=v}$on(t,n){if(!H(n))return v;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{Ge as $,Se as A,Ae as B,ye as C,Xe as D,je as E,he as F,v as G,Ce as H,De as I,qe as J,Pe as K,Oe as L,We as M,Fe as N,Ke as O,E as P,ht as Q,_t as R,wt as S,ct as T,oe as U,Le as V,Qe as W,mt as X,Ue as Y,lt as Z,et as _,Ie as a,ze as a0,He as a1,at as a2,nt as a3,Be as a4,it as a5,Re as b,Ye as c,ke as d,Je as e,dt as f,re as g,me as h,gt as i,ot as j,pe as k,Ve as l,we as m,Z as n,rt as o,tt as p,W as q,xe as r,Te as s,ut as t,Ze as u,ft as v,J as w,st as x,pt as y,yt as z};