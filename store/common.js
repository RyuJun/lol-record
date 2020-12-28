export default {
  state() {
    return {
      theme: 'dark',
      isSideMenuOpen: false,
      sommoner: null,
      champions: null,
    };
  },

  getters: {
    theme(state) {
      return state.theme;
    },
    isSideMenuOpen() {
      return state.isSideMenuOpen;
    },
    sommoner() {
      return state.sommoner;
    },
    champions() {
      return state.champions;
    },
  },

  mutations: {
    setTheme(state) {
      const html = document.querySelector('html');
      state.theme = state.theme === 'dark' ? '' : 'dark';
      html.classList.toggle('theme-dark', state.theme === 'dark');
    },
    setIsSideMenuOpen(state) {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    },
    setSommoner(state, sommoner) {
      state.sommoner = sommoner;
    },
    setChampions(state, champions) {
      state.champions = champions;
    },
  },

  actions: {},
};
