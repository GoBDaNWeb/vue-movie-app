<template >
    <div class="w-full min-h-[16rem] bg-gray-900 rounded-xl opacity-90 dark:text-gray-200 p-4">
        <div class="flex gap-24 group">
            <img 
                src="../assets/gonzo-before-coffee.jpg" 
                alt=""
                class="w-60 h-60"
            >
            <div>
                <div class="mb-4">
                    <div class="text-2xl font-bold">
                        {{user.userName}}
                    </div>
                    <div class="text-xl font-medium">
                        {{user.firstName}}
                        {{user.lastName}}
                    </div>
                    {{user.email}}
                    <hr class="mt-4">
                </div>
                <div >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam cumque tenetur iste quibusdam ex excepturi fugiat eaque itaque et dicta quo possimus sit obcaecati aperiam unde deleniti quas deserunt eveniet quaerat soluta, enim delectus dolorem. Quaerat quae fugiat, aut quisquam, eius perferendis, totam dolorum suscipit aliquam doloremque ex repellendus?
                </div>
            </div> 
        </div>
    </div>
    <div class="w-full min-h-[16rem] bg-gray-900 rounded-xl opacity-90 dark:text-gray-200 p-4 mt-4 ">
        <div>Reviews</div>
        <div class="grid place-items-center">
            <MoviesList/>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import MoviesList from "../components/movies/MoviesList.vue";
export default {
  components: { 
      MoviesList 
      },
    setup() {

    },
    computed: {
        ...mapGetters( {user: 'getUser'})
    }
}
</script>