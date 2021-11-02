<template>
    <div>
        <Genres 
            :genresList="genresList"
            :filterList="filterList"
            @selectGenres="selectFilter"
        />  
        <div class="flex justify-center items-center mt-10">
            <input type="text" class=" bg-gray-850 border-gray-900 border-2 border-r-0 rounded-l-xl w-0 p-0 outline-none">
            <button class="bg-gray-850 text-2xl p-2 border-gray-900 border-2 border-l-0 rounded-r-xl">
                <Magnify/>
            </button>
        </div>
        <hr class="my-4">
        <div class="h-[52px] my-8">
            <SelectGenres
                :filterList="filterList"
                @deleteFilter="deleteFilter"
            />
        </div>
        <div 
            class="flex gap-8" 

        >
            <div
                v-for="movie in movieList"
                :key="movie.id"
            >
                <MovieCard
                    :img="movie.img"
                    :title="movie.title"
                    :raiting="movie.raiting"
                    :genres="movie.genres"
                    :id="movie.id"
                />
            </div>
        </div>
    </div>
</template>
<script>
import Genres from '../components/Genres.vue'
import SelectGenres from '../components/SelectGenres.vue'
import { ref } from '@vue/reactivity';
import {Magnify} from 'mdue'
import movies from '../mocks/movies'
import MovieCard from '../components/movies/MovieCard.vue'

export default {
    components: {
        Genres,
        SelectGenres,
        Magnify,
        MovieCard
    },
    setup() {
        const movieList = movies
        const filterList = ref([
        ])

        const genresList = [
            {
                id: 1,
                name: 'Triller'
            },
            {
                id: 2,
                name: 'Drama'
            },
            {
                id: 3,
                name: 'Crime'
            },
            {
                id: 4,
                name: 'Action'
            },
            {
                id: 5,
                name: 'History'
            },
            {
                id: 6,
                name: 'Science Fiction'
            },
            {
                id: 7,
                name: 'Adventure'
            },
        ]     
        
        const deleteFilter = (obj) => {
            const find = filterList.value.findIndex(item => {
                return item.id === obj.id
            })
            console.log(find);

            

            filterList.value.splice(find, 1)
        }

        const selectFilter = (obj) => {
            if (filterList.value.some(item => item.name === obj.name)) {
                return false
            } else {
                filterList.value.push({
                    id: obj.id,
                    name: obj.name
                })
            }
        }

        return {movieList, genresList, filterList, deleteFilter, selectFilter}
    }
}
</script>