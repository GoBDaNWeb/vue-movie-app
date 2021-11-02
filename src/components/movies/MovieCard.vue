<template>
     <div 
        class="group dark:bg-gray-850 p-4 rounded-xl bg-gray-200 bg-opacity-60 shadow-md select-none max-w-[366px] max-h-[610px] transform hover:scale-[1.02] transition"
     >
        <div class="group-hover:opacity-100 opacity-0 transition text-3xl text-center absolute top-2 left-2 cursor-pointer transition bg-gray-850 rounded-full p-2 z-10">
            <DotsHorizontalCircle 
                class="hover:opacity-90 transition"
                @click="handleTogglerOptions"
            />
        </div>
        <div class="flex text-3xl absolute z-20 p-2 bg-gray-850 top-12 left-0">
            <Heart/>
            <Clock/>
        </div>
        <div 
            class="bg-red-200 relative group max-h-[480px] max-w-[328px] cursor-pointer"
            @click="$router.push({name: 'Movie', params: {id: id}})"
        >
            <img 
                :src="img" 
                class="h-[480px] w-[328px]"
            >
            <div class="absolute bg-yellow-500 w-20 h-10 text-white -top-1 right-5 rounded-b-xl text-center pt-2 font-bold bg-opacity-80 ">
                {{raiting}}
            </div>
            <div class="absolute bottom-0 left-45% right-45% bg-black bg-opacity-70 w-full h-1/5 text-center pt-6 text-xl font-medium scale-0 group-hover:scale-100 transition ">
                Go To Movie
            </div>
        </div>
        <div class="text-center font-bold text-2xl mt-4">
           {{title}}
        </div>
        <div>
            <ul class="flex gap-x-4 justify-center mt-6">
                <li v-for="(genre, index) in genres" :key="index">
                    {{genre}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {Heart, Clock , DotsHorizontalCircle} from 'mdue'
import { ref } from '@vue/reactivity'
export default {
    components: {
        Heart, Clock, DotsHorizontalCircle
    },
    setup() {
        const toggleOptionsMovie = ref(false)

        const handleTogglerOptions = () => {
            console.log(toggleOptionsMovie);
            toggleOptionsMovie.value = !toggleOptionsMovie.value
        }

        return {toggleOptionsMovie, handleTogglerOptions}
    },
    props: {
        id: Number,
        title: String,
        raiting: String,
        genres: Array,
        img: String
    }
}
</script>