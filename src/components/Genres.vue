<template>
  <div>
    <div class="flex gap-8 overflow-auto w-full">
        <button 
            class="py-1 px-6 bg-gray-850 rounded-full border-2 border-gray-900 hover:bg-gray-900 transition min-w-[130px]"
            :class="disableGenre(genre.id)"
            v-for="genre in genresList"
            :key="genre.id"
            @click="this.$emit('selectGenres', {
                id: genre.id,
                name: genre.name
            })"
        >
            {{genre.name}}
        </button>
    </div>
  </div>
</template>
<script>
export default {
    setup() {
    },
    props: {
        genresList: Array,
        filterList: Object
    },
    methods: {
        disableGenre(id) {
            const find = this.filterList.findIndex(item => {
                return item.id === id
            })
            if (find !== -1) {
                return {
                    'disabled': true
                }
            }
        }
    }
};
</script>
