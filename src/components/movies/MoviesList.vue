<template>
  <div
    class="
      grid justify-items-center grid-cols-4 auto-rows-auto  gap-6
    "
  >
    <MovieCard
      v-for="movie in movies"
      :key="movie.id"
      :id="movie.id"
      :img="movie.img"
      :title="movie.title"
      :raiting="movie.raiting"
      :genres="movie.genres"
    />
  </div>
</template>
<script>
import MovieCard from "./MovieCard.vue";
export default {
  components: {
    MovieCard,
  },
  props: {
    movies: Array
  }
};
</script>