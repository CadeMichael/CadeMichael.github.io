const Le=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}};Le();function w(){}function Se(t){return t()}function ve(){return Object.create(null)}function M(t){t.forEach(Se)}function Ce(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Q;function Te(t,e){return Q||(Q=document.createElement("a")),Q.href=e,t===Q.href}function Pe(t){return Object.keys(t).length===0}function n(t,e){t.appendChild(e)}function H(t,e,s){t.insertBefore(e,s||null)}function P(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function J(t){return document.createTextNode(t)}function j(){return J(" ")}function D(t,e,s,a){return t.addEventListener(e,s,a),()=>t.removeEventListener(e,s,a)}function i(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function Ae(t){return Array.from(t.childNodes)}function T(t,e,s,a){s===null?t.style.removeProperty(e):t.style.setProperty(e,s,a?"important":"")}let de;function O(t){de=t}const N=[],ye=[],Z=[],we=[],Ee=Promise.resolve();let ce=!1;function Me(){ce||(ce=!0,Ee.then(Fe))}function te(t){Z.push(t)}const le=new Set;let V=0;function Fe(){const t=de;do{for(;V<N.length;){const e=N[V];V++,O(e),He(e.$$)}for(O(null),N.length=0,V=0;ye.length;)ye.pop()();for(let e=0;e<Z.length;e+=1){const s=Z[e];le.has(s)||(le.add(s),s())}Z.length=0}while(N.length);for(;we.length;)we.pop()();ce=!1,le.clear(),O(t)}function He(t){if(t.fragment!==null){t.update(),M(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(te)}}const ee=new Set;let C;function Y(){C={r:0,c:[],p:C}}function X(){C.r||M(C.c),C=C.p}function x(t,e){t&&t.i&&(ee.delete(t),t.i(e))}function k(t,e,s,a){if(t&&t.o){if(ee.has(t))return;ee.add(t),C.c.push(()=>{ee.delete(t),a&&(s&&t.d(1),a())}),t.o(e)}}function se(t){t&&t.c()}function W(t,e,s,a){const{fragment:r,on_mount:o,on_destroy:h,after_update:u}=t.$$;r&&r.m(e,s),a||te(()=>{const c=o.map(Se).filter(Ce);h?h.push(...c):M(c),t.$$.on_mount=[]}),u.forEach(te)}function G(t,e){const s=t.$$;s.fragment!==null&&(M(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function Re(t,e){t.$$.dirty[0]===-1&&(N.push(t),Me(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(t,e,s,a,r,o,h,u=[-1]){const c=de;O(t);const l=t.$$={fragment:null,ctx:null,props:o,update:w,not_equal:r,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ve(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};h&&h(l.root);let F=!1;if(l.ctx=s?s(t,e.props||{},(_,$,...R)=>{const L=R.length?R[0]:$;return l.ctx&&r(l.ctx[_],l.ctx[_]=L)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](L),F&&Re(t,_)),$}):[],l.update(),F=!0,M(l.before_update),l.fragment=a?a(l.ctx):!1,e.target){if(e.hydrate){const _=Ae(e.target);l.fragment&&l.fragment.l(_),_.forEach(P)}else l.fragment&&l.fragment.c();e.intro&&x(t.$$.fragment),W(t,e.target,e.anchor,e.customElement),Fe()}O(c)}class U{$destroy(){G(this,1),this.$destroy=w}$on(e,s){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(s),()=>{const r=a.indexOf(s);r!==-1&&a.splice(r,1)}}$set(e){this.$$set&&!Pe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Je(t){let e;return{c(){e=d("div"),e.innerHTML=`<div class="flex flex-col overflow-scroll h-full"><div class="flex flex-col"><h1 class="text-3xl mx-6 -mb-6 mt-4"><span class="text-secondary">#</span> About Me</h1> 
      <div class="card bg-base-100 m-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Cade Lueker</span></h2> 
          <p class="text-lg text-neutral-content">Hello! My name is Cade and I&#39;m a developer from NYC. My main tech
            interests at the moment are linux / FOSS software, full stack web
            design, mobile development, and data science. I&#39;ve been trying to
            branch out as much as possible before honing one skill. Currently
            I&#39;m working on some Django and Golang toy projects. I love the
            flourishing open source tech scene and hope to contribute to a
            project soon. I spend way too much time configuring <u><a class="text-primary" href="https://github.com/cademichael/nvim/tree/minimal" target="_blank">Neovim</a></u>
            and
            <u><a class="text-primary" href="https://github.com/CadeMichael/.emacs.d/blob/main/config.org" target="_blank">Emacs</a></u>, especially when stuck at home. The configurability of emacs makes
            it my favorite tool of choice right now (and what I made this
            website in), but with the integration of lua into neovim, it&#39;s close
            behind.</p> 
          <p class="text-lg text-neutral-content">I&#39;m currently living in Denver and working for Publicis Sapient. I
            have a little red sesame shiba inu, hideki, and he&#39;s my copilot when
            programming at home. In my free time I love to train Wrestling &amp; Jiu
            Jitsu in addition to doing gymnastics and bike riding. I&#39;ve taught
            Jiu Jitsu in Seoul, S.Korea and in Cleveland during my undergrad.</p></div></div> 
      
      <h1 class="text-3xl -mb-6 mx-6 mt-6"><span class="text-secondary">#</span> Education</h1> 
      <div class="card bg-base-100 mt-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Case Western Reserve University</span></h2> 
          <div class="text-xl"><h3>GPA: 3.81</h3> 
            <h3>BA Computer Science Spring 2022</h3></div></div></div> 
      <div class="card bg-base-100 mt-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Yonsei University</span></h2> 
          <div class="text-xl"><h3>Exhange Student Academic Year 2020-2021</h3> 
            <h3>Studied Computer Science &amp; Korean Culture</h3></div></div></div> 
      <div class="card bg-base-100 m-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Stuyvesant HS</span></h2> 
          <div class="text-xl"><h3>Class of 2017</h3></div></div></div> 
      
      <h1 class="text-3xl -mb-6 mx-6 mt-6"><span class="text-secondary">#</span> Skills</h1> 
      
      <div class="card bg-base-100 mt-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Python</span></h2> 
          
          <p class="text-lg text-neutral-content">I started learning python back in 2015, my sophomore year of high
            school. At the time I had no interest in CS but it was a class that
            I had to pass. For the final Project I remember getting shafted by
            my partner and writing a cheap facebook clone with django that used
            csv&#39;s to store user info and txt files to store blogs, he did the
            css. Even though I didn&#39;t want to go into CS at the time I gained an
            appreciation for python, its simplicity and elegance, that I would
            re-discover years later. Although I don&#39;t do much in the language at
            the moment I did several large projects in python at university and
            continue to use it as a scripting language for small things here and
            there.</p> 
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
          
          <p class="text-lg text-neutral-content">I think most people hear pretty bad things about javascript when
            they&#39;re first starting out. I heard that it was a mess, slow, and
            hard to write well. Although there are kernels of truth to some of
            those statements on the whole I&#39;ve really enjoyed learning JS. My
            entrance into the world of server side js came through my interest
            in svelte, and use of sveltekit in a final project. After that I did
            several toy projects in js and continued to expand my knowledge with
            a course in web development in my senior year of undergrad. I have
            dabbled in javascript backends and middlewares but have a solid
            grasp on javascript for the front end.</p> 
          <div class="text-xl flex flex-col items-center"><h3>Vanilla JS (no framework)</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="80" max="100"></progress>  <br/> 
            <h3>Svelte &amp; SvelteKit</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="90" max="100"></progress>  <br/> 
            <h3>Vue</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="70" max="100"></progress>  <br/> 
            <h3>TypeScript</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="75" max="100"></progress></div></div></div> 
      
      <div class="card bg-base-100 mt-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Flutter</span></h2> 
          
          <p class="text-lg text-neutral-content">Although I have a strong background in Java I am not a fan of the
            language, or the fact that it is so aggressively licensed. For this
            reason when I decided to try out mobile development I had three
            options for android development. Flutter, React Native, and Kotlin.
            At the time I was planning out a final project with a group and
            weighing everyone&#39;s experience I suggested Flutter as we were all
            relatively green on each technology and flutter seemed to have the
            best tooling. I immediately fell in love with the framework. The
            community, packages, ecosystem, and tooling make it a joy to work
            with and I continued to use it for several more school projects and
            was able to get an internship using flutter daily in the spring of
            2021.</p> 
          <div class="text-xl flex flex-col items-center"><h3>Dart</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="95" max="100"></progress>  <br/> 
            <h3>Mobile Front End</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="85" max="100"></progress>  <br/> 
            <h3>Mobile Backends</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="80" max="100"></progress>  <br/></div></div></div> 
      
      <div class="card bg-base-100 mt-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Web Development</span></h2> 
          
          <p class="text-lg text-neutral-content">In high school I had to take html and css, so I&#39;ve had somewhat of a
            foundation before deciding to study computer science full time but
            it wasn&#39;t until my senior year in university that I took web dev
            seriously. I got my first taste of website making with hugo, a go
            cli tool for building static websites, to make my first portfolio
            site. I just imported a theme and got to work. Then as I started
            learning more in my classes, databases, fullstack, etc... I was able
            to incorporate all of my interests and previous experiences into
            several projects. I&#39;ve become a fan of several frameworks mainly,
            django, sveltekit, and want to test out rails and possibly laravel.</p> 
          <div class="text-xl flex flex-col items-center"><h3>HTML</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="100" max="100"></progress>  <br/> 
            <h3>CSS / Tailwindcss</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="90" max="100"></progress>  <br/> 
            <h3>Deployments</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="60" max="100"></progress>  <br/></div></div></div> 
      
      <div class="card bg-base-100 mt-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Linux</span></h2> 
          
          <p class="text-lg text-neutral-content">When I decided to go into Computer Science I was not well prepared.
            I had an old 11 inch laptop that I could barely read text on and
            decided that I needed an affordable way to get a better setup. I did
            some research and found microcenter, then waited for black friday. I
            got all the parts cheaply and was able to get a free monitor from a
            friend. The last expense was microsoft windows. Luckily a friend
            mentioned something about linux, just that he had heard it was free.
            That was enough for me to dive in and I haven&#39;t looked back since.
            I&#39;ve been daily driving linux ever since and still use that same
            desktop. I&#39;ve bounced around alot but settled on void linux. I love
            the open source community and all of the innovation that it brings.
            I&#39;m currently writing this on gcc emacs and my second favorite
            editor is neovim, which I use mainly for compiled languages. I hope
            to one day contribute to a FOSS project and or create my own.</p> 
          <div class="text-xl flex flex-col items-center"><h3>Command Line</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="95" max="100"></progress>  <br/> 
            <h3>FileSystem</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="90" max="100"></progress>  <br/> 
            <h3>Emacs</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="80" max="100"></progress>  <br/> 
            <h3>Vim / Neovim</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="90" max="100"></progress>  <br/></div></div></div> 
      
      <div class="card bg-base-100 mt-6 mx-6 mb-12 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Some Experience With</span></h2> 
          
          <p class="text-lg text-neutral-content">I&#39;ve played around with some of these languages, for fun or for
            small school projects. I did a little bit of data science with
            python and pytorch as well as some data analysis with R for an intro
            to DS course. I am very interested in golang and currently working
            on learning it in relation to the go-gin framework to make some
            simple web app toy projects.</p> 
          <div class="text-xl flex flex-col items-center"><h3>Golang</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="50" max="100"></progress>  <br/> 
            <h3>PHP</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="40" max="100"></progress>  <br/> 
            <h3>R</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="75" max="100"></progress>  <br/></div></div></div></div></div>`,i(e,"class","m-4 mockup-window border border-secondary bg-base-100 shadow-lg"),T(e,"height","95%"),T(e,"width","90%")},m(s,a){H(s,e,a)},p:w,i:w,o:w,d(s){s&&P(e)}}}class De extends U{constructor(e){super(),K(this,e,null,Je,q,{})}}function Ne(t){let e;return{c(){e=d("div"),e.innerHTML=`<div class="hero-content text-center text-neutral-content"><div class="max-w-md shadow-xl mockup-code text-left"><pre data-prefix="$"><code>whoami</code></pre> 
      <pre data-prefix="&gt;" class="text-success"><code>Cade Lueker</code></pre> 
      <pre data-prefix="&gt;" class="text-success"><code>Software Engineer &amp; Web Dev</code></pre></div></div>`},m(s,a){H(s,e,a)},p:w,i:w,o:w,d(s){s&&P(e)}}}class Oe extends U{constructor(e){super(),K(this,e,null,Ne,q,{})}}function qe(t){let e,s,a,r,o,h,u;return te(t[1]),{c(){e=d("div"),s=d("div"),a=d("iframe"),i(a,"class","overflow-scroll"),i(a,"title","Resume"),Te(a.src,r="images/resume.pdf")||i(a,"src",r),i(a,"width","100%"),i(a,"height",o=t[0]*.85+"px"),i(s,"class","flex flex-col items-center shadow-xl m-8"),i(e,"class","mockup-window border border-secondary bg-base-100 shadow-lg"),T(e,"height","95%"),T(e,"width","90%")},m(c,l){H(c,e,l),n(e,s),n(s,a),h||(u=D(window,"resize",t[1]),h=!0)},p(c,[l]){l&1&&o!==(o=c[0]*.85+"px")&&i(a,"height",o)},i:w,o:w,d(c){c&&P(e),h=!1,u()}}}function We(t,e,s){let a;function r(){s(0,a=window.innerHeight)}return[a,r]}class Ge extends U{constructor(e){super(),K(this,e,We,qe,q,{})}}function Ke(t){let e;return{c(){e=d("div"),e.innerHTML=`<div class="flex flex-col overflow-scroll h-full"><div class="flex flex-col mb-16"><h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> The Crypt</h1> 
      <div class="card bg-base-100 mt-4 mx-6 shadow-xl lg:card-side"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Senior Project flutter encryption
              app</span></h2> 
          <div class="text-xl"><h3 class="mb-3"><span class="text-info">Language / Framework: </span>Flutter &amp;
              Dart</h3> 
            <h3><span class="text-info">Function:</span> The Crypt is an RSA encryption
              tool to facilitate secure messaging via mobile platforms (intended
              use). It uses a local noSQL database to store Personal and Contact
              Keys for use with decryption of received messages or encryption of
              messages to be sent. It uses the FastRSA package, written in go, to
              perform the encryption and to generate key pairs. The app can be build
              on android and or for Linux Desktop.</h3></div> 
          <div class="card-actions justify-end"><a href="https://github.com/cademichael/seniorproject" target="_blank" class="btn btn-info">repo</a></div></div> 
        <figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info min-w-[450px]" src="images/crypt.jpg" alt="The Crypt"/></figure></div> 
      
      <h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> Spider Messenger</h1> 
      <div class="card bg-base-100 mt-4 mx-6 shadow-xl lg:card-side"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span>
              Computer Security Final Project</span></h2> 
          <div class="text-xl"><h3 class="mb-3"><span class="text-info">Language / Framework: </span>Javascript &amp;
              SvelteKit</h3> 
            <h3><span class="text-info">Function:</span>
              Spider messenger was a proof of concept encrypted messenger. It was
              made to test out hashing for storing user passwords and sha256 encryption
              for one way encryption of messages. It used sveltekit as a meta framework
              for the front and back ends and the decentralized database, gundb,
              for the database that stored user information and chats. Cameron Farmer
              and I made the app for our final project in computer security.</h3></div> 
          <div class="card-actions justify-end"><a href="https://github.com/camfarms/spider" target="_blank" class="btn btn-info">repo</a></div></div> 
        <figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info min-w-[450px]" src="images/spider.jpg" alt="Spider"/></figure></div> 
      
      <h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> GoJitsu</h1> 
      <div class="card bg-base-100 mt-4 mx-6 shadow-xl lg:card-side"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span>
              Person golang and data science project</span></h2> 
          <div class="text-xl"><h3 class="mb-3"><span class="text-info">Language / Framework: </span>Golang &amp; R</h3> 
            <h3><span class="text-info">Function:</span>
              I&#39;ve been meaning to get started with some go projects and I really
              enjoy data science / analysis so I decided to combine the two in GoJitsu.
              I used go to webscrape a database of jiu jitsu competitors, saving
              their wins and the number of each specific type of win they have (by
              points, submission, etc...). I put all the data into a csv which I
              then processed with R. Using R and R studio I took that data and analyzed
              it with graphs before doing some simple linear regressions on the data
              to see if I could make any statistically significant conclusions about
              what makes someone more likely to be a &quot;good competitor.&quot;</h3></div> 
          <div class="card-actions justify-end"><a href="https://github.com/cademichael/gojitsu" target="_blank" class="btn btn-info">repo</a></div></div> 
        <figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info min-w-[450px]" src="images/gojitsu.jpg" alt="GoJitsu"/></figure></div> 
      
      <h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> This Website</h1> 
      <div class="card bg-base-100 mt-4 mx-6 shadow-xl lg:card-side"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span>
              Portfolio Website</span></h2> 
          <div class="text-xl"><h3 class="mb-3"><span class="text-info">Language / Framework: </span>Svelte &amp; HTML</h3> 
            <h3><span class="text-info">Function:</span>
              I originally used hugo to make my portfolio website and although I
              really enjoyed the experience I wanted to sharpen my svelte skills
              and make something a bit more bespoke. I started out with svelte rollup
              but switched to svelte with vite and was able to use tailwindcss &amp;
              daisyUI to create the UI and theme. Although it is not a blog like
              my last portfolio website I think that this format does a better job
              of presenting my work / myself in a professional manner.</h3></div> 
          <div class="card-actions justify-end"><a href="https://github.com/cademichael/cademichael.github.io" target="_blank" class="btn btn-info">repo</a></div></div> 
        <figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info min-w-[450px]" src="images/svelte.jpg" alt="svelte"/></figure></div> 
      
      <h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> Plenty of Fish in the S(ea)QL</h1> 
      <div class="card bg-base-100 mt-4 mx-6 shadow-xl lg:card-side"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span>
              Database Final Project</span></h2> 
          <div class="text-xl"><h3 class="mb-3"><span class="text-info">Language / Framework: </span>Python,
              flask, &amp; SQL</h3> 
            <h3><span class="text-info">Function:</span>
              The assignment for our final project was to make something that interfaces
              with a databse using a programming language other than sql. This was
              rather open ended, and at the time I was getting into web development
              so I decided that a web front end with a python backend would be the
              perfect combination. For this I used python to make a script that created
              random people and randomly assigned attrubutes to them which were then
              stored in an sqlite3 database. Then I made a flask backend that used
              a form to get user input from the front end to query the database and
              return the results to the user. A majority of the project was focused
              on the backend so at the last minute I threw in some bootstrap to make
              it a bit more aesthetic.</h3></div> 
          <div class="card-actions justify-end"><a href="https://github.com/cademichael/databasesfinal" target="_blank" class="btn btn-info">repo</a></div></div> 
        <figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info min-w-[450px]" src="images/flask.jpg" alt="flask"/></figure></div></div></div>`,i(e,"class","m-4 mockup-window border border-secondary bg-base-100 shadow-lg"),T(e,"height","95%"),T(e,"width","90%")},m(s,a){H(s,e,a)},p:w,i:w,o:w,d(s){s&&P(e)}}}class Ue extends U{constructor(e){super(),K(this,e,null,Ke,q,{})}}function ke(t){let e;return{c(){e=d("div"),e.innerHTML=`<div class="lg:absolute bottom-16 right-12"><a href="https://github.com/cademichael" target="_blank" style="color: #bd93f9;"><i class="fa fa-github fa-3x m-2 "></i></a> 
              <a href="https://www.linkedin.com/in/cade-lueker-79a55b199/" target="_blank"><i class="fa fa-linkedin fa-3x m-2" style="color: #bd93f9;"></i></a></div>`,i(e,"class","flex flex-col lg:mt-16")},m(s,a){H(s,e,a)},d(s){s&&P(e)}}}function _e(t){let e,s;return e=new Oe({}),{c(){se(e.$$.fragment)},m(a,r){W(e,a,r),s=!0},i(a){s||(x(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){G(e,a)}}}function Ie(t){let e,s;return e=new Ge({}),{c(){se(e.$$.fragment)},m(a,r){W(e,a,r),s=!0},i(a){s||(x(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){G(e,a)}}}function je(t){let e,s;return e=new De({}),{c(){se(e.$$.fragment)},m(a,r){W(e,a,r),s=!0},i(a){s||(x(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){G(e,a)}}}function $e(t){let e,s;return e=new Ue({}),{c(){se(e.$$.fragment)},m(a,r){W(e,a,r),s=!0},i(a){s||(x(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){G(e,a)}}}function ze(t){let e,s,a,r,o,h,u,c,l,F,_,$,R,L,ue,A,he,z,pe,E,me,B,fe,ge,p,ae,be,re,ne,oe,S,ie,xe,y=t[0]==="home"&&ke(),m=t[0]==="home"&&_e(),f=t[0]==="resume"&&Ie(),g=t[0]==="about"&&je(),b=t[0]==="projects"&&$e();return{c(){e=d("main"),s=d("div"),a=d("div"),r=d("div"),o=d("div"),o.innerHTML='<div class="w-44 mask mask-hexagon"><img src="images/profile.jpg" alt=""/></div>',h=j(),u=d("ul"),c=d("button"),l=J("Home"),_=j(),$=d("button"),R=J("About"),ue=j(),A=d("button"),he=J("Projects"),pe=j(),E=d("button"),me=J("Resume"),fe=j(),y&&y.c(),ge=j(),p=d("div"),ae=d("div"),be=j(),m&&m.c(),re=j(),f&&f.c(),ne=j(),g&&g.c(),oe=j(),b&&b.c(),i(o,"class","avatar m-4"),i(c,"class",F=t[0]==="home"?"step step-secondary text-secondary font-bold text-xl":"step"),i($,"class",L=t[0]==="about"?"step step-secondary text-secondary font-bold text-xl":"step"),i(A,"class",z=t[0]==="projects"?"step step-secondary text-secondary font-bold text-xl":"step"),i(E,"class",B=t[0]==="resume"?"step step-secondary text-secondary font-bold text-xl":"step"),i(u,"class","steps steps-vertical"),i(r,"class","flex flex-col"),i(a,"class","m-8 grid flex-grow lg:mt-32"),i(ae,"class","hero-overlay bg-opacity-40"),i(p,"class","hero grid flex-grow min-h-screen lg:h-screen"),T(p,"background-image","url(images/background.jpg)"),i(s,"class","flex flex-col w-full lg:flex-row")},m(v,I){H(v,e,I),n(e,s),n(s,a),n(a,r),n(r,o),n(r,h),n(r,u),n(u,c),n(c,l),n(u,_),n(u,$),n($,R),n(u,ue),n(u,A),n(A,he),n(u,pe),n(u,E),n(E,me),n(r,fe),y&&y.m(r,null),n(s,ge),n(s,p),n(p,ae),n(p,be),m&&m.m(p,null),n(p,re),f&&f.m(p,null),n(p,ne),g&&g.m(p,null),n(p,oe),b&&b.m(p,null),S=!0,ie||(xe=[D(c,"click",t[1]),D($,"click",t[2]),D(A,"click",t[3]),D(E,"click",t[4])],ie=!0)},p(v,[I]){(!S||I&1&&F!==(F=v[0]==="home"?"step step-secondary text-secondary font-bold text-xl":"step"))&&i(c,"class",F),(!S||I&1&&L!==(L=v[0]==="about"?"step step-secondary text-secondary font-bold text-xl":"step"))&&i($,"class",L),(!S||I&1&&z!==(z=v[0]==="projects"?"step step-secondary text-secondary font-bold text-xl":"step"))&&i(A,"class",z),(!S||I&1&&B!==(B=v[0]==="resume"?"step step-secondary text-secondary font-bold text-xl":"step"))&&i(E,"class",B),v[0]==="home"?y||(y=ke(),y.c(),y.m(r,null)):y&&(y.d(1),y=null),v[0]==="home"?m?I&1&&x(m,1):(m=_e(),m.c(),x(m,1),m.m(p,re)):m&&(Y(),k(m,1,1,()=>{m=null}),X()),v[0]==="resume"?f?I&1&&x(f,1):(f=Ie(),f.c(),x(f,1),f.m(p,ne)):f&&(Y(),k(f,1,1,()=>{f=null}),X()),v[0]==="about"?g?I&1&&x(g,1):(g=je(),g.c(),x(g,1),g.m(p,oe)):g&&(Y(),k(g,1,1,()=>{g=null}),X()),v[0]==="projects"?b?I&1&&x(b,1):(b=$e(),b.c(),x(b,1),b.m(p,null)):b&&(Y(),k(b,1,1,()=>{b=null}),X())},i(v){S||(x(m),x(f),x(g),x(b),S=!0)},o(v){k(m),k(f),k(g),k(b),S=!1},d(v){v&&P(e),y&&y.d(),m&&m.d(),f&&f.d(),g&&g.d(),b&&b.d(),ie=!1,M(xe)}}}function Be(t,e,s){let a="home";return[a,()=>s(0,a="home"),()=>s(0,a="about"),()=>s(0,a="projects"),()=>s(0,a="resume")]}class Qe extends U{constructor(e){super(),K(this,e,Be,ze,q,{})}}new Qe({target:document.getElementById("app")});
