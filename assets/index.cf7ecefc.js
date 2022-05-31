const je=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}};je();function y(){}function $e(t){return t()}function xe(){return Object.create(null)}function P(t){t.forEach($e)}function Se(t){return typeof t=="function"}function D(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let V;function Ce(t,e){return V||(V=document.createElement("a")),V.href=e,t===V.href}function Ae(t){return Object.keys(t).length===0}function o(t,e){t.appendChild(e)}function K(t,e,s){t.insertBefore(e,s||null)}function T(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function I(){return H(" ")}function O(t,e,s,r){return t.addEventListener(e,s,r),()=>t.removeEventListener(e,s,r)}function l(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function Le(t){return Array.from(t.childNodes)}function L(t,e,s,r){s===null?t.style.removeProperty(e):t.style.setProperty(e,s,r?"important":"")}let ce;function R(t){ce=t}const N=[],be=[],X=[],ve=[],Ee=Promise.resolve();let ie=!1;function Fe(){ie||(ie=!0,Ee.then(Ie))}function ee(t){X.push(t)}const le=new Set;let U=0;function Ie(){const t=ce;do{for(;U<N.length;){const e=N[U];U++,R(e),Pe(e.$$)}for(R(null),N.length=0,U=0;be.length;)be.pop()();for(let e=0;e<X.length;e+=1){const s=X[e];le.has(s)||(le.add(s),s())}X.length=0}while(N.length);for(;ve.length;)ve.pop()();ie=!1,le.clear(),R(t)}function Pe(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ee)}}const Z=new Set;let A;function Y(){A={r:0,c:[],p:A}}function Q(){A.r||P(A.c),A=A.p}function b(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function w(t,e,s,r){if(t&&t.o){if(Z.has(t))return;Z.add(t),A.c.push(()=>{Z.delete(t),r&&(s&&t.d(1),r())}),t.o(e)}}function te(t){t&&t.c()}function J(t,e,s,r){const{fragment:a,on_mount:n,on_destroy:p,after_update:d}=t.$$;a&&a.m(e,s),r||ee(()=>{const c=n.map($e).filter(Se);p?p.push(...c):P(c),t.$$.on_mount=[]}),d.forEach(ee)}function W(t,e){const s=t.$$;s.fragment!==null&&(P(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function Te(t,e){t.$$.dirty[0]===-1&&(N.push(t),Fe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(t,e,s,r,a,n,p,d=[-1]){const c=ce;R(t);const i=t.$$={fragment:null,ctx:null,props:n,update:y,not_equal:a,bound:xe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:xe(),dirty:d,skip_bound:!1,root:e.target||c.$$.root};p&&p(i.root);let S=!1;if(i.ctx=s?s(t,e.props||{},(_,$,...M)=>{const C=M.length?M[0]:$;return i.ctx&&a(i.ctx[_],i.ctx[_]=C)&&(!i.skip_bound&&i.bound[_]&&i.bound[_](C),S&&Te(t,_)),$}):[],i.update(),S=!0,P(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){const _=Le(e.target);i.fragment&&i.fragment.l(_),_.forEach(T)}else i.fragment&&i.fragment.c();e.intro&&b(t.$$.fragment),J(t,e.target,e.anchor,e.customElement),Ie()}R(c)}class q{$destroy(){W(this,1),this.$destroy=y}$on(e,s){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(s),()=>{const a=r.indexOf(s);a!==-1&&r.splice(a,1)}}$set(e){this.$$set&&!Ae(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Me(t){let e;return{c(){e=u("div"),e.innerHTML=`<div class="flex flex-col overflow-scroll h-full"><div class="flex flex-col"><h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> Education</h1> 
      <div class="card bg-base-100 mt-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Case Western Reserve University</span></h2> 
          <div class="text-xl"><h3>GPA: 3.81</h3> 
            <h3>BA Computer Science Spring 2022</h3></div></div></div> 
      <div class="card bg-base-100 mt-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Yonsei University</span></h2> 
          <div class="text-xl"><h3>Exhange Student Academic Year 2020-2021</h3> 
            <h3>Studied Computer Science &amp; Korean Culture</h3></div></div></div> 
      <div class="card bg-base-100 m-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Stuyvesant HS</span></h2> 
          <div class="text-xl"><h3>Class of 2017</h3> 
            <h3>GPA: 93%</h3></div></div></div> 
      
      <h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> Skills</h1> 
      
      <div class="card bg-base-100 mt-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Python</span></h2> 
          
          <p class="text-lg text-neutral-content">I started learning python back in 2015, my sophomore year of high school. At the time I had no interest in CS but it was a class that I had to pass. For the final Project I remember getting shafted by my partner and writing a cheap facebook clone with django that used csv&#39;s to store user info and txt files to store blogs, he did the css. Even though I didn&#39;t want to go into CS at the time I gained an appreciation for python, its simplicity and elegance, that I would re-discover years later. Although I don&#39;t do much in the language at the moment I did several large projects in python at university and continue to use it as a scripting language for small things here and there.</p> 
          <div class="text-xl flex flex-col items-center"><h3>Flask</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="85" max="100"></progress>  <br/> 
            <h3>Django</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="75" max="100"></progress>  <br/> 
            <h3>Numpy</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="65" max="100"></progress>  <br/> 
            <h3>PyTorch</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="50" max="100"></progress>  <br/> 
            <h3>OOP</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="90" max="100"></progress></div></div></div> 
      
      <div class="card bg-base-100 mt-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Javascript</span></h2> 
          
          <p class="text-lg text-neutral-content">I think most people hear pretty bad things about javascript when they&#39;re first starting out. I heard that it was a mess, slow, and hard to write well. Although there are kernels of truth to some of those statements on the whole I&#39;ve really enjoyed learning JS. My entrance into the world of server side js came through my interest in svelte, and use of sveltekit in a final project. After that I did several toy projects in js and continued to expand my knowledge with a course in web development in my senior year of undergrad. I have dabbled in javascript backends and middlewares but have a solid grasp on javascript for the front end.</p> 
          <div class="text-xl flex flex-col items-center"><h3>Vanilla JS (no framework)</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="80" max="100"></progress>  <br/> 
            <h3>Svelte &amp; SvelteKit</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="90" max="100"></progress>  <br/> 
            <h3>Vue</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="70" max="100"></progress>  <br/> 
            <h3>TypeScript</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="75" max="100"></progress></div></div></div> 
      
      <div class="card bg-base-100 mt-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Flutter</span></h2> 
          
          <p class="text-lg text-neutral-content">Although I have a strong background in Java I am not a fan of the language, or the fact that it is so aggressively licensed. For this reason when I decided to try out mobile development I had three options for android development. Flutter, React Native, and Kotlin. At the time I was planning out a final project with a group and weighing everyone&#39;s experience I suggested Flutter as we were all relatively green on each technology and flutter seemed to have the best tooling. I immediately fell in love with the framework. The community, packages, ecosystem, and tooling make it a joy to work with and I continued to use it for several more school projects and was able to get an internship using flutter daily in the spring of 2021.</p> 
          <div class="text-xl flex flex-col items-center"><h3>Dart</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="95" max="100"></progress>  <br/> 
            <h3>Mobile Front End</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="85" max="100"></progress>  <br/> 
            <h3>Mobile Backends</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="80" max="100"></progress>  <br/></div></div></div> 
      
      <div class="card bg-base-100 mt-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Web Development</span></h2> 
          
          <p class="text-lg text-neutral-content">In high school I had to take html and css, so I&#39;ve had somewhat of a foundation before deciding to study computer science full time but it wasn&#39;t until my senior year in university that I took web dev seriously. I got my first taste of website making with hugo, a go cli tool for building static websites, to make my first portfolio site. I just imported a theme and got to work. Then as I started learning more in my classes, databases, fullstack, etc... I was able to incorporate all of my interests and previous experiences into several projects. I&#39;ve become a fan of several frameworks mainly, django, sveltekit, and want to test out rails and possibly laravel.</p> 
          <div class="text-xl flex flex-col items-center"><h3>HTML</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="100" max="100"></progress>  <br/> 
            <h3>CSS / Tailwindcss</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="90" max="100"></progress>  <br/> 
            <h3>Deployments</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="60" max="100"></progress>  <br/></div></div></div> 
      
      <div class="card bg-base-100 mt-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Linux</span></h2> 
          
          <p class="text-lg text-neutral-content">When I decided to go into Computer Science I was not well prepared. I had an old 11 inch laptop that I could barely read text on and decided that I needed an affordable way to get a better setup. I did some research and found microcenter, then waited for black friday. I got all the parts cheaply and was able to get a free monitor from a friend. The last expense was microsoft windows. Luckily a friend mentioned something about linux, just that he had heard it was free. That was enough for me to dive in and I haven&#39;t looked back since. I&#39;ve been daily driving linux ever since and still use that same desktop. I&#39;ve bounced around alot but settled on void linux. I love the open source community and all of the innovation that it brings. I&#39;m currently writing this on gcc emacs and my second favorite editor is neovim, which I use mainly for compiled languages. I hope to one day contribute to a FOSS project and or create my own.</p> 
          <div class="text-xl flex flex-col items-center"><h3>Command Line</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="95" max="100"></progress>  <br/> 
            <h3>FileSystem</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="90" max="100"></progress>  <br/> 
            <h3>Emacs</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="80" max="100"></progress>  <br/> 
            <h3>Vim / Neovim</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="90" max="100"></progress>  <br/></div></div></div> 
      
      <div class="card bg-base-100 mt-6 mx-6 mb-12 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Some Experience With</span></h2> 
          
          <p class="text-lg text-neutral-content">I&#39;ve played around with some of these languages, for fun or for small school projects. I did a little bit of data science with python and pytorch as well as some data analysis with R for an intro to DS course. I am very interested in golang and currently working on learning it in relation to the go-gin framework to make some simple web app toy projects.</p> 
          <div class="text-xl flex flex-col items-center"><h3>Golang</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="50" max="100"></progress>  <br/> 
            <h3>PHP</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="40" max="100"></progress>  <br/> 
            <h3>R</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="75" max="100"></progress>  <br/></div></div></div></div></div>`,l(e,"class","m-4 mockup-window border border-secondary bg-base-100 shadow-lg"),L(e,"height","95%"),L(e,"width","90%")},m(s,r){K(s,e,r)},p:y,i:y,o:y,d(s){s&&T(e)}}}class He extends q{constructor(e){super(),B(this,e,null,Me,D,{})}}function Oe(t){let e;return{c(){e=u("div"),e.innerHTML=`<div class="hero-content text-center text-neutral-content"><div class="max-w-md shadow-xl mockup-code text-left"><pre data-prefix="$"><code>whoami</code></pre> 
      <pre data-prefix="&gt;" class="text-success"><code>Cade Lueker</code></pre> 
      <pre data-prefix="&gt;" class="text-success"><code>Software Engineer &amp; Web Dev</code></pre></div></div>`},m(s,r){K(s,e,r)},p:y,i:y,o:y,d(s){s&&T(e)}}}class Ne extends q{constructor(e){super(),B(this,e,null,Oe,D,{})}}function Re(t){let e,s,r,a,n,p,d;return ee(t[1]),{c(){e=u("div"),s=u("div"),r=u("iframe"),l(r,"class","overflow-scroll"),l(r,"title","Resume"),Ce(r.src,a="images/resume.pdf")||l(r,"src",a),l(r,"width","100%"),l(r,"height",n=t[0]*.85+"px"),l(s,"class","flex flex-col items-center shadow-xl m-8"),l(e,"class","mockup-window border border-secondary bg-base-100 shadow-lg"),L(e,"height","95%"),L(e,"width","90%")},m(c,i){K(c,e,i),o(e,s),o(s,r),p||(d=O(window,"resize",t[1]),p=!0)},p(c,[i]){i&1&&n!==(n=c[0]*.85+"px")&&l(r,"height",n)},i:y,o:y,d(c){c&&T(e),p=!1,d()}}}function De(t,e,s){let r;function a(){s(0,r=window.innerHeight)}return[r,a]}class Ke extends q{constructor(e){super(),B(this,e,De,Re,D,{})}}function Je(t){let e;return{c(){e=u("div"),e.innerHTML=`<div class="flex flex-col overflow-scroll h-full"><div class="flex flex-col mb-16"><h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> The Crypt</h1> 
	    <div class="card bg-base-100 mt-4 mx-6 shadow-xl lg:card-side"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Senior Project
			    flutter encryption app</span></h2> 
		    <div class="text-xl"><h3 class="mb-3"><span class="text-info">Language / Framework:
			    </span>Flutter &amp; Dart</h3> 
			<h3><span class="text-info">Function:</span> The Crypt is
			    an RSA encryption tool to facilitate secure messaging
			    via mobile platforms (intended use). It uses a local
			    noSQL database to store Personal and Contact Keys for
			    use with decryption of received messages or encryption
			    of messages to be sent. It uses the FastRSA package,
			    written in go, to perform the encryption and to generate
			    key pairs. The app can be build on android and or for
			    Linux Desktop.</h3></div> 
		    <div class="card-actions justify-end"><a href="https://github.com/cademichael/seniorproject" target="_blank" class="btn btn-info">repo</a></div></div> 
		<figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info w-[220px] min-h-[400px]" src="images/crypt.jpg" alt="The Crypt"/></figure></div> 
	    
	    <h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> Spider Messenger</h1> 
	    <div class="card bg-base-100 mt-4 mx-6 shadow-xl lg:card-side"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span>
			    Computer Security Final Project</span></h2> 
		    <div class="text-xl"><h3 class="mb-3"><span class="text-info">Language / Framework:
			    </span>Javascript &amp; SvelteKit</h3> 
			<h3><span class="text-info">Function:</span>
			    Spider messenger was a proof of concept encrypted messenger.
			    It was made to test out hashing for storing user passwords
			    and sha256 encryption for one way encryption of messages.
			    It used sveltekit as a meta framework for the front and
			    back ends and the decentralized database, gundb, for
			    the database that stored user information and chats.
			    Cameron Farmer and I made the app for our final project
			    in computer security.</h3></div> 
		    <div class="card-actions justify-end"><a href="https://github.com/camfarms/spider" target="_blank" class="btn btn-info">repo</a></div></div> 
		<figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info min-w-[450px]" src="images/spider.jpg" alt="The Crypt"/></figure></div></div></div>`,l(e,"class","m-4 mockup-window border border-secondary bg-base-100 shadow-lg"),L(e,"height","95%"),L(e,"width","90%")},m(s,r){K(s,e,r)},p:y,i:y,o:y,d(s){s&&T(e)}}}class We extends q{constructor(e){super(),B(this,e,null,Je,D,{})}}function ye(t){let e,s;return e=new Ne({}),{c(){te(e.$$.fragment)},m(r,a){J(e,r,a),s=!0},i(r){s||(b(e.$$.fragment,r),s=!0)},o(r){w(e.$$.fragment,r),s=!1},d(r){W(e,r)}}}function we(t){let e,s;return e=new Ke({}),{c(){te(e.$$.fragment)},m(r,a){J(e,r,a),s=!0},i(r){s||(b(e.$$.fragment,r),s=!0)},o(r){w(e.$$.fragment,r),s=!1},d(r){W(e,r)}}}function _e(t){let e,s;return e=new He({}),{c(){te(e.$$.fragment)},m(r,a){J(e,r,a),s=!0},i(r){s||(b(e.$$.fragment,r),s=!0)},o(r){w(e.$$.fragment,r),s=!1},d(r){W(e,r)}}}function ke(t){let e,s;return e=new We({}),{c(){te(e.$$.fragment)},m(r,a){J(e,r,a),s=!0},i(r){s||(b(e.$$.fragment,r),s=!0)},o(r){w(e.$$.fragment,r),s=!1},d(r){W(e,r)}}}function Be(t){let e,s,r,a,n,p,d,c,i,S,_,$,M,C,de,E,ue,z,pe,F,fe,G,he,f,se,me,re,ae,ne,j,oe,ge,h=t[0]==="home"&&ye(),m=t[0]==="resume"&&we(),g=t[0]==="about"&&_e(),x=t[0]==="projects"&&ke();return{c(){e=u("main"),s=u("div"),r=u("div"),a=u("div"),n=u("div"),n.innerHTML='<div class="w-44 mask mask-hexagon"><img src="images/profile.jpg" alt=""/></div>',p=I(),d=u("ul"),c=u("button"),i=H("Home"),_=I(),$=u("button"),M=H("About"),de=I(),E=u("button"),ue=H("Projects"),pe=I(),F=u("button"),fe=H("Resume"),he=I(),f=u("div"),se=u("div"),me=I(),h&&h.c(),re=I(),m&&m.c(),ae=I(),g&&g.c(),ne=I(),x&&x.c(),l(n,"class","avatar m-4"),l(c,"class",S=t[0]==="home"?"step step-secondary text-secondary font-bold text-xl":"step"),l($,"class",C=t[0]==="about"?"step step-secondary text-secondary font-bold text-xl":"step"),l(E,"class",z=t[0]==="projects"?"step step-secondary text-secondary font-bold text-xl":"step"),l(F,"class",G=t[0]==="resume"?"step step-secondary text-secondary font-bold text-xl":"step"),l(d,"class","steps steps-vertical"),l(a,"class","flex flex-col"),l(r,"class","m-8 grid flex-grow lg:mt-32"),l(se,"class","hero-overlay bg-opacity-40"),l(f,"class","hero grid flex-grow min-h-screen lg:h-screen"),L(f,"background-image","url(images/background.jpg)"),l(s,"class","flex flex-col w-full lg:flex-row")},m(v,k){K(v,e,k),o(e,s),o(s,r),o(r,a),o(a,n),o(a,p),o(a,d),o(d,c),o(c,i),o(d,_),o(d,$),o($,M),o(d,de),o(d,E),o(E,ue),o(d,pe),o(d,F),o(F,fe),o(s,he),o(s,f),o(f,se),o(f,me),h&&h.m(f,null),o(f,re),m&&m.m(f,null),o(f,ae),g&&g.m(f,null),o(f,ne),x&&x.m(f,null),j=!0,oe||(ge=[O(c,"click",t[1]),O($,"click",t[2]),O(E,"click",t[3]),O(F,"click",t[4])],oe=!0)},p(v,[k]){(!j||k&1&&S!==(S=v[0]==="home"?"step step-secondary text-secondary font-bold text-xl":"step"))&&l(c,"class",S),(!j||k&1&&C!==(C=v[0]==="about"?"step step-secondary text-secondary font-bold text-xl":"step"))&&l($,"class",C),(!j||k&1&&z!==(z=v[0]==="projects"?"step step-secondary text-secondary font-bold text-xl":"step"))&&l(E,"class",z),(!j||k&1&&G!==(G=v[0]==="resume"?"step step-secondary text-secondary font-bold text-xl":"step"))&&l(F,"class",G),v[0]==="home"?h?k&1&&b(h,1):(h=ye(),h.c(),b(h,1),h.m(f,re)):h&&(Y(),w(h,1,1,()=>{h=null}),Q()),v[0]==="resume"?m?k&1&&b(m,1):(m=we(),m.c(),b(m,1),m.m(f,ae)):m&&(Y(),w(m,1,1,()=>{m=null}),Q()),v[0]==="about"?g?k&1&&b(g,1):(g=_e(),g.c(),b(g,1),g.m(f,ne)):g&&(Y(),w(g,1,1,()=>{g=null}),Q()),v[0]==="projects"?x?k&1&&b(x,1):(x=ke(),x.c(),b(x,1),x.m(f,null)):x&&(Y(),w(x,1,1,()=>{x=null}),Q())},i(v){j||(b(h),b(m),b(g),b(x),j=!0)},o(v){w(h),w(m),w(g),w(x),j=!1},d(v){v&&T(e),h&&h.d(),m&&m.d(),g&&g.d(),x&&x.d(),oe=!1,P(ge)}}}function qe(t,e,s){let r="home";return[r,()=>s(0,r="home"),()=>s(0,r="about"),()=>s(0,r="projects"),()=>s(0,r="resume")]}class ze extends q{constructor(e){super(),B(this,e,qe,Be,D,{})}}new ze({target:document.getElementById("app")});
