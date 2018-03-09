<template>
  <div class="pizza-size-container">
    <div>
      Size
    </div>
    <div>
      <select>
        <option
          v-for="size in $store.state.sizes"
          v-bind:key="size.label"
          value="small"
        >
          {{ size.label | capitalize }} {{ getPrice(size.price) }}
        </option>

      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PizzaSize',
  methods: {
    getPrice (price) {
      return price < 0 ? `${price}$` : `+${price}$`
    }
  },
  filters: {
    capitalize: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>

<style scoped>
.pizza-size-container {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
