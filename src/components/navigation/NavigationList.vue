<template>
    <div class="flex gap-x-10 dark:text-gray-300 text-gray-800">
        <NavigationItem path="Home" title="Home">
            <Home/>
        </NavigationItem>
        <NavigationItem path="Filter" title="Filter">
            <FormatListBulleted />
        </NavigationItem>
    </div>
</template>
<script>
import NavigationItem from './NavigationItem.vue'
import {Home, FormatListBulleted, Account, AccountPlus, MovieFilter, Heart } from 'mdue'
export default {
    name: 'NavigationList',
    components: {
        NavigationItem,
        Home,
        FormatListBulleted,
        Account,
        MovieFilter,
        Heart,
        AccountPlus
    }
}
</script>