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
      state.theme = state.theme === "dark" ? "" : "dark";
      html.classList.toggle("theme-dark", state.theme === "dark");
    },
    setIsSideMenuOpen(state) {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    }
  },

  actions: {}
};
