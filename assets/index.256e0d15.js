const Fe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}};Fe();function y(){}function $e(t){return t()}function ve(){return Object.create(null)}function A(t){t.forEach($e)}function Le(t){return typeof t=="function"}function N(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Q;function Ce(t,e){return Q||(Q=document.createElement("a")),Q.href=e,t===Q.href}function Te(t){return Object.keys(t).length===0}function n(t,e){t.appendChild(e)}function O(t,e,s){t.insertBefore(e,s||null)}function E(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function I(){return H(" ")}function R(t,e,s,a){return t.addEventListener(e,s,a),()=>t.removeEventListener(e,s,a)}function i(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function Pe(t){return Array.from(t.childNodes)}function C(t,e,s,a){s===null?t.style.removeProperty(e):t.style.setProperty(e,s,a?"important":"")}let de;function D(t){de=t}const J=[],ye=[],Z=[],we=[],Ae=Promise.resolve();let ce=!1;function Ee(){ce||(ce=!0,Ae.then(Se))}function te(t){Z.push(t)}const le=new Set;let V=0;function Se(){const t=de;do{for(;V<J.length;){const e=J[V];V++,D(e),Me(e.$$)}for(D(null),J.length=0,V=0;ye.length;)ye.pop()();for(let e=0;e<Z.length;e+=1){const s=Z[e];le.has(s)||(le.add(s),s())}Z.length=0}while(J.length);for(;we.length;)we.pop()();ce=!1,le.clear(),D(t)}function Me(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(te)}}const ee=new Set;let L;function Y(){L={r:0,c:[],p:L}}function X(){L.r||A(L.c),L=L.p}function x(t,e){t&&t.i&&(ee.delete(t),t.i(e))}function w(t,e,s,a){if(t&&t.o){if(ee.has(t))return;ee.add(t),L.c.push(()=>{ee.delete(t),a&&(s&&t.d(1),a())}),t.o(e)}}function se(t){t&&t.c()}function q(t,e,s,a){const{fragment:r,on_mount:o,on_destroy:h,after_update:u}=t.$$;r&&r.m(e,s),a||te(()=>{const c=o.map($e).filter(Le);h?h.push(...c):A(c),t.$$.on_mount=[]}),u.forEach(te)}function W(t,e){const s=t.$$;s.fragment!==null&&(A(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function He(t,e){t.$$.dirty[0]===-1&&(J.push(t),Ee(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,s,a,r,o,h,u=[-1]){const c=de;D(t);const l=t.$$={fragment:null,ctx:null,props:o,update:y,not_equal:r,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ve(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};h&&h(l.root);let S=!1;if(l.ctx=s?s(t,e.props||{},(k,j,...M)=>{const F=M.length?M[0]:j;return l.ctx&&r(l.ctx[k],l.ctx[k]=F)&&(!l.skip_bound&&l.bound[k]&&l.bound[k](F),S&&He(t,k)),j}):[],l.update(),S=!0,A(l.before_update),l.fragment=a?a(l.ctx):!1,e.target){if(e.hydrate){const k=Pe(e.target);l.fragment&&l.fragment.l(k),k.forEach(E)}else l.fragment&&l.fragment.c();e.intro&&x(t.$$.fragment),q(t,e.target,e.anchor,e.customElement),Se()}D(c)}class K{$destroy(){W(this,1),this.$destroy=y}$on(e,s){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(s),()=>{const r=a.indexOf(s);r!==-1&&a.splice(r,1)}}$set(e){this.$$set&&!Te(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Re(t){let e;return{c(){e=d("div"),e.innerHTML=`<div class="flex flex-col overflow-scroll h-full"><div class="flex flex-col"><h1 class="text-3xl mx-6 -mb-6 mt-4"><span class="text-secondary">#</span> About Me</h1> 
      <div class="card bg-base-100 m-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Cade Lueker</span></h2> 
          <p class="text-lg text-neutral-content">Hello! My name is Cade and I&#39;m a developer from NYC. My main tech interests at the moment are linux / FOSS software, full stack web design, mobile development, and data science. I&#39;ve been trying to branch out as much as possible before honing one skill. Currently I&#39;m working on some Django and Golang toy projects. I love the flourishing open source tech scene and hope to contribute to a project soon. I spend way too much time configuring <u><a class="text-primary" href="https://github.com/cademichael/nvim/tree/minimal" target="_blank">Neovim</a></u> and <u><a class="text-primary" href="https://github.com/CadeMichael/.emacs.d/blob/main/config.org" target="_blank">Emacs</a></u>, especially when stuck at home. The configurability of emacs makes it my favorite tool of choice right now (and what I made this website in), but with the integration of lua into neovim, it&#39;s close behind.</p> 
          <p class="text-lg text-neutral-content">I&#39;m currently living in Denver and working for Publicis Sapient. I have a little red sesame shiba inu, hideki, and he&#39;s my copilot when programming at home. In my free time I love to train Wrestling &amp; Jiu Jitsu in addition to doing gymnastics and bike riding. I&#39;ve taught Jiu Jitsu in Seoul, S.Korea and in Cleveland during my undergrad.</p></div></div> 
      
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
            <progress class="progress w-96 progress-secondary mb-4" value="75" max="100"></progress>  <br/></div></div></div></div></div>`,i(e,"class","m-4 mockup-window border border-secondary bg-base-100 shadow-lg"),C(e,"height","95%"),C(e,"width","90%")},m(s,a){O(s,e,a)},p:y,i:y,o:y,d(s){s&&E(e)}}}class Je extends K{constructor(e){super(),G(this,e,null,Re,N,{})}}function De(t){let e;return{c(){e=d("div"),e.innerHTML=`<div class="hero-content text-center text-neutral-content"><div class="max-w-md shadow-xl mockup-code text-left"><pre data-prefix="$"><code>whoami</code></pre> 
      <pre data-prefix="&gt;" class="text-success"><code>Cade Lueker</code></pre> 
      <pre data-prefix="&gt;" class="text-success"><code>Software Engineer &amp; Web Dev</code></pre></div></div>`},m(s,a){O(s,e,a)},p:y,i:y,o:y,d(s){s&&E(e)}}}class Ne extends K{constructor(e){super(),G(this,e,null,De,N,{})}}function Oe(t){let e,s,a,r,o,h,u;return te(t[1]),{c(){e=d("div"),s=d("div"),a=d("iframe"),i(a,"class","overflow-scroll"),i(a,"title","Resume"),Ce(a.src,r="images/resume.pdf")||i(a,"src",r),i(a,"width","100%"),i(a,"height",o=t[0]*.85+"px"),i(s,"class","flex flex-col items-center shadow-xl m-8"),i(e,"class","mockup-window border border-secondary bg-base-100 shadow-lg"),C(e,"height","95%"),C(e,"width","90%")},m(c,l){O(c,e,l),n(e,s),n(s,a),h||(u=R(window,"resize",t[1]),h=!0)},p(c,[l]){l&1&&o!==(o=c[0]*.85+"px")&&i(a,"height",o)},i:y,o:y,d(c){c&&E(e),h=!1,u()}}}function qe(t,e,s){let a;function r(){s(0,a=window.innerHeight)}return[a,r]}class We extends K{constructor(e){super(),G(this,e,qe,Oe,N,{})}}function Ge(t){let e;return{c(){e=d("div"),e.innerHTML=`<div class="flex flex-col overflow-scroll h-full"><div class="flex flex-col mb-16"><h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> The Crypt</h1> 
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
        <figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info min-w-[450px]" src="images/flask.jpg" alt="flask"/></figure></div></div></div>`,i(e,"class","m-4 mockup-window border border-secondary bg-base-100 shadow-lg"),C(e,"height","95%"),C(e,"width","90%")},m(s,a){O(s,e,a)},p:y,i:y,o:y,d(s){s&&E(e)}}}class Ke extends K{constructor(e){super(),G(this,e,null,Ge,N,{})}}function ke(t){let e,s;return e=new Ne({}),{c(){se(e.$$.fragment)},m(a,r){q(e,a,r),s=!0},i(a){s||(x(e.$$.fragment,a),s=!0)},o(a){w(e.$$.fragment,a),s=!1},d(a){W(e,a)}}}function _e(t){let e,s;return e=new We({}),{c(){se(e.$$.fragment)},m(a,r){q(e,a,r),s=!0},i(a){s||(x(e.$$.fragment,a),s=!0)},o(a){w(e.$$.fragment,a),s=!1},d(a){W(e,a)}}}function Ie(t){let e,s;return e=new Je({}),{c(){se(e.$$.fragment)},m(a,r){q(e,a,r),s=!0},i(a){s||(x(e.$$.fragment,a),s=!0)},o(a){w(e.$$.fragment,a),s=!1},d(a){W(e,a)}}}function je(t){let e,s;return e=new Ke({}),{c(){se(e.$$.fragment)},m(a,r){q(e,a,r),s=!0},i(a){s||(x(e.$$.fragment,a),s=!0)},o(a){w(e.$$.fragment,a),s=!1},d(a){W(e,a)}}}function Ue(t){let e,s,a,r,o,h,u,c,l,S,k,j,M,F,ue,T,he,U,pe,P,me,z,fe,B,ge,p,ae,be,re,ne,oe,$,ie,xe,m=t[0]==="home"&&ke(),f=t[0]==="resume"&&_e(),g=t[0]==="about"&&Ie(),b=t[0]==="projects"&&je();return{c(){e=d("main"),s=d("div"),a=d("div"),r=d("div"),o=d("div"),o.innerHTML='<div class="w-44 mask mask-hexagon"><img src="images/profile.jpg" alt=""/></div>',h=I(),u=d("ul"),c=d("button"),l=H("Home"),k=I(),j=d("button"),M=H("About"),ue=I(),T=d("button"),he=H("Projects"),pe=I(),P=d("button"),me=H("Resume"),fe=I(),B=d("div"),B.innerHTML=`<a href="https://github.com/cademichael" target="_blank"><i class="fa fa-github fa-2x m-2 "></i></a> 
					<a href="https://www.linkedin.com/in/cade-lueker-79a55b199/" target="_blank"><i class="fa fa-linkedin fa-2x m-2"></i></a>`,ge=I(),p=d("div"),ae=d("div"),be=I(),m&&m.c(),re=I(),f&&f.c(),ne=I(),g&&g.c(),oe=I(),b&&b.c(),i(o,"class","avatar m-4"),i(c,"class",S=t[0]==="home"?"step step-secondary text-secondary font-bold text-xl":"step"),i(j,"class",F=t[0]==="about"?"step step-secondary text-secondary font-bold text-xl":"step"),i(T,"class",U=t[0]==="projects"?"step step-secondary text-secondary font-bold text-xl":"step"),i(P,"class",z=t[0]==="resume"?"step step-secondary text-secondary font-bold text-xl":"step"),i(u,"class","steps steps-vertical"),i(B,"class","flex flex-col lg:mt-16"),i(r,"class","flex flex-col"),i(a,"class","m-8 grid flex-grow lg:mt-32"),i(ae,"class","hero-overlay bg-opacity-40"),i(p,"class","hero grid flex-grow min-h-screen lg:h-screen"),C(p,"background-image","url(images/background.jpg)"),i(s,"class","flex flex-col w-full lg:flex-row")},m(v,_){O(v,e,_),n(e,s),n(s,a),n(a,r),n(r,o),n(r,h),n(r,u),n(u,c),n(c,l),n(u,k),n(u,j),n(j,M),n(u,ue),n(u,T),n(T,he),n(u,pe),n(u,P),n(P,me),n(r,fe),n(r,B),n(s,ge),n(s,p),n(p,ae),n(p,be),m&&m.m(p,null),n(p,re),f&&f.m(p,null),n(p,ne),g&&g.m(p,null),n(p,oe),b&&b.m(p,null),$=!0,ie||(xe=[R(c,"click",t[1]),R(j,"click",t[2]),R(T,"click",t[3]),R(P,"click",t[4])],ie=!0)},p(v,[_]){(!$||_&1&&S!==(S=v[0]==="home"?"step step-secondary text-secondary font-bold text-xl":"step"))&&i(c,"class",S),(!$||_&1&&F!==(F=v[0]==="about"?"step step-secondary text-secondary font-bold text-xl":"step"))&&i(j,"class",F),(!$||_&1&&U!==(U=v[0]==="projects"?"step step-secondary text-secondary font-bold text-xl":"step"))&&i(T,"class",U),(!$||_&1&&z!==(z=v[0]==="resume"?"step step-secondary text-secondary font-bold text-xl":"step"))&&i(P,"class",z),v[0]==="home"?m?_&1&&x(m,1):(m=ke(),m.c(),x(m,1),m.m(p,re)):m&&(Y(),w(m,1,1,()=>{m=null}),X()),v[0]==="resume"?f?_&1&&x(f,1):(f=_e(),f.c(),x(f,1),f.m(p,ne)):f&&(Y(),w(f,1,1,()=>{f=null}),X()),v[0]==="about"?g?_&1&&x(g,1):(g=Ie(),g.c(),x(g,1),g.m(p,oe)):g&&(Y(),w(g,1,1,()=>{g=null}),X()),v[0]==="projects"?b?_&1&&x(b,1):(b=je(),b.c(),x(b,1),b.m(p,null)):b&&(Y(),w(b,1,1,()=>{b=null}),X())},i(v){$||(x(m),x(f),x(g),x(b),$=!0)},o(v){w(m),w(f),w(g),w(b),$=!1},d(v){v&&E(e),m&&m.d(),f&&f.d(),g&&g.d(),b&&b.d(),ie=!1,A(xe)}}}function ze(t,e,s){let a="home";return[a,()=>s(0,a="home"),()=>s(0,a="about"),()=>s(0,a="projects"),()=>s(0,a="resume")]}class Be extends K{constructor(e){super(),G(this,e,ze,Ue,N,{})}}new Be({target:document.getElementById("app")});
