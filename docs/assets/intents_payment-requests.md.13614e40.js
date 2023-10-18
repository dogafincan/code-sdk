import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.0c8e00f4.js";const u=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"intents/payment-requests.md","filePath":"intents/payment-requests.md"}'),p={name:"intents/payment-requests.md"},l=e(`<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>Code uses the concept of a payment intent to represent a user&#39;s intent to pay another user. This is different from a blockchain transaction. A payment intent is a higher-level abstraction that represents a user&#39;s intent to pay another user which is a way to represent a payment in a way that&#39;s more familiar to users.</p><p>If you&#39;d like to learn more about intents in general, please refer to the <a href="./../intents/introduction.html">Intents</a> introduction.</p><h2 id="payment-intents" tabindex="-1">Payment Intents <a class="header-anchor" href="#payment-intents" aria-label="Permalink to &quot;Payment Intents&quot;">​</a></h2><p>In this section, we&#39;ll discuss how to setup a payment request and create a payment intent that you can verify on your server.</p><p>Regardless of whether your user is on a mobile device or desktop environment, the payment flow will start with the following sequence.</p><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">sequenceDiagram</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">autonumber</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">participant</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">User</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">participant</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Client</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">User</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Client</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Land on payment page</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">Client</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Server</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Send order information</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">Server</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">POST /v1/createIntent</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Server</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Return PaymentIntent status</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">Server</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Client</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Return PaymentIntent&#39;s client_secret</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">Client</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Open message stream at rendezvous value</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">sequenceDiagram</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">autonumber</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">participant</span><span style="color:#24292E;"> </span><span style="color:#E36209;">User</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">participant</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Client</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">User</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Client</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Land on payment page</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">Client</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Server</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Send order information</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">Server</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">POST /v1/createIntent</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Server</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Return PaymentIntent status</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">Server</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Client</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Return PaymentIntent&#39;s client_secret</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">Client</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Open message stream at rendezvous value</span></span></code></pre></div><p>Typically, you&#39;ll have a payment button on your website. For example, you might have a button that looks like this:</p><div id="button-container"></div><p>When a user clicks the button, an <code>invoke</code> event is triggered, allowing you to communicate with your backend; perhaps to check for inventory. On the server side, you&#39;ll create a payment intent and return the <code>clientSecret</code> to the browser. This value is then used to generate a <a href="./../reference/rendezvous.html">rendezvous</a> value on the button.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hj-6a" id="tab-00hA7wn" checked="checked"><label for="tab-00hA7wn">client.js</label><input type="radio" name="group-hj-6a" id="tab-59VkxsM"><label for="tab-59VkxsM">server.js</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">button</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> code.elements.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;button&#39;</span><span style="color:#E1E4E8;">, { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">button.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;invoke&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// This is called when the &quot;Pay with Code&quot; button is clicked.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Send the order information to your server.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/create-intent&#39;</span><span style="color:#E1E4E8;">, { method: </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">clientSecret</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> res.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Update the button with the new client secret generated by the server.</span></span>
<span class="line"><span style="color:#E1E4E8;">  button.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">({ clientSecret });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">button</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> code.elements.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;button&#39;</span><span style="color:#24292E;">, { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">button.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;invoke&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// This is called when the &quot;Pay with Code&quot; button is clicked.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Send the order information to your server.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fetch</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/create-intent&#39;</span><span style="color:#24292E;">, { method: </span><span style="color:#032F62;">&#39;POST&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">clientSecret</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> res.</span><span style="color:#6F42C1;">json</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Update the button with the new client secret generated by the server.</span></span>
<span class="line"><span style="color:#24292E;">  button.</span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">({ clientSecret });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/create-intent&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Create intent (notify the code API that a payment is coming soon)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">clientSecret</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">id</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> code.paymentIntents.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">({ </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// This value needs to be sent to the browser so that the browser can use it</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// to setup a payment with this intent instance.</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">({ clientSecret });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/create-intent&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Create intent (notify the code API that a payment is coming soon)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">clientSecret</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">id</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> code.paymentIntents.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">({ </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// This value needs to be sent to the browser so that the browser can use it</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// to setup a payment with this intent instance.</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">({ clientSecret });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div></div></div><h2 id="mobile-vs-desktop-flows" tabindex="-1">Mobile vs. Desktop Flows <a class="header-anchor" href="#mobile-vs-desktop-flows" aria-label="Permalink to &quot;Mobile vs. Desktop Flows&quot;">​</a></h2><p>Depending on whether your user is on a mobile device or a desktop, the payment flow will be slightly different. On the mobile flow, the app can be opened directly from the browser. On the desktop flow, the user will need to scan a code using the Code app.</p><h3 id="desktop-flow" tabindex="-1">Desktop Flow <a class="header-anchor" href="#desktop-flow" aria-label="Permalink to &quot;Desktop Flow&quot;">​</a></h3><p>On desktop, the user will be presented with a scannable code. They can use the Code app to scan this code and complete the payment. Once the payment is complete, a <code>success</code> event will be triggered on the button. You can also wire up a redirect URL to redirect the user to a success page. See <a href="./../reference/browser-events.html">Browser Events</a> to learn more.</p><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">sequenceDiagram</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">autonumber</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">participant</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">User</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">participant</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Client</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">User</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Code App</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Open app</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">Code App</span><span style="color:#F97583;">-&gt;&gt;+</span><span style="color:#FFAB70;">Client</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Scan code</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">Client</span><span style="color:#F97583;">-&gt;&gt;-</span><span style="color:#FFAB70;">Code App</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Return rendezvous value</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">Code App</span><span style="color:#F97583;">-&gt;&gt;+</span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Get payment details</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Code App</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Return PaymentIntent</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">Code App</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Signed PaymentIntent</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Verify and Schedule Transactions</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">-&gt;&gt;-</span><span style="color:#FFAB70;">Code App</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Return confirmation</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Client</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Return confirmation (and close stream)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">Client</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Client</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;success&quot; event triggered</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">sequenceDiagram</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">autonumber</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">participant</span><span style="color:#24292E;"> </span><span style="color:#E36209;">User</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">participant</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Client</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">User</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Code App</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Open app</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">Code App</span><span style="color:#D73A49;">-&gt;&gt;+</span><span style="color:#E36209;">Client</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Scan code</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">Client</span><span style="color:#D73A49;">-&gt;&gt;-</span><span style="color:#E36209;">Code App</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Return rendezvous value</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">Code App</span><span style="color:#D73A49;">-&gt;&gt;+</span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Get payment details</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Code App</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Return PaymentIntent</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">Code App</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Signed PaymentIntent</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Verify and Schedule Transactions</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">-&gt;&gt;-</span><span style="color:#E36209;">Code App</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Return confirmation</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Client</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Return confirmation (and close stream)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">Client</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Client</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;success&quot; event triggered</span></span></code></pre></div><h3 id="mobile-flow" tabindex="-1">Mobile Flow <a class="header-anchor" href="#mobile-flow" aria-label="Permalink to &quot;Mobile Flow&quot;">​</a></h3><p>On mobile, the user will be prompted to open the Code app to complete the payment. Once inside the Code app, the user will be prompted to confirm the payment. Once confirmed, the payment will be sent to the Code Sequencer. If successful, the Code app will then redirect the user to a new tab in their default browser. The <code>success</code> event will be triggered on the button in the original tab. You can also wire up a redirect URL to redirect the user to a success page.</p><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">sequenceDiagram</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">autonumber</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">participant</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">User</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">participant</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Client</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">User</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Client</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Click &quot;Pay with Code&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">Client</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Code App</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Open app with rendezvous value</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">Code App</span><span style="color:#F97583;">-&gt;&gt;+</span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Get payment details</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Code App</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Return PaymentIntent</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">Code App</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Signed PaymentIntent</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Verify and Schedule Transactions</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">Code Sequencer</span><span style="color:#F97583;">-&gt;&gt;-</span><span style="color:#FFAB70;">Code App</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Return confirmation</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">Code App</span><span style="color:#F97583;">-&gt;&gt;</span><span style="color:#FFAB70;">Client</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Open new browser tab with success URL</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">sequenceDiagram</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">autonumber</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">participant</span><span style="color:#24292E;"> </span><span style="color:#E36209;">User</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">participant</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Client</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">User</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Client</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Click &quot;Pay with Code&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">Client</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Code App</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Open app with rendezvous value</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">Code App</span><span style="color:#D73A49;">-&gt;&gt;+</span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Get payment details</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Code App</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Return PaymentIntent</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">Code App</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Signed PaymentIntent</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Verify and Schedule Transactions</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">Code Sequencer</span><span style="color:#D73A49;">-&gt;&gt;-</span><span style="color:#E36209;">Code App</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Return confirmation</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">Code App</span><span style="color:#D73A49;">-&gt;&gt;</span><span style="color:#E36209;">Client</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Open new browser tab with success URL</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The default browser could be different than the one they came from. Additionally, the user will definitely be redirected to a new tab. This is a limitation of Android and iOS. There is no garantuee that the user will go back to the tab they came from and therefore the <code>on(&quot;success&quot;, ...)</code> event may not be triggered.</p><p>See <a href="./../reference/browser-events.html#confirmation-urls">Confirmation URLs</a> to learn more.</p></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>You can find a full example <a href="./../examples/payment-verification.html">here</a>.</p>`,22),o=[l];function t(c,r,y,i,E,d){return n(),a("div",null,o)}const h=s(p,[["render",t]]);export{u as __pageData,h as default};
