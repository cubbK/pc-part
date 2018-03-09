import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    toppings: {
      mushrooms: false,
      lettuce: false,
      olives: false
    },
    sizes: [
      {
        label: 'small',
        price: -5
      },
      {
        label: 'medium',
        price: 0
      },
      {
        label: 'huge',
        price: 5
      }
    ],
    toppingPrice: 2,
    pizzas: {
      types: [{
        label: 'Sicilian',
        price: 15
      },
      {
        label: 'California',
        price: 19
      },
      {
        label: 'Neapolitan',
        price: 23
      }],
      activePizza: 'Sicilian'
    }
  },
  mutations: {
    toggleTopping (state, payload) {
      state.toppings[payload.topping] = !state.toppings[payload.topping]
    },
    setActivePizza (state, payload) {
      state.pizzas.activePizza = payload.activePizza
    }
  }
})

export default store
