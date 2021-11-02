<template>
    <div class="flex gap-10 bg-[/srs/assets/1917.jpg]">
        <div>
            <div class="bg-gray-900 w-[30rem] h-[43rem] p-4 rounded-xl">
                <img :src="movie.img" alt="" class="w-full h-full">
            </div>
            <div class="flex gap-x-2 text-4xl justify-center mt-6">
                <StarOutline/>
                <StarOutline/>
                <StarOutline/>
                <StarOutline/>
                <StarOutline/>
            </div>
        </div>
        <div class="w-[54rem] flex flex-col gap-y-8">
            <div class="text-6xl font-bold">
                {{movie.title}}
            </div>
            <div>
                {{movie.description}}
            </div>
            <div class="text-4xl font-bold">
                About Movie:
            </div>
            <div class="text-2xl font-medium flex flex-col gap-y-4 text-gray-400 opacity-90">
                <div class="flex gap-x-4 items-end">
                    Country: 
                    <div class="text-lg font-normal">
                        {{movie.coutry}}
                    </div> 
                </div>
                <div class="flex gap-x-4 items-end">
                    Genres:
                    <ul class="flex text-lg font-normal gap-x-6 text-blue-400">
                        <li 
                            class="underline cursor-pointer"
                            v-for="(genre, index) in movie.genres"
                            :key="index"
                        >
                            {{genre}}
                        </li>
                    </ul>
                </div>
                <div class="flex gap-x-4 items-end">
                    Budget:
                    <div class="text-lg font-normal">
                        $6 000 000
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        Frame
        <div class="flex gap-4 flex-wrap justify-center">
            <img src="../assets/1.jfif" alt="" class="w-[36rem]">
            <img src="../assets/2.jfif" alt="" class="w-[36rem]">
            <img src="../assets/3.jfif" alt="" class="w-[36rem]">
            <img src="../assets/4.jfif" alt="" class="w-[36rem]">
            <img src="../assets/5.jfif" alt="" class="w-[36rem]">
        </div>
    </div>
</template>
<script>
import { StarOutline } from 'mdue'
import movies from '../mocks/movies.js'
export default {
    components: {
        StarOutline 
    },
    setup() {
        const movie = null

        return {movie}
    },
    created() {
        const movie = movies.find(movie => movie.id == this.$route.params.id)
        if (movie) {
            this.movie = movie
        }
        console.log(movie);
        console.log(movies);
    }
}
</script>