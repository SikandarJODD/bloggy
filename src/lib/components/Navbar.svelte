<script>
  import { page } from "$app/stores";
  $: routeId = $page.route.id;
  let navs = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Components",
      route: "/components",
    },
    {
      name: "Blogs",
      route: "/blogs",
    },
  ];
</script>

<nav>
  <ul>
    {#each navs as nav}
      <li>
        <a href={nav.route} class:active={nav.route === routeId}>{nav.name}</a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .active {
    color: #cae5fd;
  }
</style>
