<script>
  import SmallBox from "$lib/components/smallBox.svelte";
  import { count } from "../../../store.js";

  let storeFunc = ["set", "update"];
  let mint = `import { writable } from 'svelte/store'; 
    <br/><br/>
    export const count = writable(0); 
    <br/><br/>
  `;
  let setStore = ` import { count } from "./store.js";
  <br/><br/>
    count.set(10);
  `;
  let setUpdate = ` import { count } from "./store.js";
  <br/><br/>
    count.update(n=>n+10);
  `;
</script>

<h1>Svelte Store</h1>
<div class="txt_box">
  <span>Svelte</span> Store is a state management solution provided by the Svelte
  framework. It is designed to help manage and share state across different components
  in a Svelte application. Svelte Store follows the principles of reactive programming,
  allowing components to automatically update when the underlying state changes.
</div>
<h3>Store Functions :</h3>
<div class="flex">
  {#each storeFunc as text}
    <SmallBox {text} />
  {/each}
</div>
<div class="txt_box">
  <h4>Sample Code :</h4>
  <p>Create <strong>store.js</strong> inside <strong> `src`</strong> folder</p>
  <code>
    {@html mint}
  </code>
</div>
<div class="txt_box">
  <h4>Set : {$count}</h4>
  <p>Set the Value using <code>.set()</code></p>
  <p>Go to <code>+page.svelte</code></p>
  <code>
    {@html setStore}
  </code>
  <button on:click={() => count.set(10)}>Set to 10</button>
</div>
<div class="txt_box">
  <h4>Update: {$count}</h4>
  <p>Set the Value using <code>.update()</code></p>
  <p>Go to <code>+page.svelte</code></p>
  <code>
    {@html setUpdate}
  </code>
  <button on:click={() => count.update((n) => n + 10)}>Increment by 10</button>
  <p>
    Update is used to change the value of Store ....it will affect at global
    level wherever the store is used.
  </p>
</div>


<style>
  p {
    margin: 10px 0;
  }
  button {
    width: max-content;
    font-size: 0.8rem;
    padding: 10px 10px;
    margin: 10px;
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 0px 15px;
  }
  code {
    color: #64b6fd;
  }
  h1 {
    margin: -35px 0 20px 0;
    color: #c9f2fdeb;
  }
  h3 {
    margin: 0 0px 5px 20px;
  }
  h4 {
    margin: 0 10px 9px 0;
  }
  span {
    color: #f74a0bf6;
  }
  .txt_box {
    width: 100%;
    padding: 20px;
    background-color: #64b6fd0a;
    border: 1px solid #64b6fd;
    border-radius: 5px;
    margin: 10px;
    font-size: 0.95rem;
  }
</style>
