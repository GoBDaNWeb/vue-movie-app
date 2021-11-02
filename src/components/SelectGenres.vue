<template>
    <div>
        <div class="flex gap-x-8 overflow-auto w-full py-2">
            <div 
                class="group py-1 px-10 bg-gray-850 rounded-full border-2 border-gray-900 hover:bg-gray-900 transition min-w-[130px] relative"
                v-for="filter in filterList"
                :key="filter.id"
            >
                {{filter.name}}
                <button 
                    class="absolute -top-2 -right-1 bg-gray-600 rounded-full border-4 border-gray-800 text-xl hover:bg-gray-700 group-hover:scale-100 transition scale-0"
                    @click="this.$emit('deleteFilter', {id: filter.id})"
                >
                    <Close/>
                </button>
            </div>
        </div>
    </div> 
</template>
<script>
import { Close } from 'mdue'
export default {
    components: {
        Close
    },
    props: {
        filterList: Array
    }
}
</script>