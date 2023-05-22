<script>
  import SmallBox from "./smallBox.svelte";
  let Sv_features = [
    "File based routing",
    "Server-side rendering",
    "Layouts and Components",
    "Pre-fetching",
    "Stores ",
    "Built-In Animations",
    "Reactive $: statements",
  ];
</script>

<div class="txt_box">
  SvelteKit is a modern JavaScript framework for building web applications. It
  is built on top of Svelte, a modern JavaScript framework that is known for its
  performance, simplicity, and flexibility.
</div>
<div class="txt_box">
  <span> SvelteKit</span> embraces the principles o of <span> Svelte</span>,
  such as its reactive programming model and efficient DOM manipulation. It
  leverages the benefits of Svelte to provide a smooth and efficient development
  experience, resulting in high-performance web applications with a smaller
  bundle size.
</div>
<div class="tdt_box">
  {#each Sv_features as feature}
    <SmallBox text={feature} />
  {/each}
</div>



<style>
  .txt_box {
    width: 100%;
    padding: 20px;
    background-color: #64b6fd0a;
    border: 1px solid #64b6fd;
    border-radius: 5px;
    margin: 10px;
  }
  span {
    color: #0c5bd2fb;
  }
  .tdt_box {
    width: 100%;
    padding: 20px;
    background-color: #64b6fd0a;
    border: 1px solid #64b6fd;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
  }
</style>
