<template>
  <div class="pizza-toppings">
    <div class="title">
      Toppings
    </div>
    <div
      class="checkbox"
      v-for="(item, key, index) in $store.state.toppings"
      v-bind:key="index"
    >
      <!-- Does not work when in new line -->
      <input
        class="rpgui-checkbox"
        type="checkbox"><label
        v-on:click="toggleTopping(key)"
      >
        {{ key | capitalize }} {{ '+' + $store.state.toppingPrice + '$' }}
      </label>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ToppingsList',
  methods: {
    toggleTopping: function (topping) {
      this.$store.commit({
        type: 'toggleTopping',
        topping
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
  .pizza-toppings {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .pizza-toppings .title {
    padding-top: 10px;
  }
</style>
