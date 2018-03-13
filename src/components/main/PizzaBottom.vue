<template>
  <div class="order-price-container">
    <div class="price">
      {{ price }} <img v-bind:src="priceIcon" alt="">
    </div>
    <div class="order">
      <button class="rpgui-button golden" type="button"><p>Order</p></button>
    </div>
  </div>
</template>

<script>
const R = require('ramda')

const getPizzaPrice = (pizzasList, activePizzaLabel) => {
  const activePizza =  R.filter(pizza => pizza.label === activePizzaLabel, pizzasList)[0]
  return activePizza.price
}

const getToppingsPrice = (toppings, toppingPrice) => {
  const toppingsFiltered = R.filter(topping => topping, toppings)
  const toppingsAmount = R.keys(toppingsFiltered).length

  return toppingsAmount * toppingPrice
}

const getSizePrice = (sizes, activeSizelabel) => {
  const activeSize =  R.filter(size => size.label === activeSizelabel, sizes)[0]
  return activeSize.price
}

export default {
  name: 'PizzaBottom',
  computed: {
    price: function () {
      const state = this.$store.state

      const pizzaPrice = getPizzaPrice(state.pizzas.types, state.pizzas.activePizza)
      const toppingsPrice = getToppingsPrice(state.toppings, state.toppingPrice)
      const sizePrice = getSizePrice(state.sizes, state.activeSize)

      return pizzaPrice + toppingsPrice + sizePrice
    },
    priceIcon: function() {
      const priceIcons = {
        small: './pizzaBottom/gold/1.png',
        medium: './pizzaBottom/gold/3.png',
        big: './pizzaBottom/gold/4.png'
      }
      if (this.price < 20) {
        return priceIcons.small
      } else if (this.price < 25) {
        return priceIcons.medium
      } else return priceIcons.big
    }
  }
}
</script>

<style scoped>
.order-price-container {
  display: flex;
  justify-content: space-between;
}

.price {
  display: flex;
  align-items: center;
}

.price img {
  width: 50px;
  height: 50px;
}

.order {
  flex-grow: 1;
}

.order button {
  width: 90%;
}
</style>
