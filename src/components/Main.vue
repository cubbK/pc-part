<template>
  <div class="main-container rpgui-content">
    <div class="rpgui-container framed pizza-container">
      <div class="pizza">
        <img src="./main/pizza-pixel-art-square.png" alt="">
        <img src="./main/lettuce.png" alt="" class="pizza-topping">
        <img src="./main/mushrooms.png" alt="" class="pizza-topping">
        <img src="./main/olives.png" alt="" class="pizza-topping">
      </div>
      <hr class="golden">
      <div class="pizza-options">
        <div class="pizza-type">
          <div class="pizza-type-label">
            Type
          </div>
          <select class="rpgui-dropdown">
            <option value="option1">Neapolitana</option>
            <option value="option2">option2</option>
          </select>
        </div>
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
        <div class="order-price-container">
          <div class="price">
            12 <img src="./main/gold/1.png" alt="">
          </div>
          <div class="order">
            <button class="rpgui-button golden" type="button"><p>Order</p></button>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.pizza-container {
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}

.main-container img {
  max-width: 100%;
}

.pizza {
  position: relative;
}

.pizza-options {
  padding: 0 10px;
}

.pizza-topping {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}

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

.pizza-toppings {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.pizza-toppings .title{
  padding-top: 10px;
}

.order-price-container {
  display: flex;
  justify-content: space-between;
}

.price {
  display: flex;
  align-items: center;
}

.price img {
  width: 50px;
  height: 50px;
}

.order {
  flex-grow: 1;
}

.order button {
  width: 90%;
}
</style>
