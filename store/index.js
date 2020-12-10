export const state = () => ({
  cartItems: null
});
export const actions = {
  getItems({commit}){
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    commit('addItem',cartItems)
  }
}
export const mutations = {
  addItem(state, payload) {
    state.cartItems = payload;
  }
};
