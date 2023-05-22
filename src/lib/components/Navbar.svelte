<script>
  import { page } from "$app/stores";
  $: routeId = $page.route.id;
  let navs = [
    {
      name: "Home",
      route: "/",
    },

    {
      name: "Blogs",
      route: "/blogs",
    },
  ];
</script>

<nav>
  <li><h3><a href="/">Bloggy</a></h3></li>
  <ul>
    {#each navs as nav}
      <li>
        <a href={nav.route} class:active={nav.route === routeId}>{nav.name}</a>
      </li>
    {/each}
  </ul>
  <li />
</nav>

<style>
  .active {
    color: #cae5fd;
  }
  h3 {
    margin: 0;
    border: 1px solid #64b6fd;
    padding: 10px 20px;
    background-color: #64b6fd0a;
  }
</style>
