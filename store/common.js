export default {
  state() {
    return {
      theme: "dark",
      isSideMenuOpen: false
    };
  },

  getters: {
    theme(state) {
      return state.theme;
    },
    isSideMenuOpen() {
      return state.isSideMenuOpen;
    }
  },

  mutations: {
    setTheme(state) {
      const html = document.querySelector("html");
      html.classList.toggle("theme-dark", state.theme === "dark");
      state.theme = state.theme === "dark" ? "" : "dark";
    },
    setIsSideMenuOpen(state) {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    }
  },

  actions: {}
};
