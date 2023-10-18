import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.0c8e00f4.js";const d=JSON.parse('{"title":"Minimal Example","description":"","frontmatter":{},"headers":[],"relativePath":"examples/request-payment.md","filePath":"examples/request-payment.md"}'),p={name:"examples/request-payment.md"},o=l(`<h1 id="minimal-example" tabindex="-1">Minimal Example <a class="header-anchor" href="#minimal-example" aria-label="Permalink to &quot;Minimal Example&quot;">​</a></h1><p>Use the following example to create a payment button that you can embed in your website or application. This example is client-side only, and does not verify the payment on your server.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>If you need to verify the payment on your server, see the <a href="./payment-verification.html">Payment Verification</a> example.</p></div><h2 id="payment-request" tabindex="-1">Payment Request <a class="header-anchor" href="#payment-request" aria-label="Permalink to &quot;Payment Request&quot;">​</a></h2><p>The full example code can be found on <a href="https://github.com/code-wallet/code-sdk/tree/main/examples/1-minimal" target="_blank" rel="noreferrer">GitHub</a>.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;!</span><span style="color:#85E89D;">DOCTYPE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;en&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">charset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;Code SDK - Example/1-minimal&lt;/</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;button-container&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> code </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://js.getcode.com/v1&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">button</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> code.elements.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            currency: </span><span style="color:#9ECBFF;">&#39;usd&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            amount: </span><span style="color:#79B8FF;">0.05</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// The minimum amount is $0.05 USD or equivalent in other currencies</span></span>
<span class="line"><span style="color:#E1E4E8;">            destination: </span><span style="color:#9ECBFF;">&#39;E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        button.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Thank you!&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        button.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#button-container&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;!</span><span style="color:#22863A;">DOCTYPE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">html</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;en&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">charset</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;viewport&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;Code SDK - Example/1-minimal&lt;/</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;button-container&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;module&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> code </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://js.getcode.com/v1&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">button</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> code.elements.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;button&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            currency: </span><span style="color:#032F62;">&#39;usd&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            amount: </span><span style="color:#005CC5;">0.05</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// The minimum amount is $0.05 USD or equivalent in other currencies</span></span>
<span class="line"><span style="color:#24292E;">            destination: </span><span style="color:#032F62;">&#39;E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        button.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;success&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Thank you!&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        button.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#button-container&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">html</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>This snippet creates a payment button that looks like this:</p><div id="button-container"></div>`,8),t=[o];function e(c,r,E,y,i,m){return n(),a("div",null,t)}const F=s(p,[["render",e]]);export{d as __pageData,F as default};
