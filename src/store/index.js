import {createStore} from 'vuex'
import theme from './modules/theme'
import auth from './modules/auth'
import movies from './modules/movies'

const store = createStore({
    modules: {
        theme,
        auth,
        movies
    }
})

export default store