import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
  {
    id: 100,
    title: "Survey 1",
    slug: "survey-1",
    status: "draft",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    image_url:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    created_at: "2022-01-01",
    updated_at: "2022-01-01",
    expires_date: "20223-01-01",
    questions: [
      {
        id: 100,
        type: "select",
        question: "From which country are you?",
        description: null,
        data: {
          options: [
            { uuid: "1", text: "United States" },
            { uuid: "2", text: "Canada" },
            { uuid: "3", text: "Mexico" },
            { uuid: "4", text: "United Kingdom" },
          ],
        },
        created_at: "2022-01-01",
        updated_at: "2022-01-01",
      },
      {
        id: 200,
        type: "checkbox",
        question: "From which country are you?",
        description: null,
        data: {
          options: [
            { uuid: "1", text: "United States" },
            { uuid: "2", text: "Canada" },
            { uuid: "3", text: "Mexico" },
            { uuid: "4", text: "United Kingdom" },
          ],
        },
        created_at: "2022-01-01",
        updated_at: "2022-01-01",
      },
      {
        id: 300,
        type: "radio",
        question: "From which country are you?",
        description: null,
        data: {
          options: [
            { uuid: "1", text: "United States" },
            { uuid: "2", text: "Canada" },
            { uuid: "3", text: "Mexico" },
            { uuid: "4", text: "United Kingdom" },
          ],
        },
        created_at: "2022-01-01",
        updated_at: "2022-01-01",
      },
      {
        id: 400,
        type: "text",
        question: "From which country are you?",
        description: null,
        data: {},
        created_at: "2022-01-01",
        updated_at: "2022-01-01",
      },
      {
        id: 400,
        type: "textarea",
        question: "From which country are you?",
        description: null,
        data: {},
        created_at: "2022-01-01",
        updated_at: "2022-01-01",
      },
    ],
  },
  {
    id: 200,
    title: "Survey 1",
    slug: "survey-1",
    status: "draft",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    image_url:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    created_at: "2022-01-01",
    updated_at: "2022-01-01",
    expires_date: "20223-01-01",
    questions: [
      {
        id: 100,
        type: "select",
        question: "From which country are you?",
        description: null,
        data: {
          options: [
            { uuid: "1", text: "United States" },
            { uuid: "2", text: "Canada" },
            { uuid: "3", text: "Mexico" },
            { uuid: "4", text: "United Kingdom" },
          ],
        },
        created_at: "2022-01-01",
        updated_at: "2022-01-01",
      },
      {
        id: 200,
        type: "checkbox",
        question: "From which country are you?",
        description: null,
        data: {
          options: [
            { uuid: "1", text: "United States" },
            { uuid: "2", text: "Canada" },
            { uuid: "3", text: "Mexico" },
            { uuid: "4", text: "United Kingdom" },
          ],
        },
        created_at: "2022-01-01",
        updated_at: "2022-01-01",
      },
      {
        id: 300,
        type: "radio",
        question: "From which country are you?",
        description: null,
        data: {
          options: [
            { uuid: "1", text: "United States" },
            { uuid: "2", text: "Canada" },
            { uuid: "3", text: "Mexico" },
            { uuid: "4", text: "United Kingdom" },
          ],
        },
        created_at: "2022-01-01",
        updated_at: "2022-01-01",
      },
      {
        id: 400,
        type: "text",
        question: "From which country are you?",
        description: null,
        data: {},
        created_at: "2022-01-01",
        updated_at: "2022-01-01",
      },
      {
        id: 400,
        type: "textarea",
        question: "From which country are you?",
        description: null,
        data: {},
        created_at: "2022-01-01",
        updated_at: "2022-01-01",
      },
    ],
  },
];

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    dashboard: {
      loading: false,
      data: {},
    },
    surveys: {
      loading: false,
      links: [],
      data: [],
    },
    currentSurvey: {
      data: {},
      loading: false,
    },
    // questionTypes: ["text", "radio"],
    questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
  },
  getters: {},
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
    async logout({ commit }) {
      return axiosClient.post("/logout").then((response) => {
        commit("logout");
        return response;
      });
    },
    async getSurveys({ commit }, { url = null } = {}) {
      commit("setSurveysLoading", true);
      // url = url || "/survey";
      // return axiosClient.get(url).then((res) => {
      commit("setSurveysLoading", false);
      commit("setSurveys", { data: tmpSurveys });
      return { data: tmpSurveys };
      // });
    },
  },
  mutations: {
    logout: (state) => {
      state.user = { data: {}, token: null };
      sessionStorage.clear();
    },
    setUser: (state, userData) => {
      state.user = { data: userData.user, token: userData.token };
      sessionStorage.setItem("TOKEN", userData.token);
    },
    setSurveysLoading: (state, loading) => {
      state.surveys.loading = loading;
    },
    setSurveys: (state, surveys) => {
      // state.surveys.links = surveys.meta.links;
      state.surveys.data = surveys.data;
    },
  },
  modules: {},
});

export default store;
