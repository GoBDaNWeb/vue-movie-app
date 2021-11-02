<template>
    <div class="text-3xl select-none min-h-screen w-full grid place-items-center backdrop-filter backdrop-blur-sm z-10 fixed">
        <div>
            You are not logged right now, please 
            <span class="text-blue-400 font-medium">
                <router-link to="/login">
                    sign in
                </router-link>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>