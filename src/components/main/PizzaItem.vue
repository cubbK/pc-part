<template>
  <div class="pizza">
    <img v-if="activePizza === 'Sicilian'" src="./pizzaItem//pizza1-pixelated.png" alt="">
    <img v-if="activePizza ==='Neapolitan'" src="./pizzaItem//pizza2-pixelated.png" alt="">
    <img v-if="activePizza ==='California'" src="./pizzaItem//pizza3-pixelated.png" alt="">
    <img v-if="lettuce" src="./pizzaItem/lettuce.png" alt="" class="pizza-topping">
    <img v-if="mushrooms" src="./pizzaItem/mushrooms.png" alt="" class="pizza-topping">
    <img v-if="olives" src="./pizzaItem/olives.png" alt="" class="pizza-topping">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PizzaItem',
  computed: mapState({
    // arrow functions can make the code very succinct!
    lettuce: state => state.toppings.lettuce,
    mushrooms: state => state.toppings.mushrooms,
    olives: state => state.toppings.olives,
    activePizza: state => state.pizzas.activePizza
  })
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
