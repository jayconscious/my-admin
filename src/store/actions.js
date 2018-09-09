const actions = {
  operateWithDelay ({commit}) {
    setTimeout(() => {
      const str = Math.random() > 0.5 ? 'increment' : 'decrement'
      commit(str)
    }, 2000)
  }
}
export default actions
