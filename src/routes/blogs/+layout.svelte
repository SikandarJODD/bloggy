<script>
  import { blogCardData } from "../../store";
</script>

<div class="parent">
  <div class="div1">
    {#each $blogCardData as blogCard}
      <a href={blogCard.blogLink}>
        <h4>
          {blogCard.title}
        </h4>
      </a>
    {/each}
  </div>
  <div class="div2">
      <slot />
  </div>
</div>

<style>
  .parent {
    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .div1 {
    grid-area: 1 / 1 / 6 / 2;
    position: fixed;
    top: 9rem;
    width: 300px;
    padding: 10px 20px;
    border: 2px solid rgba(127, 254, 171, 0.811);
    border-radius: 10px;
    background: #02570f0b;
  }
  .div2 {
    grid-area: 1 / 2 / 6 / 6;
  }
</style>
