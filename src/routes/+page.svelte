<script>
  import BoxCard from "$lib/components/BoxCard.svelte";
  import { blogCardData } from "../store";
</script>

<main>
  <h1>Let's Learn SvelteKit</h1>
  <div class="box_main">
    {#each $blogCardData as blogCard}
      <BoxCard
        title={blogCard.title}
        imgSrc={blogCard.imgSrc}
        blogLink={blogCard.blogLink}
      />
    {/each}
  </div>
</main>

<style>
  h1 {
    margin: 10px 0 20px 0;
    color: rgba(179, 247, 249, 0.953);
  }
  .box_main {
    display: flex;
    flex-wrap: wrap;
  }
</style>
