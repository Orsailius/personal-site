import{a as l,r}from"./animationSetup.7627b127.js";import{w as m,t as f}from"./writeEffect.31c2c2fe.js";import{u}from"./unwriteEffect.f143546f.js";const L=async(a,o)=>{const{options:t,elements:s}=l(a,o);for(const i of s){const{currentNode:e,text:p}=i;await m(i,t);const c=p.replaceAll("&","&amp;");e.innerHTML===c&&(t.dispatch("done"),await f(t.wordInterval),s.indexOf(i)===s.length-1||(await u(e,t),r(e,t.parentElement,n=>{e===n?n.classList.remove("typing"):n.classList.remove("finished-typing")})),r(e,t.parentElement,n=>{typeof t.keepCursorOnFinish=="number"&&setTimeout(()=>{n.classList.replace("typing","finished-typing")},t.keepCursorOnFinish)}))}return{update(){},destroy(){}}};export{L as default};