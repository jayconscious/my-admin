// 初始的状态
const state = {
  items: [],
  checkoutStatus: null
}

// getters
const getters = {
  getNormalItems: (state, getters, rootState) => {
    return state.items.filter((item) => {
      return item !== undefined
    })
  }
//   cartProducts: (state, getters, rootState) => {
//     return state.items.map(({ id, quantity }) => {
//       const product = rootState.products.all.find(product => product.id === id)
//       return {
//         title: product.title,
//         price: product.price,
//         quantity
//       }
//     })
//   },

//   cartTotalPrice: (state, getters) => {
//     return getters.cartProducts.reduce((total, product) => {
//       return total + product.price * product.quantity
//     }, 0)
//   }
}

// actions
const actions = {
  // 获取列表
  initList ({ commit, state }, products) {
    setTimeout(() => {
      commit()
    }, 1000)
  }

//   checkout ({ commit, state }, products) {
//     const savedCartItems = [...state.items]
//     commit('setCheckoutStatus', null)
//     // empty cart
//     commit('setCartItems', { items: [] })
//     shop.buyProducts(
//       products,
//       () => commit('setCheckoutStatus', 'successful'),
//       () => {
//         commit('setCheckoutStatus', 'failed')
//         // rollback to the cart saved before sending the request
//         commit('setCartItems', { items: savedCartItems })
//       }
//     )
//   },

//   addProductToCart ({ state, commit }, product) {
//     commit('setCheckoutStatus', null)
//     if (product.inventory > 0) {
//       const cartItem = state.items.find(item => item.id === product.id)
//       if (!cartItem) {
//         commit('pushProductToCart', { id: product.id })
//       } else {
//         commit('incrementItemQuantity', cartItem)
//       }
//       // remove 1 item from stock
//       commit('products/decrementProductInventory', { id: product.id }, { root: true })
//     }
//   }
}

// mutations
const mutations = {
  initList (state, { data }) {
    if (Object.prototype.toString.call(data).splice(8, -1) === 'Array' && data.length > 0) {
      state.items = data
    } else {
      state.items = [{
        name: 'zzy',
        hobby: 'coding'
      }, {
        name: 'liut',
        hobby: 'boring'
      },
      {
        name: 'dahai',
        hobby: 'blue'
      }]
    }
  }

//   pushProductToCart (state, { id }) {
//     state.items.push({
//       id,
//       quantity: 1
//     })
//   },

//   incrementItemQuantity (state, { id }) {
//     const cartItem = state.items.find(item => item.id === id)
//     cartItem.quantity++
//   },

//   setCartItems (state, { items }) {
//     state.items = items
//   },

//   setCheckoutStatus (state, status) {
//     state.checkoutStatus = status
//   }
}

export default {
  state,
  getters,
  actions,
  mutations
}
