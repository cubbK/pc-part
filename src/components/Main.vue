<template>
  <div class="main-container">
    <img src="./main/pizza-pixel-art-square.png" alt="">
    <img src="./main/lettuce.png" alt="" class="pizza-topping">
    <img src="./main/mushrooms.png" alt="" class="pizza-topping">
    <img src="./main/olives.png" alt="" class="pizza-topping">
  </div>
</template>

<style scoped>
  .main-container img{
    max-width: 100%;
  }

  .pizza-topping {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
</style>
