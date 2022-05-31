const Ce=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}};Ce();function y(){}function je(t){return t()}function ve(){return Object.create(null)}function P(t){t.forEach(je)}function Le(t){return typeof t=="function"}function D(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let V;function Ae(t,e){return V||(V=document.createElement("a")),V.href=e,t===V.href}function Fe(t){return Object.keys(t).length===0}function n(t,e){t.appendChild(e)}function J(t,e,s){t.insertBefore(e,s||null)}function E(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function I(){return M(" ")}function H(t,e,s,a){return t.addEventListener(e,s,a),()=>t.removeEventListener(e,s,a)}function l(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function Te(t){return Array.from(t.childNodes)}function A(t,e,s,a){s===null?t.style.removeProperty(e):t.style.setProperty(e,s,a?"important":"")}let de;function N(t){de=t}const O=[],ye=[],Z=[],we=[],Pe=Promise.resolve();let ce=!1;function Ee(){ce||(ce=!0,Pe.then(Se))}function te(t){Z.push(t)}const ie=new Set;let Y=0;function Se(){const t=de;do{for(;Y<O.length;){const e=O[Y];Y++,N(e),Re(e.$$)}for(N(null),O.length=0,Y=0;ye.length;)ye.pop()();for(let e=0;e<Z.length;e+=1){const s=Z[e];ie.has(s)||(ie.add(s),s())}Z.length=0}while(O.length);for(;we.length;)we.pop()();ce=!1,ie.clear(),N(t)}function Re(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(te)}}const ee=new Set;let L;function Q(){L={r:0,c:[],p:L}}function X(){L.r||P(L.c),L=L.p}function x(t,e){t&&t.i&&(ee.delete(t),t.i(e))}function w(t,e,s,a){if(t&&t.o){if(ee.has(t))return;ee.add(t),L.c.push(()=>{ee.delete(t),a&&(s&&t.d(1),a())}),t.o(e)}}function se(t){t&&t.c()}function G(t,e,s,a){const{fragment:r,on_mount:o,on_destroy:p,after_update:u}=t.$$;r&&r.m(e,s),a||te(()=>{const c=o.map(je).filter(Le);p?p.push(...c):P(c),t.$$.on_mount=[]}),u.forEach(te)}function K(t,e){const s=t.$$;s.fragment!==null&&(P(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function Me(t,e){t.$$.dirty[0]===-1&&(O.push(t),Ee(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(t,e,s,a,r,o,p,u=[-1]){const c=de;N(t);const i=t.$$={fragment:null,ctx:null,props:o,update:y,not_equal:r,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ve(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};p&&p(i.root);let S=!1;if(i.ctx=s?s(t,e.props||{},(_,$,...R)=>{const C=R.length?R[0]:$;return i.ctx&&r(i.ctx[_],i.ctx[_]=C)&&(!i.skip_bound&&i.bound[_]&&i.bound[_](C),S&&Me(t,_)),$}):[],i.update(),S=!0,P(i.before_update),i.fragment=a?a(i.ctx):!1,e.target){if(e.hydrate){const _=Te(e.target);i.fragment&&i.fragment.l(_),_.forEach(E)}else i.fragment&&i.fragment.c();e.intro&&x(t.$$.fragment),G(t,e.target,e.anchor,e.customElement),Se()}N(c)}class W{$destroy(){K(this,1),this.$destroy=y}$on(e,s){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(s),()=>{const r=a.indexOf(s);r!==-1&&a.splice(r,1)}}$set(e){this.$$set&&!Fe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function He(t){let e;return{c(){e=d("div"),e.innerHTML=`<div class="flex flex-col overflow-scroll h-full"><div class="flex flex-col"><h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> Education</h1> 
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
            <progress class="progress w-96 progress-secondary mb-4" value="75" max="100"></progress>  <br/></div></div></div></div></div>`,l(e,"class","m-4 mockup-window border border-secondary bg-base-100 shadow-lg"),A(e,"height","95%"),A(e,"width","90%")},m(s,a){J(s,e,a)},p:y,i:y,o:y,d(s){s&&E(e)}}}class Oe extends W{constructor(e){super(),q(this,e,null,He,D,{})}}function Ne(t){let e;return{c(){e=d("div"),e.innerHTML=`<div class="hero-content text-center text-neutral-content"><div class="max-w-md shadow-xl mockup-code text-left"><pre data-prefix="$"><code>whoami</code></pre> 
      <pre data-prefix="&gt;" class="text-success"><code>Cade Lueker</code></pre> 
      <pre data-prefix="&gt;" class="text-success"><code>Software Engineer &amp; Web Dev</code></pre></div></div>`},m(s,a){J(s,e,a)},p:y,i:y,o:y,d(s){s&&E(e)}}}class De extends W{constructor(e){super(),q(this,e,null,Ne,D,{})}}function Je(t){let e,s,a,r,o,p,u;return te(t[1]),{c(){e=d("div"),s=d("div"),a=d("iframe"),l(a,"class","overflow-scroll"),l(a,"title","Resume"),Ae(a.src,r="images/resume.pdf")||l(a,"src",r),l(a,"width","100%"),l(a,"height",o=t[0]*.85+"px"),l(s,"class","flex flex-col items-center shadow-xl m-8"),l(e,"class","mockup-window border border-secondary bg-base-100 shadow-lg"),A(e,"height","95%"),A(e,"width","90%")},m(c,i){J(c,e,i),n(e,s),n(s,a),p||(u=H(window,"resize",t[1]),p=!0)},p(c,[i]){i&1&&o!==(o=c[0]*.85+"px")&&l(a,"height",o)},i:y,o:y,d(c){c&&E(e),p=!1,u()}}}function Ge(t,e,s){let a;function r(){s(0,a=window.innerHeight)}return[a,r]}class Ke extends W{constructor(e){super(),q(this,e,Ge,Je,D,{})}}function qe(t){let e;return{c(){e=d("div"),e.innerHTML=`<div class="flex flex-col overflow-scroll h-full"><div class="flex flex-col mb-16"><h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> The Crypt</h1> 
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
		<figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info min-w-[450px]" src="images/crypt.jpg" alt="The Crypt"/></figure></div> 
	    
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
					<figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info min-w-[450px]" src="images/spider.jpg" alt="The Crypt"/></figure></div> 
	    
	    <h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> GoJitsu</h1> 
	    <div class="card bg-base-100 mt-4 mx-6 shadow-xl lg:card-side"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span>
			    Person golang and data science project</span></h2> 
		    <div class="text-xl"><h3 class="mb-3"><span class="text-info">Language / Framework:
			    </span>Golang &amp; R</h3> 
			<h3><span class="text-info">Function:</span>
			    I&#39;ve been meaning to get started with some go projects
			    and I really enjoy data science / analysis so I decided
			    to combine the two in GoJitsu. I used go to webscrape
			    a database of jiu jitsu competitors, saving their wins
			    and the number of each specific type of win they have
			    (by points, submission, etc...). I put all the data into
			    a csv which I then processed with R. Using R and R studio
			    I took that data and analyzed it with graphs before doing
			    some simple linear regressions on the data to see if
			    I could make any statistically significant conclusions
			    about what makes someone more likely to be a &quot;good competitor.&quot;</h3></div> 
		    <div class="card-actions justify-end"><a href="https://github.com/cademichael/gojitsu" target="_blank" class="btn btn-info">repo</a></div></div> 
		<figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info min-w-[450px]" src="images/gojitsu.jpg" alt="The Crypt"/></figure></div></div></div>`,l(e,"class","m-4 mockup-window border border-secondary bg-base-100 shadow-lg"),A(e,"height","95%"),A(e,"width","90%")},m(s,a){J(s,e,a)},p:y,i:y,o:y,d(s){s&&E(e)}}}class We extends W{constructor(e){super(),q(this,e,null,qe,D,{})}}function _e(t){let e,s;return e=new De({}),{c(){se(e.$$.fragment)},m(a,r){G(e,a,r),s=!0},i(a){s||(x(e.$$.fragment,a),s=!0)},o(a){w(e.$$.fragment,a),s=!1},d(a){K(e,a)}}}function ke(t){let e,s;return e=new Ke({}),{c(){se(e.$$.fragment)},m(a,r){G(e,a,r),s=!0},i(a){s||(x(e.$$.fragment,a),s=!0)},o(a){w(e.$$.fragment,a),s=!1},d(a){K(e,a)}}}function Ie(t){let e,s;return e=new Oe({}),{c(){se(e.$$.fragment)},m(a,r){G(e,a,r),s=!0},i(a){s||(x(e.$$.fragment,a),s=!0)},o(a){w(e.$$.fragment,a),s=!1},d(a){K(e,a)}}}function $e(t){let e,s;return e=new We({}),{c(){se(e.$$.fragment)},m(a,r){G(e,a,r),s=!0},i(a){s||(x(e.$$.fragment,a),s=!0)},o(a){w(e.$$.fragment,a),s=!1},d(a){K(e,a)}}}function ze(t){let e,s,a,r,o,p,u,c,i,S,_,$,R,C,ue,F,pe,z,fe,T,he,B,me,U,ge,f,ae,be,re,ne,oe,j,le,xe,h=t[0]==="home"&&_e(),m=t[0]==="resume"&&ke(),g=t[0]==="about"&&Ie(),b=t[0]==="projects"&&$e();return{c(){e=d("main"),s=d("div"),a=d("div"),r=d("div"),o=d("div"),o.innerHTML='<div class="w-44 mask mask-hexagon"><img src="images/profile.jpg" alt=""/></div>',p=I(),u=d("ul"),c=d("button"),i=M("Home"),_=I(),$=d("button"),R=M("About"),ue=I(),F=d("button"),pe=M("Projects"),fe=I(),T=d("button"),he=M("Resume"),me=I(),U=d("div"),U.innerHTML=`<a href="https://github.com/cademichael" target="_blank"><i class="fa fa-github fa-2x m-2 "></i></a> 
					<a href="https://www.linkedin.com/in/cade-lueker-79a55b199/" target="_blank"><i class="fa fa-linkedin fa-2x m-2"></i></a>`,ge=I(),f=d("div"),ae=d("div"),be=I(),h&&h.c(),re=I(),m&&m.c(),ne=I(),g&&g.c(),oe=I(),b&&b.c(),l(o,"class","avatar m-4"),l(c,"class",S=t[0]==="home"?"step step-secondary text-secondary font-bold text-xl":"step"),l($,"class",C=t[0]==="about"?"step step-secondary text-secondary font-bold text-xl":"step"),l(F,"class",z=t[0]==="projects"?"step step-secondary text-secondary font-bold text-xl":"step"),l(T,"class",B=t[0]==="resume"?"step step-secondary text-secondary font-bold text-xl":"step"),l(u,"class","steps steps-vertical"),l(U,"class","flex flex-col lg:mt-16"),l(r,"class","flex flex-col"),l(a,"class","m-8 grid flex-grow lg:mt-32"),l(ae,"class","hero-overlay bg-opacity-40"),l(f,"class","hero grid flex-grow min-h-screen lg:h-screen"),A(f,"background-image","url(images/background.jpg)"),l(s,"class","flex flex-col w-full lg:flex-row")},m(v,k){J(v,e,k),n(e,s),n(s,a),n(a,r),n(r,o),n(r,p),n(r,u),n(u,c),n(c,i),n(u,_),n(u,$),n($,R),n(u,ue),n(u,F),n(F,pe),n(u,fe),n(u,T),n(T,he),n(r,me),n(r,U),n(s,ge),n(s,f),n(f,ae),n(f,be),h&&h.m(f,null),n(f,re),m&&m.m(f,null),n(f,ne),g&&g.m(f,null),n(f,oe),b&&b.m(f,null),j=!0,le||(xe=[H(c,"click",t[1]),H($,"click",t[2]),H(F,"click",t[3]),H(T,"click",t[4])],le=!0)},p(v,[k]){(!j||k&1&&S!==(S=v[0]==="home"?"step step-secondary text-secondary font-bold text-xl":"step"))&&l(c,"class",S),(!j||k&1&&C!==(C=v[0]==="about"?"step step-secondary text-secondary font-bold text-xl":"step"))&&l($,"class",C),(!j||k&1&&z!==(z=v[0]==="projects"?"step step-secondary text-secondary font-bold text-xl":"step"))&&l(F,"class",z),(!j||k&1&&B!==(B=v[0]==="resume"?"step step-secondary text-secondary font-bold text-xl":"step"))&&l(T,"class",B),v[0]==="home"?h?k&1&&x(h,1):(h=_e(),h.c(),x(h,1),h.m(f,re)):h&&(Q(),w(h,1,1,()=>{h=null}),X()),v[0]==="resume"?m?k&1&&x(m,1):(m=ke(),m.c(),x(m,1),m.m(f,ne)):m&&(Q(),w(m,1,1,()=>{m=null}),X()),v[0]==="about"?g?k&1&&x(g,1):(g=Ie(),g.c(),x(g,1),g.m(f,oe)):g&&(Q(),w(g,1,1,()=>{g=null}),X()),v[0]==="projects"?b?k&1&&x(b,1):(b=$e(),b.c(),x(b,1),b.m(f,null)):b&&(Q(),w(b,1,1,()=>{b=null}),X())},i(v){j||(x(h),x(m),x(g),x(b),j=!0)},o(v){w(h),w(m),w(g),w(b),j=!1},d(v){v&&E(e),h&&h.d(),m&&m.d(),g&&g.d(),b&&b.d(),le=!1,P(xe)}}}function Be(t,e,s){let a="home";return[a,()=>s(0,a="home"),()=>s(0,a="about"),()=>s(0,a="projects"),()=>s(0,a="resume")]}class Ue extends W{constructor(e){super(),q(this,e,Be,ze,D,{})}}new Ue({target:document.getElementById("app")});
