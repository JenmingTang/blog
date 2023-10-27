import{_ as r,r as t,o as c,c as u,b as n,d as i,w as a,e,f as d}from"./app-06860f67.js";const v={},o={class:"table-of-contents"},m=d('<h1 id="指南" tabindex="-1"><a class="header-anchor" href="#指南" aria-hidden="true">#</a> 指南</h1><h2 id="deploy" tabindex="-1"><a class="header-anchor" href="#deploy" aria-hidden="true">#</a> Deploy</h2><h3 id="npx-vuepress-build-clean-temp" tabindex="-1"><a class="header-anchor" href="#npx-vuepress-build-clean-temp" aria-hidden="true">#</a> npx vuepress build --clean-temp</h3><blockquote><p>npx vuepress build --clean-temp</p></blockquote>',4),b={id:"github-pages-with-github-actions-to-auto-deploy",tabindex:"-1"},p=n("a",{class:"header-anchor",href:"#github-pages-with-github-actions-to-auto-deploy","aria-hidden":"true"},"#",-1),h={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages",target:"_blank",rel:"noopener noreferrer"},g=d(`<div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>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


echo &quot;# blog&quot; &gt;&gt; README.md
git init
git add README.md
git commit -m &quot;first commit&quot;
git branch -M main
git remote add origin https://github.com/JenmingTang/blog.git
git push -u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git remote add origin https://github.com/JenmingTang/blog.git
git branch -M main
git push -u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getting-started-manually-install" tabindex="-1"><a class="header-anchor" href="#getting-started-manually-install" aria-hidden="true">#</a> Getting Started manually install</h2><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>mkdir vuepress-starter
cd vuepress-starter

git init
npm init

Step 3: Install VuePress locally
npm install -D vuepress@next

&quot;scripts&quot;: {
    &quot;docs:dev&quot;: &quot;vuepress dev docs&quot;,
    &quot;docs:build&quot;: &quot;vuepress build docs&quot;
  }


Step 5: Add the default temp and cache directory to .gitignore file
echo &#39;node_modules&#39; &gt;&gt; .gitignore
echo &#39;.temp&#39; &gt;&gt; .gitignore
echo &#39;.cache&#39; &gt;&gt; .gitignore


mkdir docs
echo &#39;# Hello VuePress&#39; &gt; docs/README.md



npm run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="auto-install" tabindex="-1"><a class="header-anchor" href="#auto-install" aria-hidden="true">#</a> auto install</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> install in your project</span>
npm install -D vuepress@next

<span class="token title important"><span class="token punctuation">#</span> create a markdown file</span>
echo &#39;# Hello VuePress&#39; &gt; README.md

<span class="token title important"><span class="token punctuation">#</span> start writing</span>
npx vuepress dev

<span class="token title important"><span class="token punctuation">#</span> build to static files</span>
npx vuepress build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面" tabindex="-1"><a class="header-anchor" href="#页面" aria-hidden="true">#</a> 页面</h2><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md

README.md 和 index.md 都会被转换成 index.html
想同时保留这两个文件，就可能会造成冲突。

生成的路由
  8080/docs/guide
  8080/docs/guide/getting-started
  8080/docs/contributing
  8080/docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="md" tabindex="-1"><a class="header-anchor" href="#md" aria-hidden="true">#</a> MD</h2><h3 id="语法扩展" tabindex="-1"><a class="header-anchor" href="#语法扩展" aria-hidden="true">#</a> 语法扩展</h3><h4 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 相对路径 --&gt;</span>
<span class="token url">[<span class="token content">首页</span>](<span class="token url">../README.md</span>)</span>  
<span class="token url">[<span class="token content">配置参考</span>](<span class="token url">../reference/config.md</span>)</span>  
<span class="token url">[<span class="token content">快速上手</span>](<span class="token url">./getting-started.md</span>)</span>  
<span class="token comment">&lt;!-- 绝对路径 --&gt;</span>
<span class="token url">[<span class="token content">指南</span>](<span class="token url">/zh/guide/README.md</span>)</span>  
<span class="token url">[<span class="token content">配置参考 &gt; markdown.links</span>](<span class="token url">/zh/reference/config.md#links</span>)</span>  
<span class="token comment">&lt;!-- URL --&gt;</span>
<span class="token url">[<span class="token content">GitHub</span>](<span class="token url">https://github.com</span>)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji</h4>`,14),k={href:"https://github.com/ikatyang/emoji-cheat-sheet",target:"_blank",rel:"noopener noreferrer"},f=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Usage
VuePress 2 已经发布 :tada: ！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 
当前页面的目录添加到 Markdown 内容
 --&gt;</span>
[[toc]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>行高亮
  行数范围： {5-8}
  多个单行： {4,7,9}
  组合： {4,7-13,16,23-27,40}

不显示行号
  :no-line-numbers 


用法，直接复制
  \`\`\`ts{1,6-8}:no-line-numbers
  import { defaultTheme, defineUserConfig } from &#39;vuepress&#39;

  export default defineUserConfig({
    title: &#39;你好， VuePress&#39;,

<span class="token code keyword">    theme: defaultTheme({
      logo: &#39;https://vuejs.org/images/logo.png&#39;,
    }),</span>
  })
// <span class="token comment">&lt;!-- \`\`\` --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="导入代码块" tabindex="-1"><a class="header-anchor" href="#导入代码块" aria-hidden="true">#</a> 导入代码块</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 最简单的语法 --&gt;</span>
@<span class="token url">[<span class="token content">code</span>](<span class="token url">../foo.js</span>)</span>


复杂的例子：
  导入 &#39;../foo.js&#39; 文件的第 3 行至第 10 行
  指定语言为 &#39;js&#39;
  对导入代码的第 3 行进行高亮，即 &#39;../foo.js&#39; 文件的第 5 行
  禁用行号
@<span class="token url">[<span class="token content">code{3-10} js{3}:no-line-numbers</span>](<span class="token url">../foo.js</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多语言支持" tabindex="-1"><a class="header-anchor" href="#多语言支持" aria-hidden="true">#</a> 多语言支持</h2><h3 id="站点多语言配置" tabindex="-1"><a class="header-anchor" href="#站点多语言配置" aria-hidden="true">#</a> 站点多语言配置</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
docs
├─ README.md
├─ foo.md
├─ nested
│  └─ README.md
└─ zh
   ├─ README.md
   ├─ foo.md
   └─ nested
      └─ README.md

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>配置参考： locales

  export default {
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 &#39;/&#39; 作为其路径。
      &#39;/&#39;: {
        lang: &#39;en-US&#39;,
        title: &#39;VuePress&#39;,
        description: &#39;Vue-powered Static Site Generator&#39;,
      },
      &#39;/zh/&#39;: {
        lang: &#39;zh-CN&#39;,
        title: &#39;VuePress&#39;,
        description: &#39;Vue 驱动的静态网站生成器&#39;,
      },
    },
  }

如果一个语言没有声明 lang, title, description 或者 head ，VuePress 将会尝试使用顶层配置的对应值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function x(_,w){const s=t("router-link"),l=t("ExternalLinkIcon");return c(),u("div",null,[n("nav",o,[n("ul",null,[n("li",null,[i(s,{to:"#deploy"},{default:a(()=>[e("Deploy")]),_:1}),n("ul",null,[n("li",null,[i(s,{to:"#npx-vuepress-build-clean-temp"},{default:a(()=>[e("npx vuepress build --clean-temp")]),_:1})]),n("li",null,[i(s,{to:"#github-pages-with-github-actions-to-auto-deploy"},{default:a(()=>[e("GitHub Pages with Github Actions to Auto Deploy")]),_:1})])])]),n("li",null,[i(s,{to:"#getting-started-manually-install"},{default:a(()=>[e("Getting Started manually install")]),_:1})]),n("li",null,[i(s,{to:"#auto-install"},{default:a(()=>[e("auto install")]),_:1})]),n("li",null,[i(s,{to:"#页面"},{default:a(()=>[e("页面")]),_:1}),n("ul",null,[n("li",null,[i(s,{to:"#路由"},{default:a(()=>[e("路由")]),_:1})])])]),n("li",null,[i(s,{to:"#md"},{default:a(()=>[e("MD")]),_:1}),n("ul",null,[n("li",null,[i(s,{to:"#语法扩展"},{default:a(()=>[e("语法扩展")]),_:1})])])]),n("li",null,[i(s,{to:"#多语言支持"},{default:a(()=>[e("多语言支持")]),_:1}),n("ul",null,[n("li",null,[i(s,{to:"#站点多语言配置"},{default:a(()=>[e("站点多语言配置")]),_:1})])])])])]),m,n("h3",b,[p,e(),n("a",h,[e("GitHub Pages with Github Actions to Auto Deploy"),i(l)])]),g,n("blockquote",null,[n("p",null,[n("a",k,[e("emoji-cheat-sheet 查看可用"),i(l)])])]),f])}const y=r(v,[["render",x],["__file","index.html.vue"]]);export{y as default};
