<template>
  <div class="pb-28">
    <div class="flex items-center gap-8 mb-16">
      <div class="text-4xl font-medium whitespace-nowrap">
        Most Popular Movies of Week
      </div>
      <hr class="w-4/5 mx-8" />
    </div>
    <div class="grid place-items-center w-full">
      <div class="grid justify-items-center grid-cols-4 auto-rows-auto gap-6">
          <MovieCard 
            v-for="movie in allMovies"
            :key="movie.id"
            :title="movie.title" 
            :raiting="movie.raiting"
            :genres="movie.genres"
            :img="movie.img"
            :id="movie.id"
          />
      </div>
    </div>
    <div class="flex justify-center mt-16">
        <router-link 
          :to="{name: 'Movies'}" 
          class="text-gray-200 bg-gray-900 px-6 py-2"
        >
          View all movies
        </router-link>  
    </div>
  </div>
</template>
<script>
import MovieCard from "./MovieCard.vue";
import movies from "/src/mocks/movies.js"
export default {
  components: {
    MovieCard,
  },
  setup() {
    const allMovies = movies

    return {allMovies}
  },
};
</script>