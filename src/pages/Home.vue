<template>
  <PopularMovies/>
  <PopularSerials/>
</template>
<script>
import MoviesList from "../components/movies/MoviesList.vue";
import PopularMovies from "../components/movies/PopularMovies.vue";
import PopularSerials from "../components/serials/PopularSerials.vue";
export default {
  components: {
    MoviesList,
    PopularMovies,
    PopularSerials
  },
};
</script>