<script>
  import { goto } from "$app/navigation";
  export let title = "Box Card";
  export let imgSrc =
    "https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-4371.jpg?w=740&t=st=1684619750~exp=1684620350~hmac=17222d1f6f9d2e6c5db17c0b03bf16104eea4ac2895165e41a403bccdee0fae5";
  export let blogLink = "/blogs/svelte-store";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<article on:click={goto(blogLink)}>
  <img src={imgSrc} alt="Coding" />
  <h4>{title}</h4>
</article>

<style>
  article {
    background: linear-gradient(to bottom right, #51e0f900, #5ae0f820);
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 320px;
    height: 270px;
    display: flex;
    flex-direction: column;
    border: 1px solid #51e0f9;
    transition: all 0.2s ease-in;
  }
  article:hover {
    border: 1px solid rgb(26, 246, 246);
    transition: all 0.2s ease-in;
    background-color: rgba(0, 23, 22, 0.812);
    /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  }
  img {
    object-fit: cover;
    width: 320px;
    height: 180px;
    border-radius: 10px;
    align-self: center;
  }
  h4 {
    margin: 0;
    color: rgb(71, 232, 235);
  }
</style>
