<template>
  <div class="pizza-size-container">
    <div>
      Size
    </div>
    <div>
      <select v-on:change="setActiveSize($event)">
        <option
          v-for="size in $store.state.sizes"
          v-bind:key="size.label"
          v-bind:value="size.label"
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
    },
    setActiveSize (event) {
      const value = event.target.value
      this.$store.commit({
        type: 'setActiveSize',
        activeSize: value
      })
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
