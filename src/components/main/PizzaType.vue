<template>
  <div class="pizza-type">
    <div class="pizza-type-label">
      Type
    </div>
    <div>
      <select class="rpgui-dropdown" ref="pizzaDropdown">
        <option
          v-for="pizza in $store.state.pizzas.types"
          v-bind:key="pizza"
          v-on:click="setActivePizza(pizza)"
        >
          {{ pizza + '12' }}
        </option>
      </select>
      {{ test() }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PizzaType',
  data: () => ({
    selected: 'option1'
  }),
  methods: {
    setActivePizza: function (pizza) {
      console.log('triggered')
    },
    test: function () {
      const pizzaDropdown = this.$refs.pizzaDropdown
      console.log(pizzaDropdown)
      console.log(this.$refs)
    }
  }
}
</script>

<style scoped>
  .pizza-type {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .pizza-type-label {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
