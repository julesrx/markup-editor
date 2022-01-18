import{r as p,w as f,c as v,t as w,m as k,a as h,v as _,o as i,b as l,F as y,d as b,e as M,f as x,g as T,h as c,i as L,j as $}from"./vendor.e40b4409.js";const S=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};S();var H=`# Marked - Markdown Parser

[Marked] lets you convert [Markdown] into HTML. Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML. This demo page will let you type anything you like and see how it gets converted. Live. No more waiting around.

## How To Use The Demo

1. Type in stuff on the left.
2. See the live updates on the right.

That's it. Pretty simple. There's also a drop-down option in the upper right to switch between various views:

- **Preview:** A live display of the generated HTML as it would render in a browser.
- **HTML Source:** The generated HTML before your browser makes it pretty.
- **Lexer Data:** What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:** A brief run-down of how to format things using markdown.

## Why Markdown?

It's easy. It's not overly bloated, unlike HTML. Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing? Either start changing stuff on the left or
[clear everything](/demo/?text=) with a simple click.

[marked]: https://github.com/markedjs/marked/
[markdown]: http://daringfireball.net/projects/markdown/
`;const d={markdown:"Markdown",textile:"Textile"},P=()=>{const n=p(localStorage.getItem("markup")||H);f(n,r=>localStorage.setItem("markup",r));const t=p(localStorage.getItem("mode")||d.markdown);f(t,r=>localStorage.setItem("mode",r));const a=v(()=>{if(!n.value)return"";switch(t.value){case d.markdown:default:return k(n.value);case d.textile:return w(n.value)}});return{markup:n,mode:t,html:a}};var u=P(),m=(n,t)=>{const a=n.__vccOpts||n;for(const[r,e]of t)a[r]=e;return a};const I={setup(){return{mode:u.mode,modes:d}}},N=["value"];function A(n,t,a,r,e,o){return h((i(),l("select",{class:"bg-dark-900 text-dark-50","onUpdate:modelValue":t[0]||(t[0]=s=>r.mode=s)},[(i(!0),l(y,null,b(r.modes,s=>(i(),l("option",{value:s},M(s),9,N))),256))],512)),[[_,r.mode]])}var E=m(I,[["render",A]]);const O={name:"Editor",components:{ModeSelection:E},setup(){return{markup:u.markup}}},V={class:"relative overflow-hidden"};function j(n,t,a,r,e,o){const s=L("ModeSelection");return i(),l("div",V,[h(T("textarea",{class:"bg-transparent resize-none p-5 h-full w-full","onUpdate:modelValue":t[0]||(t[0]=g=>r.markup=g)},null,512),[[x,r.markup]]),c(s,{class:"absolute bottom-0 right-0 mr-4 mb-4"})])}var D=m(O,[["render",j]]);const B={name:"Preview",setup(){return{html:u.html}}},F=["innerHTML"];function U(n,t,a,r,e,o){return i(),l("article",{innerHTML:r.html,class:"prose p-5 max-w-[none]"},null,8,F)}var R=m(B,[["render",U]]);const W={class:"grid grid-cols-2 h-screen divide-x divide-dark-500"},q={setup(n){return(t,a)=>(i(),l("main",W,[c(D),c(R)]))}};$(q).mount("#app");
