import{s as Vs,n as Es}from"./CrGyUMwP.js";import{S as Zs,i as Js,d as n,a as l,k as c,c as p,l as o,g as e,n as k,o as Ps,h as i,j as t,H as g}from"./DGbnm7Gy.js";function Ks(qs){let r,Ds='<ol class="toc-level toc-level-1"><li class="toc-item toc-item-h1"><a class="toc-link toc-link-h1" href="#what-is-a-stack-language">What is a stack language?</a><ol class="toc-level toc-level-2"><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#lean4">Lean4</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#nix-flakes">Nix Flakes</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#project-outline">Project Outline</a></li></ol></li><li class="toc-item toc-item-h1"><a class="toc-link toc-link-h1" href="#state--stack">state &amp; stack</a></li><li class="toc-item toc-item-h1"><a class="toc-link toc-link-h1" href="#syntax">Syntax</a><ol class="toc-level toc-level-2"><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#bnf">BNF</a></li></ol></li><li class="toc-item toc-item-h1"><a class="toc-link toc-link-h1" href="#semantics">Semantics</a><ol class="toc-level toc-level-2"><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#rules-for-evaluation">Rules for evaluation</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#functions-for-evaluation">Functions for evaluation</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#inductive-relations-for-evaluation">Inductive relations for evaluation</a></li></ol></li><li class="toc-item toc-item-h1"><a class="toc-link toc-link-h1" href="#determinism">Determinism</a></li></ol>',Z,y,ms='<a aria-hidden="true" tabindex="-1" href="#what-is-a-stack-language"><span class="icon icon-link"></span></a>What is a stack language?',J,w,vs=`<li>a “normal” programming language has functions on parameters. It is obvious what the parameters to each operation are.
<ul><li>ie <code>max(10, 11)</code> we know that there is some function <code>max</code> that takes two numbers (int, float, etc…)</li></ul></li> <li>however a stack language maintains (you guessed it) a <strong>stack</strong> of values and every operation interacts with these values based on their position in the stack.
<ul><li>most low level (lower than C / Rust) like assembly, jvm-bytecode and WASM are stack based languages (most assembly languages use registers but they can be thought of as “stack adjacent”).</li> <li>when an operation requires values from the stack it “pops” them and “pushes” their result back onto the stack.</li> <li>some operations with no parameters just push values onto the stack, such as declaring constants.</li></ul></li> <li>a course project included creating a simple imperative language and a verified compiler to WASM, however <em>this post focuses on defining verified semantics for the subset of WASM</em> used in this project.</li> <li>a sample of a simple WASM program can be seen below</li>`,K,I,Us=`<pre class="shiki gruvbox" style="background-color:#292828;color:#d4be98" tabindex="0"><code><span class="line"><span style="color:#D4BE98">(</span><span style="color:#7DAEA3">module</span></span>
<span class="line"><span style="color:#D4BE98">    (</span><span style="color:#7DAEA3">func</span><span style="color:#D4BE98"> (</span><span style="color:#7DAEA3">export</span><span style="color:#D8A657"> "_start"</span><span style="color:#D4BE98">) (</span><span style="color:#7DAEA3">result</span><span style="color:#7DAEA3"> i32</span><span style="color:#D4BE98">)</span></span>
<span class="line"><span style="color:#928374;font-style:italic">    ;; load 80 onto the stack</span></span>
<span class="line"><span style="color:#7DAEA3">    i32</span><span style="color:#E78A4E">.const</span><span style="color:#D3869B"> 80</span></span>
<span class="line"><span style="color:#928374;font-style:italic">    ;; load 10 onto the stack</span></span>
<span class="line"><span style="color:#7DAEA3">    i32</span><span style="color:#E78A4E">.const</span><span style="color:#D3869B"> 10</span></span>
<span class="line"><span style="color:#928374;font-style:italic">    ;; divide</span></span>
<span class="line"><span style="color:#7DAEA3">    i32</span><span style="color:#E78A4E">.div_u</span></span>
<span class="line"><span style="color:#928374;font-style:italic">    ;; return the last value of the stack [8]</span></span>
<span class="line"><span style="color:#EA6962">    return</span></span>
<span class="line"><span style="color:#D4BE98">    )</span></span>
<span class="line"><span style="color:#D4BE98">)</span></span></code></pre>`,C,u,Bs='<a aria-hidden="true" tabindex="-1" href="#lean4"><span class="icon icon-link"></span></a>Lean4',Q,b,As=`<li><strong>Lean</strong> is what is called a <em>proof assistant</em></li> <li>this means that it won’t prove things for you, but that you can use it to prove things. 
<ul><li>ie it has functions / utilities for creating theorems and then incrementally proving them.</li></ul></li> <li>Lean is also a great functional language with all of the features that you would expect out of a modern functional first language.
<ul><li>macros</li> <li>pattern matching</li> <li>type classes</li> <li>dependent types</li></ul></li> <li>the language is written in C++. Your proofs (theories) and functions compile down to a performant binary.</li> <li>from the lean website
<blockquote><p>Lean is a functional programming language that makes it easy to write correct and maintainable code. You can also use Lean as an interactive theorem prover.</p></blockquote></li> <li>for the last several decades the Coq proof assistant has dominated the programming language research landscape. However, Lean has taken hold in the mathematics community in the last few years and it’s my hope that it can start taking over PL as well!</li>`,X,h,xs='<a aria-hidden="true" tabindex="-1" href="#nix-flakes"><span class="icon icon-link"></span></a>Nix Flakes',ss,_,ks=`<li>because Lean is relatively new and the developers have stated that <em>there will be breaking changes</em> I decided to use Nix to create reproducible environments.</li> <li>I am using <em>Nix Flakes</em> to create a <em>devshell</em> where I have pinned versions of a package installed and loaded into a new shell environment. Think virtual environments in python. 
<ul><li>your first devshell will use a good deal of storage (1G) because Nix adds its versions of common core utils. However, every dev shell created after will use the cached versions of these core utils.</li></ul></li> <li>the shell is instantiated with <code>nix develop</code></li>`,as,N,Ws=`<pre class="shiki gruvbox" style="background-color:#292828;color:#d4be98" tabindex="0"><code><span class="line"><span style="color:#928374;font-style:italic"># This flake was initially generated by fh, the CLI for FlakeHub (version 0.1.18)</span></span>
<span class="line"><span style="color:#D4BE98">&#123;</span></span>
<span class="line"><span style="color:#928374;font-style:italic">  # A helpful description of your flake</span></span>
<span class="line"><span style="color:#D8A657">  description</span><span style="color:#E78A4E"> =</span><span style="color:#D4BE98"> "</span><span style="color:#D8A657">LeanEnv</span><span style="color:#D4BE98">"</span><span style="color:#D4BE98">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#928374;font-style:italic">  # Flake inputs</span></span>
<span class="line"><span style="color:#D8A657">  inputs</span><span style="color:#E78A4E"> =</span><span style="color:#D4BE98"> &#123;</span></span>
<span class="line"><span style="color:#D8A657">      nixpkgs</span><span style="color:#D4BE98">.</span><span style="color:#D8A657">url</span><span style="color:#E78A4E"> =</span><span style="color:#D4BE98"> "</span><span style="color:#D8A657">github:NixOS/nixpkgs/nixos-unstable</span><span style="color:#D4BE98">"</span><span style="color:#D4BE98">; </span><span style="color:#928374;font-style:italic"># package repo</span></span>
<span class="line"><span style="color:#D4BE98">  &#125;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#928374;font-style:italic">  # Flake outputs that other flakes can use</span></span>
<span class="line"><span style="color:#D8A657">  outputs</span><span style="color:#E78A4E"> =</span><span style="color:#D4BE98"> &#123; self</span><span style="color:#E78A4E">,</span><span style="color:#D4BE98"> nixpkgs &#125;:</span></span>
<span class="line"><span style="color:#EA6962">    let</span></span>
<span class="line"><span style="color:#928374;font-style:italic">      # Helpers for producing system-specific outputs</span></span>
<span class="line"><span style="color:#D8A657">      supportedSystems</span><span style="color:#E78A4E"> =</span><span style="color:#D4BE98"> [ </span><span style="color:#D4BE98">"</span><span style="color:#D8A657">x86_64-linux</span><span style="color:#D4BE98">"</span><span style="color:#D4BE98"> "</span><span style="color:#D8A657">aarch64-darwin</span><span style="color:#D4BE98">"</span><span style="color:#D4BE98"> ];</span></span>
<span class="line"><span style="color:#D8A657">      forEachSupportedSystem</span><span style="color:#E78A4E"> =</span><span style="color:#D4BE98"> f: nixpkgs</span><span style="color:#E78A4E">.</span><span style="color:#D4BE98">lib</span><span style="color:#E78A4E">.</span><span style="color:#D4BE98">genAttrs supportedSystems (system: f &#123;</span></span>
<span class="line"><span style="color:#D8A657">        pkgs</span><span style="color:#E78A4E"> =</span><span style="color:#A9B665"> import</span><span style="color:#D4BE98"> nixpkgs &#123; </span><span style="color:#EA6962">inherit</span><span style="color:#D8A657"> system</span><span style="color:#D4BE98">; &#125;;</span></span>
<span class="line"><span style="color:#D4BE98">      &#125;);</span></span>
<span class="line"><span style="color:#EA6962">    in</span><span style="color:#D4BE98"> &#123;</span></span>
<span class="line"><span style="color:#928374;font-style:italic">      # Development environments</span></span>
<span class="line"><span style="color:#D8A657">      devShells</span><span style="color:#E78A4E"> =</span><span style="color:#D4BE98"> forEachSupportedSystem (&#123; pkgs &#125;: &#123;</span></span>
<span class="line"><span style="color:#D8A657">        default</span><span style="color:#E78A4E"> =</span><span style="color:#D4BE98"> pkgs</span><span style="color:#E78A4E">.</span><span style="color:#D4BE98">mkShell &#123;</span></span>
<span class="line"><span style="color:#928374;font-style:italic">          # Pinned packages available in the environment</span></span>
<span class="line"><span style="color:#D8A657">          buildInputs</span><span style="color:#E78A4E"> =</span><span style="color:#EA6962"> with</span><span style="color:#D4BE98"> pkgs; [</span></span>
<span class="line"><span style="color:#D4BE98">            lean4</span></span>
<span class="line"><span style="color:#D4BE98">          ];</span></span>
<span class="line"><span style="color:#D4BE98">        &#125;;</span></span>
<span class="line"><span style="color:#D4BE98">      &#125;);</span></span>
<span class="line"><span style="color:#D4BE98">    &#125;;</span></span>
<span class="line"><span style="color:#D4BE98">&#125;</span></span></code></pre>`,j,f,gs='<a aria-hidden="true" tabindex="-1" href="#project-outline"><span class="icon icon-link"></span></a>Project Outline',ns,L,ws=`<li>define our context, the stack and state.</li> <li>define the syntax of our language.</li> <li>define the semantics of our language.</li> <li>prove our semantics are deterministic
<ul><li>same program with the same initial state results in the same end state</li></ul></li>`,ls,H,bs="<li>most of the explanation lives in the comments of the code I’m showing below.</li>",es,d,_s='<a aria-hidden="true" tabindex="-1" href="#state--stack"><span class="icon icon-link"></span></a>state &amp; stack',ts,F,zs=`<pre class="shiki gruvbox" style="background-color:#292828;color:#d4be98" tabindex="0"><code><span class="line"><span style="color:#928374;font-style:italic">/-! </span></span>
<span class="line"><span style="color:#928374;font-style:italic">- for Stack state is defined as a function from a string to an int</span></span>
<span class="line"><span style="color:#928374;font-style:italic">  - in essence this is a **total map**</span></span>
<span class="line"><span style="color:#928374;font-style:italic">  - we map strings to integer values</span></span>
<span class="line"><span style="color:#928374;font-style:italic">- we explicitly define &#96;state&#96; and &#96;empty_state&#96;</span></span>
<span class="line"><span style="color:#928374;font-style:italic">- we create custom notation for updating the *state map*</span></span>
<span class="line"><span style="color:#928374;font-style:italic">  - &#96;∀ (st : state) (v : String) (x : Int), st[v !-> x]&#96;</span></span>
<span class="line"><span style="color:#928374;font-style:italic">-/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#928374;font-style:italic">/-! Define state as a function from String to Int -/</span></span>
<span class="line"><span style="color:#EA6962">def</span><span style="color:#A9B665"> state</span><span style="color:#D4BE98"> : </span><span style="color:#7DAEA3">Type</span><span style="color:#D4BE98"> :=</span></span>
<span class="line"><span style="color:#D4BE98">  String → Int</span></span>
<span class="line"></span>
<span class="line"><span style="color:#928374;font-style:italic">/-! Define empty state -/</span></span>
<span class="line"><span style="color:#EA6962">def</span><span style="color:#A9B665"> empty_state</span><span style="color:#D4BE98"> : state := λ _ => </span><span style="color:#D3869B">0</span><span style="color:#D4BE98"> -- the lambda defines a lambda function</span></span>
<span class="line"></span>
<span class="line"><span style="color:#928374;font-style:italic">/-! Provide a mechanism to update state -/</span></span>
<span class="line"><span style="color:#EA6962">def</span><span style="color:#A9B665"> state.update</span><span style="color:#D4BE98"> (x : String) (v : Int) (s : state) : state :=</span></span>
<span class="line"><span style="color:#D4BE98">  λ x' => </span><span style="color:#EA6962">if</span><span style="color:#D4BE98"> x' = x </span><span style="color:#EA6962">then</span><span style="color:#D4BE98"> v </span><span style="color:#EA6962">else</span><span style="color:#D4BE98"> s x'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#928374;font-style:italic">/-! Create custom notation for updating state</span></span>
<span class="line"><span style="color:#928374;font-style:italic">    here we are using Lean's macro system to augment its syntax</span></span>
<span class="line"><span style="color:#928374;font-style:italic">-/</span></span>
<span class="line"><span style="color:#EA6962">macro</span><span style="color:#D4BE98"> s:term </span><span style="color:#D8A657">"["</span><span style="color:#D4BE98"> x:term </span><span style="color:#D8A657">"!->"</span><span style="color:#D4BE98"> v:term </span><span style="color:#D8A657">"]"</span><span style="color:#D4BE98"> : term =></span></span>
<span class="line"><span style="color:#D4BE98">  &#96;(state.update $x $v $s)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EA6962">#print</span><span style="color:#D4BE98"> empty_state -- </span><span style="color:#EA6962">#print</span><span style="color:#D4BE98"> and </span><span style="color:#EA6962">#eval</span><span style="color:#D4BE98"> give you real-time feedback when </span><span style="color:#EA6962">in</span><span style="color:#D4BE98"> an IDE / text editor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EA6962">def</span><span style="color:#A9B665"> state_ex</span><span style="color:#D4BE98"> := empty_state[</span><span style="color:#D8A657">"x"</span><span style="color:#D4BE98"> !-> </span><span style="color:#D3869B">10</span><span style="color:#D4BE98">][</span><span style="color:#D8A657">"y"</span><span style="color:#D4BE98"> !-> </span><span style="color:#D3869B">5</span><span style="color:#D4BE98">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EA6962">#eval</span><span style="color:#D4BE98"> (state_ex </span><span style="color:#D8A657">"x"</span><span style="color:#D4BE98">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#928374;font-style:italic">/-! Define stack and empty stack</span></span>
<span class="line"><span style="color:#928374;font-style:italic">    a stack is essentially a linked list so we can use the default 'List' from the standard lib</span></span>
<span class="line"><span style="color:#928374;font-style:italic">-/</span></span>
<span class="line"><span style="color:#EA6962">def</span><span style="color:#A9B665"> stack</span><span style="color:#D4BE98"> := List Int</span></span>
<span class="line"><span style="color:#EA6962">def</span><span style="color:#A9B665"> empty_stack</span><span style="color:#D4BE98"> : List Int := []</span></span></code></pre>`,P,E,Ls='<a aria-hidden="true" tabindex="-1" href="#syntax"><span class="icon icon-link"></span></a>Syntax',ps,M,Hs=`<li>Syntax is how a program looks (kindof), it is the way we write our code in a language.</li> <li>for the syntax we will use Backus Naur Form along with Lean’s inductive types.
<ul><li><em>inductive types</em> can be thought of as algebraic data types in languages like Ocaml, Haskell, etc…</li></ul></li>`,os,D,Ms='<a aria-hidden="true" tabindex="-1" href="#bnf"><span class="icon icon-link"></span></a>BNF',is,q,Os=`<pre class="shiki gruvbox" style="background-color:#292828;color:#d4be98" tabindex="0"><code><span class="line"><span style="color:#928374;font-style:italic">/-! Defining syntax with BNF</span></span>
<span class="line"><span style="color:#928374;font-style:italic">        Instr := const Z</span></span>
<span class="line"><span style="color:#928374;font-style:italic">          | binop</span></span>
<span class="line"><span style="color:#928374;font-style:italic">          | load String</span></span>
<span class="line"><span style="color:#928374;font-style:italic">          | set String</span></span>
<span class="line"></span>
<span class="line"><span style="color:#928374;font-style:italic">        Binop := add</span></span>
<span class="line"><span style="color:#928374;font-style:italic">          | minus</span></span>
<span class="line"><span style="color:#928374;font-style:italic">          | mult</span></span>
<span class="line"><span style="color:#928374;font-style:italic">          | div</span></span>
<span class="line"><span style="color:#928374;font-style:italic">-/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#928374;font-style:italic">/-! Define all binary operations -/</span></span>
<span class="line"><span style="color:#EA6962">inductive</span><span style="color:#A9B665"> binop</span><span style="color:#D4BE98"> : </span><span style="color:#7DAEA3">Type</span><span style="color:#EA6962"> where</span></span>
<span class="line"><span style="color:#D4BE98">  | B_Add</span></span>
<span class="line"><span style="color:#D4BE98">  | B_Minus</span></span>
<span class="line"><span style="color:#D4BE98">  | B_Mult</span></span>
<span class="line"><span style="color:#D4BE98">  | B_Div</span></span>
<span class="line"></span>
<span class="line"><span style="color:#928374;font-style:italic">/-! Define all instructions -/</span></span>
<span class="line"><span style="color:#EA6962">inductive</span><span style="color:#A9B665"> inst</span><span style="color:#D4BE98"> : </span><span style="color:#7DAEA3">Type</span><span style="color:#EA6962"> where</span></span>
<span class="line"><span style="color:#D4BE98">  | Const (i: Int)</span></span>
<span class="line"><span style="color:#D4BE98">  | Binop (op : binop)</span></span>
<span class="line"><span style="color:#D4BE98">  | Set   (v : String)</span></span>
<span class="line"><span style="color:#D4BE98">  | Load  (v : String)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#928374;font-style:italic">/-! Tell Lean how to represent these types so we can see output of #print and #eval -/</span></span>
<span class="line"><span style="color:#EA6962">instance</span><span style="color:#D4BE98"> : Repr binop </span><span style="color:#EA6962">where</span></span>
<span class="line"><span style="color:#D4BE98">  reprPrec</span></span>
<span class="line"><span style="color:#D4BE98">    | .B_Add, _ => </span><span style="color:#D8A657">"B_Add"</span></span>
<span class="line"><span style="color:#D4BE98">    | .B_Minus, _ => </span><span style="color:#D8A657">"B_Minus"</span></span>
<span class="line"><span style="color:#D4BE98">    | .B_Mult, _ => </span><span style="color:#D8A657">"B_Mult"</span></span>
<span class="line"><span style="color:#D4BE98">    | .B_Div, _ => </span><span style="color:#D8A657">"B_Div"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EA6962">instance</span><span style="color:#D4BE98"> : Repr inst </span><span style="color:#EA6962">where</span></span>
<span class="line"><span style="color:#D4BE98">  reprPrec</span></span>
<span class="line"><span style="color:#D4BE98">    | .Const i, _ => </span><span style="color:#D8A657">"(Const "</span><span style="color:#D4BE98"> ++ repr i ++ </span><span style="color:#D8A657">")"</span></span>
<span class="line"><span style="color:#D4BE98">    | .Binop op, _ => </span><span style="color:#D8A657">"(Binop "</span><span style="color:#D4BE98"> ++ repr op ++ </span><span style="color:#D8A657">")"</span></span>
<span class="line"><span style="color:#D4BE98">    | .Set v, _ => </span><span style="color:#D8A657">"(Set "</span><span style="color:#D4BE98"> ++ repr v ++ </span><span style="color:#D8A657">")"</span></span>
<span class="line"><span style="color:#D4BE98">    | .Load v, _ => </span><span style="color:#D8A657">"(Load "</span><span style="color:#D4BE98"> ++ repr v ++ </span><span style="color:#D8A657">")"</span></span></code></pre>`,U,m,Ts='<a aria-hidden="true" tabindex="-1" href="#semantics"><span class="icon icon-link"></span></a>Semantics',cs,T,Ss="<li>the semantics of a language define what something means, if syntax is the structure then semantics is the meaning.</li> <li>for Stack we are using big step semantics, meaning the evaluation function we define doesn’t incrementally evaluate an expression but evaluates the whole thing in one go.</li> <li>to define our semantic rules we show a series of <strong>inference rules</strong> which will represented by <strong>inductive relations</strong> which are to <strong>inductive types</strong> what functions are to types, but in the logical world.</li>",rs,v,Is='<a aria-hidden="true" tabindex="-1" href="#rules-for-evaluation"><span class="icon icon-link"></span></a>Rules for evaluation',ys,W,Rs=`<pre class="shiki gruvbox" style="background-color:#292828;color:#d4be98" tabindex="0"><code><span class="line"><span>s  := stack</span></span>
<span class="line"><span>st := state</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>                         s = [ y :: x :: sx ]</span></span>
<span class="line"><span>         --------------------------------------------------------- (binary operation)</span></span>
<span class="line"><span>          ([y :: x :: sx], st) =[binop op]=> ((op x y) :: sx, st)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>                         s = [ x :: sx ]   v : String</span></span>
<span class="line"><span>          ---------------------------------------------------- (set operation)</span></span>
<span class="line"><span>             ([x :: sx], st) =[set v]=> ([sx], st[v !-> x])</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>                          s : stack    st v = x</span></span>
<span class="line"><span>          ---------------------------------------------------- (load operation)</span></span>
<span class="line"><span>                   (s, st) =[load v]=> ((x :: s), st)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>                                  x : Int</span></span>
<span class="line"><span>               --------------------------------------------- (Const)</span></span>
<span class="line"><span>                    (s, st) =[Const x] => ((x :: s), st)</span></span></code></pre>`,z,B,Cs='<a aria-hidden="true" tabindex="-1" href="#functions-for-evaluation"><span class="icon icon-link"></span></a>Functions for evaluation',us,O,$s=`<pre class="shiki gruvbox" style="background-color:#292828;color:#d4be98" tabindex="0"><code><span class="line"><span style="color:#928374;font-style:italic">/-! Evaluation function for binary operations -/</span></span>
<span class="line"><span style="color:#EA6962">def</span><span style="color:#A9B665"> bo_eval</span><span style="color:#D4BE98"> (op : binop) (x y : Int) : Int :=</span></span>
<span class="line"><span style="color:#EA6962">  match</span><span style="color:#D4BE98"> op </span><span style="color:#EA6962">with</span></span>
<span class="line"><span style="color:#D4BE98">  | .B_Add    => x + y</span></span>
<span class="line"><span style="color:#D4BE98">  | .B_Minus  => x - y</span></span>
<span class="line"><span style="color:#D4BE98">  | .B_Mult   => x * y</span></span>
<span class="line"><span style="color:#D4BE98">  | .B_Div    => x / y</span></span></code></pre>`,R,A,Ns='<a aria-hidden="true" tabindex="-1" href="#inductive-relations-for-evaluation"><span class="icon icon-link"></span></a>Inductive relations for evaluation',hs,$,Ys=`<pre class="shiki gruvbox" style="background-color:#292828;color:#d4be98" tabindex="0"><code><span class="line"><span style="color:#928374;font-style:italic">/-! Evaluation relation for a single instruction</span></span>
<span class="line"><span style="color:#928374;font-style:italic">    - how our language evaluates one instruction</span></span>
<span class="line"><span style="color:#928374;font-style:italic">    - we need cases for each possible type of instruction</span></span>
<span class="line"><span style="color:#928374;font-style:italic">    - our inductive relation can be thought of as a function that takes</span></span>
<span class="line"><span style="color:#928374;font-style:italic">      an instruction, a tuple of stack and state (evaluation context) and returns</span></span>
<span class="line"><span style="color:#928374;font-style:italic">      a new evaluation context and a Prop (this is what makes it an inductive relation)</span></span>
<span class="line"><span style="color:#928374;font-style:italic">    - Props are propositions and make this inductive relation a logical proposition, meaning</span></span>
<span class="line"><span style="color:#928374;font-style:italic">        we can think of our relation as a logical relation like 'if p then q' but in our case it would be</span></span>
<span class="line"><span style="color:#928374;font-style:italic">        - if instruction is x then y</span></span>
<span class="line"><span style="color:#928374;font-style:italic">        - we are showing that two evaluation contexts are 'related' by some instruction (hence the name inductive relation)</span></span>
<span class="line"><span style="color:#928374;font-style:italic">-/</span></span>
<span class="line"><span style="color:#EA6962">inductive</span><span style="color:#A9B665"> ieval</span><span style="color:#D4BE98"> : inst → (stack × state) → (stack × state) → </span><span style="color:#7DAEA3">Prop</span><span style="color:#EA6962"> where</span></span>
<span class="line"><span style="color:#D4BE98">  | I_Const: ∀ (n : Int) (s : stack) (st : state), -- declare an int</span></span>
<span class="line"><span style="color:#D4BE98">    ieval (.Const n) (s, st) ((n :: s), st)</span></span>
<span class="line"><span style="color:#D4BE98">  | I_Binop: ∀ (op : binop) (x y : Int) (s : stack) (st : state), -- perform a binary operation</span></span>
<span class="line"><span style="color:#D4BE98">    ieval (.Binop op) ((y :: x :: s), st) (((bo_eval op x y) :: s), st)</span></span>
<span class="line"><span style="color:#D4BE98">  | I_Set: ∀ (v : String) (x : Int) (s : stack) (st : state), -- set a string to a value </span><span style="color:#EA6962">in</span><span style="color:#D4BE98"> state</span></span>
<span class="line"><span style="color:#D4BE98">    ieval (.Set v) ((x :: s), st) (s, st[v !-> x])</span></span>
<span class="line"><span style="color:#D4BE98">  | I_Load : ∀ (v : String) (x : Int) (s : stack) (st : state), -- load a value </span><span style="color:#EA6962">from</span><span style="color:#D4BE98"> a string</span></span>
<span class="line"><span style="color:#D4BE98">    st v = x → ieval (.Load v) (s, st) ((x :: s), st)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#928374;font-style:italic">/-! Evaluation relation for a list of instructions</span></span>
<span class="line"><span style="color:#928374;font-style:italic">    this completes our evaluation relation as we can now evaluate a list of instructions</span></span>
<span class="line"><span style="color:#928374;font-style:italic">-/</span></span>
<span class="line"><span style="color:#EA6962">inductive</span><span style="color:#A9B665"> seval</span><span style="color:#D4BE98"> : List inst → (stack × state) → (stack × state) → </span><span style="color:#7DAEA3">Prop</span><span style="color:#EA6962"> where</span></span>
<span class="line"><span style="color:#D4BE98">  | NilI s:</span></span>
<span class="line"><span style="color:#D4BE98">    seval [] s s</span></span>
<span class="line"><span style="color:#D4BE98">  | ConsI i is s s1 s2 st st1 st2:</span></span>
<span class="line"><span style="color:#D4BE98">    ieval i (s, st) (s1, st1) →</span></span>
<span class="line"><span style="color:#D4BE98">    seval is (s1, st1) (s2, st2) →</span></span>
<span class="line"><span style="color:#D4BE98">    seval (i :: is) (s, st) (s2, st2)</span></span></code></pre>`,Y,x,js='<a aria-hidden="true" tabindex="-1" href="#determinism"><span class="icon icon-link"></span></a>Determinism',fs,S,Fs=`<li>now we get to the reason we used inductive types and relations, so we can <strong>prove stuff</strong>!</li> <li>we want to show that our language is deterministic, ie same inputs always results in the same outputs.</li> <li>to do this we can show that evaluating one instruction is deterministic and then use that proof to prove evaluating a list of instructions is deterministic.
<ul><li>this proof demonstrates how ‘clean’ Lean proofs are and they tend to resemble function definitions.</li></ul></li>`,ds,G,Gs=`<pre class="shiki gruvbox" style="background-color:#292828;color:#d4be98" tabindex="0"><code><span class="line"><span style="color:#928374;font-style:italic">/-! Show that the execution of one instruction is deterministic -/</span></span>
<span class="line"><span style="color:#EA6962">theorem</span><span style="color:#A9B665"> ieval_determ</span><span style="color:#D4BE98"> &#123;i s s1 s2 st st1 st2&#125;</span></span>
<span class="line"><span style="color:#D4BE98">  (hl : ieval i (s, st) (s1, st1)) -- left hypothesis</span></span>
<span class="line"><span style="color:#D4BE98">  (hr: ieval i (s, st) (s2, st2)): -- right hypothesis</span></span>
<span class="line"><span style="color:#D4BE98">  s1 = s2 ∧ st1 = st2 := -- hypothesis we want to prove, that </span><span style="color:#EA6962">end</span><span style="color:#D4BE98"> states and stacks are equivalent</span></span>
<span class="line"><span style="color:#EA6962">  by</span></span>
<span class="line"><span style="color:#D4BE98">    -- iterate over all possible instructions instruction</span></span>
<span class="line"><span style="color:#D4BE98">    cases hl</span></span>
<span class="line"><span style="color:#D4BE98">    case I_Const n =></span></span>
<span class="line"><span style="color:#D4BE98">      cases hr</span></span>
<span class="line"><span style="color:#D4BE98">      -- </span><span style="color:#EA6962">break</span><span style="color:#D4BE98"> apart the ∧ (logical and) and solve both sides</span></span>
<span class="line"><span style="color:#D4BE98">      repeat (any_goals (first | constructor | rfl))</span></span>
<span class="line"><span style="color:#D4BE98">    case I_Binop op x y s' =></span></span>
<span class="line"><span style="color:#D4BE98">      cases hr</span></span>
<span class="line"><span style="color:#D4BE98">      repeat (any_goals (first | constructor | rfl))</span></span>
<span class="line"><span style="color:#D4BE98">    case I_Set v x =></span></span>
<span class="line"><span style="color:#D4BE98">      cases hr</span></span>
<span class="line"><span style="color:#D4BE98">      repeat (any_goals (first | constructor | rfl))</span></span>
<span class="line"><span style="color:#D4BE98">    case I_Load v x h =></span></span>
<span class="line"><span style="color:#D4BE98">      -- </span><span style="color:#EA6962">match</span><span style="color:#D4BE98"> against cases of the right hypothesis</span></span>
<span class="line"><span style="color:#D4BE98">      cases hr</span></span>
<span class="line"><span style="color:#D4BE98">      case I_Load x' h' =></span></span>
<span class="line"><span style="color:#D4BE98">        -- h  : st v = x</span></span>
<span class="line"><span style="color:#D4BE98">        -- h' : st v = x'</span></span>
<span class="line"><span style="color:#D4BE98">        -- ⊢ ((x :: s) = (x' :: s)) ∧ st = st</span></span>
<span class="line"><span style="color:#D4BE98">        rw [←h, h'] -- rewrite h and h'</span></span>
<span class="line"><span style="color:#D4BE98">        repeat (any_goals (first | constructor | rfl)) -- </span><span style="color:#EA6962">try</span><span style="color:#D4BE98"> to solve any goal </span><span style="color:#EA6962">with</span><span style="color:#D4BE98"> reflection</span></span>
<span class="line"></span>
<span class="line"><span style="color:#928374;font-style:italic">/-! Show that executing a sequence of instructions is deterministic -/</span></span>
<span class="line"><span style="color:#EA6962">theorem</span><span style="color:#A9B665"> seval_determ</span><span style="color:#D4BE98"> &#123;i s s1 s2 st st1 st2&#125;</span></span>
<span class="line"><span style="color:#D4BE98">  (hl : seval i (s, st) (s1, st1))</span></span>
<span class="line"><span style="color:#D4BE98">  (hr : seval i (s, st) (s2, st2)):</span></span>
<span class="line"><span style="color:#D4BE98">  s1 = s2 ∧ st1 = st2 :=</span></span>
<span class="line"><span style="color:#EA6962">  by</span></span>
<span class="line"><span style="color:#D4BE98">    -- </span><span style="color:#EA6962">match</span><span style="color:#D4BE98"> against all possible cases </span><span style="color:#EA6962">for</span><span style="color:#D4BE98"> the left hypothesis</span></span>
<span class="line"><span style="color:#D4BE98">    cases hl</span></span>
<span class="line"><span style="color:#D4BE98">    case NilI =></span></span>
<span class="line"><span style="color:#D4BE98">      cases hr</span></span>
<span class="line"><span style="color:#D4BE98">      case NilI =></span></span>
<span class="line"><span style="color:#D4BE98">        exact ⟨rfl, rfl⟩ -- apply reflection to both branches of the logical and</span></span>
<span class="line"><span style="color:#D4BE98">    case ConsI i is s1' st1' hi hs =></span></span>
<span class="line"><span style="color:#D4BE98">      -- </span><span style="color:#EA6962">match</span><span style="color:#D4BE98"> against cases of the right hypothesis</span></span>
<span class="line"><span style="color:#D4BE98">      cases hr</span></span>
<span class="line"><span style="color:#D4BE98">      case ConsI s'' st1'' hi' hs' =></span></span>
<span class="line"><span style="color:#D4BE98">        -- introduce and prove a new hypothesis, 'h1'</span></span>
<span class="line"><span style="color:#EA6962">        have</span><span style="color:#D4BE98"> h1 : s1' = s'' ∧ st1' = st1'' := </span><span style="color:#EA6962">by</span></span>
<span class="line"><span style="color:#D4BE98">          apply ieval_determ -- apply the </span><span style="color:#EA6962">theorem</span><span style="color:#A9B665"> that</span><span style="color:#A9B665"> one</span><span style="color:#A9B665"> instruction</span><span style="color:#A9B665"> is</span><span style="color:#A9B665"> deterministic</span></span>
<span class="line"><span style="color:#A9B665">          exact</span><span style="color:#A9B665"> hi</span></span>
<span class="line"><span style="color:#A9B665">          exact</span><span style="color:#A9B665"> hi'</span></span>
<span class="line"><span style="color:#A9B665">        let</span><span style="color:#D4BE98"> ⟨</span><span style="color:#A9B665">h1l,</span><span style="color:#A9B665"> h1r⟩</span><span style="color:#D4BE98"> := h1 -- </span><span style="color:#EA6962">break</span><span style="color:#D4BE98"> apart logical and </span><span style="color:#EA6962">in</span><span style="color:#D4BE98"> h1</span></span>
<span class="line"><span style="color:#D4BE98">        subst h1r</span></span>
<span class="line"><span style="color:#D4BE98">        subst h1l</span></span>
<span class="line"><span style="color:#D4BE98">        apply seval_determ</span></span>
<span class="line"><span style="color:#D4BE98">        exact hs</span></span>
<span class="line"><span style="color:#D4BE98">        exact hs'</span></span></code></pre>`,V;return{c(){r=i("nav"),r.innerHTML=Ds,Z=t(),y=i("h1"),y.innerHTML=ms,J=t(),w=i("ul"),w.innerHTML=vs,K=t(),I=new g(!1),C=t(),u=i("h2"),u.innerHTML=Bs,Q=t(),b=i("ul"),b.innerHTML=As,X=t(),h=i("h2"),h.innerHTML=xs,ss=t(),_=i("ul"),_.innerHTML=ks,as=t(),N=new g(!1),j=t(),f=i("h2"),f.innerHTML=gs,ns=t(),L=i("ol"),L.innerHTML=ws,ls=t(),H=i("ul"),H.innerHTML=bs,es=t(),d=i("h1"),d.innerHTML=_s,ts=t(),F=new g(!1),P=t(),E=i("h1"),E.innerHTML=Ls,ps=t(),M=i("ul"),M.innerHTML=Hs,os=t(),D=i("h2"),D.innerHTML=Ms,is=t(),q=new g(!1),U=t(),m=i("h1"),m.innerHTML=Ts,cs=t(),T=i("ul"),T.innerHTML=Ss,rs=t(),v=i("h2"),v.innerHTML=Is,ys=t(),W=new g(!1),z=t(),B=i("h2"),B.innerHTML=Cs,us=t(),O=new g(!1),R=t(),A=i("h2"),A.innerHTML=Ns,hs=t(),$=new g(!1),Y=t(),x=i("h1"),x.innerHTML=js,fs=t(),S=i("ul"),S.innerHTML=Fs,ds=t(),G=new g(!1),V=Ps(),this.h()},l(s){r=p(s,"NAV",{class:!0,"data-svelte-h":!0}),o(r)!=="svelte-fyfwyq"&&(r.innerHTML=Ds),Z=e(s),y=p(s,"H1",{id:!0,"data-svelte-h":!0}),o(y)!=="svelte-17movxe"&&(y.innerHTML=ms),J=e(s),w=p(s,"UL",{"data-svelte-h":!0}),o(w)!=="svelte-1latl1p"&&(w.innerHTML=vs),K=e(s),I=k(s,!1),C=e(s),u=p(s,"H2",{id:!0,"data-svelte-h":!0}),o(u)!=="svelte-149idvi"&&(u.innerHTML=Bs),Q=e(s),b=p(s,"UL",{"data-svelte-h":!0}),o(b)!=="svelte-m9gsdx"&&(b.innerHTML=As),X=e(s),h=p(s,"H2",{id:!0,"data-svelte-h":!0}),o(h)!=="svelte-tatehx"&&(h.innerHTML=xs),ss=e(s),_=p(s,"UL",{"data-svelte-h":!0}),o(_)!=="svelte-14k7pbb"&&(_.innerHTML=ks),as=e(s),N=k(s,!1),j=e(s),f=p(s,"H2",{id:!0,"data-svelte-h":!0}),o(f)!=="svelte-th7rsh"&&(f.innerHTML=gs),ns=e(s),L=p(s,"OL",{"data-svelte-h":!0}),o(L)!=="svelte-12nu4x2"&&(L.innerHTML=ws),ls=e(s),H=p(s,"UL",{"data-svelte-h":!0}),o(H)!=="svelte-1dob9jo"&&(H.innerHTML=bs),es=e(s),d=p(s,"H1",{id:!0,"data-svelte-h":!0}),o(d)!=="svelte-1kwyavr"&&(d.innerHTML=_s),ts=e(s),F=k(s,!1),P=e(s),E=p(s,"H1",{id:!0,"data-svelte-h":!0}),o(E)!=="svelte-14ham47"&&(E.innerHTML=Ls),ps=e(s),M=p(s,"UL",{"data-svelte-h":!0}),o(M)!=="svelte-zradyx"&&(M.innerHTML=Hs),os=e(s),D=p(s,"H2",{id:!0,"data-svelte-h":!0}),o(D)!=="svelte-1jk13zo"&&(D.innerHTML=Ms),is=e(s),q=k(s,!1),U=e(s),m=p(s,"H1",{id:!0,"data-svelte-h":!0}),o(m)!=="svelte-1eqrzdx"&&(m.innerHTML=Ts),cs=e(s),T=p(s,"UL",{"data-svelte-h":!0}),o(T)!=="svelte-zyzuy0"&&(T.innerHTML=Ss),rs=e(s),v=p(s,"H2",{id:!0,"data-svelte-h":!0}),o(v)!=="svelte-110u6le"&&(v.innerHTML=Is),ys=e(s),W=k(s,!1),z=e(s),B=p(s,"H2",{id:!0,"data-svelte-h":!0}),o(B)!=="svelte-r7ckm0"&&(B.innerHTML=Cs),us=e(s),O=k(s,!1),R=e(s),A=p(s,"H2",{id:!0,"data-svelte-h":!0}),o(A)!=="svelte-wt6t13"&&(A.innerHTML=Ns),hs=e(s),$=k(s,!1),Y=e(s),x=p(s,"H1",{id:!0,"data-svelte-h":!0}),o(x)!=="svelte-17myd5t"&&(x.innerHTML=js),fs=e(s),S=p(s,"UL",{"data-svelte-h":!0}),o(S)!=="svelte-14042g5"&&(S.innerHTML=Fs),ds=e(s),G=k(s,!1),V=Ps(),this.h()},h(){c(r,"class","toc"),c(y,"id","what-is-a-stack-language"),I.a=C,c(u,"id","lean4"),c(h,"id","nix-flakes"),N.a=j,c(f,"id","project-outline"),c(d,"id","state--stack"),F.a=P,c(E,"id","syntax"),c(D,"id","bnf"),q.a=U,c(m,"id","semantics"),c(v,"id","rules-for-evaluation"),W.a=z,c(B,"id","functions-for-evaluation"),O.a=R,c(A,"id","inductive-relations-for-evaluation"),$.a=Y,c(x,"id","determinism"),G.a=V},m(s,a){l(s,r,a),l(s,Z,a),l(s,y,a),l(s,J,a),l(s,w,a),l(s,K,a),I.m(Us,s,a),l(s,C,a),l(s,u,a),l(s,Q,a),l(s,b,a),l(s,X,a),l(s,h,a),l(s,ss,a),l(s,_,a),l(s,as,a),N.m(Ws,s,a),l(s,j,a),l(s,f,a),l(s,ns,a),l(s,L,a),l(s,ls,a),l(s,H,a),l(s,es,a),l(s,d,a),l(s,ts,a),F.m(zs,s,a),l(s,P,a),l(s,E,a),l(s,ps,a),l(s,M,a),l(s,os,a),l(s,D,a),l(s,is,a),q.m(Os,s,a),l(s,U,a),l(s,m,a),l(s,cs,a),l(s,T,a),l(s,rs,a),l(s,v,a),l(s,ys,a),W.m(Rs,s,a),l(s,z,a),l(s,B,a),l(s,us,a),O.m($s,s,a),l(s,R,a),l(s,A,a),l(s,hs,a),$.m(Ys,s,a),l(s,Y,a),l(s,x,a),l(s,fs,a),l(s,S,a),l(s,ds,a),G.m(Gs,s,a),l(s,V,a)},p:Es,i:Es,o:Es,d(s){s&&(n(r),n(Z),n(y),n(J),n(w),n(K),I.d(),n(C),n(u),n(Q),n(b),n(X),n(h),n(ss),n(_),n(as),N.d(),n(j),n(f),n(ns),n(L),n(ls),n(H),n(es),n(d),n(ts),F.d(),n(P),n(E),n(ps),n(M),n(os),n(D),n(is),q.d(),n(U),n(m),n(cs),n(T),n(rs),n(v),n(ys),W.d(),n(z),n(B),n(us),O.d(),n(R),n(A),n(hs),$.d(),n(Y),n(x),n(fs),n(S),n(ds),n(V),G.d())}}}const Qs={title:"Defining a simple stack langauge with Lean4",date:"12-19-24"},{title:aa,date:na}=Qs;class la extends Zs{constructor(r){super(),Js(this,r,null,Ks,Vs,{})}}export{la as default,Qs as metadata};
