<template>
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
</template>

<script>
export default {
  name: 'ToppingsList'
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
