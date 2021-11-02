<template>
     <div class="dark:bg-gray-850 p-4 rounded-xl bg-gray-200 bg-opacity-60 shadow-md select-none max-w-[366px] min-h-[557px]">
        <div>
            <div class="bg-red-200 relative group">
                <img src="../../assets/kos.jpg" alt="" class="w-full max-h-[30rem]">
                <div class="group-hover:opacity-100 opacity-0 transition">
                    <Heart 
                        class="text-4xl absolute top-2 left-2 cursor-pointer hover:opacity-60 transition"
                    />
                </div>
                <div class="absolute bg-yellow-500 w-20 h-10 text-white -top-1 right-5 rounded-b-xl text-center pt-2 font-bold bg-opacity-80 ">
                    9/10
                </div>
            </div>
        </div>
        <div class="text-center font-bold text-2xl mt-4">
            Breaking Bad
        </div>
        <div>
            <ul class="flex gap-x-4 justify-center mt-6">
                <li>Drama</li>
                <li>Crime</li>
                <li>Triller</li>
                <li>Action</li>
            </ul>
        </div>
    </div>
</template>
<script>
import {Heart} from 'mdue'
export default {
    components: {
        Heart
    }
}
</script>