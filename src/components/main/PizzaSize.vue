<template>
  <div class="pizza-size-container">
    <div>
      Size
    </div>
    <div>
      <select>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="huge">Huge</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PizzaSize'
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
