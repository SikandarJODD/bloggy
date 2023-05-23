<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "../lib/components/Footer.svelte";
</script>

<header>
  <Navbar />
</header>
<slot />
<!-- <Footer /> -->

<style>
  :global(body) {
    margin: 0;
    padding: 30px 4%;
  }
</style>
