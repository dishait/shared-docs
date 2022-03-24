import{r as l,o as c,c as u,b as a,w as n,F as i,e as p,a as s,d as e}from"./app.a8dc22f4.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const d={},g=p(`<h1 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h1><h2 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h2><ol><li>\u521B\u5EFA <code>package.json</code>\uFF0C\u5E76\u8865\u5145\u4EE5\u4E0B\u4FE1\u606F</li></ol><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxi dev&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxi build&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxi build &amp;&amp; node .output/server/index.mjs&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;nuxt3&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>\u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA <code>app.vue</code></li></ol><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- app.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Hello, World!!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ol start="3"><li>\u5B89\u88C5\u4F9D\u8D56</li></ol>`,7),h=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),e(`
`)])])],-1),k=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),e(` i
`)])])],-1),_=s("ol",{start:"4"},[s("li",null,"\u542F\u52A8\u9879\u76EE (\u5F00\u53D1\u73AF\u5883)")],-1),f=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),e(` dev
`)])])],-1),m=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),e(` run dev
`)])])],-1),v=s("ol",{start:"5"},[s("li",null,"\u6253\u5305\u9879\u76EE")],-1),b=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),e(` build
`)])])],-1),x=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),e(` run build
`)])])],-1),q=s("ol",{start:"6"},[s("li",null,"\u542F\u52A8\u9879\u76EE (\u751F\u4EA7\u73AF\u5883)")],-1),y=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),e(` start
`)])])],-1),j=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),e(` run start
`)])])],-1),C=p(`<br><br><h2 id="\u7C7B\u578B\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u58F0\u660E" aria-hidden="true">#</a> \u7C7B\u578B\u58F0\u660E</h2><p>\u5982\u679C\u4F60\u60F3\u8981\u5F00\u4E00\u4E2A <code>ts</code> \u9879\u76EE</p><p>\u8BF7\u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA <code>tsconfig.json</code></p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./.nuxt/tsconfig.json&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6);function G(N,V){const t=l("CodeGroupItem"),o=l("CodeGroup");return c(),u(i,null,[g,a(o,null,{default:n(()=>[a(t,{title:"yarn",active:""},{default:n(()=>[h]),_:1}),a(t,{title:"npm"},{default:n(()=>[k]),_:1})]),_:1}),_,a(o,null,{default:n(()=>[a(t,{title:"yarn",active:""},{default:n(()=>[f]),_:1}),a(t,{title:"npm"},{default:n(()=>[m]),_:1})]),_:1}),v,a(o,null,{default:n(()=>[a(t,{title:"yarn",active:""},{default:n(()=>[b]),_:1}),a(t,{title:"npm"},{default:n(()=>[x]),_:1})]),_:1}),q,a(o,null,{default:n(()=>[a(t,{title:"yarn",active:""},{default:n(()=>[y]),_:1}),a(t,{title:"npm"},{default:n(()=>[j]),_:1})]),_:1}),C],64)}var F=r(d,[["render",G]]);export{F as default};
