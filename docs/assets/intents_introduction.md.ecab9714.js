import{_ as t,o as e,c as n,Q as s}from"./chunks/framework.0c8e00f4.js";const m=JSON.parse('{"title":"Intents","description":"","frontmatter":{},"headers":[],"relativePath":"intents/introduction.md","filePath":"intents/introduction.md"}'),a={name:"intents/introduction.md"},o=s(`<h1 id="intents" tabindex="-1">Intents <a class="header-anchor" href="#intents" aria-label="Permalink to &quot;Intents&quot;">​</a></h1><p>The Code app redefines how transactions are approached on the Solana blockchain, leveraging an innovative model that creates <code>Intents</code> rather than directly submitting transactions. Specifically, when we talk about an intent, it captures a user&#39;s desired action, without the intricate blockchain mechanisms beneath it. An intent can then be transformed into the one or more transactions that are required to fulfill that desired action.</p><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">graph</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LR</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">Intent </span><span style="color:#F97583;">--&gt;|</span><span style="color:#9ECBFF;">1 or more</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Actions</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">Actions </span><span style="color:#F97583;">--&gt;|</span><span style="color:#9ECBFF;">1 or more</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Transactions</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">Transactions </span><span style="color:#F97583;">--&gt;|</span><span style="color:#9ECBFF;">1 or more</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Instructions</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">graph</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LR</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">Intent </span><span style="color:#D73A49;">--&gt;|</span><span style="color:#032F62;">1 or more</span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Actions</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">Actions </span><span style="color:#D73A49;">--&gt;|</span><span style="color:#032F62;">1 or more</span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Transactions</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">Transactions </span><span style="color:#D73A49;">--&gt;|</span><span style="color:#032F62;">1 or more</span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Instructions</span></span></code></pre></div><p>From both the app and SDK point of view, you only need to create an intent and the tooling will take care of the rest.</p><div class="info custom-block"><p class="custom-block-title">Example</p><p>A user may wish to <code>Withdraw</code> funds from their account, this suggests that the app needs to create transactions for unlocking multiple <a href="./../reference/timelock.html">Timelock</a> accounts and then transfer the funds to a destination account. From a developer perspective, the app only needs to create a <code>Withdraw</code> intent and the tooling will take care of the rest.</p></div><p>We plan to support a wide variety of intents in the future, but for now, we will focus on the most common ones. Specifically, we will focus on the <code>PaymentIntent</code>.</p><h2 id="intent-vs-transaction-the-distinction" tabindex="-1">Intent vs. Transaction: The Distinction <a class="header-anchor" href="#intent-vs-transaction-the-distinction" aria-label="Permalink to &quot;Intent vs. Transaction: The Distinction&quot;">​</a></h2><ul><li><p><strong>Creation &amp; Fulfillment</strong>: When a user decides to pay another user in the Code app, they&#39;re essentially crafting a &quot;payment intent.&quot; This isn&#39;t a blockchain transaction itself. Instead, it sets in motion a chain of events that culminates in several transactions, ultimately fulfilling that payment intent.</p></li><li><p><strong>The Role of the Code Sequencer</strong>: Unlike traditional wallets, the Code app doesn’t directly push transactions onto the blockchain. After an intent is created, the Code app communicates with the Code Sequencer. The Sequencer, equipped with nonce values, assists in breaking down this intent into individual transactions.</p></li><li><p><strong>Signature-based Communication</strong>: Transactions formulated within the mobile app are not communicated in their entirety to the Sequencer. Only the signatures are. The Sequencer, aware of the intent type, re-creates these transactions on its end and appends the received signatures. A discrepancy in intent perceptions between the app and Sequencer would invalidate these transactions, assuring alignment and consistency on both ends.</p></li><li><p><strong>Ensuring On-Chain Privacy</strong>: Payments are uniquely partitioned into categorized values via the splitter contract. This ensures that while the transactions are visible on-chain, the exact value and intent remain obscured, promoting user privacy.</p></li></ul><h2 id="why-this-matters" tabindex="-1">Why This Matters? <a class="header-anchor" href="#why-this-matters" aria-label="Permalink to &quot;Why This Matters?&quot;">​</a></h2><p>The distinction between an intent and a transaction is more than semantics, it&#39;s a foundational shift in approach. It mirrors the functionality of mainstream payment platforms but is tailored for the blockchain, providing several advantages:</p><ul><li><p><strong>Future Flexibility</strong>: This model paves the way for the introduction of diverse intent types, expanding the app&#39;s functionalities.</p></li><li><p><strong>Blockchain Abstraction</strong>: The actual blockchain mechanics are abstracted from the user&#39;s intent. They specify what they wish to accomplish, and the system handles the underlying complexities.</p></li><li><p><strong>Intent Identification</strong>: The intent ID typically corresponds to the rendezvous public key, ensuring a cohesive link with the Rendezvous Key system discussed earlier.</p></li></ul><p>Intents, especially payment intents in the Code app, represent a strategic departure from standard transaction models. By segmenting user intentions from blockchain transactions and intricately linking them with systems like the Rendezvous Key, the Code app promises an efficient, flexible, and private payment experience.</p><h2 id="how-to-use-intents" tabindex="-1">How to Use Intents <a class="header-anchor" href="#how-to-use-intents" aria-label="Permalink to &quot;How to Use Intents&quot;">​</a></h2><p>The Code app supports many intent types internally and we plan to roll out more in the future. Our initial focus will be on keeping things simple and easy to use. Currently, the SDK only supports a subset of the intents that the app supports.</p><p>If you want to get close to the metal you can use the raw <code>@code-wallet/rpc</code> package to create intents that are not yet supported by the SDK but documentation is limited and you won&#39;t have the tooling to assist in generating the right transactions.</p><p>Proceed to the next section to learn how to create <a href="./payment-requests.html">Payment Requests</a> using the SDK.</p><div class="info custom-block"><p class="custom-block-title">Example Usage</p><p>You can also refer to the <a href="./../examples/payment-verification.html">examples</a> for more information.</p></div>`,17),i=[o];function r(l,c,p,h,d,u){return e(),n("div",null,i)}const f=t(a,[["render",r]]);export{m as __pageData,f as default};
