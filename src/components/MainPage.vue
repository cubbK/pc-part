<template>
  <div class="main-container rpgui-content">
    <div class="rpgui-container framed pizza-container">
      <pizza-item></pizza-item>
      <div class="pizza-options">
        <hr class="golden">
        <pizza-type></pizza-type>
        <pizza-size></pizza-size>
        <toppings-list></toppings-list>
        <hr class="golden">
        <pizza-bottom></pizza-bottom>
      </div>
    </div>
  </div>
</template>

<script>
import PizzaItem from './main/PizzaItem.vue'
import PizzaType from './main/pizzaType.vue'
import ToppingsList from './main/ToppingsList.vue'
import PizzaSize from './main/PizzaSize.vue'
import PizzaBottom from './main/PizzaBottom.vue'

export default {
  name: 'MainPage',
  components: {
    'pizza-item': PizzaItem,
    'pizza-type': PizzaType,
    'toppings-list': ToppingsList,
    'pizza-size': PizzaSize,
    'pizza-bottom': PizzaBottom
  }
}
</script>

<style scoped>
.main-content {
  width: 600px;
}

.pizza-container {
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}

.pizza-options {
  padding: 0 10px;
}

</style>
