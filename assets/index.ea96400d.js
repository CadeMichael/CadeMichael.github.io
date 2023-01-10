const Ae=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}};Ae();function w(){}function Te(t){return t()}function _e(){return Object.create(null)}function N(t){t.forEach(Te)}function Je(t){return typeof t=="function"}function H(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ee;function Ee(t,e){return ee||(ee=document.createElement("a")),ee.href=e,t===ee.href}function Me(t){return Object.keys(t).length===0}function n(t,e){t.appendChild(e)}function R(t,e,s){t.insertBefore(e,s||null)}function P(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function j(){return M(" ")}function D(t,e,s,a){return t.addEventListener(e,s,a),()=>t.removeEventListener(e,s,a)}function o(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function De(t){return Array.from(t.childNodes)}function L(t,e,s,a){s===null?t.style.removeProperty(e):t.style.setProperty(e,s,a?"important":"")}let pe;function B(t){pe=t}const Z=[],Ie=[],se=[],je=[],Ne=Promise.resolve();let he=!1;function He(){he||(he=!0,Ne.then(Pe))}function re(t){se.push(t)}const ue=new Set;let te=0;function Pe(){const t=pe;do{for(;te<Z.length;){const e=Z[te];te++,B(e),Re(e.$$)}for(B(null),Z.length=0,te=0;Ie.length;)Ie.pop()();for(let e=0;e<se.length;e+=1){const s=se[e];ue.has(s)||(ue.add(s),s())}se.length=0}while(Z.length);for(;je.length;)je.pop()();he=!1,ue.clear(),B(t)}function Re(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(re)}}const ae=new Set;let T;function K(){T={r:0,c:[],p:T}}function U(){T.r||N(T.c),T=T.p}function d(t,e){t&&t.i&&(ae.delete(t),t.i(e))}function k(t,e,s,a){if(t&&t.o){if(ae.has(t))return;ae.add(t),T.c.push(()=>{ae.delete(t),a&&(s&&t.d(1),a())}),t.o(e)}}function Q(t){t&&t.c()}function O(t,e,s,a){const{fragment:r,on_mount:i,on_destroy:m,after_update:u}=t.$$;r&&r.m(e,s),a||re(()=>{const c=i.map(Te).filter(Je);m?m.push(...c):N(c),t.$$.on_mount=[]}),u.forEach(re)}function q(t,e){const s=t.$$;s.fragment!==null&&(N(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function Oe(t,e){t.$$.dirty[0]===-1&&(Z.push(t),He(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,s,a,r,i,m,u=[-1]){const c=pe;B(t);const l=t.$$={fragment:null,ctx:null,props:i,update:w,not_equal:r,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:_e(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};m&&m(l.root);let C=!1;if(l.ctx=s?s(t,e.props||{},(I,$,...G)=>{const F=G.length?G[0]:$;return l.ctx&&r(l.ctx[I],l.ctx[I]=F)&&(!l.skip_bound&&l.bound[I]&&l.bound[I](F),C&&Oe(t,I)),$}):[],l.update(),C=!0,N(l.before_update),l.fragment=a?a(l.ctx):!1,e.target){if(e.hydrate){const I=De(e.target);l.fragment&&l.fragment.l(I),I.forEach(P)}else l.fragment&&l.fragment.c();e.intro&&d(t.$$.fragment),O(t,e.target,e.anchor,e.customElement),Pe()}B(c)}class z{$destroy(){q(this,1),this.$destroy=w}$on(e,s){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(s),()=>{const r=a.indexOf(s);r!==-1&&a.splice(r,1)}}$set(e){this.$$set&&!Me(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function qe(t){let e;return{c(){e=p("div"),e.innerHTML=`<div class="hero-content text-center text-neutral-content"><div class="max-w-md shadow-xl mockup-code text-left"><pre data-prefix="$"><code>whoami</code></pre> 
      <pre data-prefix="&gt;" class="text-success"><code>Cade Lueker</code></pre> 
      <pre data-prefix="&gt;" class="text-success"><code>Software Engineer &amp; Web Dev</code></pre></div></div> 
  <div class="flex flex-col lg:mt-16"><div class="lg:absolute bottom-16 right-12"><a href="https://github.com/cademichael" target="_blank"><i class="fa fa-github fa-3x m-2 "></i></a> 
      <a href="https://www.linkedin.com/in/cade-lueker-79a55b199/" target="_blank"><i class="fa fa-linkedin fa-3x m-2"></i></a></div></div>`},m(s,a){R(s,e,a)},p:w,i:w,o:w,d(s){s&&P(e)}}}class We extends z{constructor(e){super(),W(this,e,null,qe,H,{})}}function ze(t){let e;return{c(){e=p("div"),e.innerHTML=`<div class="flex flex-col overflow-scroll h-full"><div class="flex flex-col"><h1 class="text-3xl mx-6 -mb-6 mt-4"><span class="text-secondary">#</span> About Me</h1> 
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
            <progress class="progress w-96 progress-secondary mb-4" value="75" max="100"></progress>  <br/></div></div></div></div></div>`,o(e,"class","m-4 mockup-window border border-secondary bg-base-100 shadow-lg"),L(e,"height","95%"),L(e,"width","90%")},m(s,a){R(s,e,a)},p:w,i:w,o:w,d(s){s&&P(e)}}}class Ge extends z{constructor(e){super(),W(this,e,null,ze,H,{})}}function Ke(t){let e;return{c(){e=p("div"),e.innerHTML=`<div class="flex flex-col overflow-scroll h-full"><div class="flex flex-col mb-16"><h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> The Crypt</h1> 
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
      
      <h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> GoJitsu</h1> 
      <div class="card bg-base-100 mt-4 mx-6 shadow-xl lg:card-side"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span>
              Data Science Project Analyzing Jiu Jitsu Data</span></h2> 
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
      
      <h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> Zig.nvim</h1> 
      <div class="card bg-base-100 mt-4 mx-6 shadow-xl lg:card-side"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Neovim Plugin for the Zig programming language</span></h2> 
          <div class="text-xl"><h3 class="mb-3"><span class="text-info">Language / Framework: </span>Lua &amp;
              Neovim</h3> 
            <h3><span class="text-info">Function:</span> The Zig programming language
              bills itself as the new C (especially if Rust is the new C++). As I was
              going about learning lower level languages I noticed there wasn&#39;t great 
              Neovim support for the Zig tooling so I decided to make a Lua plugin 
              to help the Zig community and learn more Lua at the same time. The plugin 
              currently has <em>21 github stars</em>. The Plugin allows for testing,
              building, and marking errors in zig buffers.</h3></div> 
          <div class="card-actions justify-end"><a href="https://github.com/cademichael/zig.nvim" target="_blank" class="btn btn-info">repo</a></div></div> 
        <figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info w-[20em]" src="images/zig.jpg" alt="zig.nvim"/></figure></div> 
      
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
        <figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info min-w-[20em]" src="images/flask.jpg" alt="flask"/></figure></div></div></div>`,o(e,"class","m-4 mockup-window border border-secondary bg-base-100 shadow-lg"),L(e,"height","95%"),L(e,"width","90%")},m(s,a){R(s,e,a)},p:w,i:w,o:w,d(s){s&&P(e)}}}class Ue extends z{constructor(e){super(),W(this,e,null,Ke,H,{})}}function Ze(t){let e;return{c(){e=p("div"),e.innerHTML=`<div class="flex flex-col overflow-scroll h-full"><div class="flex flex-col mb-16"><div class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span>  
        <button class="btn btn-lg btn-outline btn-ghost mx-2"><a class="text-3xl" target="_blank" href="https://trailblazer.me/id/clueker99">SalesForce</a></button></div> 
      
      <div class="card bg-base-100 mt-4 mx-6 shadow-xl lg:card-side"><div class="card-body"><h2 class="card-title"><div class="text-2xl"><span class="text-secondary">##</span>
              JavaScript Developer I</div></h2> 
          <div class="text-xl"><h3 class="mb-3"><span class="text-info">Language / Framework:</span>
              JavaScript, HTML, DOM, Lightning Web Components</h3> 
            <h3><span class="text-info">Description:</span> 
The JS Dev I certification tests your ability to work with vanilla JavaScript with respect to the browser, dom, and NodeJs (Server Side) in addition comprehensive knowledge of Salesforce Lightning Web Components. It is comprised of an exam hosted by <b>Webassessor</b> which tests JavaScript knowledge and a Salesforce trailhead &quot;<span class="text-secondary"><a href="https://trailhead.salesforce.com/content/learn/superbadges/superbadge_lwc_specialist"><u>superbadge</u></a></span>&quot; in Lightning web components. Once the exam is passed and the project based &quot;superbadge&quot; has been approved you receive the certification.</h3></div> 
          <div class="card-actions justify-end"><a href="https://trailhead.salesforce.com/help?article=Salesforce-Certified-JavaScript-Developer-I-Exam-Guide" target="_blank" class="btn btn-info">Information</a></div></div> 
        <figure class="rounded-lg m-2"><img class="rounded-lg border border-rounded border-info p-2 w-[20em]" src="images/js_d_I.png" alt="cert"/></figure></div></div></div>`,o(e,"class","m-4 mockup-window border border-secondary bg-base-100 shadow-lg"),L(e,"height","95%"),L(e,"width","90%")},m(s,a){R(s,e,a)},p:w,i:w,o:w,d(s){s&&P(e)}}}class Be extends z{constructor(e){super(),W(this,e,null,Ze,H,{})}}function Qe(t){let e,s,a,r,i,m,u;return re(t[1]),{c(){e=p("div"),s=p("div"),a=p("iframe"),o(a,"class","overflow-scroll"),o(a,"title","Resume"),Ee(a.src,r="images/resume.pdf")||o(a,"src",r),o(a,"width","100%"),o(a,"height",i=t[0]*.85+"px"),o(s,"class","flex flex-col items-center shadow-xl m-8"),o(e,"class","mockup-window border border-secondary bg-base-100 shadow-lg"),L(e,"height","95%"),L(e,"width","90%")},m(c,l){R(c,e,l),n(e,s),n(s,a),m||(u=D(window,"resize",t[1]),m=!0)},p(c,[l]){l&1&&i!==(i=c[0]*.85+"px")&&o(a,"height",i)},i:w,o:w,d(c){c&&P(e),m=!1,u()}}}function Ve(t,e,s){let a;function r(){s(0,a=window.innerHeight)}return[a,r]}class Ye extends z{constructor(e){super(),W(this,e,Ve,Qe,H,{})}}function $e(t){let e,s;return e=new We({}),{c(){Q(e.$$.fragment)},m(a,r){O(e,a,r),s=!0},i(a){s||(d(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){q(e,a)}}}function Se(t){let e,s;return e=new Ge({}),{c(){Q(e.$$.fragment)},m(a,r){O(e,a,r),s=!0},i(a){s||(d(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){q(e,a)}}}function Le(t){let e,s;return e=new Ue({}),{c(){Q(e.$$.fragment)},m(a,r){O(e,a,r),s=!0},i(a){s||(d(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){q(e,a)}}}function Ce(t){let e,s;return e=new Be({}),{c(){Q(e.$$.fragment)},m(a,r){O(e,a,r),s=!0},i(a){s||(d(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){q(e,a)}}}function Fe(t){let e,s;return e=new Ye({}),{c(){Q(e.$$.fragment)},m(a,r){O(e,a,r),s=!0},i(a){s||(d(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){q(e,a)}}}function Xe(t){let e,s,a,r,i,m,u,c,l,C,I,$,G,F,me,A,fe,V,ge,J,be,Y,xe,E,ve,X,ye,h,ne,we,oe,ie,le,ce,S,de,ke,f=t[0]==="home"&&$e(),g=t[0]==="about"&&Se(),b=t[0]==="projects"&&Le(),x=t[0]==="certs"&&Ce(),v=t[0]==="resume"&&Fe();return{c(){e=p("main"),s=p("div"),a=p("div"),r=p("div"),i=p("div"),i.innerHTML='<div class="w-44 mask mask-hexagon"><img src="images/profile.jpg" alt=""/></div>',m=j(),u=p("ul"),c=p("button"),l=M("Home"),I=j(),$=p("button"),G=M("About"),me=j(),A=p("button"),fe=M("Projects"),ge=j(),J=p("button"),be=M("Certifications"),xe=j(),E=p("button"),ve=M("Resume"),ye=j(),h=p("div"),ne=p("div"),we=j(),f&&f.c(),oe=j(),g&&g.c(),ie=j(),b&&b.c(),le=j(),x&&x.c(),ce=j(),v&&v.c(),o(i,"class","avatar m-4"),o(c,"class",C=t[0]==="home"?"step step-secondary text-secondary font-bold text-xl":"step"),o($,"class",F=t[0]==="about"?"step step-secondary text-secondary font-bold text-xl":"step"),o(A,"class",V=t[0]==="projects"?"step step-secondary text-secondary font-bold text-xl":"step"),o(J,"class",Y=t[0]==="certs"?"step step-secondary text-secondary font-bold text-xl":"step"),o(E,"class",X=t[0]==="resume"?"step step-secondary text-secondary font-bold text-xl":"step"),o(u,"class","steps steps-vertical"),o(r,"class","flex flex-col"),o(a,"class","m-8 grid flex-grow"),o(ne,"class","hero-overlay bg-opacity-40"),o(h,"class","hero grid flex-grow min-h-screen lg:h-screen"),L(h,"background-image","url(images/background.jpg)"),o(s,"class","flex flex-col w-full lg:flex-row")},m(y,_){R(y,e,_),n(e,s),n(s,a),n(a,r),n(r,i),n(r,m),n(r,u),n(u,c),n(c,l),n(u,I),n(u,$),n($,G),n(u,me),n(u,A),n(A,fe),n(u,ge),n(u,J),n(J,be),n(u,xe),n(u,E),n(E,ve),n(s,ye),n(s,h),n(h,ne),n(h,we),f&&f.m(h,null),n(h,oe),g&&g.m(h,null),n(h,ie),b&&b.m(h,null),n(h,le),x&&x.m(h,null),n(h,ce),v&&v.m(h,null),S=!0,de||(ke=[D(c,"click",t[1]),D($,"click",t[2]),D(A,"click",t[3]),D(J,"click",t[4]),D(E,"click",t[5])],de=!0)},p(y,[_]){(!S||_&1&&C!==(C=y[0]==="home"?"step step-secondary text-secondary font-bold text-xl":"step"))&&o(c,"class",C),(!S||_&1&&F!==(F=y[0]==="about"?"step step-secondary text-secondary font-bold text-xl":"step"))&&o($,"class",F),(!S||_&1&&V!==(V=y[0]==="projects"?"step step-secondary text-secondary font-bold text-xl":"step"))&&o(A,"class",V),(!S||_&1&&Y!==(Y=y[0]==="certs"?"step step-secondary text-secondary font-bold text-xl":"step"))&&o(J,"class",Y),(!S||_&1&&X!==(X=y[0]==="resume"?"step step-secondary text-secondary font-bold text-xl":"step"))&&o(E,"class",X),y[0]==="home"?f?_&1&&d(f,1):(f=$e(),f.c(),d(f,1),f.m(h,oe)):f&&(K(),k(f,1,1,()=>{f=null}),U()),y[0]==="about"?g?_&1&&d(g,1):(g=Se(),g.c(),d(g,1),g.m(h,ie)):g&&(K(),k(g,1,1,()=>{g=null}),U()),y[0]==="projects"?b?_&1&&d(b,1):(b=Le(),b.c(),d(b,1),b.m(h,le)):b&&(K(),k(b,1,1,()=>{b=null}),U()),y[0]==="certs"?x?_&1&&d(x,1):(x=Ce(),x.c(),d(x,1),x.m(h,ce)):x&&(K(),k(x,1,1,()=>{x=null}),U()),y[0]==="resume"?v?_&1&&d(v,1):(v=Fe(),v.c(),d(v,1),v.m(h,null)):v&&(K(),k(v,1,1,()=>{v=null}),U())},i(y){S||(d(f),d(g),d(b),d(x),d(v),S=!0)},o(y){k(f),k(g),k(b),k(x),k(v),S=!1},d(y){y&&P(e),f&&f.d(),g&&g.d(),b&&b.d(),x&&x.d(),v&&v.d(),de=!1,N(ke)}}}function et(t,e,s){let a="home";return[a,()=>s(0,a="home"),()=>s(0,a="about"),()=>s(0,a="projects"),()=>s(0,a="certs"),()=>s(0,a="resume")]}class tt extends z{constructor(e){super(),W(this,e,et,Xe,H,{})}}new tt({target:document.getElementById("app")});
