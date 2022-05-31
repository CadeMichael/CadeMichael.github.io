const $e=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(l){if(l.ep)return;l.ep=!0;const a=t(l);fetch(l.href,a)}};$e();function y(){}function _e(e){return e()}function ge(){return Object.create(null)}function j(e){e.forEach(_e)}function ke(e){return typeof e=="function"}function z(e,s){return e!=e?s==s:e!==s||e&&typeof e=="object"||typeof e=="function"}let W;function Se(e,s){return W||(W=document.createElement("a")),W.href=s,e===W.href}function Ee(e){return Object.keys(e).length===0}function n(e,s){e.appendChild(s)}function I(e,s,t){e.insertBefore(s,t||null)}function F(e){e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function O(e){return document.createTextNode(e)}function S(){return O(" ")}function M(e,s,t,r){return e.addEventListener(s,t,r),()=>e.removeEventListener(s,t,r)}function o(e,s,t){t==null?e.removeAttribute(s):e.getAttribute(s)!==t&&e.setAttribute(s,t)}function Le(e){return Array.from(e.childNodes)}function D(e,s,t,r){t===null?e.style.removeProperty(s):e.style.setProperty(s,t,r?"important":"")}let ne;function T(e){ne=e}const N=[],he=[],G=[],xe=[],Pe=Promise.resolve();let ae=!1;function Ae(){ae||(ae=!0,Pe.then(we))}function V(e){G.push(e)}const te=new Set;let q=0;function we(){const e=ne;do{for(;q<N.length;){const s=N[q];q++,T(s),Ce(s.$$)}for(T(null),N.length=0,q=0;he.length;)he.pop()();for(let s=0;s<G.length;s+=1){const t=G[s];te.has(t)||(te.add(t),t())}G.length=0}while(N.length);for(;xe.length;)xe.pop()();ae=!1,te.clear(),T(e)}function Ce(e){if(e.fragment!==null){e.update(),j(e.before_update);const s=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,s),e.after_update.forEach(V)}}const K=new Set;let P;function re(){P={r:0,c:[],p:P}}function le(){P.r||j(P.c),P=P.p}function b(e,s){e&&e.i&&(K.delete(e),e.i(s))}function $(e,s,t,r){if(e&&e.o){if(K.has(e))return;K.add(e),P.c.push(()=>{K.delete(e),r&&(t&&e.d(1),r())}),e.o(s)}}function oe(e){e&&e.c()}function J(e,s,t,r){const{fragment:l,on_mount:a,on_destroy:u,after_update:d}=e.$$;l&&l.m(s,t),r||V(()=>{const i=a.map(_e).filter(ke);u?u.push(...i):j(i),e.$$.on_mount=[]}),d.forEach(V)}function U(e,s){const t=e.$$;t.fragment!==null&&(j(t.on_destroy),t.fragment&&t.fragment.d(s),t.on_destroy=t.fragment=null,t.ctx=[])}function je(e,s){e.$$.dirty[0]===-1&&(N.push(e),Ae(),e.$$.dirty.fill(0)),e.$$.dirty[s/31|0]|=1<<s%31}function Y(e,s,t,r,l,a,u,d=[-1]){const i=ne;T(e);const c=e.$$={fragment:null,ctx:null,props:a,update:y,not_equal:l,bound:ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(i?i.$$.context:[])),callbacks:ge(),dirty:d,skip_bound:!1,root:s.target||i.$$.root};u&&u(c.root);let E=!1;if(c.ctx=t?t(e,s.props||{},(v,_,...H)=>{const L=H.length?H[0]:_;return c.ctx&&l(c.ctx[v],c.ctx[v]=L)&&(!c.skip_bound&&c.bound[v]&&c.bound[v](L),E&&je(e,v)),_}):[],c.update(),E=!0,j(c.before_update),c.fragment=r?r(c.ctx):!1,s.target){if(s.hydrate){const v=Le(s.target);c.fragment&&c.fragment.l(v),v.forEach(F)}else c.fragment&&c.fragment.c();s.intro&&b(e.$$.fragment),J(e,s.target,s.anchor,s.customElement),we()}T(i)}class Q{$destroy(){U(this,1),this.$destroy=y}$on(s,t){const r=this.$$.callbacks[s]||(this.$$.callbacks[s]=[]);return r.push(t),()=>{const l=r.indexOf(t);l!==-1&&r.splice(l,1)}}$set(s){this.$$set&&!Ee(s)&&(this.$$.skip_bound=!0,this.$$set(s),this.$$.skip_bound=!1)}}function He(e){let s;return{c(){s=g("div"),s.innerHTML=`<div class="flex flex-col overflow-scroll h-full"><div class="flex flex-col"><h1 class="text-3xl mx-6 mt-4"><span class="text-secondary">#</span> Education</h1> 
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
          
          <p class="text-lg text-neutral-content"></p> 
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
          
          <p class="text-lg text-neutral-content"></p> 
          <div class="text-xl flex flex-col items-center"><h3>Vanilla JS (no framework)</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="80" max="100"></progress>  <br/> 
            <h3>Svelte &amp; SvelteKit</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="90" max="100"></progress>  <br/> 
            <h3>Vue</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="70" max="100"></progress>  <br/> 
            <h3>TypeScript</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="75" max="100"></progress></div></div></div> 
      
      <div class="card bg-base-100 mt-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Flutter</span></h2> 
          
          <p class="text-lg text-neutral-content"></p> 
          <div class="text-xl flex flex-col items-center"><h3>Dart</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="95" max="100"></progress>  <br/> 
            <h3>Mobile Front End</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="85" max="100"></progress>  <br/> 
            <h3>Mobile Backends</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="80" max="100"></progress>  <br/></div></div></div> 
      
      <div class="card bg-base-100 mt-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Web Development</span></h2> 
          
          <p class="text-lg text-neutral-content"></p> 
          <div class="text-xl flex flex-col items-center"><h3>HTML</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="100" max="100"></progress>  <br/> 
            <h3>CSS / Tailwindcss</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="90" max="100"></progress>  <br/> 
            <h3>Deployments</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="60" max="100"></progress>  <br/></div></div></div> 
      
      <div class="card bg-base-100 mt-6 mx-6 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Linux</span></h2> 
          
          <p class="text-lg text-neutral-content"></p> 
          <div class="text-xl flex flex-col items-center"><h3>Command Line</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="95" max="100"></progress>  <br/> 
            <h3>FileSystem</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="90" max="100"></progress>  <br/> 
            <h3>Emacs</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="80" max="100"></progress>  <br/> 
            <h3>Vim / Neovim</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="90" max="100"></progress>  <br/></div></div></div> 
      
      <div class="card bg-base-100 mt-6 mx-6 mb-12 shadow-xl"><div class="card-body"><h2 class="card-title"><span class="text-2xl"><span class="text-secondary">##</span> Some Experience With</span></h2> 
          
          <p class="text-lg text-neutral-content"></p> 
          <div class="text-xl flex flex-col items-center"><h3>Golang</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="50" max="100"></progress>  <br/> 
            <h3>PHP</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="40" max="100"></progress>  <br/> 
            <h3>R</h3> 
            <progress class="progress w-96 progress-secondary mb-4" value="75" max="100"></progress>  <br/></div></div></div></div></div>`,o(s,"class","m-4 mockup-window border border-secondary bg-base-100 w-4/5 shadow-lg"),D(s,"height","95%"),D(s,"width","90%")},m(t,r){I(t,s,r)},p:y,i:y,o:y,d(t){t&&F(s)}}}class Oe extends Q{constructor(s){super(),Y(this,s,null,He,z,{})}}function Me(e){let s;return{c(){s=g("div"),s.innerHTML=`<div class="hero-content text-center text-neutral-content"><div class="max-w-md shadow-xl mockup-code text-left"><pre data-prefix="$"><code>whoami</code></pre> 
      <pre data-prefix="&gt;" class="text-success"><code>Cade Lueker</code></pre> 
      <pre data-prefix="&gt;" class="text-success"><code>Software Engineer &amp; Web Dev</code></pre></div></div>`},m(t,r){I(t,s,r)},p:y,i:y,o:y,d(t){t&&F(s)}}}class Ne extends Q{constructor(s){super(),Y(this,s,null,Me,z,{})}}function Te(e){let s,t,r,l,a,u,d;return V(e[1]),{c(){s=g("div"),t=g("div"),r=g("iframe"),o(r,"class","overflow-scroll"),o(r,"title","Resume"),Se(r.src,l="images/resume.pdf")||o(r,"src",l),o(r,"width","100%"),o(r,"height",a=e[0]*.85+"px"),o(t,"class","flex flex-col items-center shadow-xl m-8"),o(s,"class","mockup-window border border-secondary bg-base-100 shadow-lg"),D(s,"height","95%"),D(s,"width","90%")},m(i,c){I(i,s,c),n(s,t),n(t,r),u||(d=M(window,"resize",e[1]),u=!0)},p(i,[c]){c&1&&a!==(a=i[0]*.85+"px")&&o(r,"height",a)},i:y,o:y,d(i){i&&F(s),u=!1,d()}}}function De(e,s,t){let r;function l(){t(0,r=window.innerHeight)}return[r,l]}class Fe extends Q{constructor(s){super(),Y(this,s,De,Te,z,{})}}function be(e){let s,t;return s=new Ne({}),{c(){oe(s.$$.fragment)},m(r,l){J(s,r,l),t=!0},i(r){t||(b(s.$$.fragment,r),t=!0)},o(r){$(s.$$.fragment,r),t=!1},d(r){U(s,r)}}}function ve(e){let s,t;return s=new Fe({}),{c(){oe(s.$$.fragment)},m(r,l){J(s,r,l),t=!0},i(r){t||(b(s.$$.fragment,r),t=!0)},o(r){$(s.$$.fragment,r),t=!1},d(r){U(s,r)}}}function ye(e){let s,t;return s=new Oe({}),{c(){oe(s.$$.fragment)},m(r,l){J(s,r,l),t=!0},i(r){t||(b(s.$$.fragment,r),t=!0)},o(r){$(s.$$.fragment,r),t=!1},d(r){U(s,r)}}}function Re(e){let s,t,r,l,a,u,d,i,c,E,v,_,H,L,ce,A,ie,R,de,C,ue,B,pe,h,X,fe,Z,ee,k,se,me,p=e[0]==="home"&&be(),f=e[0]==="resume"&&ve(),m=e[0]==="about"&&ye();return{c(){s=g("main"),t=g("div"),r=g("div"),l=g("div"),a=g("div"),a.innerHTML='<div class="w-44 mask mask-hexagon"><img src="images/profile.png" alt=""/></div>',u=S(),d=g("ul"),i=g("button"),c=O("Home"),v=S(),_=g("button"),H=O("About"),ce=S(),A=g("button"),ie=O("Projects"),de=S(),C=g("button"),ue=O("Resume"),pe=S(),h=g("div"),X=g("div"),fe=S(),p&&p.c(),Z=S(),f&&f.c(),ee=S(),m&&m.c(),o(a,"class","avatar m-4"),o(i,"class",E=e[0]==="home"?"step step-secondary text-secondary font-bold text-xl":"step"),o(_,"class",L=e[0]==="about"?"step step-secondary text-secondary font-bold text-xl":"step"),o(A,"class",R=e[0]==="projects"?"step step-secondary text-secondary font-bold text-xl":"step"),o(C,"class",B=e[0]==="resume"?"step step-secondary text-secondary font-bold text-xl":"step"),o(d,"class","steps steps-vertical"),o(l,"class","flex flex-col"),o(r,"class","m-8 grid flex-grow"),o(X,"class","hero-overlay bg-opacity-40"),o(h,"class","hero grid flex-grow min-h-screen lg:h-screen"),D(h,"background-image","url(images/background.jpg)"),o(t,"class","flex flex-col w-full lg:flex-row")},m(x,w){I(x,s,w),n(s,t),n(t,r),n(r,l),n(l,a),n(l,u),n(l,d),n(d,i),n(i,c),n(d,v),n(d,_),n(_,H),n(d,ce),n(d,A),n(A,ie),n(d,de),n(d,C),n(C,ue),n(t,pe),n(t,h),n(h,X),n(h,fe),p&&p.m(h,null),n(h,Z),f&&f.m(h,null),n(h,ee),m&&m.m(h,null),k=!0,se||(me=[M(i,"click",e[1]),M(_,"click",e[2]),M(A,"click",e[3]),M(C,"click",e[4])],se=!0)},p(x,[w]){(!k||w&1&&E!==(E=x[0]==="home"?"step step-secondary text-secondary font-bold text-xl":"step"))&&o(i,"class",E),(!k||w&1&&L!==(L=x[0]==="about"?"step step-secondary text-secondary font-bold text-xl":"step"))&&o(_,"class",L),(!k||w&1&&R!==(R=x[0]==="projects"?"step step-secondary text-secondary font-bold text-xl":"step"))&&o(A,"class",R),(!k||w&1&&B!==(B=x[0]==="resume"?"step step-secondary text-secondary font-bold text-xl":"step"))&&o(C,"class",B),x[0]==="home"?p?w&1&&b(p,1):(p=be(),p.c(),b(p,1),p.m(h,Z)):p&&(re(),$(p,1,1,()=>{p=null}),le()),x[0]==="resume"?f?w&1&&b(f,1):(f=ve(),f.c(),b(f,1),f.m(h,ee)):f&&(re(),$(f,1,1,()=>{f=null}),le()),x[0]==="about"?m?w&1&&b(m,1):(m=ye(),m.c(),b(m,1),m.m(h,null)):m&&(re(),$(m,1,1,()=>{m=null}),le())},i(x){k||(b(p),b(f),b(m),k=!0)},o(x){$(p),$(f),$(m),k=!1},d(x){x&&F(s),p&&p.d(),f&&f.d(),m&&m.d(),se=!1,j(me)}}}function Be(e,s,t){let r="home";return[r,()=>t(0,r="home"),()=>t(0,r="about"),()=>t(0,r="projects"),()=>t(0,r="resume")]}class We extends Q{constructor(s){super(),Y(this,s,Be,Re,z,{})}}new We({target:document.getElementById("app")});
