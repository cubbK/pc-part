<template>
  <div class="pizza-type">
    <div class="pizza-type-label">
      Type
    </div>
    <div>
      <select v-on:change="setActivePizza($event)">
        <option
          v-for="pizza in $store.state.pizzas.types"
          v-bind:value="pizza.label"
          v-bind:key="pizza.label"
        >
          {{ pizza.label + ' ' + pizza.price + '$' }}
        </option>
      </select>
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
    setActivePizza: function (event) {
      const activePizza = event.target.value
      this.$store.commit({
        type: 'setActivePizza',
        activePizza
      })
    }
  }
}
</script>

<style scoped>
  .pizza-type {
    padding: 10px 0;
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
