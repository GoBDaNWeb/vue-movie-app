<template>
  <div class="pb-28">
    <div class="flex items-center gap-8 mb-16">
      <div class="text-4xl text-gray-200 font-medium whitespace-nowrap">
        Most Popular Serials
      </div>
      <hr class="w-4/5 mx-8" />
    </div>
    <div class="grid place-items-start dark:text-gray-300 w-full">
      <div class="grid justify-items-center grid-cols-4 auto-rows-auto gap-6">
        <SerialItem />
        <SerialItem />
        <SerialItem />
        <SerialItem />
      </div>
    </div>
    <div class="flex justify-center mt-16">
        <button class="text-gray-200 bg-gray-900 px-6 py-2">
            View all serials
        </button>
    </div>
  </div>
</template>
<script>
import SerialItem from "./SerialCard.vue";
export default {
  components: {
    SerialItem,
  },
};
</script>