import{S as ke,i as we,s as be,k as v,q as H,a as M,l as _,m,r as L,h as o,c as T,n as s,b as U,D as l,u as he,g as F,v as xe,f as Ee,d as Z,J as De,y as ce,z as ue,A as de,B as fe,p as me,K as _e,L as ye,M as qe,H as pe,e as ze,N as Qe,O as ae,P as oe,Q as Ue}from"../chunks/index.28ef7f4c.js";import{S as Ze}from"../chunks/ProjectCard.svelte_svelte_type_style_lang.edfe2d8d.js";import{C as We}from"../chunks/CustomGylph.925fa3de.js";const Ke=!0,ht=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ke},Symbol.toStringTag,{value:"Module"}));function Pe(n,e,r){const t=n.slice();return t[2]=e[r],t}function Be(n){let e,r;return e=new Ze({props:{skill:n[2]}}),{c(){ce(e.$$.fragment)},l(t){ue(e.$$.fragment,t)},m(t,u){de(e,t,u),r=!0},p(t,u){const c={};u&1&&(c.skill=t[2]),e.$set(c)},i(t){r||(F(e.$$.fragment,t),r=!0)},o(t){Z(e.$$.fragment,t),r=!1},d(t){fe(e,t)}}}function Xe(n){let e,r,t,u,c,y,k=n[0],i=[];for(let a=0;a<k.length;a+=1)i[a]=Be(Pe(n,k,a));const j=a=>Z(i[a],1,1,()=>{i[a]=null});return{c(){e=v("div"),r=v("div"),t=H(n[1]),u=M(),c=v("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=_(a,"DIV",{});var f=m(e);r=_(f,"DIV",{class:!0});var p=m(r);t=L(p,n[1]),p.forEach(o),u=T(f),c=_(f,"DIV",{class:!0});var G=m(c);for(let w=0;w<i.length;w+=1)i[w].l(G);G.forEach(o),f.forEach(o),this.h()},h(){s(r,"class","w-full text-center text-4xl text-white font-semibold mb-6"),s(c,"class","grid grid-cols-1 md:grid-cols-2 lg:flex flex-wrap gap-2 m-2 max-w-screen-lg relative overflow-x-auto items-center justify-center")},m(a,f){U(a,e,f),l(e,r),l(r,t),l(e,u),l(e,c);for(let p=0;p<i.length;p+=1)i[p]&&i[p].m(c,null);y=!0},p(a,[f]){if((!y||f&2)&&he(t,a[1]),f&1){k=a[0];let p;for(p=0;p<k.length;p+=1){const G=Pe(a,k,p);i[p]?(i[p].p(G,f),F(i[p],1)):(i[p]=Be(G),i[p].c(),F(i[p],1),i[p].m(c,null))}for(xe(),p=k.length;p<i.length;p+=1)j(p);Ee()}},i(a){if(!y){for(let f=0;f<k.length;f+=1)F(i[f]);y=!0}},o(a){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)Z(i[f]);y=!1},d(a){a&&o(e),De(i,a)}}}function Ye(n,e,r){let{skills:t}=e,{title:u}=e;return n.$$set=c=>{"skills"in c&&r(0,t=c.skills),"title"in c&&r(1,u=c.title)},[t,u]}class He extends ke{constructor(e){super(),we(this,e,Ye,Xe,be,{skills:0,title:1})}}let et=[{name:"Unity",icon:"",fluency:4},{name:"Visual Studio",icon:"",fluency:4},{name:"Eclipse",icon:"",fluency:4},{name:"Godot",icon:"",fluency:2},{name:"Blender",icon:"",fluency:0}],tt=[{name:"C#",icon:"",fluency:4},{name:"Java",icon:"",fluency:4},{name:"Javascript",icon:"",fluency:4},{name:"HTML 5",icon:"",fluency:4},{name:"Typescript",icon:"",fluency:3},{name:"Python",icon:"src/lib/images/python-logo-only.svg",fluency:2},{name:"Julia",icon:"src/lib/images/python-logo-only.svg",fluency:2},{name:"Ruby",icon:"",fluency:1},{name:"GDScript",icon:"",fluency:1},{name:"C++",icon:"",fluency:0},{name:"SQL",icon:"",fluency:1},{name:"C",icon:"",fluency:0}];var Ie=(n=>(n[n.Game=0]="Game",n[n.Tool=1]="Tool",n[n.Media=2]="Media",n))(Ie||{});const Le=[{name:"Movie Quote Cryptogram",route:"cryptogram",description:"Solve cryptograms of famous movie quotes",category:0,icon:"Film"},{name:"Old Timey Video",route:"otv",description:"Watch videos from youtube with an old timey filters",category:2,icon:"TV"},{name:"Christmas Movie Tierlist",route:"tierlist",description:"Rank christmas movies by placing them into tiers",category:2,icon:"Tree"},{name:"AI Art Gallery",route:"aiart",description:"View a collection of AI generated art",category:2,icon:"Easel"},{name:"AI Paint",route:"aipaint",description:"Colour in pencil drawings using AI",category:1,icon:"Brush"},{name:"Count On This",route:"countonthis",description:"Countdowns to various events, add your own!",category:1,icon:"Date"},{name:"Fireworks Display",route:"fireworks",description:"A small fireworks display to ring in the new year",category:2,icon:"Happy"},{name:"Markdown Tester",route:"markdown",description:"Test out markdown with a side by side comparison",category:1,icon:"Markdown"},{name:"Font Title Tool",route:"fonttitle",description:"Test out various fonts and text designs",category:1,icon:"Font"},{name:"Funky Piano",route:"funkypiano",description:"Play and record songs on a colourful funky piano",category:1,icon:"Music"},{name:"Gift Grab",route:"giftgrab",description:"Run around and collect gifts",category:0,icon:"Gift"},{name:"Hotdog, No Hotdog",route:"hotdog",description:"Can you identify hot dogs and not hot dogs quickly?",category:0,icon:"Egg"},{name:"Pokemon Counter Finder",route:"pkmn",description:"Find the best type counters to a pokemon",category:1,icon:"Search"},{name:"Wiki Presenter",route:"wikipresent",description:"Have wikipedia articles presented to you",category:2,icon:"Projector"},{name:"Html Card Maker",route:"cardmaker",description:"Add content to an html card",category:1,icon:"Projector"},{name:"Blanket Designer",route:"blanket",description:"Design layouts for blankets",category:2,icon:"Projector"}],Fe=[{name:"Ficterra",link:"https://store.steampowered.com/app/852880/Ficterra/",description:` Ficterra is a sandbox crafting adventure with in-game modding that you can explore solo or with friends.

Journey out alone or bring friends along with you.`,image:"/images/games/Ficterra1.webp"},{name:"Horse And Go Seek",link:"https://store.steampowered.com/app/1927410/Horse_and_Go_Seek/",description:` Get ready to gallop through scenic locations with your majestic horse to find all the hidden animals!

 Travel through a variety of different landscapes to unlock horses, hair colors, levels, spirits and worlds.`,image:"/images/games/WinScreenPost.png"},{name:"Quick Tower Defence Ultimate",link:"https://store.steampowered.com/app/2051530/Quick_Tower_Defence_Ultimate/",description:` Unlock upgrades, talents and colours for your towers to defend against scores of enemies. 

Make your own maps or download more from the workshop`,image:"/images/games/Talents.png"},{name:"Minigame Blast!",link:"https://store.steampowered.com/app/1185410/Minigame_Blast/",description:` Grab your controllers and get ready to party, Minigame Blast is here! 

 Play solo or up to 8 players in this minigame arcade experience. Explore 16 minigames in multiple game modes.`,image:"/images/games/TanksCover.png"}];function st(n){let e,r,t,u,c=n[0].name+"",y,k,i,j=n[0].description+"",a,f,p,G,w,P,$,V,B;return r=new We({props:{glyphName:n[0].icon,width:"48px",height:"48px"}}),{c(){e=v("a"),ce(r.$$.fragment),t=M(),u=v("div"),y=H(c),k=M(),i=v("div"),a=H(j),f=M(),p=v("div"),G=H("Click to Visit!"),this.h()},l(D){e=_(D,"A",{class:!0,href:!0,style:!0});var E=m(e);ue(r.$$.fragment,E),t=T(E),u=_(E,"DIV",{class:!0});var S=m(u);y=L(S,c),S.forEach(o),k=T(E),i=_(E,"DIV",{class:!0});var I=m(i);a=L(I,j),I.forEach(o),f=T(E),p=_(E,"DIV",{class:!0,style:!0});var W=m(p);G=L(W,"Click to Visit!"),W.forEach(o),E.forEach(o),this.h()},h(){s(u,"class","text-xl text-center font-semibold"),s(i,"class","text-md text-center"),s(p,"class",w=n[1]?"opacity-100":"opacity-0"),me(p,"transition","all 0.3s ease-in"),s(e,"class",_e("route-card glass-shine-effect mb-8 outline outline-1 outline-white-300 rounded-xl flex flex-col p-4 gap-4 items-center justify-center text-white "+n[2]())+" svelte-1kjx6o4"),s(e,"href",P=n[0].route),me(e,"text-decoration","none")},m(D,E){U(D,e,E),de(r,e,null),l(e,t),l(e,u),l(u,y),l(e,k),l(e,i),l(i,a),l(e,f),l(e,p),l(p,G),$=!0,V||(B=[ye(e,"mouseenter",n[3]),ye(e,"mouseleave",n[4])],V=!0)},p(D,[E]){const S={};E&1&&(S.glyphName=D[0].icon),r.$set(S),(!$||E&1)&&c!==(c=D[0].name+"")&&he(y,c),(!$||E&1)&&j!==(j=D[0].description+"")&&he(a,j),(!$||E&2&&w!==(w=D[1]?"opacity-100":"opacity-0"))&&s(p,"class",w),(!$||E&1&&P!==(P=D[0].route))&&s(e,"href",P)},i(D){$||(F(r.$$.fragment,D),$=!0)},o(D){Z(r.$$.fragment,D),$=!1},d(D){D&&o(e),fe(r),V=!1,qe(B)}}}function lt(n,e,r){let{routeCardData:t}=e;function u(){return t.category==Ie.Game?"bg-green-700":t.category==Ie.Media?"bg-purple-600":"bg-blue-600"}let c=!1;const y=()=>r(1,c=!0),k=()=>r(1,c=!1);return n.$$set=i=>{"routeCardData"in i&&r(0,t=i.routeCardData)},[t,c,u,y,k]}class rt extends ke{constructor(e){super(),we(this,e,lt,st,be,{routeCardData:0})}}function at(n){let e,r,t,u,c,y,k=n[0].name+"",i,j,a,f=n[0].description+"",p,G,w,P,$,V,B,D,E;return{c(){e=v("div"),r=v("div"),u=M(),c=v("div"),y=v("div"),i=H(k),j=M(),a=v("div"),p=H(f),G=M(),w=v("a"),P=H("Check it out on Steam!"),this.h()},l(S){e=_(S,"DIV",{class:!0,style:!0});var I=m(e);r=_(I,"DIV",{class:!0,style:!0});var W=m(r);W.forEach(o),u=T(I),c=_(I,"DIV",{class:!0,style:!0});var z=m(c);y=_(z,"DIV",{class:!0});var K=m(y);i=L(K,k),K.forEach(o),j=T(z),a=_(z,"DIV",{class:!0,style:!0});var J=m(a);p=L(J,f),J.forEach(o),G=T(z),w=_(z,"A",{class:!0,style:!0,href:!0,target:!0,rel:!0});var A=m(w);P=L(A,"Check it out on Steam!"),A.forEach(o),z.forEach(o),I.forEach(o),this.h()},h(){s(r,"class","main-image  svelte-1kpkjtn"),s(r,"style",t="background-image: url("+n[0].image+");"+(n[1]?"order:1":"order:2")),s(y,"class","text-2xl text-left font-semibold"),s(a,"class","text-sm text-left pb-2"),me(a,"white-space","pre-line"),s(w,"class",$=_e("steam-button rounded-xl text-lg bg-blue-700 text-center outline outline-4 outline-white p-4 font-semibold "+(n[2]?"opacity-100":"opacity-75"))+" svelte-1kpkjtn"),me(w,"transition","all 0.2s ease-in"),me(w,"text-decoration","none"),s(w,"href",V=n[0].link),s(w,"target","_blank"),s(w,"rel","noreferrer noopener"),s(c,"class","flex flex-col p-4 m-4 gap-4 "),s(c,"style",B=n[1]?"order:2":"order:1"),s(e,"class",_e("grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 route-card glass-shine-effect mb-8 outline outline-1 outline-white-300 rounded-xl flex flex-col md:gap-4 items-center justify-center text-white ")+" svelte-1kpkjtn"),s(e,"style","max-width:800px;")},m(S,I){U(S,e,I),l(e,r),l(e,u),l(e,c),l(c,y),l(y,i),l(c,j),l(c,a),l(a,p),l(c,G),l(c,w),l(w,P),D||(E=[ye(e,"mouseenter",n[3]),ye(e,"mouseleave",n[4])],D=!0)},p(S,[I]){I&3&&t!==(t="background-image: url("+S[0].image+");"+(S[1]?"order:1":"order:2"))&&s(r,"style",t),I&1&&k!==(k=S[0].name+"")&&he(i,k),I&1&&f!==(f=S[0].description+"")&&he(p,f),I&4&&$!==($=_e("steam-button rounded-xl text-lg bg-blue-700 text-center outline outline-4 outline-white p-4 font-semibold "+(S[2]?"opacity-100":"opacity-75"))+" svelte-1kpkjtn")&&s(w,"class",$),I&1&&V!==(V=S[0].link)&&s(w,"href",V),I&2&&B!==(B=S[1]?"order:2":"order:1")&&s(c,"style",B)},i:pe,o:pe,d(S){S&&o(e),D=!1,qe(E)}}}function ot(n,e,r){let{steamGame:t}=e,{leftImage:u=!0}=e,c=!1;const y=()=>r(2,c=!0),k=()=>r(2,c=!1);return n.$$set=i=>{"steamGame"in i&&r(0,t=i.steamGame),"leftImage"in i&&r(1,u=i.leftImage)},[t,u,c,y,k]}class nt extends ke{constructor(e){super(),we(this,e,ot,at,be,{steamGame:0,leftImage:1})}}function Je(n,e,r){const t=n.slice();return t[0]=e[r],t}function Oe(n,e,r){const t=n.slice();return t[3]=e[r],t[5]=r,t}function it(n){let e,r,t,u,c,y,k,i,j,a,f,p,G,w,P,$,V,B,D,E,S,I,W,z,K,J,A,b,Y,O,C,ee,g,h,d,R,N,te,q,se,ne;return E=new He({props:{skills:tt,title:"Languages"}}),z=new He({props:{skills:et,title:"Tools"}}),{c(){e=v("section"),r=v("div"),t=v("div"),u=v("h2"),c=H("Justin Moore"),y=M(),k=v("h2"),i=H("Game Developer"),j=M(),a=v("p"),f=H("Lorem ipsum stuff and things over he moon and other things who is ie?"),p=M(),G=v("img"),P=M(),$=v("section"),V=v("div"),B=v("div"),D=M(),ce(E.$$.fragment),S=M(),I=v("div"),W=M(),ce(z.$$.fragment),K=M(),J=v("div"),A=ae("svg"),b=ae("path"),Y=ae("path"),O=ae("path"),C=M(),ee=v("section"),g=v("div"),h=ae("svg"),d=ae("path"),R=M(),N=v("section"),te=v("div"),q=ae("svg"),se=ae("path"),this.h()},l(x){e=_(x,"SECTION",{class:!0});var Q=m(e);r=_(Q,"DIV",{class:!0});var ie=m(r);t=_(ie,"DIV",{id:!0});var le=m(t);u=_(le,"H2",{class:!0});var X=m(u);c=L(X,"Justin Moore"),X.forEach(o),y=T(le),k=_(le,"H2",{class:!0});var Ve=m(k);i=L(Ve,"Game Developer"),Ve.forEach(o),j=T(le),a=_(le,"P",{class:!0});var Ce=m(a);f=L(Ce,"Lorem ipsum stuff and things over he moon and other things who is ie?"),Ce.forEach(o),le.forEach(o),p=T(ie),G=_(ie,"IMG",{src:!0}),ie.forEach(o),Q.forEach(o),P=T(x),$=_(x,"SECTION",{class:!0});var ge=m($);V=_(ge,"DIV",{class:!0});var re=m(V);B=_(re,"DIV",{class:!0}),m(B).forEach(o),D=T(re),ue(E.$$.fragment,re),S=T(re),I=_(re,"DIV",{class:!0}),m(I).forEach(o),W=T(re),ue(z.$$.fragment,re),re.forEach(o),K=T(ge),J=_(ge,"DIV",{class:!0});var $e=m(J);A=oe($e,"svg",{"data-name":!0,xmlns:!0,viewBox:!0,preserveAspectRatio:!0,class:!0});var ve=m(A);b=oe(ve,"path",{d:!0,opacity:!0,class:!0}),m(b).forEach(o),Y=oe(ve,"path",{d:!0,opacity:!0,class:!0}),m(Y).forEach(o),O=oe(ve,"path",{d:!0,class:!0}),m(O).forEach(o),ve.forEach(o),$e.forEach(o),ge.forEach(o),C=T(x),ee=_(x,"SECTION",{class:!0});var Se=m(ee);g=_(Se,"DIV",{class:!0});var Me=m(g);h=oe(Me,"svg",{"data-name":!0,xmlns:!0,viewBox:!0,preserveAspectRatio:!0,class:!0});var Te=m(h);d=oe(Te,"path",{d:!0,class:!0}),m(d).forEach(o),Te.forEach(o),Me.forEach(o),Se.forEach(o),R=T(x),N=_(x,"SECTION",{class:!0});var Ge=m(N);te=_(Ge,"DIV",{class:!0});var Ae=m(te);q=oe(Ae,"svg",{"data-name":!0,xmlns:!0,viewBox:!0,preserveAspectRatio:!0,class:!0});var je=m(q);se=oe(je,"path",{d:!0,class:!0}),m(se).forEach(o),je.forEach(o),Ae.forEach(o),Ge.forEach(o),this.h()},h(){s(u,"class","font-title text-[clamp(2.5rem,6vw,4.5rem)] leading-none col-span-1"),s(k,"class","font-title text-[clamp(1.5rem,3vw,2.5rem)] leading-1 col-span-1 text-blue-700"),s(a,"class","text-base-content/60 font-title py-4 font-light md:text-2xl"),s(t,"id","shortDescription"),Ue(G.src,w="src/lib/images/github.svg")||s(G,"src",w),s(r,"class","grid grid-cols-2"),s(e,"class","bg-slate-100 m:p-[16vw] p-[12vw] svelte-1pfg4rz"),s(B,"class","mb-16"),s(I,"class","mb-16"),s(V,"class","absolute top-16"),s(b,"d","M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"),s(b,"opacity",".25"),s(b,"class","shape-fill svelte-1pfg4rz"),s(Y,"d","M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"),s(Y,"opacity",".5"),s(Y,"class","shape-fill svelte-1pfg4rz"),s(O,"d","M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"),s(O,"class","shape-fill svelte-1pfg4rz"),s(A,"data-name","Layer 1"),s(A,"xmlns","http://www.w3.org/2000/svg"),s(A,"viewBox","0 0 1200 120"),s(A,"preserveAspectRatio","none"),s(A,"class","svelte-1pfg4rz"),s(J,"class","introDivider svelte-1pfg4rz"),s($,"class","bg-blue-500 relative lg:h-[90vh] md:h-[120vh] h-[180vh] svelte-1pfg4rz"),s(d,"d","M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"),s(d,"class","shape-fill svelte-1pfg4rz"),s(h,"data-name","Layer 1"),s(h,"xmlns","http://www.w3.org/2000/svg"),s(h,"viewBox","0 0 1200 120"),s(h,"preserveAspectRatio","none"),s(h,"class","svelte-1pfg4rz"),s(g,"class","secondDivider svelte-1pfg4rz"),s(ee,"class","bg-lime-500 svelte-1pfg4rz"),s(se,"d","M1200 120L0 16.48 0 0 1200 0 1200 120z"),s(se,"class","shape-fill svelte-1pfg4rz"),s(q,"data-name","Layer 1"),s(q,"xmlns","http://www.w3.org/2000/svg"),s(q,"viewBox","0 0 1200 120"),s(q,"preserveAspectRatio","none"),s(q,"class","svelte-1pfg4rz"),s(te,"class","thirdDivider svelte-1pfg4rz"),s(N,"class","bg-purple-500 svelte-1pfg4rz")},m(x,Q){U(x,e,Q),l(e,r),l(r,t),l(t,u),l(u,c),l(t,y),l(t,k),l(k,i),l(t,j),l(t,a),l(a,f),l(r,p),l(r,G),U(x,P,Q),U(x,$,Q),l($,V),l(V,B),l(V,D),de(E,V,null),l(V,S),l(V,I),l(V,W),de(z,V,null),l($,K),l($,J),l(J,A),l(A,b),l(A,Y),l(A,O),U(x,C,Q),U(x,ee,Q),l(ee,g),l(g,h),l(h,d),U(x,R,Q),U(x,N,Q),l(N,te),l(te,q),l(q,se),ne=!0},p:pe,i(x){ne||(F(E.$$.fragment,x),F(z.$$.fragment,x),ne=!0)},o(x){Z(E.$$.fragment,x),Z(z.$$.fragment,x),ne=!1},d(x){x&&o(e),x&&o(P),x&&o($),fe(E),fe(z),x&&o(C),x&&o(ee),x&&o(R),x&&o(N)}}}function ct(n){let e,r,t,u,c,y,k,i,j,a,f,p,G,w,P,$,V,B,D,E,S,I,W,z,K,J,A=Fe,b=[];for(let g=0;g<A.length;g+=1)b[g]=Ne(Oe(n,A,g));const Y=g=>Z(b[g],1,1,()=>{b[g]=null});let O=Le,C=[];for(let g=0;g<O.length;g+=1)C[g]=Re(Je(n,O,g));const ee=g=>Z(C[g],1,1,()=>{C[g]=null});return{c(){e=v("div"),r=v("div"),t=v("div"),u=v("div"),c=v("h1"),y=H("Coming Soon"),k=M(),i=v("p"),j=H("Stay tuned for the website, you can check out some projects I've worked on below"),a=M(),f=v("p"),p=H("Thanks, Justin"),G=M(),w=v("div"),P=H("Games"),$=M(),V=v("div");for(let g=0;g<b.length;g+=1)b[g].c();B=M(),D=v("div"),E=H("Miscellaneous Smaller Projects"),S=M(),I=v("div");for(let g=0;g<C.length;g+=1)C[g].c();W=M(),z=v("a"),K=H("Blanket Designer"),this.h()},l(g){e=_(g,"DIV",{class:!0});var h=m(e);r=_(h,"DIV",{class:!0});var d=m(r);t=_(d,"DIV",{class:!0});var R=m(t);u=_(R,"DIV",{class:!0});var N=m(u);c=_(N,"H1",{class:!0});var te=m(c);y=L(te,"Coming Soon"),te.forEach(o),k=T(N),i=_(N,"P",{class:!0});var q=m(i);j=L(q,"Stay tuned for the website, you can check out some projects I've worked on below"),q.forEach(o),a=T(N),f=_(N,"P",{class:!0});var se=m(f);p=L(se,"Thanks, Justin"),se.forEach(o),N.forEach(o),R.forEach(o),d.forEach(o),G=T(h),w=_(h,"DIV",{class:!0});var ne=m(w);P=L(ne,"Games"),ne.forEach(o),$=T(h),V=_(h,"DIV",{class:!0});var x=m(V);for(let X=0;X<b.length;X+=1)b[X].l(x);x.forEach(o),B=T(h),D=_(h,"DIV",{class:!0});var Q=m(D);E=L(Q,"Miscellaneous Smaller Projects"),Q.forEach(o),S=T(h),I=_(h,"DIV",{class:!0});var ie=m(I);for(let X=0;X<C.length;X+=1)C[X].l(ie);ie.forEach(o),W=T(h),z=_(h,"A",{href:!0});var le=m(z);K=L(le,"Blanket Designer"),le.forEach(o),h.forEach(o),this.h()},h(){s(c,"class","text-5xl font-bold svelte-1pfg4rz"),s(i,"class","py-6"),s(f,"class","py-6"),s(u,"class","max-w-md"),s(t,"class","hero-content text-center"),s(r,"class","hero pt-8"),s(w,"class","text-4xl text-center font-semibold pb-4"),s(V,"class","flex flex-col m-8 md:m-4 items-center"),s(D,"class","text-4xl text-center font-semibold p-4 pt-8"),s(I,"class","flex flex-wrap items-center justify-around gap-4 m-4"),s(z,"href","/blanket"),s(e,"class","bg-gray-100")},m(g,h){U(g,e,h),l(e,r),l(r,t),l(t,u),l(u,c),l(c,y),l(u,k),l(u,i),l(i,j),l(u,a),l(u,f),l(f,p),l(e,G),l(e,w),l(w,P),l(e,$),l(e,V);for(let d=0;d<b.length;d+=1)b[d]&&b[d].m(V,null);l(e,B),l(e,D),l(D,E),l(e,S),l(e,I);for(let d=0;d<C.length;d+=1)C[d]&&C[d].m(I,null);l(e,W),l(e,z),l(z,K),J=!0},p(g,h){if(h&0){A=Fe;let d;for(d=0;d<A.length;d+=1){const R=Oe(g,A,d);b[d]?(b[d].p(R,h),F(b[d],1)):(b[d]=Ne(R),b[d].c(),F(b[d],1),b[d].m(V,null))}for(xe(),d=A.length;d<b.length;d+=1)Y(d);Ee()}if(h&0){O=Le;let d;for(d=0;d<O.length;d+=1){const R=Je(g,O,d);C[d]?(C[d].p(R,h),F(C[d],1)):(C[d]=Re(R),C[d].c(),F(C[d],1),C[d].m(I,null))}for(xe(),d=O.length;d<C.length;d+=1)ee(d);Ee()}},i(g){if(!J){for(let h=0;h<A.length;h+=1)F(b[h]);for(let h=0;h<O.length;h+=1)F(C[h]);J=!0}},o(g){b=b.filter(Boolean);for(let h=0;h<b.length;h+=1)Z(b[h]);C=C.filter(Boolean);for(let h=0;h<C.length;h+=1)Z(C[h]);J=!1},d(g){g&&o(e),De(b,g),De(C,g)}}}function Ne(n){let e,r;return e=new nt({props:{steamGame:n[3],leftImage:n[5]%2==0}}),{c(){ce(e.$$.fragment)},l(t){ue(e.$$.fragment,t)},m(t,u){de(e,t,u),r=!0},p:pe,i(t){r||(F(e.$$.fragment,t),r=!0)},o(t){Z(e.$$.fragment,t),r=!1},d(t){fe(e,t)}}}function Re(n){let e,r;return e=new rt({props:{routeCardData:n[0]}}),{c(){ce(e.$$.fragment)},l(t){ue(e.$$.fragment,t)},m(t,u){de(e,t,u),r=!0},p:pe,i(t){r||(F(e.$$.fragment,t),r=!0)},o(t){Z(e.$$.fragment,t),r=!1},d(t){fe(e,t)}}}function ut(n){let e,r,t,u,c,y;const k=[ct,it],i=[];function j(a,f){return 0}return t=j(),u=i[t]=k[t](n),{c(){e=v("meta"),r=M(),u.c(),c=ze(),this.h()},l(a){const f=Qe("svelte-15bphv1",document.head);e=_(f,"META",{name:!0,content:!0}),f.forEach(o),r=T(a),u.l(a),c=ze(),this.h()},h(){document.title="Home",s(e,"name","description"),s(e,"content","Justin Moore")},m(a,f){l(document.head,e),U(a,r,f),i[t].m(a,f),U(a,c,f),y=!0},p(a,[f]){u.p(a,f)},i(a){y||(F(u),y=!0)},o(a){Z(u),y=!1},d(a){o(e),a&&o(r),i[t].d(a),a&&o(c)}}}class pt extends ke{constructor(e){super(),we(this,e,null,ut,be,{})}}export{pt as component,ht as universal};
