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
    setIsSideMenuOpen(state) {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    }
  },

  actions: {}
};
