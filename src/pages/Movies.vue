<template>
    <div>
        <MoviesList
            :movies="allMovies"
        />
    </div>
</template>
<script>
import MoviesList from "../components/movies/MoviesList.vue";
import movies from '../mocks/movies.js'
export default {
    components: {
        MoviesList
    },
    setup() {
        const allMovies = movies
        return {allMovies}
    }
}
</script>