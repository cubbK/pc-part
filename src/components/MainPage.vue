<template>
  <div class="main-container rpgui-content">
    <h1 class="title">Pizza Ordering</h1>
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
.main-container {
  max-width: 500px;
  margin: 0 auto;
}

.pizza-container {
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}

.pizza-options {
  padding: 0 10px;
}

.title {
  padding-top: 15px;
}

</style>
