<template>
  <div class="pizza">
    <img src="./pizzaItem/pizza-pixel-art-square.png" alt="">
    <img src="./pizzaItem/lettuce.png" alt="" class="pizza-topping">
    <img src="./pizzaItem/mushrooms.png" alt="" class="pizza-topping">
    <img src="./pizzaItem/olives.png" alt="" class="pizza-topping">
  </div>
</template>

<script>
export default {
  name: 'PizzaItem'
}
</script>

<style scoped>
  .pizza {
    position: relative;
  }

  .pizza img {
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
