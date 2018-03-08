<template>
  <div class="pizza-toppings">
    <div class="title">
      Toppings
    </div>
    <div class="checkbox">
      <!-- Does not work when in new line -->
      <input class="rpgui-checkbox" type="checkbox"><label v-on:click="toggleTopping('mushrooms')">Mushrooms</label>
    </div>
    <div class="checkbox" >
      <!-- Does not work when in new line -->
      <input class="rpgui-checkbox" type="checkbox"><label v-on:click="toggleTopping('lettuce')">Lettuce</label>
    </div>
    <div class="checkbox" >
      <!-- Does not work when in new line -->
      <input class="rpgui-checkbox" type="checkbox"><label v-on:click="toggleTopping('olives')">Olives</label>
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
