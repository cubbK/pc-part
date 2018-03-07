import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    toppings: {
      mushrooms: false,
      lettuce: false,
      olives: false
    },
    pizzas: {
      types: ['Sicilian', 'California', 'Neapolitan'],
      activePizza: 'Sicilian'
    }
  },
  mutations: {
    toggleTopping (state, payload) {
      state.toppings[payload.topping] = !state.toppings[payload.topping]
    }
  }
})

export default store
