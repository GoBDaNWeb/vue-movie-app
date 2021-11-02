<template>
  <div :class="theme">
    <div>
       <Header v-if="auth"/>       
      <div class="dark:bg-gray-800 min-h-screen w-full">
        <div class="pt-40 mx-16 dark:text-gray-300">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore, mapGetters } from 'vuex';
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
  setup() {
  },
  beforeMount() {
    const store = useStore()
    store.dispatch('initTheme')
  },
  computed: {
    ...mapGetters( {theme: 'getTheme', auth: 'getAuth'})
  }
};
</script>