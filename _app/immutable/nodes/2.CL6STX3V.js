import{s as bt,n as dt,o as _t}from"../chunks/scheduler.CqZQONLu.js";import{S as Ct,i as yt,e as h,s as b,m as q,c as p,a as w,f as g,b as _,h as m,j as k,k as i,n as xt,o as kt,t as T,g as y,d as I,l as nt}from"../chunks/index.BZtW1gYG.js";import{g as wt,b as St}from"../chunks/entry.qjKPtknd.js";import{H as At}from"../chunks/core.Bns4Tjg1.js";function ft(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function ht(r,t,a){const n=r.slice();return n[8]=t[a],n[10]=a,n}function pt(r){let t,a=ft(r[1].split("message")),n=[];for(let e=0;e<a.length;e+=1)n[e]=mt(ht(r,a,e));return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=q()},l(e){for(let s=0;s<n.length;s+=1)n[s].l(e);t=q()},m(e,s){for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(e,s);k(e,t,s)},p(e,s){if(s&6){a=ft(e[1].split("message"));let l;for(l=0;l<a.length;l+=1){const c=ht(e,a,l);n[l]?n[l].p(c,s):(n[l]=mt(c),n[l].c(),n[l].m(t.parentNode,t))}for(;l<n.length;l+=1)n[l].d(1);n.length=a.length}},d(e){e&&g(t),kt(n,e)}}}function jt(r){let t=r[8]+"",a;return{c(){a=T(t)},l(n){a=I(n,t)},m(n,e){k(n,a,e)},p(n,e){e&2&&t!==(t=n[8]+"")&&nt(a,t)},d(n){n&&g(a)}}}function Et(r){let t,a,n,e=r[8]+"",s;return{c(){t=h("span"),a=T(r[2]),n=h("span"),s=T(e),this.h()},l(l){t=p(l,"SPAN",{class:!0});var c=w(t);a=I(c,r[2]),n=p(c,"SPAN",{class:!0}),w(n).forEach(g),c.forEach(g),s=I(l,e),this.h()},h(){m(n,"class","typing-cursor svelte-1x6x97y"),m(t,"class","bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 text-enhanced-readability svelte-1x6x97y")},m(l,c){k(l,t,c),i(t,a),i(t,n),k(l,s,c)},p(l,c){c&4&&nt(a,l[2]),c&2&&e!==(e=l[8]+"")&&nt(s,e)},d(l){l&&(g(t),g(s))}}}function mt(r){let t;function a(s,l){return s[10]>0?Et:jt}let e=a(r)(r);return{c(){e.c(),t=q()},l(s){e.l(s),t=q()},m(s,l){e.m(s,l),k(s,t,l)},p(s,l){e.p(s,l)},d(s){s&&g(t),e.d(s)}}}function gt(r){let t,a,n="What is ACSL Club",e,s,l=`ACSL Club is a club for students who are interested in computer science and programming. We\r
			meet every week to learn new programming concepts and solve problems. We also participate in\r
			the American Computer Science League (ACSL) competition.`,c,x,A="Who can join?",L,o,u=`Our club is open to all students who are interested in computer science, regardless of their\r
			experience level. We welcome beginners who are just starting to learn programming, as well as\r
			more experienced students who want to improve their skills.`,d,v,V="How does the competition work?",N,H,st=`ACSL test consist of 5 computer science questions that are to be solved in 30 minutes and a\r
			programming question that are to be solved in 3 days(it doesnt take 3 days) ACSL uses java,\r
			C++, and python 3 for the programming questions. The questions are designed to test your\r
			problem-solving skills and your ability to write clean, efficient code.`,R,O,lt="What would I learn?",F,D,at=`We will teach you computer science concepts and programming. Take a look at the code below to\r
			see an example of how we solve a problem in the ACSL`,G,P,Y,j,Z,it=`
import java.util.*;



class Result {
    private static String sentence [];
    private static String words[][];
    public static String encodeMessage(String text, String message) {
        //break up the text to sentence
        sentence = text.split("(\\.|\\?|!)  ");
        words = new String[sentence.length][];
        for(int i = 0; i < sentence.length; i ++){
            words[i] = Arrays.stream(sentence[i].split("[^a-zA-Z0-9]"))
                    .filter(s->!(s.trim().isEmpty())).toArray(String[]::new);
        }
        StringBuilder build = new StringBuilder();
        char msg [] = message.toCharArray();
        int accountletter = 0; //accounts for the offset, because space and special character is not a letter
        for(int k = 0; k < msg.length; k++){
            char c = msg[k];
            if(c == ' '){
                build.append("_");
                accountletter++;
                continue;
            }
            if(Character.isLetterOrDigit(c)){
                int [] find = nthOccurence(k-accountletter + 1, c); //index at 1
                build.append(find[0]).append(".").append(find[1]).append(".").append(find[2]);
                if(Character.isLetterOrDigit(msg[k + 1]))build.append(" ");
                continue;
            }
            build.append(c);
            accountletter++;
        }

        return build.toString();
    }

    private static int [] nthOccurence(int n, char c){
        int oc= 0; //occurence count
        for(int i = 0; i < sentence.length; i ++){
            String [] cache = words[i];
            for(int j = 0; j<cache.length; j++){
                for(int k = 0; k<cache[j].length(); k++){
                    if(cache[j].charAt(k) == c){
                        oc++;
                        if(oc == n){
                            return new int[]{i + 1,j + 1 ,k + 1}; //index start at 1
                        }
                    }
                }
            }
        }
        //divide by half
        return nthOccurence(n/2, c);
    }
}
				`,K,Q,X,J,C,W,rt="So what are you waiting for? Join ACSL Club today!",$,M,ot='<a href="https://discord.gg/swT6yFGnYb" target="_blank" rel="noreferrer">Join our Discord server!!!</a>',tt,E,ct="Sign up here!!!",et,ut;return{c(){t=h("div"),a=h("h1"),a.textContent=n,e=b(),s=h("p"),s.textContent=l,c=b(),x=h("h1"),x.textContent=A,L=b(),o=h("p"),o.textContent=u,d=b(),v=h("h1"),v.textContent=V,N=b(),H=h("p"),H.textContent=st,R=b(),O=h("h1"),O.textContent=lt,F=b(),D=h("p"),D.textContent=at,G=b(),P=h("pre"),Y=T("			"),j=h("code"),Z=T(`\r
				`),K=T(it),Q=T(`\r
			`),X=T(`\r
		`),J=b(),C=h("div"),W=h("h1"),W.textContent=rt,$=b(),M=h("button"),M.innerHTML=ot,tt=b(),E=h("button"),E.textContent=ct,this.h()},l(S){t=p(S,"DIV",{class:!0});var f=w(t);a=p(f,"H1",{id:!0,class:!0,"data-svelte-h":!0}),y(a)!=="svelte-uoxye2"&&(a.textContent=n),e=_(f),s=p(f,"P",{class:!0,"data-svelte-h":!0}),y(s)!=="svelte-6orsk"&&(s.textContent=l),c=_(f),x=p(f,"H1",{class:!0,"data-svelte-h":!0}),y(x)!=="svelte-73spub"&&(x.textContent=A),L=_(f),o=p(f,"P",{class:!0,"data-svelte-h":!0}),y(o)!=="svelte-1klup6u"&&(o.textContent=u),d=_(f),v=p(f,"H1",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-1s3fu2h"&&(v.textContent=V),N=_(f),H=p(f,"P",{class:!0,"data-svelte-h":!0}),y(H)!=="svelte-66gk3x"&&(H.textContent=st),R=_(f),O=p(f,"H1",{class:!0,"data-svelte-h":!0}),y(O)!=="svelte-xznaxr"&&(O.textContent=lt),F=_(f),D=p(f,"P",{class:!0,"data-svelte-h":!0}),y(D)!=="svelte-1sj30jh"&&(D.textContent=at),G=_(f),P=p(f,"PRE",{});var U=w(P);Y=I(U,"			"),j=p(U,"CODE",{class:!0});var z=w(j);Z=I(z,`\r
				`),K=I(z,it),Q=I(z,`\r
			`),z.forEach(g),X=I(U,`\r
		`),U.forEach(g),f.forEach(g),J=_(S),C=p(S,"DIV",{class:!0});var B=w(C);W=p(B,"H1",{class:!0,"data-svelte-h":!0}),y(W)!=="svelte-gg2uxd"&&(W.textContent=rt),$=_(B),M=p(B,"BUTTON",{class:!0,"data-svelte-h":!0}),y(M)!=="svelte-9glaa"&&(M.innerHTML=ot),tt=_(B),E=p(B,"BUTTON",{class:!0,"data-svelte-h":!0}),y(E)!=="svelte-77d7b5"&&(E.textContent=ct),B.forEach(g),this.h()},h(){m(a,"id","main-content"),m(a,"class","svelte-1x6x97y"),m(s,"class","svelte-1x6x97y"),m(x,"class","svelte-1x6x97y"),m(o,"class","svelte-1x6x97y"),m(v,"class","svelte-1x6x97y"),m(H,"class","svelte-1x6x97y"),m(O,"class","svelte-1x6x97y"),m(D,"class","svelte-1x6x97y"),m(j,"class","language-java"),m(t,"class","m-5 p-4"),m(W,"class","svelte-1x6x97y"),m(M,"class","btn btn-sm variant-ghost-surface m-8"),m(E,"class","btn btn-sm variant-ghost-surface m-8"),m(C,"class","flex flex-col items-center")},m(S,f){k(S,t,f),i(t,a),i(t,e),i(t,s),i(t,c),i(t,x),i(t,L),i(t,o),i(t,d),i(t,v),i(t,N),i(t,H),i(t,R),i(t,O),i(t,F),i(t,D),i(t,G),i(t,P),i(P,Y),i(P,j),i(j,Z),i(j,K),i(j,Q),i(P,X),k(S,J,f),k(S,C,f),i(C,W),i(C,$),i(C,M),i(C,tt),i(C,E),et||(ut=xt(E,"click",r[4]),et=!0)},d(S){S&&(g(t),g(J),g(C)),et=!1,ut()}}}function Tt(r){let t,a,n,e,s,l,c,x,A,L,o=r[2]&&pt(r),u=r[0]&&gt(r);return{c(){t=h("div"),a=h("div"),o&&o.c(),n=b(),e=h("button"),s=h("i"),c=b(),u&&u.c(),x=q(),this.h()},l(d){t=p(d,"DIV",{class:!0});var v=w(t);a=p(v,"DIV",{});var V=w(a);o&&o.l(V),V.forEach(g),n=_(v),e=p(v,"BUTTON",{class:!0});var N=w(e);s=p(N,"I",{class:!0}),w(s).forEach(g),N.forEach(g),v.forEach(g),c=_(d),u&&u.l(d),x=q(),this.h()},h(){m(s,"class","fi fi-rr-caret-down"),m(e,"class",l=r[0]?"hidden":"btn variant-ghost-primary mt-32"),m(t,"class","flex justify-center items-center font-roboto responsive-large-text transition-all duration-1000 text-center leading-tight p-5 h-full flex-col svelte-1x6x97y")},m(d,v){k(d,t,v),i(t,a),o&&o.m(a,null),i(t,n),i(t,e),i(e,s),k(d,c,v),u&&u.m(d,v),k(d,x,v),A||(L=xt(e,"click",r[3]),A=!0)},p(d,[v]){d[2]?o?o.p(d,v):(o=pt(d),o.c(),o.m(a,null)):o&&(o.d(1),o=null),v&1&&l!==(l=d[0]?"hidden":"btn variant-ghost-primary mt-32")&&m(e,"class",l),d[0]?u||(u=gt(d),u.c(),u.m(x.parentNode,x)):u&&(u.d(1),u=null)},i:dt,o:dt,d(d){d&&(g(t),g(c),g(x)),o&&o.d(),u&&u.d(d),A=!1,L()}}}let vt="Welcome to ACSL Club!";function It(r,t,a){let n=!1,e=0;const s=['out.println("message")','console.log("message");','cout << "message";','print("message")','puts "message"','echo "message"'];let l=s[e],c="",x;_t(()=>{let o;if(!c){let u=0;x=setInterval(()=>{u<vt.length?(a(2,c=vt.substring(0,u+1)),u++):clearInterval(x)},Math.random()*300+100)}return o=setInterval(()=>{e=(e+1)%s.length,a(1,l=s[e])},5e3),()=>{clearInterval(x),clearInterval(o)}});function A(){a(0,n=!0),setTimeout(()=>{const o=document.getElementById("main-content");o&&(o.scrollIntoView({behavior:"smooth"}),document.body.style.overflow="auto",At.highlightAll())},0)}return[n,l,c,A,()=>{wt(St+"/signup")}]}class Pt extends Ct{constructor(t){super(),yt(this,t,It,Tt,bt,{})}}export{Pt as component};
