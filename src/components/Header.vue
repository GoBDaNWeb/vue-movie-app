<template>
<div class="fixed w-full z-50 bg">
    <div class="flex justify-between mx-12 items-center p-2">
        <div 
            class="text-7xl text-gray-600 flex items-center select-none dark:text-gray-200"
        >
            <CameraIris/>
            <span class="text-3xl font-black">
                <span class="text-6xl text-yellow-500">M</span>oviesHome
            </span>
        </div>
        <NavigationList/>
        <div class="text-3xl flex items-center gap-x-4 text-gray-600 dark:text-gray-300">
            <div class="text-red-500">
                <Heart/>
            </div>
            <div class="text-4xl">
                <NavigationItem path="Profile" title="My Profile">
                    <Account />
                </NavigationItem>
            </div>
            <button class="bg-gray-950 p-2 rounded-full" @click="toggleTheme">
                <WhiteBalanceSunny/>
            </button>
        </div>
    </div>
</div>
</template>
<script>
import NavigationList from './navigation/NavigationList.vue'
import NavigationItem from './navigation/NavigationItem.vue'
import {useStore} from 'vuex'
import {Account, AccountPlus, CameraIris, Heart, WhiteBalanceSunny } from 'mdue'
export default {
    name: 'Header',
    components: {
        NavigationList,
        NavigationItem,
        Account,
        CameraIris,
        Heart,
        AccountPlus,
        WhiteBalanceSunny
    },
    setup() {
        const store = useStore()
        const toggleTheme = () => {
            store.dispatch('toggleTheme')
        }

        return { toggleTheme}
    },
    computed: {

    }
}
</script>