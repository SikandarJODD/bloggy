<div class="parent">
  <div class="div1">
    <h3>poppy</h3>
    <h3>poppy</h3>
    <h3>poppy</h3>
    <h3>poppy</h3>
    <h3>poppy</h3>
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
    top: 7rem;
    width: 300px;
    padding: 10px 50px;
    border: 2px solid rgba(127, 254, 171, 0.811);
    border-radius: 10px;
    background: #011b050b;
  }
  .div2 {
    grid-area: 1 / 2 / 6 / 6;
  }
</style>
