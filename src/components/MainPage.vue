<template>
  <div class="main-container rpgui-content">
    <div class="rpgui-container framed pizza-container">
      <pizza-item></pizza-item>
      <div class="pizza-options">
        <hr class="golden">
        <pizza-type></pizza-type>
        <div class="pizza-toppings">
          <div class="title">
            Toppings
          </div>
          <div class="checkbox">
             <input class="rpgui-checkbox" type="checkbox"><label>Mooshrooms</label>
          </div>
          <div class="checkbox">
             <input class="rpgui-checkbox" type="checkbox"><label>Lettuce</label>
          </div>
          <div class="checkbox">
             <input class="rpgui-checkbox" type="checkbox"><label>Olives</label>
          </div>

        </div>
        <hr class="golden">
        <div class="order-price-container">
          <div class="price">
            12 <img src="./main/gold/1.png" alt="">
          </div>
          <div class="order">
            <button class="rpgui-button golden" type="button"><p>Order</p></button>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import PizzaItem from './main/PizzaItem.vue'
import PizzaType from './main/pizzaType.vue'

export default {
  name: 'MainPage',
  components: {
    'pizza-item': PizzaItem,
    'pizza-type': PizzaType
  }
}
</script>

<style scoped>
.pizza-container {
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}

.pizza-options {
  padding: 0 10px;
}

.pizza-toppings {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.pizza-toppings .title{
  padding-top: 10px;
}

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
