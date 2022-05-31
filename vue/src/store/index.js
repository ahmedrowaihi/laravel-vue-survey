import { createStore } from "vuex";
import axiosClient from "../axios";
const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
  },
  getters: {},
  mutations: {
    logout: (state) => {
      state.user = { data: {}, token: null };
      sessionStorage.clear();
    },
    setUser: (state, userData) => {
      state.user = { data: userData.user, token: userData.token };
      sessionStorage.setItem("TOKEN", userData.token);
    },
  },
  actions: {
    async register({ commit }, user) {
      return axiosClient.post("/register", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    async login({ commit }, user) {
      return axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
  },
  modules: {},
});

export default store;
