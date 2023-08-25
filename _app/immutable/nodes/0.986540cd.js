import{e as ks,w as Es}from"../chunks/singletons.2323d6bc.js";import{a as xs,g as Ss,w as Is,b as Ms,i as Ls,c as ot,d as os,e as it}from"../chunks/context.c40c9670.js";import{s as Ct,e as W,i as q,r as Te,d as u,u as Vt,v as ce,w as As,f as g,l as X,a as b,x as N,g as p,h,m as Y,c as y,y as B,z as Ce,j as l,A as Pt,B as c,n as ie,C as Ds,D as Vs,E as Ps,F as Rt,G as bs,H as ct}from"../chunks/scheduler.ab9ee130.js";import{S as Rs,i as Cs,a as ue,t as ve,c as Ht,g as Tt}from"../chunks/index.55c861b4.js";import{e as He}from"../chunks/each.e59479a4.js";import{p as Hs,n as Ts}from"../chunks/stores.c6d3ae98.js";const js=(t="language")=>[localStorage.getItem(t)].filter(Boolean),Ns=t=>()=>js(t),Bs=()=>[...window.navigator.languages],is=(t,e,s=!0)=>{for(const o of t)for(const n of e)if(n===o)return n;for(const o of t)if(s){const n=e.map(a=>(a.startsWith(o+"-")||o.startsWith(a+"-"))&&a).filter(Boolean).sort().sort((a,r)=>a.split("-").length-r.split("-").length);if(n.length)return n[0]}},zs=async({referenceLanguage:t,languages:e,allowRelated:s=!0},...o)=>{const n=[];for(const a of o){const r=await a(),d=is(r,e,!1);if(d)return d;n.push(...r)}return s&&is(n,e)||t},Fs=t=>(e,s)=>{const o=t.body.find(n=>n.id.name===e);return o?o.pattern.elements.map(n=>Os(n,s||{})).join(""):""},Os=(t,e)=>{switch(t.type){case"Text":return t.value;case"Placeholder":return Gs(t,e)}},Gs=(t,e)=>{switch(t.body.type){case"VariableReference":return e[t.body.name]??""}},Ws=t=>!!t&&typeof t=="object"&&typeof t.then=="function",qs=()=>"",Us=({readResource:t},e={resources:new Map,language:void 0,i:void 0})=>{const s=new Map;let o=!1;const n=i=>{if(e.resources.has(i))return o?Promise.resolve():void 0;if(s.has(i))return s.get(i);const m=x=>x&&e.resources.set(i,x),E=t(i);if(!Ws(E)){m(E);return}o=!0;const k=new Promise(async x=>{const D=await E;m(D),s.delete(i),x()});return s.set(i,k),k},a=i=>{e.language=i,e.i=void 0},r=()=>e.language,d=()=>{if(e.i)return e.i;const i=e.resources.get(e.language);return i?e.i=Fs(i):qs};return{loadResource:n,switchLanguage:a,get language(){return r()},get i(){return d()}}},Ks=t=>{const e=Us(t);return{...e,get language(){return e.language},get i(){return e.i},get referenceLanguage(){return t.referenceLanguage},get languages(){return t.languages}}},Zs=async({fetch:t,language:e,referenceLanguage:s,languages:o,cache:n={}})=>{const a=Ks({readResource:async r=>n[r]??(n[r]=await t(`${ks}/inlang/${r}.json`).then(d=>d.ok?d.json():void 0)),referenceLanguage:s,languages:o});return e&&(await a.loadResource(e),a.switchLanguage(e)),a},Js={},ys=async(t,e)=>{const s=Ss(t);if(s)return s;if(!e)return await Is(0),ys(t,e);let o;Ms(t,new Promise(a=>o=a));const n=await Qs(t,e,t.data["[inlang]"]);return o(n),n},Qs=async(t,e,s)=>{if(!s){const d=i=>()=>console.warn("inlang was not correctly set up on this page. Please check `routing.exclude` in your `inlang.config.js` file.")||i;return{i:d(""),loadResource:d(),switchLanguage:d(),languages:[]}}const{referenceLanguage:o,languages:n,language:a}=s,r=a||!e.initDetectors?a:await zs({referenceLanguage:o,languages:n},...e.initDetectors(t));return Zs({fetch:t.fetch,language:r,referenceLanguage:o,languages:n,cache:Js})},Xs=t=>({use:e=>async s=>{const o=await ys(s,t),n=await e(s,o),{"[inlang]":a,...r}=n||s.data;return xs(r,o)}}),Ys=!0,$s="always",el=Xs({initDetectors:()=>[Ns(),Bs]}).use(()=>{}),fl=Object.freeze(Object.defineProperty({__proto__:null,load:el,prerender:Ys,trailingSlash:$s},Symbol.toStringTag,{value:"Module"})),cs=t=>globalThis[Ls]=t;const ut=Es("en"),tl=typeof localStorage>"u"?!1:localStorage.getItem("language")===null;typeof localStorage<"u"&&(ut.set(localStorage.getItem("language")??"en"),ut.subscribe(t=>localStorage.setItem("language",t)));function us(t,e,s){const o=t.slice();return o[23]=e[s][0],o[27]=e[s][1],o}function ds(t,e,s){const o=t.slice();return o[23]=e[s][0],o[27]=e[s][1],o}function fs(t,e,s){const o=t.slice();return o[22]=e[s][0],o[23]=e[s][1].name,o[24]=e[s][1].icon,o}function hs(t){let e=t[0],s,o=gs();return{c(){o.c(),s=W()},l(n){o.l(n),s=W()},m(n,a){o.m(n,a),q(n,s,a)},p(n,a){a[0]&1&&Ct(e,e=n[0])?(o.d(1),o=gs(),o.c(),o.m(s.parentNode,s)):o.p(n,a)},d(n){n&&u(s),o.d(n)}}}function gs(t){return{c:ce,l:ce,m:ce,p:ce,d:ce}}function ps(t){let e=t[0],s,o,n=ws(t);return{c(){n.c(),s=W()},l(a){n.l(a),s=W()},m(a,r){n.m(a,r),q(a,s,r),o=!0},p(a,r){r[0]&1&&Ct(e,e=a[0])?(Tt(),ve(n,1,1,ce),Ht(),n=ws(a),n.c(),ue(n,1),n.m(s.parentNode,s)):n.p(a,r)},i(a){o||(ue(n),o=!0)},o(a){ve(n),o=!1},d(a){a&&u(s),n.d(a)}}}function sl(t){let e,s,o,n,a,r,d,i=t[1]("tooltip.open_main_menu")+"",m,E,k,x,D,S,I,U,K,de,Z,Ue='<img class="mx-auto block h-12 w-auto lg:hidden" src="/logo.png" alt="HISC"/> <img class="hidden h-8 lg:h-16 w-auto lg:block" src="/logo.png" alt="HISC"/>',je,$,ee,J,w,P,R,Ke,Ze,dt,_e,Ne=t[1]("tooltip.change_language")+"",Je,ft,we,fe,Qe,ht,gt,Be,pt,be,z,te,he,jt='<a href="/" class="flex items-center flex-wrap lg:flex-nowrap"><img src="/logo.png" class="w-full sm:w-auto sm:h-16 mr-3" alt="Happy Island Senior Center Logo"/> <span class="self-center text-2xl font-semibold text-white">Happy Island Senior Center</span></a>',mt,ye,se,ke,ze=t[1]("footer.operating_hours")+"",Xe,vt,Q,Nt='<tr><td>Monday</td> <td>8:00 AM - 6:00 PM</td></tr> <tr><td>Tuesday</td> <td>8:00 AM - 6:00 PM</td></tr> <tr><td class="pr-3">Wednesday</td> <td>8:00 AM - 6:00 PM</td></tr> <tr><td>Thursday</td> <td>8:00 AM - 6:00 PM</td></tr> <tr><td>Friday</td> <td>8:00 AM - 6:00 PM</td></tr> <tr><td>Saturday</td> <td>8:00 AM - 2:00 PM</td></tr> <tr><td>Sunday</td> <td>8:00 AM - 2:00 PM</td></tr>',_t,Ye,wt,le,ge,Bt='© 2023 <a href="/" class="hover:underline">Happy Island Senior Center</a>. All Rights Reserved.',bt,F,C,H,Fe,yt,Ee,Oe=t[1]("contact.phone")+"",$e,kt,ae,zt="(718-980-0240)",Et,T,j,xe,Ge,xt,Se,We=t[1]("contact.email")+"",et,St,re,Ft="(happyislandny@gmail.com)",It,O,G,pe,Mt,Ie,qe=t[1]("contact.facebook")+"",tt,M,Lt,Ot,Me=He(t[8]),L=[];for(let f=0;f<Me.length;f+=1)L[f]=ms(ds(t,Me,f));let Le=He(t[8]),A=[];for(let f=0;f<Le.length;f+=1)A[f]=vs(us(t,Le,f));const At=t[14].default,V=As(At,t,t[13],null);return{c(){e=g("div"),s=g("nav"),o=g("div"),n=g("div"),a=g("div"),r=g("button"),d=g("span"),m=X(i),E=b(),k=N("svg"),x=N("path"),S=b(),I=N("svg"),U=N("path"),de=b(),Z=g("div"),Z.innerHTML=Ue,je=b(),$=g("div"),ee=g("div"),J=g("div");for(let f=0;f<L.length;f+=1)L[f].c();w=b(),P=g("div"),R=g("img"),dt=b(),_e=g("span"),Je=X(Ne),ft=b(),we=g("div"),fe=g("div");for(let f=0;f<A.length;f+=1)A[f].c();ht=b(),V&&V.c(),gt=b(),Be=g("div"),pt=b(),be=g("footer"),z=g("div"),te=g("div"),he=g("div"),he.innerHTML=jt,mt=b(),ye=g("div"),se=g("div"),ke=g("h2"),Xe=X(ze),vt=b(),Q=g("table"),Q.innerHTML=Nt,_t=b(),Ye=g("hr"),wt=b(),le=g("div"),ge=g("span"),ge.innerHTML=Bt,bt=b(),F=g("div"),C=g("a"),H=N("svg"),Fe=N("path"),yt=b(),Ee=g("span"),$e=X(Oe),kt=b(),ae=g("span"),ae.textContent=zt,Et=b(),T=g("a"),j=N("svg"),xe=N("path"),Ge=N("path"),xt=b(),Se=g("span"),et=X(We),St=b(),re=g("span"),re.textContent=Ft,It=b(),O=g("a"),G=N("svg"),pe=N("path"),Mt=b(),Ie=g("span"),tt=X(qe),this.h()},l(f){e=p(f,"DIV",{class:!0});var _=h(e);s=p(_,"NAV",{class:!0,style:!0});var v=h(s);o=p(v,"DIV",{class:!0});var ne=h(o);n=p(ne,"DIV",{class:!0});var oe=h(n);a=p(oe,"DIV",{class:!0});var Gt=h(a);r=p(Gt,"BUTTON",{type:!0,class:!0,"aria-controls":!0,"aria-expanded":!0});var Ae=h(r);d=p(Ae,"SPAN",{class:!0});var Wt=h(d);m=Y(Wt,i),Wt.forEach(u),E=y(Ae),k=B(Ae,"svg",{class:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,"aria-hidden":!0});var qt=h(k);x=B(qt,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),h(x).forEach(u),qt.forEach(u),S=y(Ae),I=B(Ae,"svg",{class:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,"aria-hidden":!0});var Ut=h(I);U=B(Ut,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),h(U).forEach(u),Ut.forEach(u),Ae.forEach(u),Gt.forEach(u),de=y(oe),Z=p(oe,"DIV",{class:!0,"data-svelte-h":!0}),Ce(Z)!=="svelte-kl3hd8"&&(Z.innerHTML=Ue),je=y(oe),$=p(oe,"DIV",{class:!0});var Kt=h($);ee=p(Kt,"DIV",{class:!0});var Zt=h(ee);J=p(Zt,"DIV",{class:!0});var Jt=h(J);for(let me=0;me<L.length;me+=1)L[me].l(Jt);Jt.forEach(u),Zt.forEach(u),Kt.forEach(u),w=y(oe),P=p(oe,"DIV",{class:!0,role:!0,tabindex:!0});var st=h(P);R=p(st,"IMG",{src:!0,alt:!0,width:!0,height:!0}),dt=y(st),_e=p(st,"SPAN",{class:!0});var Qt=h(_e);Je=Y(Qt,Ne),Qt.forEach(u),st.forEach(u),oe.forEach(u),ne.forEach(u),ft=y(v),we=p(v,"DIV",{class:!0});var Xt=h(we);fe=p(Xt,"DIV",{class:!0});var Yt=h(fe);for(let me=0;me<A.length;me+=1)A[me].l(Yt);Yt.forEach(u),Xt.forEach(u),v.forEach(u),ht=y(_),V&&V.l(_),gt=y(_),Be=p(_,"DIV",{class:!0}),h(Be).forEach(u),pt=y(_),be=p(_,"FOOTER",{class:!0});var $t=h(be);z=p($t,"DIV",{class:!0});var De=h(z);te=p(De,"DIV",{class:!0});var lt=h(te);he=p(lt,"DIV",{class:!0,"data-svelte-h":!0}),Ce(he)!=="svelte-1iypx7"&&(he.innerHTML=jt),mt=y(lt),ye=p(lt,"DIV",{class:!0});var es=h(ye);se=p(es,"DIV",{class:!0});var at=h(se);ke=p(at,"H2",{class:!0});var ts=h(ke);Xe=Y(ts,ze),ts.forEach(u),vt=y(at),Q=p(at,"TABLE",{class:!0,cellspacing:!0,cellpadding:!0,"data-svelte-h":!0}),Ce(Q)!=="svelte-ax661s"&&(Q.innerHTML=Nt),at.forEach(u),es.forEach(u),lt.forEach(u),_t=y(De),Ye=p(De,"HR",{class:!0}),wt=y(De),le=p(De,"DIV",{class:!0});var rt=h(le);ge=p(rt,"SPAN",{class:!0,"data-svelte-h":!0}),Ce(ge)!=="svelte-2ni34g"&&(ge.innerHTML=Bt),bt=y(rt),F=p(rt,"DIV",{class:!0});var Ve=h(F);C=p(Ve,"A",{href:!0,class:!0});var Pe=h(C);H=B(Pe,"svg",{class:!0,"aria-hidden":!0,xmlns:!0,fill:!0,viewBox:!0,"xml:space":!0});var ss=h(H);Fe=B(ss,"path",{d:!0}),h(Fe).forEach(u),ss.forEach(u),yt=y(Pe),Ee=p(Pe,"SPAN",{class:!0});var ls=h(Ee);$e=Y(ls,Oe),ls.forEach(u),kt=y(Pe),ae=p(Pe,"SPAN",{href:!0,class:!0,"data-svelte-h":!0}),Ce(ae)!=="svelte-1k6voxi"&&(ae.textContent=zt),Pe.forEach(u),Et=y(Ve),T=p(Ve,"A",{href:!0,class:!0});var Re=h(T);j=B(Re,"svg",{class:!0,"aria-hidden":!0,xmlns:!0,fill:!0,viewBox:!0});var Dt=h(j);xe=B(Dt,"path",{fill:!0,d:!0}),h(xe).forEach(u),Ge=B(Dt,"path",{d:!0}),h(Ge).forEach(u),Dt.forEach(u),xt=y(Re),Se=p(Re,"SPAN",{class:!0});var as=h(Se);et=Y(as,We),as.forEach(u),St=y(Re),re=p(Re,"SPAN",{href:!0,class:!0,"data-svelte-h":!0}),Ce(re)!=="svelte-1b6hkei"&&(re.textContent=Ft),Re.forEach(u),It=y(Ve),O=p(Ve,"A",{href:!0,class:!0,target:!0});var nt=h(O);G=B(nt,"svg",{class:!0,"aria-hidden":!0,xmlns:!0,fill:!0,viewBox:!0});var rs=h(G);pe=B(rs,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),h(pe).forEach(u),rs.forEach(u),Mt=y(nt),Ie=p(nt,"SPAN",{class:!0});var ns=h(Ie);tt=Y(ns,qe),ns.forEach(u),nt.forEach(u),Ve.forEach(u),rt.forEach(u),De.forEach(u),$t.forEach(u),_.forEach(u),this.h()},h(){l(d,"class","sr-only"),l(x,"stroke-linecap","round"),l(x,"stroke-linejoin","round"),l(x,"d","M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"),l(k,"class",D=(t[3]?"hidden":"block")+" h-6 w-6"),l(k,"fill","none"),l(k,"viewBox","0 0 24 24"),l(k,"stroke-width","1.5"),l(k,"stroke","currentColor"),l(k,"aria-hidden","true"),l(U,"stroke-linecap","round"),l(U,"stroke-linejoin","round"),l(U,"d","M6 18L18 6M6 6l12 12"),l(I,"class",K=(t[3]?"block":"hidden")+" h-6 w-6"),l(I,"fill","none"),l(I,"viewBox","0 0 24 24"),l(I,"stroke-width","1.5"),l(I,"stroke","currentColor"),l(I,"aria-hidden","true"),l(r,"type","button"),l(r,"class","inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"),l(r,"aria-controls","mobile-menu"),l(r,"aria-expanded","false"),l(a,"class","flex items-center sm:hidden"),l(Z,"class","flex items-center content-center py-0"),l(J,"class","flex space-x-4 self-center"),l(ee,"class","sm:ml-6 sm:flex py-2"),l($,"class","hidden sm:flex flex-1 items-center justify-center sm:items-stretch"),Pt(R.src,Ke=t[7][t[5]].icon)||l(R,"src",Ke),l(R,"alt",Ze=t[7][t[5]].name),l(R,"width","40"),l(R,"height","40"),l(_e,"class","sr-only"),l(P,"class","inset-y-0 flex items-center justify-end cursor-pointer"),l(P,"role","button"),l(P,"tabindex","0"),l(n,"class","relative grid grid-cols-header"),l(o,"class","mx-auto max-w-7xl px-2 py-0 sm:py-0 sm:px-6 lg:px-8"),l(fe,"class","space-y-1 px-2 pb-3 pt-2"),l(we,"class","sm:hidden mobile-menu overflow-hidden svelte-lkchus"),l(s,"class",Qe="bg-blue-700 "+(t[3]?"open":"closed")+" svelte-lkchus"),l(s,"style",`--max-height-var: ${t[8].length*44+16}px`),l(Be,"class","flex-grow"),l(he,"class","mb-6 md:mb-0"),l(ke,"class","mb-6 text-sm font-semibold uppercase text-white"),l(Q,"class","text-gray-300 font-light border-none"),l(Q,"cellspacing","0"),l(Q,"cellpadding","0"),l(se,"class","min-w-[250px]"),l(ye,"class","grid gap-8 sm:gap-6 grid-cols-1"),l(te,"class","md:flex md:justify-between"),l(Ye,"class","my-6 sm:mx-auto border-gray-300 lg:my-8"),l(ge,"class","text-sm sm:text-center text-gray-400"),l(Fe,"d","M20.666 27.021a5.907 5.907 0 0 1-2.934-.779l-.126-.071A39.137 39.137 0 0 1 3.491 12.355l-.657-1.095a5.849 5.849 0 0 1 .881-7.153l1.309-1.309c1.1-1.1 2.889-1.1 3.988 0l2.884 2.884a2.83 2.83 0 0 1 .464 3.378l-1.084 1.925a.213.213 0 0 0 .035.255l6.421 6.421a.216.216 0 0 0 .257.034l1.922-1.083.001-.001a2.832 2.832 0 0 1 3.378.464l2.885 2.886c1.1 1.1 1.1 2.889 0 3.988l-1.367 1.366a5.848 5.848 0 0 1-4.142 1.706zM7.018 3.973c-.21 0-.42.08-.58.24L5.129 5.521a3.85 3.85 0 0 0-.58 4.708l.657 1.095a37.13 37.13 0 0 0 13.389 13.107l.126.071c1.526.873 3.446.626 4.672-.602l1.367-1.366a.82.82 0 0 0 0-1.16l-2.885-2.886a.823.823 0 0 0-.983-.134l-1.922 1.083a2.222 2.222 0 0 1-2.652-.363l-6.421-6.421a2.218 2.218 0 0 1-.363-2.651l1.084-1.924a.824.824 0 0 0-.135-.982L7.598 4.213a.818.818 0 0 0-.58-.24z"),l(H,"class","w-4 h-4 mr-1.5"),l(H,"aria-hidden","true"),l(H,"xmlns","http://www.w3.org/2000/svg"),l(H,"fill","currentColor"),l(H,"viewBox","0 0 29 29"),l(H,"xml:space","preserve"),l(Ee,"class","sr-only"),l(ae,"href","tel:718-980-0240"),l(ae,"class","text-sm align-middle"),l(C,"href","tel:718-980-0240"),l(C,"class","text-gray-400 hover:text-white flex items-center"),l(xe,"fill","none"),l(xe,"d","M0 0h24v24H0V0z"),l(Ge,"d","M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"),l(j,"class","w-4 h-4 mr-1.5"),l(j,"aria-hidden","true"),l(j,"xmlns","http://www.w3.org/2000/svg"),l(j,"fill","currentColor"),l(j,"viewBox","4 1 16 22"),l(Se,"class","sr-only"),l(re,"href","tel:718-980-0240"),l(re,"class","text-sm align-middle"),l(T,"href","mailto:happyislandny.com"),l(T,"class","text-gray-400 hover:text-white flex items-center"),l(pe,"fill-rule","evenodd"),l(pe,"d","M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"),l(pe,"clip-rule","evenodd"),l(G,"class","w-4 h-4"),l(G,"aria-hidden","true"),l(G,"xmlns","http://www.w3.org/2000/svg"),l(G,"fill","currentColor"),l(G,"viewBox","0 0 8 19"),l(Ie,"class","sr-only"),l(O,"href","https://www.facebook.com/p/Happy-Island-Senior-Center-100063640447417/"),l(O,"class","text-gray-400 hover:text-white"),l(O,"target","_blank"),l(F,"class","flex mt-4 sm:space-x-4 sm:justify-center sm:items-center sm:mt-0 flex-col sm:flex-row"),l(le,"class","sm:flex sm:items-center sm:justify-between"),l(z,"class","mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"),l(be,"class","bg-blue-800"),l(e,"class","flex flex-col h-screen")},m(f,_){q(f,e,_),c(e,s),c(s,o),c(o,n),c(n,a),c(a,r),c(r,d),c(d,m),c(r,E),c(r,k),c(k,x),c(r,S),c(r,I),c(I,U),c(n,de),c(n,Z),c(n,je),c(n,$),c($,ee),c(ee,J);for(let v=0;v<L.length;v+=1)L[v]&&L[v].m(J,null);c(n,w),c(n,P),c(P,R),c(P,dt),c(P,_e),c(_e,Je),c(s,ft),c(s,we),c(we,fe);for(let v=0;v<A.length;v+=1)A[v]&&A[v].m(fe,null);c(e,ht),V&&V.m(e,null),c(e,gt),c(e,Be),c(e,pt),c(e,be),c(be,z),c(z,te),c(te,he),c(te,mt),c(te,ye),c(ye,se),c(se,ke),c(ke,Xe),c(se,vt),c(se,Q),c(z,_t),c(z,Ye),c(z,wt),c(z,le),c(le,ge),c(le,bt),c(le,F),c(F,C),c(C,H),c(H,Fe),c(C,yt),c(C,Ee),c(Ee,$e),c(C,kt),c(C,ae),c(F,Et),c(F,T),c(T,j),c(j,xe),c(j,Ge),c(T,xt),c(T,Se),c(Se,et),c(T,St),c(T,re),c(F,It),c(F,O),c(O,G),c(G,pe),c(O,Mt),c(O,Ie),c(Ie,tt),M=!0,Lt||(Ot=[Te(r,"click",t[18]),Te(P,"keypress",t[19]),Te(P,"click",t[20])],Lt=!0)},p(f,_){if((!M||_[0]&2)&&i!==(i=f[1]("tooltip.open_main_menu")+"")&&ie(m,i),(!M||_[0]&8&&D!==(D=(f[3]?"hidden":"block")+" h-6 w-6"))&&l(k,"class",D),(!M||_[0]&8&&K!==(K=(f[3]?"block":"hidden")+" h-6 w-6"))&&l(I,"class",K),_[0]&274){Me=He(f[8]);let v;for(v=0;v<Me.length;v+=1){const ne=ds(f,Me,v);L[v]?L[v].p(ne,_):(L[v]=ms(ne),L[v].c(),L[v].m(J,null))}for(;v<L.length;v+=1)L[v].d(1);L.length=Me.length}if((!M||_[0]&32&&!Pt(R.src,Ke=f[7][f[5]].icon))&&l(R,"src",Ke),(!M||_[0]&32&&Ze!==(Ze=f[7][f[5]].name))&&l(R,"alt",Ze),(!M||_[0]&2)&&Ne!==(Ne=f[1]("tooltip.change_language")+"")&&ie(Je,Ne),_[0]&274){Le=He(f[8]);let v;for(v=0;v<Le.length;v+=1){const ne=us(f,Le,v);A[v]?A[v].p(ne,_):(A[v]=vs(ne),A[v].c(),A[v].m(fe,null))}for(;v<A.length;v+=1)A[v].d(1);A.length=Le.length}(!M||_[0]&8&&Qe!==(Qe="bg-blue-700 "+(f[3]?"open":"closed")+" svelte-lkchus"))&&l(s,"class",Qe),V&&V.p&&(!M||_[0]&8192)&&Ds(V,At,f,f[13],M?Ps(At,f[13],_,null):Vs(f[13]),null),(!M||_[0]&2)&&ze!==(ze=f[1]("footer.operating_hours")+"")&&ie(Xe,ze),(!M||_[0]&2)&&Oe!==(Oe=f[1]("contact.phone")+"")&&ie($e,Oe),(!M||_[0]&2)&&We!==(We=f[1]("contact.email")+"")&&ie(et,We),(!M||_[0]&2)&&qe!==(qe=f[1]("contact.facebook")+"")&&ie(tt,qe)},i(f){M||(ue(V,f),M=!0)},o(f){ve(V,f),M=!1},d(f){f&&u(e),Rt(L,f),Rt(A,f),V&&V.d(f),Lt=!1,bs(Ot)}}}function ll(t){let e,s,o,n=He(Object.entries(t[7])),a=[];for(let r=0;r<n.length;r+=1)a[r]=_s(fs(t,n,r));return{c(){e=g("div"),s=g("div"),o=g("div");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=p(r,"DIV",{class:!0});var d=h(e);s=p(d,"DIV",{class:!0});var i=h(s);o=p(i,"DIV",{});var m=h(o);for(let E=0;E<a.length;E+=1)a[E].l(m);m.forEach(u),i.forEach(u),d.forEach(u),this.h()},h(){l(s,"class","flex flex-col justify-center items-center h-full"),l(e,"class","fixed w-screen h-screen z-10 bg-blue-400")},m(r,d){q(r,e,d),c(e,s),c(s,o);for(let i=0;i<a.length;i+=1)a[i]&&a[i].m(o,null)},p(r,d){if(d[0]&640){n=He(Object.entries(r[7]));let i;for(i=0;i<n.length;i+=1){const m=fs(r,n,i);a[i]?a[i].p(m,d):(a[i]=_s(m),a[i].c(),a[i].m(o,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=n.length}},i:ce,o:ce,d(r){r&&u(e),Rt(a,r)}}}function ms(t){let e,s=t[1](`${t[23]}.title`)+"",o,n;return{c(){e=g("a"),o=X(s),this.h()},l(a){e=p(a,"A",{href:!0,class:!0,"aria-current":!0});var r=h(e);o=Y(r,s),r.forEach(u),this.h()},h(){l(e,"href",t[27]),l(e,"class",n=ct(`${t[4]===t[27]?"active":"inactive"} rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap`)+" svelte-lkchus"),l(e,"aria-current","page")},m(a,r){q(a,e,r),c(e,o)},p(a,r){r[0]&2&&s!==(s=a[1](`${a[23]}.title`)+"")&&ie(o,s),r[0]&16&&n!==(n=ct(`${a[4]===a[27]?"active":"inactive"} rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap`)+" svelte-lkchus")&&l(e,"class",n)},d(a){a&&u(e)}}}function vs(t){let e,s=t[1](`${t[23]}.title`)+"",o,n;return{c(){e=g("a"),o=X(s),this.h()},l(a){e=p(a,"A",{href:!0,class:!0,"aria-current":!0});var r=h(e);o=Y(r,s),r.forEach(u),this.h()},h(){l(e,"href",t[27]),l(e,"class",n=ct(`${t[4]===t[27]?"active":"inactive"} block rounded-md px-3 py-2 text-base font-medium`)+" svelte-lkchus"),l(e,"aria-current","page")},m(a,r){q(a,e,r),c(e,o)},p(a,r){r[0]&2&&s!==(s=a[1](`${a[23]}.title`)+"")&&ie(o,s),r[0]&16&&n!==(n=ct(`${a[4]===a[27]?"active":"inactive"} block rounded-md px-3 py-2 text-base font-medium`)+" svelte-lkchus")&&l(e,"class",n)},d(a){a&&u(e)}}}function _s(t){let e,s,o,n,a,r=t[23]+"",d,i,m,E;function k(){return t[16](t[22])}function x(){return t[17](t[22])}return{c(){e=g("div"),s=g("img"),n=b(),a=g("span"),d=X(r),i=b(),this.h()},l(D){e=p(D,"DIV",{class:!0,role:!0,tabindex:!0});var S=h(e);s=p(S,"IMG",{src:!0,width:!0,height:!0,alt:!0}),n=y(S),a=p(S,"SPAN",{class:!0});var I=h(a);d=Y(I,r),I.forEach(u),i=y(S),S.forEach(u),this.h()},h(){Pt(s.src,o=t[24])||l(s,"src",o),l(s,"width","50"),l(s,"height","50"),l(s,"alt",t[23]),l(a,"class","text-white text-3xl"),l(e,"class","flex gap-2 p-1 hover:cursor-pointer items-center"),l(e,"role","button"),l(e,"tabindex","0")},m(D,S){q(D,e,S),c(e,s),c(e,n),c(e,a),c(a,d),c(e,i),m||(E=[Te(e,"click",k),Te(e,"keypress",x)],m=!0)},p(D,S){t=D},d(D){D&&u(e),m=!1,bs(E)}}}function ws(t){let e,s,o,n;const a=[ll,sl],r=[];function d(i,m){return i[2]?0:1}return e=d(t),s=r[e]=a[e](t),{c(){s.c(),o=W()},l(i){s.l(i),o=W()},m(i,m){r[e].m(i,m),q(i,o,m),n=!0},p(i,m){let E=e;e=d(i),e===E?r[e].p(i,m):(Tt(),ve(r[E],1,1,()=>{r[E]=null}),Ht(),s=r[e],s?s.p(i,m):(s=r[e]=a[e](i),s.c()),ue(s,1),s.m(o.parentNode,o))},i(i){n||(ue(s),n=!0)},o(i){ve(s),n=!1},d(i){i&&u(o),r[e].d(i)}}}function al(t){let e,s,o,n,a,r=(t[0]||!t[6])&&hs(t),d=(t[0]||!t[6])&&ps(t);return{c(){r&&r.c(),e=W(),d&&d.c(),s=W()},l(i){r&&r.l(i),e=W(),d&&d.l(i),s=W()},m(i,m){r&&r.m(i,m),q(i,e,m),d&&d.m(i,m),q(i,s,m),o=!0,n||(a=Te(window,"keydown",t[15]),n=!0)},p(i,m){i[0]||!i[6]?r?r.p(i,m):(r=hs(i),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),i[0]||!i[6]?d?(d.p(i,m),m[0]&1&&ue(d,1)):(d=ps(i),d.c(),ue(d,1),d.m(s.parentNode,s)):d&&(Tt(),ve(d,1,1,()=>{d=null}),Ht())},i(i){o||(ue(d),o=!0)},o(i){ve(d),o=!1},d(i){i&&(u(e),u(s)),r&&r.d(i),d&&d.d(i),n=!1,a()}}}function rl(t,e,s){let o,n,a,r;Vt(t,Hs,w=>s(11,n=w)),Vt(t,Ts,w=>s(12,a=w)),Vt(t,ut,w=>s(5,r=w));let{$$slots:d={},$$scope:i}=e,{data:m}=e;cs(ot(m)),os(ot(m));const{referenceLanguage:E}=it();let{i:k,language:x}=it();const{switchLanguage:D}=it();let S=tl;const I={en:{name:"English",icon:"https://raw.githubusercontent.com/google/region-flags/gh-pages/svg/US.svg"},ru:{name:"Русский",icon:"https://raw.githubusercontent.com/google/region-flags/gh-pages/svg/RU.svg"},sq:{name:"Shqip",icon:"https://raw.githubusercontent.com/google/region-flags/gh-pages/svg/AL.svg"},es:{name:"Español",icon:"https://raw.githubusercontent.com/google/region-flags/gh-pages/svg/ES.svg"},ar:{name:"العربية",icon:"https://raw.githubusercontent.com/google/region-flags/gh-pages/svg/SA.svg"}},U=[["home","/"],["services","/services"],["activities","/activities"],["classes","/classes"],["contact","/contact"]];let K=!1;const de=w=>{s(2,S=!1),ut.set(w),console.log(`changed language to ${w}`),D(w)},Z=w=>w.key==="Escape"&&s(2,S=!1),Ue=w=>de(w),je=w=>de(w),$=()=>s(3,K=!K),ee=()=>s(2,S=!0),J=()=>s(2,S=!0);return t.$$set=w=>{"data"in w&&s(10,m=w.data),"$$scope"in w&&s(13,i=w.$$scope)},t.$$.update=()=>{var w;t.$$.dirty[0]&1025&&(cs(ot(m)),os(ot(m)),s(1,{i:k,language:x}=it(),k,(s(0,x),s(10,m))),(w=document.body.parentElement)==null||w.setAttribute("lang",x)),t.$$.dirty[0]&4096&&a&&s(3,K=!1),t.$$.dirty[0]&2048&&s(4,o=n.url.pathname)},[x,k,S,K,o,r,E,I,U,de,m,n,a,i,d,Z,Ue,je,$,ee,J]}class hl extends Rs{constructor(e){super(),Cs(this,e,rl,al,Ct,{data:10},null,[-1,-1])}}export{hl as component,fl as universal};
