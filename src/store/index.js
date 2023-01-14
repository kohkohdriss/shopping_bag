import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
  },
  getters: {},
  mutations: {
    load(state, products) {
      state.products = products;
    },
  },
  actions: {
    loadProducts({ commit }) {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        commit("load", response.data);
      });
    },
  },
  modules: {},
});
