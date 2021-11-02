const auth = {
    state: {
        isAuth: false,
        user: null
    },
    mutations: {
        LOGIN_SUCCESS(state, data) {
            state.isAuth = true
            state.user = {
                userName:  data.userName,
                firstName: 'Ivan',
                lastName: 'Ivanov',
                email: 'admin@email.com'
            }
        },
        LOGIN_FAIL(state) {
            state.isAuth = false
            state.user = null
        }
    },
    actions: {
        login({commit}, formData) {
            if (formData.userName === 'Admin' && formData.userPassword ==='admin123456') {
                commit('LOGIN_SUCCESS', {userName: formData.userName})
               return true
            } else {
                commit('LOGIN_FAIL')
                return false
            }
        }
    },
    getters: {
        getAuth: (state) => state.isAuth,
        getUser: (state) => state.user
    }
}

export default auth