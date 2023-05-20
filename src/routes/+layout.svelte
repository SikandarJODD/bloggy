<script>
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<header>
  <Navbar />
</header>
<slot />

<style>
  :global(body) {
    margin: 0;
    padding: 30px 4%;
  }
</style>
