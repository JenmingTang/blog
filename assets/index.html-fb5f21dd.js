import{_ as r,r as l,o as t,c as u,b as e,d as n,w as s,e as a,f as o}from"./app-826415dc.js";const c={},v={class:"table-of-contents"},m={id:"customize-your-java-json-serialization-using-jackson-annotations",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#customize-your-java-json-serialization-using-jackson-annotations","aria-hidden":"true"},"#",-1),h={href:"https://medium.com/trabe/customize-your-serialization-using-jackson-annotations-d6b81c4785a6",target:"_blank",rel:"noopener noreferrer"},g={id:"markdown-官方教程",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#markdown-官方教程","aria-hidden":"true"},"#",-1),f={href:"https://markdown.com.cn/basic-syntax/line-breaks.html",target:"_blank",rel:"noopener noreferrer"},J=o(`<h2 id="default-behavior" tabindex="-1"><a class="header-anchor" href="#default-behavior" aria-hidden="true">#</a> Default behavior</h2><h3 id="serialization" tabindex="-1"><a class="header-anchor" href="#serialization" aria-hidden="true">#</a> Serialization</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Builder
    @Value
    public class JacksonExample {
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="customize-the-serializer" tabindex="-1"><a class="header-anchor" href="#customize-the-serializer" aria-hidden="true">#</a> Customize the serializer</h2><h3 id="exclude-fields" tabindex="-1"><a class="header-anchor" href="#exclude-fields" aria-hidden="true">#</a> Exclude fields</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Builder
    @Value
    public class JacksonExample {
        @JsonIgnore
        private String fieldOne;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="customize-date-formats" tabindex="-1"><a class="header-anchor" href="#customize-date-formats" aria-hidden="true">#</a> Customize date formats</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/* 
date fields in ISO 8601 format
 */
 @JsonFormat(shape = JsonFormat.Shape.STRING)
 private Calendar someDate;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
  &quot;someDate&quot;: &quot;2019-02-26T16:33:44.771+0000&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/* 
including a specific pattern for the conversion
 */
@JsonFormat(shape = JsonFormat.Shape.STRING, pattern= &quot;yyyy-MM-dd&quot;)
private Calendar someDate;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
  &quot;someDate&quot;: &quot;2019-02-26&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="specifying-custom-names-for-the-fields" tabindex="-1"><a class="header-anchor" href="#specifying-custom-names-for-the-fields" aria-hidden="true">#</a> Specifying custom names for the fields</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@JsonProperty(&quot;date&quot;)
private Calendar someDate;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
  &quot;date&quot;: &quot;2019-02-26&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="snake-case-no-problem" tabindex="-1"><a class="header-anchor" href="#snake-case-no-problem" aria-hidden="true">#</a> Snake Case? No problem</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class JacksonExample {
    private String fieldOne;
    /* 
    without
     */
    // @JsonProperty(&quot;field_one&quot;)
    // private String fieldOne;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
  &quot;field_one&quot;: &quot;Some text&quot;,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="strategies-for-different-naming-needs" tabindex="-1"><a class="header-anchor" href="#strategies-for-different-naming-needs" aria-hidden="true">#</a> Strategies for different naming needs</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/* 
field_one
 */
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
/* 
field-one
 */
@JsonNaming(PropertyNamingStrategy.KebabCaseStrategy.class)
/* 
fieldone
 */
@JsonNaming(PropertyNamingStrategy.LowerCaseStrategy.class)
/* 
FieldOne
 */
@JsonNaming(PropertyNamingStrategy.UpperCamelCaseStrategy.class)
public class JacksonExample {
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="customize-enum-representation" tabindex="-1"><a class="header-anchor" href="#customize-enum-representation" aria-hidden="true">#</a> Customize enum representation</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public enum JacksonExampleEnum {
    OPTION_1(&quot;0&quot;, &quot;0&quot;), OPTION_2(&quot;1&quot;, &quot;1&quot;);
    private String a;
    private String b;

@Builder
@Value
public class JacksonExample {
    private JacksonExampleEnum someEnum;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
  &quot;some_enum&quot;: &quot;OPTION_1&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>We can annotate any method of the enum with @JsonValue and the result of that method will be the value used for the serialization.</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public enum JacksonExampleEnum {
    /* 
    。。。接上面类
     */
    @JsonValue
    public String getA() {
        return a;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
  &quot;some_enum&quot;: &quot;0&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Annotate the enum with @JsonFormat(shape = JsonFormat.Shape.OBJECT):</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum JacksonExampleEnum {
    /* 
    底下没有任何注解
     */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
  &quot;some_enum&quot;: {
    &quot;a&quot;: &quot;0&quot;,
    &quot;b&quot;: &quot;0&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wrapping-up-总结" tabindex="-1"><a class="header-anchor" href="#wrapping-up-总结" aria-hidden="true">#</a> Wrapping up 总结</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Spring Boot is good enough for a variety of scenarios
    Under without Jackson annotate control.
    在没有杰克逊注释控制的情况下。

A good starting point for those advanced tweaking possibilities can be found [here](https://www.baeldung.com/jackson-advanced-annotations).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function x(S,_){const i=l("router-link"),d=l("ExternalLinkIcon");return t(),u("div",null,[e("nav",v,[e("ul",null,[e("li",null,[n(i,{to:"#markdown-官方教程"},{default:s(()=>[a("Markdown 官方教程")]),_:1})]),e("li",null,[n(i,{to:"#default-behavior"},{default:s(()=>[a("Default behavior")]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#serialization"},{default:s(()=>[a("Serialization")]),_:1})])])]),e("li",null,[n(i,{to:"#customize-the-serializer"},{default:s(()=>[a("Customize the serializer")]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#exclude-fields"},{default:s(()=>[a("Exclude fields")]),_:1})]),e("li",null,[n(i,{to:"#customize-date-formats"},{default:s(()=>[a("Customize date formats")]),_:1})]),e("li",null,[n(i,{to:"#specifying-custom-names-for-the-fields"},{default:s(()=>[a("Specifying custom names for the fields")]),_:1})]),e("li",null,[n(i,{to:"#snake-case-no-problem"},{default:s(()=>[a("Snake Case? No problem")]),_:1})]),e("li",null,[n(i,{to:"#strategies-for-different-naming-needs"},{default:s(()=>[a("Strategies for different naming needs")]),_:1})]),e("li",null,[n(i,{to:"#customize-enum-representation"},{default:s(()=>[a("Customize enum representation")]),_:1})])])]),e("li",null,[n(i,{to:"#wrapping-up-总结"},{default:s(()=>[a("Wrapping up 总结")]),_:1})])])]),e("h1",m,[b,a(),e("a",h,[a("Customize your Java-JSON serialization using Jackson Annotations"),n(d)])]),e("h2",g,[p,a(),e("a",f,[a("Markdown 官方教程"),n(d)])]),J])}const N=r(c,[["render",x],["__file","index.html.vue"]]);export{N as default};
