function k(){}function at(t,e){for(const n in e)t[n]=e[n];return t}function ft(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Y(t){return t()}function Q(){return Object.create(null)}function E(t){t.forEach(Y)}function R(t){return typeof t=="function"}function Ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Dt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function _t(t){return Object.keys(t).length===0}function Z(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Pt(t){let e;return Z(t,n=>e=n)(),e}function qt(t,e,n){t.$$.on_destroy.push(Z(e,n))}function Bt(t,e,n,i){if(t){const s=tt(t,e,n,i);return t[0](s)}}function tt(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Gt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],c=Math.max(e.dirty.length,s.length);for(let u=0;u<c;u+=1)l[u]=e.dirty[u]|s[u];return l}return e.dirty|s}return e.dirty}function Rt(t,e,n,i,s,l){if(s){const c=tt(e,n,i,l);t.p(c,s)}}function zt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ft(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function It(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Wt(t){return t??""}function Jt(t,e,n){return t.set(n),e}function Kt(t){return t&&R(t.destroy)?t.destroy:k}const Qt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let C=!1;function dt(){C=!0}function ht(){C=!1}function mt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let o=0;o<e.length;o++){const _=e[o];_.claim_order!==void 0&&r.push(_)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const o=e[r].claim_order,_=(s>0&&e[n[s]].claim_order<=o?s+1:mt(1,s,a=>e[n[a]].claim_order,o))-1;i[r]=n[_]+1;const d=_+1;n[d]=r,s=Math.max(d,s)}const l=[],c=[];let u=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(l.push(e[r-1]);u>=r;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);l.reverse(),c.sort((r,o)=>r.claim_order-o.claim_order);for(let r=0,o=0;r<c.length;r++){for(;o<l.length&&c[r].claim_order>=l[o].claim_order;)o++;const _=o<l.length?l[o]:null;t.insertBefore(c[r],_)}}function yt(t,e){if(C){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){t.insertBefore(e,n||null)}function bt(t,e,n){C&&!n?yt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function j(t){t.parentNode&&t.parentNode.removeChild(t)}function Ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function Vt(){return z(" ")}function Xt(){return z("")}function Yt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function it(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const xt=["width","height"];function wt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&xt.indexOf(i)===-1?t[i]=e[i]:it(t,i,e[i])}function $t(t,e){Object.keys(e).forEach(n=>{Et(t,n,e[n])})}function Et(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:it(t,e,n)}function Zt(t){return/-/.test(t)?$t:wt}function te(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function ee(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function ne(t){return t===""?null:+t}function kt(t){return Array.from(t.childNodes)}function st(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,s=!1){st(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const r=n(u);return r===void 0?t.splice(c,1):t[c]=r,s||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const r=n(u);return r===void 0?t.splice(c,1):t[c]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function rt(t,e,n,i){return ct(t,s=>s.nodeName===e,s=>{const l=[];for(let c=0;c<s.attributes.length;c++){const u=s.attributes[c];n[u.name]||l.push(u.name)}l.forEach(c=>s.removeAttribute(c))},()=>i(e))}function ie(t,e,n){return rt(t,e,n,et)}function se(t,e,n){return rt(t,e,n,nt)}function vt(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function ce(t){return vt(t," ")}function U(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function re(t,e){const n=U(t,"HTML_TAG_START",0),i=U(t,"HTML_TAG_END",n);if(n===i)return new V(void 0,e);st(t);const s=t.splice(n,i-n+1);j(s[0]),j(s[s.length-1]);const l=s.slice(1,s.length-1);for(const c of l)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new V(l,e)}function le(t,e){e=""+e,t.data!==e&&(t.data=e)}function oe(t,e){t.value=e??""}function ue(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ae(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function fe(t){const e=t.querySelector(":checked");return e&&e.__value}function _e(t,e,n){t.classList[n?"add":"remove"](e)}function Tt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function de(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Nt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=nt(n.nodeName):this.e=et(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)gt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(j)}}class V extends Nt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)bt(this.t,this.n[n],e)}}function he(t,e){return new t(e)}let v;function g(t){v=t}function T(){if(!v)throw new Error("Function called outside component initialization");return v}function me(t){T().$$.on_mount.push(t)}function pe(t){T().$$.after_update.push(t)}function ye(t){T().$$.on_destroy.push(t)}function ge(){const t=T();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=Tt(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}const w=[],X=[];let $=[];const q=[],lt=Promise.resolve();let B=!1;function ot(){B||(B=!0,lt.then(F))}function be(){return ot(),lt}function G(t){$.push(t)}function xe(t){q.push(t)}const P=new Set;let x=0;function F(){if(x!==0)return;const t=v;do{try{for(;x<w.length;){const e=w[x];x++,g(e),At(e.$$)}}catch(e){throw w.length=0,x=0,e}for(g(null),w.length=0,x=0;X.length;)X.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];P.has(n)||(P.add(n),n())}$.length=0}while(w.length);for(;q.length;)q.pop()();B=!1,P.clear(),g(t)}function At(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}function St(t){const e=[],n=[];$.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),$=e}const M=new Set;let b;function Mt(){b={r:0,c:[],p:b}}function jt(){b.r||E(b.c),b=b.p}function I(t,e){t&&t.i&&(M.delete(t),t.i(e))}function ut(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),b.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function we(t,e){const n=e.token={};function i(s,l,c,u){if(e.token!==n)return;e.resolved=u;let r=e.ctx;c!==void 0&&(r=r.slice(),r[c]=u);const o=s&&(e.current=s)(r);let _=!1;e.block&&(e.blocks?e.blocks.forEach((d,a)=>{a!==l&&d&&(Mt(),ut(d,1,1,()=>{e.blocks[a]===d&&(e.blocks[a]=null)}),jt())}):e.block.d(1),o.c(),I(o,1),o.m(e.mount(),e.anchor),_=!0),e.block=o,e.blocks&&(e.blocks[l]=o),_&&F()}if(ft(t)){const s=T();if(t.then(l=>{g(s),i(e.then,1,e.value,l),g(null)},l=>{if(g(s),i(e.catch,2,e.error,l),g(null),!e.hasCatch)throw l}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function $e(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}function Ee(t,e){t.d(1),e.delete(t.key)}function ke(t,e){ut(t,1,1,()=>{e.delete(t.key)})}function ve(t,e,n,i,s,l,c,u,r,o,_,d){let a=t.length,m=l.length,h=a;const L={};for(;h--;)L[t[h].key]=h;const N=[],H=new Map,O=new Map,W=[];for(h=m;h--;){const f=d(s,l,h),p=n(f);let y=c.get(p);y?i&&W.push(()=>y.p(f,e)):(y=o(p,f),y.c()),H.set(p,N[h]=y),p in L&&O.set(p,Math.abs(h-L[p]))}const J=new Set,K=new Set;function D(f){I(f,1),f.m(u,_),c.set(f.key,f),_=f.first,m--}for(;a&&m;){const f=N[m-1],p=t[a-1],y=f.key,A=p.key;f===p?(_=f.first,a--,m--):H.has(A)?!c.has(y)||J.has(y)?D(f):K.has(A)?a--:O.get(y)>O.get(A)?(K.add(y),D(f)):(J.add(A),a--):(r(p,c),a--)}for(;a--;){const f=t[a];H.has(f.key)||r(f,c)}for(;m;)D(N[m-1]);return E(W),N}function Te(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const c=t[l],u=e[l];if(u){for(const r in c)r in u||(i[r]=1);for(const r in u)s[r]||(n[r]=u[r],s[r]=1);t[l]=u}else for(const r in c)s[r]=1}for(const c in i)c in n||(n[c]=void 0);return n}function Ne(t){return typeof t=="object"&&t!==null?t:{}}function Ae(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Se(t){t&&t.c()}function Me(t,e){t&&t.l(e)}function Ct(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||G(()=>{const c=t.$$.on_mount.map(Y).filter(R);t.$$.on_destroy?t.$$.on_destroy.push(...c):E(c),t.$$.on_mount=[]}),l.forEach(G)}function Lt(t,e){const n=t.$$;n.fragment!==null&&(St(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(w.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function je(t,e,n,i,s,l,c,u=[-1]){const r=v;g(t);const o=t.$$={fragment:null,ctx:[],props:l,update:k,not_equal:s,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:Q(),dirty:u,skip_bound:!1,root:e.target||r.$$.root};c&&c(o.root);let _=!1;if(o.ctx=n?n(t,e.props||{},(d,a,...m)=>{const h=m.length?m[0]:a;return o.ctx&&s(o.ctx[d],o.ctx[d]=h)&&(!o.skip_bound&&o.bound[d]&&o.bound[d](h),_&&Ht(t,d)),a}):[],o.update(),_=!0,E(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){dt();const d=kt(e.target);o.fragment&&o.fragment.l(d),d.forEach(j)}else o.fragment&&o.fragment.c();e.intro&&I(t.$$.fragment),Ct(t,e.target,e.anchor,e.customElement),ht(),F()}g(r)}class Ce{$destroy(){Lt(this,1),this.$destroy=k}$on(e,n){if(!R(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{oe as $,Ct as A,Lt as B,Bt as C,yt as D,Rt as E,zt as F,Gt as G,k as H,qt as I,Ut as J,Wt as K,Yt as L,E as M,de as N,nt as O,se as P,Dt as Q,ve as R,Ce as S,Kt as T,R as U,ke as V,Ee as W,ye as X,Z as Y,Pt as Z,ne as _,Vt as a,G as a0,ae as a1,fe as a2,Ae as a3,xe as a4,te as a5,_e as a6,Jt as a7,V as a8,re as a9,ee as aa,Qt as ab,Te as ac,Ne as ad,at as ae,ge as af,F as ag,wt as ah,It as ai,Ft as aj,we as ak,$e as al,Zt as am,bt as b,ce as c,ut as d,Xt as e,jt as f,I as g,j as h,je as i,pe as j,et as k,ie as l,kt as m,it as n,me as o,ue as p,z as q,vt as r,Ot as s,be as t,le as u,Mt as v,X as w,he as x,Se as y,Me as z};
