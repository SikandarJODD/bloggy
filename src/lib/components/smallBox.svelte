<script>
  export let text = "Coding";
</script>

<div class="small_box">{text}</div>

<style>
  .small_box {
    width: max-content;
    padding: 14px;
    background-color: #000e1947;
    border: 1px solid #1df6d5;
    border-radius: 5px;
    margin: 5px;
    color: rgb(59, 186, 254);
    font-size: 1.06rem;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
  }
  .small_box:hover {
    background: linear-gradient(to top, #00212c, rgba(100, 159, 253, 0.039));
    transition: all 0.3s ease-in-out;
  }
</style>
