const Je=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}};Je();function w(){}function Ee(t){return t()}function je(){return Object.create(null)}function R(t){t.forEach(Ee)}function De(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let te;function He(t,e){return te||(te=document.createElement("a")),te.href=e,t===te.href}function Oe(t){return Object.keys(t).length===0}function n(t,e){t.appendChild(e)}function E(t,e,s){t.insertBefore(e,s||null)}function F(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function j(){return H(" ")}function O(t,e,s,a){return t.addEventListener(e,s,a),()=>t.removeEventListener(e,s,a)}function o(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function Re(t){return Array.from(t.childNodes)}function C(t,e,s,a){s===null?t.style.removeProperty(e):t.style.setProperty(e,s,a?"important":"")}let me;function V(t){me=t}const Q=[],$e=[],ae=[],Se=[],qe=Promise.resolve();let pe=!1;function Ne(){pe||(pe=!0,qe.then(Me))}function ne(t){ae.push(t)}const he=new Set;let se=0;function Me(){const t=me;do{for(;se<Q.length;){const e=Q[se];se++,V(e),We(e.$$)}for(V(null),Q.length=0,se=0;$e.length;)$e.pop()();for(let e=0;e<ae.length;e+=1){const s=ae[e];he.has(s)||(he.add(s),s())}ae.length=0}while(Q.length);for(;Se.length;)Se.pop()();pe=!1,he.clear(),V(t)}function We(t){if(t.fragment!==null){t.update(),R(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ne)}}const re=new Set;let A;function z(){A={r:0,c:[],p:A}}function B(){A.r||R(A.c),A=A.p}function d(t,e){t&&t.i&&(re.delete(t),t.i(e))}function k(t,e,s,a){if(t&&t.o){if(re.has(t))return;re.add(t),A.c.push(()=>{re.delete(t),a&&(s&&t.d(1),a())}),t.o(e)}}function Y(t){t&&t.c()}function N(t,e,s,a){const{fragment:r,on_mount:i,on_destroy:m,after_update:h}=t.$$;r&&r.m(e,s),a||ne(()=>{const c=i.map(Ee).filter(De);m?m.push(...c):R(c),t.$$.on_mount=[]}),h.forEach(ne)}function W(t,e){const s=t.$$;s.fragment!==null&&(R(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function Ge(t,e){t.$$.dirty[0]===-1&&(Q.push(t),Ne(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,s,a,r,i,m,h=[-1]){const c=me;V(t);const l=t.$$={fragment:null,ctx:null,props:i,update:w,not_equal:r,bound:je(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:je(),dirty:h,skip_bound:!1,root:e.target||c.$$.root};m&&m(l.root);let T=!1;if(l.ctx=s?s(t,e.props||{},($,S,...U)=>{const P=U.length?U[0]:S;return l.ctx&&r(l.ctx[$],l.ctx[$]=P)&&(!l.skip_bound&&l.bound[$]&&l.bound[$](P),T&&Ge(t,$)),S}):[],l.update(),T=!0,R(l.before_update),l.fragment=a?a(l.ctx):!1,e.target){if(e.hydrate){const $=Re(e.target);l.fragment&&l.fragment.l($),$.forEach(F)}else l.fragment&&l.fragment.c();e.intro&&d(t.$$.fragment),N(t,e.target,e.anchor,e.customElement),Me()}V(c)}class K{$destroy(){W(this,1),this.$destroy=w}$on(e,s){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(s),()=>{const r=a.indexOf(s);r!==-1&&a.splice(r,1)}}$set(e){this.$$set&&!Oe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ke(t){let e;return{c(){e=u("div"),e.innerHTML=`<div class="hero-content text-center text-neutral-content"><div class="max-w-md shadow-xl mockup-code text-left"><pre data-prefix="$"><code>whoami</code></pre> 
      <pre data-prefix="&gt;" class="text-success"><code>Cade Lueker</code></pre> 
      <pre data-prefix="&gt;" class="text-success"><code>Software Engineer &amp; Web Dev</code></pre></div></div>`},m(s,a){E(s,e,a)},p:w,i:w,o:w,d(s){s&&F(e)}}}class Ue extends K{constructor(e){super(),G(this,e,null,Ke,q,{})}}function ze(t){let e;return{c(){e=u("div"),e.innerHTML=`<div class="flex flex-col overflow-scroll h-full"><div class="flex flex-col"><h1 class="text-3xl mx-6 -mb-6 mt-4"><span class="text-secondary">#</span> About Me</h1> 
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
            <progress class="progress w-96 progress-secondary mb-4" value="75" max="100"></progress>  <br/></div></div></div></div></div>`,o(e,"class","m-4 mockup-window border border-secondary bg-base-100 shadow-lg"),C(e,"height","95%"),C(e,"width","90%")},m(s,a){E(s,e,a)},p:w,i:w,o:w,d(s){s&&F(e)}}}class Be extends K{constructor(e){super(),G(this,e,null,ze,q,{})}}function Qe(t){let e;return{c(){e=u("div"),e.innerHTML=`<div class="flex flex-col overflow-scroll h-full"><div class="flex flex-col mb-16"><h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> The Crypt</h1> 
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
        <figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info w-[20em]" src="images/crypt.jpg" alt="The Crypt"/></figure></div> 
      
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
        <figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info min-w-[20em]" src="images/spider.jpg" alt="Spider"/></figure></div> 
      
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
        <figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info min-w-[20em]" src="images/gojitsu.jpg" alt="GoJitsu"/></figure></div> 
      
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
        <figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info min-w-[20em]" src="images/svelte.jpg" alt="svelte"/></figure></div> 
      
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
        <figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info min-w-[20em]" src="images/flask.jpg" alt="flask"/></figure></div></div></div>`,o(e,"class","m-4 mockup-window border border-secondary bg-base-100 shadow-lg"),C(e,"height","95%"),C(e,"width","90%")},m(s,a){E(s,e,a)},p:w,i:w,o:w,d(s){s&&F(e)}}}class Ve extends K{constructor(e){super(),G(this,e,null,Qe,q,{})}}function Ye(t){let e;return{c(){e=u("div"),e.innerHTML=`<div class="flex flex-col overflow-scroll h-full"><div class="flex flex-col mb-16"><h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> SalesForce</h1> 
      
      <div class="card bg-base-100 mt-4 mx-6 shadow-xl lg:card-side"><div class="card-body"><h2 class="card-title"><div class="text-2xl"><span class="text-secondary">##</span>
              JavaScript Developer I</div></h2> 
          <div class="text-xl"><h3 class="mb-3"><span class="text-info">Language / Framework:</span>
              JavaScript, HTML, DOM, Lightning Web Components</h3> 
            <h3><span class="text-info">Description:</span> 
The JS Dev I certification tests your ability to work with vanilla JavaScript with respect to the browser, dom, and NodeJs (Server Side) in addition comprehensive knowledge of Salesforce Lightning Web Components. It is comprised of an exam hosted by <b>Webassessor</b> which tests JavaScript knowledge and a Salesforce trailhead &quot;<span class="text-secondary"><a href="https://trailhead.salesforce.com/content/learn/superbadges/superbadge_lwc_specialist"><u>superbadge</u></a></span>&quot; in Lightning web components. Once the exam is passed and the project based &quot;superbadge&quot; has been approved you receive the certification.</h3></div> 
          <div class="card-actions justify-end"><a href="https://trailhead.salesforce.com/help?article=Salesforce-Certified-JavaScript-Developer-I-Exam-Guide" target="_blank" class="btn btn-info">Information</a></div></div> 
        <figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info w-[20em]" src="images/js_d_I.png" alt="cert"/></figure></div></div></div>`,o(e,"class","m-4 mockup-window border border-secondary bg-base-100 shadow-lg"),C(e,"height","95%"),C(e,"width","90%")},m(s,a){E(s,e,a)},p:w,i:w,o:w,d(s){s&&F(e)}}}class Xe extends K{constructor(e){super(),G(this,e,null,Ye,q,{})}}function Ze(t){let e,s,a,r,i,m,h;return ne(t[1]),{c(){e=u("div"),s=u("div"),a=u("iframe"),o(a,"class","overflow-scroll"),o(a,"title","Resume"),He(a.src,r="images/resume.pdf")||o(a,"src",r),o(a,"width","100%"),o(a,"height",i=t[0]*.85+"px"),o(s,"class","flex flex-col items-center shadow-xl m-8"),o(e,"class","mockup-window border border-secondary bg-base-100 shadow-lg"),C(e,"height","95%"),C(e,"width","90%")},m(c,l){E(c,e,l),n(e,s),n(s,a),m||(h=O(window,"resize",t[1]),m=!0)},p(c,[l]){l&1&&i!==(i=c[0]*.85+"px")&&o(a,"height",i)},i:w,o:w,d(c){c&&F(e),m=!1,h()}}}function et(t,e,s){let a;function r(){s(0,a=window.innerHeight)}return[a,r]}class tt extends K{constructor(e){super(),G(this,e,et,Ze,q,{})}}function Le(t){let e;return{c(){e=u("div"),e.innerHTML=`<div class="lg:absolute bottom-16 right-12"><a href="https://github.com/cademichael" target="_blank"><i class="fa fa-github fa-3x m-2 "></i></a> 
              <a href="https://www.linkedin.com/in/cade-lueker-79a55b199/" target="_blank"><i class="fa fa-linkedin fa-3x m-2"></i></a></div>`,o(e,"class","flex flex-col lg:mt-16")},m(s,a){E(s,e,a)},d(s){s&&F(e)}}}function Ce(t){let e,s;return e=new Ue({}),{c(){Y(e.$$.fragment)},m(a,r){N(e,a,r),s=!0},i(a){s||(d(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){W(e,a)}}}function Fe(t){let e,s;return e=new Be({}),{c(){Y(e.$$.fragment)},m(a,r){N(e,a,r),s=!0},i(a){s||(d(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){W(e,a)}}}function Te(t){let e,s;return e=new Ve({}),{c(){Y(e.$$.fragment)},m(a,r){N(e,a,r),s=!0},i(a){s||(d(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){W(e,a)}}}function Pe(t){let e,s;return e=new Xe({}),{c(){Y(e.$$.fragment)},m(a,r){N(e,a,r),s=!0},i(a){s||(d(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){W(e,a)}}}function Ae(t){let e,s;return e=new tt({}),{c(){Y(e.$$.fragment)},m(a,r){N(e,a,r),s=!0},i(a){s||(d(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){W(e,a)}}}function st(t){let e,s,a,r,i,m,h,c,l,T,$,S,U,P,fe,M,ge,X,be,J,xe,Z,ve,D,ye,ee,we,ke,p,oe,_e,ie,le,ce,de,L,ue,Ie,_=t[0]==="home"&&Le(),f=t[0]==="home"&&Ce(),g=t[0]==="about"&&Fe(),b=t[0]==="projects"&&Te(),x=t[0]==="certs"&&Pe(),v=t[0]==="resume"&&Ae();return{c(){e=u("main"),s=u("div"),a=u("div"),r=u("div"),i=u("div"),i.innerHTML='<div class="w-44 mask mask-hexagon"><img src="images/profile.jpg" alt=""/></div>',m=j(),h=u("ul"),c=u("button"),l=H("Home"),$=j(),S=u("button"),U=H("About"),fe=j(),M=u("button"),ge=H("Projects"),be=j(),J=u("button"),xe=H("Certifications"),ve=j(),D=u("button"),ye=H("Resume"),we=j(),_&&_.c(),ke=j(),p=u("div"),oe=u("div"),_e=j(),f&&f.c(),ie=j(),g&&g.c(),le=j(),b&&b.c(),ce=j(),x&&x.c(),de=j(),v&&v.c(),o(i,"class","avatar m-4"),o(c,"class",T=t[0]==="home"?"step step-secondary text-secondary font-bold text-xl":"step"),o(S,"class",P=t[0]==="about"?"step step-secondary text-secondary font-bold text-xl":"step"),o(M,"class",X=t[0]==="projects"?"step step-secondary text-secondary font-bold text-xl":"step"),o(J,"class",Z=t[0]==="certs"?"step step-secondary text-secondary font-bold text-xl":"step"),o(D,"class",ee=t[0]==="resume"?"step step-secondary text-secondary font-bold text-xl":"step"),o(h,"class","steps steps-vertical"),o(r,"class","flex flex-col"),o(a,"class","m-8 grid flex-grow lg:mt-32"),o(oe,"class","hero-overlay bg-opacity-40"),o(p,"class","hero grid flex-grow min-h-screen lg:h-screen"),C(p,"background-image","url(images/background.jpg)"),o(s,"class","flex flex-col w-full lg:flex-row")},m(y,I){E(y,e,I),n(e,s),n(s,a),n(a,r),n(r,i),n(r,m),n(r,h),n(h,c),n(c,l),n(h,$),n(h,S),n(S,U),n(h,fe),n(h,M),n(M,ge),n(h,be),n(h,J),n(J,xe),n(h,ve),n(h,D),n(D,ye),n(r,we),_&&_.m(r,null),n(s,ke),n(s,p),n(p,oe),n(p,_e),f&&f.m(p,null),n(p,ie),g&&g.m(p,null),n(p,le),b&&b.m(p,null),n(p,ce),x&&x.m(p,null),n(p,de),v&&v.m(p,null),L=!0,ue||(Ie=[O(c,"click",t[1]),O(S,"click",t[2]),O(M,"click",t[3]),O(J,"click",t[4]),O(D,"click",t[5])],ue=!0)},p(y,[I]){(!L||I&1&&T!==(T=y[0]==="home"?"step step-secondary text-secondary font-bold text-xl":"step"))&&o(c,"class",T),(!L||I&1&&P!==(P=y[0]==="about"?"step step-secondary text-secondary font-bold text-xl":"step"))&&o(S,"class",P),(!L||I&1&&X!==(X=y[0]==="projects"?"step step-secondary text-secondary font-bold text-xl":"step"))&&o(M,"class",X),(!L||I&1&&Z!==(Z=y[0]==="certs"?"step step-secondary text-secondary font-bold text-xl":"step"))&&o(J,"class",Z),(!L||I&1&&ee!==(ee=y[0]==="resume"?"step step-secondary text-secondary font-bold text-xl":"step"))&&o(D,"class",ee),y[0]==="home"?_||(_=Le(),_.c(),_.m(r,null)):_&&(_.d(1),_=null),y[0]==="home"?f?I&1&&d(f,1):(f=Ce(),f.c(),d(f,1),f.m(p,ie)):f&&(z(),k(f,1,1,()=>{f=null}),B()),y[0]==="about"?g?I&1&&d(g,1):(g=Fe(),g.c(),d(g,1),g.m(p,le)):g&&(z(),k(g,1,1,()=>{g=null}),B()),y[0]==="projects"?b?I&1&&d(b,1):(b=Te(),b.c(),d(b,1),b.m(p,ce)):b&&(z(),k(b,1,1,()=>{b=null}),B()),y[0]==="certs"?x?I&1&&d(x,1):(x=Pe(),x.c(),d(x,1),x.m(p,de)):x&&(z(),k(x,1,1,()=>{x=null}),B()),y[0]==="resume"?v?I&1&&d(v,1):(v=Ae(),v.c(),d(v,1),v.m(p,null)):v&&(z(),k(v,1,1,()=>{v=null}),B())},i(y){L||(d(f),d(g),d(b),d(x),d(v),L=!0)},o(y){k(f),k(g),k(b),k(x),k(v),L=!1},d(y){y&&F(e),_&&_.d(),f&&f.d(),g&&g.d(),b&&b.d(),x&&x.d(),v&&v.d(),ue=!1,R(Ie)}}}function at(t,e,s){let a="home";return[a,()=>s(0,a="home"),()=>s(0,a="about"),()=>s(0,a="projects"),()=>s(0,a="certs"),()=>s(0,a="resume")]}class rt extends K{constructor(e){super(),G(this,e,at,st,q,{})}}new rt({target:document.getElementById("app")});
