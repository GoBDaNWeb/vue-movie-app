import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDXAQwhCHb6kBVGE_vjPnssI5dT1mVBxLE",
    authDomain: "vue-movieshome.firebaseapp.com",
    projectId: "vue-movieshome",
    storageBucket: "vue-movieshome.appspot.com",
    messagingSenderId: "156362728659",
    appId: "1:156362728659:web:ab61892336e36d5ec02026",
    measurementId: "G-64QL0GNQZX"
};

initializeApp(firebaseConfig);

router.beforeEach((to, from, next) => {
    if (!to.meta.isPublic && !store.getters.getAuth) next({name: 'Login'})
    else if (to.meta.isPublic && store.getters.getAuth) next({name: 'Home'})
    else next()
})

createApp(App)
.use(store)
.use(router)
.mount('#app')
