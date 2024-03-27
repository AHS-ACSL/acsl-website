import{s as oe,n as te,o as ce}from"../chunks/scheduler.C9xG8wYf.js";import{S as ue,i as fe,e as g,s as _,k as W,c as v,a as S,d,f as C,l as x,g as y,h as i,m as he,n as de,t as I,o as w,b as L,j as Z}from"../chunks/index.CeFeVJxe.js";import{H as pe}from"../chunks/core.Bns4Tjg1.js";function ne(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function se(r,e,a){const n=r.slice();return n[7]=e[a],n[9]=a,n}function le(r){let e,a=ne(r[1].split("message")),n=[];for(let t=0;t<a.length;t+=1)n[t]=ae(se(r,a,t));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=W()},l(t){for(let s=0;s<n.length;s+=1)n[s].l(t);e=W()},m(t,s){for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(t,s);y(t,e,s)},p(t,s){if(s&6){a=ne(t[1].split("message"));let l;for(l=0;l<a.length;l+=1){const c=se(t,a,l);n[l]?n[l].p(c,s):(n[l]=ae(c),n[l].c(),n[l].m(e.parentNode,e))}for(;l<n.length;l+=1)n[l].d(1);n.length=a.length}},d(t){t&&d(e),de(n,t)}}}function me(r){let e=r[7]+"",a;return{c(){a=I(e)},l(n){a=L(n,e)},m(n,t){y(n,a,t)},p(n,t){t&2&&e!==(e=n[7]+"")&&Z(a,e)},d(n){n&&d(a)}}}function ge(r){let e,a,n,t=r[7]+"",s;return{c(){e=g("span"),a=I(r[2]),n=g("span"),s=I(t),this.h()},l(l){e=v(l,"SPAN",{class:!0});var c=S(e);a=L(c,r[2]),n=v(c,"SPAN",{class:!0}),S(n).forEach(d),c.forEach(d),s=L(l,t),this.h()},h(){x(n,"class","typing-cursor svelte-1x6x97y"),x(e,"class","bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 text-enhanced-readability svelte-1x6x97y")},m(l,c){y(l,e,c),i(e,a),i(e,n),y(l,s,c)},p(l,c){c&4&&Z(a,l[2]),c&2&&t!==(t=l[7]+"")&&Z(s,t)},d(l){l&&(d(e),d(s))}}}function ae(r){let e;function a(s,l){return s[9]>0?ge:me}let t=a(r)(r);return{c(){t.c(),e=W()},l(s){t.l(s),e=W()},m(s,l){t.m(s,l),y(s,e,l)},p(s,l){t.p(s,l)},d(s){s&&d(e),t.d(s)}}}function ie(r){let e,a,n="What is ACSL Club",t,s,l=`ACSL Club is a club for students who are interested in computer science and programming. We\r
			meet every week to learn new programming concepts and solve problems. We also participate in\r
			the American Computer Science League (ACSL) competition.`,c,p,A="Who can join?",b,o,m=`Our club is open to all students who are interested in computer science, regardless of their\r
			experience level. We welcome beginners who are just starting to learn programming, as well as\r
			more experienced students who want to improve their skills.`,f,h,M="How does the competition work?",P,T,K=`ACSL test consist of 5 computer science questions that are to be solved in 30 minutes and a\r
			programming question that are to be solved in 3 days(it doesnt take 3 days) ACSL uses java,\r
			C++, and python 3 for the programming questions. The questions are designed to test your\r
			problem-solving skills and your ability to write clean, efficient code.`,B,H,Q="What would I learn?",J,D,X=`We will teach you computer science concepts and programming. Take a look at the code below to\r
			see an example of how we solve a problem in the ACSL`,z,O,R,j,F,$=`
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
				`,G,U,Y,q,E,ee='<h1 class="svelte-1x6x97y">So what are you waiting for? Join ACSL Club today!</h1> <button class="btn btn-sm variant-ghost-surface m-8"><a href="https://discord.gg/swT6yFGnYb" target="_blank" rel="noreferrer">Join our Discord server!!!</a></button>';return{c(){e=g("div"),a=g("h1"),a.textContent=n,t=_(),s=g("p"),s.textContent=l,c=_(),p=g("h1"),p.textContent=A,b=_(),o=g("p"),o.textContent=m,f=_(),h=g("h1"),h.textContent=M,P=_(),T=g("p"),T.textContent=K,B=_(),H=g("h1"),H.textContent=Q,J=_(),D=g("p"),D.textContent=X,z=_(),O=g("pre"),R=I("			"),j=g("code"),F=I(`\r
				`),G=I($),U=I(`\r
			`),Y=I(`\r
		`),q=_(),E=g("div"),E.innerHTML=ee,this.h()},l(k){e=v(k,"DIV",{class:!0});var u=S(e);a=v(u,"H1",{id:!0,class:!0,"data-svelte-h":!0}),w(a)!=="svelte-uoxye2"&&(a.textContent=n),t=C(u),s=v(u,"P",{class:!0,"data-svelte-h":!0}),w(s)!=="svelte-6orsk"&&(s.textContent=l),c=C(u),p=v(u,"H1",{class:!0,"data-svelte-h":!0}),w(p)!=="svelte-73spub"&&(p.textContent=A),b=C(u),o=v(u,"P",{class:!0,"data-svelte-h":!0}),w(o)!=="svelte-1klup6u"&&(o.textContent=m),f=C(u),h=v(u,"H1",{class:!0,"data-svelte-h":!0}),w(h)!=="svelte-1s3fu2h"&&(h.textContent=M),P=C(u),T=v(u,"P",{class:!0,"data-svelte-h":!0}),w(T)!=="svelte-66gk3x"&&(T.textContent=K),B=C(u),H=v(u,"H1",{class:!0,"data-svelte-h":!0}),w(H)!=="svelte-xznaxr"&&(H.textContent=Q),J=C(u),D=v(u,"P",{class:!0,"data-svelte-h":!0}),w(D)!=="svelte-1sj30jh"&&(D.textContent=X),z=C(u),O=v(u,"PRE",{});var N=S(O);R=L(N,"			"),j=v(N,"CODE",{class:!0});var V=S(j);F=L(V,`\r
				`),G=L(V,$),U=L(V,`\r
			`),V.forEach(d),Y=L(N,`\r
		`),N.forEach(d),u.forEach(d),q=C(k),E=v(k,"DIV",{class:!0,"data-svelte-h":!0}),w(E)!=="svelte-1fxb3we"&&(E.innerHTML=ee),this.h()},h(){x(a,"id","main-content"),x(a,"class","svelte-1x6x97y"),x(s,"class","svelte-1x6x97y"),x(p,"class","svelte-1x6x97y"),x(o,"class","svelte-1x6x97y"),x(h,"class","svelte-1x6x97y"),x(T,"class","svelte-1x6x97y"),x(H,"class","svelte-1x6x97y"),x(D,"class","svelte-1x6x97y"),x(j,"class","language-java"),x(e,"class","m-5 p-4"),x(E,"class","flex flex-col items-center")},m(k,u){y(k,e,u),i(e,a),i(e,t),i(e,s),i(e,c),i(e,p),i(e,b),i(e,o),i(e,f),i(e,h),i(e,P),i(e,T),i(e,B),i(e,H),i(e,J),i(e,D),i(e,z),i(e,O),i(O,R),i(O,j),i(j,F),i(j,G),i(j,U),i(O,Y),y(k,q,u),y(k,E,u)},d(k){k&&(d(e),d(q),d(E))}}}function ve(r){let e,a,n,t,s,l,c,p,A,b,o=r[2]&&le(r),m=r[0]&&ie();return{c(){e=g("div"),a=g("div"),o&&o.c(),n=_(),t=g("button"),s=g("i"),c=_(),m&&m.c(),p=W(),this.h()},l(f){e=v(f,"DIV",{class:!0});var h=S(e);a=v(h,"DIV",{});var M=S(a);o&&o.l(M),M.forEach(d),n=C(h),t=v(h,"BUTTON",{class:!0});var P=S(t);s=v(P,"I",{class:!0}),S(s).forEach(d),P.forEach(d),h.forEach(d),c=C(f),m&&m.l(f),p=W(),this.h()},h(){x(s,"class","fi fi-rr-caret-down"),x(t,"class",l=r[0]?"hidden":"btn variant-ghost-primary mt-32"),x(e,"class","flex justify-center items-center font-roboto responsive-large-text transition-all duration-1000 text-center leading-tight p-5 h-full flex-col svelte-1x6x97y")},m(f,h){y(f,e,h),i(e,a),o&&o.m(a,null),i(e,n),i(e,t),i(t,s),y(f,c,h),m&&m.m(f,h),y(f,p,h),A||(b=he(t,"click",r[3]),A=!0)},p(f,[h]){f[2]?o?o.p(f,h):(o=le(f),o.c(),o.m(a,null)):o&&(o.d(1),o=null),h&1&&l!==(l=f[0]?"hidden":"btn variant-ghost-primary mt-32")&&x(t,"class",l),f[0]?m||(m=ie(),m.c(),m.m(p.parentNode,p)):m&&(m.d(1),m=null)},i:te,o:te,d(f){f&&(d(e),d(c),d(p)),o&&o.d(),m&&m.d(f),A=!1,b()}}}let re="Welcome to ACSL Club!";function xe(r,e,a){let n=!1,t=0;const s=['out.println("message")','console.log("message");','cout << "message";','print("message")','puts "message"','echo "message"'];let l=s[t],c="",p;ce(()=>{let b;if(!c){let o=0;p=setInterval(()=>{o<re.length?(a(2,c=re.substring(0,o+1)),o++):clearInterval(p)},Math.random()*300+100)}return b=setInterval(()=>{t=(t+1)%s.length,a(1,l=s[t])},5e3),()=>{clearInterval(p),clearInterval(b)}});function A(){a(0,n=!0),setTimeout(()=>{const b=document.getElementById("main-content");b&&(b.scrollIntoView({behavior:"smooth"}),document.body.style.overflow="auto",pe.highlightAll())},0)}return[n,l,c,A]}class ye extends ue{constructor(e){super(),fe(this,e,xe,ve,oe,{})}}export{ye as component};
