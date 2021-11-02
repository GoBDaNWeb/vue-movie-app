const theme = {
    state: {
        theme: {}
    },
    mutations: {
        SET_THEME(state, value) {
            state.theme = value
            localStorage.theme = value
        }
    },
    actions: {
        toggleTheme({commit}) {
            commit('SET_THEME', localStorage.theme === 'light' ? 'dark' : 'light')
        },
        initTheme({commit}) {
            commit('SET_THEME', localStorage.theme ? localStorage.theme : 'light')
        }
    },
    getters: {
        getTheme: (state) => state.theme 
    }
}

export default theme