<template>
    <div class="grid place-items-center w-full">
        <form 
            class="flex flex-col gap-y-2 dark:bg-gray-850 p-10 rounded-3xl shadow-lg bg-gray-200 bg-opacity-60"
            @submit.prevent="handleSubmit"
        >
            <input 
                type="text" 
                placeholder="Enter your name"
                v-model="userName"
                class="auth"
            >
            <input 
                type="password" 
                placeholder="Enter your password"
                v-model="userPassword"
                class="auth"
            >
            <div 
                v-if="error" 
                class="text-red-600 text-center text-sm font-bold"
            >
                {{error}}
            </div>
            <button 
                class="dark:bg-gray-950 dark:text-gray-200 py-2 rounded-xl mt-4 dark:hover:bg-gray-900 bg-gray-300 hover:bg-gray-200 transition"
                :disabled="!userName || !userPassword"
            >
                Log In
            </button>
            <span class="text-center dark:text-gray-200 flex justify-center gap-x-2">
                First time here?
                <div class="text-blue-400 font-medium">
                    <router-link to="/register">
                        Sign Up!
                    </router-link>
                </div>
            </span>
        </form>
        
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
export default {
    setup() {
        const userName = ref('')
        const userPassword = ref('')
        const error = ref('')

        const store = useStore()
        const router = useRouter()

        const handleSubmit = async () => {
            
            const res = await store.dispatch('login', {
                userName: userName.value, 
                userPassword: userPassword.value
            })
            
            if (res) {
                error.value = ''
                router.push('/')
            } else {
                error.value = 'Wrong Login or Password'
            }
        }

        return {userName, userPassword, error, handleSubmit}
    }
}
</script>