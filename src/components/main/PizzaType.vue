<template>
  <div class="pizza-type">
    <div class="pizza-type-label">
      Type
    </div>
    <select class="rpgui-dropdown">
      <option value="option1">Neapolitana</option>
      <option value="option2">option2</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'PizzaType'
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
