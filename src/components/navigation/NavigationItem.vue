<template>
    <router-link :to="{ name: path }">
        <div class="text-4xl rounded group relative p-4">
            <slot></slot>
            <hr class="group-hover:opacity-100 group-hover:scale-x-[100%] transform 
            scale-x-0 transition duration-500 border-gray-900 dark:border-gray-300">
            <span class="group-hover:opacity-100 group-hover:translate-y-0 opacity-0 text-sm font-medium absolute whitespace-nowrap left-0 right-0 origin-center text-center transform translate-y-[-100%] transition duration-300">
                {{title}}
            </span>
        </div>
    </router-link>
    
</template>
<script>
export default {
    name: 'NavigationItem',
    props: {
        path: String,
        title: String
    }
}
</script>